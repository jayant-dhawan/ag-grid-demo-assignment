import{e as l,t as x,j as n,a as S,p,o as w,A as C,M as b,f as y,g as j,h as G,k as M,l as R,m as E,n as O}from"./vendor-DKK795Af.js";import{N as P,S as F,a as N}from"./components-DcHY8RP8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=["rotation_period / climate / terrain","terrain / rotation_period / climate","climate / terrain / rotation_period"],h=[{field:"name",filter:"agTextColumnFilter"},{field:"gravity"},{field:"surface_water",headerName:"Surface Water"},{field:"population",filter:"agTextColumnFilter"},{field:"diameter"},{field:"orbital_period",headerName:"Orbital Period"},{field:"terrain",enableRowGroup:!0,hide:!0},{field:"climate",enableRowGroup:!0,hide:!0},{field:"rotation_period",enableRowGroup:!0,hide:!0}];function _(a){const[o,t]=l.useState(null),[i,e]=l.useState(!0),[r,s]=l.useState(null);return l.useEffect(()=>{e(!0);const d=new AbortController;return fetch(a,{signal:d.signal}).then(c=>c.json()).then(c=>{t(c),e(!1)}).catch(c=>{d.signal.aborted||s(c)}),function(){d.abort()}},[]),{data:o,loading:i,error:r}}function v(a){const o=[];return a.forEach(t=>{const i=t.climate.split(",").map(r=>r.trim()),e=t.terrain.split(",").map(r=>r.trim());i.forEach(r=>{e.forEach(s=>{o.push({...t,climate:r,terrain:s})})})}),o}function D(a){if(!a)return h;const o=a.split("/").map(t=>t.trim()).reduce((t,i,e)=>({...t,[i]:e}),{});return h.map(t=>({...t,...o[t.field]>=0&&{rowGroupIndex:o[t.field]}}))}const L=x.withParams({backgroundColor:"var(--gray-2)",browserColorScheme:"dark",chromeBackgroundColor:{ref:"foregroundColor",mix:.07,onto:"backgroundColor"},foregroundColor:"#FFF",headerFontSize:14});function I(){const[a,o]=l.useState(m[2]),[t,i]=l.useState(!0),{data:e}=_("https://swapi.info/api/planets");function r(u){o(u)}function s(u){u.source==="toolPanelUi"&&o("")}function d(u){var f;if(Number((f=u.data)==null?void 0:f.population)<=2e5)return{fontWeight:"800",backgroundColor:"gray"}}const c=l.useMemo(()=>e?v(e):null,[e]),g=l.useMemo(()=>D(a),[a]);return n.jsxs(n.Fragment,{children:[n.jsx(P,{}),n.jsx(S,{children:n.jsxs(p,{direction:"column",gap:"2",children:[n.jsxs(p,{p:"3",gap:"4",children:[n.jsx(F,{defaultValue:a,value:a,onValueChange:r,items:m.map(u=>({value:u,label:u}))}),n.jsx(N,{label:"Expand",onCheckedChange:i,checked:t})]}),n.jsx(w,{width:"100%",height:"80vh",children:n.jsx(C,{rowData:c,columnDefs:g,groupDefaultExpanded:t?-1:0,getRowStyle:d,theme:L,onColumnRowGroupChanged:s,rowGroupPanelShow:"always"})})]})})]})}b.registerModules([y,j,G,M,R]);E.createRoot(document.getElementById("root")).render(n.jsx(l.StrictMode,{children:n.jsx(O,{appearance:"dark",radius:"large",children:n.jsx(I,{})})}));
