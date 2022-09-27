import{q as k,o as d,b as p,d as a,u as l,H as $,w as n,F as c,a as o,L as v,m as f,t as r,k as _,j as g,y as x,c as j,x as y}from"./app.e47e5905.js";import{_ as O}from"./AdminLayout.84615827.js";import{C as B}from"./Card.96514456.js";import{_ as C}from"./TextInput.a612d17f.js";import{_ as F}from"./TextareaInput.1eb552d4.js";import{_ as b}from"./SelectInput.5dbed021.js";import{L}from"./LoadingButton.99115c19.js";import{_ as N}from"./TrashedMessage.b97107ac.js";import{_ as U,a as S,b as D}from"./RoomsList.bdd085c9.js";import"./Logo.f4483971.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.c59b2b1e.js";import"./LanguageSwitcher.004676ec.js";import"./Icon.b99ae8d7.js";import"./Pagination.e048b484.js";import"./Modal.e60b654c.js";import"./Spinner.ecf8755a.js";import"./pickBy.615c9b24.js";import"./debounce.f308b35d.js";import"./_defineProperty.14bd0892.js";const P={class:"mb-4 text-3xl font-bold text-teal-600"},T=o("span",{class:"font-medium"}," / ",-1),A={class:"flex flex-wrap gap-4"},E={class:"flex w-full flex-col xl:w-1/4"},H=o("h3",{class:"text-xl font-bold"},"Playlist",-1),I=["onSubmit"],Y={value:1},q={value:0},M=["value"],R=["value"],z={class:"flex-1"},fe={__name:"Edit",props:{playlist:Object,filters:Object,answer_types:Object,tracks:Object,moderators:Object},setup(t){const u=t,e=k(u.playlist),w=()=>{e.put(`/admin/playlists/${u.playlist.id}`,{onSuccess:()=>e.reset("password","photo")})},h=()=>{confirm("Are you sure you want to delete this playlist?")&&y.Inertia.delete(`/admin/playlists/${u.playlist.id}`)},V=()=>{confirm("Are you sure you want to restore this playlist?")&&y.Inertia.put(`/admin/playlists/${u.playlist.id}/restore`)};return(s,m)=>(d(),p(c,null,[a(l($),{title:`${l(e).name}`},null,8,["title"]),a(O,null,{default:n(()=>[o("h1",P,[a(l(v),{href:s.route("admin.playlists")},{default:n(()=>[f(r(s.__("Playlists")),1)]),_:1},8,["href"]),T,f(" "+r(l(e).name),1)]),o("div",A,[o("div",E,[a(B,{class:"mb-4"},{header:n(()=>[H]),footer:n(()=>[t.playlist.deleted_at?_("",!0):(d(),p("button",{key:0,class:"text-sm text-red-600 hover:underline",tabindex:"-1",type:"button",onClick:h},r(s.__("Delete")),1)),a(L,{loading:l(e).processing,class:"btn-primary ml-auto",form:"playlistForm",type:"submit"},{default:n(()=>[f(r(s.__("Update")),1)]),_:1},8,["loading"])]),default:n(()=>[o("form",{id:"playlistForm",class:"p-4",onSubmit:g(w,["prevent"])},[a(C,{modelValue:l(e).name,"onUpdate:modelValue":m[0]||(m[0]=i=>l(e).name=i),error:l(e).errors.name,class:"mb-4 w-full",label:s.__("Title")},null,8,["modelValue","error","label"]),a(F,{modelValue:l(e).description,"onUpdate:modelValue":m[1]||(m[1]=i=>l(e).description=i),error:l(e).errors.description,class:"mb-4 w-full",label:s.__("Description")},null,8,["modelValue","error","label"]),a(b,{modelValue:l(e).is_public,"onUpdate:modelValue":m[2]||(m[2]=i=>l(e).is_public=i),error:l(e).errors.is_public,class:"mb-4 w-full",label:s.__("Public")},{default:n(()=>[o("option",Y,r(s.__("Yes")),1),o("option",q,r(s.__("No")),1)]),_:1},8,["modelValue","error","label"]),a(b,{modelValue:l(e).user_id,"onUpdate:modelValue":m[3]||(m[3]=i=>l(e).user_id=i),error:l(e).errors.user_id,class:"w-full",label:s.__("Owner")},{default:n(()=>[o("option",{value:t.playlist.owner.id},r(t.playlist.owner.name),9,M),(d(!0),p(c,null,x(t.playlist.moderators,i=>(d(),p("option",{value:i.id},r(i.name),9,R))),256))]),_:1},8,["modelValue","error","label"]),o("small",null,r(s.__("You can transfer the playlist management to a moderator.")),1)],40,I)]),_:1}),a(U,{playlist:t.playlist,class:"mb-4"},null,8,["playlist"]),a(S,{playlist:t.playlist},null,8,["playlist"])]),o("div",z,[t.playlist.deleted_at?(d(),j(N,{key:0,class:"mb-6",onRestore:V},{default:n(()=>[f(r(s.__("This playlist has been deleted.")),1)]),_:1})):_("",!0),a(D,{playlist:t.playlist,filters:t.filters,tracks:t.tracks,answer_types:t.answer_types},null,8,["playlist","filters","tracks","answer_types"])])])]),_:1})],64))}};export{fe as default};