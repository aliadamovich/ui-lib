import{a as V,j as t}from"./jsx-runtime-c9381026.js";import{r as u}from"./index-8b3efc3f.js";import{c as i}from"./clsx-0839fdbe.js";import"./_commonjsHelpers-de833af9.js";const N="_textAreaContainer_2vln6_1",S="_label_2vln6_4",y="_wrapper_2vln6_11",E="_textArea_2vln6_1",w="_error_2vln6_42",D="_errorText_2vln6_48",s={textAreaContainer:N,label:S,wrapper:y,textArea:E,error:w,errorText:D},l=e=>{const{label:a,error:r,className:C,textAreaClassName:f,...d}=e,p=u.useId();return V("div",{className:i(s.textAreaContainer,C),children:[t("label",{className:s.label,htmlFor:p,"aria-disabled":d.disabled,children:a}),t("div",{className:i(s.wrapper,r&&s.error,f),children:t("textarea",{className:s.textArea,"data-value":d.value&&"true",id:p,...d})}),t("span",{className:s.errorText,children:r})]})};try{l.displayName="TextArea",l.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},textAreaClassName:{defaultValue:null,description:"",name:"textAreaClassName",required:!1,type:{name:"string"}}}}}catch{}const F={component:l,tags:["autodocs"],title:"Components/Text Area"},n={render:()=>{const[e,a]=u.useState("");return t(l,{label:"Text Area",placeholder:"Text-area",value:e,onChange:r=>a(r.target.value)})}},o={render:()=>{const[e,a]=u.useState("");return t(l,{label:"Text Area",placeholder:"Text-area",error:"Error message",value:e,onChange:r=>a(r.target.value)})}},c={render:()=>{const[e,a]=u.useState("");return t(l,{label:"Text Area",placeholder:"Text-area",disabled:!0,value:e,onChange:r=>a(r.target.value)})}};var m,x,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <TextArea label={'Text Area'} placeholder={'Text-area'} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var _,A,g;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <TextArea label={'Text Area'} placeholder={'Text-area'} error={'Error message'} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(g=(A=o.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var T,b,h;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <TextArea label={'Text Area'} placeholder={'Text-area'} disabled value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const O=["Default","WithError","Disabled"];export{n as Default,c as Disabled,o as WithError,O as __namedExportsOrder,F as default};
