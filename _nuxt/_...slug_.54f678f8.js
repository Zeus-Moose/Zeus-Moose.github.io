import l from"./ContentRenderer.c0c23d8b.js";import{u as d,w as _,c as g,a as f,b as h,t as v,d as a,e as w,o as y}from"./entry.c2a6fe52.js";import{u as $}from"./vue.f36acd1f.05c2ca75.js";import{u as C,q as x}from"./query.0a6f6426.js";import"./ContentRendererMarkdown.vue.bc4912db.js";import"./index.a6ef77ff.js";import"./preview.c8099e9a.js";const z={class:"wrapper"},u="https://zeus-moose.github.io/",D={__name:"[...slug]",async setup(B){let o,r;const{path:i}=d(),{data:e,error:m}=([o,r]=_(()=>C(`${i}`,()=>x().where({_path:i}).findOne())),o=await o,r(),o);if(m.value)throw g({statusCode:404,message:"not found"});return $({title:()=>{var t;return`${(t=e.value)==null?void 0:t.title} | Zeus Moose`},meta:()=>{var t,n,s,c,p;return[{property:"og:title",content:`${(t=e.value)==null?void 0:t.title} | Zeus Moose`},{name:"twitter:title",content:`${(n=e.value)==null?void 0:n.title} | Zeus Moose`},{name:"description",content:(s=e.value)==null?void 0:s.description},{property:"og:description",content:(c=e.value)==null?void 0:c.description},{name:"twitter:description",content:(p=e.value)==null?void 0:p.description},{name:"twitter:image",content:`${u}assets/images/zeus_moose.png`},{property:"og:image",content:`${u}assets/images/zeus_moose.png`}]}}),(t,n)=>{const s=l;return y(),f("div",z,[h("h1",null,v(a(e).page_title??a(e).title),1),w(s,{value:a(e)},null,8,["value"])])}}};export{D as default};