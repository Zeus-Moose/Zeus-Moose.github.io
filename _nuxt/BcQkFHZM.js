import{l as d,o as _,a as p,b as i,t as r,e as u,j as f,n as h,_ as m}from"./BYh56eKO.js";const B=function(){let s=[],t=0;Array.from(document.querySelectorAll(".mini_block .section_image > video")).forEach((o,a)=>{s[a]=o;const n=o.parentNode.parentNode,c=n.getElementsByClassName("intro")[0];o.addEventListener("ended",()=>{o.currentTime=0,n.classList.contains("active-video")?o.play():e()}),o.parentNode.parentNode.addEventListener("mouseenter",()=>{c.style.height=c.scrollHeight+"px",n.classList.add("active-video"),t=a-1,l(),e()}),o.parentNode.parentNode.addEventListener("mouseleave",()=>{c.style.height="0px",n.classList.remove("active-video")})}),t=s.length,s.length&&e();function e(){t++,t>=s.length&&(t=0),isNaN(s[t].duration)&&t++,s[t].play()}function l(){s.forEach(function(o,a){o.pause()})}},v={props:["portfolio","preload"],computed:{cardSize(){return this.portfolio.card_size??""}}},y={class:"section_image"},N=["autoplay","poster"],g=["src"],b=["src"],L=["innerHTML"],k={class:"intro"},x={class:"sr-only"};function E(s,t,e,l,o,a){const n=m;return _(),p("article",{class:h(["block block_link mini_block",a.cardSize])},[i("div",y,[i("video",{muted:"true",autoplay:e.preload,poster:e.portfolio.thumbnail},[i("source",{type:"video/webm",src:`/assets/videos/${e.portfolio.video_thumb}`},null,8,g),i("source",{type:"video/mp4",src:`/assets/videos/${e.portfolio.video_thumb.replace(".webm",".mp4")}`},null,8,b)],8,N),i("h2",{innerHTML:e.portfolio.title},null,8,L),i("div",k,[i("p",null,r(e.portfolio.description),1)])]),u(n,{class:"section_image_link",to:e.portfolio._path},{default:f(()=>[i("span",x,"More info about "+r(e.portfolio.title),1)]),_:1},8,["to"])],2)}const C=d(v,[["render",E]]);export{C as P,B as v};
