import{o as r,A as v,j as h,L as l,a0 as d}from"./vendor.2a4e4c2a.js";const _={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},f=h("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-.5 14v3h-3v-3H8l4-4l4 4h-2.5M13 9V3.5L18.5 9H13z",fill:"currentColor"},null,-1),p=[f];function m(t,a){return r(),v("svg",_,p)}var x={name:"mdi-file-upload",render:m};function B(t,a="text"){const n=l(),e=l(!1);function i(){e.value||t.value.click()}return d(t,"change",c=>{const o=c.target,s=o.files[0];s&&(e.value=!0,o.value="",n.value=null,new Response(s)[a]().finally(()=>e.value=!1).then(u=>{n.value=u}))}),{result:n,loading:e,chooseFile:i}}export{x as _,B as u};
