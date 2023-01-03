(function(){"use strict";var e={4004:function(e,t,n){var s=n(9242),i=n(3396);function a(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}var o=n(89);const r={},c=(0,o.Z)(r,[["render",a]]);var u=c,l=n(2483),d=n(7139);const m=e=>((0,i.dD)("data-v-76e08000"),e=e(),(0,i.Cn)(),e),h={class:"app"},g={class:"wapper"},p={class:"grid"},f=["src"],v={class:"title"},w={class:"date"},_={class:"minigame"},y=m((()=>(0,i._)("div",{class:"title"},"ミニゲーム",-1))),k={class:"around"},x=m((()=>(0,i._)("section",null,null,-1))),b=m((()=>(0,i._)("small",null,"©2022 wicked wonder world",-1)));function I(e,t,n,a,o,r){const c=(0,i.up)("HeaderNav"),u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("section",h,[(0,i.Wm)(c),(0,i._)("section",g,[(0,i._)("main",null,[(0,i.wy)((0,i._)("input",{type:"search",class:"search","onUpdate:modelValue":t[0]||(t[0]=e=>o.search=e),placeholder:"検索"},null,512),[[s.nr,o.search]]),(0,i._)("section",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.searchCourse,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"card",key:e.name},[(0,i.Wm)(u,{to:{name:"IndexList",params:{course:e.course}}},{default:(0,i.w5)((()=>[(0,i._)("img",{src:"./thumbnail/"+e.course+".png",alt:"thumbnail"},null,8,f),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.tag,((e,t)=>((0,i.wg)(),(0,i.iD)("span",{class:"tag",key:t},(0,d.zw)(e),1)))),128)),(0,i._)("div",v,(0,d.zw)(e.name),1),(0,i._)("div",w,(0,d.zw)(e.date),1)])),_:2},1032,["to"])])))),128))])]),(0,i._)("aside",null,[(0,i._)("section",_,[y,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.games,(e=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",{key:e.name},[(0,i.Wm)(u,{to:"/game/typing"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(e.name),1)])),_:2},1024)])),[[s.F8,e.open]]))),128)),(0,i.Wm)(u,{to:{name:"gameIndex"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 一覧 ")])),_:1})])])]),(0,i._)("footer",null,[(0,i._)("section",k,[x,(0,i._)("section",null,[(0,i.Wm)(u,{to:"/creditinfo"},{default:(0,i.w5)((()=>[(0,i.Uk)("お借りした素材")])),_:1})])]),b])])}var C=n(5953),D=n(6943),S={name:"IndexView",components:{HeaderNav:C.Z},data(){return{course:[],search:"",games:[]}},mounted(){const e="./course.json";D.Z.get(e).then((e=>this.course=e.data)).catch((e=>console.log(e)));const t="./games.json";D.Z.get(t).then((e=>this.games=e.data)).catch((e=>console.log(e)))},computed:{searchCourse(){return this.course.filter((e=>e.name.includes(this.search)||e.tag.includes(this.search)))}}};const V=(0,o.Z)(S,[["render",I],["__scopeId","data-v-76e08000"]]);var A=V;const T=e=>((0,i.dD)("data-v-09f8444c"),e=e(),(0,i.Cn)(),e),N={class:"wapper"},H=["src"],j={class:"contentIndex"},O={class:"part"},Z={key:1},z=T((()=>(0,i._)("span",{class:"making"},"制作中",-1)));function L(e,t,n,s,a,o){const r=(0,i.up)("HeaderNav"),c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r),(0,i._)("section",N,[(0,i._)("img",{src:"./thumbnail/"+a.course+".png",class:"thumbnail",alt:"thumbnail"},null,8,H),(0,i._)("section",j,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.contentIndex,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("div",O,(0,d.zw)(e.part),1),(0,i._)("ol",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.chapter,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t},["#"!=e.href?((0,i.wg)(),(0,i.j4)(c,{key:0,to:{name:"lecture",params:{course:a.course,id:e.href}}},{default:(0,i.w5)((()=>[(0,i._)("div",null,(0,d.zw)(e.title),1)])),_:2},1032,["to"])):((0,i.wg)(),(0,i.iD)("div",Z,[z,(0,i.Uk)(" "+(0,d.zw)(e.title),1)]))])))),128))])])))),128))])])],64)}var M={name:"IndexListView",components:{HeaderNav:C.Z},data(){return{course:this.$route.params.course,contentIndex:[]}},mounted(){const e="./"+this.course+"/index.json";D.Z.get(e).then((e=>this.contentIndex=e.data)).catch((e=>{console.log(e),this.contentIndex=[{part:"制作中"}]}))}};const E=(0,o.Z)(M,[["render",L],["__scopeId","data-v-09f8444c"]]);var P=E;const Y={class:"wapper"},F={class:"leftMenu"},W={class:"slideArea"},K=["src"],$={class:"messageArea"},U={class:"messageMenu"},B={style:{display:"flex"}},q=["src"],J={class:"message"},Q={class:"rightMenu"},G=["onClick"];function R(e,t,n,a,o,r){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("section",Y,[(0,i._)("nav",F,[(0,i.Wm)(c,{to:{name:"IndexList",params:{course:o.course}}},{default:(0,i.w5)((()=>[(0,i._)("button",{class:"xlarge",onClick:t[0]||(t[0]=(...e)=>r.reset&&r.reset(...e))},"«")])),_:1},8,["to"])]),(0,i._)("main",null,[(0,i._)("section",W,[(0,i._)("img",{src:r.slideImage,class:"slideImg",alt:"slide"},null,8,K)]),(0,i._)("section",$,[(0,i._)("section",U,[(0,i._)("section",B,[(0,i._)("button",{class:(0,d.C_)(o.isActor?"isTrue":"isFalse"),onClick:t[1]||(t[1]=(...e)=>r.switchActor&&r.switchActor(...e))}," >ω< ",2),(0,i._)("div",{class:(0,d.C_)(["actorName",{none:!o.isActor}])},(0,d.zw)(r.actorName),3)]),(0,i._)("section",null,[(0,i._)("button",{class:(0,d.C_)(o.isVoice?"isTrue":"isFalse"),onClick:t[2]||(t[2]=(...e)=>r.switchVoice&&r.switchVoice(...e))}," 音声♪ ",2),(0,i._)("button",{class:(0,d.C_)(o.isSkip?"isTrue":"isFalse"),onClick:t[3]||(t[3]=(...e)=>r.switchSkip&&r.switchSkip(...e))}," 自動▶ ",2),(0,i._)("button",{onClick:t[4]||(t[4]=(...e)=>r.voiceStop&&r.voiceStop(...e))},"停止■"),(0,i._)("button",{onClick:t[5]||(t[5]=(...e)=>r.voicePlay&&r.voicePlay(...e))},"もう一度↻")])]),(0,i._)("section",{class:"messagewindow",onClick:t[6]||(t[6]=(...e)=>r.next&&r.next(...e))},[(0,i.wy)((0,i._)("section",null,[(0,i._)("img",{src:r.actorImage,class:"actor",alt:"actor"},null,8,q)],512),[[s.F8,o.isActor]]),(0,i._)("section",J,(0,d.zw)(r.messageText),1)])])]),(0,i._)("nav",Q,[(0,i._)("button",{class:"xlarge",onClick:t[7]||(t[7]=(...e)=>r.switchMenu&&r.switchMenu(...e))},"≡"),(0,i.wy)((0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.scenario,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,class:(0,d.C_)({isTrue:t==o.pageIndex}),onClick:e=>r.pageJump(t)},(0,d.zw)(("00"+(t+1)).slice(-2))+"："+(0,d.zw)(e.title),11,G)))),128))],512),[[s.F8,o.isMenu]])])])}var X={name:"LectureView",data(){return{course:this.$route.params.course,id:this.$route.params.id,scenario:[],isActor:!0,isMenu:!0,isVoice:!0,isSkip:!0,pageIndex:0,messageIndex:0,messageVoice:new Audio("")}},mounted(){const e=`./${this.course}/${this.id}/scenario.json`;D.Z.get(e).then((e=>this.scenario=e.data)).catch((e=>{console.log(e),this.scenario=[{part:"制作中"}]}))},methods:{switchActor(){this.isActor=!this.isActor},switchVoice(){this.isVoice=!this.isVoice,this.isVoice||(this.isSkip=!1)},switchSkip(){this.isSkip=!this.isSkip,this.isSkip&&(this.isVoice=!0)},switchMenu(){this.isMenu=!this.isMenu},pageJump(e){this.pageIndex=e,this.messageIndex=0,this.messageVoice.pause(),this.isVoice&&this.voicePlay()},next(){if(this.messageVoice.pause(),this.messageIndex++,"LAST"==this.messageText){if(this.scenario.length==this.pageIndex+1)return void this.messageIndex--;this.pageIndex++,this.messageIndex=0}this.isVoice&&this.voicePlay()},voicePlay(){this.messageVoice.pause();let e=this.scenario[this.pageIndex].message[this.messageIndex].voice;e&&(this.messageVoice=new Audio("./"+this.course+"/"+this.id+"/voice/"+e),this.messageVoice.play(),this.messageVoice.addEventListener("ended",(()=>{this.isSkip&&this.next()})))},voiceStop(){this.messageVoice.pause()},reset(){this.messageVoice.pause(),this.pageIndex=0,this.messageIndex=0}},computed:{slideImage(){try{return this.scenario[this.pageIndex].message[this.messageIndex].slide?`./${this.course}/${this.id}/img/${this.scenario[this.pageIndex].message[this.messageIndex].slide}`:"./common/background/sky_blue.png"}catch{return{mes:"制作中です"}}},actorName(){try{return this.scenario[this.pageIndex].message[this.messageIndex].actor?this.scenario[this.pageIndex].message[this.messageIndex].actor:"No Name"}catch{return"No Name"}},actorImage(){try{return this.scenario[this.pageIndex].message[this.messageIndex].actorImg?`./common/actor/${this.scenario[this.pageIndex].message[this.messageIndex].actorImg}`:"./common/actor/Tsumugi-01.png"}catch{return"./common/actor/Tsumugi-01.png"}},messageText(){try{return this.scenario[this.pageIndex].message[this.messageIndex].text}catch{return"LAST"}}}};const ee=(0,o.Z)(X,[["render",R],["__scopeId","data-v-1134ffca"]]);var te=ee;const ne=e=>((0,i.dD)("data-v-7506f2e8"),e=e(),(0,i.Cn)(),e),se={class:"wapper"},ie=ne((()=>(0,i._)("b",null,"お借りした素材",-1))),ae={class:"materials"};function oe(e,t,n,s,a,o){const r=(0,i.up)("HeaderNav");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r),(0,i._)("section",se,[ie,(0,i._)("section",ae,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.credit,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("b",null,(0,d.zw)(e.type),1),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.names,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t},(0,d.zw)(e),1)))),128))])])))),128))])])],64)}var re={name:"CreditinfoView",components:{HeaderNav:C.Z},data(){return{credit:[{type:"キャラボイス",names:["voicevox"]},{type:"画像",names:["Canva","icon-rainbow","illust8","kumono","Topecon Heroes","stable diffusion","イラストパーク","いらすとや","パブリックドメインQ"]}]}}};const ce=(0,o.Z)(re,[["render",oe],["__scopeId","data-v-7506f2e8"]]);var ue=ce;const le=[{path:"/",name:"index",component:A},{path:"/:course",name:"IndexList",component:P},{path:"/:course/:id",name:"lecture",component:te},{path:"/creditinfo",name:"creditinfo",component:ue},{path:"/game",name:"gameIndex",component:()=>n.e(608).then(n.bind(n,7608))},{path:"/game/typing",name:"TouchTyping",component:()=>n.e(305).then(n.bind(n,9305))},{path:"/about",name:"about",component:()=>n.e(731).then(n.bind(n,5616))}],de=(0,l.p7)({history:(0,l.r5)(),routes:le});var me=de;(0,s.ri)(u).use(me).mount("#app")},5953:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(3396);const i={class:"navheader"};function a(e,t,n,a,o,r){const c=(0,s.up)("router-link"),u=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",i,[(0,s.Wm)(c,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("がくなび")])),_:1})]),(0,s.Wm)(u)],64)}var o={name:"HeaderNav"},r=n(89);const c=(0,r.Z)(o,[["render",a]]);var u=c}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,a){if(!s){var o=1/0;for(l=0;l<e.length;l++){s=e[l][0],i=e[l][1],a=e[l][2];for(var r=!0,c=0;c<s.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[c])}))?s.splice(c--,1):(r=!1,a<o&&(o=a));if(r){e.splice(l--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[s,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,s){return n.f[s](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{305:"cfec891e",608:"2f36d867",731:"1a9a2c3c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{305:"a7805eaa",608:"3015b2b5"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gaku-navi2:";n.l=function(s,i,a,o){if(e[s])e[s].push(i);else{var r,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+a){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+a),r.src=s),e[s]=[i];var m=function(t,n){r.onerror=r.onload=null,clearTimeout(h);var i=e[s];if(delete e[s],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/gaku-navi2/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,s,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(n){if(a.onerror=a.onload=null,"load"===n.type)s();else{var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=o,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var i=n[s],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(s=0;s<o.length;s++){i=o[s],a=i.getAttribute("data-href");if(a===e||a===t)return i}},s=function(s){return new Promise((function(i,a){var o=n.miniCssF(s),r=n.p+o;if(t(o,r))return i();e(s,r,null,i,a)}))},i={143:0};n.f.miniCss=function(e,t){var n={305:1,608:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=s(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,s){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)s.push(i[2]);else{var a=new Promise((function(n,s){i=e[t]=[n,s]}));s.push(i[2]=a);var o=n.p+n.u(t),r=new Error,c=function(s){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",r.name="ChunkLoadError",r.type=a,r.request=o,i[1](r)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,a,o=s[0],r=s[1],c=s[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var l=c(n)}for(t&&t(s);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},s=self["webpackChunkgaku_navi2"]=self["webpackChunkgaku_navi2"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(4004)}));s=n.O(s)})();
//# sourceMappingURL=app.3f056f25.js.map