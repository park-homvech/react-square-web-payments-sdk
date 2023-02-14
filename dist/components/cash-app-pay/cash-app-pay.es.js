import * as e from "react";
import { useForm as E } from "../../contexts/form/form.es.js";
function P({
  callbacks: n,
  id: c = "rswps-cash-app-pay",
  redirectURL: p,
  referenceId: f,
  shape: m = "round",
  size: d = "medium",
  values: w = "dark",
  width: y = "static",
  ...R
}) {
  const [r, C] = e.useState(), { createPaymentRequest: i, payments: u } = E(), h = e.useMemo(
    () => ({
      redirectURL: p || window.location.href,
      referenceId: f
    }),
    [p, f]
  ), l = e.useMemo(() => {
    const t = {
      shape: m,
      size: d,
      values: w,
      width: y
    };
    return Object.keys(t).reduce((o, s) => (t[s] !== void 0 && (o[s] = t[s]), o), {});
  }, [m, d, w, y]);
  if (e.useEffect(() => {
    if (!!r)
      return () => {
        r.destroy();
      };
  }, [r]), e.useEffect(() => {
    if (!i)
      throw new Error("`createPaymentRequest()` is required when using digital wallets");
    const t = new AbortController(), { signal: o } = t;
    return (async (q) => {
      const b = u?.paymentRequest(i);
      if (!b)
        throw new Error("`paymentRequest` is required when using digital wallets");
      try {
        const a = await u?.cashAppPay(b, h).then((A) => {
          if (!q?.aborted)
            return C(A), A;
        });
        await a?.attach(`#${c}`, l), q.aborted && await a?.destroy();
      } catch (a) {
        console.error("Initializing Cash App Pay failed", a);
      }
    })(o), () => {
      t.abort();
    };
  }, [i, l, h, u]), n)
    for (const t of Object.keys(n))
      r?.addEventListener(
        t.toLowerCase(),
        n[t]
      );
  return /* @__PURE__ */ e.createElement("div", {
    ...R,
    id: c
  });
}
export {
  P as default
};
//# sourceMappingURL=cash-app-pay.es.js.map
