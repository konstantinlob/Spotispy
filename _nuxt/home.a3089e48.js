import{a as x,C as O,s as ee,i as te,j as U,k as se,l as Y,m as T,p as N,D as ae,R as ne,q as H,v as Z,x as oe,o as u,c as j,u as l,b as W,y as k,w as M,e as d,z as C,f as i,A as V,B as b,F as q,E as re,G as R,H as P,I as G,J as le,K as B,L as ce,M as E,N as ie,T as ue,O as de}from"./entry.72475f6d.js";import{_ as S}from"./_plugin-vue_export-helper.a1a6add7.js";var A;(function(t){t.ChartRendered="chart:rendered",t.ChartUpdated="chart:updated",t.ChartDestroyed="chart:destroyed",t.LabelsUpdated="labels:updated"})(A||(A={}));function L(t,e,r,s){t(e,r),s!==void 0&&s.emit(A.ChartRendered)}function he(t,e){t.update(),e!==void 0&&e.emit(A.ChartUpdated)}function F(t,e){t.destroy(),e!==void 0&&e.emit(A.ChartDestroyed)}function pe(t,e){const r={labels:typeof t.labels>"u"?[]:[...t.labels],datasets:[]};return J(r,{...t},e),r}function J(t,e,r){const s=[];t.datasets=e.datasets.map(n=>{const a=t.datasets.find(o=>o[r]===n[r]);return!a||!n.data||s.includes(a)?{...n}:(s.push(a),Object.assign(a,n),a)})}function fe(t,e,r){t.data.labels=e,r!==void 0&&r.emit(A.LabelsUpdated)}function _e(t,e){t.options={...e}}function me(t,e){const r=t.datasets.map(n=>n.label),s=e.datasets.map(n=>n.label);return e.datasets.length===t.datasets.length&&r.every((n,a)=>n===s[a])}const ve="Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components",ge="Update ERROR: chart instance not found",K=(t,e,r)=>x({props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:t},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},setup(s,n){O.register(r);const a=ee(null),o=te(null);function h(f,y){if(a.value!==null&&F(T(a.value),n),o.value===null)throw new Error(ve);{const c=pe(f,s.datasetIdKey),m=o.value.getContext("2d");m!==null&&(a.value=new O(m,{type:e,data:H(f)?new Proxy(c,{}):c,options:y,plugins:s.plugins}))}}function p(f,y){const c=H(f)?T(f):{...f},m=H(y)?T(y):{...y};if(Object.keys(m).length>0){const g=T(a.value);me(c,m)&&g!==null?(J(g==null?void 0:g.data,c,s.datasetIdKey),c.labels!==void 0&&fe(g,c.labels,n),_()):(g!==null&&F(g,n),L(h,s.chartData,s.chartOptions,n))}else a.value!==null&&F(T(a.value),n),L(h,s.chartData,s.chartOptions,n)}function v(f){const y=T(a.value);y!==null?(_e(y,f),_()):L(h,s.chartData,s.chartOptions,n)}function _(){const f=T(a.value);f!==null?he(f,n):console.error(ge)}return U(()=>s.chartData,(f,y)=>p(f,y),{deep:!0}),U(()=>s.chartOptions,f=>v(f),{deep:!0}),se(()=>{"datasets"in s.chartData&&s.chartData.datasets.length>0&&L(h,s.chartData,s.chartOptions,n)}),Y(()=>{a.value!==null&&F(T(a.value),n)}),n.expose({chart:a,updateChart:_}),()=>N("div",{style:s.styles,class:s.cssClasses},[N("canvas",{id:s.chartId,width:s.width,height:s.height,ref:o})])}}),ye=K("doughnut-chart","doughnut",ae),be=K("radar-chart","radar",ne),we=x({__name:"Doughnut",props:{doughnutData:{default:()=>[{name:"Missing Data",count:1}]}},setup(t){const e=t;O.register(...Z);const{doughnutData:r}=oe(e),s={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"white"}}}},n={labels:[],datasets:[{backgroundColor:["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#bcf60c","#fabebe","#008080","#e6beff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#808080"],borderColor:"#191414",data:[]}]};return r.value.forEach(a=>{n.labels.push(a.name),n.datasets[0].data.push(a.count)}),(a,o)=>(u(),j(l(ye),{"chart-data":n,"chart-options":s}))}}),Ce=t=>{for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t},I=(t,e,r=null)=>{const s=t.slice(0,e),n=Array(e-s.length).fill(r);return[...s,...n]},Q=t=>t.replace(/(^\w{1})|(\s+\w{1})/g,e=>e.toUpperCase());async function w({endpoint:t,query:e,body:r,method:s}){const n=localStorage.getItem("auth-token");if(!n)throw await W("/login"),new Error("missing authorization token");let a;return t.startsWith("http")?a=new URL(t):a=new URL(`https://api.spotify.com/v1${t}`),e&&Object.entries(e).forEach(([o,h])=>a.searchParams.append(o,h)),fetch(a,{method:s!=null?s:"GET",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:r?JSON.stringify(r):void 0}).then(async o=>{if(o.status===204)return null;if(o.status===403||o.status===401)throw await W("/login"),new Error(o.status+": "+o.statusText);return o.json()}).then(o=>{if(o!=null&&o.error)throw o.error.status?new Error(o.error.status+": "+o.error.message):new Error(o.error+": "+o.error_description);return o})}var $=(t=>(t[t.Month=0]="Month",t[t.HalfYear=1]="HalfYear",t[t.Year=2]="Year",t))($||{});const z={[0]:"short_term",[1]:"medium_term",[2]:"long_term"},xe={class:"w-full h-full flex flex-col justify-center items-center"},$e=i("h1",{class:"text-[30px] pb-6"},"Your Favorite Genres",-1),ke=i("p",{class:"text-gray"},"We found to what genres you like",-1),De=x({__name:"GenreDoughnut",async setup(t){var o;let e,r;const s=k("activeTimeframe").value,n=([e,r]=M(()=>w({endpoint:"/me/top/artists",query:{time_range:z[s]}}).catch(console.error)),e=await e,r(),e),a=[];return(o=n==null?void 0:n.items)==null||o.forEach(h=>h.genres.forEach(p=>{p=Q(p);const v=a.find(_=>_.name===p);v?v.count++:a.length<20&&a.push({name:p,count:1})})),(h,p)=>(u(),d("section",xe,[$e,C(we,{"doughnut-data":a}),ke]))}}),Te=x({__name:"RadarChart",props:{data:null},setup(t){const e=t;O.register(...Z);const r={plugins:{legend:{display:!1}},scales:{r:{angleLines:{display:!1},beginAtZero:!0,pointLabels:{display:!0,color:"white"},ticks:{display:!1},grid:{display:!0,color:"gray"}}}},s="#1DB954",n="#1DB95444",a="#eeeeee",o={labels:[],datasets:[{data:[],fill:!0,borderWidth:3,backgroundColor:n,borderColor:s,pointBackgroundColor:s,pointBorderColor:a,pointHoverBackgroundColor:a,pointHoverBorderColor:a}]};return e.data.forEach(h=>{var p;(p=o.labels)==null||p.push(h.name),o.datasets[0].data.push(h.value)}),(h,p)=>(u(),j(l(be),{"chart-data":o,"chart-options":r}))}}),Me={class:"w-full h-full flex flex-col justify-center items-center"},Ae=i("h1",{class:"text-[30px] pb-6"},"Your Top Tracks Analysed",-1),Se=i("p",{class:"text-gray"},"We analysed your Top Tracks for audio features",-1),Ee=x({__name:"AudioFeaturesRadarChart",async setup(t){let e,r;const s=k("activeTimeframe"),a=([e,r]=M(()=>w({endpoint:"/me/top/tracks",query:{limit:50,time_range:z[s.value]}})),e=await e,r(),e).items.map(_=>_.id),o=([e,r]=M(()=>w({endpoint:"/audio-features",query:{ids:a.join(",")}})),e=await e,r(),e),h={acousticness:0,danceability:0,energy:0,instrumentalness:0,liveness:0,speechiness:0,valence:0};o.audio_features.forEach(_=>{Object.keys(h).forEach(f=>{h[f]+=_[f]})});const p=o.audio_features.length,v=Object.entries(h).map(([_,f])=>({name:Q(_),value:f/p}));return(_,f)=>(u(),d("section",Me,[Ae,C(Te,{data:l(v)},null,8,["data"]),Se]))}}),Le={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 509.94 795.87"},Fe=V('<path d="M30.23 0h449.48c16.68 0 30.23 13.54 30.23 30.23v276.35H0V30.23C0 13.54 13.54 0 30.23 0Z" style="fill:#17164b;"></path><path d="M0 306.58h509.94V765.8c0 16.59-13.47 30.07-30.07 30.07H30.07C13.47 795.87 0 782.4 0 765.8V306.58Z" style="fill:#34416d;"></path><path style="fill:#fdfdfd;" d="m0 306.58 52.65-102.97 24-12.38 3.09-12.78 15.49-21.68 66.19-126.96 78.19 13.16 45.29 88.64 33.68-16.64 53.03 56.9 12 .78 8.13 1.16 6.97 8.9 51.1 80.9 48 12.39 12.13 30.58H0z"></path><path style="fill:#eff6fc;" d="m0 306.58 59.81-88.26 12-7.74 34.84 4.45 72.58-168.97 44.71 10.26 53.61 106.84 8.13-30.58 31.55-17.23 35.8 52.65 6.78 15.29 14.9 6.58 4.84 4.45 1.74 12.58 5.42 17.42L408.39 264l43.74 8.71 17.03 33.87H0z"></path><path style="fill:#c6dced;" d="m0 306.58 74.52-55.74h29.61l23.61 7.74 33.29-69.87 29.23-31.74 12-4.07-11.61 67.94-4.07 31.55 6 1.35 44.71-53.22 16.65.19 17.41 20.71 21.49 5.61 14.51-14.71 15.3-3.09 33.29 26.71 19.54 44.12 48.39 1.75 39.1 24.77H0z"></path><path fill="#2433ab" d="m0 306.58 6.19 40.26 54.2 22.45 41.03 108.39 11.61 3.87h11.62l11.61 27.1 11.61 17.03L202.84 576l28.64 40.26 34.07 89.8 5.42-6.96 3.87 17.8h9.29l30.97-65.03 18.58-24 30.97-52.64 31.74-10.84 43.35-120.78 70.2-137.03H0z"></path><path fill="#00025F" fill-opacity=".2" d="M0 306.58h509.94v460.13c0 16.11-13.06 29.16-29.16 29.16H29.16C13.06 795.87 0 782.81 0 766.71V306.58Z"></path><path fill="#00025F" fill-opacity=".2" d="M0 422.81s58.32-23.12 133.68 0 100.13 7.85 128 0 71.23-22.09 140.39 0 107.87 0 107.87 0v343.76c0 16.18-13.12 29.29-29.29 29.29H29.29C13.12 795.87 0 782.76 0 766.58V422.81Z"></path><path fill="#00025F" fill-opacity=".2" d="M0 520.26s12.9-4.34 39.74 18.99 84.65 0 91.87 0 53.68-21.26 123.35 0 108.69 11.4 131.61 0 87.74-22.3 123.35 0v227.2c0 16.25-13.17 29.42-29.42 29.42H29.42C13.17 795.87 0 782.7 0 766.45V520.26Z"></path><path fill="#00025F" fill-opacity=".2" d="M0 667.87s32.52 1.45 64.52-12.18 72.26-8.05 98.06 0 69.16 31.48 136.26 2.22 114.58-2.22 114.58-2.22 47.48 29.11 96.52 0v110.24c0 16.53-13.4 29.94-29.94 29.94H29.94C13.4 795.87 0 782.47 0 765.93v-98.06Z"></path>',10),Ie=[Fe];function Oe(t,e){return u(),d("svg",Le,Ie)}const je={render:Oe},He=t=>(R("data-v-9cc181c3"),t=t(),P(),t),Be={class:"flex flex-col w-full h-full"},Re=He(()=>i("h1",{class:"text-[30px] pb-6 text-center"},"Your Favorite Artists on the Popularity Iceberg",-1)),Pe={class:"w-full grow relative"},ze=["src"],Ue=["src"],Ne=["src"],We=["src"],qe=["src"],Ye=["src"],Ze=["src"],Ve=["src"],Ge={class:"absolute inset-x-[10%] top-[38%] bottom-0 grid grid-cols-5 grid-rows-4 place-items-center"},Je=["src"],Ke=x({__name:"ArtistIceberg",async setup(t){let e,r;const s=([e,r]=M(()=>w({endpoint:"/me/top/artists",query:{time_range:z[k("activeTimeframe").value],limit:50}})),e=await e,r(),e),n=[[],[],[],[],[],[],[]];s.items.forEach(o=>{o.popularity>90?n[0].push(o):o.popularity>80?n[1].push(o):o.popularity>70?n[2].push(o):o.popularity>60?n[3].push(o):o.popularity>50?n[4].push(o):o.popularity>40?n[5].push(o):n[6].push(o)}),n[0]=I(n[0],1),n[1]=I(n[1],3),n[2]=I(n[2],4),[3,4,5,6].forEach(o=>{n[o]=I(n[o],5)});const a=n.map(o=>Ce(o)).flat().flatMap(o=>o===null?null:o.images[0].url);return(o,h)=>(u(),d("section",Be,[Re,i("div",Pe,[C(l(je),{class:"absolute h-full w-full"}),l(a)[0]?(u(),d("img",{key:0,src:l(a)[0],class:"overWaterAlbumCover left-[35%] top-[10%]"},null,8,ze)):b("",!0),l(a)[1]?(u(),d("img",{key:1,src:l(a)[1],class:"overWaterAlbumCover left-[25%] top-[20%]"},null,8,Ue)):b("",!0),l(a)[2]?(u(),d("img",{key:2,src:l(a)[2],class:"overWaterAlbumCover left-[40%] top-[20%]"},null,8,Ne)):b("",!0),l(a)[3]?(u(),d("img",{key:3,src:l(a)[3],class:"overWaterAlbumCover left-[55%] top-[20%]"},null,8,We)):b("",!0),l(a)[4]?(u(),d("img",{key:4,src:l(a)[4],class:"overWaterAlbumCover left-[15%] top-[30%]"},null,8,qe)):b("",!0),l(a)[5]?(u(),d("img",{key:5,src:l(a)[5],class:"overWaterAlbumCover left-[32%] top-[30%]"},null,8,Ye)):b("",!0),l(a)[6]?(u(),d("img",{key:6,src:l(a)[6],class:"overWaterAlbumCover left-[48%] top-[30%]"},null,8,Ze)):b("",!0),l(a)[7]?(u(),d("img",{key:7,src:l(a)[7],class:"overWaterAlbumCover left-[65%] top-[30%]"},null,8,Ve)):b("",!0),i("div",Ge,[(u(!0),d(q,null,re(l(a).slice(8,29),(p,v)=>(u(),d(q,{key:v+p},[p?(u(),d("img",{key:0,src:p,class:"w-10 h-10"},null,8,Je)):b("",!0)],64))),128))])])]))}}),Qe=S(Ke,[["__scopeId","data-v-9cc181c3"]]),Xe=""+new URL("logout-icon.e22e5e34.png",import.meta.url).href,et={},X=t=>(R("data-v-145d76b2"),t=t(),P(),t),tt={class:"bg-gray z-[1] min-w-[100px] p-1"},st=X(()=>i("img",{src:Xe,alt:"",class:"h-5 inline-block"},null,-1)),at=X(()=>i("span",null," Logout ",-1));function nt(t,e){const r=le;return u(),d("div",tt,[C(r,{to:"/logout",class:"no-tap-highlight"},{default:G(()=>[st,at]),_:1})])}const ot=S(et,[["render",nt],["__scopeId","data-v-145d76b2"]]),rt={"xml:space":"preserve",width:"168",height:"168",viewBox:"0 0 168.001 168.001",xmlns:"http://www.w3.org/2000/svg"},lt=i("path",{fill:"#1ED760",d:"M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 0 1-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 0 1-6.249-3.93 5.213 5.213 0 0 1 3.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 0 1 4.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 0 1 5.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 0 1 2.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"},null,-1),ct=[lt];function it(t,e){return u(),d("svg",rt,ct)}const ut={render:it},dt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 768 768"},ht=V('<path d="M326.02 379.48v60.93s-14.7 22.35-19.9 61.24c0 0-4.9 28.48 3.06 49.6 0 0-21.74 41.34-74.71 48.38-52.97 7.04-81.75-15.31-104.41-33.99-22.66-18.68-51.44-79-48.68-134.72 2.76-55.73 17.15-87.88 17.15-87.88s-.31-92.16 53.28-178.2c0 0 40.11-67.67 124.31-100.12C360.32 32.26 455.24 48.49 470.25 54c15 5.51 58.48 9.49 121.56 66.14 63.08 56.65 83.28 151.87 87.57 214.03 0 0 37.05 64.91 12.55 159.22-24.5 94.31-102.88 105.33-107.47 105.94-4.59.61-77.16 15.92-115.43-54.2 0 0 2.76-7.96 2.76-21.74 0 0 51.44-20.82 92.78-75.63 0 0 38.89-47.46 37.36-116.05 0 0-2.76-44.7-12.86-65.52 0 0 14.7 3.06 18.37 4.59 0 0-12.55-58.18-54.5-102.57-41.95-44.4-104.72-62.46-165.96-62.16-61.24.31-107.47 19.9-143.91 48.38 0 0-51.13 37.36-70.73 116.97 0 0 10.56-3.83 15.16-3.83 0 0-23.27 51.29-22.51 83.9 0 0-2.14 29.09 21.89 54.96s51.9 26.49 57.1 26.94c0 0 24.8 2.91 48.38-12.4 23.58-15.31 33.68-41.49 33.68-41.49Z" style="fill:#1db954;"></path><ellipse fill="#FFF" cx="388.13" cy="526.63" rx="59.59" ry="57.62"></ellipse><ellipse fill="#FFF" cx="248.28" cy="352.1" rx="59.59" ry="57.62"></ellipse><ellipse fill="#FFF" cx="386.77" cy="668.62" rx="59.59" ry="57.62"></ellipse><path fill="#FFF" d="m248.28 352.1-57.61-6.15c-.56 0-1.01-.45-.94-1.01 1.74-14.81 24.68-181.05 191.7-188.52 0 0 101.53-3.86 159.83 74.4 0 0 53.74 60.17 31.69 142.84s-80.38 109.77-96.91 120.79l-14.54 6.89s-7.95 3.65-11.18 9.19c0 0-3.69 6.18-2.61 16.1H328.53s-4.21-52.23 32.99-95.1c0 0 22.05-28.17 55.42-40.11 0 0 56.8-26.79 39.5-72.72 0 0-4.9-33.37-63.08-42.87 0 0-39.8-8.42-66.44 32.3 0 0-15.32 20.36-19.29 48.99l-59.36-5.03Z"></path>',5),pt=[ht];function ft(t,e){return u(),d("svg",dt,pt)}const _t={render:ft},mt=""+new URL("default-avatar.8660eeb0.svg?inline",import.meta.url).href,vt=t=>(R("data-v-4b8c481b"),t=t(),P(),t),gt={class:"h-10 relative"},yt=vt(()=>i("div",{class:"absolute left-[50%] font-bold top-[50%] translate-y-[-50%]"}," WAILT ",-1)),bt=["src"],wt=x({__name:"Navbar",async setup(t){let e,r;const s=k("$pfbgD4BgAz"),n=([e,r]=M(()=>w({endpoint:"/me"})),e=await e,r(),e);function a(){s.value=!s.value}return(o,h)=>{var v,_;const p=ot;return u(),d("nav",gt,[C(l(ut),{class:"nav-element left-1"}),C(l(_t),{class:"nav-element right-[50%]"}),yt,i("button",{class:"nav-element no-tap-highlight right-1",onClick:a},[i("img",{src:(_=(v=l(n).images[0])==null?void 0:v.url)!=null?_:l(mt),alt:"user",class:"h-full w-auto"},null,8,bt)]),l(s)?(u(),j(p,{key:0,class:"absolute right-0 top-12 rounded-l-md"})):b("",!0)])}}}),Ct=S(wt,[["__scopeId","data-v-4b8c481b"]]),xt={class:"w-full flex justify-around font-bold pt-1 pb-1"},$t=x({__name:"TimeframeSelection",setup(t){const e=k("activeTimeframe",()=>$.Month);return(r,s)=>(u(),d("div",xt,[i("span",{class:B(["cursor-pointer relative hidden-green-underline hover:text-spotify-green transition-colors",[l(e)===l($).Month?"before:w-full !text-white":"before:w-0"]]),onClick:s[0]||(s[0]=n=>e.value=l($).Month)}," last month ",2),i("span",{class:B(["cursor-pointer relative hidden-green-underline hover:text-spotify-green transition-colors",[l(e)===l($).HalfYear?"before:w-full !text-white":"before:w-0"]]),onClick:s[1]||(s[1]=n=>e.value=l($).HalfYear)}," last 6 months ",2),i("span",{class:B(["cursor-pointer relative hidden-green-underline hover:text-spotify-green transition-colors",[l(e)===l($).Year?"before:w-full !text-white":"before:w-0"]]),onClick:s[2]||(s[2]=n=>e.value=l($).Year)}," last year ",2)]))}}),kt=S($t,[["__scopeId","data-v-5246c658"]]),Dt={key:0,class:"bg-spotify-green bg-opacity-50"},Tt={key:0},Mt={class:"flex h-16 justify-start"},At={class:"h-full p-1"},St=["src"],Et={class:"my-auto"},Lt={class:"text-white"},Ft={class:"text-[#bbb]"},It={class:"my-auto w-24 text-center self-center"},Ot={key:0,class:"flex align-baseline justify-evenly"},jt={class:"h-1 relative"},Ht=i("div",{class:"absolute bg-gray h-full w-full"},null,-1),Bt={key:1,class:"text-center h-16"},Rt=x({__name:"MusicPlayer",async setup(t){let e,r;const s=k(()=>null,"$y4C0JPT9MN"),n=([e,r]=M(()=>w({endpoint:"/me"})),e=await e,r(),e),a=k(()=>({progress:0,percent:0,fetched:0}),"$pmQmXMhZQP");let o;ce(()=>{v(),o=setInterval(p,250)}),Y(()=>{clearInterval(o)});function h(c){if(c===null)return"~:~";const m=Math.floor(c/1e3);return`${Math.floor(m/60)}:${(m%60).toString().padStart(2,"0")}`}function p(){var g,D;const c=s.value;if(!((c==null?void 0:c.progress_ms)&&((g=c==null?void 0:c.item)==null?void 0:g.duration_ms)))return;let m=c.progress_ms;c.is_playing&&(m=c.progress_ms+(Date.now()-a.value.fetched)),a.value={progress:m,percent:m/((D=c.item)==null?void 0:D.duration_ms),fetched:a.value.fetched}}function v(){w({endpoint:"/me/player",query:{additional_types:"track",market:n.country}}).then(c=>{s.value=c,a.value.fetched=Date.now(),setTimeout(()=>v(),2500)}).catch(c=>{console.error(c),setTimeout(()=>v(),1e4)})}function _(){w({endpoint:"/me/player/previous",method:"POST"}).catch(c=>{alert(c.message)})}function f(){s.value!==null&&(s.value.is_playing?w({endpoint:"/me/player/pause",method:"PUT",query:{device_id:s.value.device.id}}).catch(c=>{alert(c.message)}):w({endpoint:"/me/player/play",method:"PUT",query:{device_id:s.value.device.id}}).catch(c=>{alert(c.message)}))}function y(){w({endpoint:"/me/player/next",method:"POST"}).catch(c=>{alert(c.message)})}return(c,m)=>{var g;return u(),d("div",null,[l(s)?(u(),d("div",Dt,[l(s).item?(u(),d("div",Tt,[i("div",Mt,[i("div",At,[i("img",{class:"max-h-full",src:(g=l(s).item.album.images[0])==null?void 0:g.url,alt:"Album Cover"},null,8,St)]),i("div",Et,[i("p",Lt,E(l(s).item.name),1),i("p",Ft,E(l(s).item.artists.map(D=>D.name).join(", ")),1)]),i("div",It,[l(n).product==="premium"?(u(),d("div",Ot,[i("button",{onClick:m[0]||(m[0]=D=>_())},"\u23EE"),i("button",{onClick:m[1]||(m[1]=D=>f())},"\u23EF"),i("button",{onClick:m[2]||(m[2]=D=>y())},"\u23ED")])):b("",!0),i("p",null,E(h(l(a)?l(a).progress:null))+" / "+E(h(l(s).item.duration_ms)),1)])]),i("div",jt,[Ht,i("div",{class:"absolute bg-white h-full",style:ie({width:`${l(a).percent*100}%`})},null,4)])])):(u(),d("div",Bt," Ad is playing "))])):b("",!0)])}}}),Pt={class:"flex flex-col items-center"},zt={class:"h-[80vh] w-[400px] relative"},Ut=x({__name:"home",setup(t){const e=k("currentSlide",()=>0),r=k("activeTimeframe",()=>$.Month),s=[De,Ee,Qe],n=()=>{e.value++,e.value>=s.length&&(e.value=0)},a=()=>{e.value--,e.value<0&&(e.value=s.length-1)};return(o,h)=>{const p=Ct,v=kt,_=Rt;return u(),d("section",Pt,[C(p),C(v,{class:"pb-5"}),i("div",zt,[C(ue,{name:"statistics",mode:"out-in"},{default:G(()=>[(u(),j(de(s[l(e)]),{key:l(r)}))]),_:1}),i("div",{class:"absolute top-0 flex w-full h-full"},[i("button",{class:"w-1/3 h-full no-tap-highlight",onClick:a}),i("button",{class:"w-2/3 h-full no-tap-highlight",onClick:n})])]),C(_)])}}});const qt=S(Ut,[["__scopeId","data-v-10b4cdfb"]]);export{qt as default};
