const __vite__fileDeps=["./DCxcaa1_.js","./BvSI5eAl.js","./C-v3KzvZ.js","./Bpc8o7dk.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{Q as x,v as _,R as T,N as L,S as j,T as I,I as q,U as C,y as M,c as Q,e as F,V as N,W as U,X as H,g,B as K,C as z,Y as A,M as W}from"./BvSI5eAl.js";import{u as O,h as b}from"./Bpc8o7dk.js";const k=e=>e==="defer"||e===!1;function ne(...e){var P;const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);let[r,i,n={}]=e;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=M(),a=i,u=()=>null,l=()=>s.isHydrating?s.payload.data[r]:s.static.data[r];n.server=n.server??!0,n.default=n.default??u,n.getCachedData=n.getCachedData??l,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0,n.deep=n.deep??x.deep,n.dedupe=n.dedupe??"cancel";const p=()=>n.getCachedData(r,s)!=null;if(!s._asyncData[r]||!n.immediate){(P=s.payload._errors)[r]??(P[r]=null);const f=n.deep?_:T;s._asyncData[r]={data:f(n.getCachedData(r,s)??n.default()),pending:_(!p()),error:L(s.payload._errors,r),status:_("idle")}}const o={...s._asyncData[r]};o.refresh=o.execute=(f={})=>{if(s._asyncDataPromises[r]){if(k(f.dedupe??n.dedupe))return s._asyncDataPromises[r];s._asyncDataPromises[r].cancelled=!0}if((f._initial||s.isHydrating&&f._initial!==!1)&&p())return Promise.resolve(n.getCachedData(r,s));o.pending.value=!0,o.status.value="pending";const y=new Promise((h,c)=>{try{h(a(s))}catch(w){c(w)}}).then(async h=>{if(y.cancelled)return s._asyncDataPromises[r];let c=h;n.transform&&(c=await n.transform(h)),n.pick&&(c=V(c,n.pick)),s.payload.data[r]=c,o.data.value=c,o.error.value=null,o.status.value="success"}).catch(h=>{if(y.cancelled)return s._asyncDataPromises[r];o.error.value=Q(h),o.data.value=F(n.default()),o.status.value="error"}).finally(()=>{y.cancelled||(o.pending.value=!1,delete s._asyncDataPromises[r])});return s._asyncDataPromises[r]=y,s._asyncDataPromises[r]},o.clear=()=>G(s,r);const m=()=>o.refresh({_initial:!0}),R=n.server!==!1&&s.payload.serverRendered;{const f=N();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const c=f._nuxtOnBeforeMountCbs;j(()=>{c.forEach(w=>{w()}),c.splice(0,c.length)}),I(()=>c.splice(0,c.length))}R&&s.isHydrating&&(o.error.value||p())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):f&&(s.payload.serverRendered&&s.isHydrating||n.lazy)&&n.immediate?f._nuxtOnBeforeMountCbs.push(m):n.immediate&&m();const y=U();if(n.watch){const c=q(n.watch,()=>o.refresh());y&&C(c)}const h=s.hook("app:data:refresh",async c=>{(!c||c.includes(r))&&await o.refresh()});y&&C(h)}const v=Promise.resolve(s._asyncDataPromises[r]).then(()=>o);return Object.assign(v,o),v}function G(e,t){t in e.payload.data&&(e.payload.data[t]=void 0),t in e.payload._errors&&(e.payload._errors[t]=null),e._asyncData[t]&&(e._asyncData[t].data.value=void 0,e._asyncData[t].error.value=null,e._asyncData[t].pending.value=!1,e._asyncData[t].status.value="idle"),t in e._asyncDataPromises&&(e._asyncDataPromises[t].cancelled=!0,e._asyncDataPromises[t]=void 0)}function V(e,t){const r={};for(const i of t)r[i]=e[i];return r}const $=(e,t)=>t.split(".").reduce((r,i)=>r&&r[i],e),D=(e,t)=>Object.keys(e).filter(t).reduce((r,i)=>Object.assign(r,{[i]:e[i]}),{}),se=e=>t=>e&&e.length?D(t,r=>!e.includes(r)):t,ie=e=>t=>Array.isArray(t)?t.map(r=>e(r)):e(t),S=e=>{const t=[],r=[];for(const i of e)["$","_"].includes(i)?t.push(i):r.push(i);return{prefixes:t,properties:r}},oe=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:r,properties:i}=S(e);return D(t,n=>!i.includes(n)&&!r.includes(n[0]))},ce=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:r,properties:i}=S(e);return D(t,n=>i.includes(n)||r.includes(n[0]))},ue=(e,t)=>{const r=new Intl.Collator(t.$locale,{numeric:t.$numeric,caseFirst:t.$caseFirst,sensitivity:t.$sensitivity}),i=Object.keys(t).filter(n=>!n.startsWith("$"));for(const n of i)e=e.sort((s,a)=>{const u=[$(s,n),$(a,n)].map(l=>{if(l!==null)return l instanceof Date?l.toISOString():l});return t[n]===-1&&u.reverse(),r.compare(u[0],u[1])});return e},le=(e,t="Expected an array")=>{if(!Array.isArray(e))throw new TypeError(t)},d=e=>Array.isArray(e)?e:[void 0,null].includes(e)?[]:[e],X=["sort","where","only","without"];function Y(e,t={}){const r={};for(const a of Object.keys(t.initialParams||{}))r[a]=X.includes(a)?d(t.initialParams[a]):t.initialParams[a];const i=(a,u=l=>l)=>(...l)=>(r[a]=u(...l),s),n=a=>{var u;return t.legacy?a!=null&&a.surround?a.surround:a&&(a!=null&&a.dirConfig&&(a.result={_path:(u=a.dirConfig)==null?void 0:u._path,...a.result,_dir:a.dirConfig}),a!=null&&a._path||Array.isArray(a)||!Object.prototype.hasOwnProperty.call(a,"result")?a:a==null?void 0:a.result):a},s={params:()=>({...r,...r.where?{where:[...d(r.where)]}:{},...r.sort?{sort:[...d(r.sort)]}:{}}),only:i("only",d),without:i("without",d),where:i("where",a=>[...d(r.where),...d(a)]),sort:i("sort",a=>[...d(r.sort),...d(a)]),limit:i("limit",a=>parseInt(String(a),10)),skip:i("skip",a=>parseInt(String(a),10)),find:()=>e(s).then(n),findOne:()=>e(i("first")(!0)).then(n),count:()=>e(i("count")(!0)).then(n),locale:a=>s.where({_locale:a}),withSurround:i("surround",(a,u)=>({query:a,...u})),withDirConfig:()=>i("dirConfig")(!0)};return t.legacy&&(s.findSurround=(a,u)=>s.withSurround(a,u).find().then(n)),s}function B(e){return JSON.stringify(e,J)}function J(e,t){return t instanceof RegExp?`--REGEX ${t.toString()}`:t}const Z=e=>{let t=B(e);return t=typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t),t=t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(t.match(/.{1,100}/g)||[]).join("/")},E=e=>H(e,g().public.content.api.baseURL),fe=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},ee=()=>{const{experimental:e}=g().public.content;return e.clientDB?!0:O().isEnabled()},te=()=>async e=>{const{content:t}=g().public,r=e.params(),i=t.experimental.stripQueryParameters?E(`/query/${`${b(r)}.${t.integrity}`}/${Z(r)}.json`):E(`/query/${b(r)}.${t.integrity}.json`);if(ee())return(await W(()=>import("./DCxcaa1_.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(a=>a.useContentDatabase())).fetch(e);const n=await $fetch(i,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:B(r),previewToken:O().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};function de(e,...t){const{content:r}=g().public,i=Y(te(),{initialParams:typeof e!="string"?e:{},legacy:!0});let n;typeof e=="string"&&(n=K(z(e,...t)));const s=i.params;return i.params=()=>{var u,l,p;const a=s();return n&&(a.where=a.where||[],a.first&&(a.where||[]).length===0?a.where.push({_path:A(n)}):a.where.push({_path:new RegExp(`^${n.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=a.sort)!=null&&u.length||(a.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((p=(l=a.where)==null?void 0:l.find(m=>m._locale))!=null&&p._locale||(a.where=a.where||[],a.where.push({_locale:r.defaultLocale}))),a},i}export{fe as a,le as b,d as c,ue as d,Z as e,ie as f,$ as g,oe as h,ce as i,B as j,Y as k,se as o,de as q,ee as s,ne as u,E as w};
