(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 74021, e => {
    "use strict";
    let t, n;
    var r = e.i(43476)
      , i = e.i(71645)
      , o = e.i(46932)
      , l = e.i(86427)
      , s = e.i(65566)
      , a = e.i(60830)
      , f = e.i(87022);
    function c(e, t) {
        let n, r = () => {
            let {currentTime: r} = t
              , i = (null === r ? 0 : r.value) / 100;
            n !== i && e(i),
            n = i
        }
        ;
        return f.frame.preUpdate(r, !0),
        () => (0,
        f.cancelFrame)(r)
    }
    var u = e.i(30551)
      , g = e.i(89026)
      , d = e.i(49652);
    let h = new WeakMap
      , p = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : (0,
    g.isSVGElement)(r) && "getBBox"in r ? r.getBBox()[t] : r[n]
      , m = p("inline", "width", "offsetWidth")
      , y = p("block", "height", "offsetHeight");
    function v({target: e, borderBoxSize: t}) {
        h.get(e)?.forEach(n => {
            n(e, {
                get width() {
                    return m(e, t)
                },
                get height() {
                    return y(e, t)
                }
            })
        }
        )
    }
    function w(e) {
        e.forEach(v)
    }
    let x = new Set;
    var E = e.i(83920)
      , C = e.i(25791);
    let L = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    })
      , W = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };
    function S(e, t, n, r) {
        let i = n[t]
          , {length: o, position: l} = W[t]
          , s = i.current
          , a = n.time;
        i.current = e[`scroll${l}`],
        i.scrollLength = e[`scroll${o}`] - e[`client${o}`],
        i.offset.length = 0,
        i.offset[0] = 0,
        i.offset[1] = i.scrollLength,
        i.progress = (0,
        E.progress)(0, i.scrollLength, i.current);
        let f = r - a;
        i.velocity = f > 50 ? 0 : (0,
        C.velocityPerSecond)(i.current - s, f)
    }
    e.i(47167);
    var b = e.i(44230)
      , M = e.i(15923)
      , V = e.i(76959)
      , O = e.i(72846);
    let B = {
        start: 0,
        center: .5,
        end: 1
    };
    function R(e, t, n=0) {
        let r = 0;
        if (e in B && (e = B[e]),
        "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (r = t * e),
        n + r
    }
    let H = [0, 0]
      , N = [[0, 0], [1, 1]]
      , z = {
        x: 0,
        y: 0
    }
      , T = new WeakMap
      , k = new WeakMap
      , A = new WeakMap
      , P = new WeakMap
      , j = new WeakMap
      , F = e => e === document.scrollingElement ? window : e;
    function U(e, {container: r=document.scrollingElement, trackContentSize: i=!1, ...o}={}) {
        if (!r)
            return a.noop;
        let l = A.get(r);
        l || (l = new Set,
        A.set(r, l));
        let s = function(e, t, n, r={}) {
            return {
                measure: t => {
                    !function(e, t=e, n) {
                        if (n.x.targetOffset = 0,
                        n.y.targetOffset = 0,
                        t !== e) {
                            let r = t;
                            for (; r && r !== e; )
                                n.x.targetOffset += r.offsetLeft,
                                n.y.targetOffset += r.offsetTop,
                                r = r.offsetParent
                        }
                        n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
                        n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
                        n.x.containerLength = e.clientWidth,
                        n.y.containerLength = e.clientHeight
                    }(e, r.target, n),
                    S(e, "x", n, t),
                    S(e, "y", n, t),
                    n.time = t,
                    (r.offset || r.target) && function(e, t, n) {
                        let {offset: r=N} = n
                          , {target: i=e, axis: o="y"} = n
                          , l = "y" === o ? "height" : "width"
                          , s = i !== e ? function(e, t) {
                            let n = {
                                x: 0,
                                y: 0
                            }
                              , r = e;
                            for (; r && r !== t; )
                                if ((0,
                                O.isHTMLElement)(r))
                                    n.x += r.offsetLeft,
                                    n.y += r.offsetTop,
                                    r = r.offsetParent;
                                else if ("svg" === r.tagName) {
                                    let e = r.getBoundingClientRect()
                                      , t = (r = r.parentElement).getBoundingClientRect();
                                    n.x += e.left - t.left,
                                    n.y += e.top - t.top
                                } else if (r instanceof SVGGraphicsElement) {
                                    let {x: e, y: t} = r.getBBox();
                                    n.x += e,
                                    n.y += t;
                                    let i = null
                                      , o = r.parentNode;
                                    for (; !i; )
                                        "svg" === o.tagName && (i = o),
                                        o = r.parentNode;
                                    r = i
                                } else
                                    break;
                            return n
                        }(i, e) : z
                          , a = i === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox"in i && "svg" !== i.tagName ? i.getBBox() : {
                            width: i.clientWidth,
                            height: i.clientHeight
                        }
                          , f = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[o].offset.length = 0;
                        let c = !t[o].interpolate
                          , u = r.length;
                        for (let e = 0; e < u; e++) {
                            let n = function(e, t, n, r) {
                                let i = Array.isArray(e) ? e : H
                                  , o = 0;
                                return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, B[e] ? e : "0"]),
                                (o = R(i[0], n, r)) - R(i[1], t)
                            }(r[e], f[l], a[l], s[o]);
                            c || n === t[o].interpolatorOffsets[e] || (c = !0),
                            t[o].offset[e] = n
                        }
                        c && (t[o].interpolate = (0,
                        b.interpolate)(t[o].offset, (0,
                        M.defaultOffset)(r), {
                            clamp: !1
                        }),
                        t[o].interpolatorOffsets = [...t[o].offset]),
                        t[o].progress = (0,
                        V.clamp)(0, 1, t[o].interpolate(t[o].current))
                    }(e, n, r)
                }
                ,
                notify: () => t(n)
            }
        }(r, e, {
            time: 0,
            x: L(),
            y: L()
        }, o);
        if (l.add(s),
        !T.has(r)) {
            let e, i = () => {
                for (let e of l)
                    e.measure(f.frameData.timestamp);
                f.frame.preUpdate(o)
            }
            , o = () => {
                for (let e of l)
                    e.notify()
            }
            , s = () => f.frame.read(i);
            T.set(r, s);
            let a = F(r);
            window.addEventListener("resize", s, {
                passive: !0
            }),
            r !== document.documentElement && k.set(r, "function" == typeof r ? (x.add(r),
            n || (n = () => {
                let e = {
                    get width() {
                        return window.innerWidth
                    },
                    get height() {
                        return window.innerHeight
                    }
                };
                x.forEach(t => t(e))
            }
            ,
            window.addEventListener("resize", n)),
            () => {
                x.delete(r),
                x.size || "function" != typeof n || (window.removeEventListener("resize", n),
                n = void 0)
            }
            ) : (!t && "u" > typeof ResizeObserver && (t = new ResizeObserver(w)),
            (e = (0,
            d.resolveElements)(r)).forEach(e => {
                let n = h.get(e);
                n || (n = new Set,
                h.set(e, n)),
                n.add(s),
                t?.observe(e)
            }
            ),
            () => {
                e.forEach(e => {
                    let n = h.get(e);
                    n?.delete(s),
                    n?.size || t?.unobserve(e)
                }
                )
            }
            )),
            a.addEventListener("scroll", s, {
                passive: !0
            }),
            s()
        }
        if (i && !j.has(r)) {
            let e = T.get(r)
              , t = {
                width: r.scrollWidth,
                height: r.scrollHeight
            };
            P.set(r, t);
            let n = f.frame.read( () => {
                let n = r.scrollWidth
                  , i = r.scrollHeight;
                (t.width !== n || t.height !== i) && (e(),
                t.width = n,
                t.height = i)
            }
            , !0);
            j.set(r, n)
        }
        let c = T.get(r);
        return f.frame.read(c, !1, !0),
        () => {
            (0,
            f.cancelFrame)(c);
            let e = A.get(r);
            if (!e || (e.delete(s),
            e.size))
                return;
            let t = T.get(r);
            T.delete(r),
            t && (F(r).removeEventListener("scroll", t),
            k.get(r)?.(),
            window.removeEventListener("resize", t));
            let n = j.get(r);
            n && ((0,
            f.cancelFrame)(n),
            j.delete(r)),
            P.delete(r)
        }
    }
    let I = new Map;
    function X({source: e, container: t, ...n}) {
        var r;
        let i, o, {axis: l} = n;
        e && (t = e);
        let s = I.get(t) ?? new Map;
        I.set(t, s);
        let a = n.target ?? "self"
          , f = s.get(a) ?? {}
          , c = l + (n.offset ?? []).join(",");
        return f[c] || (f[c] = !n.target && (0,
        u.supportsScrollTimeline)() ? new ScrollTimeline({
            source: t,
            axis: l
        }) : (r = {
            container: t,
            ...n
        },
        i = {
            value: 0
        },
        o = U(e => {
            i.value = 100 * e[r.axis].progress
        }
        , r),
        {
            currentTime: i,
            cancel: o
        })),
        f[c]
    }
    var Y = e.i(47414)
      , $ = e.i(74008);
    let D = () => ({
        scrollX: (0,
        l.motionValue)(0),
        scrollY: (0,
        l.motionValue)(0),
        scrollXProgress: (0,
        l.motionValue)(0),
        scrollYProgress: (0,
        l.motionValue)(0)
    })
      , G = e => !!e && !e.current;
    var J = e.i(83352)
      , K = e.i(83411);
    function q(e) {
        return "number" == typeof e ? e : parseFloat(e)
    }
    var Q = e.i(37806);
    function Z(e) {
        let t = (0,
        Y.useConstant)( () => (0,
        l.motionValue)(e))
          , {isStatic: n} = (0,
        i.useContext)(Q.MotionConfigContext);
        if (n) {
            let[,n] = (0,
            i.useState)(e);
            (0,
            i.useEffect)( () => t.on("change", n), [])
        }
        return t
    }
    function _(e, t) {
        let n = Z(t())
          , r = () => n.set(t());
        return r(),
        (0,
        $.useIsomorphicLayoutEffect)( () => {
            let t = () => f.frame.preRender(r, !1, !0)
              , n = e.map(e => e.on("change", t));
            return () => {
                n.forEach(e => e()),
                (0,
                f.cancelFrame)(r)
            }
        }
        ),
        n
    }
    function ee(e, t, n, r) {
        if ("function" == typeof e) {
            let t;
            return l.collectMotionValues.current = [],
            e(),
            t = _(l.collectMotionValues.current, e),
            l.collectMotionValues.current = void 0,
            t
        }
        if (void 0 !== n && !Array.isArray(n) && "function" != typeof t) {
            var i = e
              , o = t
              , s = n
              , a = r;
            let l = (0,
            Y.useConstant)( () => Object.keys(s))
              , f = (0,
            Y.useConstant)( () => ({}));
            for (let e of l)
                f[e] = ee(i, o, s[e], a);
            return f
        }
        let f = "function" == typeof t ? t : function(...e) {
            let t = !Array.isArray(e[0])
              , n = t ? 0 : -1
              , r = e[0 + n]
              , i = e[1 + n]
              , o = e[2 + n]
              , l = e[3 + n]
              , s = (0,
            b.interpolate)(i, o, l);
            return t ? s(r) : s
        }(t, n, r);
        return Array.isArray(e) ? et(e, f) : et([e], ([e]) => f(e))
    }
    function et(e, t) {
        let n = (0,
        Y.useConstant)( () => []);
        return _(e, () => {
            n.length = 0;
            let r = e.length;
            for (let t = 0; t < r; t++)
                n[t] = e[t].get();
            return t(n)
        }
        )
    }
    let en = ({scrollContainerRef: e, texts: t=[], velocity: n=100, className: l="", damping: u=50, stiffness: g=400, numCopies: d=6, velocityMapping: h={
        input: [0, 1e3],
        output: [0, 5]
    }, parallaxClassName: p="parallax", scrollerClassName: m="scroller", parallaxStyle: y, scrollerStyle: v}) => {
        function w({children: e, baseVelocity: t=n, scrollContainerRef: l, className: u="", damping: g, stiffness: d, numCopies: h, velocityMapping: p, parallaxClassName: m, scrollerClassName: y, parallaxStyle: v, scrollerStyle: w}) {
            var x, E;
            let C, L, W = Z(0), {scrollY: S} = function({container: e, target: t, ...n}={}) {
                let r = (0,
                Y.useConstant)(D)
                  , o = (0,
                i.useRef)(null)
                  , l = (0,
                i.useRef)(!1)
                  , f = (0,
                i.useCallback)( () => (o.current = function(e, {axis: t="y", container: n=document.scrollingElement, ...r}={}) {
                    var i, o;
                    let l;
                    if (!n)
                        return a.noop;
                    let s = {
                        axis: t,
                        container: n,
                        ...r
                    };
                    return "function" == typeof e ? (i = e,
                    o = s,
                    2 === i.length ? U(e => {
                        i(e[o.axis].progress, e)
                    }
                    , o) : c(i, X(o))) : (l = X(s),
                    e.attachTimeline({
                        timeline: s.target ? void 0 : l,
                        observe: e => (e.pause(),
                        c(t => {
                            e.time = e.iterationDuration * t
                        }
                        , l))
                    }))
                }( (e, {x: t, y: n}) => {
                    r.scrollX.set(t.current),
                    r.scrollXProgress.set(t.progress),
                    r.scrollY.set(n.current),
                    r.scrollYProgress.set(n.progress)
                }
                , {
                    ...n,
                    container: e?.current || void 0,
                    target: t?.current || void 0
                }),
                () => {
                    o.current?.()
                }
                ), [e, t, JSON.stringify(n.offset)]);
                return (0,
                $.useIsomorphicLayoutEffect)( () => {
                    if (l.current = !1,
                    !(G(e) || G(t)))
                        return f();
                    l.current = !0
                }
                , [f]),
                (0,
                i.useEffect)( () => l.current ? ((0,
                s.invariant)(!G(e), "Container ref is defined but not hydrated", "use-scroll-ref"),
                (0,
                s.invariant)(!G(t), "Target ref is defined but not hydrated", "use-scroll-ref"),
                f()) : void 0, [f]),
                r
            }(l ? {
                container: l
            } : {}), b = function(e, t={}) {
                return function(e, t={}) {
                    let {isStatic: n} = (0,
                    i.useContext)(Q.MotionConfigContext)
                      , r = () => (0,
                    K.isMotionValue)(e) ? e.get() : e;
                    if (n)
                        return ee(r);
                    let o = Z(r());
                    return (0,
                    i.useInsertionEffect)( () => (function(e, t, n={}) {
                        let r, i = e.get(), o = null, l = i, s = "string" == typeof i ? i.replace(/[\d.-]/g, "") : void 0, a = () => {
                            o && (o.stop(),
                            o = null)
                        }
                        ;
                        if (e.attach( (t, i) => {
                            l = t,
                            r = e => {
                                var t, n;
                                return i((t = e,
                                (n = s) ? t + n : t))
                            }
                            ,
                            f.frame.postRender( () => {
                                let t, i;
                                a(),
                                t = q(e.get()),
                                t !== (i = q(l)) && (o = new J.JSAnimation({
                                    keyframes: [t, i],
                                    velocity: e.getVelocity(),
                                    type: "spring",
                                    restDelta: .001,
                                    restSpeed: .01,
                                    ...n,
                                    onUpdate: r
                                })),
                                e.events.animationStart?.notify(),
                                o?.then( () => {
                                    e.events.animationComplete?.notify()
                                }
                                )
                            }
                            )
                        }
                        , a),
                        (0,
                        K.isMotionValue)(t)) {
                            let n = t.on("change", t => {
                                var n, r;
                                return e.set((n = t,
                                (r = s) ? n + r : n))
                            }
                            )
                              , r = e.on("destroy", n);
                            return () => {
                                n(),
                                r()
                            }
                        }
                        return a
                    }
                    )(o, e, t), [o, JSON.stringify(t)]),
                    o
                }(e, {
                    type: "spring",
                    ...t
                })
            }((C = Z(S.getVelocity()),
            L = () => {
                let e = S.getVelocity();
                C.set(e),
                e && f.frame.update(L)
            }
            ,
            x = "change",
            E = () => {
                f.frame.update(L, !1, !0)
            }
            ,
            (0,
            i.useInsertionEffect)( () => S.on(x, E), [S, x, E]),
            C), {
                damping: g ?? 50,
                stiffness: d ?? 400
            }), M = ee(b, p?.input || [0, 1e3], p?.output || [0, 5], {
                clamp: !1
            }), V = (0,
            i.useRef)(null), O = function(e) {
                let[t,n] = (0,
                i.useState)(0);
                return (0,
                i.useLayoutEffect)( () => {
                    function t() {
                        e.current && n(e.current.offsetWidth)
                    }
                    return t(),
                    window.addEventListener("resize", t),
                    () => window.removeEventListener("resize", t)
                }
                , [e]),
                t
            }(V), B = ee(W, e => {
                var t;
                let n;
                return 0 === O ? "0px" : `${n = 0 - (t = -O),
                ((e - t) % n + n) % n + t}px`
            }
            ), R = (0,
            i.useRef)(1);
            !function(e) {
                let t = (0,
                i.useRef)(0)
                  , {isStatic: n} = (0,
                i.useContext)(Q.MotionConfigContext);
                (0,
                i.useEffect)( () => {
                    if (n)
                        return;
                    let r = ({timestamp: n, delta: r}) => {
                        t.current || (t.current = n),
                        e(n - t.current, r)
                    }
                    ;
                    return f.frame.update(r, !0),
                    () => (0,
                    f.cancelFrame)(r)
                }
                , [e])
            }( (e, n) => {
                let r = R.current * t * (n / 1e3);
                0 > M.get() ? R.current = -1 : M.get() > 0 && (R.current = 1),
                r += R.current * r * M.get(),
                W.set(W.get() + r)
            }
            );
            let H = [];
            for (let t = 0; t < h; t++)
                H.push((0,
                r.jsx)("span", {
                    className: u,
                    ref: 0 === t ? V : null,
                    children: e
                }, t));
            return (0,
            r.jsx)("div", {
                className: m,
                style: v,
                children: (0,
                r.jsx)(o.motion.div, {
                    className: y,
                    style: {
                        x: B,
                        ...w
                    },
                    children: H
                })
            })
        }
        return (0,
        r.jsx)("section", {
            children: t.map( (t, i) => (0,
            r.jsxs)(w, {
                className: l,
                baseVelocity: i % 2 != 0 ? -n : n,
                scrollContainerRef: e,
                damping: u,
                stiffness: g,
                numCopies: d,
                velocityMapping: h,
                parallaxClassName: p,
                scrollerClassName: m,
                parallaxStyle: y,
                scrollerStyle: v,
                children: [t, " "]
            }, i))
        })
    }
    ;
    e.s(["ScrollVelocity", 0, en, "default", 0, en], 74021)
}
, 28455, e => {
    e.n(e.i(74021))
}
]);
