import{q as k,o as d,b as p,d as a,u as l,H as $,w as n,F as c,a as o,L as v,m as f,t as i,g as _,k as g,y as O,c as x,O as y}from"./app.258a8340.js";import{_ as j}from"./AppLayout.758ac775.js";import{C as B}from"./Card.73fe1151.js";import{_ as C}from"./TextInput.53c9a2da.js";import{_ as F}from"./TextareaInput.4d3f79ed.js";import{_ as b}from"./SelectInput.90cf0da9.js";import{L}from"./LoadingButton.32cb8a4e.js";import{_ as N}from"./TrashedMessage.60fa8723.js";import{_ as U,a as S,b as D}from"./RoomsList.bc13171d.js";import"./Icon.5ed47614.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.8bb686e2.js";import"./Volume.0b53fb6c.js";import"./LanguageSwitcher.0c26ca67.js";import"./_defineProperty.27cae424.js";import"./Pagination.e29a592b.js";import"./debounce.3f69e86d.js";import"./Modal.c8b8679a.js";import"./Spinner.d6c34fc8.js";const P={class:"mb-4 text-3xl font-bold text-teal-600"},T=o("span",{class:"font-medium"}," / ",-1),A={class:"flex flex-wrap gap-4"},E={class:"flex w-full flex-col xl:w-1/4"},H=o("h3",{class:"text-xl font-bold"},"Playlist",-1),I=["onSubmit"],Y={value:1},q={value:0},M=["value"],R=["value"],z={class:"flex-1"},pe={__name:"Edit",props:{playlist:Object,filters:Object,answer_types:Object,tracks:Object,moderators:Object},setup(t){const u=t,e=k(u.playlist),w=()=>{e.put(`/playlists/${u.playlist.id}`,{onSuccess:()=>e.reset("password","photo")})},h=()=>{confirm("Are you sure you want to delete this playlist?")&&y.Inertia.delete(`/playlists/${u.playlist.id}`)},V=()=>{confirm("Are you sure you want to restore this playlist?")&&y.Inertia.put(`/playlists/${u.playlist.id}/restore`)};return(s,m)=>(d(),p(c,null,[a(l($),{title:`${l(e).name}`},null,8,["title"]),a(j,null,{default:n(()=>[o("h1",P,[a(l(v),{href:s.route("playlists")},{default:n(()=>[f(i(s.__("Playlists")),1)]),_:1},8,["href"]),T,f(" "+i(l(e).name),1)]),o("div",A,[o("div",E,[a(B,{class:"mb-4"},{header:n(()=>[H]),footer:n(()=>[t.playlist.deleted_at?_("",!0):(d(),p("button",{key:0,class:"text-sm text-red-600 hover:underline",tabindex:"-1",type:"button",onClick:h},i(s.__("Delete")),1)),a(L,{loading:l(e).processing,class:"btn-primary ml-auto",form:"playlistForm",type:"submit"},{default:n(()=>[f(i(s.__("Update")),1)]),_:1},8,["loading"])]),default:n(()=>[o("form",{id:"playlistForm",class:"p-4",onSubmit:g(w,["prevent"])},[a(C,{modelValue:l(e).name,"onUpdate:modelValue":m[0]||(m[0]=r=>l(e).name=r),error:l(e).errors.name,class:"mb-4 w-full",label:s.__("Title")},null,8,["modelValue","error","label"]),a(F,{modelValue:l(e).description,"onUpdate:modelValue":m[1]||(m[1]=r=>l(e).description=r),error:l(e).errors.description,class:"mb-4 w-full",label:s.__("Description")},null,8,["modelValue","error","label"]),a(b,{modelValue:l(e).is_public,"onUpdate:modelValue":m[2]||(m[2]=r=>l(e).is_public=r),error:l(e).errors.is_public,class:"mb-4 w-full",label:s.__("Public")},{default:n(()=>[o("option",Y,i(s.__("Yes")),1),o("option",q,i(s.__("No")),1)]),_:1},8,["modelValue","error","label"]),a(b,{modelValue:l(e).user_id,"onUpdate:modelValue":m[3]||(m[3]=r=>l(e).user_id=r),error:l(e).errors.user_id,class:"w-full",label:s.__("Owner")},{default:n(()=>[o("option",{value:t.playlist.owner.id},i(t.playlist.owner.name),9,M),(d(!0),p(c,null,O(t.playlist.moderators,r=>(d(),p("option",{value:r.id},i(r.name),9,R))),256))]),_:1},8,["modelValue","error","label"]),o("small",null,i(s.__("You can transfer the playlist management to a moderator.")),1)],40,I)]),_:1}),a(U,{playlist:t.playlist,class:"mb-4"},null,8,["playlist"]),a(S,{playlist:t.playlist},null,8,["playlist"])]),o("div",z,[t.playlist.deleted_at?(d(),x(N,{key:0,class:"mb-6",onRestore:V},{default:n(()=>[f(i(s.__("This playlist has been deleted.")),1)]),_:1})):_("",!0),a(D,{playlist:t.playlist,filters:t.filters,tracks:t.tracks,answer_types:t.answer_types},null,8,["playlist","filters","tracks","answer_types"])])])]),_:1})],64))}};export{pe as default};