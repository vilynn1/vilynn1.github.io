Version 2.6.0.1 or greater of the Layer Toggle Button Widget gives you the ability to set the default toggle state
of the Foldable themes HeaderController Widget icon. 

To do this though you have to:
1. Replace the widget.js in the themes\FoldableTheme\widgets\HeaderController folder with the one I have provided in this download.
2. Manullay edit the apps main config.json to add "selected": true, to the widget.

Here is an example:

      {
        "name": "LayerToggleButton",

        "label": "Toggle Sirens Layer",

        "version": "2.11",

        "uri": "widgets/LayerToggleButton/Widget",

        "config": "configs/LayerToggleButton/config_Toggle Sirens Layer.json",

        "index": 5,

        "selected": true,

        "id": "widgets_LayerToggleButton_Widget_22",
 
       "position": {

          "relativeTo": "map"

        }

      }

Version 2.6 or greater of the Layer Toggle Button Widget gives you the ability to set the default toggle state
of the onScreen Widget icon. 

To do this though you have to:
1. Replace the OnScreenWidgetIcon.js in the jimu.js folder with the one I have provided in this download.
2. Manullay edit the apps main config.json to add "selected": true, to the widget.

Here is an example:

      {

        "position": {

          "left": 55,

          "top": 45,

          "relativeTo": "map"

        },

        "placeholderIndex": 1,

        "id": "_21",

        "name": "LayerToggleButton",

        "label": "Toggle Traffic Cameras Layer",

        "version": "2.11",

        "closeable": true,

        "selected": true,

        "icon": "configs/LayerToggleButton/icon_Toggle Traffic Cameras Layer.png",

        "uri": "widgets/LayerToggleButton/Widget",

        "config": "configs/LayerToggleButton/config_Toggle Traffic Cameras Layer.json"

      },