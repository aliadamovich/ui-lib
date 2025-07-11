import{j as e,a as J}from"./jsx-runtime-c9381026.js";import{M as K}from"./index-c8ff9646.js";import{B as n}from"./Button-66d78958.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-08fdce1f.js";import"./clsx-0839fdbe.js";const Z={title:"Components/Button",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClick:{action:"clicked"},variant:{control:{type:"radio"},options:["primary","secondary","outline","text","link"],description:"The visual style of the button"},size:{control:{type:"radio"},options:["small","medium","large"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},fullWidth:{control:"boolean",description:"Whether the button should take up the full width of its container"},startIcon:{control:{type:"object"},description:"Icon to display at the start of the button"},endIcon:{control:{type:"object"},description:"Icon to display at the end of the button"}}},r={args:{children:"Primary button",disabled:!1,variant:"primary"}},t={args:{children:"Secondary button",disabled:!1,variant:"secondary"}},a={args:{children:"Outline button",disabled:!1,variant:"outline"}},s={args:{children:"Text button",disabled:!1,variant:"text"}},o={args:{children:"button that looks like a link",disabled:!1,variant:"link"}},i={args:{children:"Full Width button",disabled:!1,fullWidth:!0,variant:"primary"},parameters:{layout:"fullscreen"},render:H=>e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",padding:"16px",boxSizing:"border-box"},children:e(n,{...H})})},c={args:{children:"Button",variant:"secondary"},render:()=>J("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e(n,{size:"small",children:"Small"}),e(n,{size:"medium",children:"Medium"}),e(n,{size:"large",children:"Large"})]})},d={args:{variant:"primary",children:"button with Start Icon",startIcon:e(K,{size:24})}},l={args:{variant:"primary",children:"button with End Icon",endIcon:e("span",{children:"→"})}},p={args:{variant:"primary",children:"button with Both Icons",startIcon:e("span",{children:"🔍"}),endIcon:e("span",{children:"→"})}};var u,m,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    disabled: false,
    variant: 'primary'
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,b,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Secondary button',
    disabled: false,
    variant: 'secondary'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,v,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Outline button',
    disabled: false,
    variant: 'outline'
  }
}`,...(I=(v=a.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var x,S,B;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Text button',
    disabled: false,
    variant: 'text'
  }
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var W,k,z;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'button that looks like a link',
    disabled: false,
    variant: 'link'
  }
}`,...(z=(k=o.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var w,j,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Full Width button',
    disabled: false,
    fullWidth: true,
    variant: 'primary'
  },
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    padding: '16px',
    boxSizing: 'border-box'
  }}>
      <Button {...args} />
    </div>
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var L,E,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'secondary'
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button size={'small'}>Small</Button>
      <Button size={'medium'}>Medium</Button>
      <Button size={'large'}>Large</Button>
    </div>
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var O,C,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'button with Start Icon',
    startIcon: <MdLanguage size={24} />
  }
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var P,_,q;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'button with End Icon',
    endIcon: <span>→</span>
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,D,G;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'button with Both Icons',
    startIcon: <span>🔍</span>,
    endIcon: <span>→</span>
  }
}`,...(G=(D=p.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const $=["Primary","Secondary","Outline","Text","Link","FullWidth","Sizes","WithIcon","WithEndIcon","WithBothIcons"];export{i as FullWidth,o as Link,a as Outline,r as Primary,t as Secondary,c as Sizes,s as Text,p as WithBothIcons,l as WithEndIcon,d as WithIcon,$ as __namedExportsOrder,Z as default};
