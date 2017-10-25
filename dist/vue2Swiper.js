/*!
 * vue2-swiper v0.0.10
 * 一个简单的vue2.x swiper插件
 * https://fchengjin.github.io/vue2-swiper/
 * @author fcheng<fchengjin@126.com>
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vue2Swiper=e():t.vue2Swiper=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist",e(e.s=36)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(3),i=n(10);t.exports=n(4)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(7),i=n(28),o=n(16),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(55),i=n(13);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(20)("wks"),i=n(11),o=n(0).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!0},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(8);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports={}},function(t,e,n){var r=n(32),i=n(21);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(20)("keys"),i=n(11);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(0),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(3).f,i=n(1),o=n(6)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){e.f=n(6)},function(t,e,n){var r=n(0),i=n(15),o=n(14),s=n(23),a=n(3).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:s.f(t)})}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";var r=n(14),i=n(27),o=n(30),s=n(2),a=n(1),u=n(17),c=n(53),f=n(22),l=n(60),p=n(6)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,g,m,y){c(n,e,v);var b,w,_,x=function(t){if(!h&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},P=e+" Iterator",T="values"==g,S=!1,O=t.prototype,E=O[p]||O["@@iterator"]||g&&O[g],M=E||x(g),C=g?T?x("entries"):M:void 0,j="Array"==e?O.entries||E:E;if(j&&(_=l(j.call(new t)))!==Object.prototype&&_.next&&(f(_,P,!0),r||a(_,p)||s(_,p,d)),T&&E&&"values"!==E.name&&(S=!0,M=function(){return E.call(this)}),r&&!y||!h&&!S&&O[p]||s(O,p,M),u[e]=M,u[P]=d,g)if(b={values:T?M:x("values"),keys:m?M:x("keys"),entries:C},y)for(w in b)w in O||o(O,w,b[w]);else i(i.P+i.F*(h||S),e,b);return b}},function(t,e,n){var r=n(0),i=n(15),o=n(51),s=n(2),a=function(t,e,n){var u,c,f,l=t&a.F,p=t&a.G,h=t&a.S,d=t&a.P,v=t&a.B,g=t&a.W,m=p?i:i[e]||(i[e]={}),y=m.prototype,b=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(u in n)(c=!l&&b&&void 0!==b[u])&&u in m||(f=c?b[u]:n[u],m[u]=p&&"function"!=typeof b[u]?n[u]:v&&c?o(f,r):g&&b[u]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):d&&"function"==typeof f?o(Function.call,f):f,d&&((m.virtual||(m.virtual={}))[u]=f,t&a.R&&y&&!y[u]&&s(y,u,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){t.exports=!n(4)&&!n(9)(function(){return 7!=Object.defineProperty(n(29)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(8),i=n(0).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){t.exports=n(2)},function(t,e,n){var r=n(7),i=n(54),o=n(21),s=n(19)("IE_PROTO"),a=function(){},u=function(){var t,e=n(29)("iframe"),r=o.length;for(e.style.display="none",n(59).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[s]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(1),i=n(5),o=n(56)(!1),s=n(19)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~o(c,n)||c.push(n));return c}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(32),i=n(21).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Swiper=e.install=void 0;var r=n(37),i=function(t){return t&&t.__esModule?t:{default:t}}(r),o=function t(e){t.installed||e.component("Swiper",i.default)};e.install=o,e.Swiper=i.default,e.default=o},function(t,e,n){"use strict";function r(t){a||n(38)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(44),o=n.n(i),s=n(77),a=!1,u=n(43),c=r,f=u(o.a,s.a,!1,c,null,null);f.options.__file="src\\vue2-swiper.vue",f.esModule&&Object.keys(f.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=f.exports},function(t,e,n){var r=n(39);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(41)("c8288a8e",r,!1)},function(t,e,n){e=t.exports=n(40)(void 0),e.push([t.i,"\n.swiper {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n.swiper .swiper-wrapper {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    transition: all 0ms ease;\n}\n.swiper .swiper-wrapper > div {\n      overflow: hidden;\n      flex-shrink: 0;\n      width: 100%;\n      height: 100%;\n}\n.swiper.horizontal .swiper-wrapper {\n    flex-direction: row;\n}\n.swiper.vertical .swiper-wrapper {\n    flex-direction: column;\n}\n.swiper .swiper-pagination {\n    position: absolute;\n}\n.swiper .swiper-pagination .swiper-pagination-bullet {\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background-color: #000000;\n      opacity: .2;\n      transition: all .5s ease;\n}\n.swiper .swiper-pagination .swiper-pagination-bullet.active {\n      background: #007aff;\n      opacity: 1;\n}\n.swiper.vertical .swiper-pagination {\n    right: 10px;\n    top: 50%;\n    transform: translate3d(0, -50%, 0);\n}\n.swiper.vertical .swiper-pagination .swiper-pagination-bullet {\n      display: block;\n      margin: 6px 0;\n}\n.swiper.horizontal .swiper-pagination {\n    bottom: 10px;\n    width: 100%;\n    text-align: center;\n}\n.swiper.horizontal .swiper-pagination .swiper-pagination-bullet {\n      display: inline-block;\n      margin: 0 3px;\n}\n.swiper .swiper-tabnav {\n    position: relative;\n}\n.swiper .swiper-tabnav > span {\n      color: #8391a5;\n      transition: color .3s;\n}\n.swiper .swiper-tabnav > span:hover {\n        color: #1f2d3d;\n        cursor: pointer;\n}\n.swiper .swiper-tabnav > span.active {\n        color: #20a0ff;\n}\n.swiper .active-line {\n    position: absolute;\n    background: #20a0ff;\n    transition: all .3s;\n}\n.swiper.horizontal.tabmode .swiper-tabnav {\n    height: 30px;\n}\n.swiper.horizontal.tabmode .swiper-tabnav > span {\n      display: inline-block;\n      padding: 0 15px;\n}\n.swiper.horizontal.tabmode .active-line {\n    height: 2px;\n    width: auto;\n    bottom: 0;\n    left: 0;\n}\n.swiper.horizontal.tabmode .swiper-wrapper {\n    height: calc(100% - 30px);\n}\n.swiper.vertical.tabmode {\n    display: flex;\n    flex-direction: row;\n}\n.swiper.vertical.tabmode .swiper-tabnav {\n      width: 30px;\n      display: inline-flex;\n      flex-direction: column;\n      justify-content: space-around;\n}\n.swiper.vertical.tabmode .swiper-tabnav > span {\n        padding: 8px 0;\n        text-align: center;\n}\n.swiper.vertical.tabmode .active-line {\n      width: 2px;\n      height: auto;\n      right: 0;\n      top: 0;\n}\n.swiper.vertical.tabmode .swiper-wrapper {\n      width: calc(100% - 30px);\n      display: inline-flex;\n}\n",""])},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));f[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(d)return v;r.parentNode.removeChild(r)}if(g){var o=h++;r=p||(p=i()),e=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(42),f={},l=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,d=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){d=n;var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=f[s.id];a.refs--,n.push(a)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete f[a.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a=o[1],u=o[2],c=o[3],f={id:t+":"+i,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(f):n.push(r[s]={id:s,parts:[f]})}return n}},function(t,e){t.exports=function(t,e,n,r,i,o){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var f;if(o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=f):r&&(f=r),f){var l=c.functional,p=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(t,e){return f.call(e),p(t,e)}):c.beforeCreate=p?[].concat(p,f):[f]}return{esModule:s,exports:a,options:c}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(45);e.default={name:"Swiper",props:{direction:{type:String,default:"horizontal",validator:function(t){return["vertical","horizontal"].indexOf(t)>-1}},mousewheelControl:{type:Boolean,default:!1},performanceMode:{type:Boolean,default:!1},paginationVisible:{type:Boolean,default:!1},paginationClickable:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},speed:{type:Number,default:500},activeIndex:{type:Number,default:1},customizeNav:String,customizeNavActiveClass:{type:String,default:"active"},nested:{type:Boolean,default:!1},tabMode:Array,tabModeAnimation:{type:Boolean,default:!1},forbiddenSlide:{type:Boolean,default:!1},noBounds:{type:Boolean,default:!1}},data:function(){return{currentPage:0,lastPage:1,totalPage:0,translateX:0,translateY:0,startTranslate:0,delta:null,dragging:!1,startPos:null,transitioning:!1,slidingDirection:null,slideEls:[],translateOffset:0,transitionDuration:0}},mounted:function(){var t=this;if(this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this.slideEls=[].map.call(this.$refs.swiperWrapper.children,function(t){return t}),this.totalPage=this.slideEls.length,this.currentPage=this.activeIndex,this.customizeNav){var e=document.querySelector(this.customizeNav);if(!e)throw new Error("cannot find customizeNav in dom, customizeNav must be a select");this.customize=e,this.paginationClickable&&(0,r.on)(this.customize,"click",function(e){e=e||window.event;var n=e.target||e.srcElement,r=n.getAttribute("index");r&&t.setPage(Number(r))})}this.loop?this.$nextTick(function(){this._createLoop(),this.setPage(this.currentPage,!0)}):this.setPage(this.currentPage,!0)},methods:{next:function(){var t=this.currentPage;t<this.totalPage||this.loop?this.setPage(t+1):this._revert()},prev:function(){var t=this.currentPage;t>1||this.loop?this.setPage(t-1):this._revert()},setPage:function(t,e){var n=this;if(this.lastPage=this.currentPage,0===t?this.currentPage=this.totalPage:t===this.totalPage+1?this.currentPage=1:this.currentPage=t,this.loop)0===this.delta&&this._setTranslate(n._getTranslateOfPage(this.lastPage)),setTimeout(function(){n._setTranslate(n._getTranslateOfPage(t)),e||n._onTransitionStart()},0);else{if(this._setTranslate(this._getTranslateOfPage(t)),e)return;this._onTransitionStart()}},isHorizontal:function(){return"horizontal"===this.direction},isVertical:function(){return"vertical"===this.direction},_onTouchStart:function(t){t=t||window.event,this.forbiddenSlide||(t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,this.startPos=this._getTouchPos(t),this.delta=null,this.startTranslate=this._getTranslateOfPage(this.currentPage),this.startTime=(new Date).getTime(),this.dragging=!0,this.firstMove=!0,this.slidingDirection=null,this.transitionDuration=0,(0,r.on)(document,"touchmove",this._onTouchMove),(0,r.on)(document,"touchend",this._onTouchEnd),(0,r.on)(document,"mousemove",this._onTouchMove),(0,r.on)(document,"mouseup",this._onTouchEnd))},_onTouchMove:function(t){t=t||window.event,t.preventDefault();var e=this._getTouchPos(t).x-this.startPos.x,n=this._getTouchPos(t).y-this.startPos.y;if(e||n){if(this.firstMove&&(this.firstMove=!1,Math.abs(n)>=Math.abs(e)?this.slidingDirection="vertical":this.slidingDirection="horizontal",this.direction!==this.slidingDirection))return this.dragging=!1,(0,r.off)(document,"touchmove",this._onTouchMove),(0,r.off)(document,"touchend",this._onTouchEnd),(0,r.off)(document,"mousemove",this._onTouchMove),void(0,r.off)(document,"mouseup",this._onTouchEnd);if(this.delta=this.isHorizontal()?e:n,this.nested&&(1===this.currentPage&&this.delta>0||this.currentPage===this.totalPage&&this.delta<0)){this.dragging=!1,(0,r.off)(document,"touchmove",this._onTouchMove),(0,r.off)(document,"touchend",this._onTouchEnd),(0,r.off)(document,"mousemove",this._onTouchMove),(0,r.off)(document,"mouseup",this._onTouchEnd);var i=this.$parent;return i.startPos=this.startPos,i.delta=null,i.startTranslate=i._getTranslateOfPage(i.currentPage),i.startTime=this.startTime,i.dragging=!0,i.firstMove=!1,i.transitionDuration=0,(0,r.on)(document,"touchmove",i._onTouchMove),(0,r.on)(document,"touchend",i._onTouchEnd),(0,r.on)(document,"mousemove",i._onTouchMove),void(0,r.on)(document,"mouseup",i._onTouchEnd)}if(this.noBounds&&(1===this.currentPage&&this.delta>0||this.currentPage===this.totalPage&&this.delta<0))return this.dragging=!1,(0,r.off)(document,"touchmove",this._onTouchMove),(0,r.off)(document,"touchend",this._onTouchEnd),(0,r.off)(document,"mousemove",this._onTouchMove),void(0,r.off)(document,"mouseup",this._onTouchEnd);this.performanceMode||(this._setTranslate(this.startTranslate+this.delta),this.$emit("slider-move",this._getTranslate())),(this.isVertical()||this.isHorizontal()&&Math.abs(this.delta)>0)&&(t.preventDefault(),t.stopPropagation())}},_onTouchEnd:function(){this.dragging=!1,this.transitionDuration=this.speed;var t=(new Date).getTime()-this.startTime<600;this.delta<-100||t&&this.delta<-30?this.next():this.delta>100||t&&this.delta>30?this.prev():this._revert(),(0,r.off)(document,"touchmove",this._onTouchMove),(0,r.off)(document,"touchend",this._onTouchEnd),(0,r.off)(document,"mousemove",this._onTouchMove),(0,r.off)(document,"mouseup",this._onTouchEnd)},_onWheel:function(t){if(t=t||window.event,t.stopPropagation(),this.mousewheelControl){if(1===this.currentPage&&t.deltaY<0||this.currentPage===this.totalPage&&t.deltaY>0)return;this.transitioning||(t.deltaY>0?this.next():this.prev()),this._isPageChanged()&&t.preventDefault()}},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(t){return{x:t.changedTouches?t.changedTouches[0].pageX:t.pageX,y:t.changedTouches?t.changedTouches[0].pageY:t.pageY}},_onTransitionStart:function(){this.transitioning=!0,this.transitionDuration=this.speed,this._isPageChanged()?this.$emit("slide-change-start",this.currentPage):this.$emit("slide-revert-start",this.currentPage)},_onTransitionEnd:function(){this.transitioning=!1,this.transitionDuration=0,this.delta=0,this._isPageChanged()?this.$emit("slide-change-end",this.currentPage):this.$emit("slide-revert-end",this.currentPage)},_isPageChanged:function(){return this.lastPage!==this.currentPage},_setTranslate:function(t){this[this.isHorizontal()?"translateX":"translateY"]=t},_getTranslate:function(){return this[this.isHorizontal()?"translateX":"translateY"]},_getTranslateOfPage:function(t){if(0===t)return 0;var e=this.isHorizontal()?"clientWidth":"clientHeight";return-[].reduce.call(this.slideEls,function(n,r,i){return i>t-2?n:n+r[e]},0)+this.translateOffset},_createLoop:function(){var t=this.isHorizontal()?"clientWidth":"clientHeight",e=this.$refs.swiperWrapper,n=e.firstElementChild.cloneNode(!0),r=e.lastElementChild.cloneNode(!0);e.insertBefore(r,e.firstElementChild),e.appendChild(n),this.translateOffset=-r[t]}},watch:{currentPage:function(t){if(this.customize){var e=this.customizeNavActiveClass,n=this.customize.getElementsByClassName(e);if(n)for(var i=0;i<n.length;i++)(0,r.removeClass)(n[i],e);var o=(0,r.getElementsByAttribute)(this.customize,"index",t+"")[0];(0,r.addClass)(o,e)}}}}},function(t,e,n){"use strict";function r(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}function i(t,e){if(t){for(var n=t.className,i=(e||"").split(" "),o=0,s=i.length;o<s;o++){var a=i[o];a&&(t.classList?t.classList.add(a):r(t,a)||(n+=" "+a))}t.classList||(t.className=n)}}function o(t,e){if(t&&e){for(var n=e.split(" "),i=" "+t.className+" ",o=0,s=n.length;o<s;o++){var a=n[o];a&&(t.classList?t.classList.remove(a):r(t,a)&&(i=i.replace(" "+a+" "," ")))}t.classList||(t.className=d(i))}}function s(t,e,n){if(t&&e)if("object"===(void 0===e?"undefined":(0,c.default)(e)))for(var r in e)e.hasOwnProperty(r)&&s(t,r,e[r]);else e=v(e),"opacity"===e&&h<9?t.style.filter=isNaN(n)?"":"alpha(opacity="+100*n+")":t.style[e]=n}function a(t,e,n){if(t&&e&&"string"==typeof e){var r=[],i=t.getElementsByTagName("*");if(n)for(var o=0;o<i.length;o++)i[o].getAttribute(e)===n&&r.push(i[o]);else for(var s=0;s<i.length;s++)i[s].getAttribute(e)&&r.push(i[s]);return r}}Object.defineProperty(e,"__esModule",{value:!0}),e.getStyle=e.once=e.off=e.on=void 0;var u=n(46),c=function(t){return t&&t.__esModule?t:{default:t}}(u);e.hasClass=r,e.addClass=i,e.removeClass=o,e.setStyle=s,e.getElementsByAttribute=a;var f="undefined"==typeof window,l=/([\:\-\_]+(.))/g,p=/^moz([A-Z])/,h=f?0:Number(document.documentMode),d=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},v=function(t){return t.replace(l,function(t,e,n,r){return r?n.toUpperCase():n}).replace(p,"Moz$1")},g=e.on=function(){return!f&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)}}(),m=e.off=function(){return!f&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)}}();e.once=function(t,e,n){g(t,e,function r(){n&&n.apply(this,arguments),m(t,e,r)})},e.getStyle=h<9?function(t,e){if(!f){if(!t||!e)return null;e=v(e),"float"===e&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!f){if(!t||!e)return null;e=v(e),"float"===e&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(47),o=r(i),s=n(66),a=r(s),u="function"==typeof a.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};e.default="function"==typeof a.default&&"symbol"===u(o.default)?function(t){return void 0===t?"undefined":u(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":u(t)}},function(t,e,n){t.exports={default:n(48),__esModule:!0}},function(t,e,n){n(49),n(62),t.exports=n(23).f("iterator")},function(t,e,n){"use strict";var r=n(50)(!0);n(26)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(12),i=n(13);t.exports=function(t){return function(e,n){var o,s,a=String(i(e)),u=r(n),c=a.length;return u<0||u>=c?t?"":void 0:(o=a.charCodeAt(u),o<55296||o>56319||u+1===c||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):o:t?a.slice(u,u+2):s-56320+(o-55296<<10)+65536)}}},function(t,e,n){var r=n(52);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(31),i=n(10),o=n(22),s={};n(2)(s,n(6)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(3),i=n(7),o=n(18);t.exports=n(4)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),a=s.length,u=0;a>u;)r.f(t,n=s[u++],e[n]);return t}},function(t,e,n){var r=n(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(5),i=n(57),o=n(58);t.exports=function(t){return function(e,n,s){var a,u=r(e),c=i(u.length),f=o(s,c);if(t&&n!=n){for(;c>f;)if((a=u[f++])!=a)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(12),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(12),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(1),i=n(61),o=n(19)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e,n){n(63);for(var r=n(0),i=n(2),o=n(17),s=n(6)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var c=a[u],f=r[c],l=f&&f.prototype;l&&!l[s]&&i(l,s,c),o[c]=o.Array}},function(t,e,n){"use strict";var r=n(64),i=n(65),o=n(17),s=n(5);t.exports=n(26)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(67),__esModule:!0}},function(t,e,n){n(68),n(74),n(75),n(76),t.exports=n(15).Symbol},function(t,e,n){"use strict";var r=n(0),i=n(1),o=n(4),s=n(27),a=n(30),u=n(69).KEY,c=n(9),f=n(20),l=n(22),p=n(11),h=n(6),d=n(23),v=n(24),g=n(70),m=n(71),y=n(7),b=n(5),w=n(16),_=n(10),x=n(31),P=n(72),T=n(73),S=n(3),O=n(18),E=T.f,M=S.f,C=P.f,j=r.Symbol,N=r.JSON,L=N&&N.stringify,k=h("_hidden"),z=h("toPrimitive"),A={}.propertyIsEnumerable,D=f("symbol-registry"),F=f("symbols"),B=f("op-symbols"),R=Object.prototype,I="function"==typeof j,$=r.QObject,V=!$||!$.prototype||!$.prototype.findChild,W=o&&c(function(){return 7!=x(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(R,e);r&&delete R[e],M(t,e,n),r&&t!==R&&M(R,e,r)}:M,H=function(t){var e=F[t]=x(j.prototype);return e._k=t,e},U=I&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},G=function(t,e,n){return t===R&&G(B,e,n),y(t),e=w(e,!0),y(n),i(F,e)?(n.enumerable?(i(t,k)&&t[k][e]&&(t[k][e]=!1),n=x(n,{enumerable:_(0,!1)})):(i(t,k)||M(t,k,_(1,{})),t[k][e]=!0),W(t,e,n)):M(t,e,n)},Y=function(t,e){y(t);for(var n,r=g(e=b(e)),i=0,o=r.length;o>i;)G(t,n=r[i++],e[n]);return t},X=function(t,e){return void 0===e?x(t):Y(x(t),e)},J=function(t){var e=A.call(this,t=w(t,!0));return!(this===R&&i(F,t)&&!i(B,t))&&(!(e||!i(this,t)||!i(F,t)||i(this,k)&&this[k][t])||e)},q=function(t,e){if(t=b(t),e=w(e,!0),t!==R||!i(F,e)||i(B,e)){var n=E(t,e);return!n||!i(F,e)||i(t,k)&&t[k][e]||(n.enumerable=!0),n}},K=function(t){for(var e,n=C(b(t)),r=[],o=0;n.length>o;)i(F,e=n[o++])||e==k||e==u||r.push(e);return r},Q=function(t){for(var e,n=t===R,r=C(n?B:b(t)),o=[],s=0;r.length>s;)!i(F,e=r[s++])||n&&!i(R,e)||o.push(F[e]);return o};I||(j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===R&&e.call(B,n),i(this,k)&&i(this[k],t)&&(this[k][t]=!1),W(this,t,_(1,n))};return o&&V&&W(R,t,{configurable:!0,set:e}),H(t)},a(j.prototype,"toString",function(){return this._k}),T.f=q,S.f=G,n(35).f=P.f=K,n(25).f=J,n(34).f=Q,o&&!n(14)&&a(R,"propertyIsEnumerable",J,!0),d.f=function(t){return H(h(t))}),s(s.G+s.W+s.F*!I,{Symbol:j});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)h(Z[tt++]);for(var et=O(h.store),nt=0;et.length>nt;)v(et[nt++]);s(s.S+s.F*!I,"Symbol",{for:function(t){return i(D,t+="")?D[t]:D[t]=j(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),s(s.S+s.F*!I,"Object",{create:X,defineProperty:G,defineProperties:Y,getOwnPropertyDescriptor:q,getOwnPropertyNames:K,getOwnPropertySymbols:Q}),N&&s(s.S+s.F*(!I||c(function(){var t=j();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!U(t)){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!U(e))return e}),r[1]=e,L.apply(N,r)}}}),j.prototype[z]||n(2)(j.prototype,z,j.prototype.valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(11)("meta"),i=n(8),o=n(1),s=n(3).f,a=0,u=Object.isExtensible||function(){return!0},c=!n(9)(function(){return u(Object.preventExtensions({}))}),f=function(t){s(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!o(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},h=function(t){return c&&d.NEED&&u(t)&&!o(t,r)&&f(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},function(t,e,n){var r=n(18),i=n(34),o=n(25);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var s,a=n(t),u=o.f,c=0;a.length>c;)u.call(t,s=a[c++])&&e.push(s);return e}},function(t,e,n){var r=n(33);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(5),i=n(35).f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(t){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(r(t))}},function(t,e,n){var r=n(25),i=n(10),o=n(5),s=n(16),a=n(1),u=n(28),c=Object.getOwnPropertyDescriptor;e.f=n(4)?c:function(t,e){if(t=o(t),e=s(e,!0),u)try{return c(t,e)}catch(t){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(24)("asyncIterator")},function(t,e,n){n(24)("observable")},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper",class:[t.direction,{dragging:t.dragging,tabmode:t.tabMode}],on:{touchstart:t._onTouchStart,mousedown:t._onTouchStart,wheel:t._onWheel}},[t.tabMode?n("div",{staticClass:"swiper-tabnav"},[t._l(t.tabMode,function(e,r){return n("span",{ref:"tabs",refInFor:!0,class:{active:t.currentPage===r+1},on:{click:function(e){t.setPage(r+1,!t.tabModeAnimation)}}},[t._v(t._s(e))])}),t._v(" "),n("div",{staticClass:"active-line"})],2):t._e(),t._v(" "),n("div",{ref:"swiperWrapper",staticClass:"swiper-wrapper",style:{transform:"translate3d("+t.translateX+"px,"+t.translateY+"px, 0)","transition-duration":t.transitionDuration+"ms"},on:{transitionend:t._onTransitionEnd}},[t._t("default")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.paginationVisible,expression:"paginationVisible"}],staticClass:"swiper-pagination"},t._l(t.slideEls,function(e,r){return n("span",{staticClass:"swiper-pagination-bullet",class:{active:r+1===t.currentPage},on:{click:function(e){t.paginationClickable&&t.setPage(r+1)}}})}))])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};e.a=o}])});