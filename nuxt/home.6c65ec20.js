import{a as f,i as u,o as i,b as p,e as n,j as o,u as r,k as l,c as m}from"./entry.5960a05f.js";const d={class:"w-full flex justify-around font-bold px-5 py-2"},_=f({__name:"TimeframeSelection",setup(c){const e=u("activeTimeframe",()=>1);return(s,t)=>(i(),p("div",d,[n("span",{class:o(["cursor-pointer relative hidden-green-underline hover:text-spotify-green transition-colors",[r(e)===0?"before:w-full !text-white":"before:w-0"]]),onClick:t[0]||(t[0]=a=>e.value=0)}," last month ",2),n("span",{class:o(["cursor-pointer relative hidden-green-underline hover:text-spotify-green transition-colors",[r(e)===1?"before:w-full !text-white":"before:w-0"]]),onClick:t[1]||(t[1]=a=>e.value=1)}," last year ",2),n("span",{class:o(["cursor-pointer relative hidden-green-underline hover:text-spotify-green transition-colors",[r(e)===2?"before:w-full !text-white":"before:w-0"]]),onClick:t[2]||(t[2]=a=>e.value=2)}," all time ",2)]))}}),v=l(_,[["__scopeId","data-v-57a53051"]]),x={};function w(c,e){const s=v;return i(),m(s)}const h=l(x,[["render",w]]);export{h as default};
