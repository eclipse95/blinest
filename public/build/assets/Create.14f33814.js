import{q as p,o as d,b as _,d as r,u as e,w as s,F as f,H as b,a as t,L as c,h as m,t as g,m as w}from"./app.2ccf841f.js";import{_ as V}from"./AdminLayout.cc6b8d43.js";import{_ as i}from"./TextInput.c49deda3.js";import{_ as y}from"./TextareaInput.8e6b7e85.js";import{L as x}from"./LoadingButton.0800d954.js";import{C as v}from"./Card.53d0f134.js";import"./LanguageSwitcher.cb537353.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.6ea7b926.js";import"./Icon.6689216d.js";const C={class:"text-3xl font-bold"},h=t("span",{class:"font-medium text-blue-400"}," /",-1),B=["onSubmit"],L={class:"-mb-8 -mr-6 flex flex-wrap p-8"},N={class:"flex items-center justify-end border-t border-gray-100 bg-gray-50 px-8 py-4"},E={__name:"Create",setup(S){const o=p({name:null,pronoun:null,svg_icon:null}),u=()=>{o.post("/admin/answer_types")};return(n,l)=>(d(),_(f,null,[r(e(b),{title:"Create Category"}),r(V,null,{default:s(()=>[r(v,null,{header:s(()=>[t("h1",C,[r(e(c),{class:"text-blue-400 hover:text-blue-600",href:"/admin/answer_types"},{default:s(()=>[m("Answer Types")]),_:1}),h,m(" Create ")])]),default:s(()=>[t("form",{onSubmit:w(u,["prevent"])},[t("div",L,[r(i,{modelValue:e(o).name,"onUpdate:modelValue":l[0]||(l[0]=a=>e(o).name=a),error:e(o).errors.name,class:"w-full pb-8 pr-6 lg:w-1/2",label:n.__("Name")},null,8,["modelValue","error","label"]),r(i,{modelValue:e(o).pronoun,"onUpdate:modelValue":l[1]||(l[1]=a=>e(o).pronoun=a),error:e(o).errors.pronoun,class:"w-full pb-8 pr-6 lg:w-1/2",label:n.__("Pronoun")},null,8,["modelValue","error","label"]),r(y,{modelValue:e(o).svg_icon,"onUpdate:modelValue":l[2]||(l[2]=a=>e(o).svg_icon=a),error:e(o).errors.svg_icon,class:"w-full pb-8 pr-6 lg:w-1/2",label:n.__("SVG Icon")},null,8,["modelValue","error","label"])]),t("div",N,[r(x,{loading:e(o).processing,class:"btn-primary",type:"submit"},{default:s(()=>[m(g(n.__("Create Answer Type")),1)]),_:1},8,["loading"])])],40,B)]),_:1})]),_:1})],64))}};export{E as default};