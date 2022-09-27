import{q as y,o,b as n,d as r,u as i,H as w,w as c,F as p,a as e,t as a,L as d,m as v,A as g,K as x,y as k,x as f}from"./app.e47e5905.js";import{_ as C}from"./TextInput.a612d17f.js";import{_ as q}from"./AppLayout.6652fede.js";import"./Icon.b99ae8d7.js";import"./LanguageSwitcher.004676ec.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.c59b2b1e.js";import"./Navbar.5230c35c.js";import"./Logo.f4483971.js";import"./pickBy.615c9b24.js";import"./debounce.f308b35d.js";import"./_defineProperty.14bd0892.js";const j={class:"mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-6"},$={class:"mx-auto mb-8 max-w-screen-sm lg:mb-16"},V={class:"mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"},B=e("p",{class:"font-light text-gray-500 dark:text-gray-400 sm:text-xl"},"Rejoins une team et partages tes scores avec les autres membres pour exploser les compteurs!",-1),L={class:"my-6 flex justify-center"},F={class:"mt-16 flex justify-center"},N={class:"flex items-center gap-8"},S=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-20 w-20",viewBox:"0 0 20 20",fill:"currentColor"},[e("title",null,"Previous team list"),e("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),D={class:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-16"},I={class:"relative"},R={class:"absolute top-1 right-1 rounded-full bg-teal-500 py-1 px-2 font-bold text-white"},T=v("\u2044"),z=["src","alt"],H={class:"mb-1 truncate text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},M={href:"#"},O=["onClick"],A=["onClick"],E=["onClick"],K=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-20 w-20",viewBox:"0 0 20 20",fill:"currentColor"},[e("title",null,"Next team list"),e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),ae={__name:"Index",props:{teams:Object,user:Object},setup(l){const u=y({search:""}),b=s=>{f.Inertia.post(`/teams/${s.id}/request`)},m=s=>{f.Inertia.post(`/teams/${s.id}/request/cancel`)};return(s,_)=>(o(),n(p,null,[r(i(w),{title:s.__("Teams")},null,8,["title"]),r(q,null,{default:c(()=>[e("section",null,[e("div",j,[e("div",$,[e("h2",V,a(s.__("Teams")),1),B,e("div",L,[r(i(d),{href:"/teams/create",class:"btn-primary btn-lg"},{default:c(()=>[v(a(s.__("Create a team")),1)]),_:1})]),e("div",F,[r(C,{modelValue:i(u).search,"onUpdate:modelValue":_[0]||(_[0]=t=>i(u).search=t),placeholder:s.__("Search a team")},null,8,["modelValue","placeholder"])])]),e("div",N,[g(r(i(d),{href:l.teams.prev_page_url},{default:c(()=>[S]),_:1},8,["href"]),[[x,l.teams.prev_page_url]]),e("div",D,[(o(!0),n(p,null,k(l.teams.data,t=>(o(),n("div",{class:"text-center text-gray-500 dark:text-gray-400",key:t.id},[e("div",I,[e("span",R,[e("sup",null,a(t.members_count),1),T,e("sub",null,a(t.seats),1)]),e("img",{class:"mx-auto mb-4 h-36 w-36 rounded-full",src:t.photo,alt:t.name},null,8,z)]),e("h3",H,[e("a",M,a(t.name),1)]),e("p",null,"@"+a(t.owner.name),1),l.user.declined_requests.includes(t.id)?(o(),n("button",{key:0,type:"button",onClick:h=>m(t),class:"btn-danger mx-auto my-6"},a(s.__("Declined request")),9,O)):l.user.pending_requests.includes(t.id)?(o(),n("button",{key:1,type:"button",onClick:h=>m(t),class:"btn-danger mx-auto my-6"},a(s.__("Cancel join request")),9,A)):(o(),n("button",{key:2,type:"button",onClick:h=>b(t),class:"btn-secondary mx-auto my-6"},a(s.__("Send a join request")),9,E))]))),128))]),g(r(i(d),{href:l.teams.next_page_url},{default:c(()=>[K]),_:1},8,["href"]),[[x,l.teams.next_page_url]])])])])]),_:1})],64))}};export{ae as default};