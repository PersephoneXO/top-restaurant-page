(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(81),a=t.n(i),o=t(645),r=t.n(o)()(a());r.push([e.id,'html{\n    height: 100%;\n    width: 100%;\n}\n\nbody{\n    min-height: 100%;\n    min-width: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: Lato;\n\n\n\n}\n\n#content{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: auto auto;\n    grid-template-areas:"header"\n    "main" ;\n}\n/*header*/\n.header{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-area: header;\n    background-color: #ffffff;\n    padding-bottom: 15px;\n}\n\n#header-title{\n    color: #5d576b;\n    font-size: 3rem;\n    padding: 0;\n    margin: 1.5%;\n    font-weight: bold;\n}\n\n.header-tab-styles{\n    font-size: 1.5rem;\n    border-style: none;\n    background:none;\n    padding:0 50px;\n\n}\n/*home page*/\n.main-container{\n    grid-area:main;\n    font-family: Raleway;\n}\n\n.main-content-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#welcome-title{\n    font-size: 4.5rem;\n    padding: 0;\n    margin: 0;\n    font-weight: bold;\n    margin-bottom: 1%;\n}\n\n#welcome-subtitle{\n    font-size: 2rem;\n}\n\n#view-menu-button{\n    border-style: none;\n    background-color: #ed6a5a;\n    color: #ffffff;\n    font-size: 2rem;\n    margin-top: .5%;\n    font-weight: bold;\n    padding: .5% 1.5%;\n\n}\n\n/*menu page*/\n#menu-content-container{\n    background-color: #5d576b;\n    color: #ffffff;\n\n}\n\n.menu-title-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 50px;\n}\n\n#menu-top-subtitle{\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 5px;\n}\n\n#menu-title{\n    font-size: 3rem;\n    padding: 0;\n    margin: 0;\n    font-weight: 600;\n    margin-bottom: 15px;\n}\n\n#menu-subtitle{\n    font-size: 1.5rem;\n    font-weight: 500;\n}\n\n.menu-div-container{\n    display:grid;\n    gap: 30px;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto auto;\n    justify-content: center;\n\n}\n\n.menu-div{\n    background-color: #656073;\n    width: 25vw;\n    display: grid;\n    grid-template-rows: min-content min-content;\n    grid-template-columns: min-content auto;\n    grid-template-areas:\n    "cube title"\n    ". subtitle";\n    padding: 30px;\n    align-items: center;\n\n\n}\n\n.menu-div-icon{\n    height: 40px;\n    grid-area: cube;\n    margin-right: 30px;\n\n}\n\n.menu-div-title{\n    grid-area: title;\n    font-size: 2rem;\n    font-weight: bold;\n    margin: 0;\n}\n\n.menu-div-subtitle{\n    grid-area: subtitle;\n    font-size: 1.2rem;\n}\n\n\n/*contact page*/\n#contact-content-container{\n    background-color: #5d576b;\n    color: #ffffff;\n\n}\n\n#contact-title{\n    display: flex;\n    justify-content: center;\n    font-size: 3rem;\n    font-weight: 600;\n}\n\n.input-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 25px;\n}\n\n.single-line-input, .multi-line-input{\n    width: 45vw;\n    height: 3vh;\n    padding: 15px;\n    margin: 5px;\n    background-color: #656073;\n    border-style: none;\n    color: #ffffff;\n\n}\n\n.single-line-input::placeholder, .multi-line-input::placeholder{\n color: #ffffff;\n font-family: Raleway;\n opacity: .5;\n}\n\n.multi-line-input{\n    height: 10vh;\n}\n\n.form-element{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#send-message-button{\n    font-family: Raleway;\n    background-color: #ed6a5a;\n    color:#ffffff;\n    border: none;\n    font-size: 1rem;\n    padding:.5% 1.5%;\n    font-weight: 600;\n}\n',""]);const d=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(r[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&r[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var o={},r=[],d=0;d<e.length;d++){var l=e[d],c=i.base?l[0]+i.base:l[0],s=o[c]||0,u="".concat(c," ").concat(s);o[c]=s+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,i);i.byIndex=d,n.splice(d,0,{identifier:u,updater:f,references:1})}r.push(u)}return r}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var d=t(o[r]);n[d].references--}for(var l=i(e,a),c=0;c<o.length;c++){var s=t(o[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var o=n[i]={id:i,exports:{}};return e[i](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=()=>{let e=document.createElement("div");e.classList.add("header");let t=document.createElement("p");t.id="header-title",t.textContent="RESTAURANT",e.appendChild(t);let i=document.createElement("div");i.classList.add("header-tabs");let a=n("Home");a.id="home-button",i.appendChild(a);let o=n("Menu");o.id="menu-button",i.appendChild(o);let r=n("Contact");return r.id="contact-button",i.appendChild(r),e.appendChild(i),e};function n(e,n){let t=document.createElement("button");return t.textContent=e,t.classList.add("header-tab-styles"),t}const i=()=>{let e=document.createElement("div");e.classList.add("main-container");let n=document.createElement("div");n.classList.add("main-content-container");let t=document.createElement("p");t.id="welcome-title",t.textContent="Welcome to [Restaurant Name]",n.appendChild(t);let i=document.createElement("p");i.id="welcome-subtitle",i.textContent="Delicious food and great ambiance",n.appendChild(i);let a=document.createElement("button");return a.id="view-menu-button",a.textContent="View Menu",n.appendChild(a),e.appendChild(n),e};function a(e,n){let t=document.createElement("div");t.classList.add("menu-div"),t.innerHTML+='<svg class="menu-div-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#ffffff" d="M121.059 29.509 64.596 0 6.919 29.509V95.51L67.087 128l53.993-32.554V29.53l-.021-.021zM60.7 117.291 13.307 91.699V39.856L60.7 63.574v53.717zm3.321-59.21L14.009 33.065 64.554 7.154l49.458 25.89-49.991 25.037zm50.672 33.682-47.606 28.785V63.659l47.606-23.803v51.907z"/></svg>';let i=document.createElement("p");i.classList.add("menu-div-title"),i.textContent=e,t.appendChild(i);let a=document.createElement("p");return a.classList.add("menu-div-subtitle"),a.textContent=n,t.appendChild(a),t}function o(e,n,t){let i=document.createElement("input");return i.setAttribute("type",e),i.classList.add("single-line-input"),i.setAttribute("name",n),i.setAttribute("placeholder",t),i}var r=t(379),d=t.n(r),l=t(795),c=t.n(l),s=t(569),u=t.n(s),p=t(565),m=t.n(p),f=t(216),h=t.n(f),g=t(589),v=t.n(g),b=t(28),y={};y.styleTagTransform=v(),y.setAttributes=m(),y.insert=u().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=h(),d()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;const C=document.querySelector("#content");document.addEventListener("DOMContentLoaded",(()=>(C.appendChild(e()),C.appendChild(i()),C))),C.addEventListener("click",(n=>{if("home-button"==n.target.id)return C.innerHTML="",C.appendChild(e()),C.appendChild(i()),C})),C.addEventListener("click",(n=>{if("menu-button"==n.target.id||"view-menu-button"==n.target.id)return C.innerHTML="",C.appendChild(e()),C.appendChild((()=>{let e=document.createElement("div");e.classList.add("main-container"),e.id="menu-content-container";let n=document.createElement("div");n.classList.add("menu-title-container");let t=document.createElement("p");t.id="menu-top-subtitle",t.textContent="FEATURES",n.appendChild(t);let i=document.createElement("p");i.id="menu-title",i.textContent="Our Menu Highlights",n.appendChild(i);let o=document.createElement("p");o.id="menu-subtitle",o.textContent="Discover our mouthwatering selection of dishes",n.appendChild(o),e.appendChild(n);let r=document.createElement("div");return r.classList.add("menu-div-container"),r.appendChild(a("Appetizers","Delicious starters to kick off your meal")),r.appendChild(a("Main Courses","Satisfying dishes for the main event")),r.appendChild(a("Desserts","Sweet treats to end your meal on a high note")),r.appendChild(a("Beverages","Refreshing drinks to quench your thirst")),e.appendChild(r),e})()),C})),C.addEventListener("click",(n=>{if("contact-button"==n.target.id)return C.innerHTML="",C.appendChild(e()),C.appendChild((()=>{let e=document.createElement("div");e.classList.add("main-container"),e.id="contact-content-container";let n=document.createElement("p");n.id="contact-title",n.textContent="Contact Us",e.appendChild(n);let t=document.createElement("div");t.classList.add("contact-form-container");let i=document.createElement("form");i.setAttribute("action","#"),i.setAttribute("method","post"),i.classList.add("form-element");let a=document.createElement("div");a.classList.add("input-container"),a.appendChild(o("text","name-input","Your name *")),a.appendChild(o("email","email-input","Your e-mail *")),a.appendChild(o("tel","phone-input","Your phone number *"));let r=document.createElement("textarea");r.classList.add("multi-line-input"),r.setAttribute("name","message-input"),r.setAttribute("placeholder","Message *"),a.appendChild(r),i.appendChild(a);let d=document.createElement("button");return d.id="send-message-button",d.setAttribute("type","submit"),d.setAttribute("value","send-message-button"),d.setAttribute("formmethod","post"),d.textContent="Send Message",i.appendChild(d),t.appendChild(i),e.appendChild(t),e})()),C}))})()})();