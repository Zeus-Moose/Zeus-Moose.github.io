import{a as f,_ as v,f as l,t as d,k as _,l as g,h,j as r}from"./entry.3af56a57.js";import{q as y,h as p,e as w,j as C,u as $}from"./query.9432ce6c.js";import{_ as j}from"./nuxt-link.c7f08ca4.js";import"./app.config.7c95f9ec.js";import{w as m,s as N,u as P,a as T}from"./utils.16e846d8.js";/* empty css                      */const x=async n=>{const{content:t}=f().public;typeof(n==null?void 0:n.params)!="function"&&(n=y(n));const a=n.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await v(()=>import("./client-db.d77e9af1.js"),["./client-db.d77e9af1.js","./entry.3af56a57.js","./entry.14bf5d8b.css","./utils.16e846d8.js","./app.config.7c95f9ec.js","./query.9432ce6c.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:C(a),previewToken:P("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const R=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=d(n),a=_(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&g("dd-navigation").value){const{navigation:e}=T();return{navigation:e}}const{data:s}=await $(`content-navigation-${p(a.value)}`,()=>x(a.value));return{navigation:s}},render(n){const t=h(),{navigation:a}=n,s=o=>r(j,{to:o._path},()=>o.title),e=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,u+1)]):r("li",null,s(i)))),c=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}});export{R as default};
