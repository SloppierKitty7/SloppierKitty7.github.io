(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{349:function(t,e,n){t.exports=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){var e=void 0;if("string"!=typeof t)try{e=JSON.stringify(t)}catch(t){throw"Failed to copy value to clipboard. Unknown type."}else e=t;var n=document.createElement("textarea");if(n.value=e,n.setAttribute("readonly",""),n.style.cssText="position:fixed;pointer-events:none;z-index:-9999;opacity:0;",document.body.appendChild(n),navigator.userAgent.match(/ipad|ipod|iphone/i)){n.contentEditable=!0,n.readOnly=!0;var o=document.createRange();o.selectNodeContents(n);var r=window.getSelection();r.removeAllRanges(),r.addRange(o),n.setSelectionRange(0,999999)}else n.select();var a=!1;try{a=document.execCommand("copy")}catch(t){console.warn(t)}return document.body.removeChild(n),a};e.default={install:function(t){t.prototype.$clipboard=o;var e=function(t){return function(){return"$"+t++}}(1),n={},r=function(t){t&&(n[t]=null,delete n[t])},a=function(t){var o=e();return n[o]=t,o};t.directive("clipboard",{bind:function(t,e){var r=e.arg,i=e.value;switch(r){case"error":var c=a(i);return void(t.dataset.clipboardErrorHandler=c);case"success":var l=a(i);return void(t.dataset.clipboardSuccessHandler=l);default:var u=a((function(r){if(e.hasOwnProperty("value")){var a={value:"function"==typeof i?i():i,event:r},c=o(a.value)?t.dataset.clipboardSuccessHandler:t.dataset.clipboardErrorHandler,l=n[c];l&&l(a)}}));return t.dataset.clipboardClickHandler=u,void t.addEventListener("click",n[u])}},unbind:function(t){var e=t.dataset,o=e.clipboardSuccessHandler,a=e.clipboardErrorHandler,i=e.clipboardClickHandler;r(o),r(a),i&&(t.removeEventListener("click",n[i]),r(i))}})}}}])},350:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("63c9496b",content,!0,{sourceMap:!1})},351:function(t,e,n){var o=n(32)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},354:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(349),c=n.n(r);o.a.use(c.a);var l={data:function(){return{snackbar:!1,discord_t:"SloppierKitty7#0001",battle_t:"Kitty#23825",genshin:"705885269",items:[{title:"Twitter",link:"https://twitter.com/SloppierKitty7",icon:"/icons/twitter_icon.png"},{title:"Github",link:"https://github.com/SloppierKitty7",icon:"/icons/github_icon.png"},{title:"Youtube",link:"https://www.youtube.com/SloppierKitty7",icon:"/icons/youtube_icon.png"},{title:"Twitch",link:"https://www.twitch.tv/sloppierkitty7/",icon:"/icons/twitch_icon.png"},{title:"Steam",link:"http://steamcommunity.com/profiles/76561198040979106/",icon:"/icons/steam_icon.png"},{title:"kitsu",link:"https://kitsu.io/users/SloppierKitty7",icon:"/icons/kitsu_icon.png"},{title:"Osu!",link:"https://osu.ppy.sh/users/8111813",icon:"/icons/osu_icon.svg"},{title:"My Figure Collection",link:"https://myfigurecollection.net/profile/SloppierKitty7",icon:"/icons/fig.png"}]}}},v=n(78),d=n(100),h=n.n(d),m=n(335),f=n(328),k=n(358),_=n(348),y=n(359),x=n(376),w=n(338),O=n(397),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list",{attrs:{"two-line":"",subheader:""}},[t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{avatar:""}},[n("v-list-item-avatar",[n("img",{attrs:{src:e.icon}})]),t._v(" "),n("v-list-item-content",[n("v-list-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{icon:"",ripple:"",href:e.link}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("\n            mdi-link\n          ")])],1)],1)],1)})),t._v(" "),n("v-list-item",{attrs:{avatar:""}},[n("v-list-item-avatar",[n("img",{attrs:{src:"/icons/discord_icon.png"}})]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Discord")])],1),t._v(" "),n("v-list-item-action",[n("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.discord_t,expression:"discord_t",arg:"copy"}],attrs:{icon:"",ripple:""},nativeOn:{click:function(e){t.snackbar=!0}}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("\n            mdi-link\n          ")])],1)],1)],1),t._v(" "),n("v-list-item",{attrs:{avatar:""}},[n("v-list-item-avatar",[n("img",{attrs:{src:"/icons/battle-net.png"}})]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Battle-net")])],1),t._v(" "),n("v-list-item-action",[n("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.battle_t,expression:"battle_t",arg:"copy"}],attrs:{icon:"",ripple:""},nativeOn:{click:function(e){t.snackbar=!0}}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("\n            mdi-link\n          ")])],1)],1)],1),t._v(" "),n("v-list-item",{attrs:{avatar:""}},[n("v-list-item-avatar",[n("img",{attrs:{src:"/icons/gen.jpg"}})]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Genshin Impact")])],1),t._v(" "),n("v-list-item-action",[n("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.genshin,expression:"genshin",arg:"copy"}],attrs:{icon:"",ripple:""},nativeOn:{click:function(e){t.snackbar=!0}}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("\n            mdi-link\n          ")])],1)],1)],1)],2),t._v(" "),n("v-snackbar",{attrs:{timeout:1e3,y:"bottom"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    Copied to clipboard\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:m.a,VIcon:f.a,VList:k.a,VListItem:_.a,VListItemAction:y.a,VListItemAvatar:x.a,VListItemContent:w.a,VListItemTitle:w.c,VSnackbar:O.a})},397:function(t,e,n){"use strict";var o=n(2),r=(n(42),n(59),n(60),n(350),n(84)),c=n(76),l=n(61),v=n(99),d=n(103),h=n(25),m=n(1),f=n(9);e.a=Object(h.a)(r.a,c.a,v.a,Object(d.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(m.f)(n+footer+o),paddingLeft:this.app?Object(m.f)(r):void 0,paddingRight:this.app?Object(m.f)(c):void 0,paddingTop:Object(m.f)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(f.e)("auto-height",this),0==this.timeout&&Object(f.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(m.k)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(m.k)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),style:r.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})}}]);