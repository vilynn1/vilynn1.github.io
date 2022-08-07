///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    'dojo/_base/declare',
    'jimu/BaseWidgetSetting',
    'dijit/_WidgetsInTemplateMixin',
    'jimu/LayerInfos/LayerInfos',
    './LayerSelector',
    'jimu/dijit/CheckBox',
    'dijit/form/CheckBox',
    'dijit/form/ValidationTextBox'
  ],
  function(
    declare,
    BaseWidgetSetting,
    _WidgetsInTemplateMixin,
    LayerInfos,
    LayerSelector) {
    return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {

      baseClass: 'widget-layertogglebutton-setting',

      startup: function() {
        this.inherited(arguments);
        this.setConfig(this.config);
        this.createLayerSelector();
      },

      setConfig: function(config) {
        this.config = config;
        if(this.config.isExclusive){
          this.cbxExclusive.setValue(this.config.isExclusive);
        }
        if(this.config.zoomTo){
          this.cbxZoom.setValue(this.config.zoomTo);
        }
      },

      getConfig: function() {
        this.config.zoomTo = this.cbxZoom.getValue();
        this.config.isExclusive = this.cbxExclusive.getValue();
        this.config.layerOptions = this.layerSelector.getLayerOptions();
        return this.config;
      },

      createLayerSelector: function() {
        var layerInfosObj = LayerInfos.getInstanceSync();
        this.layerSelector = new LayerSelector({
          operLayerInfos: layerInfosObj,
          config: this.config
        }).placeAt(this.layerSelectorDiv);
      }
    });
  });
