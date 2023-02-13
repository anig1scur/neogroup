function Ib($) {
  return $ && $.__esModule && Object.prototype.hasOwnProperty.call($, "default") ? $.default : $;
}
var Hu = {}, Qb = {
  get exports() {
    return Hu;
  },
  set exports($) {
    Hu = $;
  }
}, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function Wb() {
  if (W1)
    return Et;
  W1 = 1;
  var $ = Symbol.for("react.element"), X = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), Kt = Symbol.for("react.strict_mode"), on = Symbol.for("react.profiler"), nt = Symbol.for("react.provider"), S = Symbol.for("react.context"), $t = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), pe = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), re = Symbol.iterator;
  function me(T) {
    return T === null || typeof T != "object" ? null : (T = re && T[re] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ve = Object.assign, Ct = {};
  function st(T, B, le) {
    this.props = T, this.context = B, this.refs = Ct, this.updater = le || ie;
  }
  st.prototype.isReactComponent = {}, st.prototype.setState = function(T, B) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, B, "setState");
  }, st.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = st.prototype;
  function at(T, B, le) {
    this.props = T, this.context = B, this.refs = Ct, this.updater = le || ie;
  }
  var Qe = at.prototype = new fn();
  Qe.constructor = at, Ve(Qe, st.prototype), Qe.isPureReactComponent = !0;
  var ct = Array.isArray, _e = Object.prototype.hasOwnProperty, it = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function tn(T, B, le) {
    var $e, Fe = {}, ht = null, Je = null;
    if (B != null)
      for ($e in B.ref !== void 0 && (Je = B.ref), B.key !== void 0 && (ht = "" + B.key), B)
        _e.call(B, $e) && !He.hasOwnProperty($e) && (Fe[$e] = B[$e]);
    var ft = arguments.length - 2;
    if (ft === 1)
      Fe.children = le;
    else if (1 < ft) {
      for (var et = Array(ft), zt = 0; zt < ft; zt++)
        et[zt] = arguments[zt + 2];
      Fe.children = et;
    }
    if (T && T.defaultProps)
      for ($e in ft = T.defaultProps, ft)
        Fe[$e] === void 0 && (Fe[$e] = ft[$e]);
    return { $$typeof: $, type: T, key: ht, ref: Je, props: Fe, _owner: it.current };
  }
  function xn(T, B) {
    return { $$typeof: $, type: T.type, key: B, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Yt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === $;
  }
  function bt(T) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(le) {
      return B[le];
    });
  }
  var En = /\/+/g;
  function Ue(T, B) {
    return typeof T == "object" && T !== null && T.key != null ? bt("" + T.key) : B.toString(36);
  }
  function qe(T, B, le, $e, Fe) {
    var ht = typeof T;
    (ht === "undefined" || ht === "boolean") && (T = null);
    var Je = !1;
    if (T === null)
      Je = !0;
    else
      switch (ht) {
        case "string":
        case "number":
          Je = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case $:
            case X:
              Je = !0;
          }
      }
    if (Je)
      return Je = T, Fe = Fe(Je), T = $e === "" ? "." + Ue(Je, 0) : $e, ct(Fe) ? (le = "", T != null && (le = T.replace(En, "$&/") + "/"), qe(Fe, B, le, "", function(zt) {
        return zt;
      })) : Fe != null && (Yt(Fe) && (Fe = xn(Fe, le + (!Fe.key || Je && Je.key === Fe.key ? "" : ("" + Fe.key).replace(En, "$&/") + "/") + T)), B.push(Fe)), 1;
    if (Je = 0, $e = $e === "" ? "." : $e + ":", ct(T))
      for (var ft = 0; ft < T.length; ft++) {
        ht = T[ft];
        var et = $e + Ue(ht, ft);
        Je += qe(ht, B, le, et, Fe);
      }
    else if (et = me(T), typeof et == "function")
      for (T = et.call(T), ft = 0; !(ht = T.next()).done; )
        ht = ht.value, et = $e + Ue(ht, ft++), Je += qe(ht, B, le, et, Fe);
    else if (ht === "object")
      throw B = String(T), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return Je;
  }
  function Nt(T, B, le) {
    if (T == null)
      return T;
    var $e = [], Fe = 0;
    return qe(T, $e, "", "", function(ht) {
      return B.call(le, ht, Fe++);
    }), $e;
  }
  function Rt(T) {
    if (T._status === -1) {
      var B = T._result;
      B = B(), B.then(function(le) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = le);
      }, function(le) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = le);
      }), T._status === -1 && (T._status = 0, T._result = B);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var ye = { current: null }, Z = { transition: null }, we = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: Z, ReactCurrentOwner: it };
  return Et.Children = { map: Nt, forEach: function(T, B, le) {
    Nt(T, function() {
      B.apply(this, arguments);
    }, le);
  }, count: function(T) {
    var B = 0;
    return Nt(T, function() {
      B++;
    }), B;
  }, toArray: function(T) {
    return Nt(T, function(B) {
      return B;
    }) || [];
  }, only: function(T) {
    if (!Yt(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, Et.Component = st, Et.Fragment = A, Et.Profiler = on, Et.PureComponent = at, Et.StrictMode = Kt, Et.Suspense = he, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, Et.cloneElement = function(T, B, le) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var $e = Ve({}, T.props), Fe = T.key, ht = T.ref, Je = T._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ht = B.ref, Je = it.current), B.key !== void 0 && (Fe = "" + B.key), T.type && T.type.defaultProps)
        var ft = T.type.defaultProps;
      for (et in B)
        _e.call(B, et) && !He.hasOwnProperty(et) && ($e[et] = B[et] === void 0 && ft !== void 0 ? ft[et] : B[et]);
    }
    var et = arguments.length - 2;
    if (et === 1)
      $e.children = le;
    else if (1 < et) {
      ft = Array(et);
      for (var zt = 0; zt < et; zt++)
        ft[zt] = arguments[zt + 2];
      $e.children = ft;
    }
    return { $$typeof: $, type: T.type, key: Fe, ref: ht, props: $e, _owner: Je };
  }, Et.createContext = function(T) {
    return T = { $$typeof: S, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: nt, _context: T }, T.Consumer = T;
  }, Et.createElement = tn, Et.createFactory = function(T) {
    var B = tn.bind(null, T);
    return B.type = T, B;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(T) {
    return { $$typeof: $t, render: T };
  }, Et.isValidElement = Yt, Et.lazy = function(T) {
    return { $$typeof: rt, _payload: { _status: -1, _result: T }, _init: Rt };
  }, Et.memo = function(T, B) {
    return { $$typeof: pe, type: T, compare: B === void 0 ? null : B };
  }, Et.startTransition = function(T) {
    var B = Z.transition;
    Z.transition = {};
    try {
      T();
    } finally {
      Z.transition = B;
    }
  }, Et.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Et.useCallback = function(T, B) {
    return ye.current.useCallback(T, B);
  }, Et.useContext = function(T) {
    return ye.current.useContext(T);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(T) {
    return ye.current.useDeferredValue(T);
  }, Et.useEffect = function(T, B) {
    return ye.current.useEffect(T, B);
  }, Et.useId = function() {
    return ye.current.useId();
  }, Et.useImperativeHandle = function(T, B, le) {
    return ye.current.useImperativeHandle(T, B, le);
  }, Et.useInsertionEffect = function(T, B) {
    return ye.current.useInsertionEffect(T, B);
  }, Et.useLayoutEffect = function(T, B) {
    return ye.current.useLayoutEffect(T, B);
  }, Et.useMemo = function(T, B) {
    return ye.current.useMemo(T, B);
  }, Et.useReducer = function(T, B, le) {
    return ye.current.useReducer(T, B, le);
  }, Et.useRef = function(T) {
    return ye.current.useRef(T);
  }, Et.useState = function(T) {
    return ye.current.useState(T);
  }, Et.useSyncExternalStore = function(T, B, le) {
    return ye.current.useSyncExternalStore(T, B, le);
  }, Et.useTransition = function() {
    return ye.current.useTransition();
  }, Et.version = "18.2.0", Et;
}
var Xp = {}, Gb = {
  get exports() {
    return Xp;
  },
  set exports($) {
    Xp = $;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G1;
function qb() {
  return G1 || (G1 = 1, function($, X) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.2.0", Kt = Symbol.for("react.element"), on = Symbol.for("react.portal"), nt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), $t = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), pe = Symbol.for("react.context"), rt = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Ct = Symbol.for("react.offscreen"), st = Symbol.iterator, fn = "@@iterator";
      function at(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = st && h[st] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ct = {
        transition: null
      }, _e = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, it = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, tn = null;
      function xn(h) {
        tn = h;
      }
      He.setExtraStackFrame = function(h) {
        tn = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        tn && (h += tn);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Yt = !1, bt = !1, En = !1, Ue = !1, qe = !1, Nt = {
        ReactCurrentDispatcher: Qe,
        ReactCurrentBatchConfig: ct,
        ReactCurrentOwner: it
      };
      Nt.ReactDebugCurrentFrame = He, Nt.ReactCurrentActQueue = _e;
      function Rt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          Z("warn", h, N);
        }
      }
      function ye(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          Z("error", h, N);
        }
      }
      function Z(h, C, N) {
        {
          var F = Nt.ReactDebugCurrentFrame, q = F.getStackAddendum();
          q !== "" && (C += "%s", N = N.concat([q]));
          var Ne = N.map(function(ae) {
            return String(ae);
          });
          Ne.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ne);
        }
      }
      var we = {};
      function T(h, C) {
        {
          var N = h.constructor, F = N && (N.displayName || N.name) || "ReactClass", q = F + "." + C;
          if (we[q])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), we[q] = !0;
        }
      }
      var B = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          T(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, F) {
          T(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, F) {
          T(h, "setState");
        }
      }, le = Object.assign, $e = {};
      Object.freeze($e);
      function Fe(h, C, N) {
        this.props = h, this.context = C, this.refs = $e, this.updater = N || B;
      }
      Fe.prototype.isReactComponent = {}, Fe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Fe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Je = function(h, C) {
          Object.defineProperty(Fe.prototype, h, {
            get: function() {
              Rt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ft in ht)
          ht.hasOwnProperty(ft) && Je(ft, ht[ft]);
      }
      function et() {
      }
      et.prototype = Fe.prototype;
      function zt(h, C, N) {
        this.props = h, this.context = C, this.refs = $e, this.updater = N || B;
      }
      var Vr = zt.prototype = new et();
      Vr.constructor = zt, le(Vr, Fe.prototype), Vr.isPureReactComponent = !0;
      function pr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Pr = Array.isArray;
      function dn(h) {
        return Pr(h);
      }
      function Yn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function An(h) {
        try {
          return Fn(h), !1;
        } catch {
          return !0;
        }
      }
      function Fn(h) {
        return "" + h;
      }
      function _n(h) {
        if (An(h))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yn(h)), Fn(h);
      }
      function Br(h, C, N) {
        var F = h.displayName;
        if (F)
          return F;
        var q = C.displayName || C.name || "";
        return q !== "" ? N + "(" + q + ")" : N;
      }
      function $r(h) {
        return h.displayName || "Context";
      }
      function In(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case nt:
            return "Fragment";
          case on:
            return "Portal";
          case $t:
            return "Profiler";
          case S:
            return "StrictMode";
          case re:
            return "Suspense";
          case me:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case pe:
              var C = h;
              return $r(C) + ".Consumer";
            case he:
              var N = h;
              return $r(N._context) + ".Provider";
            case rt:
              return Br(h, h.render, "ForwardRef");
            case ie:
              var F = h.displayName || null;
              return F !== null ? F : In(h.type) || "Memo";
            case Ve: {
              var q = h, Ne = q._payload, ae = q._init;
              try {
                return In(ae(Ne));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var vr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, hr, sa, er;
      er = {};
      function Ir(h) {
        if (vr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function pn(h) {
        if (vr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function wr(h, C) {
        var N = function() {
          hr || (hr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function li(h, C) {
        var N = function() {
          sa || (sa = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function ca(h) {
        if (typeof h.ref == "string" && it.current && h.__self && it.current.stateNode !== h.__self) {
          var C = In(it.current.type);
          er[C] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), er[C] = !0);
        }
      }
      var J = function(h, C, N, F, q, Ne, ae) {
        var Le = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Kt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: ae,
          // Record the component responsible for creating this element.
          _owner: Ne
        };
        return Le._store = {}, Object.defineProperty(Le._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Le, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Le, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
      };
      function xe(h, C, N) {
        var F, q = {}, Ne = null, ae = null, Le = null, ut = null;
        if (C != null) {
          Ir(C) && (ae = C.ref, ca(C)), pn(C) && (_n(C.key), Ne = "" + C.key), Le = C.__self === void 0 ? null : C.__self, ut = C.__source === void 0 ? null : C.__source;
          for (F in C)
            vr.call(C, F) && !Yr.hasOwnProperty(F) && (q[F] = C[F]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          q.children = N;
        else if (xt > 1) {
          for (var Wt = Array(xt), Bt = 0; Bt < xt; Bt++)
            Wt[Bt] = arguments[Bt + 2];
          Object.freeze && Object.freeze(Wt), q.children = Wt;
        }
        if (h && h.defaultProps) {
          var Gt = h.defaultProps;
          for (F in Gt)
            q[F] === void 0 && (q[F] = Gt[F]);
        }
        if (Ne || ae) {
          var en = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ne && wr(q, en), ae && li(q, en);
        }
        return J(h, Ne, ae, Le, ut, it.current, q);
      }
      function tt(h, C) {
        var N = J(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Lt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, q = le({}, h.props), Ne = h.key, ae = h.ref, Le = h._self, ut = h._source, xt = h._owner;
        if (C != null) {
          Ir(C) && (ae = C.ref, xt = it.current), pn(C) && (_n(C.key), Ne = "" + C.key);
          var Wt;
          h.type && h.type.defaultProps && (Wt = h.type.defaultProps);
          for (F in C)
            vr.call(C, F) && !Yr.hasOwnProperty(F) && (C[F] === void 0 && Wt !== void 0 ? q[F] = Wt[F] : q[F] = C[F]);
        }
        var Bt = arguments.length - 2;
        if (Bt === 1)
          q.children = N;
        else if (Bt > 1) {
          for (var Gt = Array(Bt), en = 0; en < Bt; en++)
            Gt[en] = arguments[en + 2];
          q.children = Gt;
        }
        return J(h.type, Ne, ae, Le, ut, xt, q);
      }
      function Ut(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Kt;
      }
      var bn = ".", vn = ":";
      function mr(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(q) {
          return N[q];
        });
        return "$" + F;
      }
      var Pt = !1, xr = /\/+/g;
      function At(h) {
        return h.replace(xr, "$&/");
      }
      function Ft(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (_n(h.key), mr("" + h.key)) : C.toString(36);
      }
      function Wa(h, C, N, F, q) {
        var Ne = typeof h;
        (Ne === "undefined" || Ne === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Ne) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Kt:
                case on:
                  ae = !0;
              }
          }
        if (ae) {
          var Le = h, ut = q(Le), xt = F === "" ? bn + Ft(Le, 0) : F;
          if (dn(ut)) {
            var Wt = "";
            xt != null && (Wt = At(xt) + "/"), Wa(ut, C, Wt, "", function(Vf) {
              return Vf;
            });
          } else
            ut != null && (Ut(ut) && (ut.key && (!Le || Le.key !== ut.key) && _n(ut.key), ut = tt(
              ut,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (ut.key && (!Le || Le.key !== ut.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                At("" + ut.key) + "/"
              ) : "") + xt
            )), C.push(ut));
          return 1;
        }
        var Bt, Gt, en = 0, vt = F === "" ? bn : F + vn;
        if (dn(h))
          for (var Li = 0; Li < h.length; Li++)
            Bt = h[Li], Gt = vt + Ft(Bt, Li), en += Wa(Bt, C, N, Gt, q);
        else {
          var Ku = at(h);
          if (typeof Ku == "function") {
            var Xo = h;
            Ku === Xo.entries && (Pt || Rt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Pt = !0);
            for (var jf = Ku.call(Xo), Ka, Ko = 0; !(Ka = jf.next()).done; )
              Bt = Ka.value, Gt = vt + Ft(Bt, Ko++), en += Wa(Bt, C, N, Gt, q);
          } else if (Ne === "object") {
            var Zo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Zo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Zo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return en;
      }
      function xa(h, C, N) {
        if (h == null)
          return h;
        var F = [], q = 0;
        return Wa(h, F, "", "", function(Ne) {
          return C.call(N, Ne, q++);
        }), F;
      }
      function al(h) {
        var C = 0;
        return xa(h, function() {
          C++;
        }), C;
      }
      function Gl(h, C, N) {
        xa(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function ju(h) {
        return xa(h, function(C) {
          return C;
        }) || [];
      }
      function ki(h) {
        if (!Ut(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function il(h) {
        var C = {
          $$typeof: pe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: he,
          _context: C
        };
        var N = !1, F = !1, q = !1;
        {
          var Ne = {
            $$typeof: pe,
            _context: C
          };
          Object.defineProperties(Ne, {
            Provider: {
              get: function() {
                return F || (F = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ae) {
                C.Provider = ae;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ae) {
                C._currentValue = ae;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ae) {
                C._currentValue2 = ae;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ae) {
                C._threadCount = ae;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ae) {
                q || (Rt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), q = !0);
              }
            }
          }), C.Consumer = Ne;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var fa = -1, ui = 0, da = 1, oi = 2;
      function _r(h) {
        if (h._status === fa) {
          var C = h._result, N = C();
          if (N.then(function(Ne) {
            if (h._status === ui || h._status === fa) {
              var ae = h;
              ae._status = da, ae._result = Ne;
            }
          }, function(Ne) {
            if (h._status === ui || h._status === fa) {
              var ae = h;
              ae._status = oi, ae._result = Ne;
            }
          }), h._status === fa) {
            var F = h;
            F._status = ui, F._result = N;
          }
        }
        if (h._status === da) {
          var q = h._result;
          return q === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, q), "default" in q || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, q), q.default;
        } else
          throw h._result;
      }
      function pa(h) {
        var C = {
          // We use these fields to store the result.
          _status: fa,
          _result: h
        }, N = {
          $$typeof: Ve,
          _payload: C,
          _init: _r
        };
        {
          var F, q;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Ne) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Ne, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Ne) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Ne, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function si(h) {
        h != null && h.$$typeof === ie ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ye("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: rt,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(F) {
              N = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === nt || h === $t || qe || h === S || h === re || h === me || Ue || h === Ct || Yt || bt || En || typeof h == "object" && h !== null && (h.$$typeof === Ve || h.$$typeof === ie || h.$$typeof === he || h.$$typeof === pe || h.$$typeof === rt || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ee(h, C) {
        Y(h) || ye("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: ie,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(q) {
              F = q, !h.name && !h.displayName && (h.displayName = q);
            }
          });
        }
        return N;
      }
      function ce() {
        var h = Qe.current;
        return h === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ge(h) {
        var C = ce();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function mt(h) {
        var C = ce();
        return C.useState(h);
      }
      function Xe(h, C, N) {
        var F = ce();
        return F.useReducer(h, C, N);
      }
      function De(h) {
        var C = ce();
        return C.useRef(h);
      }
      function Ln(h, C) {
        var N = ce();
        return N.useEffect(h, C);
      }
      function Zt(h, C) {
        var N = ce();
        return N.useInsertionEffect(h, C);
      }
      function Jt(h, C) {
        var N = ce();
        return N.useLayoutEffect(h, C);
      }
      function tr(h, C) {
        var N = ce();
        return N.useCallback(h, C);
      }
      function ci(h, C) {
        var N = ce();
        return N.useMemo(h, C);
      }
      function Vu(h, C, N) {
        var F = ce();
        return F.useImperativeHandle(h, C, N);
      }
      function Tt(h, C) {
        {
          var N = ce();
          return N.useDebugValue(h, C);
        }
      }
      function Ff() {
        var h = ce();
        return h.useTransition();
      }
      function Ga(h) {
        var C = ce();
        return C.useDeferredValue(h);
      }
      function lt() {
        var h = ce();
        return h.useId();
      }
      function fi(h, C, N) {
        var F = ce();
        return F.useSyncExternalStore(h, C, N);
      }
      var ll = 0, Pu, ul, Qr, Qo, br, Wo, Go;
      function Xs() {
      }
      Xs.__reactDisabledLog = !0;
      function Bu() {
        {
          if (ll === 0) {
            Pu = console.log, ul = console.info, Qr = console.warn, Qo = console.error, br = console.group, Wo = console.groupCollapsed, Go = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Xs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          ll++;
        }
      }
      function ol() {
        {
          if (ll--, ll === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: le({}, h, {
                value: Pu
              }),
              info: le({}, h, {
                value: ul
              }),
              warn: le({}, h, {
                value: Qr
              }),
              error: le({}, h, {
                value: Qo
              }),
              group: le({}, h, {
                value: br
              }),
              groupCollapsed: le({}, h, {
                value: Wo
              }),
              groupEnd: le({}, h, {
                value: Go
              })
            });
          }
          ll < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var qa = Nt.ReactCurrentDispatcher, kr;
      function sl(h, C, N) {
        {
          if (kr === void 0)
            try {
              throw Error();
            } catch (q) {
              var F = q.stack.trim().match(/\n( *(at )?)/);
              kr = F && F[1] || "";
            }
          return `
` + kr + h;
        }
      }
      var cl = !1, fl;
      {
        var $u = typeof WeakMap == "function" ? WeakMap : Map;
        fl = new $u();
      }
      function Yu(h, C) {
        if (!h || cl)
          return "";
        {
          var N = fl.get(h);
          if (N !== void 0)
            return N;
        }
        var F;
        cl = !0;
        var q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ne;
        Ne = qa.current, qa.current = null, Bu();
        try {
          if (C) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (vt) {
                F = vt;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (vt) {
                F = vt;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (vt) {
              F = vt;
            }
            h();
          }
        } catch (vt) {
          if (vt && F && typeof vt.stack == "string") {
            for (var Le = vt.stack.split(`
`), ut = F.stack.split(`
`), xt = Le.length - 1, Wt = ut.length - 1; xt >= 1 && Wt >= 0 && Le[xt] !== ut[Wt]; )
              Wt--;
            for (; xt >= 1 && Wt >= 0; xt--, Wt--)
              if (Le[xt] !== ut[Wt]) {
                if (xt !== 1 || Wt !== 1)
                  do
                    if (xt--, Wt--, Wt < 0 || Le[xt] !== ut[Wt]) {
                      var Bt = `
` + Le[xt].replace(" at new ", " at ");
                      return h.displayName && Bt.includes("<anonymous>") && (Bt = Bt.replace("<anonymous>", h.displayName)), typeof h == "function" && fl.set(h, Bt), Bt;
                    }
                  while (xt >= 1 && Wt >= 0);
                break;
              }
          }
        } finally {
          cl = !1, qa.current = Ne, ol(), Error.prepareStackTrace = q;
        }
        var Gt = h ? h.displayName || h.name : "", en = Gt ? sl(Gt) : "";
        return typeof h == "function" && fl.set(h, en), en;
      }
      function Di(h, C, N) {
        return Yu(h, !1);
      }
      function Hf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function di(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Yu(h, Hf(h));
        if (typeof h == "string")
          return sl(h);
        switch (h) {
          case re:
            return sl("Suspense");
          case me:
            return sl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case rt:
              return Di(h.render);
            case ie:
              return di(h.type, C, N);
            case Ve: {
              var F = h, q = F._payload, Ne = F._init;
              try {
                return di(Ne(q), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var kt = {}, Iu = Nt.ReactDebugCurrentFrame;
      function ql(h) {
        if (h) {
          var C = h._owner, N = di(h.type, h._source, C ? C.type : null);
          Iu.setExtraStackFrame(N);
        } else
          Iu.setExtraStackFrame(null);
      }
      function Qu(h, C, N, F, q) {
        {
          var Ne = Function.call.bind(vr);
          for (var ae in h)
            if (Ne(h, ae)) {
              var Le = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var ut = Error((F || "React class") + ": " + N + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ut.name = "Invariant Violation", ut;
                }
                Le = h[ae](C, ae, F, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (xt) {
                Le = xt;
              }
              Le && !(Le instanceof Error) && (ql(q), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", N, ae, typeof Le), ql(null)), Le instanceof Error && !(Le.message in kt) && (kt[Le.message] = !0, ql(q), ye("Failed %s type: %s", N, Le.message), ql(null));
            }
        }
      }
      function wt(h) {
        if (h) {
          var C = h._owner, N = di(h.type, h._source, C ? C.type : null);
          xn(N);
        } else
          xn(null);
      }
      var Wu;
      Wu = !1;
      function Gu() {
        if (it.current) {
          var h = In(it.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ye(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function Xl(h) {
        return h != null ? Ye(h.__source) : "";
      }
      var hn = {};
      function Wr(h) {
        var C = Gu();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function Dr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = Wr(C);
          if (!hn[N]) {
            hn[N] = !0;
            var F = "";
            h && h._owner && h._owner !== it.current && (F = " It was passed a child from " + In(h._owner.type) + "."), wt(h), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, F), wt(null);
          }
        }
      }
      function dl(h, C) {
        if (typeof h == "object") {
          if (dn(h))
            for (var N = 0; N < h.length; N++) {
              var F = h[N];
              Ut(F) && Dr(F, C);
            }
          else if (Ut(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var q = at(h);
            if (typeof q == "function" && q !== h.entries)
              for (var Ne = q.call(h), ae; !(ae = Ne.next()).done; )
                Ut(ae.value) && Dr(ae.value, C);
          }
        }
      }
      function Cn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === rt || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ie))
            N = C.propTypes;
          else
            return;
          if (N) {
            var F = In(C);
            Qu(N, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Wu) {
            Wu = !0;
            var q = In(C);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ht(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var F = C[N];
            if (F !== "children" && F !== "key") {
              wt(h), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), wt(null);
              break;
            }
          }
          h.ref !== null && (wt(h), ye("Invalid attribute `ref` supplied to `React.Fragment`."), wt(null));
        }
      }
      function Ks(h, C, N) {
        var F = Y(h);
        if (!F) {
          var q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = Xl(C);
          Ne ? q += Ne : q += Gu();
          var ae;
          h === null ? ae = "null" : dn(h) ? ae = "array" : h !== void 0 && h.$$typeof === Kt ? (ae = "<" + (In(h.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, q);
        }
        var Le = xe.apply(this, arguments);
        if (Le == null)
          return Le;
        if (F)
          for (var ut = 2; ut < arguments.length; ut++)
            dl(arguments[ut], h);
        return h === nt ? Ht(Le) : Cn(Le), Le;
      }
      var Gr = !1;
      function Qn(h) {
        var C = Ks.bind(null, h);
        return C.type = h, Gr || (Gr = !0, Rt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Rt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function pi(h, C, N) {
        for (var F = Lt.apply(this, arguments), q = 2; q < arguments.length; q++)
          dl(arguments[q], F.type);
        return Cn(F), F;
      }
      function Zs(h, C) {
        var N = ct.transition;
        ct.transition = {};
        var F = ct.transition;
        ct.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ct.transition = N, N === null && F._updatedFibers) {
            var q = F._updatedFibers.size;
            q > 10 && Rt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Oi = !1, pl = null;
      function Js(h) {
        if (pl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = $ && $[C];
            pl = N.call($, "timers").setImmediate;
          } catch {
            pl = function(q) {
              Oi === !1 && (Oi = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ne = new MessageChannel();
              Ne.port1.onmessage = q, Ne.port2.postMessage(void 0);
            };
          }
        return pl(h);
      }
      var _a = 0, vl = !1;
      function hl(h) {
        {
          var C = _a;
          _a++, _e.current === null && (_e.current = []);
          var N = _e.isBatchingLegacy, F;
          try {
            if (_e.isBatchingLegacy = !0, F = h(), !N && _e.didScheduleLegacyUpdate) {
              var q = _e.current;
              q !== null && (_e.didScheduleLegacyUpdate = !1, yl(q));
            }
          } catch (Gt) {
            throw ba(C), Gt;
          } finally {
            _e.isBatchingLegacy = N;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Ne = F, ae = !1, Le = {
              then: function(Gt, en) {
                ae = !0, Ne.then(function(vt) {
                  ba(C), _a === 0 ? qu(vt, Gt, en) : Gt(vt);
                }, function(vt) {
                  ba(C), en(vt);
                });
              }
            };
            return !vl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (vl = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Le;
          } else {
            var ut = F;
            if (ba(C), _a === 0) {
              var xt = _e.current;
              xt !== null && (yl(xt), _e.current = null);
              var Wt = {
                then: function(Gt, en) {
                  _e.current === null ? (_e.current = [], qu(ut, Gt, en)) : Gt(ut);
                }
              };
              return Wt;
            } else {
              var Bt = {
                then: function(Gt, en) {
                  Gt(ut);
                }
              };
              return Bt;
            }
          }
        }
      }
      function ba(h) {
        h !== _a - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), _a = h;
      }
      function qu(h, C, N) {
        {
          var F = _e.current;
          if (F !== null)
            try {
              yl(F), Js(function() {
                F.length === 0 ? (_e.current = null, C(h)) : qu(h, C, N);
              });
            } catch (q) {
              N(q);
            }
          else
            C(h);
        }
      }
      var ml = !1;
      function yl(h) {
        if (!ml) {
          ml = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            ml = !1;
          }
        }
      }
      var Kl = Ks, Xu = pi, qo = Qn, Xa = {
        map: xa,
        forEach: Gl,
        count: al,
        toArray: ju,
        only: ki
      };
      X.Children = Xa, X.Component = Fe, X.Fragment = nt, X.Profiler = $t, X.PureComponent = zt, X.StrictMode = S, X.Suspense = re, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nt, X.cloneElement = Xu, X.createContext = il, X.createElement = Kl, X.createFactory = qo, X.createRef = pr, X.forwardRef = si, X.isValidElement = Ut, X.lazy = pa, X.memo = ee, X.startTransition = Zs, X.unstable_act = hl, X.useCallback = tr, X.useContext = Ge, X.useDebugValue = Tt, X.useDeferredValue = Ga, X.useEffect = Ln, X.useId = lt, X.useImperativeHandle = Vu, X.useInsertionEffect = Zt, X.useLayoutEffect = Jt, X.useMemo = ci, X.useReducer = Xe, X.useRef = De, X.useState = mt, X.useSyncExternalStore = fi, X.useTransition = Ff, X.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Gb, Xp)), Xp;
}
(function($) {
  process.env.NODE_ENV === "production" ? $.exports = Wb() : $.exports = qb();
})(Qb);
const Xb = /* @__PURE__ */ Ib(Hu);
var qp = {}, d0 = {}, Kb = {
  get exports() {
    return d0;
  },
  set exports($) {
    d0 = $;
  }
}, Ia = {}, Fm = {}, Zb = {
  get exports() {
    return Fm;
  },
  set exports($) {
    Fm = $;
  }
}, c0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q1;
function Jb() {
  return q1 || (q1 = 1, function($) {
    function X(Z, we) {
      var T = Z.length;
      Z.push(we);
      e:
        for (; 0 < T; ) {
          var B = T - 1 >>> 1, le = Z[B];
          if (0 < on(le, we))
            Z[B] = we, Z[T] = le, T = B;
          else
            break e;
        }
    }
    function A(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function Kt(Z) {
      if (Z.length === 0)
        return null;
      var we = Z[0], T = Z.pop();
      if (T !== we) {
        Z[0] = T;
        e:
          for (var B = 0, le = Z.length, $e = le >>> 1; B < $e; ) {
            var Fe = 2 * (B + 1) - 1, ht = Z[Fe], Je = Fe + 1, ft = Z[Je];
            if (0 > on(ht, T))
              Je < le && 0 > on(ft, ht) ? (Z[B] = ft, Z[Je] = T, B = Je) : (Z[B] = ht, Z[Fe] = T, B = Fe);
            else if (Je < le && 0 > on(ft, T))
              Z[B] = ft, Z[Je] = T, B = Je;
            else
              break e;
          }
      }
      return we;
    }
    function on(Z, we) {
      var T = Z.sortIndex - we.sortIndex;
      return T !== 0 ? T : Z.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var nt = performance;
      $.unstable_now = function() {
        return nt.now();
      };
    } else {
      var S = Date, $t = S.now();
      $.unstable_now = function() {
        return S.now() - $t;
      };
    }
    var he = [], pe = [], rt = 1, re = null, me = 3, ie = !1, Ve = !1, Ct = !1, st = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(Z) {
      for (var we = A(pe); we !== null; ) {
        if (we.callback === null)
          Kt(pe);
        else if (we.startTime <= Z)
          Kt(pe), we.sortIndex = we.expirationTime, X(he, we);
        else
          break;
        we = A(pe);
      }
    }
    function ct(Z) {
      if (Ct = !1, Qe(Z), !Ve)
        if (A(he) !== null)
          Ve = !0, Rt(_e);
        else {
          var we = A(pe);
          we !== null && ye(ct, we.startTime - Z);
        }
    }
    function _e(Z, we) {
      Ve = !1, Ct && (Ct = !1, fn(tn), tn = -1), ie = !0;
      var T = me;
      try {
        for (Qe(we), re = A(he); re !== null && (!(re.expirationTime > we) || Z && !bt()); ) {
          var B = re.callback;
          if (typeof B == "function") {
            re.callback = null, me = re.priorityLevel;
            var le = B(re.expirationTime <= we);
            we = $.unstable_now(), typeof le == "function" ? re.callback = le : re === A(he) && Kt(he), Qe(we);
          } else
            Kt(he);
          re = A(he);
        }
        if (re !== null)
          var $e = !0;
        else {
          var Fe = A(pe);
          Fe !== null && ye(ct, Fe.startTime - we), $e = !1;
        }
        return $e;
      } finally {
        re = null, me = T, ie = !1;
      }
    }
    var it = !1, He = null, tn = -1, xn = 5, Yt = -1;
    function bt() {
      return !($.unstable_now() - Yt < xn);
    }
    function En() {
      if (He !== null) {
        var Z = $.unstable_now();
        Yt = Z;
        var we = !0;
        try {
          we = He(!0, Z);
        } finally {
          we ? Ue() : (it = !1, He = null);
        }
      } else
        it = !1;
    }
    var Ue;
    if (typeof at == "function")
      Ue = function() {
        at(En);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), Nt = qe.port2;
      qe.port1.onmessage = En, Ue = function() {
        Nt.postMessage(null);
      };
    } else
      Ue = function() {
        st(En, 0);
      };
    function Rt(Z) {
      He = Z, it || (it = !0, Ue());
    }
    function ye(Z, we) {
      tn = st(function() {
        Z($.unstable_now());
      }, we);
    }
    $.unstable_IdlePriority = 5, $.unstable_ImmediatePriority = 1, $.unstable_LowPriority = 4, $.unstable_NormalPriority = 3, $.unstable_Profiling = null, $.unstable_UserBlockingPriority = 2, $.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, $.unstable_continueExecution = function() {
      Ve || ie || (Ve = !0, Rt(_e));
    }, $.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xn = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, $.unstable_getCurrentPriorityLevel = function() {
      return me;
    }, $.unstable_getFirstCallbackNode = function() {
      return A(he);
    }, $.unstable_next = function(Z) {
      switch (me) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = me;
      }
      var T = me;
      me = we;
      try {
        return Z();
      } finally {
        me = T;
      }
    }, $.unstable_pauseExecution = function() {
    }, $.unstable_requestPaint = function() {
    }, $.unstable_runWithPriority = function(Z, we) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var T = me;
      me = Z;
      try {
        return we();
      } finally {
        me = T;
      }
    }, $.unstable_scheduleCallback = function(Z, we, T) {
      var B = $.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? B + T : B) : T = B, Z) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return le = T + le, Z = { id: rt++, callback: we, priorityLevel: Z, startTime: T, expirationTime: le, sortIndex: -1 }, T > B ? (Z.sortIndex = T, X(pe, Z), A(he) === null && Z === A(pe) && (Ct ? (fn(tn), tn = -1) : Ct = !0, ye(ct, T - B))) : (Z.sortIndex = le, X(he, Z), Ve || ie || (Ve = !0, Rt(_e))), Z;
    }, $.unstable_shouldYield = bt, $.unstable_wrapCallback = function(Z) {
      var we = me;
      return function() {
        var T = me;
        me = we;
        try {
          return Z.apply(this, arguments);
        } finally {
          me = T;
        }
      };
    };
  }(c0)), c0;
}
var f0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1;
function ek() {
  return X1 || (X1 = 1, function($) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var X = !1, A = !1, Kt = 5;
      function on(J, xe) {
        var tt = J.length;
        J.push(xe), $t(J, xe, tt);
      }
      function nt(J) {
        return J.length === 0 ? null : J[0];
      }
      function S(J) {
        if (J.length === 0)
          return null;
        var xe = J[0], tt = J.pop();
        return tt !== xe && (J[0] = tt, he(J, tt, 0)), xe;
      }
      function $t(J, xe, tt) {
        for (var Lt = tt; Lt > 0; ) {
          var Ut = Lt - 1 >>> 1, bn = J[Ut];
          if (pe(bn, xe) > 0)
            J[Ut] = xe, J[Lt] = bn, Lt = Ut;
          else
            return;
        }
      }
      function he(J, xe, tt) {
        for (var Lt = tt, Ut = J.length, bn = Ut >>> 1; Lt < bn; ) {
          var vn = (Lt + 1) * 2 - 1, mr = J[vn], Pt = vn + 1, xr = J[Pt];
          if (pe(mr, xe) < 0)
            Pt < Ut && pe(xr, mr) < 0 ? (J[Lt] = xr, J[Pt] = xe, Lt = Pt) : (J[Lt] = mr, J[vn] = xe, Lt = vn);
          else if (Pt < Ut && pe(xr, xe) < 0)
            J[Lt] = xr, J[Pt] = xe, Lt = Pt;
          else
            return;
        }
      }
      function pe(J, xe) {
        var tt = J.sortIndex - xe.sortIndex;
        return tt !== 0 ? tt : J.id - xe.id;
      }
      var rt = 1, re = 2, me = 3, ie = 4, Ve = 5;
      function Ct(J, xe) {
      }
      var st = typeof performance == "object" && typeof performance.now == "function";
      if (st) {
        var fn = performance;
        $.unstable_now = function() {
          return fn.now();
        };
      } else {
        var at = Date, Qe = at.now();
        $.unstable_now = function() {
          return at.now() - Qe;
        };
      }
      var ct = 1073741823, _e = -1, it = 250, He = 5e3, tn = 1e4, xn = ct, Yt = [], bt = [], En = 1, Ue = null, qe = me, Nt = !1, Rt = !1, ye = !1, Z = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(J) {
        for (var xe = nt(bt); xe !== null; ) {
          if (xe.callback === null)
            S(bt);
          else if (xe.startTime <= J)
            S(bt), xe.sortIndex = xe.expirationTime, on(Yt, xe);
          else
            return;
          xe = nt(bt);
        }
      }
      function le(J) {
        if (ye = !1, B(J), !Rt)
          if (nt(Yt) !== null)
            Rt = !0, Ir($e);
          else {
            var xe = nt(bt);
            xe !== null && pn(le, xe.startTime - J);
          }
      }
      function $e(J, xe) {
        Rt = !1, ye && (ye = !1, wr()), Nt = !0;
        var tt = qe;
        try {
          var Lt;
          if (!A)
            return Fe(J, xe);
        } finally {
          Ue = null, qe = tt, Nt = !1;
        }
      }
      function Fe(J, xe) {
        var tt = xe;
        for (B(tt), Ue = nt(Yt); Ue !== null && !X && !(Ue.expirationTime > tt && (!J || $r())); ) {
          var Lt = Ue.callback;
          if (typeof Lt == "function") {
            Ue.callback = null, qe = Ue.priorityLevel;
            var Ut = Ue.expirationTime <= tt, bn = Lt(Ut);
            tt = $.unstable_now(), typeof bn == "function" ? Ue.callback = bn : Ue === nt(Yt) && S(Yt), B(tt);
          } else
            S(Yt);
          Ue = nt(Yt);
        }
        if (Ue !== null)
          return !0;
        var vn = nt(bt);
        return vn !== null && pn(le, vn.startTime - tt), !1;
      }
      function ht(J, xe) {
        switch (J) {
          case rt:
          case re:
          case me:
          case ie:
          case Ve:
            break;
          default:
            J = me;
        }
        var tt = qe;
        qe = J;
        try {
          return xe();
        } finally {
          qe = tt;
        }
      }
      function Je(J) {
        var xe;
        switch (qe) {
          case rt:
          case re:
          case me:
            xe = me;
            break;
          default:
            xe = qe;
            break;
        }
        var tt = qe;
        qe = xe;
        try {
          return J();
        } finally {
          qe = tt;
        }
      }
      function ft(J) {
        var xe = qe;
        return function() {
          var tt = qe;
          qe = xe;
          try {
            return J.apply(this, arguments);
          } finally {
            qe = tt;
          }
        };
      }
      function et(J, xe, tt) {
        var Lt = $.unstable_now(), Ut;
        if (typeof tt == "object" && tt !== null) {
          var bn = tt.delay;
          typeof bn == "number" && bn > 0 ? Ut = Lt + bn : Ut = Lt;
        } else
          Ut = Lt;
        var vn;
        switch (J) {
          case rt:
            vn = _e;
            break;
          case re:
            vn = it;
            break;
          case Ve:
            vn = xn;
            break;
          case ie:
            vn = tn;
            break;
          case me:
          default:
            vn = He;
            break;
        }
        var mr = Ut + vn, Pt = {
          id: En++,
          callback: xe,
          priorityLevel: J,
          startTime: Ut,
          expirationTime: mr,
          sortIndex: -1
        };
        return Ut > Lt ? (Pt.sortIndex = Ut, on(bt, Pt), nt(Yt) === null && Pt === nt(bt) && (ye ? wr() : ye = !0, pn(le, Ut - Lt))) : (Pt.sortIndex = mr, on(Yt, Pt), !Rt && !Nt && (Rt = !0, Ir($e))), Pt;
      }
      function zt() {
      }
      function Vr() {
        !Rt && !Nt && (Rt = !0, Ir($e));
      }
      function pr() {
        return nt(Yt);
      }
      function Pr(J) {
        J.callback = null;
      }
      function dn() {
        return qe;
      }
      var Yn = !1, An = null, Fn = -1, _n = Kt, Br = -1;
      function $r() {
        var J = $.unstable_now() - Br;
        return !(J < _n);
      }
      function In() {
      }
      function vr(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? _n = Math.floor(1e3 / J) : _n = Kt;
      }
      var Yr = function() {
        if (An !== null) {
          var J = $.unstable_now();
          Br = J;
          var xe = !0, tt = !0;
          try {
            tt = An(xe, J);
          } finally {
            tt ? hr() : (Yn = !1, An = null);
          }
        } else
          Yn = !1;
      }, hr;
      if (typeof T == "function")
        hr = function() {
          T(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var sa = new MessageChannel(), er = sa.port2;
        sa.port1.onmessage = Yr, hr = function() {
          er.postMessage(null);
        };
      } else
        hr = function() {
          Z(Yr, 0);
        };
      function Ir(J) {
        An = J, Yn || (Yn = !0, hr());
      }
      function pn(J, xe) {
        Fn = Z(function() {
          J($.unstable_now());
        }, xe);
      }
      function wr() {
        we(Fn), Fn = -1;
      }
      var li = In, ca = null;
      $.unstable_IdlePriority = Ve, $.unstable_ImmediatePriority = rt, $.unstable_LowPriority = ie, $.unstable_NormalPriority = me, $.unstable_Profiling = ca, $.unstable_UserBlockingPriority = re, $.unstable_cancelCallback = Pr, $.unstable_continueExecution = Vr, $.unstable_forceFrameRate = vr, $.unstable_getCurrentPriorityLevel = dn, $.unstable_getFirstCallbackNode = pr, $.unstable_next = Je, $.unstable_pauseExecution = zt, $.unstable_requestPaint = li, $.unstable_runWithPriority = ht, $.unstable_scheduleCallback = et, $.unstable_shouldYield = $r, $.unstable_wrapCallback = ft, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(f0)), f0;
}
var K1;
function nR() {
  return K1 || (K1 = 1, function($) {
    process.env.NODE_ENV === "production" ? $.exports = Jb() : $.exports = ek();
  }(Zb)), Fm;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z1;
function tk() {
  if (Z1)
    return Ia;
  Z1 = 1;
  var $ = Hu, X = nR();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Kt = /* @__PURE__ */ new Set(), on = {};
  function nt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (on[n] = r, n = 0; n < r.length; n++)
      Kt.add(r[n]);
  }
  var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), he = Object.prototype.hasOwnProperty, pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, rt = {}, re = {};
  function me(n) {
    return he.call(re, n) ? !0 : he.call(rt, n) ? !1 : pe.test(n) ? re[n] = !0 : (rt[n] = !0, !1);
  }
  function ie(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ve(n, r, l, o) {
    if (r === null || typeof r > "u" || ie(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Ct(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var st = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    st[n] = new Ct(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    st[r] = new Ct(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    st[n] = new Ct(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    st[n] = new Ct(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    st[n] = new Ct(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    st[n] = new Ct(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    st[n] = new Ct(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    st[n] = new Ct(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    st[n] = new Ct(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function at(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      at
    );
    st[r] = new Ct(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, at);
    st[r] = new Ct(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, at);
    st[r] = new Ct(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    st[n] = new Ct(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), st.xlinkHref = new Ct("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    st[n] = new Ct(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Qe(n, r, l, o) {
    var c = st.hasOwnProperty(r) ? st[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ve(r, l, c, o) && (l = null), o || c === null ? me(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ct = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _e = Symbol.for("react.element"), it = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), tn = Symbol.for("react.strict_mode"), xn = Symbol.for("react.profiler"), Yt = Symbol.for("react.provider"), bt = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), Nt = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, B;
  function le(n) {
    if (B === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        B = r && r[1] || "";
      }
    return `
` + B + n;
  }
  var $e = !1;
  function Fe(n, r) {
    if (!n || $e)
      return "";
    $e = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (U) {
            var o = U;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (U) {
            o = U;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var w = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      $e = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? le(n) : "";
  }
  function ht(n) {
    switch (n.tag) {
      case 5:
        return le(n.type);
      case 16:
        return le("Lazy");
      case 13:
        return le("Suspense");
      case 19:
        return le("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Fe(n.type, !1), n;
      case 11:
        return n = Fe(n.type.render, !1), n;
      case 1:
        return n = Fe(n.type, !0), n;
      default:
        return "";
    }
  }
  function Je(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case He:
        return "Fragment";
      case it:
        return "Portal";
      case xn:
        return "Profiler";
      case tn:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case bt:
          return (n.displayName || "Context") + ".Consumer";
        case Yt:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Nt:
          return r = n.displayName || null, r !== null ? r : Je(n.type) || "Memo";
        case Rt:
          r = n._payload, n = n._init;
          try {
            return Je(n(r));
          } catch {
          }
      }
    return null;
  }
  function ft(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Je(r);
      case 8:
        return r === tn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function zt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vr(n) {
    var r = zt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function pr(n) {
    n._valueTracker || (n._valueTracker = Vr(n));
  }
  function Pr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = zt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function dn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Yn(n, r) {
    var l = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function An(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = et(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Fn(n, r) {
    r = r.checked, r != null && Qe(n, "checked", r, !1);
  }
  function _n(n, r) {
    Fn(n, r);
    var l = et(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? $r(n, r.type, l) : r.hasOwnProperty("defaultValue") && $r(n, r.type, et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Br(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function $r(n, r, l) {
    (r !== "number" || dn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var In = Array.isArray;
  function vr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + et(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(A(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function hr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(A(92));
        if (In(l)) {
          if (1 < l.length)
            throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: et(l) };
  }
  function sa(n, r) {
    var l = et(r.value), o = et(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function er(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ir(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ir(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var wr, li = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (wr = wr || document.createElement("div"), wr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = wr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ca(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var J = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, xe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(n) {
    xe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), J[r] = J[n];
    });
  });
  function tt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || J.hasOwnProperty(n) && J[n] ? ("" + r).trim() : r + "px";
  }
  function Lt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = tt(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Ut = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function bn(n, r) {
    if (r) {
      if (Ut[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(A(62));
    }
  }
  function vn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mr = null;
  function Pt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var xr = null, At = null, Ft = null;
  function Wa(n) {
    if (n = ss(n)) {
      if (typeof xr != "function")
        throw Error(A(280));
      var r = n.stateNode;
      r && (r = ke(r), xr(n.stateNode, n.type, r));
    }
  }
  function xa(n) {
    At ? Ft ? Ft.push(n) : Ft = [n] : At = n;
  }
  function al() {
    if (At) {
      var n = At, r = Ft;
      if (Ft = At = null, Wa(n), r)
        for (n = 0; n < r.length; n++)
          Wa(r[n]);
    }
  }
  function Gl(n, r) {
    return n(r);
  }
  function ju() {
  }
  var ki = !1;
  function il(n, r, l) {
    if (ki)
      return n(r, l);
    ki = !0;
    try {
      return Gl(n, r, l);
    } finally {
      ki = !1, (At !== null || Ft !== null) && (ju(), al());
    }
  }
  function fa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = ke(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(A(231, r, typeof l));
    return l;
  }
  var ui = !1;
  if ($t)
    try {
      var da = {};
      Object.defineProperty(da, "passive", { get: function() {
        ui = !0;
      } }), window.addEventListener("test", da, da), window.removeEventListener("test", da, da);
    } catch {
      ui = !1;
    }
  function oi(n, r, l, o, c, d, m, E, w) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var _r = !1, pa = null, si = !1, R = null, Y = { onError: function(n) {
    _r = !0, pa = n;
  } };
  function ee(n, r, l, o, c, d, m, E, w) {
    _r = !1, pa = null, oi.apply(Y, arguments);
  }
  function ce(n, r, l, o, c, d, m, E, w) {
    if (ee.apply(this, arguments), _r) {
      if (_r) {
        var U = pa;
        _r = !1, pa = null;
      } else
        throw Error(A(198));
      si || (si = !0, R = U);
    }
  }
  function Ge(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Xe(n) {
    if (Ge(n) !== n)
      throw Error(A(188));
  }
  function De(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ge(n), r === null)
        throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Xe(c), n;
          if (d === o)
            return Xe(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(A(189));
        }
      }
      if (l.alternate !== o)
        throw Error(A(190));
    }
    if (l.tag !== 3)
      throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ln(n) {
    return n = De(n), n !== null ? Zt(n) : null;
  }
  function Zt(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Zt(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Jt = X.unstable_scheduleCallback, tr = X.unstable_cancelCallback, ci = X.unstable_shouldYield, Vu = X.unstable_requestPaint, Tt = X.unstable_now, Ff = X.unstable_getCurrentPriorityLevel, Ga = X.unstable_ImmediatePriority, lt = X.unstable_UserBlockingPriority, fi = X.unstable_NormalPriority, ll = X.unstable_LowPriority, Pu = X.unstable_IdlePriority, ul = null, Qr = null;
  function Qo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function")
      try {
        Qr.onCommitFiberRoot(ul, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var br = Math.clz32 ? Math.clz32 : Xs, Wo = Math.log, Go = Math.LN2;
  function Xs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Wo(n) / Go | 0) | 0;
  }
  var Bu = 64, ol = 4194304;
  function qa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function kr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = qa(E) : (d &= m, d !== 0 && (o = qa(d)));
    } else
      m = l & ~c, m !== 0 ? o = qa(m) : d !== 0 && (o = qa(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - br(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function sl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function cl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - br(d), E = 1 << m, w = c[m];
      w === -1 ? (!(E & l) || E & o) && (c[m] = sl(E, r)) : w <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function fl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function $u() {
    var n = Bu;
    return Bu <<= 1, !(Bu & 4194240) && (Bu = 64), n;
  }
  function Yu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Di(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - br(r), n[r] = l;
  }
  function Hf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - br(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function di(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - br(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var kt = 0;
  function Iu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ql, Qu, wt, Wu, Gu, Ye = !1, Xl = [], hn = null, Wr = null, Dr = null, dl = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Ht = [], Ks = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wr = null;
        break;
      case "mouseover":
      case "mouseout":
        Dr = null;
        break;
      case "pointerover":
      case "pointerout":
        dl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function Qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ss(r), r !== null && Qu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function pi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return hn = Qn(hn, n, r, l, o, c), !0;
      case "dragenter":
        return Wr = Qn(Wr, n, r, l, o, c), !0;
      case "mouseover":
        return Dr = Qn(Dr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return dl.set(d, Qn(dl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, Qn(Cn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Zs(n) {
    var r = Da(n.target);
    if (r !== null) {
      var l = Ge(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = mt(l), r !== null) {
            n.blockedOn = r, Gu(n.priority, function() {
              wt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Oi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Xu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        mr = o, l.target.dispatchEvent(o), mr = null;
      } else
        return r = ss(l), r !== null && Qu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function pl(n, r, l) {
    Oi(n) && l.delete(r);
  }
  function Js() {
    Ye = !1, hn !== null && Oi(hn) && (hn = null), Wr !== null && Oi(Wr) && (Wr = null), Dr !== null && Oi(Dr) && (Dr = null), dl.forEach(pl), Cn.forEach(pl);
  }
  function _a(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ye || (Ye = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, Js)));
  }
  function vl(n) {
    function r(c) {
      return _a(c, n);
    }
    if (0 < Xl.length) {
      _a(Xl[0], n);
      for (var l = 1; l < Xl.length; l++) {
        var o = Xl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (hn !== null && _a(hn, n), Wr !== null && _a(Wr, n), Dr !== null && _a(Dr, n), dl.forEach(r), Cn.forEach(r), l = 0; l < Ht.length; l++)
      o = Ht[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ht.length && (l = Ht[0], l.blockedOn === null); )
      Zs(l), l.blockedOn === null && Ht.shift();
  }
  var hl = ct.ReactCurrentBatchConfig, ba = !0;
  function qu(n, r, l, o) {
    var c = kt, d = hl.transition;
    hl.transition = null;
    try {
      kt = 1, yl(n, r, l, o);
    } finally {
      kt = c, hl.transition = d;
    }
  }
  function ml(n, r, l, o) {
    var c = kt, d = hl.transition;
    hl.transition = null;
    try {
      kt = 4, yl(n, r, l, o);
    } finally {
      kt = c, hl.transition = d;
    }
  }
  function yl(n, r, l, o) {
    if (ba) {
      var c = Xu(n, r, l, o);
      if (c === null)
        oc(n, r, o, Kl, l), Gr(n, o);
      else if (pi(c, n, r, l, o))
        o.stopPropagation();
      else if (Gr(n, o), r & 4 && -1 < Ks.indexOf(n)) {
        for (; c !== null; ) {
          var d = ss(c);
          if (d !== null && ql(d), d = Xu(n, r, l, o), d === null && oc(n, r, o, Kl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        oc(n, r, o, null, l);
    }
  }
  var Kl = null;
  function Xu(n, r, l, o) {
    if (Kl = null, n = Pt(o), n = Da(n), n !== null)
      if (r = Ge(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = mt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Kl = n, null;
  }
  function qo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ff()) {
          case Ga:
            return 1;
          case lt:
            return 4;
          case fi:
          case ll:
            return 16;
          case Pu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xa = null, h = null, C = null;
  function N() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in Xa ? Xa.value : Xa.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function q() {
    return !0;
  }
  function Ne() {
    return !1;
  }
  function ae(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? q : Ne, this.isPropagationStopped = Ne, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = q);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = q);
    }, persist: function() {
    }, isPersistent: q }), r;
  }
  var Le = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ut = ae(Le), xt = T({}, Le, { view: 0, detail: 0 }), Wt = ae(xt), Bt, Gt, en, vt = T({}, xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $f, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== en && (en && n.type === "mousemove" ? (Bt = n.screenX - en.screenX, Gt = n.screenY - en.screenY) : Gt = Bt = 0, en = n), Bt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Gt;
  } }), Li = ae(vt), Ku = T({}, vt, { dataTransfer: 0 }), Xo = ae(Ku), jf = T({}, xt, { relatedTarget: 0 }), Ka = ae(jf), Ko = T({}, Le, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Zo = ae(Ko), Vf = T({}, Le, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), jm = ae(Vf), Vm = T({}, Le, { data: 0 }), Pf = ae(Vm), Bf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Kp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Jp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Zp[n]) ? !!r[n] : !1;
  }
  function $f() {
    return Jp;
  }
  var Mi = T({}, xt, { key: function(n) {
    if (n.key) {
      var r = Bf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Kp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $f, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Pm = ae(Mi), Yf = T({}, vt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ec = ae(Yf), If = T({}, xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $f }), Bm = ae(If), tc = T({}, Le, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ev = ae(tc), qr = T({}, vt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ni = ae(qr), Mn = [9, 13, 27, 32], Za = $t && "CompositionEvent" in window, Zl = null;
  $t && "documentMode" in document && (Zl = document.documentMode);
  var nc = $t && "TextEvent" in window && !Zl, tv = $t && (!Za || Zl && 8 < Zl && 11 >= Zl), Zu = String.fromCharCode(32), nv = !1;
  function rv(n, r) {
    switch (n) {
      case "keyup":
        return Mn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Ju = !1;
  function $m(n, r) {
    switch (n) {
      case "compositionend":
        return rc(r);
      case "keypress":
        return r.which !== 32 ? null : (nv = !0, Zu);
      case "textInput":
        return n = r.data, n === Zu && nv ? null : n;
      default:
        return null;
    }
  }
  function Ym(n, r) {
    if (Ju)
      return n === "compositionend" || !Za && rv(n, r) ? (n = N(), C = h = Xa = null, Ju = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return tv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var av = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function iv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!av[n.type] : r === "textarea";
  }
  function lv(n, r, l, o) {
    xa(o), r = ls(r, "onChange"), 0 < r.length && (l = new ut("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Jo = null, eo = null;
  function to(n) {
    uc(n, 0);
  }
  function no(n) {
    var r = ao(n);
    if (Pr(r))
      return n;
  }
  function uv(n, r) {
    if (n === "change")
      return r;
  }
  var Qf = !1;
  if ($t) {
    var Wf;
    if ($t) {
      var Gf = "oninput" in document;
      if (!Gf) {
        var ov = document.createElement("div");
        ov.setAttribute("oninput", "return;"), Gf = typeof ov.oninput == "function";
      }
      Wf = Gf;
    } else
      Wf = !1;
    Qf = Wf && (!document.documentMode || 9 < document.documentMode);
  }
  function sv() {
    Jo && (Jo.detachEvent("onpropertychange", cv), eo = Jo = null);
  }
  function cv(n) {
    if (n.propertyName === "value" && no(eo)) {
      var r = [];
      lv(r, eo, n, Pt(n)), il(to, r);
    }
  }
  function Im(n, r, l) {
    n === "focusin" ? (sv(), Jo = r, eo = l, Jo.attachEvent("onpropertychange", cv)) : n === "focusout" && sv();
  }
  function Qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return no(eo);
  }
  function Wm(n, r) {
    if (n === "click")
      return no(r);
  }
  function fv(n, r) {
    if (n === "input" || n === "change")
      return no(r);
  }
  function Gm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ka = typeof Object.is == "function" ? Object.is : Gm;
  function es(n, r) {
    if (ka(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!he.call(r, c) || !ka(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function dv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function pv(n, r) {
    var l = dv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = dv(l);
    }
  }
  function vv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ac() {
    for (var n = window, r = dn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = dn(n.document);
    }
    return r;
  }
  function zi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ic(n) {
    var r = ac(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vv(l.ownerDocument.documentElement, l)) {
      if (o !== null && zi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = pv(l, d);
          var m = pv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var hv = $t && "documentMode" in document && 11 >= document.documentMode, Ja = null, qf = null, ts = null, Xf = !1;
  function mv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Xf || Ja == null || Ja !== dn(o) || (o = Ja, "selectionStart" in o && zi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ts && es(ts, o) || (ts = o, o = ls(qf, "onSelect"), 0 < o.length && (r = new ut("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ja)));
  }
  function lc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Jl = { animationend: lc("Animation", "AnimationEnd"), animationiteration: lc("Animation", "AnimationIteration"), animationstart: lc("Animation", "AnimationStart"), transitionend: lc("Transition", "TransitionEnd") }, Kf = {}, Zf = {};
  $t && (Zf = document.createElement("div").style, "AnimationEvent" in window || (delete Jl.animationend.animation, delete Jl.animationiteration.animation, delete Jl.animationstart.animation), "TransitionEvent" in window || delete Jl.transitionend.transition);
  function Wn(n) {
    if (Kf[n])
      return Kf[n];
    if (!Jl[n])
      return n;
    var r = Jl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Zf)
        return Kf[n] = r[l];
    return n;
  }
  var Jf = Wn("animationend"), yv = Wn("animationiteration"), gv = Wn("animationstart"), Sv = Wn("transitionend"), Ev = /* @__PURE__ */ new Map(), Cv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ui(n, r) {
    Ev.set(n, r), nt(r, [n]);
  }
  for (var ns = 0; ns < Cv.length; ns++) {
    var eu = Cv[ns], qm = eu.toLowerCase(), rs = eu[0].toUpperCase() + eu.slice(1);
    Ui(qm, "on" + rs);
  }
  Ui(Jf, "onAnimationEnd"), Ui(yv, "onAnimationIteration"), Ui(gv, "onAnimationStart"), Ui("dblclick", "onDoubleClick"), Ui("focusin", "onFocus"), Ui("focusout", "onBlur"), Ui(Sv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), nt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), nt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), nt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), nt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), nt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), nt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function Rv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ce(o, r, void 0, n), n.currentTarget = null;
  }
  function uc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], w = E.instance, U = E.currentTarget;
            if (E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            Rv(c, E, U), d = w;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], w = E.instance, U = E.currentTarget, E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            Rv(c, E, U), d = w;
          }
      }
    }
    if (si)
      throw n = R, si = !1, R = null, n;
  }
  function qt(n, r) {
    var l = r[ld];
    l === void 0 && (l = r[ld] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Tv(r, n, 2, !1), l.add(o));
  }
  function gl(n, r, l) {
    var o = 0;
    r && (o |= 4), Tv(l, n, o, r);
  }
  var Ai = "_reactListening" + Math.random().toString(36).slice(2);
  function ro(n) {
    if (!n[Ai]) {
      n[Ai] = !0, Kt.forEach(function(l) {
        l !== "selectionchange" && (Xm.has(l) || gl(l, !1, n), gl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ai] || (r[Ai] = !0, gl("selectionchange", !1, r));
    }
  }
  function Tv(n, r, l, o) {
    switch (qo(r)) {
      case 1:
        var c = qu;
        break;
      case 4:
        c = ml;
        break;
      default:
        c = yl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ui || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function oc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var w = m.tag;
                if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = Da(E), m === null)
                return;
              if (w = m.tag, w === 5 || w === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    il(function() {
      var U = d, Q = Pt(l), W = [];
      e: {
        var I = Ev.get(n);
        if (I !== void 0) {
          var oe = ut, ge = n;
          switch (n) {
            case "keypress":
              if (F(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              oe = Pm;
              break;
            case "focusin":
              ge = "focus", oe = Ka;
              break;
            case "focusout":
              ge = "blur", oe = Ka;
              break;
            case "beforeblur":
            case "afterblur":
              oe = Ka;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              oe = Li;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              oe = Xo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              oe = Bm;
              break;
            case Jf:
            case yv:
            case gv:
              oe = Zo;
              break;
            case Sv:
              oe = ev;
              break;
            case "scroll":
              oe = Wt;
              break;
            case "wheel":
              oe = Ni;
              break;
            case "copy":
            case "cut":
            case "paste":
              oe = jm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              oe = ec;
          }
          var Ce = (r & 4) !== 0, Dn = !Ce && n === "scroll", k = Ce ? I !== null ? I + "Capture" : null : I;
          Ce = [];
          for (var _ = U, L; _ !== null; ) {
            L = _;
            var K = L.stateNode;
            if (L.tag === 5 && K !== null && (L = K, k !== null && (K = fa(_, k), K != null && Ce.push(is(_, K, L)))), Dn)
              break;
            _ = _.return;
          }
          0 < Ce.length && (I = new oe(I, ge, null, l, Q), W.push({ event: I, listeners: Ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", oe = n === "mouseout" || n === "pointerout", I && l !== mr && (ge = l.relatedTarget || l.fromElement) && (Da(ge) || ge[Fi]))
            break e;
          if ((oe || I) && (I = Q.window === Q ? Q : (I = Q.ownerDocument) ? I.defaultView || I.parentWindow : window, oe ? (ge = l.relatedTarget || l.toElement, oe = U, ge = ge ? Da(ge) : null, ge !== null && (Dn = Ge(ge), ge !== Dn || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (oe = null, ge = U), oe !== ge)) {
            if (Ce = Li, K = "onMouseLeave", k = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = ec, K = "onPointerLeave", k = "onPointerEnter", _ = "pointer"), Dn = oe == null ? I : ao(oe), L = ge == null ? I : ao(ge), I = new Ce(K, _ + "leave", oe, l, Q), I.target = Dn, I.relatedTarget = L, K = null, Da(Q) === U && (Ce = new Ce(k, _ + "enter", ge, l, Q), Ce.target = L, Ce.relatedTarget = Dn, K = Ce), Dn = K, oe && ge)
              t: {
                for (Ce = oe, k = ge, _ = 0, L = Ce; L; L = tu(L))
                  _++;
                for (L = 0, K = k; K; K = tu(K))
                  L++;
                for (; 0 < _ - L; )
                  Ce = tu(Ce), _--;
                for (; 0 < L - _; )
                  k = tu(k), L--;
                for (; _--; ) {
                  if (Ce === k || k !== null && Ce === k.alternate)
                    break t;
                  Ce = tu(Ce), k = tu(k);
                }
                Ce = null;
              }
            else
              Ce = null;
            oe !== null && ed(W, I, oe, Ce, !1), ge !== null && Dn !== null && ed(W, Dn, ge, Ce, !0);
          }
        }
        e: {
          if (I = U ? ao(U) : window, oe = I.nodeName && I.nodeName.toLowerCase(), oe === "select" || oe === "input" && I.type === "file")
            var Re = uv;
          else if (iv(I))
            if (Qf)
              Re = fv;
            else {
              Re = Qm;
              var Se = Im;
            }
          else
            (oe = I.nodeName) && oe.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (Re = Wm);
          if (Re && (Re = Re(n, U))) {
            lv(W, Re, l, Q);
            break e;
          }
          Se && Se(n, I, U), n === "focusout" && (Se = I._wrapperState) && Se.controlled && I.type === "number" && $r(I, "number", I.value);
        }
        switch (Se = U ? ao(U) : window, n) {
          case "focusin":
            (iv(Se) || Se.contentEditable === "true") && (Ja = Se, qf = U, ts = null);
            break;
          case "focusout":
            ts = qf = Ja = null;
            break;
          case "mousedown":
            Xf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xf = !1, mv(W, l, Q);
            break;
          case "selectionchange":
            if (hv)
              break;
          case "keydown":
          case "keyup":
            mv(W, l, Q);
        }
        var be;
        if (Za)
          e: {
            switch (n) {
              case "compositionstart":
                var Be = "onCompositionStart";
                break e;
              case "compositionend":
                Be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Be = "onCompositionUpdate";
                break e;
            }
            Be = void 0;
          }
        else
          Ju ? rv(n, l) && (Be = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Be = "onCompositionStart");
        Be && (tv && l.locale !== "ko" && (Ju || Be !== "onCompositionStart" ? Be === "onCompositionEnd" && Ju && (be = N()) : (Xa = Q, h = "value" in Xa ? Xa.value : Xa.textContent, Ju = !0)), Se = ls(U, Be), 0 < Se.length && (Be = new Pf(Be, n, null, l, Q), W.push({ event: Be, listeners: Se }), be ? Be.data = be : (be = rc(l), be !== null && (Be.data = be)))), (be = nc ? $m(n, l) : Ym(n, l)) && (U = ls(U, "onBeforeInput"), 0 < U.length && (Q = new Pf("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: U }), Q.data = be));
      }
      uc(W, r);
    });
  }
  function is(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ls(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = fa(n, l), d != null && o.unshift(is(n, d, c)), d = fa(n, r), d != null && o.push(is(n, d, c))), n = n.return;
    }
    return o;
  }
  function tu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ed(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, w = E.alternate, U = E.stateNode;
      if (w !== null && w === o)
        break;
      E.tag === 5 && U !== null && (E = U, c ? (w = fa(l, d), w != null && m.unshift(is(l, w, E))) : c || (w = fa(l, d), w != null && m.push(is(l, w, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var td = /\r\n?/g, Km = /\u0000|\uFFFD/g;
  function nd(n) {
    return (typeof n == "string" ? n : "" + n).replace(td, `
`).replace(Km, "");
  }
  function sc(n, r, l) {
    if (r = nd(r), nd(n) !== r && l)
      throw Error(A(425));
  }
  function cc() {
  }
  var rd = null, nu = null;
  function us(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ru = typeof setTimeout == "function" ? setTimeout : void 0, wv = typeof clearTimeout == "function" ? clearTimeout : void 0, ad = typeof Promise == "function" ? Promise : void 0, id = typeof queueMicrotask == "function" ? queueMicrotask : typeof ad < "u" ? function(n) {
    return ad.resolve(null).then(n).catch(Zm);
  } : ru;
  function Zm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Sl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), vl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    vl(r);
  }
  function ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function os(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var El = Math.random().toString(36).slice(2), vi = "__reactFiber$" + El, au = "__reactProps$" + El, Fi = "__reactContainer$" + El, ld = "__reactEvents$" + El, Jm = "__reactListeners$" + El, ud = "__reactHandles$" + El;
  function Da(n) {
    var r = n[vi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Fi] || l[vi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = os(n); n !== null; ) {
            if (l = n[vi])
              return l;
            n = os(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ss(n) {
    return n = n[vi] || n[Fi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ao(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(A(33));
  }
  function ke(n) {
    return n[au] || null;
  }
  var Cl = [], nn = -1;
  function Ke(n) {
    return { current: n };
  }
  function Mt(n) {
    0 > nn || (n.current = Cl[nn], Cl[nn] = null, nn--);
  }
  function jt(n, r) {
    nn++, Cl[nn] = n.current, n.current = r;
  }
  var hi = {}, Pe = Ke(hi), Rn = Ke(!1), Xr = hi;
  function Oa(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return hi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function La() {
    Mt(Rn), Mt(Pe);
  }
  function Rl(n, r, l) {
    if (Pe.current !== hi)
      throw Error(A(168));
    jt(Pe, r), jt(Rn, l);
  }
  function cs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(A(108, ft(n) || "Unknown", c));
    return T({}, l, o);
  }
  function fc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || hi, Xr = Pe.current, jt(Pe, n), jt(Rn, Rn.current), !0;
  }
  function xv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(A(169));
    l ? (n = cs(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, Mt(Rn), Mt(Pe), jt(Pe, n)) : Mt(Rn), jt(Rn, l);
  }
  var va = null, Gn = !1, fs = !1;
  function od(n) {
    va === null ? va = [n] : va.push(n);
  }
  function sd(n) {
    Gn = !0, od(n);
  }
  function Kr() {
    if (!fs && va !== null) {
      fs = !0;
      var n = 0, r = kt;
      try {
        var l = va;
        for (kt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        va = null, Gn = !1;
      } catch (c) {
        throw va !== null && (va = va.slice(n + 1)), Jt(Ga, Kr), c;
      } finally {
        kt = r, fs = !1;
      }
    }
    return null;
  }
  var Tl = [], Zr = 0, iu = null, io = 0, Jr = [], yr = 0, Ma = null, nr = 1, Hi = "";
  function ha(n, r) {
    Tl[Zr++] = io, Tl[Zr++] = iu, iu = n, io = r;
  }
  function cd(n, r, l) {
    Jr[yr++] = nr, Jr[yr++] = Hi, Jr[yr++] = Ma, Ma = n;
    var o = nr;
    n = Hi;
    var c = 32 - br(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - br(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, nr = 1 << 32 - br(r) + c | l << c | o, Hi = d + n;
    } else
      nr = 1 << d | l << c | o, Hi = n;
  }
  function dc(n) {
    n.return !== null && (ha(n, 1), cd(n, 1, 0));
  }
  function fd(n) {
    for (; n === iu; )
      iu = Tl[--Zr], Tl[Zr] = null, io = Tl[--Zr], Tl[Zr] = null;
    for (; n === Ma; )
      Ma = Jr[--yr], Jr[yr] = null, Hi = Jr[--yr], Jr[yr] = null, nr = Jr[--yr], Jr[yr] = null;
  }
  var ma = null, ea = null, rn = !1, Na = null;
  function dd(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function _v(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ma !== null ? { id: nr, overflow: Hi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ma = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function vc(n) {
    if (rn) {
      var r = ea;
      if (r) {
        var l = r;
        if (!_v(n, r)) {
          if (pc(n))
            throw Error(A(418));
          r = ei(l.nextSibling);
          var o = ma;
          r && _v(n, r) ? dd(o, l) : (n.flags = n.flags & -4097 | 2, rn = !1, ma = n);
        }
      } else {
        if (pc(n))
          throw Error(A(418));
        n.flags = n.flags & -4097 | 2, rn = !1, ma = n;
      }
    }
  }
  function bv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ma = n;
  }
  function hc(n) {
    if (n !== ma)
      return !1;
    if (!rn)
      return bv(n), rn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !us(n.type, n.memoizedProps)), r && (r = ea)) {
      if (pc(n))
        throw kv(), Error(A(418));
      for (; r; )
        dd(n, r), r = ei(r.nextSibling);
    }
    if (bv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ei(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else
      ea = ma ? ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function kv() {
    for (var n = ea; n; )
      n = ei(n.nextSibling);
  }
  function mn() {
    ea = ma = null, rn = !1;
  }
  function pd(n) {
    Na === null ? Na = [n] : Na.push(n);
  }
  var mc = ct.ReactCurrentBatchConfig;
  function ya(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var mi = Ke(null), yc = null, wl = null, vd = null;
  function hd() {
    vd = wl = yc = null;
  }
  function xl(n) {
    var r = mi.current;
    Mt(mi), n._currentValue = r;
  }
  function qn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function te(n, r) {
    yc = n, vd = wl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Nn = !0), n.firstContext = null);
  }
  function kn(n) {
    var r = n._currentValue;
    if (vd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, wl === null) {
        if (yc === null)
          throw Error(A(308));
        wl = n, yc.dependencies = { lanes: 0, firstContext: n };
      } else
        wl = wl.next = n;
    return r;
  }
  var rr = null;
  function md(n) {
    rr === null ? rr = [n] : rr.push(n);
  }
  function Dv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, md(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ji(n, o);
  }
  function ji(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var _l = !1;
  function yd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Hn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Vi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function bl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, dt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ji(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, md(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ji(n, l);
  }
  function gc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, di(n, l);
    }
  }
  function gd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function kl(n, r, l, o) {
    var c = n.updateQueue;
    _l = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var w = E, U = w.next;
      w.next = null, m === null ? d = U : m.next = U, m = w;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = U : E.next = U, Q.lastBaseUpdate = w));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Q = U = w = null, E = d;
      do {
        var I = E.lane, oe = E.eventTime;
        if ((o & I) === I) {
          Q !== null && (Q = Q.next = {
            eventTime: oe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, Ce = E;
            switch (I = r, oe = l, Ce.tag) {
              case 1:
                if (ge = Ce.payload, typeof ge == "function") {
                  W = ge.call(oe, W, I);
                  break e;
                }
                W = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Ce.payload, I = typeof ge == "function" ? ge.call(oe, W, I) : ge, I == null)
                  break e;
                W = T({}, W, I);
                break e;
              case 2:
                _l = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else
          oe = { eventTime: oe, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (U = Q = oe, w = W) : Q = Q.next = oe, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (1);
      if (Q === null && (w = W), c.baseState = w, c.firstBaseUpdate = U, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Yi |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function lu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(A(191, c));
          c.call(o);
        }
      }
  }
  var Ov = new $.Component().refs;
  function Sd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Sc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ge(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Vi(o, c);
    d.payload = r, l != null && (d.callback = l), r = bl(n, d, c), r !== null && (Rr(r, n, c, o), gc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Vi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = bl(n, d, c), r !== null && (Rr(r, n, c, o), gc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Cr(), o = zn(n), c = Vi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = bl(n, c, o), r !== null && (Rr(r, n, o, l), gc(r, n, o));
  } };
  function Lv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Mv(n, r, l) {
    var o = !1, c = hi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = kn(d) : (c = sn(r) ? Xr : Pe.current, o = r.contextTypes, d = (o = o != null) ? Oa(n, c) : hi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Sc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Nv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Sc.enqueueReplaceState(r, r.state, null);
  }
  function Ec(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Ov, yd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = kn(d) : (d = sn(r) ? Xr : Pe.current, c.context = Oa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Sd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Sc.enqueueReplaceState(c, c.state, null), kl(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function lo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === Ov && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(A(284));
      if (!l._owner)
        throw Error(A(290, n));
    }
    return n;
  }
  function Cc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
    function r(k, _) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [_], k.flags |= 16) : L.push(_);
      }
    }
    function l(k, _) {
      if (!n)
        return null;
      for (; _ !== null; )
        r(k, _), _ = _.sibling;
      return null;
    }
    function o(k, _) {
      for (k = /* @__PURE__ */ new Map(); _ !== null; )
        _.key !== null ? k.set(_.key, _) : k.set(_.index, _), _ = _.sibling;
      return k;
    }
    function c(k, _) {
      return k = Al(k, _), k.index = 0, k.sibling = null, k;
    }
    function d(k, _, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < _ ? (k.flags |= 2, _) : L) : (k.flags |= 2, _)) : (k.flags |= 1048576, _);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, _, L, K) {
      return _ === null || _.tag !== 6 ? (_ = Os(L, k.mode, K), _.return = k, _) : (_ = c(_, L), _.return = k, _);
    }
    function w(k, _, L, K) {
      var Re = L.type;
      return Re === He ? Q(k, _, L.props.children, K, L.key) : _ !== null && (_.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Rt && zv(Re) === _.type) ? (K = c(_, L.props), K.ref = lo(k, _, L), K.return = k, K) : (K = Jc(L.type, L.key, L.props, null, k.mode, K), K.ref = lo(k, _, L), K.return = k, K);
    }
    function U(k, _, L, K) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== L.containerInfo || _.stateNode.implementation !== L.implementation ? (_ = xu(L, k.mode, K), _.return = k, _) : (_ = c(_, L.children || []), _.return = k, _);
    }
    function Q(k, _, L, K, Re) {
      return _ === null || _.tag !== 7 ? (_ = wu(L, k.mode, K, Re), _.return = k, _) : (_ = c(_, L), _.return = k, _);
    }
    function W(k, _, L) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number")
        return _ = Os("" + _, k.mode, L), _.return = k, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case _e:
            return L = Jc(_.type, _.key, _.props, null, k.mode, L), L.ref = lo(k, null, _), L.return = k, L;
          case it:
            return _ = xu(_, k.mode, L), _.return = k, _;
          case Rt:
            var K = _._init;
            return W(k, K(_._payload), L);
        }
        if (In(_) || we(_))
          return _ = wu(_, k.mode, L, null), _.return = k, _;
        Cc(k, _);
      }
      return null;
    }
    function I(k, _, L, K) {
      var Re = _ !== null ? _.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return Re !== null ? null : E(k, _, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _e:
            return L.key === Re ? w(k, _, L, K) : null;
          case it:
            return L.key === Re ? U(k, _, L, K) : null;
          case Rt:
            return Re = L._init, I(
              k,
              _,
              Re(L._payload),
              K
            );
        }
        if (In(L) || we(L))
          return Re !== null ? null : Q(k, _, L, K, null);
        Cc(k, L);
      }
      return null;
    }
    function oe(k, _, L, K, Re) {
      if (typeof K == "string" && K !== "" || typeof K == "number")
        return k = k.get(L) || null, E(_, k, "" + K, Re);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case _e:
            return k = k.get(K.key === null ? L : K.key) || null, w(_, k, K, Re);
          case it:
            return k = k.get(K.key === null ? L : K.key) || null, U(_, k, K, Re);
          case Rt:
            var Se = K._init;
            return oe(k, _, L, Se(K._payload), Re);
        }
        if (In(K) || we(K))
          return k = k.get(L) || null, Q(_, k, K, Re, null);
        Cc(_, K);
      }
      return null;
    }
    function ge(k, _, L, K) {
      for (var Re = null, Se = null, be = _, Be = _ = 0, Zn = null; be !== null && Be < L.length; Be++) {
        be.index > Be ? (Zn = be, be = null) : Zn = be.sibling;
        var _t = I(k, be, L[Be], K);
        if (_t === null) {
          be === null && (be = Zn);
          break;
        }
        n && be && _t.alternate === null && r(k, be), _ = d(_t, _, Be), Se === null ? Re = _t : Se.sibling = _t, Se = _t, be = Zn;
      }
      if (Be === L.length)
        return l(k, be), rn && ha(k, Be), Re;
      if (be === null) {
        for (; Be < L.length; Be++)
          be = W(k, L[Be], K), be !== null && (_ = d(be, _, Be), Se === null ? Re = be : Se.sibling = be, Se = be);
        return rn && ha(k, Be), Re;
      }
      for (be = o(k, be); Be < L.length; Be++)
        Zn = oe(be, k, Be, L[Be], K), Zn !== null && (n && Zn.alternate !== null && be.delete(Zn.key === null ? Be : Zn.key), _ = d(Zn, _, Be), Se === null ? Re = Zn : Se.sibling = Zn, Se = Zn);
      return n && be.forEach(function(Fl) {
        return r(k, Fl);
      }), rn && ha(k, Be), Re;
    }
    function Ce(k, _, L, K) {
      var Re = we(L);
      if (typeof Re != "function")
        throw Error(A(150));
      if (L = Re.call(L), L == null)
        throw Error(A(151));
      for (var Se = Re = null, be = _, Be = _ = 0, Zn = null, _t = L.next(); be !== null && !_t.done; Be++, _t = L.next()) {
        be.index > Be ? (Zn = be, be = null) : Zn = be.sibling;
        var Fl = I(k, be, _t.value, K);
        if (Fl === null) {
          be === null && (be = Zn);
          break;
        }
        n && be && Fl.alternate === null && r(k, be), _ = d(Fl, _, Be), Se === null ? Re = Fl : Se.sibling = Fl, Se = Fl, be = Zn;
      }
      if (_t.done)
        return l(
          k,
          be
        ), rn && ha(k, Be), Re;
      if (be === null) {
        for (; !_t.done; Be++, _t = L.next())
          _t = W(k, _t.value, K), _t !== null && (_ = d(_t, _, Be), Se === null ? Re = _t : Se.sibling = _t, Se = _t);
        return rn && ha(k, Be), Re;
      }
      for (be = o(k, be); !_t.done; Be++, _t = L.next())
        _t = oe(be, k, Be, _t.value, K), _t !== null && (n && _t.alternate !== null && be.delete(_t.key === null ? Be : _t.key), _ = d(_t, _, Be), Se === null ? Re = _t : Se.sibling = _t, Se = _t);
      return n && be.forEach(function(Sy) {
        return r(k, Sy);
      }), rn && ha(k, Be), Re;
    }
    function Dn(k, _, L, K) {
      if (typeof L == "object" && L !== null && L.type === He && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _e:
            e: {
              for (var Re = L.key, Se = _; Se !== null; ) {
                if (Se.key === Re) {
                  if (Re = L.type, Re === He) {
                    if (Se.tag === 7) {
                      l(k, Se.sibling), _ = c(Se, L.props.children), _.return = k, k = _;
                      break e;
                    }
                  } else if (Se.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Rt && zv(Re) === Se.type) {
                    l(k, Se.sibling), _ = c(Se, L.props), _.ref = lo(k, Se, L), _.return = k, k = _;
                    break e;
                  }
                  l(k, Se);
                  break;
                } else
                  r(k, Se);
                Se = Se.sibling;
              }
              L.type === He ? (_ = wu(L.props.children, k.mode, K, L.key), _.return = k, k = _) : (K = Jc(L.type, L.key, L.props, null, k.mode, K), K.ref = lo(k, _, L), K.return = k, k = K);
            }
            return m(k);
          case it:
            e: {
              for (Se = L.key; _ !== null; ) {
                if (_.key === Se)
                  if (_.tag === 4 && _.stateNode.containerInfo === L.containerInfo && _.stateNode.implementation === L.implementation) {
                    l(k, _.sibling), _ = c(_, L.children || []), _.return = k, k = _;
                    break e;
                  } else {
                    l(k, _);
                    break;
                  }
                else
                  r(k, _);
                _ = _.sibling;
              }
              _ = xu(L, k.mode, K), _.return = k, k = _;
            }
            return m(k);
          case Rt:
            return Se = L._init, Dn(k, _, Se(L._payload), K);
        }
        if (In(L))
          return ge(k, _, L, K);
        if (we(L))
          return Ce(k, _, L, K);
        Cc(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, _ !== null && _.tag === 6 ? (l(k, _.sibling), _ = c(_, L), _.return = k, k = _) : (l(k, _), _ = Os(L, k.mode, K), _.return = k, k = _), m(k)) : l(k, _);
    }
    return Dn;
  }
  var uo = Uv(!0), Av = Uv(!1), ds = {}, ti = Ke(ds), ps = Ke(ds), oo = Ke(ds);
  function uu(n) {
    if (n === ds)
      throw Error(A(174));
    return n;
  }
  function Ed(n, r) {
    switch (jt(oo, r), jt(ps, n), jt(ti, ds), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pn(r, n);
    }
    Mt(ti), jt(ti, r);
  }
  function Dl() {
    Mt(ti), Mt(ps), Mt(oo);
  }
  function Me(n) {
    uu(oo.current);
    var r = uu(ti.current), l = pn(r, n.type);
    r !== l && (jt(ps, n), jt(ti, l));
  }
  function ot(n) {
    ps.current === n && (Mt(ti), Mt(ps));
  }
  var ze = Ke(0);
  function yn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var za = [];
  function Rc() {
    for (var n = 0; n < za.length; n++)
      za[n]._workInProgressVersionPrimary = null;
    za.length = 0;
  }
  var Tc = ct.ReactCurrentDispatcher, Cd = ct.ReactCurrentBatchConfig, ou = 0, an = null, V = null, yt = null, Ae = !1, yi = !1, ga = 0, su = 0;
  function ln() {
    throw Error(A(321));
  }
  function cu(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ka(n[l], r[l]))
        return !1;
    return !0;
  }
  function Ol(n, r, l, o, c, d) {
    if (ou = d, an = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Tc.current = n === null || n.memoizedState === null ? ty : ny, n = l(o, c), yi) {
      d = 0;
      do {
        if (yi = !1, ga = 0, 25 <= d)
          throw Error(A(301));
        d += 1, yt = V = null, r.updateQueue = null, Tc.current = Td, n = l(o, c);
      } while (yi);
    }
    if (Tc.current = jc, r = V !== null && V.next !== null, ou = 0, yt = V = an = null, Ae = !1, r)
      throw Error(A(300));
    return n;
  }
  function fu() {
    var n = ga !== 0;
    return ga = 0, n;
  }
  function Ua() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return yt === null ? an.memoizedState = yt = n : yt = yt.next = n, yt;
  }
  function ta() {
    if (V === null) {
      var n = an.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = V.next;
    var r = yt === null ? an.memoizedState : yt.next;
    if (r !== null)
      yt = r, V = n;
    else {
      if (n === null)
        throw Error(A(310));
      V = n, n = { memoizedState: V.memoizedState, baseState: V.baseState, baseQueue: V.baseQueue, queue: V.queue, next: null }, yt === null ? an.memoizedState = yt = n : yt = yt.next = n;
    }
    return yt;
  }
  function du(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function vs(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = V, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, w = null, U = d;
      do {
        var Q = U.lane;
        if ((ou & Q) === Q)
          w !== null && (w = w.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var W = {
            lane: Q,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          w === null ? (E = w = W, m = o) : w = w.next = W, an.lanes |= Q, Yi |= Q;
        }
        U = U.next;
      } while (U !== null && U !== d);
      w === null ? m = o : w.next = E, ka(o, r.memoizedState) || (Nn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, an.lanes |= d, Yi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function hs(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ka(d, r.memoizedState) || (Nn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function wc() {
  }
  function xc(n, r) {
    var l = an, o = ta(), c = r(), d = !ka(o.memoizedState, c);
    if (d && (o.memoizedState = c, Nn = !0), o = o.queue, ms(kc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || yt !== null && yt.memoizedState.tag & 1) {
      if (l.flags |= 2048, pu(9, bc.bind(null, l, o, c, r), void 0, null), gn === null)
        throw Error(A(349));
      ou & 30 || _c(l, r, c);
    }
    return c;
  }
  function _c(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = an.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, an.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function bc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Dc(r) && Oc(n);
  }
  function kc(n, r, l) {
    return l(function() {
      Dc(r) && Oc(n);
    });
  }
  function Dc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ka(n, l);
    } catch {
      return !0;
    }
  }
  function Oc(n) {
    var r = ji(n, 1);
    r !== null && Rr(r, n, 1, -1);
  }
  function Lc(n) {
    var r = Ua();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: du, lastRenderedState: n }, r.queue = n, n = n.dispatch = Hc.bind(null, an, n), [r.memoizedState, n];
  }
  function pu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = an.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, an.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Mc() {
    return ta().memoizedState;
  }
  function vu(n, r, l, o) {
    var c = Ua();
    an.flags |= n, c.memoizedState = pu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Pi(n, r, l, o) {
    var c = ta();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (V !== null) {
      var m = V.memoizedState;
      if (d = m.destroy, o !== null && cu(o, m.deps)) {
        c.memoizedState = pu(r, l, d, o);
        return;
      }
    }
    an.flags |= n, c.memoizedState = pu(1 | r, l, d, o);
  }
  function Nc(n, r) {
    return vu(8390656, 8, n, r);
  }
  function ms(n, r) {
    return Pi(2048, 8, n, r);
  }
  function zc(n, r) {
    return Pi(4, 2, n, r);
  }
  function Uc(n, r) {
    return Pi(4, 4, n, r);
  }
  function Rd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function so(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Pi(4, 4, Rd.bind(null, r, n), l);
  }
  function Ac() {
  }
  function co(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && cu(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ll(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && cu(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function na(n, r, l) {
    return ou & 21 ? (ka(l, r) || (l = $u(), an.lanes |= l, Yi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Nn = !0), n.memoizedState = l);
  }
  function ey(n, r) {
    var l = kt;
    kt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Cd.transition;
    Cd.transition = {};
    try {
      n(!1), r();
    } finally {
      kt = l, Cd.transition = o;
    }
  }
  function Xt() {
    return ta().memoizedState;
  }
  function Fc(n, r, l) {
    var o = zn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, fo(n))
      ys(r, l);
    else if (l = Dv(n, r, l, o), l !== null) {
      var c = Cr();
      Rr(l, n, o, c), Fv(l, r, o);
    }
  }
  function Hc(n, r, l) {
    var o = zn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (fo(n))
      ys(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, ka(E, m)) {
            var w = r.interleaved;
            w === null ? (c.next = c, md(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Dv(n, r, c, o), l !== null && (c = Cr(), Rr(l, n, o, c), Fv(l, r, o));
    }
  }
  function fo(n) {
    var r = n.alternate;
    return n === an || r !== null && r === an;
  }
  function ys(n, r) {
    yi = Ae = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Fv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, di(n, l);
    }
  }
  var jc = { readContext: kn, useCallback: ln, useContext: ln, useEffect: ln, useImperativeHandle: ln, useInsertionEffect: ln, useLayoutEffect: ln, useMemo: ln, useReducer: ln, useRef: ln, useState: ln, useDebugValue: ln, useDeferredValue: ln, useTransition: ln, useMutableSource: ln, useSyncExternalStore: ln, useId: ln, unstable_isNewReconciler: !1 }, ty = { readContext: kn, useCallback: function(n, r) {
    return Ua().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: kn, useEffect: Nc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, vu(
      4194308,
      4,
      Rd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return vu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return vu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ua();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Ua();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Fc.bind(null, an, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ua();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Lc, useDebugValue: Ac, useDeferredValue: function(n) {
    return Ua().memoizedState = n;
  }, useTransition: function() {
    var n = Lc(!1), r = n[0];
    return n = ey.bind(null, n[1]), Ua().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = an, c = Ua();
    if (rn) {
      if (l === void 0)
        throw Error(A(407));
      l = l();
    } else {
      if (l = r(), gn === null)
        throw Error(A(349));
      ou & 30 || _c(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Nc(kc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, pu(9, bc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ua(), r = gn.identifierPrefix;
    if (rn) {
      var l = Hi, o = nr;
      l = (o & ~(1 << 32 - br(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ga++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = su++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ny = {
    readContext: kn,
    useCallback: co,
    useContext: kn,
    useEffect: ms,
    useImperativeHandle: so,
    useInsertionEffect: zc,
    useLayoutEffect: Uc,
    useMemo: Ll,
    useReducer: vs,
    useRef: Mc,
    useState: function() {
      return vs(du);
    },
    useDebugValue: Ac,
    useDeferredValue: function(n) {
      var r = ta();
      return na(r, V.memoizedState, n);
    },
    useTransition: function() {
      var n = vs(du)[0], r = ta().memoizedState;
      return [n, r];
    },
    useMutableSource: wc,
    useSyncExternalStore: xc,
    useId: Xt,
    unstable_isNewReconciler: !1
  }, Td = { readContext: kn, useCallback: co, useContext: kn, useEffect: ms, useImperativeHandle: so, useInsertionEffect: zc, useLayoutEffect: Uc, useMemo: Ll, useReducer: hs, useRef: Mc, useState: function() {
    return hs(du);
  }, useDebugValue: Ac, useDeferredValue: function(n) {
    var r = ta();
    return V === null ? r.memoizedState = n : na(r, V.memoizedState, n);
  }, useTransition: function() {
    var n = hs(du)[0], r = ta().memoizedState;
    return [n, r];
  }, useMutableSource: wc, useSyncExternalStore: xc, useId: Xt, unstable_isNewReconciler: !1 };
  function po(n, r) {
    try {
      var l = "", o = r;
      do
        l += ht(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function gs(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Vc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ry = typeof WeakMap == "function" ? WeakMap : Map;
  function Hv(n, r, l) {
    l = Vi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Wc || (Wc = !0, Su = o), Vc(n, r);
    }, l;
  }
  function Ss(n, r, l) {
    l = Vi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Vc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Vc(n, r), typeof o != "function" && (Ei === null ? Ei = /* @__PURE__ */ new Set([this]) : Ei.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function jv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ry();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = cy.bind(null, n, r, l), r.then(n, n));
  }
  function wd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function xd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Vi(-1, 1), r.tag = 2, bl(l, r, 1))), l.lanes |= 1), n);
  }
  var ay = ct.ReactCurrentOwner, Nn = !1;
  function jn(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : uo(r, n.child, l, o);
  }
  function Ml(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return te(r, c), o = Ol(n, r, l, o, d, c), l = fu(), n !== null && !Nn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (rn && l && dc(r), r.flags |= 1, jn(n, r, o, c), r.child);
  }
  function Pc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Yd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, ra(n, r, d, o, c)) : (n = Jc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref)
        return ar(n, r, c);
    }
    return r.flags |= 1, n = Al(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ra(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref)
        if (Nn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Nn = !0);
        else
          return r.lanes = n.lanes, ar(n, r, c);
    }
    return vo(n, r, l, o, c);
  }
  function hu(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, jt(Eo, Sa), Sa |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, jt(Eo, Sa), Sa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, jt(Eo, Sa), Sa |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, jt(Eo, Sa), Sa |= o;
    return jn(n, r, c, l), r.child;
  }
  function Ze(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function vo(n, r, l, o, c) {
    var d = sn(l) ? Xr : Pe.current;
    return d = Oa(r, d), te(r, c), l = Ol(n, r, l, o, d, c), o = fu(), n !== null && !Nn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (rn && o && dc(r), r.flags |= 1, jn(n, r, l, c), r.child);
  }
  function _d(n, r, l, o, c) {
    if (sn(l)) {
      var d = !0;
      fc(r);
    } else
      d = !1;
    if (te(r, c), r.stateNode === null)
      gr(n, r), Mv(r, l, o), Ec(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var w = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = kn(U) : (U = sn(l) ? Xr : Pe.current, U = Oa(r, U));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || w !== U) && Nv(r, m, o, U), _l = !1;
      var I = r.memoizedState;
      m.state = I, kl(r, o, m, c), w = r.memoizedState, E !== o || I !== w || Rn.current || _l ? (typeof Q == "function" && (Sd(r, l, Q, o), w = r.memoizedState), (E = _l || Lv(r, l, E, o, I, w, U)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Hn(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ya(r.type, E), m.props = U, W = r.pendingProps, I = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = kn(w) : (w = sn(l) ? Xr : Pe.current, w = Oa(r, w));
      var oe = l.getDerivedStateFromProps;
      (Q = typeof oe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || I !== w) && Nv(r, m, o, w), _l = !1, I = r.memoizedState, m.state = I, kl(r, o, m, c);
      var ge = r.memoizedState;
      E !== W || I !== ge || Rn.current || _l ? (typeof oe == "function" && (Sd(r, l, oe, o), ge = r.memoizedState), (U = _l || Lv(r, l, U, o, I, ge, w) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = w, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Vv(n, r, l, o, d, c);
  }
  function Vv(n, r, l, o, c, d) {
    Ze(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && xv(r, l, !1), ar(n, r, d);
    o = r.stateNode, ay.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = uo(r, n.child, null, d), r.child = uo(r, null, E, d)) : jn(n, r, E, d), r.memoizedState = o.state, c && xv(r, l, !0), r.child;
  }
  function Pv(n) {
    var r = n.stateNode;
    r.pendingContext ? Rl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Rl(n, r.context, !1), Ed(n, r.containerInfo);
  }
  function Bc(n, r, l, o, c) {
    return mn(), pd(c), r.flags |= 256, jn(n, r, l, o), r.child;
  }
  var mu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function kd(n, r, l) {
    var o = r.pendingProps, c = ze.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), jt(ze, c & 1), n === null)
      return vc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Ds(m, o, 0, null), n = wu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = bd(l), r.memoizedState = mu, n) : Dd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return iy(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Al(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Al(E, d) : (d = wu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? bd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = mu, o;
    }
    return d = n.child, n = d.sibling, o = Al(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Dd(n, r) {
    return r = Ds({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ho(n, r, l, o) {
    return o !== null && pd(o), uo(r, n.child, null, l), n = Dd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function iy(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = gs(Error(A(422))), ho(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Ds({ mode: "visible", children: o.children }, c, 0, null), d = wu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && uo(r, n.child, null, m), r.child.memoizedState = bd(m), r.memoizedState = mu, d);
    if (!(r.mode & 1))
      return ho(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(A(419)), o = gs(d, o, void 0), ho(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Nn || E) {
      if (o = gn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ji(n, c), Rr(o, n, c, -1));
      }
      return Pd(), o = gs(Error(A(421))), ho(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = fy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ei(c.nextSibling), ma = r, rn = !0, Na = null, n !== null && (Jr[yr++] = nr, Jr[yr++] = Hi, Jr[yr++] = Ma, nr = n.id, Hi = n.overflow, Ma = r), r = Dd(r, o.children), r.flags |= 4096, r);
  }
  function Od(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), qn(n.return, r, l);
  }
  function $c(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ld(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (jn(n, r, o.children, l), o = ze.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Od(n, l, r);
            else if (n.tag === 19)
              Od(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (jt(ze, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && yn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), $c(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && yn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          $c(r, !0, l, null, d);
          break;
        case "together":
          $c(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function gr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ar(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Yi |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Al(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Al(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Bi(n, r, l) {
    switch (r.tag) {
      case 3:
        Pv(r), mn();
        break;
      case 5:
        Me(r);
        break;
      case 1:
        sn(r.type) && fc(r);
        break;
      case 4:
        Ed(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        jt(mi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (jt(ze, ze.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? kd(n, r, l) : (jt(ze, ze.current & 1), n = ar(n, r, l), n !== null ? n.sibling : null);
        jt(ze, ze.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Ld(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), jt(ze, ze.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, hu(n, r, l);
    }
    return ar(n, r, l);
  }
  var Es, yu, Aa, Vn;
  Es = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, yu = function() {
  }, Aa = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, uu(ti.current);
      var d = null;
      switch (l) {
        case "input":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yr(n, c), o = Yr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = cc);
      }
      bn(l, o);
      var m;
      l = null;
      for (U in c)
        if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null)
          if (U === "style") {
            var E = c[U];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (on.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var w = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && w !== E && (w != null || E != null))
          if (U === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in w)
                w.hasOwnProperty(m) && E[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
            } else
              l || (d || (d = []), d.push(
                U,
                l
              )), l = w;
          else
            U === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, E = E ? E.__html : void 0, w != null && E !== w && (d = d || []).push(U, w)) : U === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(U, "" + w) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (on.hasOwnProperty(U) ? (w != null && U === "onScroll" && qt("scroll", n), d || E === w || (d = [])) : (d = d || []).push(U, w));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Vn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Cs(n, r) {
    if (!rn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Sr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ly(n, r, l) {
    var o = r.pendingProps;
    switch (fd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Sr(r), null;
      case 1:
        return sn(r.type) && La(), Sr(r), null;
      case 3:
        return o = r.stateNode, Dl(), Mt(Rn), Mt(Pe), Rc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Na !== null && (ks(Na), Na = null))), yu(n, r), Sr(r), null;
      case 5:
        ot(r);
        var c = uu(oo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Aa(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(A(166));
            return Sr(r), null;
          }
          if (n = uu(ti.current), hc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[vi] = r, o[au] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                qt("cancel", o), qt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                qt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++)
                  qt(as[c], o);
                break;
              case "source":
                qt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                qt(
                  "error",
                  o
                ), qt("load", o);
                break;
              case "details":
                qt("toggle", o);
                break;
              case "input":
                An(o, d), qt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, qt("invalid", o);
                break;
              case "textarea":
                hr(o, d), qt("invalid", o);
            }
            bn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && sc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : on.hasOwnProperty(m) && E != null && m === "onScroll" && qt("scroll", o);
              }
            switch (l) {
              case "input":
                pr(o), Br(o, d, !0);
                break;
              case "textarea":
                pr(o), er(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = cc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ir(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[vi] = r, n[au] = o, Es(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = vn(l, o), l) {
                case "dialog":
                  qt("cancel", n), qt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  qt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++)
                    qt(as[c], n);
                  c = o;
                  break;
                case "source":
                  qt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  qt(
                    "error",
                    n
                  ), qt("load", n), c = o;
                  break;
                case "details":
                  qt("toggle", n), c = o;
                  break;
                case "input":
                  An(n, o), c = Yn(n, o), qt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), qt("invalid", n);
                  break;
                case "textarea":
                  hr(n, o), c = Yr(n, o), qt("invalid", n);
                  break;
                default:
                  c = o;
              }
              bn(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var w = E[d];
                  d === "style" ? Lt(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && li(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && ca(n, w) : typeof w == "number" && ca(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (on.hasOwnProperty(d) ? w != null && d === "onScroll" && qt("scroll", n) : w != null && Qe(n, d, w, m));
                }
              switch (l) {
                case "input":
                  pr(n), Br(n, o, !1);
                  break;
                case "textarea":
                  pr(n), er(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + et(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? vr(n, !!o.multiple, d, !1) : o.defaultValue != null && vr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = cc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Sr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Vn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(A(166));
          if (l = uu(oo.current), uu(ti.current), hc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[vi] = r, (d = o.nodeValue !== l) && (n = ma, n !== null))
              switch (n.tag) {
                case 3:
                  sc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && sc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[vi] = r, r.stateNode = o;
        }
        return Sr(r), null;
      case 13:
        if (Mt(ze), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (rn && ea !== null && r.mode & 1 && !(r.flags & 128))
            kv(), mn(), r.flags |= 98560, d = !1;
          else if (d = hc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(A(317));
              d[vi] = r;
            } else
              mn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Sr(r), d = !1;
          } else
            Na !== null && (ks(Na), Na = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || ze.current & 1 ? Bn === 0 && (Bn = 3) : Pd())), r.updateQueue !== null && (r.flags |= 4), Sr(r), null);
      case 4:
        return Dl(), yu(n, r), n === null && ro(r.stateNode.containerInfo), Sr(r), null;
      case 10:
        return xl(r.type._context), Sr(r), null;
      case 17:
        return sn(r.type) && La(), Sr(r), null;
      case 19:
        if (Mt(ze), d = r.memoizedState, d === null)
          return Sr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Cs(d, !1);
          else {
            if (Bn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = yn(n), m !== null) {
                  for (r.flags |= 128, Cs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return jt(ze, ze.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Tt() > Ro && (r.flags |= 128, o = !0, Cs(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = yn(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Cs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !rn)
                return Sr(r), null;
            } else
              2 * Tt() - d.renderingStartTime > Ro && l !== 1073741824 && (r.flags |= 128, o = !0, Cs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Tt(), r.sibling = null, l = ze.current, jt(ze, o ? l & 1 | 2 : l & 1), r) : (Sr(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (Sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Sr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function Md(n, r) {
    switch (fd(r), r.tag) {
      case 1:
        return sn(r.type) && La(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Dl(), Mt(Rn), Mt(Pe), Rc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ot(r), null;
      case 13:
        if (Mt(ze), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(A(340));
          mn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Mt(ze), null;
      case 4:
        return Dl(), null;
      case 10:
        return xl(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Rs = !1, Pn = !1, Bv = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function mo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          wn(n, r, o);
        }
      else
        l.current = null;
  }
  function Ts(n, r, l) {
    try {
      l();
    } catch (o) {
      wn(n, r, o);
    }
  }
  var $v = !1;
  function Yv(n, r) {
    if (rd = ba, n = ac(), zi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, w = -1, U = 0, Q = 0, W = n, I = null;
            t:
              for (; ; ) {
                for (var oe; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (w = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (oe = W.firstChild) !== null; )
                  I = W, W = oe;
                for (; ; ) {
                  if (W === n)
                    break t;
                  if (I === l && ++U === c && (E = m), I === d && ++Q === o && (w = m), (oe = W.nextSibling) !== null)
                    break;
                  W = I, I = W.parentNode;
                }
                W = oe;
              }
            l = E === -1 || w === -1 ? null : { start: E, end: w };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (nu = { focusedElem: n, selectionRange: l }, ba = !1, ve = r; ve !== null; )
      if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ve = n;
      else
        for (; ve !== null; ) {
          r = ve;
          try {
            var ge = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ge !== null) {
                    var Ce = ge.memoizedProps, Dn = ge.memoizedState, k = r.stateNode, _ = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : ya(r.type, Ce), Dn);
                    k.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(A(163));
              }
          } catch (K) {
            wn(r, r.return, K);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ve = n;
            break;
          }
          ve = r.return;
        }
    return ge = $v, $v = !1, ge;
  }
  function ws(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ts(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function xs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Nd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function zd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, zd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[vi], delete r[au], delete r[ld], delete r[Jm], delete r[ud])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Iv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Yc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Iv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function yo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = cc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (yo(n, r, l), n = n.sibling; n !== null; )
        yo(n, r, l), n = n.sibling;
  }
  function gi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (gi(n, r, l), n = n.sibling; n !== null; )
        gi(n, r, l), n = n.sibling;
  }
  var cn = null, Xn = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; )
      go(n, r, l), l = l.sibling;
  }
  function go(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function")
      try {
        Qr.onCommitFiberUnmount(ul, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Pn || mo(l, r);
      case 6:
        var o = cn, c = Xn;
        cn = null, Fa(n, r, l), cn = o, Xn = c, cn !== null && (Xn ? (n = cn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : cn.removeChild(l.stateNode));
        break;
      case 18:
        cn !== null && (Xn ? (n = cn, l = l.stateNode, n.nodeType === 8 ? Sl(n.parentNode, l) : n.nodeType === 1 && Sl(n, l), vl(n)) : Sl(cn, l.stateNode));
        break;
      case 4:
        o = cn, c = Xn, cn = l.stateNode.containerInfo, Xn = !0, Fa(n, r, l), cn = o, Xn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ts(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!Pn && (mo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            wn(l, r, E);
          }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Pn = (o = Pn) || l.memoizedState !== null, Fa(n, r, l), Pn = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function $i(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Bv()), r.forEach(function(o) {
        var c = dy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ni(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  cn = E.stateNode, Xn = !1;
                  break e;
                case 3:
                  cn = E.stateNode.containerInfo, Xn = !0;
                  break e;
                case 4:
                  cn = E.stateNode.containerInfo, Xn = !0;
                  break e;
              }
              E = E.return;
            }
          if (cn === null)
            throw Error(A(160));
          go(d, m, c), cn = null, Xn = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (U) {
          wn(c, r, U);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Qv(r, n), r = r.sibling;
  }
  function Qv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ni(r, n), Si(n), o & 4) {
          try {
            ws(3, n, n.return), xs(3, n);
          } catch (Ce) {
            wn(n, n.return, Ce);
          }
          try {
            ws(5, n, n.return);
          } catch (Ce) {
            wn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        ni(r, n), Si(n), o & 512 && l !== null && mo(l, l.return);
        break;
      case 5:
        if (ni(r, n), Si(n), o & 512 && l !== null && mo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ca(c, "");
          } catch (Ce) {
            wn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Fn(c, d), vn(E, m);
              var U = vn(E, d);
              for (m = 0; m < w.length; m += 2) {
                var Q = w[m], W = w[m + 1];
                Q === "style" ? Lt(c, W) : Q === "dangerouslySetInnerHTML" ? li(c, W) : Q === "children" ? ca(c, W) : Qe(c, Q, W, U);
              }
              switch (E) {
                case "input":
                  _n(c, d);
                  break;
                case "textarea":
                  sa(c, d);
                  break;
                case "select":
                  var I = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var oe = d.value;
                  oe != null ? vr(c, !!d.multiple, oe, !1) : I !== !!d.multiple && (d.defaultValue != null ? vr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : vr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[au] = d;
            } catch (Ce) {
              wn(n, n.return, Ce);
            }
        }
        break;
      case 6:
        if (ni(r, n), Si(n), o & 4) {
          if (n.stateNode === null)
            throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            wn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (ni(r, n), Si(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            vl(r.containerInfo);
          } catch (Ce) {
            wn(n, n.return, Ce);
          }
        break;
      case 4:
        ni(r, n), Si(n);
        break;
      case 13:
        ni(r, n), Si(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Fd = Tt())), o & 4 && $i(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (Pn = (U = Pn) || Q, ni(r, n), Pn = U) : ni(r, n), Si(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !Q && n.mode & 1)
            for (ve = n, Q = n.child; Q !== null; ) {
              for (W = ve = Q; ve !== null; ) {
                switch (I = ve, oe = I.child, I.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ws(4, I, I.return);
                    break;
                  case 1:
                    mo(I, I.return);
                    var ge = I.stateNode;
                    if (typeof ge.componentWillUnmount == "function") {
                      o = I, l = I.return;
                      try {
                        r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                      } catch (Ce) {
                        wn(o, l, Ce);
                      }
                    }
                    break;
                  case 5:
                    mo(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      Ud(W);
                      continue;
                    }
                }
                oe !== null ? (oe.return = I, ve = oe) : Ud(W);
              }
              Q = Q.sibling;
            }
          e:
            for (Q = null, W = n; ; ) {
              if (W.tag === 5) {
                if (Q === null) {
                  Q = W;
                  try {
                    c = W.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, w = W.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, E.style.display = tt("display", m));
                  } catch (Ce) {
                    wn(n, n.return, Ce);
                  }
                }
              } else if (W.tag === 6) {
                if (Q === null)
                  try {
                    W.stateNode.nodeValue = U ? "" : W.memoizedProps;
                  } catch (Ce) {
                    wn(n, n.return, Ce);
                  }
              } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
                W.child.return = W, W = W.child;
                continue;
              }
              if (W === n)
                break e;
              for (; W.sibling === null; ) {
                if (W.return === null || W.return === n)
                  break e;
                Q === W && (Q = null), W = W.return;
              }
              Q === W && (Q = null), W.sibling.return = W.return, W = W.sibling;
            }
        }
        break;
      case 19:
        ni(r, n), Si(n), o & 4 && $i(n);
        break;
      case 21:
        break;
      default:
        ni(
          r,
          n
        ), Si(n);
    }
  }
  function Si(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Iv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = Yc(n);
            gi(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Yc(n);
            yo(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (w) {
        wn(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Wv(n, r, l) {
    ve = n, So(n);
  }
  function So(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Rs;
        if (!m) {
          var E = c.alternate, w = E !== null && E.memoizedState !== null || Pn;
          E = Rs;
          var U = Pn;
          if (Rs = m, (Pn = w) && !U)
            for (ve = c; ve !== null; )
              m = ve, w = m.child, m.tag === 22 && m.memoizedState !== null ? qv(c) : w !== null ? (w.return = m, ve = w) : qv(c);
          for (; d !== null; )
            ve = d, So(d), d = d.sibling;
          ve = c, Rs = E, Pn = U;
        }
        Gv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : Gv(n);
    }
  }
  function Gv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Pn || xs(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Pn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : ya(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && lu(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  lu(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && l.focus();
                      break;
                    case "img":
                      w.src && (l.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var U = r.alternate;
                  if (U !== null) {
                    var Q = U.memoizedState;
                    if (Q !== null) {
                      var W = Q.dehydrated;
                      W !== null && vl(W);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(A(163));
            }
          Pn || r.flags & 512 && Nd(r);
        } catch (I) {
          wn(r, r.return, I);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Ud(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function qv(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              xs(4, r);
            } catch (w) {
              wn(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                wn(r, c, w);
              }
            }
            var d = r.return;
            try {
              Nd(r);
            } catch (w) {
              wn(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Nd(r);
            } catch (w) {
              wn(r, m, w);
            }
        }
      } catch (w) {
        wn(r, r.return, w);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var Ic = Math.ceil, _s = ct.ReactCurrentDispatcher, Ad = ct.ReactCurrentOwner, Er = ct.ReactCurrentBatchConfig, dt = 0, gn = null, Tn = null, Kn = 0, Sa = 0, Eo = Ke(0), Bn = 0, bs = null, Yi = 0, Qc = 0, Co = 0, gu = null, Or = null, Fd = 0, Ro = 1 / 0, Ii = null, Wc = !1, Su = null, Ei = null, Nl = !1, zl = null, Gc = 0, To = 0, qc = null, Eu = -1, Cu = 0;
  function Cr() {
    return dt & 6 ? Tt() : Eu !== -1 ? Eu : Eu = Tt();
  }
  function zn(n) {
    return n.mode & 1 ? dt & 2 && Kn !== 0 ? Kn & -Kn : mc.transition !== null ? (Cu === 0 && (Cu = $u()), Cu) : (n = kt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : qo(n.type)), n) : 1;
  }
  function Rr(n, r, l, o) {
    if (50 < To)
      throw To = 0, qc = null, Error(A(185));
    Di(n, l, o), (!(dt & 2) || n !== gn) && (n === gn && (!(dt & 2) && (Qc |= l), Bn === 4 && Ha(n, Kn)), Tr(n, o), l === 1 && dt === 0 && !(r.mode & 1) && (Ro = Tt() + 500, Gn && Kr()));
  }
  function Tr(n, r) {
    var l = n.callbackNode;
    cl(n, r);
    var o = kr(n, n === gn ? Kn : 0);
    if (o === 0)
      l !== null && tr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && tr(l), r === 1)
        n.tag === 0 ? sd(Xv.bind(null, n)) : od(Xv.bind(null, n)), id(function() {
          !(dt & 6) && Kr();
        }), l = null;
      else {
        switch (Iu(o)) {
          case 1:
            l = Ga;
            break;
          case 4:
            l = lt;
            break;
          case 16:
            l = fi;
            break;
          case 536870912:
            l = Pu;
            break;
          default:
            l = fi;
        }
        l = $d(l, wo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function wo(n, r) {
    if (Eu = -1, Cu = 0, dt & 6)
      throw Error(A(327));
    var l = n.callbackNode;
    if (_o() && n.callbackNode !== l)
      return null;
    var o = kr(n, n === gn ? Kn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = Kc(n, o);
    else {
      r = o;
      var c = dt;
      dt |= 2;
      var d = Xc();
      (gn !== n || Kn !== r) && (Ii = null, Ro = Tt() + 500, Ru(n, r));
      do
        try {
          oy();
          break;
        } catch (E) {
          Kv(n, E);
        }
      while (1);
      hd(), _s.current = d, dt = c, Tn !== null ? r = 0 : (gn = null, Kn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = fl(n), c !== 0 && (o = c, r = Hd(n, c))), r === 1)
        throw l = bs, Ru(n, 0), Ha(n, o), Tr(n, Tt()), l;
      if (r === 6)
        Ha(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !jd(c) && (r = Kc(n, o), r === 2 && (d = fl(n), d !== 0 && (o = d, r = Hd(n, d))), r === 1))
          throw l = bs, Ru(n, 0), Ha(n, o), Tr(n, Tt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Tu(n, Or, Ii);
            break;
          case 3:
            if (Ha(n, o), (o & 130023424) === o && (r = Fd + 500 - Tt(), 10 < r)) {
              if (kr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Cr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = ru(Tu.bind(null, n, Or, Ii), r);
              break;
            }
            Tu(n, Or, Ii);
            break;
          case 4:
            if (Ha(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - br(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Tt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Ic(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = ru(Tu.bind(null, n, Or, Ii), o);
              break;
            }
            Tu(n, Or, Ii);
            break;
          case 5:
            Tu(n, Or, Ii);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return Tr(n, Tt()), n.callbackNode === l ? wo.bind(null, n) : null;
  }
  function Hd(n, r) {
    var l = gu;
    return n.current.memoizedState.isDehydrated && (Ru(n, r).flags |= 256), n = Kc(n, r), n !== 2 && (r = Or, Or = l, r !== null && ks(r)), n;
  }
  function ks(n) {
    Or === null ? Or = n : Or.push.apply(Or, n);
  }
  function jd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ka(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ha(n, r) {
    for (r &= ~Co, r &= ~Qc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - br(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Xv(n) {
    if (dt & 6)
      throw Error(A(327));
    _o();
    var r = kr(n, 0);
    if (!(r & 1))
      return Tr(n, Tt()), null;
    var l = Kc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = fl(n);
      o !== 0 && (r = o, l = Hd(n, o));
    }
    if (l === 1)
      throw l = bs, Ru(n, 0), Ha(n, r), Tr(n, Tt()), l;
    if (l === 6)
      throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Tu(n, Or, Ii), Tr(n, Tt()), null;
  }
  function xo(n, r) {
    var l = dt;
    dt |= 1;
    try {
      return n(r);
    } finally {
      dt = l, dt === 0 && (Ro = Tt() + 500, Gn && Kr());
    }
  }
  function Ul(n) {
    zl !== null && zl.tag === 0 && !(dt & 6) && _o();
    var r = dt;
    dt |= 1;
    var l = Er.transition, o = kt;
    try {
      if (Er.transition = null, kt = 1, n)
        return n();
    } finally {
      kt = o, Er.transition = l, dt = r, !(dt & 6) && Kr();
    }
  }
  function Vd() {
    Sa = Eo.current, Mt(Eo);
  }
  function Ru(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, wv(l)), Tn !== null)
      for (l = Tn.return; l !== null; ) {
        var o = l;
        switch (fd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && La();
            break;
          case 3:
            Dl(), Mt(Rn), Mt(Pe), Rc();
            break;
          case 5:
            ot(o);
            break;
          case 4:
            Dl();
            break;
          case 13:
            Mt(ze);
            break;
          case 19:
            Mt(ze);
            break;
          case 10:
            xl(o.type._context);
            break;
          case 22:
          case 23:
            Vd();
        }
        l = l.return;
      }
    if (gn = n, Tn = n = Al(n.current, null), Kn = Sa = r, Bn = 0, bs = null, Co = Qc = Yi = 0, Or = gu = null, rr !== null) {
      for (r = 0; r < rr.length; r++)
        if (l = rr[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      rr = null;
    }
    return n;
  }
  function Kv(n, r) {
    do {
      var l = Tn;
      try {
        if (hd(), Tc.current = jc, Ae) {
          for (var o = an.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ae = !1;
        }
        if (ou = 0, yt = V = an = null, yi = !1, ga = 0, Ad.current = null, l === null || l.return === null) {
          Bn = 1, bs = r, Tn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, w = r;
          if (r = Kn, E.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var U = w, Q = E, W = Q.tag;
            if (!(Q.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var I = Q.alternate;
              I ? (Q.updateQueue = I.updateQueue, Q.memoizedState = I.memoizedState, Q.lanes = I.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var oe = wd(m);
            if (oe !== null) {
              oe.flags &= -257, xd(oe, m, E, d, r), oe.mode & 1 && jv(d, U, r), r = oe, w = U;
              var ge = r.updateQueue;
              if (ge === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(w), r.updateQueue = Ce;
              } else
                ge.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                jv(d, U, r), Pd();
                break e;
              }
              w = Error(A(426));
            }
          } else if (rn && E.mode & 1) {
            var Dn = wd(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), xd(Dn, m, E, d, r), pd(po(w, E));
              break e;
            }
          }
          d = w = po(w, E), Bn !== 4 && (Bn = 2), gu === null ? gu = [d] : gu.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Hv(d, w, r);
                gd(d, k);
                break e;
              case 1:
                E = w;
                var _ = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ei === null || !Ei.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = Ss(d, E, r);
                  gd(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Bd(l);
      } catch (Re) {
        r = Re, Tn === l && l !== null && (Tn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Xc() {
    var n = _s.current;
    return _s.current = jc, n === null ? jc : n;
  }
  function Pd() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), gn === null || !(Yi & 268435455) && !(Qc & 268435455) || Ha(gn, Kn);
  }
  function Kc(n, r) {
    var l = dt;
    dt |= 2;
    var o = Xc();
    (gn !== n || Kn !== r) && (Ii = null, Ru(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        Kv(n, c);
      }
    while (1);
    if (hd(), dt = l, _s.current = o, Tn !== null)
      throw Error(A(261));
    return gn = null, Kn = 0, Bn;
  }
  function uy() {
    for (; Tn !== null; )
      Zv(Tn);
  }
  function oy() {
    for (; Tn !== null && !ci(); )
      Zv(Tn);
  }
  function Zv(n) {
    var r = eh(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? Bd(n) : Tn = r, Ad.current = null;
  }
  function Bd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Md(l, r), l !== null) {
          l.flags &= 32767, Tn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, Tn = null;
          return;
        }
      } else if (l = ly(l, r, Sa), l !== null) {
        Tn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Tn = r;
        return;
      }
      Tn = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Tu(n, r, l) {
    var o = kt, c = Er.transition;
    try {
      Er.transition = null, kt = 1, sy(n, r, l, o);
    } finally {
      Er.transition = c, kt = o;
    }
    return null;
  }
  function sy(n, r, l, o) {
    do
      _o();
    while (zl !== null);
    if (dt & 6)
      throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Hf(n, d), n === gn && (Tn = gn = null, Kn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Nl || (Nl = !0, $d(fi, function() {
      return _o(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Er.transition, Er.transition = null;
      var m = kt;
      kt = 1;
      var E = dt;
      dt |= 4, Ad.current = null, Yv(n, l), Qv(l, n), ic(nu), ba = !!rd, nu = rd = null, n.current = l, Wv(l), Vu(), dt = E, kt = m, Er.transition = d;
    } else
      n.current = l;
    if (Nl && (Nl = !1, zl = n, Gc = c), d = n.pendingLanes, d === 0 && (Ei = null), Qo(l.stateNode), Tr(n, Tt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Wc)
      throw Wc = !1, n = Su, Su = null, n;
    return Gc & 1 && n.tag !== 0 && _o(), d = n.pendingLanes, d & 1 ? n === qc ? To++ : (To = 0, qc = n) : To = 0, Kr(), null;
  }
  function _o() {
    if (zl !== null) {
      var n = Iu(Gc), r = Er.transition, l = kt;
      try {
        if (Er.transition = null, kt = 16 > n ? 16 : n, zl === null)
          var o = !1;
        else {
          if (n = zl, zl = null, Gc = 0, dt & 6)
            throw Error(A(331));
          var c = dt;
          for (dt |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var w = 0; w < E.length; w++) {
                  var U = E[w];
                  for (ve = U; ve !== null; ) {
                    var Q = ve;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null)
                      W.return = Q, ve = W;
                    else
                      for (; ve !== null; ) {
                        Q = ve;
                        var I = Q.sibling, oe = Q.return;
                        if (zd(Q), Q === U) {
                          ve = null;
                          break;
                        }
                        if (I !== null) {
                          I.return = oe, ve = I;
                          break;
                        }
                        ve = oe;
                      }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Ce = ge.child;
                  if (Ce !== null) {
                    ge.child = null;
                    do {
                      var Dn = Ce.sibling;
                      Ce.sibling = null, Ce = Dn;
                    } while (Ce !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, ve = m;
            else
              e:
                for (; ve !== null; ) {
                  if (d = ve, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(9, d, d.return);
                    }
                  var k = d.sibling;
                  if (k !== null) {
                    k.return = d.return, ve = k;
                    break e;
                  }
                  ve = d.return;
                }
          }
          var _ = n.current;
          for (ve = _; ve !== null; ) {
            m = ve;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null)
              L.return = m, ve = L;
            else
              e:
                for (m = _; ve !== null; ) {
                  if (E = ve, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          xs(9, E);
                      }
                    } catch (Re) {
                      wn(E, E.return, Re);
                    }
                  if (E === m) {
                    ve = null;
                    break e;
                  }
                  var K = E.sibling;
                  if (K !== null) {
                    K.return = E.return, ve = K;
                    break e;
                  }
                  ve = E.return;
                }
          }
          if (dt = c, Kr(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
            try {
              Qr.onPostCommitFiberRoot(ul, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        kt = l, Er.transition = r;
      }
    }
    return !1;
  }
  function Jv(n, r, l) {
    r = po(l, r), r = Hv(n, r, 1), n = bl(n, r, 1), r = Cr(), n !== null && (Di(n, 1, r), Tr(n, r));
  }
  function wn(n, r, l) {
    if (n.tag === 3)
      Jv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Jv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ei === null || !Ei.has(o))) {
            n = po(l, n), n = Ss(r, n, 1), r = bl(r, n, 1), n = Cr(), r !== null && (Di(r, 1, n), Tr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function cy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Cr(), n.pingedLanes |= n.suspendedLanes & l, gn === n && (Kn & l) === l && (Bn === 4 || Bn === 3 && (Kn & 130023424) === Kn && 500 > Tt() - Fd ? Ru(n, 0) : Co |= l), Tr(n, r);
  }
  function Zc(n, r) {
    r === 0 && (n.mode & 1 ? (r = ol, ol <<= 1, !(ol & 130023424) && (ol = 4194304)) : r = 1);
    var l = Cr();
    n = ji(n, r), n !== null && (Di(n, r, l), Tr(n, l));
  }
  function fy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Zc(n, l);
  }
  function dy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), Zc(n, l);
  }
  var eh;
  eh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Rn.current)
        Nn = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Nn = !1, Bi(n, r, l);
        Nn = !!(n.flags & 131072);
      }
    else
      Nn = !1, rn && r.flags & 1048576 && cd(r, io, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        gr(n, r), n = r.pendingProps;
        var c = Oa(r, Pe.current);
        te(r, l), c = Ol(null, r, o, n, c, l);
        var d = fu();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, sn(o) ? (d = !0, fc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, yd(r), c.updater = Sc, r.stateNode = c, c._reactInternals = r, Ec(r, o, n, l), r = Vv(null, r, o, !0, d, l)) : (r.tag = 0, rn && d && dc(r), jn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (gr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = vy(o), n = ya(o, n), c) {
            case 0:
              r = vo(null, r, o, n, l);
              break e;
            case 1:
              r = _d(null, r, o, n, l);
              break e;
            case 11:
              r = Ml(null, r, o, n, l);
              break e;
            case 14:
              r = Pc(null, r, o, ya(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), vo(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), _d(n, r, o, c, l);
      case 3:
        e: {
          if (Pv(r), n === null)
            throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Hn(n, r), kl(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = po(Error(A(423)), r), r = Bc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = po(Error(A(424)), r), r = Bc(n, r, o, l, c);
              break e;
            } else
              for (ea = ei(r.stateNode.containerInfo.firstChild), ma = r, rn = !0, Na = null, l = Av(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (mn(), o === c) {
              r = ar(n, r, l);
              break e;
            }
            jn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Me(r), n === null && vc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, us(o, c) ? m = null : d !== null && us(o, d) && (r.flags |= 32), Ze(n, r), jn(n, r, m, l), r.child;
      case 6:
        return n === null && vc(r), null;
      case 13:
        return kd(n, r, l);
      case 4:
        return Ed(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = uo(r, null, o, l) : jn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), Ml(n, r, o, c, l);
      case 7:
        return jn(n, r, r.pendingProps, l), r.child;
      case 8:
        return jn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return jn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, jt(mi, o._currentValue), o._currentValue = m, d !== null)
            if (ka(d.value, m)) {
              if (d.children === c.children && !Rn.current) {
                r = ar(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var w = E.firstContext; w !== null; ) {
                    if (w.context === o) {
                      if (d.tag === 1) {
                        w = Vi(-1, l & -l), w.tag = 2;
                        var U = d.updateQueue;
                        if (U !== null) {
                          U = U.shared;
                          var Q = U.pending;
                          Q === null ? w.next = w : (w.next = Q.next, Q.next = w), U.pending = w;
                        }
                      }
                      d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), qn(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(A(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), qn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          jn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, te(r, l), c = kn(c), o = o(c), r.flags |= 1, jn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ya(o, r.pendingProps), c = ya(o.type, c), Pc(n, r, o, c, l);
      case 15:
        return ra(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), gr(n, r), r.tag = 1, sn(o) ? (n = !0, fc(r)) : n = !1, te(r, l), Mv(r, o, c), Ec(r, o, c, l), Vv(null, r, o, !0, n, l);
      case 19:
        return Ld(n, r, l);
      case 22:
        return hu(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function $d(n, r) {
    return Jt(n, r);
  }
  function py(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, o) {
    return new py(n, r, l, o);
  }
  function Yd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function vy(n) {
    if (typeof n == "function")
      return Yd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === Nt)
        return 14;
    }
    return 2;
  }
  function Al(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Jc(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Yd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case He:
            return wu(l.children, c, d, r);
          case tn:
            m = 8, c |= 8;
            break;
          case xn:
            return n = ja(12, l, r, c | 2), n.elementType = xn, n.lanes = d, n;
          case Ue:
            return n = ja(13, l, r, c), n.elementType = Ue, n.lanes = d, n;
          case qe:
            return n = ja(19, l, r, c), n.elementType = qe, n.lanes = d, n;
          case ye:
            return Ds(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Yt:
                  m = 10;
                  break e;
                case bt:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case Nt:
                  m = 14;
                  break e;
                case Rt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(A(130, n == null ? n : typeof n, ""));
        }
    return r = ja(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function wu(n, r, l, o) {
    return n = ja(7, n, o, r), n.lanes = l, n;
  }
  function Ds(n, r, l, o) {
    return n = ja(22, n, o, r), n.elementType = ye, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Os(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function xu(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function hy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yu(0), this.expirationTimes = Yu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ef(n, r, l, o, c, d, m, E, w) {
    return n = new hy(n, r, l, E, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yd(d), n;
  }
  function th(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: it, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Id(n) {
    if (!n)
      return hi;
    n = n._reactInternals;
    e: {
      if (Ge(n) !== n || n.tag !== 1)
        throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (sn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (sn(l))
        return cs(n, l, r);
    }
    return r;
  }
  function nh(n, r, l, o, c, d, m, E, w) {
    return n = ef(l, o, !0, n, c, d, m, E, w), n.context = Id(null), l = n.current, o = Cr(), c = zn(l), d = Vi(o, c), d.callback = r ?? null, bl(l, d, c), n.current.lanes = c, Di(n, c, o), Tr(n, o), n;
  }
  function Ls(n, r, l, o) {
    var c = r.current, d = Cr(), m = zn(c);
    return l = Id(l), r.context === null ? r.context = l : r.pendingContext = l, r = Vi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = bl(c, r, m), n !== null && (Rr(n, c, m, d), gc(n, c, m)), m;
  }
  function tf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function rh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Qd(n, r) {
    rh(n, r), (n = n.alternate) && rh(n, r);
  }
  function ah() {
    return null;
  }
  var Wd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function nf(n) {
    this._internalRoot = n;
  }
  Qi.prototype.render = nf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(A(409));
    Ls(n, r, null, null);
  }, Qi.prototype.unmount = nf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ul(function() {
        Ls(null, n, null, null);
      }), r[Fi] = null;
    }
  };
  function Qi(n) {
    this._internalRoot = n;
  }
  Qi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Wu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ht.length && r !== 0 && r < Ht[l].priority; l++)
        ;
      Ht.splice(l, 0, n), l === 0 && Zs(n);
    }
  };
  function Gd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function rf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ih() {
  }
  function my(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = tf(m);
          d.call(U);
        };
      }
      var m = nh(r, o, n, 0, null, !1, !1, "", ih);
      return n._reactRootContainer = m, n[Fi] = m.current, ro(n.nodeType === 8 ? n.parentNode : n), Ul(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = tf(w);
        E.call(U);
      };
    }
    var w = ef(n, 0, !1, null, null, !1, !1, "", ih);
    return n._reactRootContainer = w, n[Fi] = w.current, ro(n.nodeType === 8 ? n.parentNode : n), Ul(function() {
      Ls(r, w, l, o);
    }), w;
  }
  function af(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var w = tf(m);
          E.call(w);
        };
      }
      Ls(r, m, n, c);
    } else
      m = my(l, r, n, c, o);
    return tf(m);
  }
  ql = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qa(r.pendingLanes);
          l !== 0 && (di(r, l | 1), Tr(r, Tt()), !(dt & 6) && (Ro = Tt() + 500, Kr()));
        }
        break;
      case 13:
        Ul(function() {
          var o = ji(n, 1);
          if (o !== null) {
            var c = Cr();
            Rr(o, n, 1, c);
          }
        }), Qd(n, 1);
    }
  }, Qu = function(n) {
    if (n.tag === 13) {
      var r = ji(n, 134217728);
      if (r !== null) {
        var l = Cr();
        Rr(r, n, 134217728, l);
      }
      Qd(n, 134217728);
    }
  }, wt = function(n) {
    if (n.tag === 13) {
      var r = zn(n), l = ji(n, r);
      if (l !== null) {
        var o = Cr();
        Rr(l, n, r, o);
      }
      Qd(n, r);
    }
  }, Wu = function() {
    return kt;
  }, Gu = function(n, r) {
    var l = kt;
    try {
      return kt = n, r();
    } finally {
      kt = l;
    }
  }, xr = function(n, r, l) {
    switch (r) {
      case "input":
        if (_n(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = ke(o);
              if (!c)
                throw Error(A(90));
              Pr(o), _n(o, c);
            }
          }
        }
        break;
      case "textarea":
        sa(n, l);
        break;
      case "select":
        r = l.value, r != null && vr(n, !!l.multiple, r, !1);
    }
  }, Gl = xo, ju = Ul;
  var yy = { usingClientEntryPoint: !1, Events: [ss, ao, ke, xa, al, xo] }, bo = { findFiberByHostInstance: Da, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, gy = { bundleType: bo.bundleType, version: bo.version, rendererPackageName: bo.rendererPackageName, rendererConfig: bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: bo.findFiberByHostInstance || ah, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lf.isDisabled && lf.supportsFiber)
      try {
        ul = lf.inject(gy), Qr = lf;
      } catch {
      }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yy, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gd(r))
      throw Error(A(200));
    return th(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!Gd(n))
      throw Error(A(299));
    var l = !1, o = "", c = Wd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ef(n, 1, !1, null, null, l, !1, o, c), n[Fi] = r.current, ro(n.nodeType === 8 ? n.parentNode : n), new nf(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Ln(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return Ul(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!rf(r))
      throw Error(A(200));
    return af(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!Gd(n))
      throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Wd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = nh(r, null, n, 1, l ?? null, c, !1, d, m), n[Fi] = r.current, ro(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Qi(r);
  }, Ia.render = function(n, r, l) {
    if (!rf(r))
      throw Error(A(200));
    return af(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!rf(n))
      throw Error(A(40));
    return n._reactRootContainer ? (Ul(function() {
      af(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Fi] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = xo, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!rf(l))
      throw Error(A(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(A(38));
    return af(n, r, l, !1, o);
  }, Ia.version = "18.2.0-next-9e3b772b8-20220608", Ia;
}
var Qa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function nk() {
  return J1 || (J1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var $ = Hu, X = nR(), A = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Kt = !1;
    function on(e) {
      Kt = e;
    }
    function nt(e) {
      if (!Kt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        $t("warn", e, a);
      }
    }
    function S(e) {
      if (!Kt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        $t("error", e, a);
      }
    }
    function $t(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var he = 0, pe = 1, rt = 2, re = 3, me = 4, ie = 5, Ve = 6, Ct = 7, st = 8, fn = 9, at = 10, Qe = 11, ct = 12, _e = 13, it = 14, He = 15, tn = 16, xn = 17, Yt = 18, bt = 19, En = 21, Ue = 22, qe = 23, Nt = 24, Rt = 25, ye = !0, Z = !1, we = !1, T = !1, B = !1, le = !0, $e = !1, Fe = !1, ht = !0, Je = !0, ft = !0, et = /* @__PURE__ */ new Set(), zt = {}, Vr = {};
    function pr(e, t) {
      Pr(e, t), Pr(e + "Capture", t);
    }
    function Pr(e, t) {
      zt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), zt[e] = t;
      {
        var a = e.toLowerCase();
        Vr[a] = e, e === "onDoubleClick" && (Vr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        et.add(t[i]);
    }
    var dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yn = Object.prototype.hasOwnProperty;
    function An(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Fn(e) {
      try {
        return _n(e), !1;
      } catch {
        return !0;
      }
    }
    function _n(e) {
      return "" + e;
    }
    function Br(e, t) {
      if (Fn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), _n(e);
    }
    function $r(e) {
      if (Fn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), _n(e);
    }
    function In(e, t) {
      if (Fn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), _n(e);
    }
    function vr(e, t) {
      if (Fn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), _n(e);
    }
    function Yr(e) {
      if (Fn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), _n(e);
    }
    function hr(e) {
      if (Fn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", An(e)), _n(e);
    }
    var sa = 0, er = 1, Ir = 2, pn = 3, wr = 4, li = 5, ca = 6, J = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", xe = J + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", tt = new RegExp("^[" + J + "][" + xe + "]*$"), Lt = {}, Ut = {};
    function bn(e) {
      return Yn.call(Ut, e) ? !0 : Yn.call(Lt, e) ? !1 : tt.test(e) ? (Ut[e] = !0, !0) : (Lt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === sa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function mr(e, t, a, i) {
      if (a !== null && a.type === sa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Pt(e, t, a, i) {
      if (t === null || typeof t > "u" || mr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case pn:
            return !t;
          case wr:
            return t === !1;
          case li:
            return isNaN(t);
          case ca:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function xr(e) {
      return Ft.hasOwnProperty(e) ? Ft[e] : null;
    }
    function At(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ir || t === pn || t === wr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ft = {}, Wa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Wa.forEach(function(e) {
      Ft[e] = new At(
        e,
        sa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ft[t] = new At(
        t,
        er,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ft[e] = new At(
        e,
        Ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ft[e] = new At(
        e,
        Ir,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ft[e] = new At(
        e,
        pn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ft[e] = new At(
        e,
        pn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ft[e] = new At(
        e,
        wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ft[e] = new At(
        e,
        ca,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ft[e] = new At(
        e,
        li,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var xa = /[\-\:]([a-z])/g, al = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, al);
      Ft[t] = new At(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, al);
      Ft[t] = new At(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, al);
      Ft[t] = new At(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ft[e] = new At(
        e,
        er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Gl = "xlinkHref";
    Ft[Gl] = new At(
      "xlinkHref",
      er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ft[e] = new At(
        e,
        er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ju = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ki = !1;
    function il(e) {
      !ki && ju.test(e) && (ki = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function fa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Br(a, t), i.sanitizeURL && il("" + a);
        var s = i.attributeName, f = null;
        if (i.type === wr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Pt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Pt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === pn)
            return a;
          f = e.getAttribute(s);
        }
        return Pt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ui(e, t, a, i) {
      {
        if (!bn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Br(a, t), u === "" + a ? a : u;
      }
    }
    function da(e, t, a, i) {
      var u = xr(t);
      if (!vn(t, u, i)) {
        if (Pt(t, a, u, i) && (a = null), i || u === null) {
          if (bn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Br(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === pn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, x;
          b === pn || b === wr && a === !0 ? x = "" : (Br(a, y), x = "" + a, u.sanitizeURL && il(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var oi = Symbol.for("react.element"), _r = Symbol.for("react.portal"), pa = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), ee = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), Xe = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), Zt = Symbol.for("react.debug_trace_mode"), Jt = Symbol.for("react.offscreen"), tr = Symbol.for("react.legacy_hidden"), ci = Symbol.for("react.cache"), Vu = Symbol.for("react.tracing_marker"), Tt = Symbol.iterator, Ff = "@@iterator";
    function Ga(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Tt && e[Tt] || e[Ff];
      return typeof t == "function" ? t : null;
    }
    var lt = Object.assign, fi = 0, ll, Pu, ul, Qr, Qo, br, Wo;
    function Go() {
    }
    Go.__reactDisabledLog = !0;
    function Xs() {
      {
        if (fi === 0) {
          ll = console.log, Pu = console.info, ul = console.warn, Qr = console.error, Qo = console.group, br = console.groupCollapsed, Wo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Go,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        fi++;
      }
    }
    function Bu() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, e, {
              value: ll
            }),
            info: lt({}, e, {
              value: Pu
            }),
            warn: lt({}, e, {
              value: ul
            }),
            error: lt({}, e, {
              value: Qr
            }),
            group: lt({}, e, {
              value: Qo
            }),
            groupCollapsed: lt({}, e, {
              value: br
            }),
            groupEnd: lt({}, e, {
              value: Wo
            })
          });
        }
        fi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ol = A.ReactCurrentDispatcher, qa;
    function kr(e, t, a) {
      {
        if (qa === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            qa = i && i[1] || "";
          }
        return `
` + qa + e;
      }
    }
    var sl = !1, cl;
    {
      var fl = typeof WeakMap == "function" ? WeakMap : Map;
      cl = new fl();
    }
    function $u(e, t) {
      if (!e || sl)
        return "";
      {
        var a = cl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      sl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ol.current, ol.current = null, Xs();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (z) {
              i = z;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (z) {
              i = z;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i = z;
          }
          e();
        }
      } catch (z) {
        if (z && i && typeof z.stack == "string") {
          for (var p = z.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && cl.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        sl = !1, ol.current = s, Bu(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", M = x ? kr(x) : "";
      return typeof e == "function" && cl.set(e, M), M;
    }
    function Yu(e, t, a) {
      return $u(e, !0);
    }
    function Di(e, t, a) {
      return $u(e, !1);
    }
    function Hf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function di(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return $u(e, Hf(e));
      if (typeof e == "string")
        return kr(e);
      switch (e) {
        case Ge:
          return kr("Suspense");
        case mt:
          return kr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ce:
            return Di(e.render);
          case Xe:
            return di(e.type, t, a);
          case De: {
            var i = e, u = i._payload, s = i._init;
            try {
              return di(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function kt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ie:
          return kr(e.type);
        case tn:
          return kr("Lazy");
        case _e:
          return kr("Suspense");
        case bt:
          return kr("SuspenseList");
        case he:
        case rt:
        case He:
          return Di(e.type);
        case Qe:
          return Di(e.type.render);
        case pe:
          return Yu(e.type);
        default:
          return "";
      }
    }
    function Iu(e) {
      try {
        var t = "", a = e;
        do
          t += kt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ql(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Qu(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case pa:
          return "Fragment";
        case _r:
          return "Portal";
        case R:
          return "Profiler";
        case si:
          return "StrictMode";
        case Ge:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ee:
            var t = e;
            return Qu(t) + ".Consumer";
          case Y:
            var a = e;
            return Qu(a._context) + ".Provider";
          case ce:
            return ql(e, e.render, "ForwardRef");
          case Xe:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case De: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Gu(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Nt:
          return "Cache";
        case fn:
          var i = a;
          return Gu(i) + ".Consumer";
        case at:
          var u = a;
          return Gu(u._context) + ".Provider";
        case Yt:
          return "DehydratedFragment";
        case Qe:
          return Wu(a, a.render, "ForwardRef");
        case Ct:
          return "Fragment";
        case ie:
          return a;
        case me:
          return "Portal";
        case re:
          return "Root";
        case Ve:
          return "Text";
        case tn:
          return wt(a);
        case st:
          return a === si ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case ct:
          return "Profiler";
        case En:
          return "Scope";
        case _e:
          return "Suspense";
        case bt:
          return "SuspenseList";
        case Rt:
          return "TracingMarker";
        case pe:
        case he:
        case xn:
        case rt:
        case it:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xl = A.ReactDebugCurrentFrame, hn = null, Wr = !1;
    function Dr() {
      {
        if (hn === null)
          return null;
        var e = hn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function dl() {
      return hn === null ? "" : Iu(hn);
    }
    function Cn() {
      Xl.getCurrentStack = null, hn = null, Wr = !1;
    }
    function Ht(e) {
      Xl.getCurrentStack = e === null ? null : dl, hn = e, Wr = !1;
    }
    function Ks() {
      return hn;
    }
    function Gr(e) {
      Wr = e;
    }
    function Qn(e) {
      return "" + e;
    }
    function pi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return hr(e), e;
        default:
          return "";
      }
    }
    var Zs = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Oi(e, t) {
      Zs[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function pl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Js(e) {
      return e._valueTracker;
    }
    function _a(e) {
      e._valueTracker = null;
    }
    function vl(e) {
      var t = "";
      return e && (pl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function hl(e) {
      var t = pl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      hr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            hr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            hr(p), i = "" + p;
          },
          stopTracking: function() {
            _a(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ba(e) {
      Js(e) || (e._valueTracker = hl(e));
    }
    function qu(e) {
      if (!e)
        return !1;
      var t = Js(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = vl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ml(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var yl = !1, Kl = !1, Xu = !1, qo = !1;
    function Xa(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = lt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Oi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Kl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), Kl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !yl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), yl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: pi(t.value != null ? t.value : i),
        controlled: Xa(t)
      };
    }
    function N(e, t) {
      var a = e, i = t.checked;
      i != null && da(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = Xa(t);
        !a._wrapperState.controlled && i && !qo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), qo = !0), a._wrapperState.controlled && !i && !Xu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Xu = !0);
      }
      N(e, t);
      var u = pi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Qn(u)) : a.value !== Qn(u) && (a.value = Qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Le(a, t.type, u) : t.hasOwnProperty("defaultValue") && Le(a, t.type, pi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function q(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ne(e, t) {
      var a = e;
      F(a, t), ae(a, t);
    }
    function ae(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Br(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Rh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            qu(f), F(f, p);
          }
        }
      }
    }
    function Le(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ml(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Qn(e._wrapperState.initialValue) : e.defaultValue !== Qn(a) && (e.defaultValue = Qn(a)));
    }
    var ut = !1, xt = !1, Wt = !1;
    function Bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? $.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || xt || (xt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Wt || (Wt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ut && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ut = !0);
    }
    function Gt(e, t) {
      t.value != null && e.setAttribute("value", Qn(pi(t.value)));
    }
    var en = Array.isArray;
    function vt(e) {
      return en(e);
    }
    var Li;
    Li = !1;
    function Ku() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Xo = ["value", "defaultValue"];
    function jf(e) {
      {
        Oi("select", e);
        for (var t = 0; t < Xo.length; t++) {
          var a = Xo[t];
          if (e[a] != null) {
            var i = vt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ku()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ku());
          }
        }
      }
    }
    function Ka(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Qn(pi(a)), b = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          b === null && !u[x].disabled && (b = u[x]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Ko(e, t) {
      return lt({}, t, {
        value: void 0
      });
    }
    function Zo(e, t) {
      var a = e;
      jf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Li && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Li = !0);
    }
    function Vf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ka(a, !!t.multiple, i, !1) : t.defaultValue != null && Ka(a, !!t.multiple, t.defaultValue, !0);
    }
    function jm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ka(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ka(a, !!t.multiple, t.defaultValue, !0) : Ka(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Vm(e, t) {
      var a = e, i = t.value;
      i != null && Ka(a, !!t.multiple, i, !1);
    }
    var Pf = !1;
    function Bf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = lt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Kp(e, t) {
      var a = e;
      Oi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Pf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), Pf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (vt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: pi(i)
      };
    }
    function Zp(e, t) {
      var a = e, i = pi(t.value), u = pi(t.defaultValue);
      if (i != null) {
        var s = Qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Qn(u));
    }
    function Jp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function $f(e, t) {
      Zp(e, t);
    }
    var Mi = "http://www.w3.org/1999/xhtml", Pm = "http://www.w3.org/1998/Math/MathML", Yf = "http://www.w3.org/2000/svg";
    function ec(e) {
      switch (e) {
        case "svg":
          return Yf;
        case "math":
          return Pm;
        default:
          return Mi;
      }
    }
    function If(e, t) {
      return e == null || e === Mi ? ec(t) : e === Yf && t === "foreignObject" ? Mi : e;
    }
    var Bm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, tc, ev = Bm(function(e, t) {
      if (e.namespaceURI === Yf && !("innerHTML" in e)) {
        tc = tc || document.createElement("div"), tc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = tc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Ni = 3, Mn = 8, Za = 9, Zl = 11, nc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ni) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, tv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function nv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var rv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zu).forEach(function(e) {
      rv.forEach(function(t) {
        Zu[nv(t, e)] = Zu[e];
      });
    });
    function rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zu.hasOwnProperty(e) && Zu[e]) ? t + "px" : (vr(t, e), ("" + t).trim());
    }
    var Ju = /([A-Z])/g, $m = /^ms-/;
    function Ym(e) {
      return e.replace(Ju, "-$1").toLowerCase().replace($m, "-ms-");
    }
    var av = function() {
    };
    {
      var iv = /^(?:webkit|moz|o)[A-Z]/, lv = /^-ms-/, Jo = /-(.)/g, eo = /;\s*$/, to = {}, no = {}, uv = !1, Qf = !1, Wf = function(e) {
        return e.replace(Jo, function(t, a) {
          return a.toUpperCase();
        });
      }, Gf = function(e) {
        to.hasOwnProperty(e) && to[e] || (to[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Wf(e.replace(lv, "ms-"))
        ));
      }, ov = function(e) {
        to.hasOwnProperty(e) && to[e] || (to[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, sv = function(e, t) {
        no.hasOwnProperty(t) && no[t] || (no[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(eo, "")));
      }, cv = function(e, t) {
        uv || (uv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Im = function(e, t) {
        Qf || (Qf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      av = function(e, t) {
        e.indexOf("-") > -1 ? Gf(e) : iv.test(e) ? ov(e) : eo.test(t) && sv(e, t), typeof t == "number" && (isNaN(t) ? cv(e, t) : isFinite(t) || Im(e, t));
      };
    }
    var Qm = av;
    function Wm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Ym(i)) + ":", t += rc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function fv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Qm(i, t[i]);
          var s = rc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Gm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ka(e) {
      var t = {};
      for (var a in e)
        for (var i = tv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function es(e, t) {
      {
        if (!t)
          return;
        var a = ka(e), i = ka(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Gm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var dv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, pv = lt({
      menuitem: !0
    }, dv), vv = "__html";
    function ac(e, t) {
      if (t) {
        if (pv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(vv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function zi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ic = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, hv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ja = {}, qf = new RegExp("^(aria)-[" + xe + "]*$"), ts = new RegExp("^(aria)[A-Z][" + xe + "]*$");
    function Xf(e, t) {
      {
        if (Yn.call(Ja, t) && Ja[t])
          return !0;
        if (ts.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = hv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ja[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ja[t] = !0, !0;
        }
        if (qf.test(t)) {
          var u = t.toLowerCase(), s = hv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ja[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ja[t] = !0, !0;
        }
      }
      return !0;
    }
    function mv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Xf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function lc(e, t) {
      zi(e, t) || mv(e, t);
    }
    var Jl = !1;
    function Kf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Jl && (Jl = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Zf = function() {
    };
    {
      var Wn = {}, Jf = /^on./, yv = /^on[^A-Z]/, gv = new RegExp("^(aria)-[" + xe + "]*$"), Sv = new RegExp("^(aria)[A-Z][" + xe + "]*$");
      Zf = function(e, t, a, i) {
        if (Yn.call(Wn, t) && Wn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Wn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Wn[t] = !0, !0;
          if (Jf.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Wn[t] = !0, !0;
        } else if (Jf.test(t))
          return yv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wn[t] = !0, !0;
        if (gv.test(t) || Sv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var v = xr(t), y = v !== null && v.type === sa;
        if (ic.hasOwnProperty(u)) {
          var g = ic[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Wn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && mr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : y ? !0 : mr(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === pn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var Ev = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Zf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Cv(e, t, a) {
      zi(e, t) || Ev(e, t, a);
    }
    var Ui = 1, ns = 1 << 1, eu = 1 << 2, qm = Ui | ns | eu, rs = null;
    function as(e) {
      rs !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), rs = e;
    }
    function Xm() {
      rs === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), rs = null;
    }
    function Rv(e) {
      return e === rs;
    }
    function uc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ni ? t.parentNode : t;
    }
    var qt = null, gl = null, Ai = null;
    function ro(e) {
      var t = Oo(e);
      if (t) {
        if (typeof qt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Rh(a);
          qt(t.stateNode, t.type, i);
        }
      }
    }
    function Tv(e) {
      qt = e;
    }
    function oc(e) {
      gl ? Ai ? Ai.push(e) : Ai = [e] : gl = e;
    }
    function is() {
      return gl !== null || Ai !== null;
    }
    function ls() {
      if (gl) {
        var e = gl, t = Ai;
        if (gl = null, Ai = null, ro(e), t)
          for (var a = 0; a < t.length; a++)
            ro(t[a]);
      }
    }
    var tu = function(e, t) {
      return e(t);
    }, ed = function() {
    }, td = !1;
    function Km() {
      var e = is();
      e && (ed(), ls());
    }
    function nd(e, t, a) {
      if (td)
        return e(t, a);
      td = !0;
      try {
        return tu(e, t, a);
      } finally {
        td = !1, Km();
      }
    }
    function sc(e, t, a) {
      tu = e, ed = a;
    }
    function cc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function rd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && cc(t));
        default:
          return !1;
      }
    }
    function nu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Rh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (rd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var us = !1;
    if (dn)
      try {
        var ru = {};
        Object.defineProperty(ru, "passive", {
          get: function() {
            us = !0;
          }
        }), window.addEventListener("test", ru, ru), window.removeEventListener("test", ru, ru);
      } catch {
        us = !1;
      }
    function wv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var ad = wv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var id = document.createElement("react");
      ad = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, x = !0, M = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          id.removeEventListener(j, Oe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var fe = Array.prototype.slice.call(arguments, 3);
        function Oe() {
          b = !0, H(), a.apply(i, fe), x = !1;
        }
        var Te, St = !1, pt = !1;
        function D(O) {
          if (Te = O.error, St = !0, Te === null && O.colno === 0 && O.lineno === 0 && (pt = !0), O.defaultPrevented && Te != null && typeof Te == "object")
            try {
              Te._suppressLogging = !0;
            } catch {
            }
        }
        var j = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), id.addEventListener(j, Oe, !1), g.initEvent(j, !1, !1), id.dispatchEvent(g), z && Object.defineProperty(window, "event", z), b && x && (St ? pt && (Te = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Te = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Te)), window.removeEventListener("error", D), !b)
          return H(), wv.apply(this, arguments);
      };
    }
    var Zm = ad, Sl = !1, ei = null, os = !1, El = null, vi = {
      onError: function(e) {
        Sl = !0, ei = e;
      }
    };
    function au(e, t, a, i, u, s, f, p, v) {
      Sl = !1, ei = null, Zm.apply(vi, arguments);
    }
    function Fi(e, t, a, i, u, s, f, p, v) {
      if (au.apply(this, arguments), Sl) {
        var y = ud();
        os || (os = !0, El = y);
      }
    }
    function ld() {
      if (os) {
        var e = El;
        throw os = !1, El = null, e;
      }
    }
    function Jm() {
      return Sl;
    }
    function ud() {
      if (Sl) {
        var e = ei;
        return Sl = !1, ei = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Da(e) {
      return e._reactInternals;
    }
    function ss(e) {
      return e._reactInternals !== void 0;
    }
    function ao(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), Cl = (
      /*                */
      1
    ), nn = (
      /*                    */
      2
    ), Ke = (
      /*                       */
      4
    ), Mt = (
      /*                */
      16
    ), jt = (
      /*                 */
      32
    ), hi = (
      /*                     */
      64
    ), Pe = (
      /*                   */
      128
    ), Rn = (
      /*            */
      256
    ), Xr = (
      /*                          */
      512
    ), Oa = (
      /*                     */
      1024
    ), sn = (
      /*                      */
      2048
    ), La = (
      /*                    */
      4096
    ), Rl = (
      /*                   */
      8192
    ), cs = (
      /*             */
      16384
    ), fc = sn | Ke | hi | Xr | Oa | cs, xv = (
      /*               */
      32767
    ), va = (
      /*                   */
      32768
    ), Gn = (
      /*                */
      65536
    ), fs = (
      /* */
      131072
    ), od = (
      /*                       */
      1048576
    ), sd = (
      /*                    */
      2097152
    ), Kr = (
      /*                 */
      4194304
    ), Tl = (
      /*                */
      8388608
    ), Zr = (
      /*               */
      16777216
    ), iu = (
      /*              */
      33554432
    ), io = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ke | Oa | 0
    ), Jr = nn | Ke | Mt | jt | Xr | La | Rl, yr = Ke | hi | Xr | Rl, Ma = sn | Mt, nr = Kr | Tl | sd, Hi = A.ReactCurrentOwner;
    function ha(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (nn | La)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === re ? a : null;
    }
    function cd(e) {
      if (e.tag === _e) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function dc(e) {
      return e.tag === re ? e.stateNode.containerInfo : null;
    }
    function fd(e) {
      return ha(e) === e;
    }
    function ma(e) {
      {
        var t = Hi.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Da(e);
      return u ? ha(u) === u : !1;
    }
    function ea(e) {
      if (ha(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function rn(e) {
      var t = e.alternate;
      if (!t) {
        var a = ha(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ea(s), e;
            if (v === u)
              return ea(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== re)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Na(e) {
      var t = rn(e);
      return t !== null ? dd(t) : null;
    }
    function dd(e) {
      if (e.tag === ie || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = dd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function _v(e) {
      var t = rn(e);
      return t !== null ? pc(t) : null;
    }
    function pc(e) {
      if (e.tag === ie || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== me) {
          var a = pc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vc = X.unstable_scheduleCallback, bv = X.unstable_cancelCallback, hc = X.unstable_shouldYield, kv = X.unstable_requestPaint, mn = X.unstable_now, pd = X.unstable_getCurrentPriorityLevel, mc = X.unstable_ImmediatePriority, ya = X.unstable_UserBlockingPriority, mi = X.unstable_NormalPriority, yc = X.unstable_LowPriority, wl = X.unstable_IdlePriority, vd = X.unstable_yieldValue, hd = X.unstable_setDisableYieldValue, xl = null, qn = null, te = null, kn = !1, rr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function md(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ht && (e = lt({}, e, {
          getLaneLabelMap: bl,
          injectProfilingHooks: Vi
        })), xl = t.inject(e), qn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Dv(e, t) {
      if (qn && typeof qn.onScheduleFiberRoot == "function")
        try {
          qn.onScheduleFiberRoot(xl, e, t);
        } catch (a) {
          kn || (kn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function ji(e, t) {
      if (qn && typeof qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Pe) === Pe;
          if (Je) {
            var i;
            switch (t) {
              case gr:
                i = mc;
                break;
              case ar:
                i = ya;
                break;
              case Bi:
                i = mi;
                break;
              case Es:
                i = wl;
                break;
              default:
                i = mi;
                break;
            }
            qn.onCommitFiberRoot(xl, e, i, a);
          }
        } catch (u) {
          kn || (kn = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function _l(e) {
      if (qn && typeof qn.onPostCommitFiberRoot == "function")
        try {
          qn.onPostCommitFiberRoot(xl, e);
        } catch (t) {
          kn || (kn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yd(e) {
      if (qn && typeof qn.onCommitFiberUnmount == "function")
        try {
          qn.onCommitFiberUnmount(xl, e);
        } catch (t) {
          kn || (kn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Hn(e) {
      if (typeof vd == "function" && (hd(e), on(e)), qn && typeof qn.setStrictMode == "function")
        try {
          qn.setStrictMode(xl, e);
        } catch (t) {
          kn || (kn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Vi(e) {
      te = e;
    }
    function bl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < an; a++) {
          var i = ey(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function gc(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function gd() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function kl(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function lu() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function Ov(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function Sd() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function Sc(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function Lv() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function Mv(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function Nv() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function Ec(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function lo() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function Cc(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function zv(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function Uv(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function uo() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Av(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function ds() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function ti(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function ps() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function oo() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function uu(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function Ed(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function Dl(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var Me = (
      /*                         */
      0
    ), ot = (
      /*                 */
      1
    ), ze = (
      /*                    */
      2
    ), yn = (
      /*               */
      8
    ), za = (
      /*              */
      16
    ), Rc = Math.clz32 ? Math.clz32 : ou, Tc = Math.log, Cd = Math.LN2;
    function ou(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Tc(t) / Cd | 0) | 0;
    }
    var an = 31, V = (
      /*                        */
      0
    ), yt = (
      /*                          */
      0
    ), Ae = (
      /*                        */
      1
    ), yi = (
      /*    */
      2
    ), ga = (
      /*             */
      4
    ), su = (
      /*            */
      8
    ), ln = (
      /*                     */
      16
    ), cu = (
      /*                */
      32
    ), Ol = (
      /*                       */
      4194240
    ), fu = (
      /*                        */
      64
    ), Ua = (
      /*                        */
      128
    ), ta = (
      /*                        */
      256
    ), du = (
      /*                        */
      512
    ), vs = (
      /*                        */
      1024
    ), hs = (
      /*                        */
      2048
    ), wc = (
      /*                        */
      4096
    ), xc = (
      /*                        */
      8192
    ), _c = (
      /*                        */
      16384
    ), bc = (
      /*                       */
      32768
    ), kc = (
      /*                       */
      65536
    ), Dc = (
      /*                       */
      131072
    ), Oc = (
      /*                       */
      262144
    ), Lc = (
      /*                       */
      524288
    ), pu = (
      /*                       */
      1048576
    ), Mc = (
      /*                       */
      2097152
    ), vu = (
      /*                            */
      130023424
    ), Pi = (
      /*                             */
      4194304
    ), Nc = (
      /*                             */
      8388608
    ), ms = (
      /*                             */
      16777216
    ), zc = (
      /*                             */
      33554432
    ), Uc = (
      /*                             */
      67108864
    ), Rd = Pi, so = (
      /*          */
      134217728
    ), Ac = (
      /*                          */
      268435455
    ), co = (
      /*               */
      268435456
    ), Ll = (
      /*                        */
      536870912
    ), na = (
      /*                   */
      1073741824
    );
    function ey(e) {
      {
        if (e & Ae)
          return "Sync";
        if (e & yi)
          return "InputContinuousHydration";
        if (e & ga)
          return "InputContinuous";
        if (e & su)
          return "DefaultHydration";
        if (e & ln)
          return "Default";
        if (e & cu)
          return "TransitionHydration";
        if (e & Ol)
          return "Transition";
        if (e & vu)
          return "Retry";
        if (e & so)
          return "SelectiveHydration";
        if (e & co)
          return "IdleHydration";
        if (e & Ll)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var Xt = -1, Fc = fu, Hc = Pi;
    function fo(e) {
      switch (Nn(e)) {
        case Ae:
          return Ae;
        case yi:
          return yi;
        case ga:
          return ga;
        case su:
          return su;
        case ln:
          return ln;
        case cu:
          return cu;
        case fu:
        case Ua:
        case ta:
        case du:
        case vs:
        case hs:
        case wc:
        case xc:
        case _c:
        case bc:
        case kc:
        case Dc:
        case Oc:
        case Lc:
        case pu:
        case Mc:
          return e & Ol;
        case Pi:
        case Nc:
        case ms:
        case zc:
        case Uc:
          return e & vu;
        case so:
          return so;
        case co:
          return co;
        case Ll:
          return Ll;
        case na:
          return na;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ys(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, u = e.suspendedLanes, s = e.pingedLanes, f = a & Ac;
      if (f !== V) {
        var p = f & ~u;
        if (p !== V)
          i = fo(p);
        else {
          var v = f & s;
          v !== V && (i = fo(v));
        }
      } else {
        var y = a & ~u;
        y !== V ? i = fo(y) : s !== V && (i = fo(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === V) {
        var g = Nn(i), b = Nn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ln && (b & Ol) !== V
        )
          return t;
      }
      (i & ga) !== V && (i |= a & ln);
      var x = e.entangledLanes;
      if (x !== V)
        for (var M = e.entanglements, z = i & x; z > 0; ) {
          var H = Ml(z), fe = 1 << H;
          i |= M[H], z &= ~fe;
        }
      return i;
    }
    function Fv(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var u = Ml(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function jc(e, t) {
      switch (e) {
        case Ae:
        case yi:
        case ga:
          return t + 250;
        case su:
        case ln:
        case cu:
        case fu:
        case Ua:
        case ta:
        case du:
        case vs:
        case hs:
        case wc:
        case xc:
        case _c:
        case bc:
        case kc:
        case Dc:
        case Oc:
        case Lc:
        case pu:
        case Mc:
          return t + 5e3;
        case Pi:
        case Nc:
        case ms:
        case zc:
        case Uc:
          return Xt;
        case so:
        case co:
        case Ll:
        case na:
          return Xt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function ty(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ml(f), v = 1 << p, y = s[p];
        y === Xt ? ((v & i) === V || (v & u) !== V) && (s[p] = jc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ny(e) {
      return fo(e.pendingLanes);
    }
    function Td(e) {
      var t = e.pendingLanes & ~na;
      return t !== V ? t : t & na ? na : V;
    }
    function po(e) {
      return (e & Ae) !== V;
    }
    function gs(e) {
      return (e & Ac) !== V;
    }
    function Vc(e) {
      return (e & vu) === e;
    }
    function ry(e) {
      var t = Ae | ga | ln;
      return (e & t) === V;
    }
    function Hv(e) {
      return (e & Ol) === e;
    }
    function Ss(e, t) {
      var a = yi | ga | su | ln;
      return (t & a) !== V;
    }
    function jv(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function wd(e) {
      return (e & Ol) !== V;
    }
    function xd() {
      var e = Fc;
      return Fc <<= 1, (Fc & Ol) === V && (Fc = fu), e;
    }
    function ay() {
      var e = Hc;
      return Hc <<= 1, (Hc & vu) === V && (Hc = Pi), e;
    }
    function Nn(e) {
      return e & -e;
    }
    function jn(e) {
      return Nn(e);
    }
    function Ml(e) {
      return 31 - Rc(e);
    }
    function Pc(e) {
      return Ml(e);
    }
    function ra(e, t) {
      return (e & t) !== V;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function Ze(e, t) {
      return e | t;
    }
    function vo(e, t) {
      return e & ~t;
    }
    function _d(e, t) {
      return e & t;
    }
    function Vv(e) {
      return e;
    }
    function Pv(e, t) {
      return e !== yt && e < t ? e : t;
    }
    function Bc(e) {
      for (var t = [], a = 0; a < an; a++)
        t.push(e);
      return t;
    }
    function mu(e, t, a) {
      e.pendingLanes |= t, t !== Ll && (e.suspendedLanes = V, e.pingedLanes = V);
      var i = e.eventTimes, u = Pc(t);
      i[u] = a;
    }
    function bd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ml(i), s = 1 << u;
        a[u] = Xt, i &= ~s;
      }
    }
    function kd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Dd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ml(f), v = 1 << p;
        i[p] = V, u[p] = Xt, s[p] = Xt, f &= ~v;
      }
    }
    function ho(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ml(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function iy(e, t) {
      var a = Nn(t), i;
      switch (a) {
        case ga:
          i = yi;
          break;
        case ln:
          i = su;
          break;
        case fu:
        case Ua:
        case ta:
        case du:
        case vs:
        case hs:
        case wc:
        case xc:
        case _c:
        case bc:
        case kc:
        case Dc:
        case Oc:
        case Lc:
        case pu:
        case Mc:
        case Pi:
        case Nc:
        case ms:
        case zc:
        case Uc:
          i = cu;
          break;
        case Ll:
          i = co;
          break;
        default:
          i = yt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== yt ? yt : i;
    }
    function Od(e, t, a) {
      if (rr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Pc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function $c(e, t) {
      if (rr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Pc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ld(e, t) {
      return null;
    }
    var gr = Ae, ar = ga, Bi = ln, Es = Ll, yu = yt;
    function Aa() {
      return yu;
    }
    function Vn(e) {
      yu = e;
    }
    function Cs(e, t) {
      var a = yu;
      try {
        return yu = e, t();
      } finally {
        yu = a;
      }
    }
    function Sr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ly(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Md(e, t) {
      return e !== 0 && e < t;
    }
    function Rs(e) {
      var t = Nn(e);
      return Md(gr, t) ? Md(ar, t) ? gs(t) ? Bi : Es : ar : gr;
    }
    function Pn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Bv;
    function ve(e) {
      Bv = e;
    }
    function mo(e) {
      Bv(e);
    }
    var Ts;
    function $v(e) {
      Ts = e;
    }
    var Yv;
    function ws(e) {
      Yv = e;
    }
    var xs;
    function Nd(e) {
      xs = e;
    }
    var zd;
    function Iv(e) {
      zd = e;
    }
    var Yc = !1, yo = [], gi = null, cn = null, Xn = null, Fa = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), $i = [], ni = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Qv(e) {
      return ni.indexOf(e) > -1;
    }
    function Si(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Wv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          gi = null;
          break;
        case "dragenter":
        case "dragleave":
          cn = null;
          break;
        case "mouseover":
        case "mouseout":
          Xn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Fa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          go.delete(i);
          break;
        }
      }
    }
    function So(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Si(t, a, i, u, s);
        if (t !== null) {
          var p = Oo(t);
          p !== null && Ts(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Gv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return gi = So(gi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return cn = So(cn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Xn = So(Xn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Fa.set(y, So(Fa.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return go.set(b, So(go.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Ud(e) {
      var t = zs(e.target);
      if (t !== null) {
        var a = ha(t);
        if (a !== null) {
          var i = a.tag;
          if (i === _e) {
            var u = cd(a);
            if (u !== null) {
              e.blockedOn = u, zd(e.priority, function() {
                Yv(a);
              });
              return;
            }
          } else if (i === re) {
            var s = a.stateNode;
            if (Pn(s)) {
              e.blockedOn = dc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function qv(e) {
      for (var t = xs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < $i.length && Md(t, $i[i].priority); i++)
        ;
      $i.splice(i, 0, a), i === 0 && Ud(a);
    }
    function Ic(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = gu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          as(s), u.target.dispatchEvent(s), Xm();
        } else {
          var f = Oo(i);
          return f !== null && Ts(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function _s(e, t, a) {
      Ic(e) && a.delete(t);
    }
    function Ad() {
      Yc = !1, gi !== null && Ic(gi) && (gi = null), cn !== null && Ic(cn) && (cn = null), Xn !== null && Ic(Xn) && (Xn = null), Fa.forEach(_s), go.forEach(_s);
    }
    function Er(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Yc || (Yc = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, Ad)));
    }
    function dt(e) {
      if (yo.length > 0) {
        Er(yo[0], e);
        for (var t = 1; t < yo.length; t++) {
          var a = yo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      gi !== null && Er(gi, e), cn !== null && Er(cn, e), Xn !== null && Er(Xn, e);
      var i = function(p) {
        return Er(p, e);
      };
      Fa.forEach(i), go.forEach(i);
      for (var u = 0; u < $i.length; u++) {
        var s = $i[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; $i.length > 0; ) {
        var f = $i[0];
        if (f.blockedOn !== null)
          break;
        Ud(f), f.blockedOn === null && $i.shift();
      }
    }
    var gn = A.ReactCurrentBatchConfig, Tn = !0;
    function Kn(e) {
      Tn = !!e;
    }
    function Sa() {
      return Tn;
    }
    function Eo(e, t, a) {
      var i = Or(t), u;
      switch (i) {
        case gr:
          u = Bn;
          break;
        case ar:
          u = bs;
          break;
        case Bi:
        default:
          u = Yi;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Bn(e, t, a, i) {
      var u = Aa(), s = gn.transition;
      gn.transition = null;
      try {
        Vn(gr), Yi(e, t, a, i);
      } finally {
        Vn(u), gn.transition = s;
      }
    }
    function bs(e, t, a, i) {
      var u = Aa(), s = gn.transition;
      gn.transition = null;
      try {
        Vn(ar), Yi(e, t, a, i);
      } finally {
        Vn(u), gn.transition = s;
      }
    }
    function Yi(e, t, a, i) {
      Tn && Qc(e, t, a, i);
    }
    function Qc(e, t, a, i) {
      var u = gu(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Co, a), Wv(e, i);
        return;
      }
      if (Gv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Wv(e, i), t & eu && Qv(e)) {
        for (; u !== null; ) {
          var s = Oo(u);
          s !== null && mo(s);
          var f = gu(e, t, a, i);
          if (f === null && _y(e, t, i, Co, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Co = null;
    function gu(e, t, a, i) {
      Co = null;
      var u = uc(i), s = zs(u);
      if (s !== null) {
        var f = ha(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === _e) {
            var v = cd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === re) {
            var y = f.stateNode;
            if (Pn(y))
              return dc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Co = s, null;
    }
    function Or(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return gr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return ar;
        case "message": {
          var t = pd();
          switch (t) {
            case mc:
              return gr;
            case ya:
              return ar;
            case mi:
            case yc:
              return Bi;
            case wl:
              return Es;
            default:
              return Bi;
          }
        }
        default:
          return Bi;
      }
    }
    function Fd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ro(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ii(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Wc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Su = null, Ei = null, Nl = null;
    function zl(e) {
      return Su = e, Ei = qc(), !0;
    }
    function Gc() {
      Su = null, Ei = null, Nl = null;
    }
    function To() {
      if (Nl)
        return Nl;
      var e, t = Ei, a = t.length, i, u = qc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Nl = u.slice(e, p), Nl;
    }
    function qc() {
      return "value" in Su ? Su.value : Su.textContent;
    }
    function Eu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cu() {
      return !0;
    }
    function Cr() {
      return !1;
    }
    function zn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Cu : this.isDefaultPrevented = Cr, this.isPropagationStopped = Cr, this;
      }
      return lt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Cu
      }), t;
    }
    var Rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Tr = zn(Rr), wo = lt({}, Rr, {
      view: 0,
      detail: 0
    }), Hd = zn(wo), ks, jd, Ha;
    function Xv(e) {
      e !== Ha && (Ha && e.type === "mousemove" ? (ks = e.screenX - Ha.screenX, jd = e.screenY - Ha.screenY) : (ks = 0, jd = 0), Ha = e);
    }
    var xo = lt({}, wo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Xv(e), ks);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : jd;
      }
    }), Ul = zn(xo), Vd = lt({}, xo, {
      dataTransfer: 0
    }), Ru = zn(Vd), Kv = lt({}, wo, {
      relatedTarget: 0
    }), Xc = zn(Kv), Pd = lt({}, Rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Kc = zn(Pd), uy = lt({}, Rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), oy = zn(uy), Zv = lt({}, Rr, {
      data: 0
    }), Bd = zn(Zv), Tu = Bd, sy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, _o = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Jv(e) {
      if (e.key) {
        var t = sy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Eu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? _o[e.keyCode] || "Unidentified" : "";
    }
    var wn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function cy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = wn[e];
      return i ? !!a[i] : !1;
    }
    function Zc(e) {
      return cy;
    }
    var fy = lt({}, wo, {
      key: Jv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Eu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Eu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), dy = zn(fy), eh = lt({}, xo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), $d = zn(eh), py = lt({}, wo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zc
    }), ja = zn(py), Yd = lt({}, Rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), vy = zn(Yd), Al = lt({}, xo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Jc = zn(Al), wu = [9, 13, 27, 32], Ds = 229, Os = dn && "CompositionEvent" in window, xu = null;
    dn && "documentMode" in document && (xu = document.documentMode);
    var hy = dn && "TextEvent" in window && !xu, ef = dn && (!Os || xu && xu > 8 && xu <= 11), th = 32, Id = String.fromCharCode(th);
    function nh() {
      pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ls = !1;
    function tf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function rh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Qd(e, t) {
      return e === "keydown" && t.keyCode === Ds;
    }
    function ah(e, t) {
      switch (e) {
        case "keyup":
          return wu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ds;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Wd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function nf(e) {
      return e.locale === "ko";
    }
    var Qi = !1;
    function Gd(e, t, a, i, u) {
      var s, f;
      if (Os ? s = rh(t) : Qi ? ah(t, i) && (s = "onCompositionEnd") : Qd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ef && !nf(i) && (!Qi && s === "onCompositionStart" ? Qi = zl(u) : s === "onCompositionEnd" && Qi && (f = To()));
      var p = sh(a, s);
      if (p.length > 0) {
        var v = new Bd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Wd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function rf(e, t) {
      switch (e) {
        case "compositionend":
          return Wd(t);
        case "keypress":
          var a = t.which;
          return a !== th ? null : (Ls = !0, Id);
        case "textInput":
          var i = t.data;
          return i === Id && Ls ? null : i;
        default:
          return null;
      }
    }
    function ih(e, t) {
      if (Qi) {
        if (e === "compositionend" || !Os && ah(e, t)) {
          var a = To();
          return Gc(), Qi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!tf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ef && !nf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function my(e, t, a, i, u) {
      var s;
      if (hy ? s = rf(t, i) : s = ih(t, i), !s)
        return null;
      var f = sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Tu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function af(e, t, a, i, u, s, f) {
      Gd(e, t, a, i, u), my(e, t, a, i, u);
    }
    var yy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function bo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!yy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function gy(e) {
      if (!dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function lf() {
      pr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      oc(i);
      var u = sh(t, "onChange");
      if (u.length > 0) {
        var s = new Tr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, uc(e)), nd(d, t);
    }
    function d(e) {
      x0(e, 0);
    }
    function m(e) {
      var t = df(e);
      if (qu(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var w = !1;
    dn && (w = gy("input") && (!document.documentMode || document.documentMode > 9));
    function U(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", W);
    }
    function Q() {
      r && (r.detachEvent("onpropertychange", W), r = null, l = null);
    }
    function W(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function I(e, t, a) {
      e === "focusin" ? (Q(), U(t, a)) : e === "focusout" && Q();
    }
    function oe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function ge(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ce(e, t) {
      if (e === "click")
        return m(t);
    }
    function Dn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function k(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Le(e, "number", e.value);
    }
    function _(e, t, a, i, u, s, f) {
      var p = a ? df(a) : window, v, y;
      if (o(p) ? v = E : bo(p) ? w ? v = Dn : (v = oe, y = I) : ge(p) && (v = Ce), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && k(p);
    }
    function L() {
      Pr("onMouseEnter", ["mouseout", "mouseover"]), Pr("onMouseLeave", ["mouseout", "mouseover"]), Pr("onPointerEnter", ["pointerout", "pointerover"]), Pr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function K(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Rv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (zs(y) || op(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var x, M;
        if (v) {
          var z = i.relatedTarget || i.toElement;
          if (x = a, M = z ? zs(z) : null, M !== null) {
            var H = ha(M);
            (M !== H || M.tag !== ie && M.tag !== Ve) && (M = null);
          }
        } else
          x = null, M = a;
        if (x !== M) {
          var fe = Ul, Oe = "onMouseLeave", Te = "onMouseEnter", St = "mouse";
          (t === "pointerout" || t === "pointerover") && (fe = $d, Oe = "onPointerLeave", Te = "onPointerEnter", St = "pointer");
          var pt = x == null ? g : df(x), D = M == null ? g : df(M), j = new fe(Oe, St + "leave", x, i, u);
          j.target = pt, j.relatedTarget = D;
          var O = null, G = zs(u);
          if (G === a) {
            var de = new fe(Te, St + "enter", M, i, u);
            de.target = D, de.relatedTarget = pt, O = de;
          }
          wR(e, j, O, x, M);
        }
      }
    }
    function Re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Se = typeof Object.is == "function" ? Object.is : Re;
    function be(e, t) {
      if (Se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Yn.call(t, s) || !Se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Be(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Zn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function _t(e, t) {
      for (var a = Be(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ni) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Be(Zn(a));
      }
    }
    function Fl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Sy(e, u, s, f, p);
    }
    function Sy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e:
        for (; ; ) {
          for (var x = null; g === t && (a === 0 || g.nodeType === Ni) && (f = s + a), g === i && (u === 0 || g.nodeType === Ni) && (p = s + u), g.nodeType === Ni && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
            b = g, g = x;
          for (; ; ) {
            if (g === e)
              break e;
            if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
              break;
            g = b, b = g.parentNode;
          }
          g = x;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function iR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = _t(e, f), g = _t(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function p0(e) {
      return e && e.nodeType === Ni;
    }
    function v0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : p0(e) ? !1 : p0(t) ? v0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function lR(e) {
      return e && e.ownerDocument && v0(e.ownerDocument.documentElement, e);
    }
    function uR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function h0() {
      for (var e = window, t = ml(); t instanceof e.HTMLIFrameElement; ) {
        if (uR(t))
          e = t.contentWindow;
        else
          return t;
        t = ml(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function oR() {
      var e = h0();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? cR(e) : null
      };
    }
    function sR(e) {
      var t = h0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && lR(a)) {
        i !== null && Ey(a) && fR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function cR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Fl(e), t || {
        start: 0,
        end: 0
      };
    }
    function fR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : iR(e, t);
    }
    var dR = dn && "documentMode" in document && document.documentMode <= 11;
    function pR() {
      pr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var uf = null, Cy = null, qd = null, Ry = !1;
    function vR(e) {
      if ("selectionStart" in e && Ey(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function hR(e) {
      return e.window === e ? e.document : e.nodeType === Za ? e : e.ownerDocument;
    }
    function m0(e, t, a) {
      var i = hR(a);
      if (!(Ry || uf == null || uf !== ml(i))) {
        var u = vR(uf);
        if (!qd || !be(qd, u)) {
          qd = u;
          var s = sh(Cy, "onSelect");
          if (s.length > 0) {
            var f = new Tr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = uf;
          }
        }
      }
    }
    function mR(e, t, a, i, u, s, f) {
      var p = a ? df(a) : window;
      switch (t) {
        case "focusin":
          (bo(p) || p.contentEditable === "true") && (uf = p, Cy = a, qd = null);
          break;
        case "focusout":
          uf = null, Cy = null, qd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, m0(e, i, u);
          break;
        case "selectionchange":
          if (dR)
            break;
        case "keydown":
        case "keyup":
          m0(e, i, u);
      }
    }
    function lh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var of = {
      animationend: lh("Animation", "AnimationEnd"),
      animationiteration: lh("Animation", "AnimationIteration"),
      animationstart: lh("Animation", "AnimationStart"),
      transitionend: lh("Transition", "TransitionEnd")
    }, Ty = {}, y0 = {};
    dn && (y0 = document.createElement("div").style, "AnimationEvent" in window || (delete of.animationend.animation, delete of.animationiteration.animation, delete of.animationstart.animation), "TransitionEvent" in window || delete of.transitionend.transition);
    function uh(e) {
      if (Ty[e])
        return Ty[e];
      if (!of[e])
        return e;
      var t = of[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in y0)
          return Ty[e] = t[a];
      return e;
    }
    var g0 = uh("animationend"), S0 = uh("animationiteration"), E0 = uh("animationstart"), C0 = uh("transitionend"), R0 = /* @__PURE__ */ new Map(), T0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ko(e, t) {
      R0.set(e, t), pr(t, [e]);
    }
    function yR() {
      for (var e = 0; e < T0.length; e++) {
        var t = T0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ko(a, "on" + i);
      }
      ko(g0, "onAnimationEnd"), ko(S0, "onAnimationIteration"), ko(E0, "onAnimationStart"), ko("dblclick", "onDoubleClick"), ko("focusin", "onFocus"), ko("focusout", "onBlur"), ko(C0, "onTransitionEnd");
    }
    function gR(e, t, a, i, u, s, f) {
      var p = R0.get(t);
      if (p !== void 0) {
        var v = Tr, y = t;
        switch (t) {
          case "keypress":
            if (Eu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = dy;
            break;
          case "focusin":
            y = "focus", v = Xc;
            break;
          case "focusout":
            y = "blur", v = Xc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Xc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Ul;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ru;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ja;
            break;
          case g0:
          case S0:
          case E0:
            v = Kc;
            break;
          case C0:
            v = vy;
            break;
          case "scroll":
            v = Hd;
            break;
          case "wheel":
            v = Jc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = oy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = $d;
            break;
        }
        var g = (s & eu) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = RR(a, p, i.type, g, b);
          if (x.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: x
            });
          }
        }
      }
    }
    yR(), L(), lf(), pR(), nh();
    function SR(e, t, a, i, u, s, f) {
      gR(e, t, a, i, u, s);
      var p = (s & qm) === 0;
      p && (K(e, t, a, i, u), _(e, t, a, i, u), mR(e, t, a, i, u), af(e, t, a, i, u));
    }
    var Xd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Xd));
    function w0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Fi(i, t, void 0, e), e.currentTarget = null;
    }
    function ER(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          w0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, x = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          w0(e, M, x), i = b;
        }
    }
    function x0(e, t) {
      for (var a = (t & eu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        ER(s, f, a);
      }
      ld();
    }
    function CR(e, t, a, i, u) {
      var s = uc(a), f = [];
      SR(f, e, i, a, s, t), x0(f, t);
    }
    function Sn(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = KT(t), u = xR(e, a);
      i.has(u) || (_0(t, e, ns, a), i.add(u));
    }
    function xy(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= eu), _0(a, e, i, t);
    }
    var oh = "_reactListening" + Math.random().toString(36).slice(2);
    function Kd(e) {
      if (!e[oh]) {
        e[oh] = !0, et.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === Za ? e : e.ownerDocument;
        t !== null && (t[oh] || (t[oh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function _0(e, t, a, i, u) {
      var s = Eo(e, t, a), f = void 0;
      us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Ii(e, t, s, f) : Ro(e, t, s) : f !== void 0 ? Wc(e, t, s, f) : Fd(e, t, s);
    }
    function b0(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & Ui) && !(t & ns)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === re || v === me) {
                var y = p.stateNode.containerInfo;
                if (b0(y, f))
                  break;
                if (v === me)
                  for (var g = p.return; g !== null; ) {
                    var b = g.tag;
                    if (b === re || b === me) {
                      var x = g.stateNode.containerInfo;
                      if (b0(x, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var M = zs(y);
                  if (M === null)
                    return;
                  var z = M.tag;
                  if (z === ie || z === Ve) {
                    p = s = M;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      nd(function() {
        return CR(e, t, a, s);
      });
    }
    function Zd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function RR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, x = b.stateNode, M = b.tag;
        if (M === ie && x !== null && (g = x, p !== null)) {
          var z = nu(y, p);
          z != null && v.push(Zd(y, z, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ie && f !== null) {
          var v = f, y = nu(u, a);
          y != null && i.unshift(Zd(u, y, v));
          var g = nu(u, t);
          g != null && i.push(Zd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function sf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ie);
      return e || null;
    }
    function TR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = sf(s))
        u++;
      for (var f = 0, p = i; p; p = sf(p))
        f++;
      for (; u - f > 0; )
        a = sf(a), u--;
      for (; f - u > 0; )
        i = sf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = sf(a), i = sf(i);
      }
      return null;
    }
    function k0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ie && g !== null) {
          var x = g;
          if (u) {
            var M = nu(p, s);
            M != null && f.unshift(Zd(p, M, x));
          } else if (!u) {
            var z = nu(p, s);
            z != null && f.push(Zd(p, z, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function wR(e, t, a, i, u) {
      var s = i && u ? TR(i, u) : null;
      i !== null && k0(e, t, i, s, !1), u !== null && a !== null && k0(e, a, u, s, !0);
    }
    function xR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Va = !1, Jd = "dangerouslySetInnerHTML", ch = "suppressContentEditableWarning", Do = "suppressHydrationWarning", D0 = "autoFocus", Ms = "children", Ns = "style", fh = "__html", by, dh, ep, O0, ph, L0, M0;
    by = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, dh = function(e, t) {
      lc(e, t), Kf(e, t), Cv(e, t, {
        registrationNameDependencies: zt,
        possibleRegistrationNames: Vr
      });
    }, L0 = dn && !document.documentMode, ep = function(e, t, a) {
      if (!Va) {
        var i = vh(a), u = vh(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, O0 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, ph = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, M0 = function(e, t) {
      var a = e.namespaceURI === Mi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var _R = /\r\n?/g, bR = /\u0000|\uFFFD/g;
    function vh(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(_R, `
`).replace(bR, "");
    }
    function hh(e, t, a, i) {
      var u = vh(t), s = vh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function N0(e) {
      return e.nodeType === Za ? e : e.ownerDocument;
    }
    function kR() {
    }
    function mh(e) {
      e.onclick = kR;
    }
    function DR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ns)
            f && Object.freeze(f), fv(t, f);
          else if (s === Jd) {
            var p = f ? f[fh] : void 0;
            p != null && ev(t, p);
          } else if (s === Ms)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && nc(t, f);
            } else
              typeof f == "number" && nc(t, "" + f);
          else
            s === ch || s === Do || s === D0 || (zt.hasOwnProperty(s) ? f != null && (typeof f != "function" && ph(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && da(t, s, f, u));
        }
    }
    function OR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ns ? fv(e, f) : s === Jd ? ev(e, f) : s === Ms ? nc(e, f) : da(e, s, f, i);
      }
    }
    function LR(e, t, a, i) {
      var u, s = N0(a), f, p = i;
      if (p === Mi && (p = ec(e)), p === Mi) {
        if (u = zi(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Mi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yn.call(by, e) && (by[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function MR(e, t) {
      return N0(t).createTextNode(e);
    }
    function NR(e, t, a, i) {
      var u = zi(t, a);
      dh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Xd.length; f++)
            Sn(Xd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Sn("invalid", e);
          break;
        case "option":
          Bt(e, a), s = a;
          break;
        case "select":
          Zo(e, a), s = Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kp(e, a), s = Bf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ac(t, s), DR(t, e, i, s, u), t) {
        case "input":
          ba(e), q(e, a, !1);
          break;
        case "textarea":
          ba(e), Jp(e);
          break;
        case "option":
          Gt(e, a);
          break;
        case "select":
          Vf(e, a);
          break;
        default:
          typeof s.onClick == "function" && mh(e);
          break;
      }
    }
    function zR(e, t, a, i, u) {
      dh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Ko(e, a), p = Ko(e, i), s = [];
          break;
        case "textarea":
          f = Bf(e, a), p = Bf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && mh(e);
          break;
      }
      ac(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ns) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === Jd || v === Ms || v === ch || v === Do || v === D0 || (zt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === M || x == null && M == null))
          if (v === Ns)
            if (x && Object.freeze(x), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && M[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === Jd) {
            var z = x ? x[fh] : void 0, H = M ? M[fh] : void 0;
            z != null && H !== z && (s = s || []).push(v, z);
          } else
            v === Ms ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === ch || v === Do || (zt.hasOwnProperty(v) ? (x != null && (typeof x != "function" && ph(v, x), v === "onScroll" && Sn("scroll", e)), !s && M !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (es(g, p[Ns]), (s = s || []).push(Ns, g)), s;
    }
    function UR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && N(e, u);
      var s = zi(a, i), f = zi(a, u);
      switch (OR(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          Zp(e, u);
          break;
        case "select":
          jm(e, u);
          break;
      }
    }
    function AR(e) {
      {
        var t = e.toLowerCase();
        return ic.hasOwnProperty(t) && ic[t] || null;
      }
    }
    function FR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = zi(t, a), dh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Xd.length; y++)
            Sn(Xd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          C(e, a), Sn("invalid", e);
          break;
        case "option":
          Bt(e, a);
          break;
        case "select":
          Zo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kp(e, a), Sn("invalid", e);
          break;
      }
      ac(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var x = g[b].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var M = null;
      for (var z in a)
        if (a.hasOwnProperty(z)) {
          var H = a[z];
          if (z === Ms)
            typeof H == "string" ? e.textContent !== H && (a[Do] !== !0 && hh(e.textContent, H, s, f), M = [Ms, H]) : typeof H == "number" && e.textContent !== "" + H && (a[Do] !== !0 && hh(e.textContent, H, s, f), M = [Ms, "" + H]);
          else if (zt.hasOwnProperty(z))
            H != null && (typeof H != "function" && ph(z, H), z === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var fe = void 0, Oe = p && $e ? null : xr(z);
            if (a[Do] !== !0) {
              if (!(z === ch || z === Do || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              z === "value" || z === "checked" || z === "selected")) {
                if (z === Jd) {
                  var Te = e.innerHTML, St = H ? H[fh] : void 0;
                  if (St != null) {
                    var pt = M0(e, St);
                    pt !== Te && ep(z, Te, pt);
                  }
                } else if (z === Ns) {
                  if (v.delete(z), L0) {
                    var D = Wm(H);
                    fe = e.getAttribute("style"), D !== fe && ep(z, fe, D);
                  }
                } else if (p && !$e)
                  v.delete(z.toLowerCase()), fe = ui(e, z, H), H !== fe && ep(z, fe, H);
                else if (!vn(z, Oe, p) && !Pt(z, H, Oe, p)) {
                  var j = !1;
                  if (Oe !== null)
                    v.delete(Oe.attributeName), fe = fa(e, z, H, Oe);
                  else {
                    var O = i;
                    if (O === Mi && (O = ec(t)), O === Mi)
                      v.delete(z.toLowerCase());
                    else {
                      var G = AR(z);
                      G !== null && G !== z && (j = !0, v.delete(G)), v.delete(z);
                    }
                    fe = ui(e, z, H);
                  }
                  var de = $e;
                  !de && H !== fe && !j && ep(z, fe, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Do] !== !0 && O0(v), t) {
        case "input":
          ba(e), q(e, a, !0);
          break;
        case "textarea":
          ba(e), Jp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && mh(e);
          break;
      }
      return M;
    }
    function HR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function jR(e, t, a) {
      switch (t) {
        case "input":
          Ne(e, a);
          return;
        case "textarea":
          $f(e, a);
          return;
        case "select":
          Vm(e, a);
          return;
      }
    }
    var tp = function() {
    }, np = function() {
    };
    {
      var VR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], z0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], PR = z0.concat(["button"]), BR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], U0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      np = function(e, t) {
        var a = lt({}, e || U0), i = {
          tag: t
        };
        return z0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), PR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), VR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var $R = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return BR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, YR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, A0 = {};
      tp = function(e, t, a) {
        a = a || U0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = $R(e, u) ? null : i, f = s ? null : YR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!A0[y]) {
            A0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var yh = "suppressHydrationWarning", gh = "$", Sh = "/$", rp = "$?", ap = "$!", IR = "style", My = null, Ny = null;
    function QR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Za:
        case Zl: {
          t = i === Za ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : If(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = If(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = np(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function WR(e, t, a) {
      {
        var i = e, u = If(i.namespace, t), s = np(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function sk(e) {
      return e;
    }
    function GR(e) {
      My = Sa(), Ny = oR();
      var t = null;
      return Kn(!1), t;
    }
    function qR(e) {
      sR(Ny), Kn(My), My = null, Ny = null;
    }
    function XR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (tp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = np(f.ancestorInfo, e);
          tp(null, p, v);
        }
        s = f.namespace;
      }
      var y = LR(e, t, a, s);
      return up(u, y), Py(y, t), y;
    }
    function KR(e, t) {
      e.appendChild(t);
    }
    function ZR(e, t, a, i, u) {
      switch (NR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function JR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = np(f.ancestorInfo, t);
          tp(null, p, v);
        }
      }
      return zR(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function eT(e, t, a, i) {
      {
        var u = a;
        tp(null, e, u.ancestorInfo);
      }
      var s = MR(e, t);
      return up(i, s), s;
    }
    function tT() {
      var e = window.event;
      return e === void 0 ? Bi : Or(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, nT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, F0 = typeof Promise == "function" ? Promise : void 0, rT = typeof queueMicrotask == "function" ? queueMicrotask : typeof F0 < "u" ? function(e) {
      return F0.resolve(null).then(e).catch(aT);
    } : Uy;
    function aT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function iT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function lT(e, t, a, i, u, s) {
      UR(e, t, a, i, u), Py(e, u);
    }
    function H0(e) {
      nc(e, "");
    }
    function uT(e, t, a) {
      e.nodeValue = a;
    }
    function oT(e, t) {
      e.appendChild(t);
    }
    function sT(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && mh(a);
    }
    function cT(e, t, a) {
      e.insertBefore(t, a);
    }
    function fT(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function dT(e, t) {
      e.removeChild(t);
    }
    function pT(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === Sh)
            if (i === 0) {
              e.removeChild(u), dt(t);
              return;
            } else
              i--;
          else
            (s === gh || s === rp || s === ap) && i++;
        }
        a = u;
      } while (a);
      dt(t);
    }
    function vT(e, t) {
      e.nodeType === Mn ? Fy(e.parentNode, t) : e.nodeType === qr && Fy(e, t), dt(e);
    }
    function hT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function mT(e) {
      e.nodeValue = "";
    }
    function yT(e, t) {
      e = e;
      var a = t[IR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = rc("display", i);
    }
    function gT(e, t) {
      e.nodeValue = t;
    }
    function ST(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === Za && e.documentElement && e.removeChild(e.documentElement);
    }
    function ET(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function CT(e, t) {
      return t === "" || e.nodeType !== Ni ? null : e;
    }
    function RT(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function j0(e) {
      return e.data === rp;
    }
    function Hy(e) {
      return e.data === ap;
    }
    function TT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function wT(e, t) {
      e._reactRetry = t;
    }
    function Eh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Ni)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === gh || a === ap || a === rp)
            break;
          if (a === Sh)
            return null;
        }
      }
      return e;
    }
    function ip(e) {
      return Eh(e.nextSibling);
    }
    function xT(e) {
      return Eh(e.firstChild);
    }
    function _T(e) {
      return Eh(e.firstChild);
    }
    function bT(e) {
      return Eh(e.nextSibling);
    }
    function kT(e, t, a, i, u, s, f) {
      up(s, e), Py(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ot) !== Me;
      return FR(e, t, a, p, i, y, f);
    }
    function DT(e, t, a, i) {
      return up(a, e), a.mode & ot, HR(e, t);
    }
    function OT(e, t) {
      up(t, e);
    }
    function LT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Sh) {
            if (a === 0)
              return ip(t);
            a--;
          } else
            (i === gh || i === ap || i === rp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function V0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === gh || i === ap || i === rp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Sh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function MT(e) {
      dt(e);
    }
    function NT(e) {
      dt(e);
    }
    function zT(e) {
      return e !== "head" && e !== "body";
    }
    function UT(e, t, a, i) {
      var u = !0;
      hh(t.nodeValue, a, i, u);
    }
    function AT(e, t, a, i, u, s) {
      if (t[yh] !== !0) {
        var f = !0;
        hh(i.nodeValue, u, s, f);
      }
    }
    function FT(e, t) {
      t.nodeType === qr ? ky(e, t) : t.nodeType === Mn || Dy(e, t);
    }
    function HT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? ky(a, t) : t.nodeType === Mn || Dy(a, t));
      }
    }
    function jT(e, t, a, i, u) {
      (u || t[yh] !== !0) && (i.nodeType === qr ? ky(a, i) : i.nodeType === Mn || Dy(a, i));
    }
    function VT(e, t, a) {
      Oy(e, t);
    }
    function PT(e, t) {
      Ly(e, t);
    }
    function BT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function $T(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function YT(e, t, a, i, u, s) {
      (s || t[yh] !== !0) && Oy(a, i);
    }
    function IT(e, t, a, i, u) {
      (u || t[yh] !== !0) && Ly(a, i);
    }
    function QT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function WT(e) {
      Kd(e);
    }
    var cf = Math.random().toString(36).slice(2), ff = "__reactFiber$" + cf, jy = "__reactProps$" + cf, lp = "__reactContainer$" + cf, Vy = "__reactEvents$" + cf, GT = "__reactListeners$" + cf, qT = "__reactHandles$" + cf;
    function XT(e) {
      delete e[ff], delete e[jy], delete e[Vy], delete e[GT], delete e[qT];
    }
    function up(e, t) {
      t[ff] = e;
    }
    function Ch(e, t) {
      t[lp] = e;
    }
    function P0(e) {
      e[lp] = null;
    }
    function op(e) {
      return !!e[lp];
    }
    function zs(e) {
      var t = e[ff];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[lp] || a[ff], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = V0(e); u !== null; ) {
              var s = u[ff];
              if (s)
                return s;
              u = V0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Oo(e) {
      var t = e[ff] || e[lp];
      return t && (t.tag === ie || t.tag === Ve || t.tag === _e || t.tag === re) ? t : null;
    }
    function df(e) {
      if (e.tag === ie || e.tag === Ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Rh(e) {
      return e[jy] || null;
    }
    function Py(e, t) {
      e[jy] = t;
    }
    function KT(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var B0 = {}, $0 = A.ReactDebugCurrentFrame;
    function Th(e) {
      if (e) {
        var t = e._owner, a = di(e.type, e._source, t ? t.type : null);
        $0.setExtraStackFrame(a);
      } else
        $0.setExtraStackFrame(null);
    }
    function Wi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Yn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Th(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Th(null)), p instanceof Error && !(p.message in B0) && (B0[p.message] = !0, Th(u), S("Failed %s type: %s", a, p.message), Th(null));
          }
      }
    }
    var By = [], wh;
    wh = [];
    var _u = -1;
    function Lo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (_u < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== wh[_u] && S("Unexpected Fiber popped."), e.current = By[_u], By[_u] = null, wh[_u] = null, _u--;
    }
    function ia(e, t, a) {
      _u++, By[_u] = e.current, wh[_u] = a, e.current = t;
    }
    var $y;
    $y = {};
    var ri = {};
    Object.freeze(ri);
    var bu = Lo(ri), Hl = Lo(!1), Yy = ri;
    function pf(e, t, a) {
      return a && jl(t) ? Yy : bu.current;
    }
    function Y0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function vf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ri;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          Wi(i, s, "context", p);
        }
        return u && Y0(e, t, s), s;
      }
    }
    function xh() {
      return Hl.current;
    }
    function jl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function _h(e) {
      aa(Hl, e), aa(bu, e);
    }
    function Iy(e) {
      aa(Hl, e), aa(bu, e);
    }
    function I0(e, t, a) {
      {
        if (bu.current !== ri)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(bu, t, e), ia(Hl, a, e);
      }
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            $y[s] || ($y[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          Wi(u, f, "child context", v);
        }
        return lt({}, a, f);
      }
    }
    function bh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ri;
        return Yy = bu.current, ia(bu, a, e), ia(Hl, Hl.current, e), !0;
      }
    }
    function W0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = Q0(e, t, Yy);
          i.__reactInternalMemoizedMergedChildContext = u, aa(Hl, e), aa(bu, e), ia(bu, u, e), ia(Hl, a, e);
        } else
          aa(Hl, e), ia(Hl, a, e);
      }
    }
    function ZT(e) {
      {
        if (!fd(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case re:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (jl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Mo = 0, kh = 1, ku = null, Qy = !1, Wy = !1;
    function G0(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    function JT(e) {
      Qy = !0, G0(e);
    }
    function q0() {
      Qy && No();
    }
    function No() {
      if (!Wy && ku !== null) {
        Wy = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = ku;
          for (Vn(gr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ku = null, Qy = !1;
        } catch (s) {
          throw ku !== null && (ku = ku.slice(e + 1)), vc(mc, No), s;
        } finally {
          Vn(t), Wy = !1;
        }
      }
      return null;
    }
    var hf = [], mf = 0, Dh = null, Oh = 0, Ci = [], Ri = 0, Us = null, Du = 1, Ou = "";
    function ew(e) {
      return Fs(), (e.flags & od) !== ke;
    }
    function tw(e) {
      return Fs(), Oh;
    }
    function nw() {
      var e = Ou, t = Du, a = t & ~rw(t);
      return a.toString(32) + e;
    }
    function As(e, t) {
      Fs(), hf[mf++] = Oh, hf[mf++] = Dh, Dh = e, Oh = t;
    }
    function X0(e, t, a) {
      Fs(), Ci[Ri++] = Du, Ci[Ri++] = Ou, Ci[Ri++] = Us, Us = e;
      var i = Du, u = Ou, s = Lh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Lh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), x = f >> y, M = s - y, z = Lh(t) + M, H = p << M, fe = H | x, Oe = b + u;
        Du = 1 << z | fe, Ou = Oe;
      } else {
        var Te = p << s, St = Te | f, pt = u;
        Du = 1 << v | St, Ou = pt;
      }
    }
    function Gy(e) {
      Fs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        As(e, a), X0(e, a, i);
      }
    }
    function Lh(e) {
      return 32 - Rc(e);
    }
    function rw(e) {
      return 1 << Lh(e) - 1;
    }
    function qy(e) {
      for (; e === Dh; )
        Dh = hf[--mf], hf[mf] = null, Oh = hf[--mf], hf[mf] = null;
      for (; e === Us; )
        Us = Ci[--Ri], Ci[Ri] = null, Ou = Ci[--Ri], Ci[Ri] = null, Du = Ci[--Ri], Ci[Ri] = null;
    }
    function aw() {
      return Fs(), Us !== null ? {
        id: Du,
        overflow: Ou
      } : null;
    }
    function iw(e, t) {
      Fs(), Ci[Ri++] = Du, Ci[Ri++] = Ou, Ci[Ri++] = Us, Du = t.id, Ou = t.overflow, Us = e;
    }
    function Fs() {
      Mr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Lr = null, Ti = null, Gi = !1, Hs = !1, zo = null;
    function lw() {
      Gi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function K0() {
      Hs = !0;
    }
    function uw() {
      return Hs;
    }
    function ow(e) {
      var t = e.stateNode.containerInfo;
      return Ti = _T(t), Lr = e, Gi = !0, zo = null, Hs = !1, !0;
    }
    function sw(e, t, a) {
      return Ti = bT(t), Lr = e, Gi = !0, zo = null, Hs = !1, a !== null && iw(e, a), !0;
    }
    function Z0(e, t) {
      switch (e.tag) {
        case re: {
          FT(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & ot) !== Me;
          jT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case _e: {
          var i = e.memoizedState;
          i.dehydrated !== null && HT(i.dehydrated, t);
          break;
        }
      }
    }
    function J0(e, t) {
      Z0(e, t);
      var a = db();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Mt) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Hs)
          return;
        switch (e.tag) {
          case re: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, VT(a, i);
                break;
              case Ve:
                var u = t.pendingProps;
                PT(a, u);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ie: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ot) !== Me;
                YT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ve: {
                var b = t.pendingProps, x = (e.mode & ot) !== Me;
                IT(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case _e: {
            var M = e.memoizedState, z = M.dehydrated;
            if (z !== null)
              switch (t.tag) {
                case ie:
                  var H = t.type;
                  t.pendingProps, BT(z, H);
                  break;
                case Ve:
                  var fe = t.pendingProps;
                  $T(z, fe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function eE(e, t) {
      t.flags = t.flags & ~La | nn, Xy(e, t);
    }
    function tE(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = ET(t, a);
          return i !== null ? (e.stateNode = i, Lr = e, Ti = xT(i), !0) : !1;
        }
        case Ve: {
          var u = e.pendingProps, s = CT(t, u);
          return s !== null ? (e.stateNode = s, Lr = e, Ti = null, !0) : !1;
        }
        case _e: {
          var f = RT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: aw(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = pb(f);
            return v.return = e, e.child = v, Lr = e, Ti = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & ot) !== Me && (e.flags & Pe) === ke;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Jy(e) {
      if (Gi) {
        var t = Ti;
        if (!t) {
          Ky(e) && (Xy(Lr, e), Zy()), eE(Lr, e), Gi = !1, Lr = e;
          return;
        }
        var a = t;
        if (!tE(e, t)) {
          Ky(e) && (Xy(Lr, e), Zy()), t = ip(a);
          var i = Lr;
          if (!t || !tE(e, t)) {
            eE(Lr, e), Gi = !1, Lr = e;
            return;
          }
          J0(i, a);
        }
      }
    }
    function cw(e, t, a) {
      var i = e.stateNode, u = !Hs, s = kT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function fw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = DT(t, a, e);
      if (i) {
        var u = Lr;
        if (u !== null)
          switch (u.tag) {
            case re: {
              var s = u.stateNode.containerInfo, f = (u.mode & ot) !== Me;
              UT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ie: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ot) !== Me;
              AT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function dw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      OT(a, e);
    }
    function pw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return LT(a);
    }
    function nE(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== re && t.tag !== _e; )
        t = t.return;
      Lr = t;
    }
    function Mh(e) {
      if (e !== Lr)
        return !1;
      if (!Gi)
        return nE(e), Gi = !0, !1;
      if (e.tag !== re && (e.tag !== ie || zT(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = Ti;
        if (t)
          if (Ky(e))
            rE(e), Zy();
          else
            for (; t; )
              J0(e, t), t = ip(t);
      }
      return nE(e), e.tag === _e ? Ti = pw(e) : Ti = Lr ? ip(e.stateNode) : null, !0;
    }
    function vw() {
      return Gi && Ti !== null;
    }
    function rE(e) {
      for (var t = Ti; t; )
        Z0(e, t), t = ip(t);
    }
    function yf() {
      Lr = null, Ti = null, Gi = !1, Hs = !1;
    }
    function aE() {
      zo !== null && (ZC(zo), zo = null);
    }
    function Mr() {
      return Gi;
    }
    function eg(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    var hw = A.ReactCurrentBatchConfig, mw = null;
    function yw() {
      return hw.transition;
    }
    var qi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var gw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & yn && (t = a), a = a.return;
        return t;
      }, js = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, sp = [], cp = [], fp = [], dp = [], pp = [], vp = [], Vs = /* @__PURE__ */ new Set();
      qi.recordUnsafeLifecycleWarnings = function(e, t) {
        Vs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && sp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillMount == "function" && cp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillReceiveProps == "function" && dp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillUpdate == "function" && vp.push(e));
      }, qi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(x) {
          e.add(Ye(x) || "Component"), Vs.add(x.type);
        }), sp = []);
        var t = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(x) {
          t.add(Ye(x) || "Component"), Vs.add(x.type);
        }), cp = []);
        var a = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(x) {
          a.add(Ye(x) || "Component"), Vs.add(x.type);
        }), fp = []);
        var i = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(x) {
          i.add(Ye(x) || "Component"), Vs.add(x.type);
        }), dp = []);
        var u = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          u.add(Ye(x) || "Component"), Vs.add(x.type);
        }), pp = []);
        var s = /* @__PURE__ */ new Set();
        if (vp.length > 0 && (vp.forEach(function(x) {
          s.add(Ye(x) || "Component"), Vs.add(x.type);
        }), vp = []), t.size > 0) {
          var f = js(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = js(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = js(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = js(e);
          nt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = js(a);
          nt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = js(u);
          nt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Nh = /* @__PURE__ */ new Map(), iE = /* @__PURE__ */ new Set();
      qi.recordLegacyContextWarning = function(e, t) {
        var a = gw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!iE.has(e.type)) {
          var i = Nh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Nh.set(a, i)), i.push(e));
        }
      }, qi.flushLegacyContextWarning = function() {
        Nh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), iE.add(s.type);
            });
            var u = js(i);
            try {
              Ht(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, qi.discardPendingWarnings = function() {
        sp = [], cp = [], fp = [], dp = [], pp = [], vp = [], Nh = /* @__PURE__ */ new Map();
      };
    }
    function Xi(e, t) {
      if (e && e.defaultProps) {
        var a = lt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var tg = Lo(null), ng;
    ng = {};
    var zh = null, gf = null, rg = null, Uh = !1;
    function Ah() {
      zh = null, gf = null, rg = null, Uh = !1;
    }
    function lE() {
      Uh = !0;
    }
    function uE() {
      Uh = !1;
    }
    function oE(e, t, a) {
      ia(tg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ng && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ng;
    }
    function ag(e, t) {
      var a = tg.current;
      aa(tg, t), e._currentValue = a;
    }
    function ig(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = Ze(u.childLanes, t)) : (i.childLanes = Ze(i.childLanes, t), u !== null && (u.childLanes = Ze(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Sw(e, t, a) {
      Ew(e, t, a);
    }
    function Ew(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = jn(a), v = Lu(Xt, p);
                v.tag = Hh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Ze(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = Ze(x.lanes, a)), ig(i.return, a, e), s.lanes = Ze(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === at)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Yt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Ze(M.lanes, a);
          var z = M.alternate;
          z !== null && (z.lanes = Ze(z.lanes, a)), ig(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Sf(e, t) {
      zh = e, gf = null, rg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && kp(), a.firstContext = null);
      }
    }
    function Jn(e) {
      Uh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (rg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (gf === null) {
          if (zh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          gf = a, zh.dependencies = {
            lanes: V,
            firstContext: a
          };
        } else
          gf = gf.next = a;
      }
      return t;
    }
    var Ps = null;
    function lg(e) {
      Ps === null ? Ps = [e] : Ps.push(e);
    }
    function Cw() {
      if (Ps !== null) {
        for (var e = 0; e < Ps.length; e++) {
          var t = Ps[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ps = null;
      }
    }
    function sE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, lg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Fh(e, i);
    }
    function Rw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, lg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Tw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, lg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Fh(e, i);
    }
    function Pa(e, t) {
      return Fh(e, t);
    }
    var ww = Fh;
    function Fh(e, t) {
      e.lanes = Ze(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ze(a.lanes, t)), a === null && (e.flags & (nn | La)) !== ke && c1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ze(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ze(a.childLanes, t) : (u.flags & (nn | La)) !== ke && c1(e), i = u, u = u.return;
      if (i.tag === re) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var cE = 0, fE = 1, Hh = 2, ug = 3, jh = !1, og, Vh;
    og = !1, Vh = null;
    function sg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: V
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function dE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: cE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Vh === u && !og && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), og = !0), w_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, ww(e, a);
      } else
        return Tw(e, u, t, a);
    }
    function Ph(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (wd(a)) {
          var s = u.lanes;
          s = _d(s, e.pendingLanes);
          var f = Ze(s, a);
          u.lanes = f, ho(e, f);
        }
      }
    }
    function cg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function xw(e, t, a, i, u, s) {
      switch (a.tag) {
        case fE: {
          var f = a.payload;
          if (typeof f == "function") {
            lE();
            var p = f.call(s, i, u);
            {
              if (e.mode & yn) {
                Hn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Hn(!1);
                }
              }
              uE();
            }
            return p;
          }
          return f;
        }
        case ug:
          e.flags = e.flags & ~Gn | Pe;
        case cE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            lE(), y = v.call(s, i, u);
            {
              if (e.mode & yn) {
                Hn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Hn(!1);
                }
              }
              uE();
            }
          } else
            y = v;
          return y == null ? i : lt({}, i, y);
        }
        case Hh:
          return jh = !0, i;
      }
      return i;
    }
    function Bh(e, t, a, i) {
      var u = e.updateQueue;
      jh = !1, Vh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, x = b.lastBaseUpdate;
          x !== f && (x === null ? b.firstBaseUpdate = y : x.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, z = V, H = null, fe = null, Oe = null, Te = s;
        do {
          var St = Te.lane, pt = Te.eventTime;
          if (hu(i, St)) {
            if (Oe !== null) {
              var j = {
                eventTime: pt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: yt,
                tag: Te.tag,
                payload: Te.payload,
                callback: Te.callback,
                next: null
              };
              Oe = Oe.next = j;
            }
            M = xw(e, u, Te, M, t, a);
            var O = Te.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Te.lane !== yt) {
              e.flags |= hi;
              var G = u.effects;
              G === null ? u.effects = [Te] : G.push(Te);
            }
          } else {
            var D = {
              eventTime: pt,
              lane: St,
              tag: Te.tag,
              payload: Te.payload,
              callback: Te.callback,
              next: null
            };
            Oe === null ? (fe = Oe = D, H = M) : Oe = Oe.next = D, z = Ze(z, St);
          }
          if (Te = Te.next, Te === null) {
            if (p = u.shared.pending, p === null)
              break;
            var de = p, ue = de.next;
            de.next = null, Te = ue, u.lastBaseUpdate = de, u.shared.pending = null;
          }
        } while (!0);
        Oe === null && (H = M), u.baseState = H, u.firstBaseUpdate = fe, u.lastBaseUpdate = Oe;
        var je = u.shared.interleaved;
        if (je !== null) {
          var We = je;
          do
            z = Ze(z, We.lane), We = We.next;
          while (We !== je);
        } else
          s === null && (u.shared.lanes = V);
        Vp(z), e.lanes = z, e.memoizedState = M;
      }
      Vh = null;
    }
    function _w(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function pE() {
      jh = !1;
    }
    function $h() {
      return jh;
    }
    function vE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, _w(f, a));
        }
    }
    var fg = {}, hE = new $.Component().refs, dg, pg, vg, hg, mg, mE, Yh, yg, gg, Sg;
    {
      dg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set();
      var yE = /* @__PURE__ */ new Set();
      Yh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          yE.has(a) || (yE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, mE = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          mg.has(a) || (mg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(fg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(fg);
    }
    function Eg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & yn) {
          Hn(!0);
          try {
            s = a(i, u);
          } finally {
            Hn(!1);
          }
        }
        mE(t, s);
      }
      var f = s == null ? u : lt({}, u, s);
      if (e.memoizedState = f, e.lanes === V) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Cg = {
      isMounted: ma,
      enqueueSetState: function(e, t, a) {
        var i = Da(e), u = Ra(), s = $o(i), f = Lu(u, s);
        f.payload = t, a != null && (Yh(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (dr(p, i, s, u), Ph(p, i, s)), Dl(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Da(e), u = Ra(), s = $o(i), f = Lu(u, s);
        f.tag = fE, f.payload = t, a != null && (Yh(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (dr(p, i, s, u), Ph(p, i, s)), Dl(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Da(e), i = Ra(), u = $o(a), s = Lu(i, u);
        s.tag = Hh, t != null && (Yh(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, u);
        f !== null && (dr(f, a, u, i), Ph(f, a, u)), Ed(a, u);
      }
    };
    function gE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & yn) {
            Hn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Hn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !be(a, i) || !be(u, s) : !0;
    }
    function bw(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !gg.has(t) && (gg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !vg.has(t) && (vg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || vt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function SE(e, t) {
      t.updater = Cg, e.stateNode = t, ao(t, e), t._reactInternalInstance = fg;
    }
    function EE(e, t, a) {
      var i = !1, u = ri, s = ri, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ee && f._context === void 0
        );
        if (!p && !Sg.has(t)) {
          Sg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Y ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Jn(f);
      else {
        u = pf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? vf(e, u) : ri;
      }
      var g = new t(a, s);
      if (e.mode & yn) {
        Hn(!0);
        try {
          g = new t(a, s);
        } finally {
          Hn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      SE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var x = wt(t) || "Component";
          pg.has(x) || (pg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, z = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? z = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), M !== null || z !== null || H !== null) {
            var fe = wt(t) || "Component", Oe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            hg.has(fe) || (hg.add(fe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, fe, Oe, M !== null ? `
  ` + M : "", z !== null ? `
  ` + z : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && Y0(e, u, s), g;
    }
    function kw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), Cg.enqueueReplaceState(t, t.state, null));
    }
    function CE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ye(e) || "Component";
          dg.has(s) || (dg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Cg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Rg(e, t, a, i) {
      bw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = hE, sg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Jn(s);
      else {
        var f = pf(e, t, !0);
        u.context = vf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          yg.has(p) || (yg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & yn && qi.recordLegacyContextWarning(e, u), qi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Eg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (kw(e, u), Bh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ke;
        y |= Kr, (e.mode & za) !== Me && (y |= Zr), e.flags |= y;
      }
    }
    function Dw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ri;
      if (typeof p == "object" && p !== null)
        v = Jn(p);
      else {
        var y = pf(e, t, !0);
        v = vf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && CE(e, u, a, v), pE();
      var x = e.memoizedState, M = u.state = x;
      if (Bh(e, a, u, i), M = e.memoizedState, s === a && x === M && !xh() && !$h()) {
        if (typeof u.componentDidMount == "function") {
          var z = Ke;
          z |= Kr, (e.mode & za) !== Me && (z |= Zr), e.flags |= z;
        }
        return !1;
      }
      typeof g == "function" && (Eg(e, t, g, a), M = e.memoizedState);
      var H = $h() || gE(e, t, s, a, x, M, v);
      if (H) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var fe = Ke;
          fe |= Kr, (e.mode & za) !== Me && (fe |= Zr), e.flags |= fe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Oe = Ke;
          Oe |= Kr, (e.mode & za) !== Me && (Oe |= Zr), e.flags |= Oe;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, H;
    }
    function Ow(e, t, a, i, u) {
      var s = t.stateNode;
      dE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Xi(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ri;
      if (typeof g == "object" && g !== null)
        b = Jn(g);
      else {
        var x = pf(t, a, !0);
        b = vf(t, x);
      }
      var M = a.getDerivedStateFromProps, z = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && CE(t, s, i, b), pE();
      var H = t.memoizedState, fe = s.state = H;
      if (Bh(t, i, s, u), fe = t.memoizedState, f === v && H === fe && !xh() && !$h() && !we)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Oa), !1;
      typeof M == "function" && (Eg(t, a, M, i), fe = t.memoizedState);
      var Oe = $h() || gE(t, a, p, i, H, fe, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      we;
      return Oe ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, fe, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, fe, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Oa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Oa), t.memoizedProps = i, t.memoizedState = fe), s.props = i, s.state = fe, s.context = b, Oe;
    }
    var Tg, wg, xg, _g, bg, RE = function(e, t) {
    };
    Tg = !1, wg = !1, xg = {}, _g = {}, bg = {}, RE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        _g[a] || (_g[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function hp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & yn || Fe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ye(e) || "Component";
          xg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), xg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          In(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var x = v.refs;
            x === hE && (x = v.refs = {}), b === null ? delete x[y] : x[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Qh(e) {
      {
        var t = Ye(e) || "Component";
        if (bg[t])
          return;
        bg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function TE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function wE(e) {
      function t(D, j) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [j], D.flags |= Mt) : O.push(j);
        }
      }
      function a(D, j) {
        if (!e)
          return null;
        for (var O = j; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, j) {
        for (var O = /* @__PURE__ */ new Map(), G = j; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(D, j) {
        var O = qs(D, j);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, j, O) {
        if (D.index = O, !e)
          return D.flags |= od, j;
        var G = D.alternate;
        if (G !== null) {
          var de = G.index;
          return de < j ? (D.flags |= nn, j) : de;
        } else
          return D.flags |= nn, j;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= nn), D;
      }
      function p(D, j, O, G) {
        if (j === null || j.tag !== Ve) {
          var de = e0(O, D.mode, G);
          return de.return = D, de;
        } else {
          var ue = u(j, O);
          return ue.return = D, ue;
        }
      }
      function v(D, j, O, G) {
        var de = O.type;
        if (de === pa)
          return g(D, j, O.props.children, G, O.key);
        if (j !== null && (j.elementType === de || // Keep this check inline so it only runs on the false path:
        v1(j, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof de == "object" && de !== null && de.$$typeof === De && TE(de) === j.type)) {
          var ue = u(j, O.props);
          return ue.ref = hp(D, j, O), ue.return = D, ue._debugSource = O._source, ue._debugOwner = O._owner, ue;
        }
        var je = JS(O, D.mode, G);
        return je.ref = hp(D, j, O), je.return = D, je;
      }
      function y(D, j, O, G) {
        if (j === null || j.tag !== me || j.stateNode.containerInfo !== O.containerInfo || j.stateNode.implementation !== O.implementation) {
          var de = t0(O, D.mode, G);
          return de.return = D, de;
        } else {
          var ue = u(j, O.children || []);
          return ue.return = D, ue;
        }
      }
      function g(D, j, O, G, de) {
        if (j === null || j.tag !== Ct) {
          var ue = Io(O, D.mode, G, de);
          return ue.return = D, ue;
        } else {
          var je = u(j, O);
          return je.return = D, je;
        }
      }
      function b(D, j, O) {
        if (typeof j == "string" && j !== "" || typeof j == "number") {
          var G = e0("" + j, D.mode, O);
          return G.return = D, G;
        }
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case oi: {
              var de = JS(j, D.mode, O);
              return de.ref = hp(D, null, j), de.return = D, de;
            }
            case _r: {
              var ue = t0(j, D.mode, O);
              return ue.return = D, ue;
            }
            case De: {
              var je = j._payload, We = j._init;
              return b(D, We(je), O);
            }
          }
          if (vt(j) || Ga(j)) {
            var Qt = Io(j, D.mode, O, null);
            return Qt.return = D, Qt;
          }
          Ih(D, j);
        }
        return typeof j == "function" && Qh(D), null;
      }
      function x(D, j, O, G) {
        var de = j !== null ? j.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return de !== null ? null : p(D, j, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case oi:
              return O.key === de ? v(D, j, O, G) : null;
            case _r:
              return O.key === de ? y(D, j, O, G) : null;
            case De: {
              var ue = O._payload, je = O._init;
              return x(D, j, je(ue), G);
            }
          }
          if (vt(O) || Ga(O))
            return de !== null ? null : g(D, j, O, G, null);
          Ih(D, O);
        }
        return typeof O == "function" && Qh(D), null;
      }
      function M(D, j, O, G, de) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ue = D.get(O) || null;
          return p(j, ue, "" + G, de);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case oi: {
              var je = D.get(G.key === null ? O : G.key) || null;
              return v(j, je, G, de);
            }
            case _r: {
              var We = D.get(G.key === null ? O : G.key) || null;
              return y(j, We, G, de);
            }
            case De:
              var Qt = G._payload, Dt = G._init;
              return M(D, j, O, Dt(Qt), de);
          }
          if (vt(G) || Ga(G)) {
            var $n = D.get(O) || null;
            return g(j, $n, G, de, null);
          }
          Ih(j, G);
        }
        return typeof G == "function" && Qh(j), null;
      }
      function z(D, j, O) {
        {
          if (typeof D != "object" || D === null)
            return j;
          switch (D.$$typeof) {
            case oi:
            case _r:
              RE(D, O);
              var G = D.key;
              if (typeof G != "string")
                break;
              if (j === null) {
                j = /* @__PURE__ */ new Set(), j.add(G);
                break;
              }
              if (!j.has(G)) {
                j.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case De:
              var de = D._payload, ue = D._init;
              z(ue(de), j, O);
              break;
          }
        }
        return j;
      }
      function H(D, j, O, G) {
        for (var de = null, ue = 0; ue < O.length; ue++) {
          var je = O[ue];
          de = z(je, de, D);
        }
        for (var We = null, Qt = null, Dt = j, $n = 0, Ot = 0, Un = null; Dt !== null && Ot < O.length; Ot++) {
          Dt.index > Ot ? (Un = Dt, Dt = null) : Un = Dt.sibling;
          var ua = x(D, Dt, O[Ot], G);
          if (ua === null) {
            Dt === null && (Dt = Un);
            break;
          }
          e && Dt && ua.alternate === null && t(D, Dt), $n = s(ua, $n, Ot), Qt === null ? We = ua : Qt.sibling = ua, Qt = ua, Dt = Un;
        }
        if (Ot === O.length) {
          if (a(D, Dt), Mr()) {
            var jr = Ot;
            As(D, jr);
          }
          return We;
        }
        if (Dt === null) {
          for (; Ot < O.length; Ot++) {
            var ii = b(D, O[Ot], G);
            ii !== null && ($n = s(ii, $n, Ot), Qt === null ? We = ii : Qt.sibling = ii, Qt = ii);
          }
          if (Mr()) {
            var Ta = Ot;
            As(D, Ta);
          }
          return We;
        }
        for (var wa = i(D, Dt); Ot < O.length; Ot++) {
          var oa = M(wa, D, Ot, O[Ot], G);
          oa !== null && (e && oa.alternate !== null && wa.delete(oa.key === null ? Ot : oa.key), $n = s(oa, $n, Ot), Qt === null ? We = oa : Qt.sibling = oa, Qt = oa);
        }
        if (e && wa.forEach(function(Af) {
          return t(D, Af);
        }), Mr()) {
          var Fu = Ot;
          As(D, Fu);
        }
        return We;
      }
      function fe(D, j, O, G) {
        var de = Ga(O);
        if (typeof de != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (wg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), wg = !0), O.entries === de && (Tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tg = !0);
          var ue = de.call(O);
          if (ue)
            for (var je = null, We = ue.next(); !We.done; We = ue.next()) {
              var Qt = We.value;
              je = z(Qt, je, D);
            }
        }
        var Dt = de.call(O);
        if (Dt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, Ot = null, Un = j, ua = 0, jr = 0, ii = null, Ta = Dt.next(); Un !== null && !Ta.done; jr++, Ta = Dt.next()) {
          Un.index > jr ? (ii = Un, Un = null) : ii = Un.sibling;
          var wa = x(D, Un, Ta.value, G);
          if (wa === null) {
            Un === null && (Un = ii);
            break;
          }
          e && Un && wa.alternate === null && t(D, Un), ua = s(wa, ua, jr), Ot === null ? $n = wa : Ot.sibling = wa, Ot = wa, Un = ii;
        }
        if (Ta.done) {
          if (a(D, Un), Mr()) {
            var oa = jr;
            As(D, oa);
          }
          return $n;
        }
        if (Un === null) {
          for (; !Ta.done; jr++, Ta = Dt.next()) {
            var Fu = b(D, Ta.value, G);
            Fu !== null && (ua = s(Fu, ua, jr), Ot === null ? $n = Fu : Ot.sibling = Fu, Ot = Fu);
          }
          if (Mr()) {
            var Af = jr;
            As(D, Af);
          }
          return $n;
        }
        for (var Ip = i(D, Un); !Ta.done; jr++, Ta = Dt.next()) {
          var Wl = M(Ip, D, jr, Ta.value, G);
          Wl !== null && (e && Wl.alternate !== null && Ip.delete(Wl.key === null ? jr : Wl.key), ua = s(Wl, ua, jr), Ot === null ? $n = Wl : Ot.sibling = Wl, Ot = Wl);
        }
        if (e && Ip.forEach(function(Yb) {
          return t(D, Yb);
        }), Mr()) {
          var $b = jr;
          As(D, $b);
        }
        return $n;
      }
      function Oe(D, j, O, G) {
        if (j !== null && j.tag === Ve) {
          a(D, j.sibling);
          var de = u(j, O);
          return de.return = D, de;
        }
        a(D, j);
        var ue = e0(O, D.mode, G);
        return ue.return = D, ue;
      }
      function Te(D, j, O, G) {
        for (var de = O.key, ue = j; ue !== null; ) {
          if (ue.key === de) {
            var je = O.type;
            if (je === pa) {
              if (ue.tag === Ct) {
                a(D, ue.sibling);
                var We = u(ue, O.props.children);
                return We.return = D, We._debugSource = O._source, We._debugOwner = O._owner, We;
              }
            } else if (ue.elementType === je || // Keep this check inline so it only runs on the false path:
            v1(ue, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof je == "object" && je !== null && je.$$typeof === De && TE(je) === ue.type) {
              a(D, ue.sibling);
              var Qt = u(ue, O.props);
              return Qt.ref = hp(D, ue, O), Qt.return = D, Qt._debugSource = O._source, Qt._debugOwner = O._owner, Qt;
            }
            a(D, ue);
            break;
          } else
            t(D, ue);
          ue = ue.sibling;
        }
        if (O.type === pa) {
          var Dt = Io(O.props.children, D.mode, G, O.key);
          return Dt.return = D, Dt;
        } else {
          var $n = JS(O, D.mode, G);
          return $n.ref = hp(D, j, O), $n.return = D, $n;
        }
      }
      function St(D, j, O, G) {
        for (var de = O.key, ue = j; ue !== null; ) {
          if (ue.key === de)
            if (ue.tag === me && ue.stateNode.containerInfo === O.containerInfo && ue.stateNode.implementation === O.implementation) {
              a(D, ue.sibling);
              var je = u(ue, O.children || []);
              return je.return = D, je;
            } else {
              a(D, ue);
              break;
            }
          else
            t(D, ue);
          ue = ue.sibling;
        }
        var We = t0(O, D.mode, G);
        return We.return = D, We;
      }
      function pt(D, j, O, G) {
        var de = typeof O == "object" && O !== null && O.type === pa && O.key === null;
        if (de && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case oi:
              return f(Te(D, j, O, G));
            case _r:
              return f(St(D, j, O, G));
            case De:
              var ue = O._payload, je = O._init;
              return pt(D, j, je(ue), G);
          }
          if (vt(O))
            return H(D, j, O, G);
          if (Ga(O))
            return fe(D, j, O, G);
          Ih(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Oe(D, j, "" + O, G)) : (typeof O == "function" && Qh(D), a(D, j));
      }
      return pt;
    }
    var Ef = wE(!0), xE = wE(!1);
    function Lw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = qs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = qs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Mw(e, t) {
      for (var a = e.child; a !== null; )
        ub(a, t), a = a.sibling;
    }
    var mp = {}, Ao = Lo(mp), yp = Lo(mp), Wh = Lo(mp);
    function Gh(e) {
      if (e === mp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function _E() {
      var e = Gh(Wh.current);
      return e;
    }
    function kg(e, t) {
      ia(Wh, t, e), ia(yp, e, e), ia(Ao, mp, e);
      var a = QR(t);
      aa(Ao, e), ia(Ao, a, e);
    }
    function Cf(e) {
      aa(Ao, e), aa(yp, e), aa(Wh, e);
    }
    function Dg() {
      var e = Gh(Ao.current);
      return e;
    }
    function bE(e) {
      Gh(Wh.current);
      var t = Gh(Ao.current), a = WR(t, e.type);
      t !== a && (ia(yp, e, e), ia(Ao, a, e));
    }
    function Og(e) {
      yp.current === e && (aa(Ao, e), aa(yp, e));
    }
    var Nw = 0, kE = 1, DE = 1, gp = 2, Ki = Lo(Nw);
    function Lg(e, t) {
      return (e & t) !== 0;
    }
    function Rf(e) {
      return e & kE;
    }
    function Mg(e, t) {
      return e & kE | t;
    }
    function zw(e, t) {
      return e | t;
    }
    function Fo(e, t) {
      ia(Ki, t, e);
    }
    function Tf(e) {
      aa(Ki, e);
    }
    function Uw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function qh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === _e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || j0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === bt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Pe) !== ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ba = (
      /*   */
      0
    ), ir = (
      /* */
      1
    ), Vl = (
      /*  */
      2
    ), lr = (
      /*    */
      4
    ), Nr = (
      /*   */
      8
    ), Ng = [];
    function zg() {
      for (var e = 0; e < Ng.length; e++) {
        var t = Ng[e];
        t._workInProgressVersionPrimary = null;
      }
      Ng.length = 0;
    }
    function Aw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var se = A.ReactCurrentDispatcher, Sp = A.ReactCurrentBatchConfig, Ug, wf;
    Ug = /* @__PURE__ */ new Set();
    var Bs = V, It = null, ur = null, or = null, Xh = !1, Ep = !1, Cp = 0, Fw = 0, Hw = 25, P = null, wi = null, Ho = -1, Ag = !1;
    function Vt() {
      {
        var e = P;
        wi === null ? wi = [e] : wi.push(e);
      }
    }
    function ne() {
      {
        var e = P;
        wi !== null && (Ho++, wi[Ho] !== e && jw(e));
      }
    }
    function xf(e) {
      e != null && !vt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function jw(e) {
      {
        var t = Ye(It);
        if (!Ug.has(t) && (Ug.add(t), wi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ho; u++) {
            for (var s = wi[u], f = u === Ho ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Fg(e, t) {
      if (Ag)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Se(e[a], t[a]))
          return !1;
      return !0;
    }
    function _f(e, t, a, i, u, s) {
      Bs = s, It = t, wi = e !== null ? e._debugHookTypes : null, Ho = -1, Ag = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? se.current = KE : wi !== null ? se.current = XE : se.current = qE;
      var f = a(i, u);
      if (Ep) {
        var p = 0;
        do {
          if (Ep = !1, Cp = 0, p >= Hw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Ag = !1, ur = null, or = null, t.updateQueue = null, Ho = -1, se.current = ZE, f = a(i, u);
        } while (Ep);
      }
      se.current = sm, t._debugHookTypes = wi;
      var v = ur !== null && ur.next !== null;
      if (Bs = V, It = null, ur = null, or = null, P = null, wi = null, Ho = -1, e !== null && (e.flags & nr) !== (t.flags & nr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ot) !== Me && S("Internal React error: Expected static flag was missing. Please notify the React team."), Xh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function bf() {
      var e = Cp !== 0;
      return Cp = 0, e;
    }
    function OE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & za) !== Me ? t.flags &= ~(iu | Zr | sn | Ke) : t.flags &= ~(sn | Ke), e.lanes = vo(e.lanes, a);
    }
    function LE() {
      if (se.current = sm, Xh) {
        for (var e = It.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Xh = !1;
      }
      Bs = V, It = null, ur = null, or = null, wi = null, Ho = -1, P = null, YE = !1, Ep = !1, Cp = 0;
    }
    function Pl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return or === null ? It.memoizedState = or = e : or = or.next = e, or;
    }
    function xi() {
      var e;
      if (ur === null) {
        var t = It.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = ur.next;
      var a;
      if (or === null ? a = It.memoizedState : a = or.next, a !== null)
        or = a, a = or.next, ur = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        ur = e;
        var i = {
          memoizedState: ur.memoizedState,
          baseState: ur.baseState,
          baseQueue: ur.baseQueue,
          queue: ur.queue,
          next: null
        };
        or === null ? It.memoizedState = or = i : or = or.next = i;
      }
      return or;
    }
    function ME() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Hg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function jg(e, t, a) {
      var i = Pl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = $w.bind(null, It, s);
      return [i.memoizedState, f];
    }
    function Vg(e, t, a) {
      var i = xi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = ur, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, x = null, M = null, z = null, H = g;
        do {
          var fe = H.lane;
          if (hu(Bs, fe)) {
            if (z !== null) {
              var Te = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: yt,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              z = z.next = Te;
            }
            if (H.hasEagerState)
              b = H.eagerState;
            else {
              var St = H.action;
              b = e(b, St);
            }
          } else {
            var Oe = {
              lane: fe,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            z === null ? (M = z = Oe, x = b) : z = z.next = Oe, It.lanes = Ze(It.lanes, fe), Vp(fe);
          }
          H = H.next;
        } while (H !== null && H !== g);
        z === null ? x = b : z.next = M, Se(b, i.memoizedState) || kp(), i.memoizedState = b, i.baseState = x, i.baseQueue = z, u.lastRenderedState = b;
      }
      var pt = u.interleaved;
      if (pt !== null) {
        var D = pt;
        do {
          var j = D.lane;
          It.lanes = Ze(It.lanes, j), Vp(j), D = D.next;
        } while (D !== pt);
      } else
        f === null && (u.lanes = V);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Pg(e, t, a) {
      var i = xi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Se(p, i.memoizedState) || kp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function ck(e, t, a) {
    }
    function fk(e, t, a) {
    }
    function Bg(e, t, a) {
      var i = It, u = Pl(), s, f = Mr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), wf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), wf = !0);
      } else {
        if (s = t(), !wf) {
          var p = t();
          Se(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), wf = !0);
        }
        var v = bm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(v, Bs) || NE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, tm(UE.bind(null, i, y, e), [e]), i.flags |= sn, Rp(ir | Nr, zE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Kh(e, t, a) {
      var i = It, u = xi(), s = t();
      if (!wf) {
        var f = t();
        Se(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), wf = !0);
      }
      var p = u.memoizedState, v = !Se(p, s);
      v && (u.memoizedState = s, kp());
      var y = u.queue;
      if (wp(UE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      or !== null && or.memoizedState.tag & ir) {
        i.flags |= sn, Rp(ir | Nr, zE.bind(null, i, y, s, t), void 0, null);
        var g = bm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(g, Bs) || NE(i, t, s);
      }
      return s;
    }
    function NE(e, t, a) {
      e.flags |= cs;
      var i = {
        getSnapshot: t,
        value: a
      }, u = It.updateQueue;
      if (u === null)
        u = ME(), It.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function zE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, AE(t) && FE(e);
    }
    function UE(e, t, a) {
      var i = function() {
        AE(t) && FE(e);
      };
      return a(i);
    }
    function AE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Se(a, i);
      } catch {
        return !0;
      }
    }
    function FE(e) {
      var t = Pa(e, Ae);
      t !== null && dr(t, e, Ae, Xt);
    }
    function Zh(e) {
      var t = Pl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Yw.bind(null, It, a);
      return [t.memoizedState, i];
    }
    function $g(e) {
      return Vg(Hg);
    }
    function Yg(e) {
      return Pg(Hg);
    }
    function Rp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = It.updateQueue;
      if (s === null)
        s = ME(), It.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Ig(e) {
      var t = Pl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Jh(e) {
      var t = xi();
      return t.memoizedState;
    }
    function Tp(e, t, a, i) {
      var u = Pl(), s = i === void 0 ? null : i;
      It.flags |= e, u.memoizedState = Rp(ir | t, a, void 0, s);
    }
    function em(e, t, a, i) {
      var u = xi(), s = i === void 0 ? null : i, f = void 0;
      if (ur !== null) {
        var p = ur.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Fg(s, v)) {
            u.memoizedState = Rp(t, a, f, s);
            return;
          }
        }
      }
      It.flags |= e, u.memoizedState = Rp(ir | t, a, f, s);
    }
    function tm(e, t) {
      return (It.mode & za) !== Me ? Tp(iu | sn | Tl, Nr, e, t) : Tp(sn | Tl, Nr, e, t);
    }
    function wp(e, t) {
      return em(sn, Nr, e, t);
    }
    function Qg(e, t) {
      return Tp(Ke, Vl, e, t);
    }
    function nm(e, t) {
      return em(Ke, Vl, e, t);
    }
    function Wg(e, t) {
      var a = Ke;
      return a |= Kr, (It.mode & za) !== Me && (a |= Zr), Tp(a, lr, e, t);
    }
    function rm(e, t) {
      return em(Ke, lr, e, t);
    }
    function HE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Gg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ke;
      return u |= Kr, (It.mode & za) !== Me && (u |= Zr), Tp(u, lr, HE.bind(null, t, e), i);
    }
    function am(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return em(Ke, lr, HE.bind(null, t, e), i);
    }
    function Vw(e, t) {
    }
    var im = Vw;
    function qg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function lm(e, t) {
      var a = xi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Fg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Xg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function um(e, t) {
      var a = xi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Fg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Kg(e) {
      var t = Pl();
      return t.memoizedState = e, e;
    }
    function jE(e) {
      var t = xi(), a = ur, i = a.memoizedState;
      return PE(t, i, e);
    }
    function VE(e) {
      var t = xi();
      if (ur === null)
        return t.memoizedState = e, e;
      var a = ur.memoizedState;
      return PE(t, a, e);
    }
    function PE(e, t, a) {
      var i = !ry(Bs);
      if (i) {
        if (!Se(a, t)) {
          var u = xd();
          It.lanes = Ze(It.lanes, u), Vp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, kp()), e.memoizedState = a, a;
    }
    function Pw(e, t, a) {
      var i = Aa();
      Vn(Sr(i, ar)), e(!0);
      var u = Sp.transition;
      Sp.transition = {};
      var s = Sp.transition;
      Sp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Vn(i), Sp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && nt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Zg() {
      var e = Zh(!1), t = e[0], a = e[1], i = Pw.bind(null, a), u = Pl();
      return u.memoizedState = i, [t, i];
    }
    function BE() {
      var e = $g(), t = e[0], a = xi(), i = a.memoizedState;
      return [t, i];
    }
    function $E() {
      var e = Yg(), t = e[0], a = xi(), i = a.memoizedState;
      return [t, i];
    }
    var YE = !1;
    function Bw() {
      return YE;
    }
    function Jg() {
      var e = Pl(), t = bm(), a = t.identifierPrefix, i;
      if (Mr()) {
        var u = nw();
        i = ":" + a + "R" + u;
        var s = Cp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Fw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function om() {
      var e = xi(), t = e.memoizedState;
      return t;
    }
    function $w(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $o(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (IE(e))
        QE(t, u);
      else {
        var s = sE(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          dr(s, e, i, f), WE(s, t, i);
        }
      }
      GE(e, i);
    }
    function Yw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $o(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (IE(e))
        QE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = se.current, se.current = Zi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Se(y, v)) {
                Rw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              se.current = p;
            }
          }
        }
        var g = sE(e, t, u, i);
        if (g !== null) {
          var b = Ra();
          dr(g, e, i, b), WE(g, t, i);
        }
      }
      GE(e, i);
    }
    function IE(e) {
      var t = e.alternate;
      return e === It || t !== null && t === It;
    }
    function QE(e, t) {
      Ep = Xh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function WE(e, t, a) {
      if (wd(a)) {
        var i = t.lanes;
        i = _d(i, e.pendingLanes);
        var u = Ze(i, a);
        t.lanes = u, ho(e, u);
      }
    }
    function GE(e, t, a) {
      Dl(e, t);
    }
    var sm = {
      readContext: Jn,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: Z
    }, qE = null, XE = null, KE = null, ZE = null, Bl = null, Zi = null, cm = null;
    {
      var eS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ie = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      qE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Vt(), xf(t), qg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Vt(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Vt(), xf(t), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Vt(), xf(a), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Vt(), xf(t), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Vt(), xf(t), Wg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Vt(), xf(t);
          var a = se.current;
          se.current = Bl;
          try {
            return Xg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Vt();
          var i = se.current;
          se.current = Bl;
          try {
            return jg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Vt(), Ig(e);
        },
        useState: function(e) {
          P = "useState", Vt();
          var t = se.current;
          se.current = Bl;
          try {
            return Zh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Vt(), Kg(e);
        },
        useTransition: function() {
          return P = "useTransition", Vt(), Zg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Vt(), Bg(e, t, a);
        },
        useId: function() {
          return P = "useId", Vt(), Jg();
        },
        unstable_isNewReconciler: Z
      }, XE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), qg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), Wg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = se.current;
          se.current = Bl;
          try {
            return Xg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = se.current;
          se.current = Bl;
          try {
            return jg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), Ig(e);
        },
        useState: function(e) {
          P = "useState", ne();
          var t = se.current;
          se.current = Bl;
          try {
            return Zh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), Kg(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), Zg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), Bg(e, t, a);
        },
        useId: function() {
          return P = "useId", ne(), Jg();
        },
        unstable_isNewReconciler: Z
      }, KE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), rm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = se.current;
          se.current = Zi;
          try {
            return um(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = se.current;
          se.current = Zi;
          try {
            return Vg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), Jh();
        },
        useState: function(e) {
          P = "useState", ne();
          var t = se.current;
          se.current = Zi;
          try {
            return $g(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), im();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), jE(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), BE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), Kh(e, t);
        },
        useId: function() {
          return P = "useId", ne(), om();
        },
        unstable_isNewReconciler: Z
      }, ZE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), rm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = se.current;
          se.current = cm;
          try {
            return um(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = se.current;
          se.current = cm;
          try {
            return Pg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), Jh();
        },
        useState: function(e) {
          P = "useState", ne();
          var t = se.current;
          se.current = cm;
          try {
            return Yg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), im();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), VE(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), $E();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), Kh(e, t);
        },
        useId: function() {
          return P = "useId", ne(), om();
        },
        unstable_isNewReconciler: Z
      }, Bl = {
        readContext: function(e) {
          return eS(), Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), Vt(), qg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), Vt(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), Vt(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), Vt(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), Vt(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), Vt(), Wg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), Vt();
          var a = se.current;
          se.current = Bl;
          try {
            return Xg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), Vt();
          var i = se.current;
          se.current = Bl;
          try {
            return jg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), Vt(), Ig(e);
        },
        useState: function(e) {
          P = "useState", Ie(), Vt();
          var t = se.current;
          se.current = Bl;
          try {
            return Zh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), Vt(), Kg(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), Vt(), Zg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), Vt(), Bg(e, t, a);
        },
        useId: function() {
          return P = "useId", Ie(), Vt(), Jg();
        },
        unstable_isNewReconciler: Z
      }, Zi = {
        readContext: function(e) {
          return eS(), Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), ne(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), ne(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), ne(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), ne(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), ne(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), ne(), rm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), ne();
          var a = se.current;
          se.current = Zi;
          try {
            return um(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), ne();
          var i = se.current;
          se.current = Zi;
          try {
            return Vg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), ne(), Jh();
        },
        useState: function(e) {
          P = "useState", Ie(), ne();
          var t = se.current;
          se.current = Zi;
          try {
            return $g(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), ne(), im();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), ne(), jE(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), ne(), BE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), ne(), Kh(e, t);
        },
        useId: function() {
          return P = "useId", Ie(), ne(), om();
        },
        unstable_isNewReconciler: Z
      }, cm = {
        readContext: function(e) {
          return eS(), Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), ne(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), ne(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), ne(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), ne(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), ne(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), ne(), rm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), ne();
          var a = se.current;
          se.current = Zi;
          try {
            return um(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), ne();
          var i = se.current;
          se.current = Zi;
          try {
            return Pg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), ne(), Jh();
        },
        useState: function(e) {
          P = "useState", Ie(), ne();
          var t = se.current;
          se.current = Zi;
          try {
            return Yg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), ne(), im();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), ne(), VE(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), ne(), $E();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), ne(), Kh(e, t);
        },
        useId: function() {
          return P = "useId", Ie(), ne(), om();
        },
        unstable_isNewReconciler: Z
      };
    }
    var jo = X.unstable_now, JE = 0, fm = -1, xp = -1, dm = -1, tS = !1, pm = !1;
    function eC() {
      return tS;
    }
    function Iw() {
      pm = !0;
    }
    function Qw() {
      tS = !1, pm = !1;
    }
    function Ww() {
      tS = pm, pm = !1;
    }
    function tC() {
      return JE;
    }
    function nC() {
      JE = jo();
    }
    function nS(e) {
      xp = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function rC(e) {
      xp = -1;
    }
    function vm(e, t) {
      if (xp >= 0) {
        var a = jo() - xp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), xp = -1;
      }
    }
    function $l(e) {
      if (fm >= 0) {
        var t = jo() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ct:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function rS(e) {
      if (dm >= 0) {
        var t = jo() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ct:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Yl() {
      fm = jo();
    }
    function aS() {
      dm = jo();
    }
    function iS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function $s(e, t) {
      return {
        value: e,
        source: t,
        stack: Iu(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Gw(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = Gw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
            return;
          console.error(i);
        }
        var p = u ? Ye(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === re)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ye(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var qw = typeof WeakMap == "function" ? WeakMap : Map;
    function aC(e, t, a) {
      var i = Lu(Xt, a);
      i.tag = ug, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        P_(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = Lu(Xt, a);
      i.tag = ug;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          h1(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        h1(e), uS(e, t), typeof u != "function" && j_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, Ae) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function iC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new qw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = B_.bind(null, e, t, a);
        rr && Pp(e, a), t.then(s, s);
      }
    }
    function Xw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Kw(e, t) {
      var a = e.tag;
      if ((e.mode & ot) === Me && (a === he || a === Qe || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function lC(e) {
      var t = e;
      do {
        if (t.tag === _e && Uw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function uC(e, t, a, i, u) {
      if ((e.mode & ot) === Me) {
        if (e === t)
          e.flags |= Gn;
        else {
          if (e.flags |= Pe, a.flags |= fs, a.flags &= ~(fc | va), a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = xn;
            else {
              var f = Lu(Xt, Ae);
              f.tag = Hh, Uo(a, f, Ae);
            }
          }
          a.lanes = Ze(a.lanes, Ae);
        }
        return e;
      }
      return e.flags |= Gn, e.lanes = u, e;
    }
    function Zw(e, t, a, i, u) {
      if (a.flags |= va, rr && Pp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Kw(a), Mr() && a.mode & ot && K0();
        var f = lC(t);
        if (f !== null) {
          f.flags &= ~Rn, uC(f, t, a, e, u), f.mode & ot && iC(e, s, u), Xw(f, e, s);
          return;
        } else {
          if (!po(u)) {
            iC(e, s, u), PS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Mr() && a.mode & ot) {
        K0();
        var v = lC(t);
        if (v !== null) {
          (v.flags & Gn) === ke && (v.flags |= Rn), uC(v, t, a, e, u), eg($s(i, a));
          return;
        }
      }
      i = $s(i, a), L_(i);
      var y = t;
      do {
        switch (y.tag) {
          case re: {
            var g = i;
            y.flags |= Gn;
            var b = jn(u);
            y.lanes = Ze(y.lanes, b);
            var x = aC(y, g, b);
            cg(y, x);
            return;
          }
          case pe:
            var M = i, z = y.type, H = y.stateNode;
            if ((y.flags & Pe) === ke && (typeof z.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !l1(H))) {
              y.flags |= Gn;
              var fe = jn(u);
              y.lanes = Ze(y.lanes, fe);
              var Oe = oS(y, M, fe);
              cg(y, Oe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Jw() {
      return null;
    }
    var _p = A.ReactCurrentOwner, Ji = !1, sS, bp, cS, fS, dS, Ys, pS, hm;
    sS = {}, bp = {}, cS = {}, fS = {}, dS = {}, Ys = !1, pS = {}, hm = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = xE(t, null, a, i) : t.child = Ef(t, e.child, a, i);
    }
    function ex(e, t, a, i) {
      t.child = Ef(t, e.child, null, i), t.child = Ef(t, null, a, i);
    }
    function oC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Wi(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Sf(t, u), kl(t);
      {
        if (_p.current = t, Gr(!0), v = _f(e, t, f, i, p, u), y = bf(), t.mode & yn) {
          Hn(!0);
          try {
            v = _f(e, t, f, i, p, u), y = bf();
          } finally {
            Hn(!1);
          }
        }
        Gr(!1);
      }
      return lu(), e !== null && !Ji ? (OE(e, t, u), Mu(e, t, u)) : (Mr() && y && Gy(t), t.flags |= Cl, Ea(e, t, v, u), t.child);
    }
    function sC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ib(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Uf(s), t.tag = He, t.type = f, mS(t, s), cC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Wi(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          );
        }
        var v = ZS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Wi(
          g,
          i,
          // Resolved props
          "prop",
          wt(y)
        );
      }
      var b = e.child, x = RS(e, u);
      if (!x) {
        var M = b.memoizedProps, z = a.compare;
        if (z = z !== null ? z : be, z(M, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= Cl;
      var H = qs(b, i);
      return H.ref = t.ref, H.return = t, t.child = H, H;
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === De) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Wi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (be(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ji = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & fs) !== ke && (Ji = !0);
          else
            return t.lanes = e.lanes, Mu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function fC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || T)
        if ((t.mode & ot) === Me) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, km(t, a);
        } else if (ra(a, na)) {
          var b = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var x = s !== null ? s.baseLanes : a;
          km(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ze(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = na;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, km(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Ze(s.baseLanes, a), t.memoizedState = null) : M = a, km(t, M);
      }
      return Ea(e, t, u, a), t.child;
    }
    function tx(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function nx(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function rx(e, t, a) {
      {
        t.flags |= Ke;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function dC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= sd);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Wi(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = pf(t, a, !0);
        f = vf(t, p);
      }
      var v, y;
      Sf(t, u), kl(t);
      {
        if (_p.current = t, Gr(!0), v = _f(e, t, a, i, f, u), y = bf(), t.mode & yn) {
          Hn(!0);
          try {
            v = _f(e, t, a, i, f, u), y = bf();
          } finally {
            Hn(!1);
          }
        }
        Gr(!1);
      }
      return lu(), e !== null && !Ji ? (OE(e, t, u), Mu(e, t, u)) : (Mr() && y && Gy(t), t.flags |= Cl, Ea(e, t, v, u), t.child);
    }
    function pC(e, t, a, i, u) {
      {
        switch (Eb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Pe, t.flags |= Gn;
            var y = new Error("Simulated error coming from DevTools"), g = jn(u);
            t.lanes = Ze(t.lanes, g);
            var b = oS(t, $s(y, t), g);
            cg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && Wi(
            x,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var M;
      jl(a) ? (M = !0, bh(t)) : M = !1, Sf(t, u);
      var z = t.stateNode, H;
      z === null ? (ym(e, t), EE(t, a, i), Rg(t, a, i, u), H = !0) : e === null ? H = Dw(t, a, i, u) : H = Ow(e, t, a, i, u);
      var fe = hS(e, t, a, H, M, u);
      {
        var Oe = t.stateNode;
        H && Oe.props !== i && (Ys || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), Ys = !0);
      }
      return fe;
    }
    function hS(e, t, a, i, u, s) {
      dC(e, t);
      var f = (t.flags & Pe) !== ke;
      if (!i && !f)
        return u && W0(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      _p.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, rC();
      else {
        kl(t);
        {
          if (Gr(!0), v = p.render(), t.mode & yn) {
            Hn(!0);
            try {
              p.render();
            } finally {
              Hn(!1);
            }
          }
          Gr(!1);
        }
        lu();
      }
      return t.flags |= Cl, e !== null && f ? ex(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && W0(t, a, !0), t.child;
    }
    function vC(e) {
      var t = e.stateNode;
      t.pendingContext ? I0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && I0(e, t.context, !1), kg(e, t.containerInfo);
    }
    function ax(e, t, a) {
      if (vC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      dE(e, t), Bh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rn) {
          var g = $s(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return hC(e, t, p, a, g);
        } else if (p !== s) {
          var b = $s(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return hC(e, t, p, a, b);
        } else {
          ow(t);
          var x = xE(t, null, p, a);
          t.child = x;
          for (var M = x; M; )
            M.flags = M.flags & ~nn | La, M = M.sibling;
        }
      } else {
        if (yf(), p === s)
          return Mu(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function hC(e, t, a, i, u) {
      return yf(), eg(u), t.flags |= Rn, Ea(e, t, a, i), t.child;
    }
    function ix(e, t, a) {
      bE(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= jt), dC(e, t), Ea(e, t, f, a), t.child;
    }
    function lx(e, t) {
      return e === null && Jy(t), null;
    }
    function ux(e, t, a, i) {
      ym(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = lb(v), g = Xi(v, u), b;
      switch (y) {
        case he:
          return mS(t, v), t.type = v = Uf(v), b = vS(null, t, v, g, i), b;
        case pe:
          return t.type = v = QS(v), b = pC(null, t, v, g, i), b;
        case Qe:
          return t.type = v = WS(v), b = oC(null, t, v, g, i), b;
        case it: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && Wi(
              x,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return b = sC(
            null,
            t,
            v,
            Xi(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === De && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function ox(e, t, a, i, u) {
      ym(e, t), t.tag = pe;
      var s;
      return jl(a) ? (s = !0, bh(t)) : s = !1, Sf(t, u), EE(t, a, i), Rg(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function sx(e, t, a, i) {
      ym(e, t);
      var u = t.pendingProps, s;
      {
        var f = pf(t, a, !1);
        s = vf(t, f);
      }
      Sf(t, i);
      var p, v;
      kl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & yn && qi.recordLegacyContextWarning(t, null), Gr(!0), _p.current = t, p = _f(null, t, a, u, s, i), v = bf(), Gr(!1);
      }
      if (lu(), t.flags |= Cl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        bp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), bp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = wt(a) || "Unknown";
          bp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), bp[b] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return jl(a) ? (x = !0, bh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, sg(t), SE(t, p), Rg(t, a, u, i), hS(null, t, a, !0, x, i);
      } else {
        if (t.tag = he, t.mode & yn) {
          Hn(!0);
          try {
            p = _f(null, t, a, u, s, i), v = bf();
          } finally {
            Hn(!1);
          }
        }
        return Mr() && v && Gy(t), Ea(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = wt(t) || "Unknown";
          fS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), fS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = wt(t) || "Unknown";
          cS[p] || (S("%s: Function components do not support contextType.", p), cS[p] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: yt
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: Jw(),
        transitions: null
      };
    }
    function cx(e, t) {
      var a = null;
      return {
        baseLanes: Ze(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function fx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Lg(e, gp);
    }
    function dx(e, t) {
      return vo(e.childLanes, t);
    }
    function mC(e, t, a) {
      var i = t.pendingProps;
      Cb(t) && (t.flags |= Pe);
      var u = Ki.current, s = !1, f = (t.flags & Pe) !== ke;
      if (f || fx(u, e) ? (s = !0, t.flags &= ~Pe) : (e === null || e.memoizedState !== null) && (u = zw(u, DE)), u = Rf(u), Fo(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return yx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = px(t, y, g, a), x = t.child;
          return x.memoizedState = gS(a), t.memoizedState = yS, b;
        } else
          return SS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var z = M.dehydrated;
          if (z !== null)
            return gx(e, t, f, i, z, M, a);
        }
        if (s) {
          var H = i.fallback, fe = i.children, Oe = hx(e, t, fe, H, a), Te = t.child, St = e.child.memoizedState;
          return Te.memoizedState = St === null ? gS(a) : cx(St, a), Te.childLanes = dx(e, a), t.memoizedState = yS, Oe;
        } else {
          var pt = i.children, D = vx(e, t, pt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function px(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ot) === Me && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & ze && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = ES(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return y1(e, t, V, null);
    }
    function yC(e, t) {
      return qs(e, t);
    }
    function vx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = yC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ot) === Me && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Mt) : p.push(s);
      }
      return t.child = f, f;
    }
    function hx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ot) === Me && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & ze && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = yC(f, v), y.subtreeFlags = f.subtreeFlags & nr;
      var b;
      return p !== null ? b = qs(p, i) : (b = Io(i, s, u, null), b.flags |= nn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function mm(e, t, a, i) {
      i !== null && eg(i), Ef(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= nn, t.memoizedState = null, f;
    }
    function mx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Io(i, s, u, null);
      return v.flags |= nn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ot) !== Me && Ef(t, e.child, null, u), v;
    }
    function yx(e, t, a) {
      return (e.mode & ot) === Me ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ae) : Hy(t) ? e.lanes = su : e.lanes = na, null;
    }
    function gx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= ~Rn;
          var D = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return mm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Pe, null;
          var j = i.children, O = i.fallback, G = mx(e, t, j, O, f), de = t.child;
          return de.memoizedState = gS(f), t.memoizedState = yS, G;
        }
      else {
        if (lw(), (t.mode & ot) === Me)
          return mm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = TT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = lS(b, p, y);
          return mm(e, t, f, x);
        }
        var M = ra(f, e.childLanes);
        if (Ji || M) {
          var z = bm();
          if (z !== null) {
            var H = iy(z, f);
            if (H !== yt && H !== s.retryLane) {
              s.retryLane = H;
              var fe = Xt;
              Pa(e, H), dr(z, e, H, fe);
            }
          }
          PS();
          var Oe = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return mm(e, t, f, Oe);
        } else if (j0(u)) {
          t.flags |= Pe, t.child = e.child;
          var Te = $_.bind(null, e);
          return wT(u, Te), null;
        } else {
          sw(t, u, s.treeContext);
          var St = i.children, pt = SS(t, St);
          return pt.flags |= La, pt;
        }
      }
    }
    function gC(e, t, a) {
      e.lanes = Ze(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ze(i.lanes, t)), ig(e.return, t, a);
    }
    function Sx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === _e) {
          var u = i.memoizedState;
          u !== null && gC(i, a, e);
        } else if (i.tag === bt)
          gC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Ex(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && qh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Cx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Rx(e, t) {
      e !== void 0 && !hm[e] && (e !== "collapsed" && e !== "hidden" ? (hm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (hm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function SC(e, t) {
      {
        var a = vt(e), i = !a && typeof Ga(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Tx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (vt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!SC(e[a], a))
              return;
        } else {
          var i = Ga(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!SC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function EC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Cx(u), Rx(s, u), Tx(f, u), Ea(e, t, f, a);
      var p = Ki.current, v = Lg(p, gp);
      if (v)
        p = Mg(p, gp), t.flags |= Pe;
      else {
        var y = e !== null && (e.flags & Pe) !== ke;
        y && Sx(t, t.child, a), p = Rf(p);
      }
      if (Fo(t, p), (t.mode & ot) === Me)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Ex(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), CS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var z = M.alternate;
              if (z !== null && qh(z) === null) {
                t.child = M;
                break;
              }
              var H = M.sibling;
              M.sibling = x, x = M, M = H;
            }
            CS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            CS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function wx(e, t, a) {
      kg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Ef(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var CC = !1;
    function xx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || CC || (CC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Wi(v, s, "prop", "Context.Provider");
      }
      if (oE(t, u, p), f !== null) {
        var y = f.value;
        if (Se(y, p)) {
          if (f.children === s.children && !xh())
            return Mu(e, t, a);
        } else
          Sw(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var RC = !1;
    function _x(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (RC || (RC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Sf(t, a);
      var f = Jn(i);
      kl(t);
      var p;
      return _p.current = t, Gr(!0), p = s(f), Gr(!1), lu(), t.flags |= Cl, Ea(e, t, p, a), t.child;
    }
    function kp() {
      Ji = !0;
    }
    function ym(e, t) {
      (t.mode & ot) === Me && e !== null && (e.alternate = null, t.alternate = null, t.flags |= nn);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), rC(), Vp(t.lanes), ra(a, t.childLanes) ? (Lw(e, t), t.child) : null;
    }
    function bx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Mt) : s.push(e), a.flags |= nn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function kx(e, t, a) {
      switch (t.tag) {
        case re:
          vC(t), t.stateNode, yf();
          break;
        case ie:
          bE(t);
          break;
        case pe: {
          var i = t.type;
          jl(i) && bh(t);
          break;
        }
        case me:
          kg(t, t.stateNode.containerInfo);
          break;
        case at: {
          var u = t.memoizedProps.value, s = t.type._context;
          oE(t, s, u);
          break;
        }
        case ct:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= Ke);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case _e: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Fo(t, Rf(Ki.current)), t.flags |= Pe, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return mC(e, t, a);
            Fo(t, Rf(Ki.current));
            var b = Mu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Fo(t, Rf(Ki.current));
          break;
        }
        case bt: {
          var x = (e.flags & Pe) !== ke, M = ra(a, t.childLanes);
          if (x) {
            if (M)
              return EC(e, t, a);
            t.flags |= Pe;
          }
          var z = t.memoizedState;
          if (z !== null && (z.rendering = null, z.tail = null, z.lastEffect = null), Fo(t, Ki.current), M)
            break;
          return null;
        }
        case Ue:
        case qe:
          return t.lanes = V, fC(e, t, a);
      }
      return Mu(e, t, a);
    }
    function TC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return bx(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || xh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ji = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Pe) === ke)
            return Ji = !1, kx(e, t, a);
          (e.flags & fs) !== ke ? Ji = !0 : Ji = !1;
        }
      } else if (Ji = !1, Mr() && ew(t)) {
        var f = t.index, p = tw();
        X0(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case rt:
          return sx(e, t, t.type, a);
        case tn: {
          var v = t.elementType;
          return ux(e, t, v, a);
        }
        case he: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : Xi(y, g);
          return vS(e, t, y, b, a);
        }
        case pe: {
          var x = t.type, M = t.pendingProps, z = t.elementType === x ? M : Xi(x, M);
          return pC(e, t, x, z, a);
        }
        case re:
          return ax(e, t, a);
        case ie:
          return ix(e, t, a);
        case Ve:
          return lx(e, t);
        case _e:
          return mC(e, t, a);
        case me:
          return wx(e, t, a);
        case Qe: {
          var H = t.type, fe = t.pendingProps, Oe = t.elementType === H ? fe : Xi(H, fe);
          return oC(e, t, H, Oe, a);
        }
        case Ct:
          return tx(e, t, a);
        case st:
          return nx(e, t, a);
        case ct:
          return rx(e, t, a);
        case at:
          return xx(e, t, a);
        case fn:
          return _x(e, t, a);
        case it: {
          var Te = t.type, St = t.pendingProps, pt = Xi(Te, St);
          if (t.type !== t.elementType) {
            var D = Te.propTypes;
            D && Wi(
              D,
              pt,
              // Resolved for outer only
              "prop",
              wt(Te)
            );
          }
          return pt = Xi(Te.type, pt), sC(e, t, Te, pt, a);
        }
        case He:
          return cC(e, t, t.type, t.pendingProps, a);
        case xn: {
          var j = t.type, O = t.pendingProps, G = t.elementType === j ? O : Xi(j, O);
          return ox(e, t, j, G, a);
        }
        case bt:
          return EC(e, t, a);
        case En:
          break;
        case Ue:
          return fC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function kf(e) {
      e.flags |= Ke;
    }
    function wC(e) {
      e.flags |= Xr, e.flags |= sd;
    }
    var xC, TS, _C, bC;
    xC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ie || u.tag === Ve)
          KR(e, u.stateNode);
        else if (u.tag !== me) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, TS = function(e, t) {
    }, _C = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Dg(), v = JR(f, a, s, i, u, p);
        t.updateQueue = v, v && kf(t);
      }
    }, bC = function(e, t, a, i) {
      a !== i && kf(t);
    };
    function Dp(e, t) {
      if (!Mr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function zr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = ke;
      if (t) {
        if ((e.mode & ze) !== Me) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ze(a, Ze(y.lanes, y.childLanes)), i |= y.subtreeFlags & nr, i |= y.flags & nr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ze(a, Ze(g.lanes, g.childLanes)), i |= g.subtreeFlags & nr, i |= g.flags & nr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & ze) !== Me) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ze(a, Ze(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ze(a, Ze(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Dx(e, t, a) {
      if (vw() && (t.mode & ot) !== Me && (t.flags & Pe) === ke)
        return rE(t), yf(), t.flags |= Rn | va | Gn, !1;
      var i = Mh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (dw(t), zr(t), (t.mode & ze) !== Me) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (yf(), (t.flags & Pe) === ke && (t.memoizedState = null), t.flags |= Ke, zr(t), (t.mode & ze) !== Me) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return aE(), !0;
    }
    function kC(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case rt:
        case tn:
        case He:
        case he:
        case Qe:
        case Ct:
        case st:
        case ct:
        case fn:
        case it:
          return zr(t), null;
        case pe: {
          var u = t.type;
          return jl(u) && _h(t), zr(t), null;
        }
        case re: {
          var s = t.stateNode;
          if (Cf(t), Iy(t), zg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Mh(t);
            if (f)
              kf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rn) !== ke) && (t.flags |= Oa, aE());
            }
          }
          return TS(e, t), zr(t), null;
        }
        case ie: {
          Og(t);
          var v = _E(), y = t.type;
          if (e !== null && t.stateNode != null)
            _C(e, t, y, i, v), e.ref !== t.ref && wC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zr(t), null;
            }
            var g = Dg(), b = Mh(t);
            if (b)
              cw(t, v, g) && kf(t);
            else {
              var x = XR(y, i, v, g, t);
              xC(x, t, !1, !1), t.stateNode = x, ZR(x, y, i, v) && kf(t);
            }
            t.ref !== null && wC(t);
          }
          return zr(t), null;
        }
        case Ve: {
          var M = i;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            bC(e, t, z, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = _E(), fe = Dg(), Oe = Mh(t);
            Oe ? fw(t) && kf(t) : t.stateNode = eT(M, H, fe, t);
          }
          return zr(t), null;
        }
        case _e: {
          Tf(t);
          var Te = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var St = Dx(e, t, Te);
            if (!St)
              return t.flags & Gn ? t : null;
          }
          if ((t.flags & Pe) !== ke)
            return t.lanes = a, (t.mode & ze) !== Me && iS(t), t;
          var pt = Te !== null, D = e !== null && e.memoizedState !== null;
          if (pt !== D && pt) {
            var j = t.child;
            if (j.flags |= Rl, (t.mode & ot) !== Me) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              O || Lg(Ki.current, DE) ? O_() : PS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= Ke), zr(t), (t.mode & ze) !== Me && pt) {
            var de = t.child;
            de !== null && (t.treeBaseDuration -= de.treeBaseDuration);
          }
          return null;
        }
        case me:
          return Cf(t), TS(e, t), e === null && WT(t.stateNode.containerInfo), zr(t), null;
        case at:
          var ue = t.type._context;
          return ag(ue, t), zr(t), null;
        case xn: {
          var je = t.type;
          return jl(je) && _h(t), zr(t), null;
        }
        case bt: {
          Tf(t);
          var We = t.memoizedState;
          if (We === null)
            return zr(t), null;
          var Qt = (t.flags & Pe) !== ke, Dt = We.rendering;
          if (Dt === null)
            if (Qt)
              Dp(We, !1);
            else {
              var $n = M_() && (e === null || (e.flags & Pe) === ke);
              if (!$n)
                for (var Ot = t.child; Ot !== null; ) {
                  var Un = qh(Ot);
                  if (Un !== null) {
                    Qt = !0, t.flags |= Pe, Dp(We, !1);
                    var ua = Un.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Ke), t.subtreeFlags = ke, Mw(t, a), Fo(t, Mg(Ki.current, gp)), t.child;
                  }
                  Ot = Ot.sibling;
                }
              We.tail !== null && mn() > qC() && (t.flags |= Pe, Qt = !0, Dp(We, !1), t.lanes = Rd);
            }
          else {
            if (!Qt) {
              var jr = qh(Dt);
              if (jr !== null) {
                t.flags |= Pe, Qt = !0;
                var ii = jr.updateQueue;
                if (ii !== null && (t.updateQueue = ii, t.flags |= Ke), Dp(We, !0), We.tail === null && We.tailMode === "hidden" && !Dt.alternate && !Mr())
                  return zr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                mn() * 2 - We.renderingStartTime > qC() && a !== na && (t.flags |= Pe, Qt = !0, Dp(We, !1), t.lanes = Rd);
            }
            if (We.isBackwards)
              Dt.sibling = t.child, t.child = Dt;
            else {
              var Ta = We.last;
              Ta !== null ? Ta.sibling = Dt : t.child = Dt, We.last = Dt;
            }
          }
          if (We.tail !== null) {
            var wa = We.tail;
            We.rendering = wa, We.tail = wa.sibling, We.renderingStartTime = mn(), wa.sibling = null;
            var oa = Ki.current;
            return Qt ? oa = Mg(oa, gp) : oa = Rf(oa), Fo(t, oa), wa;
          }
          return zr(t), null;
        }
        case En:
          break;
        case Ue:
        case qe: {
          VS(t);
          var Fu = t.memoizedState, Af = Fu !== null;
          if (e !== null) {
            var Ip = e.memoizedState, Wl = Ip !== null;
            Wl !== Af && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !T && (t.flags |= Rl);
          }
          return !Af || (t.mode & ot) === Me ? zr(t) : ra(Ql, na) && (zr(t), t.subtreeFlags & (nn | Ke) && (t.flags |= Rl)), null;
        }
        case Nt:
          return null;
        case Rt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ox(e, t, a) {
      switch (qy(t), t.tag) {
        case pe: {
          var i = t.type;
          jl(i) && _h(t);
          var u = t.flags;
          return u & Gn ? (t.flags = u & ~Gn | Pe, (t.mode & ze) !== Me && iS(t), t) : null;
        }
        case re: {
          t.stateNode, Cf(t), Iy(t), zg();
          var s = t.flags;
          return (s & Gn) !== ke && (s & Pe) === ke ? (t.flags = s & ~Gn | Pe, t) : null;
        }
        case ie:
          return Og(t), null;
        case _e: {
          Tf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            yf();
          }
          var p = t.flags;
          return p & Gn ? (t.flags = p & ~Gn | Pe, (t.mode & ze) !== Me && iS(t), t) : null;
        }
        case bt:
          return Tf(t), null;
        case me:
          return Cf(t), null;
        case at:
          var v = t.type._context;
          return ag(v, t), null;
        case Ue:
        case qe:
          return VS(t), null;
        case Nt:
          return null;
        default:
          return null;
      }
    }
    function DC(e, t, a) {
      switch (qy(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && _h(t);
          break;
        }
        case re: {
          t.stateNode, Cf(t), Iy(t), zg();
          break;
        }
        case ie: {
          Og(t);
          break;
        }
        case me:
          Cf(t);
          break;
        case _e:
          Tf(t);
          break;
        case bt:
          Tf(t);
          break;
        case at:
          var u = t.type._context;
          ag(u, t);
          break;
        case Ue:
        case qe:
          VS(t);
          break;
      }
    }
    var OC = null;
    OC = /* @__PURE__ */ new Set();
    var gm = !1, Ur = !1, Lx = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, Df = null, Of = null;
    function Mx(e) {
      au(null, function() {
        throw e;
      }), ud();
    }
    var Nx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ze)
        try {
          Yl(), t.componentWillUnmount();
        } finally {
          $l(e);
        }
      else
        t.componentWillUnmount();
    };
    function LC(e, t) {
      try {
        Vo(lr, e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        Nx(e, a);
      } catch (i) {
        un(e, t, i);
      }
    }
    function zx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        un(e, t, i);
      }
    }
    function MC(e, t) {
      try {
        zC(e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function Lf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Je && ft && e.mode & ze)
              try {
                Yl(), i = a(null);
              } finally {
                $l(e);
              }
            else
              i = a(null);
          } catch (u) {
            un(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function Sm(e, t, a) {
      try {
        a();
      } catch (i) {
        un(e, t, i);
      }
    }
    var NC = !1;
    function Ux(e, t) {
      GR(e.containerInfo), Ee = t, Ax();
      var a = NC;
      return NC = !1, a;
    }
    function Ax() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & io) !== ke && t !== null ? (t.return = e, Ee = t) : Fx();
      }
    }
    function Fx() {
      for (; Ee !== null; ) {
        var e = Ee;
        Ht(e);
        try {
          Hx(e);
        } catch (a) {
          un(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Hx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Oa) !== ke) {
        switch (Ht(e), e.tag) {
          case he:
          case Qe:
          case He:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ys && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Xi(e.type, i), u);
              {
                var p = OC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case re: {
            {
              var v = e.stateNode;
              ST(v.containerInfo);
            }
            break;
          }
          case ie:
          case Ve:
          case me:
          case xn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function el(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Nr) !== Ba ? Sc(t) : (e & lr) !== Ba && Ec(t), (e & Vl) !== Ba && Bp(!0), Sm(t, a, p), (e & Vl) !== Ba && Bp(!1), (e & Nr) !== Ba ? Lv() : (e & lr) !== Ba && lo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Vo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Nr) !== Ba ? Ov(t) : (e & lr) !== Ba && Mv(t);
            var f = s.create;
            (e & Vl) !== Ba && Bp(!0), s.destroy = f(), (e & Vl) !== Ba && Bp(!1), (e & Nr) !== Ba ? Sd() : (e & lr) !== Ba && Nv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & lr) !== ke ? v = "useLayoutEffect" : (s.tag & Vl) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function jx(e, t) {
      if ((t.flags & Ke) !== ke)
        switch (t.tag) {
          case ct: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = tC(), p = t.alternate === null ? "mount" : "update";
            eC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case re:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case ct:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Vx(e, t, a, i) {
      if ((a.flags & yr) !== ke)
        switch (a.tag) {
          case he:
          case Qe:
          case He: {
            if (!Ur)
              if (a.mode & ze)
                try {
                  Yl(), Vo(lr | ir, a);
                } finally {
                  $l(a);
                }
              else
                Vo(lr | ir, a);
            break;
          }
          case pe: {
            var u = a.stateNode;
            if (a.flags & Ke && !Ur)
              if (t === null)
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & ze)
                  try {
                    Yl(), u.componentDidMount();
                  } finally {
                    $l(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Xi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & ze)
                  try {
                    Yl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    $l(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), vE(a, p, u));
            break;
          }
          case re: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    y = a.child.stateNode;
                    break;
                  case pe:
                    y = a.child.stateNode;
                    break;
                }
              vE(a, v, y);
            }
            break;
          }
          case ie: {
            var g = a.stateNode;
            if (t === null && a.flags & Ke) {
              var b = a.type, x = a.memoizedProps;
              iT(g, b, x);
            }
            break;
          }
          case Ve:
            break;
          case me:
            break;
          case ct: {
            {
              var M = a.memoizedProps, z = M.onCommit, H = M.onRender, fe = a.stateNode.effectDuration, Oe = tC(), Te = t === null ? "mount" : "update";
              eC() && (Te = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, Te, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Oe);
              {
                typeof z == "function" && z(a.memoizedProps.id, Te, fe, Oe), F_(a);
                var St = a.return;
                e:
                  for (; St !== null; ) {
                    switch (St.tag) {
                      case re:
                        var pt = St.stateNode;
                        pt.effectDuration += fe;
                        break e;
                      case ct:
                        var D = St.stateNode;
                        D.effectDuration += fe;
                        break e;
                    }
                    St = St.return;
                  }
              }
            }
            break;
          }
          case _e: {
            Gx(e, a);
            break;
          }
          case bt:
          case xn:
          case En:
          case Ue:
          case qe:
          case Rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ur || a.flags & Xr && zC(a);
    }
    function Px(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case He: {
          if (e.mode & ze)
            try {
              Yl(), LC(e, e.return);
            } finally {
              $l(e);
            }
          else
            LC(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && zx(e, e.return, t), MC(e, e.return);
          break;
        }
        case ie: {
          MC(e, e.return);
          break;
        }
      }
    }
    function Bx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? hT(u) : yT(i.stateNode, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
          }
        } else if (i.tag === Ve) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? mT(s) : gT(s, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
        } else if (!((i.tag === Ue || i.tag === qe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function zC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ie:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & ze)
            try {
              Yl(), u = t(i);
            } finally {
              $l(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function $x(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && XT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Yx(e) {
      for (var t = e.return; t !== null; ) {
        if (AC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AC(e) {
      return e.tag === ie || e.tag === re || e.tag === me;
    }
    function FC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || AC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== Ve && t.tag !== Yt; ) {
            if (t.flags & nn || t.child === null || t.tag === me)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & nn))
            return t.stateNode;
        }
    }
    function Ix(e) {
      var t = Yx(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & jt && (H0(a), t.flags &= ~jt);
          var i = FC(e);
          _S(e, i, a);
          break;
        }
        case re:
        case me: {
          var u = t.stateNode.containerInfo, s = FC(e);
          xS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === ie || i === Ve;
      if (u) {
        var s = e.stateNode;
        t ? fT(a, s, t) : sT(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === ie || i === Ve;
      if (u) {
        var s = e.stateNode;
        t ? cT(a, s, t) : oT(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Ar = null, tl = !1;
    function Qx(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ie: {
                Ar = i.stateNode, tl = !1;
                break e;
              }
              case re: {
                Ar = i.stateNode.containerInfo, tl = !0;
                break e;
              }
              case me: {
                Ar = i.stateNode.containerInfo, tl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ar === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        HC(e, t, a), Ar = null, tl = !1;
      }
      $x(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        HC(e, t, i), i = i.sibling;
    }
    function HC(e, t, a) {
      switch (yd(a), a.tag) {
        case ie:
          Ur || Lf(a, t);
        case Ve: {
          {
            var i = Ar, u = tl;
            Ar = null, Po(e, t, a), Ar = i, tl = u, Ar !== null && (tl ? pT(Ar, a.stateNode) : dT(Ar, a.stateNode));
          }
          return;
        }
        case Yt: {
          Ar !== null && (tl ? vT(Ar, a.stateNode) : Fy(Ar, a.stateNode));
          return;
        }
        case me: {
          {
            var s = Ar, f = tl;
            Ar = a.stateNode.containerInfo, tl = !0, Po(e, t, a), Ar = s, tl = f;
          }
          return;
        }
        case he:
        case Qe:
        case it:
        case He: {
          if (!Ur) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, x = b.destroy, M = b.tag;
                  x !== void 0 && ((M & Vl) !== Ba ? Sm(a, t, x) : (M & lr) !== Ba && (Ec(a), a.mode & ze ? (Yl(), Sm(a, t, x), $l(a)) : Sm(a, t, x), lo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case pe: {
          if (!Ur) {
            Lf(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && wS(a, t, z);
          }
          Po(e, t, a);
          return;
        }
        case En: {
          Po(e, t, a);
          return;
        }
        case Ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & ot
          ) {
            var H = Ur;
            Ur = H || a.memoizedState !== null, Po(e, t, a), Ur = H;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function Wx(e) {
      e.memoizedState;
    }
    function Gx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && NT(s);
          }
        }
      }
    }
    function jC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Lx()), t.forEach(function(i) {
          var u = Y_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), rr)
              if (Df !== null && Of !== null)
                Pp(Of, Df);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function qx(e, t, a) {
      Df = a, Of = e, Ht(t), VC(t, e), Ht(t), Df = null, Of = null;
    }
    function nl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Qx(e, t, s);
          } catch (v) {
            un(s, t, v);
          }
        }
      var f = Ks();
      if (t.subtreeFlags & Jr)
        for (var p = t.child; p !== null; )
          Ht(p), VC(p, e), p = p.sibling;
      Ht(f);
    }
    function VC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case he:
        case Qe:
        case it:
        case He: {
          if (nl(t, e), Il(e), u & Ke) {
            try {
              el(Vl | ir, e, e.return), Vo(Vl | ir, e);
            } catch (je) {
              un(e, e.return, je);
            }
            if (e.mode & ze) {
              try {
                Yl(), el(lr | ir, e, e.return);
              } catch (je) {
                un(e, e.return, je);
              }
              $l(e);
            } else
              try {
                el(lr | ir, e, e.return);
              } catch (je) {
                un(e, e.return, je);
              }
          }
          return;
        }
        case pe: {
          nl(t, e), Il(e), u & Xr && i !== null && Lf(i, i.return);
          return;
        }
        case ie: {
          nl(t, e), Il(e), u & Xr && i !== null && Lf(i, i.return);
          {
            if (e.flags & jt) {
              var s = e.stateNode;
              try {
                H0(s);
              } catch (je) {
                un(e, e.return, je);
              }
            }
            if (u & Ke) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    lT(f, g, y, v, p, e);
                  } catch (je) {
                    un(e, e.return, je);
                  }
              }
            }
          }
          return;
        }
        case Ve: {
          if (nl(t, e), Il(e), u & Ke) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, x = e.memoizedProps, M = i !== null ? i.memoizedProps : x;
            try {
              uT(b, M, x);
            } catch (je) {
              un(e, e.return, je);
            }
          }
          return;
        }
        case re: {
          if (nl(t, e), Il(e), u & Ke && i !== null) {
            var z = i.memoizedState;
            if (z.isDehydrated)
              try {
                MT(t.containerInfo);
              } catch (je) {
                un(e, e.return, je);
              }
          }
          return;
        }
        case me: {
          nl(t, e), Il(e);
          return;
        }
        case _e: {
          nl(t, e), Il(e);
          var H = e.child;
          if (H.flags & Rl) {
            var fe = H.stateNode, Oe = H.memoizedState, Te = Oe !== null;
            if (fe.isHidden = Te, Te) {
              var St = H.alternate !== null && H.alternate.memoizedState !== null;
              St || D_();
            }
          }
          if (u & Ke) {
            try {
              Wx(e);
            } catch (je) {
              un(e, e.return, je);
            }
            jC(e);
          }
          return;
        }
        case Ue: {
          var pt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ot
          ) {
            var D = Ur;
            Ur = D || pt, nl(t, e), Ur = D;
          } else
            nl(t, e);
          if (Il(e), u & Rl) {
            var j = e.stateNode, O = e.memoizedState, G = O !== null, de = e;
            if (j.isHidden = G, G && !pt && (de.mode & ot) !== Me) {
              Ee = de;
              for (var ue = de.child; ue !== null; )
                Ee = ue, Kx(ue), ue = ue.sibling;
            }
            Bx(de, G);
          }
          return;
        }
        case bt: {
          nl(t, e), Il(e), u & Ke && jC(e);
          return;
        }
        case En:
          return;
        default: {
          nl(t, e), Il(e);
          return;
        }
      }
    }
    function Il(e) {
      var t = e.flags;
      if (t & nn) {
        try {
          Ix(e);
        } catch (a) {
          un(e, e.return, a);
        }
        e.flags &= ~nn;
      }
      t & La && (e.flags &= ~La);
    }
    function Xx(e, t, a) {
      Df = a, Of = t, Ee = e, PC(e, t, a), Df = null, Of = null;
    }
    function PC(e, t, a) {
      for (var i = (e.mode & ot) !== Me; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === Ue && i) {
          var f = u.memoizedState !== null, p = f || gm;
          if (p) {
            bS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ur, b = gm, x = Ur;
            gm = p, Ur = g, Ur && !x && (Ee = u, Zx(u));
            for (var M = s; M !== null; )
              Ee = M, PC(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Ee = u, gm = b, Ur = x, bS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & yr) !== ke && s !== null ? (s.return = u, Ee = s) : bS(e, t, a);
      }
    }
    function bS(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & yr) !== ke) {
          var u = i.alternate;
          Ht(i);
          try {
            Vx(t, u, i, a);
          } catch (f) {
            un(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function Kx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case he:
          case Qe:
          case it:
          case He: {
            if (t.mode & ze)
              try {
                Yl(), el(lr, t, t.return);
              } finally {
                $l(t);
              }
            else
              el(lr, t, t.return);
            break;
          }
          case pe: {
            Lf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case ie: {
            Lf(t, t.return);
            break;
          }
          case Ue: {
            var u = t.memoizedState !== null;
            if (u) {
              BC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : BC(e);
      }
    }
    function BC(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function Zx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Ue) {
          var i = t.memoizedState !== null;
          if (i) {
            $C(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : $C(e);
      }
    }
    function $C(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        Ht(t);
        try {
          Px(t);
        } catch (i) {
          un(t, t.return, i);
        }
        if (Cn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function Jx(e, t, a, i) {
      Ee = t, e_(t, e, a, i);
    }
    function e_(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & Ma) !== ke && s !== null ? (s.return = u, Ee = s) : t_(e, t, a, i);
      }
    }
    function t_(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & sn) !== ke) {
          Ht(u);
          try {
            n_(t, u, a, i);
          } catch (f) {
            un(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function n_(e, t, a, i) {
      switch (t.tag) {
        case he:
        case Qe:
        case He: {
          if (t.mode & ze) {
            aS();
            try {
              Vo(Nr | ir, t);
            } finally {
              rS(t);
            }
          } else
            Vo(Nr | ir, t);
          break;
        }
      }
    }
    function r_(e) {
      Ee = e, a_();
    }
    function a_() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & Mt) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, u_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & Ma) !== ke && t !== null ? (t.return = e, Ee = t) : i_();
      }
    }
    function i_() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & sn) !== ke && (Ht(e), l_(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function l_(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case He: {
          e.mode & ze ? (aS(), el(Nr | ir, e, e.return), rS(e)) : el(Nr | ir, e, e.return);
          break;
        }
      }
    }
    function u_(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        Ht(a), s_(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : o_(e);
      }
    }
    function o_(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (UC(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function s_(e, t) {
      switch (e.tag) {
        case he:
        case Qe:
        case He: {
          e.mode & ze ? (aS(), el(Nr, e, t), rS(e)) : el(Nr, e, t);
          break;
        }
      }
    }
    function c_(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case He: {
          try {
            Vo(lr | ir, e);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
      }
    }
    function f_(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case He: {
          try {
            Vo(Nr | ir, e);
          } catch (t) {
            un(e, e.return, t);
          }
          break;
        }
      }
    }
    function d_(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case He: {
          try {
            el(lr | ir, e, e.return);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wS(e, e.return, t);
          break;
        }
      }
    }
    function p_(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case He:
          try {
            el(Nr | ir, e, e.return);
          } catch (t) {
            un(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Op = Symbol.for;
      Op("selector.component"), Op("selector.has_pseudo_class"), Op("selector.role"), Op("selector.test_id"), Op("selector.text");
    }
    var v_ = [];
    function h_() {
      v_.forEach(function(e) {
        return e();
      });
    }
    var m_ = A.ReactCurrentActQueue;
    function y_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function YC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && m_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var g_ = Math.ceil, kS = A.ReactCurrentDispatcher, DS = A.ReactCurrentOwner, Fr = A.ReactCurrentBatchConfig, rl = A.ReactCurrentActQueue, sr = (
      /*             */
      0
    ), IC = (
      /*               */
      1
    ), Hr = (
      /*                */
      2
    ), _i = (
      /*                */
      4
    ), Nu = 0, Lp = 1, Is = 2, Em = 3, Mp = 4, QC = 5, OS = 6, gt = sr, Ca = null, On = null, cr = V, Ql = V, LS = Lo(V), fr = Nu, Np = null, Cm = V, zp = V, Rm = V, Up = null, $a = null, MS = 0, WC = 500, GC = 1 / 0, S_ = 500, zu = null;
    function Ap() {
      GC = mn() + S_;
    }
    function qC() {
      return GC;
    }
    var Tm = !1, NS = null, Mf = null, Qs = !1, Bo = null, Fp = V, zS = [], US = null, E_ = 50, Hp = 0, AS = null, FS = !1, wm = !1, C_ = 50, Nf = 0, xm = null, jp = Xt, _m = V, XC = !1;
    function bm() {
      return Ca;
    }
    function Ra() {
      return (gt & (Hr | _i)) !== sr ? mn() : (jp !== Xt || (jp = mn()), jp);
    }
    function $o(e) {
      var t = e.mode;
      if ((t & ot) === Me)
        return Ae;
      if ((gt & Hr) !== sr && cr !== V)
        return jn(cr);
      var a = yw() !== mw;
      if (a) {
        if (Fr.transition !== null) {
          var i = Fr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return _m === yt && (_m = xd()), _m;
      }
      var u = Aa();
      if (u !== yt)
        return u;
      var s = tT();
      return s;
    }
    function R_(e) {
      var t = e.mode;
      return (t & ot) === Me ? Ae : ay();
    }
    function dr(e, t, a, i) {
      Q_(), XC && S("useInsertionEffect must not schedule updates."), FS && (wm = !0), mu(e, a, i), (gt & Hr) !== V && e === Ca ? q_(t) : (rr && Od(e, t, a), X_(t), e === Ca && ((gt & Hr) === sr && (zp = Ze(zp, a)), fr === Mp && Yo(e, cr)), Ya(e, i), a === Ae && gt === sr && (t.mode & ot) === Me && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !rl.isBatchingLegacy && (Ap(), q0()));
    }
    function T_(e, t, a) {
      var i = e.current;
      i.lanes = t, mu(e, t, a), Ya(e, a);
    }
    function w_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (gt & Hr) !== sr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      ty(e, t);
      var i = ys(e, e === Ca ? cr : V);
      if (i === V) {
        a !== null && d1(a), e.callbackNode = null, e.callbackPriority = yt;
        return;
      }
      var u = Nn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(rl.current !== null && a !== YS)) {
        a == null && s !== Ae && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && d1(a);
      var f;
      if (u === Ae)
        e.tag === Mo ? (rl.isBatchingLegacy !== null && (rl.didScheduleLegacyUpdate = !0), JT(JC.bind(null, e))) : G0(JC.bind(null, e)), rl.current !== null ? rl.current.push(No) : rT(function() {
          (gt & (Hr | _i)) === sr && No();
        }), f = null;
      else {
        var p;
        switch (Rs(i)) {
          case gr:
            p = mc;
            break;
          case ar:
            p = ya;
            break;
          case Bi:
            p = mi;
            break;
          case Es:
            p = wl;
            break;
          default:
            p = mi;
            break;
        }
        f = IS(p, KC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function KC(e, t) {
      if (Qw(), jp = Xt, _m = V, (gt & (Hr | _i)) !== sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ys(e, e === Ca ? cr : V);
      if (u === V)
        return null;
      var s = !Ss(e, u) && !jv(e, u) && !t, f = s ? z_(e, u) : Dm(e, u);
      if (f !== Nu) {
        if (f === Is) {
          var p = Td(e);
          p !== V && (u = p, f = HS(e, p));
        }
        if (f === Lp) {
          var v = Np;
          throw Ws(e, V), Yo(e, u), Ya(e, mn()), v;
        }
        if (f === OS)
          Yo(e, u);
        else {
          var y = !Ss(e, u), g = e.current.alternate;
          if (y && !__(g)) {
            if (f = Dm(e, u), f === Is) {
              var b = Td(e);
              b !== V && (u = b, f = HS(e, b));
            }
            if (f === Lp) {
              var x = Np;
              throw Ws(e, V), Yo(e, u), Ya(e, mn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, x_(e, f, u);
        }
      }
      return Ya(e, mn()), e.callbackNode === a ? KC.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Up;
      if (Pn(e)) {
        var i = Ws(e, t);
        i.flags |= Rn, QT(e.containerInfo);
      }
      var u = Dm(e, t);
      if (u !== Is) {
        var s = $a;
        $a = a, s !== null && ZC(s);
      }
      return u;
    }
    function ZC(e) {
      $a === null ? $a = e : $a.push.apply($a, e);
    }
    function x_(e, t, a) {
      switch (t) {
        case Nu:
        case Lp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Is: {
          Gs(e, $a, zu);
          break;
        }
        case Em: {
          if (Yo(e, a), Vc(a) && // do not delay if we're inside an act() scope
          !p1()) {
            var i = MS + WC - mn();
            if (i > 10) {
              var u = ys(e, V);
              if (u !== V)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                Ra(), kd(e, s);
                break;
              }
              e.timeoutHandle = Uy(Gs.bind(null, e, $a, zu), i);
              break;
            }
          }
          Gs(e, $a, zu);
          break;
        }
        case Mp: {
          if (Yo(e, a), Hv(a))
            break;
          if (!p1()) {
            var f = Fv(e, a), p = f, v = mn() - p, y = I_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(Gs.bind(null, e, $a, zu), y);
              break;
            }
          }
          Gs(e, $a, zu);
          break;
        }
        case QC: {
          Gs(e, $a, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function __(e) {
      for (var t = e; ; ) {
        if (t.flags & cs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & cs && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yo(e, t) {
      t = vo(t, Rm), t = vo(t, zp), bd(e, t);
    }
    function JC(e) {
      if (Ww(), (gt & (Hr | _i)) !== sr)
        throw new Error("Should not already be working.");
      Au();
      var t = ys(e, V);
      if (!ra(t, Ae))
        return Ya(e, mn()), null;
      var a = Dm(e, t);
      if (e.tag !== Mo && a === Is) {
        var i = Td(e);
        i !== V && (t = i, a = HS(e, i));
      }
      if (a === Lp) {
        var u = Np;
        throw Ws(e, V), Yo(e, t), Ya(e, mn()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Gs(e, $a, zu), Ya(e, mn()), null;
    }
    function b_(e, t) {
      t !== V && (ho(e, Ze(t, Ae)), Ya(e, mn()), (gt & (Hr | _i)) === sr && (Ap(), No()));
    }
    function jS(e, t) {
      var a = gt;
      gt |= IC;
      try {
        return e(t);
      } finally {
        gt = a, gt === sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !rl.isBatchingLegacy && (Ap(), q0());
      }
    }
    function k_(e, t, a, i, u) {
      var s = Aa(), f = Fr.transition;
      try {
        return Fr.transition = null, Vn(gr), e(t, a, i, u);
      } finally {
        Vn(s), Fr.transition = f, gt === sr && Ap();
      }
    }
    function Uu(e) {
      Bo !== null && Bo.tag === Mo && (gt & (Hr | _i)) === sr && Au();
      var t = gt;
      gt |= IC;
      var a = Fr.transition, i = Aa();
      try {
        return Fr.transition = null, Vn(gr), e ? e() : void 0;
      } finally {
        Vn(i), Fr.transition = a, gt = t, (gt & (Hr | _i)) === sr && No();
      }
    }
    function e1() {
      return (gt & (Hr | _i)) !== sr;
    }
    function km(e, t) {
      ia(LS, Ql, e), Ql = Ze(Ql, t);
    }
    function VS(e) {
      Ql = LS.current, aa(LS, e);
    }
    function Ws(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, nT(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          DC(u, i), i = i.return;
        }
      Ca = e;
      var s = qs(e.current, null);
      return On = s, cr = Ql = t, fr = Nu, Np = null, Cm = V, zp = V, Rm = V, Up = null, $a = null, Cw(), qi.discardPendingWarnings(), s;
    }
    function t1(e, t) {
      do {
        var a = On;
        try {
          if (Ah(), LE(), Cn(), DS.current = null, a === null || a.return === null) {
            fr = Lp, Np = t, On = null;
            return;
          }
          if (Je && a.mode & ze && vm(a, !0), ht)
            if (lu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              zv(a, i, cr);
            } else
              Cc(a, t, cr);
          Zw(e, a.return, a, t, cr), i1(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function n1() {
      var e = kS.current;
      return kS.current = sm, e === null ? sm : e;
    }
    function r1(e) {
      kS.current = e;
    }
    function D_() {
      MS = mn();
    }
    function Vp(e) {
      Cm = Ze(e, Cm);
    }
    function O_() {
      fr === Nu && (fr = Em);
    }
    function PS() {
      (fr === Nu || fr === Em || fr === Is) && (fr = Mp), Ca !== null && (gs(Cm) || gs(zp)) && Yo(Ca, cr);
    }
    function L_(e) {
      fr !== Mp && (fr = Is), Up === null ? Up = [e] : Up.push(e);
    }
    function M_() {
      return fr === Nu;
    }
    function Dm(e, t) {
      var a = gt;
      gt |= Hr;
      var i = n1();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Pp(e, cr), u.clear()), $c(e, t);
        }
        zu = Ld(), Ws(e, t);
      }
      ti(t);
      do
        try {
          N_();
          break;
        } catch (s) {
          t1(e, s);
        }
      while (!0);
      if (Ah(), gt = a, r1(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return oo(), Ca = null, cr = V, fr;
    }
    function N_() {
      for (; On !== null; )
        a1(On);
    }
    function z_(e, t) {
      var a = gt;
      gt |= Hr;
      var i = n1();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Pp(e, cr), u.clear()), $c(e, t);
        }
        zu = Ld(), Ap(), Ws(e, t);
      }
      ti(t);
      do
        try {
          U_();
          break;
        } catch (s) {
          t1(e, s);
        }
      while (!0);
      return Ah(), r1(i), gt = a, On !== null ? (ps(), Nu) : (oo(), Ca = null, cr = V, fr);
    }
    function U_() {
      for (; On !== null && !hc(); )
        a1(On);
    }
    function a1(e) {
      var t = e.alternate;
      Ht(e);
      var a;
      (e.mode & ze) !== Me ? (nS(e), a = BS(t, e, Ql), vm(e, !0)) : a = BS(t, e, Ql), Cn(), e.memoizedProps = e.pendingProps, a === null ? i1(e) : On = a, DS.current = null;
    }
    function i1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & va) === ke) {
          Ht(t);
          var u = void 0;
          if ((t.mode & ze) === Me ? u = kC(a, t, Ql) : (nS(t), u = kC(a, t, Ql), vm(t, !1)), Cn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Ox(a, t);
          if (s !== null) {
            s.flags &= xv, On = s;
            return;
          }
          if ((t.mode & ze) !== Me) {
            vm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= va, i.subtreeFlags = ke, i.deletions = null;
          else {
            fr = OS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      fr === Nu && (fr = QC);
    }
    function Gs(e, t, a) {
      var i = Aa(), u = Fr.transition;
      try {
        Fr.transition = null, Vn(gr), A_(e, t, a, i);
      } finally {
        Fr.transition = u, Vn(i);
      }
      return null;
    }
    function A_(e, t, a, i) {
      do
        Au();
      while (Bo !== null);
      if (W_(), (gt & (Hr | _i)) !== sr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (gc(s), u === null)
        return gd(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = yt;
      var f = Ze(u.lanes, u.childLanes);
      Dd(e, f), e === Ca && (Ca = null, On = null, cr = V), ((u.subtreeFlags & Ma) !== ke || (u.flags & Ma) !== ke) && (Qs || (Qs = !0, US = a, IS(mi, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (io | Jr | yr | Ma)) !== ke, v = (u.flags & (io | Jr | yr | Ma)) !== ke;
      if (p || v) {
        var y = Fr.transition;
        Fr.transition = null;
        var g = Aa();
        Vn(gr);
        var b = gt;
        gt |= _i, DS.current = null, Ux(e, u), nC(), qx(e, u, s), qR(e.containerInfo), e.current = u, Uv(s), Xx(u, e, s), uo(), kv(), gt = b, Vn(g), Fr.transition = y;
      } else
        e.current = u, nC();
      var x = Qs;
      if (Qs ? (Qs = !1, Bo = e, Fp = s) : (Nf = 0, xm = null), f = e.pendingLanes, f === V && (Mf = null), x || s1(e.current, !1), ji(u.stateNode, i), rr && e.memoizedUpdaters.clear(), h_(), Ya(e, mn()), t !== null)
        for (var M = e.onRecoverableError, z = 0; z < t.length; z++) {
          var H = t[z], fe = H.stack, Oe = H.digest;
          M(H.value, {
            componentStack: fe,
            digest: Oe
          });
        }
      if (Tm) {
        Tm = !1;
        var Te = NS;
        throw NS = null, Te;
      }
      return ra(Fp, Ae) && e.tag !== Mo && Au(), f = e.pendingLanes, ra(f, Ae) ? (Iw(), e === AS ? Hp++ : (Hp = 0, AS = e)) : Hp = 0, No(), gd(), null;
    }
    function Au() {
      if (Bo !== null) {
        var e = Rs(Fp), t = ly(Bi, e), a = Fr.transition, i = Aa();
        try {
          return Fr.transition = null, Vn(t), H_();
        } finally {
          Vn(i), Fr.transition = a;
        }
      }
      return !1;
    }
    function F_(e) {
      zS.push(e), Qs || (Qs = !0, IS(mi, function() {
        return Au(), null;
      }));
    }
    function H_() {
      if (Bo === null)
        return !1;
      var e = US;
      US = null;
      var t = Bo, a = Fp;
      if (Bo = null, Fp = V, (gt & (Hr | _i)) !== sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, wm = !1, Av(a);
      var i = gt;
      gt |= _i, r_(t.current), Jx(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          jx(t, f);
        }
      }
      ds(), s1(t.current, !0), gt = i, No(), wm ? t === xm ? Nf++ : (Nf = 0, xm = t) : Nf = 0, FS = !1, wm = !1, _l(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function l1(e) {
      return Mf !== null && Mf.has(e);
    }
    function j_(e) {
      Mf === null ? Mf = /* @__PURE__ */ new Set([e]) : Mf.add(e);
    }
    function V_(e) {
      Tm || (Tm = !0, NS = e);
    }
    var P_ = V_;
    function u1(e, t, a) {
      var i = $s(a, t), u = aC(e, i, Ae), s = Uo(e, u, Ae), f = Ra();
      s !== null && (mu(s, Ae, f), Ya(s, f));
    }
    function un(e, t, a) {
      if (Mx(a), Bp(!1), e.tag === re) {
        u1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === re) {
          u1(i, e, a);
          return;
        } else if (i.tag === pe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !l1(s)) {
            var f = $s(a, e), p = oS(i, f, Ae), v = Uo(i, p, Ae), y = Ra();
            v !== null && (mu(v, Ae, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function B_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      kd(e, a), K_(e), Ca === e && hu(cr, a) && (fr === Mp || fr === Em && Vc(cr) && mn() - MS < WC ? Ws(e, V) : Rm = Ze(Rm, a)), Ya(e, u);
    }
    function o1(e, t) {
      t === yt && (t = R_(e));
      var a = Ra(), i = Pa(e, t);
      i !== null && (mu(i, t, a), Ya(i, a));
    }
    function $_(e) {
      var t = e.memoizedState, a = yt;
      t !== null && (a = t.retryLane), o1(e, a);
    }
    function Y_(e, t) {
      var a = yt, i;
      switch (e.tag) {
        case _e:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case bt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), o1(e, a);
    }
    function I_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : g_(e / 1960) * 1960;
    }
    function Q_() {
      if (Hp > E_)
        throw Hp = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Nf > C_ && (Nf = 0, xm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function W_() {
      qi.flushLegacyContextWarning(), qi.flushPendingUnsafeLifecycleWarnings();
    }
    function s1(e, t) {
      Ht(e), Om(e, Zr, d_), t && Om(e, iu, p_), Om(e, Zr, c_), t && Om(e, iu, f_), Cn();
    }
    function Om(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Lm = null;
    function c1(e) {
      {
        if ((gt & Hr) !== sr || !(e.mode & ot))
          return;
        var t = e.tag;
        if (t !== rt && t !== re && t !== pe && t !== he && t !== Qe && t !== it && t !== He)
          return;
        var a = Ye(e) || "ReactComponent";
        if (Lm !== null) {
          if (Lm.has(a))
            return;
          Lm.add(a);
        } else
          Lm = /* @__PURE__ */ new Set([a]);
        var i = hn;
        try {
          Ht(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ht(e) : Cn();
        }
      }
    }
    var BS;
    {
      var G_ = null;
      BS = function(e, t, a) {
        var i = g1(G_, t);
        try {
          return TC(e, t, a);
        } catch (s) {
          if (uw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ah(), LE(), DC(e, t), g1(t, i), t.mode & ze && nS(t), au(null, TC, null, e, t, a), Jm()) {
            var u = ud();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var f1 = !1, $S;
    $S = /* @__PURE__ */ new Set();
    function q_(e) {
      if (Wr && !Bw())
        switch (e.tag) {
          case he:
          case Qe:
          case He: {
            var t = On && Ye(On) || "Unknown", a = t;
            if (!$S.has(a)) {
              $S.add(a);
              var i = Ye(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            f1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), f1 = !0);
            break;
          }
        }
    }
    function Pp(e, t) {
      if (rr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Od(e, i, t);
        });
      }
    }
    var YS = {};
    function IS(e, t) {
      {
        var a = rl.current;
        return a !== null ? (a.push(t), YS) : vc(e, t);
      }
    }
    function d1(e) {
      if (e !== YS)
        return bv(e);
    }
    function p1() {
      return rl.current !== null;
    }
    function X_(e) {
      {
        if (e.mode & ot) {
          if (!YC())
            return;
        } else if (!y_() || gt !== sr || e.tag !== he && e.tag !== Qe && e.tag !== He)
          return;
        if (rl.current === null) {
          var t = hn;
          try {
            Ht(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? Ht(e) : Cn();
          }
        }
      }
    }
    function K_(e) {
      e.tag !== Mo && YC() && rl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Bp(e) {
      XC = e;
    }
    var bi = null, zf = null, Z_ = function(e) {
      bi = e;
    };
    function Uf(e) {
      {
        if (bi === null)
          return e;
        var t = bi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return Uf(e);
    }
    function WS(e) {
      {
        if (bi === null)
          return e;
        var t = bi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Uf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ce,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function v1(e, t) {
      {
        if (bi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case he: {
            (typeof i == "function" || s === De) && (u = !0);
            break;
          }
          case Qe: {
            (s === ce || s === De) && (u = !0);
            break;
          }
          case it:
          case He: {
            (s === Xe || s === De) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = bi(a);
          if (f !== void 0 && f === bi(i))
            return !0;
        }
        return !1;
      }
    }
    function h1(e) {
      {
        if (bi === null || typeof WeakSet != "function")
          return;
        zf === null && (zf = /* @__PURE__ */ new WeakSet()), zf.add(e);
      }
    }
    var J_ = function(e, t) {
      {
        if (bi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          GS(e.current, i, a);
        });
      }
    }, eb = function(e, t) {
      {
        if (e.context !== ri)
          return;
        Au(), Uu(function() {
          $p(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case he:
          case He:
          case pe:
            v = p;
            break;
          case Qe:
            v = p.render;
            break;
        }
        if (bi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = bi(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === pe ? g = !0 : y = !0));
        }
        if (zf !== null && (zf.has(e) || i !== null && zf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Pa(e, Ae);
          x !== null && dr(x, e, Ae, Xt);
        }
        u !== null && !g && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var tb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case he:
          case He:
          case pe:
            p = f;
            break;
          case Qe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? nb(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function nb(e, t) {
      {
        var a = rb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case me:
              t.add(i.stateNode.containerInfo);
              return;
            case re:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function rb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var XS;
    {
      XS = !1;
      try {
        var m1 = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function ab(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ai = function(e, t, a, i) {
      return new ab(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ib(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function lb(e) {
      if (typeof e == "function")
        return KS(e) ? pe : he;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ce)
          return Qe;
        if (t === Xe)
          return it;
      }
      return rt;
    }
    function qs(e, t) {
      var a = e.alternate;
      a === null ? (a = ai(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & nr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case rt:
        case he:
        case He:
          a.type = Uf(e.type);
          break;
        case pe:
          a.type = QS(e.type);
          break;
        case Qe:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function ub(e, t) {
      e.flags &= nr | nn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ob(e, t, a) {
      var i;
      return e === kh ? (i = ot, t === !0 && (i |= yn, i |= za)) : i = Me, rr && (i |= ze), ai(re, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = rt, p = e;
      if (typeof e == "function")
        KS(e) ? (f = pe, p = QS(p)) : p = Uf(p);
      else if (typeof e == "string")
        f = ie;
      else {
        e:
          switch (e) {
            case pa:
              return Io(a.children, u, s, t);
            case si:
              f = st, u |= yn, (u & ot) !== Me && (u |= za);
              break;
            case R:
              return sb(a, u, s, t);
            case Ge:
              return cb(a, u, s, t);
            case mt:
              return fb(a, u, s, t);
            case Jt:
              return y1(a, u, s, t);
            case tr:
            case Ln:
            case ci:
            case Vu:
            case Zt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Y:
                    f = at;
                    break e;
                  case ee:
                    f = fn;
                    break e;
                  case ce:
                    f = Qe, p = WS(p);
                    break e;
                  case Xe:
                    f = it;
                    break e;
                  case De:
                    f = tn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ye(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      }
      var g = ai(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function JS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = ai(Ct, e, i, t);
      return u.lanes = a, u;
    }
    function sb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ai(ct, e, i, t | ze);
      return u.elementType = R, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function cb(e, t, a, i) {
      var u = ai(_e, e, i, t);
      return u.elementType = Ge, u.lanes = a, u;
    }
    function fb(e, t, a, i) {
      var u = ai(bt, e, i, t);
      return u.elementType = mt, u.lanes = a, u;
    }
    function y1(e, t, a, i) {
      var u = ai(Ue, e, i, t);
      u.elementType = Jt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function e0(e, t, a) {
      var i = ai(Ve, e, null, t);
      return i.lanes = a, i;
    }
    function db() {
      var e = ai(ie, null, null, Me);
      return e.elementType = "DELETED", e;
    }
    function pb(e) {
      var t = ai(Yt, null, null, Me);
      return t.stateNode = e, t;
    }
    function t0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ai(me, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function g1(e, t) {
      return e === null && (e = ai(rt, null, null, Me)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function vb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = yt, this.eventTimes = Bc(V), this.expirationTimes = Bc(Xt), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = Bc(V), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < an; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case kh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Mo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function S1(e, t, a, i, u, s, f, p, v, y) {
      var g = new vb(e, t, a, p, v), b = ob(t, s);
      g.current = b, b.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = x;
      }
      return sg(b), g;
    }
    var n0 = "18.2.0";
    function hb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return $r(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: _r,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var r0, a0;
    r0 = !1, a0 = {};
    function E1(e) {
      if (!e)
        return ri;
      var t = Da(e), a = ZT(t);
      if (t.tag === pe) {
        var i = t.type;
        if (jl(i))
          return Q0(t, i, a);
      }
      return a;
    }
    function mb(e, t) {
      {
        var a = Da(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Na(a);
        if (u === null)
          return null;
        if (u.mode & yn) {
          var s = Ye(a) || "Component";
          if (!a0[s]) {
            a0[s] = !0;
            var f = hn;
            try {
              Ht(u), a.mode & yn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Ht(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function C1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return S1(e, t, v, y, a, i, u, s, f);
    }
    function R1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = S1(a, i, g, e, u, s, f, p, v);
      b.context = E1(null);
      var x = b.current, M = Ra(), z = $o(x), H = Lu(M, z);
      return H.callback = t ?? null, Uo(x, H, z), T_(b, z, M), b;
    }
    function $p(e, t, a, i) {
      Dv(t, e);
      var u = t.current, s = Ra(), f = $o(u);
      uu(f);
      var p = E1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && hn !== null && !r0 && (r0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(hn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Uo(u, v, f);
      return y !== null && (dr(y, u, f, s), Ph(y, u, f)), f;
    }
    function Mm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function yb(e) {
      switch (e.tag) {
        case re: {
          var t = e.stateNode;
          if (Pn(t)) {
            var a = ny(t);
            b_(t, a);
          }
          break;
        }
        case _e: {
          Uu(function() {
            var u = Pa(e, Ae);
            if (u !== null) {
              var s = Ra();
              dr(u, e, Ae, s);
            }
          });
          var i = Ae;
          i0(e, i);
          break;
        }
      }
    }
    function T1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Pv(a.retryLane, t));
    }
    function i0(e, t) {
      T1(e, t);
      var a = e.alternate;
      a && T1(a, t);
    }
    function gb(e) {
      if (e.tag === _e) {
        var t = so, a = Pa(e, t);
        if (a !== null) {
          var i = Ra();
          dr(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function Sb(e) {
      if (e.tag === _e) {
        var t = $o(e), a = Pa(e, t);
        if (a !== null) {
          var i = Ra();
          dr(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function w1(e) {
      var t = _v(e);
      return t === null ? null : t.stateNode;
    }
    var x1 = function(e) {
      return null;
    };
    function Eb(e) {
      return x1(e);
    }
    var _1 = function(e) {
      return !1;
    };
    function Cb(e) {
      return _1(e);
    }
    var b1 = null, k1 = null, D1 = null, O1 = null, L1 = null, M1 = null, N1 = null, z1 = null, U1 = null;
    {
      var A1 = function(e, t, a) {
        var i = t[a], u = vt(e) ? e.slice() : lt({}, e);
        return a + 1 === t.length ? (vt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = A1(e[i], t, a + 1), u);
      }, F1 = function(e, t) {
        return A1(e, t, 0);
      }, H1 = function(e, t, a, i) {
        var u = t[i], s = vt(e) ? e.slice() : lt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], vt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = H1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, j1 = function(e, t, a) {
        if (t.length !== a.length) {
          nt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              nt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return H1(e, t, a, 0);
      }, V1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = vt(e) ? e.slice() : lt({}, e);
        return s[u] = V1(e[u], t, a + 1, i), s;
      }, P1 = function(e, t, a) {
        return V1(e, t, 0, a);
      }, l0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      b1 = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = P1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = Pa(e, Ae);
          f !== null && dr(f, e, Ae, Xt);
        }
      }, k1 = function(e, t, a) {
        var i = l0(e, t);
        if (i !== null) {
          var u = F1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = lt({}, e.memoizedProps);
          var s = Pa(e, Ae);
          s !== null && dr(s, e, Ae, Xt);
        }
      }, D1 = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = j1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = Pa(e, Ae);
          f !== null && dr(f, e, Ae, Xt);
        }
      }, O1 = function(e, t, a) {
        e.pendingProps = P1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, Ae);
        i !== null && dr(i, e, Ae, Xt);
      }, L1 = function(e, t) {
        e.pendingProps = F1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Pa(e, Ae);
        a !== null && dr(a, e, Ae, Xt);
      }, M1 = function(e, t, a) {
        e.pendingProps = j1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, Ae);
        i !== null && dr(i, e, Ae, Xt);
      }, N1 = function(e) {
        var t = Pa(e, Ae);
        t !== null && dr(t, e, Ae, Xt);
      }, z1 = function(e) {
        x1 = e;
      }, U1 = function(e) {
        _1 = e;
      };
    }
    function Rb(e) {
      var t = Na(e);
      return t === null ? null : t.stateNode;
    }
    function Tb(e) {
      return null;
    }
    function wb() {
      return hn;
    }
    function xb(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return md({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: b1,
        overrideHookStateDeletePath: k1,
        overrideHookStateRenamePath: D1,
        overrideProps: O1,
        overridePropsDeletePath: L1,
        overridePropsRenamePath: M1,
        setErrorHandler: z1,
        setSuspenseHandler: U1,
        scheduleUpdate: N1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Rb,
        findFiberByHostInstance: t || Tb,
        // React Refresh
        findHostInstancesForRefresh: tb,
        scheduleRefresh: J_,
        scheduleRoot: eb,
        setRefreshHandler: Z_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: wb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: n0
      });
    }
    var B1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function u0(e) {
      this._internalRoot = e;
    }
    Nm.prototype.render = u0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : zm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = w1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      $p(e, t, null, null);
    }, Nm.prototype.unmount = u0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        e1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          $p(null, e, null, null);
        }), P0(t);
      }
    };
    function _b(e, t) {
      if (!zm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $1(e);
      var a = !1, i = !1, u = "", s = B1;
      t != null && (t.hydrate ? nt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === oi && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = C1(e, kh, null, a, i, u, s);
      Ch(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return Kd(p), new u0(f);
    }
    function Nm(e) {
      this._internalRoot = e;
    }
    function bb(e) {
      e && qv(e);
    }
    Nm.prototype.unstable_scheduleHydration = bb;
    function kb(e, t, a) {
      if (!zm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = B1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = R1(t, null, e, kh, i, s, f, p, v);
      if (Ch(y.current, e), Kd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Aw(y, b);
        }
      return new Nm(y);
    }
    function zm(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Za || e.nodeType === Zl || !le));
    }
    function Yp(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Za || e.nodeType === Zl || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function $1(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), op(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Db = A.ReactCurrentOwner, Y1;
    Y1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = w1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = o0(e), u = !!(i && Oo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function o0(e) {
      return e ? e.nodeType === Za ? e.documentElement : e.firstChild : null;
    }
    function I1() {
    }
    function Ob(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Mm(f);
            s.call(x);
          };
        }
        var f = R1(
          t,
          i,
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          I1
        );
        e._reactRootContainer = f, Ch(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return Kd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = Mm(g);
            y.call(x);
          };
        }
        var g = C1(
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          I1
        );
        e._reactRootContainer = g, Ch(g.current, e);
        var b = e.nodeType === Mn ? e.parentNode : e;
        return Kd(b), Uu(function() {
          $p(t, g, a, i);
        }), g;
      }
    }
    function Lb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Um(e, t, a, i, u) {
      Y1(a), Lb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ob(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Mm(f);
            p.call(v);
          };
        }
        $p(t, f, e, u);
      }
      return Mm(f);
    }
    function Mb(e) {
      {
        var t = Db.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : mb(e, "findDOMNode");
    }
    function Nb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = op(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Um(null, e, t, !0, a);
    }
    function zb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = op(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Um(null, e, t, !1, a);
    }
    function Ub(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ss(e))
        throw new Error("parentComponent must be a valid React Component");
      return Um(e, t, a, !1, i);
    }
    function Ab(e) {
      if (!Yp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = op(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = o0(e), i = a && !Oo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Um(null, null, e, !1, function() {
            e._reactRootContainer = null, P0(e);
          });
        }), !0;
      } else {
        {
          var u = o0(e), s = !!(u && Oo(u)), f = e.nodeType === qr && Yp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ve(yb), $v(gb), ws(Sb), Nd(Aa), Iv(Cs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Tv(jR), sc(jS, k_, Uu);
    function Fb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zm(t))
        throw new Error("Target container is not a DOM element.");
      return hb(e, t, null, a);
    }
    function Hb(e, t, a, i) {
      return Ub(e, t, a, i);
    }
    var s0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Oo, df, Rh, oc, ls, jS]
    };
    function jb(e, t) {
      return s0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _b(e, t);
    }
    function Vb(e, t, a) {
      return s0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), kb(e, t, a);
    }
    function Pb(e) {
      return e1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Bb = xb({
      findFiberByHostInstance: zs,
      bundleType: 1,
      version: n0,
      rendererPackageName: "react-dom"
    });
    if (!Bb && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Q1 = window.location.protocol;
      /^(https?|file):$/.test(Q1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Q1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s0, Qa.createPortal = Fb, Qa.createRoot = jb, Qa.findDOMNode = Mb, Qa.flushSync = Pb, Qa.hydrate = Nb, Qa.hydrateRoot = Vb, Qa.render = zb, Qa.unmountComponentAtNode = Ab, Qa.unstable_batchedUpdates = jS, Qa.unstable_renderSubtreeIntoContainer = Hb, Qa.version = n0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qa;
}
(function($) {
  function X() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X);
      } catch (A) {
        console.error(A);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (X(), $.exports = tk()) : $.exports = nk();
})(Kb);
var Qp = d0;
if (process.env.NODE_ENV === "production")
  qp.createRoot = Qp.createRoot, qp.hydrateRoot = Qp.hydrateRoot;
else {
  var Am = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  qp.createRoot = function($, X) {
    Am.usingClientEntryPoint = !0;
    try {
      return Qp.createRoot($, X);
    } finally {
      Am.usingClientEntryPoint = !1;
    }
  }, qp.hydrateRoot = function($, X, A) {
    Am.usingClientEntryPoint = !0;
    try {
      return Qp.hydrateRoot($, X, A);
    } finally {
      Am.usingClientEntryPoint = !1;
    }
  };
}
var Hm = {}, rk = {
  get exports() {
    return Hm;
  },
  set exports($) {
    Hm = $;
  }
}, Wp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function ak() {
  if (eR)
    return Wp;
  eR = 1;
  var $ = Hu, X = Symbol.for("react.element"), A = Symbol.for("react.fragment"), Kt = Object.prototype.hasOwnProperty, on = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, nt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S($t, he, pe) {
    var rt, re = {}, me = null, ie = null;
    pe !== void 0 && (me = "" + pe), he.key !== void 0 && (me = "" + he.key), he.ref !== void 0 && (ie = he.ref);
    for (rt in he)
      Kt.call(he, rt) && !nt.hasOwnProperty(rt) && (re[rt] = he[rt]);
    if ($t && $t.defaultProps)
      for (rt in he = $t.defaultProps, he)
        re[rt] === void 0 && (re[rt] = he[rt]);
    return { $$typeof: X, type: $t, key: me, ref: ie, props: re, _owner: on.current };
  }
  return Wp.Fragment = A, Wp.jsx = S, Wp.jsxs = S, Wp;
}
var Gp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function ik() {
  return tR || (tR = 1, process.env.NODE_ENV !== "production" && function() {
    var $ = Hu, X = Symbol.for("react.element"), A = Symbol.for("react.portal"), Kt = Symbol.for("react.fragment"), on = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), $t = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), rt = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), Ve = Symbol.iterator, Ct = "@@iterator";
    function st(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = Ve && R[Ve] || R[Ct];
      return typeof Y == "function" ? Y : null;
    }
    var fn = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function at(R) {
      {
        for (var Y = arguments.length, ee = new Array(Y > 1 ? Y - 1 : 0), ce = 1; ce < Y; ce++)
          ee[ce - 1] = arguments[ce];
        Qe("error", R, ee);
      }
    }
    function Qe(R, Y, ee) {
      {
        var ce = fn.ReactDebugCurrentFrame, Ge = ce.getStackAddendum();
        Ge !== "" && (Y += "%s", ee = ee.concat([Ge]));
        var mt = ee.map(function(Xe) {
          return String(Xe);
        });
        mt.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, mt);
      }
    }
    var ct = !1, _e = !1, it = !1, He = !1, tn = !1, xn;
    xn = Symbol.for("react.module.reference");
    function Yt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Kt || R === nt || tn || R === on || R === pe || R === rt || He || R === ie || ct || _e || it || typeof R == "object" && R !== null && (R.$$typeof === me || R.$$typeof === re || R.$$typeof === S || R.$$typeof === $t || R.$$typeof === he || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === xn || R.getModuleId !== void 0));
    }
    function bt(R, Y, ee) {
      var ce = R.displayName;
      if (ce)
        return ce;
      var Ge = Y.displayName || Y.name || "";
      return Ge !== "" ? ee + "(" + Ge + ")" : ee;
    }
    function En(R) {
      return R.displayName || "Context";
    }
    function Ue(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Kt:
          return "Fragment";
        case A:
          return "Portal";
        case nt:
          return "Profiler";
        case on:
          return "StrictMode";
        case pe:
          return "Suspense";
        case rt:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case $t:
            var Y = R;
            return En(Y) + ".Consumer";
          case S:
            var ee = R;
            return En(ee._context) + ".Provider";
          case he:
            return bt(R, R.render, "ForwardRef");
          case re:
            var ce = R.displayName || null;
            return ce !== null ? ce : Ue(R.type) || "Memo";
          case me: {
            var Ge = R, mt = Ge._payload, Xe = Ge._init;
            try {
              return Ue(Xe(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qe = Object.assign, Nt = 0, Rt, ye, Z, we, T, B, le;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function Fe() {
      {
        if (Nt === 0) {
          Rt = console.log, ye = console.info, Z = console.warn, we = console.error, T = console.group, B = console.groupCollapsed, le = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Nt++;
      }
    }
    function ht() {
      {
        if (Nt--, Nt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: qe({}, R, {
              value: Rt
            }),
            info: qe({}, R, {
              value: ye
            }),
            warn: qe({}, R, {
              value: Z
            }),
            error: qe({}, R, {
              value: we
            }),
            group: qe({}, R, {
              value: T
            }),
            groupCollapsed: qe({}, R, {
              value: B
            }),
            groupEnd: qe({}, R, {
              value: le
            })
          });
        }
        Nt < 0 && at("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = fn.ReactCurrentDispatcher, ft;
    function et(R, Y, ee) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var ce = Ge.stack.trim().match(/\n( *(at )?)/);
            ft = ce && ce[1] || "";
          }
        return `
` + ft + R;
      }
    }
    var zt = !1, Vr;
    {
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      Vr = new pr();
    }
    function Pr(R, Y) {
      if (!R || zt)
        return "";
      {
        var ee = Vr.get(R);
        if (ee !== void 0)
          return ee;
      }
      var ce;
      zt = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = Je.current, Je.current = null, Fe();
      try {
        if (Y) {
          var Xe = function() {
            throw Error();
          };
          if (Object.defineProperty(Xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Xe, []);
            } catch (Tt) {
              ce = Tt;
            }
            Reflect.construct(R, [], Xe);
          } else {
            try {
              Xe.call();
            } catch (Tt) {
              ce = Tt;
            }
            R.call(Xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Tt) {
            ce = Tt;
          }
          R();
        }
      } catch (Tt) {
        if (Tt && ce && typeof Tt.stack == "string") {
          for (var De = Tt.stack.split(`
`), Ln = ce.stack.split(`
`), Zt = De.length - 1, Jt = Ln.length - 1; Zt >= 1 && Jt >= 0 && De[Zt] !== Ln[Jt]; )
            Jt--;
          for (; Zt >= 1 && Jt >= 0; Zt--, Jt--)
            if (De[Zt] !== Ln[Jt]) {
              if (Zt !== 1 || Jt !== 1)
                do
                  if (Zt--, Jt--, Jt < 0 || De[Zt] !== Ln[Jt]) {
                    var tr = `
` + De[Zt].replace(" at new ", " at ");
                    return R.displayName && tr.includes("<anonymous>") && (tr = tr.replace("<anonymous>", R.displayName)), typeof R == "function" && Vr.set(R, tr), tr;
                  }
                while (Zt >= 1 && Jt >= 0);
              break;
            }
        }
      } finally {
        zt = !1, Je.current = mt, ht(), Error.prepareStackTrace = Ge;
      }
      var ci = R ? R.displayName || R.name : "", Vu = ci ? et(ci) : "";
      return typeof R == "function" && Vr.set(R, Vu), Vu;
    }
    function dn(R, Y, ee) {
      return Pr(R, !1);
    }
    function Yn(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function An(R, Y, ee) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Pr(R, Yn(R));
      if (typeof R == "string")
        return et(R);
      switch (R) {
        case pe:
          return et("Suspense");
        case rt:
          return et("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case he:
            return dn(R.render);
          case re:
            return An(R.type, Y, ee);
          case me: {
            var ce = R, Ge = ce._payload, mt = ce._init;
            try {
              return An(mt(Ge), Y, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Fn = Object.prototype.hasOwnProperty, _n = {}, Br = fn.ReactDebugCurrentFrame;
    function $r(R) {
      if (R) {
        var Y = R._owner, ee = An(R.type, R._source, Y ? Y.type : null);
        Br.setExtraStackFrame(ee);
      } else
        Br.setExtraStackFrame(null);
    }
    function In(R, Y, ee, ce, Ge) {
      {
        var mt = Function.call.bind(Fn);
        for (var Xe in R)
          if (mt(R, Xe)) {
            var De = void 0;
            try {
              if (typeof R[Xe] != "function") {
                var Ln = Error((ce || "React class") + ": " + ee + " type `" + Xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              De = R[Xe](Y, Xe, ce, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Zt) {
              De = Zt;
            }
            De && !(De instanceof Error) && ($r(Ge), at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", ee, Xe, typeof De), $r(null)), De instanceof Error && !(De.message in _n) && (_n[De.message] = !0, $r(Ge), at("Failed %s type: %s", ee, De.message), $r(null));
          }
      }
    }
    var vr = Array.isArray;
    function Yr(R) {
      return vr(R);
    }
    function hr(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ee = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ee;
      }
    }
    function sa(R) {
      try {
        return er(R), !1;
      } catch {
        return !0;
      }
    }
    function er(R) {
      return "" + R;
    }
    function Ir(R) {
      if (sa(R))
        return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(R)), er(R);
    }
    var pn = fn.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, li, ca, J;
    J = {};
    function xe(R) {
      if (Fn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function tt(R) {
      if (Fn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Lt(R, Y) {
      if (typeof R.ref == "string" && pn.current && Y && pn.current.stateNode !== Y) {
        var ee = Ue(pn.current.type);
        J[ee] || (at('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ue(pn.current.type), R.ref), J[ee] = !0);
      }
    }
    function Ut(R, Y) {
      {
        var ee = function() {
          li || (li = !0, at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ee.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function bn(R, Y) {
      {
        var ee = function() {
          ca || (ca = !0, at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ee.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var vn = function(R, Y, ee, ce, Ge, mt, Xe) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: X,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: ee,
        props: Xe,
        // Record the component responsible for creating this element.
        _owner: mt
      };
      return De._store = {}, Object.defineProperty(De._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(De, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function mr(R, Y, ee, ce, Ge) {
      {
        var mt, Xe = {}, De = null, Ln = null;
        ee !== void 0 && (Ir(ee), De = "" + ee), tt(Y) && (Ir(Y.key), De = "" + Y.key), xe(Y) && (Ln = Y.ref, Lt(Y, Ge));
        for (mt in Y)
          Fn.call(Y, mt) && !wr.hasOwnProperty(mt) && (Xe[mt] = Y[mt]);
        if (R && R.defaultProps) {
          var Zt = R.defaultProps;
          for (mt in Zt)
            Xe[mt] === void 0 && (Xe[mt] = Zt[mt]);
        }
        if (De || Ln) {
          var Jt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          De && Ut(Xe, Jt), Ln && bn(Xe, Jt);
        }
        return vn(R, De, Ln, Ge, ce, pn.current, Xe);
      }
    }
    var Pt = fn.ReactCurrentOwner, xr = fn.ReactDebugCurrentFrame;
    function At(R) {
      if (R) {
        var Y = R._owner, ee = An(R.type, R._source, Y ? Y.type : null);
        xr.setExtraStackFrame(ee);
      } else
        xr.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function Wa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === X;
    }
    function xa() {
      {
        if (Pt.current) {
          var R = Ue(Pt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function al(R) {
      {
        if (R !== void 0) {
          var Y = R.fileName.replace(/^.*[\\\/]/, ""), ee = R.lineNumber;
          return `

Check your code at ` + Y + ":" + ee + ".";
        }
        return "";
      }
    }
    var Gl = {};
    function ju(R) {
      {
        var Y = xa();
        if (!Y) {
          var ee = typeof R == "string" ? R : R.displayName || R.name;
          ee && (Y = `

Check the top-level render call using <` + ee + ">.");
        }
        return Y;
      }
    }
    function ki(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ee = ju(Y);
        if (Gl[ee])
          return;
        Gl[ee] = !0;
        var ce = "";
        R && R._owner && R._owner !== Pt.current && (ce = " It was passed a child from " + Ue(R._owner.type) + "."), At(R), at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, ce), At(null);
      }
    }
    function il(R, Y) {
      {
        if (typeof R != "object")
          return;
        if (Yr(R))
          for (var ee = 0; ee < R.length; ee++) {
            var ce = R[ee];
            Wa(ce) && ki(ce, Y);
          }
        else if (Wa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ge = st(R);
          if (typeof Ge == "function" && Ge !== R.entries)
            for (var mt = Ge.call(R), Xe; !(Xe = mt.next()).done; )
              Wa(Xe.value) && ki(Xe.value, Y);
        }
      }
    }
    function fa(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var ee;
        if (typeof Y == "function")
          ee = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === he || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === re))
          ee = Y.propTypes;
        else
          return;
        if (ee) {
          var ce = Ue(Y);
          In(ee, R.props, "prop", ce, R);
        } else if (Y.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var Ge = Ue(Y);
          at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ui(R) {
      {
        for (var Y = Object.keys(R.props), ee = 0; ee < Y.length; ee++) {
          var ce = Y[ee];
          if (ce !== "children" && ce !== "key") {
            At(R), at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), At(null);
            break;
          }
        }
        R.ref !== null && (At(R), at("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    function da(R, Y, ee, ce, Ge, mt) {
      {
        var Xe = Yt(R);
        if (!Xe) {
          var De = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = al(Ge);
          Ln ? De += Ln : De += xa();
          var Zt;
          R === null ? Zt = "null" : Yr(R) ? Zt = "array" : R !== void 0 && R.$$typeof === X ? (Zt = "<" + (Ue(R.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : Zt = typeof R, at("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Zt, De);
        }
        var Jt = mr(R, Y, ee, Ge, mt);
        if (Jt == null)
          return Jt;
        if (Xe) {
          var tr = Y.children;
          if (tr !== void 0)
            if (ce)
              if (Yr(tr)) {
                for (var ci = 0; ci < tr.length; ci++)
                  il(tr[ci], R);
                Object.freeze && Object.freeze(tr);
              } else
                at("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              il(tr, R);
        }
        return R === Kt ? ui(Jt) : fa(Jt), Jt;
      }
    }
    function oi(R, Y, ee) {
      return da(R, Y, ee, !0);
    }
    function _r(R, Y, ee) {
      return da(R, Y, ee, !1);
    }
    var pa = _r, si = oi;
    Gp.Fragment = Kt, Gp.jsx = pa, Gp.jsxs = si;
  }()), Gp;
}
(function($) {
  process.env.NODE_ENV === "production" ? $.exports = ak() : $.exports = ik();
})(rk);
const rR = Hm.jsx, aR = Hm.jsxs;
function lk($) {
  console.log($);
  const [X, A] = Hu.useState(!1);
  return X ? "You liked this." : /* @__PURE__ */ aR("div", { children: [
    "阿搜了；就跑到家",
    /* @__PURE__ */ rR("button", { onClick: () => A(!0), children: "Ll;k;laskdl;ike" })
  ] });
}
function uk($) {
  console.log($);
  const [X, A] = Hu.useState(!1);
  return X ? "You liked this." : /* @__PURE__ */ aR("div", { children: [
    "；阿双方均拉是肯德基",
    /* @__PURE__ */ rR("button", { onClick: () => A(!0), children: "Ll;k;laskdl;ike" })
  ] });
}
const ok = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CP: lk,
  LikeButton: uk
}, Symbol.toStringTag, { value: "Module" }));
window.React = Xb;
window.ReactDOMClient = qp;
window.C = ok;
