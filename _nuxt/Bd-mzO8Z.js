import{_ as p}from"./DNuebFmo.js";import{l as u,o as i,a as r,b as s,e as d,p as m,t as _,q as f,n as h,F as M}from"./CK3p6n2j.js";import"./_nvUsEKZ.js";import"./BK1smaLK.js";const g={props:["title","image","thumb"],mounted(){window.addEventListener("keyup",t=>{t.key==="Escape"&&this.closeModal()})},data(){return{modalOpen:!1}},methods:{openModal(){this.modalOpen=!0},closeModal(){this.modalOpen=!1}}},k=["alt","href"],v={class:"modal"},y={key:0,class:"caption"};function O(t,a,e,w,c,l){const n=p;return i(),r(M,null,[s("a",{alt:e.title,title:"item.title",href:e.image,onClick:a[0]||(a[0]=m((...o)=>l.openModal&&l.openModal(...o),["prevent"]))},[d(n,{src:e.image,alt:t.alt,height:"400",width:"300"},null,8,["src","alt"])],8,k),s("div",{class:h(c.modalOpen?"modalWrapper modalOpen":"modalWrapper"),onClick:a[1]||(a[1]=m((...o)=>l.closeModal&&l.closeModal(...o),["prevent"]))},[s("div",v,[d(n,{src:e.image,alt:t.alt},null,8,["src","alt"]),e.title?(i(),r("p",y,_(e.title),1)):f("",!0)])],2)],64)}const N=u(g,[["render",O]]);export{N as default};
