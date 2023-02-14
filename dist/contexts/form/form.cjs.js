"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const k=require("react"),w=require("../../node_modules/@square/web-sdk/dist/index.cjs.js"),j=require("../../components/error-screen/error-screen.cjs.js"),P=require("../../hooks/use-dynamic-callback.cjs.js");function S(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const c=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,c.get?c:{enumerable:!0,get:()=>e[o]})}}return t.default=e,Object.freeze(t)}const n=S(k),l=n.createContext({cardTokenizeResponseReceived:null,createPaymentRequest:null,payments:null});function g({applicationId:e,locationId:t,children:o,overrides:c,...s}){const[a,d]=n.useState(),[f]=n.useState(()=>s.createPaymentRequest?.());n.useEffect(()=>{const r=new AbortController,{signal:u}=r;async function R(v){await w.payments(e,t,c).then(i=>{if(i===null)throw new Error("Square Web Payments SDK failed to load");if(!v?.aborted)return d(i),i})}return e&&t&&R(u),()=>{r.abort()}},[e,t]);const m=async r=>{if(r.errors||!s.createVerificationDetails){await s.cardTokenizeResponseReceived(r);return}const u=await a?.verifyBuyer(String(r.token),s.createVerificationDetails());await s.cardTokenizeResponseReceived(r,u)},y=P.useDynamicCallback(m);if(!e||!t)return n.createElement(j.default,null);if(!a)return null;const b={cardTokenizeResponseReceived:y,createPaymentRequest:f,payments:a};return n.createElement(l.Provider,{value:b},o)}const q=()=>{const e=n.useContext(l);if(e===void 0)throw new Error("useForm must be used within a FormProvider");return e};exports.FormContext=l;exports.default=g;exports.useForm=q;
//# sourceMappingURL=form.cjs.js.map