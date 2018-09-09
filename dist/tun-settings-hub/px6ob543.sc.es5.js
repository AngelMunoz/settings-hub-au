/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};TunSettingsHub.loadBundle("px6ob543",["exports"],function(e){var n=window.TunSettingsHub.h,t=[{name:"System",icon:"mdl2 mdl2-2x mdl2-go-to-start",description:"Display, sound, notifications, power",url:"/system"},{name:"Devices",icon:"mdl2 mdl2-2x mdl2-keyboard-classic",description:"Bluetooth, printers, mouse",url:"/devices"},{name:"Phone",icon:"mdl2 mdl2-2x mdl2-cellphone",description:"Link your Android, iPhone",url:"/phone"},{name:"Networks & Internet",icon:"mdl2 mdl2-2x mdl2-globe",description:"Wi-Fi, airplane mode, VPN",url:"/networks"},{name:"Personalization",icon:"mdl2 mdl2-2x mdl2-preview-link",description:"Background, lock screen, colors",url:"/personalization"},{name:"Apps",icon:"mdl2 mdl2-2x mdl2-all-apps",description:"Uninstall, defaults, optional features",url:"/apps"},{name:"Accounts",icon:"mdl2 mdl2-2x mdl2-contact",description:"Your accounts, email, sync, work, family",url:"/accounts"},{name:"Time & Language",icon:"mdl2 mdl2-2x mdl2-characters",description:"Speech, region, date",url:"/time-and-language"},{name:"Gaming",icon:"mdl2 mdl2-2x mdl2-switch-apps",description:"Game bar, DVR, broadcasting, game mode",url:"/gaming"},{name:"Ease of Access",icon:"mdl2 mdl2-2x mdl2-view-all",description:"Narrator, Magnifier, high contrast",url:"/ease-of-access"},{name:"Privacy",icon:"mdl2 mdl2-2x mdl2-admin",description:"Location, camera",url:"/privacy"},{name:"Update & Security",icon:"mdl2 mdl2-2x mdl2-sync",description:"Windows Updates, recovery, backup",url:"/update-and-security"},{name:"Search",icon:"mdl2 mdl2-2x mdl2-zoom",description:"Language, permissions, history",url:"/search"}],r=function(){function e(){this.isLoading=!1,this.tileList=[]}return e.prototype.render=function(){var e=this;return n("article",{class:"home-page"},n("header",{class:"home-page__header"},n("section",null,n("label",{class:"home-page__header__title"},"Settings Hub"),n("tun-search-bar",null))),this.isLoading?n("tun-loader",null):"",n("main",{class:"home-page__tiles"},this.tileList.map(function(t){return n("tun-tile",{onClick:e.navigate.bind(e,t.url)},n("header",{class:"header",slot:"header"},n("i",{class:t.icon})),n("main",{class:"main"},n("label",null,t.name),n("footer",{class:"footer"},n("small",null,t.description))))})))},e.prototype.componentWillLoad=function(){this.isLoading=!0},e.prototype.componentDidLoad=function(){return e=this,n=void 0,i=function(){var e;return __generator(this,function(n){switch(n.label){case 0:return e=this,[4,function(e,n){return void 0===n&&(n=200),r=this,i=void 0,a=function(){return __generator(this,function(e){switch(e.label){case 0:return[4,new Promise(function(e){return setTimeout(function(){return e()},n)})];case 1:return e.sent(),[2,t]}})},new((o=void 0)||(o=Promise))(function(e,n){function t(e){try{c(a.next(e))}catch(e){n(e)}}function l(e){try{c(a.throw(e))}catch(e){n(e)}}function c(n){n.done?e(n.value):new o(function(e){e(n.value)}).then(t,l)}c((a=a.apply(r,i||[])).next())});var r,i,o,a}(0,2500)];case 1:return e.tileList=n.sent(),this.isLoading=!1,[2]}})},new((r=void 0)||(r=Promise))(function(t,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function l(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){e.done?t(e.value):new r(function(n){n(e.value)}).then(a,l)}c((i=i.apply(e,n||[])).next())});var e,n,r,i},e.prototype.navigate=function(e){this.history.push(e)},Object.defineProperty(e,"is",{get:function(){return"home-page"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{history:{type:"Any",attr:"history"},isLoading:{state:!0},tileList:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".home-page{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-item-align:center;align-self:center;padding-top:3em}.home-page__header{-ms-flex-item-align:center;align-self:center;text-align:center}.home-page__header .home-page__header__title{font-weight:lighter;font-size:24px;margin:1em}.home-page__tiles{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}"},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){}return e.prototype.render=function(){return n("menu",{class:"tun-loader"},n("a",{class:"tun-circle"}),n("a",{class:"tun-circle"}),n("a",{class:"tun-circle"}),n("a",{class:"tun-circle"}),n("a",{class:"tun-circle"}))},Object.defineProperty(e,"is",{get:function(){return"tun-loader"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".tun-loader{--tun-loader-width:40px;--tun-loader-padding-top:100px;--tun-loader-circle-size:38px;--tun-loader-circle-speed:5s;--tun-loader-circle-color:var(--accent);position:relative;padding-top:var(--tun-loader-padding-top);width:var(--tun-loader-width);margin:auto;z-index:10000}.tun-circle{position:absolute;width:var(--tun-loader-circle-size);height:var(--tun-loader-circle-size);opacity:0;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:orbit;animation-name:orbit;-webkit-animation-duration:var(--tun-loader-circle-speed);animation-duration:var(--tun-loader-circle-speed)}.tun-circle:after{content:'';position:absolute;width:5px;height:5px;border-radius:5px;background:var(--tun-loader-circle-color)}.tun-circle:nth-child(2){-webkit-animation-delay:240ms;animation-delay:240ms}.tun-circle:nth-child(3){-webkit-animation-delay:480ms;animation-delay:480ms}.tun-circle:nth-child(4){-webkit-animation-delay:720ms;animation-delay:720ms}.tun-circle:nth-child(5){-webkit-animation-delay:960ms;animation-delay:960ms}\@-webkit-keyframes orbit{0%{-webkit-transform:rotate(225deg);transform:rotate(225deg);opacity:1;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}7%{-webkit-transform:rotate(345deg);transform:rotate(345deg);-webkit-animation-timing-function:linear;animation-timing-function:linear}30%{-webkit-transform:rotate(455deg);transform:rotate(455deg);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}39%{-webkit-transform:rotate(690deg);transform:rotate(690deg);-webkit-animation-timing-function:linear;animation-timing-function:linear}70%{-webkit-transform:rotate(815deg);transform:rotate(815deg);opacity:1;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}75%{-webkit-transform:rotate(945deg);transform:rotate(945deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%,76%{-webkit-transform:rotate(945deg);transform:rotate(945deg);opacity:0}}\@keyframes orbit{0%{-webkit-transform:rotate(225deg);transform:rotate(225deg);opacity:1;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}7%{-webkit-transform:rotate(345deg);transform:rotate(345deg);-webkit-animation-timing-function:linear;animation-timing-function:linear}30%{-webkit-transform:rotate(455deg);transform:rotate(455deg);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}39%{-webkit-transform:rotate(690deg);transform:rotate(690deg);-webkit-animation-timing-function:linear;animation-timing-function:linear}70%{-webkit-transform:rotate(815deg);transform:rotate(815deg);opacity:1;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}75%{-webkit-transform:rotate(945deg);transform:rotate(945deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%,76%{-webkit-transform:rotate(945deg);transform:rotate(945deg);opacity:0}}"},enumerable:!0,configurable:!0}),e}(),o=function(){function e(){}return e.prototype.render=function(){return n("article",{class:"tun-tile"},n("slot",{name:"header"}),n("slot",null),n("slot",{name:"footer"}))},Object.defineProperty(e,"is",{get:function(){return"tun-tile"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".tun-tile{--tile-height:85px;--tile-width:210px;--tile-margin:1rem;--tile-background-color:var(--dark);--tile-font-color:var(--text);--tun-flex-direction:row;--tun-justify-content:center;--tun-text-align:center;--tun-align-items:center;--tun-font-size:16px;--tun-padding:0.2rem;--tun-border:1px solid var(--dark);--tun-tile-hover-color:var(--accent);--tun-tile-active-color:var(--primary);--tile-icon:var(--accent);--tile-main-padding:10px;--tile-footer-text-color:var(--secondary-text);--tile-footer-font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:var(--tun-flex-direction);flex-direction:var(--tun-flex-direction);-webkit-box-pack:var(--tun-justify-content);-ms-flex-pack:var(--tun-justify-content);justify-content:var(--tun-justify-content);-webkit-box-align:var(--tun-align-items);-ms-flex-align:var(--tun-align-items);align-items:var(--tun-align-items);text-align:var(--tun-text-align);font-size:var(--tun-font-size);margin:var(--tile-margin);padding:var(--tun-padding);height:var(--tile-height);width:var(--tile-width);background-color:var(--tile-background-color);color:var(--tile-font-color);border:var(--tun-border)}.tun-tile:hover{border:1px solid var(--tun-tile-hover-color)}.tun-tile:active{border:2px dashed var(--tun-tile-active-color);border-radius:.2em}.tun-tile .mdl2{color:var(--tile-icon)}.tun-tile .main{padding:var(--tile-main-padding)}.tun-tile .footer{color:var(--tile-footer-text-color);font-size:var(--tile-footer-font-size)}"},enumerable:!0,configurable:!0}),e}();e.HomePage=r,e.TunLoader=i,e.TunTile=o,Object.defineProperty(e,"__esModule",{value:!0})});