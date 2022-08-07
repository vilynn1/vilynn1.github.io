///////////////////////////////////////////////////////////////////////////
// Copyright © 2018 Robert Scheitlin. All Rights Reserved.
///////////////////////////////////////////////////////////////////////////

define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/_base/array',
  'jimu/BaseWidget',
  'jimu/LayerStructure',
  'jimu/WidgetManager',
  'dojo/query',
  'dojo/dom-class',
  'dojo/dom',
  'dijit/registry',
  'dojo/_base/html',
  'dojo/topic',
  'dojo/on'
],
function(
    declare,
    lang,
    array,
    BaseWidget,
    LayerStructure,
    WidgetManager,
    query,
    domClass,
    dom,
    registry,
    html,
    topic,
    on
  ) {
    var clazz = declare([BaseWidget], {
      name: 'LayerToggleButton',
      baseClass: 'widget-layertogglebutton',
      isToggling: false,
      layerStructure: null,
      toggleLayerIds: null,
      parentContainer: null,
      originalTitle: null,
      isExclusive: false,
      zoomToLayer: false,
      isOnScreenPlaceHolder: false,

      startup: function() {
        this.inherited(arguments);
        this.layerStructure  = LayerStructure.getInstance();
        this.setToggleLayer();
        var toggleBtnArr = query("div[data-widget-name='LayerToggleButton']");
        toggleBtnArr.forEach(lang.hitch(this, function(node){
          var parentWid = html.getAttr(node, 'widgetId');
          var chkTitle;
          if(!parentWid){
            var parentSid = html.getAttr(node, 'settingId');
            if(parentSid === this.id){
              this.parentContainer = node;
              chkTitle = html.getAttr(node, 'title');
              this.originalTitle = chkTitle.replace(/(\: Off)|(\: On)/,'');
            }
          }else{
            if(this.appConfig.theme.name === 'LaunchpadTheme'){
              var iconNode = this.getAnchorbarControllerNode(parentWid);
              this.parentContainer = iconNode;
              chkTitle = iconNode.tooltipDialog.content;
              this.originalTitle = chkTitle.replace(/(\: Off)|(\: On)/,'');
              return;
            }
            var widg = registry.byId(parentWid);
            if(widg && widg.widget && widg.widget.config === this.config){
              this.parentContainer = node;
              chkTitle = html.getAttr(node, 'title');
              this.originalTitle = chkTitle.replace(/(\: Off)|(\: On)/,'');
            }
          }
        }));
      },

      getAnchorbarControllerNode: function(id) {
        this.abc = WidgetManager.getInstance().getWidgetsByName("AnchorBarController")[0];
        return this.abc._getIconItemById(id);
      },

      setToggleLayer: function() {
        this.toggleLayerIds = [];
        Object.getOwnPropertyNames(this.config.layerOptions).forEach(lang.hitch(this, function(val) {
          if(!this.config.hasOwnProperty("zoomTo")){
            this.zoomToLayer = false;
          }else{
            if(this.config.zoomTo){
              this.zoomToLayer = true;
            }
          }
          if(!this.config.hasOwnProperty("isExclusive")){
            this.isExclusive = false;
          }else{
            if(this.config.isExclusive){
              this.isExclusive = true;
            }
          }
          if(this.config.layerOptions[val].display){
            this.toggleLayerIds.push(val);
          }
        }));
      },

      onLaunchpadOpen: function(){
        var lObjs = [];
        array.map(this.toggleLayerIds, lang.hitch(this, function(id){
          var lyrNode = this.layerStructure.getNodeById(id);
          lObjs.push(lyrNode);
        }));
        var bmLyrObjs = this.layerStructure.getBasemapLayerObjects();
        var bmlyrIds = [];
        array.map(bmLyrObjs, lang.hitch(this, function(bmObj, index) {
          bmlyrIds.push(bmObj.id);
        }));
        if (!lObjs[0].isToggledOn() && this.isExclusive) {
          this.layerStructure.traversal(lang.hitch(this, function(layerNode) {
            if(bmlyrIds && bmlyrIds.indexOf(layerNode.id)<0){
              layerNode.hide();
            }
          }));
        }
        if (this.isExclusive) {
          var toggleBtnArr = query("div[data-widget-name='LayerToggleButton']");
          toggleBtnArr.forEach(lang.hitch(this, function(node) {
            var parentWid = html.getAttr(node, 'widgetId');
            if (parentWid) {
              if (this.id !== node.id) {
                this.closeWidget(parentWid);
                return
              }
            }
          }));
        }
        array.map(lObjs, lang.hitch(this, function(lObj, index){
          onOff = (lObj.isToggledOn()) ? 'On' : 'Off';
          if (lObj._layerInfo && lObj._layerInfo.layerObject) {
            this.setBusyIndicator(lObj);
          }

          if(this.parentContainer && this.originalTitle){
            html.setAttr(this.parentContainer.tooltipDialog, 'content', this.originalTitle + ': ' + onOff);
          }
          if(onOff === 'Off' && index === 0 && lObj._layerInfo && lObj._layerInfo.layerObject && lObj._layerInfo.layerObject.fullExtent){
            if(this.zoomToLayer){
              this.map.setExtent(lObj._layerInfo.layerObject.fullExtent.expand(1.2));
            }
          }
          if(!lObj.isVisible()){
            lObj.show();
            topic.publish('toggleChanged', lObj._layerInfo._visible, lObj);
          }
        }));
      },

      closeWidget: function(id) {
        this.abc = WidgetManager.getInstance().getWidgetsByName("AnchorBarController")[0];
        this.abc.widgetManager.closeWidget(id);
        this.abc._removeFromOpenedIds(id);
      },

      onLaunchpadClose: function(){
        var lObjs = [];
        array.map(this.toggleLayerIds, lang.hitch(this, function(id){
          var lyrNode = this.layerStructure.getNodeById(id);
          lObjs.push(lyrNode);
        }));
        var bmLyrObjs = this.layerStructure.getBasemapLayerObjects();
        var bmlyrIds = [];
        array.map(bmLyrObjs, lang.hitch(this, function(bmObj, index) {
          bmlyrIds.push(bmObj.id);
        }));
        if (!lObjs[0].isToggledOn() && this.isExclusive) {
          this.layerStructure.traversal(lang.hitch(this, function(layerNode) {
            if(bmlyrIds && bmlyrIds.indexOf(layerNode.id)<0){
              layerNode.hide();
            }
          }));
        }
        array.map(lObjs, lang.hitch(this, function(lObj, index){
          onOff = (lObj.isToggledOn()) ? 'On' : 'Off';
          if (lObj._layerInfo && lObj._layerInfo.layerObject) {
            this.setBusyIndicator(lObj);
          }
          if(this.parentContainer && this.originalTitle){
            html.setAttr(this.parentContainer.tooltipDialog, 'content', this.originalTitle + ': ' + onOff);
          }
          if(lObj.isVisible()){
            lObj.hide();
            topic.publish('toggleChanged', lObj._layerInfo._visible, lObj);
          }
        }));
      },

      setBusyIndicator: function (lObj) {
        var pContImg, widg;
        if(this.appConfig.theme.name === 'LaunchpadTheme'){
          pContImg = this.parentContainer.iconItemNode.children[0];
        }else{
          pContImg = this.parentContainer.children[0];
        }

        if(domClass.contains(this.parentContainer, 'jimu-widget-onscreen-icon')){
          widg = registry.byId(this.parentContainer.id);
          this.isOnScreenPlaceHolder = true;
        }else{
          this.isOnScreenPlaceHolder = false;
        }

        if (lObj._layerInfo.parentLayerInfo) {
          if(!lObj._layerInfo.parentLayerInfo.layerObject.empty){
            on.once(lObj._layerInfo.parentLayerInfo.layerObject, "update-start", lang.hitch(this, function() {
              if(this.isOnScreenPlaceHolder){
                setTimeout(lang.hitch(this, function() {
                  widg._showLoading();
                }), 10);
              }else{
                html.setAttr(pContImg, 'src', 'jimu.js/images/loading_circle.gif');
              }
            }));
            on.once(lObj._layerInfo.parentLayerInfo.layerObject, "update-end", lang.hitch(this, function() {
              if(this.isOnScreenPlaceHolder){
                setTimeout(lang.hitch(this, function() {
                  widg._hideLoading();
                }), 10);
              }else{
                html.setAttr(pContImg, 'src', this.icon);
              }
            }));
          }
        } else {
          on.once(lObj._layerInfo.layerObject, "update-start", lang.hitch(this, function() {
            if(this.isOnScreenPlaceHolder){
              setTimeout(lang.hitch(this, function() {
                widg._showLoading();
              }), 10);
            }else{
              html.setAttr(pContImg, 'src', 'jimu.js/images/loading_circle.gif');
            }
          }));
          on.once(lObj._layerInfo.layerObject, "update-end", lang.hitch(this, function() {
            if(this.isOnScreenPlaceHolder){
              setTimeout(lang.hitch(this, function() {
                widg._hideLoading();
              }), 10);
            }else{
              html.setAttr(pContImg, 'src', this.icon);
            }
          }));
        }
      },

      onOpen: function() {
        this.setToggleLayer();
        if(this.appConfig.theme.name === 'LaunchpadTheme'){
          this.onLaunchpadOpen();
          return;
        }
        var lObjs = [];
        array.map(this.toggleLayerIds, lang.hitch(this, function(id){
          var lyrNode = this.layerStructure.getNodeById(id);
          lObjs.push(lyrNode);
        }));
        if (!this.isToggling) {
          this.isToggling = true;
          this.toggleLayer(lObjs);
          setTimeout(lang.hitch(this, function() {
            this.isToggling = false;
            WidgetManager.getInstance().closeWidget(this);
            if(lObjs[0].isToggledOn()){
              domClass.add(this.parentContainer, "jimu-state-selected");
            }else{
              domClass.remove(this.parentContainer, "jimu-state-selected");
            }
          }), 300);
        }
      },

      onClose: function(){
        if(this.appConfig.theme.name === 'LaunchpadTheme'){
          this.onLaunchpadClose();
        }
      },

      toggleLayer: function(lObjs) {
        var bmLyrObjs = this.layerStructure.getBasemapLayerObjects();
        var bmlyrIds = [];
        array.map(bmLyrObjs, lang.hitch(this, function(bmObj, index) {
          bmlyrIds.push(bmObj.id);
        }));
        if (!lObjs[0].isToggledOn() && this.isExclusive) {
          this.layerStructure.traversal(lang.hitch(this, function(layerNode) {
            if(bmlyrIds && bmlyrIds.indexOf(layerNode.id)<0){
              layerNode.hide();
            }
          }));
        }
        var onOff;
        array.map(lObjs, lang.hitch(this, function(lObj, index) {
          onOff = (lObj.isToggledOn()) ? 'On' : 'Off';
          if (lObj._layerInfo && lObj._layerInfo.layerObject) {
            this.setBusyIndicator(lObj);
          }

          if (this.parentContainer && this.originalTitle) {
            html.setAttr(this.parentContainer, 'title', this.originalTitle + ': ' + onOff);
          }
          if (onOff === 'Off' && index === 0 && lObj._layerInfo && lObj._layerInfo.layerObject && lObj._layerInfo.layerObject.fullExtent) {
            if (this.zoomToLayer) {
              this.map.setExtent(lObj._layerInfo.layerObject.fullExtent.expand(1.2));
            }
          }
          lObj.toggle();
          topic.publish('toggleChanged', lObj._layerInfo._visible, lObj);
          if (!lObj.isVisible() && lObj.isToggledOn()) {
            lObj.show();
          }
        }));
      }
    });
return clazz;
});
