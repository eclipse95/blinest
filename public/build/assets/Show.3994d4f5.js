import{o as a,b as l,d as i,u as f,H as p,w as n,F as u,a as s,k as c,m as r,t,y as _,x}from"./app.e47e5905.js";import{_ as y}from"./AppLayout.6652fede.js";import{C as b}from"./Card.96514456.js";import"./LanguageSwitcher.004676ec.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.c59b2b1e.js";import"./Icon.b99ae8d7.js";import"./Navbar.5230c35c.js";import"./Logo.f4483971.js";import"./TextInput.a612d17f.js";import"./pickBy.615c9b24.js";import"./debounce.f308b35d.js";import"./_defineProperty.14bd0892.js";const k={class:"flex justify-between items-center w-full"},w={class:"flex items-center"},g=["src"],v={class:"text-xl font-bold"},C=s("sup",null,"PTS",-1),N=r(")"),S=["src"],V=s("sup",null,"PTS",-1),j=r(") "),B={key:1,class:"ml-2 rounded bg-neutral-200 px-2 py-1"},J={__name:"Show",props:{team:Object,score:Number,members:Object},setup(e){const d=e,h=()=>{confirm("Are you sure?")&&x.Inertia.post(`/teams/${d.team.id}/leave`)};return(m,O)=>(a(),l(u,null,[i(f(p),{title:e.team.name},null,8,["title"]),i(y,null,{default:n(()=>[i(b,{class:"mx-auto max-w-xl"},{header:n(()=>[s("div",k,[s("div",w,[e.team.photo?(a(),l("img",{key:0,class:"-my-2 mr-2 block h-10 w-10 rounded-full",src:e.team.photo},null,8,g)):c("",!0),s("h1",v,[r(t(e.team.name)+" ("+t(e.score),1),C,N])]),s("span",null,t(e.members.length)+" / "+t(e.team.seats),1)])]),footer:n(()=>[s("button",{type:"button",class:"text-red-600",onClick:h},t(m.__("Leave the team")),1)]),default:n(()=>[s("ul",null,[(a(!0),l(u,null,_(e.members,o=>(a(),l("li",{key:o.id,class:"flex items-center m-2 p-2 border-b"},[o.photo?(a(),l("img",{key:0,class:"-my-2 mr-2 block h-8 w-8 rounded-full",src:o.photo},null,8,S)):c("",!0),r(" "+t(o.name)+" ("+t(o.score),1),V,j,o.id===e.team.user_id?(a(),l("span",B,t(m.__("Owner")),1)):c("",!0)]))),128))])]),_:1})]),_:1})],64))}};export{J as default};