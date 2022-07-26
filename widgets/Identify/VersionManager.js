define([
  'jimu/shared/BaseVersionManager'
],
function(
  BaseVersionManager
  ) {
  function VersionManager(){
    this.versions = [{
      version: '1.0',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    }, {
      version: '1.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    }, {
      version: '1.2',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '1.2.0.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '1.2.0.2',
      upgrader: function(oldConfig){
        var newConfig = oldConfig;
        newConfig.symbols.picturemarkersymbol.url = "images/i_info.png";
        return newConfig;
      }
    },{
      version: '1.2.0.3',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '1.2.0.4',
      upgrader: function(oldConfig){
        var newConfig = oldConfig;
        newConfig.resultFormat = {
          "attTitlesymbol": {
            "bold": false,
            "italic": true,
            "underline": false,
            "color": [
              0,
              0,
              0,
              1
            ]
          },
          "attValuesymbol": {
            "bold": false,
            "italic": false,
            "underline": false,
            "color": [
              0,
              0,
              0,
              1
            ]
          }
        };
        return newConfig;
      }
    },{
      version: '1.3',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '1.3.0.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.0.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.0.1.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.1.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.2',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.3',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.4',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.4.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.4.1.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.5',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.5.0.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.5.0.2',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.7',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.8',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.9',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.9.0.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.9.1',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.10',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.11',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.12',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.13',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.14',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.15',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.16',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.17',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    },{
      version: '2.17.01',
      upgrader: function(oldConfig){
        var newConfig = oldConfig;
        newConfig.identsearchwidgetresults = false;
        return newConfig;
      }
    },{
      version: '2.21',
      upgrader: function(oldConfig){
        return oldConfig;
      }
    }];
  }

  VersionManager.prototype = new BaseVersionManager();
  VersionManager.prototype.constructor = VersionManager;
  return VersionManager;
});
