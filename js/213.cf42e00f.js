"use strict";(self["webpackChunkgaku_navi2"]=self["webpackChunkgaku_navi2"]||[]).push([[213],{9360:function(q,A,s){s.d(A,{Z:function(){return u}});var e=s(3396);const n={class:"navheader"};function i(q,A,s,i,a,t){const o=(0,e.up)("router-link"),u=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("nav",n,[(0,e.Wm)(o,{to:"/"},{default:(0,e.w5)((()=>[(0,e.Uk)("がくなび")])),_:1})]),(0,e.Wm)(u)],64)}var a={name:"HeaderNav"},t=s(89);const o=(0,t.Z)(a,[["render",i]]);var u=o},2213:function(q,A,s){s.r(A),s.d(A,{default:function(){return E}});var e=s(3396),n=s(9242),i=s(7139);const a=q=>((0,e.dD)("data-v-15279b0e"),q=q(),(0,e.Cn)(),q),t={class:"wapper"},o=a((()=>(0,e._)("button",{class:"material-icons md-18"},"skip_previous",-1))),u=a((()=>(0,e._)("div",{class:"title"},"81マス計算",-1))),r={class:"layout"},c={class:"menu"},l={class:"display-box"},d={class:"keylayout"},h=["onClick"];function w(q,A,s,a,w,y){const k=(0,e.up)("HeaderNav"),m=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(k),(0,e._)("section",t,[(0,e.Wm)(m,{to:"/game"},{default:(0,e.w5)((()=>[o])),_:1}),u,(0,e._)("section",r,[(0,e._)("section",null,[(0,e._)("div",c,[(0,e._)("div",{class:"btn-main",onClick:A[0]||(A[0]=(...q)=>y.shuffleXY&&y.shuffleXY(...q))},"シャッフル(Esc)"),(0,e._)("div",{class:"btn-main",onClick:A[1]||(A[1]=q=>{w.isPlus=!w.isPlus,y.shuffleXY()})}," 足し算⇔掛け算(Del) ")]),(0,e._)("section",l,[(0,e.wy)((0,e._)("div",{class:"type",onClick:A[2]||(A[2]=q=>{w.isPlus=!w.isPlus,y.shuffleXY()})}," + ",512),[[n.F8,w.isPlus]]),(0,e.wy)((0,e._)("div",{class:"type",onClick:A[3]||(A[3]=q=>{w.isPlus=!w.isPlus,y.shuffleXY()})}," × ",512),[[n.F8,!w.isPlus]]),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(w.arrayX,(q=>((0,e.wg)(),(0,e.iD)("div",{key:q,class:"th"},(0,i.zw)(q),1)))),128)),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(w.correct,((q,A)=>((0,e.wg)(),(0,e.iD)(e.HY,{key:q},[(0,e.wy)((0,e._)("div",{class:"th"},(0,i.zw)(w.arrayY[A/9]),513),[[n.F8,A%9==0]]),(0,e._)("div",{class:(0,i.C_)([q.order==w.count+1?"here":"notHere"])},[(0,e.wy)((0,e._)("span",null,(0,i.zw)(q.ans),513),[[n.F8,q.jage]]),(0,e.wy)((0,e._)("span",null,(0,i.zw)(w.answer.join("")),513),[[n.F8,q.order==w.count+1]])],2)],64)))),128))])]),(0,e._)("section",null,[(0,e._)("section",d,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(w.tenkey,(q=>((0,e.wg)(),(0,e.iD)("div",{key:q.name,class:(0,i.C_)(["key",`key${q.code}`,q.code==w.key?"hit":""]),onClick:A=>y.onKeyClick(q.code)},(0,i.zw)(q.name),11,h)))),128))])])])])],64)}s(7658);var y=s(9360),k={name:"BoxCalculation",components:{HeaderNav:y.Z},data(){return{key:"",code:"",tenkey:[{code:"7",name:"7"},{code:"8",name:"8"},{code:"9",name:"9"},{code:"4",name:"4"},{code:"5",name:"5"},{code:"6",name:"6"},{code:"1",name:"1"},{code:"2",name:"2"},{code:"3",name:"3"},{code:"0",name:"0"},{code:"Enter",name:"Enter"}],isPlus:!0,arrayX:[1,2,3,4,5,6,7,8,9],arrayY:[1,2,3,4,5,6,7,8,9],correct:[],count:0,answer:[],sePinpon:new Audio(s(3632)),sePa:new Audio(s(9688))}},computed:{test(){return this.correct[1]}},async mounted(){document.addEventListener("keydown",this.onKeyDown),await this.shuffleXY()},methods:{shuffleArray(q){for(let A=q.length-1;A>0;A--){let s=Math.floor(Math.random()*(A+1)),e=q[A];q[A]=q[s],q[s]=e}return q},shuffleXY(){this.shuffleArray(this.arrayX),this.shuffleArray(this.arrayY),this.correct=[],this.count=0,this.answer=[],this.arrayY.forEach(((q,A)=>{this.arrayX.forEach(((s,e)=>{this.isPlus?this.correct.push({order:9*A+e+1,ans:q+s,jage:!1}):this.correct.push({order:9*A+e+1,ans:q*s,jage:!1})}))})),this.sePa.play()},onKeyDown(q){switch(q.key){case isNaN(q.key)||q.key:this.onKeyClick(q.key);break;case"Enter":this.onEnter();break;case"Escape":this.shuffleXY();break;case"Delete":this.isPlus=!this.isPlus,this.shuffleXY();break}},onKeyClick(q){switch(q){case"Enter":this.onEnter();break;default:this.answer.push(q),this.key=q}},onEnter(){this.answer.join("")==this.correct[this.count].ans?(this.sePinpon.pause(),this.sePinpon.currentTime=0,this.sePinpon.play(),this.correct[this.count].jage=!0,this.answer=[],this.count++):(this.sePa.play(),this.answer=[])}}},m=s(89);const p=(0,m.Z)(k,[["render",w],["__scopeId","data-v-15279b0e"]]);var E=p},9688:function(q){q.exports="data:audio/mpeg;base64,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"},3632:function(q,A,s){q.exports=s.p+"media/pinpon2.17bc7fdc.mp3"}}]);
//# sourceMappingURL=213.cf42e00f.js.map