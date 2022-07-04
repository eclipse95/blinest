import{h as o,j as k,G as y,o as s,b as a,a as e,s as b,S as V,c as M,w as f,g as _,t as w,k as B,F as x,y as S,d as C,m as T}from"./app.258a8340.js";import{_ as N}from"./Dropdown.8bb686e2.js";import U from"./Controls.f929be84.js";import"./Card.73fe1151.js";import"./plugin-vue_export-helper.21dcd24c.js";const $=["onSubmit"],j={class:"flex w-full items-center"},E=e("button",{type:"button",class:"h-14 bg-white p-4 text-neutral-500"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"})])],-1),L={type:"submit",class:"btn-send h-14"},D={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},F=e("path",{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"},null,-1),H={class:"mt-2 flex gap-2"},z=["innerHTML"],J={__name:"UserInput",props:{channel:String},setup(i){const d=i,m=o(null),u=o(null),p=o(null),r=o(null),l=o(""),c=o([]);k(()=>{h(),Echo.channel(d.channel).listen("TrackPlayed",t=>{p.value=t.room,r.value=t.round,u.value=t.track,c.value=[]})}),y(()=>{Echo.leave(d.channel)});const h=()=>{m.value.focus()},g=()=>{l.value.length>1&&u.value&&axios.post(`/rounds/${r.value.id}/tracks/${u.value.id}/check`,{text:l.value}).then(t=>{c.value.push(...t.data.good_answers),h()}),l.value=""};return(t,v)=>(s(),a(x,null,[e("form",{class:"flex w-full items-center justify-center",onSubmit:B(g,["prevent"])},[e("div",j,[b(e("input",{ref_key:"input",ref:m,"onUpdate:modelValue":v[0]||(v[0]=n=>l.value=n),type:"text",class:"h-14 flex-grow rounded-bl-md border-none p-2 text-2xl uppercase text-gray-600 focus:shadow-none focus:outline-none focus:ring-0 w-full",placeholder:"Une id\xE9e?",autofocus:""},null,512),[[V,l.value]]),r.value?(s(),M(N,{key:0,autoClose:!1,placement:"bottom-end"},{default:f(()=>[E]),dropdown:f(()=>[C(U,{channel:i.channel,room:p.value,round:r.value},null,8,["channel","room","round"])]),_:1})):_("",!0),e("button",L,[(s(),a("svg",D,[e("title",null,w(t.__("Send")),1),F]))])])],40,$),e("ul",H,[(s(!0),a(x,null,S(c.value,n=>(s(),a("li",{key:n.id,class:"flex items-center rounded-lg bg-teal-500 py-1 px-2 text-neutral-100"},[n.type.svg_icon?(s(),a("span",{key:0,class:"mr-1",innerHTML:n.type.svg_icon},null,8,z)):_("",!0),T(" "+w(n.value),1)]))),128))])],64))}};export{J as default};
