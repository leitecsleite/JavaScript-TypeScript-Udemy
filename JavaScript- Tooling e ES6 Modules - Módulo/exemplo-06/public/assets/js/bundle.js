(()=>{"use strict";var r,n,e,t={122:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(15),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),i.push([r.id,":root{\r\n    --primary-color: rgba(13,106,135); \r\n    --primary-color-darker:  rgb(11, 71, 84); \r\n}\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody{\r\n    margin:0; \r\n    padding:0; \r\n    background: var(--primary-color);\r\n\r\n\r\n    font-family:  'Open Sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff; \r\n    padding: 20px;\r\n    border-radius: 10px; \r\n}\r\n\r\n.senha-gerada {\r\n    font-size: 2em; \r\n    color: var(--primary-color); \r\n    margin: 40px; \r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\nbutton{\r\n    display: block; \r\n    margin: 40px 0; \r\n    font-size: 1em; \r\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAGA;IACI,iCAAiC;IACjC,wCAAwC;AAC5C;;;AAGA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,gCAAgC;;;IAGhC,qCAAqC;IACrC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;AAClB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\r\n\r\n\r\n:root{\r\n    --primary-color: rgba(13,106,135); \r\n    --primary-color-darker:  rgb(11, 71, 84); \r\n}\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody{\r\n    margin:0; \r\n    padding:0; \r\n    background: var(--primary-color);\r\n\r\n\r\n    font-family:  'Open Sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff; \r\n    padding: 20px;\r\n    border-radius: 10px; \r\n}\r\n\r\n.senha-gerada {\r\n    font-size: 2em; \r\n    color: var(--primary-color); \r\n    margin: 40px; \r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\nbutton{\r\n    display: block; \r\n    margin: 40px 0; \r\n    font-size: 1em; \r\n}"],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<r.length;c++){var s=[].concat(r[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},15:r=>{function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}r.exports=function(r){var e,t,o=(t=4,function(r){if(Array.isArray(r))return r}(e=r)||function(r,n){var e=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=e){var t,o,a=[],i=!0,c=!1;try{for(e=e.call(r);!(i=(t=e.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(r){c=!0,o=r}finally{try{i||null==e.return||e.return()}finally{if(c)throw o}}return a}}(e,t)||function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=i.sources.map((function(r){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(r," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},379:(r,n,e)=>{var t,o=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),a=[];function i(r){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===r){n=e;break}return n}function c(r,n){for(var e={},t=[],o=0;o<r.length;o++){var c=r[o],s=n.base?c[0]+n.base:c[0],u=e[s]||0,l="".concat(s," ").concat(u);e[s]=u+1;var d=i(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:l,updater:m(p,n),references:1}),t.push(l)}return t}function s(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var a=e.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var i=o(r.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,l=(u=[],function(r,n){return u[r]=n,u.filter(Boolean).join("\n")});function d(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=l(n,o);else{var a=document.createTextNode(o),i=r.childNodes;i[n]&&r.removeChild(i[n]),i.length?r.insertBefore(a,i[n]):r.appendChild(a)}}function p(r,n,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var A=null,f=0;function m(r,n){var e,t,o;if(n.singleton){var a=f++;e=A||(A=s(n)),t=d.bind(null,e,a,!1),o=d.bind(null,e,a,!0)}else e=s(n),t=p.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=i(e[t]);a[o].references--}for(var s=c(r,n),u=0;u<e.length;u++){var l=i(e[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=s}}}}},o={};function a(r){var n=o[r];if(void 0!==n)return n.exports;var e=o[r]={id:r,exports:{}};return t[r](e,e.exports,a),e.exports}a.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return a.d(n,{a:n}),n},a.d=(r,n)=>{for(var e in n)a.o(n,e)&&!a.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},a.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=a(379),n=a.n(r),e=a(122),n()(e.Z,{insert:"head",singleton:!1}),e.Z.locals})();
//# sourceMappingURL=bundle.js.map