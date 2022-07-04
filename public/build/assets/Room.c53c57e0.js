import{h as c,j as h,G as v,o as r,c as f,w as i,M as _,u as w,L as b,a as e,b as u,t as o,g as d,m,d as g,z as x}from"./app.258a8340.js";const k={class:"relative h-full w-full"},y={key:0,class:"ribbon truncate text-xs"},z={class:"absolute top-1 left-2 w-auto font-bold"},p={class:"flex items-center"},M=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mr-1 h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})],-1),A={class:"absolute bottom-2 right-2 w-auto"},B={key:0,xmlns:"http://www.w3.org/2000/svg",class:"mr-1 h-4 w-4 animate-pulse",viewBox:"0 0 20 20",fill:"currentColor"},V=e("path",{"fill-rule":"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z","clip-rule":"evenodd"},null,-1),j={class:"absolute bottom-0 flex w-full items-center justify-between rounded-b bg-gray-800 p-2 text-sm uppercase text-gray-100"},C={class:"flex items-center"},R={__name:"Room",props:{room:Object},setup(t){const s=`rooms.${t.room.id}`,a=c(null),l=c(!1);return h(()=>{Echo.channel(s).listen("TrackPlayed",n=>{a.value=n.data,l.value=!0}),Echo.channel(s).listen("RoundFinished",()=>{l.value=!1,a.value&&(a.value.current_track_index=0)})}),v(()=>{Echo.leave(s)}),(n,N)=>(r(),f(w(b),{href:`/rooms/${t.room.id}`,class:"relative flex h-48 w-full flex-col items-center justify-center rounded bg-neutral-800 bg-cover bg-center shadow transition duration-100 ease-in-out hover:z-10 hover:scale-110",style:_(`background-image: url(${t.room.photo});`)},{default:i(()=>[e("article",k,[t.room.is_public?d("",!0):(r(),u("div",y,"@"+o(t.room.owner.name),1)),e("div",z,[e("div",p,[M,m(" "+o(a.value?a.value.users_count:t.room.users_count),1)])]),e("div",A,[g(x,{name:"slide-fade"},{default:i(()=>[l.value?(r(),u("svg",B,[e("title",null,o(n.__("Round in progress")),1),V])):d("",!0)]),_:1})]),e("div",j,[m(o(t.room.name)+" ",1),e("div",C,o(a.value?a.value.current_track_index:t.room.current_track_index)+" / "+o(a.value?a.value.tracks_count:t.room.tracks_by_round),1)])])]),_:1},8,["href","style"]))}};export{R as default};