import{q as k,i as g,o as r,b as d,d as a,u as l,H as v,w as n,F as m,a as e,s as V,N,L as c,t as o,y as f,g as p,m as b,c as C,n as B,O as R}from"./app.d9a699ed.js";import{_ as O}from"./AppLayout.06dbab91.js";import{_ as y}from"./Icon.8cf741ea.js";import{t as T,_ as $,p as j}from"./Pagination.51fa9821.js";import{_ as F}from"./SearchFilter.4c2d89ad.js";import{C as L}from"./Card.3bb00577.js";import"./LanguageSwitcher.07dcd9f6.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Volume.0e692a8d.js";import"./_defineProperty.89a04d3d.js";import"./debounce.465b782b.js";const S=e("h1",{class:"mb-8 text-3xl font-bold"},"Rooms",-1),D={class:"mb-6 flex items-center justify-between"},H=e("label",{class:"mt-4 block text-gray-700"},"Trashed:",-1),I=e("option",{value:null},null,-1),M=e("option",{value:"with"},"With Trashed",-1),P=e("option",{value:"only"},"Only Trashed",-1),U=[I,M,P],q=e("span",null,"Create",-1),z=e("span",{class:"hidden md:inline"},"\xA0Room",-1),E={class:"overflow-x-auto"},W={class:"w-full whitespace-nowrap"},Y={class:"text-left font-bold"},A={class:"px-2 pb-4 pt-6"},G={class:"px-2 pb-4 pt-6"},J={class:"px-2 pb-4 pt-6"},K={class:"px-2 pb-4 pt-6"},Q={class:"px-2 pb-4 pt-6",colspan:"2"},X={class:"border-t"},Z=["src"],ee={class:"flex flex-col"},se={class:"max-w-[18rem] truncate text-gray-500"},te={class:"border-t"},ae={class:"flex items-center px-2 py-4 text-sm"},oe={class:"border-t"},le={class:"flex items-center px-2 py-4 text-sm"},re={class:"border-t"},de={class:"border-t"},ne={key:0,class:"text-xs text-neutral-500"},ie={class:"w-px border-t"},ce={key:0},_e={class:"border-t px-2 py-4",colspan:"6"},ve={__name:"Index",props:{filters:Object,rooms:Object},setup(h){const x=h,i=k({search:x.filters.search,trashed:x.filters.trashed});g(i,T(()=>{R.Inertia.get("/rooms",j(i),{remember:"forget",preserveState:!0})},150),{deep:!0});const w=()=>{i.reset()};return(t,u)=>(r(),d(m,null,[a(l(v),{title:"Rooms"}),a(O,null,{default:n(()=>[S,e("div",D,[a(F,{modelValue:l(i).search,"onUpdate:modelValue":u[1]||(u[1]=s=>l(i).search=s),class:"mr-4 w-full max-w-md",onReset:w},{default:n(()=>[H,V(e("select",{"onUpdate:modelValue":u[0]||(u[0]=s=>l(i).trashed=s),class:"form-select mt-1 w-full"},U,512),[[N,l(i).trashed]])]),_:1},8,["modelValue"]),a(l(c),{class:"btn-primary",href:t.route("rooms.create")},{default:n(()=>[q,z]),_:1},8,["href"])]),a(L,null,{default:n(()=>[e("div",E,[e("table",W,[e("tr",Y,[e("th",A,o(t.__("Name")),1),e("th",G,o(t.__("Moderators")),1),e("th",J,o(t.__("Playlists")),1),e("th",K,o(t.__("Rounds played")),1),e("th",Q,o(t.__("Visibility")),1)]),(r(!0),d(m,null,f(h.rooms.data,s=>(r(),d("tr",{key:s.id,class:"hover:bg-neutral-200"},[e("td",X,[a(l(c),{class:"flex items-center px-2 py-4",href:t.route("rooms.edit",s.id)},{default:n(()=>[s.photo?(r(),d("img",{key:0,class:"-my-2 mr-2 block h-10 w-10 rounded-full",src:s.photo},null,8,Z)):p("",!0),e("div",ee,[b(o(s.name)+" ",1),e("small",se,o(s.description),1)]),s.deleted_at?(r(),C(y,{key:1,name:"trash",class:"ml-2 h-3 w-3 flex-shrink-0 fill-gray-400"})):p("",!0)]),_:2},1032,["href"])]),e("td",te,[a(l(c),{class:"flex items-center px-2 py-4",href:t.route("rooms.edit",s.id),tabindex:"-1"},{default:n(()=>[e("ul",ae,[(r(!0),d(m,null,f(s.moderators,_=>(r(),d("li",{key:_.id,class:"m-1 rounded bg-neutral-300 p-1"},o(_.name),1))),128))])]),_:2},1032,["href"])]),e("td",oe,[e("ul",le,[(r(!0),d(m,null,f(s.playlists,_=>(r(),d("li",{key:_.id},[a(l(c),{class:"m-1 rounded bg-neutral-300 p-1 hover:underline",href:t.route("playlists.edit",_.id),tabindex:"-1"},{default:n(()=>[b(o(_.name),1)]),_:2},1032,["href"])]))),128))])]),e("td",re,[a(l(c),{class:"flex flex-col items-start px-2 py-4",href:t.route("rooms.edit",s.id),tabindex:"-1"},{default:n(()=>[b(o(h.rooms.rounds_count),1)]),_:2},1032,["href"])]),e("td",de,[a(l(c),{class:"flex flex-col items-start px-2 py-4",href:t.route("rooms.edit",s.id),tabindex:"-1"},{default:n(()=>[e("span",{class:B(["m-1 rounded px-2 py-1",s.password?"bg-neutral-300":"bg-teal-600  text-neutral-100"])},o(s.password?t.__("No"):t.__("Yes")),3),s.password?(r(),d("small",ne,o(t.__("Password protected")),1)):p("",!0)]),_:2},1032,["href"])]),e("td",ie,[a(l(c),{class:"flex items-center px-4",href:t.route("rooms.edit",s.id),tabindex:"-1"},{default:n(()=>[a(y,{name:"cheveron-right",class:"block h-6 w-6 fill-gray-400"})]),_:2},1032,["href"])])]))),128)),h.rooms.length===0?(r(),d("tr",ce,[e("td",_e,o(t.__("No rooms found.")),1)])):p("",!0)])]),a($,{links:h.rooms.links},null,8,["links"])]),_:1})]),_:1})],64))}};export{ve as default};
