"use strict";(self["webpackChunkgaku_navi2"]=self["webpackChunkgaku_navi2"]||[]).push([[449],{449:function(e,s,a){a.r(s),a.d(s,{default:function(){return W}});var n=a(3396),l=a(9242),t=a(7139);const c=e=>((0,n.dD)("data-v-714138b3"),e=e(),(0,n.Cn)(),e),o={class:"home"},i={class:"flex-b"},u=c((()=>(0,n._)("div",null,null,-1))),r={class:"wapper"},d={class:"flex"},m={class:"grid"},h=["src"],_={class:"title"},g={class:"date"},w={class:"minigame"},f=c((()=>(0,n._)("div",{class:"title"},"ミニゲーム",-1))),p={class:"around"},v=c((()=>(0,n._)("section",null,null,-1))),k=c((()=>(0,n._)("small",null,"©2022 witship",-1)));function D(e,s,a,c,D,b){const x=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("section",o,[(0,n._)("header",i,[(0,n.Wm)(x,{to:"/",class:"logo"},{default:(0,n.w5)((()=>[(0,n.Uk)("がくなび")])),_:1}),(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{type:"search","onUpdate:modelValue":s[0]||(s[0]=e=>D.search=e),class:"search",placeholder:"検索"},null,512),[[l.nr,D.search]])]),u]),(0,n._)("section",r,[(0,n._)("section",d,[(0,n._)("main",null,[(0,n._)("section",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.searchCourse,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"card",key:e.name},[(0,n.Wm)(x,{to:{name:"IndexList",params:{course:e.course}}},{default:(0,n.w5)((()=>[(0,n._)("img",{src:"./thumbnail/"+e.course+".png",alt:"thumbnail"},null,8,h),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.tag,((e,s)=>((0,n.wg)(),(0,n.iD)("span",{class:"tag",key:s},(0,t.zw)(e),1)))),128)),(0,n._)("div",_,(0,t.zw)(e.name),1),(0,n._)("div",g,(0,t.zw)(e.date),1)])),_:2},1032,["to"])])))),128))])]),(0,n._)("aside",null,[(0,n._)("section",w,[(0,n.Wm)(x,{to:{name:"gameIndex"}},{default:(0,n.w5)((()=>[f])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(D.games,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id},[(0,n.Wm)(x,{to:`/game/${e.href}`},{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])])]),(0,n._)("footer",null,[(0,n._)("section",p,[v,(0,n._)("section",null,[(0,n.Wm)(x,{to:"/creditinfo"},{default:(0,n.w5)((()=>[(0,n.Uk)("お借りした素材")])),_:1})])]),k])])])}var b=a(4161),x={name:"IndexView",data(){return{course:[],search:"",games:[]}},mounted(){const e="./course.json";b.Z.get(e).then((e=>this.course=e.data)).catch((e=>console.log(e)));const s="./games.json";b.Z.get(s).then((e=>this.games=e.data)).catch((e=>console.log(e)))},computed:{searchCourse(){return this.course.filter((e=>e.name.includes(this.search)||e.tag.includes(this.search)))}}},y=a(89);const C=(0,y.Z)(x,[["render",D],["__scopeId","data-v-714138b3"]]);var W=C}}]);
//# sourceMappingURL=449.9495f1ce.js.map