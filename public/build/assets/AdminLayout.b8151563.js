import{o as c,b as m,a as s,d as e,w as a,n as r,u as d,L as l,e as h,t as u,r as p}from"./app.258a8340.js";import{L as v}from"./Icon.5ed47614.js";import{_ as x}from"./Dropdown.8bb686e2.js";import{_ as w,L as g,F as b}from"./LanguageSwitcher.0c26ca67.js";const y={class:"text-neutral-100"},$={class:"mb-6"},k={class:"mb-6"},L={class:"mb-6"},j={class:"mb-6"},z={class:"mb-6"},A={class:"mb-6"},B={class:"mb-6"},n={__name:"AdminMenu",setup(f){const o=(...t)=>{let i=h().url.value.substr(1);return t[0]===""?i==="":t.filter(_=>i.startsWith("admin/"+_)).length};return(t,i)=>(c(),m("div",y,[s("div",$,[e(d(l),{class:"group flex items-center",href:t.route("admin.dashboard")},{default:a(()=>[s("div",{class:r(o("dashboard")?"font-bold":"font-normal")},"Dashboard",2)]),_:1},8,["href"])]),s("div",k,[e(d(l),{class:"group flex items-center",href:t.route("admin.users")},{default:a(()=>[s("div",{class:r(o("users")?"font-bold":"font-normal")},"Users",2)]),_:1},8,["href"])]),s("div",L,[e(d(l),{class:"group flex items-center",href:t.route("admin.teams")},{default:a(()=>[s("div",{class:r(o("teams")?"font-bold":"font-normal")},"Teams",2)]),_:1},8,["href"])]),s("div",j,[e(d(l),{class:"group flex items-center",href:t.route("admin.playlists")},{default:a(()=>[s("div",{class:r(o("playlists")?"font-bold":"font-normal")},"Playlists",2)]),_:1},8,["href"])]),s("div",z,[e(d(l),{class:"group flex items-center",href:t.route("admin.categories.index")},{default:a(()=>[s("div",{class:r(o("categories")?"font-bold":"font-normal")},"Categories",2)]),_:1},8,["href"])]),s("div",A,[e(d(l),{class:"group flex items-center",href:t.route("admin.rooms")},{default:a(()=>[s("div",{class:r(o("rooms")?"font-bold":"font-normal")},"Rooms",2)]),_:1},8,["href"])]),s("div",B,[e(d(l),{class:"group flex items-center",href:t.route("admin.answer_types.index")},{default:a(()=>[s("div",{class:r(o("answer_types")?"font-bold":"font-normal")},"Answer Types",2)]),_:1},8,["href"])])]))}},V={class:"text-neutral-700"},C=s("div",{id:"dropdown"},null,-1),H={class:"md:flex md:flex-col"},M={class:"md:flex md:h-screen md:flex-col"},S={class:"text-white md:flex md:flex-shrink-0"},U={class:"flex items-center justify-between px-6 py-4 md:w-56 md:flex-shrink-0 md:justify-center"},D=s("svg",{class:"h-6 w-6 fill-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[s("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})],-1),F={class:"mt-2 rounded px-8 py-4 shadow-lg"},N={class:"md:text-md items center grid w-full grid-cols-2 p-4 text-sm md:px-12 md:py-0"},P={class:"text-md flex items-center justify-end uppercase text-yellow-500"},T={class:"flex items-center justify-end"},E={class:"md:flex md:flex-grow md:overflow-hidden"},O={class:"px-4 py-8 md:flex-1 md:overflow-y-auto md:p-12","scroll-region":""},I={__name:"AdminLayout",props:{auth:Object},setup(f){return(o,t)=>(c(),m("div",V,[C,s("div",H,[s("div",M,[s("div",S,[s("div",U,[e(d(l),{class:"mt-1",href:"/"},{default:a(()=>[e(v,{class:"fill-white",width:"120",height:"28"})]),_:1}),e(x,{class:"md:hidden",placement:"bottom-end"},{default:a(()=>[D]),dropdown:a(()=>[s("div",F,[e(n)])]),_:1})]),s("div",N,[s("div",P,u(o.__("Administration")),1),s("div",T,[e(w,{class:"mr-4"}),e(g)])])]),s("div",E,[e(n,{class:"hidden w-56 flex-shrink-0 overflow-y-auto p-12 md:block"}),s("div",O,[e(b),p(o.$slots,"default")])])])])]))}};export{I as _};
