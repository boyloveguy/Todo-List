(function(){"use strict";var t={6024:function(t,e,o){var n=o(5130),a=o(6768);function l(t,e,o,n,l,s){const r=(0,a.g2)("HomePage");return(0,a.uX)(),(0,a.CE)("section",null,[(0,a.bF)(r)])}o(4114);var s=o(144),r=o(9005);const c=(0,r.nY)("filter",{state:()=>({typeFilter:"all"}),actions:{filter(t){this.typeFilter=t}}}),i={class:"flex-box todo__control-add"};var u={__name:"AddTaskComponent",props:{input:{},inputModifiers:{}},emits:["update:input"],setup(t){const e=c();let o=(0,a.fn)(t,"input");const l=()=>{e.listData.push({text:o.value,completed:!1,id:Date.now()+Math.random()}),localStorage.setItem("tasks",JSON.stringify((0,s.ux)(e.listData))),e.listData=(0,s.Kh)(JSON.parse(localStorage.getItem("tasks"))),o.value=""};return(t,e)=>{const r=(0,a.g2)("font-awesome-icon");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"full-block input",required:"","onUpdate:modelValue":e[0]||(e[0]=t=>(0,s.i9)(o)?o.value=t:o=t),onKeyup:e[1]||(e[1]=(0,n.jR)((t=>l()),["enter"])),placeholder:"Enter your task"},null,544),[[n.Jo,(0,s.R1)(o)]]),(0,a.Lk)("button",{class:"add-todo__button",onClick:e[2]||(e[2]=t=>l()),type:"submit"},[(0,a.bF)(r,{icon:["fas","square-plus"],class:"add-todo__icon",size:"2xl"})])])}}},f=o(1241);const p=(0,f.A)(u,[["__scopeId","data-v-5aae1b58"]]);var d=p;const v=t=>((0,a.Qi)("data-v-3e69af7e"),t=t(),(0,a.jt)(),t),m={class:"filter-todo__container"},k=v((()=>(0,a.Lk)("option",{value:"all"},"All",-1))),x=v((()=>(0,a.Lk)("option",{value:"completed"},"Completed",-1))),b=v((()=>(0,a.Lk)("option",{value:"uncompleted"},"Uncompleted",-1))),_=[k,x,b];var g={__name:"FilterComponent",setup(t){const e=c(),o=(0,s.KR)("all");return e.filter(o),e.listData=JSON.parse(localStorage.getItem("tasks")),(t,e)=>((0,a.uX)(),(0,a.CE)("div",m,[(0,a.bo)((0,a.Lk)("select",{name:"todo",class:"select-todo","onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t)},_,512),[[n.u1,o.value]])]))}};const h=(0,f.A)(g,[["__scopeId","data-v-3e69af7e"]]);var y=h,O=o(4232);const S={class:"flex-box--center-x-y-direction"},C={class:"task__container full-block flex-box"},D={class:"flex-box--center-x-y control-task__container"},L=["onClick"],I=["onClick"];var F={__name:"TaskComponent",setup(t){const e=c();e.listData=(0,s.Kh)(JSON.parse(localStorage.getItem("tasks")));const o=()=>(e.listData=(0,s.Kh)(JSON.parse(localStorage.getItem("tasks"))),(0,s.ux)(e.listData).filter((t=>{if(!0===(0,s.ux)(t).completed)return t}))),n=()=>(e.listData=(0,s.Kh)(JSON.parse(localStorage.getItem("tasks"))),(0,s.ux)(e.listData).filter((t=>{if(!1===(0,s.ux)(t).completed)return t}))),l=t=>{e.listData=(0,s.Kh)(JSON.parse(localStorage.getItem("tasks"))),e.listData.map((o=>{o.id===t&&(o.completed=!o.completed,localStorage.setItem("tasks",JSON.stringify((0,s.ux)(e.listData))))}))},r=t=>{e.listData=(0,s.Kh)(JSON.parse(localStorage.getItem("tasks"))),e.listData=e.listData.filter((e=>{if(e.id!==t)return e})),localStorage.setItem("tasks",JSON.stringify((0,s.ux)(e.listData)))};return(t,c)=>{const i=(0,a.g2)("font-awesome-icon");return(0,a.uX)(),(0,a.CE)("div",S,[(0,a.Lk)("ul",C,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)("all"==(0,s.R1)(e).typeFilter?(0,s.R1)(e).listData:"completed"==(0,s.R1)(e).typeFilter?o():n(),((t,e)=>((0,a.uX)(),(0,a.CE)("li",{class:"task flex-box--center-y",key:e},[(0,a.Lk)("span",{class:(0,O.C4)(["task__content",{"completed-task":t.completed}])},(0,O.v_)(t.text),3),(0,a.Lk)("div",D,[(0,a.Lk)("button",{class:"icon check-icon flex-box--center-x-y",onClick:e=>l(t.id)},[(0,a.bF)(i,{icon:["fas","check"],size:"lg"})],8,L),(0,a.Lk)("button",{class:"icon trash-icon flex-box--center-x-y",onClick:e=>r(t.id)},[(0,a.bF)(i,{icon:["fas","trash"]})],8,I)])])))),128))])])}}};const w=(0,f.A)(F,[["__scopeId","data-v-b26c8252"]]);var E=w;const J=t=>((0,a.Qi)("data-v-f513c2f8"),t=t(),(0,a.jt)(),t),N=J((()=>(0,a.Lk)("header",{class:"flex-box--center-x-y"},[(0,a.Lk)("h1",null,"To-Do List")],-1))),j={class:"control full-block flex-box--center-x-y"},K={class:"flex-box--center-x-y control__container"};var A={__name:"HomePage",setup(t){return(t,e)=>((0,a.uX)(),(0,a.CE)("div",null,[N,(0,a.Lk)("div",j,[(0,a.Lk)("div",K,[(0,a.bF)(d),(0,a.bF)(y)])]),(0,a.bF)(E)]))}};const X=(0,f.A)(A,[["__scopeId","data-v-f513c2f8"]]);var R=X,P={name:"App",components:{HomePage:R}};const T=(0,f.A)(P,[["render",l]]);var H=T,M=o(8950),U=o(2353),V=o(292);M.Yv.add(U.yLS,U.e68,U.Vdo);const q=(0,r.Ey)(),z=(0,n.Ef)(H);z.use(q),(0,n.Ef)(H).component("font-awesome-icon",V.gc).mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var l=e[n]={exports:{}};return t[n].call(l.exports,l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,l){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],l=t[u][2];for(var r=!0,c=0;c<n.length;c++)(!1&l||s>=l)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(r=!1,l<s&&(s=l));if(r){t.splice(u--,1);var i=a();void 0!==i&&(e=i)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[n,a,l]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,l,s=n[0],r=n[1],c=n[2],i=0;if(s.some((function(e){return 0!==t[e]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(c)var u=c(o)}for(e&&e(n);i<s.length;i++)l=s[i],o.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return o.O(u)},n=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(6024)}));n=o.O(n)})();
//# sourceMappingURL=app.ae3815a8.js.map