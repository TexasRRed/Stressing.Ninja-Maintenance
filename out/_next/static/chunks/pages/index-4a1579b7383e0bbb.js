(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7322)}])},7322:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(5893),i=n(7294),r=n(6030);function s(){let[e,t]=(0,i.useState)(0),[n,s]=(0,i.useState)(0),l=()=>{(0,r.Z)({targets:"#sky .star",opacity:[{duration:700,value:"0"},{duration:700,value:"1"}],easing:"linear",loop:!0,delay:(e,t)=>50*t})},o=()=>{(0,r.Z)({targets:"#shootingstars .wish",easing:"linear",loop:!0,delay:(e,t)=>1e3*t,opacity:[{duration:700,value:"1"}],width:[{value:"150px"},{value:"0px"}],translateX:350})},c=()=>.7*Math.random()+.6,d=()=>Math.floor(Math.random()*Math.floor(e)).toString(),u=()=>Math.floor(Math.random()*Math.floor(n)).toString();(0,i.useEffect)(()=>{t(Math.max(document.documentElement.clientWidth,window.innerWidth)),s(Math.max(document.documentElement.clientHeight,window.innerHeight)),l(),o()},[]);let h=[...Array(60)].map((e,t)=>(0,a.jsx)("circle",{cx:d(),cy:u(),r:c(),stroke:"none",strokeWidth:"0",fill:"white",className:"star"},t)),x=[...Array(60)].map((e,t)=>(0,a.jsx)("div",{className:"wish",style:{left:"".concat(u(),"px"),top:"".concat(d(),"px")}},t));return(0,a.jsxs)("div",{id:"App",children:[(0,a.jsx)("svg",{id:"sky",children:h}),(0,a.jsx)("div",{id:"shootingstars",children:x})]})}var l=n(1664),o=n.n(l),c=n(1451);let d=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{}),(0,a.jsxs)("div",{className:"text-white space-y-7 container mx-auto h-[80vh] flex flex-col justify-center items-center",children:[(0,a.jsx)("div",{children:(0,a.jsx)(c.f1B,{className:"text-9xl text-center text-[#CA1551]"})}),(0,a.jsx)("div",{className:"text-xl md:text-3xl text-center md:w-1/2",children:"We are currently under maintenance. You can reach us by clicking on below button."}),(0,a.jsx)("div",{children:(0,a.jsx)(o(),{href:"#",className:"bg-[#CA1551] py-4 px-10 rounded-xl shadow-lg",children:"CONNECT"})})]})]});var u=d}},function(e){e.O(0,[570,82,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);