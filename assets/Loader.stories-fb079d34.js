import{a as l,j as e}from"./jsx-runtime-c9381026.js";import{c as h}from"./clsx-0839fdbe.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const b="_fullscreen_1iogu_1",v="_inline_1iogu_11",x="_message_1iogu_19",C="_loaderWrapper_1iogu_30",W="_reduced_1iogu_37",N="_loaderCircle_1iogu_42",L="_dash_1iogu_1",V="_loaderSvg_1iogu_51",j="_rotate_1iogu_1",q="_spin_1iogu_1",r={fullscreen:b,inline:v,message:x,loaderWrapper:C,reduced:W,loaderCircle:N,dash:L,loaderSvg:V,rotate:j,spin:q},t=({message:n="",fullScreen:y=!0,reduced:S=!1})=>l("div",{className:y?r.fullscreen:r.inline,role:"status","aria-busy":"true",children:[e("div",{className:h(r.loaderWrapper,S&&r.reduced),children:l("svg",{className:r.loaderSvg,viewBox:"0 0 50 50",children:[e("defs",{children:l("linearGradient",{id:"loaderGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e("stop",{offset:"0%",stopColor:"#6f00ff"}),e("stop",{offset:"50%",stopColor:"#8a2be2"}),e("stop",{offset:"100%",stopColor:"#00c853"})]})}),e("circle",{className:r.loaderCircle,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})]})}),e("p",{className:r.message,children:n})]});try{t.displayName="Loader",t.__docgenInfo={description:"",displayName:"Loader",props:{message:{defaultValue:{value:""},description:"",name:"message",required:!1,type:{name:"string"}},fullScreen:{defaultValue:{value:"true"},description:"",name:"fullScreen",required:!1,type:{name:"boolean"}},reduced:{defaultValue:{value:"false"},description:"",name:"reduced",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Components/Loader",parameters:{layout:"centered"},component:t,tags:["autodocs"],argTypes:{message:{control:"text",description:"Message displayed under the loader",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},fullScreen:{control:"boolean",description:"Whether render full-screen loader or not",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},reduced:{control:"boolean",description:"Smaller sized loader",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},a={args:{fullScreen:!0,reduced:!1}},s={args:{message:"Loading...",fullScreen:!0,reduced:!1}},o={args:{fullScreen:!0,reduced:!0}};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fullScreen: true,
    reduced: false
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var i,p,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    message: 'Loading...',
    fullScreen: true,
    reduced: false
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,g,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    fullScreen: true,
    reduced: true
  }
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const w=["Default","WithMessage","Reduced"];export{a as Default,o as Reduced,s as WithMessage,w as __namedExportsOrder,k as default};
