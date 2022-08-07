// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:builder/plugins/app-list/TemplatePage.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"template-card-page-content" data-dojo-attach-point\x3d"templateCardPageContent"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/html dojo/_base/array dojo/_base/lang dojo/on dojo/dom ./AppOperMenu dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./TemplatePage.html jimu/utils dojox/form/Uploader dojo/NodeList-dom".split(" "),function(p,a,g,h,k,q,r,t,u,m,v,w){return p([t,u,v],{baseClass:"template-card-page",templateString:w,loading:null,folderUrl:null,appListWidget:null,_eventHandles:null,_appOperMenus:null,postMixInProperties:function(){this.inherited(arguments);
this.nls=this.appListWidget.nls;this.loading=this.appListWidget.loading;this.folderUrl=this.appListWidget.folderUrl},constructor:function(){this._eventHandles=[];this._appOperMenus=[]},startup:function(){this.inherited(arguments);a.setSelectable(this.domNode,!1)},refresh:function(b){this.createTemplateList(b)},cleanTemplateList:function(){a.empty(this.templateCardPageContent);g.forEach(this._appOperMenus,function(b){b.destroy()});this._appOperMenus=[];g.forEach(this._eventHandles,function(b){b.remove()});
this._eventHandles=[]},createTemplateList:function(b){this.cleanTemplateList();g.forEach(b,function(d){this.createTemplateCard(d)},this)},createTemplateCard:function(b){var d=a.create("div",{"class":"template-card jimu-float-leading"},this.templateCardPageContent);a.create("div",{"class":"template-type-div "+("HTML"===b.appType?"template-type-2d":"template-type-3d")},d);a.create("div",{"class":"thumbnail-part",style:"background-image: url("+b.thumbnail+"?date\x3d"+(new Date).getTime()+")"},d);var l=
a.create("div",{"class":"appInfo-part"},d),c=a.create("table",{"class":"template-name"},l);c=a.create("tbody",{"class":"template-name-tbody"},c);c=a.create("tr",{"class":"template-name-tr"},c);c=a.create("td",{"class":"template-name-td"},c);a.create("div",{"class":"template-name-div",innerHTML:m.sanitizeHTML(b.name),title:b.name},c);a.create("div",{"class":"template-des-div",innerHTML:m.sanitizeHTML(b.description),title:b.description},l);d=a.create("div",{"class":"template-operation-part"},d);a.create("div",
{innerHTML:'\x3ca href\x3d"'+m.sanitizeHTML(b.appUrl)+'" target\x3d"_blank"\x3e\x3c/a\x3e',"class":"template-operation launch-operation jimu-float-leading",title:this.nls.preview},d);l=a.create("div",{"class":"template-operation edit-operation jimu-float-leading "+(b.isPredefined?"disable":""),title:this.nls.edit},d);var e=a.create("div",{"class":"template-operation more-operation jimu-float-trailing "+(b.isPredefined?"disable":"")},d),f=(new r({app:b,posNode:e,appListWidget:this.appListWidget,nls:this.nls,
isTemplate:b.isTemplate,appContentNode:this.templateCardPageContent,height:b.isPredefined?45:162,offset:{top:44,left:-10,right:-10}})).placeAt(e);this._appOperMenus.push(f);c=k(e,"click",h.hitch(this,function(x){f.isShow?(f.hide(),a.removeClass(e,"item-more-selected")):(g.forEach(this._appOperMenus,function(n){n.hide();a.removeClass(n.posNode,"item-more-selected")}),f.show(),a.addClass(e,"item-more-selected"));x.stopPropagation()}));this._eventHandles.push(c);c=k(l,"click",h.hitch(this,function(){this.appListWidget.pluginManager.getPluginByName("startup").switchToAppConfig(b)}));
this._eventHandles.push(c);d=a.create("div",{"class":"template-operation create-app-from-template-operation jimu-float-leading",title:this.nls.createApp},d);c=k(d,"click",h.hitch(this,function(){f._onCreateAppFromTempalteClick()}));this._eventHandles.push(c);c=k(q.byId("content-box"),"click",h.hitch(this,function(){f.hide();a.removeClass(e,"item-more-selected")}));this._eventHandles.push(c)}})});