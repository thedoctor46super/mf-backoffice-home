const e={name:"App"},n=vue.withScopeId("data-v-40809ec2");vue.pushScopeId("data-v-40809ec2");const t={id:"app"};vue.popScopeId();const o=n(((e,n,o,r,a,u)=>{const p=vue.resolveComponent("router-view");return vue.openBlock(),vue.createBlock("div",t,[vue.createVNode(p)])}));e.render=o,e.__scopeId="data-v-40809ec2";var r,a,u,p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a=r={path:void 0,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&r.path)}},r.exports,u=p,a.exports=function(e){if(e.CSS&&e.CSS.escape)return e.CSS.escape;var n=function(e){if(0==arguments.length)throw new TypeError("`CSS.escape` requires an argument.");for(var n,t=String(e),o=t.length,r=-1,a="",u=t.charCodeAt(0);++r<o;)0!=(n=t.charCodeAt(r))?a+=n>=1&&n<=31||127==n||0==r&&n>=48&&n<=57||1==r&&n>=48&&n<=57&&45==u?"\\"+n.toString(16)+" ":0==r&&1==o&&45==n||!(n>=128||45==n||95==n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122)?"\\"+t.charAt(r):t.charAt(r):a+="�";return a};return e.CSS||(e.CSS={}),e.CSS.escape=n,n}(u),r.exports;var d={appOptions:null,template:null,Vue:null,createApp:null,handleInstance:null};function m(e){return e.loadRootComponent?e.loadRootComponent().then((function(n){return e.rootComponent=n})):Promise.resolve()}function v(e,n,t){var o={};return Promise.resolve().then((function(){return(r=e,"function"==typeof r.appOptions?r.appOptions():Promise.resolve(i({},r.appOptions))).then((function(r){var a;if(t.domElement&&!r.el&&(r.el=t.domElement),r.el)if("string"==typeof r.el){if(!(a=document.querySelector(r.el)))throw Error("If appOptions.el is provided to single-spa-vue, the dom element must exist in the dom. Was provided as ".concat(r.el))}else(a=r.el).id||(a.id="single-spa-application:".concat(t.name)),r.el="#".concat(CSS.escape(a.id));else{var u="single-spa-application:".concat(t.name);r.el="#".concat(CSS.escape(u)),(a=document.getElementById(u))||((a=document.createElement("div")).id=u,document.body.appendChild(a))}if(e.replaceMode||(r.el=r.el+" .single-spa-container"),!a.querySelector(".single-spa-container")){var p=document.createElement("div");p.className="single-spa-container",a.appendChild(p)}return o.domEl=a,r.render||r.template||!e.rootComponent||(r.render=function(n){return n(e.rootComponent)}),r.data||(r.data={}),r.data=function(){return i(i({},r.data),t)},e.createApp?(o.vueInstance=e.createApp(r),e.handleInstance&&e.handleInstance(o.vueInstance),o.vueInstance.mount(r.el)):(o.vueInstance=new e.Vue(r),o.vueInstance.bind&&(o.vueInstance=o.vueInstance.bind(o.vueInstance)),e.handleInstance&&e.handleInstance(o.vueInstance)),n[t.name]=o,o.vueInstance}));var r}))}function f(e,n,t){return Promise.resolve().then((function(){var o=n[t.name],r=i(i({},e.appOptions.data||{}),t);for(var a in r)o.vueInstance[a]=r[a]}))}function h(e,n,t){return Promise.resolve().then((function(){var o=n[t.name];e.createApp?o.vueInstance.unmount(o.domEl):(o.vueInstance.$destroy(),o.vueInstance.$el.innerHTML=""),delete o.vueInstance,o.domEl&&(o.domEl.innerHTML="",delete o.domEl)}))}const b={name:"Home",data:()=>({count:0})},y=vue.createVNode("h1",null,"backoffice-home",-1),g=vue.createVNode("p",null,[vue.createTextVNode("Edit "),vue.createVNode("code",null,"components/Home.vue"),vue.createTextVNode(" to test hot module replacement.")],-1),S=vue.createTextVNode("Home");b.render=function(e,n,t,o,r,a){const u=vue.resolveComponent("router-link");return vue.openBlock(),vue.createBlock(vue.Fragment,null,[y,vue.createVNode("button",{onClick:n[1]||(n[1]=e=>r.count++)},"count is: "+vue.toDisplayString(r.count),1),g,vue.createVNode(u,{to:"/home"},{default:vue.withCtx((()=>[S])),_:1})],64)};const O=[{path:"/home",name:"Home",component:b},{path:"/",name:"Default",component:b}],I=vue-I.createRouter({history:vue-I.createWebHistory(),routes:O}),w=function(e){if("object"!==s(e))throw new Error("single-spa-vue requires a configuration object");var n=i(i({},d),e);if(!n.Vue&&!n.createApp)throw Error("single-spa-vue must be passed opts.Vue or opts.createApp");if(!n.appOptions)throw Error("single-spa-vue must be passed opts.appOptions");if(n.appOptions.el&&"string"!=typeof n.appOptions.el&&!(n.appOptions.el instanceof HTMLElement))throw Error("single-spa-vue: appOptions.el must be a string CSS selector, an HTMLElement, or not provided at all. Was given ".concat(s(n.appOptions.el)));n.createApp=n.createApp||n.Vue&&n.Vue.createApp;var t={};return{bootstrap:m.bind(null,n,t),mount:v.bind(null,n,t),unmount:h.bind(null,n,t),update:f.bind(null,n,t)}}({createApp:vue.createApp,appOptions:{render(){return vue.h(e,{props:{name:this.name,mountParcel:this.mountParcel,singleSpa:this.singleSpa}})}},handleInstance:e=>{e.use(I)}}),C=w.bootstrap,E=w.mount,A=w.unmount;export{C as bootstrap,E as mount,A as unmount};