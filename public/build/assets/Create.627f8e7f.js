import{q as d,o as p,b as _,d as r,u as e,H as f,w as a,F as c,a as t,L as b,m,t as g,k as w}from"./app.258a8340.js";import{_ as V}from"./AdminLayout.b8151563.js";import{_ as i}from"./TextInput.53c9a2da.js";import{_ as y}from"./TextareaInput.4d3f79ed.js";import{L as x}from"./LoadingButton.32cb8a4e.js";import{C as h}from"./Card.73fe1151.js";import"./Icon.5ed47614.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.8bb686e2.js";import"./LanguageSwitcher.0c26ca67.js";const v={class:"text-3xl font-bold"},C=m("Answer Types"),k=t("span",{class:"font-medium text-blue-400"}," /",-1),B=m(" Create "),L=["onSubmit"],N={class:"-mb-8 -mr-6 flex flex-wrap p-8"},S={class:"flex items-center justify-end border-t border-gray-100 bg-gray-50 px-8 py-4"},I={__name:"Create",setup(F){const o=d({name:null,pronoun:null,svg_icon:null}),u=()=>{o.post("/admin/answer_types")};return(n,l)=>(p(),_(c,null,[r(e(f),{title:"Create Category"}),r(V,null,{default:a(()=>[r(h,null,{header:a(()=>[t("h1",v,[r(e(b),{class:"text-blue-400 hover:text-blue-600",href:"/admin/answer_types"},{default:a(()=>[C]),_:1}),k,B])]),default:a(()=>[t("form",{onSubmit:w(u,["prevent"])},[t("div",N,[r(i,{modelValue:e(o).name,"onUpdate:modelValue":l[0]||(l[0]=s=>e(o).name=s),error:e(o).errors.name,class:"w-full pb-8 pr-6 lg:w-1/2",label:n.__("Name")},null,8,["modelValue","error","label"]),r(i,{modelValue:e(o).pronoun,"onUpdate:modelValue":l[1]||(l[1]=s=>e(o).pronoun=s),error:e(o).errors.pronoun,class:"w-full pb-8 pr-6 lg:w-1/2",label:n.__("Pronoun")},null,8,["modelValue","error","label"]),r(y,{modelValue:e(o).svg_icon,"onUpdate:modelValue":l[2]||(l[2]=s=>e(o).svg_icon=s),error:e(o).errors.svg_icon,class:"w-full pb-8 pr-6 lg:w-1/2",label:n.__("SVG Icon")},null,8,["modelValue","error","label"])]),t("div",S,[r(x,{loading:e(o).processing,class:"btn-primary",type:"submit"},{default:a(()=>[m(g(n.__("Create Answer Type")),1)]),_:1},8,["loading"])])],40,L)]),_:1})]),_:1})],64))}};export{I as default};
