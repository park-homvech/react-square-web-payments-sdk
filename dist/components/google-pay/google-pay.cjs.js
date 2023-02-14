"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const j=require("react"),q=require("../../contexts/form/form.cjs.js"),v=require("../../hooks/use-event-listener.cjs.js"),R=require("./google-pay.styles.cjs.js");function O(t){if(t&&t.__esModule)return t;const s=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const n in t)if(n!=="default"){const i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(s,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}return s.default=t,Object.freeze(s)}const a=O(j),E=({buttonColor:t,buttonSizeMode:s="fill",buttonType:n="long",id:i="rswps-google-pay-container",...p})=>{const[l,P]=a.useState(()=>{}),{cardTokenizeResponseReceived:b,createPaymentRequest:u,payments:g}=q.useForm(),f=a.useRef(null),y=a.useMemo(()=>{const r={buttonColor:t,buttonSizeMode:s,buttonType:n};return Object.keys(r).reduce((e,o)=>(r[o]!==void 0&&(e[o]=r[o]),e),{})},[t,s,n]),h=async r=>{if(r.stopPropagation(),!l){console.warn("Google Pay button was clicked, but no Google Pay instance was found.");return}try{const e=await l.tokenize();if(e.status==="OK")return b(e);let o=`Tokenization failed with status: ${e.status}`;if(e?.errors)throw o+=` and errors: ${JSON.stringify(e?.errors)}`,new Error(o);console.warn(o)}catch(e){console.error(e)}};return a.useEffect(()=>{if(!u)throw new Error("`createPaymentRequest()` is required when using digital wallets");const r=new AbortController,{signal:e}=r;return(async d=>{const w=g?.paymentRequest(u);if(!w)throw new Error("`paymentRequest` is required when using digital wallets");try{const c=await g?.googlePay(w).then(m=>{if(!d?.aborted)return P(m),m});await c?.attach(`#${i}`,y),d.aborted&&await c?.destroy()}catch(c){console.error("Initializing Google Pay failed",c)}})(e),()=>{r.abort()}},[u,g,y]),v.useEventListener({listener:h,type:"click",element:f,options:{passive:!0}}),a.createElement("div",{...p,id:i,ref:f},l?null:a.createElement(R.ButtonLoader,null))};exports.default=E;
//# sourceMappingURL=google-pay.cjs.js.map
