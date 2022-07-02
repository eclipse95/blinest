import{h as d,i as f,k as v,B as b,o as s,c as g,w as i,a as t,b as n,t as r,m as h,g as k,y as _,d as y,F as m,N as w}from"./app.6178a65b.js";import{C as B}from"./Card.2e30a0a3.js";import"./plugin-vue_export-helper.21dcd24c.js";const E={class:"flex items-center justify-between"},N=t("h3",{class:"text-xl font-bold"},"Playlist",-1),C={key:0,class:"text-xl font-bold text-neutral-500"},V={class:"text-neutral-700"},S={class:"h-96 overflow-y-scroll"},T={class:"p-2"},A=["src","alt"],F={class:"flex-grow p-2"},L={class:"mr-1 flex-shrink-0 rounded bg-neutral-300 px-1 text-[10px] font-bold uppercase text-neutral-500 text-white"},P={__name:"Answers",props:{users:Array,channel:String},setup(p){const a=p,x=d(a.users),l=d(null),c=d([]);return f(()=>a.users,e=>{x.value=e}),v(()=>{Echo.channel(a.channel).listen("RoundStarted",e=>{l.value=e.round,c.value=[]}),Echo.channel(a.channel).listen("TrackEnded",e=>{console.log(e),c.value.unshift(e.track),l.value=e.round})}),b(()=>{Echo.leave(a.channel)}),(e,j)=>(s(),g(B,null,{header:i(()=>[t("div",E,[N,l.value?(s(),n("span",C,[t("span",V,r(l.value.current+1),1),h(" / "+r(l.value.tracks.length+1),1)])):k("",!0)])]),default:i(()=>[t("ul",S,[(s(!0),n(m,null,_(c.value,o=>(s(),n("li",{key:o.id,class:"mb-2 flex border-b"},[t("div",T,[t("img",{src:o.artwork_url,alt:o.album_name,class:"h-20 w-auto rounded"},null,8,A)]),t("div",F,[y(w,{name:"flip-list",tag:"ul"},{default:i(()=>[(s(!0),n(m,null,_(o.answers,u=>(s(),n("li",{key:u.id,class:"mb-1 flex items-start text-sm"},[t("span",L,r(e.__(u.type.name)),1),h(" "+r(u.value),1)]))),128))]),_:2},1024)])]))),128))])]),_:1}))}};export{P as default};
