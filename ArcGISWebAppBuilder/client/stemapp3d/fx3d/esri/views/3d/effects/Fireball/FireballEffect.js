/**
 * Copyright @ 2022 Esri.
 * All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.
 */
define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","esri/core/lang","esri/views/3d/webgl-engine/lib/Util","esri/core/libs/gl-matrix-2/vec3f64","esri/core/libs/gl-matrix-2/vec2f64","esri/core/libs/gl-matrix-2/vec3","esri/core/libs/gl-matrix-2/vec2","../../webgl-engine-extensions/VertexBufferLayout","../../webgl-engine-extensions/GLVertexArrayObject","../../webgl-engine-extensions/GLXBO","../../webgl-engine-extensions/GLVerTexture","../../support/fx3dUtils","../../support/fx3dUnits","../Effect","./FireballMaterial","../../webgl-engine-extensions/constraints"],function(i,e,t,r,s,n,a,h,o,_,l,d,g,u,c,f,v,m){var p=n.vec3f64,h=h.vec3,w=a.vec2f64,o=o.vec2,x=40.11,b=p.create(),y=p.create(),M=p.create(),I=m.VertexAttrConstants,B={ALONG:0,AROUND:1},A=t([f],{declaredClass:"esri.views.3d.effects.Fireball.FireballEffect",effectName:"Fireball",constructor:function(e){i.hitch(this,e),this.orderId=2,this._pathIdNum=0,this._tmpPoints=[],this.localOriginFactory=f.createLocalOriginFactory(),this._renderObjects={},this._needsAllLoaded=!0},_initRenderingInfo:function(){this.renderingInfo.radius=40,this.renderingInfo.width=50,this.renderingInfo.height=50,this.renderingInfo.colors=[u.rgbNames.cadetblue,u.rgbNames.yellowgreen,u.rgbNames.lightpink,u.rgbNames.orangered,u.rgbNames.green,u.rgbNames.indianred],this._colorBarDirty=!0,this._renderingInfoDirty=!0,this._curveType=B.AROUND,this._vacDirty=!0,this._shapeDirty=!0,this.inherited(arguments)},_doRenderingInfoChange:function(i){this.inherited(arguments);for(var e in i)i.hasOwnProperty(e)&&this.renderingInfo.hasOwnProperty(e)&&(u.endsWith(e.toLowerCase(),"info")?u.isInforAttrChanged(this.renderingInfo[e],i[e])&&(this._renderingInfoDirty=!0):u.endsWith(e.toLowerCase(),"colors")?i[e]instanceof Array&&(this.renderingInfo[e]=i[e],this._colorBarDirty=!0,this._renderingInfoDirty=!0):"radius"===e.toLowerCase()||"width"===e.toLowerCase()||"height"===e.toLowerCase()||"transparency"===e.toLowerCase()?(this._clampScope(i,e),"radius"==e&&this._radiusUnit?this.renderingInfo[e]=c.toMeters(this._radiusUnit,i[e],this._view.viewingMode):"width"==e&&this._widthUnit?this.renderingInfo[e]=c.toMeters(this._widthUnit,i[e],this._view.viewingMode):"height"==e&&this._heightUnit?this.renderingInfo[e]=c.toMeters(this._heightUnit,i[e],this._view.viewingMode):this.renderingInfo[e]=i[e]):typeof i[e]==typeof this.renderingInfo[e]&&(this.renderingInfo[e]=i[e]))},initEffect:function(t){this.inherited(arguments),this._effectConfig&&i.isArray(this._effectConfig.renderingInfo)&&(this._radiusUnit=null,this._widthUnit=null,this._heightUnit=null,e.forEach(this._effectConfig.renderingInfo,function(i){"radius"===i.name.toLowerCase()?(this._radiusUnit=i.unit,this.renderingInfo.radius=c.toMeters(this._radiusUnit,this.renderingInfo.radius,this._view.viewingMode)):"width"===i.name.toLowerCase()?(this._widthUnit=i.unit,this.renderingInfo.width=c.toMeters(this._widthUnit,this.renderingInfo.width,this._view.viewingMode)):"height"===i.name.toLowerCase()&&(this._heightUnit=i.unit,this.renderingInfo.height=c.toMeters(this._heightUnit,this.renderingInfo.height,this._view.viewingMode))}.bind(this)))},destroy:function(){this._resetXBOs(),this._dispose("_aroundVerticesTexture"),this._dispose("_vao"),this._dispose("_particleVAO")},_resetXBOs:function(){this._dispose("_vbo"),this._dispose("_ibo"),this._dispose("_particleVBO")},_initVertexLayout:function(){this._vertexAttrConstants=[I.AUXPOS1],this._vertexBufferLayout=new _(this._vertexAttrConstants,[3],[5126])},_initRenderContext:function(){return this.inherited(arguments),this._vacDirty&&(this._initVertexLayout(),this._resetXBOs(),this._vacDirty=!1,this._vao&&(this._vao.unbind(),this._vao._initialized=!1),this._particleVAO&&(this._particleVAO.unbind(),this._particleVAO._initialized=!1)),this._vbo||(this._vbo=new d(this._gl,(!0),this._vertexBufferLayout)),this._particleVBO||(this._particleVBO=new d(this._gl,(!0),this._vertexBufferLayout)),this._ibo||(this._ibo=new d(this._gl,(!1))),this._vaoExt&&(this._vao=new l(this._gl,this._vaoExt),this._particleVAO=new l(this._gl,this._vaoExt)),this._localBindsCallback||(this._localBindsCallback=this._localBinds.bind(this)),this._curveType===B.AROUND?this._buildAroundPathGeometries():this._curveType===B.ALONG&&this._buildAlongPathGeometries()},_buildAroundPathGeometries:function(){var i=this._allGraphics(),t=0;if(i.length>0){var r,s,n,a,o,_,l,d,g,c=0,f=[],v=[],m=0,p=0,w=1,I=[];this._isAddingGeometry||(this._pathIdNum=0,this._tmpPoints=[]);var B=this._vertexBufferLayout.getStride();return e.forEach(i,function(i,e){if(null!=i.geometry)for(_=i.geometry.paths,l=0;l<_.length;l++)if(!(_[l].length<2)){for(n=0,a=0,r=_[l][0],r[2]||(r[2]=x),s=_[l][_[l].length-1],s[2]||(s[2]=x),h.set(b,r[0],r[1],r[2]),"global"===this._view.viewingMode?u.wgs84ToSphericalEngineCoords(b,0,b,0):"local"===this._view.viewingMode&&u.wgs84ToWebMerc(b,0,b,0),h.set(y,s[0],s[1],s[2]),"global"===this._view.viewingMode?u.wgs84ToSphericalEngineCoords(y,0,y,0):"local"===this._view.viewingMode&&u.wgs84ToWebMerc(y,0,y,0),h.subtract(M,b,y),a=h.length(M),"global"===this._view.viewingMode?n=a<=1e3?32:a<=1e4?24:a<=5e5?18:a<=1e6?40:Math.floor(1e-5*a):"local"===this._view.viewingMode&&(n=a<=1e3?48:a<=1e4?42:a<=1e5?32:a<=1e6?24:a<=2e6?36:Math.floor(6e-6*a)),n=2*n+1,d=0;d<n;d++)o=B*(d+m),f[0+o]=this._pathIdNum,f[1+o]=e+t,f[2+o]=d,d<n-1&&(c=2*(d+m-e),v[c+0]=d+m+t,v[c+1]=d+m+t+1);for(m+=n,w=Math.max(1,Math.floor(n/20)),g=0;g<w;g++)o=B*(g+p),I[0+o]=this._pathIdNum,I[1+o]=e+t,I[2+o]=18*g;p+=w,this._pathIdNum++,this._tmpPoints.push([r[0],r[1],r[2]]),this._tmpPoints.push([s[0],s[1],s[2]])}}.bind(this)),this._vbo.addData(this._isAddingGeometry,new Float32Array(f)),this._ibo.addData(this._isAddingGeometry,new Uint32Array(v)),this._particleVBO.addData(this._isAddingGeometry,new Float32Array(I)),this._vao&&(this._vao._initialized=!1),this._particleVAO&&(this._particleVAO._initialized=!1),this._resetAddGeometries(),this._initAroundVerticesTexture()}return!1},_buildAlongPathGeometries:function(){return!1},_initAroundVerticesTexture:function(){if(2*this._pathIdNum!==this._tmpPoints.length)return!1;var i=this._gl.getParameter(3379),e=2,t=this._pathIdNum*e,r=u.nextHighestPowerOfTwo(t);r>i&&(r=i,console.warn("Too many graphics, and some data will be discarded."));var s=Math.ceil(t/r);s=u.nextHighestPowerOfTwo(s),s>i&&(s=i,console.warn("Too many graphics, and some data will be discarded."));for(var n,a=new Float32Array(r*s*4),h=0;h<this._pathIdNum;h++)n=h*e*4,a[0+n]=h,a[1+n]=this._tmpPoints[h*e][0],a[2+n]=this._tmpPoints[h*e][1],a[3+n]=this._tmpPoints[h*e][2],a[4+n]=h,a[5+n]=this._tmpPoints[h*e+1][0],a[6+n]=this._tmpPoints[h*e+1][1],a[7+n]=this._tmpPoints[h*e+1][2];return this._aroundVerticesTexture||(this._aroundVerticesTexture=new g(this._gl),this._aroundVerticesTextureSize=w.create()),this._aroundVerticesTexture.setData(r,s,a),o.set(this._aroundVerticesTextureSize,r,s),!0},_initColourMap:function(){this._colourMapTexture||(this._colourMapTexture=this._gl.createTexture());var i=new Image;i.src=u.spriteImg;var e=this;return i.onload=function(){var t=e._gl.getParameter(e._gl.TEXTURE_BINDING_2D);e._gl.bindTexture(3553,e._colourMapTexture),e._gl.pixelStorei(37440,!0),e._gl.texParameteri(3553,10240,9728),e._gl.texParameteri(3553,10241,9728),e._gl.texParameteri(3553,10242,33071),e._gl.texParameteri(3553,10243,33071),e._gl.texImage2D(3553,0,6408,6408,5121,i),e._gl.generateMipmap(3553),e._gl.bindTexture(3553,t)},0===this._gl.getError()},_loadShaders:function(){return this.inherited(arguments),this._material||(this._material=new v({pushState:this._pushState.bind(this),restoreState:this._restoreState.bind(this),gl:this._gl,viewingMode:this._view.viewingMode,shaderSnippets:this._shaderSnippets})),this._material.loadShaders()},_initColorBar:function(){if(!this._colorBarDirty)return!0;this._colorBarTexture||(this._colorBarTexture=this._gl.createTexture());var i=this._gl.getParameter(32873);this._gl.bindTexture(3553,this._colorBarTexture),this._gl.pixelStorei(37440,!0),this._gl.texParameteri(3553,10240,9728),this._gl.texParameteri(3553,10241,9728),this._gl.texParameteri(3553,10242,33071),this._gl.texParameteri(3553,10243,33071);var e=u._clampBlackColor(this.renderingInfo.colors),t=u.createColorBarTexture(32,1,e);return this._gl.texImage2D(3553,0,6408,6408,5121,t),this._gl.generateMipmap(3553),this._gl.bindTexture(3553,i),0===this._gl.getError()},_localBinds:function(i,e){i.bind(this._material._program),this._vertexBufferLayout.enableVertexAttribArrays(this._gl,this._material._program),e&&e.bind()},_bindBuffer:function(i,e,t){i?(i._initialized||i.initialize(this._localBindsCallback,[e,t]),i.bind()):this._localBinds(e,t)},_unBindBuffer:function(i,e,t){i?i.unbind():(e.unbind(),this._vertexBufferLayout.disableVertexAttribArrays(this._gl,this._material._program),t&&t.unbind())},render:function(e,t){this.inherited(arguments),this._layer.visible&&this.ready&&this._bindPramsReady()&&(this._hasSentReady||(this._layer.emit("fx3d-ready"),this._hasSentReady=!0),this._material.bind(i.mixin({},{ei:this._aroundVerticesTexture,oo:this._aroundVerticesTextureSize,ps:this._colourMapTexture,sm:this._vizFieldVerTextures[this._vizFields[this._currentVizPage]],el:this._vizFieldVerTextureSize,mp:this.renderingInfo.animationInterval,mo:this.renderingInfo.radius,ls:this.renderingInfo.transparency,io:this._vizFieldMinMaxs[this._vizFieldDefault].min>this._vizFieldMinMaxs[this._vizFields[this._currentVizPage]].min?this._vizFieldMinMaxs[this._vizFields[this._currentVizPage]].min:this._vizFieldMinMaxs[this._vizFieldDefault].min,is:this._vizFieldMinMaxs[this._vizFieldDefault].max>this._vizFieldMinMaxs[this._vizFields[this._currentVizPage]].max?this._vizFieldMinMaxs[this._vizFieldDefault].max:this._vizFieldMinMaxs[this._vizFields[this._currentVizPage]].max,pp:this._colorBarTexture},e),t),this._material.bindBoolean("drawPath",!0),this._material.blend(!0,t),this._bindBuffer(this._vao,this._vbo,this._ibo),this._gl.drawElements(1,this._ibo.getNum(),5125,0),this._unBindBuffer(this._vao,this._vbo,this._ibo),this._material.bindBoolean("drawPath",!1),this._material.blend(!1,t),this._bindBuffer(this._particleVAO,this._particleVBO,null),this._gl.drawArrays(0,0,this._particleVBO.getNum()),this._material.release(t),this._unBindBuffer(this._particleVAO,this._particleVBO,null))}});return A});