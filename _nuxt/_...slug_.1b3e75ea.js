import p from"./ContentRenderer.b7ddc146.js";import{u as d,w as _,c as g,a as f,b as v,t as w,d as s,e as h,o as C,f as $}from"./entry.47360f35.js";import{u as y}from"./vue.f36acd1f.beb587a1.js";import{u as R,q as x}from"./query.2d702c3c.js";import"./ContentRendererMarkdown.vue.9843a43b.js";import"./index.a6ef77ff.js";import"./preview.5295875c.js";const B={class:"wrapper"},N={__name:"[...slug]",async setup(M){let o,r;const i=$(),{path:c}=d(),{data:e,error:l}=([o,r]=_(()=>R(`${c}`,()=>x().where({_path:c}).findOne())),o=await o,r(),o);if(l.value)throw g({statusCode:404,message:"not found"});return y({title:()=>{var t;return`${(t=e.value)==null?void 0:t.title} | Zeus Moose`},meta:()=>{var t,a,n,u,m;return[{name:"og:title",content:`${(t=e.value)==null?void 0:t.title} | Zeus Moose`},{name:"twitter:title",content:`${(a=e.value)==null?void 0:a.title} | Zeus Moose`},{name:"description",content:(n=e.value)==null?void 0:n.description},{name:"og:description",content:(u=e.value)==null?void 0:u.description},{name:"twitter:description",content:(m=e.value)==null?void 0:m.description},{name:"twitter:image",content:`${i.domain}assets/images/zeus_moose.png`},{name:"og:image",content:`${i.domain}assets/images/zeus_moose.png`}]}}),(t,a)=>{const n=p;return C(),f("div",B,[v("h1",null,w(s(e).page_title??s(e).title),1),h(n,{value:s(e)},null,8,["value"])])}}};export{N as default};
