import{q as d,o as p,b as _,d as s,u as e,H as u,w as a,F as c,a as o,L as f,k as b,m as i}from"./app.258a8340.js";import{_ as h}from"./AppLayout.758ac775.js";import{_ as x}from"./TextInput.53c9a2da.js";import{_ as y}from"./SelectInput.90cf0da9.js";import{L as g}from"./LoadingButton.32cb8a4e.js";import{C as V}from"./Card.73fe1151.js";import"./Icon.5ed47614.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.8bb686e2.js";import"./Volume.0b53fb6c.js";import"./LanguageSwitcher.0c26ca67.js";import"./_defineProperty.27cae424.js";const w={class:"mb-8 text-3xl font-bold"},C=i("Playlists"),v=o("span",{class:"font-medium text-blinest-400"},"/",-1),N=i(" Create "),k=["onSubmit"],B={class:"-mb-8 -mr-6 flex flex-wrap p-8"},L=o("option",{value:1},"Yes",-1),P=o("option",{value:0},"No",-1),F={class:"flex items-center justify-end border-t border-gray-100 bg-gray-50 px-8 py-4"},$=i("Create Playlist"),I={__name:"Create",setup(H){const t=d({name:"",is_public:0}),n=()=>{t.post("/playlists")};return(m,r)=>(p(),_(c,null,[s(e(u),{title:"Create Playlist"}),s(h,null,{default:a(()=>[o("h1",w,[s(e(f),{class:"text-blinest-400 hover:text-blinest-600",href:m.route("playlists")},{default:a(()=>[C]),_:1},8,["href"]),v,N]),s(V,null,{default:a(()=>[o("form",{onSubmit:b(n,["prevent"])},[o("div",B,[s(x,{modelValue:e(t).name,"onUpdate:modelValue":r[0]||(r[0]=l=>e(t).name=l),error:e(t).errors.name,class:"w-full pb-8 pr-6 lg:w-1/2",label:"Name"},null,8,["modelValue","error"]),s(y,{modelValue:e(t).is_public,"onUpdate:modelValue":r[1]||(r[1]=l=>e(t).is_public=l),error:e(t).errors.is_public,class:"w-full pb-8 pr-6 lg:w-1/2",label:"Public"},{default:a(()=>[L,P]),_:1},8,["modelValue","error"])]),o("div",F,[s(g,{loading:e(t).processing,class:"btn-primary",type:"submit"},{default:a(()=>[$]),_:1},8,["loading"])])],40,k)]),_:1})]),_:1})],64))}};export{I as default};