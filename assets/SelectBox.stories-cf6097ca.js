import{a as e,F as r,j as n}from"./jsx-runtime-c9381026.js";import{S as F,a}from"./SelectBox-a992b73f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-a38d0dca.js";import"./index-d203b311.js";import"./index-4e369f64.js";import"./index-eac65c8e.js";import"./index-6c7aef41.js";import"./index-0db981d8.js";import"./index-59b5f6a4.js";import"./Combination-a5c49ffd.js";import"./index-dfd532b3.js";import"./index-868af48b.js";import"./index-e940af2f.js";import"./floating-ui.react-dom-066ad2e2.js";import"./index-03f7a445.js";import"./index-e9f74dad.js";import"./index-39a17786.js";import"./index-a72790c3.js";import"./clsx-0839fdbe.js";import"./index-6cbd5b3c.js";import"./iconBase-08fdce1f.js";const Q={title:"Components/SelectBox",parameters:{layout:"centered"},component:F,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text displayed when no option is selected.",defaultValue:"Select an option"},defaultValue:{control:"text",description:"The default selected value when the component is first rendered."},onValueChange:{action:"value changed",description:"Callback triggered when the selected value changes."},children:{description:"List of options displayed inside the SelectBox.",control:!1},disabled:{control:"boolean",description:"Disables the select box if set to `true`.",defaultValue:!1},width:{control:"text",description:"Sets the width of the SelectBox component. Accepts any valid CSS width value.",defaultValue:"auto"}}},t={args:{placeholder:"Choose language",children:e(r,{children:[e(a,{value:"french",children:[n("span",{children:"🇫🇷"})," French"]}),e(a,{value:"german",children:[n("span",{children:"🇩🇪"})," German"]}),e(a,{value:"russian",children:[n("span",{children:"🇷🇺"})," Russian"]}),e(a,{value:"english",children:[n("span",{children:"🇺🇸"})," English"]})]})}},l={args:{placeholder:"Choose language",defaultValue:"german",children:e(r,{children:[e(a,{value:"french",children:[n("span",{children:"🇫🇷"})," French"]}),e(a,{value:"german",children:[n("span",{children:"🇩🇪"})," German"]})]})}},c={args:{placeholder:"Choose language",children:e(r,{children:[e(a,{value:"french",children:[n("span",{children:"🇫🇷"})," French"]}),e(a,{value:"german",children:[n("span",{children:"🇩🇪"})," German"]})]}),disabled:!0}},s={args:{width:"500px",placeholder:"Choose language",children:e(r,{children:[e(a,{value:"french",children:[n("span",{children:"🇫🇷"})," French"]}),e(a,{value:"german",children:[n("span",{children:"🇩🇪"})," German"]})]})}},o={args:{defaultValue:"100",children:e(r,{children:[n(a,{value:"10",children:"10"}),n(a,{value:"20",children:"20"}),n(a,{value:"30",children:"30"}),n(a,{value:"50",children:"50"}),n(a,{value:"100",children:"100"})]})}};var i,d,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Choose language',
    children: <>
        <SelectItem value={'french'}>
          <span>🇫🇷</span> French
        </SelectItem>
        <SelectItem value={'german'}>
          <span>🇩🇪</span> German
        </SelectItem>
        <SelectItem value={'russian'}>
          <span>🇷🇺</span> Russian
        </SelectItem>
        <SelectItem value={'english'}>
          <span>🇺🇸</span> English
        </SelectItem>
      </>
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,h,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Choose language',
    defaultValue: 'german',
    children: <>
        <SelectItem value={'french'}>
          <span>🇫🇷</span> French
        </SelectItem>
        <SelectItem value={'german'}>
          <span>🇩🇪</span> German
        </SelectItem>
      </>
  }
}`,...(u=(h=l.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,S,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Choose language',
    children: <>
        <SelectItem value={'french'}>
          <span>🇫🇷</span> French
        </SelectItem>
        <SelectItem value={'german'}>
          <span>🇩🇪</span> German
        </SelectItem>
      </>,
    disabled: true
  }
}`,...(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var I,f,x;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    width: '500px',
    placeholder: 'Choose language',
    children: <>
        <SelectItem value={'french'}>
          <span>🇫🇷</span> French
        </SelectItem>
        <SelectItem value={'german'}>
          <span>🇩🇪</span> German
        </SelectItem>
      </>
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,b,V;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    defaultValue: '100',
    children: <>
        <SelectItem value={'10'}>10</SelectItem>
        <SelectItem value={'20'}>20</SelectItem>
        <SelectItem value={'30'}>30</SelectItem>
        <SelectItem value={'50'}>50</SelectItem>
        <SelectItem value={'100'}>100</SelectItem>
      </>
  }
}`,...(V=(b=o.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};const U=["Primary","WithDefaultValue","Disabled","WithAdjustableWidth","Pagination"];export{c as Disabled,o as Pagination,t as Primary,s as WithAdjustableWidth,l as WithDefaultValue,U as __namedExportsOrder,Q as default};
