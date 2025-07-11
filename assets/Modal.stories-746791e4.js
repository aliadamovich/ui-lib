import{a as i,F as c,j as e}from"./jsx-runtime-c9381026.js";import{r as l}from"./index-8b3efc3f.js";import{B as s}from"./Button-66d78958.js";import{T as h}from"./Typography-f75047b4.js";import{M as d}from"./Modal-56e87a37.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./index-4e369f64.js";import"./index-0db981d8.js";import"./index-a38d0dca.js";import"./index-6c7aef41.js";import"./index-868af48b.js";import"./index-39a17786.js";import"./Combination-a5c49ffd.js";import"./index-dfd532b3.js";import"./index-e9f74dad.js";import"./index-01d53855.js";import"./index-d6421b68.js";import"./iconBase-08fdce1f.js";import"./Card-ed0a6651.js";const $={component:d,parameters:{layout:"centered"},tags:["autodocs"],title:"Components/Modal",argTypes:{size:{control:"select",options:["sm","md","lg","auto"],description:"Size Modal",defaultValue:"sm"},open:{control:"boolean",description:"Close/Open Modal"}}},m={args:{open:!1,title:"Modal",size:"sm"},render:n=>{const[r,o]=l.useState(n.open);l.useEffect(()=>{o(n.open)},[n.open]);const t=a=>{var p;o(a),(p=n.onOpenChange)==null||p.call(n,a)};return i(c,{children:[e(s,{onClick:()=>t(!0),children:"Open Modal"}),e(d,{...n,open:r,onOpenChange:t,children:e("div",{style:{padding:"30px 0 12px"},children:e(h,{variant:"body1",children:"Modal content here"})})})]})}},u={args:{open:!1,title:"Email sent"},render:n=>{const[r,o]=l.useState(n.open);l.useEffect(()=>{o(n.open)},[n.open]);const t=a=>{var p;o(a),(p=n.onOpenChange)==null||p.call(n,a)};return i(c,{children:[e(s,{onClick:()=>t(!0),children:"Show Email Sent Modal"}),e(d,{...n,open:r,onOpenChange:t,title:"Email sent",children:i("div",{style:{padding:"30px 0 12px"},children:[e(h,{variant:"body1",style:{marginBottom:"18px"},children:"We have sent a link to confirm your email to epam@epam.com"}),e("div",{style:{display:"flex",justifyContent:"flex-end"},children:e(s,{onClick:()=>t(!1),children:"OK"})})]})})]})}},O={args:{open:!1,title:"Custom Size Modal",size:"md"},render:n=>{const[r,o]=l.useState(n.open);l.useEffect(()=>{o(n.open)},[n.open]);const t=a=>{var p;o(a),(p=n.onOpenChange)==null||p.call(n,a)};return i(c,{children:[e(s,{onClick:()=>t(!0),children:"Open Custom Size Modal"}),e(d,{...n,open:r,onOpenChange:t,children:i("div",{style:{padding:"20px 0",display:"flex",flexDirection:"column",height:"400px"},children:[e(h,{variant:"body1",children:"This is a custom sized modal with different dimensions."}),e("div",{style:{marginTop:"auto",display:"flex",justifyContent:"flex-end"},children:e(s,{onClick:()=>t(!1),children:"Close"})})]})})]})}},y={args:{open:!1,title:"Custom Opacity Modal",size:"md"},render:n=>{const[r,o]=l.useState(n.open);l.useEffect(()=>{o(n.open)},[n.open]);const t=a=>{var p;o(a),(p=n.onOpenChange)==null||p.call(n,a)};return i(c,{children:[e(s,{onClick:()=>t(!0),children:"Open Opacity Overlay"}),e(d,{...n,open:r,onOpenChange:t,overlayOpacity:1,children:i("div",{style:{padding:"20px 0",display:"flex",flexDirection:"column",height:"400px"},children:[e(h,{variant:"body1",children:"This modal has an overlay with 100% opacity."}),e("div",{style:{marginTop:"auto",display:"flex",justifyContent:"flex-end"},children:e(s,{onClick:()=>t(!1),children:"Close"})})]})})]})}},g={args:{open:!1,size:"sm"},render:n=>{const[r,o]=l.useState(n.open);l.useEffect(()=>{o(n.open)},[n.open]);const t=a=>{var p;o(a),(p=n.onOpenChange)==null||p.call(n,a)};return i(c,{children:[e(s,{onClick:()=>t(!0),children:"Open Modal Without Header"}),e(d,{...n,open:r,onOpenChange:t,children:i("div",{style:{paddingTop:"40px",paddingBottom:"24px"},children:[e(h,{variant:"body1",style:{marginBottom:"16px"},children:"This modal has no title or header, just content and a close button in the corner."}),e("div",{style:{display:"flex",justifyContent:"flex-end"},children:e(s,{onClick:()=>t(!1),children:"Close"})})]})})]})}};var C,f,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: false,
    title: 'Modal',
    size: 'sm'
  },
  render: args => {
    const [internalOpen, setInternalOpen] = useState(args.open);
    useEffect(() => {
      setInternalOpen(args.open);
    }, [args.open]);
    const handleOpenChange = (isOpen: boolean) => {
      setInternalOpen(isOpen);
      args.onOpenChange?.(isOpen);
    };
    return <>
        <Button onClick={() => handleOpenChange(true)}>Open Modal</Button>
        <Modal {...args} open={internalOpen} onOpenChange={handleOpenChange}>
          <div style={{
          padding: '30px 0 12px'
        }}>
            <Typography variant={'body1'}>Modal content here</Typography>
          </div>
        </Modal>
      </>;
  }
}`,...(x=(f=m.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,M,S;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: false,
    title: 'Email sent'
  },
  render: args => {
    const [internalOpen, setInternalOpen] = useState(args.open);
    useEffect(() => {
      setInternalOpen(args.open);
    }, [args.open]);
    const handleOpenChange = (isOpen: boolean) => {
      setInternalOpen(isOpen);
      args.onOpenChange?.(isOpen);
    };
    return <>
        <Button onClick={() => handleOpenChange(true)}>Show Email Sent Modal</Button>
        <Modal {...args} open={internalOpen} onOpenChange={handleOpenChange} title={'Email sent'}>
          <div style={{
          padding: '30px 0 12px'
        }}>
            <Typography variant={'body1'} style={{
            marginBottom: '18px'
          }}>
              We have sent a link to confirm your email to epam@epam.com
            </Typography>
            <div style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
              <Button onClick={() => handleOpenChange(false)}>OK</Button>
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...(S=(M=u.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var B,T,k;O.parameters={...O.parameters,docs:{...(B=O.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    open: false,
    title: 'Custom Size Modal',
    size: 'md'
  },
  render: args => {
    const [internalOpen, setInternalOpen] = useState(args.open);
    useEffect(() => {
      setInternalOpen(args.open);
    }, [args.open]);
    const handleOpenChange = (isOpen: boolean) => {
      setInternalOpen(isOpen);
      args.onOpenChange?.(isOpen);
    };
    return <>
        <Button onClick={() => handleOpenChange(true)}>Open Custom Size Modal</Button>
        <Modal {...args} open={internalOpen} onOpenChange={handleOpenChange}>
          <div style={{
          padding: '20px 0',
          display: 'flex',
          flexDirection: 'column',
          height: '400px'
        }}>
            <Typography variant={'body1'}>
              This is a custom sized modal with different dimensions.
            </Typography>
            <div style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
              <Button onClick={() => handleOpenChange(false)}>Close</Button>
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...(k=(T=O.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var E,I,b;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    open: false,
    title: 'Custom Opacity Modal',
    size: 'md'
  },
  render: args => {
    const [internalOpen, setInternalOpen] = useState(args.open);
    useEffect(() => {
      setInternalOpen(args.open);
    }, [args.open]);
    const handleOpenChange = (isOpen: boolean) => {
      setInternalOpen(isOpen);
      args.onOpenChange?.(isOpen);
    };
    return <>
        <Button onClick={() => handleOpenChange(true)}>Open Opacity Overlay</Button>
        <Modal {...args} open={internalOpen} onOpenChange={handleOpenChange} overlayOpacity={1}>
          <div style={{
          padding: '20px 0',
          display: 'flex',
          flexDirection: 'column',
          height: '400px'
        }}>
            <Typography variant={'body1'}>This modal has an overlay with 100% opacity.</Typography>
            <div style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
              <Button onClick={() => handleOpenChange(false)}>Close</Button>
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...(b=(I=y.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var z,j,w;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    open: false,
    size: 'sm'
  },
  render: args => {
    const [internalOpen, setInternalOpen] = useState(args.open);
    useEffect(() => {
      setInternalOpen(args.open);
    }, [args.open]);
    const handleOpenChange = (isOpen: boolean) => {
      setInternalOpen(isOpen);
      args.onOpenChange?.(isOpen);
    };
    return <>
        <Button onClick={() => handleOpenChange(true)}>Open Modal Without Header</Button>
        <Modal {...args} open={internalOpen} onOpenChange={handleOpenChange}>
          <div style={{
          paddingTop: '40px',
          paddingBottom: '24px'
        }}>
            <Typography variant={'body1'} style={{
            marginBottom: '16px'
          }}>
              This modal has no title or header, just content and a close button in the corner.
            </Typography>
            <div style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
              <Button onClick={() => handleOpenChange(false)}>Close</Button>
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...(w=(j=g.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const nn=["Default","EmailSent","CustomSized","CustomOpacity","NoHeader"];export{y as CustomOpacity,O as CustomSized,m as Default,u as EmailSent,g as NoHeader,nn as __namedExportsOrder,$ as default};
