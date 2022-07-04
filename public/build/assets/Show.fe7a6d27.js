import{o as i,b as c,d as o,u as n,H as u,w as r,F as _,a as e,t as s,m as a,L as d}from"./app.258a8340.js";import{_ as m}from"./AppLayout.758ac775.js";import{C as f}from"./Card.73fe1151.js";import"./Icon.5ed47614.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.8bb686e2.js";import"./Volume.0b53fb6c.js";import"./LanguageSwitcher.0c26ca67.js";import"./_defineProperty.27cae424.js";const h={class:"flex"},b={class:"mr-4 border-r pr-4"},p=["src","alt"],x={class:"mt-2 text-xl font-bold"},w={class:"text-xs text-neutral-400"},y={class:"my-8"},g={class:"mb-4 flex flex-col"},k={class:"font-bold"},v=e("br",null,null,-1),C={class:"mb-4 flex flex-col"},B={class:"font-bold"},N={key:0,class:"mb-4 flex flex-col"},j={class:"font-bold"},L={key:1,class:"mb-4 flex flex-col"},M={class:"flex-1"},S={class:"mb-6 flex gap-2"},V=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1),z={class:"text-xl font-bold"},A={__name:"Show",props:{user:Object},setup(t){return(l,D)=>(i(),c(_,null,[o(n(u),{title:t.user.name},null,8,["title"]),o(m,null,{default:r(()=>[e("div",h,[e("div",b,[e("figure",null,[e("img",{src:t.user.photo,alt:t.user.name,class:"w-full rounded"},null,8,p)]),e("h2",x,s(t.user.name),1),e("p",w,s(t.user.email),1),e("ul",y,[e("li",g,[e("span",k,s(l.__("Registered at")),1),e("span",null,[a(s(t.user.created_at),1),v,e("small",null,s(t.user.created_at_from_now),1)])]),e("li",C,[e("span",B,s(l.__("Id")),1),a(" "+s(t.user.id),1)]),t.user.latest_round_at?(i(),c("li",N,[e("span",j,s(l.__("Last round played at")),1),a(" "+s(t.user.latest_round_at),1)])):(i(),c("li",L,s(l.__("No round played yet")),1))]),o(n(d),{href:"",class:"text-red-600 hover:underline"},{default:r(()=>[a(s(l.__("Delete my account")),1)]),_:1})]),e("div",M,[e("header",S,[o(n(d),{class:"btn-primary",href:"/me/edit"},{default:r(()=>[a(s(l.__("Edit my profile")),1)]),_:1}),o(n(d),{class:"btn-primary",href:"/me/password"},{default:r(()=>[a(s(l.__("Change password")),1)]),_:1}),o(n(d),{class:"btn-secondary ml-auto",href:`/users/${t.user.id}`},{default:r(()=>[V,a(" "+s(l.__("See my profile as regular user")),1)]),_:1},8,["href"])]),o(f,null,{header:r(()=>[e("h2",z,s(l.__("My scores")),1)]),_:1})])])]),_:1})],64))}};export{A as default};
