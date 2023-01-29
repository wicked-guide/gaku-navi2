(function(){"use strict";var e={9595:function(e,n,t){var r=t(9242),o=t(3396);function i(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var a=t(89);const u={},c=(0,a.Z)(u,[["render",i]]);var f=c,l=t(2483);const d=[{path:"/",name:"index",component:()=>Promise.all([t.e(943),t.e(548)]).then(t.bind(t,2548))},{path:"/:course",name:"IndexList",component:()=>Promise.all([t.e(943),t.e(676)]).then(t.bind(t,1676))},{path:"/:course/:id",name:"lecture",component:()=>Promise.all([t.e(943),t.e(470)]).then(t.bind(t,4470))},{path:"/creditinfo",name:"creditinfo",component:()=>t.e(384).then(t.bind(t,3384))},{path:"/game",name:"gameIndex",component:()=>Promise.all([t.e(943),t.e(602)]).then(t.bind(t,8602))},{path:"/game/typing",name:"TouchTyping",component:()=>t.e(318).then(t.bind(t,7318))},{path:"/game/multiplication",name:"MultiplicationPractice",component:()=>t.e(249).then(t.bind(t,6249))},{path:"/game/calculation",name:"BoxCalculation",component:()=>t.e(142).then(t.bind(t,3142))},{path:"/game/slidepuzzle",name:"SlidePuzzle",component:()=>t.e(12).then(t.bind(t,4012))},{path:"/about",name:"about",component:()=>t.e(392).then(t.bind(t,3392))}],s=(0,l.p7)({history:(0,l.r5)(),routes:d});var p=s;(0,r.ri)(f).use(p).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{12:"c2b8bf72",142:"3fc837e1",249:"75553e77",318:"a1a97e90",384:"1a8a8e9e",392:"f77b59ac",470:"cbb76420",548:"dcaa98a0",602:"e7feaf83",676:"1a238851",943:"c36adb37"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{12:"fd726eef",142:"8b44fc94",249:"9ae40a3e",318:"8b430d72",384:"9a3e1ded",392:"c837ed61",470:"86d961a3",548:"3ae9cf95",602:"3beef78e",676:"8fd16476"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="gaku-navi2:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var s=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/gaku-navi2/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={12:1,142:1,249:1,318:1,384:1,392:1,470:1,548:1,602:1,676:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(n&&n(r);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkgaku_navi2"]=self["webpackChunkgaku_navi2"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9595)}));r=t.O(r)})();
//# sourceMappingURL=app.1e2498b9.js.map