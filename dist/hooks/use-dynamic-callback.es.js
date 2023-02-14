import * as t from "react";
import { useIsomorphicLayoutEffect as u } from "./use-isomorphic-layout-effect.es.js";
function n(r) {
  const e = t.useRef(r);
  return u(() => {
    e.current = r;
  }, [r]), t.useCallback((...o) => e.current(...o), []);
}
export {
  n as useDynamicCallback
};
//# sourceMappingURL=use-dynamic-callback.es.js.map
