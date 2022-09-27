import{q as c,o as l,b as m,d as r,u as t,H as f,w as n,F as u,a as o,t as d,y as x,m as g,j as y}from"./app.e47e5905.js";import{_ as h}from"./AppLayout.6652fede.js";import{_ as b}from"./TextInput.a612d17f.js";import{_ as v}from"./SelectInput.5dbed021.js";import{L as V}from"./LoadingButton.99115c19.js";import"./LanguageSwitcher.004676ec.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.c59b2b1e.js";import"./Icon.b99ae8d7.js";import"./Navbar.5230c35c.js";import"./Logo.f4483971.js";import"./pickBy.615c9b24.js";import"./debounce.f308b35d.js";import"./_defineProperty.14bd0892.js";const w=["onSubmit"],j={class:"mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-6"},k={class:"mx-auto mb-8 max-w-screen-sm lg:mb-16"},C={class:"mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"},B=o("p",{class:"font-light text-gray-500 dark:text-gray-400 sm:text-xl"},"Invite tes amis en priv\xE9, ou partage tes playlists en laissant ta room ouverte pour que tout le monde puisse jouer.",-1),F={class:"mt-6 flex justify-center"},L=["value"],N={class:"mt-16 flex justify-center"},R={class:"my-8 flex justify-center"},J={__name:"Create",props:{categories:Object},setup(p){const e=c({name:"",category_id:1}),_=()=>{e.post(route("rooms.store"))};return(a,i)=>(l(),m(u,null,[r(t(f),{title:"Create Room"}),r(h,null,{default:n(()=>[o("form",{onSubmit:y(_,["prevent"])},[o("div",j,[o("div",k,[o("h2",C,d(a.__("Rooms")),1),B,o("div",F,[r(v,{modelValue:t(e).category_id,"onUpdate:modelValue":i[0]||(i[0]=s=>t(e).category_id=s),error:t(e).errors.category_id,class:"text-xl md:w-1/2",label:a.__("Category")},{default:n(()=>[(l(!0),m(u,null,x(p.categories,s=>(l(),m("option",{key:s.id,value:s.id},d(s.name),9,L))),128))]),_:1},8,["modelValue","error","label"])]),o("div",N,[r(b,{modelValue:t(e).name,"onUpdate:modelValue":i[1]||(i[1]=s=>t(e).name=s),error:t(e).errors.name,class:"text-xl",placeholder:a.__("Room name")},null,8,["modelValue","error","placeholder"])]),o("div",R,[r(V,{loading:t(e).processing,class:"btn-primary btn-lg",type:"submit"},{default:n(()=>[g(d(a.__("Create the room")),1)]),_:1},8,["loading"])])])])],40,w)]),_:1})],64))}};export{J as default};