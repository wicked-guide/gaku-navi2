"use strict";(self["webpackChunkgaku_navi2"]=self["webpackChunkgaku_navi2"]||[]).push([[872],{4235:function(n,e,t){t.d(e,{Z:function(){return i}});var a=t(3396);const r={class:"flex-b"};function s(n,e,t,s,c,o){const u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",r,[(0,a.Wm)(u,{to:"/",class:"logo"},{default:(0,a.w5)((()=>[(0,a.Uk)("がくなび")])),_:1})])}var c={name:"HeaderNav"},o=t(89);const u=(0,o.Z)(c,[["render",s]]);var i=u},4872:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var a=t(3396),r=t(7139);const s=n=>((0,a.dD)("data-v-0659831f"),n=n(),(0,a.Cn)(),n),c={class:"wapper"},o=["src"],u={class:"contentIndex"},i={class:"part"},l={key:1},d=s((()=>(0,a._)("span",{class:"making"},"制作中",-1)));function p(n,e,t,s,p,w){const f=(0,a.up)("HeaderNav"),g=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(f),(0,a._)("section",c,[(0,a._)("img",{src:"./thumbnail/"+p.course+".png",class:"thumbnail",alt:"thumbnail"},null,8,o),(0,a._)("section",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.contentIndex,((n,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a._)("div",i,(0,r.zw)(n.part),1),(0,a._)("ol",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.chapter,((n,e)=>((0,a.wg)(),(0,a.iD)("li",{key:e},["#"!=n.href?((0,a.wg)(),(0,a.j4)(g,{key:0,to:{name:"lecture",params:{course:p.course,id:n.href}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(n.title),1)])),_:2},1032,["to"])):((0,a.wg)(),(0,a.iD)("div",l,[d,(0,a.Uk)(" "+(0,r.zw)(n.title),1)]))])))),128))])])))),128))])])],64)}var w=t(4235),f=t(4161),g={name:"IndexListView",components:{HeaderNav:w.Z},data(){return{course:this.$route.params.course,contentIndex:[]}},mounted(){const n="./"+this.course+"/index.json";f.Z.get(n).then((n=>this.contentIndex=n.data)).catch((n=>{console.log("制作中です",n),this.contentIndex=[{part:"制作中"}]}))}},h=t(89);const k=(0,h.Z)(g,[["render",p],["__scopeId","data-v-0659831f"]]);var v=k}}]);
//# sourceMappingURL=872.3f6b3e6f.js.map