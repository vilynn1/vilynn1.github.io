// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:builder/plugins/widget-config/WidgetChoosePage.html":'\x3cdiv class\x3d"widget-choose-page hide-custom-widgets"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"officialSection" class\x3d"official-section"\x3e\r\n    \x3cdiv class\x3d"section search" data-dojo-attach-point\x3d"searchSectionNode"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"searchInputNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"list widget-list" data-dojo-attach-point\x3d"widgetListNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"customSection" class\x3d"custom-section"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"customSearchInputNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/topic dojo/on dojo/Deferred dojo/promise/all dojo/query dojo/NodeList-dom dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./WidgetChoosePage.html jimu/dijit/Search jimu/WidgetManager jimu/dijit/LoadingShelter jimu/dijit/Message jimu/dijit/TabContainer3 jimu/utils jimu/portalUtils jimu/portalUrlUtils builder/serviceUtils esri/lang ./CustomWidgets ./customWidgetUtils".split(" "),function(x,f,e,l,y,n,u,p,g,I,z,A,B,v,C,
D,q,E,k,J,F,r,G,H,w){return x([z,A],{templateString:B,showCustomWidgets:!1,postMixInProperties:function(){this.widgetManager=C.getInstance()},startup:function(){this.inherited(arguments);F.isOnline(window.portalUrl)?window.appInfo.isRunInPortal?this._tryToShowCustomWidgetsForOnline():this.showCustomWidgets=!1:this.showCustomWidgets=window.appInfo.isRunInPortal?window.queryObject.hideCustomWidgets?!1:!0:!1;this.tab=new E({tabs:[{title:this.nls.officialWidgets,content:this.officialSection},{title:this.nls.customWidgets,
content:this.customSection}]});this.tab.placeAt(this.domNode);this.searchDijit1=new v({placeholder:this.nls.widgetSearchHint,onSearch:f.hitch(this,this._onFilterDefaultWidget),searchWhenInput:!0},this.searchInputNode);this._getWidgets();this.own(n(window,"resize",f.hitch(this,this.resize)));setTimeout(f.hitch(this,function(){this.resize()}),100);this.loading=new D({hidden:!0});this.loading.placeAt(this.domNode);this.loading.startup();setTimeout(f.hitch(this,function(){this.searchDijit1.inputSearch.focus()}),
60);this.showCustomWidgets&&this._showCustomWidgetsTab()},_tryToShowCustomWidgetsForOnline:function(){p([w.querySubscribedWidgets(),w.queryProvidedWidgets()]).then(f.hitch(this,function(a){var b=a[1];if(0<a[0].length||0<b.length)this.showCustomWidgets=!0,this._showCustomWidgetsTab()}))},_showCustomWidgetsTab:function(){e.removeClass(this.domNode,"hide-custom-widgets");this.searchDijit2=new v({placeholder:this.nls.widgetSearchHint,onChange:f.hitch(this,this._onFilterCustomWidget),onSearch:f.hitch(this,
this._onSearchCustomWidget),searchWhenInput:!1},this.customSearchInputNode);this.allCustomWidgets=new H({portalUrl:window.portalUrl,fromNode:this.fromNode,widgetDomNode:this.domNode,nls:this.nls});this.allCustomWidgets.placeAt(this.customSection);this.own(n(this.tab,"tabChanged",f.hitch(this,function(a){a===this.nls.customWidgets?(this.searchDijit2.inputSearch.focus(),this.allCustomWidgets.queried||(this.allCustomWidgets.queried=!0,this.allCustomWidgets.queryWidgets())):this.searchDijit1.inputSearch.focus()})));
this.resize()},_onFilterCustomWidget:function(a){this.allCustomWidgets.filterLocally(function(b){return b.title&&0<=b.title.toUpperCase().indexOf(a.toUpperCase())})},_onSearchCustomWidget:function(a){this.allCustomWidgets.queryWidgets(a)},_onFilterDefaultWidget:function(a){var b=""===a?this.allWidgets:l.filter(this.allWidgets,function(c){if(-1<c.label.toUpperCase().indexOf(a.toUpperCase()))return!0});this._createWidgetNodes(b)},resize:function(){var a=g(".widget-choose-page").closest(".jimu-popup .content.content-absolute");
e.setStyle(a[0],{overflowY:"hidden"});a=e.getContentBox(this.domNode).h;var b=g("\x3e div",this.tab.domNode),c=g("div.official-section",this.tab.domNode)[0].parentNode;c=b.indexOf(c);var d=0,h=0;b.slice(0,c).forEach(function(m){d+=e.getContentBox(m).h});h=a-60-d;this.showCustomWidgets&&(h-=40);e.setStyle(this.searchSectionNode,{height:a+"px"});e.setStyle(this.widgetListNode,{height:h+"px"})},setAppConfig:function(a){this.appConfig=a},_getWidgets:function(){var a={};this.appConfig.map["2D"]&&(a.support2D=
!0);this.appConfig.map["3D"]&&(a.support3D=!0);this.appConfig.map["2D"]&&this.appConfig.map["3D"]&&(a.support2D=!0,a.support3D=!0);a.platform=window.stemappInfo.appType;this.options.includeOffPanel||(a["properties.inPanel"]=!0);r.searchWidgets(a).then(f.hitch(this,function(b){b.success?(this.allWidgets=this._filterSingletonWidgets(b.widgets),this._createWidgetNodes(this.allWidgets)):console.log(b.message)}))},_filterSingletonWidgets:function(a){return l.filter(a,function(b){return!1===b.properties.supportMultiInstance&&
this._checkWidgetIsInAppConfig(this.appConfig,b.name)?!1:!0},this)},_checkWidgetIsInAppConfig:function(a,b){var c=[];0===k.getControllerWidgets(a).length?a.visitElement(f.hitch(this,function(d){d.isOnScreen&&d.name===b&&c.push(d)})):c=a.getConfigElementsByName(b);return 0<c.length},_createWidgetNodes:function(a){e.empty(this.widgetListNode);l.forEach(a,function(b){this._createWidgetNode(b)},this)},_processLabelForRTL:function(a){if(window.isRTL&&a&&"undefined"!==typeof a.indexOf){var b=a.indexOf("("),
c=a.indexOf(")");return-1<b&&-1<c&&parseInt(c,10)>parseInt(b,10)?a.replace(/\(/gi,"\x26rlm;("):a}return a},_createWidgetNode:function(a){var b=e.create("div",{"class":"widget-node","data-widget-name":a.name},this.widgetListNode);var c=e.create("div",{"class":"box"},b);e.create("div",{"class":"box-selected"},b);var d=e.create("img",{"class":"icon",src:a.icon},c);window.isRTL&&a.properties&&a.properties.mirrorIconForRTL&&e.addClass(d,"jimu-flipx");e.create("div",{"class":"label",innerHTML:this._processLabelForRTL(k.stripHTML(a.label)),
title:a.label},b);b.setting={name:a.name,label:a.label,version:a.version,closeable:"removeableWidgetOnScreen"===this.fromList?!0:void 0};k.widgetJson.addManifest2WidgetJson(b.setting,a);b.setting.uri=a.amdFolder+"Widget";b.box=c;this.own(n(b,"click",f.hitch(this,this._onWidgetClick,b)));return b},_onWidgetClick:function(a){0===this.tab.getSelectedIndex()?g(".custom-section .jimu-state-selected",this.domNode).removeClass("jimu-state-selected"):g(".official-section .jimu-state-selected",this.domNode).removeClass("jimu-state-selected");
this._isMultipleSelection()?e.hasClass(a,"jimu-state-selected")?e.removeClass(a,"jimu-state-selected"):e.addClass(a,"jimu-state-selected"):(g(".jimu-state-selected",this.domNode).removeClass("jimu-state-selected"),e.addClass(a,"jimu-state-selected"))},_isMultipleSelection:function(){var a=this.fromNode;return"addBtn"===a.type&&"poolWidgets"===this.fromList||"addBtn"===a.type&&"groupOnScreen"===this.fromList&&this._canAddMoreWidgetsInGroup(a.gnode)||"group"===a.type&&this._canAddMoreWidgetsInGroup(a)},
_canAddMoreWidgetsInGroup:function(a){return a?"undefined"===typeof a.setting.maxWidgets||a.setting.maxWidgets>a.setting.widgets.length+1:!1},onOk:function(){(0===this.tab.getSelectedIndex()?this._getOfficialSelection():this._getCustomSelection()).then(f.hitch(this,function(a){var b=[];"group"===this.fromNode.type&&"undefined"!==typeof this.fromNode.setting.maxWidgets&&this.fromNode.setting.widgets.length+a.length>this.fromNode.setting.maxWidgets?(new q({message:G.substitute({maxCount:this.fromNode.setting.maxWidgets},
this.nls.addWidgetExceedMax)}),this.loading.hide()):(l.forEach(a,function(c){b.push(this._copyWidget(c))},this),p(b).then(f.hitch(this,function(c){var d;for(d=0;d<c.length;d++)if(!c[d].success){new q({message:c[d].message});this.loading.hide();return}this.loading.hide();this.popup.domNode&&(y.publish("widgetChoosePageOk",a,this.fromNode),this.popup.close())})))}),function(a){console.log("No widget is selected. ",a)})},_getOfficialSelection:function(){var a=new u,b=g(".jimu-state-selected",this.domNode);
if(0===b.length)return new q({message:this.nls.emptyMessage}),a.reject({message:this.nls.emptyMessage}),a;this.loading.show();b=l.map(b,function(c){return f.clone(c.setting)});a.resolve(b);return a},_getCustomSelection:function(){var a=this.allCustomWidgets.getSelectedWidgetItems();return p(a.map(function(b){return r.getManifestFromItem(b).then(function(c){var d={name:c.name,label:b.title,version:c.version};k.widgetJson.addManifest2WidgetJson(d,c);d.uri=k.widgetJson.getUriFromItem(b);d.itemId=b.id||
b.itemId;return d})}))},_copyWidget:function(a){var b=0,c=[],d=k.getControllerWidgets(this.appConfig);this.appConfig.visitElement(f.hitch(this,function(t){if(0!==d.length||t.isOnScreen)t.name===a.name&&b++,c.push(t.label)}));a.icon=a.manifest.folderUrl+"images/icon.png?wab_dv\x3d"+window.deployVersion;if(0===b){a.label=a.label;var h=r.copyWidgetToApp(window.appInfo.id,a)}else if(0<b){h=new u;for(var m=a.label+"_"+(b+1);-1<c.indexOf(m);)b++,m=a.label+"_"+(b+1);a.label=m;h.resolve({success:!0})}return h}})});