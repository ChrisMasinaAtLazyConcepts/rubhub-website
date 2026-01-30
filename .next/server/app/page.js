(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4921:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d}),s(5480),s(2029),s(5866);var a=s(3191),r=s(8716),i=s(7922),o=s.n(i),l=s(5231),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);s.d(t,n);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5480)),"D:\\RubHub Website\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,2029)),"D:\\RubHub Website\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["D:\\RubHub Website\\src\\app\\page.tsx"],m="/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2862:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},4691:()=>{},1138:(e,t,s)=>{Promise.resolve().then(s.bind(s,3730))},3730:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>eE});var a,r=s(326),i=s(7577);let o={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||o},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,m=(e,t)=>{let s="",a="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":a+="f"==i[1]?m(o,i):i+"{"+m(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=m(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=m.p?m.p(i,o):i+":"+o+";")}return s+(t&&r?t+"{"+r+"}":r)+a},p={},u=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+u(e[s]);return t}return e},h=(e,t,s,a,r)=>{let i=u(e),o=p[i]||(p[i]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(i));if(!p[o]){let t=i!==e?e:(e=>{let t,s,a=[{}];for(;t=n.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(s=t[3].replace(c," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(c," ").trim();return a[0]})(e);p[o]=m(r?{["@keyframes "+o]:t}:t,s?"":"."+o)}let l=s&&p.g?p.g:null;return s&&(p.g=p[o]),((e,t,s,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=s?e+t.data:t.data+e)})(p[o],t,a,l),o},x=(e,t,s)=>e.reduce((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function g(e){let t=this||{},s=e.call?e(t.p):e;return h(s.unshift?s.raw?x(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let f,y,b,v=g.bind({k:1});function w(e,t){let s=this||{};return function(){let a=arguments;function r(i,o){let l=Object.assign({},i),n=l.className||r.className;s.p=Object.assign({theme:y&&y()},l),s.o=/ *go\d+/.test(n),l.className=g.apply(s,a)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),b&&d[0]&&b(l),f(d,l)}return t?t(r):r}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,k=(()=>{let e=0;return()=>(++e).toString()})(),D=(()=>{let e;return()=>e})(),C="default",A=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return A(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},P=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},M={},S=(e,t=C)=>{M[t]=A(M[t]||E,e),P.forEach(([e,s])=>{e===t&&s(M[t])})},$=e=>Object.keys(M).forEach(t=>S(e,t)),_=e=>Object.keys(M).find(t=>M[t].toasts.some(t=>t.id===e)),F=(e=C)=>t=>{S(t,e)},q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=(e={},t=C)=>{let[s,a]=(0,i.useState)(M[t]||E),r=(0,i.useRef)(M[t]);(0,i.useEffect)(()=>(r.current!==M[t]&&a(M[t]),P.push([t,a]),()=>{let e=P.findIndex(([e])=>e===t);e>-1&&P.splice(e,1)}),[t]);let o=s.toasts.map(t=>{var s,a,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||q[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...s,toasts:o}},z=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||k()}),T=e=>(t,s)=>{let a=z(t,e,s);return F(a.toasterId||_(a.id))({type:2,toast:a}),a.id},H=(e,t)=>T("blank")(e,t);H.error=T("error"),H.success=T("success"),H.loading=T("loading"),H.custom=T("custom"),H.dismiss=(e,t)=>{let s={type:3,toastId:e};t?F(t)(s):$(s)},H.dismissAll=e=>H.dismiss(void 0,e),H.remove=(e,t)=>{let s={type:4,toastId:e};t?F(t)(s):$(s)},H.removeAll=e=>H.remove(void 0,e),H.promise=(e,t,s)=>{let a=H.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?N(t.success,e):void 0;return r?H.success(r,{id:a,...s,...null==s?void 0:s.success}):H.dismiss(a),e}).catch(e=>{let r=t.error?N(t.error,e):void 0;r?H.error(r,{id:a,...s,...null==s?void 0:s.error}):H.dismiss(a)}),e};var L=1e3,I=(e,t="default")=>{let{toasts:s,pausedAt:a}=O(e,t),r=(0,i.useRef)(new Map).current,o=(0,i.useCallback)((e,t=L)=>{if(r.has(e))return;let s=setTimeout(()=>{r.delete(e),l({type:4,toastId:e})},t);r.set(e,s)},[]);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=s.map(s=>{if(s.duration===1/0)return;let a=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(a<0){s.visible&&H.dismiss(s.id);return}return setTimeout(()=>H.dismiss(s.id,t),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[s,a,t]);let l=(0,i.useCallback)(F(t),[t]),n=(0,i.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,i.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,i.useCallback)(()=>{a&&l({type:6,time:Date.now()})},[a,l]),m=(0,i.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:i}=t||{},o=s.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+r,0)},[s]);return(0,i.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=r.get(e.id);t&&(clearTimeout(t),r.delete(e.id))}})},[s,o]),{toasts:s,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:m}}},W=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,U=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${J} 1s linear infinite;
`,Z=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,K=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${V} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,X=w("div")`
  position: absolute;
`,Y=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(ee,null,t):t:"blank"===s?null:i.createElement(Y,null,i.createElement(U,{...a}),"loading"!==s&&i.createElement(X,null,"error"===s?i.createElement(G,{...a}):i.createElement(K,{...a})))},es=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,er=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ei=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eo=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=D()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(s),ea(s)];return{animation:t?`${v(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=i.memo(({toast:e,position:t,style:s,children:a})=>{let r=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(et,{toast:e}),l=i.createElement(ei,{...e.ariaProps},N(e.message,e));return i.createElement(er,{className:e.className,style:{...r,...s,...e.style}},"function"==typeof a?a({icon:o,message:l}):i.createElement(i.Fragment,null,o,l))});a=i.createElement,m.p=void 0,f=a,y=void 0,b=void 0;var en=({id:e,className:t,style:s,onHeightUpdate:a,children:r})=>{let o=i.useCallback(t=>{if(t){let s=()=>{a(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:o,className:t,style:s},r)},ed=(e,t)=>{let s=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:D()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...a}},ec=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,em=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:r,toasterId:o,containerStyle:l,containerClassName:n})=>{let{toasts:d,handlers:c}=I(s,o);return i.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(s=>{let o=s.position||t,l=ed(o,c.calculateOffset(s,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(en,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?ec:"",style:l},"custom"===s.type?N(s.message,s):r?r(s):i.createElement(el,{toast:s,position:o}))}))},ep={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let eu=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),eh=(e,t)=>{let s=(0,i.forwardRef)(({color:s="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:l="",children:n,...d},c)=>(0,i.createElement)("svg",{ref:c,...ep,width:a,height:a,stroke:s,strokeWidth:o?24*Number(r)/Number(a):r,className:["lucide",`lucide-${eu(e)}`,l].join(" "),...d},[...t.map(([e,t])=>(0,i.createElement)(e,t)),...Array.isArray(n)?n:[n]]));return s.displayName=`${e}`,s},ex=eh("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),eg=eh("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),ef=eh("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),ey=eh("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),eb=eh("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),ev=eh("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),ew=eh("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),ej=eh("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),eN=eh("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),ek=eh("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),eD=eh("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),eC=eh("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),eA=eh("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),eP=eh("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);function eE(){let[e,t]=(0,i.useState)({firstName:"",lastName:"",email:"",cell:"",whatsapp:""}),[s,a]=(0,i.useState)(!1),o=[{icon:ex,title:"Anywhere, Anytime",description:"Bring professional spa treatments to your clients' locations"},{icon:eg,title:"Flexible Schedule",description:"Set your own hours and work when it suits you"},{icon:ef,title:"Instant Payments",description:"Get paid directly to your account after each session"},{icon:ey,title:"Client Network",description:"Access to thousands of potential clients in your area"}],l=async s=>{if(s.preventDefault(),a(!0),!e.firstName||!e.lastName||!e.email||!e.cell){H.error("Please fill in all required fields"),a(!1);return}try{let s=await fetch("/api/therapists/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await s.json();s.ok?(H.success(a.message||"Application submitted!"),t({firstName:"",lastName:"",email:"",cell:"",whatsapp:""})):H.error(a.error||"Error submitting application")}catch(e){H.error("Network error. Please try again.")}finally{a(!1)}},n=s=>{t({...e,[s.target.name]:s.target.value})};return(0,r.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-[#FDF8F5] to-white",children:[r.jsx(em,{position:"top-right"}),r.jsx("section",{className:"relative bg-gradient-to-r from-[#7C2D2D] to-[#5A1F1F] text-white py-20",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:(0,r.jsxs)("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"inline-flex items-center bg-white/20 rounded-full px-4 py-1 mb-4",children:[r.jsx(eg,{className:"w-4 h-4 mr-2"}),r.jsx("span",{className:"text-sm",children:"Join Our Network"})]}),(0,r.jsxs)("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:["Welcome to",r.jsx("br",{}),r.jsx("span",{className:"text-[#D4A574]",children:"MobileSpa"})]}),r.jsx("p",{className:"text-lg text-white/90 mb-8 max-w-lg",children:"Connect with clients seeking professional massage therapy. Grow your practice with our platform designed for independent therapists."}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,r.jsxs)("a",{href:"#signup",className:"bg-white text-[#7C2D2D] hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-flex items-center",children:[r.jsx(eb,{className:"w-5 h-5 mr-2"}),"Apply Now"]}),(0,r.jsxs)("button",{className:"border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium inline-flex items-center",children:[r.jsx(ev,{className:"w-5 h-5 mr-2"}),"Therapist App"]})]})]}),r.jsx("div",{className:"hidden lg:flex justify-center",children:r.jsx("div",{className:"relative",children:r.jsx("div",{className:"w-72 h-96 bg-gradient-to-b from-[#D4A574] to-[#B8956A] rounded-[2rem] flex items-center justify-center shadow-2xl",children:(0,r.jsxs)("div",{className:"text-center",children:[r.jsx(ew,{className:"w-12 h-12 text-white mx-auto mb-4"}),r.jsx("h3",{className:"text-white font-bold text-xl",children:"MobileSpa"}),r.jsx("p",{className:"text-white/70 mt-2",children:"Therapist Network"})]})})})})]})})}),r.jsx("section",{className:"py-20",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[(0,r.jsxs)("div",{className:"text-center mb-12",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Why Join MobileSpa?"}),r.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Grow your massage therapy business with our supportive platform"})]}),r.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:o.map((e,t)=>(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 text-center",children:[r.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C2D2D] to-[#D4A574] flex items-center justify-center mx-auto mb-4",children:r.jsx(e.icon,{className:"w-7 h-7 text-white"})}),r.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:e.title}),r.jsx("p",{className:"text-sm text-gray-600",children:e.description})]},t))})]})}),r.jsx("section",{className:"py-20 bg-gray-50",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:(0,r.jsxs)("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[(0,r.jsxs)("div",{children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Therapist Benefits"}),r.jsx("p",{className:"text-gray-600 mb-8",children:"We provide everything you need to run a successful massage therapy practice"}),r.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:["Set your own rates","Keep 80-90% of earnings","Choose your clients","Weekly payments","Professional support","Liability insurance","Marketing materials","Booking management tools"].map((e,t)=>(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[r.jsx(ej,{className:"w-5 h-5 text-[#7C2D2D]"}),r.jsx("span",{className:"text-gray-700",children:e})]},t))})]}),r.jsx("div",{className:"relative",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=500&fit=crop",alt:"Massage Therapist",className:"rounded-3xl shadow-xl w-full"})})]})})}),r.jsx("section",{id:"signup",className:"py-20",children:r.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6",children:r.jsx("div",{className:"bg-white rounded-2xl shadow-2xl overflow-hidden",children:(0,r.jsxs)("div",{className:"grid lg:grid-cols-2",children:[(0,r.jsxs)("div",{className:"p-8 lg:p-12 bg-gradient-to-br from-[#7C2D2D] to-[#5A1F1F] text-white",children:[r.jsx("div",{className:"inline-flex items-center bg-white/20 rounded-full px-4 py-1 mb-6",children:"Apply Now"}),r.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Join MobileSpa Today"}),r.jsx("p",{className:"text-white/80 mb-8",children:"Complete the application form to start your journey as a MobileSpa therapist."}),r.jsx("div",{className:"space-y-4",children:["No joining fees","Fast approval process","24/7 support"].map((e,t)=>(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[r.jsx(eN,{className:"w-5 h-5 text-[#D4A574]"}),r.jsx("span",{children:e})]},t))})]}),r.jsx("div",{className:"p-8 lg:p-12",children:(0,r.jsxs)("form",{onSubmit:l,className:"space-y-6",children:[(0,r.jsxs)("div",{className:"grid sm:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"First Name *"}),(0,r.jsxs)("div",{className:"relative",children:[r.jsx(eb,{className:"absolute left-3 top-3 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"text",name:"firstName",value:e.firstName,onChange:n,className:"pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7C2D2D] focus:border-transparent",placeholder:"John",required:!0})]})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Last Name *"}),r.jsx("input",{type:"text",name:"lastName",value:e.lastName,onChange:n,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7C2D2D] focus:border-transparent",placeholder:"Doe",required:!0})]})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),(0,r.jsxs)("div",{className:"relative",children:[r.jsx(ek,{className:"absolute left-3 top-3 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"email",name:"email",value:e.email,onChange:n,className:"pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7C2D2D] focus:border-transparent",placeholder:"john@example.com",required:!0})]})]}),(0,r.jsxs)("div",{className:"grid sm:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Cell Number *"}),(0,r.jsxs)("div",{className:"relative",children:[r.jsx(eD,{className:"absolute left-3 top-3 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"tel",name:"cell",value:e.cell,onChange:n,className:"pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7C2D2D] focus:border-transparent",placeholder:"071 234 5678",required:!0})]})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"WhatsApp Number"}),(0,r.jsxs)("div",{className:"relative",children:[r.jsx(eC,{className:"absolute left-3 top-3 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"tel",name:"whatsapp",value:e.whatsapp,onChange:n,className:"pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7C2D2D] focus:border-transparent",placeholder:"071 234 5678"})]})]})]}),r.jsx("button",{type:"submit",disabled:s,className:"w-full bg-gradient-to-r from-[#7C2D2D] to-[#5A1F1F] text-white py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 flex items-center justify-center",children:s?(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2"}),"Submitting..."]}):(0,r.jsxs)(r.Fragment,{children:["Submit Application",r.jsx(eA,{className:"w-4 h-4 ml-2"})]})})]})})]})})})}),r.jsx("section",{className:"py-20 bg-gradient-to-r from-[#7C2D2D] to-[#5A1F1F]",children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 text-center text-white",children:[r.jsx(eP,{className:"w-16 h-16 mx-auto mb-6"}),r.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Download Our Therapist App"}),r.jsx("p",{className:"text-white/80 mb-8 max-w-2xl mx-auto",children:"Manage your bookings, track earnings, and connect with clients through our app."}),(0,r.jsxs)("div",{className:"flex flex-wrap justify-center gap-4",children:[(0,r.jsxs)("button",{className:"bg-white text-[#7C2D2D] hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-flex items-center",children:[r.jsx(ev,{className:"w-5 h-5 mr-2"}),"Download for Android"]}),(0,r.jsxs)("button",{className:"border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium inline-flex items-center",children:[r.jsx(ev,{className:"w-5 h-5 mr-2"}),"iOS (Coming Soon)"]})]})]})})]})}},2029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l,metadata:()=>o});var a=s(9510),r=s(5384),i=s.n(r);s(5023);let o={title:"MobileSpa - Professional Massage Therapy Network",description:"Join our network of professional massage therapists. Bring wellness directly to your clients."};function l({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:i().className,children:e})})}},5480:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a=(0,s(8570).createProxy)(String.raw`D:\RubHub Website\src\app\page.tsx#default`)},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[935],()=>s(4921));module.exports=a})();