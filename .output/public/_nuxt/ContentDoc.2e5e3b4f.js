import{u as h,a as g,w,b as y,e as C,f as v,h as D,i as S,j as r}from"./entry.3af56a57.js";import"./app.config.7c95f9ec.js";import{u as _}from"./composables.047c9c7b.js";import b from"./ContentRenderer.ae02121d.js";import q from"./ContentQuery.f4562777.js";import"./ContentRendererMarkdown.ffa37e05.js";import"./index.a6ef77ff.js";import"./query.9432ce6c.js";import"./utils.16e846d8.js";const a=(u,e=y())=>{const c=h(u),p=g();w(()=>h(u),(t=c)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const f=n.title||(t==null?void 0:t.title);f&&(n.title=f),p.public.content.host;const s=(n==null?void 0:n.description)||(t==null?void 0:t.description);s&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:s}),n!=null&&n.image||(t==null||t.image),C(()=>_(n))},{immediate:!0})},T=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=D(),{tag:c,excerpt:p,path:m,query:t,head:n}=u,f={...t||{},path:m||(t==null?void 0:t.path)||S(y().path),find:"one"},s=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(q,f,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&a(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:p,...this.$attrs})}:({data:i})=>(n&&a(i),r(b,{value:i,excerpt:p,tag:c,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):s("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{T as default};
