function sv(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
            i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Er(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Rf = {
    exports: {}
}
    , as = {}
    , Mf = {
        exports: {}
    }
    , F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo = Symbol.for("react.element")
    , av = Symbol.for("react.portal")
    , lv = Symbol.for("react.fragment")
    , uv = Symbol.for("react.strict_mode")
    , cv = Symbol.for("react.profiler")
    , dv = Symbol.for("react.provider")
    , fv = Symbol.for("react.context")
    , pv = Symbol.for("react.forward_ref")
    , hv = Symbol.for("react.suspense")
    , mv = Symbol.for("react.memo")
    , gv = Symbol.for("react.lazy")
    , nc = Symbol.iterator;
function vv(e) {
    return e === null || typeof e != "object" ? null : (e = nc && e[nc] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var Lf = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
}
    , bf = Object.assign
    , Of = {};
function Pr(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = Of,
        this.updater = n || Lf
}
Pr.prototype.isReactComponent = {};
Pr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
    ;
Pr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
    ;
function Df() { }
Df.prototype = Pr.prototype;
function _l(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = Of,
        this.updater = n || Lf
}
var Vl = _l.prototype = new Df;
Vl.constructor = _l;
bf(Vl, Pr.prototype);
Vl.isPureReactComponent = !0;
var rc = Array.isArray
    , _f = Object.prototype.hasOwnProperty
    , Il = {
        current: null
    }
    , Vf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function If(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
            t.key !== void 0 && (i = "" + t.key),
            t)
            _f.call(t, r) && !Vf.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
            a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: jo,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Il.current
    }
}
function yv(e, t) {
    return {
        $$typeof: jo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Fl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === jo
}
function xv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var oc = /\/+/g;
function bs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? xv("" + e.key) : t.toString(36)
}
function di(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case jo:
                    case av:
                        s = !0
                }
        }
    if (s)
        return s = e,
            o = o(s),
            e = r === "" ? "." + bs(s, 0) : r,
            rc(o) ? (n = "",
                e != null && (n = e.replace(oc, "$&/") + "/"),
                di(o, t, n, "", function (u) {
                    return u
                })) : o != null && (Fl(o) && (o = yv(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(oc, "$&/") + "/") + e)),
                    t.push(o)),
            1;
    if (s = 0,
        r = r === "" ? "." : r + ":",
        rc(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + bs(i, a);
            s += di(i, t, n, l, o)
        }
    else if (l = vv(e),
        typeof l == "function")
        for (e = l.call(e),
            a = 0; !(i = e.next()).done;)
            i = i.value,
                l = r + bs(i, a++),
                s += di(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function zo(e, t, n) {
    if (e == null)
        return e;
    var r = []
        , o = 0;
    return di(e, r, "", "", function (i) {
        return t.call(n, i, o++)
    }),
        r
}
function wv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
            t.then(function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = n)
            }, function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = n)
            }),
            e._status === -1 && (e._status = 0,
                e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Me = {
    current: null
}
    , fi = {
        transition: null
    }
    , Sv = {
        ReactCurrentDispatcher: Me,
        ReactCurrentBatchConfig: fi,
        ReactCurrentOwner: Il
    };
function Ff() {
    throw Error("act(...) is not supported in production builds of React.")
}
F.Children = {
    map: zo,
    forEach: function (e, t, n) {
        zo(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return zo(e, function () {
            t++
        }),
            t
    },
    toArray: function (e) {
        return zo(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!Fl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = Pr;
F.Fragment = lv;
F.Profiler = cv;
F.PureComponent = _l;
F.StrictMode = uv;
F.Suspense = hv;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sv;
F.act = Ff;
F.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = bf({}, e.props)
        , o = e.key
        , i = e.ref
        , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
            s = Il.current),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            _f.call(t, l) && !Vf.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: jo,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
    ;
F.createContext = function (e) {
    return e = {
        $$typeof: fv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        e.Provider = {
            $$typeof: dv,
            _context: e
        },
        e.Consumer = e
}
    ;
F.createElement = If;
F.createFactory = function (e) {
    var t = If.bind(null, e);
    return t.type = e,
        t
}
    ;
F.createRef = function () {
    return {
        current: null
    }
}
    ;
F.forwardRef = function (e) {
    return {
        $$typeof: pv,
        render: e
    }
}
    ;
F.isValidElement = Fl;
F.lazy = function (e) {
    return {
        $$typeof: gv,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: wv
    }
}
    ;
F.memo = function (e, t) {
    return {
        $$typeof: mv,
        type: e,
        compare: t === void 0 ? null : t
    }
}
    ;
F.startTransition = function (e) {
    var t = fi.transition;
    fi.transition = {};
    try {
        e()
    } finally {
        fi.transition = t
    }
}
    ;
F.unstable_act = Ff;
F.useCallback = function (e, t) {
    return Me.current.useCallback(e, t)
}
    ;
F.useContext = function (e) {
    return Me.current.useContext(e)
}
    ;
F.useDebugValue = function () { }
    ;
F.useDeferredValue = function (e) {
    return Me.current.useDeferredValue(e)
}
    ;
F.useEffect = function (e, t) {
    return Me.current.useEffect(e, t)
}
    ;
F.useId = function () {
    return Me.current.useId()
}
    ;
F.useImperativeHandle = function (e, t, n) {
    return Me.current.useImperativeHandle(e, t, n)
}
    ;
F.useInsertionEffect = function (e, t) {
    return Me.current.useInsertionEffect(e, t)
}
    ;
F.useLayoutEffect = function (e, t) {
    return Me.current.useLayoutEffect(e, t)
}
    ;
F.useMemo = function (e, t) {
    return Me.current.useMemo(e, t)
}
    ;
F.useReducer = function (e, t, n) {
    return Me.current.useReducer(e, t, n)
}
    ;
F.useRef = function (e) {
    return Me.current.useRef(e)
}
    ;
F.useState = function (e) {
    return Me.current.useState(e)
}
    ;
F.useSyncExternalStore = function (e, t, n) {
    return Me.current.useSyncExternalStore(e, t, n)
}
    ;
F.useTransition = function () {
    return Me.current.useTransition()
}
    ;
F.version = "18.3.1";
Mf.exports = F;
var T = Mf.exports;
const oe = Er(T)
    , Tv = sv({
        __proto__: null,
        default: oe
    }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cv = T
    , Ev = Symbol.for("react.element")
    , Pv = Symbol.for("react.fragment")
    , kv = Object.prototype.hasOwnProperty
    , Av = Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , Nv = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function zf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t)
        kv.call(t, r) && !Nv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
            t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Ev,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Av.current
    }
}
as.Fragment = Pv;
as.jsx = zf;
as.jsxs = zf;
Rf.exports = as;
var g = Rf.exports
    , wa = {}
    , Bf = {
        exports: {}
    }
    , Ye = {}
    , Uf = {
        exports: {}
    }
    , $f = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(N, M) {
        var V = N.length;
        N.push(M);
        e: for (; 0 < V;) {
            var O = V - 1 >>> 1
                , U = N[O];
            if (0 < o(U, M))
                N[O] = M,
                    N[V] = U,
                    V = O;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var M = N[0]
            , V = N.pop();
        if (V !== M) {
            N[0] = V;
            e: for (var O = 0, U = N.length, G = U >>> 1; O < G;) {
                var ze = 2 * (O + 1) - 1
                    , Un = N[ze]
                    , Be = ze + 1
                    , hn = N[Be];
                if (0 > o(Un, V))
                    Be < U && 0 > o(hn, Un) ? (N[O] = hn,
                        N[Be] = V,
                        O = Be) : (N[O] = Un,
                            N[ze] = V,
                            O = ze);
                else if (Be < U && 0 > o(hn, V))
                    N[O] = hn,
                        N[Be] = V,
                        O = Be;
                else
                    break e
            }
        }
        return M
    }
    function o(N, M) {
        var V = N.sortIndex - M.sortIndex;
        return V !== 0 ? V : N.id - M.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now()
        }
    } else {
        var s = Date
            , a = s.now();
        e.unstable_now = function () {
            return s.now() - a
        }
    }
    var l = []
        , u = []
        , c = 1
        , d = null
        , f = 3
        , h = !1
        , x = !1
        , y = !1
        , S = typeof setTimeout == "function" ? setTimeout : null
        , v = typeof clearTimeout == "function" ? clearTimeout : null
        , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(N) {
        for (var M = n(u); M !== null;) {
            if (M.callback === null)
                r(u);
            else if (M.startTime <= N)
                r(u),
                    M.sortIndex = M.expirationTime,
                    t(l, M);
            else
                break;
            M = n(u)
        }
    }
    function w(N) {
        if (y = !1,
            m(N),
            !x)
            if (n(l) !== null)
                x = !0,
                    B(C);
            else {
                var M = n(u);
                M !== null && ce(w, M.startTime - N)
            }
    }
    function C(N, M) {
        x = !1,
            y && (y = !1,
                v(k),
                k = -1),
            h = !0;
        var V = f;
        try {
            for (m(M),
                d = n(l); d !== null && (!(d.expirationTime > M) || N && !W());) {
                var O = d.callback;
                if (typeof O == "function") {
                    d.callback = null,
                        f = d.priorityLevel;
                    var U = O(d.expirationTime <= M);
                    M = e.unstable_now(),
                        typeof U == "function" ? d.callback = U : d === n(l) && r(l),
                        m(M)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var G = !0;
            else {
                var ze = n(u);
                ze !== null && ce(w, ze.startTime - M),
                    G = !1
            }
            return G
        } finally {
            d = null,
                f = V,
                h = !1
        }
    }
    var P = !1
        , E = null
        , k = -1
        , L = 5
        , b = -1;
    function W() {
        return !(e.unstable_now() - b < L)
    }
    function D() {
        if (E !== null) {
            var N = e.unstable_now();
            b = N;
            var M = !0;
            try {
                M = E(!0, N)
            } finally {
                M ? ne() : (P = !1,
                    E = null)
            }
        } else
            P = !1
    }
    var ne;
    if (typeof p == "function")
        ne = function () {
            p(D)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var R = new MessageChannel
            , Z = R.port2;
        R.port1.onmessage = D,
            ne = function () {
                Z.postMessage(null)
            }
    } else
        ne = function () {
            S(D, 0)
        }
            ;
    function B(N) {
        E = N,
            P || (P = !0,
                ne())
    }
    function ce(N, M) {
        k = S(function () {
            N(e.unstable_now())
        }, M)
    }
    e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function (N) {
            N.callback = null
        }
        ,
        e.unstable_continueExecution = function () {
            x || h || (x = !0,
                B(C))
        }
        ,
        e.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < N ? Math.floor(1e3 / N) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function () {
            return f
        }
        ,
        e.unstable_getFirstCallbackNode = function () {
            return n(l)
        }
        ,
        e.unstable_next = function (N) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var M = 3;
                    break;
                default:
                    M = f
            }
            var V = f;
            f = M;
            try {
                return N()
            } finally {
                f = V
            }
        }
        ,
        e.unstable_pauseExecution = function () { }
        ,
        e.unstable_requestPaint = function () { }
        ,
        e.unstable_runWithPriority = function (N, M) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    N = 3
            }
            var V = f;
            f = N;
            try {
                return M()
            } finally {
                f = V
            }
        }
        ,
        e.unstable_scheduleCallback = function (N, M, V) {
            var O = e.unstable_now();
            switch (typeof V == "object" && V !== null ? (V = V.delay,
                V = typeof V == "number" && 0 < V ? O + V : O) : V = O,
            N) {
                case 1:
                    var U = -1;
                    break;
                case 2:
                    U = 250;
                    break;
                case 5:
                    U = 1073741823;
                    break;
                case 4:
                    U = 1e4;
                    break;
                default:
                    U = 5e3
            }
            return U = V + U,
                N = {
                    id: c++,
                    callback: M,
                    priorityLevel: N,
                    startTime: V,
                    expirationTime: U,
                    sortIndex: -1
                },
                V > O ? (N.sortIndex = V,
                    t(u, N),
                    n(l) === null && N === n(u) && (y ? (v(k),
                        k = -1) : y = !0,
                        ce(w, V - O))) : (N.sortIndex = U,
                            t(l, N),
                            x || h || (x = !0,
                                B(C))),
                N
        }
        ,
        e.unstable_shouldYield = W,
        e.unstable_wrapCallback = function (N) {
            var M = f;
            return function () {
                var V = f;
                f = M;
                try {
                    return N.apply(this, arguments)
                } finally {
                    f = V
                }
            }
        }
}
)($f);
Uf.exports = $f;
var jv = Uf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rv = T
    , Ge = jv;
function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Wf = new Set
    , so = {};
function _n(e, t) {
    mr(e, t),
        mr(e + "Capture", t)
}
function mr(e, t) {
    for (so[e] = t,
        e = 0; e < t.length; e++)
        Wf.add(t[e])
}
var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , Sa = Object.prototype.hasOwnProperty
    , Mv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , ic = {}
    , sc = {};
function Lv(e) {
    return Sa.call(sc, e) ? !0 : Sa.call(ic, e) ? !1 : Mv.test(e) ? sc[e] = !0 : (ic[e] = !0,
        !1)
}
function bv(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}
function Ov(e, t, n, r) {
    if (t === null || typeof t > "u" || bv(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function Le(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = o,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = i,
        this.removeEmptyString = s
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    Se[e] = new Le(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    Se[t] = new Le(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Se[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Se[e] = new Le(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    Se[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Se[e] = new Le(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    Se[e] = new Le(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Se[e] = new Le(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    Se[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var zl = /[\-:]([a-z])/g;
function Bl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(zl, Bl);
    Se[t] = new Le(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(zl, Bl);
    Se[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(zl, Bl);
    Se[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Se[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Se.xlinkHref = new Le("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Se[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function Ul(e, t, n, r) {
    var o = Se.hasOwnProperty(t) ? Se[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ov(t, n, o, r) && (n = null),
        r || o === null ? Lv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
            r = o.attributeNamespace,
            n === null ? e.removeAttribute(t) : (o = o.type,
                n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var _t = Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , Bo = Symbol.for("react.element")
    , Gn = Symbol.for("react.portal")
    , Kn = Symbol.for("react.fragment")
    , $l = Symbol.for("react.strict_mode")
    , Ta = Symbol.for("react.profiler")
    , Hf = Symbol.for("react.provider")
    , Gf = Symbol.for("react.context")
    , Wl = Symbol.for("react.forward_ref")
    , Ca = Symbol.for("react.suspense")
    , Ea = Symbol.for("react.suspense_list")
    , Hl = Symbol.for("react.memo")
    , zt = Symbol.for("react.lazy")
    , Kf = Symbol.for("react.offscreen")
    , ac = Symbol.iterator;
function Nr(e) {
    return e === null || typeof e != "object" ? null : (e = ac && e[ac] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var ae = Object.assign, Os;
function Ur(e) {
    if (Os === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Os = t && t[1] || ""
        }
    return `
` + Os + e
}
var Ds = !1;
function _s(e, t) {
    if (!e || Ds)
        return "";
    Ds = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];)
                a--;
            for (; 1 <= s && 0 <= a; s--,
                a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                                a--,
                                0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                    l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Ds = !1,
            Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ur(e) : ""
}
function Dv(e) {
    switch (e.tag) {
        case 5:
            return Ur(e.type);
        case 16:
            return Ur("Lazy");
        case 13:
            return Ur("Suspense");
        case 19:
            return Ur("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = _s(e.type, !1),
                e;
        case 11:
            return e = _s(e.type.render, !1),
                e;
        case 1:
            return e = _s(e.type, !0),
                e;
        default:
            return ""
    }
}
function Pa(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
        case Kn:
            return "Fragment";
        case Gn:
            return "Portal";
        case Ta:
            return "Profiler";
        case $l:
            return "StrictMode";
        case Ca:
            return "Suspense";
        case Ea:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Gf:
                return (e.displayName || "Context") + ".Consumer";
            case Hf:
                return (e._context.displayName || "Context") + ".Provider";
            case Wl:
                var t = e.render;
                return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                        e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
            case Hl:
                return t = e.displayName || null,
                    t !== null ? t : Pa(e.type) || "Memo";
            case zt:
                t = e._payload,
                    e = e._init;
                try {
                    return Pa(e(t))
                } catch { }
        }
    return null
}
function _v(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
                e = e.displayName || e.name || "",
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Pa(t);
        case 8:
            return t === $l ? "StrictMode" : "Mode";
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
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
    }
    return null
}
function on(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}
function Yf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Vv(e) {
    var t = Yf(e) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
            , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return o.call(this)
            },
            set: function (s) {
                r = "" + s,
                    i.call(this, s)
            }
        }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
        {
            getValue: function () {
                return r
            },
            setValue: function (s) {
                r = "" + s
            },
            stopTracking: function () {
                e._valueTracker = null,
                    delete e[t]
            }
        }
    }
}
function Uo(e) {
    e._valueTracker || (e._valueTracker = Vv(e))
}
function Qf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
        , r = "";
    return e && (r = Yf(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
            !0) : !1
}
function ki(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ka(e, t) {
    var n = t.checked;
    return ae({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function lc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
        , r = t.checked != null ? t.checked : t.defaultChecked;
    n = on(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
}
function Xf(e, t) {
    t = t.checked,
        t != null && Ul(e, "checked", t, !1)
}
function Aa(e, t) {
    Xf(e, t);
    var n = on(t.value)
        , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Na(e, t.type, n) : t.hasOwnProperty("defaultValue") && Na(e, t.type, on(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function uc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
    }
    n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
}
function Na(e, t, n) {
    (t !== "number" || ki(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var $r = Array.isArray;
function lr(e, t, n, r) {
    if (e = e.options,
        t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + on(n),
            t = null,
            o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                    r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function ja(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(A(91));
    return ae({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function cc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
            t = t.defaultValue,
            n != null) {
            if (t != null)
                throw Error(A(92));
            if ($r(n)) {
                if (1 < n.length)
                    throw Error(A(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
            n = t
    }
    e._wrapperState = {
        initialValue: on(n)
    }
}
function qf(e, t) {
    var n = on(t.value)
        , r = on(t.defaultValue);
    n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function dc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Zf(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function Ra(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Zf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var $o, Jf = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
        })
    }
        : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for ($o = $o || document.createElement("div"),
            $o.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = $o.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; t.firstChild;)
            e.appendChild(t.firstChild)
    }
});
function ao(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Kr = {
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
}
    , Iv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kr).forEach(function (e) {
    Iv.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Kr[t] = Kr[e]
    })
});
function ep(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kr.hasOwnProperty(e) && Kr[e] ? ("" + t).trim() : t + "px"
}
function tp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , o = ep(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, o) : e[n] = o
        }
}
var Fv = ae({
    menuitem: !0
}, {
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
});
function Ma(e, t) {
    if (t) {
        if (Fv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(A(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(A(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(A(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(A(62))
    }
}
function La(e, t) {
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
            return !0
    }
}
var ba = null;
function Gl(e) {
    return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
}
var Oa = null
    , ur = null
    , cr = null;
function fc(e) {
    if (e = Lo(e)) {
        if (typeof Oa != "function")
            throw Error(A(280));
        var t = e.stateNode;
        t && (t = fs(t),
            Oa(e.stateNode, e.type, t))
    }
}
function np(e) {
    ur ? cr ? cr.push(e) : cr = [e] : ur = e
}
function rp() {
    if (ur) {
        var e = ur
            , t = cr;
        if (cr = ur = null,
            fc(e),
            t)
            for (e = 0; e < t.length; e++)
                fc(t[e])
    }
}
function op(e, t) {
    return e(t)
}
function ip() { }
var Vs = !1;
function sp(e, t, n) {
    if (Vs)
        return e(t, n);
    Vs = !0;
    try {
        return op(e, t, n)
    } finally {
        Vs = !1,
            (ur !== null || cr !== null) && (ip(),
                rp())
    }
}
function lo(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = fs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) || (e = e.type,
                r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !r;
            break e;
        default:
            e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(A(231, t, typeof n));
    return n
}
var Da = !1;
if (Mt)
    try {
        var jr = {};
        Object.defineProperty(jr, "passive", {
            get: function () {
                Da = !0
            }
        }),
            window.addEventListener("test", jr, jr),
            window.removeEventListener("test", jr, jr)
    } catch {
        Da = !1
    }
function zv(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Yr = !1
    , Ai = null
    , Ni = !1
    , _a = null
    , Bv = {
        onError: function (e) {
            Yr = !0,
                Ai = e
        }
    };
function Uv(e, t, n, r, o, i, s, a, l) {
    Yr = !1,
        Ai = null,
        zv.apply(Bv, arguments)
}
function $v(e, t, n, r, o, i, s, a, l) {
    if (Uv.apply(this, arguments),
        Yr) {
        if (Yr) {
            var u = Ai;
            Yr = !1,
                Ai = null
        } else
            throw Error(A(198));
        Ni || (Ni = !0,
            _a = u)
    }
}
function Vn(e) {
    var t = e
        , n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ap(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
            return t.dehydrated
    }
    return null
}
function pc(e) {
    if (Vn(e) !== e)
        throw Error(A(188))
}
function Wv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Vn(e),
            t === null)
            throw Error(A(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n)
                    return pc(o),
                        e;
                if (i === r)
                    return pc(o),
                        t;
                i = i.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== r.return)
            n = o,
                r = i;
        else {
            for (var s = !1, a = o.child; a;) {
                if (a === n) {
                    s = !0,
                        n = o,
                        r = i;
                    break
                }
                if (a === r) {
                    s = !0,
                        r = o,
                        n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a;) {
                    if (a === n) {
                        s = !0,
                            n = i,
                            r = o;
                        break
                    }
                    if (a === r) {
                        s = !0,
                            r = i,
                            n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(A(189))
            }
        }
        if (n.alternate !== r)
            throw Error(A(190))
    }
    if (n.tag !== 3)
        throw Error(A(188));
    return n.stateNode.current === n ? e : t
}
function lp(e) {
    return e = Wv(e),
        e !== null ? up(e) : null
}
function up(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = up(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var cp = Ge.unstable_scheduleCallback
    , hc = Ge.unstable_cancelCallback
    , Hv = Ge.unstable_shouldYield
    , Gv = Ge.unstable_requestPaint
    , de = Ge.unstable_now
    , Kv = Ge.unstable_getCurrentPriorityLevel
    , Kl = Ge.unstable_ImmediatePriority
    , dp = Ge.unstable_UserBlockingPriority
    , ji = Ge.unstable_NormalPriority
    , Yv = Ge.unstable_LowPriority
    , fp = Ge.unstable_IdlePriority
    , ls = null
    , vt = null;
function Qv(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
        try {
            vt.onCommitFiberRoot(ls, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
}
var ct = Math.clz32 ? Math.clz32 : Zv
    , Xv = Math.log
    , qv = Math.LN2;
function Zv(e) {
    return e >>>= 0,
        e === 0 ? 32 : 31 - (Xv(e) / qv | 0) | 0
}
var Wo = 64
    , Ho = 4194304;
function Wr(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}
function Ri(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , o = e.suspendedLanes
        , i = e.pingedLanes
        , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = Wr(a) : (i &= s,
            i !== 0 && (r = Wr(i)))
    } else
        s = n & ~o,
            s !== 0 ? r = Wr(s) : i !== 0 && (r = Wr(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
        i = t & -t,
        o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
        for (e = e.entanglements,
            t &= r; 0 < t;)
            n = 31 - ct(t),
                o = 1 << n,
                r |= e[n],
                t &= ~o;
    return r
}
function Jv(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
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
            return t + 5e3;
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
            return -1
    }
}
function ey(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - ct(i)
            , a = 1 << s
            , l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Jv(a, t)) : l <= t && (e.expiredLanes |= a),
            i &= ~a
    }
}
function Va(e) {
    return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function pp() {
    var e = Wo;
    return Wo <<= 1,
        !(Wo & 4194240) && (Wo = 64),
        e
}
function Is(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ro(e, t, n) {
    e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
            e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - ct(t),
        e[t] = n
}
function ty(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - ct(n)
            , i = 1 << o;
        t[o] = 0,
            r[o] = -1,
            e[o] = -1,
            n &= ~i
    }
}
function Yl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - ct(n)
            , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
            n &= ~o
    }
}
var H = 0;
function hp(e) {
    return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var mp, Ql, gp, vp, yp, Ia = !1, Go = [], Yt = null, Qt = null, Xt = null, uo = new Map, co = new Map, $t = [], ny = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function mc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Yt = null;
            break;
        case "dragenter":
        case "dragleave":
            Qt = null;
            break;
        case "mouseover":
        case "mouseout":
            Xt = null;
            break;
        case "pointerover":
        case "pointerout":
            uo.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            co.delete(t.pointerId)
    }
}
function Rr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
        t !== null && (t = Lo(t),
            t !== null && Ql(t)),
        e) : (e.eventSystemFlags |= r,
            t = e.targetContainers,
            o !== null && t.indexOf(o) === -1 && t.push(o),
            e)
}
function ry(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Yt = Rr(Yt, e, t, n, r, o),
                !0;
        case "dragenter":
            return Qt = Rr(Qt, e, t, n, r, o),
                !0;
        case "mouseover":
            return Xt = Rr(Xt, e, t, n, r, o),
                !0;
        case "pointerover":
            var i = o.pointerId;
            return uo.set(i, Rr(uo.get(i) || null, e, t, n, r, o)),
                !0;
        case "gotpointercapture":
            return i = o.pointerId,
                co.set(i, Rr(co.get(i) || null, e, t, n, r, o)),
                !0
    }
    return !1
}
function xp(e) {
    var t = Sn(e.target);
    if (t !== null) {
        var n = Vn(t);
        if (n !== null) {
            if (t = n.tag,
                t === 13) {
                if (t = ap(n),
                    t !== null) {
                    e.blockedOn = t,
                        yp(e.priority, function () {
                            gp(n)
                        });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function pi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ba = r,
                n.target.dispatchEvent(r),
                ba = null
        } else
            return t = Lo(n),
                t !== null && Ql(t),
                e.blockedOn = n,
                !1;
        t.shift()
    }
    return !0
}
function gc(e, t, n) {
    pi(e) && n.delete(t)
}
function oy() {
    Ia = !1,
        Yt !== null && pi(Yt) && (Yt = null),
        Qt !== null && pi(Qt) && (Qt = null),
        Xt !== null && pi(Xt) && (Xt = null),
        uo.forEach(gc),
        co.forEach(gc)
}
function Mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
        Ia || (Ia = !0,
            Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, oy)))
}
function fo(e) {
    function t(o) {
        return Mr(o, e)
    }
    if (0 < Go.length) {
        Mr(Go[0], e);
        for (var n = 1; n < Go.length; n++) {
            var r = Go[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Yt !== null && Mr(Yt, e),
        Qt !== null && Mr(Qt, e),
        Xt !== null && Mr(Xt, e),
        uo.forEach(t),
        co.forEach(t),
        n = 0; n < $t.length; n++)
        r = $t[n],
            r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < $t.length && (n = $t[0],
        n.blockedOn === null);)
        xp(n),
            n.blockedOn === null && $t.shift()
}
var dr = _t.ReactCurrentBatchConfig
    , Mi = !0;
function iy(e, t, n, r) {
    var o = H
        , i = dr.transition;
    dr.transition = null;
    try {
        H = 1,
            Xl(e, t, n, r)
    } finally {
        H = o,
            dr.transition = i
    }
}
function sy(e, t, n, r) {
    var o = H
        , i = dr.transition;
    dr.transition = null;
    try {
        H = 4,
            Xl(e, t, n, r)
    } finally {
        H = o,
            dr.transition = i
    }
}
function Xl(e, t, n, r) {
    if (Mi) {
        var o = Fa(e, t, n, r);
        if (o === null)
            Ys(e, t, r, Li, n),
                mc(e, r);
        else if (ry(o, e, t, n, r))
            r.stopPropagation();
        else if (mc(e, r),
            t & 4 && -1 < ny.indexOf(e)) {
            for (; o !== null;) {
                var i = Lo(o);
                if (i !== null && mp(i),
                    i = Fa(e, t, n, r),
                    i === null && Ys(e, t, r, Li, n),
                    i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Ys(e, t, r, null, n)
    }
}
var Li = null;
function Fa(e, t, n, r) {
    if (Li = null,
        e = Gl(r),
        e = Sn(e),
        e !== null)
        if (t = Vn(e),
            t === null)
            e = null;
        else if (n = t.tag,
            n === 13) {
            if (e = ap(t),
                e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Li = e,
        null
}
function wp(e) {
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
            switch (Kv()) {
                case Kl:
                    return 1;
                case dp:
                    return 4;
                case ji:
                case Yv:
                    return 16;
                case fp:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Gt = null
    , ql = null
    , hi = null;
function Sp() {
    if (hi)
        return hi;
    var e, t = ql, n = t.length, r, o = "value" in Gt ? Gt.value : Gt.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return hi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function mi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
}
function Ko() {
    return !0
}
function vc() {
    return !1
}
function Qe(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
            this._targetInst = o,
            this.type = r,
            this.nativeEvent = i,
            this.target = s,
            this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
                this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ko : vc,
            this.isPropagationStopped = vc,
            this
    }
    return ae(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Ko)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Ko)
        },
        persist: function () { },
        isPersistent: Ko
    }),
        t
}
var kr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Zl = Qe(kr), Mo = ae({}, kr, {
    view: 0,
    detail: 0
}), ay = Qe(Mo), Fs, zs, Lr, us = ae({}, Mo, {
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
    getModifierState: Jl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== Lr && (Lr && e.type === "mousemove" ? (Fs = e.screenX - Lr.screenX,
            zs = e.screenY - Lr.screenY) : zs = Fs = 0,
            Lr = e),
            Fs)
    },
    movementY: function (e) {
        return "movementY" in e ? e.movementY : zs
    }
}), yc = Qe(us), ly = ae({}, us, {
    dataTransfer: 0
}), uy = Qe(ly), cy = ae({}, Mo, {
    relatedTarget: 0
}), Bs = Qe(cy), dy = ae({}, kr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), fy = Qe(dy), py = ae({}, kr, {
    clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), hy = Qe(py), my = ae({}, kr, {
    data: 0
}), xc = Qe(my), gy = {
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
}, vy = {
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
}, yy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function xy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = yy[e]) ? !!t[e] : !1
}
function Jl() {
    return xy
}
var wy = ae({}, Mo, {
    key: function (e) {
        if (e.key) {
            var t = gy[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = mi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jl,
    charCode: function (e) {
        return e.type === "keypress" ? mi(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
    , Sy = Qe(wy)
    , Ty = ae({}, us, {
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
    })
    , wc = Qe(Ty)
    , Cy = ae({}, Mo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Jl
    })
    , Ey = Qe(Cy)
    , Py = ae({}, kr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , ky = Qe(Py)
    , Ay = ae({}, us, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , Ny = Qe(Ay)
    , jy = [9, 13, 27, 32]
    , eu = Mt && "CompositionEvent" in window
    , Qr = null;
Mt && "documentMode" in document && (Qr = document.documentMode);
var Ry = Mt && "TextEvent" in window && !Qr
    , Tp = Mt && (!eu || Qr && 8 < Qr && 11 >= Qr)
    , Sc = String.fromCharCode(32)
    , Tc = !1;
function Cp(e, t) {
    switch (e) {
        case "keyup":
            return jy.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function Ep(e) {
    return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
}
var Yn = !1;
function My(e, t) {
    switch (e) {
        case "compositionend":
            return Ep(t);
        case "keypress":
            return t.which !== 32 ? null : (Tc = !0,
                Sc);
        case "textInput":
            return e = t.data,
                e === Sc && Tc ? null : e;
        default:
            return null
    }
}
function Ly(e, t) {
    if (Yn)
        return e === "compositionend" || !eu && Cp(e, t) ? (e = Sp(),
            hi = ql = Gt = null,
            Yn = !1,
            e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Tp && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var by = {
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
function Cc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!by[e.type] : t === "textarea"
}
function Pp(e, t, n, r) {
    np(r),
        t = bi(t, "onChange"),
        0 < t.length && (n = new Zl("onChange", "change", null, n, r),
            e.push({
                event: n,
                listeners: t
            }))
}
var Xr = null
    , po = null;
function Oy(e) {
    _p(e, 0)
}
function cs(e) {
    var t = qn(e);
    if (Qf(t))
        return e
}
function Dy(e, t) {
    if (e === "change")
        return t
}
var kp = !1;
if (Mt) {
    var Us;
    if (Mt) {
        var $s = "oninput" in document;
        if (!$s) {
            var Ec = document.createElement("div");
            Ec.setAttribute("oninput", "return;"),
                $s = typeof Ec.oninput == "function"
        }
        Us = $s
    } else
        Us = !1;
    kp = Us && (!document.documentMode || 9 < document.documentMode)
}
function Pc() {
    Xr && (Xr.detachEvent("onpropertychange", Ap),
        po = Xr = null)
}
function Ap(e) {
    if (e.propertyName === "value" && cs(po)) {
        var t = [];
        Pp(t, po, e, Gl(e)),
            sp(Oy, t)
    }
}
function _y(e, t, n) {
    e === "focusin" ? (Pc(),
        Xr = t,
        po = n,
        Xr.attachEvent("onpropertychange", Ap)) : e === "focusout" && Pc()
}
function Vy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return cs(po)
}
function Iy(e, t) {
    if (e === "click")
        return cs(t)
}
function Fy(e, t) {
    if (e === "input" || e === "change")
        return cs(t)
}
function zy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ft = typeof Object.is == "function" ? Object.is : zy;
function ho(e, t) {
    if (ft(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
        , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Sa.call(t, o) || !ft(e[o], t[o]))
            return !1
    }
    return !0
}
function kc(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function Ac(e, t) {
    var n = kc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
                e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = kc(n)
    }
}
function Np(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Np(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function jp() {
    for (var e = window, t = ki(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ki(e.document)
    }
    return t
}
function tu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function By(e) {
    var t = jp()
        , n = e.focusedElem
        , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Np(n.ownerDocument.documentElement, n)) {
        if (r !== null && tu(n)) {
            if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart" in n)
                n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                    , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                    !e.extend && i > r && (o = r,
                        r = i,
                        i = o),
                    o = Ac(n, i);
                var s = Ac(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r ? (e.addRange(t),
                        e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                            e.addRange(t)))
            }
        }
        for (t = [],
            e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
            e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
    }
}
var Uy = Mt && "documentMode" in document && 11 >= document.documentMode
    , Qn = null
    , za = null
    , qr = null
    , Ba = !1;
function Nc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ba || Qn == null || Qn !== ki(r) || (r = Qn,
        "selectionStart" in r && tu(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        qr && ho(qr, r) || (qr = r,
            r = bi(za, "onSelect"),
            0 < r.length && (t = new Zl("onSelect", "select", null, t, n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = Qn)))
}
function Yo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
}
var Xn = {
    animationend: Yo("Animation", "AnimationEnd"),
    animationiteration: Yo("Animation", "AnimationIteration"),
    animationstart: Yo("Animation", "AnimationStart"),
    transitionend: Yo("Transition", "TransitionEnd")
}
    , Ws = {}
    , Rp = {};
Mt && (Rp = document.createElement("div").style,
    "AnimationEvent" in window || (delete Xn.animationend.animation,
        delete Xn.animationiteration.animation,
        delete Xn.animationstart.animation),
    "TransitionEvent" in window || delete Xn.transitionend.transition);
function ds(e) {
    if (Ws[e])
        return Ws[e];
    if (!Xn[e])
        return e;
    var t = Xn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Rp)
            return Ws[e] = t[n];
    return e
}
var Mp = ds("animationend")
    , Lp = ds("animationiteration")
    , bp = ds("animationstart")
    , Op = ds("transitionend")
    , Dp = new Map
    , jc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(e, t) {
    Dp.set(e, t),
        _n(t, [e])
}
for (var Hs = 0; Hs < jc.length; Hs++) {
    var Gs = jc[Hs]
        , $y = Gs.toLowerCase()
        , Wy = Gs[0].toUpperCase() + Gs.slice(1);
    cn($y, "on" + Wy)
}
cn(Mp, "onAnimationEnd");
cn(Lp, "onAnimationIteration");
cn(bp, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Op, "onTransitionEnd");
mr("onMouseEnter", ["mouseout", "mouseover"]);
mr("onMouseLeave", ["mouseout", "mouseover"]);
mr("onPointerEnter", ["pointerout", "pointerover"]);
mr("onPointerLeave", ["pointerout", "pointerover"]);
_n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
_n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , Hy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));
function Rc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        $v(r, t, void 0, e),
        e.currentTarget = null
}
function _p(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
            , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                        , l = a.instance
                        , u = a.currentTarget;
                    if (a = a.listener,
                        l !== i && o.isPropagationStopped())
                        break e;
                    Rc(o, a, u),
                        i = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                        l = a.instance,
                        u = a.currentTarget,
                        a = a.listener,
                        l !== i && o.isPropagationStopped())
                        break e;
                    Rc(o, a, u),
                        i = l
                }
        }
    }
    if (Ni)
        throw e = _a,
        Ni = !1,
        _a = null,
        e
}
function Q(e, t) {
    var n = t[Ga];
    n === void 0 && (n = t[Ga] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Vp(t, e, 2, !1),
        n.add(r))
}
function Ks(e, t, n) {
    var r = 0;
    t && (r |= 4),
        Vp(n, e, r, t)
}
var Qo = "_reactListening" + Math.random().toString(36).slice(2);
function mo(e) {
    if (!e[Qo]) {
        e[Qo] = !0,
            Wf.forEach(function (n) {
                n !== "selectionchange" && (Hy.has(n) || Ks(n, !1, e),
                    Ks(n, !0, e))
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Qo] || (t[Qo] = !0,
            Ks("selectionchange", !1, t))
    }
}
function Vp(e, t, n, r) {
    switch (wp(t)) {
        case 1:
            var o = iy;
            break;
        case 4:
            o = sy;
            break;
        default:
            o = Xl
    }
    n = o.bind(null, t, n, e),
        o = void 0,
        !Da || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
        r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1)
}
function Ys(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null;) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                            l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; a !== null;) {
                    if (s = Sn(a),
                        s === null)
                        return;
                    if (l = s.tag,
                        l === 5 || l === 6) {
                        r = i = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    sp(function () {
        var u = i
            , c = Gl(n)
            , d = [];
        e: {
            var f = Dp.get(e);
            if (f !== void 0) {
                var h = Zl
                    , x = e;
                switch (e) {
                    case "keypress":
                        if (mi(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        h = Sy;
                        break;
                    case "focusin":
                        x = "focus",
                            h = Bs;
                        break;
                    case "focusout":
                        x = "blur",
                            h = Bs;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = Bs;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = yc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = uy;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = Ey;
                        break;
                    case Mp:
                    case Lp:
                    case bp:
                        h = fy;
                        break;
                    case Op:
                        h = ky;
                        break;
                    case "scroll":
                        h = ay;
                        break;
                    case "wheel":
                        h = Ny;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = hy;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = wc
                }
                var y = (t & 4) !== 0
                    , S = !y && e === "scroll"
                    , v = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var p = u, m; p !== null;) {
                    m = p;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w,
                        v !== null && (w = lo(p, v),
                            w != null && y.push(go(p, w, m)))),
                        S)
                        break;
                    p = p.return
                }
                0 < y.length && (f = new h(f, x, null, n, c),
                    d.push({
                        event: f,
                        listeners: y
                    }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                    h = e === "mouseout" || e === "pointerout",
                    f && n !== ba && (x = n.relatedTarget || n.fromElement) && (Sn(x) || x[Lt]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                    h ? (x = n.relatedTarget || n.toElement,
                        h = u,
                        x = x ? Sn(x) : null,
                        x !== null && (S = Vn(x),
                            x !== S || x.tag !== 5 && x.tag !== 6) && (x = null)) : (h = null,
                                x = u),
                    h !== x)) {
                    if (y = yc,
                        w = "onMouseLeave",
                        v = "onMouseEnter",
                        p = "mouse",
                        (e === "pointerout" || e === "pointerover") && (y = wc,
                            w = "onPointerLeave",
                            v = "onPointerEnter",
                            p = "pointer"),
                        S = h == null ? f : qn(h),
                        m = x == null ? f : qn(x),
                        f = new y(w, p + "leave", h, n, c),
                        f.target = S,
                        f.relatedTarget = m,
                        w = null,
                        Sn(c) === u && (y = new y(v, p + "enter", x, n, c),
                            y.target = m,
                            y.relatedTarget = S,
                            w = y),
                        S = w,
                        h && x)
                        t: {
                            for (y = h,
                                v = x,
                                p = 0,
                                m = y; m; m = $n(m))
                                p++;
                            for (m = 0,
                                w = v; w; w = $n(w))
                                m++;
                            for (; 0 < p - m;)
                                y = $n(y),
                                    p--;
                            for (; 0 < m - p;)
                                v = $n(v),
                                    m--;
                            for (; p--;) {
                                if (y === v || v !== null && y === v.alternate)
                                    break t;
                                y = $n(y),
                                    v = $n(v)
                            }
                            y = null
                        }
                    else
                        y = null;
                    h !== null && Mc(d, f, h, y, !1),
                        x !== null && S !== null && Mc(d, S, x, y, !0)
                }
            }
            e: {
                if (f = u ? qn(u) : window,
                    h = f.nodeName && f.nodeName.toLowerCase(),
                    h === "select" || h === "input" && f.type === "file")
                    var C = Dy;
                else if (Cc(f))
                    if (kp)
                        C = Fy;
                    else {
                        C = Vy;
                        var P = _y
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = Iy);
                if (C && (C = C(e, u))) {
                    Pp(d, C, n, c);
                    break e
                }
                P && P(e, f, u),
                    e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Na(f, "number", f.value)
            }
            switch (P = u ? qn(u) : window,
            e) {
                case "focusin":
                    (Cc(P) || P.contentEditable === "true") && (Qn = P,
                        za = u,
                        qr = null);
                    break;
                case "focusout":
                    qr = za = Qn = null;
                    break;
                case "mousedown":
                    Ba = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ba = !1,
                        Nc(d, n, c);
                    break;
                case "selectionchange":
                    if (Uy)
                        break;
                case "keydown":
                case "keyup":
                    Nc(d, n, c)
            }
            var E;
            if (eu)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var k = "onCompositionStart";
                            break e;
                        case "compositionend":
                            k = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            k = "onCompositionUpdate";
                            break e
                    }
                    k = void 0
                }
            else
                Yn ? Cp(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (Tp && n.locale !== "ko" && (Yn || k !== "onCompositionStart" ? k === "onCompositionEnd" && Yn && (E = Sp()) : (Gt = c,
                ql = "value" in Gt ? Gt.value : Gt.textContent,
                Yn = !0)),
                P = bi(u, k),
                0 < P.length && (k = new xc(k, e, null, n, c),
                    d.push({
                        event: k,
                        listeners: P
                    }),
                    E ? k.data = E : (E = Ep(n),
                        E !== null && (k.data = E)))),
                (E = Ry ? My(e, n) : Ly(e, n)) && (u = bi(u, "onBeforeInput"),
                    0 < u.length && (c = new xc("onBeforeInput", "beforeinput", null, n, c),
                        d.push({
                            event: c,
                            listeners: u
                        }),
                        c.data = E))
        }
        _p(d, t)
    })
}
function go(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function bi(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e
            , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
            i = lo(e, n),
            i != null && r.unshift(go(e, i, o)),
            i = lo(e, t),
            i != null && r.push(go(e, i, o))),
            e = e.return
    }
    return r
}
function $n(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Mc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var a = n
            , l = a.alternate
            , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
            o ? (l = lo(n, i),
                l != null && s.unshift(go(n, l, a))) : o || (l = lo(n, i),
                    l != null && s.push(go(n, l, a)))),
            n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Gy = /\r\n?/g
    , Ky = /\u0000|\uFFFD/g;
function Lc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gy, `
`).replace(Ky, "")
}
function Xo(e, t, n) {
    if (t = Lc(t),
        Lc(e) !== t && n)
        throw Error(A(425))
}
function Oi() { }
var Ua = null
    , $a = null;
function Wa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ha = typeof setTimeout == "function" ? setTimeout : void 0
    , Yy = typeof clearTimeout == "function" ? clearTimeout : void 0
    , bc = typeof Promise == "function" ? Promise : void 0
    , Qy = typeof queueMicrotask == "function" ? queueMicrotask : typeof bc < "u" ? function (e) {
        return bc.resolve(null).then(e).catch(Xy)
    }
        : Ha;
function Xy(e) {
    setTimeout(function () {
        throw e
    })
}
function Qs(e, t) {
    var n = t
        , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
            o && o.nodeType === 8)
            if (n = o.data,
                n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                        fo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    fo(t)
}
function qt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Oc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ar = Math.random().toString(36).slice(2)
    , gt = "__reactFiber$" + Ar
    , vo = "__reactProps$" + Ar
    , Lt = "__reactContainer$" + Ar
    , Ga = "__reactEvents$" + Ar
    , qy = "__reactListeners$" + Ar
    , Zy = "__reactHandles$" + Ar;
function Sn(e) {
    var t = e[gt];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Lt] || n[gt]) {
            if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                for (e = Oc(e); e !== null;) {
                    if (n = e[gt])
                        return n;
                    e = Oc(e)
                }
            return t
        }
        e = n,
            n = e.parentNode
    }
    return null
}
function Lo(e) {
    return e = e[gt] || e[Lt],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function qn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(A(33))
}
function fs(e) {
    return e[vo] || null
}
var Ka = []
    , Zn = -1;
function dn(e) {
    return {
        current: e
    }
}
function X(e) {
    0 > Zn || (e.current = Ka[Zn],
        Ka[Zn] = null,
        Zn--)
}
function K(e, t) {
    Zn++,
        Ka[Zn] = e.current,
        e.current = t
}
var sn = {}
    , ke = dn(sn)
    , _e = dn(!1)
    , jn = sn;
function gr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return sn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = o),
        o
}
function Ve(e) {
    return e = e.childContextTypes,
        e != null
}
function Di() {
    X(_e),
        X(ke)
}
function Dc(e, t, n) {
    if (ke.current !== sn)
        throw Error(A(168));
    K(ke, t),
        K(_e, n)
}
function Ip(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(A(108, _v(e) || "Unknown", o));
    return ae({}, n, r)
}
function _i(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn,
        jn = ke.current,
        K(ke, e),
        K(_e, _e.current),
        !0
}
function _c(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(A(169));
    n ? (e = Ip(e, t, jn),
        r.__reactInternalMemoizedMergedChildContext = e,
        X(_e),
        X(ke),
        K(ke, e)) : X(_e),
        K(_e, n)
}
var Et = null
    , ps = !1
    , Xs = !1;
function Fp(e) {
    Et === null ? Et = [e] : Et.push(e)
}
function Jy(e) {
    ps = !0,
        Fp(e)
}
function fn() {
    if (!Xs && Et !== null) {
        Xs = !0;
        var e = 0
            , t = H;
        try {
            var n = Et;
            for (H = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Et = null,
                ps = !1
        } catch (o) {
            throw Et !== null && (Et = Et.slice(e + 1)),
            cp(Kl, fn),
            o
        } finally {
            H = t,
                Xs = !1
        }
    }
    return null
}
var Jn = []
    , er = 0
    , Vi = null
    , Ii = 0
    , Ze = []
    , Je = 0
    , Rn = null
    , Pt = 1
    , kt = "";
function vn(e, t) {
    Jn[er++] = Ii,
        Jn[er++] = Vi,
        Vi = e,
        Ii = t
}
function zp(e, t, n) {
    Ze[Je++] = Pt,
        Ze[Je++] = kt,
        Ze[Je++] = Rn,
        Rn = e;
    var r = Pt;
    e = kt;
    var o = 32 - ct(r) - 1;
    r &= ~(1 << o),
        n += 1;
    var i = 32 - ct(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
            r >>= s,
            o -= s,
            Pt = 1 << 32 - ct(t) + o | n << o | r,
            kt = i + e
    } else
        Pt = 1 << i | n << o | r,
            kt = e
}
function nu(e) {
    e.return !== null && (vn(e, 1),
        zp(e, 1, 0))
}
function ru(e) {
    for (; e === Vi;)
        Vi = Jn[--er],
            Jn[er] = null,
            Ii = Jn[--er],
            Jn[er] = null;
    for (; e === Rn;)
        Rn = Ze[--Je],
            Ze[Je] = null,
            kt = Ze[--Je],
            Ze[Je] = null,
            Pt = Ze[--Je],
            Ze[Je] = null
}
var He = null
    , We = null
    , te = !1
    , lt = null;
function Bp(e, t) {
    var n = et(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
            e.flags |= 16) : t.push(n)
}
function Vc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                t !== null ? (e.stateNode = t,
                    He = e,
                    We = qt(t.firstChild),
                    !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                t !== null ? (e.stateNode = t,
                    He = e,
                    We = null,
                    !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
                t !== null ? (n = Rn !== null ? {
                    id: Pt,
                    overflow: kt
                } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = et(18, null, null, 0),
                    n.stateNode = t,
                    n.return = e,
                    e.child = n,
                    He = e,
                    We = null,
                    !0) : !1;
        default:
            return !1
    }
}
function Ya(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Qa(e) {
    if (te) {
        var t = We;
        if (t) {
            var n = t;
            if (!Vc(e, t)) {
                if (Ya(e))
                    throw Error(A(418));
                t = qt(n.nextSibling);
                var r = He;
                t && Vc(e, t) ? Bp(r, n) : (e.flags = e.flags & -4097 | 2,
                    te = !1,
                    He = e)
            }
        } else {
            if (Ya(e))
                throw Error(A(418));
            e.flags = e.flags & -4097 | 2,
                te = !1,
                He = e
        }
    }
}
function Ic(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    He = e
}
function qo(e) {
    if (e !== He)
        return !1;
    if (!te)
        return Ic(e),
            te = !0,
            !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !Wa(e.type, e.memoizedProps)),
        t && (t = We)) {
        if (Ya(e))
            throw Up(),
            Error(A(418));
        for (; t;)
            Bp(e, t),
                t = qt(t.nextSibling)
    }
    if (Ic(e),
        e.tag === 13) {
        if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
            throw Error(A(317));
        e: {
            for (e = e.nextSibling,
                t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            We = qt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            We = null
        }
    } else
        We = He ? qt(e.stateNode.nextSibling) : null;
    return !0
}
function Up() {
    for (var e = We; e;)
        e = qt(e.nextSibling)
}
function vr() {
    We = He = null,
        te = !1
}
function ou(e) {
    lt === null ? lt = [e] : lt.push(e)
}
var e0 = _t.ReactCurrentBatchConfig;
function br(e, t, n) {
    if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(A(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(A(147, e));
            var o = r
                , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }
                ,
                t._stringRef = i,
                t)
        }
        if (typeof e != "string")
            throw Error(A(284));
        if (!n._owner)
            throw Error(A(290, e))
    }
    return e
}
function Zo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Fc(e) {
    var t = e._init;
    return t(e._payload)
}
function $p(e) {
    function t(v, p) {
        if (e) {
            var m = v.deletions;
            m === null ? (v.deletions = [p],
                v.flags |= 16) : m.push(p)
        }
    }
    function n(v, p) {
        if (!e)
            return null;
        for (; p !== null;)
            t(v, p),
                p = p.sibling;
        return null
    }
    function r(v, p) {
        for (v = new Map; p !== null;)
            p.key !== null ? v.set(p.key, p) : v.set(p.index, p),
                p = p.sibling;
        return v
    }
    function o(v, p) {
        return v = tn(v, p),
            v.index = 0,
            v.sibling = null,
            v
    }
    function i(v, p, m) {
        return v.index = m,
            e ? (m = v.alternate,
                m !== null ? (m = m.index,
                    m < p ? (v.flags |= 2,
                        p) : m) : (v.flags |= 2,
                            p)) : (v.flags |= 1048576,
                                p)
    }
    function s(v) {
        return e && v.alternate === null && (v.flags |= 2),
            v
    }
    function a(v, p, m, w) {
        return p === null || p.tag !== 6 ? (p = ra(m, v.mode, w),
            p.return = v,
            p) : (p = o(p, m),
                p.return = v,
                p)
    }
    function l(v, p, m, w) {
        var C = m.type;
        return C === Kn ? c(v, p, m.props.children, w, m.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === zt && Fc(C) === p.type) ? (w = o(p, m.props),
            w.ref = br(v, p, m),
            w.return = v,
            w) : (w = Ti(m.type, m.key, m.props, null, v.mode, w),
                w.ref = br(v, p, m),
                w.return = v,
                w)
    }
    function u(v, p, m, w) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = oa(m, v.mode, w),
            p.return = v,
            p) : (p = o(p, m.children || []),
                p.return = v,
                p)
    }
    function c(v, p, m, w, C) {
        return p === null || p.tag !== 7 ? (p = An(m, v.mode, w, C),
            p.return = v,
            p) : (p = o(p, m),
                p.return = v,
                p)
    }
    function d(v, p, m) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = ra("" + p, v.mode, m),
                p.return = v,
                p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Bo:
                    return m = Ti(p.type, p.key, p.props, null, v.mode, m),
                        m.ref = br(v, null, p),
                        m.return = v,
                        m;
                case Gn:
                    return p = oa(p, v.mode, m),
                        p.return = v,
                        p;
                case zt:
                    var w = p._init;
                    return d(v, w(p._payload), m)
            }
            if ($r(p) || Nr(p))
                return p = An(p, v.mode, m, null),
                    p.return = v,
                    p;
            Zo(v, p)
        }
        return null
    }
    function f(v, p, m, w) {
        var C = p !== null ? p.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return C !== null ? null : a(v, p, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Bo:
                    return m.key === C ? l(v, p, m, w) : null;
                case Gn:
                    return m.key === C ? u(v, p, m, w) : null;
                case zt:
                    return C = m._init,
                        f(v, p, C(m._payload), w)
            }
            if ($r(m) || Nr(m))
                return C !== null ? null : c(v, p, m, w, null);
            Zo(v, m)
        }
        return null
    }
    function h(v, p, m, w, C) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return v = v.get(m) || null,
                a(p, v, "" + w, C);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Bo:
                    return v = v.get(w.key === null ? m : w.key) || null,
                        l(p, v, w, C);
                case Gn:
                    return v = v.get(w.key === null ? m : w.key) || null,
                        u(p, v, w, C);
                case zt:
                    var P = w._init;
                    return h(v, p, m, P(w._payload), C)
            }
            if ($r(w) || Nr(w))
                return v = v.get(m) || null,
                    c(p, v, w, C, null);
            Zo(p, w)
        }
        return null
    }
    function x(v, p, m, w) {
        for (var C = null, P = null, E = p, k = p = 0, L = null; E !== null && k < m.length; k++) {
            E.index > k ? (L = E,
                E = null) : L = E.sibling;
            var b = f(v, E, m[k], w);
            if (b === null) {
                E === null && (E = L);
                break
            }
            e && E && b.alternate === null && t(v, E),
                p = i(b, p, k),
                P === null ? C = b : P.sibling = b,
                P = b,
                E = L
        }
        if (k === m.length)
            return n(v, E),
                te && vn(v, k),
                C;
        if (E === null) {
            for (; k < m.length; k++)
                E = d(v, m[k], w),
                    E !== null && (p = i(E, p, k),
                        P === null ? C = E : P.sibling = E,
                        P = E);
            return te && vn(v, k),
                C
        }
        for (E = r(v, E); k < m.length; k++)
            L = h(E, v, k, m[k], w),
                L !== null && (e && L.alternate !== null && E.delete(L.key === null ? k : L.key),
                    p = i(L, p, k),
                    P === null ? C = L : P.sibling = L,
                    P = L);
        return e && E.forEach(function (W) {
            return t(v, W)
        }),
            te && vn(v, k),
            C
    }
    function y(v, p, m, w) {
        var C = Nr(m);
        if (typeof C != "function")
            throw Error(A(150));
        if (m = C.call(m),
            m == null)
            throw Error(A(151));
        for (var P = C = null, E = p, k = p = 0, L = null, b = m.next(); E !== null && !b.done; k++,
            b = m.next()) {
            E.index > k ? (L = E,
                E = null) : L = E.sibling;
            var W = f(v, E, b.value, w);
            if (W === null) {
                E === null && (E = L);
                break
            }
            e && E && W.alternate === null && t(v, E),
                p = i(W, p, k),
                P === null ? C = W : P.sibling = W,
                P = W,
                E = L
        }
        if (b.done)
            return n(v, E),
                te && vn(v, k),
                C;
        if (E === null) {
            for (; !b.done; k++,
                b = m.next())
                b = d(v, b.value, w),
                    b !== null && (p = i(b, p, k),
                        P === null ? C = b : P.sibling = b,
                        P = b);
            return te && vn(v, k),
                C
        }
        for (E = r(v, E); !b.done; k++,
            b = m.next())
            b = h(E, v, k, b.value, w),
                b !== null && (e && b.alternate !== null && E.delete(b.key === null ? k : b.key),
                    p = i(b, p, k),
                    P === null ? C = b : P.sibling = b,
                    P = b);
        return e && E.forEach(function (D) {
            return t(v, D)
        }),
            te && vn(v, k),
            C
    }
    function S(v, p, m, w) {
        if (typeof m == "object" && m !== null && m.type === Kn && m.key === null && (m = m.props.children),
            typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Bo:
                    e: {
                        for (var C = m.key, P = p; P !== null;) {
                            if (P.key === C) {
                                if (C = m.type,
                                    C === Kn) {
                                    if (P.tag === 7) {
                                        n(v, P.sibling),
                                            p = o(P, m.props.children),
                                            p.return = v,
                                            v = p;
                                        break e
                                    }
                                } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === zt && Fc(C) === P.type) {
                                    n(v, P.sibling),
                                        p = o(P, m.props),
                                        p.ref = br(v, P, m),
                                        p.return = v,
                                        v = p;
                                    break e
                                }
                                n(v, P);
                                break
                            } else
                                t(v, P);
                            P = P.sibling
                        }
                        m.type === Kn ? (p = An(m.props.children, v.mode, w, m.key),
                            p.return = v,
                            v = p) : (w = Ti(m.type, m.key, m.props, null, v.mode, w),
                                w.ref = br(v, p, m),
                                w.return = v,
                                v = w)
                    }
                    return s(v);
                case Gn:
                    e: {
                        for (P = m.key; p !== null;) {
                            if (p.key === P)
                                if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                    n(v, p.sibling),
                                        p = o(p, m.children || []),
                                        p.return = v,
                                        v = p;
                                    break e
                                } else {
                                    n(v, p);
                                    break
                                }
                            else
                                t(v, p);
                            p = p.sibling
                        }
                        p = oa(m, v.mode, w),
                            p.return = v,
                            v = p
                    }
                    return s(v);
                case zt:
                    return P = m._init,
                        S(v, p, P(m._payload), w)
            }
            if ($r(m))
                return x(v, p, m, w);
            if (Nr(m))
                return y(v, p, m, w);
            Zo(v, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
            p !== null && p.tag === 6 ? (n(v, p.sibling),
                p = o(p, m),
                p.return = v,
                v = p) : (n(v, p),
                    p = ra(m, v.mode, w),
                    p.return = v,
                    v = p),
            s(v)) : n(v, p)
    }
    return S
}
var yr = $p(!0)
    , Wp = $p(!1)
    , Fi = dn(null)
    , zi = null
    , tr = null
    , iu = null;
function su() {
    iu = tr = zi = null
}
function au(e) {
    var t = Fi.current;
    X(Fi),
        e._currentValue = t
}
function Xa(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
            break;
        e = e.return
    }
}
function fr(e, t) {
    zi = e,
        iu = tr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (De = !0),
            e.firstContext = null)
}
function nt(e) {
    var t = e._currentValue;
    if (iu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
            tr === null) {
            if (zi === null)
                throw Error(A(308));
            tr = e,
                zi.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
        } else
            tr = tr.next = e;
    return t
}
var Tn = null;
function lu(e) {
    Tn === null ? Tn = [e] : Tn.push(e)
}
function Hp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
        lu(t)) : (n.next = o.next,
            o.next = n),
        t.interleaved = n,
        bt(e, r)
}
function bt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null;)
        e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Bt = !1;
function uu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Gp(e, t) {
    e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
}
function Nt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Zt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        $ & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
            o.next = t),
            r.pending = t,
            bt(e, n)
    }
    return o = r.interleaved,
        o === null ? (t.next = t,
            lu(r)) : (t.next = o.next,
                o.next = t),
        r.interleaved = t,
        bt(e, n)
}
function gi(e, t, n) {
    if (t = t.updateQueue,
        t !== null && (t = t.shared,
            (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Yl(e, n)
    }
}
function zc(e, t) {
    var n = e.updateQueue
        , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var o = null
            , i = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                    n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
            e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
}
function Bi(e, t, n, r) {
    var o = e.updateQueue;
    Bt = !1;
    var i = o.firstBaseUpdate
        , s = o.lastBaseUpdate
        , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
            , u = l.next;
        l.next = null,
            s === null ? i = u : s.next = u,
            s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
            a = c.lastBaseUpdate,
            a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
                c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0,
            c = u = l = null,
            a = i;
        do {
            var f = a.lane
                , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                        , y = a;
                    switch (f = t,
                    h = n,
                    y.tag) {
                        case 1:
                            if (x = y.payload,
                                typeof x == "function") {
                                d = x.call(h, d, f);
                                break e
                            }
                            d = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = y.payload,
                                f = typeof x == "function" ? x.call(h, d, f) : x,
                                f == null)
                                break e;
                            d = ae({}, d, f);
                            break e;
                        case 2:
                            Bt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                    f = o.effects,
                    f === null ? o.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                    c === null ? (u = c = h,
                        l = d) : c = c.next = h,
                    s |= f;
            if (a = a.next,
                a === null) {
                if (a = o.shared.pending,
                    a === null)
                    break;
                f = a,
                    a = f.next,
                    f.next = null,
                    o.lastBaseUpdate = f,
                    o.shared.pending = null
            }
        } while (1);
        if (c === null && (l = d),
            o.baseState = l,
            o.firstBaseUpdate = u,
            o.lastBaseUpdate = c,
            t = o.shared.interleaved,
            t !== null) {
            o = t;
            do
                s |= o.lane,
                    o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Ln |= s,
            e.lanes = s,
            e.memoizedState = d
    }
}
function Bc(e, t, n) {
    if (e = t.effects,
        t.effects = null,
        e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
                , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                    r = n,
                    typeof o != "function")
                    throw Error(A(191, o));
                o.call(r)
            }
        }
}
var bo = {}
    , yt = dn(bo)
    , yo = dn(bo)
    , xo = dn(bo);
function Cn(e) {
    if (e === bo)
        throw Error(A(174));
    return e
}
function cu(e, t) {
    switch (K(xo, t),
    K(yo, e),
    K(yt, bo),
    e = t.nodeType,
    e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ra(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
                t = e.namespaceURI || null,
                e = e.tagName,
                t = Ra(t, e)
    }
    X(yt),
        K(yt, t)
}
function xr() {
    X(yt),
        X(yo),
        X(xo)
}
function Kp(e) {
    Cn(xo.current);
    var t = Cn(yt.current)
        , n = Ra(t, e.type);
    t !== n && (K(yo, e),
        K(yt, n))
}
function du(e) {
    yo.current === e && (X(yt),
        X(yo))
}
var re = dn(0);
function Ui(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
                t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
            t = t.sibling
    }
    return null
}
var qs = [];
function fu() {
    for (var e = 0; e < qs.length; e++)
        qs[e]._workInProgressVersionPrimary = null;
    qs.length = 0
}
var vi = _t.ReactCurrentDispatcher
    , Zs = _t.ReactCurrentBatchConfig
    , Mn = 0
    , se = null
    , he = null
    , ge = null
    , $i = !1
    , Zr = !1
    , wo = 0
    , t0 = 0;
function Te() {
    throw Error(A(321))
}
function pu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!ft(e[n], t[n]))
            return !1;
    return !0
}
function hu(e, t, n, r, o, i) {
    if (Mn = i,
        se = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        vi.current = e === null || e.memoizedState === null ? i0 : s0,
        e = n(r, o),
        Zr) {
        i = 0;
        do {
            if (Zr = !1,
                wo = 0,
                25 <= i)
                throw Error(A(301));
            i += 1,
                ge = he = null,
                t.updateQueue = null,
                vi.current = a0,
                e = n(r, o)
        } while (Zr)
    }
    if (vi.current = Wi,
        t = he !== null && he.next !== null,
        Mn = 0,
        ge = he = se = null,
        $i = !1,
        t)
        throw Error(A(300));
    return e
}
function mu() {
    var e = wo !== 0;
    return wo = 0,
        e
}
function mt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ge === null ? se.memoizedState = ge = e : ge = ge.next = e,
        ge
}
function rt() {
    if (he === null) {
        var e = se.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = he.next;
    var t = ge === null ? se.memoizedState : ge.next;
    if (t !== null)
        ge = t,
            he = e;
    else {
        if (e === null)
            throw Error(A(310));
        he = e,
            e = {
                memoizedState: he.memoizedState,
                baseState: he.baseState,
                baseQueue: he.baseQueue,
                queue: he.queue,
                next: null
            },
            ge === null ? se.memoizedState = ge = e : ge = ge.next = e
    }
    return ge
}
function So(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Js(e) {
    var t = rt()
        , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = he
        , o = r.baseQueue
        , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
                i.next = s
        }
        r.baseQueue = o = i,
            n.pending = null
    }
    if (o !== null) {
        i = o.next,
            r = r.baseState;
        var a = s = null
            , l = null
            , u = i;
        do {
            var c = u.lane;
            if ((Mn & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                    r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                    s = r) : l = l.next = d,
                    se.lanes |= c,
                    Ln |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a,
            ft(r, t.memoizedState) || (De = !0),
            t.memoizedState = r,
            t.baseState = s,
            t.baseQueue = l,
            n.lastRenderedState = r
    }
    if (e = n.interleaved,
        e !== null) {
        o = e;
        do
            i = o.lane,
                se.lanes |= i,
                Ln |= i,
                o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ea(e) {
    var t = rt()
        , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
        , o = n.pending
        , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
                s = s.next;
        while (s !== o);
        ft(i, t.memoizedState) || (De = !0),
            t.memoizedState = i,
            t.baseQueue === null && (t.baseState = i),
            n.lastRenderedState = i
    }
    return [i, r]
}
function Yp() { }
function Qp(e, t) {
    var n = se
        , r = rt()
        , o = t()
        , i = !ft(r.memoizedState, o);
    if (i && (r.memoizedState = o,
        De = !0),
        r = r.queue,
        gu(Zp.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || ge !== null && ge.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            To(9, qp.bind(null, n, r, o, t), void 0, null),
            ve === null)
            throw Error(A(349));
        Mn & 30 || Xp(n, t, o)
    }
    return o
}
function Xp(e, t, n) {
    e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = se.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            se.updateQueue = t,
            t.stores = [e]) : (n = t.stores,
                n === null ? t.stores = [e] : n.push(e))
}
function qp(e, t, n, r) {
    t.value = n,
        t.getSnapshot = r,
        Jp(t) && eh(e)
}
function Zp(e, t, n) {
    return n(function () {
        Jp(t) && eh(e)
    })
}
function Jp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ft(e, n)
    } catch {
        return !0
    }
}
function eh(e) {
    var t = bt(e, 1);
    t !== null && dt(t, e, 1, -1)
}
function Uc(e) {
    var t = mt();
    return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: So,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = o0.bind(null, se, e),
        [t.memoizedState, e]
}
function To(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
        t = se.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            se.updateQueue = t,
            t.lastEffect = e.next = e) : (n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e)),
        e
}
function th() {
    return rt().memoizedState
}
function yi(e, t, n, r) {
    var o = mt();
    se.flags |= e,
        o.memoizedState = To(1 | t, n, void 0, r === void 0 ? null : r)
}
function hs(e, t, n, r) {
    var o = rt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (he !== null) {
        var s = he.memoizedState;
        if (i = s.destroy,
            r !== null && pu(r, s.deps)) {
            o.memoizedState = To(t, n, i, r);
            return
        }
    }
    se.flags |= e,
        o.memoizedState = To(1 | t, n, i, r)
}
function $c(e, t) {
    return yi(8390656, 8, e, t)
}
function gu(e, t) {
    return hs(2048, 8, e, t)
}
function nh(e, t) {
    return hs(4, 2, e, t)
}
function rh(e, t) {
    return hs(4, 4, e, t)
}
function oh(e, t) {
    if (typeof t == "function")
        return e = e(),
            t(e),
            function () {
                t(null)
            }
            ;
    if (t != null)
        return e = e(),
            t.current = e,
            function () {
                t.current = null
            }
}
function ih(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
        hs(4, 4, oh.bind(null, t, e), n)
}
function vu() { }
function sh(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
}
function ah(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pu(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
}
function lh(e, t, n) {
    return Mn & 21 ? (ft(n, t) || (n = pp(),
        se.lanes |= n,
        Ln |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
            De = !0),
            e.memoizedState = n)
}
function n0(e, t) {
    var n = H;
    H = n !== 0 && 4 > n ? n : 4,
        e(!0);
    var r = Zs.transition;
    Zs.transition = {};
    try {
        e(!1),
            t()
    } finally {
        H = n,
            Zs.transition = r
    }
}
function uh() {
    return rt().memoizedState
}
function r0(e, t, n) {
    var r = en(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        ch(e))
        dh(t, n);
    else if (n = Hp(e, t, n, r),
        n !== null) {
        var o = Re();
        dt(n, e, r, o),
            fh(n, t, r)
    }
}
function o0(e, t, n) {
    var r = en(e)
        , o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (ch(e))
        dh(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
            i !== null))
            try {
                var s = t.lastRenderedState
                    , a = i(s, n);
                if (o.hasEagerState = !0,
                    o.eagerState = a,
                    ft(a, s)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                        lu(t)) : (o.next = l.next,
                            l.next = o),
                        t.interleaved = o;
                    return
                }
            } catch { } finally { }
        n = Hp(e, t, o, r),
            n !== null && (o = Re(),
                dt(n, e, r, o),
                fh(n, t, r))
    }
}
function ch(e) {
    var t = e.alternate;
    return e === se || t !== null && t === se
}
function dh(e, t) {
    Zr = $i = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
}
function fh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Yl(e, n)
    }
}
var Wi = {
    readContext: nt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1
}
    , i0 = {
        readContext: nt,
        useCallback: function (e, t) {
            return mt().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: nt,
        useEffect: $c,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null,
                yi(4194308, 4, oh.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return yi(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return yi(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = mt();
            return t = t === void 0 ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
        },
        useReducer: function (e, t, n) {
            var r = mt();
            return t = n !== void 0 ? n(t) : t,
                r.memoizedState = r.baseState = t,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                },
                r.queue = e,
                e = e.dispatch = r0.bind(null, se, e),
                [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = mt();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: Uc,
        useDebugValue: vu,
        useDeferredValue: function (e) {
            return mt().memoizedState = e
        },
        useTransition: function () {
            var e = Uc(!1)
                , t = e[0];
            return e = n0.bind(null, e[1]),
                mt().memoizedState = e,
                [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = se
                , o = mt();
            if (te) {
                if (n === void 0)
                    throw Error(A(407));
                n = n()
            } else {
                if (n = t(),
                    ve === null)
                    throw Error(A(349));
                Mn & 30 || Xp(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i,
                $c(Zp.bind(null, r, i, e), [e]),
                r.flags |= 2048,
                To(9, qp.bind(null, r, i, n, t), void 0, null),
                n
        },
        useId: function () {
            var e = mt()
                , t = ve.identifierPrefix;
            if (te) {
                var n = kt
                    , r = Pt;
                n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = wo++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = t0++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
    , s0 = {
        readContext: nt,
        useCallback: sh,
        useContext: nt,
        useEffect: gu,
        useImperativeHandle: ih,
        useInsertionEffect: nh,
        useLayoutEffect: rh,
        useMemo: ah,
        useReducer: Js,
        useRef: th,
        useState: function () {
            return Js(So)
        },
        useDebugValue: vu,
        useDeferredValue: function (e) {
            var t = rt();
            return lh(t, he.memoizedState, e)
        },
        useTransition: function () {
            var e = Js(So)[0]
                , t = rt().memoizedState;
            return [e, t]
        },
        useMutableSource: Yp,
        useSyncExternalStore: Qp,
        useId: uh,
        unstable_isNewReconciler: !1
    }
    , a0 = {
        readContext: nt,
        useCallback: sh,
        useContext: nt,
        useEffect: gu,
        useImperativeHandle: ih,
        useInsertionEffect: nh,
        useLayoutEffect: rh,
        useMemo: ah,
        useReducer: ea,
        useRef: th,
        useState: function () {
            return ea(So)
        },
        useDebugValue: vu,
        useDeferredValue: function (e) {
            var t = rt();
            return he === null ? t.memoizedState = e : lh(t, he.memoizedState, e)
        },
        useTransition: function () {
            var e = ea(So)[0]
                , t = rt().memoizedState;
            return [e, t]
        },
        useMutableSource: Yp,
        useSyncExternalStore: Qp,
        useId: uh,
        unstable_isNewReconciler: !1
    };
function st(e, t) {
    if (e && e.defaultProps) {
        t = ae({}, t),
            e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function qa(e, t, n, r) {
    t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : ae({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ms = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Vn(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Re()
            , o = en(e)
            , i = Nt(r, o);
        i.payload = t,
            n != null && (i.callback = n),
            t = Zt(e, i, o),
            t !== null && (dt(t, e, o, r),
                gi(t, e, o))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Re()
            , o = en(e)
            , i = Nt(r, o);
        i.tag = 1,
            i.payload = t,
            n != null && (i.callback = n),
            t = Zt(e, i, o),
            t !== null && (dt(t, e, o, r),
                gi(t, e, o))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Re()
            , r = en(e)
            , o = Nt(n, r);
        o.tag = 2,
            t != null && (o.callback = t),
            t = Zt(e, o, r),
            t !== null && (dt(t, e, r, n),
                gi(t, e, r))
    }
};
function Wc(e, t, n, r, o, i, s) {
    return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ho(n, r) || !ho(o, i) : !0
}
function ph(e, t, n) {
    var r = !1
        , o = sn
        , i = t.contextType;
    return typeof i == "object" && i !== null ? i = nt(i) : (o = Ve(t) ? jn : ke.current,
        r = t.contextTypes,
        i = (r = r != null) ? gr(e, o) : sn),
        t = new t(n, i),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = ms,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = o,
            e.__reactInternalMemoizedMaskedChildContext = i),
        t
}
function Hc(e, t, n, r) {
    e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ms.enqueueReplaceState(t, t.state, null)
}
function Za(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
        o.state = e.memoizedState,
        o.refs = {},
        uu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = nt(i) : (i = Ve(t) ? jn : ke.current,
        o.context = gr(e, i)),
        o.state = e.memoizedState,
        i = t.getDerivedStateFromProps,
        typeof i == "function" && (qa(e, t, i, n),
            o.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            t !== o.state && ms.enqueueReplaceState(o, o.state, null),
            Bi(e, n, o, r),
            o.state = e.memoizedState),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function wr(e, t) {
    try {
        var n = ""
            , r = t;
        do
            n += Dv(r),
                r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function ta(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Ja(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var l0 = typeof WeakMap == "function" ? WeakMap : Map;
function hh(e, t, n) {
    n = Nt(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = t.value;
    return n.callback = function () {
        Gi || (Gi = !0,
            ul = r),
            Ja(e, t)
    }
        ,
        n
}
function mh(e, t, n) {
    n = Nt(-1, n),
        n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function () {
            return r(o)
        }
            ,
            n.callback = function () {
                Ja(e, t)
            }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () {
        Ja(e, t),
            typeof r != "function" && (Jt === null ? Jt = new Set([this]) : Jt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
        n
}
function Gc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new l0;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
            o === void 0 && (o = new Set,
                r.set(t, o));
    o.has(n) || (o.add(n),
        e = T0.bind(null, e, t, n),
        t.then(e, e))
}
function Kc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Yc(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = o,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1),
                t.tag = 2,
                Zt(n, t, 1))),
            n.lanes |= 1),
            e)
}
var u0 = _t.ReactCurrentOwner
    , De = !1;
function je(e, t, n, r) {
    t.child = e === null ? Wp(t, null, n, r) : yr(t, e.child, n, r)
}
function Qc(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return fr(t, o),
        r = hu(e, t, n, r, i, o),
        n = mu(),
        e !== null && !De ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~o,
            Ot(e, t, o)) : (te && n && nu(t),
                t.flags |= 1,
                je(e, t, r, o),
                t.child)
}
function Xc(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Pu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = i,
            gh(e, t, i, r, o)) : (e = Ti(n.type, null, r, t, t.mode, o),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
    }
    if (i = e.child,
        !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : ho,
            n(s, r) && e.ref === t.ref)
            return Ot(e, t, o)
    }
    return t.flags |= 1,
        e = tn(i, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
}
function gh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (ho(i, r) && e.ref === t.ref)
            if (De = !1,
                t.pendingProps = r = i,
                (e.lanes & o) !== 0)
                e.flags & 131072 && (De = !0);
            else
                return t.lanes = e.lanes,
                    Ot(e, t, o)
    }
    return el(e, t, n, r, o)
}
function vh(e, t, n) {
    var r = t.pendingProps
        , o = r.children
        , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                K(rr, Ue),
                Ue |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    K(rr, Ue),
                    Ue |= e,
                    null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = i !== null ? i.baseLanes : n,
                K(rr, Ue),
                Ue |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
            t.memoizedState = null) : r = n,
            K(rr, Ue),
            Ue |= r;
    return je(e, t, o, n),
        t.child
}
function yh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
}
function el(e, t, n, r, o) {
    var i = Ve(n) ? jn : ke.current;
    return i = gr(t, i),
        fr(t, o),
        n = hu(e, t, n, r, i, o),
        r = mu(),
        e !== null && !De ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~o,
            Ot(e, t, o)) : (te && r && nu(t),
                t.flags |= 1,
                je(e, t, n, o),
                t.child)
}
function qc(e, t, n, r, o) {
    if (Ve(n)) {
        var i = !0;
        _i(t)
    } else
        i = !1;
    if (fr(t, o),
        t.stateNode === null)
        xi(e, t),
            ph(t, n, r),
            Za(t, n, r, o),
            r = !0;
    else if (e === null) {
        var s = t.stateNode
            , a = t.memoizedProps;
        s.props = a;
        var l = s.context
            , u = n.contextType;
        typeof u == "object" && u !== null ? u = nt(u) : (u = Ve(n) ? jn : ke.current,
            u = gr(t, u));
        var c = n.getDerivedStateFromProps
            , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Hc(t, s, r, u),
            Bt = !1;
        var f = t.memoizedState;
        s.state = f,
            Bi(t, r, s, o),
            l = t.memoizedState,
            a !== r || f !== l || _e.current || Bt ? (typeof c == "function" && (qa(t, n, c, r),
                l = t.memoizedState),
                (a = Bt || Wc(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
                    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                    typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                        t.memoizedProps = r,
                        t.memoizedState = l),
                s.props = r,
                s.state = l,
                s.context = u,
                r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                    r = !1)
    } else {
        s = t.stateNode,
            Gp(e, t),
            a = t.memoizedProps,
            u = t.type === t.elementType ? a : st(t.type, a),
            s.props = u,
            d = t.pendingProps,
            f = s.context,
            l = n.contextType,
            typeof l == "object" && l !== null ? l = nt(l) : (l = Ve(n) ? jn : ke.current,
                l = gr(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && Hc(t, s, r, l),
            Bt = !1,
            f = t.memoizedState,
            s.state = f,
            Bi(t, r, s, o);
        var x = t.memoizedState;
        a !== d || f !== x || _e.current || Bt ? (typeof h == "function" && (qa(t, n, h, r),
            x = t.memoizedState),
            (u = Bt || Wc(t, n, u, r, f, x, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, l),
                typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, l)),
                typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = x),
            s.props = r,
            s.state = x,
            s.context = l,
            r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                r = !1)
    }
    return tl(e, t, n, r, i, o)
}
function tl(e, t, n, r, o, i) {
    yh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && _c(t, n, !1),
            Ot(e, t, i);
    r = t.stateNode,
        u0.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
        e !== null && s ? (t.child = yr(t, e.child, null, i),
            t.child = yr(t, null, a, i)) : je(e, t, a, i),
        t.memoizedState = r.state,
        o && _c(t, n, !0),
        t.child
}
function xh(e) {
    var t = e.stateNode;
    t.pendingContext ? Dc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Dc(e, t.context, !1),
        cu(e, t.containerInfo)
}
function Zc(e, t, n, r, o) {
    return vr(),
        ou(o),
        t.flags |= 256,
        je(e, t, n, r),
        t.child
}
var nl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function rl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function wh(e, t, n) {
    var r = t.pendingProps, o = re.current, i = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        a ? (i = !0,
            t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
        K(re, o & 1),
        e === null)
        return Qa(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
                e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
                    null) : (s = r.children,
                        e = r.fallback,
                        i ? (r = t.mode,
                            i = t.child,
                            s = {
                                mode: "hidden",
                                children: s
                            },
                            !(r & 1) && i !== null ? (i.childLanes = 0,
                                i.pendingProps = s) : i = ys(s, r, 0, null),
                            e = An(e, r, n, null),
                            i.return = t,
                            e.return = t,
                            i.sibling = e,
                            t.child = i,
                            t.child.memoizedState = rl(n),
                            t.memoizedState = nl,
                            e) : yu(t, s));
    if (o = e.memoizedState,
        o !== null && (a = o.dehydrated,
            a !== null))
        return c0(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback,
            s = t.mode,
            o = e.child,
            a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = l,
            t.deletions = null) : (r = tn(o, l),
                r.subtreeFlags = o.subtreeFlags & 14680064),
            a !== null ? i = tn(a, i) : (i = An(i, s, n, null),
                i.flags |= 2),
            i.return = t,
            r.return = t,
            r.sibling = i,
            t.child = r,
            r = i,
            i = t.child,
            s = e.child.memoizedState,
            s = s === null ? rl(n) : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions
            },
            i.memoizedState = s,
            i.childLanes = e.childLanes & ~n,
            t.memoizedState = nl,
            r
    }
    return i = e.child,
        e = i.sibling,
        r = tn(i, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
            n === null ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
}
function yu(e, t) {
    return t = ys({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
        t.return = e,
        e.child = t
}
function Jo(e, t, n, r) {
    return r !== null && ou(r),
        yr(t, e.child, null, n),
        e = yu(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
}
function c0(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
            r = ta(Error(A(422))),
            Jo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
                t.flags |= 128,
                null) : (i = r.fallback,
                    o = t.mode,
                    r = ys({
                        mode: "visible",
                        children: r.children
                    }, o, 0, null),
                    i = An(i, o, s, null),
                    i.flags |= 2,
                    r.return = t,
                    i.return = t,
                    r.sibling = i,
                    t.child = r,
                    t.mode & 1 && yr(t, e.child, null, s),
                    t.child.memoizedState = rl(s),
                    t.memoizedState = nl,
                    i);
    if (!(t.mode & 1))
        return Jo(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
            r)
            var a = r.dgst;
        return r = a,
            i = Error(A(419)),
            r = ta(i, r, void 0),
            Jo(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
        De || a) {
        if (r = ve,
            r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
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
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
                o !== 0 && o !== i.retryLane && (i.retryLane = o,
                    bt(e, o),
                    dt(r, e, o, -1))
        }
        return Eu(),
            r = ta(Error(A(421))),
            Jo(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = C0.bind(null, e),
        o._reactRetry = t,
        null) : (e = i.treeContext,
            We = qt(o.nextSibling),
            He = t,
            te = !0,
            lt = null,
            e !== null && (Ze[Je++] = Pt,
                Ze[Je++] = kt,
                Ze[Je++] = Rn,
                Pt = e.id,
                kt = e.overflow,
                Rn = t),
            t = yu(t, r.children),
            t.flags |= 4096,
            t)
}
function Jc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
        Xa(e.return, t, n)
}
function na(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = r,
        i.tail = n,
        i.tailMode = o)
}
function Sh(e, t, n) {
    var r = t.pendingProps
        , o = r.revealOrder
        , i = r.tail;
    if (je(e, t, r.children, n),
        r = re.current,
        r & 2)
        r = r & 1 | 2,
            t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && Jc(e, n, t);
                else if (e.tag === 19)
                    Jc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        r &= 1
    }
    if (K(re, r),
        !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child,
                    o = null; n !== null;)
                    e = n.alternate,
                        e !== null && Ui(e) === null && (o = n),
                        n = n.sibling;
                n = o,
                    n === null ? (o = t.child,
                        t.child = null) : (o = n.sibling,
                            n.sibling = null),
                    na(t, !1, o, n, i);
                break;
            case "backwards":
                for (n = null,
                    o = t.child,
                    t.child = null; o !== null;) {
                    if (e = o.alternate,
                        e !== null && Ui(e) === null) {
                        t.child = o;
                        break
                    }
                    e = o.sibling,
                        o.sibling = n,
                        n = o,
                        o = e
                }
                na(t, !0, n, null, i);
                break;
            case "together":
                na(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
    return t.child
}
function xi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
}
function Ot(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
        Ln |= t.lanes,
        !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(A(153));
    if (t.child !== null) {
        for (e = t.child,
            n = tn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null;)
            e = e.sibling,
                n = n.sibling = tn(e, e.pendingProps),
                n.return = t;
        n.sibling = null
    }
    return t.child
}
function d0(e, t, n) {
    switch (t.tag) {
        case 3:
            xh(t),
                vr();
            break;
        case 5:
            Kp(t);
            break;
        case 1:
            Ve(t.type) && _i(t);
            break;
        case 4:
            cu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
                , o = t.memoizedProps.value;
            K(Fi, r._currentValue),
                r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (K(re, re.current & 1),
                    t.flags |= 128,
                    null) : n & t.child.childLanes ? wh(e, t, n) : (K(re, re.current & 1),
                        e = Ot(e, t, n),
                        e !== null ? e.sibling : null);
            K(re, re.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
                e.flags & 128) {
                if (r)
                    return Sh(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState,
                o !== null && (o.rendering = null,
                    o.tail = null,
                    o.lastEffect = null),
                K(re, re.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
                vh(e, t, n)
    }
    return Ot(e, t, n)
}
var Th, ol, Ch, Eh;
Th = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
ol = function () { }
    ;
Ch = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
            Cn(yt.current);
        var i = null;
        switch (n) {
            case "input":
                o = ka(e, o),
                    r = ka(e, r),
                    i = [];
                break;
            case "select":
                o = ae({}, o, {
                    value: void 0
                }),
                    r = ae({}, r, {
                        value: void 0
                    }),
                    i = [];
                break;
            case "textarea":
                o = ja(e, o),
                    r = ja(e, r),
                    i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Oi)
        }
        Ma(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                            n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (so.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
                r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                                n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                                n[s] = l[s])
                    } else
                        n || (i || (i = []),
                            i.push(u, n)),
                            n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                        a = a ? a.__html : void 0,
                        l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (so.hasOwnProperty(u) ? (l != null && u === "onScroll" && Q("scroll", e),
                            i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
    ;
Eh = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
    ;
function Or(e, t) {
    if (!te)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t),
                        t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ce(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
        , n = 0
        , r = 0;
    if (t)
        for (var o = e.child; o !== null;)
            n |= o.lanes | o.childLanes,
                r |= o.subtreeFlags & 14680064,
                r |= o.flags & 14680064,
                o.return = e,
                o = o.sibling;
    else
        for (o = e.child; o !== null;)
            n |= o.lanes | o.childLanes,
                r |= o.subtreeFlags,
                r |= o.flags,
                o.return = e,
                o = o.sibling;
    return e.subtreeFlags |= r,
        e.childLanes = n,
        t
}
function f0(e, t, n) {
    var r = t.pendingProps;
    switch (ru(t),
    t.tag) {
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
            return Ce(t),
                null;
        case 1:
            return Ve(t.type) && Di(),
                Ce(t),
                null;
        case 3:
            return r = t.stateNode,
                xr(),
                X(_e),
                X(ke),
                fu(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (e === null || e.child === null) && (qo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                    lt !== null && (fl(lt),
                        lt = null))),
                ol(e, t),
                Ce(t),
                null;
        case 5:
            du(t);
            var o = Cn(xo.current);
            if (n = t.type,
                e !== null && t.stateNode != null)
                Ch(e, t, n, r, o),
                    e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(A(166));
                    return Ce(t),
                        null
                }
                if (e = Cn(yt.current),
                    qo(t)) {
                    r = t.stateNode,
                        n = t.type;
                    var i = t.memoizedProps;
                    switch (r[gt] = t,
                    r[vo] = i,
                    e = (t.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            Q("cancel", r),
                                Q("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Q("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Hr.length; o++)
                                Q(Hr[o], r);
                            break;
                        case "source":
                            Q("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Q("error", r),
                                Q("load", r);
                            break;
                        case "details":
                            Q("toggle", r);
                            break;
                        case "input":
                            lc(r, i),
                                Q("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            },
                                Q("invalid", r);
                            break;
                        case "textarea":
                            cc(r, i),
                                Q("invalid", r)
                    }
                    Ma(n, i),
                        o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Xo(r.textContent, a, e),
                                o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Xo(r.textContent, a, e),
                                    o = ["children", "" + a]) : so.hasOwnProperty(s) && a != null && s === "onScroll" && Q("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Uo(r),
                                uc(r, i, !0);
                            break;
                        case "textarea":
                            Uo(r),
                                dc(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Oi)
                    }
                    r = o,
                        t.updateQueue = r,
                        r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument,
                        e === "http://www.w3.org/1999/xhtml" && (e = Zf(n)),
                        e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                                is: r.is
                            }) : (e = s.createElement(n),
                                n === "select" && (s = e,
                                    r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                        e[gt] = t,
                        e[vo] = r,
                        Th(e, t, !1, !1),
                        t.stateNode = e;
                    e: {
                        switch (s = La(n, r),
                        n) {
                            case "dialog":
                                Q("cancel", e),
                                    Q("close", e),
                                    o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Q("load", e),
                                    o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Hr.length; o++)
                                    Q(Hr[o], e);
                                o = r;
                                break;
                            case "source":
                                Q("error", e),
                                    o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Q("error", e),
                                    Q("load", e),
                                    o = r;
                                break;
                            case "details":
                                Q("toggle", e),
                                    o = r;
                                break;
                            case "input":
                                lc(e, r),
                                    o = ka(e, r),
                                    Q("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    o = ae({}, r, {
                                        value: void 0
                                    }),
                                    Q("invalid", e);
                                break;
                            case "textarea":
                                cc(e, r),
                                    o = ja(e, r),
                                    Q("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Ma(n, o),
                            a = o;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style" ? tp(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                                    l != null && Jf(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ao(e, l) : typeof l == "number" && ao(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (so.hasOwnProperty(i) ? l != null && i === "onScroll" && Q("scroll", e) : l != null && Ul(e, i, l, s))
                            }
                        switch (n) {
                            case "input":
                                Uo(e),
                                    uc(e, r, !1);
                                break;
                            case "textarea":
                                Uo(e),
                                    dc(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + on(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                    i = r.value,
                                    i != null ? lr(e, !!r.multiple, i, !1) : r.defaultValue != null && lr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Oi)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                    t.flags |= 2097152)
            }
            return Ce(t),
                null;
        case 6:
            if (e && t.stateNode != null)
                Eh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(A(166));
                if (n = Cn(xo.current),
                    Cn(yt.current),
                    qo(t)) {
                    if (r = t.stateNode,
                        n = t.memoizedProps,
                        r[gt] = t,
                        (i = r.nodeValue !== n) && (e = He,
                            e !== null))
                        switch (e.tag) {
                            case 3:
                                Xo(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Xo(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    i && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[gt] = t,
                        t.stateNode = r
            }
            return Ce(t),
                null;
        case 13:
            if (X(re),
                r = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (te && We !== null && t.mode & 1 && !(t.flags & 128))
                    Up(),
                        vr(),
                        t.flags |= 98560,
                        i = !1;
                else if (i = qo(t),
                    r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i)
                            throw Error(A(318));
                        if (i = t.memoizedState,
                            i = i !== null ? i.dehydrated : null,
                            !i)
                            throw Error(A(317));
                        i[gt] = t
                    } else
                        vr(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                    Ce(t),
                        i = !1
                } else
                    lt !== null && (fl(lt),
                        lt = null),
                        i = !0;
                if (!i)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
                t) : (r = r !== null,
                    r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
                        t.mode & 1 && (e === null || re.current & 1 ? me === 0 && (me = 3) : Eu())),
                    t.updateQueue !== null && (t.flags |= 4),
                    Ce(t),
                    null);
        case 4:
            return xr(),
                ol(e, t),
                e === null && mo(t.stateNode.containerInfo),
                Ce(t),
                null;
        case 10:
            return au(t.type._context),
                Ce(t),
                null;
        case 17:
            return Ve(t.type) && Di(),
                Ce(t),
                null;
        case 19:
            if (X(re),
                i = t.memoizedState,
                i === null)
                return Ce(t),
                    null;
            if (r = (t.flags & 128) !== 0,
                s = i.rendering,
                s === null)
                if (r)
                    Or(i, !1);
                else {
                    if (me !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Ui(e),
                                s !== null) {
                                for (t.flags |= 128,
                                    Or(i, !1),
                                    r = s.updateQueue,
                                    r !== null && (t.updateQueue = r,
                                        t.flags |= 4),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;)
                                    i = n,
                                        e = r,
                                        i.flags &= 14680066,
                                        s = i.alternate,
                                        s === null ? (i.childLanes = 0,
                                            i.lanes = e,
                                            i.child = null,
                                            i.subtreeFlags = 0,
                                            i.memoizedProps = null,
                                            i.memoizedState = null,
                                            i.updateQueue = null,
                                            i.dependencies = null,
                                            i.stateNode = null) : (i.childLanes = s.childLanes,
                                                i.lanes = s.lanes,
                                                i.child = s.child,
                                                i.subtreeFlags = 0,
                                                i.deletions = null,
                                                i.memoizedProps = s.memoizedProps,
                                                i.memoizedState = s.memoizedState,
                                                i.updateQueue = s.updateQueue,
                                                i.type = s.type,
                                                e = s.dependencies,
                                                i.dependencies = e === null ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }),
                                        n = n.sibling;
                                return K(re, re.current & 1 | 2),
                                    t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && de() > Sr && (t.flags |= 128,
                        r = !0,
                        Or(i, !1),
                        t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Ui(s),
                        e !== null) {
                        if (t.flags |= 128,
                            r = !0,
                            n = e.updateQueue,
                            n !== null && (t.updateQueue = n,
                                t.flags |= 4),
                            Or(i, !0),
                            i.tail === null && i.tailMode === "hidden" && !s.alternate && !te)
                            return Ce(t),
                                null
                    } else
                        2 * de() - i.renderingStartTime > Sr && n !== 1073741824 && (t.flags |= 128,
                            r = !0,
                            Or(i, !1),
                            t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child,
                    t.child = s) : (n = i.last,
                        n !== null ? n.sibling = s : t.child = s,
                        i.last = s)
            }
            return i.tail !== null ? (t = i.tail,
                i.rendering = t,
                i.tail = t.sibling,
                i.renderingStartTime = de(),
                t.sibling = null,
                n = re.current,
                K(re, r ? n & 1 | 2 : n & 1),
                t) : (Ce(t),
                    null);
        case 22:
        case 23:
            return Cu(),
                r = t.memoizedState !== null,
                e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
                r && t.mode & 1 ? Ue & 1073741824 && (Ce(t),
                    t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(A(156, t.tag))
}
function p0(e, t) {
    switch (ru(t),
    t.tag) {
        case 1:
            return Ve(t.type) && Di(),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 3:
            return xr(),
                X(_e),
                X(ke),
                fu(),
                e = t.flags,
                e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 5:
            return du(t),
                null;
        case 13:
            if (X(re),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(A(340));
                vr()
            }
            return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 19:
            return X(re),
                null;
        case 4:
            return xr(),
                null;
        case 10:
            return au(t.type._context),
                null;
        case 22:
        case 23:
            return Cu(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var ei = !1
    , Pe = !1
    , h0 = typeof WeakSet == "function" ? WeakSet : Set
    , j = null;
function nr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                le(e, t, r)
            }
        else
            n.current = null
}
function il(e, t, n) {
    try {
        n()
    } catch (r) {
        le(e, t, r)
    }
}
var ed = !1;
function m0(e, t) {
    if (Ua = Mi,
        e = jp(),
        tu(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                        , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                        , a = -1
                        , l = -1
                        , u = 0
                        , c = 0
                        , d = e
                        , f = null;
                    t: for (; ;) {
                        for (var h; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o),
                            d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r),
                            d.nodeType === 3 && (s += d.nodeValue.length),
                            (h = d.firstChild) !== null;)
                            f = d,
                                d = h;
                        for (; ;) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === o && (a = s),
                                f === i && ++c === r && (l = s),
                                (h = d.nextSibling) !== null)
                                break;
                            d = f,
                                f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for ($a = {
        focusedElem: e,
        selectionRange: n
    },
        Mi = !1,
        j = t; j !== null;)
        if (t = j,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
                j = e;
        else
            for (; j !== null;) {
                t = j;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (x !== null) {
                                    var y = x.memoizedProps
                                        , S = x.memoizedState
                                        , v = t.stateNode
                                        , p = v.getSnapshotBeforeUpdate(t.elementType === t.type ? y : st(t.type, y), S);
                                    v.__reactInternalSnapshotBeforeUpdate = p
                                }
                                break;
                            case 3:
                                var m = t.stateNode.containerInfo;
                                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(A(163))
                        }
                } catch (w) {
                    le(t, t.return, w)
                }
                if (e = t.sibling,
                    e !== null) {
                    e.return = t.return,
                        j = e;
                    break
                }
                j = t.return
            }
    return x = ed,
        ed = !1,
        x
}
function Jr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                    i !== void 0 && il(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function gs(e, t) {
    if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function sl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Ph(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
        Ph(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
            t !== null && (delete t[gt],
                delete t[vo],
                delete t[Ga],
                delete t[qy],
                delete t[Zy])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
}
function kh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function td(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || kh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
                e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function al(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                t.insertBefore(e, n)) : (t = n,
                    t.appendChild(e)),
                n = n._reactRootContainer,
                n != null || t.onclick !== null || (t.onclick = Oi));
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (al(e, t, n),
            e = e.sibling; e !== null;)
            al(e, t, n),
                e = e.sibling
}
function ll(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (ll(e, t, n),
            e = e.sibling; e !== null;)
            ll(e, t, n),
                e = e.sibling
}
var xe = null
    , at = !1;
function Vt(e, t, n) {
    for (n = n.child; n !== null;)
        Ah(e, t, n),
            n = n.sibling
}
function Ah(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
        try {
            vt.onCommitFiberUnmount(ls, n)
        } catch { }
    switch (n.tag) {
        case 5:
            Pe || nr(n, t);
        case 6:
            var r = xe
                , o = at;
            xe = null,
                Vt(e, t, n),
                xe = r,
                at = o,
                xe !== null && (at ? (e = xe,
                    n = n.stateNode,
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
            break;
        case 18:
            xe !== null && (at ? (e = xe,
                n = n.stateNode,
                e.nodeType === 8 ? Qs(e.parentNode, n) : e.nodeType === 1 && Qs(e, n),
                fo(e)) : Qs(xe, n.stateNode));
            break;
        case 4:
            r = xe,
                o = at,
                xe = n.stateNode.containerInfo,
                at = !0,
                Vt(e, t, n),
                xe = r,
                at = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Pe && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                o = r = r.next;
                do {
                    var i = o
                        , s = i.destroy;
                    i = i.tag,
                        s !== void 0 && (i & 2 || i & 4) && il(n, t, s),
                        o = o.next
                } while (o !== r)
            }
            Vt(e, t, n);
            break;
        case 1:
            if (!Pe && (nr(n, t),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (a) {
                    le(n, t, a)
                }
            Vt(e, t, n);
            break;
        case 21:
            Vt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Pe = (r = Pe) || n.memoizedState !== null,
                Vt(e, t, n),
                Pe = r) : Vt(e, t, n);
            break;
        default:
            Vt(e, t, n)
    }
}
function nd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new h0),
            t.forEach(function (r) {
                var o = E0.bind(null, e, r);
                n.has(r) || (n.add(r),
                    r.then(o, o))
            })
    }
}
function ot(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                    , s = t
                    , a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            xe = a.stateNode,
                                at = !1;
                            break e;
                        case 3:
                            xe = a.stateNode.containerInfo,
                                at = !0;
                            break e;
                        case 4:
                            xe = a.stateNode.containerInfo,
                                at = !0;
                            break e
                    }
                    a = a.return
                }
                if (xe === null)
                    throw Error(A(160));
                Ah(i, s, o),
                    xe = null,
                    at = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                    o.return = null
            } catch (u) {
                le(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            Nh(t, e),
                t = t.sibling
}
function Nh(e, t) {
    var n = e.alternate
        , r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ot(t, e),
                ht(e),
                r & 4) {
                try {
                    Jr(3, e, e.return),
                        gs(3, e)
                } catch (y) {
                    le(e, e.return, y)
                }
                try {
                    Jr(5, e, e.return)
                } catch (y) {
                    le(e, e.return, y)
                }
            }
            break;
        case 1:
            ot(t, e),
                ht(e),
                r & 512 && n !== null && nr(n, n.return);
            break;
        case 5:
            if (ot(t, e),
                ht(e),
                r & 512 && n !== null && nr(n, n.return),
                e.flags & 32) {
                var o = e.stateNode;
                try {
                    ao(o, "")
                } catch (y) {
                    le(e, e.return, y)
                }
            }
            if (r & 4 && (o = e.stateNode,
                o != null)) {
                var i = e.memoizedProps
                    , s = n !== null ? n.memoizedProps : i
                    , a = e.type
                    , l = e.updateQueue;
                if (e.updateQueue = null,
                    l !== null)
                    try {
                        a === "input" && i.type === "radio" && i.name != null && Xf(o, i),
                            La(a, s);
                        var u = La(a, i);
                        for (s = 0; s < l.length; s += 2) {
                            var c = l[s]
                                , d = l[s + 1];
                            c === "style" ? tp(o, d) : c === "dangerouslySetInnerHTML" ? Jf(o, d) : c === "children" ? ao(o, d) : Ul(o, c, d, u)
                        }
                        switch (a) {
                            case "input":
                                Aa(o, i);
                                break;
                            case "textarea":
                                qf(o, i);
                                break;
                            case "select":
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var h = i.value;
                                h != null ? lr(o, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? lr(o, !!i.multiple, i.defaultValue, !0) : lr(o, !!i.multiple, i.multiple ? [] : "", !1))
                        }
                        o[vo] = i
                    } catch (y) {
                        le(e, e.return, y)
                    }
            }
            break;
        case 6:
            if (ot(t, e),
                ht(e),
                r & 4) {
                if (e.stateNode === null)
                    throw Error(A(162));
                o = e.stateNode,
                    i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (y) {
                    le(e, e.return, y)
                }
            }
            break;
        case 3:
            if (ot(t, e),
                ht(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    fo(t.containerInfo)
                } catch (y) {
                    le(e, e.return, y)
                }
            break;
        case 4:
            ot(t, e),
                ht(e);
            break;
        case 13:
            ot(t, e),
                ht(e),
                o = e.child,
                o.flags & 8192 && (i = o.memoizedState !== null,
                    o.stateNode.isHidden = i,
                    !i || o.alternate !== null && o.alternate.memoizedState !== null || (Su = de())),
                r & 4 && nd(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null,
                e.mode & 1 ? (Pe = (u = Pe) || c,
                    ot(t, e),
                    Pe = u) : ot(t, e),
                ht(e),
                r & 8192) {
                if (u = e.memoizedState !== null,
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (j = e,
                        c = e.child; c !== null;) {
                        for (d = j = c; j !== null;) {
                            switch (f = j,
                            h = f.child,
                            f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Jr(4, f, f.return);
                                    break;
                                case 1:
                                    nr(f, f.return);
                                    var x = f.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = f,
                                            n = f.return;
                                        try {
                                            t = r,
                                                x.props = t.memoizedProps,
                                                x.state = t.memoizedState,
                                                x.componentWillUnmount()
                                        } catch (y) {
                                            le(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    nr(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        od(d);
                                        continue
                                    }
                            }
                            h !== null ? (h.return = f,
                                j = h) : od(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null,
                    d = e; ;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                o = d.stateNode,
                                    u ? (i = o.style,
                                        typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode,
                                            l = d.memoizedProps.style,
                                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                                            a.style.display = ep("display", s))
                            } catch (y) {
                                le(e, e.return, y)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null)
                            try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps
                            } catch (y) {
                                le(e, e.return, y)
                            }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d,
                            d = d.child;
                        continue
                    }
                    if (d === e)
                        break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e)
                            break e;
                        c === d && (c = null),
                            d = d.return
                    }
                    c === d && (c = null),
                        d.sibling.return = d.return,
                        d = d.sibling
                }
            }
            break;
        case 19:
            ot(t, e),
                ht(e),
                r & 4 && nd(e);
            break;
        case 21:
            break;
        default:
            ot(t, e),
                ht(e)
    }
}
function ht(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (kh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(A(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (ao(o, ""),
                        r.flags &= -33);
                    var i = td(e);
                    ll(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo
                        , a = td(e);
                    al(e, a, s);
                    break;
                default:
                    throw Error(A(161))
            }
        } catch (l) {
            le(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function g0(e, t, n) {
    j = e,
        jh(e)
}
function jh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null;) {
        var o = j
            , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || ei;
            if (!s) {
                var a = o.alternate
                    , l = a !== null && a.memoizedState !== null || Pe;
                a = ei;
                var u = Pe;
                if (ei = s,
                    (Pe = l) && !u)
                    for (j = o; j !== null;)
                        s = j,
                            l = s.child,
                            s.tag === 22 && s.memoizedState !== null ? id(o) : l !== null ? (l.return = s,
                                j = l) : id(o);
                for (; i !== null;)
                    j = i,
                        jh(i),
                        i = i.sibling;
                j = o,
                    ei = a,
                    Pe = u
            }
            rd(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
                j = i) : rd(e)
    }
}
function rd(e) {
    for (; j !== null;) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Pe || gs(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Pe)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var i = t.updateQueue;
                            i !== null && Bc(t, i, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (n = null,
                                    t.child !== null)
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                Bc(t, s, n)
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src)
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
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var d = c.dehydrated;
                                        d !== null && fo(d)
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
                            throw Error(A(163))
                    }
                Pe || t.flags & 512 && sl(t)
            } catch (f) {
                le(t, t.return, f)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling,
            n !== null) {
            n.return = t.return,
                j = n;
            break
        }
        j = t.return
    }
}
function od(e) {
    for (; j !== null;) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
                j = n;
            break
        }
        j = t.return
    }
}
function id(e) {
    for (; j !== null;) {
        var t = j;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        gs(4, t)
                    } catch (l) {
                        le(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            le(t, o, l)
                        }
                    }
                    var i = t.return;
                    try {
                        sl(t)
                    } catch (l) {
                        le(t, i, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        sl(t)
                    } catch (l) {
                        le(t, s, l)
                    }
            }
        } catch (l) {
            le(t, t.return, l)
        }
        if (t === e) {
            j = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
                j = a;
            break
        }
        j = t.return
    }
}
var v0 = Math.ceil
    , Hi = _t.ReactCurrentDispatcher
    , xu = _t.ReactCurrentOwner
    , tt = _t.ReactCurrentBatchConfig
    , $ = 0
    , ve = null
    , pe = null
    , we = 0
    , Ue = 0
    , rr = dn(0)
    , me = 0
    , Co = null
    , Ln = 0
    , vs = 0
    , wu = 0
    , eo = null
    , Oe = null
    , Su = 0
    , Sr = 1 / 0
    , Ct = null
    , Gi = !1
    , ul = null
    , Jt = null
    , ti = !1
    , Kt = null
    , Ki = 0
    , to = 0
    , cl = null
    , wi = -1
    , Si = 0;
function Re() {
    return $ & 6 ? de() : wi !== -1 ? wi : wi = de()
}
function en(e) {
    return e.mode & 1 ? $ & 2 && we !== 0 ? we & -we : e0.transition !== null ? (Si === 0 && (Si = pp()),
        Si) : (e = H,
            e !== 0 || (e = window.event,
                e = e === void 0 ? 16 : wp(e.type)),
            e) : 1
}
function dt(e, t, n, r) {
    if (50 < to)
        throw to = 0,
        cl = null,
        Error(A(185));
    Ro(e, n, r),
        (!($ & 2) || e !== ve) && (e === ve && (!($ & 2) && (vs |= n),
            me === 4 && Wt(e, we)),
            Ie(e, r),
            n === 1 && $ === 0 && !(t.mode & 1) && (Sr = de() + 500,
                ps && fn()))
}
function Ie(e, t) {
    var n = e.callbackNode;
    ey(e, t);
    var r = Ri(e, e === ve ? we : 0);
    if (r === 0)
        n !== null && hc(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
    else if (t = r & -r,
        e.callbackPriority !== t) {
        if (n != null && hc(n),
            t === 1)
            e.tag === 0 ? Jy(sd.bind(null, e)) : Fp(sd.bind(null, e)),
                Qy(function () {
                    !($ & 6) && fn()
                }),
                n = null;
        else {
            switch (hp(r)) {
                case 1:
                    n = Kl;
                    break;
                case 4:
                    n = dp;
                    break;
                case 16:
                    n = ji;
                    break;
                case 536870912:
                    n = fp;
                    break;
                default:
                    n = ji
            }
            n = Vh(n, Rh.bind(null, e))
        }
        e.callbackPriority = t,
            e.callbackNode = n
    }
}
function Rh(e, t) {
    if (wi = -1,
        Si = 0,
        $ & 6)
        throw Error(A(327));
    var n = e.callbackNode;
    if (pr() && e.callbackNode !== n)
        return null;
    var r = Ri(e, e === ve ? we : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Yi(e, r);
    else {
        t = r;
        var o = $;
        $ |= 2;
        var i = Lh();
        (ve !== e || we !== t) && (Ct = null,
            Sr = de() + 500,
            kn(e, t));
        do
            try {
                w0();
                break
            } catch (a) {
                Mh(e, a)
            }
        while (1);
        su(),
            Hi.current = i,
            $ = o,
            pe !== null ? t = 0 : (ve = null,
                we = 0,
                t = me)
    }
    if (t !== 0) {
        if (t === 2 && (o = Va(e),
            o !== 0 && (r = o,
                t = dl(e, o))),
            t === 1)
            throw n = Co,
            kn(e, 0),
            Wt(e, r),
            Ie(e, de()),
            n;
        if (t === 6)
            Wt(e, r);
        else {
            if (o = e.current.alternate,
                !(r & 30) && !y0(o) && (t = Yi(e, r),
                    t === 2 && (i = Va(e),
                        i !== 0 && (r = i,
                            t = dl(e, i))),
                    t === 1))
                throw n = Co,
                kn(e, 0),
                Wt(e, r),
                Ie(e, de()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
                case 0:
                case 1:
                    throw Error(A(345));
                case 2:
                    yn(e, Oe, Ct);
                    break;
                case 3:
                    if (Wt(e, r),
                        (r & 130023424) === r && (t = Su + 500 - de(),
                            10 < t)) {
                        if (Ri(e, 0) !== 0)
                            break;
                        if (o = e.suspendedLanes,
                            (o & r) !== r) {
                            Re(),
                                e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Ha(yn.bind(null, e, Oe, Ct), t);
                        break
                    }
                    yn(e, Oe, Ct);
                    break;
                case 4:
                    if (Wt(e, r),
                        (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                        o = -1; 0 < r;) {
                        var s = 31 - ct(r);
                        i = 1 << s,
                            s = t[s],
                            s > o && (o = s),
                            r &= ~i
                    }
                    if (r = o,
                        r = de() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * v0(r / 1960)) - r,
                        10 < r) {
                        e.timeoutHandle = Ha(yn.bind(null, e, Oe, Ct), r);
                        break
                    }
                    yn(e, Oe, Ct);
                    break;
                case 5:
                    yn(e, Oe, Ct);
                    break;
                default:
                    throw Error(A(329))
            }
        }
    }
    return Ie(e, de()),
        e.callbackNode === n ? Rh.bind(null, e) : null
}
function dl(e, t) {
    var n = eo;
    return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
        e = Yi(e, t),
        e !== 2 && (t = Oe,
            Oe = n,
            t !== null && fl(t)),
        e
}
function fl(e) {
    Oe === null ? Oe = e : Oe.push.apply(Oe, e)
}
function y0(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                        , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!ft(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
            n.return = t,
                t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
    }
    return !0
}
function Wt(e, t) {
    for (t &= ~wu,
        t &= ~vs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;) {
        var n = 31 - ct(t)
            , r = 1 << n;
        e[n] = -1,
            t &= ~r
    }
}
function sd(e) {
    if ($ & 6)
        throw Error(A(327));
    pr();
    var t = Ri(e, 0);
    if (!(t & 1))
        return Ie(e, de()),
            null;
    var n = Yi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Va(e);
        r !== 0 && (t = r,
            n = dl(e, r))
    }
    if (n === 1)
        throw n = Co,
        kn(e, 0),
        Wt(e, t),
        Ie(e, de()),
        n;
    if (n === 6)
        throw Error(A(345));
    return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        yn(e, Oe, Ct),
        Ie(e, de()),
        null
}
function Tu(e, t) {
    var n = $;
    $ |= 1;
    try {
        return e(t)
    } finally {
        $ = n,
            $ === 0 && (Sr = de() + 500,
                ps && fn())
    }
}
function bn(e) {
    Kt !== null && Kt.tag === 0 && !($ & 6) && pr();
    var t = $;
    $ |= 1;
    var n = tt.transition
        , r = H;
    try {
        if (tt.transition = null,
            H = 1,
            e)
            return e()
    } finally {
        H = r,
            tt.transition = n,
            $ = t,
            !($ & 6) && fn()
    }
}
function Cu() {
    Ue = rr.current,
        X(rr)
}
function kn(e, t) {
    e.finishedWork = null,
        e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
        Yy(n)),
        pe !== null)
        for (n = pe.return; n !== null;) {
            var r = n;
            switch (ru(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && Di();
                    break;
                case 3:
                    xr(),
                        X(_e),
                        X(ke),
                        fu();
                    break;
                case 5:
                    du(r);
                    break;
                case 4:
                    xr();
                    break;
                case 13:
                    X(re);
                    break;
                case 19:
                    X(re);
                    break;
                case 10:
                    au(r.type._context);
                    break;
                case 22:
                case 23:
                    Cu()
            }
            n = n.return
        }
    if (ve = e,
        pe = e = tn(e.current, null),
        we = Ue = t,
        me = 0,
        Co = null,
        wu = vs = Ln = 0,
        Oe = eo = null,
        Tn !== null) {
        for (t = 0; t < Tn.length; t++)
            if (n = Tn[t],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var o = r.next
                    , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                        r.next = s
                }
                n.pending = r
            }
        Tn = null
    }
    return e
}
function Mh(e, t) {
    do {
        var n = pe;
        try {
            if (su(),
                vi.current = Wi,
                $i) {
                for (var r = se.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                        r = r.next
                }
                $i = !1
            }
            if (Mn = 0,
                ge = he = se = null,
                Zr = !1,
                wo = 0,
                xu.current = null,
                n === null || n.return === null) {
                me = 1,
                    Co = t,
                    pe = null;
                break
            }
            e: {
                var i = e
                    , s = n.return
                    , a = n
                    , l = t;
                if (t = we,
                    a.flags |= 32768,
                    l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                        , c = a
                        , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                            c.memoizedState = f.memoizedState,
                            c.lanes = f.lanes) : (c.updateQueue = null,
                                c.memoizedState = null)
                    }
                    var h = Kc(s);
                    if (h !== null) {
                        h.flags &= -257,
                            Yc(h, s, a, i, t),
                            h.mode & 1 && Gc(i, u, t),
                            t = h,
                            l = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var y = new Set;
                            y.add(l),
                                t.updateQueue = y
                        } else
                            x.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Gc(i, u, t),
                                Eu();
                            break e
                        }
                        l = Error(A(426))
                    }
                } else if (te && a.mode & 1) {
                    var S = Kc(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                            Yc(S, s, a, i, t),
                            ou(wr(l, a));
                        break e
                    }
                }
                i = l = wr(l, a),
                    me !== 4 && (me = 2),
                    eo === null ? eo = [i] : eo.push(i),
                    i = s;
                do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536,
                                t &= -t,
                                i.lanes |= t;
                            var v = hh(i, l, t);
                            zc(i, v);
                            break e;
                        case 1:
                            a = l;
                            var p = i.type
                                , m = i.stateNode;
                            if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Jt === null || !Jt.has(m)))) {
                                i.flags |= 65536,
                                    t &= -t,
                                    i.lanes |= t;
                                var w = mh(i, a, t);
                                zc(i, w);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Oh(n)
        } catch (C) {
            t = C,
                pe === n && n !== null && (pe = n = n.return);
            continue
        }
        break
    } while (1)
}
function Lh() {
    var e = Hi.current;
    return Hi.current = Wi,
        e === null ? Wi : e
}
function Eu() {
    (me === 0 || me === 3 || me === 2) && (me = 4),
        ve === null || !(Ln & 268435455) && !(vs & 268435455) || Wt(ve, we)
}
function Yi(e, t) {
    var n = $;
    $ |= 2;
    var r = Lh();
    (ve !== e || we !== t) && (Ct = null,
        kn(e, t));
    do
        try {
            x0();
            break
        } catch (o) {
            Mh(e, o)
        }
    while (1);
    if (su(),
        $ = n,
        Hi.current = r,
        pe !== null)
        throw Error(A(261));
    return ve = null,
        we = 0,
        me
}
function x0() {
    for (; pe !== null;)
        bh(pe)
}
function w0() {
    for (; pe !== null && !Hv();)
        bh(pe)
}
function bh(e) {
    var t = _h(e.alternate, e, Ue);
    e.memoizedProps = e.pendingProps,
        t === null ? Oh(e) : pe = t,
        xu.current = null
}
function Oh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
            t.flags & 32768) {
            if (n = p0(n, t),
                n !== null) {
                n.flags &= 32767,
                    pe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
            else {
                me = 6,
                    pe = null;
                return
            }
        } else if (n = f0(n, t, Ue),
            n !== null) {
            pe = n;
            return
        }
        if (t = t.sibling,
            t !== null) {
            pe = t;
            return
        }
        pe = t = e
    } while (t !== null);
    me === 0 && (me = 5)
}
function yn(e, t, n) {
    var r = H
        , o = tt.transition;
    try {
        tt.transition = null,
            H = 1,
            S0(e, t, n, r)
    } finally {
        tt.transition = o,
            H = r
    }
    return null
}
function S0(e, t, n, r) {
    do
        pr();
    while (Kt !== null);
    if ($ & 6)
        throw Error(A(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
        throw Error(A(177));
    e.callbackNode = null,
        e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (ty(e, i),
        e === ve && (pe = ve = null,
            we = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ti || (ti = !0,
            Vh(ji, function () {
                return pr(),
                    null
            })),
        i = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || i) {
        i = tt.transition,
            tt.transition = null;
        var s = H;
        H = 1;
        var a = $;
        $ |= 4,
            xu.current = null,
            m0(e, n),
            Nh(n, e),
            By($a),
            Mi = !!Ua,
            $a = Ua = null,
            e.current = n,
            g0(n),
            Gv(),
            $ = a,
            H = s,
            tt.transition = i
    } else
        e.current = n;
    if (ti && (ti = !1,
        Kt = e,
        Ki = o),
        i = e.pendingLanes,
        i === 0 && (Jt = null),
        Qv(n.stateNode),
        Ie(e, de()),
        t !== null)
        for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
            o = t[n],
                r(o.value, {
                    componentStack: o.stack,
                    digest: o.digest
                });
    if (Gi)
        throw Gi = !1,
        e = ul,
        ul = null,
        e;
    return Ki & 1 && e.tag !== 0 && pr(),
        i = e.pendingLanes,
        i & 1 ? e === cl ? to++ : (to = 0,
            cl = e) : to = 0,
        fn(),
        null
}
function pr() {
    if (Kt !== null) {
        var e = hp(Ki)
            , t = tt.transition
            , n = H;
        try {
            if (tt.transition = null,
                H = 16 > e ? 16 : e,
                Kt === null)
                var r = !1;
            else {
                if (e = Kt,
                    Kt = null,
                    Ki = 0,
                    $ & 6)
                    throw Error(A(331));
                var o = $;
                for ($ |= 4,
                    j = e.current; j !== null;) {
                    var i = j
                        , s = i.child;
                    if (j.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (j = u; j !== null;) {
                                    var c = j;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Jr(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                            j = d;
                                    else
                                        for (; j !== null;) {
                                            c = j;
                                            var f = c.sibling
                                                , h = c.return;
                                            if (Ph(c),
                                                c === u) {
                                                j = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                    j = f;
                                                break
                                            }
                                            j = h
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var y = x.child;
                                if (y !== null) {
                                    x.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null,
                                            y = S
                                    } while (y !== null)
                                }
                            }
                            j = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                            j = s;
                    else
                        e: for (; j !== null;) {
                            if (i = j,
                                i.flags & 2048)
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Jr(9, i, i.return)
                                }
                            var v = i.sibling;
                            if (v !== null) {
                                v.return = i.return,
                                    j = v;
                                break e
                            }
                            j = i.return
                        }
                }
                var p = e.current;
                for (j = p; j !== null;) {
                    s = j;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                            j = m;
                    else
                        e: for (s = p; j !== null;) {
                            if (a = j,
                                a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            gs(9, a)
                                    }
                                } catch (C) {
                                    le(a, a.return, C)
                                }
                            if (a === s) {
                                j = null;
                                break e
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                w.return = a.return,
                                    j = w;
                                break e
                            }
                            j = a.return
                        }
                }
                if ($ = o,
                    fn(),
                    vt && typeof vt.onPostCommitFiberRoot == "function")
                    try {
                        vt.onPostCommitFiberRoot(ls, e)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            H = n,
                tt.transition = t
        }
    }
    return !1
}
function ad(e, t, n) {
    t = wr(n, t),
        t = hh(e, t, 1),
        e = Zt(e, t, 1),
        t = Re(),
        e !== null && (Ro(e, 1, t),
            Ie(e, t))
}
function le(e, t, n) {
    if (e.tag === 3)
        ad(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                ad(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jt === null || !Jt.has(r))) {
                    e = wr(n, e),
                        e = mh(t, e, 1),
                        t = Zt(t, e, 1),
                        e = Re(),
                        t !== null && (Ro(t, 1, e),
                            Ie(t, e));
                    break
                }
            }
            t = t.return
        }
}
function T0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        t = Re(),
        e.pingedLanes |= e.suspendedLanes & n,
        ve === e && (we & n) === n && (me === 4 || me === 3 && (we & 130023424) === we && 500 > de() - Su ? kn(e, 0) : wu |= n),
        Ie(e, t)
}
function Dh(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ho,
        Ho <<= 1,
        !(Ho & 130023424) && (Ho = 4194304)) : t = 1);
    var n = Re();
    e = bt(e, t),
        e !== null && (Ro(e, t, n),
            Ie(e, n))
}
function C0(e) {
    var t = e.memoizedState
        , n = 0;
    t !== null && (n = t.retryLane),
        Dh(e, n)
}
function E0(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode
                , o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(A(314))
    }
    r !== null && r.delete(t),
        Dh(e, n)
}
var _h;
_h = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || _e.current)
            De = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return De = !1,
                    d0(e, t, n);
            De = !!(e.flags & 131072)
        }
    else
        De = !1,
            te && t.flags & 1048576 && zp(t, Ii, t.index);
    switch (t.lanes = 0,
    t.tag) {
        case 2:
            var r = t.type;
            xi(e, t),
                e = t.pendingProps;
            var o = gr(t, ke.current);
            fr(t, n),
                o = hu(null, t, r, e, o, n);
            var i = mu();
            return t.flags |= 1,
                typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    Ve(r) ? (i = !0,
                        _i(t)) : i = !1,
                    t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
                    uu(t),
                    o.updater = ms,
                    t.stateNode = o,
                    o._reactInternals = t,
                    Za(t, r, e, n),
                    t = tl(null, t, r, !0, i, n)) : (t.tag = 0,
                        te && i && nu(t),
                        je(null, t, o, n),
                        t = t.child),
                t;
        case 16:
            r = t.elementType;
            e: {
                switch (xi(e, t),
                e = t.pendingProps,
                o = r._init,
                r = o(r._payload),
                t.type = r,
                o = t.tag = k0(r),
                e = st(r, e),
                o) {
                    case 0:
                        t = el(null, t, r, e, n);
                        break e;
                    case 1:
                        t = qc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Qc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Xc(null, t, r, st(r.type, e), n);
                        break e
                }
                throw Error(A(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : st(r, o),
                el(e, t, r, o, n);
        case 1:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : st(r, o),
                qc(e, t, r, o, n);
        case 3:
            e: {
                if (xh(t),
                    e === null)
                    throw Error(A(387));
                r = t.pendingProps,
                    i = t.memoizedState,
                    o = i.element,
                    Gp(e, t),
                    Bi(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element,
                    i.isDehydrated)
                    if (i = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache,
                        pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                        transitions: s.transitions
                    },
                        t.updateQueue.baseState = i,
                        t.memoizedState = i,
                        t.flags & 256) {
                        o = wr(Error(A(423)), t),
                            t = Zc(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                        o = wr(Error(A(424)), t),
                            t = Zc(e, t, r, n, o);
                        break e
                    } else
                        for (We = qt(t.stateNode.containerInfo.firstChild),
                            He = t,
                            te = !0,
                            lt = null,
                            n = Wp(t, null, r, n),
                            t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (vr(),
                        r === o) {
                        t = Ot(e, t, n);
                        break e
                    }
                    je(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Kp(t),
                e === null && Qa(t),
                r = t.type,
                o = t.pendingProps,
                i = e !== null ? e.memoizedProps : null,
                s = o.children,
                Wa(r, o) ? s = null : i !== null && Wa(r, i) && (t.flags |= 32),
                yh(e, t),
                je(e, t, s, n),
                t.child;
        case 6:
            return e === null && Qa(t),
                null;
        case 13:
            return wh(e, t, n);
        case 4:
            return cu(t, t.stateNode.containerInfo),
                r = t.pendingProps,
                e === null ? t.child = yr(t, null, r, n) : je(e, t, r, n),
                t.child;
        case 11:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : st(r, o),
                Qc(e, t, r, o, n);
        case 7:
            return je(e, t, t.pendingProps, n),
                t.child;
        case 8:
            return je(e, t, t.pendingProps.children, n),
                t.child;
        case 12:
            return je(e, t, t.pendingProps.children, n),
                t.child;
        case 10:
            e: {
                if (r = t.type._context,
                    o = t.pendingProps,
                    i = t.memoizedProps,
                    s = o.value,
                    K(Fi, r._currentValue),
                    r._currentValue = s,
                    i !== null)
                    if (ft(i.value, s)) {
                        if (i.children === o.children && !_e.current) {
                            t = Ot(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child,
                            i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            l = Nt(-1, n & -n),
                                                l.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next,
                                                    c.next = l),
                                                    u.pending = l
                                            }
                                        }
                                        i.lanes |= n,
                                            l = i.alternate,
                                            l !== null && (l.lanes |= n),
                                            Xa(i.return, n, t),
                                            a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (i.tag === 10)
                                s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return,
                                    s === null)
                                    throw Error(A(341));
                                s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    Xa(s, n, t),
                                    s = i.sibling
                            } else
                                s = i.child;
                            if (s !== null)
                                s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling,
                                        i !== null) {
                                        i.return = s.return,
                                            s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                je(e, t, o.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return o = t.type,
                r = t.pendingProps.children,
                fr(t, n),
                o = nt(o),
                r = r(o),
                t.flags |= 1,
                je(e, t, r, n),
                t.child;
        case 14:
            return r = t.type,
                o = st(r, t.pendingProps),
                o = st(r.type, o),
                Xc(e, t, r, o, n);
        case 15:
            return gh(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : st(r, o),
                xi(e, t),
                t.tag = 1,
                Ve(r) ? (e = !0,
                    _i(t)) : e = !1,
                fr(t, n),
                ph(t, r, o),
                Za(t, r, o, n),
                tl(null, t, r, !0, e, n);
        case 19:
            return Sh(e, t, n);
        case 22:
            return vh(e, t, n)
    }
    throw Error(A(156, t.tag))
}
    ;
function Vh(e, t) {
    return cp(e, t)
}
function P0(e, t, n, r) {
    this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function et(e, t, n, r) {
    return new P0(e, t, n, r)
}
function Pu(e) {
    return e = e.prototype,
        !(!e || !e.isReactComponent)
}
function k0(e) {
    if (typeof e == "function")
        return Pu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
            e === Wl)
            return 11;
        if (e === Hl)
            return 14
    }
    return 2
}
function tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = et(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
}
function Ti(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
        typeof e == "function")
        Pu(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
            case Kn:
                return An(n.children, o, i, t);
            case $l:
                s = 8,
                    o |= 8;
                break;
            case Ta:
                return e = et(12, n, t, o | 2),
                    e.elementType = Ta,
                    e.lanes = i,
                    e;
            case Ca:
                return e = et(13, n, t, o),
                    e.elementType = Ca,
                    e.lanes = i,
                    e;
            case Ea:
                return e = et(19, n, t, o),
                    e.elementType = Ea,
                    e.lanes = i,
                    e;
            case Kf:
                return ys(n, o, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Hf:
                            s = 10;
                            break e;
                        case Gf:
                            s = 9;
                            break e;
                        case Wl:
                            s = 11;
                            break e;
                        case Hl:
                            s = 14;
                            break e;
                        case zt:
                            s = 16,
                                r = null;
                            break e
                    }
                throw Error(A(130, e == null ? e : typeof e, ""))
        }
    return t = et(s, n, t, o),
        t.elementType = e,
        t.type = r,
        t.lanes = i,
        t
}
function An(e, t, n, r) {
    return e = et(7, e, r, t),
        e.lanes = n,
        e
}
function ys(e, t, n, r) {
    return e = et(22, e, r, t),
        e.elementType = Kf,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
}
function ra(e, t, n) {
    return e = et(6, e, null, t),
        e.lanes = n,
        e
}
function oa(e, t, n) {
    return t = et(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
}
function A0(e, t, n, r, o) {
    this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Is(0),
        this.expirationTimes = Is(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Is(0),
        this.identifierPrefix = r,
        this.onRecoverableError = o,
        this.mutableSourceEagerHydrationData = null
}
function ku(e, t, n, r, o, i, s, a, l) {
    return e = new A0(e, t, n, a, l),
        t === 1 ? (t = 1,
            i === !0 && (t |= 8)) : t = 0,
        i = et(3, null, null, t),
        e.current = i,
        i.stateNode = e,
        i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        uu(i),
        e
}
function N0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Gn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Ih(e) {
    if (!e)
        return sn;
    e = e._reactInternals;
    e: {
        if (Vn(e) !== e || e.tag !== 1)
            throw Error(A(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ve(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(A(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ve(n))
            return Ip(e, n, t)
    }
    return t
}
function Fh(e, t, n, r, o, i, s, a, l) {
    return e = ku(n, r, !0, e, o, i, s, a, l),
        e.context = Ih(null),
        n = e.current,
        r = Re(),
        o = en(n),
        i = Nt(r, o),
        i.callback = t ?? null,
        Zt(n, i, o),
        e.current.lanes = o,
        Ro(e, o, r),
        Ie(e, r),
        e
}
function xs(e, t, n, r) {
    var o = t.current
        , i = Re()
        , s = en(o);
    return n = Ih(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = Nt(i, s),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = Zt(o, t, s),
        e !== null && (dt(e, o, s, i),
            gi(e, o, s)),
        s
}
function Qi(e) {
    if (e = e.current,
        !e.child)
        return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}
function ld(e, t) {
    if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Au(e, t) {
    ld(e, t),
        (e = e.alternate) && ld(e, t)
}
function j0() {
    return null
}
var zh = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
}
    ;
function Nu(e) {
    this._internalRoot = e
}
ws.prototype.render = Nu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(A(409));
    xs(e, t, null, null)
}
    ;
ws.prototype.unmount = Nu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        bn(function () {
            xs(null, e, null, null)
        }),
            t[Lt] = null
    }
}
    ;
function ws(e) {
    this._internalRoot = e
}
ws.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = vp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < $t.length && t !== 0 && t < $t[n].priority; n++)
            ;
        $t.splice(n, 0, e),
            n === 0 && xp(e)
    }
}
    ;
function ju(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ss(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function ud() { }
function R0(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = Qi(s);
                i.call(u)
            }
        }
        var s = Fh(t, r, e, 0, null, !1, !1, "", ud);
        return e._reactRootContainer = s,
            e[Lt] = s.current,
            mo(e.nodeType === 8 ? e.parentNode : e),
            bn(),
            s
    }
    for (; o = e.lastChild;)
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = Qi(l);
            a.call(u)
        }
    }
    var l = ku(e, 0, !1, null, null, !1, !1, "", ud);
    return e._reactRootContainer = l,
        e[Lt] = l.current,
        mo(e.nodeType === 8 ? e.parentNode : e),
        bn(function () {
            xs(t, l, n, r)
        }),
        l
}
function Ts(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function () {
                var l = Qi(s);
                a.call(l)
            }
        }
        xs(t, s, e, o)
    } else
        s = R0(n, t, e, o, r);
    return Qi(s)
}
mp = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Wr(t.pendingLanes);
                n !== 0 && (Yl(t, n | 1),
                    Ie(t, de()),
                    !($ & 6) && (Sr = de() + 500,
                        fn()))
            }
            break;
        case 13:
            bn(function () {
                var r = bt(e, 1);
                if (r !== null) {
                    var o = Re();
                    dt(r, e, 1, o)
                }
            }),
                Au(e, 1)
    }
}
    ;
Ql = function (e) {
    if (e.tag === 13) {
        var t = bt(e, 134217728);
        if (t !== null) {
            var n = Re();
            dt(t, e, 134217728, n)
        }
        Au(e, 134217728)
    }
}
    ;
gp = function (e) {
    if (e.tag === 13) {
        var t = en(e)
            , n = bt(e, t);
        if (n !== null) {
            var r = Re();
            dt(n, e, t, r)
        }
        Au(e, t)
    }
}
    ;
vp = function () {
    return H
}
    ;
yp = function (e, t) {
    var n = H;
    try {
        return H = e,
            t()
    } finally {
        H = n
    }
}
    ;
Oa = function (e, t, n) {
    switch (t) {
        case "input":
            if (Aa(e, n),
                t = n.name,
                n.type === "radio" && t != null) {
                for (n = e; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = fs(r);
                        if (!o)
                            throw Error(A(90));
                        Qf(r),
                            Aa(r, o)
                    }
                }
            }
            break;
        case "textarea":
            qf(e, n);
            break;
        case "select":
            t = n.value,
                t != null && lr(e, !!n.multiple, t, !1)
    }
}
    ;
op = Tu;
ip = bn;
var M0 = {
    usingClientEntryPoint: !1,
    Events: [Lo, qn, fs, np, rp, Tu]
}
    , Dr = {
        findFiberByHostInstance: Sn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
    , L0 = {
        bundleType: Dr.bundleType,
        version: Dr.version,
        rendererPackageName: Dr.rendererPackageName,
        rendererConfig: Dr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: _t.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = lp(e),
                e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Dr.findFiberByHostInstance || j0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ni.isDisabled && ni.supportsFiber)
        try {
            ls = ni.inject(L0),
                vt = ni
        } catch { }
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M0;
Ye.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ju(t))
        throw Error(A(200));
    return N0(e, t, null, n)
}
    ;
Ye.createRoot = function (e, t) {
    if (!ju(e))
        throw Error(A(299));
    var n = !1
        , r = ""
        , o = zh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        t = ku(e, 1, !1, null, null, n, !1, r, o),
        e[Lt] = t.current,
        mo(e.nodeType === 8 ? e.parentNode : e),
        new Nu(t)
}
    ;
Ye.findDOMNode = function (e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","),
            Error(A(268, e)));
    return e = lp(t),
        e = e === null ? null : e.stateNode,
        e
}
    ;
Ye.flushSync = function (e) {
    return bn(e)
}
    ;
Ye.hydrate = function (e, t, n) {
    if (!Ss(t))
        throw Error(A(200));
    return Ts(null, e, t, !0, n)
}
    ;
Ye.hydrateRoot = function (e, t, n) {
    if (!ju(e))
        throw Error(A(405));
    var r = n != null && n.hydratedSources || null
        , o = !1
        , i = ""
        , s = zh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        t = Fh(t, null, e, 1, n ?? null, o, !1, i, s),
        e[Lt] = t.current,
        mo(e),
        r)
        for (e = 0; e < r.length; e++)
            n = r[e],
                o = n._getVersion,
                o = o(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new ws(t)
}
    ;
Ye.render = function (e, t, n) {
    if (!Ss(t))
        throw Error(A(200));
    return Ts(null, e, t, !1, n)
}
    ;
Ye.unmountComponentAtNode = function (e) {
    if (!Ss(e))
        throw Error(A(40));
    return e._reactRootContainer ? (bn(function () {
        Ts(null, null, e, !1, function () {
            e._reactRootContainer = null,
                e[Lt] = null
        })
    }),
        !0) : !1
}
    ;
Ye.unstable_batchedUpdates = Tu;
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ss(n))
        throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(A(38));
    return Ts(e, t, n, !1, r)
}
    ;
Ye.version = "18.3.1-next-f1338f8080-20240426";
function Bh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bh)
        } catch (e) {
            console.error(e)
        }
}
Bh(),
    Bf.exports = Ye;
var Cs = Bf.exports;
const b0 = Er(Cs);
var cd = Cs;
wa.createRoot = cd.createRoot,
    wa.hydrateRoot = cd.hydrateRoot;
var Uh = {
    exports: {}
}
    , O0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    , D0 = O0
    , _0 = D0;
function $h() { }
function Wh() { }
Wh.resetWarningCache = $h;
var V0 = function () {
    function e(r, o, i, s, a, l) {
        if (l !== _0) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Wh,
        resetWarningCache: $h
    };
    return n.PropTypes = n,
        n
};
Uh.exports = V0();
var I0 = Uh.exports;
const J = Er(I0);
function F0(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e
}
var Hh = T
    , z0 = F0(Hh);
function dd(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
}
function B0(e, t) {
    e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e.__proto__ = t
}
var U0 = !!(typeof window < "u" && window.document && window.document.createElement);
function $0(e, t, n) {
    if (typeof e != "function")
        throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
        throw new Error("Expected handleStateChangeOnClient to be a function.");
    if (typeof n < "u" && typeof n != "function")
        throw new Error("Expected mapStateOnServer to either be undefined or a function.");
    function r(o) {
        return o.displayName || o.name || "Component"
    }
    return function (i) {
        if (typeof i != "function")
            throw new Error("Expected WrappedComponent to be a React component.");
        var s = [], a;
        function l() {
            a = e(s.map(function (c) {
                return c.props
            })),
                u.canUseDOM ? t(a) : n && (a = n(a))
        }
        var u = function (c) {
            B0(d, c);
            function d() {
                return c.apply(this, arguments) || this
            }
            d.peek = function () {
                return a
            }
                ,
                d.rewind = function () {
                    if (d.canUseDOM)
                        throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                    var x = a;
                    return a = void 0,
                        s = [],
                        x
                }
                ;
            var f = d.prototype;
            return f.UNSAFE_componentWillMount = function () {
                s.push(this),
                    l()
            }
                ,
                f.componentDidUpdate = function () {
                    l()
                }
                ,
                f.componentWillUnmount = function () {
                    var x = s.indexOf(this);
                    s.splice(x, 1),
                        l()
                }
                ,
                f.render = function () {
                    return z0.createElement(i, this.props)
                }
                ,
                d
        }(Hh.PureComponent);
        return dd(u, "displayName", "SideEffect(" + r(i) + ")"),
            dd(u, "canUseDOM", U0),
            u
    }
}
var W0 = $0;
const H0 = Er(W0);
var G0 = typeof Element < "u"
    , K0 = typeof Map == "function"
    , Y0 = typeof Set == "function"
    , Q0 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ci(e, t) {
    if (e === t)
        return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor)
            return !1;
        var n, r, o;
        if (Array.isArray(e)) {
            if (n = e.length,
                n != t.length)
                return !1;
            for (r = n; r-- !== 0;)
                if (!Ci(e[r], t[r]))
                    return !1;
            return !0
        }
        var i;
        if (K0 && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0]))
                    return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!Ci(r.value[1], t.get(r.value[0])))
                    return !1;
            return !0
        }
        if (Y0 && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0]))
                    return !1;
            return !0
        }
        if (Q0 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length,
                n != t.length)
                return !1;
            for (r = n; r-- !== 0;)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
            return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
            return e.toString() === t.toString();
        if (o = Object.keys(e),
            n = o.length,
            n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, o[r]))
                return !1;
        if (G0 && e instanceof Element)
            return !1;
        for (r = n; r-- !== 0;)
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Ci(e[o[r]], t[o[r]]))
                return !1;
        return !0
    }
    return e !== e && t !== t
}
var X0 = function (t, n) {
    try {
        return Ci(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"),
                !1;
        throw r
    }
};
const q0 = Er(X0);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var fd = Object.getOwnPropertySymbols
    , Z0 = Object.prototype.hasOwnProperty
    , J0 = Object.prototype.propertyIsEnumerable;
function ex(e) {
    if (e == null)
        throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}
function tx() {
    try {
        if (!Object.assign)
            return !1;
        var e = new String("abc");
        if (e[5] = "de",
            Object.getOwnPropertyNames(e)[0] === "5")
            return !1;
        for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function (i) {
            return t[i]
        });
        if (r.join("") !== "0123456789")
            return !1;
        var o = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (i) {
            o[i] = i
        }),
            Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}
var nx = tx() ? Object.assign : function (e, t) {
    for (var n, r = ex(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var s in n)
            Z0.call(n, s) && (r[s] = n[s]);
        if (fd) {
            o = fd(n);
            for (var a = 0; a < o.length; a++)
                J0.call(n, o[a]) && (r[o[a]] = n[o[a]])
        }
    }
    return r
}
    ;
const rx = Er(nx);
var Nn = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
}
    , I = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title"
    };
Object.keys(I).map(function (e) {
    return I[e]
});
var ee = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
}
    , Xi = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    }
    , Eo = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate"
    }
    , ox = Object.keys(Xi).reduce(function (e, t) {
        return e[Xi[t]] = t,
            e
    }, {})
    , ix = [I.NOSCRIPT, I.SCRIPT, I.STYLE]
    , ut = "data-react-helmet"
    , sx = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e
    }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
    , ax = function (e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    , lx = function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n),
                r && e(t, r),
                t
        }
    }()
    , be = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , ux = function (e, t) {
        if (typeof t != "function" && t !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    , pd = function (e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    , cx = function (e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && (typeof t == "object" || typeof t == "function") ? t : e
    }
    , pl = function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        return n === !1 ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }
    , dx = function (t) {
        var n = hr(t, I.TITLE)
            , r = hr(t, Eo.TITLE_TEMPLATE);
        if (r && n)
            return r.replace(/%s/g, function () {
                return Array.isArray(n) ? n.join("") : n
            });
        var o = hr(t, Eo.DEFAULT_TITLE);
        return n || o || void 0
    }
    , fx = function (t) {
        return hr(t, Eo.ON_CHANGE_CLIENT_STATE) || function () { }
    }
    , ia = function (t, n) {
        return n.filter(function (r) {
            return typeof r[t] < "u"
        }).map(function (r) {
            return r[t]
        }).reduce(function (r, o) {
            return be({}, r, o)
        }, {})
    }
    , px = function (t, n) {
        return n.filter(function (r) {
            return typeof r[I.BASE] < "u"
        }).map(function (r) {
            return r[I.BASE]
        }).reverse().reduce(function (r, o) {
            if (!r.length)
                for (var i = Object.keys(o), s = 0; s < i.length; s++) {
                    var a = i[s]
                        , l = a.toLowerCase();
                    if (t.indexOf(l) !== -1 && o[l])
                        return r.concat(o)
                }
            return r
        }, [])
    }
    , _r = function (t, n, r) {
        var o = {};
        return r.filter(function (i) {
            return Array.isArray(i[t]) ? !0 : (typeof i[t] < "u" && vx("Helmet: " + t + ' should be of type "Array". Instead found type "' + sx(i[t]) + '"'),
                !1)
        }).map(function (i) {
            return i[t]
        }).reverse().reduce(function (i, s) {
            var a = {};
            s.filter(function (f) {
                for (var h = void 0, x = Object.keys(f), y = 0; y < x.length; y++) {
                    var S = x[y]
                        , v = S.toLowerCase();
                    n.indexOf(v) !== -1 && !(h === ee.REL && f[h].toLowerCase() === "canonical") && !(v === ee.REL && f[v].toLowerCase() === "stylesheet") && (h = v),
                        n.indexOf(S) !== -1 && (S === ee.INNER_HTML || S === ee.CSS_TEXT || S === ee.ITEM_PROP) && (h = S)
                }
                if (!h || !f[h])
                    return !1;
                var p = f[h].toLowerCase();
                return o[h] || (o[h] = {}),
                    a[h] || (a[h] = {}),
                    o[h][p] ? !1 : (a[h][p] = !0,
                        !0)
            }).reverse().forEach(function (f) {
                return i.push(f)
            });
            for (var l = Object.keys(a), u = 0; u < l.length; u++) {
                var c = l[u]
                    , d = rx({}, o[c], a[c]);
                o[c] = d
            }
            return i
        }, []).reverse()
    }
    , hr = function (t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
            var o = t[r];
            if (o.hasOwnProperty(n))
                return o[n]
        }
        return null
    }
    , hx = function (t) {
        return {
            baseTag: px([ee.HREF, ee.TARGET], t),
            bodyAttributes: ia(Nn.BODY, t),
            defer: hr(t, Eo.DEFER),
            encode: hr(t, Eo.ENCODE_SPECIAL_CHARACTERS),
            htmlAttributes: ia(Nn.HTML, t),
            linkTags: _r(I.LINK, [ee.REL, ee.HREF], t),
            metaTags: _r(I.META, [ee.NAME, ee.CHARSET, ee.HTTPEQUIV, ee.PROPERTY, ee.ITEM_PROP], t),
            noscriptTags: _r(I.NOSCRIPT, [ee.INNER_HTML], t),
            onChangeClientState: fx(t),
            scriptTags: _r(I.SCRIPT, [ee.SRC, ee.INNER_HTML], t),
            styleTags: _r(I.STYLE, [ee.CSS_TEXT], t),
            title: dx(t),
            titleAttributes: ia(Nn.TITLE, t)
        }
    }
    , hl = function () {
        var e = Date.now();
        return function (t) {
            var n = Date.now();
            n - e > 16 ? (e = n,
                t(n)) : setTimeout(function () {
                    hl(t)
                }, 0)
        }
    }()
    , hd = function (t) {
        return clearTimeout(t)
    }
    , mx = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || hl : global.requestAnimationFrame || hl
    , gx = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || hd : global.cancelAnimationFrame || hd
    , vx = function (t) {
        return console && typeof console.warn == "function" && console.warn(t)
    }
    , Vr = null
    , yx = function (t) {
        Vr && gx(Vr),
            t.defer ? Vr = mx(function () {
                md(t, function () {
                    Vr = null
                })
            }) : (md(t),
                Vr = null)
    }
    , md = function (t, n) {
        var r = t.baseTag
            , o = t.bodyAttributes
            , i = t.htmlAttributes
            , s = t.linkTags
            , a = t.metaTags
            , l = t.noscriptTags
            , u = t.onChangeClientState
            , c = t.scriptTags
            , d = t.styleTags
            , f = t.title
            , h = t.titleAttributes;
        ml(I.BODY, o),
            ml(I.HTML, i),
            xx(f, h);
        var x = {
            baseTag: Wn(I.BASE, r),
            linkTags: Wn(I.LINK, s),
            metaTags: Wn(I.META, a),
            noscriptTags: Wn(I.NOSCRIPT, l),
            scriptTags: Wn(I.SCRIPT, c),
            styleTags: Wn(I.STYLE, d)
        }
            , y = {}
            , S = {};
        Object.keys(x).forEach(function (v) {
            var p = x[v]
                , m = p.newTags
                , w = p.oldTags;
            m.length && (y[v] = m),
                w.length && (S[v] = x[v].oldTags)
        }),
            n && n(),
            u(t, y, S)
    }
    , Gh = function (t) {
        return Array.isArray(t) ? t.join("") : t
    }
    , xx = function (t, n) {
        typeof t < "u" && document.title !== t && (document.title = Gh(t)),
            ml(I.TITLE, n)
    }
    , ml = function (t, n) {
        var r = document.getElementsByTagName(t)[0];
        if (r) {
            for (var o = r.getAttribute(ut), i = o ? o.split(",") : [], s = [].concat(i), a = Object.keys(n), l = 0; l < a.length; l++) {
                var u = a[l]
                    , c = n[u] || "";
                r.getAttribute(u) !== c && r.setAttribute(u, c),
                    i.indexOf(u) === -1 && i.push(u);
                var d = s.indexOf(u);
                d !== -1 && s.splice(d, 1)
            }
            for (var f = s.length - 1; f >= 0; f--)
                r.removeAttribute(s[f]);
            i.length === s.length ? r.removeAttribute(ut) : r.getAttribute(ut) !== a.join(",") && r.setAttribute(ut, a.join(","))
        }
    }
    , Wn = function (t, n) {
        var r = document.head || document.querySelector(I.HEAD)
            , o = r.querySelectorAll(t + "[" + ut + "]")
            , i = Array.prototype.slice.call(o)
            , s = []
            , a = void 0;
        return n && n.length && n.forEach(function (l) {
            var u = document.createElement(t);
            for (var c in l)
                if (l.hasOwnProperty(c))
                    if (c === ee.INNER_HTML)
                        u.innerHTML = l.innerHTML;
                    else if (c === ee.CSS_TEXT)
                        u.styleSheet ? u.styleSheet.cssText = l.cssText : u.appendChild(document.createTextNode(l.cssText));
                    else {
                        var d = typeof l[c] > "u" ? "" : l[c];
                        u.setAttribute(c, d)
                    }
            u.setAttribute(ut, "true"),
                i.some(function (f, h) {
                    return a = h,
                        u.isEqualNode(f)
                }) ? i.splice(a, 1) : s.push(u)
        }),
            i.forEach(function (l) {
                return l.parentNode.removeChild(l)
            }),
            s.forEach(function (l) {
                return r.appendChild(l)
            }),
        {
            oldTags: i,
            newTags: s
        }
    }
    , Kh = function (t) {
        return Object.keys(t).reduce(function (n, r) {
            var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
            return n ? n + " " + o : o
        }, "")
    }
    , wx = function (t, n, r, o) {
        var i = Kh(r)
            , s = Gh(n);
        return i ? "<" + t + " " + ut + '="true" ' + i + ">" + pl(s, o) + "</" + t + ">" : "<" + t + " " + ut + '="true">' + pl(s, o) + "</" + t + ">"
    }
    , Sx = function (t, n, r) {
        return n.reduce(function (o, i) {
            var s = Object.keys(i).filter(function (u) {
                return !(u === ee.INNER_HTML || u === ee.CSS_TEXT)
            }).reduce(function (u, c) {
                var d = typeof i[c] > "u" ? c : c + '="' + pl(i[c], r) + '"';
                return u ? u + " " + d : d
            }, "")
                , a = i.innerHTML || i.cssText || ""
                , l = ix.indexOf(t) === -1;
            return o + "<" + t + " " + ut + '="true" ' + s + (l ? "/>" : ">" + a + "</" + t + ">")
        }, "")
    }
    , Yh = function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(t).reduce(function (r, o) {
            return r[Xi[o] || o] = t[o],
                r
        }, n)
    }
    , Tx = function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(t).reduce(function (r, o) {
            return r[ox[o] || o] = t[o],
                r
        }, n)
    }
    , Cx = function (t, n, r) {
        var o, i = (o = {
            key: n
        },
            o[ut] = !0,
            o), s = Yh(r, i);
        return [oe.createElement(I.TITLE, s, n)]
    }
    , Ex = function (t, n) {
        return n.map(function (r, o) {
            var i, s = (i = {
                key: o
            },
                i[ut] = !0,
                i);
            return Object.keys(r).forEach(function (a) {
                var l = Xi[a] || a;
                if (l === ee.INNER_HTML || l === ee.CSS_TEXT) {
                    var u = r.innerHTML || r.cssText;
                    s.dangerouslySetInnerHTML = {
                        __html: u
                    }
                } else
                    s[l] = r[a]
            }),
                oe.createElement(t, s)
        })
    }
    , Tt = function (t, n, r) {
        switch (t) {
            case I.TITLE:
                return {
                    toComponent: function () {
                        return Cx(t, n.title, n.titleAttributes)
                    },
                    toString: function () {
                        return wx(t, n.title, n.titleAttributes, r)
                    }
                };
            case Nn.BODY:
            case Nn.HTML:
                return {
                    toComponent: function () {
                        return Yh(n)
                    },
                    toString: function () {
                        return Kh(n)
                    }
                };
            default:
                return {
                    toComponent: function () {
                        return Ex(t, n)
                    },
                    toString: function () {
                        return Sx(t, n, r)
                    }
                }
        }
    }
    , Qh = function (t) {
        var n = t.baseTag
            , r = t.bodyAttributes
            , o = t.encode
            , i = t.htmlAttributes
            , s = t.linkTags
            , a = t.metaTags
            , l = t.noscriptTags
            , u = t.scriptTags
            , c = t.styleTags
            , d = t.title
            , f = d === void 0 ? "" : d
            , h = t.titleAttributes;
        return {
            base: Tt(I.BASE, n, o),
            bodyAttributes: Tt(Nn.BODY, r, o),
            htmlAttributes: Tt(Nn.HTML, i, o),
            link: Tt(I.LINK, s, o),
            meta: Tt(I.META, a, o),
            noscript: Tt(I.NOSCRIPT, l, o),
            script: Tt(I.SCRIPT, u, o),
            style: Tt(I.STYLE, c, o),
            title: Tt(I.TITLE, {
                title: f,
                titleAttributes: h
            }, o)
        }
    }
    , Px = function (t) {
        var n, r;
        return r = n = function (o) {
            ux(i, o);
            function i() {
                return ax(this, i),
                    cx(this, o.apply(this, arguments))
            }
            return i.prototype.shouldComponentUpdate = function (a) {
                return !q0(this.props, a)
            }
                ,
                i.prototype.mapNestedChildrenToProps = function (a, l) {
                    if (!l)
                        return null;
                    switch (a.type) {
                        case I.SCRIPT:
                        case I.NOSCRIPT:
                            return {
                                innerHTML: l
                            };
                        case I.STYLE:
                            return {
                                cssText: l
                            }
                    }
                    throw new Error("<" + a.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                }
                ,
                i.prototype.flattenArrayTypeChildren = function (a) {
                    var l, u = a.child, c = a.arrayTypeChildren, d = a.newChildProps, f = a.nestedChildren;
                    return be({}, c, (l = {},
                        l[u.type] = [].concat(c[u.type] || [], [be({}, d, this.mapNestedChildrenToProps(u, f))]),
                        l))
                }
                ,
                i.prototype.mapObjectTypeChildren = function (a) {
                    var l, u, c = a.child, d = a.newProps, f = a.newChildProps, h = a.nestedChildren;
                    switch (c.type) {
                        case I.TITLE:
                            return be({}, d, (l = {},
                                l[c.type] = h,
                                l.titleAttributes = be({}, f),
                                l));
                        case I.BODY:
                            return be({}, d, {
                                bodyAttributes: be({}, f)
                            });
                        case I.HTML:
                            return be({}, d, {
                                htmlAttributes: be({}, f)
                            })
                    }
                    return be({}, d, (u = {},
                        u[c.type] = be({}, f),
                        u))
                }
                ,
                i.prototype.mapArrayTypeChildrenToProps = function (a, l) {
                    var u = be({}, l);
                    return Object.keys(a).forEach(function (c) {
                        var d;
                        u = be({}, u, (d = {},
                            d[c] = a[c],
                            d))
                    }),
                        u
                }
                ,
                i.prototype.warnOnInvalidChildren = function (a, l) {
                    return !0
                }
                ,
                i.prototype.mapChildrenToProps = function (a, l) {
                    var u = this
                        , c = {};
                    return oe.Children.forEach(a, function (d) {
                        if (!(!d || !d.props)) {
                            var f = d.props
                                , h = f.children
                                , x = pd(f, ["children"])
                                , y = Tx(x);
                            switch (u.warnOnInvalidChildren(d, h),
                            d.type) {
                                case I.LINK:
                                case I.META:
                                case I.NOSCRIPT:
                                case I.SCRIPT:
                                case I.STYLE:
                                    c = u.flattenArrayTypeChildren({
                                        child: d,
                                        arrayTypeChildren: c,
                                        newChildProps: y,
                                        nestedChildren: h
                                    });
                                    break;
                                default:
                                    l = u.mapObjectTypeChildren({
                                        child: d,
                                        newProps: l,
                                        newChildProps: y,
                                        nestedChildren: h
                                    });
                                    break
                            }
                        }
                    }),
                        l = this.mapArrayTypeChildrenToProps(c, l),
                        l
                }
                ,
                i.prototype.render = function () {
                    var a = this.props
                        , l = a.children
                        , u = pd(a, ["children"])
                        , c = be({}, u);
                    return l && (c = this.mapChildrenToProps(l, c)),
                        oe.createElement(t, c)
                }
                ,
                lx(i, null, [{
                    key: "canUseDOM",
                    set: function (a) {
                        t.canUseDOM = a
                    }
                }]),
                i
        }(oe.Component),
            n.propTypes = {
                base: J.object,
                bodyAttributes: J.object,
                children: J.oneOfType([J.arrayOf(J.node), J.node]),
                defaultTitle: J.string,
                defer: J.bool,
                encodeSpecialCharacters: J.bool,
                htmlAttributes: J.object,
                link: J.arrayOf(J.object),
                meta: J.arrayOf(J.object),
                noscript: J.arrayOf(J.object),
                onChangeClientState: J.func,
                script: J.arrayOf(J.object),
                style: J.arrayOf(J.object),
                title: J.string,
                titleAttributes: J.object,
                titleTemplate: J.string
            },
            n.defaultProps = {
                defer: !0,
                encodeSpecialCharacters: !0
            },
            n.peek = t.peek,
            n.rewind = function () {
                var o = t.rewind();
                return o || (o = Qh({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: "",
                    titleAttributes: {}
                })),
                    o
            }
            ,
            r
    }
    , kx = function () {
        return null
    }
    , Ax = H0(hx, yx, Qh)(kx)
    , gl = Px(Ax);
gl.renderStatic = gl.rewind;
const Xh = T.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
    , Es = T.createContext({})
    , Ru = T.createContext(null)
    , Ps = typeof document < "u"
    , Nx = Ps ? T.useLayoutEffect : T.useEffect
    , qh = T.createContext({
        strict: !1
    })
    , Mu = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    , jx = "framerAppearId"
    , Zh = "data-" + Mu(jx);
function Rx(e, t, n, r) {
    const { visualElement: o } = T.useContext(Es)
        , i = T.useContext(qh)
        , s = T.useContext(Ru)
        , a = T.useContext(Xh).reducedMotion
        , l = T.useRef();
    r = r || i.renderer,
        !l.current && r && (l.current = r(e, {
            visualState: t,
            parent: o,
            props: n,
            presenceContext: s,
            blockInitialAnimation: s ? s.initial === !1 : !1,
            reducedMotionConfig: a
        }));
    const u = l.current;
    T.useInsertionEffect(() => {
        u && u.update(n, s)
    }
    );
    const c = T.useRef(!!(n[Zh] && !window.HandoffComplete));
    return Nx(() => {
        u && (u.render(),
            c.current && u.animationState && u.animationState.animateChanges())
    }
    ),
        T.useEffect(() => {
            u && (u.updateFeatures(),
                !c.current && u.animationState && u.animationState.animateChanges(),
                c.current && (c.current = !1,
                    window.HandoffComplete = !0))
        }
        ),
        u
}
function or(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Mx(e, t, n) {
    return T.useCallback(r => {
        r && e.mount && e.mount(r),
            t && (r ? t.mount(r) : t.unmount()),
            n && (typeof n == "function" ? n(r) : or(n) && (n.current = r))
    }
        , [t])
}
function Po(e) {
    return typeof e == "string" || Array.isArray(e)
}
function ks(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Lu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
    , bu = ["initial", ...Lu];
function As(e) {
    return ks(e.animate) || bu.some(t => Po(e[t]))
}
function Jh(e) {
    return !!(As(e) || e.variants)
}
function Lx(e, t) {
    if (As(e)) {
        const { initial: n, animate: r } = e;
        return {
            initial: n === !1 || Po(n) ? n : void 0,
            animate: Po(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function bx(e) {
    const { initial: t, animate: n } = Lx(e, T.useContext(Es));
    return T.useMemo(() => ({
        initial: t,
        animate: n
    }), [gd(t), gd(n)])
}
function gd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const vd = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
    , ko = {};
for (const e in vd)
    ko[e] = {
        isEnabled: t => vd[e].some(n => !!t[n])
    };
function Ox(e) {
    for (const t in e)
        ko[t] = {
            ...ko[t],
            ...e[t]
        }
}
const em = T.createContext({})
    , tm = T.createContext({})
    , Dx = Symbol.for("motionComponentSymbol");
function _x({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
    e && Ox(e);
    function i(a, l) {
        let u;
        const c = {
            ...T.useContext(Xh),
            ...a,
            layoutId: Vx(a)
        }
            , { isStatic: d } = c
            , f = bx(a)
            , h = r(a, d);
        if (!d && Ps) {
            f.visualElement = Rx(o, h, c, t);
            const x = T.useContext(tm)
                , y = T.useContext(qh).strict;
            f.visualElement && (u = f.visualElement.loadFeatures(c, y, e, x))
        }
        return T.createElement(Es.Provider, {
            value: f
        }, u && f.visualElement ? T.createElement(u, {
            visualElement: f.visualElement,
            ...c
        }) : null, n(o, a, Mx(h, f.visualElement, l), h, d, f.visualElement))
    }
    const s = T.forwardRef(i);
    return s[Dx] = o,
        s
}
function Vx({ layoutId: e }) {
    const t = T.useContext(em).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Ix(e) {
    function t(r, o = {}) {
        return _x(e(r, o))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, o) => (n.has(o) || n.set(o, t(o)),
            n.get(o))
    })
}
const Fx = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Ou(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Fx.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const qi = {};
function zx(e) {
    Object.assign(qi, e)
}
const Oo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
    , In = new Set(Oo);
function nm(e, { layout: t, layoutId: n }) {
    return In.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!qi[e] || e === "opacity")
}
const Fe = e => !!(e && e.getVelocity)
    , Bx = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    }
    , Ux = Oo.length;
function $x(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
    let i = "";
    for (let s = 0; s < Ux; s++) {
        const a = Oo[s];
        if (e[a] !== void 0) {
            const l = Bx[a] || a;
            i += `${l}(${e[a]}) `
        }
    }
    return t && !e.z && (i += "translateZ(0)"),
        i = i.trim(),
        o ? i = o(e, r ? "" : i) : n && r && (i = "none"),
        i
}
const rm = e => t => typeof t == "string" && t.startsWith(e)
    , om = rm("--")
    , vl = rm("var(--")
    , Wx = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
    , Hx = (e, t) => t && typeof e == "number" ? t.transform(e) : e
    , an = (e, t, n) => Math.min(Math.max(n, e), t)
    , Fn = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    }
    , no = {
        ...Fn,
        transform: e => an(0, 1, e)
    }
    , ri = {
        ...Fn,
        default: 1
    }
    , ro = e => Math.round(e * 1e5) / 1e5
    , Ns = /(-)?([\d]*\.?[\d])+/g
    , im = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
    , Gx = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Do(e) {
    return typeof e == "string"
}
const _o = e => ({
    test: t => Do(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
    , Ft = _o("deg")
    , xt = _o("%")
    , _ = _o("px")
    , Kx = _o("vh")
    , Yx = _o("vw")
    , yd = {
        ...xt,
        parse: e => xt.parse(e) / 100,
        transform: e => xt.transform(e * 100)
    }
    , xd = {
        ...Fn,
        transform: Math.round
    }
    , sm = {
        borderWidth: _,
        borderTopWidth: _,
        borderRightWidth: _,
        borderBottomWidth: _,
        borderLeftWidth: _,
        borderRadius: _,
        radius: _,
        borderTopLeftRadius: _,
        borderTopRightRadius: _,
        borderBottomRightRadius: _,
        borderBottomLeftRadius: _,
        width: _,
        maxWidth: _,
        height: _,
        maxHeight: _,
        size: _,
        top: _,
        right: _,
        bottom: _,
        left: _,
        padding: _,
        paddingTop: _,
        paddingRight: _,
        paddingBottom: _,
        paddingLeft: _,
        margin: _,
        marginTop: _,
        marginRight: _,
        marginBottom: _,
        marginLeft: _,
        rotate: Ft,
        rotateX: Ft,
        rotateY: Ft,
        rotateZ: Ft,
        scale: ri,
        scaleX: ri,
        scaleY: ri,
        scaleZ: ri,
        skew: Ft,
        skewX: Ft,
        skewY: Ft,
        distance: _,
        translateX: _,
        translateY: _,
        translateZ: _,
        x: _,
        y: _,
        z: _,
        perspective: _,
        transformPerspective: _,
        opacity: no,
        originX: yd,
        originY: yd,
        originZ: _,
        zIndex: xd,
        fillOpacity: no,
        strokeOpacity: no,
        numOctaves: xd
    };
function Du(e, t, n, r) {
    const { style: o, vars: i, transform: s, transformOrigin: a } = e;
    let l = !1
        , u = !1
        , c = !0;
    for (const d in t) {
        const f = t[d];
        if (om(d)) {
            i[d] = f;
            continue
        }
        const h = sm[d]
            , x = Hx(f, h);
        if (In.has(d)) {
            if (l = !0,
                s[d] = x,
                !c)
                continue;
            f !== (h.default || 0) && (c = !1)
        } else
            d.startsWith("origin") ? (u = !0,
                a[d] = x) : o[d] = x
    }
    if (t.transform || (l || r ? o.transform = $x(e.transform, n, c, r) : o.transform && (o.transform = "none")),
        u) {
        const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = a;
        o.transformOrigin = `${d} ${f} ${h}`
    }
}
const _u = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function am(e, t, n) {
    for (const r in t)
        !Fe(t[r]) && !nm(r, n) && (e[r] = t[r])
}
function Qx({ transformTemplate: e }, t, n) {
    return T.useMemo(() => {
        const r = _u();
        return Du(r, t, {
            enableHardwareAcceleration: !n
        }, e),
            Object.assign({}, r.vars, r.style)
    }
        , [t])
}
function Xx(e, t, n) {
    const r = e.style || {}
        , o = {};
    return am(o, r, e),
        Object.assign(o, Qx(e, t, n)),
        e.transformValues ? e.transformValues(o) : o
}
function qx(e, t, n) {
    const r = {}
        , o = Xx(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
        o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
        o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
        e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
        r.style = o,
        r
}
const Zx = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Zi(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Zx.has(e)
}
let lm = e => !Zi(e);
function Jx(e) {
    e && (lm = t => t.startsWith("on") ? !Zi(t) : e(t))
}
try {
    Jx(require("@emotion/is-prop-valid").default)
} catch { }
function e1(e, t, n) {
    const r = {};
    for (const o in e)
        o === "values" && typeof e.values == "object" || (lm(o) || n === !0 && Zi(o) || !t && !Zi(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
function wd(e, t, n) {
    return typeof e == "string" ? e : _.transform(t + n * e)
}
function t1(e, t, n) {
    const r = wd(t, e.x, e.width)
        , o = wd(n, e.y, e.height);
    return `${r} ${o}`
}
const n1 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
    , r1 = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
function o1(e, t, n = 1, r = 0, o = !0) {
    e.pathLength = 1;
    const i = o ? n1 : r1;
    e[i.offset] = _.transform(-r);
    const s = _.transform(t)
        , a = _.transform(n);
    e[i.array] = `${s} ${a}`
}
function Vu(e, { attrX: t, attrY: n, attrScale: r, originX: o, originY: i, pathLength: s, pathSpacing: a = 1, pathOffset: l = 0, ...u }, c, d, f) {
    if (Du(e, u, c, f),
        d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
        e.style = {};
    const { attrs: h, style: x, dimensions: y } = e;
    h.transform && (y && (x.transform = h.transform),
        delete h.transform),
        y && (o !== void 0 || i !== void 0 || x.transform) && (x.transformOrigin = t1(y, o !== void 0 ? o : .5, i !== void 0 ? i : .5)),
        t !== void 0 && (h.x = t),
        n !== void 0 && (h.y = n),
        r !== void 0 && (h.scale = r),
        s !== void 0 && o1(h, s, a, l, !1)
}
const um = () => ({
    ..._u(),
    attrs: {}
})
    , Iu = e => typeof e == "string" && e.toLowerCase() === "svg";
function i1(e, t, n, r) {
    const o = T.useMemo(() => {
        const i = um();
        return Vu(i, t, {
            enableHardwareAcceleration: !1
        }, Iu(r), e.transformTemplate),
        {
            ...i.attrs,
            style: {
                ...i.style
            }
        }
    }
        , [t]);
    if (e.style) {
        const i = {};
        am(i, e.style, e),
            o.style = {
                ...i,
                ...o.style
            }
    }
    return o
}
function s1(e = !1) {
    return (n, r, o, { latestValues: i }, s) => {
        const l = (Ou(n) ? i1 : qx)(r, i, s, n)
            , c = {
                ...e1(r, typeof n == "string", e),
                ...l,
                ref: o
            }
            , { children: d } = r
            , f = T.useMemo(() => Fe(d) ? d.get() : d, [d]);
        return T.createElement(n, {
            ...c,
            children: f
        })
    }
}
function cm(e, { style: t, vars: n }, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const i in n)
        e.style.setProperty(i, n[i])
}
const dm = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function fm(e, t, n, r) {
    cm(e, t, void 0, r);
    for (const o in t.attrs)
        e.setAttribute(dm.has(o) ? o : Mu(o), t.attrs[o])
}
function Fu(e, t) {
    const { style: n } = e
        , r = {};
    for (const o in n)
        (Fe(n[o]) || t.style && Fe(t.style[o]) || nm(o, e)) && (r[o] = n[o]);
    return r
}
function pm(e, t) {
    const n = Fu(e, t);
    for (const r in e)
        if (Fe(e[r]) || Fe(t[r])) {
            const o = Oo.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[o] = e[r]
        }
    return n
}
function zu(e, t, n, r = {}, o = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
        typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
        t
}
function a1(e) {
    const t = T.useRef(null);
    return t.current === null && (t.current = e()),
        t.current
}
const Ji = e => Array.isArray(e)
    , l1 = e => !!(e && typeof e == "object" && e.mix && e.toValue)
    , u1 = e => Ji(e) ? e[e.length - 1] || 0 : e;
function Ei(e) {
    const t = Fe(e) ? e.get() : e;
    return l1(t) ? t.toValue() : t
}
function c1({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
    const s = {
        latestValues: d1(r, o, i, e),
        renderState: t()
    };
    return n && (s.mount = a => n(r, a, s)),
        s
}
const hm = e => (t, n) => {
    const r = T.useContext(Es)
        , o = T.useContext(Ru)
        , i = () => c1(e, t, r, o);
    return n ? i() : a1(i)
}
    ;
function d1(e, t, n, r) {
    const o = {}
        , i = r(e, {});
    for (const f in i)
        o[f] = Ei(i[f]);
    let { initial: s, animate: a } = e;
    const l = As(e)
        , u = Jh(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial),
        a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    return d && typeof d != "boolean" && !ks(d) && (Array.isArray(d) ? d : [d]).forEach(h => {
        const x = zu(e, h);
        if (!x)
            return;
        const { transitionEnd: y, transition: S, ...v } = x;
        for (const p in v) {
            let m = v[p];
            if (Array.isArray(m)) {
                const w = c ? m.length - 1 : 0;
                m = m[w]
            }
            m !== null && (o[p] = m)
        }
        for (const p in y)
            o[p] = y[p]
    }
    ),
        o
}
const ue = e => e;
class Sd {
    constructor() {
        this.order = [],
            this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
                this.order.push(t),
                !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
            this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
            this.scheduled.clear()
    }
}
function f1(e) {
    let t = new Sd
        , n = new Sd
        , r = 0
        , o = !1
        , i = !1;
    const s = new WeakSet
        , a = {
            schedule: (l, u = !1, c = !1) => {
                const d = c && o
                    , f = d ? t : n;
                return u && s.add(l),
                    f.add(l) && d && o && (r = t.order.length),
                    l
            }
            ,
            cancel: l => {
                n.remove(l),
                    s.delete(l)
            }
            ,
            process: l => {
                if (o) {
                    i = !0;
                    return
                }
                if (o = !0,
                    [t, n] = [n, t],
                    n.clear(),
                    r = t.order.length,
                    r)
                    for (let u = 0; u < r; u++) {
                        const c = t.order[u];
                        c(l),
                            s.has(c) && (a.schedule(c),
                                e())
                    }
                o = !1,
                    i && (i = !1,
                        a.process(l))
            }
        };
    return a
}
const oi = ["prepare", "read", "update", "preRender", "render", "postRender"]
    , p1 = 40;
function h1(e, t) {
    let n = !1
        , r = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
        , i = oi.reduce((d, f) => (d[f] = f1(() => n = !0),
            d), {})
        , s = d => i[d].process(o)
        , a = () => {
            const d = performance.now();
            n = !1,
                o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, p1), 1),
                o.timestamp = d,
                o.isProcessing = !0,
                oi.forEach(s),
                o.isProcessing = !1,
                n && t && (r = !1,
                    e(a))
        }
        , l = () => {
            n = !0,
                r = !0,
                o.isProcessing || e(a)
        }
        ;
    return {
        schedule: oi.reduce((d, f) => {
            const h = i[f];
            return d[f] = (x, y = !1, S = !1) => (n || l(),
                h.schedule(x, y, S)),
                d
        }
            , {}),
        cancel: d => oi.forEach(f => i[f].cancel(d)),
        state: o,
        steps: i
    }
}
const { schedule: q, cancel: Dt, state: Ee, steps: sa } = h1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ue, !0)
    , m1 = {
        useVisualState: hm({
            scrapeMotionValuesFromProps: pm,
            createRenderState: um,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
                q.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }
                ),
                    q.render(() => {
                        Vu(n, r, {
                            enableHardwareAcceleration: !1
                        }, Iu(t.tagName), e.transformTemplate),
                            fm(t, n)
                    }
                    )
            }
        })
    }
    , g1 = {
        useVisualState: hm({
            scrapeMotionValuesFromProps: Fu,
            createRenderState: _u
        })
    };
function v1(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
        ...Ou(e) ? m1 : g1,
        preloadedFeatures: n,
        useRender: s1(t),
        createVisualElement: r,
        Component: e
    }
}
function At(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r),
        () => e.removeEventListener(t, n)
}
const mm = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function js(e, t = "page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const y1 = e => t => mm(t) && e(t, js(t));
function jt(e, t, n, r) {
    return At(e, t, y1(n), r)
}
const x1 = (e, t) => n => t(e(n))
    , nn = (...e) => e.reduce(x1);
function gm(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        }
            ;
        return t === null ? (t = e,
            n) : !1
    }
}
const Td = gm("dragHorizontal")
    , Cd = gm("dragVertical");
function vm(e) {
    let t = !1;
    if (e === "y")
        t = Cd();
    else if (e === "x")
        t = Td();
    else {
        const n = Td()
            , r = Cd();
        n && r ? t = () => {
            n(),
                r()
        }
            : (n && n(),
                r && r())
    }
    return t
}
function ym() {
    const e = vm(!0);
    return e ? (e(),
        !1) : !0
}
class pn {
    constructor(t) {
        this.isMounted = !1,
            this.node = t
    }
    update() { }
}
function Ed(e, t) {
    const n = "pointer" + (t ? "enter" : "leave")
        , r = "onHover" + (t ? "Start" : "End")
        , o = (i, s) => {
            if (i.pointerType === "touch" || ym())
                return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t),
                a[r] && q.update(() => a[r](i, s))
        }
        ;
    return jt(e.current, n, o, {
        passive: !e.getProps()[r]
    })
}
class w1 extends pn {
    mount() {
        this.unmount = nn(Ed(this.node, !0), Ed(this.node, !1))
    }
    unmount() { }
}
class S1 extends pn {
    constructor() {
        super(...arguments),
            this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
            this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
            this.isActive = !1)
    }
    mount() {
        this.unmount = nn(At(this.node.current, "focus", () => this.onFocus()), At(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() { }
}
const xm = (e, t) => t ? e === t ? !0 : xm(e, t.parentElement) : !1;
function aa(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, js(n))
}
class T1 extends pn {
    constructor() {
        super(...arguments),
            this.removeStartListeners = ue,
            this.removeEndListeners = ue,
            this.removeAccessibleListeners = ue,
            this.startPointerPress = (t, n) => {
                if (this.isPressing)
                    return;
                this.removeEndListeners();
                const r = this.node.getProps()
                    , i = jt(window, "pointerup", (a, l) => {
                        if (!this.checkPressEnd())
                            return;
                        const { onTap: u, onTapCancel: c, globalTapTarget: d } = this.node.getProps();
                        q.update(() => {
                            !d && !xm(this.node.current, a.target) ? c && c(a, l) : u && u(a, l)
                        }
                        )
                    }
                        , {
                            passive: !(r.onTap || r.onPointerUp)
                        })
                    , s = jt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                        passive: !(r.onTapCancel || r.onPointerCancel)
                    });
                this.removeEndListeners = nn(i, s),
                    this.startPress(t, n)
            }
            ,
            this.startAccessiblePress = () => {
                const t = i => {
                    if (i.key !== "Enter" || this.isPressing)
                        return;
                    const s = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || aa("up", (l, u) => {
                            const { onTap: c } = this.node.getProps();
                            c && q.update(() => c(l, u))
                        }
                        )
                    }
                        ;
                    this.removeEndListeners(),
                        this.removeEndListeners = At(this.node.current, "keyup", s),
                        aa("down", (a, l) => {
                            this.startPress(a, l)
                        }
                        )
                }
                    , n = At(this.node.current, "keydown", t)
                    , r = () => {
                        this.isPressing && aa("cancel", (i, s) => this.cancelPress(i, s))
                    }
                    , o = At(this.node.current, "blur", r);
                this.removeAccessibleListeners = nn(n, o)
            }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const { onTapStart: r, whileTap: o } = this.node.getProps();
        o && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
            r && q.update(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
            this.isPressing = !1,
            this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
            !ym()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const { onTapCancel: r } = this.node.getProps();
        r && q.update(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps()
            , n = jt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            })
            , r = At(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = nn(n, r)
    }
    unmount() {
        this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners()
    }
}
const yl = new WeakMap
    , la = new WeakMap
    , C1 = e => {
        const t = yl.get(e.target);
        t && t(e)
    }
    , E1 = e => {
        e.forEach(C1)
    }
    ;
function P1({ root: e, ...t }) {
    const n = e || document;
    la.has(n) || la.set(n, {});
    const r = la.get(n)
        , o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(E1, {
        root: e,
        ...t
    })),
        r[o]
}
function k1(e, t, n) {
    const r = P1(t);
    return yl.set(e, n),
        r.observe(e),
        () => {
            yl.delete(e),
                r.unobserve(e)
        }
}
const A1 = {
    some: 0,
    all: 1
};
class N1 extends pn {
    constructor() {
        super(...arguments),
            this.hasEnteredView = !1,
            this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const { viewport: t = {} } = this.node.getProps()
            , { root: n, margin: r, amount: o = "some", once: i } = t
            , s = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: typeof o == "number" ? o : A1[o]
            }
            , a = l => {
                const { isIntersecting: u } = l;
                if (this.isInView === u || (this.isInView = u,
                    i && !u && this.hasEnteredView))
                    return;
                u && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", u);
                const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps()
                    , f = u ? c : d;
                f && f(l)
            }
            ;
        return k1(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(j1(t, n)) && this.startObserver()
    }
    unmount() { }
}
function j1({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return n => e[n] !== t[n]
}
const R1 = {
    inView: {
        Feature: N1
    },
    tap: {
        Feature: T1
    },
    focus: {
        Feature: S1
    },
    hover: {
        Feature: w1
    }
};
function wm(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function M1(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()),
        t
}
function L1(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()),
        t
}
function Rs(e, t, n) {
    const r = e.getProps();
    return zu(r, t, n !== void 0 ? n : r.custom, M1(e), L1(e))
}
let b1 = ue
    , Bu = ue;
const rn = e => e * 1e3
    , Rt = e => e / 1e3
    , O1 = {
        current: !1
    }
    , Sm = e => Array.isArray(e) && typeof e[0] == "number";
function Tm(e) {
    return !!(!e || typeof e == "string" && Cm[e] || Sm(e) || Array.isArray(e) && e.every(Tm))
}
const Gr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
    , Cm = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Gr([0, .65, .55, 1]),
        circOut: Gr([.55, 0, 1, .45]),
        backIn: Gr([.31, .01, .66, -.59]),
        backOut: Gr([.33, 1.53, .69, .99])
    };
function Em(e) {
    if (e)
        return Sm(e) ? Gr(e) : Array.isArray(e) ? e.map(Em) : Cm[e]
}
function D1(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = Em(a);
    return Array.isArray(c) && (u.easing = c),
        e.animate(u, {
            delay: r,
            duration: o,
            easing: Array.isArray(c) ? "linear" : c,
            fill: "both",
            iterations: i + 1,
            direction: s === "reverse" ? "alternate" : "normal"
        })
}
function _1(e, { repeat: t, repeatType: n = "loop" }) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const Pm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
    , V1 = 1e-7
    , I1 = 12;
function F1(e, t, n, r, o) {
    let i, s, a = 0;
    do
        s = t + (n - t) / 2,
            i = Pm(s, r, o) - e,
            i > 0 ? n = s : t = s;
    while (Math.abs(i) > V1 && ++a < I1);
    return s
}
function Vo(e, t, n, r) {
    if (e === t && n === r)
        return ue;
    const o = i => F1(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : Pm(o(i), t, r)
}
const z1 = Vo(.42, 0, 1, 1)
    , B1 = Vo(0, 0, .58, 1)
    , km = Vo(.42, 0, .58, 1)
    , U1 = e => Array.isArray(e) && typeof e[0] != "number"
    , Am = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
    , Nm = e => t => 1 - e(1 - t)
    , Uu = e => 1 - Math.sin(Math.acos(e))
    , jm = Nm(Uu)
    , $1 = Am(Uu)
    , Rm = Vo(.33, 1.53, .69, .99)
    , $u = Nm(Rm)
    , W1 = Am($u)
    , H1 = e => (e *= 2) < 1 ? .5 * $u(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
    , G1 = {
        linear: ue,
        easeIn: z1,
        easeInOut: km,
        easeOut: B1,
        circIn: Uu,
        circInOut: $1,
        circOut: jm,
        backIn: $u,
        backInOut: W1,
        backOut: Rm,
        anticipate: H1
    }
    , Pd = e => {
        if (Array.isArray(e)) {
            Bu(e.length === 4);
            const [t, n, r, o] = e;
            return Vo(t, n, r, o)
        } else if (typeof e == "string")
            return G1[e];
        return e
    }
    , Wu = (e, t) => n => !!(Do(n) && Gx.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
    , Mm = (e, t, n) => r => {
        if (!Do(r))
            return r;
        const [o, i, s, a] = r.match(Ns);
        return {
            [e]: parseFloat(o),
            [t]: parseFloat(i),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    }
    , K1 = e => an(0, 255, e)
    , ua = {
        ...Fn,
        transform: e => Math.round(K1(e))
    }
    , En = {
        test: Wu("rgb", "red"),
        parse: Mm("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ua.transform(e) + ", " + ua.transform(t) + ", " + ua.transform(n) + ", " + ro(no.transform(r)) + ")"
    };
function Y1(e) {
    let t = ""
        , n = ""
        , r = ""
        , o = "";
    return e.length > 5 ? (t = e.substring(1, 3),
        n = e.substring(3, 5),
        r = e.substring(5, 7),
        o = e.substring(7, 9)) : (t = e.substring(1, 2),
            n = e.substring(2, 3),
            r = e.substring(3, 4),
            o = e.substring(4, 5),
            t += t,
            n += n,
            r += r,
            o += o),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const xl = {
    test: Wu("#"),
    parse: Y1,
    transform: En.transform
}
    , ir = {
        test: Wu("hsl", "hue"),
        parse: Mm("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + xt.transform(ro(t)) + ", " + xt.transform(ro(n)) + ", " + ro(no.transform(r)) + ")"
    }
    , Ae = {
        test: e => En.test(e) || xl.test(e) || ir.test(e),
        parse: e => En.test(e) ? En.parse(e) : ir.test(e) ? ir.parse(e) : xl.parse(e),
        transform: e => Do(e) ? e : e.hasOwnProperty("red") ? En.transform(e) : ir.transform(e)
    }
    , ie = (e, t, n) => -n * e + n * t + e;
function ca(e, t, n) {
    return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Q1({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360,
        t /= 100,
        n /= 100;
    let o = 0
        , i = 0
        , s = 0;
    if (!t)
        o = i = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
            , l = 2 * n - a;
        o = ca(l, a, e + 1 / 3),
            i = ca(l, a, e),
            s = ca(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const da = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}
    , X1 = [xl, En, ir]
    , q1 = e => X1.find(t => t.test(e));
function kd(e) {
    const t = q1(e);
    let n = t.parse(e);
    return t === ir && (n = Q1(n)),
        n
}
const Lm = (e, t) => {
    const n = kd(e)
        , r = kd(t)
        , o = {
            ...n
        };
    return i => (o.red = da(n.red, r.red, i),
        o.green = da(n.green, r.green, i),
        o.blue = da(n.blue, r.blue, i),
        o.alpha = ie(n.alpha, r.alpha, i),
        En.transform(o))
}
    ;
function Z1(e) {
    var t, n;
    return isNaN(e) && Do(e) && (((t = e.match(Ns)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(im)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const bm = {
    regex: Wx,
    countKey: "Vars",
    token: "${v}",
    parse: ue
}
    , Om = {
        regex: im,
        countKey: "Colors",
        token: "${c}",
        parse: Ae.parse
    }
    , Dm = {
        regex: Ns,
        countKey: "Numbers",
        token: "${n}",
        parse: Fn.parse
    };
function fa(e, { regex: t, countKey: n, token: r, parse: o }) {
    const i = e.tokenised.match(t);
    i && (e["num" + n] = i.length,
        e.tokenised = e.tokenised.replace(t, r),
        e.values.push(...i.map(o)))
}
function es(e) {
    const t = e.toString()
        , n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
        };
    return n.value.includes("var(--") && fa(n, bm),
        fa(n, Om),
        fa(n, Dm),
        n
}
function _m(e) {
    return es(e).values
}
function Vm(e) {
    const { values: t, numColors: n, numVars: r, tokenised: o } = es(e)
        , i = t.length;
    return s => {
        let a = o;
        for (let l = 0; l < i; l++)
            l < r ? a = a.replace(bm.token, s[l]) : l < r + n ? a = a.replace(Om.token, Ae.transform(s[l])) : a = a.replace(Dm.token, ro(s[l]));
        return a
    }
}
const J1 = e => typeof e == "number" ? 0 : e;
function ew(e) {
    const t = _m(e);
    return Vm(e)(t.map(J1))
}
const ln = {
    test: Z1,
    parse: _m,
    createTransformer: Vm,
    getAnimatableNone: ew
}
    , Im = (e, t) => n => `${n > 0 ? t : e}`;
function Fm(e, t) {
    return typeof e == "number" ? n => ie(e, t, n) : Ae.test(e) ? Lm(e, t) : e.startsWith("var(") ? Im(e, t) : Bm(e, t)
}
const zm = (e, t) => {
    const n = [...e]
        , r = n.length
        , o = e.map((i, s) => Fm(i, t[s]));
    return i => {
        for (let s = 0; s < r; s++)
            n[s] = o[s](i);
        return n
    }
}
    , tw = (e, t) => {
        const n = {
            ...e,
            ...t
        }
            , r = {};
        for (const o in n)
            e[o] !== void 0 && t[o] !== void 0 && (r[o] = Fm(e[o], t[o]));
        return o => {
            for (const i in r)
                n[i] = r[i](o);
            return n
        }
    }
    , Bm = (e, t) => {
        const n = ln.createTransformer(t)
            , r = es(e)
            , o = es(t);
        return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? nn(zm(r.values, o.values), n) : Im(e, t)
    }
    , Ao = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    }
    , Ad = (e, t) => n => ie(e, t, n);
function nw(e) {
    return typeof e == "number" ? Ad : typeof e == "string" ? Ae.test(e) ? Lm : Bm : Array.isArray(e) ? zm : typeof e == "object" ? tw : Ad
}
function rw(e, t, n) {
    const r = []
        , o = n || nw(e[0])
        , i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let a = o(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || ue : t;
            a = nn(l, a)
        }
        r.push(a)
    }
    return r
}
function Um(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
    const i = e.length;
    if (Bu(i === t.length),
        i === 1)
        return () => t[0];
    e[0] > e[i - 1] && (e = [...e].reverse(),
        t = [...t].reverse());
    const s = rw(t, r, o)
        , a = s.length
        , l = u => {
            let c = 0;
            if (a > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                    ;
            const d = Ao(e[c], e[c + 1], u);
            return s[c](d)
        }
        ;
    return n ? u => l(an(e[0], e[i - 1], u)) : l
}
function ow(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = Ao(0, t, r);
        e.push(ie(n, 1, o))
    }
}
function iw(e) {
    const t = [0];
    return ow(t, e.length - 1),
        t
}
function sw(e, t) {
    return e.map(n => n * t)
}
function aw(e, t) {
    return e.map(() => t || km).splice(0, e.length - 1)
}
function ts({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const o = U1(r) ? r.map(Pd) : Pd(r)
        , i = {
            done: !1,
            value: t[0]
        }
        , s = sw(n && n.length === t.length ? n : iw(t), e)
        , a = Um(s, t, {
            ease: Array.isArray(o) ? o : aw(t, o)
        });
    return {
        calculatedDuration: e,
        next: l => (i.value = a(l),
            i.done = l >= e,
            i)
    }
}
function $m(e, t) {
    return t ? e * (1e3 / t) : 0
}
const lw = 5;
function Wm(e, t, n) {
    const r = Math.max(t - lw, 0);
    return $m(n - e(r), t - r)
}
const pa = .001
    , uw = .01
    , Nd = 10
    , cw = .05
    , dw = 1;
function fw({ duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1 }) {
    let o, i;
    b1(e <= rn(Nd));
    let s = 1 - t;
    s = an(cw, dw, s),
        e = an(uw, Nd, Rt(e)),
        s < 1 ? (o = u => {
            const c = u * s
                , d = c * e
                , f = c - n
                , h = wl(u, s)
                , x = Math.exp(-d);
            return pa - f / h * x
        }
            ,
            i = u => {
                const d = u * s * e
                    , f = d * n + n
                    , h = Math.pow(s, 2) * Math.pow(u, 2) * e
                    , x = Math.exp(-d)
                    , y = wl(Math.pow(u, 2), s);
                return (-o(u) + pa > 0 ? -1 : 1) * ((f - h) * x) / y
            }
        ) : (o = u => {
            const c = Math.exp(-u * e)
                , d = (u - n) * e + 1;
            return -pa + c * d
        }
            ,
            i = u => {
                const c = Math.exp(-u * e)
                    , d = (n - u) * (e * e);
                return c * d
            }
        );
    const a = 5 / e
        , l = hw(o, i, a);
    if (e = rn(e),
        isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const pw = 12;
function hw(e, t, n) {
    let r = n;
    for (let o = 1; o < pw; o++)
        r = r - e(r) / t(r);
    return r
}
function wl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const mw = ["duration", "bounce"]
    , gw = ["stiffness", "damping", "mass"];
function jd(e, t) {
    return t.some(n => e[n] !== void 0)
}
function vw(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!jd(e, gw) && jd(e, mw)) {
        const n = fw(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
            t.isResolvedFromDuration = !0
    }
    return t
}
function Hm({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const o = e[0]
        , i = e[e.length - 1]
        , s = {
            done: !1,
            value: o
        }
        , { stiffness: a, damping: l, mass: u, duration: c, velocity: d, isResolvedFromDuration: f } = vw({
            ...r,
            velocity: -Rt(r.velocity || 0)
        })
        , h = d || 0
        , x = l / (2 * Math.sqrt(a * u))
        , y = i - o
        , S = Rt(Math.sqrt(a / u))
        , v = Math.abs(y) < 5;
    n || (n = v ? .01 : 2),
        t || (t = v ? .005 : .5);
    let p;
    if (x < 1) {
        const m = wl(S, x);
        p = w => {
            const C = Math.exp(-x * S * w);
            return i - C * ((h + x * S * y) / m * Math.sin(m * w) + y * Math.cos(m * w))
        }
    } else if (x === 1)
        p = m => i - Math.exp(-S * m) * (y + (h + S * y) * m);
    else {
        const m = S * Math.sqrt(x * x - 1);
        p = w => {
            const C = Math.exp(-x * S * w)
                , P = Math.min(m * w, 300);
            return i - C * ((h + x * S * y) * Math.sinh(P) + m * y * Math.cosh(P)) / m
        }
    }
    return {
        calculatedDuration: f && c || null,
        next: m => {
            const w = p(m);
            if (f)
                s.done = m >= c;
            else {
                let C = h;
                m !== 0 && (x < 1 ? C = Wm(p, m, w) : C = 0);
                const P = Math.abs(C) <= n
                    , E = Math.abs(i - w) <= t;
                s.done = P && E
            }
            return s.value = s.done ? i : w,
                s
        }
    }
}
function Rd({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: l, restDelta: u = .5, restSpeed: c }) {
    const d = e[0]
        , f = {
            done: !1,
            value: d
        }
        , h = k => a !== void 0 && k < a || l !== void 0 && k > l
        , x = k => a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l;
    let y = n * t;
    const S = d + y
        , v = s === void 0 ? S : s(S);
    v !== S && (y = v - d);
    const p = k => -y * Math.exp(-k / r)
        , m = k => v + p(k)
        , w = k => {
            const L = p(k)
                , b = m(k);
            f.done = Math.abs(L) <= u,
                f.value = f.done ? v : b
        }
        ;
    let C, P;
    const E = k => {
        h(f.value) && (C = k,
            P = Hm({
                keyframes: [f.value, x(f.value)],
                velocity: Wm(m, k, f.value),
                damping: o,
                stiffness: i,
                restDelta: u,
                restSpeed: c
            }))
    }
        ;
    return E(0),
    {
        calculatedDuration: null,
        next: k => {
            let L = !1;
            return !P && C === void 0 && (L = !0,
                w(k),
                E(k)),
                C !== void 0 && k > C ? P.next(k - C) : (!L && w(k),
                    f)
        }
    }
}
const yw = e => {
    const t = ({ timestamp: n }) => e(n);
    return {
        start: () => q.update(t, !0),
        stop: () => Dt(t),
        now: () => Ee.isProcessing ? Ee.timestamp : performance.now()
    }
}
    , Md = 2e4;
function Ld(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Md;)
        t += n,
            r = e.next(t);
    return t >= Md ? 1 / 0 : t
}
const xw = {
    decay: Rd,
    inertia: Rd,
    tween: ts,
    keyframes: ts,
    spring: Hm
};
function ns({ autoplay: e = !0, delay: t = 0, driver: n = yw, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
    let h = 1, x = !1, y, S;
    const v = () => {
        S = new Promise(O => {
            y = O
        }
        )
    }
        ;
    v();
    let p;
    const m = xw[o] || ts;
    let w;
    m !== ts && typeof r[0] != "number" && (w = Um([0, 100], r, {
        clamp: !1
    }),
        r = [0, 100]);
    const C = m({
        ...f,
        keyframes: r
    });
    let P;
    a === "mirror" && (P = m({
        ...f,
        keyframes: [...r].reverse(),
        velocity: -(f.velocity || 0)
    }));
    let E = "idle"
        , k = null
        , L = null
        , b = null;
    C.calculatedDuration === null && i && (C.calculatedDuration = Ld(C));
    const { calculatedDuration: W } = C;
    let D = 1 / 0
        , ne = 1 / 0;
    W !== null && (D = W + s,
        ne = D * (i + 1) - s);
    let R = 0;
    const Z = O => {
        if (L === null)
            return;
        h > 0 && (L = Math.min(L, O)),
            h < 0 && (L = Math.min(O - ne / h, L)),
            k !== null ? R = k : R = Math.round(O - L) * h;
        const U = R - t * (h >= 0 ? 1 : -1)
            , G = h >= 0 ? U < 0 : U > ne;
        R = Math.max(U, 0),
            E === "finished" && k === null && (R = ne);
        let ze = R
            , Un = C;
        if (i) {
            const Ls = Math.min(R, ne) / D;
            let Fo = Math.floor(Ls)
                , mn = Ls % 1;
            !mn && Ls >= 1 && (mn = 1),
                mn === 1 && Fo--,
                Fo = Math.min(Fo, i + 1),
                !!(Fo % 2) && (a === "reverse" ? (mn = 1 - mn,
                    s && (mn -= s / D)) : a === "mirror" && (Un = P)),
                ze = an(0, 1, mn) * D
        }
        const Be = G ? {
            done: !1,
            value: r[0]
        } : Un.next(ze);
        w && (Be.value = w(Be.value));
        let { done: hn } = Be;
        !G && W !== null && (hn = h >= 0 ? R >= ne : R <= 0);
        const iv = k === null && (E === "finished" || E === "running" && hn);
        return d && d(Be.value),
            iv && N(),
            Be
    }
        , B = () => {
            p && p.stop(),
                p = void 0
        }
        , ce = () => {
            E = "idle",
                B(),
                y(),
                v(),
                L = b = null
        }
        , N = () => {
            E = "finished",
                c && c(),
                B(),
                y()
        }
        , M = () => {
            if (x)
                return;
            p || (p = n(Z));
            const O = p.now();
            l && l(),
                k !== null ? L = O - k : (!L || E === "finished") && (L = O),
                E === "finished" && v(),
                b = L,
                k = null,
                E = "running",
                p.start()
        }
        ;
    e && M();
    const V = {
        then(O, U) {
            return S.then(O, U)
        },
        get time() {
            return Rt(R)
        },
        set time(O) {
            O = rn(O),
                R = O,
                k !== null || !p || h === 0 ? k = O : L = p.now() - O / h
        },
        get duration() {
            const O = C.calculatedDuration === null ? Ld(C) : C.calculatedDuration;
            return Rt(O)
        },
        get speed() {
            return h
        },
        set speed(O) {
            O === h || !p || (h = O,
                V.time = Rt(R))
        },
        get state() {
            return E
        },
        play: M,
        pause: () => {
            E = "paused",
                k = R
        }
        ,
        stop: () => {
            x = !0,
                E !== "idle" && (E = "idle",
                    u && u(),
                    ce())
        }
        ,
        cancel: () => {
            b !== null && Z(b),
                ce()
        }
        ,
        complete: () => {
            E = "finished"
        }
        ,
        sample: O => (L = 0,
            Z(O))
    };
    return V
}
function ww(e) {
    let t;
    return () => (t === void 0 && (t = e()),
        t)
}
const Sw = ww(() => Object.hasOwnProperty.call(Element.prototype, "animate"))
    , Tw = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
    , ii = 10
    , Cw = 2e4
    , Ew = (e, t) => t.type === "spring" || e === "backgroundColor" || !Tm(t.ease);
function Pw(e, t, { onUpdate: n, onComplete: r, ...o }) {
    if (!(Sw() && Tw.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
        return !1;
    let s = !1, a, l, u = !1;
    const c = () => {
        l = new Promise(m => {
            a = m
        }
        )
    }
        ;
    c();
    let { keyframes: d, duration: f = 300, ease: h, times: x } = o;
    if (Ew(t, o)) {
        const m = ns({
            ...o,
            repeat: 0,
            delay: 0
        });
        let w = {
            done: !1,
            value: d[0]
        };
        const C = [];
        let P = 0;
        for (; !w.done && P < Cw;)
            w = m.sample(P),
                C.push(w.value),
                P += ii;
        x = void 0,
            d = C,
            f = P - ii,
            h = "linear"
    }
    const y = D1(e.owner.current, t, d, {
        ...o,
        duration: f,
        ease: h,
        times: x
    })
        , S = () => {
            u = !1,
                y.cancel()
        }
        , v = () => {
            u = !0,
                q.update(S),
                a(),
                c()
        }
        ;
    return y.onfinish = () => {
        u || (e.set(_1(d, o)),
            r && r(),
            v())
    }
        ,
    {
        then(m, w) {
            return l.then(m, w)
        },
        attachTimeline(m) {
            return y.timeline = m,
                y.onfinish = null,
                ue
        },
        get time() {
            return Rt(y.currentTime || 0)
        },
        set time(m) {
            y.currentTime = rn(m)
        },
        get speed() {
            return y.playbackRate
        },
        set speed(m) {
            y.playbackRate = m
        },
        get duration() {
            return Rt(f)
        },
        play: () => {
            s || (y.play(),
                Dt(S))
        }
        ,
        pause: () => y.pause(),
        stop: () => {
            if (s = !0,
                y.playState === "idle")
                return;
            const { currentTime: m } = y;
            if (m) {
                const w = ns({
                    ...o,
                    autoplay: !1
                });
                e.setWithVelocity(w.sample(m - ii).value, w.sample(m).value, ii)
            }
            v()
        }
        ,
        complete: () => {
            u || y.finish()
        }
        ,
        cancel: v
    }
}
function kw({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
    const o = () => (n && n(e[e.length - 1]),
        r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: ue,
        pause: ue,
        stop: ue,
        then: i => (i(),
            Promise.resolve()),
        cancel: ue,
        complete: ue
    });
    return t ? ns({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: o
    }) : o()
}
const Aw = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
    , Nw = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    })
    , jw = {
        type: "keyframes",
        duration: .8
    }
    , Rw = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }
    , Mw = (e, { keyframes: t }) => t.length > 2 ? jw : In.has(e) ? e.startsWith("scale") ? Nw(t[1]) : Aw : Rw
    , Sl = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (ln.test(t) || t === "0") && !t.startsWith("url("))
    , Lw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function bw(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Ns) || [];
    if (!r)
        return e;
    const o = n.replace(r, "");
    let i = Lw.has(t) ? 1 : 0;
    return r !== n && (i *= 100),
        t + "(" + i + o + ")"
}
const Ow = /([a-z-]*)\(.*?\)/g
    , Tl = {
        ...ln,
        getAnimatableNone: e => {
            const t = e.match(Ow);
            return t ? t.map(bw).join(" ") : e
        }
    }
    , Dw = {
        ...sm,
        color: Ae,
        backgroundColor: Ae,
        outlineColor: Ae,
        fill: Ae,
        stroke: Ae,
        borderColor: Ae,
        borderTopColor: Ae,
        borderRightColor: Ae,
        borderBottomColor: Ae,
        borderLeftColor: Ae,
        filter: Tl,
        WebkitFilter: Tl
    }
    , Hu = e => Dw[e];
function Gm(e, t) {
    let n = Hu(e);
    return n !== Tl && (n = ln),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Km = e => /^0[^.\s]+$/.test(e);
function _w(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || Km(e)
}
function Vw(e, t, n, r) {
    const o = Sl(t, n);
    let i;
    Array.isArray(n) ? i = [...n] : i = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < i.length; u++)
        i[u] === null && (i[u] = u === 0 ? s : i[u - 1]),
            _w(i[u]) && l.push(u),
            typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (a = i[u]);
    if (o && l.length && a)
        for (let u = 0; u < l.length; u++) {
            const c = l[u];
            i[c] = Gm(t, a)
        }
    return i
}
function Iw({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length
}
function Gu(e, t) {
    return e[t] || e.default || e
}
const Fw = {
    skipAnimations: !1
}
    , Ku = (e, t, n, r = {}) => o => {
        const i = Gu(r, e) || {}
            , s = i.delay || r.delay || 0;
        let { elapsed: a = 0 } = r;
        a = a - rn(s);
        const l = Vw(t, e, n, i)
            , u = l[0]
            , c = l[l.length - 1]
            , d = Sl(e, u)
            , f = Sl(e, c);
        let h = {
            keyframes: l,
            velocity: t.getVelocity(),
            ease: "easeOut",
            ...i,
            delay: -a,
            onUpdate: x => {
                t.set(x),
                    i.onUpdate && i.onUpdate(x)
            }
            ,
            onComplete: () => {
                o(),
                    i.onComplete && i.onComplete()
            }
        };
        if (Iw(i) || (h = {
            ...h,
            ...Mw(e, h)
        }),
            h.duration && (h.duration = rn(h.duration)),
            h.repeatDelay && (h.repeatDelay = rn(h.repeatDelay)),
            !d || !f || O1.current || i.type === !1 || Fw.skipAnimations)
            return kw(h);
        if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
            const x = Pw(t, e, h);
            if (x)
                return x
        }
        return ns(h)
    }
    ;
function rs(e) {
    return !!(Fe(e) && e.add)
}
const Ym = e => /^\-?\d*\.?\d+$/.test(e);
function Yu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Qu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Xu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Yu(this.subscriptions, t),
            () => Qu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const s = this.subscriptions[i];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const zw = e => !isNaN(parseFloat(e));
class Bw {
    constructor(t, n = {}) {
        this.version = "10.18.0",
            this.timeDelta = 0,
            this.lastUpdated = 0,
            this.canTrackVelocity = !1,
            this.events = {},
            this.updateAndNotify = (r, o = !0) => {
                this.prev = this.current,
                    this.current = r;
                const { delta: i, timestamp: s } = Ee;
                this.lastUpdated !== s && (this.timeDelta = i,
                    this.lastUpdated = s,
                    q.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
            }
            ,
            this.scheduleVelocityCheck = () => q.postRender(this.velocityCheck),
            this.velocityCheck = ({ timestamp: r }) => {
                r !== this.lastUpdated && (this.prev = this.current,
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
            }
            ,
            this.hasAnimated = !1,
            this.prev = this.current = t,
            this.canTrackVelocity = zw(this.current),
            this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Xu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
                q.read(() => {
                    this.events.change.getSize() || this.stop()
                }
                )
        }
            : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
            this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
            this.prev = t,
            this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t),
            this.prev = t,
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? $m(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
            new Promise(n => {
                this.hasAnimated = !0,
                    this.animation = t(n),
                    this.events.animationStart && this.events.animationStart.notify()
            }
            ).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
            }
            )
    }
    stop() {
        this.animation && (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Tr(e, t) {
    return new Bw(e, t)
}
const Qm = e => t => t.test(e)
    , Uw = {
        test: e => e === "auto",
        parse: e => e
    }
    , Xm = [Fn, _, xt, Ft, Yx, Kx, Uw]
    , Ir = e => Xm.find(Qm(e))
    , $w = [...Xm, Ae, ln]
    , Ww = e => $w.find(Qm(e));
function Hw(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Tr(n))
}
function Gw(e, t) {
    const n = Rs(e, t);
    let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
    i = {
        ...i,
        ...r
    };
    for (const s in i) {
        const a = u1(i[s]);
        Hw(e, s, a)
    }
}
function Kw(e, t, n) {
    var r, o;
    const i = Object.keys(t).filter(a => !e.hasValue(a))
        , s = i.length;
    if (s)
        for (let a = 0; a < s; a++) {
            const l = i[a]
                , u = t[l];
            let c = null;
            Array.isArray(u) && (c = u[0]),
                c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]),
                c != null && (typeof c == "string" && (Ym(c) || Km(c)) ? c = parseFloat(c) : !Ww(c) && ln.test(u) && (c = Gm(l, u)),
                    e.addValue(l, Tr(c, {
                        owner: e
                    })),
                    n[l] === void 0 && (n[l] = c),
                    c !== null && e.setBaseTarget(l, c))
        }
}
function Yw(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function Qw(e, t, n) {
    const r = {};
    for (const o in e) {
        const i = Yw(o, t);
        if (i !== void 0)
            r[o] = i;
        else {
            const s = n.getValue(o);
            s && (r[o] = s.get())
        }
    }
    return r
}
function Xw({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
        r
}
function qw(e, t) {
    const n = e.get();
    if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++)
            if (t[r] !== n)
                return !0
    } else
        return n !== t
}
function qm(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
    let { transition: i = e.getDefaultTransition(), transitionEnd: s, ...a } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (i = r);
    const u = []
        , c = o && e.animationState && e.animationState.getState()[o];
    for (const d in a) {
        const f = e.getValue(d)
            , h = a[d];
        if (!f || h === void 0 || c && Xw(c, d))
            continue;
        const x = {
            delay: n,
            elapsed: 0,
            ...Gu(i || {}, d)
        };
        if (window.HandoffAppearAnimations) {
            const v = e.getProps()[Zh];
            if (v) {
                const p = window.HandoffAppearAnimations(v, d, f, q);
                p !== null && (x.elapsed = p,
                    x.isHandoff = !0)
            }
        }
        let y = !x.isHandoff && !qw(f, h);
        if (x.type === "spring" && (f.getVelocity() || x.velocity) && (y = !1),
            f.animation && (y = !1),
            y)
            continue;
        f.start(Ku(d, f, h, e.shouldReduceMotion && In.has(d) ? {
            type: !1
        } : x));
        const S = f.animation;
        rs(l) && (l.add(d),
            S.then(() => l.remove(d))),
            u.push(S)
    }
    return s && Promise.all(u).then(() => {
        s && Gw(e, s)
    }
    ),
        u
}
function Cl(e, t, n = {}) {
    const r = Rs(e, t, n.custom);
    let { transition: o = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const i = r ? () => Promise.all(qm(e, r, n)) : () => Promise.resolve()
        , s = e.variantChildren && e.variantChildren.size ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
            return Zw(e, t, u + l, c, d, n)
        }
            : () => Promise.resolve()
        , { when: a } = o;
    if (a) {
        const [l, u] = a === "beforeChildren" ? [i, s] : [s, i];
        return l().then(() => u())
    } else
        return Promise.all([i(), s(n.delay)])
}
function Zw(e, t, n = 0, r = 0, o = 1, i) {
    const s = []
        , a = (e.variantChildren.size - 1) * r
        , l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(Jw).forEach((u, c) => {
        u.notify("AnimationStart", t),
            s.push(Cl(u, t, {
                ...i,
                delay: n + l(c)
            }).then(() => u.notify("AnimationComplete", t)))
    }
    ),
        Promise.all(s)
}
function Jw(e, t) {
    return e.sortNodePosition(t)
}
function eS(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(i => Cl(e, i, n));
        r = Promise.all(o)
    } else if (typeof t == "string")
        r = Cl(e, t, n);
    else {
        const o = typeof t == "function" ? Rs(e, t, n.custom) : t;
        r = Promise.all(qm(e, o, n))
    }
    return r.then(() => e.notify("AnimationComplete", t))
}
const tS = [...Lu].reverse()
    , nS = Lu.length;
function rS(e) {
    return t => Promise.all(t.map(({ animation: n, options: r }) => eS(e, n, r)))
}
function oS(e) {
    let t = rS(e);
    const n = sS();
    let r = !0;
    const o = (l, u) => {
        const c = Rs(e, u);
        if (c) {
            const { transition: d, transitionEnd: f, ...h } = c;
            l = {
                ...l,
                ...h,
                ...f
            }
        }
        return l
    }
        ;
    function i(l) {
        t = l(e)
    }
    function s(l, u) {
        const c = e.getProps()
            , d = e.getVariantContext(!0) || {}
            , f = []
            , h = new Set;
        let x = {}
            , y = 1 / 0;
        for (let v = 0; v < nS; v++) {
            const p = tS[v]
                , m = n[p]
                , w = c[p] !== void 0 ? c[p] : d[p]
                , C = Po(w)
                , P = p === u ? m.isActive : null;
            P === !1 && (y = v);
            let E = w === d[p] && w !== c[p] && C;
            if (E && r && e.manuallyAnimateOnMount && (E = !1),
                m.protectedKeys = {
                    ...x
                },
                !m.isActive && P === null || !w && !m.prevProp || ks(w) || typeof w == "boolean")
                continue;
            let L = iS(m.prevProp, w) || p === u && m.isActive && !E && C || v > y && C
                , b = !1;
            const W = Array.isArray(w) ? w : [w];
            let D = W.reduce(o, {});
            P === !1 && (D = {});
            const { prevResolvedValues: ne = {} } = m
                , R = {
                    ...ne,
                    ...D
                }
                , Z = B => {
                    L = !0,
                        h.has(B) && (b = !0,
                            h.delete(B)),
                        m.needsAnimating[B] = !0
                }
                ;
            for (const B in R) {
                const ce = D[B]
                    , N = ne[B];
                if (x.hasOwnProperty(B))
                    continue;
                let M = !1;
                Ji(ce) && Ji(N) ? M = !wm(ce, N) : M = ce !== N,
                    M ? ce !== void 0 ? Z(B) : h.add(B) : ce !== void 0 && h.has(B) ? Z(B) : m.protectedKeys[B] = !0
            }
            m.prevProp = w,
                m.prevResolvedValues = D,
                m.isActive && (x = {
                    ...x,
                    ...D
                }),
                r && e.blockInitialAnimation && (L = !1),
                L && (!E || b) && f.push(...W.map(B => ({
                    animation: B,
                    options: {
                        type: p,
                        ...l
                    }
                })))
        }
        if (h.size) {
            const v = {};
            h.forEach(p => {
                const m = e.getBaseTarget(p);
                m !== void 0 && (v[p] = m)
            }
            ),
                f.push({
                    animation: v
                })
        }
        let S = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (S = !1),
            r = !1,
            S ? t(f) : Promise.resolve()
    }
    function a(l, u, c) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
            var x;
            return (x = h.animationState) === null || x === void 0 ? void 0 : x.setActive(l, u)
        }
        ),
            n[l].isActive = u;
        const f = s(c, l);
        for (const h in n)
            n[h].protectedKeys = {};
        return f
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n
    }
}
function iS(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !wm(t, e) : !1
}
function gn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function sS() {
    return {
        animate: gn(!0),
        whileInView: gn(),
        whileHover: gn(),
        whileTap: gn(),
        whileDrag: gn(),
        whileFocus: gn(),
        exit: gn()
    }
}
class aS extends pn {
    constructor(t) {
        super(t),
            t.animationState || (t.animationState = oS(t))
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        this.unmount(),
            ks(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const { animate: t } = this.node.getProps()
            , { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() { }
}
let lS = 0;
class uS extends pn {
    constructor() {
        super(...arguments),
            this.id = lS++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext
            , { isPresent: o } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === o)
            return;
        const i = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom
        });
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const { register: t } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() { }
}
const cS = {
    animation: {
        Feature: aS
    },
    exit: {
        Feature: uS
    }
}
    , bd = (e, t) => Math.abs(e - t);
function dS(e, t) {
    const n = bd(e.x, t.x)
        , r = bd(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Zm {
    constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
        if (this.startEvent = null,
            this.lastMoveEvent = null,
            this.lastMoveEventInfo = null,
            this.handlers = {},
            this.contextWindow = window,
            this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const d = ma(this.lastMoveEventInfo, this.history)
                    , f = this.startEvent !== null
                    , h = dS(d.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!f && !h)
                    return;
                const { point: x } = d
                    , { timestamp: y } = Ee;
                this.history.push({
                    ...x,
                    timestamp: y
                });
                const { onStart: S, onMove: v } = this.handlers;
                f || (S && S(this.lastMoveEvent, d),
                    this.startEvent = this.lastMoveEvent),
                    v && v(this.lastMoveEvent, d)
            }
            ,
            this.handlePointerMove = (d, f) => {
                this.lastMoveEvent = d,
                    this.lastMoveEventInfo = ha(f, this.transformPagePoint),
                    q.update(this.updatePoint, !0)
            }
            ,
            this.handlePointerUp = (d, f) => {
                this.end();
                const { onEnd: h, onSessionEnd: x, resumeAnimation: y } = this.handlers;
                if (this.dragSnapToOrigin && y && y(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const S = ma(d.type === "pointercancel" ? this.lastMoveEventInfo : ha(f, this.transformPagePoint), this.history);
                this.startEvent && h && h(d, S),
                    x && x(d, S)
            }
            ,
            !mm(t))
            return;
        this.dragSnapToOrigin = i,
            this.handlers = n,
            this.transformPagePoint = r,
            this.contextWindow = o || window;
        const s = js(t)
            , a = ha(s, this.transformPagePoint)
            , { point: l } = a
            , { timestamp: u } = Ee;
        this.history = [{
            ...l,
            timestamp: u
        }];
        const { onSessionStart: c } = n;
        c && c(t, ma(a, this.history)),
            this.removeListeners = nn(jt(this.contextWindow, "pointermove", this.handlePointerMove), jt(this.contextWindow, "pointerup", this.handlePointerUp), jt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
            Dt(this.updatePoint)
    }
}
function ha(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Od(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function ma({ point: e }, t) {
    return {
        point: e,
        delta: Od(e, Jm(t)),
        offset: Od(e, fS(t)),
        velocity: pS(t, .1)
    }
}
function fS(e) {
    return e[0]
}
function Jm(e) {
    return e[e.length - 1]
}
function pS(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
        , r = null;
    const o = Jm(e);
    for (; n >= 0 && (r = e[n],
        !(o.timestamp - r.timestamp > rn(t)));)
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const i = Rt(o.timestamp - r.timestamp);
    if (i === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (o.x - r.x) / i,
        y: (o.y - r.y) / i
    };
    return s.x === 1 / 0 && (s.x = 0),
        s.y === 1 / 0 && (s.y = 0),
        s
}
function Ke(e) {
    return e.max - e.min
}
function El(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}
function Dd(e, t, n, r = .5) {
    e.origin = r,
        e.originPoint = ie(t.min, t.max, e.origin),
        e.scale = Ke(n) / Ke(t),
        (El(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        e.translate = ie(n.min, n.max, e.origin) - e.originPoint,
        (El(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function oo(e, t, n, r) {
    Dd(e.x, t.x, n.x, r ? r.originX : void 0),
        Dd(e.y, t.y, n.y, r ? r.originY : void 0)
}
function _d(e, t, n) {
    e.min = n.min + t.min,
        e.max = e.min + Ke(t)
}
function hS(e, t, n) {
    _d(e.x, t.x, n.x),
        _d(e.y, t.y, n.y)
}
function Vd(e, t, n) {
    e.min = t.min - n.min,
        e.max = e.min + Ke(t)
}
function io(e, t, n) {
    Vd(e.x, t.x, n.x),
        Vd(e.y, t.y, n.y)
}
function mS(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? ie(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ie(n, e, r.max) : Math.min(e, n)),
        e
}
function Id(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function gS(e, { top: t, left: n, bottom: r, right: o }) {
    return {
        x: Id(e.x, n, o),
        y: Id(e.y, t, r)
    }
}
function Fd(e, t) {
    let n = t.min - e.min
        , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function vS(e, t) {
    return {
        x: Fd(e.x, t.x),
        y: Fd(e.y, t.y)
    }
}
function yS(e, t) {
    let n = .5;
    const r = Ke(e)
        , o = Ke(t);
    return o > r ? n = Ao(t.min, t.max - r, e.min) : r > o && (n = Ao(e.min, e.max - o, t.min)),
        an(0, 1, n)
}
function xS(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
        t.max !== void 0 && (n.max = t.max - e.min),
        n
}
const Pl = .35;
function wS(e = Pl) {
    return e === !1 ? e = 0 : e === !0 && (e = Pl),
    {
        x: zd(e, "left", "right"),
        y: zd(e, "top", "bottom")
    }
}
function zd(e, t, n) {
    return {
        min: Bd(e, t),
        max: Bd(e, n)
    }
}
function Bd(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Ud = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
    , sr = () => ({
        x: Ud(),
        y: Ud()
    })
    , $d = () => ({
        min: 0,
        max: 0
    })
    , fe = () => ({
        x: $d(),
        y: $d()
    });
function qe(e) {
    return [e("x"), e("y")]
}
function eg({ top: e, left: t, right: n, bottom: r }) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function SS({ x: e, y: t }) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function TS(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
        , r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function ga(e) {
    return e === void 0 || e === 1
}
function kl({ scale: e, scaleX: t, scaleY: n }) {
    return !ga(e) || !ga(t) || !ga(n)
}
function xn(e) {
    return kl(e) || tg(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function tg(e) {
    return Wd(e.x) || Wd(e.y)
}
function Wd(e) {
    return e && e !== "0%"
}
function os(e, t, n) {
    const r = e - n
        , o = t * r;
    return n + o
}
function Hd(e, t, n, r, o) {
    return o !== void 0 && (e = os(e, o, r)),
        os(e, n, r) + t
}
function Al(e, t = 0, n = 1, r, o) {
    e.min = Hd(e.min, t, n, r, o),
        e.max = Hd(e.max, t, n, r, o)
}
function ng(e, { x: t, y: n }) {
    Al(e.x, t.translate, t.scale, t.originPoint),
        Al(e.y, n.translate, n.scale, n.originPoint)
}
function CS(e, t, n, r = !1) {
    const o = n.length;
    if (!o)
        return;
    t.x = t.y = 1;
    let i, s;
    for (let a = 0; a < o; a++) {
        i = n[a],
            s = i.projectionDelta;
        const l = i.instance;
        l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && ar(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }),
            s && (t.x *= s.x.scale,
                t.y *= s.y.scale,
                ng(e, s)),
            r && xn(i.latestValues) && ar(e, i.latestValues))
    }
    t.x = Gd(t.x),
        t.y = Gd(t.y)
}
function Gd(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function Ut(e, t) {
    e.min = e.min + t,
        e.max = e.max + t
}
function Kd(e, t, [n, r, o]) {
    const i = t[o] !== void 0 ? t[o] : .5
        , s = ie(e.min, e.max, i);
    Al(e, t[n], t[r], s, t.scale)
}
const ES = ["x", "scaleX", "originX"]
    , PS = ["y", "scaleY", "originY"];
function ar(e, t) {
    Kd(e.x, t, ES),
        Kd(e.y, t, PS)
}
function rg(e, t) {
    return eg(TS(e.getBoundingClientRect(), t))
}
function kS(e, t, n) {
    const r = rg(e, n)
        , { scroll: o } = t;
    return o && (Ut(r.x, o.offset.x),
        Ut(r.y, o.offset.y)),
        r
}
const og = ({ current: e }) => e ? e.ownerDocument.defaultView : null
    , AS = new WeakMap;
class NS {
    constructor(t) {
        this.openGlobalLock = null,
            this.isDragging = !1,
            this.currentDirection = null,
            this.originPoint = {
                x: 0,
                y: 0
            },
            this.constraints = !1,
            this.hasMutatedConstraints = !1,
            this.elastic = fe(),
            this.visualElement = t
    }
    start(t, { snapToCursor: n = !1 } = {}) {
        const { presenceContext: r } = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const o = c => {
            const { dragSnapToOrigin: d } = this.getProps();
            d ? this.pauseAnimation() : this.stopAnimation(),
                n && this.snapToCursor(js(c, "page").point)
        }
            , i = (c, d) => {
                const { drag: f, dragPropagation: h, onDragStart: x } = this.getProps();
                if (f && !h && (this.openGlobalLock && this.openGlobalLock(),
                    this.openGlobalLock = vm(f),
                    !this.openGlobalLock))
                    return;
                this.isDragging = !0,
                    this.currentDirection = null,
                    this.resolveConstraints(),
                    this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                    qe(S => {
                        let v = this.getAxisMotionValue(S).get() || 0;
                        if (xt.test(v)) {
                            const { projection: p } = this.visualElement;
                            if (p && p.layout) {
                                const m = p.layout.layoutBox[S];
                                m && (v = Ke(m) * (parseFloat(v) / 100))
                            }
                        }
                        this.originPoint[S] = v
                    }
                    ),
                    x && q.update(() => x(c, d), !1, !0);
                const { animationState: y } = this.visualElement;
                y && y.setActive("whileDrag", !0)
            }
            , s = (c, d) => {
                const { dragPropagation: f, dragDirectionLock: h, onDirectionLock: x, onDrag: y } = this.getProps();
                if (!f && !this.openGlobalLock)
                    return;
                const { offset: S } = d;
                if (h && this.currentDirection === null) {
                    this.currentDirection = jS(S),
                        this.currentDirection !== null && x && x(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, S),
                    this.updateAxis("y", d.point, S),
                    this.visualElement.render(),
                    y && y(c, d)
            }
            , a = (c, d) => this.stop(c, d)
            , l = () => qe(c => {
                var d;
                return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
            }
            )
            , { dragSnapToOrigin: u } = this.getProps();
        this.panSession = new Zm(t, {
            onSessionStart: o,
            onStart: i,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: og(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
            !r)
            return;
        const { velocity: o } = n;
        this.startAnimation(o);
        const { onDragEnd: i } = this.getProps();
        i && q.update(() => i(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            this.panSession = void 0;
        const { dragPropagation: r } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
            this.openGlobalLock = null),
            n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const { drag: o } = this.getProps();
        if (!r || !si(t, o, this.currentDirection))
            return;
        const i = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = mS(s, this.constraints[t], this.elastic[t])),
            i.set(s)
    }
    resolveConstraints() {
        var t;
        const { dragConstraints: n, dragElastic: r } = this.getProps()
            , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
            , i = this.constraints;
        n && or(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = gS(o.layoutBox, n) : this.constraints = !1,
            this.elastic = wS(r),
            i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && qe(s => {
                this.getAxisMotionValue(s) && (this.constraints[s] = xS(o.layoutBox[s], this.constraints[s]))
            }
            )
    }
    resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
        if (!t || !or(t))
            return !1;
        const r = t.current
            , { projection: o } = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const i = kS(r, o.root, this.visualElement.getTransformPagePoint());
        let s = vS(o.layout.layoutBox, i);
        if (n) {
            const a = n(SS(s));
            this.hasMutatedConstraints = !!a,
                a && (s = eg(a))
        }
        return s
    }
    startAnimation(t) {
        const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps()
            , l = this.constraints || {}
            , u = qe(c => {
                if (!si(c, n, this.currentDirection))
                    return;
                let d = l && l[c] || {};
                s && (d = {
                    min: 0,
                    max: 0
                });
                const f = o ? 200 : 1e6
                    , h = o ? 40 : 1e7
                    , x = {
                        type: "inertia",
                        velocity: r ? t[c] : 0,
                        bounceStiffness: f,
                        bounceDamping: h,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...d
                    };
                return this.startAxisValueAnimation(c, x)
            }
            );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Ku(t, r, 0, n))
    }
    stopAnimation() {
        qe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        qe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase()
            , r = this.visualElement.getProps()
            , o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        qe(n => {
            const { drag: r } = this.getProps();
            if (!si(n, r, this.currentDirection))
                return;
            const { projection: o } = this.visualElement
                , i = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const { min: s, max: a } = o.layout.layoutBox[n];
                i.set(t[n] - ie(s, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag: t, dragConstraints: n } = this.getProps()
            , { projection: r } = this.visualElement;
        if (!or(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        qe(s => {
            const a = this.getAxisMotionValue(s);
            if (a) {
                const l = a.get();
                o[s] = yS({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        }
        );
        const { transformTemplate: i } = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            qe(s => {
                if (!si(s, t, null))
                    return;
                const a = this.getAxisMotionValue(s)
                    , { min: l, max: u } = this.constraints[s];
                a.set(ie(l, u, o[s]))
            }
            )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        AS.set(this.visualElement, this);
        const t = this.visualElement.current
            , n = jt(t, "pointerdown", l => {
                const { drag: u, dragListener: c = !0 } = this.getProps();
                u && c && this.start(l)
            }
            )
            , r = () => {
                const { dragConstraints: l } = this.getProps();
                or(l) && (this.constraints = this.resolveRefConstraints())
            }
            , { projection: o } = this.visualElement
            , i = o.addEventListener("measure", r);
        o && !o.layout && (o.root && o.root.updateScroll(),
            o.updateLayout()),
            r();
        const s = At(window, "resize", () => this.scalePositionWithinConstraints())
            , a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
                this.isDragging && u && (qe(c => {
                    const d = this.getAxisMotionValue(c);
                    d && (this.originPoint[c] += l[c].translate,
                        d.set(d.get() + l[c].translate))
                }
                ),
                    this.visualElement.render())
            }
            );
        return () => {
            s(),
                n(),
                i(),
                a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
            , { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = Pl, dragMomentum: a = !0 } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: a
        }
    }
}
function si(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function jS(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
        n
}
class RS extends pn {
    constructor(t) {
        super(t),
            this.removeGroupControls = ue,
            this.removeListeners = ue,
            this.controls = new NS(t)
    }
    mount() {
        const { dragControls: t } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
            this.removeListeners = this.controls.addListeners() || ue
    }
    unmount() {
        this.removeGroupControls(),
            this.removeListeners()
    }
}
const Yd = e => (t, n) => {
    e && q.update(() => e(t, n))
}
    ;
class MS extends pn {
    constructor() {
        super(...arguments),
            this.removePointerDownListener = ue
    }
    onPointerDown(t) {
        this.session = new Zm(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: og(this.node)
        })
    }
    createPanHandlers() {
        const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
        return {
            onSessionStart: Yd(t),
            onStart: Yd(n),
            onMove: r,
            onEnd: (i, s) => {
                delete this.session,
                    o && q.update(() => o(i, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = jt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
            this.session && this.session.end()
    }
}
function LS() {
    const e = T.useContext(Ru);
    if (e === null)
        return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e
        , o = T.useId();
    return T.useEffect(() => r(o), []),
        !t && n ? [!1, () => n && n(o)] : [!0]
}
const Pi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Qd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Fr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (_.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Qd(e, t.target.x)
            , r = Qd(e, t.target.y);
        return `${n}% ${r}%`
    }
}
    , bS = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const r = e
                , o = ln.parse(e);
            if (o.length > 5)
                return r;
            const i = ln.createTransformer(e)
                , s = typeof o[0] != "number" ? 1 : 0
                , a = n.x.scale * t.x
                , l = n.y.scale * t.y;
            o[0 + s] /= a,
                o[1 + s] /= l;
            const u = ie(a, l, .5);
            return typeof o[2 + s] == "number" && (o[2 + s] /= u),
                typeof o[3 + s] == "number" && (o[3 + s] /= u),
                i(o)
        }
    };
class OS extends oe.Component {
    componentDidMount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props
            , { projection: i } = t;
        zx(DS),
            i && (n.group && n.group.add(i),
                r && r.register && o && r.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                i.setOptions({
                    ...i.options,
                    onExitComplete: () => this.safeToRemove()
                })),
            Pi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props
            , s = r.projection;
        return s && (s.isPresent = i,
            o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
            t.isPresent !== i && (i ? s.promote() : s.relegate() || q.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove()
            }
            ))),
            null
    }
    componentDidUpdate() {
        const { projection: t } = this.props.visualElement;
        t && (t.root.didUpdate(),
            queueMicrotask(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }
            ))
    }
    componentWillUnmount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props
            , { projection: o } = t;
        o && (o.scheduleCheckAfterUnmount(),
            n && n.group && n.group.remove(o),
            r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function ig(e) {
    const [t, n] = LS()
        , r = T.useContext(em);
    return oe.createElement(OS, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: T.useContext(tm),
        isPresent: t,
        safeToRemove: n
    })
}
const DS = {
    borderRadius: {
        ...Fr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Fr,
    borderTopRightRadius: Fr,
    borderBottomLeftRadius: Fr,
    borderBottomRightRadius: Fr,
    boxShadow: bS
}
    , sg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
    , _S = sg.length
    , Xd = e => typeof e == "string" ? parseFloat(e) : e
    , qd = e => typeof e == "number" || _.test(e);
function VS(e, t, n, r, o, i) {
    o ? (e.opacity = ie(0, n.opacity !== void 0 ? n.opacity : 1, IS(r)),
        e.opacityExit = ie(t.opacity !== void 0 ? t.opacity : 1, 0, FS(r))) : i && (e.opacity = ie(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < _S; s++) {
        const a = `border${sg[s]}Radius`;
        let l = Zd(t, a)
            , u = Zd(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
            u || (u = 0),
            l === 0 || u === 0 || qd(l) === qd(u) ? (e[a] = Math.max(ie(Xd(l), Xd(u), r), 0),
                (xt.test(u) || xt.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = ie(t.rotate || 0, n.rotate || 0, r))
}
function Zd(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const IS = ag(0, .5, jm)
    , FS = ag(.5, .95, ue);
function ag(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Ao(e, t, r))
}
function Jd(e, t) {
    e.min = t.min,
        e.max = t.max
}
function Xe(e, t) {
    Jd(e.x, t.x),
        Jd(e.y, t.y)
}
function ef(e, t, n, r, o) {
    return e -= t,
        e = os(e, 1 / n, r),
        o !== void 0 && (e = os(e, 1 / o, r)),
        e
}
function zS(e, t = 0, n = 1, r = .5, o, i = e, s = e) {
    if (xt.test(t) && (t = parseFloat(t),
        t = ie(s.min, s.max, t / 100) - s.min),
        typeof t != "number")
        return;
    let a = ie(i.min, i.max, r);
    e === i && (a -= t),
        e.min = ef(e.min, t, n, a, o),
        e.max = ef(e.max, t, n, a, o)
}
function tf(e, t, [n, r, o], i, s) {
    zS(e, t[n], t[r], t[o], t.scale, i, s)
}
const BS = ["x", "scaleX", "originX"]
    , US = ["y", "scaleY", "originY"];
function nf(e, t, n, r) {
    tf(e.x, t, BS, n ? n.x : void 0, r ? r.x : void 0),
        tf(e.y, t, US, n ? n.y : void 0, r ? r.y : void 0)
}
function rf(e) {
    return e.translate === 0 && e.scale === 1
}
function lg(e) {
    return rf(e.x) && rf(e.y)
}
function $S(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function ug(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function of(e) {
    return Ke(e.x) / Ke(e.y)
}
class WS {
    constructor() {
        this.members = []
    }
    add(t) {
        Yu(this.members, t),
            t.scheduleRender()
    }
    remove(t) {
        if (Qu(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0)
            return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const i = this.members[o];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r),
            !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
            this.lead = t,
            t.show(),
            r)) {
            r.instance && r.scheduleRender(),
                t.scheduleRender(),
                t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                    t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const { crossfade: o } = t.options;
            o === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const { options: n, resumingFrom: r } = t;
            n.onExitComplete && n.onExitComplete(),
                r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function sf(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x
        , i = e.y.translate / t.y;
    if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n) {
        const { rotate: l, rotateX: u, rotateY: c } = n;
        l && (r += `rotate(${l}deg) `),
            u && (r += `rotateX(${u}deg) `),
            c && (r += `rotateY(${c}deg) `)
    }
    const s = e.x.scale * t.x
        , a = e.y.scale * t.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`),
        r || "none"
}
const HS = (e, t) => e.depth - t.depth;
class GS {
    constructor() {
        this.children = [],
            this.isDirty = !1
    }
    add(t) {
        Yu(this.children, t),
            this.isDirty = !0
    }
    remove(t) {
        Qu(this.children, t),
            this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(HS),
            this.isDirty = !1,
            this.children.forEach(t)
    }
}
function KS(e, t) {
    const n = performance.now()
        , r = ({ timestamp: o }) => {
            const i = o - n;
            i >= t && (Dt(r),
                e(i - t))
        }
        ;
    return q.read(r, !0),
        () => Dt(r)
}
function YS(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function QS(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function XS(e, t, n) {
    const r = Fe(e) ? e : Tr(e);
    return r.start(Ku("", r, t, n)),
        r.animation
}
const af = ["", "X", "Y", "Z"]
    , qS = {
        visibility: "hidden"
    }
    , lf = 1e3;
let ZS = 0;
const wn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function cg({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            this.id = ZS++,
                this.animationId = 0,
                this.children = new Set,
                this.options = {},
                this.isTreeAnimating = !1,
                this.isAnimationBlocked = !1,
                this.isLayoutDirty = !1,
                this.isProjectionDirty = !1,
                this.isSharedProjectionDirty = !1,
                this.isTransformDirty = !1,
                this.updateManuallyBlocked = !1,
                this.updateBlockedByResize = !1,
                this.isUpdating = !1,
                this.isSVG = !1,
                this.needsReset = !1,
                this.shouldResetTransform = !1,
                this.treeScale = {
                    x: 1,
                    y: 1
                },
                this.eventHandlers = new Map,
                this.hasTreeAnimated = !1,
                this.updateScheduled = !1,
                this.projectionUpdateScheduled = !1,
                this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                }
                ,
                this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1,
                        wn.totalNodes = wn.resolvedTargetDeltas = wn.recalculatedProjection = 0,
                        this.nodes.forEach(tT),
                        this.nodes.forEach(sT),
                        this.nodes.forEach(aT),
                        this.nodes.forEach(nT),
                        YS(wn)
                }
                ,
                this.hasProjected = !1,
                this.isVisible = !0,
                this.animationProgress = 0,
                this.sharedNodes = new Map,
                this.latestValues = s,
                this.root = a ? a.root || a : this,
                this.path = a ? [...a.path, a] : [],
                this.parent = a,
                this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new GS)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Xu),
                this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = QS(s),
                this.instance = s;
            const { layoutId: l, layout: u, visualElement: c } = this.options;
            if (c && !c.current && c.mount(s),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                a && (u || l) && (this.isLayoutDirty = !0),
                e) {
                let d;
                const f = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                        d && d(),
                        d = KS(f, 250),
                        Pi.hasAnimatedSinceResize && (Pi.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(cf))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
                this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: x }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0,
                            this.relativeTarget = void 0;
                        return
                    }
                    const y = this.options.transition || c.getDefaultTransition() || fT
                        , { onLayoutAnimationStart: S, onLayoutAnimationComplete: v } = c.getProps()
                        , p = !this.targetLayout || !ug(this.targetLayout, x) || h
                        , m = !f && h;
                    if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || f && (p || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(d, m);
                        const w = {
                            ...Gu(y, "layout"),
                            onPlay: S,
                            onComplete: v
                        };
                        (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                            w.type = !1),
                            this.startAnimation(w)
                    } else
                        f || cf(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = x
                }
                )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
                this.parent && this.parent.children.delete(this),
                this.instance = void 0,
                Dt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
                this.nodes && this.nodes.forEach(lT),
                this.animationId++)
        }
        getTransformTemplate() {
            const { visualElement: s } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0,
                this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                    d.updateScroll("snapshot"),
                    d.options.layoutRoot && d.willUpdate(!1)
            }
            const { layoutId: a, layout: l } = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
                this.updateSnapshot(),
                s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
                this.isUpdateBlocked()) {
                this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(uf);
                return
            }
            this.isUpdating || this.nodes.forEach(oT),
                this.isUpdating = !1,
                this.nodes.forEach(iT),
                this.nodes.forEach(JS),
                this.nodes.forEach(eT),
                this.clearAllSnapshots();
            const a = performance.now();
            Ee.delta = an(0, 1e3 / 60, a - Ee.timestamp),
                Ee.timestamp = a,
                Ee.isProcessing = !0,
                sa.update.process(Ee),
                sa.preRender.process(Ee),
                sa.render.process(Ee),
                Ee.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
                queueMicrotask(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(rT),
                this.sharedNodes.forEach(uT)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                q.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            q.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
                this.layoutCorrected = fe(),
                this.isLayoutDirty = !1,
                this.projectionDelta = void 0,
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: a } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
                a && (this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: r(this.instance),
                    offset: n(this.instance)
                })
        }
        resetTransform() {
            if (!o)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform
                , a = this.projectionDelta && !lg(this.projectionDelta)
                , l = this.getTransformTemplate()
                , u = l ? l(this.latestValues, "") : void 0
                , c = u !== this.prevTransformTemplateValue;
            s && (a || xn(this.latestValues) || c) && (o(this.instance, u),
                this.shouldResetTransform = !1,
                this.scheduleRender())
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)),
                pT(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const { visualElement: s } = this.options;
            if (!s)
                return fe();
            const a = s.measureViewportBox()
                , { scroll: l } = this.root;
            return l && (Ut(a.x, l.offset.x),
                Ut(a.y, l.offset.y)),
                a
        }
        removeElementScroll(s) {
            const a = fe();
            Xe(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l]
                    , { scroll: c, options: d } = u;
                if (u !== this.root && c && d.layoutScroll) {
                    if (c.isRoot) {
                        Xe(a, s);
                        const { scroll: f } = this.root;
                        f && (Ut(a.x, -f.offset.x),
                            Ut(a.y, -f.offset.y))
                    }
                    Ut(a.x, c.offset.x),
                        Ut(a.y, c.offset.y)
                }
            }
            return a
        }
        applyTransform(s, a = !1) {
            const l = fe();
            Xe(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && ar(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                    xn(c.latestValues) && ar(l, c.latestValues)
            }
            return xn(this.latestValues) && ar(l, this.latestValues),
                l
        }
        removeTransform(s) {
            const a = fe();
            Xe(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !xn(u.latestValues))
                    continue;
                kl(u.latestValues) && u.updateSnapshot();
                const c = fe()
                    , d = u.measurePageBox();
                Xe(c, d),
                    nf(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return xn(this.latestValues) && nf(a, this.latestValues),
                a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
                this.root.scheduleUpdateProjection(),
                this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
                this.layout = void 0,
                this.snapshot = void 0,
                this.prevTransformTemplateValue = void 0,
                this.targetDelta = void 0,
                this.target = void 0,
                this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ee.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const { layout: d, layoutId: f } = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = Ee.timestamp,
                    !this.targetDelta && !this.relativeTarget) {
                    const h = this.getClosestProjectingParent();
                    h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = fe(),
                        this.relativeTargetOrigin = fe(),
                        io(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
                        Xe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = fe(),
                        this.targetWithTransforms = fe()),
                        this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                            hS(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xe(this.target, this.layout.layoutBox),
                                ng(this.target, this.targetDelta)) : Xe(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const h = this.getClosestProjectingParent();
                        h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = fe(),
                            this.relativeTargetOrigin = fe(),
                            io(this.relativeTargetOrigin, this.target, h.target),
                            Xe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    wn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || kl(this.parent.latestValues) || tg(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead()
                , l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
                l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
                this.resolvedRelativeTargetAt === Ee.timestamp && (u = !1),
                u)
                return;
            const { layout: c, layoutId: d } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(c || d))
                return;
            Xe(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
                , h = this.treeScale.y;
            CS(this.layoutCorrected, this.treeScale, this.path, l),
                a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const { target: x } = a;
            if (!x) {
                this.projectionTransform && (this.projectionDelta = sr(),
                    this.projectionTransform = "none",
                    this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = sr(),
                this.projectionDeltaWithTransform = sr());
            const y = this.projectionTransform;
            oo(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
                this.projectionTransform = sf(this.projectionDelta, this.treeScale),
                (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== h) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", x)),
                wn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
                s) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot
                , u = l ? l.latestValues : {}
                , c = {
                    ...this.latestValues
                }
                , d = sr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
                this.attemptToResolveRelativeTarget = !a;
            const f = fe()
                , h = l ? l.source : void 0
                , x = this.layout ? this.layout.source : void 0
                , y = h !== x
                , S = this.getStack()
                , v = !S || S.members.length <= 1
                , p = !!(y && !v && this.options.crossfade === !0 && !this.path.some(dT));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = w => {
                const C = w / 1e3;
                df(d.x, s.x, C),
                    df(d.y, s.y, C),
                    this.setTargetDelta(d),
                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (io(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        cT(this.relativeTarget, this.relativeTargetOrigin, f, C),
                        m && $S(this.relativeTarget, m) && (this.isProjectionDirty = !1),
                        m || (m = fe()),
                        Xe(m, this.relativeTarget)),
                    y && (this.animationValues = c,
                        VS(c, u, this.latestValues, C, p, v)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    this.animationProgress = C
            }
                ,
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation && (Dt(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                this.pendingAnimation = q.update(() => {
                    Pi.hasAnimatedSinceResize = !0,
                        this.currentAnimation = XS(0, lf, {
                            ...s,
                            onUpdate: a => {
                                this.mixTargetDelta(a),
                                    s.onUpdate && s.onUpdate(a)
                            }
                            ,
                            onComplete: () => {
                                s.onComplete && s.onComplete(),
                                    this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                }
                )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
                this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(lf),
                this.currentAnimation.stop()),
                this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && dg(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || fe();
                    const d = Ke(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min,
                        l.x.max = l.x.min + d;
                    const f = Ke(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min,
                        l.y.max = l.y.min + f
                }
                Xe(a, l),
                    ar(a, c),
                    oo(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new WS),
                this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const { layoutId: a } = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const { layoutId: a } = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const { layoutId: s } = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
            const u = this.getStack();
            u && u.promote(this, l),
                s && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                a && this.setOptions({
                    transition: a
                })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const { visualElement: s } = this.options;
            if (!s)
                return;
            let a = !1;
            const { latestValues: l } = s;
            if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0),
                !a)
                return;
            const u = {};
            for (let c = 0; c < af.length; c++) {
                const d = "rotate" + af[c];
                l[d] && (u[d] = l[d],
                    s.setStaticValue(d, 0))
            }
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return qS;
            const u = {
                visibility: ""
            }
                , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                    u.opacity = "",
                    u.pointerEvents = Ei(s == null ? void 0 : s.pointerEvents) || "",
                    u.transform = c ? c(this.latestValues, "") : "none",
                    u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const y = {};
                return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                    y.pointerEvents = Ei(s == null ? void 0 : s.pointerEvents) || ""),
                    this.hasProjected && !xn(this.latestValues) && (y.transform = c ? c({}, "") : "none",
                        this.hasProjected = !1),
                    y
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(),
                u.transform = sf(this.projectionDeltaWithTransform, this.treeScale, f),
                c && (u.transform = c(f, u.transform));
            const { x: h, y: x } = this.projectionDelta;
            u.transformOrigin = `${h.origin * 100}% ${x.origin * 100}% 0`,
                d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const y in qi) {
                if (f[y] === void 0)
                    continue;
                const { correct: S, applyTo: v } = qi[y]
                    , p = u.transform === "none" ? f[y] : S(f[y], d);
                if (v) {
                    const m = v.length;
                    for (let w = 0; w < m; w++)
                        u[v[w]] = p
                } else
                    u[y] = p
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? Ei(s == null ? void 0 : s.pointerEvents) || "" : "none"),
                u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
                this.root.nodes.forEach(uf),
                this.root.sharedNodes.clear()
        }
    }
}
function JS(e) {
    e.updateLayout()
}
function eT(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: o } = e.layout
            , { animationType: i } = e.options
            , s = n.source !== e.layout.source;
        i === "size" ? qe(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d]
                , h = Ke(f);
            f.min = r[d].min,
                f.max = f.min + h
        }
        ) : dg(i, n.layoutBox, r) && qe(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d]
                , h = Ke(r[d]);
            f.max = f.min + h,
                e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
                    e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = sr();
        oo(a, r, n.layoutBox);
        const l = sr();
        s ? oo(l, e.applyTransform(o, !0), n.measuredBox) : oo(l, r, n.layoutBox);
        const u = !lg(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const { snapshot: f, layout: h } = d;
                if (f && h) {
                    const x = fe();
                    io(x, n.layoutBox, f.layoutBox);
                    const y = fe();
                    io(y, r, h.layoutBox),
                        ug(x, y) || (c = !0),
                        d.options.layoutRoot && (e.relativeTarget = y,
                            e.relativeTargetOrigin = x,
                            e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function tT(e) {
    wn.totalNodes++,
        e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function nT(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function rT(e) {
    e.clearSnapshot()
}
function uf(e) {
    e.clearMeasurements()
}
function oT(e) {
    e.isLayoutDirty = !1
}
function iT(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
        e.resetTransform()
}
function cf(e) {
    e.finishAnimation(),
        e.targetDelta = e.relativeTarget = e.target = void 0,
        e.isProjectionDirty = !0
}
function sT(e) {
    e.resolveTargetDelta()
}
function aT(e) {
    e.calcProjection()
}
function lT(e) {
    e.resetRotation()
}
function uT(e) {
    e.removeLeadSnapshot()
}
function df(e, t, n) {
    e.translate = ie(t.translate, 0, n),
        e.scale = ie(t.scale, 1, n),
        e.origin = t.origin,
        e.originPoint = t.originPoint
}
function ff(e, t, n, r) {
    e.min = ie(t.min, n.min, r),
        e.max = ie(t.max, n.max, r)
}
function cT(e, t, n, r) {
    ff(e.x, t.x, n.x, r),
        ff(e.y, t.y, n.y, r)
}
function dT(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const fT = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
    , pf = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e)
    , hf = pf("applewebkit/") && !pf("chrome/") ? Math.round : ue;
function mf(e) {
    e.min = hf(e.min),
        e.max = hf(e.max)
}
function pT(e) {
    mf(e.x),
        mf(e.y)
}
function dg(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !El(of(t), of(n), .2)
}
const hT = cg({
    attachResizeListener: (e, t) => At(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
    , va = {
        current: void 0
    }
    , fg = cg({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!va.current) {
                const e = new hT({});
                e.mount(window),
                    e.setOptions({
                        layoutScroll: !0
                    }),
                    va.current = e
            }
            return va.current
        }
        ,
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        }
        ,
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    })
    , mT = {
        pan: {
            Feature: MS
        },
        drag: {
            Feature: RS,
            ProjectionNode: fg,
            MeasureLayout: ig
        }
    }
    , gT = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function vT(e) {
    const t = gT.exec(e);
    if (!t)
        return [,];
    const [, n, r] = t;
    return [n, r]
}
function Nl(e, t, n = 1) {
    const [r, o] = vT(e);
    if (!r)
        return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const s = i.trim();
        return Ym(s) ? parseFloat(s) : s
    } else
        return vl(o) ? Nl(o, t, n + 1) : o
}
function yT(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
        e.values.forEach(o => {
            const i = o.get();
            if (!vl(i))
                return;
            const s = Nl(i, r);
            s && o.set(s)
        }
        );
    for (const o in t) {
        const i = t[o];
        if (!vl(i))
            continue;
        const s = Nl(i, r);
        s && (t[o] = s,
            n || (n = {}),
            n[o] === void 0 && (n[o] = i))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const xT = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
    , pg = e => xT.has(e)
    , wT = e => Object.keys(e).some(pg)
    , gf = e => e === Fn || e === _
    , vf = (e, t) => parseFloat(e.split(", ")[t])
    , yf = (e, t) => (n, { transform: r }) => {
        if (r === "none" || !r)
            return 0;
        const o = r.match(/^matrix3d\((.+)\)$/);
        if (o)
            return vf(o[1], t);
        {
            const i = r.match(/^matrix\((.+)\)$/);
            return i ? vf(i[1], e) : 0
        }
    }
    , ST = new Set(["x", "y", "z"])
    , TT = Oo.filter(e => !ST.has(e));
function CT(e) {
    const t = [];
    return TT.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
            r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
        t.length && e.render(),
        t
}
const Cr = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: yf(4, 13),
    y: yf(5, 14)
};
Cr.translateX = Cr.x;
Cr.translateY = Cr.y;
const ET = (e, t, n) => {
    const r = t.measureViewportBox()
        , o = t.current
        , i = getComputedStyle(o)
        , { display: s } = i
        , a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
        n.forEach(u => {
            a[u] = Cr[u](r, i)
        }
        ),
        t.render();
    const l = t.measureViewportBox();
    return n.forEach(u => {
        const c = t.getValue(u);
        c && c.jump(a[u]),
            e[u] = Cr[u](l, i)
    }
    ),
        e
}
    , PT = (e, t, n = {}, r = {}) => {
        t = {
            ...t
        },
            r = {
                ...r
            };
        const o = Object.keys(t).filter(pg);
        let i = []
            , s = !1;
        const a = [];
        if (o.forEach(l => {
            const u = e.getValue(l);
            if (!e.hasValue(l))
                return;
            let c = n[l]
                , d = Ir(c);
            const f = t[l];
            let h;
            if (Ji(f)) {
                const x = f.length
                    , y = f[0] === null ? 1 : 0;
                c = f[y],
                    d = Ir(c);
                for (let S = y; S < x && f[S] !== null; S++)
                    h ? Bu(Ir(f[S]) === h) : h = Ir(f[S])
            } else
                h = Ir(f);
            if (d !== h)
                if (gf(d) && gf(h)) {
                    const x = u.get();
                    typeof x == "string" && u.set(parseFloat(x)),
                        typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && h === _ && (t[l] = f.map(parseFloat))
                } else
                    d != null && d.transform && (h != null && h.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(h.transform(c)) : t[l] = d.transform(f) : (s || (i = CT(e),
                        s = !0),
                        a.push(l),
                        r[l] = r[l] !== void 0 ? r[l] : t[l],
                        u.jump(f))
        }
        ),
            a.length) {
            const l = a.indexOf("height") >= 0 ? window.pageYOffset : null
                , u = ET(t, e, a);
            return i.length && i.forEach(([c, d]) => {
                e.getValue(c).set(d)
            }
            ),
                e.render(),
                Ps && l !== null && window.scrollTo({
                    top: l
                }),
            {
                target: u,
                transitionEnd: r
            }
        } else
            return {
                target: t,
                transitionEnd: r
            }
    }
    ;
function kT(e, t, n, r) {
    return wT(t) ? PT(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const AT = (e, t, n, r) => {
    const o = yT(e, t, r);
    return t = o.target,
        r = o.transitionEnd,
        kT(e, t, n, r)
}
    , jl = {
        current: null
    }
    , hg = {
        current: !1
    };
function NT() {
    if (hg.current = !0,
        !!Ps)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
                , t = () => jl.current = e.matches;
            e.addListener(t),
                t()
        } else
            jl.current = !1
}
function jT(e, t, n) {
    const { willChange: r } = t;
    for (const o in t) {
        const i = t[o]
            , s = n[o];
        if (Fe(i))
            e.addValue(o, i),
                rs(r) && r.add(o);
        else if (Fe(s))
            e.addValue(o, Tr(i, {
                owner: e
            })),
                rs(r) && r.remove(o);
        else if (s !== i)
            if (e.hasValue(o)) {
                const a = e.getValue(o);
                !a.hasAnimated && a.set(i)
            } else {
                const a = e.getStaticValue(o);
                e.addValue(o, Tr(a !== void 0 ? a : i, {
                    owner: e
                }))
            }
    }
    for (const o in n)
        t[o] === void 0 && e.removeValue(o);
    return t
}
const xf = new WeakMap
    , mg = Object.keys(ko)
    , RT = mg.length
    , wf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
    , MT = bu.length;
class LT {
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, s = {}) {
        this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.values = new Map,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify("Update", this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.scheduleRender = () => q.render(this.render, !1, !0);
        const { latestValues: a, renderState: l } = i;
        this.latestValues = a,
            this.baseTarget = {
                ...a
            },
            this.initialValues = n.initial ? {
                ...a
            } : {},
            this.renderState = l,
            this.parent = t,
            this.props = n,
            this.presenceContext = r,
            this.depth = t ? t.depth + 1 : 0,
            this.reducedMotionConfig = o,
            this.options = s,
            this.isControllingVariants = As(n),
            this.isVariantNode = Jh(n),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = !!(t && t.current);
        const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
        for (const d in c) {
            const f = c[d];
            a[d] !== void 0 && Fe(f) && (f.set(a[d], !1),
                rs(u) && u.add(d))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t,
            xf.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
            hg.current || NT(),
            this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : jl.current,
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext)
    }
    unmount() {
        xf.delete(this.current),
            this.projection && this.projection.unmount(),
            Dt(this.notifyUpdate),
            Dt(this.render),
            this.valueSubscriptions.forEach(t => t()),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = In.has(t)
            , o = n.on("change", s => {
                this.latestValues[t] = s,
                    this.props.onUpdate && q.update(this.notifyUpdate, !1, !0),
                    r && this.projection && (this.projection.isTransformDirty = !0)
            }
            )
            , i = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            o(),
                i()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({ children: t, ...n }, r, o, i) {
        let s, a;
        for (let l = 0; l < RT; l++) {
            const u = mg[l]
                , { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: h } = ko[u];
            f && (s = f),
                c(n) && (!this.features[u] && d && (this.features[u] = new d(this)),
                    h && (a = h))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
            this.projection = new s(this.latestValues, this.parent && this.parent.projection);
            const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: h } = n;
            this.projection.setOptions({
                layoutId: l,
                layout: u,
                alwaysMeasureLayout: !!c || d && or(d),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: i,
                layoutScroll: f,
                layoutRoot: h
            })
        }
        return a
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
                n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : fe()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = t,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = n;
        for (let r = 0; r < wf.length; r++) {
            const o = wf[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
                delete this.propEventSubscriptions[o]);
            const i = t["on" + o];
            i && (this.propEventSubscriptions[o] = this.on(o, i))
        }
        this.prevMotionValues = jT(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t = !1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
                r
        }
        const n = {};
        for (let r = 0; r < MT; r++) {
            const o = bu[r]
                , i = this.props[o];
            (Po(i) || i === !1) && (n[o] = i)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
                () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t),
            this.bindToMotionValue(t, n)),
            this.values.set(t, n),
            this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
            this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Tr(n, {
            owner: this
        }),
            this.addValue(t, r)),
            r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const { initial: r } = this.props
            , o = typeof r == "string" || typeof r == "object" ? (n = zu(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && o !== void 0)
            return o;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Fe(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Xu),
            this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class gg extends LT {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
        delete n[t],
            delete r[t]
    }
    makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: o }, i) {
        let s = Qw(r, t || {}, this);
        if (o && (n && (n = o(n)),
            r && (r = o(r)),
            s && (s = o(s))),
            i) {
            Kw(this, r, s);
            const a = AT(this, r, s, n);
            n = a.transitionEnd,
                r = a.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}
function bT(e) {
    return window.getComputedStyle(e)
}
class OT extends gg {
    constructor() {
        super(...arguments),
            this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (In.has(n)) {
            const r = Hu(n);
            return r && r.default || 0
        } else {
            const r = bT(t)
                , o = (om(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return rg(t, n)
    }
    build(t, n, r, o) {
        Du(t, n, r, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return Fu(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
            delete this.childSubscription);
        const { children: t } = this.props;
        Fe(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, o) {
        cm(t, n, r, o)
    }
}
class DT extends gg {
    constructor() {
        super(...arguments),
            this.type = "svg",
            this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (In.has(n)) {
            const r = Hu(n);
            return r && r.default || 0
        }
        return n = dm.has(n) ? n : Mu(n),
            t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return fe()
    }
    scrapeMotionValuesFromProps(t, n) {
        return pm(t, n)
    }
    build(t, n, r, o) {
        Vu(t, n, r, this.isSVGTag, o.transformTemplate)
    }
    renderInstance(t, n, r, o) {
        fm(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = Iu(t.tagName),
            super.mount(t)
    }
}
const _T = (e, t) => Ou(e) ? new DT(t, {
    enableHardwareAcceleration: !1
}) : new OT(t, {
    enableHardwareAcceleration: !0
})
    , VT = {
        layout: {
            ProjectionNode: fg,
            MeasureLayout: ig
        }
    }
    , IT = {
        ...cS,
        ...R1,
        ...mT,
        ...VT
    }
    , ye = Ix((e, t) => v1(e, t, IT, _T));
var FT = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const zT = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
    , pt = (e, t) => {
        const n = T.forwardRef(({ color: r = "currentColor", size: o = 24, strokeWidth: i = 2, absoluteStrokeWidth: s, children: a, ...l }, u) => T.createElement("svg", {
            ref: u,
            ...FT,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: s ? Number(i) * 24 / Number(o) : i,
            className: `lucide lucide-${zT(e)}`,
            ...l
        }, [...t.map(([c, d]) => T.createElement(c, d)), ...(Array.isArray(a) ? a : [a]) || []]));
        return n.displayName = `${e}`,
            n
    }
    , Ht = pt("CheckCircle", [["path", {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
        key: "g774vq"
    }], ["polyline", {
        points: "22 4 12 14.01 9 11.01",
        key: "6xbx8j"
    }]])
    , BT = pt("Clock", [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["polyline", {
        points: "12 6 12 12 16 14",
        key: "68esgv"
    }]])
    , UT = pt("MapPin", [["path", {
        d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
        key: "2oe9fu"
    }], ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }]])
    , $T = pt("Menu", [["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }], ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }], ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]])
    , un = pt("MessageCircle", [["path", {
        d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",
        key: "v2veuj"
    }]])
    , is = pt("Phone", [["path", {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5"
    }]])
    , WT = pt("Shield", [["path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",
        key: "1irkt0"
    }]])
    , HT = pt("Star", [["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]])
    , GT = pt("Wrench", [["path", {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
        key: "cbrjhi"
    }]])
    , vg = pt("X", [["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }], ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]])
    , KT = pt("Zap", [["polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
        key: "45s27k"
    }]]);
function yg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = yg(e[t])) && (r && (r += " "),
                    r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                    r += n);
    return r
}
function xg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = yg(e)) && (r && (r += " "),
            r += t);
    return r
}
function YT() {
    for (var e = 0, t, n, r = ""; e < arguments.length;)
        (t = arguments[e++]) && (n = wg(t)) && (r && (r += " "),
            r += n);
    return r
}
function wg(e) {
    if (typeof e == "string")
        return e;
    for (var t, n = "", r = 0; r < e.length; r++)
        e[r] && (t = wg(e[r])) && (n && (n += " "),
            n += t);
    return n
}
var qu = "-";
function QT(e) {
    var t = qT(e)
        , n = e.conflictingClassGroups
        , r = e.conflictingClassGroupModifiers
        , o = r === void 0 ? {} : r;
    function i(a) {
        var l = a.split(qu);
        return l[0] === "" && l.length !== 1 && l.shift(),
            Sg(l, t) || XT(a)
    }
    function s(a, l) {
        var u = n[a] || [];
        return l && o[a] ? [].concat(u, o[a]) : u
    }
    return {
        getClassGroupId: i,
        getConflictingClassGroupIds: s
    }
}
function Sg(e, t) {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    var n = e[0]
        , r = t.nextPart.get(n)
        , o = r ? Sg(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length !== 0) {
        var i = e.join(qu);
        return (s = t.validators.find(function (a) {
            var l = a.validator;
            return l(i)
        })) == null ? void 0 : s.classGroupId
    }
}
var Sf = /^\[(.+)\]$/;
function XT(e) {
    if (Sf.test(e)) {
        var t = Sf.exec(e)[1]
            , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
function qT(e) {
    var t = e.theme
        , n = e.prefix
        , r = {
            nextPart: new Map,
            validators: []
        }
        , o = JT(Object.entries(e.classGroups), n);
    return o.forEach(function (i) {
        var s = i[0]
            , a = i[1];
        Rl(a, r, s, t)
    }),
        r
}
function Rl(e, t, n, r) {
    e.forEach(function (o) {
        if (typeof o == "string") {
            var i = o === "" ? t : Tf(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (ZT(o)) {
                Rl(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach(function (s) {
            var a = s[0]
                , l = s[1];
            Rl(l, Tf(t, a), n, r)
        })
    })
}
function Tf(e, t) {
    var n = e;
    return t.split(qu).forEach(function (r) {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
            n = n.nextPart.get(r)
    }),
        n
}
function ZT(e) {
    return e.isThemeGetter
}
function JT(e, t) {
    return t ? e.map(function (n) {
        var r = n[0]
            , o = n[1]
            , i = o.map(function (s) {
                return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function (a) {
                    var l = a[0]
                        , u = a[1];
                    return [t + l, u]
                })) : s
            });
        return [r, i]
    }) : e
}
function eC(e) {
    if (e < 1)
        return {
            get: function () { },
            set: function () { }
        };
    var t = 0
        , n = new Map
        , r = new Map;
    function o(i, s) {
        n.set(i, s),
            t++,
            t > e && (t = 0,
                r = n,
                n = new Map)
    }
    return {
        get: function (s) {
            var a = n.get(s);
            if (a !== void 0)
                return a;
            if ((a = r.get(s)) !== void 0)
                return o(s, a),
                    a
        },
        set: function (s, a) {
            n.has(s) ? n.set(s, a) : o(s, a)
        }
    }
}
var Tg = "!";
function tC(e) {
    var t = e.separator || ":"
        , n = t.length === 1
        , r = t[0]
        , o = t.length;
    return function (s) {
        for (var a = [], l = 0, u = 0, c, d = 0; d < s.length; d++) {
            var f = s[d];
            if (l === 0) {
                if (f === r && (n || s.slice(d, d + o) === t)) {
                    a.push(s.slice(u, d)),
                        u = d + o;
                    continue
                }
                if (f === "/") {
                    c = d;
                    continue
                }
            }
            f === "[" ? l++ : f === "]" && l--
        }
        var h = a.length === 0 ? s : s.substring(u)
            , x = h.startsWith(Tg)
            , y = x ? h.substring(1) : h
            , S = c && c > u ? c - u : void 0;
        return {
            modifiers: a,
            hasImportantModifier: x,
            baseClassName: y,
            maybePostfixModifierPosition: S
        }
    }
}
function nC(e) {
    if (e.length <= 1)
        return e;
    var t = []
        , n = [];
    return e.forEach(function (r) {
        var o = r[0] === "[";
        o ? (t.push.apply(t, n.sort().concat([r])),
            n = []) : n.push(r)
    }),
        t.push.apply(t, n.sort()),
        t
}
function rC(e) {
    return {
        cache: eC(e.cacheSize),
        splitModifiers: tC(e),
        ...QT(e)
    }
}
var oC = /\s+/;
function iC(e, t) {
    var n = t.splitModifiers
        , r = t.getClassGroupId
        , o = t.getConflictingClassGroupIds
        , i = new Set;
    return e.trim().split(oC).map(function (s) {
        var a = n(s)
            , l = a.modifiers
            , u = a.hasImportantModifier
            , c = a.baseClassName
            , d = a.maybePostfixModifierPosition
            , f = r(d ? c.substring(0, d) : c)
            , h = !!d;
        if (!f) {
            if (!d)
                return {
                    isTailwindClass: !1,
                    originalClassName: s
                };
            if (f = r(c),
                !f)
                return {
                    isTailwindClass: !1,
                    originalClassName: s
                };
            h = !1
        }
        var x = nC(l).join(":")
            , y = u ? x + Tg : x;
        return {
            isTailwindClass: !0,
            modifierId: y,
            classGroupId: f,
            originalClassName: s,
            hasPostfixModifier: h
        }
    }).reverse().filter(function (s) {
        if (!s.isTailwindClass)
            return !0;
        var a = s.modifierId
            , l = s.classGroupId
            , u = s.hasPostfixModifier
            , c = a + l;
        return i.has(c) ? !1 : (i.add(c),
            o(l, u).forEach(function (d) {
                return i.add(a + d)
            }),
            !0)
    }).reverse().map(function (s) {
        return s.originalClassName
    }).join(" ")
}
function sC() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    var r, o, i, s = a;
    function a(u) {
        var c = t[0]
            , d = t.slice(1)
            , f = d.reduce(function (h, x) {
                return x(h)
            }, c());
        return r = rC(f),
            o = r.cache.get,
            i = r.cache.set,
            s = l,
            l(u)
    }
    function l(u) {
        var c = o(u);
        if (c)
            return c;
        var d = iC(u, r);
        return i(u, d),
            d
    }
    return function () {
        return s(YT.apply(null, arguments))
    }
}
function Y(e) {
    var t = function (r) {
        return r[e] || []
    };
    return t.isThemeGetter = !0,
        t
}
var Cg = /^\[(?:([a-z-]+):)?(.+)\]$/i
    , aC = /^\d+\/\d+$/
    , lC = new Set(["px", "full", "screen"])
    , uC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
    , cC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
    , dC = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function it(e) {
    return Pn(e) || lC.has(e) || aC.test(e) || Ml(e)
}
function Ml(e) {
    return zn(e, "length", vC)
}
function fC(e) {
    return zn(e, "size", Eg)
}
function pC(e) {
    return zn(e, "position", Eg)
}
function hC(e) {
    return zn(e, "url", yC)
}
function ai(e) {
    return zn(e, "number", Pn)
}
function Pn(e) {
    return !Number.isNaN(Number(e))
}
function mC(e) {
    return e.endsWith("%") && Pn(e.slice(0, -1))
}
function zr(e) {
    return Cf(e) || zn(e, "number", Cf)
}
function z(e) {
    return Cg.test(e)
}
function Br() {
    return !0
}
function It(e) {
    return uC.test(e)
}
function gC(e) {
    return zn(e, "", xC)
}
function zn(e, t, n) {
    var r = Cg.exec(e);
    return r ? r[1] ? r[1] === t : n(r[2]) : !1
}
function vC(e) {
    return cC.test(e)
}
function Eg() {
    return !1
}
function yC(e) {
    return e.startsWith("url(")
}
function Cf(e) {
    return Number.isInteger(Number(e))
}
function xC(e) {
    return dC.test(e)
}
function wC() {
    var e = Y("colors")
        , t = Y("spacing")
        , n = Y("blur")
        , r = Y("brightness")
        , o = Y("borderColor")
        , i = Y("borderRadius")
        , s = Y("borderSpacing")
        , a = Y("borderWidth")
        , l = Y("contrast")
        , u = Y("grayscale")
        , c = Y("hueRotate")
        , d = Y("invert")
        , f = Y("gap")
        , h = Y("gradientColorStops")
        , x = Y("gradientColorStopPositions")
        , y = Y("inset")
        , S = Y("margin")
        , v = Y("opacity")
        , p = Y("padding")
        , m = Y("saturate")
        , w = Y("scale")
        , C = Y("sepia")
        , P = Y("skew")
        , E = Y("space")
        , k = Y("translate")
        , L = function () {
            return ["auto", "contain", "none"]
        }
        , b = function () {
            return ["auto", "hidden", "clip", "visible", "scroll"]
        }
        , W = function () {
            return ["auto", z, t]
        }
        , D = function () {
            return [z, t]
        }
        , ne = function () {
            return ["", it]
        }
        , R = function () {
            return ["auto", Pn, z]
        }
        , Z = function () {
            return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
        }
        , B = function () {
            return ["solid", "dashed", "dotted", "double", "none"]
        }
        , ce = function () {
            return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
        }
        , N = function () {
            return ["start", "end", "center", "between", "around", "evenly", "stretch"]
        }
        , M = function () {
            return ["", "0", z]
        }
        , V = function () {
            return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
        }
        , O = function () {
            return [Pn, ai]
        }
        , U = function () {
            return [Pn, z]
        };
    return {
        cacheSize: 500,
        theme: {
            colors: [Br],
            spacing: [it],
            blur: ["none", "", It, z],
            brightness: O(),
            borderColor: [e],
            borderRadius: ["none", "", "full", It, z],
            borderSpacing: D(),
            borderWidth: ne(),
            contrast: O(),
            grayscale: M(),
            hueRotate: U(),
            invert: M(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [mC, Ml],
            inset: W(),
            margin: W(),
            opacity: O(),
            padding: D(),
            saturate: O(),
            scale: O(),
            sepia: M(),
            skew: U(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", z]
            }],
            container: ["container"],
            columns: [{
                columns: [It]
            }],
            "break-after": [{
                "break-after": V()
            }],
            "break-before": [{
                "break-before": V()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [].concat(Z(), [z])
            }],
            overflow: [{
                overflow: b()
            }],
            "overflow-x": [{
                "overflow-x": b()
            }],
            "overflow-y": [{
                "overflow-y": b()
            }],
            overscroll: [{
                overscroll: L()
            }],
            "overscroll-x": [{
                "overscroll-x": L()
            }],
            "overscroll-y": [{
                "overscroll-y": L()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", zr]
            }],
            basis: [{
                basis: W()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", z]
            }],
            grow: [{
                grow: M()
            }],
            shrink: [{
                shrink: M()
            }],
            order: [{
                order: ["first", "last", "none", zr]
            }],
            "grid-cols": [{
                "grid-cols": [Br]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", zr]
                }, z]
            }],
            "col-start": [{
                "col-start": R()
            }],
            "col-end": [{
                "col-end": R()
            }],
            "grid-rows": [{
                "grid-rows": [Br]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [zr]
                }, z]
            }],
            "row-start": [{
                "row-start": R()
            }],
            "row-end": [{
                "row-end": R()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", z]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", z]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal"].concat(N())
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal"].concat(N(), ["baseline"])
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [].concat(N(), ["baseline"])
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [E]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [E]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", z, t]
            }],
            "min-w": [{
                "min-w": ["min", "max", "fit", z, it]
            }],
            "max-w": [{
                "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                    screen: [It]
                }, It, z]
            }],
            h: [{
                h: [z, t, "auto", "min", "max", "fit"]
            }],
            "min-h": [{
                "min-h": ["min", "max", "fit", z, it]
            }],
            "max-h": [{
                "max-h": [z, t, "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", It, Ml]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ai]
            }],
            "font-family": [{
                font: [Br]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", z]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Pn, ai]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", z, it]
            }],
            "list-image": [{
                "list-image": ["none", z]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", z]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [v]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [v]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [].concat(B(), ["wavy"])
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", it]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", z, it]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", z]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [v]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [].concat(Z(), [pC])
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", fC]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, hC]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [x]
            }],
            "gradient-via-pos": [{
                via: [x]
            }],
            "gradient-to-pos": [{
                to: [x]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [v]
            }],
            "border-style": [{
                border: [].concat(B(), ["hidden"])
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [v]
            }],
            "divide-style": [{
                divide: B()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: [""].concat(B())
            }],
            "outline-offset": [{
                "outline-offset": [z, it]
            }],
            "outline-w": [{
                outline: [it]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: ne()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [v]
            }],
            "ring-offset-w": [{
                "ring-offset": [it]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", It, gC]
            }],
            "shadow-color": [{
                shadow: [Br]
            }],
            opacity: [{
                opacity: [v]
            }],
            "mix-blend": [{
                "mix-blend": ce()
            }],
            "bg-blend": [{
                "bg-blend": ce()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", It, z]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [m]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [v]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [m]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", z]
            }],
            duration: [{
                duration: U()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", z]
            }],
            delay: [{
                delay: U()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", z]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [w]
            }],
            "scale-x": [{
                "scale-x": [w]
            }],
            "scale-y": [{
                "scale-y": [w]
            }],
            rotate: [{
                rotate: [zr, z]
            }],
            "translate-x": [{
                "translate-x": [k]
            }],
            "translate-y": [{
                "translate-y": [k]
            }],
            "skew-x": [{
                "skew-x": [P]
            }],
            "skew-y": [{
                "skew-y": [P]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", z]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: ["appearance-none"],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "pinch-zoom", "manipulation", {
                    pan: ["x", "left", "right", "y", "up", "down"]
                }]
            }],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", z]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [it, ai]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
var SC = sC(wC);
function Bn(...e) {
    return SC(xg(e))
}
function $e(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if (e == null || e(o),
            n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Ef(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Pg(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Ef(o, t);
            return !n && typeof i == "function" && (n = !0),
                i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : Ef(e[o], null)
                }
            }
    }
}
function On(...e) {
    return T.useCallback(Pg(...e), e)
}
function kg(e, t = []) {
    let n = [];
    function r(i, s) {
        const a = T.createContext(s)
            , l = n.length;
        n = [...n, s];
        const u = d => {
            var v;
            const { scope: f, children: h, ...x } = d
                , y = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || a
                , S = T.useMemo(() => x, Object.values(x));
            return g.jsx(y.Provider, {
                value: S,
                children: h
            })
        }
            ;
        u.displayName = i + "Provider";
        function c(d, f) {
            var y;
            const h = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a
                , x = T.useContext(h);
            if (x)
                return x;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => T.createContext(s));
        return function (a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return T.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
        ;
    return o.scopeName = e,
        [r, TC(o, ...t)]
}
function TC(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function (i) {
            const s = r.reduce((a, { useScope: l, scopeName: u }) => {
                const d = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
                , {});
            return T.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
        ;
    return n.scopeName = t.scopeName,
        n
}
function ss(e) {
    const t = EC(e)
        , n = T.forwardRef((r, o) => {
            const { children: i, ...s } = r
                , a = T.Children.toArray(i)
                , l = a.find(kC);
            if (l) {
                const u = l.props.children
                    , c = a.map(d => d === l ? T.Children.count(u) > 1 ? T.Children.only(null) : T.isValidElement(u) ? u.props.children : null : d);
                return g.jsx(t, {
                    ...s,
                    ref: o,
                    children: T.isValidElement(u) ? T.cloneElement(u, void 0, c) : null
                })
            }
            return g.jsx(t, {
                ...s,
                ref: o,
                children: i
            })
        }
        );
    return n.displayName = `${e}.Slot`,
        n
}
var CC = ss("Slot");
function EC(e) {
    const t = T.forwardRef((n, r) => {
        const { children: o, ...i } = n;
        if (T.isValidElement(o)) {
            const s = NC(o)
                , a = AC(i, o.props);
            return o.type !== T.Fragment && (a.ref = r ? Pg(r, s) : s),
                T.cloneElement(o, a)
        }
        return T.Children.count(o) > 1 ? T.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
        t
}
var PC = Symbol("radix.slottable");
function kC(e) {
    return T.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === PC
}
function AC(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
            , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a),
                l
        }
            : o && (n[r] = o) : r === "style" ? n[r] = {
                ...o,
                ...i
            } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function NC(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
        , n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
        n = t && "isReactWarning" in t && t.isReactWarning,
        n ? e.props.ref : e.props.ref || e.ref)
}
function jC(e) {
    const t = e + "CollectionProvider"
        , [n, r] = kg(t)
        , [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        })
        , s = y => {
            const { scope: S, children: v } = y
                , p = oe.useRef(null)
                , m = oe.useRef(new Map).current;
            return g.jsx(o, {
                scope: S,
                itemMap: m,
                collectionRef: p,
                children: v
            })
        }
        ;
    s.displayName = t;
    const a = e + "CollectionSlot"
        , l = ss(a)
        , u = oe.forwardRef((y, S) => {
            const { scope: v, children: p } = y
                , m = i(a, v)
                , w = On(S, m.collectionRef);
            return g.jsx(l, {
                ref: w,
                children: p
            })
        }
        );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
        , d = "data-radix-collection-item"
        , f = ss(c)
        , h = oe.forwardRef((y, S) => {
            const { scope: v, children: p, ...m } = y
                , w = oe.useRef(null)
                , C = On(S, w)
                , P = i(c, v);
            return oe.useEffect(() => (P.itemMap.set(w, {
                ref: w,
                ...m
            }),
                () => void P.itemMap.delete(w))),
                g.jsx(f, {
                    [d]: "",
                    ref: C,
                    children: p
                })
        }
        );
    h.displayName = c;
    function x(y) {
        const S = i(e + "CollectionConsumer", y);
        return oe.useCallback(() => {
            const p = S.collectionRef.current;
            if (!p)
                return [];
            const m = Array.from(p.querySelectorAll(`[${d}]`));
            return Array.from(S.itemMap.values()).sort((P, E) => m.indexOf(P.ref.current) - m.indexOf(E.ref.current))
        }
            , [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: h
    }, x, r]
}
var RC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
    , St = RC.reduce((e, t) => {
        const n = ss(`Primitive.${t}`)
            , r = T.forwardRef((o, i) => {
                const { asChild: s, ...a } = o
                    , l = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
                    g.jsx(l, {
                        ...a,
                        ref: i
                    })
            }
            );
        return r.displayName = `Primitive.${t}`,
        {
            ...e,
            [t]: r
        }
    }
        , {});
function Ag(e, t) {
    e && Cs.flushSync(() => e.dispatchEvent(t))
}
function Dn(e) {
    const t = T.useRef(e);
    return T.useEffect(() => {
        t.current = e
    }
    ),
        T.useMemo(() => (...n) => {
            var r;
            return (r = t.current) == null ? void 0 : r.call(t, ...n)
        }
            , [])
}
function MC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Dn(e);
    T.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
            ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
            () => t.removeEventListener("keydown", r, {
                capture: !0
            })
    }
        , [n, t])
}
var LC = "DismissableLayer", Ll = "dismissableLayer.update", bC = "dismissableLayer.pointerDownOutside", OC = "dismissableLayer.focusOutside", Pf, Ng = T.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), jg = T.forwardRef((e, t) => {
    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: a, ...l } = e
        , u = T.useContext(Ng)
        , [c, d] = T.useState(null)
        , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
        , [, h] = T.useState({})
        , x = On(t, E => d(E))
        , y = Array.from(u.layers)
        , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
        , v = y.indexOf(S)
        , p = c ? y.indexOf(c) : -1
        , m = u.layersWithOutsidePointerEventsDisabled.size > 0
        , w = p >= v
        , C = _C(E => {
            const k = E.target
                , L = [...u.branches].some(b => b.contains(k));
            !w || L || (o == null || o(E),
                s == null || s(E),
                E.defaultPrevented || a == null || a())
        }
            , f)
        , P = VC(E => {
            const k = E.target;
            [...u.branches].some(b => b.contains(k)) || (i == null || i(E),
                s == null || s(E),
                E.defaultPrevented || a == null || a())
        }
            , f);
    return MC(E => {
        p === u.layers.size - 1 && (r == null || r(E),
            !E.defaultPrevented && a && (E.preventDefault(),
                a()))
    }
        , f),
        T.useEffect(() => {
            if (c)
                return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Pf = f.body.style.pointerEvents,
                    f.body.style.pointerEvents = "none"),
                    u.layersWithOutsidePointerEventsDisabled.add(c)),
                    u.layers.add(c),
                    kf(),
                    () => {
                        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Pf)
                    }
        }
            , [c, f, n, u]),
        T.useEffect(() => () => {
            c && (u.layers.delete(c),
                u.layersWithOutsidePointerEventsDisabled.delete(c),
                kf())
        }
            , [c, u]),
        T.useEffect(() => {
            const E = () => h({});
            return document.addEventListener(Ll, E),
                () => document.removeEventListener(Ll, E)
        }
            , []),
        g.jsx(St.div, {
            ...l,
            ref: x,
            style: {
                pointerEvents: m ? w ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: $e(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: $e(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: $e(e.onPointerDownCapture, C.onPointerDownCapture)
        })
}
);
jg.displayName = LC;
var DC = "DismissableLayerBranch"
    , Rg = T.forwardRef((e, t) => {
        const n = T.useContext(Ng)
            , r = T.useRef(null)
            , o = On(t, r);
        return T.useEffect(() => {
            const i = r.current;
            if (i)
                return n.branches.add(i),
                    () => {
                        n.branches.delete(i)
                    }
        }
            , [n.branches]),
            g.jsx(St.div, {
                ...e,
                ref: o
            })
    }
    );
Rg.displayName = DC;
function _C(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Dn(e)
        , r = T.useRef(!1)
        , o = T.useRef(() => { }
        );
    return T.useEffect(() => {
        const i = a => {
            if (a.target && !r.current) {
                let l = function () {
                    Mg(bC, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                    o.current = l,
                    t.addEventListener("click", o.current, {
                        once: !0
                    })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
            , s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }
                , 0);
        return () => {
            window.clearTimeout(s),
                t.removeEventListener("pointerdown", i),
                t.removeEventListener("click", o.current)
        }
    }
        , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function VC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Dn(e)
        , r = T.useRef(!1);
    return T.useEffect(() => {
        const o = i => {
            i.target && !r.current && Mg(OC, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
            ;
        return t.addEventListener("focusin", o),
            () => t.removeEventListener("focusin", o)
    }
        , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function kf() {
    const e = new CustomEvent(Ll);
    document.dispatchEvent(e)
}
function Mg(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target
        , i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }),
        r ? Ag(o, i) : o.dispatchEvent(i)
}
var IC = jg
    , FC = Rg
    , No = globalThis != null && globalThis.document ? T.useLayoutEffect : () => { }
    , zC = "Portal"
    , Lg = T.forwardRef((e, t) => {
        var a;
        const { container: n, ...r } = e
            , [o, i] = T.useState(!1);
        No(() => i(!0), []);
        const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return s ? b0.createPortal(g.jsx(St.div, {
            ...r,
            ref: t
        }), s) : null
    }
    );
Lg.displayName = zC;
function BC(e, t) {
    return T.useReducer((n, r) => t[n][r] ?? n, e)
}
var bg = e => {
    const { present: t, children: n } = e
        , r = UC(t)
        , o = typeof n == "function" ? n({
            present: r.isPresent
        }) : T.Children.only(n)
        , i = On(r.ref, $C(o));
    return typeof n == "function" || r.isPresent ? T.cloneElement(o, {
        ref: i
    }) : null
}
    ;
bg.displayName = "Presence";
function UC(e) {
    const [t, n] = T.useState()
        , r = T.useRef(null)
        , o = T.useRef(e)
        , i = T.useRef("none")
        , s = e ? "mounted" : "unmounted"
        , [a, l] = BC(s, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        });
    return T.useEffect(() => {
        const u = li(r.current);
        i.current = a === "mounted" ? u : "none"
    }
        , [a]),
        No(() => {
            const u = r.current
                , c = o.current;
            if (c !== e) {
                const f = i.current
                    , h = li(u);
                e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
                    o.current = e
            }
        }
            , [e, l]),
        No(() => {
            if (t) {
                let u;
                const c = t.ownerDocument.defaultView ?? window
                    , d = h => {
                        const y = li(r.current).includes(h.animationName);
                        if (h.target === t && y && (l("ANIMATION_END"),
                            !o.current)) {
                            const S = t.style.animationFillMode;
                            t.style.animationFillMode = "forwards",
                                u = c.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                                }
                                )
                        }
                    }
                    , f = h => {
                        h.target === t && (i.current = li(r.current))
                    }
                    ;
                return t.addEventListener("animationstart", f),
                    t.addEventListener("animationcancel", d),
                    t.addEventListener("animationend", d),
                    () => {
                        c.clearTimeout(u),
                            t.removeEventListener("animationstart", f),
                            t.removeEventListener("animationcancel", d),
                            t.removeEventListener("animationend", d)
                    }
            } else
                l("ANIMATION_END")
        }
            , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: T.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
                n(u)
        }
            , [])
    }
}
function li(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function $C(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
        , n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
        n = t && "isReactWarning" in t && t.isReactWarning,
        n ? e.props.ref : e.props.ref || e.ref)
}
var WC = Tv[" useInsertionEffect ".trim().toString()] || No;
function HC({ prop: e, defaultProp: t, onChange: n = () => { }
    , caller: r }) {
    const [o, i, s] = GC({
        defaultProp: t,
        onChange: n
    })
        , a = e !== void 0
        , l = a ? e : o;
    {
        const c = T.useRef(e !== void 0);
        T.useEffect(() => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
                c.current = a
        }
            , [a, r])
    }
    const u = T.useCallback(c => {
        var d;
        if (a) {
            const f = KC(c) ? c(e) : c;
            f !== e && ((d = s.current) == null || d.call(s, f))
        } else
            i(c)
    }
        , [a, e, i, s]);
    return [l, u]
}
function GC({ defaultProp: e, onChange: t }) {
    const [n, r] = T.useState(e)
        , o = T.useRef(n)
        , i = T.useRef(t);
    return WC(() => {
        i.current = t
    }
        , [t]),
        T.useEffect(() => {
            var s;
            o.current !== n && ((s = i.current) == null || s.call(i, n),
                o.current = n)
        }
            , [n, o]),
        [n, r, i]
}
function KC(e) {
    return typeof e == "function"
}
var YC = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
    , QC = "VisuallyHidden"
    , Zu = T.forwardRef((e, t) => g.jsx(St.span, {
        ...e,
        ref: t,
        style: {
            ...YC,
            ...e.style
        }
    }));
Zu.displayName = QC;
var Ju = "ToastProvider"
    , [ec, XC, qC] = jC("Toast")
    , [Og, _E] = kg("Toast", [qC])
    , [ZC, Ms] = Og(Ju)
    , Dg = e => {
        const { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: o = "right", swipeThreshold: i = 50, children: s } = e
            , [a, l] = T.useState(null)
            , [u, c] = T.useState(0)
            , d = T.useRef(!1)
            , f = T.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Ju}\`. Expected non-empty \`string\`.`),
            g.jsx(ec.Provider, {
                scope: t,
                children: g.jsx(ZC, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: o,
                    swipeThreshold: i,
                    toastCount: u,
                    viewport: a,
                    onViewportChange: l,
                    onToastAdd: T.useCallback(() => c(h => h + 1), []),
                    onToastRemove: T.useCallback(() => c(h => h - 1), []),
                    isFocusedToastEscapeKeyDownRef: d,
                    isClosePausedRef: f,
                    children: s
                })
            })
    }
    ;
Dg.displayName = Ju;
var _g = "ToastViewport"
    , JC = ["F8"]
    , bl = "toast.viewportPause"
    , Ol = "toast.viewportResume"
    , Vg = T.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = JC, label: o = "Notifications ({hotkey})", ...i } = e
            , s = Ms(_g, n)
            , a = XC(n)
            , l = T.useRef(null)
            , u = T.useRef(null)
            , c = T.useRef(null)
            , d = T.useRef(null)
            , f = On(t, d, s.onViewportChange)
            , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
            , x = s.toastCount > 0;
        T.useEffect(() => {
            const S = v => {
                var m;
                r.length !== 0 && r.every(w => v[w] || v.code === w) && ((m = d.current) == null || m.focus())
            }
                ;
            return document.addEventListener("keydown", S),
                () => document.removeEventListener("keydown", S)
        }
            , [r]),
            T.useEffect(() => {
                const S = l.current
                    , v = d.current;
                if (x && S && v) {
                    const p = () => {
                        if (!s.isClosePausedRef.current) {
                            const P = new CustomEvent(bl);
                            v.dispatchEvent(P),
                                s.isClosePausedRef.current = !0
                        }
                    }
                        , m = () => {
                            if (s.isClosePausedRef.current) {
                                const P = new CustomEvent(Ol);
                                v.dispatchEvent(P),
                                    s.isClosePausedRef.current = !1
                            }
                        }
                        , w = P => {
                            !S.contains(P.relatedTarget) && m()
                        }
                        , C = () => {
                            S.contains(document.activeElement) || m()
                        }
                        ;
                    return S.addEventListener("focusin", p),
                        S.addEventListener("focusout", w),
                        S.addEventListener("pointermove", p),
                        S.addEventListener("pointerleave", C),
                        window.addEventListener("blur", p),
                        window.addEventListener("focus", m),
                        () => {
                            S.removeEventListener("focusin", p),
                                S.removeEventListener("focusout", w),
                                S.removeEventListener("pointermove", p),
                                S.removeEventListener("pointerleave", C),
                                window.removeEventListener("blur", p),
                                window.removeEventListener("focus", m)
                        }
                }
            }
                , [x, s.isClosePausedRef]);
        const y = T.useCallback(({ tabbingDirection: S }) => {
            const p = a().map(m => {
                const w = m.ref.current
                    , C = [w, ...fE(w)];
                return S === "forwards" ? C : C.reverse()
            }
            );
            return (S === "forwards" ? p.reverse() : p).flat()
        }
            , [a]);
        return T.useEffect(() => {
            const S = d.current;
            if (S) {
                const v = p => {
                    var C, P, E;
                    const m = p.altKey || p.ctrlKey || p.metaKey;
                    if (p.key === "Tab" && !m) {
                        const k = document.activeElement
                            , L = p.shiftKey;
                        if (p.target === S && L) {
                            (C = u.current) == null || C.focus();
                            return
                        }
                        const D = y({
                            tabbingDirection: L ? "backwards" : "forwards"
                        })
                            , ne = D.findIndex(R => R === k);
                        ya(D.slice(ne + 1)) ? p.preventDefault() : L ? (P = u.current) == null || P.focus() : (E = c.current) == null || E.focus()
                    }
                }
                    ;
                return S.addEventListener("keydown", v),
                    () => S.removeEventListener("keydown", v)
            }
        }
            , [a, y]),
            g.jsxs(FC, {
                ref: l,
                role: "region",
                "aria-label": o.replace("{hotkey}", h),
                tabIndex: -1,
                style: {
                    pointerEvents: x ? void 0 : "none"
                },
                children: [x && g.jsx(Dl, {
                    ref: u,
                    onFocusFromOutsideViewport: () => {
                        const S = y({
                            tabbingDirection: "forwards"
                        });
                        ya(S)
                    }
                }), g.jsx(ec.Slot, {
                    scope: n,
                    children: g.jsx(St.ol, {
                        tabIndex: -1,
                        ...i,
                        ref: f
                    })
                }), x && g.jsx(Dl, {
                    ref: c,
                    onFocusFromOutsideViewport: () => {
                        const S = y({
                            tabbingDirection: "backwards"
                        });
                        ya(S)
                    }
                })]
            })
    }
    );
Vg.displayName = _g;
var Ig = "ToastFocusProxy"
    , Dl = T.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e
            , i = Ms(Ig, n);
        return g.jsx(Zu, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const a = s.relatedTarget;
                !((u = i.viewport) != null && u.contains(a)) && r()
            }
        })
    }
    );
Dl.displayName = Ig;
var Io = "Toast"
    , eE = "toast.swipeStart"
    , tE = "toast.swipeMove"
    , nE = "toast.swipeCancel"
    , rE = "toast.swipeEnd"
    , Fg = T.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e
            , [a, l] = HC({
                prop: r,
                defaultProp: o ?? !0,
                onChange: i,
                caller: Io
            });
        return g.jsx(bg, {
            present: n || a,
            children: g.jsx(sE, {
                open: a,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: Dn(e.onPause),
                onResume: Dn(e.onResume),
                onSwipeStart: $e(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }
                ),
                onSwipeMove: $e(e.onSwipeMove, u => {
                    const { x: c, y: d } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
                }
                ),
                onSwipeCancel: $e(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }
                ),
                onSwipeEnd: $e(e.onSwipeEnd, u => {
                    const { x: c, y: d } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                        l(!1)
                }
                )
            })
        })
    }
    );
Fg.displayName = Io;
var [oE, iE] = Og(Io, {
    onClose() { }
})
    , sE = T.forwardRef((e, t) => {
        const { __scopeToast: n, type: r = "foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...x } = e
            , y = Ms(Io, n)
            , [S, v] = T.useState(null)
            , p = On(t, R => v(R))
            , m = T.useRef(null)
            , w = T.useRef(null)
            , C = o || y.duration
            , P = T.useRef(0)
            , E = T.useRef(C)
            , k = T.useRef(0)
            , { onToastAdd: L, onToastRemove: b } = y
            , W = Dn(() => {
                var Z;
                (S == null ? void 0 : S.contains(document.activeElement)) && ((Z = y.viewport) == null || Z.focus()),
                    s()
            }
            )
            , D = T.useCallback(R => {
                !R || R === 1 / 0 || (window.clearTimeout(k.current),
                    P.current = new Date().getTime(),
                    k.current = window.setTimeout(W, R))
            }
                , [W]);
        T.useEffect(() => {
            const R = y.viewport;
            if (R) {
                const Z = () => {
                    D(E.current),
                        u == null || u()
                }
                    , B = () => {
                        const ce = new Date().getTime() - P.current;
                        E.current = E.current - ce,
                            window.clearTimeout(k.current),
                            l == null || l()
                    }
                    ;
                return R.addEventListener(bl, B),
                    R.addEventListener(Ol, Z),
                    () => {
                        R.removeEventListener(bl, B),
                            R.removeEventListener(Ol, Z)
                    }
            }
        }
            , [y.viewport, C, l, u, D]),
            T.useEffect(() => {
                i && !y.isClosePausedRef.current && D(C)
            }
                , [i, C, y.isClosePausedRef, D]),
            T.useEffect(() => (L(),
                () => b()), [L, b]);
        const ne = T.useMemo(() => S ? Gg(S) : null, [S]);
        return y.viewport ? g.jsxs(g.Fragment, {
            children: [ne && g.jsx(aE, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: ne
            }), g.jsx(oE, {
                scope: n,
                onClose: W,
                children: Cs.createPortal(g.jsx(ec.ItemSlot, {
                    scope: n,
                    children: g.jsx(IC, {
                        asChild: !0,
                        onEscapeKeyDown: $e(a, () => {
                            y.isFocusedToastEscapeKeyDownRef.current || W(),
                                y.isFocusedToastEscapeKeyDownRef.current = !1
                        }
                        ),
                        children: g.jsx(St.li, {
                            role: "status",
                            "aria-live": "off",
                            "aria-atomic": !0,
                            tabIndex: 0,
                            "data-state": i ? "open" : "closed",
                            "data-swipe-direction": y.swipeDirection,
                            ...x,
                            ref: p,
                            style: {
                                userSelect: "none",
                                touchAction: "none",
                                ...e.style
                            },
                            onKeyDown: $e(e.onKeyDown, R => {
                                R.key === "Escape" && (a == null || a(R.nativeEvent),
                                    R.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                                        W()))
                            }
                            ),
                            onPointerDown: $e(e.onPointerDown, R => {
                                R.button === 0 && (m.current = {
                                    x: R.clientX,
                                    y: R.clientY
                                })
                            }
                            ),
                            onPointerMove: $e(e.onPointerMove, R => {
                                if (!m.current)
                                    return;
                                const Z = R.clientX - m.current.x
                                    , B = R.clientY - m.current.y
                                    , ce = !!w.current
                                    , N = ["left", "right"].includes(y.swipeDirection)
                                    , M = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                                    , V = N ? M(0, Z) : 0
                                    , O = N ? 0 : M(0, B)
                                    , U = R.pointerType === "touch" ? 10 : 2
                                    , G = {
                                        x: V,
                                        y: O
                                    }
                                    , ze = {
                                        originalEvent: R,
                                        delta: G
                                    };
                                ce ? (w.current = G,
                                    ui(tE, d, ze, {
                                        discrete: !1
                                    })) : Af(G, y.swipeDirection, U) ? (w.current = G,
                                        ui(eE, c, ze, {
                                            discrete: !1
                                        }),
                                        R.target.setPointerCapture(R.pointerId)) : (Math.abs(Z) > U || Math.abs(B) > U) && (m.current = null)
                            }
                            ),
                            onPointerUp: $e(e.onPointerUp, R => {
                                const Z = w.current
                                    , B = R.target;
                                if (B.hasPointerCapture(R.pointerId) && B.releasePointerCapture(R.pointerId),
                                    w.current = null,
                                    m.current = null,
                                    Z) {
                                    const ce = R.currentTarget
                                        , N = {
                                            originalEvent: R,
                                            delta: Z
                                        };
                                    Af(Z, y.swipeDirection, y.swipeThreshold) ? ui(rE, h, N, {
                                        discrete: !0
                                    }) : ui(nE, f, N, {
                                        discrete: !0
                                    }),
                                        ce.addEventListener("click", M => M.preventDefault(), {
                                            once: !0
                                        })
                                }
                            }
                            )
                        })
                    })
                }), y.viewport)
            })]
        }) : null
    }
    )
    , aE = e => {
        const { __scopeToast: t, children: n, ...r } = e
            , o = Ms(Io, t)
            , [i, s] = T.useState(!1)
            , [a, l] = T.useState(!1);
        return cE(() => s(!0)),
            T.useEffect(() => {
                const u = window.setTimeout(() => l(!0), 1e3);
                return () => window.clearTimeout(u)
            }
                , []),
            a ? null : g.jsx(Lg, {
                asChild: !0,
                children: g.jsx(Zu, {
                    ...r,
                    children: i && g.jsxs(g.Fragment, {
                        children: [o.label, " ", n]
                    })
                })
            })
    }
    , lE = "ToastTitle"
    , zg = T.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return g.jsx(St.div, {
            ...r,
            ref: t
        })
    }
    );
zg.displayName = lE;
var uE = "ToastDescription"
    , Bg = T.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return g.jsx(St.div, {
            ...r,
            ref: t
        })
    }
    );
Bg.displayName = uE;
var Ug = "ToastAction"
    , $g = T.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim() ? g.jsx(Hg, {
            altText: n,
            asChild: !0,
            children: g.jsx(tc, {
                ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ug}\`. Expected non-empty \`string\`.`),
            null)
    }
    );
$g.displayName = Ug;
var Wg = "ToastClose"
    , tc = T.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e
            , o = iE(Wg, n);
        return g.jsx(Hg, {
            asChild: !0,
            children: g.jsx(St.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: $e(e.onClick, o.onClose)
            })
        })
    }
    );
tc.displayName = Wg;
var Hg = T.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return g.jsx(St.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Gg(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
            dE(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
                , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Gg(r))
        }
    }
    ),
        t
}
function ui(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget
        , i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }),
        r ? Ag(o, i) : o.dispatchEvent(i)
}
var Af = (e, t, n = 0) => {
    const r = Math.abs(e.x)
        , o = Math.abs(e.y)
        , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
    ;
function cE(e = () => { }
) {
    const t = Dn(e);
    No(() => {
        let n = 0
            , r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)),
            () => {
                window.cancelAnimationFrame(n),
                    window.cancelAnimationFrame(r)
            }
    }
        , [t])
}
function dE(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function fE(e) {
    const t = []
        , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();)
        t.push(n.currentNode);
    return t
}
function ya(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
        document.activeElement !== t))
}
var pE = Dg
    , Kg = Vg
    , Yg = Fg
    , Qg = zg
    , Xg = Bg
    , qg = $g
    , Zg = tc;
const Nf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
    , jf = xg
    , Jg = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return jf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: o, defaultVariants: i } = t
            , s = Object.keys(o).map(u => {
                const c = n == null ? void 0 : n[u]
                    , d = i == null ? void 0 : i[u];
                if (c === null)
                    return null;
                const f = Nf(c) || Nf(d);
                return o[u][f]
            }
            )
            , a = n && Object.entries(n).reduce((u, c) => {
                let [d, f] = c;
                return f === void 0 || (u[d] = f),
                    u
            }
                , {})
            , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
                let { class: d, className: f, ...h } = c;
                return Object.entries(h).every(x => {
                    let [y, S] = x;
                    return Array.isArray(S) ? S.includes({
                        ...i,
                        ...a
                    }[y]) : {
                        ...i,
                        ...a
                    }[y] === S
                }
                ) ? [...u, d, f] : u
            }
                , []);
        return jf(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    }
    , hE = pE
    , ev = oe.forwardRef(({ className: e, ...t }, n) => g.jsx(Kg, {
        ref: n,
        className: Bn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
ev.displayName = Kg.displayName;
const mE = Jg("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full", {
    variants: {
        variant: {
            default: "bg-background border",
            destructive: "group destructive border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
    , tv = oe.forwardRef(({ className: e, variant: t, ...n }, r) => g.jsx(Yg, {
        ref: r,
        className: Bn(mE({
            variant: t
        }), e),
        ...n
    }));
tv.displayName = Yg.displayName;
const gE = oe.forwardRef(({ className: e, ...t }, n) => g.jsx(qg, {
    ref: n,
    className: Bn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
gE.displayName = qg.displayName;
const nv = oe.forwardRef(({ className: e, ...t }, n) => g.jsx(Zg, {
    ref: n,
    className: Bn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: g.jsx(vg, {
        className: "h-4 w-4"
    })
}));
nv.displayName = Zg.displayName;
const rv = oe.forwardRef(({ className: e, ...t }, n) => g.jsx(Qg, {
    ref: n,
    className: Bn("text-sm font-semibold", e),
    ...t
}));
rv.displayName = Qg.displayName;
const ov = oe.forwardRef(({ className: e, ...t }, n) => g.jsx(Xg, {
    ref: n,
    className: Bn("text-sm opacity-90", e),
    ...t
}));
ov.displayName = Xg.displayName;
const vE = 1;
let xa = 0;
function yE() {
    return xa = (xa + 1) % Number.MAX_VALUE,
        xa.toString()
}
const Ne = {
    state: {
        toasts: []
    },
    listeners: [],
    getState: () => Ne.state,
    setState: e => {
        typeof e == "function" ? Ne.state = e(Ne.state) : Ne.state = {
            ...Ne.state,
            ...e
        },
            Ne.listeners.forEach(t => t(Ne.state))
    }
    ,
    subscribe: e => (Ne.listeners.push(e),
        () => {
            Ne.listeners = Ne.listeners.filter(t => t !== e)
        }
    )
}
    , xE = ({ ...e }) => {
        const t = yE()
            , n = o => Ne.setState(i => ({
                ...i,
                toasts: i.toasts.map(s => s.id === t ? {
                    ...s,
                    ...o
                } : s)
            }))
            , r = () => Ne.setState(o => ({
                ...o,
                toasts: o.toasts.filter(i => i.id !== t)
            }));
        return Ne.setState(o => ({
            ...o,
            toasts: [{
                ...e,
                id: t,
                dismiss: r
            }, ...o.toasts].slice(0, vE)
        })),
        {
            id: t,
            dismiss: r,
            update: n
        }
    }
    ;
function wE() {
    const [e, t] = T.useState(Ne.getState());
    return T.useEffect(() => Ne.subscribe(r => {
        t(r)
    }
    ), []),
        T.useEffect(() => {
            const n = [];
            return e.toasts.forEach(r => {
                if (r.duration === 1 / 0)
                    return;
                const o = setTimeout(() => {
                    r.dismiss()
                }
                    , r.duration || 5e3);
                n.push(o)
            }
            ),
                () => {
                    n.forEach(r => clearTimeout(r))
                }
        }
            , [e.toasts]),
    {
        toast: xE,
        toasts: e.toasts
    }
}
function SE() {
    const { toasts: e } = wE();
    return g.jsxs(hE, {
        children: [e.map(({ id: t, title: n, description: r, action: o, ...i }) => g.jsxs(tv, {
            ...i,
            children: [g.jsxs("div", {
                className: "grid gap-1",
                children: [n && g.jsx(rv, {
                    children: n
                }), r && g.jsx(ov, {
                    children: r
                })]
            }), o, g.jsx(nv, {})]
        }, t)), g.jsx(ev, {})]
    })
}
const TE = Jg("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
    , wt = oe.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
        const s = r ? CC : "button";
        return g.jsx(s, {
            className: Bn(TE({
                variant: t,
                size: n,
                className: e
            })),
            ref: i,
            ...o
        })
    }
    );
wt.displayName = "Button";
const Hn = ({ href: e, children: t, scrollTo: n, setMenuOpen: r }) => g.jsx("a", {
    href: e,
    onClick: o => {
        o.preventDefault(),
            n(e.substring(1)),
            r && r(!1)
    }
    ,
    className: "text-gray-600 hover:text-green-600 transition-colors",
    children: t
})
    , CE = ({ onWhatsAppClick: e, scrollTo: t }) => {
        const [n, r] = T.useState(!1);
        return g.jsxs("header", {
            className: "bg-white shadow-sm border-b sticky top-0 z-50",
            children: [g.jsx("div", {
                className: "container mx-auto px-4 py-4",
                children: g.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [g.jsxs(ye.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "flex items-center space-x-2",
                        children: [g.jsx("img", {
                            src: "./assets/logo.png",
                            alt: "EletriCaldas Logo",
                            className: "w-10 h-10"
                        }), g.jsx("span", {
                            className: "text-xl font-bold gradient-text",
                            children: "EletriCaldas"
                        })]
                    }), g.jsxs("nav", {
                        className: "hidden md:flex items-center space-x-8",
                        children: [g.jsx(Hn, {
                            href: "#servicos",
                            scrollTo: t,
                            children: "Serviços"
                        }), g.jsx(Hn, {
                            href: "#depoimentos",
                            scrollTo: t,
                            children: "Depoimentos"
                        }), g.jsx(Hn, {
                            href: "#contato",
                            scrollTo: t,
                            children: "Contato"
                        })]
                    }), g.jsx(ye.div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "hidden md:flex items-center space-x-4",
                        children: g.jsxs(wt, {
                            onClick: e,
                            className: "cta-button text-white",
                            children: [g.jsx(un, {
                                className: "w-4 h-4 mr-2"
                            }), "WhatsApp"]
                        })
                    }), g.jsx("div", {
                        className: "md:hidden",
                        children: g.jsx("button", {
                            onClick: () => r(!n),
                            children: n ? g.jsx(vg, {
                                className: "w-6 h-6"
                            }) : g.jsx($T, {
                                className: "w-6 h-6"
                            })
                        })
                    })]
                })
            }), n && g.jsx(ye.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                className: "md:hidden bg-white pb-4",
                children: g.jsxs("nav", {
                    className: "flex flex-col items-center space-y-4",
                    children: [g.jsx(Hn, {
                        href: "#servicos",
                        scrollTo: t,
                        setMenuOpen: r,
                        children: "Serviços"
                    }), g.jsx(Hn, {
                        href: "#depoimentos",
                        scrollTo: t,
                        setMenuOpen: r,
                        children: "Depoimentos"
                    }), g.jsx(Hn, {
                        href: "#contato",
                        scrollTo: t,
                        setMenuOpen: r,
                        children: "Contato"
                    }), g.jsxs(wt, {
                        onClick: e,
                        className: "cta-button text-white w-full max-w-xs mx-auto",
                        children: [g.jsx(un, {
                            className: "w-4 h-4 mr-2"
                        }), "WhatsApp"]
                    })]
                })
            })]
        })
    }
    , EE = ({ onWhatsAppClick: e, onPhoneClick: t }) => g.jsx("section", {
        className: "relative bg-gradient-to-br from-green-50 to-blue-50 hero-pattern py-20",
        children: g.jsx("div", {
            className: "container mx-auto px-4",
            children: g.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [g.jsxs(ye.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    children: [g.jsxs("h1", {
                        className: "text-4xl lg:text-6xl font-bold text-gray-900 mb-6",
                        children: ["Eletricista em ", g.jsx("span", {
                            className: "gradient-text",
                            children: "Caldas Novas"
                        })]
                    }), g.jsx("p", {
                        className: "text-xl text-gray-600 mb-8",
                        children: "Serviços elétricos residenciais e prediais com segurança, qualidade e preço justo. Atendimento 24 horas em Caldas Novas."
                    }), g.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 mb-8",
                        children: [g.jsxs(wt, {
                            onClick: e,
                            size: "lg",
                            className: "cta-button text-white text-lg px-8 py-4",
                            children: [g.jsx(un, {
                                className: "w-5 h-5 mr-2"
                            }), "Peça seu Orçamento Grátis"]
                        }), g.jsxs(wt, {
                            onClick: t,
                            variant: "outline",
                            size: "lg",
                            className: "text-lg px-8 py-4 border-green-500 text-green-600 hover:bg-green-50",
                            children: [g.jsx(is, {
                                className: "w-5 h-5 mr-2"
                            }), "Ligue Agora"]
                        })]
                    }), g.jsxs("div", {
                        className: "flex items-center space-x-6 text-sm text-gray-600",
                        children: [g.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [g.jsx(Ht, {
                                className: "w-5 h-5 text-green-500"
                            }), g.jsx("span", {
                                children: "Orçamento Gratuito"
                            })]
                        }), g.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [g.jsx(Ht, {
                                className: "w-5 h-5 text-green-500"
                            }), g.jsx("span", {
                                children: "Atendimento 24h"
                            })]
                        }), g.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [g.jsx(Ht, {
                                className: "w-5 h-5 text-green-500"
                            }), g.jsx("span", {
                                children: "Garantia"
                            })]
                        })]
                    })]
                }), g.jsxs(ye.div, {
                    initial: {
                        opacity: 0,
                        scale: .8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    className: "relative",
                    children: [g.jsx("img", {
                        alt: "Eletricista profissional trabalhando em instalação elétrica",
                        className: "rounded-2xl shadow-2xl w-full h-auto",
                        src: "./assets/img1.jpg"
                    }), g.jsx(ye.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1
                        },
                        className: "absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4",

                    })]
                })]
            })
        })
    })
    , PE = [{
        icon: g.jsx(KT, {
            className: "w-8 h-8"
        }),
        title: "Instalações Elétricas",
        description: "Instalação completa de sistemas elétricos residenciais e prediais com segurança e qualidade."
    }, {
        icon: g.jsx(GT, {
            className: "w-8 h-8"
        }),
        title: "Manutenção Elétrica",
        description: "Manutenção preventiva e corretiva em sistemas elétricos, garantindo funcionamento perfeito."
    }, {
        icon: g.jsx(WT, {
            className: "w-8 h-8"
        }),
        title: "Painéis de Disjuntores",
        description: "Instalação e manutenção de quadros elétricos e painéis de disjuntores com total segurança."
    }, {
        icon: g.jsx(BT, {
            className: "w-8 h-8"
        }),
        title: "Emergências 24h",
        description: "Atendimento de emergência 24 horas para resolver problemas elétricos urgentes."
    }]
    , kE = ({ onWhatsAppClick: e }) => g.jsx("section", {
        id: "servicos",
        className: "py-20 bg-white",
        children: g.jsxs("div", {
            className: "container mx-auto px-4",
            children: [g.jsxs(ye.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [g.jsx("h2", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Nossos Serviços"
                }), g.jsx("p", {
                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                    children: "Oferecemos soluções completas em serviços elétricos para residências e prédios em Caldas Novas"
                }), g.jsx("div", {
                    className: "section-divider mt-8 max-w-24 mx-auto"
                })]
            }), g.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: PE.map((t, n) => g.jsxs(ye.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: n * .1
                    },
                    className: "service-card bg-white rounded-xl p-6 text-center",
                    children: [g.jsx("div", {
                        className: "bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600",
                        children: t.icon
                    }), g.jsx("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-3",
                        children: t.title
                    }), g.jsx("p", {
                        className: "text-gray-600",
                        children: t.description
                    })]
                }, n))
            }), g.jsx(ye.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mt-12",
                children: g.jsxs(wt, {
                    onClick: e,
                    size: "lg",
                    className: "cta-button text-white text-lg px-8 py-4",
                    children: [g.jsx(un, {
                        className: "w-5 h-5 mr-2"
                    }), "Solicitar Orçamento"]
                })
            })]
        })
    })
    , AE = () => g.jsx("section", {
        id: "sobre",
        className: "py-20 bg-gray-50",
        children: g.jsx("div", {
            className: "container mx-auto px-4",
            children: g.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [g.jsx(ye.div, {
                    initial: {
                        opacity: 0,
                        x: -30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: g.jsx("img", {
                        alt: "Equipe de eletricistas profissionais em Caldas Novas",
                        className: "rounded-2xl shadow-xl w-full h-auto",
                        src: "./assets/img2.jpg"
                    })
                }), g.jsxs(ye.div, {
                    initial: {
                        opacity: 0,
                        x: 30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: [g.jsx("h2", {
                        className: "text-4xl font-bold text-gray-900 mb-6",
                        children: "Por que escolher nossos serviços?"
                    }), g.jsx("p", {
                        className: "text-lg text-gray-600 mb-8",
                        children: "Somos especialistas em serviços elétricos em Caldas Novas com mais de 6 anos de experiência. Oferecemos soluções seguras, eficientes e com preços justos."
                    }), g.jsxs("div", {
                        className: "space-y-4 mb-8",
                        children: [g.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [g.jsx(Ht, {
                                className: "w-6 h-6 text-green-500 flex-shrink-0"
                            }), g.jsx("span", {
                                className: "text-gray-700",
                                children: "Profissionais certificados e experientes"
                            })]
                        }), g.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [g.jsx(Ht, {
                                className: "w-6 h-6 text-green-500 flex-shrink-0"
                            }), g.jsx("span", {
                                className: "text-gray-700",
                                children: "Atendimento 24 horas para emergências"
                            })]
                        }), g.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [g.jsx(Ht, {
                                className: "w-6 h-6 text-green-500 flex-shrink-0"
                            }), g.jsx("span", {
                                className: "text-gray-700",
                                children: "Orçamentos gratuitos e sem compromisso"
                            })]
                        }), g.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [g.jsx(Ht, {
                                className: "w-6 h-6 text-green-500 flex-shrink-0"
                            }), g.jsx("span", {
                                className: "text-gray-700",
                                children: "Garantia em todos os serviços realizados"
                            })]
                        }), g.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [g.jsx(Ht, {
                                className: "w-6 h-6 text-green-500 flex-shrink-0"
                            }), g.jsx("span", {
                                className: "text-gray-700",
                                children: "Preços justos e transparentes"
                            })]
                        })]
                    }), g.jsxs("div", {
                        className: "grid grid-cols-3 gap-6 text-center",
                        children: [g.jsxs("div", {
                            children: [g.jsx("div", {
                                className: "text-3xl font-bold text-green-600",
                                children: "6+"
                            }), g.jsx("div", {
                                className: "text-sm text-gray-600",
                                children: "Anos de experiência"
                            })]
                        }), g.jsxs("div", {
                            children: [g.jsx("div", {
                                className: "text-3xl font-bold text-green-600",
                                children: "500+"
                            }), g.jsx("div", {
                                className: "text-sm text-gray-600",
                                children: "Clientes atendidos"
                            })]
                        }), g.jsxs("div", {
                            children: [g.jsx("div", {
                                className: "text-3xl font-bold text-green-600",
                                children: "24h"
                            }), g.jsx("div", {
                                className: "text-sm text-gray-600",
                                children: "Atendimento"
                            })]
                        })]
                    })]
                })]
            })
        })
    })
    , NE = () => g.jsx("section", {
        id: "depoimentos",
        className: "py-20 bg-white",
        children: g.jsxs("div", {
            className: "container mx-auto px-4",
            children: [g.jsxs(ye.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [g.jsx("h2", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "O que nossos clientes dizem"
                }), g.jsx("p", {
                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                    children: "Veja os depoimentos de quem já confiou em nossos serviços elétricos"
                }), g.jsx("div", {
                    className: "section-divider mt-8 max-w-24 mx-auto"
                })]
            }), g.jsx(ye.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: g.jsx("div", {
                    className: "elfsight-app-ceb8456a-e2cc-4ebe-9473-def0b2723f9a",
                    "data-elfsight-app-lazy": !0
                })
            })]
        })
    })
    , jE = [{
        question: "Vocês atendem em emergências?",
        answer: "Sim! Oferecemos atendimento 24 horas para emergências elétricas em Caldas Novas e região."
    }, {
        question: "O orçamento é gratuito?",
        answer: "Sim, Orçamentos sao gratuitos, exceto em casos que exigem reparo ou avaliação prática."
    }, {
        question: "Vocês trabalham com garantia?",
        answer: "Todos os nossos serviços possuem garantia. A garantia varia conforme o tipo de serviço realizado."
    }, {
        question: "Atendem apenas residências?",
        answer: "Não! Atendemos residências, prédios, comércios e indústrias em Caldas Novas e região."
    }, {
        question: "Qual a forma de pagamento?",
        answer: "Dinheiro, PIX e cartões aceitos. À vista: 4% de desconto. Parcelamento sujeito a juros."
    }]
    , RE = () => g.jsx("section", {
        id: "faq",
        className: "py-20 bg-gray-50",
        children: g.jsxs("div", {
            className: "container mx-auto px-4",
            children: [g.jsxs(ye.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [g.jsx("h2", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Perguntas Frequentes"
                }), g.jsx("p", {
                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                    children: "Tire suas dúvidas sobre nossos serviços elétricos"
                }), g.jsx("div", {
                    className: "section-divider mt-8 max-w-24 mx-auto"
                })]
            }), g.jsx("div", {
                className: "max-w-3xl mx-auto space-y-6",
                children: jE.map((e, t) => g.jsxs(ye.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: t * .1
                    },
                    className: "bg-white rounded-xl p-6 shadow-sm border",
                    children: [g.jsx("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-3",
                        children: e.question
                    }), g.jsx("p", {
                        className: "text-gray-600",
                        children: e.answer
                    })]
                }, t))
            })]
        })
    })
    , ME = ({ onWhatsAppClick: e, onPhoneClick: t }) => g.jsx("section", {
        id: "contato",
        className: "py-20 bg-green-600",
        children: g.jsx("div", {
            className: "container mx-auto px-4",
            children: g.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [g.jsxs(ye.div, {
                    initial: {
                        opacity: 0,
                        x: -30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: [g.jsx("h2", {
                        className: "text-4xl font-bold text-white mb-6",
                        children: "Precisa de um eletricista em Caldas Novas?"
                    }), g.jsx("p", {
                        className: "text-xl text-green-100 mb-8",
                        children: "Entre em contato conosco agora mesmo e solicite seu orçamento gratuito. Atendemos 24 horas para emergências!"
                    }), g.jsxs("div", {
                        className: "space-y-4 mb-8",
                        children: [g.jsxs("div", {
                            className: "flex items-center space-x-3 text-white",
                            children: [g.jsx(is, {
                                className: "w-6 h-6"
                            }), g.jsx("span", {
                                className: "text-lg",
                                children: "(64) 99286-9608"
                            })]
                        }), g.jsxs("div", {
                            className: "flex items-center space-x-3 text-white",
                            children: [g.jsx(un, {
                                className: "w-6 h-6"
                            }), g.jsx("span", {
                                className: "text-lg",
                                children: "WhatsApp disponível 24h"
                            })]
                        }), g.jsxs("div", {
                            className: "flex items-center space-x-3 text-white",
                            children: [g.jsx(UT, {
                                className: "w-6 h-6"
                            }), g.jsx("span", {
                                className: "text-lg",
                                children: "Caldas Novas, Goiás"
                            })]
                        })]
                    }), g.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [g.jsxs(wt, {
                            onClick: e,
                            size: "lg",
                            className: "bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4",
                            children: [g.jsx(un, {
                                className: "w-5 h-5 mr-2"
                            }), "WhatsApp"]
                        }), g.jsxs(wt, {
                            onClick: t,
                            variant: "outline",
                            size: "lg",
                            className: "border-white text-gray hover:bg-white hover:text-green-600 text-lg px-8 py-4",
                            children: [g.jsx(is, {
                                className: "w-5 h-5 mr-2"
                            }), "Ligar Agora"]
                        })]
                    })]
                }), g.jsx(ye.div, {
                    initial: {
                        opacity: 0,
                        x: 30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "bg-white rounded-2xl p-8 shadow-xl flex items-center justify-center",
                    children: g.jsx("h3", {
                        className: "text-2xl font-bold text-gray-900 text-center",
                        children: "Entre em contato via WhatsApp ou Telefone para um orçamento rápido!"
                    })
                })]
            })
        })
    })
    , ci = ({ href: e, children: t, scrollTo: n }) => g.jsx("li", {
        children: g.jsx("a", {
            href: e,
            onClick: r => {
                r.preventDefault(),
                    n(e.substring(1))
            }
            ,
            className: "hover:text-green-400 transition-colors",
            children: t
        })
    })
    , LE = ({ onWhatsAppClick: e, onPhoneClick: t, scrollTo: n }) => g.jsx("footer", {
        className: "bg-gray-900 text-white py-12",
        children: g.jsxs("div", {
            className: "container mx-auto px-4",
            children: [g.jsxs("div", {
                className: "grid md:grid-cols-4 gap-8",
                children: [g.jsxs("div", {
                    children: [g.jsxs("div", {
                        className: "flex items-center space-x-2 mb-4",
                        children: [g.jsx("img", {
                            src: "./assets/logo.png",
                            alt: "EletriCaldas Logo",
                            className: "w-10 h-10"
                        }), g.jsx("span", {
                            className: "text-xl font-bold",
                            children: "EletriCaldas"
                        })]
                    }), g.jsx("p", {
                        className: "text-gray-400 mb-4",
                        children: "Eletricista profissional em Caldas Novas, oferecendo serviços elétricos de qualidade há mais de 6 anos."
                    }), g.jsxs("div", {
                        className: "flex space-x-4",
                        children: [g.jsx(wt, {
                            onClick: e,
                            size: "sm",
                            className: "bg-green-600 hover:bg-green-700",
                            children: g.jsx(un, {
                                className: "w-4 h-4"
                            })
                        }), g.jsx(wt, {
                            onClick: t,
                            size: "sm",
                            variant: "outline",
                            className: "border-gray-600 text-gray-300 hover:bg-gray-800",
                            children: g.jsx(is, {
                                className: "w-4 h-4"
                            })
                        })]
                    })]
                }), g.jsxs("div", {
                    children: [g.jsx("span", {
                        className: "text-lg font-semibold mb-4 block",
                        children: "Links Rápidos"
                    }), g.jsxs("ul", {
                        className: "space-y-2 text-gray-400",
                        children: [g.jsx(ci, {
                            href: "#servicos",
                            scrollTo: n,
                            children: "Serviços"
                        }), g.jsx(ci, {
                            href: "#sobre",
                            scrollTo: n,
                            children: "Sobre Nós"
                        }), g.jsx(ci, {
                            href: "#depoimentos",
                            scrollTo: n,
                            children: "Depoimentos"
                        }), g.jsx(ci, {
                            href: "#faq",
                            scrollTo: n,
                            children: "FAQ"
                        })]
                    })]
                }), g.jsxs("div", {
                    children: [g.jsx("span", {
                        className: "text-lg font-semibold mb-4 block",
                        children: "Contato"
                    }), g.jsxs("ul", {
                        className: "space-y-2 text-gray-400",
                        children: [g.jsx("li", {
                            children: "(64) 99286-9608"
                        }), g.jsx("li", {
                            children: "Caldas Novas, Goiás"
                        }), g.jsx("li", {
                            children: "Atendimento 24 horas"
                        })]
                    })]
                }), g.jsxs("div", {
                    children: [g.jsx("span", {
                        className: "text-lg font-semibold mb-4 block",
                        children: "Horários"
                    }), g.jsxs("ul", {
                        className: "space-y-2 text-gray-400",
                        children: [g.jsx("li", {
                            children: "Segunda a Sexta: 7h às 18h"
                        }), g.jsx("li", {
                            children: "Sábado: 8h às 16h"
                        }), g.jsx("li", {
                            children: "Domingo: 8h às 16h"
                        }), g.jsx("li", {
                            children: "Plantão 24h disponível"
                        })]
                    })]
                })]
            }), g.jsx("div", {
                className: "border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",
                children: g.jsx("p", {
                    children: "© 2024 EletriCaldas. Todos os direitos reservados. Eletricista em Caldas Novas, Goiás."
                })
            })]
        })
    });
function bE() {
    const e = "64992869608"
        , gtag_conversion_cotacao = () => {
            gtag('event', 'conversion', {
                'send_to': 'AW-16982045139/1o2gCIWM94UbENPj1aE_',
                'value': 1.0,
                'currency': 'BRL'
            });
        }

        , gtag_conversion_ligacao = () => {
            gtag('event', 'conversion', {
                'send_to': 'AW-16982045139/M_BMCMq79oUbENPj1aE_',
                'value': 1.0,
                'currency': 'BRL'
            });
        }
        , t = () => {
            gtag_conversion_cotacao();
            window.open(`https://wa.me/55${e}?text=Olá! Gostaria de solicitar um orçamento para serviços elétricos.`, "_blank")
        }
        , n = () => {
            gtag_conversion_ligacao();
            window.open(`tel:+55${e}`)
        }
        , r = o => {
            const i = document.getElementById(o);
            i && i.scrollIntoView({
                behavior: "smooth"
            })
        }
        ;
    return g.jsxs(g.Fragment, {
        children: [g.jsxs(gl, {
            children: [g.jsx("title", {
                children: "Eletricista em Caldas Novas GO - EletriCaldas - Serviços Elétricos"
            }), g.jsx("meta", {
                name: "description",
                content: "Eletricista profissional em Caldas Novas GO. Instalações, manutenção elétrica, painéis de disjuntores. Atendimento 24h. Serviços residenciais e comerciais. Atendimento rápido e Orçamento grátis!"
            }), g.jsx("meta", {
                name: "keywords",
                content: "eletricista caldas novas, eletricista goias, eletricaldas, instalação elétrica, manutenção elétrica, painel disjuntor, emergência elétrica"
            }), g.jsx("meta", {
                property: "og:title",
                content: "Eletricista em Caldas Novas GO - EletriCaldas"
            }), g.jsx("meta", {
                property: "og:description",
                content: "Eletricista profissional em Caldas Novas GO. Instalações, manutenção elétrica, painéis de disjuntores. Atendimento 24h."
            }),
            g.jsx("meta", {
                property: "og:image",
                content: "https://dev-josue-morais.github.io/EletricistaResidencial/assets/logo.png"
            }),
            g.jsx("meta", {
                property: "og:url",
                content: "https://dev-josue-morais.github.io/EletricistaResidencial/"
            }), g.jsx("meta", {
                name: "geo.region",
                content: "BR-GO"
            }), g.jsx("meta", {
                name: "geo.placename",
                content: "Caldas Novas"
            })]
        }), g.jsxs("div", {
            className: "min-h-screen bg-white",
            children: [
                g.jsx(CE, {
                    onWhatsAppClick: t,
                    scrollTo: r
                }), g.jsxs("main", {
                    children: [g.jsx(EE, {
                        onWhatsAppClick: t,
                        onPhoneClick: n
                    }), g.jsx(kE, {
                        onWhatsAppClick: t
                    }), g.jsx(AE, {}), g.jsx(NE, {}), g.jsx(RE, {}), g.jsx(ME, {
                        onWhatsAppClick: t,
                        onPhoneClick: n
                    })]
                }), g.jsx(LE, {
                    onWhatsAppClick: t,
                    onPhoneClick: n,
                    scrollTo: r
                }), g.jsx(SE, {})]
        })]
    })
}
wa.createRoot(document.getElementById("root")).render(g.jsx(oe.StrictMode, {
    children: g.jsx(bE, {})
}));
