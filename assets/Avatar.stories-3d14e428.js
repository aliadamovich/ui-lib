import{j as u,a as H}from"./jsx-runtime-c9381026.js";import{r as c}from"./index-8b3efc3f.js";import{c as O,u as y}from"./index-6c7aef41.js";import{u as K}from"./index-dfd532b3.js";import{P as A}from"./index-0db981d8.js";import{c as Q}from"./clsx-0839fdbe.js";import"./_commonjsHelpers-de833af9.js";import"./index-a38d0dca.js";var W={exports:{}},B={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=c;function X(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var Y=typeof Object.is=="function"?Object.is:X,Z=d.useState,aa=d.useEffect,ea=d.useLayoutEffect,ta=d.useDebugValue;function ra(a,e){var t=e(),r=Z({inst:{value:t,getSnapshot:e}}),o=r[0].inst,n=r[1];return ea(function(){o.value=t,o.getSnapshot=e,S(o)&&n({inst:o})},[a,t,e]),aa(function(){return S(o)&&n({inst:o}),a(function(){S(o)&&n({inst:o})})},[a]),ta(t),t}function S(a){var e=a.getSnapshot;a=a.value;try{var t=e();return!Y(a,t)}catch{return!0}}function na(a,e){return e()}var oa=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?na:ra;B.useSyncExternalStore=d.useSyncExternalStore!==void 0?d.useSyncExternalStore:oa;W.exports=B;var sa=W.exports;function ca(){return sa.useSyncExternalStore(ia,()=>!0,()=>!1)}function ia(){return()=>{}}var x="Avatar",[la,wa]=O(x),[ua,P]=la(x),T=c.forwardRef((a,e)=>{const{__scopeAvatar:t,...r}=a,[o,n]=c.useState("idle");return u(ua,{scope:t,imageLoadingStatus:o,onImageLoadingStatusChange:n,children:u(A.span,{...r,ref:e})})});T.displayName=x;var U="AvatarImage",q=c.forwardRef((a,e)=>{const{__scopeAvatar:t,src:r,onLoadingStatusChange:o=()=>{},...n}=a,i=P(U,t),s=da(r,n),l=K(m=>{o(m),i.onImageLoadingStatusChange(m)});return y(()=>{s!=="idle"&&l(s)},[s,l]),s==="loaded"?u(A.img,{...n,ref:e,src:r}):null});q.displayName=U;var D="AvatarFallback",G=c.forwardRef((a,e)=>{const{__scopeAvatar:t,delayMs:r,...o}=a,n=P(D,t),[i,s]=c.useState(r===void 0);return c.useEffect(()=>{if(r!==void 0){const l=window.setTimeout(()=>s(!0),r);return()=>window.clearTimeout(l)}},[r]),i&&n.imageLoadingStatus!=="loaded"?u(A.span,{...o,ref:e}):null});G.displayName=D;function C(a,e){return a?e?(a.src!==e&&(a.src=e),a.complete&&a.naturalWidth>0?"loaded":"loading"):"error":"idle"}function da(a,{referrerPolicy:e,crossOrigin:t}){const r=ca(),o=c.useRef(null),n=(()=>r?(o.current||(o.current=new window.Image),o.current):null)(),[i,s]=c.useState(()=>C(n,a));return y(()=>{s(C(n,a))},[n,a]),y(()=>{const l=$=>()=>{s($)};if(!n)return;const m=l("loaded"),E=l("error");return n.addEventListener("load",m),n.addEventListener("error",E),e&&(n.referrerPolicy=e),typeof t=="string"&&(n.crossOrigin=t),()=>{n.removeEventListener("load",m),n.removeEventListener("error",E)}},[n,t,e]),i}var ma=T,pa=q,va=G;const fa="_avatarRoot_olulz_1",ga="_avatarImage_olulz_9",Sa="_avatarFallback_olulz_15",h={avatarRoot:fa,avatarImage:ga,avatarFallback:Sa},ha=a=>{let e=0;for(let r=0;r<a.length;r++)e=a.charCodeAt(r)+((e<<5)-e);let t="#";for(let r=0;r<3;r++){const o=e>>r*8&255;t+=("00"+o.toString(16)).slice(-2)}return t},L=(a,e)=>{const t=parseInt(a.slice(1),16),r=Math.round(255*e),o=Math.min(255,Math.max(0,(t>>16)+r)),n=Math.min(255,Math.max(0,(t>>8&255)+r)),i=Math.min(255,Math.max(0,(t&255)+r));return"#"+((1<<24)+(o<<16)+(n<<8)+i).toString(16).slice(1)},ya=(a="default")=>{const{lightBackground:e,textColor:t}=c.useMemo(()=>{const r=ha(a.toLowerCase().trim());return{lightBackground:L(r,.3),textColor:L(r,-.2)}},[a]);return{lightBackground:e,textColor:t}},_=({avatar:a,className:e,name:t="User",size:r="medium",...o})=>{const{lightBackground:n,textColor:i}=ya(t),s=t==null?void 0:t.split(" ").slice(0,2).map(l=>l[0]).join("");return H(ma,{className:Q(h.avatarRoot,e),"data-size":r,...o,children:[u(pa,{alt:t,className:h.avatarImage,src:a}),u(va,{className:h.avatarFallback,delayMs:0,style:{background:n,color:i},children:s})]})};try{_.displayName="Avatar",_.__docgenInfo={description:"",displayName:"Avatar",props:{avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:"string"}},name:{defaultValue:{value:"User"},description:"",name:"name",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Ra={title:"Components/Avatar",component:_,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{avatar:{control:"text",description:"URL of the avatar image"},name:{control:"text",description:"User`s name"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the avatar"}}},p={args:{size:"medium",name:"Walter James"}},v={args:{avatar:"https://i.pravatar.cc/300",name:"Walter James",size:"small"}},f={args:{avatar:"https://i.pravatar.cc/300",name:"Walter James",size:"medium"}},g={args:{name:"Jane Cela",size:"large"}};var I,b,w;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    name: 'Walter James'
  }
}`,...(w=(b=p.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var R,z,M;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    avatar: 'https://i.pravatar.cc/300',
    name: 'Walter James',
    size: 'small'
  }
}`,...(M=(z=v.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var k,N,j;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    avatar: 'https://i.pravatar.cc/300',
    name: 'Walter James',
    size: 'medium'
  }
}`,...(j=(N=f.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var F,J,V;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    // avatar: 'https://i.pravatar.cc/300',
    name: 'Jane Cela',
    size: 'large'
  }
}`,...(V=(J=g.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};const za=["Default","Small","Medium","Large"];export{p as Default,g as Large,f as Medium,v as Small,za as __namedExportsOrder,Ra as default};
