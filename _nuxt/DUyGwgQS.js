import m from"./aPr71LRE.js";import{u as _,w as d,c as g,a as f,b as v,d as w,t as h,e as n,f as y,o as $,g as C}from"./XWT39uEz.js";import{u as b,q as x}from"./CiYDacWJ.js";import"./B2Wd-3oq.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./DE7Y6fQn.js";const B={class:"wrapper"},E={__name:"[...slug]",async setup(M){let o,r;const i=C(),{path:c}=_(),{data:e,error:l}=([o,r]=d(()=>b(`${c}`,()=>x().where({_path:c}).findOne())),o=await o,r(),o);if(l.value)throw g({statusCode:404,message:"not found",fatal:!0});return f({title:()=>{var t;return`${(t=e.value)==null?void 0:t.title} | Zeus Moose`},meta:()=>{var t,a,s,u,p;return[{property:"og:title",content:`${(t=e.value)==null?void 0:t.title} | Zeus Moose`},{name:"twitter:title",content:`${(a=e.value)==null?void 0:a.title} | Zeus Moose`},{name:"description",content:(s=e.value)==null?void 0:s.description},{property:"og:description",content:(u=e.value)==null?void 0:u.description},{name:"twitter:description",content:(p=e.value)==null?void 0:p.description},{name:"twitter:image",content:`${i.public.domain}assets/images/zeus_moose.png`},{property:"og:image",content:`${i.public.domain}assets/images/zeus_moose.png`}]}}),(t,a)=>{const s=m;return $(),v("div",B,[w("h1",null,h(n(e).page_title??n(e).title),1),y(s,{value:n(e)},null,8,["value"])])}}};export{E as default};
