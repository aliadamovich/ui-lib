import{a as P,j as t}from"./jsx-runtime-c9381026.js";import{r as s}from"./index-8b3efc3f.js";import{c as S}from"./index-4e369f64.js";import{u as x,P as E}from"./index-0db981d8.js";import{c as X}from"./index-6c7aef41.js";import{c as Y,R as pe,I as ue}from"./index-e4e0c452.js";import{u as me}from"./index-39a17786.js";import{u as fe}from"./index-59b5f6a4.js";import{u as ve}from"./index-03f7a445.js";import{u as Re}from"./index-a72790c3.js";import{P as _e}from"./index-01d53855.js";import{c as J}from"./clsx-0839fdbe.js";import"./_commonjsHelpers-de833af9.js";import"./index-a38d0dca.js";import"./index-eac65c8e.js";import"./index-868af48b.js";import"./index-dfd532b3.js";var D="Radio",[be,Q]=X(D),[ge,he]=be(D),Z=s.forwardRef((o,n)=>{const{__scopeRadio:e,name:d,checked:r=!1,required:a,disabled:l,value:m="on",onCheck:c,form:f,...v}=o,[u,R]=s.useState(null),i=x(n,g=>R(g)),p=s.useRef(!1),b=u?f||!!u.closest("form"):!0;return P(ge,{scope:e,checked:r,disabled:l,children:[t(E.button,{type:"button",role:"radio","aria-checked":r,"data-state":ae(r),"data-disabled":l?"":void 0,disabled:l,value:m,...v,ref:i,onClick:S(o.onClick,g=>{r||c==null||c(),b&&(p.current=g.isPropagationStopped(),p.current||g.stopPropagation())})}),b&&t(re,{control:u,bubbles:!p.current,name:d,value:m,checked:r,required:a,disabled:l,form:f,style:{transform:"translateX(-100%)"}})]})});Z.displayName=D;var ee="RadioIndicator",oe=s.forwardRef((o,n)=>{const{__scopeRadio:e,forceMount:d,...r}=o,a=he(ee,e);return t(_e,{present:d||a.checked,children:t(E.span,{"data-state":ae(a.checked),"data-disabled":a.disabled?"":void 0,...r,ref:n})})});oe.displayName=ee;var ye="RadioBubbleInput",re=s.forwardRef(({__scopeRadio:o,control:n,checked:e,bubbles:d=!0,...r},a)=>{const l=s.useRef(null),m=x(l,a),c=Re(e),f=ve(n);return s.useEffect(()=>{const v=l.current;if(!v)return;const u=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(u,"checked").set;if(c!==e&&i){const p=new Event("click",{bubbles:d});i.call(v,e),v.dispatchEvent(p)}},[c,e,d]),t(E.input,{type:"radio","aria-hidden":!0,defaultChecked:e,...r,tabIndex:-1,ref:m,style:{...r.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});re.displayName=ye;function ae(o){return o?"checked":"unchecked"}var Ge=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],O="RadioGroup",[Ne,Ze]=X(O,[Y,Q]),te=Y(),ne=Q(),[we,Ce]=Ne(O),se=s.forwardRef((o,n)=>{const{__scopeRadioGroup:e,name:d,defaultValue:r,value:a,required:l=!1,disabled:m=!1,orientation:c,dir:f,loop:v=!0,onValueChange:u,...R}=o,i=te(e),p=fe(f),[b,g]=me({prop:a,defaultProp:r??null,onChange:u,caller:O});return t(we,{scope:e,name:d,required:l,disabled:m,value:b,onValueChange:g,children:t(pe,{asChild:!0,...i,orientation:c,dir:p,loop:v,children:t(E.div,{role:"radiogroup","aria-required":l,"aria-orientation":c,"data-disabled":m?"":void 0,dir:p,...R,ref:n})})})});se.displayName=O;var ie="RadioGroupItem",de=s.forwardRef((o,n)=>{const{__scopeRadioGroup:e,disabled:d,...r}=o,a=Ce(ie,e),l=a.disabled||d,m=te(e),c=ne(e),f=s.useRef(null),v=x(n,f),u=a.value===r.value,R=s.useRef(!1);return s.useEffect(()=>{const i=b=>{Ge.includes(b.key)&&(R.current=!0)},p=()=>R.current=!1;return document.addEventListener("keydown",i),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",i),document.removeEventListener("keyup",p)}},[]),t(ue,{asChild:!0,...m,focusable:!l,active:u,children:t(Z,{disabled:l,required:a.required,checked:u,...c,...r,name:a.name,ref:v,onCheck:()=>a.onValueChange(r.value),onKeyDown:S(i=>{i.key==="Enter"&&i.preventDefault()}),onFocus:S(r.onFocus,()=>{var i;R.current&&((i=f.current)==null||i.click())})})})});de.displayName=ie;var ke="RadioGroupIndicator",Ie=s.forwardRef((o,n)=>{const{__scopeRadioGroup:e,...d}=o,r=ne(e);return t(oe,{...r,...d,ref:n})});Ie.displayName=ke;var le=se,ce=de;const Ee="_container_1vdkm_1",Oe="_root_1vdkm_8",Pe="_option_1vdkm_19",Se="_label_1vdkm_27",xe="_icon_1vdkm_42",De="_error_1vdkm_104",Me="_labelText_1vdkm_110",Ae="_highlighted_1vdkm_110",_={container:Ee,root:Oe,option:Pe,label:Se,icon:xe,error:De,labelText:Me,highlighted:Ae},C=s.forwardRef(({className:o,...n},e)=>t(le,{className:J(_.root,o),...n,ref:e}));C.displayName=le.displayName;const k=s.forwardRef(({className:o,...n},e)=>t(ce,{className:J(_.option,o),...n,ref:e,children:t("div",{className:_.icon})}));k.displayName=ce.displayName;const I=s.forwardRef((o,n)=>{const{errorMessage:e,options:d,...r}=o;return P("div",{className:_.container,children:[t(C,{...r,ref:n,children:d.map(a=>P("label",{className:_.label,children:[t(k,{value:a.value,id:a.value}),t("label",{htmlFor:a.value,className:_.labelText,children:a.label})]},a.value))}),e&&t("div",{className:_.error,children:e})]})});I.displayName="RadioGroup";try{I.displayName="RadioGroup",I.__docgenInfo={description:"",displayName:"RadioGroup",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{k.displayName="RadioGroupItem",k.__docgenInfo={description:"",displayName:"RadioGroupItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="RadioGroupRoot",C.__docgenInfo={description:"",displayName:"RadioGroupRoot",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const eo={component:I,tags:["autodocs"],title:"Components/Radio Group",argTypes:{disabled:{control:"boolean",description:"Disables the radio group"},errorMessage:{control:"text",description:"Error message to display"}},parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#000"}]}}},h={args:{options:[{label:"RadioGroup",value:"radio-group"}]}},y={args:{options:[{label:"Option One",value:"option-one"},{label:"Option Two",value:"option-two"},{label:"Option Three",value:"option-three"}]}},G={args:{options:[{label:"Option One",value:"option-one"},{label:"Option Two",value:"option-two"}],errorMessage:"Please select an option"}},N={args:{disabled:!0,options:[{label:"RadioGroup",value:"radio-group"}]}},w={args:{disabled:!0,options:[{label:"RadioGroup",value:"radio-group"}],defaultValue:"radio-group"}};var M,A,T;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'RadioGroup',
      value: 'radio-group'
    }]
  }
}`,...(T=(A=h.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var V,q,F;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option One',
      value: 'option-one'
    }, {
      label: 'Option Two',
      value: 'option-two'
    }, {
      label: 'Option Three',
      value: 'option-three'
    }]
  }
}`,...(F=(q=y.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var L,B,K;G.parameters={...G.parameters,docs:{...(L=G.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option One',
      value: 'option-one'
    }, {
      label: 'Option Two',
      value: 'option-two'
    }],
    errorMessage: 'Please select an option'
  }
}`,...(K=(B=G.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var U,W,j;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options: [{
      label: 'RadioGroup',
      value: 'radio-group'
    }]
  }
}`,...(j=(W=N.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var z,H,$;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options: [{
      label: 'RadioGroup',
      value: 'radio-group'
    }],
    defaultValue: 'radio-group'
  }
}`,...($=(H=w.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};const oo=["Default","WithMultipleOptions","WithError","Disabled","DisabledSelected"];export{h as Default,N as Disabled,w as DisabledSelected,G as WithError,y as WithMultipleOptions,oo as __namedExportsOrder,eo as default};
