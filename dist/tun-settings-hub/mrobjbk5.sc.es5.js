/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};TunSettingsHub.loadBundle("mrobjbk5",["exports"],function(t){var e=window.TunSettingsHub.h,n=function(){function t(){this.hideSearch=!1}return t.prototype.render=function(){return e("article",{class:"app-root"},e("stencil-router",null,e("stencil-route-switch",{scrollTopOffset:0},e("stencil-route",{url:"/",component:"home-page",exact:!0}),e("stencil-route",{url:"/system",component:"system-page",exact:!0}),e("stencil-route",{url:"/devices",component:"devices-page",exact:!0}),e("stencil-route",{url:"/phone",component:"phone-page",exact:!0}),e("stencil-route",{component:"not-found"}))))},Object.defineProperty(t,"is",{get:function(){return"app-root"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{hideSearch:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".app-root{min-height:100vh;background-color:var(--dark);color:var(--text)}"},enumerable:!0,configurable:!0}),t}(),o="/",r="./",i=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function a(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function c(t){return t&&t.sensitive?"":"i"}function u(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var o=[],r=0;r<t.length;r++)o.push(u(t[r],e,n).source);return new RegExp("(?:"+o.join("|")+")",c(n))}(t,e,n):function(t,e,n){return function(t,e,n){for(var i=(n=n||{}).strict,s=!1!==n.end,u=a(n.delimiter||o),l=n.delimiters||r,h=[].concat(n.endsWith||[]).map(a).concat("$").join("|"),f="",p=!1,d=0;d<t.length;d++){var y=t[d];if("string"==typeof y)f+=a(y),p=d===t.length-1&&l.indexOf(y[y.length-1])>-1;else{var g=a(y.prefix),v=y.repeat?"(?:"+y.pattern+")(?:"+g+"(?:"+y.pattern+"))*":y.pattern;e&&e.push(y),y.optional?y.partial?f+=g+"("+v+")?":f+="(?:"+g+"("+v+"))?":f+=g+"("+v+")"}}return s?(i||(f+="(?:"+u+")?"),f+="$"===h?"$":"(?="+h+")"):(i||(f+="(?:"+u+"(?="+h+"))?"),p||(f+="(?="+u+"|"+h+")")),new RegExp("^"+f,c(n))}(function(t,e){for(var n,c=[],u=0,l=0,h="",f=e&&e.delimiter||o,p=e&&e.delimiters||r,d=!1;null!==(n=i.exec(t));){var y=n[0],g=n[1],v=n.index;if(h+=t.slice(l,v),l=v+y.length,g)h+=g[1],d=!0;else{var m="",w=t[l],b=n[2],O=n[3],x=n[4],P=n[5];if(!d&&h.length){var S=h.length-1;p.indexOf(h[S])>-1&&(m=h[S],h=h.slice(0,S))}h&&(c.push(h),h="",d=!1);var T=""!==m&&void 0!==w&&w!==m,A="+"===P||"*"===P,j="?"===P||"*"===P,E=m||f,k=O||x;c.push({name:b||u++,prefix:m,delimiter:E,optional:j,repeat:A,partial:T,pattern:k?s(k):"[^"+a(E)+"]+?"})}}return(h||l<t.length)&&c.push(h+t.substr(l)),c}(t,n),e,n)}(t,e,n)}function l(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function h(t,e){return l(t,e)?t.substr(e.length):t}function f(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function p(t){return"/"===t.charAt(0)?t:"/"+t}function d(t){return"/"===t.charAt(0)?t.substr(1):t}function y(t){var e=t.pathname,n=t.search,o=t.hash,r=e||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:"?"+n),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}function g(t){return"/"===t.charAt(0)}function v(t,e){for(var n=e,o=n+1,r=t.length;o<r;n+=1,o+=1)t[n]=t[o];t.pop()}function m(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(t,n){return m(t,e[n])});var n=typeof t;if(n!==typeof e)return!1;if("object"===n){var o=t.valueOf(),r=e.valueOf();if(o!==t||r!==e)return m(o,r);var i=Object.keys(t),a=Object.keys(e);return i.length===a.length&&i.every(function(n){return m(t[n],e[n])})}return!1}function w(t,e,n,o){var r,i;"string"==typeof t?(r=function(t){var e=t||"/",n="",o="",r=e.indexOf("#");-1!==r&&(o=e.substr(r),e=e.substr(0,r));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o}}(t)).state=e:(void 0===(r=Object.assign({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==e&&void 0===r.state&&(r.state=e));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(r.key=n),o?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=function(t,e){void 0===e&&(e="");var n,o=t&&t.split("/")||[],r=e&&e.split("/")||[],i=t&&g(t),a=e&&g(e),s=i||a;if(t&&g(t)?r=o:o.length&&(r.pop(),r=r.concat(o)),!r.length)return"/";if(r.length){var c=r[r.length-1];n="."===c||".."===c||""===c}else n=!1;for(var u=0,l=r.length;l>=0;l--){var h=r[l];"."===h?v(r,l):".."===h?(v(r,l),u++):u&&(v(r,l),u--)}if(!s)for(;u--;u)r.unshift("..");!s||""===r[0]||r[0]&&g(r[0])||r.unshift("");var f=r.join("/");return n&&"/"!==f.substr(-1)&&(f+="/"),f}(r.pathname,o.pathname)):r.pathname=o.pathname:r.pathname||(r.pathname="/"),r.query=(i=r.search)?(/^[?#]/.test(i)?i.slice(1):i).split("&").reduce(function(t,e){var n=e.split("="),o=n[0],r=n[1];return t[o]=r?decodeURIComponent(r.replace(/\+/g," ")):"",t},{}):{},r}var b={},O=1e4,x=0;function P(t,e){void 0===e&&(e={}),"string"==typeof e&&(e={path:e});var n=e.path,o=void 0===n?"/":n,r=e.exact,i=void 0!==r&&r,a=e.strict,s=function(t,e){var n=""+e.end+e.strict,o=b[n]||(b[n]={}),r=JSON.stringify(t);if(o[r])return o[r];var i=[],a={re:u(t,i,e),keys:i};return x<O&&(o[r]=a,x+=1),a}(o,{end:i,strict:void 0!==a&&a}),c=s.re,l=s.keys,h=c.exec(t);if(!h)return null;var f=h[0],p=h.slice(1),d=t===f;return i&&!d?null:{path:o,url:"/"===o&&""===f?"/":f,isExact:d,params:l.reduce(function(t,e,n){return t[e.name]=p[n],t},{})}}function S(t,n){return e("context-consumer",{subscribe:t,renderer:n})}var T=function(t,n){void 0===n&&(n=S);var o=new Map,r={historyType:"browser",location:null,titleSuffix:"",root:"/",history:null,routeViewsUpdated:function(){}};function i(t,e){Array.isArray(t)?t.slice().forEach(function(t){e[t]=r[t]}):e[t]=Object.assign({},r),e.forceUpdate()}function a(t){return function(e){o.has(e)||(o.set(e,t),i(t,e))}}function s(t,e){return a(e)(t),function(){o.delete(t)}}return{Provider:function(t){var e=t.state,n=t.children;return r=e,o.forEach(i),n},Consumer:function(t){var e=t.children;return n(s,e[0])},wrapConsumer:function(t,n){var o=t.is;return function(t){var r=t.children,i=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&(n[o[r]]=t[o[r]])}return n}(t,["children"]);return e(o,Object.assign({ref:a(n)},i),r)}},injectProps:function(t,e){var n=null,o=Object.keys(t.properties).find(function(e){return 1==t.properties[e].elementRef});if(null==o)throw new Error("Please ensure that your Component "+t.is+' has an attribtue with "@Element" decorator. This is required to be able to inject properties.');var r=t.prototype.componentWillLoad;t.prototype.componentWillLoad=function(){if(n=s(this[o],e),r)return r.bind(this)()};var i=t.prototype.componentDidUnload;t.prototype.componentDidUnload=function(){if(n(),i)return i.bind(this)()}}}}(),A=function(){function t(){this.group=null,this.groupMatch=null,this.componentUpdated=null,this.match=null,this.unsubscribe=function(){},this.componentProps={},this.exact=!1,this.routeRender=null,this.scrollTopOffset=null,this.scrollOnNextRender=!1,this.previousMatch=null}return t.prototype.computeMatch=function(){return this.previousMatch=this.match,this.group?this.groupMatch?this.match=P(this.location.pathname,{path:this.url,exact:this.exact,strict:!0}):void 0:this.match=P(this.location.pathname,{path:this.url,exact:this.exact,strict:!0})},t.prototype.componentDidUpdate=function(){var t=this;Promise.all(Array.from(this.el.children).map(function(t){return t.componentOnReady?t.componentOnReady():Promise.resolve(t)})).then(function(){var e,n;"function"==typeof t.componentUpdated?t.componentUpdated({scrollTopOffset:t.scrollTopOffset}):!t.match||(e=t.match,n=t.previousMatch,null==e&&null==n||null!=n&&e&&n&&e.path===n.path&&e.url===n.url&&m(e.params,n.params))||t.routeViewsUpdated({scrollTopOffset:t.scrollTopOffset})})},t.prototype.render=function(){if(!this.match)return null;var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender)return this.routeRender(Object.assign({},t,{component:this.component}));if(this.component){var n=this.component;return e(n,Object.assign({},t))}},Object.defineProperty(t,"is",{get:function(){return"stencil-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group"},groupMatch:{type:"Any",attr:"group-match"},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{state:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:!0,configurable:!0}),t}();T.injectProps(A,["location","history","historyType","routeViewsUpdated"]);var j=function(){function t(){this.group=window.crypto?([1e7].toString()+-1e3.toString()+-4e3.toString()+-8e3.toString()+-1e11.toString()).replace(/[018]/g,function(t){return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):(1e17*Math.random()).toString().match(/.{4}/g).join("-"),this.scrollTopOffset=null,this.activeIndex=null}return t.prototype.componentWillLoad=function(){this.regenerateSubscribers(this.location)},t.prototype.regenerateSubscribers=function(t){return e=this,n=void 0,r=function(){var e,n=this;return __generator(this,function(o){return e=null,this.subscribers=Array.from(this.el.children).map(function(n,o){var r=P(t.pathname,{path:n.url,exact:n.exact,strict:!0});return r&&null===e&&(e=o),{el:n,match:r}}),this.activeIndex===e?(this.subscribers[this.activeIndex].el.groupMatch=this.subscribers[this.activeIndex].match,[2]):(this.activeIndex=e,new Promise(function(t){var e=n.subscribers[n.activeIndex];e.el.scrollTopOffset=n.scrollTopOffset,e.el.group=n.group,e.el.groupMatch=e.match,e.el.componentUpdated=t}).then(function(t){n.queue.write(function(){n.subscribers.forEach(function(t,e){if(t.el.componentUpdated=null,e===n.activeIndex)return t.el.style.display=null;t.el.scrollTopOffset=n.scrollTopOffset,t.el.group=n.group,t.el.groupMatch=null,t.el.style.display="none"})}),n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},t))}),[2])})},new((o=void 0)||(o=Promise))(function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(e){e.done?t(e.value):new o(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,n||[])).next())});var e,n,o,r},t.prototype.render=function(){return e("slot",null)},Object.defineProperty(t,"is",{get:function(){return"stencil-route-switch"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},group:{type:String,attr:"group",reflectToAttr:!0},location:{type:"Any",attr:"location",watchCallbacks:["regenerateSubscribers"]},queue:{context:"queue"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"}}},enumerable:!0,configurable:!0}),t}();function E(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.error.apply(console,e)}function k(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.warn.apply(console,e)}T.injectProps(j,["location","routeViewsUpdated"]);var R=function(){var t,e=[];return{setPrompt:function(e){return k(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,r){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):(k(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==i)}else r(!0)},appendListener:function(t){var n=!0,o=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];n&&t.apply(void 0,e)};return e.push(o),function(){n=!1,e=e.filter(function(t){return t!==o})}},notifyListeners:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.forEach(function(e){return e.apply(void 0,t)})}}},U=!("undefined"==typeof window||!window.document||!window.document.createElement),L=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},M=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},I=function(t,e){return e(window.confirm(t))},_=function(t){try{var e=window[t],n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==e.length}},H=function(t){void 0===t&&(t="scrollPositions");var e=new Map;function n(t,n){if(e.set(t,n),_("sessionStorage")){var o=[];e.forEach(function(t,e){o.push([e,t])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(o))}}return _("sessionStorage")&&(e=window.sessionStorage.getItem(t)?new Map(JSON.parse(window.sessionStorage.getItem(t))):e),"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:n,get:function(t){return e.get(t)},has:function(t){return e.has(t)},capture:function(t){n(t,[window.scrollX,window.scrollY])}}},C=function(){try{return window.history.state||{}}catch(t){return{}}},V={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+d(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:d,decodePath:p},slash:{encodePath:p,decodePath:p}},q=function(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},D=function(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)},N={browser:function(t){void 0===t&&(t={}),E(U,"Browser history needs a DOM");var e,n=window.history,o=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,r=!(-1===window.navigator.userAgent.indexOf("Trident")),i=H(),a=t.forceRefresh,s=void 0!==a&&a,c=t.getUserConfirmation,u=void 0===c?I:c,d=t.keyLength,g=void 0===d?6:d,v=t.basename?f(p(t.basename)):"",m=function(t){var e=(t=t||{}).key,n=t.state,o=window.location,r=o.pathname+o.search+o.hash;return k(!v||l(r,v),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+r+'" to begin with "'+v+'".'),v&&(r=h(r,v)),w(r,n,e)},b=function(){return Math.random().toString(36).substr(2,g)},O=R(),x=function(t){i.capture(W.location.key),Object.assign(W,t),W.location.scrollPosition=i.get(W.location.key),W.length=n.length,O.notifyListeners(W.location,W.action)},P=function(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||A(m(t.state))},S=function(){A(m(C()))},T=!1,A=function(t){T?(T=!1,x()):O.confirmTransitionTo(t,"POP",u,function(e){e?x({action:"POP",location:t}):j(t)})},j=function(t){var e=W.location,n=V.indexOf(e.key);-1===n&&(n=0);var o=V.indexOf(t.key);-1===o&&(o=0);var r=n-o;r&&(T=!0,D(r))},_=m(C()),V=[_.key],q=function(t){return v+y(t)},D=function(t){n.go(t)},N=0,$=function(t){1===(N+=t)?(L(window,"popstate",P),r&&L(window,"hashchange",S)):0===N&&(M(window,"popstate",P),r&&M(window,"hashchange",S))},B=!1,W={length:n.length,action:"POP",location:_,createHref:q,push:function(t,e){k(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var r=w(t,e,b(),W.location);O.confirmTransitionTo(r,"PUSH",u,function(t){if(t){var e=q(r),i=r.key,a=r.state;if(o)if(n.pushState({key:i,state:a},null,e),s)window.location.href=e;else{var c=V.indexOf(W.location.key),u=V.slice(0,-1===c?0:c+1);u.push(r.key),V=u,x({action:"PUSH",location:r})}else k(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=e}})},replace:function(t,e){k(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var r=w(t,e,b(),W.location);O.confirmTransitionTo(r,"REPLACE",u,function(t){if(t){var e=q(r),i=r.key,a=r.state;if(o)if(n.replaceState({key:i,state:a},null,e),s)window.location.replace(e);else{var c=V.indexOf(W.location.key);-1!==c&&(V[c]=r.key),x({action:"REPLACE",location:r})}else k(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(e)}})},go:D,goBack:function(){return D(-1)},goForward:function(){return D(1)},block:function(t){void 0===t&&(t="");var e=O.setPrompt(t);return B||($(1),B=!0),function(){return B&&(B=!1,$(-1)),e()}},listen:function(t){var e=O.appendListener(t);return $(1),function(){$(-1),e()}}};return W},hash:function(t){void 0===t&&(t={}),E(U,"Hash history needs a DOM");var e=window.history,n=-1===window.navigator.userAgent.indexOf("Firefox"),o=t.getUserConfirmation,r=void 0===o?I:o,i=t.hashType,a=void 0===i?"slash":i,s=t.basename?f(p(t.basename)):"",c=V[a],u=c.encodePath,d=c.decodePath,g=function(){var t=d(q());return k(!s||l(t,s),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+s+'".'),s&&(t=h(t,s)),w(t)},v=R(),b=function(t){Object.assign(W,t),W.length=e.length,v.notifyListeners(W.location,W.action)},O=!1,x=null,P=function(){var t,e,n=q(),o=u(n);if(n!==o)D(o);else{var r=g(),i=W.location;if(!O&&(e=r,(t=i).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&m(t.state,e.state)))return;if(x===y(r))return;x=null,S(r)}},S=function(t){O?(O=!1,b()):v.confirmTransitionTo(t,"POP",r,function(e){e?b({action:"POP",location:t}):T(t)})},T=function(t){var e=W.location,n=H.lastIndexOf(y(e));-1===n&&(n=0);var o=H.lastIndexOf(y(t));-1===o&&(o=0);var r=n-o;r&&(O=!0,C(r))},A=q(),j=u(A);A!==j&&D(j);var _=g(),H=[y(_)],C=function(t){k(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)},N=0,$=function(t){1===(N+=t)?L(window,"hashchange",P):0===N&&M(window,"hashchange",P)},B=!1,W={length:e.length,action:"POP",location:_,createHref:function(t){return"#"+u(s+y(t))},push:function(t,e){k(void 0===e,"Hash history cannot push state; it is ignored");var n=w(t,void 0,void 0,W.location);v.confirmTransitionTo(n,"PUSH",r,function(t){if(t){var e=y(n),o=u(s+e);if(q()!==o){x=e,function(t){window.location.hash=t}(o);var r=H.lastIndexOf(y(W.location)),i=H.slice(0,-1===r?0:r+1);i.push(e),H=i,b({action:"PUSH",location:n})}else k(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),b()}})},replace:function(t,e){k(void 0===e,"Hash history cannot replace state; it is ignored");var n=w(t,void 0,void 0,W.location);v.confirmTransitionTo(n,"REPLACE",r,function(t){if(t){var e=y(n),o=u(s+e);q()!==o&&(x=e,D(o));var r=H.indexOf(y(W.location));-1!==r&&(H[r]=e),b({action:"REPLACE",location:n})}})},go:C,goBack:function(){return C(-1)},goForward:function(){return C(1)},block:function(t){void 0===t&&(t="");var e=v.setPrompt(t);return B||($(1),B=!0),function(){return B&&(B=!1,$(-1)),e()}},listen:function(t){var e=v.appendListener(t);return $(1),function(){$(-1),e()}}};return W}},$=function(){function t(){var t=this;this.root="/",this.historyType="browser",this.titleSuffix="",this.scrollTopOffset=null,this.routeViewsUpdated=function(e){void 0===e&&(e={}),t.scrollTo(e.scrollTopOffset||t.scrollTopOffset)}}return t.prototype.componentWillLoad=function(){var t=this;this.history=N[this.historyType](),this.history.listen(function(e){return n=t,o=void 0,i=function(){return __generator(this,function(t){return e=this.getLocation(e),this.location=e,[2]})},new((r=void 0)||(r=Promise))(function(t,e){function a(t){try{c(i.next(t))}catch(t){e(t)}}function s(t){try{c(i.throw(t))}catch(t){e(t)}}function c(e){e.done?t(e.value):new r(function(t){t(e.value)}).then(a,s)}c((i=i.apply(n,o||[])).next())});var n,o,r,i}),this.location=this.getLocation(this.history.location)},t.prototype.scrollTo=function(t){var e=this;if(null!=t&&!this.isServer&&this.history)return"POP"===this.history.action&&null!=this.history.location.scrollPosition?this.queue.write(function(){window.scrollTo(e.history.location.scrollPosition[0],e.history.location.scrollPosition[1])}):this.queue.write(function(){window.scrollTo(0,t)})},t.prototype.getLocation=function(t){var e=0==t.pathname.indexOf(this.root)?"/"+t.pathname.slice(this.root.length):t.pathname;return Object.assign({},t,{pathname:e})},t.prototype.render=function(){var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return e(T.Provider,{state:t},e("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stencil-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}},enumerable:!0,configurable:!0}),t}();t.AppRoot=n,t.StencilRoute=A,t.StencilRouteSwitch=j,t.StencilRouter=$,Object.defineProperty(t,"__esModule",{value:!0})});