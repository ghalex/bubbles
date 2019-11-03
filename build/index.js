/*!
 * 
 *   @ghalex/bubbles v1.0.2
 *   https://github.com/ghalex/bubbles.git
 * 
 *   Copyright (c) Ghiura Alexandru 
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define("MyLibrary",[],t):"object"===typeof exports?exports.MyLibrary=t():e.MyLibrary=t()}(window,(function(){return function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(e,t,r){!function(e){function Noise(e){function Grad(e,t,r){this.x=e,this.y=t,this.z=r}Grad.prototype.dot2=function(e,t){return this.x*e+this.y*t},Grad.prototype.dot3=function(e,t,r){return this.x*e+this.y*t+this.z*r},this.grad3=[new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(e||0)}Noise.prototype.seed=function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t=this.p,r=0;r<256;r++){var n;n=1&r?t[r]^255&e:t[r]^e>>8&255;var i=this.perm,o=this.gradP;i[r]=i[r+256]=n,o[r]=o[r+256]=this.grad3[n%12]}};var t=.5*(Math.sqrt(3)-1),r=(3-Math.sqrt(3))/6,n=1/6;function fade(e){return e*e*e*(e*(6*e-15)+10)}function lerp(e,t,r){return(1-r)*e+r*t}Noise.prototype.simplex2=function(e,n){var i,o,a=(e+n)*t,s=Math.floor(e+a),u=Math.floor(n+a),c=(s+u)*r,l=e-s+c,p=n-u+c;l>p?(i=1,o=0):(i=0,o=1);var f=l-i+r,d=p-o+r,h=l-1+2*r,b=p-1+2*r;s&=255,u&=255;var _=this.perm,y=this.gradP,m=y[s+_[u]],w=y[s+i+_[u+o]],v=y[s+1+_[u+1]],g=.5-l*l-p*p,x=.5-f*f-d*d,P=.5-h*h-b*b;return 70*((g<0?0:(g*=g)*g*m.dot2(l,p))+(x<0?0:(x*=x)*x*w.dot2(f,d))+(P<0?0:(P*=P)*P*v.dot2(h,b)))},Noise.prototype.simplex3=function(e,t,r){var i,o,a,s,u,c,l=(e+t+r)*(1/3),p=Math.floor(e+l),f=Math.floor(t+l),d=Math.floor(r+l),h=(p+f+d)*n,b=e-p+h,_=t-f+h,y=r-d+h;b>=_?_>=y?(i=1,o=0,a=0,s=1,u=1,c=0):b>=y?(i=1,o=0,a=0,s=1,u=0,c=1):(i=0,o=0,a=1,s=1,u=0,c=1):_<y?(i=0,o=0,a=1,s=0,u=1,c=1):b<y?(i=0,o=1,a=0,s=0,u=1,c=1):(i=0,o=1,a=0,s=1,u=1,c=0);var m=b-i+n,w=_-o+n,v=y-a+n,g=b-s+2*n,x=_-u+2*n,P=y-c+2*n,M=b-1+.5,O=_-1+.5,j=y-1+.5;p&=255,f&=255,d&=255;var k=this.perm,q=this.gradP,N=q[p+k[f+k[d]]],S=q[p+i+k[f+o+k[d+a]]],G=q[p+s+k[f+u+k[d+c]]],$=q[p+1+k[f+1+k[d+1]]],B=.5-b*b-_*_-y*y,E=.5-m*m-w*w-v*v,A=.5-g*g-x*x-P*P,T=.5-M*M-O*O-j*j;return 32*((B<0?0:(B*=B)*B*N.dot3(b,_,y))+(E<0?0:(E*=E)*E*S.dot3(m,w,v))+(A<0?0:(A*=A)*A*G.dot3(g,x,P))+(T<0?0:(T*=T)*T*$.dot3(M,O,j)))},Noise.prototype.perlin2=function(e,t){var r=Math.floor(e),n=Math.floor(t);e-=r,t-=n,r&=255,n&=255;var i=this.perm,o=this.gradP,a=o[r+i[n]].dot2(e,t),s=o[r+i[n+1]].dot2(e,t-1),u=o[r+1+i[n]].dot2(e-1,t),c=o[r+1+i[n+1]].dot2(e-1,t-1),l=fade(e);return lerp(lerp(a,u,l),lerp(s,c,l),fade(t))},Noise.prototype.perlin3=function(e,t,r){var n=Math.floor(e),i=Math.floor(t),o=Math.floor(r);e-=n,t-=i,r-=o,n&=255,i&=255,o&=255;var a=this.perm,s=this.gradP,u=s[n+a[i+a[o]]].dot3(e,t,r),c=s[n+a[i+a[o+1]]].dot3(e,t,r-1),l=s[n+a[i+1+a[o]]].dot3(e,t-1,r),p=s[n+a[i+1+a[o+1]]].dot3(e,t-1,r-1),f=s[n+1+a[i+a[o]]].dot3(e-1,t,r),d=s[n+1+a[i+a[o+1]]].dot3(e-1,t,r-1),h=s[n+1+a[i+1+a[o]]].dot3(e-1,t-1,r),b=s[n+1+a[i+1+a[o+1]]].dot3(e-1,t-1,r-1),_=fade(e),y=fade(t),m=fade(r);return lerp(lerp(lerp(u,f,_),lerp(c,d,_),m),lerp(lerp(l,h,_),lerp(p,b,_),m),y)},e.Noise=Noise}(e.exports)},function(e,t,r){e.exports=r(3)},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=new(r.n(n).a.Noise)(Math.floor(64e3*Math.random())),o=function(){function Bubble(e,t,r){var n=t.x,i=t.y,o=t.s,a=void 0===o?1:o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Bubble),_defineProperty(this,"index",0),_defineProperty(this,"position",{x:0,y:0}),_defineProperty(this,"scale",1),_defineProperty(this,"config",{speed:.5,noiseSpeed:.006,noiseAmount:4,maxWidth:1800}),_defineProperty(this,"$element",null),this.index=e,this.position={x:n,y:i},this.scale=a,r&&(this.config=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(r,!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},this.config,{},r)),this.noiseSeedX=Math.floor(64e3*Math.random()),this.noiseSeedY=Math.floor(64e3*Math.random()),this.$element=document.createElement("div"),this.$element.className="bubble bubble-bg bubble-logo".concat(this.index+1),this.$element.style.transform="translate(".concat(this.position.x,"px, ").concat(this.position.y,"px) scale(").concat(this.scale,")")}var e,t,r;return e=Bubble,(t=[{key:"update",value:function(){this.noiseSeedX+=this.config.noiseSpeed,this.noiseSeedY+=this.config.noiseSpeed;var e=i.simplex2(this.noiseSeedX,0),t=i.simplex2(this.noiseSeedY,0);this.position.x-=this.config.speed,this.xWithNoise=this.position.x+e*this.config.noiseAmount,this.yWithNoise=this.position.y+t*this.config.noiseAmount,this.position.x<-200&&(this.position.x=this.config.maxWidth),this.$element.style.transform="translate(".concat(this.xWithNoise,"px, ").concat(this.yWithNoise,"px) scale(").concat(this.scale,")")}}])&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Bubble}();r(2);function Bubbles_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function Bubbles(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Bubbles),r=[],(t="all")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this.all=n.map((function(e,t){return new o(t,e)})),this.$element=document.createElement("div"),this.$element.className="bubbles",this.$container=document.createElement("div"),this.$container.className="bubbles-container",this.$container.appendChild(this.$element),requestAnimationFrame(this.update.bind(this))}var e,t,r;return e=Bubbles,(t=[{key:"draw",value:function(e){var t=this;e.innerHTML="",e.appendChild(this.$container),this.$element.innerHTML="",this.all.forEach((function(e){return t.$element.appendChild(e.$element)}))}},{key:"update",value:function(){this.all.forEach((function(e){e.update()})),this.raf=requestAnimationFrame(this.update.bind(this))}}])&&Bubbles_defineProperties(e.prototype,t),r&&Bubbles_defineProperties(e,r),Bubbles}();t.default=a}])}));
//# sourceMappingURL=index.js.map