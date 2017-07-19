!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.ReactLazysizes=t(require("react"),require("react-dom")):e.ReactLazysizes=t(e.React,e.ReactDOM)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a);t.default=o.default,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var a=e,o=t,i=r;n=!1,null===a&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,o);if(void 0!==s){if("value"in s)return s.value;var c=s.get;if(void 0===c)return;return c.call(i)}var u=Object.getPrototypeOf(a);if(null===u)return;e=u,t=o,r=i,n=!0,s=u=void 0}},l=r(2),f=n(l),d=r(3),p=n(d),m=r(4),v=n(m),y=r(5),h=n(y),g=r(6),z=n(g),b=!("undefined"==typeof window||!window.document||!window.document.createElement),A=null;b&&(A=r(11));var C=function(e){function t(){var e=this;o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this.componentWillMount=function(){var t=e.props,r=t.iframe,n=t.dataSrc;r&&!n&&(0,v.default)(!1,"Prop dataSrc is required on iframe.")},this.componentWillUpdate=function(t){for(var r=!1,n=["src","dataSizes","dataSrc","dataSrcSet","className","iframe"],a=0;a<n.length;a++){var o=n[a],i="dataSrcSet"===o?e.handleSrcSet(e.props[o]):e.props[o],s="dataSrcSet"===o?e.handleSrcSet(t[o]):t[o];if(i!==s){r=!0;break}}if(r&&A){var c=p.default.findDOMNode(e);A.hC(c,"lazyloaded")&&A.rC(c,"lazyloaded")}},this.componentDidUpdate=function(){if(A){var t=p.default.findDOMNode(e);A.hC(t,"lazyloaded")||A.hC(t,"lazyload")||A.aC(t,"lazyload")}},this.handleSrcSet=function(e){var t=e;if("object"==typeof e){if(!Array.isArray(e)){t=[];for(var r in e)e.hasOwnProperty(r)&&t.push({variant:r,src:e[r]})}t=t.map(function(e){return e.src+" "+e.variant}).join(", ")}return t}}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.src,r=e.dataSizes,n=e.dataSrc,o=e.dataSrcSet,i=e.className,c=e.iframe,u=a(e,["src","dataSizes","dataSrc","dataSrcSet","className","iframe"]);return o=this.handleSrcSet(o),i=(0,h.default)(["lazyload",i]).trim(),c?f.default.createElement("iframe",s({},u,{src:n?"":t,"data-src":n,className:i})):f.default.createElement("img",s({},u,{src:t,"data-src":n,"data-sizes":r,"data-srcset":o,className:i}))}}],[{key:"propTypes",value:{src:z.default.string,dataSizes:z.default.string,dataSrc:z.default.string,dataSrcSet:z.default.oneOfType([z.default.string,z.default.object,z.default.array]),className:z.default.string,iframe:z.default.bool},enumerable:!0},{key:"defaultProps",value:{src:"data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==",dataSizes:"auto",iframe:!1},enumerable:!0}]),t}(f.default.Component);t.default=C,e.exports=t.default},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";var n=function(e,t,r,n,a,o,i,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,a,o,i,s],l=0;c=new Error(t.replace(/%s/g,function(){return u[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}};e.exports=n},function(e,t,r){var n,a;!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n))e.push(r.apply(null,n));else if("object"===a)for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=r:(n=[],a=function(){return r}.apply(t,n),!(void 0!==a&&(e.exports=a)))}()},function(e,t,r){e.exports=r(7)()},function(e,t,r){"use strict";var n=r(8),a=r(9),o=r(10);e.exports=function(){function e(e,t,r,n,i,s){s!==o&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n,o,i,s,c){if(a(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,i,s,c],f=0;u=new Error(t.replace(/%s/g,function(){return l[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var a=function(e){};e.exports=n},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(e,t){!function(t,r){var n=r(t,t.document);t.lazySizes=n,"object"==typeof e&&e.exports&&(e.exports=n)}(window,function(e,t){"use strict";if(t.getElementsByClassName){var r,n=t.documentElement,a=e.HTMLPictureElement&&"sizes"in t.createElement("img"),o="addEventListener",i="getAttribute",s=e[o],c=e.setTimeout,u=e.requestAnimationFrame||c,l=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],d={},p=Array.prototype.forEach,m=function(e,t){return d[t]||(d[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),d[t].test(e[i]("class")||"")&&d[t]},v=function(e,t){m(e,t)||e.setAttribute("class",(e[i]("class")||"").trim()+" "+t)},y=function(e,t){var r;(r=m(e,t))&&e.setAttribute("class",(e[i]("class")||"").replace(r," "))},h=function(e,t,r){var n=r?o:"removeEventListener";r&&h(e,t),f.forEach(function(r){e[n](r,t)})},g=function(e,r,n,a,o){var i=t.createEvent("CustomEvent");return i.initCustomEvent(r,!a,!o,n||{}),e.dispatchEvent(i),i},z=function(t,n){var o;!a&&(o=e.picturefill||r.pf)?o({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},b=function(e,t){return(getComputedStyle(e,null)||{})[t]},A=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},C=function(t){var r,n=0,a=e.Date,o=function(){r=!1,n=a.now(),t()},i=function(){c(o)},s=function(){u(i)};return function(){if(!r){var e=125-(a.now()-n);r=!0,e<6&&(e=6),c(s,e)}}},S=function(){var a,f,d,A,S,w,E,x,_,P,M,N,j,R,T,D=/^img$/i,k=/^iframe$/i,L="onscroll"in e&&!/glebot/.test(navigator.userAgent),W=0,B=0,q=0,F=0,I=function(e){q--,e&&e.target&&h(e.target,I),(!e||q<0||!e.target)&&(q=0)},U=function(e,r){var a,o=e,i="hidden"==b(t.body,"visibility")||"hidden"!=b(e,"visibility");for(_-=r,N+=r,P-=r,M+=r;i&&(o=o.offsetParent)&&o!=t.body&&o!=n;)i=(b(o,"opacity")||1)>0,i&&"visible"!=b(o,"overflow")&&(a=o.getBoundingClientRect(),i=M>a.left&&P<a.right&&N>a.top-1&&_<a.bottom+1);return i},$=function(){var e,t,o,s,c,u,l,p,m;if((S=r.loadMode)&&q<8&&(e=a.length)){t=0,F++,null==R&&("expand"in r||(r.expand=n.clientHeight>600?n.clientWidth>600?550:410:359),j=r.expand,R=j*r.expFactor),B<R&&q<1&&F>3&&S>2?(B=R,F=0):B=S>1&&F>2&&q<6?j:W;for(;t<e;t++)if(a[t]&&!a[t]._lazyRace)if(L)if((p=a[t][i]("data-expand"))&&(u=1*p)||(u=B),m!==u&&(E=innerWidth+u*T,x=innerHeight+u,l=u*-1,m=u),o=a[t].getBoundingClientRect(),(N=o.bottom)>=l&&(_=o.top)<=x&&(M=o.right)>=l*T&&(P=o.left)<=E&&(N||M||P||_)&&(d&&q<3&&!p&&(S<3||F<4)||U(a[t],u))){if(Q(a[t]),c=!0,q>9)break}else!c&&d&&!s&&q<4&&F<4&&S>2&&(f[0]||r.preloadAfterLoad)&&(f[0]||!p&&(N||M||P||_||"auto"!=a[t][i](r.sizesAttr)))&&(s=f[0]||a[t]);else Q(a[t]);s&&!c&&Q(s)}},H=C($),J=function(e){v(e.target,r.loadedClass),y(e.target,r.loadingClass),h(e.target,V)},V=function(e){e={target:e.target},u(function(){J(e)})},G=function(e,t){try{e.contentWindow.location.replace(t)}catch(r){e.src=t}},Y=function(e){var t,n,a=e[i](r.srcsetAttr);(t=r.customMedia[e[i]("data-media")||e[i]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a),t&&(n=e.parentNode,n.insertBefore(e.cloneNode(),e),n.removeChild(e))},K=function(){var e,t=[],r=function(){for(;t.length;)t.shift()();e=!1},n=function(n){t.push(n),e||(e=!0,u(r))};return{add:n,run:r}}(),Q=function(e){var t,n,a,o,s,f,b,C=D.test(e.nodeName),S=C&&(e[i](r.sizesAttr)||e[i]("sizes")),w="auto"==S;(!w&&d||!C||!e.src&&!e.srcset||e.complete||m(e,r.errorClass))&&(w&&(b=e.offsetWidth),e._lazyRace=!0,q++,r.rC&&(b=r.rC(e,b)||b),K.add(function(){(s=g(e,"lazybeforeunveil")).defaultPrevented||(S&&(w?(O.updateElem(e,!0,b),v(e,r.autosizesClass)):e.setAttribute("sizes",S)),n=e[i](r.srcsetAttr),t=e[i](r.srcAttr),C&&(a=e.parentNode,o=a&&l.test(a.nodeName||"")),f=s.detail.firesLoad||"src"in e&&(n||t||o),s={target:e},f&&(h(e,I,!0),clearTimeout(A),A=c(I,2500),v(e,r.loadingClass),h(e,V,!0)),o&&p.call(a.getElementsByTagName("source"),Y),n?e.setAttribute("srcset",n):t&&!o&&(k.test(e.nodeName)?G(e,t):e.src=t),(n||o)&&z(e,{src:t})),u(function(){e._lazyRace&&delete e._lazyRace,y(e,r.lazyClass),f&&!e.complete||(f?I(s):q--,J(s))})}))},X=function(){if(!d){if(Date.now()-w<999)return void c(X,999);var e,n=function(){r.loadMode=3,H()};d=!0,r.loadMode=3,t.hidden?($(),K.run()):H(),s("scroll",function(){3==r.loadMode&&(r.loadMode=2),clearTimeout(e),e=c(n,99)},!0)}};return{_:function(){w=Date.now(),a=t.getElementsByClassName(r.lazyClass),f=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),T=r.hFac,s("scroll",H,!0),s("resize",H,!0),e.MutationObserver?new MutationObserver(H).observe(n,{childList:!0,subtree:!0,attributes:!0}):(n[o]("DOMNodeInserted",H,!0),n[o]("DOMAttrModified",H,!0),setInterval(H,999)),s("hashchange",H,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[o](e,H,!0)}),/d$|^c/.test(t.readyState)?X():(s("load",X),t[o]("DOMContentLoaded",H),c(X,2e4)),H(a.length>0)},checkElems:H,unveil:Q}}(),O=function(){var e,n=function(e,t,r){var n,a,o,i,s=e.parentNode;if(s&&(r=A(e,s,r),i=g(e,"lazybeforesizes",{width:r,dataAttr:!!t}),!i.defaultPrevented&&(r=i.detail.width,r&&r!==e._lazysizesWidth))){if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),l.test(s.nodeName||""))for(n=s.getElementsByTagName("source"),a=0,o=n.length;a<o;a++)n[a].setAttribute("sizes",r);i.detail.dataAttr||z(e,i.detail)}},a=function(){var t,r=e.length;if(r)for(t=0;t<r;t++)n(e[t])},o=C(a);return{_:function(){e=t.getElementsByClassName(r.autosizesClass),s("resize",o)},checkElems:o,updateElem:n}}(),w=function(){w.i||(w.i=!0,O._(),S._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.7,hFac:.8,loadMode:2};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,c(function(){r.init&&w()})}(),{cfg:r,autoSizer:O,loader:S,init:w,uP:z,aC:v,rC:y,hC:m,fire:g,gW:A}}})}])});