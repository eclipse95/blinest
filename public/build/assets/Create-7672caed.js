import{P as m,c as d,a,u as e,w as r,F as c,o as p,X as _,b as t,n as f,d as s,e as u}from"./app-f6824ecf.js";import{_ as g}from"./AdminLayout-dca5ea69.js";import{_ as x}from"./TextInput-4085333a.js";import{L as b}from"./LoadingButton-7c96c2e4.js";import"./LanguageSwitcher-d168d683.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Dropdown-b8d92112.js";import"./Icon-1ce38a62.js";import"./v4-cf522c50.js";const h={class:"mb-8 text-3xl font-bold"},w=t("span",{class:"font-medium text-indigo-400"},"/",-1),y={class:"max-w-3xl overflow-hidden rounded-md bg-white shadow"},C=["onSubmit"],v={class:"-mb-8 -mr-6 flex flex-wrap p-8"},V={class:"flex items-center justify-end border-t border-gray-100 bg-gray-50 px-8 py-4"},T={__name:"Create",setup(B){const o=m({name:null}),i=()=>{o.post("/admin/categories")};return(N,n)=>(p(),d(c,null,[a(e(_),{title:"Create Category"}),a(g,null,{default:r(()=>[t("h1",h,[a(e(f),{class:"text-indigo-400 hover:text-indigo-600",href:"/admin/categories"},{default:r(()=>[s("Categories")]),_:1}),w,s(" Create ")]),t("div",y,[t("form",{onSubmit:u(i,["prevent"])},[t("div",v,[a(x,{modelValue:e(o).name,"onUpdate:modelValue":n[0]||(n[0]=l=>e(o).name=l),error:e(o).errors.name,class:"w-full pb-8 pr-6 lg:w-1/2",label:"Name"},null,8,["modelValue","error"])]),t("div",V,[a(b,{loading:e(o).processing,class:"btn-primary",type:"submit"},{default:r(()=>[s("Create Category")]),_:1},8,["loading"])])],40,C)])]),_:1})],64))}};export{T as default};