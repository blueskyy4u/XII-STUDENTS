(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 67585, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let i = e.r(32061);
    function n({reason: e, children: t}) {
        if ("u" < typeof window)
            throw Object.defineProperty(new i.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: !1,
                configurable: !0
            });
        return t
    }
}
, 9885, (e, t, r) => {
    "use strict";
    function i(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}
, 52157, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let i = e.r(43476)
      , n = e.r(74080)
      , s = e.r(63599)
      , a = e.r(9885)
      , o = e.r(43369);
    function l({moduleIds: e}) {
        if ("u" > typeof window)
            return null;
        let t = s.workAsyncStorage.getStore();
        if (void 0 === t)
            return null;
        let r = [];
        if (t.reactLoadableManifest && e) {
            let i = t.reactLoadableManifest;
            for (let t of e) {
                if (!i[t])
                    continue;
                let e = i[t].files;
                r.push(...e)
            }
        }
        if (0 === r.length)
            return null;
        let l = (0,
        o.getDeploymentIdQueryOrEmptyString)();
        return (0,
        i.jsx)(i.Fragment, {
            children: r.map(e => {
                let r = `${t.assetPrefix}/_next/${(0,
                a.encodeURIPath)(e)}${l}`;
                return e.endsWith(".css") ? (0,
                i.jsx)("link", {
                    precedence: "dynamic",
                    href: r,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0,
                n.preload)(r, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }),
                null)
            }
            )
        })
    }
}
, 69093, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let i = e.r(43476)
      , n = e.r(71645)
      , s = e.r(67585)
      , a = e.r(52157);
    function o(e) {
        return {
            default: e && "default"in e ? e.default : e
        }
    }
    let l = {
        loader: () => Promise.resolve(o( () => null)),
        loading: null,
        ssr: !0
    }
      , u = function(e) {
        let t = {
            ...l,
            ...e
        }
          , r = (0,
        n.lazy)( () => t.loader().then(o))
          , u = t.loading;
        function c(e) {
            let o = u ? (0,
            i.jsx)(u, {
                isLoading: !0,
                pastDelay: !0,
                error: null
            }) : null
              , l = !t.ssr || !!t.loading
              , c = l ? n.Suspense : n.Fragment
              , h = t.ssr ? (0,
            i.jsxs)(i.Fragment, {
                children: ["u" < typeof window ? (0,
                i.jsx)(a.PreloadChunks, {
                    moduleIds: t.modules
                }) : null, (0,
                i.jsx)(r, {
                    ...e
                })]
            }) : (0,
            i.jsx)(s.BailoutToCSR, {
                reason: "next/dynamic",
                children: (0,
                i.jsx)(r, {
                    ...e
                })
            });
            return (0,
            i.jsx)(c, {
                ...l ? {
                    fallback: o
                } : {},
                children: h
            })
        }
        return c.displayName = "LoadableComponent",
        c
    }
}
, 70703, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let i = e.r(55682)._(e.r(69093));
    function n(e, t) {
        let r = {};
        "function" == typeof e && (r.loader = e);
        let n = {
            ...r,
            ...t
        };
        return (0,
        i.default)({
            ...n,
            modules: n.loadableGenerated?.modules
        })
    }
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 16015, (e, t, r) => {}
, 98547, (e, t, r) => {
    var i = e.i(47167);
    e.r(16015);
    var n = e.r(71645)
      , s = n && "object" == typeof n && "default"in n ? n : {
        default: n
    }
      , a = void 0 !== i.default && i.default.env && !0
      , o = function(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }
      , l = function() {
        function e(e) {
            var t = void 0 === e ? {} : e
              , r = t.name
              , i = void 0 === r ? "stylesheet" : r
              , n = t.optimizeForSpeed
              , s = void 0 === n ? a : n;
            u(o(i), "`name` must be a string"),
            this._name = i,
            this._deletedRulePlaceholder = "#" + i + "-deleted-rule____{}",
            u("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"),
            this._optimizeForSpeed = s,
            this._serverSheet = void 0,
            this._tags = [],
            this._injected = !1,
            this._rulesCount = 0;
            var l = "u" > typeof window && document.querySelector('meta[property="csp-nonce"]');
            this._nonce = l ? l.getAttribute("content") : null
        }
        var t, r = e.prototype;
        return r.setOptimizeForSpeed = function(e) {
            u("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"),
            u(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"),
            this.flush(),
            this._optimizeForSpeed = e,
            this.inject()
        }
        ,
        r.isOptimizeForSpeed = function() {
            return this._optimizeForSpeed
        }
        ,
        r.inject = function() {
            var e = this;
            if (u(!this._injected, "sheet already injected"),
            this._injected = !0,
            "u" > typeof window && this._optimizeForSpeed) {
                this._tags[0] = this.makeStyleTag(this._name),
                this._optimizeForSpeed = "insertRule"in this.getSheet(),
                this._optimizeForSpeed || (a || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),
                this.flush(),
                this._injected = !0);
                return
            }
            this._serverSheet = {
                cssRules: [],
                insertRule: function(t, r) {
                    return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                        cssText: t
                    } : e._serverSheet.cssRules.push({
                        cssText: t
                    }),
                    r
                },
                deleteRule: function(t) {
                    e._serverSheet.cssRules[t] = null
                }
            }
        }
        ,
        r.getSheetForTag = function(e) {
            if (e.sheet)
                return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t]
        }
        ,
        r.getSheet = function() {
            return this.getSheetForTag(this._tags[this._tags.length - 1])
        }
        ,
        r.insertRule = function(e, t) {
            if (u(o(e), "`insertRule` accepts only strings"),
            "u" < typeof window)
                return "number" != typeof t && (t = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(e, t),
                this._rulesCount++;
            if (this._optimizeForSpeed) {
                var r = this.getSheet();
                "number" != typeof t && (t = r.cssRules.length);
                try {
                    r.insertRule(e, t)
                } catch (t) {
                    return a || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"),
                    -1
                }
            } else {
                var i = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, i))
            }
            return this._rulesCount++
        }
        ,
        r.replaceRule = function(e, t) {
            if (this._optimizeForSpeed || "u" < typeof window) {
                var r = "u" > typeof window ? this.getSheet() : this._serverSheet;
                if (t.trim() || (t = this._deletedRulePlaceholder),
                !r.cssRules[e])
                    return e;
                r.deleteRule(e);
                try {
                    r.insertRule(t, e)
                } catch (i) {
                    a || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"),
                    r.insertRule(this._deletedRulePlaceholder, e)
                }
            } else {
                var i = this._tags[e];
                u(i, "old rule at index `" + e + "` not found"),
                i.textContent = t
            }
            return e
        }
        ,
        r.deleteRule = function(e) {
            if ("u" < typeof window)
                return void this._serverSheet.deleteRule(e);
            if (this._optimizeForSpeed)
                this.replaceRule(e, "");
            else {
                var t = this._tags[e];
                u(t, "rule at index `" + e + "` not found"),
                t.parentNode.removeChild(t),
                this._tags[e] = null
            }
        }
        ,
        r.flush = function() {
            this._injected = !1,
            this._rulesCount = 0,
            "u" > typeof window ? (this._tags.forEach(function(e) {
                return e && e.parentNode.removeChild(e)
            }),
            this._tags = []) : this._serverSheet.cssRules = []
        }
        ,
        r.cssRules = function() {
            var e = this;
            return "u" < typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, r) {
                return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                    return t.cssText === e._deletedRulePlaceholder ? null : t
                })) : t.push(null),
                t
            }, [])
        }
        ,
        r.makeStyleTag = function(e, t, r) {
            t && u(o(t), "makeStyleTag accepts only strings as second parameter");
            var i = document.createElement("style");
            this._nonce && i.setAttribute("nonce", this._nonce),
            i.type = "text/css",
            i.setAttribute("data-" + e, ""),
            t && i.appendChild(document.createTextNode(t));
            var n = document.head || document.getElementsByTagName("head")[0];
            return r ? n.insertBefore(i, r) : n.appendChild(i),
            i
        }
        ,
        t = [{
            key: "length",
            get: function() {
                return this._rulesCount
            }
        }],
        function(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }(e.prototype, t),
        e
    }();
    function u(e, t) {
        if (!e)
            throw Error("StyleSheet: " + t + ".")
    }
    var c = function(e) {
        for (var t = 5381, r = e.length; r; )
            t = 33 * t ^ e.charCodeAt(--r);
        return t >>> 0
    }
      , h = {};
    function d(e, t) {
        if (!t)
            return "jsx-" + e;
        var r = String(t)
          , i = e + r;
        return h[i] || (h[i] = "jsx-" + c(e + "-" + r)),
        h[i]
    }
    function f(e, t) {
        "u" < typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var r = e + t;
        return h[r] || (h[r] = t.replace(/__jsx-style-dynamic-selector/g, e)),
        h[r]
    }
    var p = function() {
        function e(e) {
            var t = void 0 === e ? {} : e
              , r = t.styleSheet
              , i = void 0 === r ? null : r
              , n = t.optimizeForSpeed
              , s = void 0 !== n && n;
            this._sheet = i || new l({
                name: "styled-jsx",
                optimizeForSpeed: s
            }),
            this._sheet.inject(),
            i && "boolean" == typeof s && (this._sheet.setOptimizeForSpeed(s),
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()),
            this._fromServer = void 0,
            this._indices = {},
            this._instancesCounts = {}
        }
        var t = e.prototype;
        return t.add = function(e) {
            var t = this;
            void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children),
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()),
            "u" > typeof window && !this._fromServer && (this._fromServer = this.selectFromServer(),
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                return e[t] = 0,
                e
            }, {}));
            var r = this.getIdAndRules(e)
              , i = r.styleId
              , n = r.rules;
            if (i in this._instancesCounts) {
                this._instancesCounts[i] += 1;
                return
            }
            var s = n.map(function(e) {
                return t._sheet.insertRule(e)
            }).filter(function(e) {
                return -1 !== e
            });
            this._indices[i] = s,
            this._instancesCounts[i] = 1
        }
        ,
        t.remove = function(e) {
            var t = this
              , r = this.getIdAndRules(e).styleId;
            if (function(e, t) {
                if (!e)
                    throw Error("StyleSheetRegistry: " + t + ".")
            }(r in this._instancesCounts, "styleId: `" + r + "` not found"),
            this._instancesCounts[r] -= 1,
            this._instancesCounts[r] < 1) {
                var i = this._fromServer && this._fromServer[r];
                i ? (i.parentNode.removeChild(i),
                delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                    return t._sheet.deleteRule(e)
                }),
                delete this._indices[r]),
                delete this._instancesCounts[r]
            }
        }
        ,
        t.update = function(e, t) {
            this.add(t),
            this.remove(e)
        }
        ,
        t.flush = function() {
            this._sheet.flush(),
            this._sheet.inject(),
            this._fromServer = void 0,
            this._indices = {},
            this._instancesCounts = {}
        }
        ,
        t.cssRules = function() {
            var e = this
              , t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                return [t, e._fromServer[t]]
            }) : []
              , r = this._sheet.cssRules();
            return t.concat(Object.keys(this._indices).map(function(t) {
                return [t, e._indices[t].map(function(e) {
                    return r[e].cssText
                }).join(e._optimizeForSpeed ? "" : "\n")]
            }).filter(function(e) {
                return !!e[1]
            }))
        }
        ,
        t.styles = function(e) {
            var t, r;
            return t = this.cssRules(),
            void 0 === (r = e) && (r = {}),
            t.map(function(e) {
                var t = e[0]
                  , i = e[1];
                return s.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: r.nonce ? r.nonce : void 0,
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                })
            })
        }
        ,
        t.getIdAndRules = function(e) {
            var t = e.children
              , r = e.dynamic
              , i = e.id;
            if (r) {
                var n = d(i, r);
                return {
                    styleId: n,
                    rules: Array.isArray(t) ? t.map(function(e) {
                        return f(n, e)
                    }) : [f(n, t)]
                }
            }
            return {
                styleId: d(i),
                rules: Array.isArray(t) ? t : [t]
            }
        }
        ,
        t.selectFromServer = function() {
            return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                return e[t.id.slice(2)] = t,
                e
            }, {})
        }
        ,
        e
    }()
      , m = n.createContext(null);
    function g() {
        return new p
    }
    function v() {
        return n.useContext(m)
    }
    m.displayName = "StyleSheetContext";
    var _ = s.default.useInsertionEffect || s.default.useLayoutEffect
      , y = "u" > typeof window ? g() : void 0;
    function b(e) {
        var t = y || v();
        return t && ("u" < typeof window ? t.add(e) : _(function() {
            return t.add(e),
            function() {
                t.remove(e)
            }
        }, [e.id, String(e.dynamic)])),
        null
    }
    b.dynamic = function(e) {
        return e.map(function(e) {
            return d(e[0], e[1])
        }).join(" ")
    }
    ,
    r.StyleRegistry = function(e) {
        var t = e.registry
          , r = e.children
          , i = n.useContext(m)
          , a = n.useState(function() {
            return i || t || g()
        })[0];
        return s.default.createElement(m.Provider, {
            value: a
        }, r)
    }
    ,
    r.createStyleRegistry = g,
    r.style = b,
    r.useStyleRegistry = v
}
, 37902, (e, t, r) => {
    t.exports = e.r(98547).style
}
, 88143, (e, t, r) => {
    "use strict";
    function i({widthInt: e, heightInt: t, blurWidth: r, blurHeight: i, blurDataURL: n, objectFit: s}) {
        let a = r ? 40 * r : e
          , o = i ? 40 * i : t
          , l = a && o ? `viewBox='0 0 ${a} ${o}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}
, 87690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        VALID_LOADERS: function() {
            return s
        },
        imageConfigDefault: function() {
            return a
        }
    };
    for (var n in i)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: i[n]
        });
    let s = ["default", "imgix", "cloudinary", "akamai", "custom"]
      , a = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1
    }
}
, 8927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return u
        }
    }),
    e.r(33525);
    let i = e.r(43369)
      , n = e.r(88143)
      , s = e.r(87690)
      , a = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function o(e) {
        return void 0 !== e.default
    }
    function l(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }
    function u({src: e, sizes: t, unoptimized: r=!1, priority: u=!1, preload: c=!1, loading: h, className: d, quality: f, width: p, height: m, fill: g=!1, style: v, overrideSrc: _, onLoad: y, onLoadingComplete: b, placeholder: x="empty", blurDataURL: w, fetchPriority: T, decoding: S="async", layout: C, objectFit: k, objectPosition: O, lazyBoundary: P, lazyRoot: z, ...I}, R) {
        var j;
        let M, E, A, {imgConf: N, showAltText: D, blurComplete: L, defaultLoader: X} = R, F = N || s.imageConfigDefault;
        if ("allSizes"in F)
            M = F;
        else {
            let e = [...F.deviceSizes, ...F.imageSizes].sort( (e, t) => e - t)
              , t = F.deviceSizes.sort( (e, t) => e - t)
              , r = F.qualities?.sort( (e, t) => e - t);
            M = {
                ...F,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === X)
            throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                value: "E163",
                enumerable: !1,
                configurable: !0
            });
        let B = I.loader || X;
        delete I.loader,
        delete I.srcSet;
        let $ = "__next_img_default"in B;
        if ($) {
            if ("custom" === M.loader)
                throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                    value: "E252",
                    enumerable: !1,
                    configurable: !0
                })
        } else {
            let e = B;
            B = t => {
                let {config: r, ...i} = t;
                return e(i)
            }
        }
        if (C) {
            "fill" === C && (g = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[C];
            e && (v = {
                ...v,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[C];
            r && !t && (t = r)
        }
        let Y = ""
          , W = l(p)
          , U = l(m);
        if ((j = e) && "object" == typeof j && (o(j) || void 0 !== j.src)) {
            let t = o(e) ? e.default : e;
            if (!t.src)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E460",
                    enumerable: !1,
                    configurable: !0
                });
            if (!t.height || !t.width)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E48",
                    enumerable: !1,
                    configurable: !0
                });
            if (E = t.blurWidth,
            A = t.blurHeight,
            w = w || t.blurDataURL,
            Y = t.src,
            !g)
                if (W || U) {
                    if (W && !U) {
                        let e = W / t.width;
                        U = Math.round(t.height * e)
                    } else if (!W && U) {
                        let e = U / t.height;
                        W = Math.round(t.width * e)
                    }
                } else
                    W = t.width,
                    U = t.height
        }
        let G = !u && !c && ("lazy" === h || void 0 === h);
        (!(e = "string" == typeof e ? e : Y) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0,
        G = !1),
        M.unoptimized && (r = !0),
        $ && !M.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let H = l(f)
          , q = Object.assign(g ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: k,
            objectPosition: O
        } : {}, D ? {} : {
            color: "transparent"
        }, v)
          , Z = L || "empty" === x ? null : "blur" === x ? `url("data:image/svg+xml;charset=utf-8,${(0,
        n.getImageBlurSvg)({
            widthInt: W,
            heightInt: U,
            blurWidth: E,
            blurHeight: A,
            blurDataURL: w || "",
            objectFit: q.objectFit
        })}")` : `url("${x}")`
          , V = a.includes(q.objectFit) ? "fill" === q.objectFit ? "100% 100%" : "cover" : q.objectFit
          , K = Z ? {
            backgroundSize: V,
            backgroundPosition: q.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: Z
        } : {}
          , Q = function({config: e, src: t, unoptimized: r, width: n, quality: s, sizes: a, loader: o}) {
            if (r) {
                let e = (0,
                i.getDeploymentId)();
                if (t.startsWith("/") && !t.startsWith("//") && e) {
                    let r = t.includes("?") ? "&" : "?";
                    t = `${t}${r}dpl=${e}`
                }
                return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                }
            }
            let {widths: l, kind: u} = function({deviceSizes: e, allSizes: t}, r, i) {
                if (i) {
                    let r = /(^|\s)(1?\d?\d)vw/g
                      , n = [];
                    for (let e; e = r.exec(i); )
                        n.push(parseInt(e[2]));
                    if (n.length) {
                        let r = .01 * Math.min(...n);
                        return {
                            widths: t.filter(t => t >= e[0] * r),
                            kind: "w"
                        }
                    }
                    return {
                        widths: t,
                        kind: "w"
                    }
                }
                return "number" != typeof r ? {
                    widths: e,
                    kind: "w"
                } : {
                    widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                    kind: "x"
                }
            }(e, n, a)
              , c = l.length - 1;
            return {
                sizes: a || "w" !== u ? a : "100vw",
                srcSet: l.map( (r, i) => `${o({
                    config: e,
                    src: t,
                    quality: s,
                    width: r
                })} ${"w" === u ? r : i + 1}${u}`).join(", "),
                src: o({
                    config: e,
                    src: t,
                    quality: s,
                    width: l[c]
                })
            }
        }({
            config: M,
            src: e,
            unoptimized: r,
            width: W,
            quality: H,
            sizes: t,
            loader: B
        })
          , J = G ? "lazy" : h;
        return {
            props: {
                ...I,
                loading: J,
                fetchPriority: T,
                width: W,
                height: U,
                decoding: S,
                className: d,
                style: {
                    ...q,
                    ...K
                },
                sizes: Q.sizes,
                srcSet: Q.srcSet,
                src: _ || Q.src
            },
            meta: {
                unoptimized: r,
                preload: c || u,
                placeholder: x,
                fill: g
            }
        }
    }
}
, 98879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let i = e.r(71645)
      , n = "u" < typeof window
      , s = n ? () => {}
    : i.useLayoutEffect
      , a = n ? () => {}
    : i.useEffect;
    function o(e) {
        let {headManager: t, reduceComponentsToState: r} = e;
        function o() {
            if (t && t.mountedInstances) {
                let e = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t?.mountedInstances?.add(e.children),
        o()),
        s( () => (t?.mountedInstances?.add(e.children),
        () => {
            t?.mountedInstances?.delete(e.children)
        }
        )),
        s( () => (t && (t._pendingUpdate = o),
        () => {
            t && (t._pendingUpdate = o)
        }
        )),
        a( () => (t && t._pendingUpdate && (t._pendingUpdate(),
        t._pendingUpdate = null),
        () => {
            t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null)
        }
        )),
        null
    }
}
, 25633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        default: function() {
            return m
        },
        defaultHead: function() {
            return h
        }
    };
    for (var n in i)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: i[n]
        });
    let s = e.r(55682)
      , a = e.r(90809)
      , o = e.r(43476)
      , l = a._(e.r(71645))
      , u = s._(e.r(98879))
      , c = e.r(42732);
    function h() {
        return [(0,
        o.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0,
        o.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }
    function d(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(33525);
    let f = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
        let t, r, i, n;
        return e.reduce(d, []).reverse().concat(h().reverse()).filter((t = new Set,
        r = new Set,
        i = new Set,
        n = {},
        e => {
            let s = !0
              , a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? s = !1 : t.add(r)
            }
            switch (e.type) {
            case "title":
            case "base":
                r.has(e.type) ? s = !1 : r.add(e.type);
                break;
            case "meta":
                for (let t = 0, r = f.length; t < r; t++) {
                    let r = f[t];
                    if (e.props.hasOwnProperty(r))
                        if ("charSet" === r)
                            i.has(r) ? s = !1 : i.add(r);
                        else {
                            let t = e.props[r]
                              , i = n[r] || new Set;
                            ("name" !== r || !a) && i.has(t) ? s = !1 : (i.add(t),
                            n[r] = i)
                        }
                }
            }
            return s
        }
        )).reverse().map( (e, t) => {
            let r = e.key || t;
            return l.default.cloneElement(e, {
                key: r
            })
        }
        )
    }
    let m = function({children: e}) {
        let t = (0,
        l.useContext)(c.HeadManagerContext);
        return (0,
        o.jsx)(u.default, {
            reduceComponentsToState: p,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 18556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let i = e.r(55682)._(e.r(71645))
      , n = e.r(87690)
      , s = i.default.createContext(n.imageConfigDefault)
}
, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = e.r(55682)._(e.r(71645)).default.createContext(null)
}
, 70965, (e, t, r) => {
    "use strict";
    function i(e, t) {
        let r = e || 75;
        return t?.qualities?.length ? t.qualities.reduce( (e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}
, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let i = e.r(70965)
      , n = e.r(43369);
    function s({config: e, src: t, width: r, quality: s}) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
            throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                value: "E871",
                enumerable: !1,
                configurable: !0
            });
        let a = (0,
        i.findClosestQuality)(s, e)
          , o = (0,
        n.getDeploymentId)();
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${t.startsWith("/") && o ? `&dpl=${o}` : ""}`
    }
    s.__next_img_default = !0;
    let a = s
}
, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let i = e.r(71645);
    function n(e, t) {
        let r = (0,
        i.useRef)(null)
          , n = (0,
        i.useRef)(null);
        return (0,
        i.useCallback)(i => {
            if (null === i) {
                let e = r.current;
                e && (r.current = null,
                e());
                let t = n.current;
                t && (n.current = null,
                t())
            } else
                e && (r.current = s(e, i)),
                t && (n.current = s(t, i))
        }
        , [e, t])
    }
    function s(e, t) {
        if ("function" != typeof e)
            return e.current = t,
            () => {
                e.current = null
            }
            ;
        {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 85437, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return b
        }
    });
    let i = e.r(55682)
      , n = e.r(90809)
      , s = e.r(43476)
      , a = n._(e.r(71645))
      , o = i._(e.r(74080))
      , l = i._(e.r(25633))
      , u = e.r(8927)
      , c = e.r(87690)
      , h = e.r(18556);
    e.r(33525);
    let d = e.r(65856)
      , f = i._(e.r(1948))
      , p = e.r(18581)
      , m = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0
    };
    function g(e, t, r, i, n, s, a) {
        let o = e?.src;
        e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o,
        ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
        ).then( () => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0),
                r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let i = !1
                      , n = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => i,
                        isPropagationStopped: () => n,
                        persist: () => {}
                        ,
                        preventDefault: () => {
                            i = !0,
                            t.preventDefault()
                        }
                        ,
                        stopPropagation: () => {
                            n = !0,
                            t.stopPropagation()
                        }
                    })
                }
                i?.current && i.current(e)
            }
        }
        ))
    }
    function v(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let _ = (0,
    a.forwardRef)( ({src: e, srcSet: t, sizes: r, height: i, width: n, decoding: o, className: l, style: u, fetchPriority: c, placeholder: h, loading: d, unoptimized: f, fill: m, onLoadRef: _, onLoadingCompleteRef: y, setBlurComplete: b, setShowAltText: x, sizesInput: w, onLoad: T, onError: S, ...C}, k) => {
        let O = (0,
        a.useCallback)(e => {
            e && (S && (e.src = e.src),
            e.complete && g(e, h, _, y, b, f, w))
        }
        , [e, h, _, y, b, S, f, w])
          , P = (0,
        p.useMergedRef)(k, O);
        return (0,
        s.jsx)("img", {
            ...C,
            ...v(c),
            loading: d,
            width: n,
            height: i,
            decoding: o,
            "data-nimg": m ? "fill" : "1",
            className: l,
            style: u,
            sizes: r,
            srcSet: t,
            src: e,
            ref: P,
            onLoad: e => {
                g(e.currentTarget, h, _, y, b, f, w)
            }
            ,
            onError: e => {
                x(!0),
                "empty" !== h && b(!0),
                S && S(e)
            }
        })
    }
    );
    function y({isAppRouter: e, imgAttributes: t}) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...v(t.fetchPriority)
        };
        return e && o.default.preload ? (o.default.preload(t.src, r),
        null) : (0,
        s.jsx)(l.default, {
            children: (0,
            s.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let b = (0,
    a.forwardRef)( (e, t) => {
        let r = (0,
        a.useContext)(d.RouterContext)
          , i = (0,
        a.useContext)(h.ImageConfigContext)
          , n = (0,
        a.useMemo)( () => {
            let e = m || i || c.imageConfigDefault
              , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
              , r = e.deviceSizes.sort( (e, t) => e - t)
              , n = e.qualities?.sort( (e, t) => e - t);
            return {
                ...e,
                allSizes: t,
                deviceSizes: r,
                qualities: n,
                localPatterns: "u" < typeof window ? i?.localPatterns : e.localPatterns
            }
        }
        , [i])
          , {onLoad: o, onLoadingComplete: l} = e
          , p = (0,
        a.useRef)(o);
        (0,
        a.useEffect)( () => {
            p.current = o
        }
        , [o]);
        let g = (0,
        a.useRef)(l);
        (0,
        a.useEffect)( () => {
            g.current = l
        }
        , [l]);
        let[v,b] = (0,
        a.useState)(!1)
          , [x,w] = (0,
        a.useState)(!1)
          , {props: T, meta: S} = (0,
        u.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: n,
            blurComplete: v,
            showAltText: x
        });
        return (0,
        s.jsxs)(s.Fragment, {
            children: [(0,
            s.jsx)(_, {
                ...T,
                unoptimized: S.unoptimized,
                placeholder: S.placeholder,
                fill: S.fill,
                onLoadRef: p,
                onLoadingCompleteRef: g,
                setBlurComplete: b,
                setShowAltText: w,
                sizesInput: e.sizes,
                ref: t
            }), S.preload ? (0,
            s.jsx)(y, {
                isAppRouter: !r,
                imgAttributes: T
            }) : null]
        })
    }
    );
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 94909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return u
        }
    };
    for (var n in i)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: i[n]
        });
    let s = e.r(55682)
      , a = e.r(8927)
      , o = e.r(85437)
      , l = s._(e.r(1948));
    function u(e) {
        let {props: t} = (0,
        a.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !0
            }
        });
        for (let[e,r] of Object.entries(t))
            void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let c = o.Image
}
, 57688, (e, t, r) => {
    t.exports = e.r(94909)
}
, 31713, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , i = e.i(70703);
    let n = () => {
        let[e,i] = (0,
        r.useState)(!1)
          , [n,s] = (0,
        r.useState)(!1);
        (0,
        r.useEffect)( () => {
            let e = () => {
                s(window.scrollY > 50)
            }
            ;
            return window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
        }
        , []),
        (0,
        r.useEffect)( () => {
            e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"
        }
        , [e]);
        let a = [{
            name: "Home",
            href: "#"
        }, {
            name: "Teacher",
            href: "#teacher"
        }, {
            name: "Students",
            href: "#students"
        }, {
            name: "Gallery",
            href: "#gallery"
        }];
        return (0,
        t.jsxs)("nav", {
            className: `fixed w-full z-[100] transition-all duration-500 ${n || e ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-100 py-3" : "bg-gradient-to-b from-slate-900/50 to-transparent py-5"}`,
            children: [(0,
            t.jsx)("div", {
                className: "max-w-7xl mx-auto px-6 relative z-[110]",
                children: (0,
                t.jsxs)("div", {
                    className: "flex items-center justify-center relative",
                    children: [(0,
                    t.jsx)("div", {
                        className: "hidden md:flex items-center space-x-2",
                        children: a.map(e => (0,
                        t.jsx)("a", {
                            href: e.href,
                            className: `relative px-5 py-2.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 group overflow-hidden ${n ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"}`,
                            children: (0,
                            t.jsx)("span", {
                                className: "relative z-10 text-xs uppercase tracking-[0.15em]",
                                children: e.name
                            })
                        }, e.name))
                    }), (0,
                    t.jsx)("div", {
                        className: "md:hidden absolute right-0 flex items-center",
                        children: (0,
                        t.jsx)("button", {
                            onClick: () => i(!e),
                            className: `p-3 rounded-2xl transition-all duration-300 z-[120] ${n || e ? "text-slate-900 hover:bg-blue-50" : "text-white hover:bg-white/10 backdrop-blur-sm"}`,
                            children: (0,
                            t.jsxs)("div", {
                                className: "w-6 h-5 relative flex flex-col justify-between",
                                children: [(0,
                                t.jsx)("span", {
                                    className: `h-0.5 w-full bg-current transform transition-all duration-300 rounded-full ${e ? "rotate-45 translate-y-2.5" : ""}`
                                }), (0,
                                t.jsx)("span", {
                                    className: `h-0.5 w-full bg-current transition-all duration-300 rounded-full ${e ? "opacity-0" : ""}`
                                }), (0,
                                t.jsx)("span", {
                                    className: `h-0.5 w-full bg-current transform transition-all duration-300 rounded-full ${e ? "-rotate-45 -translate-y-2" : ""}`
                                })]
                            })
                        })
                    })]
                })
            }), (0,
            t.jsx)("div", {
                className: `md:hidden fixed inset-0 w-full h-screen bg-white transition-all duration-500 ease-in-out transform ${e ? "translate-y-0" : "-translate-y-full"} z-[105]`,
                children: (0,
                t.jsxs)("div", {
                    className: "flex flex-col items-center justify-center h-full space-y-8 px-6",
                    children: [a.map( (r, n) => (0,
                    t.jsx)("a", {
                        href: r.href,
                        onClick: () => i(!1),
                        className: "block text-4xl font-black text-slate-900 hover:text-blue-600 transition-all duration-300 tracking-tighter uppercase",
                        style: {
                            opacity: +!!e,
                            transform: e ? "translateY(0)" : "translateY(20px)",
                            transition: `all 0.5s ease-out ${100 * n}ms`
                        },
                        children: r.name
                    }, r.name)), (0,
                    t.jsx)("div", {
                        className: "mt-12 text-center",
                        children: (0,
                        t.jsx)("p", {
                            className: "text-slate-400 text-xs tracking-[0.3em] uppercase font-bold",
                            children: "Class of 2026"
                        })
                    })]
                })
            })]
        })
    }
    ;
    var s = e.i(37902)
      , a = e.i(57688)
      , o = e.i(46932);
    let l = ({sentence: e="True Focus", separator: i=" ", manualMode: n=!1, blurAmount: s=5, borderColor: a="green", glowColor: l="rgba(0, 255, 0, 0.6)", animationDuration: u=.5, pauseBetweenAnimations: c=1}) => {
        let h = e.split(i)
          , [d,f] = (0,
        r.useState)(0)
          , [p,m] = (0,
        r.useState)(null)
          , g = (0,
        r.useRef)(null)
          , v = (0,
        r.useRef)([])
          , [_,y] = (0,
        r.useState)({
            x: 0,
            y: 0,
            width: 0,
            height: 0
        });
        (0,
        r.useEffect)( () => {
            if (!n) {
                let e = setInterval( () => {
                    f(e => (e + 1) % h.length)
                }
                , (u + c) * 1e3);
                return () => clearInterval(e)
            }
        }
        , [n, u, c, h.length]),
        (0,
        r.useEffect)( () => {
            if (null === d || -1 === d || !v.current[d] || !g.current)
                return;
            let e = g.current.getBoundingClientRect()
              , t = v.current[d].getBoundingClientRect();
            y({
                x: t.left - e.left,
                y: t.top - e.top,
                width: t.width,
                height: t.height
            })
        }
        , [d, h.length]);
        let b = () => {
            n && f(p ?? 0)
        }
        ;
        return (0,
        t.jsxs)("div", {
            className: "focus-container",
            ref: g,
            children: [h.map( (e, r) => {
                let i = r === d;
                return (0,
                t.jsx)("span", {
                    ref: e => {
                        e && (v.current[r] = e)
                    }
                    ,
                    className: `focus-word ${n ? "manual" : ""} ${i && !n ? "active" : ""}`,
                    style: {
                        filter: i ? "blur(0px)" : `blur(${s}px)`,
                        transition: `filter ${u}s ease`,
                        "--border-color": a,
                        "--glow-color": l
                    },
                    onMouseEnter: () => {
                        n && (m(r),
                        f(r))
                    }
                    ,
                    onMouseLeave: b,
                    children: e
                }, r)
            }
            ), (0,
            t.jsxs)(o.motion.div, {
                className: "focus-frame",
                animate: {
                    x: _.x,
                    y: _.y,
                    width: _.width,
                    height: _.height,
                    opacity: +(d >= 0)
                },
                transition: {
                    duration: u
                },
                style: {
                    "--border-color": a,
                    "--glow-color": l
                },
                children: [(0,
                t.jsx)("span", {
                    className: "corner top-left"
                }), (0,
                t.jsx)("span", {
                    className: "corner top-right"
                }), (0,
                t.jsx)("span", {
                    className: "corner bottom-left"
                }), (0,
                t.jsx)("span", {
                    className: "corner bottom-right"
                })]
            })]
        })
    }
    ;
    function u(e) {
        if (void 0 === e)
            throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function c(e, t) {
        e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e.__proto__ = t
    }
    var h, d, f, p, m, g, v, _, y, b, x, w, T, S, C, k, O, P, z, I, R, j, M, E, A, N, D = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, L = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, X = 2 * Math.PI, F = X / 4, B = 0, $ = Math.sqrt, Y = Math.cos, W = Math.sin, U = function(e) {
        return "string" == typeof e
    }, G = function(e) {
        return "function" == typeof e
    }, H = function(e) {
        return "number" == typeof e
    }, q = function(e) {
        return void 0 === e
    }, Z = function(e) {
        return "object" == typeof e
    }, V = function(e) {
        return !1 !== e
    }, K = function() {
        return "u" > typeof window
    }, Q = function(e) {
        return G(e) || U(e)
    }, J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , ee = Array.isArray, et = /random\([^)]+\)/g, er = /,\s*/g, ei = /(?:-?\.?\d|\.)+/gi, en = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, es = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ea = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, eo = /[+-]=-?[.\d]+/, el = /[^,'"\[\]\s]+/gi, eu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ec = {}, eh = {}, ed = function(e) {
        return (eh = e$(e, ec)) && rE
    }, ef = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }, ep = function(e, t) {
        return !t && console.warn(e)
    }, em = function(e, t) {
        return e && (ec[e] = t) && eh && (eh[e] = t) || ec
    }, eg = function() {
        return 0
    }, ev = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, e_ = {
        suppressEvents: !0,
        kill: !1
    }, ey = {
        suppressEvents: !0
    }, eb = {}, ex = [], ew = {}, eT = {}, eS = {}, eC = 30, ek = [], eO = "", eP = function(e) {
        var t, r, i = e[0];
        if (Z(i) || G(i) || (e = [e]),
        !(t = (i._gsap || {}).harness)) {
            for (r = ek.length; r-- && !ek[r].targetTest(i); )
                ;
            t = ek[r]
        }
        for (r = e.length; r--; )
            e[r] && (e[r]._gsap || (e[r]._gsap = new tV(e[r],t))) || e.splice(r, 1);
        return e
    }, ez = function(e) {
        return e._gsap || eP(td(e))[0]._gsap
    }, eI = function(e, t, r) {
        return (r = e[t]) && G(r) ? e[t]() : q(r) && e.getAttribute && e.getAttribute(t) || r
    }, eR = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    }, ej = function(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }, eM = function(e) {
        return Math.round(1e7 * e) / 1e7 || 0
    }, eE = function(e, t) {
        var r = t.charAt(0)
          , i = parseFloat(t.substr(2));
        return e = parseFloat(e),
        "+" === r ? e + i : "-" === r ? e - i : "*" === r ? e * i : e / i
    }, eA = function(e, t) {
        for (var r = t.length, i = 0; 0 > e.indexOf(t[i]) && ++i < r; )
            ;
        return i < r
    }, eN = function() {
        var e, t, r = ex.length, i = ex.slice(0);
        for (e = 0,
        ew = {},
        ex.length = 0; e < r; e++)
            (t = i[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
    }, eD = function(e) {
        return !!(e._initted || e._startAt || e.add)
    }, eL = function(e, t, r, i) {
        ex.length && !O && eN(),
        e.render(t, r, i || !!(O && t < 0 && eD(e))),
        ex.length && !O && eN()
    }, eX = function(e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(el).length < 2 ? t : U(e) ? e.trim() : e
    }, eF = function(e) {
        return e
    }, eB = function(e, t) {
        for (var r in t)
            r in e || (e[r] = t[r]);
        return e
    }, e$ = function(e, t) {
        for (var r in t)
            e[r] = t[r];
        return e
    }, eY = function e(t, r) {
        for (var i in r)
            "__proto__" !== i && "constructor" !== i && "prototype" !== i && (t[i] = Z(r[i]) ? e(t[i] || (t[i] = {}), r[i]) : r[i]);
        return t
    }, eW = function(e, t) {
        var r, i = {};
        for (r in e)
            r in t || (i[r] = e[r]);
        return i
    }, eU = function(e) {
        var t, r = e.parent || z, i = e.keyframes ? (t = ee(e.keyframes),
        function(e, r) {
            for (var i in r)
                i in e || "duration" === i && t || "ease" === i || (e[i] = r[i])
        }
        ) : eB;
        if (V(e.inherit))
            for (; r; )
                i(e, r.vars.defaults),
                r = r.parent || r._dp;
        return e
    }, eG = function(e, t) {
        for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; )
            ;
        return r < 0
    }, eH = function(e, t, r, i, n) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var s, a = e[i];
        if (n)
            for (s = t[n]; a && a[n] > s; )
                a = a._prev;
        return a ? (t._next = a._next,
        a._next = t) : (t._next = e[r],
        e[r] = t),
        t._next ? t._next._prev = t : e[i] = t,
        t._prev = a,
        t.parent = t._dp = e,
        t
    }, eq = function(e, t, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = t._prev
          , s = t._next;
        n ? n._next = s : e[r] === t && (e[r] = s),
        s ? s._prev = n : e[i] === t && (e[i] = n),
        t._next = t._prev = t.parent = null
    }, eZ = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
        e._act = 0
    }, eV = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var r = e; r; )
                r._dirty = 1,
                r = r.parent;
        return e
    }, eK = function(e) {
        for (var t = e.parent; t && t.parent; )
            t._dirty = 1,
            t.totalDuration(),
            t = t.parent;
        return e
    }, eQ = function(e, t, r, i) {
        return e._startAt && (O ? e._startAt.revert(e_) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
    }, eJ = function(e) {
        return e._repeat ? e0(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, e0 = function(e, t) {
        var r = Math.floor(e = eM(e / t));
        return e && r === e ? r - 1 : r
    }, e1 = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }, e2 = function(e) {
        return e._end = eM(e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0))
    }, e5 = function(e, t) {
        var r = e._dp;
        return r && r.smoothChildTiming && e._ts && (e._start = eM(r._time - (e._ts > 0 ? t / e._ts : -(((e._dirty ? e.totalDuration() : e._tDur) - t) / e._ts))),
        e2(e),
        r._dirty || eV(r, e)),
        e
    }, e3 = function(e, t) {
        var r;
        if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = e1(e.rawTime(), t),
        (!t._dur || tl(0, t.totalDuration(), r) - t._tTime > 1e-8) && t.render(r, !0)),
        eV(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (r = e; r._dp; )
                    r.rawTime() >= 0 && r.totalTime(r._tTime),
                    r = r._dp;
            e._zTime = -1e-8
        }
    }, e6 = function(e, t, r, i) {
        return t.parent && eZ(t),
        t._start = eM((H(r) ? r : r || e !== z ? ts(e, r, t) : e._time) + t._delay),
        t._end = eM(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
        eH(e, t, "_first", "_last", e._sort ? "_start" : 0),
        e7(t) || (e._recent = t),
        i || e3(e, t),
        e._ts < 0 && e5(e, e._tTime),
        e
    }, e8 = function(e, t) {
        return (ec.ScrollTrigger || ef("scrollTrigger", t)) && ec.ScrollTrigger.create(t, e)
    }, e4 = function(e, t, r, i, n) {
        return (t7(e, t, n),
        e._initted) ? !r && e._pt && !O && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && E !== tA.frame ? (ex.push(e),
        e._lazy = [n, i],
        1) : void 0 : 1
    }, e9 = function e(t) {
        var r = t.parent;
        return r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || e(r))
    }, e7 = function(e) {
        var t = e.data;
        return "isFromStart" === t || "isStart" === t
    }, te = function(e, t, r, i) {
        var n, s, a, o = e.ratio, l = t < 0 || !t && (!e._start && e9(e) && !(!e._initted && e7(e)) || (e._ts < 0 || e._dp._ts < 0) && !e7(e)) ? 0 : 1, u = e._rDelay, c = 0;
        if (u && e._repeat && (s = e0(c = tl(0, e._tDur, t), u),
        e._yoyo && 1 & s && (l = 1 - l),
        s !== e0(e._tTime, u) && (o = 1 - l,
        e.vars.repeatRefresh && e._initted && e.invalidate())),
        l !== o || O || i || 1e-8 === e._zTime || !t && e._zTime) {
            if (!e._initted && e4(e, t, i, r, c))
                return;
            for (a = e._zTime,
            e._zTime = t || 1e-8 * !!r,
            r || (r = t && !a),
            e.ratio = l,
            e._from && (l = 1 - l),
            e._time = 0,
            e._tTime = c,
            n = e._pt; n; )
                n.r(l, n.d),
                n = n._next;
            t < 0 && eQ(e, t, r, !0),
            e._onUpdate && !r && tT(e, "onUpdate"),
            c && e._repeat && !r && e.parent && tT(e, "onRepeat"),
            (t >= e._tDur || t < 0) && e.ratio === l && (l && eZ(e, 1),
            r || O || (tT(e, l ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()))
        } else
            e._zTime || (e._zTime = t)
    }, tt = function(e, t, r) {
        var i;
        if (r > t)
            for (i = e._first; i && i._start <= r; ) {
                if ("isPause" === i.data && i._start > t)
                    return i;
                i = i._next
            }
        else
            for (i = e._last; i && i._start >= r; ) {
                if ("isPause" === i.data && i._start < t)
                    return i;
                i = i._prev
            }
    }, tr = function(e, t, r, i) {
        var n = e._repeat
          , s = eM(t) || 0
          , a = e._tTime / e._tDur;
        return a && !i && (e._time *= s / e._dur),
        e._dur = s,
        e._tDur = n ? n < 0 ? 1e10 : eM(s * (n + 1) + e._rDelay * n) : s,
        a > 0 && !i && e5(e, e._tTime = e._tDur * a),
        e.parent && e2(e),
        r || eV(e.parent, e),
        e
    }, ti = function(e) {
        return e instanceof tQ ? eV(e) : tr(e, e._dur)
    }, tn = {
        _start: 0,
        endTime: eg,
        totalDuration: eg
    }, ts = function e(t, r, i) {
        var n, s, a, o = t.labels, l = t._recent || tn, u = t.duration() >= 1e8 ? l.endTime(!1) : t._dur;
        return U(r) && (isNaN(r) || r in o) ? (s = r.charAt(0),
        a = "%" === r.substr(-1),
        n = r.indexOf("="),
        "<" === s || ">" === s) ? (n >= 0 && (r = r.replace(/=/, "")),
        ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? l : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = u),
        o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)),
        a && i && (s = s / 100 * (ee(i) ? i[0] : i).totalDuration()),
        n > 1 ? e(t, r.substr(0, n - 1), i) + s : u + s) : null == r ? u : +r
    }, ta = function(e, t, r) {
        var i, n, s = H(t[1]), a = (s ? 2 : 1) + (e < 2 ? 0 : 1), o = t[a];
        if (s && (o.duration = t[1]),
        o.parent = r,
        e) {
            for (i = o,
            n = r; n && !("immediateRender"in i); )
                i = n.vars.defaults || {},
                n = V(n.vars.inherit) && n.parent;
            o.immediateRender = V(i.immediateRender),
            e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
        }
        return new ra(t[0],o,t[a + 1])
    }, to = function(e, t) {
        return e || 0 === e ? t(e) : t
    }, tl = function(e, t, r) {
        return r < e ? e : r > t ? t : r
    }, tu = function(e, t) {
        return U(e) && (t = eu.exec(e)) ? t[1] : ""
    }, tc = [].slice, th = function(e, t) {
        return e && Z(e) && "length"in e && (!t && !e.length || e.length - 1 in e && Z(e[0])) && !e.nodeType && e !== I
    }, td = function(e, t, r) {
        var i;
        return P && !t && P.selector ? P.selector(e) : U(e) && !r && (R || !tN()) ? tc.call((t || j).querySelectorAll(e), 0) : ee(e) ? (void 0 === i && (i = []),
        e.forEach(function(e) {
            var t;
            return U(e) && !r || th(e, 1) ? (t = i).push.apply(t, td(e)) : i.push(e)
        }) || i) : th(e) ? tc.call(e, 0) : e ? [e] : []
    }, tf = function(e) {
        return e = td(e)[0] || ep("Invalid scope") || {},
        function(t) {
            var r = e.current || e.nativeElement || e;
            return td(t, r.querySelectorAll ? r : r === e ? ep("Invalid scope") || j.createElement("div") : e)
        }
    }, tp = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    }, tm = function(e) {
        if (G(e))
            return e;
        var t = Z(e) ? e : {
            each: e
        }
          , r = tU(t.ease)
          , i = t.from || 0
          , n = parseFloat(t.base) || 0
          , s = {}
          , a = i > 0 && i < 1
          , o = isNaN(i) || a
          , l = t.axis
          , u = i
          , c = i;
        return U(i) ? u = c = ({
            center: .5,
            edges: .5,
            end: 1
        })[i] || 0 : !a && o && (u = i[0],
        c = i[1]),
        function(e, a, h) {
            var d, f, p, m, g, v, _, y, b, x = (h || t).length, w = s[x];
            if (!w) {
                if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, 1e8])[1])) {
                    for (_ = -1e8; _ < (_ = h[b++].getBoundingClientRect().left) && b < x; )
                        ;
                    b < x && b--
                }
                for (v = 0,
                w = s[x] = [],
                d = o ? Math.min(b, x) * u - .5 : i % b,
                f = 1e8 === b ? 0 : o ? x * c / b - .5 : i / b | 0,
                _ = 0,
                y = 1e8; v < x; v++)
                    p = v % b - d,
                    m = f - (v / b | 0),
                    w[v] = g = l ? Math.abs("y" === l ? m : p) : $(p * p + m * m),
                    g > _ && (_ = g),
                    g < y && (y = g);
                "random" === i && tp(w),
                w.max = _ - y,
                w.min = y,
                w.v = x = (parseFloat(t.amount) || parseFloat(t.each) * (b > x ? x - 1 : l ? "y" === l ? x / b : b : Math.max(b, x / b)) || 0) * ("edges" === i ? -1 : 1),
                w.b = x < 0 ? n - x : n,
                w.u = tu(t.amount || t.each) || 0,
                r = r && x < 0 ? tY(r) : r
            }
            return x = (w[e] - w.min) / w.max || 0,
            eM(w.b + (r ? r(x) : x) * w.v) + w.u
        }
    }, tg = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(r) {
            var i = eM(Math.round(parseFloat(r) / e) * e * t);
            return (i - i % 1) / t + (H(r) ? 0 : tu(r))
        }
    }, tv = function(e, t) {
        var r, i, n = ee(e);
        return !n && Z(e) && (r = n = e.radius || 1e8,
        e.values ? (i = !H((e = td(e.values))[0])) && (r *= r) : e = tg(e.increment)),
        to(t, n ? G(e) ? function(t) {
            return Math.abs((i = e(t)) - t) <= r ? i : t
        }
        : function(t) {
            for (var n, s, a = parseFloat(i ? t.x : t), o = parseFloat(i ? t.y : 0), l = 1e8, u = 0, c = e.length; c--; )
                (n = i ? (n = e[c].x - a) * n + (s = e[c].y - o) * s : Math.abs(e[c] - a)) < l && (l = n,
                u = c);
            return u = !r || l <= r ? e[u] : t,
            i || u === t || H(t) ? u : u + tu(t)
        }
        : tg(e))
    }, t_ = function(e, t, r, i) {
        return to(ee(e) ? !t : !0 === r ? (r = 0,
        !1) : !i, function() {
            return ee(e) ? e[~~(Math.random() * e.length)] : (i = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + .99 * r)) / r) * r * i) / i
        })
    }, ty = function(e, t, r) {
        return to(r, function(r) {
            return e[~~t(r)]
        })
    }, tb = function(e) {
        return e.replace(et, function(e) {
            var t = e.indexOf("[") + 1
              , r = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(er);
            return t_(t ? r : +r[0], t ? 0 : +r[1], +r[2] || 1e-5)
        })
    }, tx = function(e, t, r, i, n) {
        var s = t - e
          , a = i - r;
        return to(n, function(t) {
            return r + ((t - e) / s * a || 0)
        })
    }, tw = function(e, t, r) {
        var i, n, s, a = e.labels, o = 1e8;
        for (i in a)
            (n = a[i] - t) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i,
            o = n);
        return s
    }, tT = function(e, t, r) {
        var i, n, s, a = e.vars, o = a[t], l = P, u = e._ctx;
        if (o)
            return i = a[t + "Params"],
            n = a.callbackScope || e,
            r && ex.length && eN(),
            u && (P = u),
            s = i ? o.apply(n, i) : o.call(n),
            P = l,
            s
    }, tS = function(e) {
        return eZ(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!O),
        1 > e.progress() && tT(e, "onInterrupt"),
        e
    }, tC = [], tk = function(e) {
        if (e)
            if (e = !e.name && e.default || e,
            K() || e.headless) {
                var t = e.name
                  , r = G(e)
                  , i = t && !r && e.init ? function() {
                    this._props = []
                }
                : e
                  , n = {
                    init: eg,
                    render: rm,
                    add: t8,
                    kill: rv,
                    modifier: rg,
                    rawVars: 0
                }
                  , s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: rh,
                    aliases: {},
                    register: 0
                };
                if (tN(),
                e !== i) {
                    if (eT[t])
                        return;
                    eB(i, eB(eW(e, n), s)),
                    e$(i.prototype, e$(n, eW(e, s))),
                    eT[i.prop = t] = i,
                    e.targetTest && (ek.push(i),
                    eb[t] = 1),
                    t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                }
                em(t, i),
                e.register && e.register(rE, i, rb)
            } else
                tC.push(e)
    }, tO = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
    }, tP = function(e, t, r) {
        return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (r - t) * e * 6 : e < .5 ? r : 3 * e < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * 255 + .5 | 0
    }, tz = function(e, t, r) {
        var i, n, s, a, o, l, u, c, h, d, f = e ? H(e) ? [e >> 16, e >> 8 & 255, 255 & e] : 0 : tO.black;
        if (!f) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)),
            tO[e])
                f = tO[e];
            else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (i = e.charAt(1),
                e = "#" + i + i + (n = e.charAt(2)) + n + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
                9 === e.length)
                    return [(f = parseInt(e.substr(1, 6), 16)) >> 16, f >> 8 & 255, 255 & f, parseInt(e.substr(7), 16) / 255];
                f = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e]
            } else if ("hsl" === e.substr(0, 3))
                if (f = d = e.match(ei),
                t) {
                    if (~e.indexOf("="))
                        return f = e.match(en),
                        r && f.length < 4 && (f[3] = 1),
                        f
                } else
                    a = f[0] % 360 / 360,
                    o = f[1] / 100,
                    n = (l = f[2] / 100) <= .5 ? l * (o + 1) : l + o - l * o,
                    i = 2 * l - n,
                    f.length > 3 && (f[3] *= 1),
                    f[0] = tP(a + 1 / 3, i, n),
                    f[1] = tP(a, i, n),
                    f[2] = tP(a - 1 / 3, i, n);
            else
                f = e.match(ei) || tO.transparent;
            f = f.map(Number)
        }
        return t && !d && (i = f[0] / 255,
        l = ((u = Math.max(i, n = f[1] / 255, s = f[2] / 255)) + (c = Math.min(i, n, s))) / 2,
        u === c ? a = o = 0 : (h = u - c,
        o = l > .5 ? h / (2 - u - c) : h / (u + c),
        a = (u === i ? (n - s) / h + 6 * (n < s) : u === n ? (s - i) / h + 2 : (i - n) / h + 4) * 60),
        f[0] = ~~(a + .5),
        f[1] = ~~(100 * o + .5),
        f[2] = ~~(100 * l + .5)),
        r && f.length < 4 && (f[3] = 1),
        f
    }, tI = function(e) {
        var t = []
          , r = []
          , i = -1;
        return e.split(tj).forEach(function(e) {
            var n = e.match(es) || [];
            t.push.apply(t, n),
            r.push(i += n.length + 1)
        }),
        t.c = r,
        t
    }, tR = function(e, t, r) {
        var i, n, s, a, o = "", l = (e + o).match(tj), u = t ? "hsla(" : "rgba(", c = 0;
        if (!l)
            return e;
        if (l = l.map(function(e) {
            return (e = tz(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
        }),
        r && (s = tI(e),
        (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = e.replace(tj, "1").split(es)).length - 1; c < a; c++)
                o += n[c] + (~i.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (s.length ? s : l.length ? l : r).shift());
        if (!n)
            for (a = (n = e.split(tj)).length - 1; c < a; c++)
                o += n[c] + l[c];
        return o + n[a]
    }, tj = function() {
        var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (e in tO)
            t += "|" + e + "\\b";
        return RegExp(t + ")", "gi")
    }(), tM = /hsl[a]?\(/, tE = function(e) {
        var t, r = e.join(" ");
        if (tj.lastIndex = 0,
        tj.test(r))
            return t = tM.test(r),
            e[1] = tR(e[1], t),
            e[0] = tR(e[0], t, tI(e[1])),
            !0
    }, tA = (v = Date.now,
    _ = 500,
    y = 33,
    x = b = v(),
    w = 1e3 / 240,
    T = 1e3 / 240,
    S = [],
    C = function e(t) {
        var r, i, n, s, a = v() - x, o = !0 === t;
        if ((a > _ || a < 0) && (b += a - y),
        x += a,
        ((r = (n = x - b) - T) > 0 || o) && (s = ++p.frame,
        m = n - 1e3 * p.time,
        p.time = n /= 1e3,
        T += r + (r >= w ? 4 : w - r),
        i = 1),
        o || (h = d(e)),
        i)
            for (g = 0; g < S.length; g++)
                S[g](n, m, s, t)
    }
    ,
    p = {
        time: 0,
        frame: 0,
        tick: function() {
            C(!0)
        },
        deltaRatio: function(e) {
            return m / (1e3 / (e || 60))
        },
        wake: function() {
            M && (!R && K() && (j = (I = R = window).document || {},
            ec.gsap = rE,
            (I.gsapVersions || (I.gsapVersions = [])).push(rE.version),
            ed(eh || I.GreenSockGlobals || !I.gsap && I || {}),
            tC.forEach(tk)),
            f = "u" > typeof requestAnimationFrame && requestAnimationFrame,
            h && p.sleep(),
            d = f || function(e) {
                return setTimeout(e, T - 1e3 * p.time + 1 | 0)
            }
            ,
            N = 1,
            C(2))
        },
        sleep: function() {
            (f ? cancelAnimationFrame : clearTimeout)(h),
            N = 0,
            d = eg
        },
        lagSmoothing: function(e, t) {
            y = Math.min(t || 33, _ = e || 1 / 0)
        },
        fps: function(e) {
            w = 1e3 / (e || 240),
            T = 1e3 * p.time + w
        },
        add: function(e, t, r) {
            var i = t ? function(t, r, n, s) {
                e(t, r, n, s),
                p.remove(i)
            }
            : e;
            return p.remove(e),
            S[r ? "unshift" : "push"](i),
            tN(),
            i
        },
        remove: function(e, t) {
            ~(t = S.indexOf(e)) && S.splice(t, 1) && g >= t && g--
        },
        _listeners: S
    }), tN = function() {
        return !N && tA.wake()
    }, tD = {}, tL = /^[\d.\-M][\d.\-,\s]/, tX = /["']/g, tF = function(e) {
        for (var t, r, i, n = {}, s = e.substr(1, e.length - 3).split(":"), a = s[0], o = 1, l = s.length; o < l; o++)
            r = s[o],
            t = o !== l - 1 ? r.lastIndexOf(",") : r.length,
            i = r.substr(0, t),
            n[a] = isNaN(i) ? i.replace(tX, "").trim() : +i,
            a = r.substr(t + 1).trim();
        return n
    }, tB = function(e) {
        var t = e.indexOf("(") + 1
          , r = e.indexOf(")")
          , i = e.indexOf("(", t);
        return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r)
    }, t$ = function(e) {
        var t = (e + "").split("(")
          , r = tD[t[0]];
        return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [tF(t[1])] : tB(e).split(",").map(eX)) : tD._CE && tL.test(e) ? tD._CE("", e) : r
    }, tY = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, tW = function e(t, r) {
        for (var i, n = t._first; n; )
            n instanceof tQ ? e(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? e(n.timeline, r) : (i = n._ease,
            n._ease = n._yEase,
            n._yEase = i,
            n._yoyo = r)),
            n = n._next
    }, tU = function(e, t) {
        return e && (G(e) ? e : tD[e] || t$(e)) || t
    }, tG = function(e, t, r, i) {
        void 0 === r && (r = function(e) {
            return 1 - t(1 - e)
        }
        ),
        void 0 === i && (i = function(e) {
            return e < .5 ? t(2 * e) / 2 : 1 - t((1 - e) * 2) / 2
        }
        );
        var n, s = {
            easeIn: t,
            easeOut: r,
            easeInOut: i
        };
        return eR(e, function(e) {
            for (var t in tD[e] = ec[e] = s,
            tD[n = e.toLowerCase()] = r,
            s)
                tD[n + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = tD[e + "." + t] = s[t]
        }),
        s
    }, tH = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    }, tq = function e(t, r, i) {
        var n = r >= 1 ? r : 1
          , s = (i || (t ? .3 : .45)) / (r < 1 ? r : 1)
          , a = s / X * (Math.asin(1 / n) || 0)
          , o = function(e) {
            return 1 === e ? 1 : n * Math.pow(2, -10 * e) * W((e - a) * s) + 1
        }
          , l = "out" === t ? o : "in" === t ? function(e) {
            return 1 - o(1 - e)
        }
        : tH(o);
        return s = X / s,
        l.config = function(r, i) {
            return e(t, r, i)
        }
        ,
        l
    }, tZ = function e(t, r) {
        void 0 === r && (r = 1.70158);
        var i = function(e) {
            return e ? --e * e * ((r + 1) * e + r) + 1 : 0
        }
          , n = "out" === t ? i : "in" === t ? function(e) {
            return 1 - i(1 - e)
        }
        : tH(i);
        return n.config = function(r) {
            return e(t, r)
        }
        ,
        n
    };
    eR("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var r = t < 5 ? t + 1 : t;
        tG(e + ",Power" + (r - 1), t ? function(e) {
            return Math.pow(e, r)
        }
        : function(e) {
            return e
        }
        , function(e) {
            return 1 - Math.pow(1 - e, r)
        }, function(e) {
            return e < .5 ? Math.pow(2 * e, r) / 2 : 1 - Math.pow((1 - e) * 2, r) / 2
        })
    }),
    tD.Linear.easeNone = tD.none = tD.Linear.easeIn,
    tG("Elastic", tq("in"), tq("out"), tq()),
    t0 = 2 * (tJ = 1 / 2.75),
    t1 = 2.5 * tJ,
    tG("Bounce", function(e) {
        return 1 - t2(1 - e)
    }, t2 = function(e) {
        return e < tJ ? 7.5625 * e * e : e < t0 ? 7.5625 * Math.pow(e - 1.5 / 2.75, 2) + .75 : e < t1 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * Math.pow(e - 2.625 / 2.75, 2) + .984375
    }
    ),
    tG("Expo", function(e) {
        return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e)
    }),
    tG("Circ", function(e) {
        return -($(1 - e * e) - 1)
    }),
    tG("Sine", function(e) {
        return 1 === e ? 1 : -Y(e * F) + 1
    }),
    tG("Back", tZ("in"), tZ("out"), tZ()),
    tD.SteppedEase = tD.steps = ec.SteppedEase = {
        config: function(e, t) {
            void 0 === e && (e = 1);
            var r = 1 / e
              , i = e + +!t
              , n = +!!t
              , s = .99999999;
            return function(e) {
                return ((i * tl(0, s, e) | 0) + n) * r
            }
        }
    },
    L.ease = tD["quad.out"],
    eR("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return eO += e + "," + e + "Params,"
    });
    var tV = function(e, t) {
        this.id = B++,
        e._gsap = this,
        this.target = e,
        this.harness = t,
        this.get = t ? t.get : eI,
        this.set = t ? t.getSetter : rh
    }
      , tK = function() {
        function e(e) {
            this.vars = e,
            this._delay = +e.delay || 0,
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
            this._yoyo = !!e.yoyo || !!e.yoyoEase),
            this._ts = 1,
            tr(this, +e.duration, 1, 1),
            this.data = e.data,
            P && (this._ctx = P,
            P.data.push(this)),
            N || tA.wake()
        }
        var t = e.prototype;
        return t.delay = function(e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay),
            this._delay = e,
            this) : this._delay
        }
        ,
        t.duration = function(e) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }
        ,
        t.totalDuration = function(e) {
            return arguments.length ? (this._dirty = 0,
            tr(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        t.totalTime = function(e, t) {
            if (tN(),
            !arguments.length)
                return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (e5(this, e),
                !r._dp || r.parent || e3(r, this); r && r.parent; )
                    r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : -((r.totalDuration() - r._tTime) / r._ts)) && r.totalTime(r._tTime, !0),
                    r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && e6(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && 1e-8 === Math.abs(this._zTime) || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e),
            eL(this, e, t)),
            this
        }
        ,
        t.time = function(e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + eJ(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
        }
        ,
        t.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
        }
        ,
        t.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - e : e) + eJ(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0)
        }
        ,
        t.iteration = function(e, t) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * r, t) : this._repeat ? e0(this._tTime, r) + 1 : 1
        }
        ,
        t.timeScale = function(e, t) {
            if (!arguments.length)
                return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e)
                return this;
            var r = this.parent && this._ts ? e1(this.parent._time, this) : this._tTime;
            return this._rts = +e || 0,
            this._ts = this._ps || -1e-8 === e ? 0 : this._rts,
            this.totalTime(tl(-Math.abs(this._delay), this.totalDuration(), r), !1 !== t),
            e2(this),
            eK(this)
        }
        ,
        t.paused = function(e) {
            return arguments.length ? (this._ps !== e && (this._ps = e,
            e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (tN(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))),
            this) : this._ps
        }
        ,
        t.startTime = function(e) {
            if (arguments.length) {
                this._start = eM(e);
                var t = this.parent || this._dp;
                return t && (t._sort || !this.parent) && e6(t, this, this._start - this._delay),
                this
            }
            return this._start
        }
        ,
        t.endTime = function(e) {
            return this._start + (V(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        t.rawTime = function(e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? e1(t.rawTime(e), this) : this._tTime : this._tTime
        }
        ,
        t.revert = function(e) {
            void 0 === e && (e = ey);
            var t = O;
            return O = e,
            eD(this) && (this.timeline && this.timeline.revert(e),
            this.totalTime(-.01, e.suppressEvents)),
            "nested" !== this.data && !1 !== e.kill && this.kill(),
            O = t,
            this
        }
        ,
        t.globalTime = function(e) {
            for (var t = this, r = arguments.length ? e : t.rawTime(); t; )
                r = t._start + r / (Math.abs(t._ts) || 1),
                t = t._dp;
            return !this.parent && this._sat ? this._sat.globalTime(e) : r
        }
        ,
        t.repeat = function(e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e,
            ti(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        ,
        t.repeatDelay = function(e) {
            if (arguments.length) {
                var t = this._time;
                return this._rDelay = e,
                ti(this),
                t ? this.time(t) : this
            }
            return this._rDelay
        }
        ,
        t.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e,
            this) : this._yoyo
        }
        ,
        t.seek = function(e, t) {
            return this.totalTime(ts(this, e), V(t))
        }
        ,
        t.restart = function(e, t) {
            return this.play().totalTime(e ? -this._delay : 0, V(t)),
            this._dur || (this._zTime = -1e-8),
            this
        }
        ,
        t.play = function(e, t) {
            return null != e && this.seek(e, t),
            this.reversed(!1).paused(!1)
        }
        ,
        t.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
        }
        ,
        t.pause = function(e, t) {
            return null != e && this.seek(e, t),
            this.paused(!0)
        }
        ,
        t.resume = function() {
            return this.paused(!1)
        }
        ,
        t.reversed = function(e) {
            return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)),
            this) : this._rts < 0
        }
        ,
        t.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -1e-8,
            this
        }
        ,
        t.isActive = function() {
            var e, t = this.parent || this._dp, r = this._start;
            return !!(!t || this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= r && e < this.endTime(!0) - 1e-8)
        }
        ,
        t.eventCallback = function(e, t, r) {
            var i = this.vars;
            return arguments.length > 1 ? (t ? (i[e] = t,
            r && (i[e + "Params"] = r),
            "onUpdate" === e && (this._onUpdate = t)) : delete i[e],
            this) : i[e]
        }
        ,
        t.then = function(e) {
            var t = this
              , r = t._prom;
            return new Promise(function(i) {
                var n = G(e) ? e : eF
                  , s = function() {
                    var e = t.then;
                    t.then = null,
                    r && r(),
                    G(n) && (n = n(t)) && (n.then || n === t) && (t.then = e),
                    i(n),
                    t.then = e
                };
                t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? s() : t._prom = s
            }
            )
        }
        ,
        t.kill = function() {
            tS(this)
        }
        ,
        e
    }();
    eB(tK.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var tQ = function(e) {
        function t(t, r) {
            var i;
            return void 0 === t && (t = {}),
            (i = e.call(this, t) || this).labels = {},
            i.smoothChildTiming = !!t.smoothChildTiming,
            i.autoRemoveChildren = !!t.autoRemoveChildren,
            i._sort = V(t.sortChildren),
            z && e6(t.parent || z, u(i), r),
            t.reversed && i.reverse(),
            t.paused && i.paused(!0),
            t.scrollTrigger && e8(u(i), t.scrollTrigger),
            i
        }
        c(t, e);
        var r = t.prototype;
        return r.to = function(e, t, r) {
            return ta(0, arguments, this),
            this
        }
        ,
        r.from = function(e, t, r) {
            return ta(1, arguments, this),
            this
        }
        ,
        r.fromTo = function(e, t, r, i) {
            return ta(2, arguments, this),
            this
        }
        ,
        r.set = function(e, t, r) {
            return t.duration = 0,
            t.parent = this,
            eU(t).repeatDelay || (t.repeat = 0),
            t.immediateRender = !!t.immediateRender,
            new ra(e,t,ts(this, r),1),
            this
        }
        ,
        r.call = function(e, t, r) {
            return e6(this, ra.delayedCall(0, e, t), r)
        }
        ,
        r.staggerTo = function(e, t, r, i, n, s, a) {
            return r.duration = t,
            r.stagger = r.stagger || i,
            r.onComplete = s,
            r.onCompleteParams = a,
            r.parent = this,
            new ra(e,r,ts(this, n)),
            this
        }
        ,
        r.staggerFrom = function(e, t, r, i, n, s, a) {
            return r.runBackwards = 1,
            eU(r).immediateRender = V(r.immediateRender),
            this.staggerTo(e, t, r, i, n, s, a)
        }
        ,
        r.staggerFromTo = function(e, t, r, i, n, s, a, o) {
            return i.startAt = r,
            eU(i).immediateRender = V(i.immediateRender),
            this.staggerTo(e, t, i, n, s, a, o)
        }
        ,
        r.render = function(e, t, r) {
            var i, n, s, a, o, l, u, c, h, d, f, p, m = this._time, g = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, _ = e <= 0 ? 0 : eM(e), y = this._zTime < 0 != e < 0 && (this._initted || !v);
            if (this !== z && _ > g && e >= 0 && (_ = g),
            _ !== this._tTime || r || y) {
                if (m !== this._time && v && (_ += this._time - m,
                e += this._time - m),
                i = _,
                h = this._start,
                l = !(c = this._ts),
                y && (v || (m = this._zTime),
                (e || !t) && (this._zTime = e)),
                this._repeat) {
                    if (f = this._yoyo,
                    o = v + this._rDelay,
                    this._repeat < -1 && e < 0)
                        return this.totalTime(100 * o + e, t, r);
                    if (i = eM(_ % o),
                    _ === g ? (a = this._repeat,
                    i = v) : ((a = ~~(d = eM(_ / o))) && a === d && (i = v,
                    a--),
                    i > v && (i = v)),
                    d = e0(this._tTime, o),
                    !m && this._tTime && d !== a && this._tTime - d * o - this._dur <= 0 && (d = a),
                    f && 1 & a && (i = v - i,
                    p = 1),
                    a !== d && !this._lock) {
                        var b = f && 1 & d
                          , x = b === (f && 1 & a);
                        if (a < d && (b = !b),
                        m = b ? 0 : _ % v ? v : _,
                        this._lock = 1,
                        this.render(m || (p ? 0 : eM(a * o)), t, !v)._lock = 0,
                        this._tTime = _,
                        !t && this.parent && tT(this, "onRepeat"),
                        this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1,
                        d = a),
                        m && m !== this._time || !this._ts !== l || this.vars.onRepeat && !this.parent && !this._act || (v = this._dur,
                        g = this._tDur,
                        x && (this._lock = 2,
                        m = b ? v : -1e-4,
                        this.render(m, !0),
                        this.vars.repeatRefresh && !p && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !l))
                            return this;
                        tW(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (u = tt(this, eM(m), eM(i))) && (_ -= i - (i = u._start)),
                this._tTime = _,
                this._time = i,
                this._act = !c,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = e,
                m = 0),
                !m && _ && v && !t && !d && (tT(this, "onStart"),
                this._tTime !== _))
                    return this;
                if (i >= m && e >= 0)
                    for (n = this._first; n; ) {
                        if (s = n._next,
                        (n._act || i >= n._start) && n._ts && u !== n) {
                            if (n.parent !== this)
                                return this.render(e, t, r);
                            if (n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, t, r),
                            i !== this._time || !this._ts && !l) {
                                u = 0,
                                s && (_ += this._zTime = -1e-8);
                                break
                            }
                        }
                        n = s
                    }
                else {
                    n = this._last;
                    for (var w = e < 0 ? e : i; n; ) {
                        if (s = n._prev,
                        (n._act || w <= n._end) && n._ts && u !== n) {
                            if (n.parent !== this)
                                return this.render(e, t, r);
                            if (n.render(n._ts > 0 ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, t, r || O && eD(n)),
                            i !== this._time || !this._ts && !l) {
                                u = 0,
                                s && (_ += this._zTime = w ? -1e-8 : 1e-8);
                                break
                            }
                        }
                        n = s
                    }
                }
                if (u && !t && (this.pause(),
                u.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1,
                this._ts))
                    return this._start = h,
                    e2(this),
                    this.render(e, t, r);
                this._onUpdate && !t && tT(this, "onUpdate", !0),
                (_ === g && this._tTime >= this.totalDuration() || !_ && m) && (h === this._start || Math.abs(c) !== Math.abs(this._ts)) && !this._lock && ((e || !v) && (_ === g && this._ts > 0 || !_ && this._ts < 0) && eZ(this, 1),
                t || e < 0 && !m || !_ && !m && g || (tT(this, _ === g && e >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(_ < g && this.timeScale() > 0) && this._prom()))
            }
            return this
        }
        ,
        r.add = function(e, t) {
            var r = this;
            if (H(t) || (t = ts(this, t, e)),
            !(e instanceof tK)) {
                if (ee(e))
                    return e.forEach(function(e) {
                        return r.add(e, t)
                    }),
                    this;
                if (U(e))
                    return this.addLabel(e, t);
                if (!G(e))
                    return this;
                e = ra.delayedCall(0, e)
            }
            return this !== e ? e6(this, e, t) : this
        }
        ,
        r.getChildren = function(e, t, r, i) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0),
            void 0 === r && (r = !0),
            void 0 === i && (i = -1e8);
            for (var n = [], s = this._first; s; )
                s._start >= i && (s instanceof ra ? t && n.push(s) : (r && n.push(s),
                e && n.push.apply(n, s.getChildren(!0, t, r)))),
                s = s._next;
            return n
        }
        ,
        r.getById = function(e) {
            for (var t = this.getChildren(1, 1, 1), r = t.length; r--; )
                if (t[r].vars.id === e)
                    return t[r]
        }
        ,
        r.remove = function(e) {
            return U(e) ? this.removeLabel(e) : G(e) ? this.killTweensOf(e) : (e.parent === this && eq(this, e),
            e === this._recent && (this._recent = this._last),
            eV(this))
        }
        ,
        r.totalTime = function(t, r) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = eM(tA.time - (this._ts > 0 ? t / this._ts : -((this.totalDuration() - t) / this._ts)))),
            e.prototype.totalTime.call(this, t, r),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        r.addLabel = function(e, t) {
            return this.labels[e] = ts(this, t),
            this
        }
        ,
        r.removeLabel = function(e) {
            return delete this.labels[e],
            this
        }
        ,
        r.addPause = function(e, t, r) {
            var i = ra.delayedCall(0, t || eg, r);
            return i.data = "isPause",
            this._hasPause = 1,
            e6(this, i, ts(this, e))
        }
        ,
        r.removePause = function(e) {
            var t = this._first;
            for (e = ts(this, e); t; )
                t._start === e && "isPause" === t.data && eZ(t),
                t = t._next
        }
        ,
        r.killTweensOf = function(e, t, r) {
            for (var i = this.getTweensOf(e, r), n = i.length; n--; )
                t5 !== i[n] && i[n].kill(e, t);
            return this
        }
        ,
        r.getTweensOf = function(e, t) {
            for (var r, i = [], n = td(e), s = this._first, a = H(t); s; )
                s instanceof ra ? eA(s._targets, n) && (a ? (!t5 || s._initted && s._ts) && s.globalTime(0) <= t && s.globalTime(s.totalDuration()) > t : !t || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, t)).length && i.push.apply(i, r),
                s = s._next;
            return i
        }
        ,
        r.tweenTo = function(e, t) {
            t = t || {};
            var r, i = this, n = ts(i, e), s = t, a = s.startAt, o = s.onStart, l = s.onStartParams, u = s.immediateRender, c = ra.to(i, eB({
                ease: t.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: t.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale()) || 1e-8,
                onStart: function() {
                    if (i.pause(),
                    !r) {
                        var e = t.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale());
                        c._dur !== e && tr(c, e, 0, 1).render(c._time, !0, !0),
                        r = 1
                    }
                    o && o.apply(c, l || [])
                }
            }, t));
            return u ? c.render(0) : c
        }
        ,
        r.tweenFromTo = function(e, t, r) {
            return this.tweenTo(t, eB({
                startAt: {
                    time: ts(this, e)
                }
            }, r))
        }
        ,
        r.recent = function() {
            return this._recent
        }
        ,
        r.nextLabel = function(e) {
            return void 0 === e && (e = this._time),
            tw(this, ts(this, e))
        }
        ,
        r.previousLabel = function(e) {
            return void 0 === e && (e = this._time),
            tw(this, ts(this, e), 1)
        }
        ,
        r.currentLabel = function(e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + 1e-8)
        }
        ,
        r.shiftChildren = function(e, t, r) {
            void 0 === r && (r = 0);
            var i, n = this._first, s = this.labels;
            for (e = eM(e); n; )
                n._start >= r && (n._start += e,
                n._end += e),
                n = n._next;
            if (t)
                for (i in s)
                    s[i] >= r && (s[i] += e);
            return eV(this)
        }
        ,
        r.invalidate = function(t) {
            var r = this._first;
            for (this._lock = 0; r; )
                r.invalidate(t),
                r = r._next;
            return e.prototype.invalidate.call(this, t)
        }
        ,
        r.clear = function(e) {
            void 0 === e && (e = !0);
            for (var t, r = this._first; r; )
                t = r._next,
                this.remove(r),
                r = t;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            e && (this.labels = {}),
            eV(this)
        }
        ,
        r.totalDuration = function(e) {
            var t, r, i, n = 0, s = this._last, a = 1e8;
            if (arguments.length)
                return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -e : e));
            if (this._dirty) {
                for (i = this.parent; s; )
                    t = s._prev,
                    s._dirty && s.totalDuration(),
                    (r = s._start) > a && this._sort && s._ts && !this._lock ? (this._lock = 1,
                    e6(this, s, r - s._delay, 1)._lock = 0) : a = r,
                    r < 0 && s._ts && (n -= r,
                    (!i && !this._dp || i && i.smoothChildTiming) && (this._start += eM(r / this._ts),
                    this._time -= r,
                    this._tTime -= r),
                    this.shiftChildren(-r, !1, -Infinity),
                    a = 0),
                    s._end > n && s._ts && (n = s._end),
                    s = t;
                tr(this, this === z && this._time > n ? this._time : n, 1, 1),
                this._dirty = 0
            }
            return this._tDur
        }
        ,
        t.updateRoot = function(e) {
            if (z._ts && (eL(z, e1(e, z)),
            E = tA.frame),
            tA.frame >= eC) {
                eC += D.autoSleep || 120;
                var t = z._first;
                if ((!t || !t._ts) && D.autoSleep && tA._listeners.length < 2) {
                    for (; t && !t._ts; )
                        t = t._next;
                    t || tA.sleep()
                }
            }
        }
        ,
        t
    }(tK);
    eB(tQ.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var tJ, t0, t1, t2, t5, t3, t6 = function(e, t, r, i, n, s, a) {
        var o, l, u, c, h, d, f, p, m = new rb(this._pt,e,t,0,1,rp,null,n), g = 0, v = 0;
        for (m.b = r,
        m.e = i,
        r += "",
        i += "",
        (f = ~i.indexOf("random(")) && (i = tb(i)),
        s && (s(p = [r, i], e, t),
        r = p[0],
        i = p[1]),
        l = r.match(ea) || []; o = ea.exec(i); )
            c = o[0],
            h = i.substring(g, o.index),
            u ? u = (u + 1) % 5 : "rgba(" === h.substr(-5) && (u = 1),
            c !== l[v++] && (d = parseFloat(l[v - 1]) || 0,
            m._pt = {
                _next: m._pt,
                p: h || 1 === v ? h : ",",
                s: d,
                c: "=" === c.charAt(1) ? eE(d, c) - d : parseFloat(c) - d,
                m: u && u < 4 ? Math.round : 0
            },
            g = ea.lastIndex);
        return m.c = g < i.length ? i.substring(g, i.length) : "",
        m.fp = a,
        (eo.test(i) || f) && (m.e = 0),
        this._pt = m,
        m
    }, t8 = function(e, t, r, i, n, s, a, o, l, u) {
        G(i) && (i = i(n || 0, e, s));
        var c, h = e[t], d = "get" !== r ? r : G(h) ? l ? e[t.indexOf("set") || !G(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : h, f = G(h) ? l ? ru : rl : ro;
        if (U(i) && (~i.indexOf("random(") && (i = tb(i)),
        "=" === i.charAt(1) && ((c = eE(d, i) + (tu(d) || 0)) || 0 === c) && (i = c)),
        !u || d !== i || t3)
            return isNaN(d * i) || "" === i ? (h || t in e || ef(t, i),
            t6.call(this, e, t, d, i, f, o || D.stringFilter, l)) : (c = new rb(this._pt,e,t,+d || 0,i - (d || 0),"boolean" == typeof h ? rf : rd,0,f),
            l && (c.fp = l),
            a && c.modifier(a, this, e),
            this._pt = c)
    }, t4 = function(e, t, r, i, n) {
        if (G(e) && (e = ri(e, n, t, r, i)),
        !Z(e) || e.style && e.nodeType || ee(e) || J(e))
            return U(e) ? ri(e, n, t, r, i) : e;
        var s, a = {};
        for (s in e)
            a[s] = ri(e[s], n, t, r, i);
        return a
    }, t9 = function(e, t, r, i, n, s) {
        var a, o, l, u;
        if (eT[e] && !1 !== (a = new eT[e]).init(n, a.rawVars ? t[e] : t4(t[e], i, n, s, r), r, i, s) && (r._pt = o = new rb(r._pt,n,e,0,1,a.render,a,0,a.priority),
        r !== A))
            for (l = r._ptLookup[r._targets.indexOf(n)],
            u = a._props.length; u--; )
                l[a._props[u]] = o;
        return a
    }, t7 = function e(t, r, i) {
        var n, s, a, o, l, u, c, h, d, f, p, m, g, v = t.vars, _ = v.ease, y = v.startAt, b = v.immediateRender, x = v.lazy, w = v.onUpdate, T = v.runBackwards, S = v.yoyoEase, C = v.keyframes, P = v.autoRevert, I = t._dur, R = t._startAt, j = t._targets, M = t.parent, E = M && "nested" === M.data ? M.vars.targets : j, A = "auto" === t._overwrite && !k, N = t.timeline;
        if (!N || C && _ || (_ = "none"),
        t._ease = tU(_, L.ease),
        t._yEase = S ? tY(tU(!0 === S ? _ : S, L.ease)) : 0,
        S && t._yoyo && !t._repeat && (S = t._yEase,
        t._yEase = t._ease,
        t._ease = S),
        t._from = !N && !!v.runBackwards,
        !N || C && !v.stagger) {
            if (m = (h = j[0] ? ez(j[0]).harness : 0) && v[h.prop],
            n = eW(v, eb),
            R && (R._zTime < 0 && R.progress(1),
            r < 0 && T && b && !P ? R.render(-1, !0) : R.revert(T && I ? e_ : ev),
            R._lazy = 0),
            y) {
                if (eZ(t._startAt = ra.set(j, eB({
                    data: "isStart",
                    overwrite: !1,
                    parent: M,
                    immediateRender: !0,
                    lazy: !R && V(x),
                    startAt: null,
                    delay: 0,
                    onUpdate: w && function() {
                        return tT(t, "onUpdate")
                    }
                    ,
                    stagger: 0
                }, y))),
                t._startAt._dp = 0,
                t._startAt._sat = t,
                r < 0 && (O || !b && !P) && t._startAt.revert(e_),
                b && I && r <= 0 && i <= 0) {
                    r && (t._zTime = r);
                    return
                }
            } else if (T && I && !R)
                if (r && (b = !1),
                a = eB({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: b && !R && V(x),
                    immediateRender: b,
                    stagger: 0,
                    parent: M
                }, n),
                m && (a[h.prop] = m),
                eZ(t._startAt = ra.set(j, a)),
                t._startAt._dp = 0,
                t._startAt._sat = t,
                r < 0 && (O ? t._startAt.revert(e_) : t._startAt.render(-1, !0)),
                t._zTime = r,
                b) {
                    if (!r)
                        return
                } else
                    e(t._startAt, 1e-8, 1e-8);
            for (s = 0,
            t._pt = t._ptCache = 0,
            x = I && V(x) || x && !I; s < j.length; s++) {
                if (c = (l = j[s])._gsap || eP(j)[s]._gsap,
                t._ptLookup[s] = f = {},
                ew[c.id] && ex.length && eN(),
                p = E === j ? s : E.indexOf(l),
                h && !1 !== (d = new h).init(l, m || n, t, p, E) && (t._pt = o = new rb(t._pt,l,d.name,0,1,d.render,d,0,d.priority),
                d._props.forEach(function(e) {
                    f[e] = o
                }),
                d.priority && (u = 1)),
                !h || m)
                    for (a in n)
                        eT[a] && (d = t9(a, n, t, p, l, E)) ? d.priority && (u = 1) : f[a] = o = t8.call(t, l, a, "get", n[a], p, E, 0, v.stringFilter);
                t._op && t._op[s] && t.kill(l, t._op[s]),
                A && t._pt && (t5 = t,
                z.killTweensOf(l, f, t.globalTime(r)),
                g = !t.parent,
                t5 = 0),
                t._pt && x && (ew[c.id] = 1)
            }
            u && ry(t),
            t._onInit && t._onInit(t)
        }
        t._onUpdate = w,
        t._initted = (!t._op || t._pt) && !g,
        C && r <= 0 && N.render(1e8, !0, !0)
    }, re = function(e, t, r, i, n, s, a, o) {
        var l, u, c, h, d = (e._pt && e._ptCache || (e._ptCache = {}))[t];
        if (!d)
            for (d = e._ptCache[t] = [],
            c = e._ptLookup,
            h = e._targets.length; h--; ) {
                if ((l = c[h][t]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t; )
                        l = l._next;
                if (!l)
                    return t3 = 1,
                    e.vars[t] = "+=0",
                    t7(e, a),
                    t3 = 0,
                    o ? ep(t + " not eligible for reset") : 1;
                d.push(l)
            }
        for (h = d.length; h--; )
            (l = (u = d[h])._pt || u).s = (i || 0 === i) && !n ? i : l.s + (i || 0) + s * l.c,
            l.c = r - l.s,
            u.e && (u.e = ej(r) + tu(u.e)),
            u.b && (u.b = l.s + tu(u.b))
    }, rt = function(e, t) {
        var r, i, n, s, a = e[0] ? ez(e[0]).harness : 0, o = a && a.aliases;
        if (!o)
            return t;
        for (i in r = e$({}, t),
        o)
            if (i in r)
                for (n = (s = o[i].split(",")).length; n--; )
                    r[s[n]] = r[i];
        return r
    }, rr = function(e, t, r, i) {
        var n, s, a = t.ease || i || "power1.inOut";
        if (ee(t))
            s = r[e] || (r[e] = []),
            t.forEach(function(e, r) {
                return s.push({
                    t: r / (t.length - 1) * 100,
                    v: e,
                    e: a
                })
            });
        else
            for (n in t)
                s = r[n] || (r[n] = []),
                "ease" === n || s.push({
                    t: parseFloat(e),
                    v: t[n],
                    e: a
                })
    }, ri = function(e, t, r, i, n) {
        return G(e) ? e.call(t, r, i, n) : U(e) && ~e.indexOf("random(") ? tb(e) : e
    }, rn = eO + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", rs = {};
    eR(rn + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
        return rs[e] = 1
    });
    var ra = function(e) {
        function t(t, r, i, n) {
            "number" == typeof r && (i.duration = r,
            r = i,
            i = null);
            var s, a, o, l, c, h, d, f, p = e.call(this, n ? r : eU(r)) || this, m = p.vars, g = m.duration, v = m.delay, _ = m.immediateRender, y = m.stagger, b = m.overwrite, x = m.keyframes, w = m.defaults, T = m.scrollTrigger, S = m.yoyoEase, C = r.parent || z, O = (ee(t) || J(t) ? H(t[0]) : "length"in r) ? [t] : td(t);
            if (p._targets = O.length ? eP(O) : ep("GSAP target " + t + " not found. https://gsap.com", !D.nullTargetWarn) || [],
            p._ptLookup = [],
            p._overwrite = b,
            x || y || Q(g) || Q(v)) {
                if (r = p.vars,
                (s = p.timeline = new tQ({
                    data: "nested",
                    defaults: w || {},
                    targets: C && "nested" === C.data ? C.vars.targets : O
                })).kill(),
                s.parent = s._dp = u(p),
                s._start = 0,
                y || Q(g) || Q(v)) {
                    if (l = O.length,
                    d = y && tm(y),
                    Z(y))
                        for (c in y)
                            ~rn.indexOf(c) && (f || (f = {}),
                            f[c] = y[c]);
                    for (a = 0; a < l; a++)
                        (o = eW(r, rs)).stagger = 0,
                        S && (o.yoyoEase = S),
                        f && e$(o, f),
                        h = O[a],
                        o.duration = +ri(g, u(p), a, h, O),
                        o.delay = (+ri(v, u(p), a, h, O) || 0) - p._delay,
                        !y && 1 === l && o.delay && (p._delay = v = o.delay,
                        p._start += v,
                        o.delay = 0),
                        s.to(h, o, d ? d(a, h, O) : 0),
                        s._ease = tD.none;
                    s.duration() ? g = v = 0 : p.timeline = 0
                } else if (x) {
                    eU(eB(s.vars.defaults, {
                        ease: "none"
                    })),
                    s._ease = tU(x.ease || r.ease || "none");
                    var P, I, R, j = 0;
                    if (ee(x))
                        x.forEach(function(e) {
                            return s.to(O, e, ">")
                        }),
                        s.duration();
                    else {
                        for (c in o = {},
                        x)
                            "ease" === c || "easeEach" === c || rr(c, x[c], o, x.easeEach);
                        for (c in o)
                            for (a = 0,
                            P = o[c].sort(function(e, t) {
                                return e.t - t.t
                            }),
                            j = 0; a < P.length; a++)
                                (R = {
                                    ease: (I = P[a]).e,
                                    duration: (I.t - (a ? P[a - 1].t : 0)) / 100 * g
                                })[c] = I.v,
                                s.to(O, R, j),
                                j += R.duration;
                        s.duration() < g && s.to({}, {
                            duration: g - s.duration()
                        })
                    }
                }
                g || p.duration(g = s.duration())
            } else
                p.timeline = 0;
            return !0 !== b || k || (t5 = u(p),
            z.killTweensOf(O),
            t5 = 0),
            e6(C, u(p), i),
            r.reversed && p.reverse(),
            r.paused && p.paused(!0),
            (_ || !g && !x && p._start === eM(C._time) && V(_) && function e(t) {
                return !t || t._ts && e(t.parent)
            }(u(p)) && "nested" !== C.data) && (p._tTime = -1e-8,
            p.render(Math.max(0, -v) || 0)),
            T && e8(u(p), T),
            p
        }
        c(t, e);
        var r = t.prototype;
        return r.render = function(e, t, r) {
            var i, n, s, a, o, l, u, c, h, d = this._time, f = this._tDur, p = this._dur, m = e < 0, g = e > f - 1e-8 && !m ? f : e < 1e-8 ? 0 : e;
            if (p) {
                if (g !== this._tTime || !e || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m || this._lazy) {
                    if (i = g,
                    c = this.timeline,
                    this._repeat) {
                        if (a = p + this._rDelay,
                        this._repeat < -1 && m)
                            return this.totalTime(100 * a + e, t, r);
                        if (i = eM(g % a),
                        g === f ? (s = this._repeat,
                        i = p) : (s = ~~(o = eM(g / a))) && s === o ? (i = p,
                        s--) : i > p && (i = p),
                        (l = this._yoyo && 1 & s) && (h = this._yEase,
                        i = p - i),
                        o = e0(this._tTime, a),
                        i === d && !r && this._initted && s === o)
                            return this._tTime = g,
                            this;
                        s !== o && (c && this._yEase && tW(c, l),
                        this.vars.repeatRefresh && !l && !this._lock && i !== a && this._initted && (this._lock = r = 1,
                        this.render(eM(a * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (e4(this, m ? e : i, r, t, g))
                            return this._tTime = 0,
                            this;
                        if (d !== this._time && !(r && this.vars.repeatRefresh && s !== o))
                            return this;
                        if (p !== this._dur)
                            return this.render(e, t, r)
                    }
                    if (this._tTime = g,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = u = (h || this._ease)(i / p),
                    this._from && (this.ratio = u = 1 - u),
                    !d && g && !t && !o && (tT(this, "onStart"),
                    this._tTime !== g))
                        return this;
                    for (n = this._pt; n; )
                        n.r(u, n.d),
                        n = n._next;
                    c && c.render(e < 0 ? e : c._dur * c._ease(i / this._dur), t, r) || this._startAt && (this._zTime = e),
                    this._onUpdate && !t && (m && eQ(this, e, t, r),
                    tT(this, "onUpdate")),
                    this._repeat && s !== o && this.vars.onRepeat && !t && this.parent && tT(this, "onRepeat"),
                    (g === this._tDur || !g) && this._tTime === g && (m && !this._onUpdate && eQ(this, e, !0, !0),
                    (e || !p) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && eZ(this, 1),
                    !t && !(m && !d) && (g || d || l) && (tT(this, g === f ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(g < f && this.timeScale() > 0) && this._prom()))
                }
            } else
                te(this, e, t, r);
            return this
        }
        ,
        r.targets = function() {
            return this._targets
        }
        ,
        r.invalidate = function(t) {
            return t && this.vars.runBackwards || (this._startAt = 0),
            this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(t),
            e.prototype.invalidate.call(this, t)
        }
        ,
        r.resetTo = function(e, t, r, i, n) {
            N || tA.wake(),
            this._ts || this.play();
            var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return (this._initted || t7(this, s),
            re(this, e, t, r, i, this._ease(s / this._dur), s, n)) ? this.resetTo(e, t, r, i, 1) : (e5(this, 0),
            this.parent || eH(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
        }
        ,
        r.kill = function(e, t) {
            if (void 0 === t && (t = "all"),
            !e && (!t || "all" === t))
                return this._lazy = this._pt = 0,
                this.parent ? tS(this) : this.scrollTrigger && this.scrollTrigger.kill(!!O),
                this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(e, t, t5 && !0 !== t5.vars.overwrite)._first || tS(this),
                this.parent && r !== this.timeline.totalDuration() && tr(this, this._dur * this.timeline._tDur / r, 0, 1),
                this
            }
            var i, n, s, a, o, l, u, c = this._targets, h = e ? td(e) : c, d = this._ptLookup, f = this._pt;
            if ((!t || "all" === t) && eG(c, h))
                return "all" === t && (this._pt = 0),
                tS(this);
            for (i = this._op = this._op || [],
            "all" !== t && (U(t) && (o = {},
            eR(t, function(e) {
                return o[e] = 1
            }),
            t = o),
            t = rt(c, t)),
            u = c.length; u--; )
                if (~h.indexOf(c[u]))
                    for (o in n = d[u],
                    "all" === t ? (i[u] = t,
                    a = n,
                    s = {}) : (s = i[u] = i[u] || {},
                    a = t),
                    a)
                        (l = n && n[o]) && ("kill"in l.d && !0 !== l.d.kill(o) || eq(this, l, "_pt"),
                        delete n[o]),
                        "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && f && tS(this),
            this
        }
        ,
        t.to = function(e, r) {
            return new t(e,r,arguments[2])
        }
        ,
        t.from = function(e, t) {
            return ta(1, arguments)
        }
        ,
        t.delayedCall = function(e, r, i, n) {
            return new t(r,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: e,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: i,
                onReverseCompleteParams: i,
                callbackScope: n
            })
        }
        ,
        t.fromTo = function(e, t, r) {
            return ta(2, arguments)
        }
        ,
        t.set = function(e, r) {
            return r.duration = 0,
            r.repeatDelay || (r.repeat = 0),
            new t(e,r)
        }
        ,
        t.killTweensOf = function(e, t, r) {
            return z.killTweensOf(e, t, r)
        }
        ,
        t
    }(tK);
    eB(ra.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    eR("staggerTo,staggerFrom,staggerFromTo", function(e) {
        ra[e] = function() {
            var t = new tQ
              , r = tc.call(arguments, 0);
            return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0),
            t[e].apply(t, r)
        }
    });
    var ro = function(e, t, r) {
        return e[t] = r
    }
      , rl = function(e, t, r) {
        return e[t](r)
    }
      , ru = function(e, t, r, i) {
        return e[t](i.fp, r)
    }
      , rc = function(e, t, r) {
        return e.setAttribute(t, r)
    }
      , rh = function(e, t) {
        return G(e[t]) ? rl : q(e[t]) && e.setAttribute ? rc : ro
    }
      , rd = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    }
      , rf = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }
      , rp = function(e, t) {
        var r = t._pt
          , i = "";
        if (!e && t.b)
            i = t.b;
        else if (1 === e && t.e)
            i = t.e;
        else {
            for (; r; )
                i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i,
                r = r._next;
            i += t.c
        }
        t.set(t.t, t.p, i, t)
    }
      , rm = function(e, t) {
        for (var r = t._pt; r; )
            r.r(e, r.d),
            r = r._next
    }
      , rg = function(e, t, r, i) {
        for (var n, s = this._pt; s; )
            n = s._next,
            s.p === i && s.modifier(e, t, r),
            s = n
    }
      , rv = function(e) {
        for (var t, r, i = this._pt; i; )
            r = i._next,
            (i.p !== e || i.op) && i.op !== e ? i.dep || (t = 1) : eq(this, i, "_pt"),
            i = r;
        return !t
    }
      , r_ = function(e, t, r, i) {
        i.mSet(e, t, i.m.call(i.tween, r, i.mt), i)
    }
      , ry = function(e) {
        for (var t, r, i, n, s = e._pt; s; ) {
            for (t = s._next,
            r = i; r && r.pr > s.pr; )
                r = r._next;
            (s._prev = r ? r._prev : n) ? s._prev._next = s : i = s,
            (s._next = r) ? r._prev = s : n = s,
            s = t
        }
        e._pt = i
    }
      , rb = function() {
        function e(e, t, r, i, n, s, a, o, l) {
            this.t = t,
            this.s = i,
            this.c = n,
            this.p = r,
            this.r = s || rd,
            this.d = a || this,
            this.set = o || ro,
            this.pr = l || 0,
            this._next = e,
            e && (e._prev = this)
        }
        return e.prototype.modifier = function(e, t, r) {
            this.mSet = this.mSet || this.set,
            this.set = r_,
            this.m = e,
            this.mt = r,
            this.tween = t
        }
        ,
        e
    }();
    eR(eO + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return eb[e] = 1
    }),
    ec.TweenMax = ec.TweenLite = ra,
    ec.TimelineLite = ec.TimelineMax = tQ,
    z = new tQ({
        sortChildren: !1,
        defaults: L,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    D.stringFilter = tE;
    var rx = []
      , rw = {}
      , rT = []
      , rS = 0
      , rC = 0
      , rk = function(e) {
        return (rw[e] || rT).map(function(e) {
            return e()
        })
    }
      , rO = function() {
        var e = Date.now()
          , t = [];
        e - rS > 2 && (rk("matchMediaInit"),
        rx.forEach(function(e) {
            var r, i, n, s, a = e.queries, o = e.conditions;
            for (i in a)
                (r = I.matchMedia(a[i]).matches) && (n = 1),
                r !== o[i] && (o[i] = r,
                s = 1);
            s && (e.revert(),
            n && t.push(e))
        }),
        rk("matchMediaRevert"),
        t.forEach(function(e) {
            return e.onMatch(e, function(t) {
                return e.add(null, t)
            })
        }),
        rS = e,
        rk("matchMedia"))
    }
      , rP = function() {
        function e(e, t) {
            this.selector = t && tf(t),
            this.data = [],
            this._r = [],
            this.isReverted = !1,
            this.id = rC++,
            e && this.add(e)
        }
        var t = e.prototype;
        return t.add = function(e, t, r) {
            G(e) && (r = t,
            t = e,
            e = G);
            var i = this
              , n = function() {
                var e, n = P, s = i.selector;
                return n && n !== i && n.data.push(i),
                r && (i.selector = tf(r)),
                P = i,
                e = t.apply(i, arguments),
                G(e) && i._r.push(e),
                P = n,
                i.selector = s,
                i.isReverted = !1,
                e
            };
            return i.last = n,
            e === G ? n(i, function(e) {
                return i.add(null, e)
            }) : e ? i[e] = n : n
        }
        ,
        t.ignore = function(e) {
            var t = P;
            P = null,
            e(this),
            P = t
        }
        ,
        t.getTweens = function() {
            var t = [];
            return this.data.forEach(function(r) {
                return r instanceof e ? t.push.apply(t, r.getTweens()) : r instanceof ra && !(r.parent && "nested" === r.parent.data) && t.push(r)
            }),
            t
        }
        ,
        t.clear = function() {
            this._r.length = this.data.length = 0
        }
        ,
        t.kill = function(e, t) {
            var r = this;
            if (e) {
                for (var i, n = r.getTweens(), s = r.data.length; s--; )
                    "isFlip" === (i = r.data[s]).data && (i.revert(),
                    i.getChildren(!0, !0, !1).forEach(function(e) {
                        return n.splice(n.indexOf(e), 1)
                    }));
                for (n.map(function(e) {
                    return {
                        g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
                        t: e
                    }
                }).sort(function(e, t) {
                    return t.g - e.g || -1 / 0
                }).forEach(function(t) {
                    return t.t.revert(e)
                }),
                s = r.data.length; s--; )
                    (i = r.data[s])instanceof tQ ? "nested" !== i.data && (i.scrollTrigger && i.scrollTrigger.revert(),
                    i.kill()) : i instanceof ra || !i.revert || i.revert(e);
                r._r.forEach(function(t) {
                    return t(e, r)
                }),
                r.isReverted = !0
            } else
                this.data.forEach(function(e) {
                    return e.kill && e.kill()
                });
            if (this.clear(),
            t)
                for (var a = rx.length; a--; )
                    rx[a].id === this.id && rx.splice(a, 1)
        }
        ,
        t.revert = function(e) {
            this.kill(e || {})
        }
        ,
        e
    }()
      , rz = function() {
        function e(e) {
            this.contexts = [],
            this.scope = e,
            P && P.data.push(this)
        }
        var t = e.prototype;
        return t.add = function(e, t, r) {
            Z(e) || (e = {
                matches: e
            });
            var i, n, s, a = new rP(0,r || this.scope), o = a.conditions = {};
            for (n in P && !a.selector && (a.selector = P.selector),
            this.contexts.push(a),
            t = a.add("onMatch", t),
            a.queries = e,
            e)
                "all" === n ? s = 1 : (i = I.matchMedia(e[n])) && (0 > rx.indexOf(a) && rx.push(a),
                (o[n] = i.matches) && (s = 1),
                i.addListener ? i.addListener(rO) : i.addEventListener("change", rO));
            return s && t(a, function(e) {
                return a.add(null, e)
            }),
            this
        }
        ,
        t.revert = function(e) {
            this.kill(e || {})
        }
        ,
        t.kill = function(e) {
            this.contexts.forEach(function(t) {
                return t.kill(e, !0)
            })
        }
        ,
        e
    }()
      , rI = {
        registerPlugin: function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            t.forEach(function(e) {
                return tk(e)
            })
        },
        timeline: function(e) {
            return new tQ(e)
        },
        getTweensOf: function(e, t) {
            return z.getTweensOf(e, t)
        },
        getProperty: function(e, t, r, i) {
            U(e) && (e = td(e)[0]);
            var n = ez(e || {}).get
              , s = r ? eF : eX;
            return "native" === r && (r = ""),
            e ? t ? s((eT[t] && eT[t].get || n)(e, t, r, i)) : function(t, r, i) {
                return s((eT[t] && eT[t].get || n)(e, t, r, i))
            }
            : e
        },
        quickSetter: function(e, t, r) {
            if ((e = td(e)).length > 1) {
                var i = e.map(function(e) {
                    return rE.quickSetter(e, t, r)
                })
                  , n = i.length;
                return function(e) {
                    for (var t = n; t--; )
                        i[t](e)
                }
            }
            e = e[0] || {};
            var s = eT[t]
              , a = ez(e)
              , o = a.harness && (a.harness.aliases || {})[t] || t
              , l = s ? function(t) {
                var i = new s;
                A._pt = 0,
                i.init(e, r ? t + r : t, A, 0, [e]),
                i.render(1, i),
                A._pt && rm(1, A)
            }
            : a.set(e, o);
            return s ? l : function(t) {
                return l(e, o, r ? t + r : t, a, 1)
            }
        },
        quickTo: function(e, t, r) {
            var i, n = rE.to(e, eB(((i = {})[t] = "+=0.1",
            i.paused = !0,
            i.stagger = 0,
            i), r || {})), s = function(e, r, i) {
                return n.resetTo(t, e, r, i)
            };
            return s.tween = n,
            s
        },
        isTweening: function(e) {
            return z.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = tU(e.ease, L.ease)),
            eY(L, e || {})
        },
        config: function(e) {
            return eY(D, e || {})
        },
        registerEffect: function(e) {
            var t = e.name
              , r = e.effect
              , i = e.plugins
              , n = e.defaults
              , s = e.extendTimeline;
            (i || "").split(",").forEach(function(e) {
                return e && !eT[e] && !ec[e] && ep(t + " effect requires " + e + " plugin.")
            }),
            eS[t] = function(e, t, i) {
                return r(td(e), eB(t || {}, n), i)
            }
            ,
            s && (tQ.prototype[t] = function(e, r, i) {
                return this.add(eS[t](e, Z(r) ? r : (i = r) && {}, this), i)
            }
            )
        },
        registerEase: function(e, t) {
            tD[e] = tU(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? tU(e, t) : tD
        },
        getById: function(e) {
            return z.getById(e)
        },
        exportRoot: function(e, t) {
            void 0 === e && (e = {});
            var r, i, n = new tQ(e);
            for (n.smoothChildTiming = V(e.smoothChildTiming),
            z.remove(n),
            n._dp = 0,
            n._time = n._tTime = z._time,
            r = z._first; r; )
                i = r._next,
                (t || !(!r._dur && r instanceof ra && r.vars.onComplete === r._targets[0])) && e6(n, r, r._start - r._delay),
                r = i;
            return e6(z, n, 0),
            n
        },
        context: function(e, t) {
            return e ? new rP(e,t) : P
        },
        matchMedia: function(e) {
            return new rz(e)
        },
        matchMediaRefresh: function() {
            return rx.forEach(function(e) {
                var t, r, i = e.conditions;
                for (r in i)
                    i[r] && (i[r] = !1,
                    t = 1);
                t && e.revert()
            }) || rO()
        },
        addEventListener: function(e, t) {
            var r = rw[e] || (rw[e] = []);
            ~r.indexOf(t) || r.push(t)
        },
        removeEventListener: function(e, t) {
            var r = rw[e]
              , i = r && r.indexOf(t);
            i >= 0 && r.splice(i, 1)
        },
        utils: {
            wrap: function e(t, r, i) {
                var n = r - t;
                return ee(t) ? ty(t, e(0, t.length), r) : to(i, function(e) {
                    return (n + (e - t) % n) % n + t
                })
            },
            wrapYoyo: function e(t, r, i) {
                var n = r - t
                  , s = 2 * n;
                return ee(t) ? ty(t, e(0, t.length - 1), r) : to(i, function(e) {
                    return e = (s + (e - t) % s) % s || 0,
                    t + (e > n ? s - e : e)
                })
            },
            distribute: tm,
            random: t_,
            snap: tv,
            normalize: function(e, t, r) {
                return tx(e, t, 0, 1, r)
            },
            getUnit: tu,
            clamp: function(e, t, r) {
                return to(r, function(r) {
                    return tl(e, t, r)
                })
            },
            splitColor: tz,
            toArray: td,
            selector: tf,
            mapRange: tx,
            pipe: function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r];
                return function(e) {
                    return t.reduce(function(e, t) {
                        return t(e)
                    }, e)
                }
            },
            unitize: function(e, t) {
                return function(r) {
                    return e(parseFloat(r)) + (t || tu(r))
                }
            },
            interpolate: function e(t, r, i, n) {
                var s = isNaN(t + r) ? 0 : function(e) {
                    return (1 - e) * t + e * r
                }
                ;
                if (!s) {
                    var a, o, l, u, c, h = U(t), d = {};
                    if (!0 === i && (n = 1) && (i = null),
                    h)
                        t = {
                            p: t
                        },
                        r = {
                            p: r
                        };
                    else if (ee(t) && !ee(r)) {
                        for (o = 1,
                        l = [],
                        c = (u = t.length) - 2; o < u; o++)
                            l.push(e(t[o - 1], t[o]));
                        u--,
                        s = function(e) {
                            var t = Math.min(c, ~~(e *= u));
                            return l[t](e - t)
                        }
                        ,
                        i = r
                    } else
                        n || (t = e$(ee(t) ? [] : {}, t));
                    if (!l) {
                        for (a in r)
                            t8.call(d, t, a, "get", r[a]);
                        s = function(e) {
                            return rm(e, d) || (h ? t.p : t)
                        }
                    }
                }
                return to(i, s)
            },
            shuffle: tp
        },
        install: ed,
        effects: eS,
        ticker: tA,
        updateRoot: tQ.updateRoot,
        plugins: eT,
        globalTimeline: z,
        core: {
            PropTween: rb,
            globals: em,
            Tween: ra,
            Timeline: tQ,
            Animation: tK,
            getCache: ez,
            _removeLinkedListItem: eq,
            reverting: function() {
                return O
            },
            context: function(e) {
                return e && P && (P.data.push(e),
                e._ctx = P),
                P
            },
            suppressOverwrites: function(e) {
                return k = e
            }
        }
    };
    eR("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return rI[e] = ra[e]
    }),
    tA.add(tQ.updateRoot),
    A = rI.to({}, {
        duration: 0
    });
    var rR = function(e, t) {
        for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
            r = r._next;
        return r
    }
      , rj = function(e, t) {
        var r, i, n, s = e._targets;
        for (r in t)
            for (i = s.length; i--; )
                (n = e._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = rR(n, r)),
                n && n.modifier && n.modifier(t[r], e, s[i], r))
    }
      , rM = function(e, t) {
        return {
            name: e,
            headless: 1,
            rawVars: 1,
            init: function(e, r, i) {
                i._onInit = function(e) {
                    var i, n;
                    if (U(r) && (i = {},
                    eR(r, function(e) {
                        return i[e] = 1
                    }),
                    r = i),
                    t) {
                        for (n in i = {},
                        r)
                            i[n] = t(r[n]);
                        r = i
                    }
                    rj(e, r)
                }
            }
        }
    }
      , rE = rI.registerPlugin({
        name: "attr",
        init: function(e, t, r, i, n) {
            var s, a, o;
            for (s in this.tween = r,
            t)
                o = e.getAttribute(s) || "",
                (a = this.add(e, "setAttribute", (o || 0) + "", t[s], i, n, 0, 0, s)).op = s,
                a.b = o,
                this._props.push(s)
        },
        render: function(e, t) {
            for (var r = t._pt; r; )
                O ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
                r = r._next
        }
    }, {
        name: "endArray",
        headless: 1,
        init: function(e, t) {
            for (var r = t.length; r--; )
                this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
        }
    }, rM("roundProps", tg), rM("modifiers"), rM("snap", tv)) || rI;
    ra.version = tQ.version = rE.version = "3.14.2",
    M = 1,
    K() && tN(),
    tD.Power0,
    tD.Power1,
    tD.Power2,
    tD.Power3,
    tD.Power4,
    tD.Linear,
    tD.Quad,
    tD.Cubic,
    tD.Quart,
    tD.Quint,
    tD.Strong,
    tD.Elastic,
    tD.Back,
    tD.SteppedEase,
    tD.Bounce,
    tD.Sine,
    tD.Expo,
    tD.Circ;
    var rA, rN, rD, rL, rX, rF, rB, r$ = {}, rY = 180 / Math.PI, rW = Math.PI / 180, rU = Math.atan2, rG = /([A-Z])/g, rH = /(left|right|width|margin|padding|x)/i, rq = /[\s,\(]\S/, rZ = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, rV = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    }, rK = function(e, t) {
        return t.set(t.t, t.p, 1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    }, rQ = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    }, rJ = function(e, t) {
        return t.set(t.t, t.p, 1 === e ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    }, r0 = function(e, t) {
        var r = t.s + t.c * e;
        t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
    }, r1 = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    }, r2 = function(e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
    }, r5 = function(e, t, r) {
        return e.style[t] = r
    }, r3 = function(e, t, r) {
        return e.style.setProperty(t, r)
    }, r6 = function(e, t, r) {
        return e._gsap[t] = r
    }, r8 = function(e, t, r) {
        return e._gsap.scaleX = e._gsap.scaleY = r
    }, r4 = function(e, t, r, i, n) {
        var s = e._gsap;
        s.scaleX = s.scaleY = r,
        s.renderTransform(n, s)
    }, r9 = function(e, t, r, i, n) {
        var s = e._gsap;
        s[t] = r,
        s.renderTransform(n, s)
    }, r7 = "transform", ie = r7 + "Origin", it = function e(t, r) {
        var i = this
          , n = this.target
          , s = n.style
          , a = n._gsap;
        if (t in r$ && s) {
            if (this.tfm = this.tfm || {},
            "transform" === t)
                return rZ.transform.split(",").forEach(function(t) {
                    return e.call(i, t, r)
                });
            if (~(t = rZ[t] || t).indexOf(",") ? t.split(",").forEach(function(e) {
                return i.tfm[e] = ix(n, e)
            }) : this.tfm[t] = a.x ? a[t] : ix(n, t),
            t === ie && (this.tfm.zOrigin = a.zOrigin),
            this.props.indexOf(r7) >= 0)
                return;
            a.svg && (this.svgo = n.getAttribute("data-svg-origin"),
            this.props.push(ie, r, "")),
            t = r7
        }
        (s || r) && this.props.push(t, r, s[t])
    }, ir = function(e) {
        e.translate && (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"))
    }, ii = function() {
        var e, t, r = this.props, i = this.target, n = i.style, s = i._gsap;
        for (e = 0; e < r.length; e += 3)
            r[e + 1] ? 2 === r[e + 1] ? i[r[e]](r[e + 2]) : i[r[e]] = r[e + 2] : r[e + 2] ? n[r[e]] = r[e + 2] : n.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(rG, "-$1").toLowerCase());
        if (this.tfm) {
            for (t in this.tfm)
                s[t] = this.tfm[t];
            s.svg && (s.renderTransform(),
            i.setAttribute("data-svg-origin", this.svgo || "")),
            (e = rF()) && e.isStart || n[r7] || (ir(n),
            s.zOrigin && n[ie] && (n[ie] += " " + s.zOrigin + "px",
            s.zOrigin = 0,
            s.renderTransform()),
            s.uncache = 1)
        }
    }, is = function(e, t) {
        var r = {
            target: e,
            props: [],
            revert: ii,
            save: it
        };
        return e._gsap || rE.core.getCache(e),
        t && e.style && e.nodeType && t.split(",").forEach(function(e) {
            return r.save(e)
        }),
        r
    }, ia = function(e, t) {
        var r = rA.createElementNS ? rA.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : rA.createElement(e);
        return r && r.style ? r : rA.createElement(e)
    }, io = function e(t, r, i) {
        var n = getComputedStyle(t);
        return n[r] || n.getPropertyValue(r.replace(rG, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && e(t, iu(r) || r, 1) || ""
    }, il = "O,Moz,ms,Ms,Webkit".split(","), iu = function(e, t, r) {
        var i = (t || rL).style
          , n = 5;
        if (e in i && !r)
            return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(il[n] + e in i); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? il[n] : "") + e
    }, ic = function() {
        "u" > typeof window && window.document && (rN = (rA = window.document).documentElement,
        rL = ia("div") || {
            style: {}
        },
        ia("div"),
        ie = (r7 = iu(r7)) + "Origin",
        rL.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        rB = !!iu("perspective"),
        rF = rE.core.reverting,
        rD = 1)
    }, ih = function(e) {
        var t, r = e.ownerSVGElement, i = ia("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = e.cloneNode(!0);
        n.style.display = "block",
        i.appendChild(n),
        rN.appendChild(i);
        try {
            t = n.getBBox()
        } catch (e) {}
        return i.removeChild(n),
        rN.removeChild(i),
        t
    }, id = function(e, t) {
        for (var r = t.length; r--; )
            if (e.hasAttribute(t[r]))
                return e.getAttribute(t[r])
    }, ip = function(e) {
        var t, r;
        try {
            t = e.getBBox()
        } catch (i) {
            t = ih(e),
            r = 1
        }
        return t && (t.width || t.height) || r || (t = ih(e)),
        !t || t.width || t.x || t.y ? t : {
            x: +id(e, ["x", "cx", "x1"]) || 0,
            y: +id(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, im = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ip(e))
    }, ig = function(e, t) {
        if (t) {
            var r, i = e.style;
            t in r$ && t !== ie && (t = r7),
            i.removeProperty ? (("ms" === (r = t.substr(0, 2)) || "webkit" === t.substr(0, 6)) && (t = "-" + t),
            i.removeProperty("--" === r ? t : t.replace(rG, "-$1").toLowerCase())) : i.removeAttribute(t)
        }
    }, iv = function(e, t, r, i, n, s) {
        var a = new rb(e._pt,t,r,0,1,s ? r2 : r1);
        return e._pt = a,
        a.b = i,
        a.e = n,
        e._props.push(r),
        a
    }, i_ = {
        deg: 1,
        rad: 1,
        turn: 1
    }, iy = {
        grid: 1,
        flex: 1
    }, ib = function e(t, r, i, n) {
        var s, a, o, l, u = parseFloat(i) || 0, c = (i + "").trim().substr((u + "").length) || "px", h = rL.style, d = rH.test(r), f = "svg" === t.tagName.toLowerCase(), p = (f ? "client" : "offset") + (d ? "Width" : "Height"), m = "px" === n, g = "%" === n;
        if (n === c || !u || i_[n] || i_[c])
            return u;
        if ("px" === c || m || (u = e(t, r, i, "px")),
        l = t.getCTM && im(t),
        (g || "%" === c) && (r$[r] || ~r.indexOf("adius")))
            return s = l ? t.getBBox()[d ? "width" : "height"] : t[p],
            ej(g ? u / s * 100 : u / 100 * s);
        if (h[d ? "width" : "height"] = 100 + (m ? c : n),
        a = "rem" !== n && ~r.indexOf("adius") || "em" === n && t.appendChild && !f ? t : t.parentNode,
        l && (a = (t.ownerSVGElement || {}).parentNode),
        a && a !== rA && a.appendChild || (a = rA.body),
        (o = a._gsap) && g && o.width && d && o.time === tA.time && !o.uncache)
            return ej(u / o.width * 100);
        if (g && ("height" === r || "width" === r)) {
            var v = t.style[r];
            t.style[r] = 100 + n,
            s = t[p],
            v ? t.style[r] = v : ig(t, r)
        } else
            (g || "%" === c) && !iy[io(a, "display")] && (h.position = io(t, "position")),
            a === t && (h.position = "static"),
            a.appendChild(rL),
            s = rL[p],
            a.removeChild(rL),
            h.position = "absolute";
        return d && g && ((o = ez(a)).time = tA.time,
        o.width = a[p]),
        ej(m ? s * u / 100 : s && u ? 100 / s * u : 0)
    }, ix = function(e, t, r, i) {
        var n;
        return rD || ic(),
        t in rZ && "transform" !== t && ~(t = rZ[t]).indexOf(",") && (t = t.split(",")[0]),
        r$[t] && "transform" !== t ? (n = iM(e, i),
        n = "transformOrigin" !== t ? n[t] : n.svg ? n.origin : iE(io(e, ie)) + " " + n.zOrigin + "px") : (!(n = e.style[t]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = ik[t] && ik[t](e, t, r) || io(e, t) || eI(e, t) || +("opacity" === t)),
        r && !~(n + "").trim().indexOf(" ") ? ib(e, t, n, r) + r : n
    }, iw = function(e, t, r, i) {
        if (!r || "none" === r) {
            var n = iu(t, e, 1)
              , s = n && io(e, n, 1);
            s && s !== r ? (t = n,
            r = s) : "borderColor" === t && (r = io(e, "borderTopColor"))
        }
        var a, o, l, u, c, h, d, f, p, m, g, v = new rb(this._pt,e.style,t,0,1,rp), _ = 0, y = 0;
        if (v.b = r,
        v.e = i,
        r += "",
        "var(--" === (i += "").substring(0, 6) && (i = io(e, i.substring(4, i.indexOf(")")))),
        "auto" === i && (h = e.style[t],
        e.style[t] = i,
        i = io(e, t) || i,
        h ? e.style[t] = h : ig(e, t)),
        tE(a = [r, i]),
        r = a[0],
        i = a[1],
        l = r.match(es) || [],
        (i.match(es) || []).length) {
            for (; o = es.exec(i); )
                d = o[0],
                p = i.substring(_, o.index),
                c ? c = (c + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (c = 1),
                d !== (h = l[y++] || "") && (u = parseFloat(h) || 0,
                g = h.substr((u + "").length),
                "=" === d.charAt(1) && (d = eE(u, d) + g),
                f = parseFloat(d),
                m = d.substr((f + "").length),
                _ = es.lastIndex - m.length,
                m || (m = m || D.units[t] || g,
                _ === i.length && (i += m,
                v.e += m)),
                g !== m && (u = ib(e, t, h, m) || 0),
                v._pt = {
                    _next: v._pt,
                    p: p || 1 === y ? p : ",",
                    s: u,
                    c: f - u,
                    m: c && c < 4 || "zIndex" === t ? Math.round : 0
                });
            v.c = _ < i.length ? i.substring(_, i.length) : ""
        } else
            v.r = "display" === t && "none" === i ? r2 : r1;
        return eo.test(i) && (v.e = 0),
        this._pt = v,
        v
    }, iT = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, iS = function(e) {
        var t = e.split(" ")
          , r = t[0]
          , i = t[1] || "50%";
        return ("top" === r || "bottom" === r || "left" === i || "right" === i) && (e = r,
        r = i,
        i = e),
        t[0] = iT[r] || r,
        t[1] = iT[i] || i,
        t.join(" ")
    }, iC = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var r, i, n, s = t.t, a = s.style, o = t.u, l = s._gsap;
            if ("all" === o || !0 === o)
                a.cssText = "",
                i = 1;
            else
                for (n = (o = o.split(",")).length; --n > -1; )
                    r$[r = o[n]] && (i = 1,
                    r = "transformOrigin" === r ? ie : r7),
                    ig(s, r);
            i && (ig(s, r7),
            l && (l.svg && s.removeAttribute("transform"),
            a.scale = a.rotate = a.translate = "none",
            iM(s, 1),
            l.uncache = 1,
            ir(a)))
        }
    }, ik = {
        clearProps: function(e, t, r, i, n) {
            if ("isFromStart" !== n.data) {
                var s = e._pt = new rb(e._pt,t,r,0,0,iC);
                return s.u = i,
                s.pr = -10,
                s.tween = n,
                e._props.push(r),
                1
            }
        }
    }, iO = [1, 0, 0, 1, 0, 0], iP = {}, iz = function(e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
    }, iI = function(e) {
        var t = io(e, r7);
        return iz(t) ? iO : t.substr(7).match(en).map(ej)
    }, iR = function(e, t) {
        var r, i, n, s, a = e._gsap || ez(e), o = e.style, l = iI(e);
        return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(n = e.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? iO : l : (l !== iO || e.offsetParent || e === rN || a.svg || (n = o.display,
        o.display = "block",
        (r = e.parentNode) && (e.offsetParent || e.getBoundingClientRect().width) || (s = 1,
        i = e.nextElementSibling,
        rN.appendChild(e)),
        l = iI(e),
        n ? o.display = n : ig(e, "display"),
        s && (i ? r.insertBefore(e, i) : r ? r.appendChild(e) : rN.removeChild(e))),
        t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }, ij = function(e, t, r, i, n, s) {
        var a, o, l, u, c = e._gsap, h = n || iR(e, !0), d = c.xOrigin || 0, f = c.yOrigin || 0, p = c.xOffset || 0, m = c.yOffset || 0, g = h[0], v = h[1], _ = h[2], y = h[3], b = h[4], x = h[5], w = t.split(" "), T = parseFloat(w[0]) || 0, S = parseFloat(w[1]) || 0;
        r ? h !== iO && (o = g * y - v * _) && (l = y / o * T + -_ / o * S + (_ * x - y * b) / o,
        u = -v / o * T + g / o * S - (g * x - v * b) / o,
        T = l,
        S = u) : (T = (a = ip(e)).x + (~w[0].indexOf("%") ? T / 100 * a.width : T),
        S = a.y + (~(w[1] || w[0]).indexOf("%") ? S / 100 * a.height : S)),
        i || !1 !== i && c.smooth ? (c.xOffset = p + ((b = T - d) * g + (x = S - f) * _) - b,
        c.yOffset = m + (b * v + x * y) - x) : c.xOffset = c.yOffset = 0,
        c.xOrigin = T,
        c.yOrigin = S,
        c.smooth = !!i,
        c.origin = t,
        c.originIsAbsolute = !!r,
        e.style[ie] = "0px 0px",
        s && (iv(s, c, "xOrigin", d, T),
        iv(s, c, "yOrigin", f, S),
        iv(s, c, "xOffset", p, c.xOffset),
        iv(s, c, "yOffset", m, c.yOffset)),
        e.setAttribute("data-svg-origin", T + " " + S)
    }, iM = function(e, t) {
        var r = e._gsap || new tV(e);
        if ("x"in r && !t && !r.uncache)
            return r;
        var i, n, s, a, o, l, u, c, h, d, f, p, m, g, v, _, y, b, x, w, T, S, C, k, O, P, z, I, R, j, M, E, A = e.style, N = r.scaleX < 0, L = getComputedStyle(e), X = io(e, ie) || "0";
        return i = n = s = l = u = c = h = d = f = 0,
        a = o = 1,
        r.svg = !!(e.getCTM && im(e)),
        L.translate && (("none" !== L.translate || "none" !== L.scale || "none" !== L.rotate) && (A[r7] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[r7] ? L[r7] : "")),
        A.scale = A.rotate = A.translate = "none"),
        g = iR(e, r.svg),
        r.svg && (r.uncache ? (O = e.getBBox(),
        X = r.xOrigin - O.x + "px " + (r.yOrigin - O.y) + "px",
        k = "") : k = !t && e.getAttribute("data-svg-origin"),
        ij(e, k || X, !!k || r.originIsAbsolute, !1 !== r.smooth, g)),
        p = r.xOrigin || 0,
        m = r.yOrigin || 0,
        g !== iO && (b = g[0],
        x = g[1],
        w = g[2],
        T = g[3],
        i = S = g[4],
        n = C = g[5],
        6 === g.length ? (a = Math.sqrt(b * b + x * x),
        o = Math.sqrt(T * T + w * w),
        l = b || x ? rU(x, b) * rY : 0,
        (h = w || T ? rU(w, T) * rY + l : 0) && (o *= Math.abs(Math.cos(h * rW))),
        r.svg && (i -= p - (p * b + m * w),
        n -= m - (p * x + m * T))) : (E = g[6],
        j = g[7],
        z = g[8],
        I = g[9],
        R = g[10],
        M = g[11],
        i = g[12],
        n = g[13],
        s = g[14],
        u = (v = rU(E, R)) * rY,
        v && (k = S * (_ = Math.cos(-v)) + z * (y = Math.sin(-v)),
        O = C * _ + I * y,
        P = E * _ + R * y,
        z = -(S * y) + z * _,
        I = -(C * y) + I * _,
        R = -(E * y) + R * _,
        M = -(j * y) + M * _,
        S = k,
        C = O,
        E = P),
        c = (v = rU(-w, R)) * rY,
        v && (k = b * (_ = Math.cos(-v)) - z * (y = Math.sin(-v)),
        O = x * _ - I * y,
        P = w * _ - R * y,
        M = T * y + M * _,
        b = k,
        x = O,
        w = P),
        l = (v = rU(x, b)) * rY,
        v && (k = b * (_ = Math.cos(v)) + x * (y = Math.sin(v)),
        O = S * _ + C * y,
        x = x * _ - b * y,
        C = C * _ - S * y,
        b = k,
        S = O),
        u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0,
        c = 180 - c),
        a = ej(Math.sqrt(b * b + x * x + w * w)),
        o = ej(Math.sqrt(C * C + E * E)),
        h = Math.abs(v = rU(S, C)) > 2e-4 ? v * rY : 0,
        f = M ? 1 / (M < 0 ? -M : M) : 0),
        r.svg && (k = e.getAttribute("transform"),
        r.forceCSS = e.setAttribute("transform", "") || !iz(io(e, r7)),
        k && e.setAttribute("transform", k))),
        Math.abs(h) > 90 && 270 > Math.abs(h) && (N ? (a *= -1,
        h += l <= 0 ? 180 : -180,
        l += l <= 0 ? 180 : -180) : (o *= -1,
        h += h <= 0 ? 180 : -180)),
        t = t || r.uncache,
        r.x = i - ((r.xPercent = i && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + "px",
        r.y = n - ((r.yPercent = n && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + "px",
        r.z = s + "px",
        r.scaleX = ej(a),
        r.scaleY = ej(o),
        r.rotation = ej(l) + "deg",
        r.rotationX = ej(u) + "deg",
        r.rotationY = ej(c) + "deg",
        r.skewX = h + "deg",
        r.skewY = d + "deg",
        r.transformPerspective = f + "px",
        (r.zOrigin = parseFloat(X.split(" ")[2]) || !t && r.zOrigin || 0) && (A[ie] = iE(X)),
        r.xOffset = r.yOffset = 0,
        r.force3D = D.force3D,
        r.renderTransform = r.svg ? iX : rB ? iL : iN,
        r.uncache = 0,
        r
    }, iE = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, iA = function(e, t, r) {
        var i = tu(t);
        return ej(parseFloat(t) + parseFloat(ib(e, "x", r + "px", i))) + i
    }, iN = function(e, t) {
        t.z = "0px",
        t.rotationY = t.rotationX = "0deg",
        t.force3D = 0,
        iL(e, t)
    }, iD = "0deg", iL = function(e, t) {
        var r = t || this
          , i = r.xPercent
          , n = r.yPercent
          , s = r.x
          , a = r.y
          , o = r.z
          , l = r.rotation
          , u = r.rotationY
          , c = r.rotationX
          , h = r.skewX
          , d = r.skewY
          , f = r.scaleX
          , p = r.scaleY
          , m = r.transformPerspective
          , g = r.force3D
          , v = r.target
          , _ = r.zOrigin
          , y = ""
          , b = "auto" === g && e && 1 !== e || !0 === g;
        if (_ && (c !== iD || u !== iD)) {
            var x, w = parseFloat(u) * rW, T = Math.sin(w), S = Math.cos(w);
            s = iA(v, s, -(T * (x = Math.cos(w = parseFloat(c) * rW)) * _)),
            a = iA(v, a, -(-Math.sin(w) * _)),
            o = iA(v, o, -(S * x * _) + _)
        }
        "0px" !== m && (y += "perspective(" + m + ") "),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (b || "0px" !== s || "0px" !== a || "0px" !== o) && (y += "0px" !== o || b ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "),
        l !== iD && (y += "rotate(" + l + ") "),
        u !== iD && (y += "rotateY(" + u + ") "),
        c !== iD && (y += "rotateX(" + c + ") "),
        (h !== iD || d !== iD) && (y += "skew(" + h + ", " + d + ") "),
        (1 !== f || 1 !== p) && (y += "scale(" + f + ", " + p + ") "),
        v.style[r7] = y || "translate(0, 0)"
    }, iX = function(e, t) {
        var r, i, n, s, a, o = t || this, l = o.xPercent, u = o.yPercent, c = o.x, h = o.y, d = o.rotation, f = o.skewX, p = o.skewY, m = o.scaleX, g = o.scaleY, v = o.target, _ = o.xOrigin, y = o.yOrigin, b = o.xOffset, x = o.yOffset, w = o.forceCSS, T = parseFloat(c), S = parseFloat(h);
        d = parseFloat(d),
        f = parseFloat(f),
        (p = parseFloat(p)) && (f += p = parseFloat(p),
        d += p),
        d || f ? (d *= rW,
        f *= rW,
        r = Math.cos(d) * m,
        i = Math.sin(d) * m,
        n = -(Math.sin(d - f) * g),
        s = Math.cos(d - f) * g,
        f && (p *= rW,
        n *= a = Math.sqrt(1 + (a = Math.tan(f - p)) * a),
        s *= a,
        p && (r *= a = Math.sqrt(1 + (a = Math.tan(p)) * a),
        i *= a)),
        r = ej(r),
        i = ej(i),
        n = ej(n),
        s = ej(s)) : (r = m,
        s = g,
        i = n = 0),
        (T && !~(c + "").indexOf("px") || S && !~(h + "").indexOf("px")) && (T = ib(v, "x", c, "px"),
        S = ib(v, "y", h, "px")),
        (_ || y || b || x) && (T = ej(T + _ - (_ * r + y * n) + b),
        S = ej(S + y - (_ * i + y * s) + x)),
        (l || u) && (T = ej(T + l / 100 * (a = v.getBBox()).width),
        S = ej(S + u / 100 * a.height)),
        a = "matrix(" + r + "," + i + "," + n + "," + s + "," + T + "," + S + ")",
        v.setAttribute("transform", a),
        w && (v.style[r7] = a)
    }, iF = function(e, t, r, i, n) {
        var s, a, o = U(n), l = parseFloat(n) * (o && ~n.indexOf("rad") ? rY : 1) - i, u = i + l + "deg";
        return o && ("short" === (s = n.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360),
        "cw" === s && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === s && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))),
        e._pt = a = new rb(e._pt,t,r,i,l,rK),
        a.e = u,
        a.u = "deg",
        e._props.push(r),
        a
    }, iB = function(e, t) {
        for (var r in t)
            e[r] = t[r];
        return e
    }, i$ = function(e, t, r) {
        var i, n, s, a, o, l, u, c = iB({}, r._gsap), h = r.style;
        for (n in c.svg ? (s = r.getAttribute("transform"),
        r.setAttribute("transform", ""),
        h[r7] = t,
        i = iM(r, 1),
        ig(r, r7),
        r.setAttribute("transform", s)) : (s = getComputedStyle(r)[r7],
        h[r7] = t,
        i = iM(r, 1),
        h[r7] = s),
        r$)
            (s = c[n]) !== (a = i[n]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) && (o = tu(s) !== (u = tu(a)) ? ib(r, n, s, u) : parseFloat(s),
            l = parseFloat(a),
            e._pt = new rb(e._pt,i,n,o,l - o,rV),
            e._pt.u = u || 0,
            e._props.push(n));
        iB(i, c)
    };
    eR("padding,margin,Width,Radius", function(e, t) {
        var r = "Right"
          , i = "Bottom"
          , n = "Left"
          , s = (t < 3 ? ["Top", r, i, n] : ["Top" + n, "Top" + r, i + r, i + n]).map(function(r) {
            return t < 2 ? e + r : "border" + r + e
        });
        ik[t > 1 ? "border" + e : e] = function(e, t, r, i, n) {
            var a, o;
            if (arguments.length < 4)
                return 5 === (o = (a = s.map(function(t) {
                    return ix(e, t, r)
                })).join(" ")).split(a[0]).length ? a[0] : o;
            a = (i + "").split(" "),
            o = {},
            s.forEach(function(e, t) {
                return o[e] = a[t] = a[t] || a[(t - 1) / 2 | 0]
            }),
            e.init(t, o, n)
        }
    });
    var iY = {
        name: "css",
        register: ic,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, t, r, i, n) {
            var s, a, o, l, u, c, h, d, f, p, m, g, v, _, y, b, x, w = this._props, T = e.style, S = r.vars.startAt;
            for (h in rD || ic(),
            this.styles = this.styles || is(e),
            b = this.styles.props,
            this.tween = r,
            t)
                if ("autoRound" !== h && (a = t[h],
                !(eT[h] && t9(h, t, r, i, e, n)))) {
                    if (u = typeof a,
                    c = ik[h],
                    "function" === u && (u = typeof (a = a.call(r, i, e, n))),
                    "string" === u && ~a.indexOf("random(") && (a = tb(a)),
                    c)
                        c(this, e, h, a, r) && (y = 1);
                    else if ("--" === h.substr(0, 2))
                        s = (getComputedStyle(e).getPropertyValue(h) + "").trim(),
                        a += "",
                        tj.lastIndex = 0,
                        !tj.test(s) && (d = tu(s),
                        (f = tu(a)) ? d !== f && (s = ib(e, h, s, f) + f) : d && (a += d)),
                        this.add(T, "setProperty", s, a, i, n, 0, 0, h),
                        w.push(h),
                        b.push(h, 0, T[h]);
                    else if ("undefined" !== u) {
                        if (S && h in S ? (U(s = "function" == typeof S[h] ? S[h].call(r, i, e, n) : S[h]) && ~s.indexOf("random(") && (s = tb(s)),
                        tu(s + "") || "auto" === s || (s += D.units[h] || tu(ix(e, h)) || ""),
                        "=" === (s + "").charAt(1) && (s = ix(e, h))) : s = ix(e, h),
                        l = parseFloat(s),
                        (p = "string" === u && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)),
                        o = parseFloat(a),
                        h in rZ && ("autoAlpha" === h && (1 === l && "hidden" === ix(e, "visibility") && o && (l = 0),
                        b.push("visibility", 0, T.visibility),
                        iv(this, T, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                        "scale" !== h && "transform" !== h && ~(h = rZ[h]).indexOf(",") && (h = h.split(",")[0])),
                        m = h in r$) {
                            if (this.styles.save(h),
                            x = a,
                            "string" === u && "var(--" === a.substring(0, 6)) {
                                if ("calc(" === (a = io(e, a.substring(4, a.indexOf(")")))).substring(0, 5)) {
                                    var C = e.style.perspective;
                                    e.style.perspective = a,
                                    a = io(e, "perspective"),
                                    C ? e.style.perspective = C : ig(e, "perspective")
                                }
                                o = parseFloat(a)
                            }
                            if (g || ((v = e._gsap).renderTransform && !t.parseTransform || iM(e, t.parseTransform),
                            _ = !1 !== t.smoothOrigin && v.smooth,
                            (g = this._pt = new rb(this._pt,T,r7,0,1,v.renderTransform,v,0,-1)).dep = 1),
                            "scale" === h)
                                this._pt = new rb(this._pt,v,"scaleY",v.scaleY,(p ? eE(v.scaleY, p + o) : o) - v.scaleY || 0,rV),
                                this._pt.u = 0,
                                w.push("scaleY", h),
                                h += "X";
                            else if ("transformOrigin" === h) {
                                b.push(ie, 0, T[ie]),
                                a = iS(a),
                                v.svg ? ij(e, a, 0, _, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && iv(this, v, "zOrigin", v.zOrigin, f),
                                iv(this, T, h, iE(s), iE(a)));
                                continue
                            } else if ("svgOrigin" === h) {
                                ij(e, a, 1, _, 0, this);
                                continue
                            } else if (h in iP) {
                                iF(this, v, h, l, p ? eE(l, p + a) : a);
                                continue
                            } else if ("smoothOrigin" === h) {
                                iv(this, v, "smooth", v.smooth, a);
                                continue
                            } else if ("force3D" === h) {
                                v[h] = a;
                                continue
                            } else if ("transform" === h) {
                                i$(this, a, e);
                                continue
                            }
                        } else
                            h in T || (h = iu(h) || h);
                        if (m || (o || 0 === o) && (l || 0 === l) && !rq.test(a) && h in T)
                            d = (s + "").substr((l + "").length),
                            o || (o = 0),
                            f = tu(a) || (h in D.units ? D.units[h] : d),
                            d !== f && (l = ib(e, h, s, f)),
                            this._pt = new rb(this._pt,m ? v : T,h,l,(p ? eE(l, p + o) : o) - l,!m && ("px" === f || "zIndex" === h) && !1 !== t.autoRound ? r0 : rV),
                            this._pt.u = f || 0,
                            m && x !== a ? (this._pt.b = s,
                            this._pt.e = x,
                            this._pt.r = rJ) : d !== f && "%" !== f && (this._pt.b = s,
                            this._pt.r = rQ);
                        else if (h in T)
                            iw.call(this, e, h, s, p ? p + a : a);
                        else if (h in e)
                            this.add(e, h, s || e[h], p ? p + a : a, i, n);
                        else if ("parseTransform" !== h) {
                            ef(h, a);
                            continue
                        }
                        m || (h in T ? b.push(h, 0, T[h]) : "function" == typeof e[h] ? b.push(h, 2, e[h]()) : b.push(h, 1, s || e[h])),
                        w.push(h)
                    }
                }
            y && ry(this)
        },
        render: function(e, t) {
            if (t.tween._time || !rF())
                for (var r = t._pt; r; )
                    r.r(e, r.d),
                    r = r._next;
            else
                t.styles.revert()
        },
        get: ix,
        aliases: rZ,
        getSetter: function(e, t, r) {
            var i = rZ[t];
            return i && 0 > i.indexOf(",") && (t = i),
            t in r$ && t !== ie && (e._gsap.x || ix(e, "x")) ? r && rX === r ? "scale" === t ? r8 : r6 : (rX = r || {},
            "scale" === t ? r4 : r9) : e.style && !q(e.style[t]) ? r5 : ~t.indexOf("-") ? r3 : rh(e, t)
        },
        core: {
            _removeProperty: ig,
            _getMatrix: iR
        }
    };
    rE.utils.checkPrefix = iu,
    rE.core.getStyleSaver = is,
    iZ = eR("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (iq = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
        r$[e] = 1
    }),
    eR(iq, function(e) {
        D.units[e] = "deg",
        iP[e] = 1
    }),
    rZ[iZ[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + iq,
    eR("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
        var t = e.split(":");
        rZ[t[1]] = iZ[t[0]]
    }),
    eR("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
        D.units[e] = "px"
    }),
    rE.registerPlugin(iY);
    var iW = rE.registerPlugin(iY) || rE;
    iW.core.Tween;
    let iU = ({text: e, as: i="div", typingSpeed: n=50, initialDelay: s=0, pauseDuration: a=2e3, deletingSpeed: o=30, loop: l=!0, className: u="", showCursor: c=!0, hideCursorWhileTyping: h=!1, cursorCharacter: d="|", cursorClassName: f="", cursorBlinkDuration: p=.5, textColors: m=[], variableSpeed: g, onSentenceComplete: v, startOnVisible: _=!1, reverseMode: y=!1, ...b}) => {
        let[x,w] = (0,
        r.useState)("")
          , [T,S] = (0,
        r.useState)(0)
          , [C,k] = (0,
        r.useState)(!1)
          , [O,P] = (0,
        r.useState)(0)
          , [z,I] = (0,
        r.useState)(!_)
          , R = (0,
        r.useRef)(null)
          , j = (0,
        r.useRef)(null)
          , M = (0,
        r.useMemo)( () => Array.isArray(e) ? e : [e], [e])
          , E = (0,
        r.useCallback)( () => {
            if (!g)
                return n;
            let {min: e, max: t} = g;
            return Math.random() * (t - e) + e
        }
        , [g, n]);
        (0,
        r.useEffect)( () => {
            if (!_ || !j.current)
                return;
            let e = new IntersectionObserver(e => {
                e.forEach(e => {
                    e.isIntersecting && I(!0)
                }
                )
            }
            ,{
                threshold: .1
            });
            return e.observe(j.current),
            () => e.disconnect()
        }
        , [_]),
        (0,
        r.useEffect)( () => {
            c && R.current && (iW.set(R.current, {
                opacity: 1
            }),
            iW.to(R.current, {
                opacity: 0,
                duration: p,
                repeat: -1,
                yoyo: !0,
                ease: "power2.inOut"
            }))
        }
        , [c, p]),
        (0,
        r.useEffect)( () => {
            let e;
            if (!z)
                return;
            let t = M[O]
              , r = y ? t.split("").reverse().join("") : t
              , i = () => {
                if (C)
                    if ("" === x) {
                        if (k(!1),
                        O === M.length - 1 && !l)
                            return;
                        v && v(M[O], O),
                        P(e => (e + 1) % M.length),
                        S(0),
                        e = setTimeout( () => {}
                        , a)
                    } else
                        e = setTimeout( () => {
                            w(e => e.slice(0, -1))
                        }
                        , o);
                else if (T < r.length)
                    e = setTimeout( () => {
                        w(e => e + r[T]),
                        S(e => e + 1)
                    }
                    , g ? E() : n);
                else if (M.length >= 1) {
                    if (!l && O === M.length - 1)
                        return;
                    e = setTimeout( () => {
                        k(!0)
                    }
                    , a)
                }
            }
            ;
            return 0 !== T || C || "" !== x ? i() : e = setTimeout(i, s),
            () => clearTimeout(e)
        }
        , [T, x, C, n, o, a, M, O, l, s, z, y, g, v]);
        let A = h && (T < M[O].length || C);
        return (0,
        r.createElement)(i, {
            ref: j,
            className: `text-type ${u}`,
            ...b
        }, (0,
        t.jsx)("span", {
            className: "text-type__content",
            style: {
                color: ( () => {
                    if (0 !== m.length)
                        return m[O % m.length]
                }
                )() || "inherit"
            },
            children: x
        }), c && (0,
        t.jsx)("span", {
            ref: R,
            className: `text-type__cursor ${f} ${A ? "text-type__cursor--hidden" : ""}`,
            children: d
        }))
    }
      , iG = () => (0,
    t.jsxs)("div", {
        className: "jsx-957dc402e3dd4b73 relative w-full aspect-[16/10] md:h-screen flex items-center justify-center overflow-hidden bg-slate-900 transition-all duration-500",
        children: [(0,
        t.jsxs)("div", {
            className: "jsx-957dc402e3dd4b73 absolute inset-0 z-0",
            children: [(0,
            t.jsx)(a.default, {
                src: "/hero.jpeg",
                alt: "Angkatan 2026",
                fill: !0,
                className: "object-contain md:object-cover opacity-70 md:opacity-60  transition-transform duration-1000 animate-slow-zoom",
                priority: !0,
                quality: 100
            }), (0,
            t.jsx)("div", {
                className: "jsx-957dc402e3dd4b73 absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-slate-900"
            })]
        }), (0,
        t.jsxs)("div", {
            className: "jsx-957dc402e3dd4b73 relative z-10 flex flex-col items-center text-center px-6 max-w-4xl",
            children: [(0,
            t.jsx)("div", {
                className: "jsx-957dc402e3dd4b73 relative inline-block mb-2 md:mb-4 scale-110 md:scale-110 origin-left",
                children: (0,
                t.jsx)(l, {
                    sentence: "XII STUDENT",
                    manualMode: !1,
                    blurAmount: 3,
                    borderColor: "#5227FF",
                    animationDuration: .5,
                    pauseBetweenAnimations: 1
                })
            }), (0,
            t.jsx)("div", {
                className: "jsx-957dc402e3dd4b73 text-[10px] sm:text-xs md:text-xl font-medium text-slate-300 tracking-wide opacity-90 drop-shadow-lg max-w-[250px] md:max-w-none",
                children: (0,
                t.jsx)(iU, {
                    text: ["Selamat Datang Di Web Kenangan Kelas XII TKJ & PH"],
                    typingSpeed: 75,
                    pauseDuration: 1500,
                    showCursor: !0,
                    cursorCharacter: "_",
                    deletingSpeed: 50
                })
            })]
        }), (0,
        t.jsx)(s.default, {
            id: "957dc402e3dd4b73",
            children: "@keyframes slow-zoom{0%{transform:scale(1)}to{transform:scale(1.1)}}.animate-slow-zoom{animation:20s linear infinite alternate slow-zoom}"
        })]
    })
      , iH = ({text: e="", delay: i=200, className: n="", animateBy: s="words", direction: a="top", threshold: l=.1, rootMargin: u="0px", animationFrom: c, animationTo: h, easing: d=e => e, onAnimationComplete: f, stepDuration: p=.35}) => {
        let m = "words" === s ? e.split(" ") : e.split("")
          , [g,v] = (0,
        r.useState)(!1)
          , _ = (0,
        r.useRef)(null);
        (0,
        r.useEffect)( () => {
            if (!_.current)
                return;
            let e = new IntersectionObserver( ([t]) => {
                t.isIntersecting && (v(!0),
                e.unobserve(_.current))
            }
            ,{
                threshold: l,
                rootMargin: u
            });
            return e.observe(_.current),
            () => e.disconnect()
        }
        , [l, u]);
        let y = (0,
        r.useMemo)( () => "top" === a ? {
            filter: "blur(10px)",
            opacity: 0,
            y: -50
        } : {
            filter: "blur(10px)",
            opacity: 0,
            y: 50
        }, [a])
          , b = (0,
        r.useMemo)( () => [{
            filter: "blur(5px)",
            opacity: .5,
            y: "top" === a ? 5 : -5
        }, {
            filter: "blur(0px)",
            opacity: 1,
            y: 0
        }], [a])
          , x = c ?? y
          , w = h ?? b
          , T = w.length + 1
          , S = p * (T - 1)
          , C = Array.from({
            length: T
        }, (e, t) => 1 === T ? 0 : t / (T - 1));
        return (0,
        t.jsx)("p", {
            ref: _,
            className: n,
            style: {
                display: "flex",
                flexWrap: "wrap"
            },
            children: m.map( (e, r) => {
                let n, a, l = (n = new Set([...Object.keys(x), ...w.flatMap(e => Object.keys(e))]),
                a = {},
                n.forEach(e => {
                    a[e] = [x[e], ...w.map(t => t[e])]
                }
                ),
                a);
                return (0,
                t.jsxs)(o.motion.span, {
                    initial: x,
                    animate: g ? l : x,
                    transition: {
                        duration: S,
                        times: C,
                        delay: r * i / 1e3,
                        ease: d
                    },
                    onAnimationComplete: r === m.length - 1 ? f : void 0,
                    style: {
                        display: "inline-block",
                        willChange: "transform, filter, opacity"
                    },
                    children: [" " === e ? " " : e, "words" === s && r < m.length - 1 && " "]
                }, r)
            }
            )
        })
    }
    ;
    var iq, iZ, iV, iK, iQ, iJ, i0, i1, i2, i5, i3, i6, i8, i4, i9, i7 = function() {
        return iV || "u" > typeof window && (iV = window.gsap) && iV.registerPlugin && iV
    }, ne = 1, nt = [], nr = [], ni = [], nn = Date.now, ns = function(e, t) {
        return t
    }, na = function() {
        var e = i3.core
          , t = e.bridge || {}
          , r = e._scrollers
          , i = e._proxies;
        r.push.apply(r, nr),
        i.push.apply(i, ni),
        nr = r,
        ni = i,
        ns = function(e, r) {
            return t[e](r)
        }
    }, no = function(e, t) {
        return ~ni.indexOf(e) && ni[ni.indexOf(e) + 1][t]
    }, nl = function(e) {
        return !!~i6.indexOf(e)
    }, nu = function(e, t, r, i, n) {
        return e.addEventListener(t, r, {
            passive: !1 !== i,
            capture: !!n
        })
    }, nc = function(e, t, r, i) {
        return e.removeEventListener(t, r, !!i)
    }, nh = "scrollLeft", nd = "scrollTop", nf = function() {
        return i8 && i8.isPressed || nr.cache++
    }, np = function(e, t) {
        var r = function r(i) {
            if (i || 0 === i) {
                ne && (iQ.history.scrollRestoration = "manual");
                var n = i8 && i8.isPressed;
                e(i = r.v = Math.round(i) || (i8 && i8.iOS ? 1 : 0)),
                r.cacheID = nr.cache,
                n && ns("ss", i)
            } else
                (t || nr.cache !== r.cacheID || ns("ref")) && (r.cacheID = nr.cache,
                r.v = e());
            return r.v + r.offset
        };
        return r.offset = 0,
        e && r
    }, nm = {
        s: nh,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: np(function(e) {
            return arguments.length ? iQ.scrollTo(e, ng.sc()) : iQ.pageXOffset || iJ[nh] || i0[nh] || i1[nh] || 0
        })
    }, ng = {
        s: nd,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: nm,
        sc: np(function(e) {
            return arguments.length ? iQ.scrollTo(nm.sc(), e) : iQ.pageYOffset || iJ[nd] || i0[nd] || i1[nd] || 0
        })
    }, nv = function(e, t) {
        return (t && t._ctx && t._ctx.selector || iV.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== iV.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }, n_ = function(e, t) {
        for (var r = t.length; r--; )
            if (t[r] === e || t[r].contains(e))
                return !0;
        return !1
    }, ny = function(e, t) {
        var r = t.s
          , i = t.sc;
        nl(e) && (e = iJ.scrollingElement || i0);
        var n = nr.indexOf(e)
          , s = i === ng.sc ? 1 : 2;
        ~n || (n = nr.push(e) - 1),
        nr[n + s] || nu(e, "scroll", nf);
        var a = nr[n + s]
          , o = a || (nr[n + s] = np(no(e, r), !0) || (nl(e) ? i : np(function(t) {
            return arguments.length ? e[r] = t : e[r]
        })));
        return o.target = e,
        a || (o.smooth = "smooth" === iV.getProperty(e, "scrollBehavior")),
        o
    }, nb = function(e, t, r) {
        var i = e
          , n = e
          , s = nn()
          , a = s
          , o = t || 50
          , l = Math.max(500, 3 * o)
          , u = function(e, t) {
            var l = nn();
            t || l - s > o ? (n = i,
            i = e,
            a = s,
            s = l) : r ? i += e : i = n + (e - n) / (l - a) * (s - a)
        };
        return {
            update: u,
            reset: function() {
                n = i = r ? 0 : i,
                a = s = 0
            },
            getVelocity: function(e) {
                var t = a
                  , o = n
                  , c = nn();
                return (e || 0 === e) && e !== i && u(e),
                s === a || c - a > l ? 0 : (i + (r ? o : -o)) / ((r ? c : s) - t) * 1e3
            }
        }
    }, nx = function(e, t) {
        return t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
    }, nw = function(e) {
        var t = Math.max.apply(Math, e)
          , r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }, nT = function() {
        (i3 = iV.core.globals().ScrollTrigger) && i3.core && na()
    }, nS = function(e) {
        return iV = e || i7(),
        !iK && iV && "u" > typeof document && document.body && (iQ = window,
        i0 = (iJ = document).documentElement,
        i1 = iJ.body,
        i6 = [iQ, iJ, i0, i1],
        iV.utils.clamp,
        i9 = iV.core.context || function() {}
        ,
        i5 = "onpointerenter"in i1 ? "pointer" : "mouse",
        i2 = nC.isTouch = iQ.matchMedia && iQ.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : 2 * ("ontouchstart"in iQ || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0),
        i4 = nC.eventTypes = ("ontouchstart"in i0 ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown"in i0) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(","),
        setTimeout(function() {
            return ne = 0
        }, 500),
        nT(),
        iK = 1),
        iK
    };
    nm.op = ng,
    nr.cache = 0;
    var nC = function() {
        var e;
        function t(e) {
            this.init(e)
        }
        return t.prototype.init = function(e) {
            iK || nS(iV) || console.warn("Please gsap.registerPlugin(Observer)"),
            i3 || nT();
            var t = e.tolerance
              , r = e.dragMinimum
              , i = e.type
              , n = e.target
              , s = e.lineHeight
              , a = e.debounce
              , o = e.preventDefault
              , l = e.onStop
              , u = e.onStopDelay
              , c = e.ignore
              , h = e.wheelSpeed
              , d = e.event
              , f = e.onDragStart
              , p = e.onDragEnd
              , m = e.onDrag
              , g = e.onPress
              , v = e.onRelease
              , _ = e.onRight
              , y = e.onLeft
              , b = e.onUp
              , x = e.onDown
              , w = e.onChangeX
              , T = e.onChangeY
              , S = e.onChange
              , C = e.onToggleX
              , k = e.onToggleY
              , O = e.onHover
              , P = e.onHoverEnd
              , z = e.onMove
              , I = e.ignoreCheck
              , R = e.isNormalizer
              , j = e.onGestureStart
              , M = e.onGestureEnd
              , E = e.onWheel
              , A = e.onEnable
              , N = e.onDisable
              , D = e.onClick
              , L = e.scrollSpeed
              , X = e.capture
              , F = e.allowClicks
              , B = e.lockAxis
              , $ = e.onLockAxis;
            this.target = n = nv(n) || i0,
            this.vars = e,
            c && (c = iV.utils.toArray(c)),
            t = t || 1e-9,
            r = r || 0,
            h = h || 1,
            L = L || 1,
            i = i || "wheel,touch,pointer",
            a = !1 !== a,
            s || (s = parseFloat(iQ.getComputedStyle(i1).lineHeight) || 22);
            var Y, W, U, G, H, q, Z, V = this, K = 0, Q = 0, J = e.passive || !o && !1 !== e.passive, ee = ny(n, nm), et = ny(n, ng), er = ee(), ei = et(), en = ~i.indexOf("touch") && !~i.indexOf("pointer") && "pointerdown" === i4[0], es = nl(n), ea = n.ownerDocument || iJ, eo = [0, 0, 0], el = [0, 0, 0], eu = 0, ec = function() {
                return eu = nn()
            }, eh = function(e, t) {
                return (V.event = e) && c && n_(e.target, c) || t && en && "touch" !== e.pointerType || I && I(e, t)
            }, ed = function() {
                var e = V.deltaX = nw(eo)
                  , r = V.deltaY = nw(el)
                  , i = Math.abs(e) >= t
                  , n = Math.abs(r) >= t;
                S && (i || n) && S(V, e, r, eo, el),
                i && (_ && V.deltaX > 0 && _(V),
                y && V.deltaX < 0 && y(V),
                w && w(V),
                C && V.deltaX < 0 != K < 0 && C(V),
                K = V.deltaX,
                eo[0] = eo[1] = eo[2] = 0),
                n && (x && V.deltaY > 0 && x(V),
                b && V.deltaY < 0 && b(V),
                T && T(V),
                k && V.deltaY < 0 != Q < 0 && k(V),
                Q = V.deltaY,
                el[0] = el[1] = el[2] = 0),
                (G || U) && (z && z(V),
                U && (f && 1 === U && f(V),
                m && m(V),
                U = 0),
                G = !1),
                q && (q = !1,
                1) && $ && $(V),
                H && (E(V),
                H = !1),
                Y = 0
            }, ef = function(e, t, r) {
                eo[r] += e,
                el[r] += t,
                V._vx.update(e),
                V._vy.update(t),
                a ? Y || (Y = requestAnimationFrame(ed)) : ed()
            }, ep = function(e, t) {
                B && !Z && (V.axis = Z = Math.abs(e) > Math.abs(t) ? "x" : "y",
                q = !0),
                "y" !== Z && (eo[2] += e,
                V._vx.update(e, !0)),
                "x" !== Z && (el[2] += t,
                V._vy.update(t, !0)),
                a ? Y || (Y = requestAnimationFrame(ed)) : ed()
            }, em = function(e) {
                if (!eh(e, 1)) {
                    var t = (e = nx(e, o)).clientX
                      , i = e.clientY
                      , n = t - V.x
                      , s = i - V.y
                      , a = V.isDragging;
                    V.x = t,
                    V.y = i,
                    (a || (n || s) && (Math.abs(V.startX - t) >= r || Math.abs(V.startY - i) >= r)) && (U || (U = a ? 2 : 1),
                    a || (V.isDragging = !0),
                    ep(n, s))
                }
            }, eg = V.onPress = function(e) {
                eh(e, 1) || e && e.button || (V.axis = Z = null,
                W.pause(),
                V.isPressed = !0,
                e = nx(e),
                K = Q = 0,
                V.startX = V.x = e.clientX,
                V.startY = V.y = e.clientY,
                V._vx.reset(),
                V._vy.reset(),
                nu(R ? n : ea, i4[1], em, J, !0),
                V.deltaX = V.deltaY = 0,
                g && g(V))
            }
            , ev = V.onRelease = function(e) {
                if (!eh(e, 1)) {
                    nc(R ? n : ea, i4[1], em, !0);
                    var t = !isNaN(V.y - V.startY)
                      , r = V.isDragging
                      , i = r && (Math.abs(V.x - V.startX) > 3 || Math.abs(V.y - V.startY) > 3)
                      , s = nx(e);
                    !i && t && (V._vx.reset(),
                    V._vy.reset(),
                    o && F && iV.delayedCall(.08, function() {
                        if (nn() - eu > 300 && !e.defaultPrevented) {
                            if (e.target.click)
                                e.target.click();
                            else if (ea.createEvent) {
                                var t = ea.createEvent("MouseEvents");
                                t.initMouseEvent("click", !0, !0, iQ, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null),
                                e.target.dispatchEvent(t)
                            }
                        }
                    })),
                    V.isDragging = V.isGesturing = V.isPressed = !1,
                    l && r && !R && W.restart(!0),
                    U && ed(),
                    p && r && p(V),
                    v && v(V, i)
                }
            }
            , e_ = function(e) {
                return e.touches && e.touches.length > 1 && (V.isGesturing = !0) && j(e, V.isDragging)
            }, ey = function() {
                return V.isGesturing = !1,
                M(V)
            }, eb = function(e) {
                if (!eh(e)) {
                    var t = ee()
                      , r = et();
                    ef((t - er) * L, (r - ei) * L, 1),
                    er = t,
                    ei = r,
                    l && W.restart(!0)
                }
            }, ex = function(e) {
                if (!eh(e)) {
                    e = nx(e, o),
                    E && (H = !0);
                    var t = (1 === e.deltaMode ? s : 2 === e.deltaMode ? iQ.innerHeight : 1) * h;
                    ef(e.deltaX * t, e.deltaY * t, 0),
                    l && !R && W.restart(!0)
                }
            }, ew = function(e) {
                if (!eh(e)) {
                    var t = e.clientX
                      , r = e.clientY
                      , i = t - V.x
                      , n = r - V.y;
                    V.x = t,
                    V.y = r,
                    G = !0,
                    l && W.restart(!0),
                    (i || n) && ep(i, n)
                }
            }, eT = function(e) {
                V.event = e,
                O(V)
            }, eS = function(e) {
                V.event = e,
                P(V)
            }, eC = function(e) {
                return eh(e) || nx(e, o) && D(V)
            };
            W = V._dc = iV.delayedCall(u || .25, function() {
                V._vx.reset(),
                V._vy.reset(),
                W.pause(),
                l && l(V)
            }).pause(),
            V.deltaX = V.deltaY = 0,
            V._vx = nb(0, 50, !0),
            V._vy = nb(0, 50, !0),
            V.scrollX = ee,
            V.scrollY = et,
            V.isDragging = V.isGesturing = V.isPressed = !1,
            i9(this),
            V.enable = function(e) {
                return !V.isEnabled && (nu(es ? ea : n, "scroll", nf),
                i.indexOf("scroll") >= 0 && nu(es ? ea : n, "scroll", eb, J, X),
                i.indexOf("wheel") >= 0 && nu(n, "wheel", ex, J, X),
                (i.indexOf("touch") >= 0 && i2 || i.indexOf("pointer") >= 0) && (nu(n, i4[0], eg, J, X),
                nu(ea, i4[2], ev),
                nu(ea, i4[3], ev),
                F && nu(n, "click", ec, !0, !0),
                D && nu(n, "click", eC),
                j && nu(ea, "gesturestart", e_),
                M && nu(ea, "gestureend", ey),
                O && nu(n, i5 + "enter", eT),
                P && nu(n, i5 + "leave", eS),
                z && nu(n, i5 + "move", ew)),
                V.isEnabled = !0,
                V.isDragging = V.isGesturing = V.isPressed = G = U = !1,
                V._vx.reset(),
                V._vy.reset(),
                er = ee(),
                ei = et(),
                e && e.type && eg(e),
                A && A(V)),
                V
            }
            ,
            V.disable = function() {
                V.isEnabled && (nt.filter(function(e) {
                    return e !== V && nl(e.target)
                }).length || nc(es ? ea : n, "scroll", nf),
                V.isPressed && (V._vx.reset(),
                V._vy.reset(),
                nc(R ? n : ea, i4[1], em, !0)),
                nc(es ? ea : n, "scroll", eb, X),
                nc(n, "wheel", ex, X),
                nc(n, i4[0], eg, X),
                nc(ea, i4[2], ev),
                nc(ea, i4[3], ev),
                nc(n, "click", ec, !0),
                nc(n, "click", eC),
                nc(ea, "gesturestart", e_),
                nc(ea, "gestureend", ey),
                nc(n, i5 + "enter", eT),
                nc(n, i5 + "leave", eS),
                nc(n, i5 + "move", ew),
                V.isEnabled = V.isPressed = V.isDragging = !1,
                N && N(V))
            }
            ,
            V.kill = V.revert = function() {
                V.disable();
                var e = nt.indexOf(V);
                e >= 0 && nt.splice(e, 1),
                i8 === V && (i8 = 0)
            }
            ,
            nt.push(V),
            R && nl(n) && (i8 = V),
            V.enable(d)
        }
        ,
        e = [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }],
        function(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }(t.prototype, e),
        t
    }();
    nC.version = "3.14.2",
    nC.create = function(e) {
        return new nC(e)
    }
    ,
    nC.register = nS,
    nC.getAll = function() {
        return nt.slice()
    }
    ,
    nC.getById = function(e) {
        return nt.filter(function(t) {
            return t.vars.id === e
        })[0]
    }
    ,
    i7() && iV.registerPlugin(nC);
    var nk, nO, nP, nz, nI, nR, nj, nM, nE, nA, nN, nD, nL, nX, nF, nB, n$, nY, nW, nU, nG, nH, nq, nZ, nV, nK, nQ, nJ, n0, n1, n2, n5, n3, n6, n8, n4, n9, n7, se = 1, st = Date.now, sr = st(), si = 0, sn = 0, ss = function(e, t, r) {
        var i = sy(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
        return r["_" + t + "Clamp"] = i,
        i ? e.substr(6, e.length - 7) : e
    }, sa = function(e, t) {
        return t && (!sy(e) || "clamp(" !== e.substr(0, 6)) ? "clamp(" + e + ")" : e
    }, so = function() {
        return nX = 1
    }, sl = function() {
        return nX = 0
    }, su = function(e) {
        return e
    }, sc = function(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }, sh = function() {
        return "u" > typeof window
    }, sd = function() {
        return nk || sh() && (nk = window.gsap) && nk.registerPlugin && nk
    }, sf = function(e) {
        return !!~nj.indexOf(e)
    }, sp = function(e) {
        return ("Height" === e ? n2 : nP["inner" + e]) || nI["client" + e] || nR["client" + e]
    }, sm = function(e) {
        return no(e, "getBoundingClientRect") || (sf(e) ? function() {
            return aw.width = nP.innerWidth,
            aw.height = n2,
            aw
        }
        : function() {
            return sB(e)
        }
        )
    }, sg = function(e, t, r) {
        var i = r.d
          , n = r.d2
          , s = r.a;
        return (s = no(e, "getBoundingClientRect")) ? function() {
            return s()[i]
        }
        : function() {
            return (t ? sp(n) : e["client" + n]) || 0
        }
    }, sv = function(e, t) {
        var r = t.s
          , i = t.d2
          , n = t.d
          , s = t.a;
        return Math.max(0, (s = no(e, r = "scroll" + i)) ? s() - sm(e)()[n] : sf(e) ? (nI[r] || nR[r]) - sp(i) : e[r] - e["offset" + i])
    }, s_ = function(e, t) {
        for (var r = 0; r < nW.length; r += 3)
            (!t || ~t.indexOf(nW[r + 1])) && e(nW[r], nW[r + 1], nW[r + 2])
    }, sy = function(e) {
        return "string" == typeof e
    }, sb = function(e) {
        return "function" == typeof e
    }, sx = function(e) {
        return "number" == typeof e
    }, sw = function(e) {
        return "object" == typeof e
    }, sT = function(e, t, r) {
        return e && e.progress(+!t) && r && e.pause()
    }, sS = function(e, t) {
        if (e.enabled) {
            var r = e._ctx ? e._ctx.add(function() {
                return t(e)
            }) : t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }, sC = Math.abs, sk = "left", sO = "right", sP = "bottom", sz = "width", sI = "height", sR = "Right", sj = "Left", sM = "Bottom", sE = "padding", sA = "margin", sN = "Width", sD = "Height", sL = function(e) {
        return nP.getComputedStyle(e)
    }, sX = function(e) {
        var t = sL(e).position;
        e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
    }, sF = function(e, t) {
        for (var r in t)
            r in e || (e[r] = t[r]);
        return e
    }, sB = function(e, t) {
        var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== sL(e)[nF] && nk.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , i = e.getBoundingClientRect();
        return r && r.progress(0).kill(),
        i
    }, s$ = function(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }, sY = function(e) {
        var t, r = [], i = e.labels, n = e.duration();
        for (t in i)
            r.push(i[t] / n);
        return r
    }, sW = function(e) {
        var t = nk.utils.snap(e)
          , r = Array.isArray(e) && e.slice(0).sort(function(e, t) {
            return e - t
        });
        return r ? function(e, i, n) {
            var s;
            if (void 0 === n && (n = .001),
            !i)
                return t(e);
            if (i > 0) {
                for (e -= n,
                s = 0; s < r.length; s++)
                    if (r[s] >= e)
                        return r[s];
                return r[s - 1]
            }
            for (s = r.length,
            e += n; s--; )
                if (r[s] <= e)
                    return r[s];
            return r[0]
        }
        : function(r, i, n) {
            void 0 === n && (n = .001);
            var s = t(r);
            return !i || Math.abs(s - r) < n || s - r < 0 == i < 0 ? s : t(i < 0 ? r - e : r + e)
        }
    }, sU = function(e, t, r, i) {
        return r.split(",").forEach(function(r) {
            return e(t, r, i)
        })
    }, sG = function(e, t, r, i, n) {
        return e.addEventListener(t, r, {
            passive: !i,
            capture: !!n
        })
    }, sH = function(e, t, r, i) {
        return e.removeEventListener(t, r, !!i)
    }, sq = function(e, t, r) {
        (r = r && r.wheelHandler) && (e(t, "wheel", r),
        e(t, "touchmove", r))
    }, sZ = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, sV = {
        toggleActions: "play",
        anticipatePin: 0
    }, sK = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, sQ = function(e, t) {
        if (sy(e)) {
            var r = e.indexOf("=")
              , i = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (i *= t / 100),
            e = e.substr(0, r - 1)),
            e = i + (e in sK ? sK[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }, sJ = function(e, t, r, i, n, s, a, o) {
        var l = n.startColor
          , u = n.endColor
          , c = n.fontSize
          , h = n.indent
          , d = n.fontWeight
          , f = nz.createElement("div")
          , p = sf(r) || "fixed" === no(r, "pinType")
          , m = -1 !== e.indexOf("scroller")
          , g = p ? nR : r
          , v = -1 !== e.indexOf("start")
          , _ = v ? l : u
          , y = "border-color:" + _ + ";font-size:" + c + ";color:" + _ + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((m || o) && p ? "fixed;" : "absolute;"),
        (m || o || !p) && (y += (i === ng ? sO : sP) + ":" + (s + parseFloat(h)) + "px;"),
        a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
        f._isStart = v,
        f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        f.style.cssText = y,
        f.innerText = t || 0 === t ? e + "-" + t : e,
        g.children[0] ? g.insertBefore(f, g.children[0]) : g.appendChild(f),
        f._offset = f["offset" + i.op.d2],
        s0(f, 0, i, v),
        f
    }, s0 = function(e, t, r, i) {
        var n = {
            display: "block"
        }
          , s = r[i ? "os2" : "p2"]
          , a = r[i ? "p2" : "os2"];
        e._isFlipped = i,
        n[r.a + "Percent"] = i ? -100 : 0,
        n[r.a] = i ? "1px" : 0,
        n["border" + s + sN] = 1,
        n["border" + a + sN] = 0,
        n[r.p] = t + "px",
        nk.set(e, n)
    }, s1 = [], s2 = {}, s5 = function() {
        return st() - si > 34 && (n8 || (n8 = requestAnimationFrame(af)))
    }, s3 = function() {
        nq && nq.isPressed && !(nq.startX > nR.clientWidth) || (nr.cache++,
        nq ? n8 || (n8 = requestAnimationFrame(af)) : af(),
        si || ae("scrollStart"),
        si = st())
    }, s6 = function() {
        nK = nP.innerWidth,
        nV = nP.innerHeight
    }, s8 = function(e) {
        nr.cache++,
        (!0 === e || !nL && !nH && !nz.fullscreenElement && !nz.webkitFullscreenElement && (!nZ || nK !== nP.innerWidth || Math.abs(nP.innerHeight - nV) > .25 * nP.innerHeight)) && nM.restart(!0)
    }, s4 = {}, s9 = [], s7 = function e() {
        return sH(az, "scrollEnd", e) || ac(!0)
    }, ae = function(e) {
        return s4[e] && s4[e].map(function(e) {
            return e()
        }) || s9
    }, at = [], ar = function(e) {
        for (var t = 0; t < at.length; t += 5)
            (!e || at[t + 4] && at[t + 4].query === e) && (at[t].style.cssText = at[t + 1],
            at[t].getBBox && at[t].setAttribute("transform", at[t + 2] || ""),
            at[t + 3].uncache = 1)
    }, ai = function() {
        return nr.forEach(function(e) {
            return sb(e) && ++e.cacheID && (e.rec = e())
        })
    }, an = function(e, t) {
        var r;
        for (nB = 0; nB < s1.length; nB++)
            (r = s1[nB]) && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
        n5 = !0,
        t && ar(t),
        t || ae("revert")
    }, as = function(e, t) {
        nr.cache++,
        (t || !n4) && nr.forEach(function(e) {
            return sb(e) && e.cacheID++ && (e.rec = 0)
        }),
        sy(e) && (nP.history.scrollRestoration = n0 = e)
    }, aa = 0, ao = function() {
        if (n9 !== aa) {
            var e = n9 = aa;
            requestAnimationFrame(function() {
                return e === aa && ac(!0)
            })
        }
    }, al = function() {
        nR.appendChild(n1),
        n2 = !nq && n1.offsetHeight || nP.innerHeight,
        nR.removeChild(n1)
    }, au = function(e) {
        return nE(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
        })
    }, ac = function(e, t) {
        if (nI = nz.documentElement,
        nR = nz.body,
        nj = [nP, nz, nI, nR],
        si && !e && !n5)
            return void sG(az, "scrollEnd", s7);
        al(),
        n4 = az.isRefreshing = !0,
        n5 || ai();
        var r = ae("refreshInit");
        nU && az.sort(),
        t || an(),
        nr.forEach(function(e) {
            sb(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"),
            e(0))
        }),
        s1.slice(0).forEach(function(e) {
            return e.refresh()
        }),
        n5 = !1,
        s1.forEach(function(e) {
            if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight"
                  , r = e.pin[t];
                e.revert(!0, 1),
                e.adjustPinSpacing(e.pin[t] - r),
                e.refresh()
            }
        }),
        n3 = 1,
        au(!0),
        s1.forEach(function(e) {
            var t = sv(e.scroller, e._dir)
              , r = "max" === e.vars.end || e._endClamp && e.end > t
              , i = e._startClamp && e.start >= t;
            (r || i) && e.setPositions(i ? t - 1 : e.start, r ? Math.max(i ? t : e.start + 1, t) : e.end, !0)
        }),
        au(!1),
        n3 = 0,
        r.forEach(function(e) {
            return e && e.render && e.render(-1)
        }),
        nr.forEach(function(e) {
            sb(e) && (e.smooth && requestAnimationFrame(function() {
                return e.target.style.scrollBehavior = "smooth"
            }),
            e.rec && e(e.rec))
        }),
        as(n0, 1),
        nM.pause(),
        aa++,
        n4 = 2,
        af(2),
        s1.forEach(function(e) {
            return sb(e.vars.onRefresh) && e.vars.onRefresh(e)
        }),
        n4 = az.isRefreshing = !1,
        ae("refresh")
    }, ah = 0, ad = 1, af = function(e) {
        if (2 === e || !n4 && !n5) {
            az.isUpdating = !0,
            n7 && n7.update(0);
            var t = s1.length
              , r = st()
              , i = r - sr >= 50
              , n = t && s1[0].scroll();
            if (ad = ah > n ? -1 : 1,
            n4 || (ah = n),
            i && (si && !nX && r - si > 200 && (si = 0,
            ae("scrollEnd")),
            nN = sr,
            sr = r),
            ad < 0) {
                for (nB = t; nB-- > 0; )
                    s1[nB] && s1[nB].update(0, i);
                ad = 1
            } else
                for (nB = 0; nB < t; nB++)
                    s1[nB] && s1[nB].update(0, i);
            az.isUpdating = !1
        }
        n8 = 0
    }, ap = [sk, "top", sP, sO, sA + sM, sA + sR, sA + "Top", sA + sj, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], am = ap.concat([sz, sI, "boxSizing", "max" + sN, "max" + sD, "position", sA, sE, sE + "Top", sE + sR, sE + sM, sE + sj]), ag = function(e, t, r) {
        ay(r);
        var i = e._gsap;
        if (i.spacerIsNative)
            ay(i.spacerState);
        else if (e._gsap.swappedIn) {
            var n = t.parentNode;
            n && (n.insertBefore(e, t),
            n.removeChild(t))
        }
        e._gsap.swappedIn = !1
    }, av = function(e, t, r, i) {
        if (!e._gsap.swappedIn) {
            for (var n, s = ap.length, a = t.style, o = e.style; s--; )
                a[n = ap[s]] = r[n];
            a.position = "absolute" === r.position ? "absolute" : "relative",
            "inline" === r.display && (a.display = "inline-block"),
            o[sP] = o[sO] = "auto",
            a.flexBasis = r.flexBasis || "auto",
            a.overflow = "visible",
            a.boxSizing = "border-box",
            a[sz] = s$(e, nm) + "px",
            a[sI] = s$(e, ng) + "px",
            a[sE] = o[sA] = o.top = o[sk] = "0",
            ay(i),
            o[sz] = o["max" + sN] = r[sz],
            o[sI] = o["max" + sD] = r[sI],
            o[sE] = r[sE],
            e.parentNode !== t && (e.parentNode.insertBefore(t, e),
            t.appendChild(e)),
            e._gsap.swappedIn = !0
        }
    }, a_ = /([A-Z])/g, ay = function(e) {
        if (e) {
            var t, r, i = e.t.style, n = e.length, s = 0;
            for ((e.t._gsap || nk.core.getCache(e.t)).uncache = 1; s < n; s += 2)
                r = e[s + 1],
                t = e[s],
                r ? i[t] = r : i[t] && i.removeProperty(t.replace(a_, "-$1").toLowerCase())
        }
    }, ab = function(e) {
        for (var t = am.length, r = e.style, i = [], n = 0; n < t; n++)
            i.push(am[n], r[am[n]]);
        return i.t = e,
        i
    }, ax = function(e, t, r) {
        for (var i, n = [], s = e.length, a = 8 * !!r; a < s; a += 2)
            i = e[a],
            n.push(i, i in t ? t[i] : e[a + 1]);
        return n.t = e.t,
        n
    }, aw = {
        left: 0,
        top: 0
    }, aT = function(e, t, r, i, n, s, a, o, l, u, c, h, d, f) {
        sb(e) && (e = e(o)),
        sy(e) && "max" === e.substr(0, 3) && (e = h + ("=" === e.charAt(4) ? sQ("0" + e.substr(3), r) : 0));
        var p, m, g, v = d ? d.time() : 0;
        if (d && d.seek(0),
        isNaN(e) || (e *= 1),
        sx(e))
            d && (e = nk.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, e)),
            a && s0(a, r, i, !0);
        else {
            sb(t) && (t = t(o));
            var _, y, b, x, w = (e || "0").split(" ");
            (_ = sB(g = nv(t, o) || nR) || {}).left || _.top || "none" !== sL(g).display || (x = g.style.display,
            g.style.display = "block",
            _ = sB(g),
            x ? g.style.display = x : g.style.removeProperty("display")),
            y = sQ(w[0], _[i.d]),
            b = sQ(w[1] || "0", r),
            e = _[i.p] - l[i.p] - u + y + n - b,
            a && s0(a, b, i, r - b < 20 || a._isStart && b > 20),
            r -= r - b
        }
        if (f && (o[f] = e || -.001,
        e < 0 && (e = 0)),
        s) {
            var T = e + r
              , S = s._isStart;
            p = "scroll" + i.d2,
            s0(s, T, i, S && T > 20 || !S && (c ? Math.max(nR[p], nI[p]) : s.parentNode[p]) <= T + 1),
            c && (l = sB(a),
            c && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + "px"))
        }
        return d && g && (p = sB(g),
        d.seek(h),
        m = sB(g),
        d._caScrollDist = p[i.p] - m[i.p],
        e = e / d._caScrollDist * h),
        d && d.seek(v),
        d ? e : Math.round(e)
    }, aS = /(webkit|moz|length|cssText|inset)/i, aC = function(e, t, r, i) {
        if (e.parentNode !== t) {
            var n, s, a = e.style;
            if (t === nR) {
                for (n in e._stOrig = a.cssText,
                s = sL(e))
                    +n || aS.test(n) || !s[n] || "string" != typeof a[n] || "0" === n || (a[n] = s[n]);
                a.top = r,
                a.left = i
            } else
                a.cssText = e._stOrig;
            nk.core.getCache(e).uncache = 1,
            t.appendChild(e)
        }
    }, ak = function(e, t, r) {
        var i = t
          , n = i;
        return function(t) {
            var s = Math.round(e());
            return s !== i && s !== n && Math.abs(s - i) > 3 && Math.abs(s - n) > 3 && (t = s,
            r && r()),
            n = i,
            i = Math.round(t)
        }
    }, aO = function(e, t, r) {
        var i = {};
        i[t.p] = "+=" + r,
        nk.set(e, i)
    }, aP = function(e, t) {
        var r = ny(e, t)
          , i = "_scroll" + t.p2
          , n = function t(n, s, a, o, l) {
            var u = t.tween
              , c = s.onComplete
              , h = {};
            a = a || r();
            var d = ak(r, a, function() {
                u.kill(),
                t.tween = 0
            });
            return l = o && l || 0,
            o = o || n - a,
            u && u.kill(),
            s[i] = n,
            s.inherit = !1,
            s.modifiers = h,
            h[i] = function() {
                return d(a + o * u.ratio + l * u.ratio * u.ratio)
            }
            ,
            s.onUpdate = function() {
                nr.cache++,
                t.tween && af()
            }
            ,
            s.onComplete = function() {
                t.tween = 0,
                c && c.call(u)
            }
            ,
            u = t.tween = nk.to(e, s)
        };
        return e[i] = r,
        r.wheelHandler = function() {
            return n.tween && n.tween.kill() && (n.tween = 0)
        }
        ,
        sG(e, "wheel", r.wheelHandler),
        az.isTouch && sG(e, "touchmove", r.wheelHandler),
        n
    }, az = function() {
        function e(t, r) {
            nO || e.register(nk) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            nJ(this),
            this.init(t, r)
        }
        return e.prototype.init = function(t, r) {
            if (this.progress = this.start = 0,
            this.vars && this.kill(!0, !0),
            !sn) {
                this.update = this.refresh = this.kill = su;
                return
            }
            var i, n, s, a, o, l, u, c, h, d, f, p, m, g, v, _, y, b, x, w, T, S, C, k, O, P, z, I, R, j, M, E, A, N, D, L, X, F, B, $, Y, W = t = sF(sy(t) || sx(t) || t.nodeType ? {
                trigger: t
            } : t, sV), U = W.onUpdate, G = W.toggleClass, H = W.id, q = W.onToggle, Z = W.onRefresh, V = W.scrub, K = W.trigger, Q = W.pin, J = W.pinSpacing, ee = W.invalidateOnRefresh, et = W.anticipatePin, er = W.onScrubComplete, ei = W.onSnapComplete, en = W.once, es = W.snap, ea = W.pinReparent, eo = W.pinSpacer, el = W.containerAnimation, eu = W.fastScrollEnd, ec = W.preventOverlaps, eh = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? nm : ng, ed = !V && 0 !== V, ef = nv(t.scroller || nP), ep = nk.core.getCache(ef), em = sf(ef), eg = ("pinType"in t ? t.pinType : no(ef, "pinType") || em && "fixed") === "fixed", ev = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], e_ = ed && t.toggleActions.split(" "), ey = "markers"in t ? t.markers : sV.markers, eb = em ? 0 : parseFloat(sL(ef)["border" + eh.p2 + sN]) || 0, ex = this, ew = t.onRefreshInit && function() {
                return t.onRefreshInit(ex)
            }
            , eT = sg(ef, em, eh), eS = !em || ~ni.indexOf(ef) ? sm(ef) : function() {
                return aw
            }
            , eC = 0, ek = 0, eO = 0, eP = ny(ef, eh);
            if (ex._startClamp = ex._endClamp = !1,
            ex._dir = eh,
            et *= 45,
            ex.scroller = ef,
            ex.scroll = el ? el.time.bind(el) : eP,
            l = eP(),
            ex.vars = t,
            r = r || t.animation,
            "refreshPriority"in t && (nU = 1,
            -9999 === t.refreshPriority && (n7 = ex)),
            ep.tweenScroll = ep.tweenScroll || {
                top: aP(ef, ng),
                left: aP(ef, nm)
            },
            ex.tweenTo = s = ep.tweenScroll[eh.p],
            ex.scrubDuration = function(e) {
                (D = sx(e) && e) ? N ? N.duration(e) : N = nk.to(r, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: D,
                    paused: !0,
                    onComplete: function() {
                        return er && er(ex)
                    }
                }) : (N && N.progress(1).kill(),
                N = 0)
            }
            ,
            r && (r.vars.lazy = !1,
            r._initted && !ex.isReverted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.duration() && r.render(0, !0, !0),
            ex.animation = r.pause(),
            r.scrollTrigger = ex,
            ex.scrubDuration(V),
            E = 0,
            H || (H = r.vars.id)),
            es && ((!sw(es) || es.push) && (es = {
                snapTo: es
            }),
            "scrollBehavior"in nR.style && nk.set(em ? [nR, nI] : ef, {
                scrollBehavior: "auto"
            }),
            nr.forEach(function(e) {
                return sb(e) && e.target === (em ? nz.scrollingElement || nI : ef) && (e.smooth = !1)
            }),
            o = sb(es.snapTo) ? es.snapTo : "labels" === es.snapTo ? (i = r,
            function(e) {
                return nk.utils.snap(sY(i), e)
            }
            ) : "labelsDirectional" === es.snapTo ? (n = r,
            function(e, t) {
                return sW(sY(n))(e, t.direction)
            }
            ) : !1 !== es.directional ? function(e, t) {
                return sW(es.snapTo)(e, st() - ek < 500 ? 0 : t.direction)
            }
            : nk.utils.snap(es.snapTo),
            L = sw(L = es.duration || {
                min: .1,
                max: 2
            }) ? nA(L.min, L.max) : nA(L, L),
            X = nk.delayedCall(es.delay || D / 2 || .1, function() {
                var e = eP()
                  , t = st() - ek < 500
                  , i = s.tween;
                if ((t || 10 > Math.abs(ex.getVelocity())) && !i && !nX && eC !== e) {
                    var n, a, l = (e - c) / _, u = r && !ed ? r.totalProgress() : l, d = t ? 0 : (u - A) / (st() - nN) * 1e3 || 0, f = nk.utils.clamp(-l, 1 - l, sC(d / 2) * d / .185), p = l + (!1 === es.inertia ? 0 : f), m = es, g = m.onStart, v = m.onInterrupt, y = m.onComplete;
                    if (sx(n = o(p, ex)) || (n = p),
                    a = Math.max(0, Math.round(c + n * _)),
                    e <= h && e >= c && a !== e) {
                        if (i && !i._initted && i.data <= sC(a - e))
                            return;
                        !1 === es.inertia && (f = n - l),
                        s(a, {
                            duration: L(sC(.185 * Math.max(sC(p - u), sC(n - u)) / d / .05 || 0)),
                            ease: es.ease || "power3",
                            data: sC(a - e),
                            onInterrupt: function() {
                                return X.restart(!0) && v && v(ex)
                            },
                            onComplete: function() {
                                ex.update(),
                                eC = eP(),
                                r && !ed && (N ? N.resetTo("totalProgress", n, r._tTime / r._tDur) : r.progress(n)),
                                E = A = r && !ed ? r.totalProgress() : ex.progress,
                                ei && ei(ex),
                                y && y(ex)
                            }
                        }, e, f * _, a - e - f * _),
                        g && g(ex, s.tween)
                    }
                } else
                    ex.isActive && eC !== e && X.restart(!0)
            }).pause()),
            H && (s2[H] = ex),
            (Y = (K = ex.trigger = nv(K || !0 !== Q && Q)) && K._gsap && K._gsap.stRevert) && (Y = Y(ex)),
            Q = !0 === Q ? K : nv(Q),
            sy(G) && (G = {
                targets: K,
                className: G
            }),
            Q && (!1 === J || J === sA || (J = (!!J || !Q.parentNode || !Q.parentNode.style || "flex" !== sL(Q.parentNode).display) && sE),
            ex.pin = Q,
            (a = nk.core.getCache(Q)).spacer ? y = a.pinState : (eo && ((eo = nv(eo)) && !eo.nodeType && (eo = eo.current || eo.nativeElement),
            a.spacerIsNative = !!eo,
            eo && (a.spacerState = ab(eo))),
            a.spacer = w = eo || nz.createElement("div"),
            w.classList.add("pin-spacer"),
            H && w.classList.add("pin-spacer-" + H),
            a.pinState = y = ab(Q)),
            !1 !== t.force3D && nk.set(Q, {
                force3D: !0
            }),
            ex.spacer = w = a.spacer,
            P = (M = sL(Q))[J + eh.os2],
            S = nk.getProperty(Q),
            C = nk.quickSetter(Q, eh.a, "px"),
            av(Q, w, M),
            x = ab(Q)),
            ey) {
                g = sw(ey) ? sF(ey, sZ) : sZ,
                p = sJ("scroller-start", H, ef, eh, g, 0),
                m = sJ("scroller-end", H, ef, eh, g, 0, p),
                T = p["offset" + eh.op.d2];
                var ez = nv(no(ef, "content") || ef);
                d = this.markerStart = sJ("start", H, ez, eh, g, T, 0, el),
                f = this.markerEnd = sJ("end", H, ez, eh, g, T, 0, el),
                el && ($ = nk.quickSetter([d, f], eh.a, "px")),
                eg || ni.length && !0 === no(ef, "fixedMarkers") || (sX(em ? nR : ef),
                nk.set([p, m], {
                    force3D: !0
                }),
                I = nk.quickSetter(p, eh.a, "px"),
                j = nk.quickSetter(m, eh.a, "px"))
            }
            if (el) {
                var eI = el.vars.onUpdate
                  , eR = el.vars.onUpdateParams;
                el.eventCallback("onUpdate", function() {
                    ex.update(0, 0, 1),
                    eI && eI.apply(el, eR || [])
                })
            }
            if (ex.previous = function() {
                return s1[s1.indexOf(ex) - 1]
            }
            ,
            ex.next = function() {
                return s1[s1.indexOf(ex) + 1]
            }
            ,
            ex.revert = function(e, t) {
                if (!t)
                    return ex.kill(!0);
                var i = !1 !== e || !ex.enabled
                  , n = nL;
                i !== ex.isReverted && (i && (F = Math.max(eP(), ex.scroll.rec || 0),
                eO = ex.progress,
                B = r && r.progress()),
                d && [d, f, p, m].forEach(function(e) {
                    return e.style.display = i ? "none" : "block"
                }),
                i && (nL = ex,
                ex.update(i)),
                !Q || ea && ex.isActive || (i ? ag(Q, w, y) : av(Q, w, sL(Q), z)),
                i || ex.update(i),
                nL = n,
                ex.isReverted = i)
            }
            ,
            ex.refresh = function(i, n, a, o) {
                if (!nL && ex.enabled || n) {
                    if (Q && i && si)
                        return void sG(e, "scrollEnd", s7);
                    !n4 && ew && ew(ex),
                    nL = ex,
                    s.tween && !a && (s.tween.kill(),
                    s.tween = 0),
                    N && N.pause(),
                    ee && r && (r.revert({
                        kill: !1
                    }).invalidate(),
                    r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(e) {
                        return e.vars.immediateRender && e.render(0, !0, !0)
                    }) : r.vars.immediateRender && r.render(0, !0, !0)),
                    ex.isReverted || ex.revert(!0, !0),
                    ex._subPinOffset = !1;
                    var g, T, C, P, I, j, M, E, A, D, L, $, Y, W = eT(), U = eS(), G = el ? el.duration() : sv(ef, eh), H = _ <= .01 || !_, q = 0, V = o || 0, et = sw(a) ? a.end : t.end, er = t.endTrigger || K, ei = sw(a) ? a.start : t.start || (0 !== t.start && K ? Q ? "0 0" : "0 100%" : 0), en = ex.pinnedContainer = t.pinnedContainer && nv(t.pinnedContainer, ex), es = K && Math.max(0, s1.indexOf(ex)) || 0, eo = es;
                    for (ey && sw(a) && ($ = nk.getProperty(p, eh.p),
                    Y = nk.getProperty(m, eh.p)); eo-- > 0; )
                        (j = s1[eo]).end || j.refresh(0, 1) || (nL = ex),
                        (M = j.pin) && (M === K || M === Q || M === en) && !j.isReverted && (D || (D = []),
                        D.unshift(j),
                        j.revert(!0, !0)),
                        j !== s1[eo] && (es--,
                        eo--);
                    for (sb(ei) && (ei = ei(ex)),
                    c = aT(ei = ss(ei, "start", ex), K, W, eh, eP(), d, p, ex, U, eb, eg, G, el, ex._startClamp && "_startClamp") || (Q ? -.001 : 0),
                    sb(et) && (et = et(ex)),
                    sy(et) && !et.indexOf("+=") && (~et.indexOf(" ") ? et = (sy(ei) ? ei.split(" ")[0] : "") + et : (q = sQ(et.substr(2), W),
                    et = sy(ei) ? ei : (el ? nk.utils.mapRange(0, el.duration(), el.scrollTrigger.start, el.scrollTrigger.end, c) : c) + q,
                    er = K)),
                    et = ss(et, "end", ex),
                    h = Math.max(c, aT(et || (er ? "100% 0" : G), er, W, eh, eP() + q, f, m, ex, U, eb, eg, G, el, ex._endClamp && "_endClamp")) || -.001,
                    q = 0,
                    eo = es; eo--; )
                        (M = (j = s1[eo] || {}).pin) && j.start - j._pinPush <= c && !el && j.end > 0 && (g = j.end - (ex._startClamp ? Math.max(0, j.start) : j.start),
                        (M === K && j.start - j._pinPush < c || M === en) && isNaN(ei) && (q += g * (1 - j.progress)),
                        M === Q && (V += g));
                    if (c += q,
                    h += q,
                    ex._startClamp && (ex._startClamp += q),
                    ex._endClamp && !n4 && (ex._endClamp = h || -.001,
                    h = Math.min(h, sv(ef, eh))),
                    _ = h - c || (c -= .01) && .001,
                    H && (eO = nk.utils.clamp(0, 1, nk.utils.normalize(c, h, F))),
                    ex._pinPush = V,
                    d && q && ((g = {})[eh.a] = "+=" + q,
                    en && (g[eh.p] = "-=" + eP()),
                    nk.set([d, f], g)),
                    Q && !(n3 && ex.end >= sv(ef, eh)))
                        g = sL(Q),
                        P = eh === ng,
                        C = eP(),
                        k = parseFloat(S(eh.a)) + V,
                        !G && h > 1 && (L = {
                            style: L = (em ? nz.scrollingElement || nI : ef).style,
                            value: L["overflow" + eh.a.toUpperCase()]
                        },
                        em && "scroll" !== sL(nR)["overflow" + eh.a.toUpperCase()] && (L.style["overflow" + eh.a.toUpperCase()] = "scroll")),
                        av(Q, w, g),
                        x = ab(Q),
                        T = sB(Q, !0),
                        E = eg && ny(ef, P ? nm : ng)(),
                        J ? ((z = [J + eh.os2, _ + V + "px"]).t = w,
                        (eo = J === sE ? s$(Q, eh) + _ + V : 0) && (z.push(eh.d, eo + "px"),
                        "auto" !== w.style.flexBasis && (w.style.flexBasis = eo + "px")),
                        ay(z),
                        en && s1.forEach(function(e) {
                            e.pin === en && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                        }),
                        eg && eP(F)) : (eo = s$(Q, eh)) && "auto" !== w.style.flexBasis && (w.style.flexBasis = eo + "px"),
                        eg && ((I = {
                            top: T.top + (P ? C - c : E) + "px",
                            left: T.left + (P ? E : C - c) + "px",
                            boxSizing: "border-box",
                            position: "fixed"
                        })[sz] = I["max" + sN] = Math.ceil(T.width) + "px",
                        I[sI] = I["max" + sD] = Math.ceil(T.height) + "px",
                        I[sA] = I[sA + "Top"] = I[sA + sR] = I[sA + sM] = I[sA + sj] = "0",
                        I[sE] = g[sE],
                        I[sE + "Top"] = g[sE + "Top"],
                        I[sE + sR] = g[sE + sR],
                        I[sE + sM] = g[sE + sM],
                        I[sE + sj] = g[sE + sj],
                        b = ax(y, I, ea),
                        n4 && eP(0)),
                        r ? (A = r._initted,
                        nG(1),
                        r.render(r.duration(), !0, !0),
                        O = S(eh.a) - k + _ + V,
                        R = Math.abs(_ - O) > 1,
                        eg && R && b.splice(b.length - 2, 2),
                        r.render(0, !0, !0),
                        A || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        nG(0)) : O = _,
                        L && (L.value ? L.style["overflow" + eh.a.toUpperCase()] = L.value : L.style.removeProperty("overflow-" + eh.a));
                    else if (K && eP() && !el)
                        for (T = K.parentNode; T && T !== nR; )
                            T._pinOffset && (c -= T._pinOffset,
                            h -= T._pinOffset),
                            T = T.parentNode;
                    D && D.forEach(function(e) {
                        return e.revert(!1, !0)
                    }),
                    ex.start = c,
                    ex.end = h,
                    l = u = n4 ? F : eP(),
                    el || n4 || (l < F && eP(F),
                    ex.scroll.rec = 0),
                    ex.revert(!1, !0),
                    ek = st(),
                    X && (eC = -1,
                    X.restart(!0)),
                    nL = 0,
                    r && ed && (r._initted || B) && r.progress() !== B && r.progress(B || 0, !0).render(r.time(), !0, !0),
                    (H || eO !== ex.progress || el || ee || r && !r._initted) && (r && !ed && (r._initted || eO || !1 !== r.vars.immediateRender) && r.totalProgress(el && c < -.001 && !eO ? nk.utils.normalize(c, h, 0) : eO, !0),
                    ex.progress = H || (l - c) / _ === eO ? 0 : eO),
                    Q && J && (w._pinOffset = Math.round(ex.progress * O)),
                    N && N.invalidate(),
                    isNaN($) || ($ -= nk.getProperty(p, eh.p),
                    Y -= nk.getProperty(m, eh.p),
                    aO(p, eh, $),
                    aO(d, eh, $ - (o || 0)),
                    aO(m, eh, Y),
                    aO(f, eh, Y - (o || 0))),
                    H && !n4 && ex.update(),
                    !Z || n4 || v || (v = !0,
                    Z(ex),
                    v = !1)
                }
            }
            ,
            ex.getVelocity = function() {
                return (eP() - u) / (st() - nN) * 1e3 || 0
            }
            ,
            ex.endAnimation = function() {
                sT(ex.callbackAnimation),
                r && (N ? N.progress(1) : r.paused() ? ed || sT(r, ex.direction < 0, 1) : sT(r, r.reversed()))
            }
            ,
            ex.labelToScroll = function(e) {
                return r && r.labels && (c || ex.refresh() || c) + r.labels[e] / r.duration() * _ || 0
            }
            ,
            ex.getTrailing = function(e) {
                var t = s1.indexOf(ex)
                  , r = ex.direction > 0 ? s1.slice(0, t).reverse() : s1.slice(t + 1);
                return (sy(e) ? r.filter(function(t) {
                    return t.vars.preventOverlaps === e
                }) : r).filter(function(e) {
                    return ex.direction > 0 ? e.end <= c : e.start >= h
                })
            }
            ,
            ex.update = function(e, t, i) {
                if (!el || i || e) {
                    var n, a, o, d, f, m, g, v = !0 === n4 ? F : ex.scroll(), y = e ? 0 : (v - c) / _, T = y < 0 ? 0 : y > 1 ? 1 : y || 0, S = ex.progress;
                    if (t && (u = l,
                    l = el ? eP() : v,
                    es && (A = E,
                    E = r && !ed ? r.totalProgress() : T)),
                    et && Q && !nL && !se && si && (!T && c < v + (v - u) / (st() - nN) * et ? T = 1e-4 : 1 === T && h > v + (v - u) / (st() - nN) * et && (T = .9999)),
                    T !== S && ex.enabled) {
                        if (d = (f = (n = ex.isActive = !!T && T < 1) != (!!S && S < 1)) || !!T != !!S,
                        ex.direction = T > S ? 1 : -1,
                        ex.progress = T,
                        d && !nL && (a = T && !S ? 0 : 1 === T ? 1 : 1 === S ? 2 : 3,
                        ed && (o = !f && "none" !== e_[a + 1] && e_[a + 1] || e_[a],
                        g = r && ("complete" === o || "reset" === o || o in r))),
                        ec && (f || g) && (g || V || !r) && (sb(ec) ? ec(ex) : ex.getTrailing(ec).forEach(function(e) {
                            return e.endAnimation()
                        })),
                        !ed && (!N || nL || se ? r && r.totalProgress(T, !!(nL && (ek || e))) : (N._dp._time - N._start !== N._time && N.render(N._dp._time - N._start),
                        N.resetTo ? N.resetTo("totalProgress", T, r._tTime / r._tDur) : (N.vars.totalProgress = T,
                        N.invalidate().restart()))),
                        Q)
                            if (e && J && (w.style[J + eh.os2] = P),
                            eg) {
                                if (d) {
                                    if (m = !e && T > S && h + 1 > v && v + 1 >= sv(ef, eh),
                                    ea)
                                        if (!e && (n || m)) {
                                            var z = sB(Q, !0)
                                              , M = v - c;
                                            aC(Q, nR, z.top + (eh === ng ? M : 0) + "px", z.left + (eh === ng ? 0 : M) + "px")
                                        } else
                                            aC(Q, w);
                                    ay(n || m ? b : x),
                                    R && T < 1 && n || C(k + (1 !== T || m ? 0 : O))
                                }
                            } else
                                C(sc(k + O * T));
                        !es || s.tween || nL || se || X.restart(!0),
                        G && (f || en && T && (T < 1 || !n6)) && nE(G.targets).forEach(function(e) {
                            return e.classList[n || en ? "add" : "remove"](G.className)
                        }),
                        !U || ed || e || U(ex),
                        d && !nL ? (ed && (g && ("complete" === o ? r.pause().totalProgress(1) : "reset" === o ? r.restart(!0).pause() : "restart" === o ? r.restart(!0) : r[o]()),
                        U && U(ex)),
                        (f || !n6) && (q && f && sS(ex, q),
                        ev[a] && sS(ex, ev[a]),
                        en && (1 === T ? ex.kill(!1, 1) : ev[a] = 0),
                        !f && ev[a = 1 === T ? 1 : 3] && sS(ex, ev[a])),
                        eu && !n && Math.abs(ex.getVelocity()) > (sx(eu) ? eu : 2500) && (sT(ex.callbackAnimation),
                        N ? N.progress(1) : sT(r, "reverse" === o ? 1 : !T, 1))) : ed && U && !nL && U(ex)
                    }
                    if (j) {
                        var D = el ? v / el.duration() * (el._caScrollDist || 0) : v;
                        I(D + +!!p._isFlipped),
                        j(D)
                    }
                    $ && $(-v / el.duration() * (el._caScrollDist || 0))
                }
            }
            ,
            ex.enable = function(t, r) {
                ex.enabled || (ex.enabled = !0,
                sG(ef, "resize", s8),
                em || sG(ef, "scroll", s3),
                ew && sG(e, "refreshInit", ew),
                !1 !== t && (ex.progress = eO = 0,
                l = u = eC = eP()),
                !1 !== r && ex.refresh())
            }
            ,
            ex.getTween = function(e) {
                return e && s ? s.tween : N
            }
            ,
            ex.setPositions = function(e, t, r, i) {
                if (el) {
                    var n = el.scrollTrigger
                      , s = el.duration()
                      , a = n.end - n.start;
                    e = n.start + a * e / s,
                    t = n.start + a * t / s
                }
                ex.refresh(!1, !1, {
                    start: sa(e, r && !!ex._startClamp),
                    end: sa(t, r && !!ex._endClamp)
                }, i),
                ex.update()
            }
            ,
            ex.adjustPinSpacing = function(e) {
                if (z && e) {
                    var t = z.indexOf(eh.d) + 1;
                    z[t] = parseFloat(z[t]) + e + "px",
                    z[1] = parseFloat(z[1]) + e + "px",
                    ay(z)
                }
            }
            ,
            ex.disable = function(t, r) {
                if (!1 !== t && ex.revert(!0, !0),
                ex.enabled && (ex.enabled = ex.isActive = !1,
                r || N && N.pause(),
                F = 0,
                a && (a.uncache = 1),
                ew && sH(e, "refreshInit", ew),
                X && (X.pause(),
                s.tween && s.tween.kill() && (s.tween = 0)),
                !em)) {
                    for (var i = s1.length; i--; )
                        if (s1[i].scroller === ef && s1[i] !== ex)
                            return;
                    sH(ef, "resize", s8),
                    em || sH(ef, "scroll", s3)
                }
            }
            ,
            ex.kill = function(e, i) {
                ex.disable(e, i),
                N && !i && N.kill(),
                H && delete s2[H];
                var n = s1.indexOf(ex);
                n >= 0 && s1.splice(n, 1),
                n === nB && ad > 0 && nB--,
                n = 0,
                s1.forEach(function(e) {
                    return e.scroller === ex.scroller && (n = 1)
                }),
                n || n4 || (ex.scroll.rec = 0),
                r && (r.scrollTrigger = null,
                e && r.revert({
                    kill: !1
                }),
                i || r.kill()),
                d && [d, f, p, m].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                }),
                n7 === ex && (n7 = 0),
                Q && (a && (a.uncache = 1),
                n = 0,
                s1.forEach(function(e) {
                    return e.pin === Q && n++
                }),
                n || (a.spacer = 0)),
                t.onKill && t.onKill(ex)
            }
            ,
            s1.push(ex),
            ex.enable(!1, !1),
            Y && Y(ex),
            r && r.add && !_) {
                var ej = ex.update;
                ex.update = function() {
                    ex.update = ej,
                    nr.cache++,
                    c || h || ex.refresh()
                }
                ,
                nk.delayedCall(.01, ex.update),
                _ = .01,
                c = h = 0
            } else
                ex.refresh();
            Q && ao()
        }
        ,
        e.register = function(t) {
            return nO || (nk = t || sd(),
            sh() && window.document && e.enable(),
            nO = sn),
            nO
        }
        ,
        e.defaults = function(e) {
            if (e)
                for (var t in e)
                    sV[t] = e[t];
            return sV
        }
        ,
        e.disable = function(e, t) {
            sn = 0,
            s1.forEach(function(r) {
                return r[t ? "kill" : "disable"](e)
            }),
            sH(nP, "wheel", s3),
            sH(nz, "scroll", s3),
            clearInterval(nD),
            sH(nz, "touchcancel", su),
            sH(nR, "touchstart", su),
            sU(sH, nz, "pointerdown,touchstart,mousedown", so),
            sU(sH, nz, "pointerup,touchend,mouseup", sl),
            nM.kill(),
            s_(sH);
            for (var r = 0; r < nr.length; r += 3)
                sq(sH, nr[r], nr[r + 1]),
                sq(sH, nr[r], nr[r + 2])
        }
        ,
        e.enable = function() {
            if (nP = window,
            nI = (nz = document).documentElement,
            nR = nz.body,
            nk && (nE = nk.utils.toArray,
            nA = nk.utils.clamp,
            nJ = nk.core.context || su,
            nG = nk.core.suppressOverwrites || su,
            n0 = nP.history.scrollRestoration || "auto",
            ah = nP.pageYOffset || 0,
            nk.core.globals("ScrollTrigger", e),
            nR)) {
                sn = 1,
                (n1 = document.createElement("div")).style.height = "100vh",
                n1.style.position = "absolute",
                al(),
                function e() {
                    return sn && requestAnimationFrame(e)
                }(),
                nC.register(nk),
                e.isTouch = nC.isTouch,
                nQ = nC.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                nZ = 1 === nC.isTouch,
                sG(nP, "wheel", s3),
                nj = [nP, nz, nI, nR],
                nk.matchMedia ? (e.matchMedia = function(e) {
                    var t, r = nk.matchMedia();
                    for (t in e)
                        r.add(t, e[t]);
                    return r
                }
                ,
                nk.addEventListener("matchMediaInit", function() {
                    ai(),
                    an()
                }),
                nk.addEventListener("matchMediaRevert", function() {
                    return ar()
                }),
                nk.addEventListener("matchMedia", function() {
                    ac(0, 1),
                    ae("matchMedia")
                }),
                nk.matchMedia().add("(orientation: portrait)", function() {
                    return s6(),
                    s6
                })) : console.warn("Requires GSAP 3.11.0 or later"),
                s6(),
                sG(nz, "scroll", s3);
                var t, r, i = nR.hasAttribute("style"), n = nR.style, s = n.borderTopStyle, a = nk.core.Animation.prototype;
                for (a.revert || Object.defineProperty(a, "revert", {
                    value: function() {
                        return this.time(-.01, !0)
                    }
                }),
                n.borderTopStyle = "solid",
                ng.m = Math.round((t = sB(nR)).top + ng.sc()) || 0,
                nm.m = Math.round(t.left + nm.sc()) || 0,
                s ? n.borderTopStyle = s : n.removeProperty("border-top-style"),
                i || (nR.setAttribute("style", ""),
                nR.removeAttribute("style")),
                nD = setInterval(s5, 250),
                nk.delayedCall(.5, function() {
                    return se = 0
                }),
                sG(nz, "touchcancel", su),
                sG(nR, "touchstart", su),
                sU(sG, nz, "pointerdown,touchstart,mousedown", so),
                sU(sG, nz, "pointerup,touchend,mouseup", sl),
                nF = nk.utils.checkPrefix("transform"),
                am.push(nF),
                nO = st(),
                nM = nk.delayedCall(.2, ac).pause(),
                nW = [nz, "visibilitychange", function() {
                    var e = nP.innerWidth
                      , t = nP.innerHeight;
                    nz.hidden ? (n$ = e,
                    nY = t) : (n$ !== e || nY !== t) && s8()
                }
                , nz, "DOMContentLoaded", ac, nP, "load", ac, nP, "resize", s8],
                s_(sG),
                s1.forEach(function(e) {
                    return e.enable(0, 1)
                }),
                r = 0; r < nr.length; r += 3)
                    sq(sH, nr[r], nr[r + 1]),
                    sq(sH, nr[r], nr[r + 2])
            }
        }
        ,
        e.config = function(t) {
            "limitCallbacks"in t && (n6 = !!t.limitCallbacks);
            var r = t.syncInterval;
            r && clearInterval(nD) || (nD = r) && setInterval(s5, r),
            "ignoreMobileResize"in t && (nZ = 1 === e.isTouch && t.ignoreMobileResize),
            "autoRefreshEvents"in t && (s_(sH) || s_(sG, t.autoRefreshEvents || "none"),
            nH = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
        }
        ,
        e.scrollerProxy = function(e, t) {
            var r = nv(e)
              , i = nr.indexOf(r)
              , n = sf(r);
            ~i && nr.splice(i, n ? 6 : 2),
            t && (n ? ni.unshift(nP, t, nR, t, nI, t) : ni.unshift(r, t))
        }
        ,
        e.clearMatchMedia = function(e) {
            s1.forEach(function(t) {
                return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
            })
        }
        ,
        e.isInViewport = function(e, t, r) {
            var i = (sy(e) ? nv(e) : e).getBoundingClientRect()
              , n = i[r ? sz : sI] * t || 0;
            return r ? i.right - n > 0 && i.left + n < nP.innerWidth : i.bottom - n > 0 && i.top + n < nP.innerHeight
        }
        ,
        e.positionInViewport = function(e, t, r) {
            sy(e) && (e = nv(e));
            var i = e.getBoundingClientRect()
              , n = i[r ? sz : sI]
              , s = null == t ? n / 2 : t in sK ? sK[t] * n : ~t.indexOf("%") ? parseFloat(t) * n / 100 : parseFloat(t) || 0;
            return r ? (i.left + s) / nP.innerWidth : (i.top + s) / nP.innerHeight
        }
        ,
        e.killAll = function(e) {
            if (s1.slice(0).forEach(function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
            }),
            !0 !== e) {
                var t = s4.killAll || [];
                s4 = {},
                t.forEach(function(e) {
                    return e()
                })
            }
        }
        ,
        e
    }();
    az.version = "3.14.2",
    az.saveStyles = function(e) {
        return e ? nE(e).forEach(function(e) {
            if (e && e.style) {
                var t = at.indexOf(e);
                t >= 0 && at.splice(t, 5),
                at.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), nk.core.getCache(e), nJ())
            }
        }) : at
    }
    ,
    az.revert = function(e, t) {
        return an(!e, t)
    }
    ,
    az.create = function(e, t) {
        return new az(e,t)
    }
    ,
    az.refresh = function(e) {
        return e ? s8(!0) : (nO || az.register()) && ac(!0)
    }
    ,
    az.update = function(e) {
        return ++nr.cache && af(2 * (!0 === e))
    }
    ,
    az.clearScrollMemory = as,
    az.maxScroll = function(e, t) {
        return sv(e, t ? nm : ng)
    }
    ,
    az.getScrollFunc = function(e, t) {
        return ny(nv(e), t ? nm : ng)
    }
    ,
    az.getById = function(e) {
        return s2[e]
    }
    ,
    az.getAll = function() {
        return s1.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }
    ,
    az.isScrolling = function() {
        return !!si
    }
    ,
    az.snapDirectional = sW,
    az.addEventListener = function(e, t) {
        var r = s4[e] || (s4[e] = []);
        ~r.indexOf(t) || r.push(t)
    }
    ,
    az.removeEventListener = function(e, t) {
        var r = s4[e]
          , i = r && r.indexOf(t);
        i >= 0 && r.splice(i, 1)
    }
    ,
    az.batch = function(e, t) {
        var r, i = [], n = {}, s = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
            var r = []
              , i = []
              , n = nk.delayedCall(s, function() {
                t(r, i),
                r = [],
                i = []
            }).pause();
            return function(e) {
                r.length || n.restart(!0),
                r.push(e.trigger),
                i.push(e),
                a <= r.length && n.progress(1)
            }
        };
        for (r in t)
            n[r] = "on" === r.substr(0, 2) && sb(t[r]) && "onRefreshInit" !== r ? o(r, t[r]) : t[r];
        return sb(a) && (a = a(),
        sG(az, "refresh", function() {
            return a = t.batchMax()
        })),
        nE(e).forEach(function(e) {
            var t = {};
            for (r in n)
                t[r] = n[r];
            t.trigger = e,
            i.push(az.create(t))
        }),
        i
    }
    ;
    var aI, aR = function(e, t, r, i) {
        return t > i ? e(i) : t < 0 && e(0),
        r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }, aj = function e(t, r) {
        !0 === r ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (nC.isTouch ? " pinch-zoom" : "") : "none",
        t === nI && e(nR, r)
    }, aM = {
        auto: 1,
        scroll: 1
    }, aE = function(e) {
        var t, r = e.event, i = e.target, n = e.axis, s = (r.changedTouches ? r.changedTouches[0] : r).target, a = s._gsap || nk.core.getCache(s), o = st();
        if (!a._isScrollT || o - a._isScrollT > 2e3) {
            for (; s && s !== nR && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(aM[(t = sL(s)).overflowY] || aM[t.overflowX])); )
                s = s.parentNode;
            a._isScroll = s && s !== i && !sf(s) && (aM[(t = sL(s)).overflowY] || aM[t.overflowX]),
            a._isScrollT = o
        }
        (a._isScroll || "x" === n) && (r.stopPropagation(),
        r._gsapAllow = !0)
    }, aA = function(e, t, r, i) {
        return nC.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: i = i && aE,
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function() {
                return r && sG(nz, nC.eventTypes[0], aD, !1, !0)
            },
            onDisable: function() {
                return sH(nz, nC.eventTypes[0], aD, !0)
            }
        })
    }, aN = /(input|label|select|textarea)/i, aD = function(e) {
        var t = aN.test(e.target.tagName);
        (t || aI) && (e._gsapAllow = !0,
        aI = t)
    }, aL = function(e) {
        sw(e) || (e = {}),
        e.preventDefault = e.isNormalizer = e.allowClicks = !0,
        e.type || (e.type = "wheel,touch"),
        e.debounce = !!e.debounce,
        e.id = e.id || "normalizer";
        var t, r, i, n, s, a, o, l, u = e, c = u.normalizeScrollX, h = u.momentum, d = u.allowNestedScroll, f = u.onRelease, p = nv(e.target) || nI, m = nk.core.globals().ScrollSmoother, g = m && m.get(), v = nQ && (e.content && nv(e.content) || g && !1 !== e.content && !g.smooth() && g.content()), _ = ny(p, ng), y = ny(p, nm), b = 1, x = (nC.isTouch && nP.visualViewport ? nP.visualViewport.scale * nP.visualViewport.width : nP.outerWidth) / nP.innerWidth, w = 0, T = sb(h) ? function() {
            return h(t)
        }
        : function() {
            return h || 2.8
        }
        , S = aA(p, e.type, !0, d), C = function() {
            return n = !1
        }, k = su, O = su, P = function() {
            r = sv(p, ng),
            O = nA(+!!nQ, r),
            c && (k = nA(0, sv(p, nm))),
            i = aa
        }, z = function() {
            v._gsap.y = sc(parseFloat(v._gsap.y) + _.offset) + "px",
            v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)",
            _.offset = _.cacheID = 0
        }, I = function() {
            if (n) {
                requestAnimationFrame(C);
                var e = sc(t.deltaY / 2)
                  , r = O(_.v - e);
                if (v && r !== _.v + _.offset) {
                    _.offset = r - _.v;
                    var i = sc((parseFloat(v && v._gsap.y) || 0) - _.offset);
                    v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + i + ", 0, 1)",
                    v._gsap.y = i + "px",
                    _.cacheID = nr.cache,
                    af()
                }
                return !0
            }
            _.offset && z(),
            n = !0
        }, R = function() {
            P(),
            s.isActive() && s.vars.scrollY > r && (_() > r ? s.progress(1) && _(r) : s.resetTo("scrollY", r))
        };
        return v && nk.set(v, {
            y: "+=0"
        }),
        e.ignoreCheck = function(e) {
            return nQ && "touchmove" === e.type && I(e) || b > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
        }
        ,
        e.onPress = function() {
            n = !1;
            var e = b;
            b = sc((nP.visualViewport && nP.visualViewport.scale || 1) / x),
            s.pause(),
            e !== b && aj(p, b > 1.01 || !c && "x"),
            a = y(),
            o = _(),
            P(),
            i = aa
        }
        ,
        e.onRelease = e.onGestureStart = function(e, t) {
            if (_.offset && z(),
            t) {
                nr.cache++;
                var i, n, a = T();
                c && (n = (i = y()) + -(.05 * a * e.velocityX) / .227,
                a *= aR(y, i, n, sv(p, nm)),
                s.vars.scrollX = k(n)),
                n = (i = _()) + -(.05 * a * e.velocityY) / .227,
                a *= aR(_, i, n, sv(p, ng)),
                s.vars.scrollY = O(n),
                s.invalidate().duration(a).play(.01),
                (nQ && s.vars.scrollY >= r || i >= r - 1) && nk.to({}, {
                    onUpdate: R,
                    duration: a
                })
            } else
                l.restart(!0);
            f && f(e)
        }
        ,
        e.onWheel = function() {
            s._ts && s.pause(),
            st() - w > 1e3 && (i = 0,
            w = st())
        }
        ,
        e.onChange = function(e, t, r, n, s) {
            if (aa !== i && P(),
            t && c && y(k(n[2] === t ? a + (e.startX - e.x) : y() + t - n[1])),
            r) {
                _.offset && z();
                var l = s[2] === r
                  , u = l ? o + e.startY - e.y : _() + r - s[1]
                  , h = O(u);
                l && u !== h && (o += h - u),
                _(h)
            }
            (r || t) && af()
        }
        ,
        e.onEnable = function() {
            aj(p, !c && "x"),
            az.addEventListener("refresh", R),
            sG(nP, "resize", R),
            _.smooth && (_.target.style.scrollBehavior = "auto",
            _.smooth = y.smooth = !1),
            S.enable()
        }
        ,
        e.onDisable = function() {
            aj(p, !0),
            sH(nP, "resize", R),
            az.removeEventListener("refresh", R),
            S.kill()
        }
        ,
        e.lockAxis = !1 !== e.lockAxis,
        (t = new nC(e)).iOS = nQ,
        nQ && !_() && _(1),
        nQ && nk.ticker.add(su),
        l = t._dc,
        s = nk.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: ak(_, _(), function() {
                    return s.pause()
                })
            },
            onUpdate: af,
            onComplete: l.vars.onComplete
        }),
        t
    };
    az.sort = function(e) {
        if (sb(e))
            return s1.sort(e);
        var t = nP.pageYOffset || 0;
        return az.getAll().forEach(function(e) {
            return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + nP.innerHeight
        }),
        s1.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + -1e6 * (t.vars.refreshPriority || 0))
        }
        )
    }
    ,
    az.observe = function(e) {
        return new nC(e)
    }
    ,
    az.normalizeScroll = function(e) {
        if (void 0 === e)
            return nq;
        if (!0 === e && nq)
            return nq.enable();
        if (!1 === e) {
            nq && nq.kill(),
            nq = e;
            return
        }
        var t = e instanceof nC ? e : aL(e);
        return nq && nq.target === t.target && nq.kill(),
        sf(t.target) && (nq = t),
        t
    }
    ,
    az.core = {
        _getVelocityProp: nb,
        _inputObserver: aA,
        _scrollers: nr,
        _proxies: ni,
        bridge: {
            ss: function() {
                si || ae("scrollStart"),
                si = st()
            },
            ref: function() {
                return nL
            }
        }
    },
    sd() && nk.registerPlugin(az);
    let aX, aF, aB = "function" == typeof Symbol ? Symbol() : "_split", a$, aY = "u" > typeof Intl && "Segmenter"in Intl ? new Intl.Segmenter : 0, aW = e => "string" == typeof e ? aW(document.querySelectorAll(e)) : "length"in e ? Array.from(e).reduce( (e, t) => ("string" == typeof t ? e.push(...aW(t)) : e.push(t),
    e), []) : [e], aU = e => aW(e).filter(e => e instanceof HTMLElement), aG = [], aH = function() {}, aq = {
        add: e => e()
    }, aZ = /\s+/g, aV = RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), aK = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    }, aQ = (e, t) => {
        for (; ++t < e.length && e[t] === aK; )
            ;
        return e[t] || aK
    }
    , aJ = ({element: e, html: t, ariaL: r, ariaH: i}) => {
        e.innerHTML = t,
        r ? e.setAttribute("aria-label", r) : e.removeAttribute("aria-label"),
        i ? e.setAttribute("aria-hidden", i) : e.removeAttribute("aria-hidden")
    }
    , a0 = (e, t) => {
        if (t) {
            let r = new Set(e.join("").match(t) || aG), i = e.length, n, s, a, o;
            if (r.size) {
                for (; --i > -1; )
                    for (a of (s = e[i],
                    r))
                        if (a.startsWith(s) && a.length > s.length) {
                            for (n = 0,
                            o = s; a.startsWith(o += e[i + ++n]) && o.length < a.length; )
                                ;
                            if (n && o.length === a.length) {
                                e[i] = a,
                                e.splice(i + 1, n);
                                break
                            }
                        }
            }
        }
        return e
    }
    , a1 = e => "inline" === window.getComputedStyle(e).display && (e.style.display = "inline-block"), a2 = (e, t, r) => t.insertBefore("string" == typeof e ? document.createTextNode(e) : e, r), a5 = (e, t, r) => {
        let i = t[e + "sClass"] || ""
          , {tag: n="div", aria: s="auto", propIndex: a=!1} = t
          , o = "line" === e ? "block" : "inline-block"
          , l = i.indexOf("++") > -1
          , u = t => {
            let u = document.createElement(n)
              , c = r.length + 1;
            return i && (u.className = i + (l ? " " + i + c : "")),
            a && u.style.setProperty("--" + e, c + ""),
            "none" !== s && u.setAttribute("aria-hidden", "true"),
            "span" !== n && (u.style.position = "relative",
            u.style.display = o),
            u.textContent = t,
            r.push(u),
            u
        }
        ;
        return l && (i = i.replace("++", "")),
        u.collection = r,
        u
    }
    , a3 = (e, t, r, i, n, s, a, o, l, u) => {
        var c;
        let h = Array.from(e.childNodes), d = 0, {wordDelimiter: f, reduceWhiteSpace: p=!0, prepareText: m} = t, g = e.getBoundingClientRect(), v = g, _ = !p && "pre" === window.getComputedStyle(e).whiteSpace.substring(0, 3), y = 0, b = r.collection, x, w, T, S, C, k, O, P, z, I, R, j, M, E, A, N, D, L;
        for ("object" == typeof f ? (T = f.delimiter || f,
        w = f.replaceWith || "") : w = "" === f ? "" : f || " ",
        x = " " !== w; d < h.length; d++)
            if (3 === (S = h[d]).nodeType) {
                for (A = S.textContent || "",
                p ? A = A.replace(aZ, " ") : _ && (A = A.replace(/\n/g, w + "\n")),
                m && (A = m(A, e)),
                S.textContent = A,
                D = (C = w || T ? A.split(T || w) : A.match(o) || aG)[C.length - 1],
                P = x ? " " === D.slice(-1) : !D,
                D || C.pop(),
                v = g,
                (O = x ? " " === C[0].charAt(0) : !C[0]) && a2(" ", e, S),
                C[0] || C.shift(),
                a0(C, l),
                s && u || (S.textContent = ""),
                z = 1; z <= C.length; z++)
                    if (N = C[z - 1],
                    !p && _ && "\n" === N.charAt(0) && (null == (c = S.previousSibling) || c.remove(),
                    a2(document.createElement("br"), e, S),
                    N = N.slice(1)),
                    p || "" !== N)
                        if (" " === N)
                            e.insertBefore(document.createTextNode(" "), S);
                        else {
                            if (x && " " === N.charAt(0) && a2(" ", e, S),
                            y && 1 === z && !O && b.indexOf(y.parentNode) > -1 ? (k = b[b.length - 1]).appendChild(document.createTextNode(i ? "" : N)) : (a2(k = r(i ? "" : N), e, S),
                            y && 1 === z && !O && k.insertBefore(y, k.firstChild)),
                            i)
                                for (L = 0,
                                R = aY ? a0([...aY.segment(N)].map(e => e.segment), l) : N.match(o) || aG; L < R.length; L++)
                                    k.appendChild(" " === R[L] ? document.createTextNode(" ") : i(R[L]));
                            if (s && u) {
                                if (A = S.textContent = A.substring(N.length + 1, A.length),
                                (I = k.getBoundingClientRect()).top > v.top && I.left <= v.left) {
                                    for (j = e.cloneNode(),
                                    M = e.childNodes[0]; M && M !== k; )
                                        E = M,
                                        M = M.nextSibling,
                                        j.appendChild(E);
                                    e.parentNode.insertBefore(j, e),
                                    n && a1(j)
                                }
                                v = I
                            }
                            (z < C.length || P) && a2(z >= C.length ? " " : x && " " === N.slice(-1) ? " " + w : w, e, S)
                        }
                    else
                        a2(w, e, S);
                e.removeChild(S),
                y = 0
            } else
                1 === S.nodeType && (a && a.indexOf(S) > -1 ? (b.indexOf(S.previousSibling) > -1 && b[b.length - 1].appendChild(S),
                y = S) : (a3(S, t, r, i, n, s, a, o, l, !0),
                y = 0),
                n && a1(S))
    }
    , a6 = class e {
        constructor(e, t) {
            this.isSplit = !1,
            a$ || a8.register(window.gsap),
            this.elements = aU(e),
            this.chars = [],
            this.words = [],
            this.lines = [],
            this.masks = [],
            this.vars = t,
            this.elements.forEach(e => {
                var r;
                !1 !== t.overwrite && (null == (r = e[aB]) || r._data.orig.filter( ({element: t}) => t === e).forEach(aJ)),
                e[aB] = this
            }
            ),
            this._split = () => this.isSplit && this.split(this.vars);
            let r = [], i, n = () => {
                let e = r.length, t;
                for (; e--; ) {
                    let i = (t = r[e]).element.offsetWidth;
                    if (i !== t.width) {
                        t.width = i,
                        this._split();
                        return
                    }
                }
            }
            ;
            this._data = {
                orig: r,
                obs: "u" > typeof ResizeObserver && new ResizeObserver( () => {
                    clearTimeout(i),
                    i = setTimeout(n, 200)
                }
                )
            },
            aH(this),
            this.split(t)
        }
        split(e) {
            return (this._ctx || aq).add( () => {
                this.isSplit && this.revert(),
                this.vars = e = e || this.vars || {};
                let {type: t="chars,words,lines", aria: r="auto", deepSlice: i=!0, smartWrap: n, onSplit: s, autoSplit: a=!1, specialChars: o, mask: l} = this.vars, u = t.indexOf("lines") > -1, c = t.indexOf("chars") > -1, h = t.indexOf("words") > -1, d = c && !h && !u, f = o && ("push"in o ? RegExp("(?:" + o.join("|") + ")", "gu") : o), p = f ? RegExp(f.source + "|" + aV.source, "gu") : aV, m = !!e.ignore && aU(e.ignore), {orig: g, animTime: v, obs: _} = this._data, y;
                (c || h || u) && (this.elements.forEach( (t, s) => {
                    g[s] = {
                        element: t,
                        html: t.innerHTML,
                        ariaL: t.getAttribute("aria-label"),
                        ariaH: t.getAttribute("aria-hidden")
                    },
                    "auto" === r ? t.setAttribute("aria-label", (t.textContent || "").trim()) : "hidden" === r && t.setAttribute("aria-hidden", "true");
                    let a = [], o = [], l = [], v = c ? a5("char", e, a) : null, _ = a5("word", e, o), y, b, x, w;
                    if (a3(t, e, _, v, d, i && (u || d), m, p, f, !1),
                    u) {
                        let r, i, n = aW(t.childNodes), s = (r = a5("line", e, l),
                        i = window.getComputedStyle(t).textAlign || "left",
                        (e, s) => {
                            let a = r("");
                            for (a.style.textAlign = i,
                            t.insertBefore(a, n[e]); e < s; e++)
                                a.appendChild(n[e]);
                            a.normalize()
                        }
                        ), a, o = [], u = 0, c = n.map(e => 1 === e.nodeType ? e.getBoundingClientRect() : aK), h = aK, d;
                        for (y = 0; y < n.length; y++)
                            1 === (a = n[y]).nodeType && ("BR" === a.nodeName ? (y && "BR" === n[y - 1].nodeName || (o.push(a),
                            s(u, y + 1)),
                            u = y + 1,
                            h = aQ(c, y)) : (d = c[y],
                            y && d.top > h.top && d.left < h.left + h.width - 1 && (s(u, y),
                            u = y),
                            h = d));
                        u < y && s(u, y),
                        o.forEach(e => {
                            var t;
                            return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                        }
                        )
                    }
                    if (!h) {
                        for (y = 0; y < o.length; y++)
                            if (b = o[y],
                            c || !b.nextSibling || 3 !== b.nextSibling.nodeType)
                                if (n && !u) {
                                    for ((x = document.createElement("span")).style.whiteSpace = "nowrap"; b.firstChild; )
                                        x.appendChild(b.firstChild);
                                    b.replaceWith(x)
                                } else
                                    b.replaceWith(...b.childNodes);
                            else
                                (w = b.nextSibling) && 3 === w.nodeType && (w.textContent = (b.textContent || "") + (w.textContent || ""),
                                b.remove());
                        o.length = 0,
                        t.normalize()
                    }
                    this.lines.push(...l),
                    this.words.push(...o),
                    this.chars.push(...a)
                }
                ),
                l && this[l] && this.masks.push(...this[l].map(e => {
                    let t = e.cloneNode();
                    return e.replaceWith(t),
                    t.appendChild(e),
                    e.className && (t.className = e.className.trim() + "-mask"),
                    t.style.overflow = "clip",
                    t
                }
                ))),
                this.isSplit = !0,
                aF && u && (a ? aF.addEventListener("loadingdone", this._split) : "loading" === aF.status && console.warn("SplitText called before fonts loaded")),
                (y = s && s(this)) && y.totalTime && (this._data.anim = v ? y.totalTime(v) : y),
                u && a && this.elements.forEach( (e, t) => {
                    g[t].width = e.offsetWidth,
                    _ && _.observe(e)
                }
                )
            }
            ),
            this
        }
        kill() {
            let {obs: e} = this._data;
            e && e.disconnect(),
            null == aF || aF.removeEventListener("loadingdone", this._split)
        }
        revert() {
            var e, t;
            if (this.isSplit) {
                let {orig: r, anim: i} = this._data;
                this.kill(),
                r.forEach(aJ),
                this.chars.length = this.words.length = this.lines.length = r.length = this.masks.length = 0,
                this.isSplit = !1,
                i && (this._data.animTime = i.totalTime(),
                i.revert()),
                null == (t = (e = this.vars).onRevert) || t.call(e, this)
            }
            return this
        }
        static create(t, r) {
            return new e(t,r)
        }
        static register(e) {
            (aX = aX || e || window.gsap) && (aW = aX.utils.toArray,
            aH = aX.core.context || aH),
            !a$ && window.innerWidth > 0 && (aF = document.fonts,
            a$ = !0)
        }
    }
    ;
    a6.version = "3.14.2";
    let a8 = a6
      , a4 = "u" > typeof document ? r.useLayoutEffect : r.useEffect
      , a9 = e => e && !Array.isArray(e) && "object" == typeof e
      , a7 = []
      , oe = {}
      , ot = iW
      , or = (e, t=a7) => {
        let i = oe;
        a9(e) ? (i = e,
        e = null,
        t = "dependencies"in i ? i.dependencies : a7) : a9(t) && (t = "dependencies"in (i = t) ? i.dependencies : a7),
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        let {scope: n, revertOnUpdate: s} = i
          , a = (0,
        r.useRef)(!1)
          , o = (0,
        r.useRef)(ot.context( () => {}
        , n))
          , l = (0,
        r.useRef)(e => o.current.add(null, e))
          , u = t && t.length && !s;
        return u && a4( () => (a.current = !0,
        () => o.current.revert()), a7),
        a4( () => {
            if (e && o.current.add(e, n),
            !u || !a.current)
                return () => o.current.revert()
        }
        , t),
        {
            context: o.current,
            contextSafe: l.current
        }
    }
    ;
    or.register = e => {
        ot = e
    }
    ,
    or.headless = !0,
    iW.registerPlugin(az, a8, or);
    let oi = ({text: e, className: i="", delay: n=50, duration: s=1.25, ease: a="power3.out", splitType: o="chars", from: l={
        opacity: 0,
        y: 40
    }, to: u={
        opacity: 1,
        y: 0
    }, threshold: c=.1, rootMargin: h="-100px", textAlign: d="center", tag: f="p", onLetterAnimationComplete: p}) => {
        let m, g = (0,
        r.useRef)(null), v = (0,
        r.useRef)(!1), _ = (0,
        r.useRef)(p), [y,b] = (0,
        r.useState)(!1);
        return (0,
        r.useEffect)( () => {
            _.current = p
        }
        , [p]),
        (0,
        r.useEffect)( () => {
            "loaded" === document.fonts.status ? b(!0) : document.fonts.ready.then( () => {
                b(!0)
            }
            )
        }
        , []),
        or( () => {
            if (!g.current || !e || !y || v.current)
                return;
            let t = g.current;
            if (t._rbsplitInstance) {
                try {
                    t._rbsplitInstance.revert()
                } catch (e) {}
                t._rbsplitInstance = void 0
            }
            let r = (1 - c) * 100
              , i = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(h)
              , d = i ? parseFloat(i[1]) : 0
              , f = i && i[2] || "px"
              , p = 0 === d ? "" : d < 0 ? `-=${Math.abs(d)}${f}` : `+=${d}${f}`
              , m = `top ${r}%${p}`
              , b = []
              , x = new a8(t,{
                type: o,
                smartWrap: !0,
                autoSplit: "lines" === o,
                linesClass: "split-line",
                wordsClass: "split-word",
                charsClass: "split-char",
                reduceWhiteSpace: !1,
                onSplit: e => (o.includes("chars") && e.chars.length && (b = e.chars),
                !b.length && o.includes("words") && e.words.length && (b = e.words),
                !b.length && o.includes("lines") && e.lines.length && (b = e.lines),
                b.length || (b = e.chars || e.words || e.lines),
                iW.fromTo(b, {
                    ...l
                }, {
                    ...u,
                    duration: s,
                    ease: a,
                    stagger: n / 1e3,
                    scrollTrigger: {
                        trigger: t,
                        start: m,
                        once: !0,
                        fastScrollEnd: !0,
                        anticipatePin: .4
                    },
                    onComplete: () => {
                        v.current = !0,
                        _.current?.()
                    }
                    ,
                    willChange: "transform, opacity",
                    force3D: !0
                }))
            });
            return t._rbsplitInstance = x,
            () => {
                az.getAll().forEach(e => {
                    e.trigger === t && e.kill()
                }
                );
                try {
                    x.revert()
                } catch (e) {}
                t._rbsplitInstance = void 0
            }
        }
        , {
            dependencies: [e, n, s, a, o, JSON.stringify(l), JSON.stringify(u), c, h, y],
            scope: g
        }),
        m = `split-parent ${i}`,
        (0,
        t.jsx)(f || "p", {
            ref: g,
            style: {
                textAlign: d,
                overflow: "hidden",
                display: "inline-block",
                whiteSpace: "normal",
                wordWrap: "break-word",
                willChange: "transform, opacity"
            },
            className: m,
            children: e
        })
    }
    ;
    function on() {
        return (0,
        t.jsx)("section", {
            id: "teacher",
            className: "py-32 bg-white border-b border-slate-100 overflow-hidden",
            children: (0,
            t.jsx)("div", {
                className: "max-w-5xl mx-auto px-6",
                children: (0,
                t.jsxs)("div", {
                    className: "flex flex-col md:flex-row items-center gap-12 md:gap-20",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "relative flex-shrink-0",
                        children: [(0,
                        t.jsx)("div", {
                            className: "absolute -inset-6 bg-blue-50 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 duration-500"
                        }), (0,
                        t.jsx)("div", {
                            className: "relative w-64 h-80 md:w-72 md:h-96 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl z-10",
                            children: (0,
                            t.jsx)(a.default, {
                                src: "/hero.jpeg",
                                alt: "ARWINI ARIFUDDIN S.pd",
                                fill: !0,
                                className: "object-cover",
                                priority: !0
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: "absolute -bottom-4 -right-4 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-xl z-20 rotate-3 hidden md:block",
                            children: (0,
                            t.jsx)("p", {
                                className: "text-[10px] font-black uppercase tracking-widest",
                                children: "Lead Mentor"
                            })
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex-1 space-y-8 text-center md:text-left",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0,
                            t.jsx)("span", {
                                className: "text-blue-600 font-bold text-xs tracking-[0.3em] uppercase",
                                children: "Our Teacher"
                            }), (0,
                            t.jsx)("br", {}), (0,
                            t.jsx)(oi, {
                                text: "BEST TEACHER!",
                                className: "text-4xl  text-center ext-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-none",
                                delay: 250,
                                duration: 1.25,
                                ease: "power3.out",
                                splitType: "chars",
                                from: {
                                    opacity: 0,
                                    y: 40
                                },
                                to: {
                                    opacity: 1,
                                    y: 0
                                },
                                threshold: .1,
                                rootMargin: "-100px",
                                textAlign: "center"
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            t.jsx)("span", {
                                className: "absolute -top-6 -left-8 text-8xl text-slate-100 font-serif leading-none -z-10",
                                children: '"'
                            }), (0,
                            t.jsx)("div", {
                                className: "text-xl md:text-2xl font-medium text-slate-700 italic leading-relaxed relative z-10",
                                children: (0,
                                t.jsx)(iH, {
                                    text: "Teruslah bermimpi dan jangan pernah berhenti belajar.   Dunia teknologi menunggu karya kalian selanjutnya.",
                                    delay: 250,
                                    animateBy: "words",
                                    direction: "top",
                                    className: "text-2xl mb-8"
                                })
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "pt-4 border-t border-slate-100",
                            children: [(0,
                            t.jsx)("p", {
                                className: "font-black tracking-tighter text-slate-900 uppercase text-2xl",
                                children: "ARWINI ARIFUDDIN S.pd"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-blue-600 font-bold text-xs tracking-[0.2em] uppercase mt-1",
                                children: "Wali Kelas XII TKJ & PH"
                            })]
                        })]
                    })]
                })
            })
        })
    }
    function os({name: e, title: r, avatar: i, instagram: n}) {
        return (0,
        t.jsxs)("div", {
            className: "group relative bg-white rounded-2xl p-3 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500",
            children: [(0,
            t.jsxs)("div", {
                className: "relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-slate-50",
                children: [(0,
                t.jsx)(a.default, {
                    src: i || `https://avatar.vercel.sh/${e}`,
                    alt: `${e}'s profile`,
                    fill: !0,
                    sizes: "(max-width: 768px) 50vw, 20vw",
                    className: "object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                }), (0,
                t.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                })]
            }), (0,
            t.jsxs)("div", {
                className: "text-center space-y-1",
                children: [(0,
                t.jsx)("h3", {
                    className: "text-[13px] font-black text-slate-900 truncate leading-none uppercase tracking-tight",
                    children: e
                }), (0,
                t.jsx)("p", {
                    className: "text-[9px] text-blue-600 font-bold uppercase tracking-[0.2em]",
                    children: r || "XII TKJ & PH"
                })]
            }), (0,
            t.jsxs)("button", {
                onClick: e => {
                    if (e.stopPropagation(),
                    n) {
                        let e = n.replace("@", "");
                        window.open(`https://instagram.com/${e}`, "_blank")
                    }
                }
                ,
                disabled: !n,
                className: `w-full mt-4 py-2 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2
          ${n ? "bg-slate-900 text-white opacity-100 translate-y-0 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 hover:bg-blue-600" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`,
                children: [(0,
                t.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0,
                    t.jsx)("rect", {
                        width: "20",
                        height: "20",
                        x: "2",
                        y: "2",
                        rx: "5",
                        ry: "5"
                    }), (0,
                    t.jsx)("path", {
                        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    }), (0,
                    t.jsx)("line", {
                        x1: "17.5",
                        x2: "17.51",
                        y1: "6.5",
                        y2: "6.5"
                    })]
                }), n ? "Connect" : "Private"]
            })]
        })
    }
    let oa = [{
        name: "AL Fauzan",
        title: "XII PH Student",
        avatarUrl: "/public/images/compressed/students/uca.webp",
        instagram: "f4uz4n_19"
    }, {
        name: "AL Fauzi",
        title: "XII PH Student",
        avatarUrl: "/public/images/compressed/students/uca.webp",
        instagram: "fzuyx"
    }, {
        name: "Adrian",
        title: "XII PH Student",
        avatarUrl: "/public/images/compressed/students/adrian.webp",
        instagram: "userr7name_"
    }, {
        name: "Andika",
        title: "XII PH Student",
        avatarUrl: "/public/images/compressed/students/andika.webp",
        instagram: "dika_saja321"
    }, {
        name: "Azizah",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/ica.webp",
        instagram: "andi_.azizah"
    }, {
        name: "Fauzan",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/fauzan.webp",
        instagram: "fauzan18543"
    }, {
        name: "Fadlan",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/fadlan.webp",
        instagram: "blueskyy4u"
    }, {
        name: "Fardin",
        title: "XII PH Student",
        avatarUrl: "/public/images/compressed/students/fardin.webp",
        instagram: "stron9gentlem4n"
    }, {
        name: "Hasmal",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/hasmal.webp",
    }, {
        name: "Kiky",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/kiky.webp",
        instagram: "latho05"
    }, {
        name: "Madina",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/madina.webp",
        instagram: "rfiyx_"
    }, {
        name: "Putri",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/putri.webp",
        instagram: "puthee_jiee2"
    }, {
        name: "Rani",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/rani.webp",
        instagram: "raniyati_22"
    }, {
        name: "Sahir",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/sahir.webp",
    }, {
        name: "Slamet",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/slamet.webp",
        instagram: "280329.scn"
    }, {
        name: "Nisa",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/nisa.webp",
        instagram: "hlizaaaa___"
    }, {
        name: "Akbar",
        title: "XII PH Student",
        avatarUrl: "/public/images/compressed/students/akbar.webp",
    }, {
        name: "Reski Eka",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/eka.webp",
        instagram: "rekamansyah_ytr"
    }, {
        name: "Iqbal",
        title: "XII TKJ Student",
        avatarUrl: "/public/images/compressed/students/iqbal.webp",
    }]
      , oo = (0,
    i.default)( () => e.A(69096), {
        loadableGenerated: {
            modules: [1162]
        },
        ssr: !1
    })
      , ol = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .1
            }
        }
    }
      , ou = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
                ease: "easeOut"
            }
        }
    };
    function oc({mounted: e}) {
        let[i,n] = (0,
        r.useState)("")
          , s = (0,
        r.useMemo)( () => oa.map(e => e.name).join(" "), [])
          , a = (0,
        r.useMemo)( () => oa.filter(e => e.name.toLowerCase().includes(i.toLowerCase())), [i]);
        return (0,
        t.jsx)("section", {
            id: "students",
            className: "w-full py-24 bg-slate-50",
            children: (0,
            t.jsxs)("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        t.jsx)("span", {
                            className: "text-blue-600 font-bold text-xs tracking-[0.3em] uppercase",
                            children: "The Members"
                        }), (0,
                        t.jsx)("h2", {
                            className: "text-5xl font-black tracking-tighter italic uppercase",
                            children: "The Squad"
                        }), (0,
                        t.jsx)("div", {
                            className: "h-1 w-20 bg-blue-600 rounded-full"
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: "relative group",
                        children: (0,
                        t.jsx)("input", {
                            type: "text",
                            placeholder: "Find a classmate...",
                            className: "pl-5 pr-12 py-3 rounded-2xl border border-slate-200 text-sm w-full md:w-72 bg-white shadow-sm focus:ring-4 focus:ring-blue-500/10 transition-all outline-none",
                            onChange: e => n(e.target.value)
                        })
                    })]
                }), (0,
                t.jsx)(o.motion.div, {
                    variants: ol,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0,
                        margin: "-50px"
                    },
                    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6",
                    children: a.map(e => (0,
                    t.jsx)(o.motion.div, {
                        variants: ou,
                        children: (0,
                        t.jsx)(os, {
                            name: e.name,
                            title: e.title,
                            avatar: e.avatarUrl,
                            instagram: e.instagram
                        })
                    }, e.name))
                }), (0,
                t.jsxs)("div", {
                    className: "mt-32",
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-center text-[10px] font-bold text-slate-400 tracking-[0.2em] mb-6 uppercase",
                        children: "Interactive Name"
                    }), (0,
                    t.jsx)("div", {
                        className: "w-full h-[450px] border border-slate-200 rounded-[2rem] overflow-hidden bg-white shadow-inner relative",
                        children: e && (0,
                        t.jsx)(oo, {
                            text: s,
                            trigger: "click",
                            fontSize: "2rem",
                            gravity: .6
                        })
                    })]
                })]
            })
        })
    }
    var oh = function() {
        return (oh = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r])
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }
        ).apply(this, arguments)
    }
      , od = {
        scale: 1,
        zoom: !0,
        infiniteZoom: !0,
        actualSize: !0,
        showZoomInOutIcons: !1,
        actualSizeIcons: {
            zoomIn: "lg-zoom-in",
            zoomOut: "lg-zoom-out"
        },
        enableZoomAfter: 300,
        zoomPluginStrings: {
            zoomIn: "Zoom in",
            zoomOut: "Zoom out",
            viewActualSize: "View actual size"
        }
    }
      , of = function() {
        function e(e, t) {
            return this.core = e,
            this.$LG = t,
            this.settings = oh(oh({}, od), this.core.settings),
            this
        }
        return e.prototype.buildTemplates = function() {
            var e = this.settings.showZoomInOutIcons ? '<button id="' + this.core.getIdName("lg-zoom-in") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.zoomIn + '" class="lg-zoom-in lg-icon"></button><button id="' + this.core.getIdName("lg-zoom-out") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.zoomOut + '" class="lg-zoom-out lg-icon"></button>' : "";
            this.settings.actualSize && (e += '<button id="' + this.core.getIdName("lg-actual-size") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.viewActualSize + '" class="' + this.settings.actualSizeIcons.zoomIn + ' lg-icon"></button>'),
            this.core.outer.addClass("lg-use-transition-for-zoom"),
            this.core.$toolbar.first().append(e)
        }
        ,
        e.prototype.enableZoom = function(e) {
            var t = this
              , r = this.settings.enableZoomAfter + e.detail.delay;
            this.$LG("body").first().hasClass("lg-from-hash") && e.detail.delay ? r = 0 : this.$LG("body").first().removeClass("lg-from-hash"),
            this.zoomableTimeout = setTimeout(function() {
                t.isImageSlide(t.core.index) && (t.core.getSlideItem(e.detail.index).addClass("lg-zoomable"),
                e.detail.index === t.core.index && t.setZoomEssentials())
            }, r + 30)
        }
        ,
        e.prototype.enableZoomOnSlideItemLoad = function() {
            this.core.LGel.on("lgSlideItemLoad.zoom", this.enableZoom.bind(this))
        }
        ,
        e.prototype.getDragCords = function(e) {
            return {
                x: e.pageX,
                y: e.pageY
            }
        }
        ,
        e.prototype.getSwipeCords = function(e) {
            return {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            }
        }
        ,
        e.prototype.getDragAllowedAxises = function(e, t) {
            if (!this.containerRect)
                return {
                    allowX: !1,
                    allowY: !1
                };
            var r = this.core.getSlideItem(this.core.index).find(".lg-image").first().get()
              , i = 0
              , n = 0
              , s = r.getBoundingClientRect();
            e ? (i = r.offsetHeight * e,
            n = r.offsetWidth * e) : t ? (i = s.height + t * s.height,
            n = s.width + t * s.width) : (i = s.height,
            n = s.width);
            var a = i > this.containerRect.height;
            return {
                allowX: n > this.containerRect.width,
                allowY: a
            }
        }
        ,
        e.prototype.setZoomEssentials = function() {
            this.containerRect = this.core.$content.get().getBoundingClientRect()
        }
        ,
        e.prototype.zoomImage = function(e, t, r, i) {
            if (!(!this.containerRect || 0 >= Math.abs(t))) {
                var n, s, a, o, l = this.containerRect.width / 2 + this.containerRect.left, u = this.containerRect.height / 2 + this.containerRect.top + this.scrollTop;
                1 === e && (this.positionChanged = !1);
                var c = this.getDragAllowedAxises(0, t)
                  , h = c.allowY
                  , d = c.allowX;
                this.positionChanged && (n = this.left / (this.scale - t),
                s = this.top / (this.scale - t),
                this.pageX = l - n,
                this.pageY = u - s,
                this.positionChanged = !1);
                var f = this.getPossibleSwipeDragCords(t)
                  , p = l - this.pageX
                  , m = u - this.pageY;
                if (e - t > 1) {
                    var g = (e - t) / Math.abs(t);
                    p = (t < 0 ? -p : p) + this.left * (g + (t < 0 ? -1 : 1)),
                    m = (t < 0 ? -m : m) + this.top * (g + (t < 0 ? -1 : 1)),
                    a = p / g,
                    o = m / g
                } else {
                    var g = (e - t) * t;
                    a = p * g,
                    o = m * g
                }
                r && (d ? this.isBeyondPossibleLeft(a, f.minX) ? a = f.minX : this.isBeyondPossibleRight(a, f.maxX) && (a = f.maxX) : e > 1 && (a < f.minX ? a = f.minX : a > f.maxX && (a = f.maxX)),
                h ? this.isBeyondPossibleTop(o, f.minY) ? o = f.minY : this.isBeyondPossibleBottom(o, f.maxY) && (o = f.maxY) : e > 1 && (o < f.minY ? o = f.minY : o > f.maxY && (o = f.maxY))),
                this.setZoomStyles({
                    x: a,
                    y: o,
                    scale: e
                }),
                this.left = a,
                this.top = o,
                i && this.setZoomImageSize()
            }
        }
        ,
        e.prototype.resetImageTranslate = function(e) {
            if (this.isImageSlide(e)) {
                var t = this.core.getSlideItem(e).find(".lg-image").first();
                this.imageReset = !1,
                t.removeClass("reset-transition reset-transition-y reset-transition-x"),
                this.core.outer.removeClass("lg-actual-size"),
                t.css("width", "auto").css("height", "auto"),
                setTimeout(function() {
                    t.removeClass("no-transition")
                }, 10)
            }
        }
        ,
        e.prototype.setZoomImageSize = function() {
            var e = this
              , t = this.core.getSlideItem(this.core.index).find(".lg-image").first();
            setTimeout(function() {
                var r = e.getCurrentImageActualSizeScale();
                e.scale >= r && (t.addClass("no-transition"),
                e.imageReset = !0)
            }, 500),
            setTimeout(function() {
                var r = e.getCurrentImageActualSizeScale();
                if (e.scale >= r) {
                    var i = e.getDragAllowedAxises(e.scale);
                    t.css("width", t.get().naturalWidth + "px").css("height", t.get().naturalHeight + "px"),
                    e.core.outer.addClass("lg-actual-size"),
                    i.allowX && i.allowY ? t.addClass("reset-transition") : i.allowX && !i.allowY ? t.addClass("reset-transition-x") : !i.allowX && i.allowY && t.addClass("reset-transition-y")
                }
            }, 550)
        }
        ,
        e.prototype.setZoomStyles = function(e) {
            var t = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first()
              , r = this.core.getSlideItem(this.core.index).find(".lg-image").first()
              , i = this.core.outer.find(".lg-current .lg-dummy-img").first();
            this.scale = e.scale,
            r.css("transform", "scale3d(" + e.scale + ", " + e.scale + ", 1)"),
            i.css("transform", "scale3d(" + e.scale + ", " + e.scale + ", 1)");
            var n = "translate3d(" + e.x + "px, " + e.y + "px, 0)";
            t.css("transform", n)
        }
        ,
        e.prototype.setActualSize = function(e, t) {
            var r = this;
            if (!this.zoomInProgress) {
                this.zoomInProgress = !0;
                var i = this.core.galleryItems[this.core.index];
                this.resetImageTranslate(e),
                setTimeout(function() {
                    if (!(!i.src || r.core.outer.hasClass("lg-first-slide-loading"))) {
                        var e = r.getCurrentImageActualSizeScale()
                          , n = r.scale;
                        r.core.outer.hasClass("lg-zoomed") ? r.scale = 1 : r.scale = r.getScale(e),
                        r.setPageCords(t),
                        r.beginZoom(r.scale),
                        r.zoomImage(r.scale, r.scale - n, !0, !0)
                    }
                }, 50),
                setTimeout(function() {
                    r.core.outer.removeClass("lg-grabbing").addClass("lg-grab")
                }, 60),
                setTimeout(function() {
                    r.zoomInProgress = !1
                }, 610)
            }
        }
        ,
        e.prototype.getNaturalWidth = function(e) {
            var t = this.core.getSlideItem(e).find(".lg-image").first()
              , r = this.core.galleryItems[e].width;
            return r ? parseFloat(r) : t.get().naturalWidth
        }
        ,
        e.prototype.getActualSizeScale = function(e, t) {
            return e >= t ? e / t || 2 : 1
        }
        ,
        e.prototype.getCurrentImageActualSizeScale = function() {
            var e = this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth
              , t = this.getNaturalWidth(this.core.index) || e;
            return this.getActualSizeScale(t, e)
        }
        ,
        e.prototype.getPageCords = function(e) {
            var t = {};
            if (e)
                t.x = e.pageX || e.touches[0].pageX,
                t.y = e.pageY || e.touches[0].pageY;
            else {
                var r = this.core.$content.get().getBoundingClientRect();
                t.x = r.width / 2 + r.left,
                t.y = r.height / 2 + this.scrollTop + r.top
            }
            return t
        }
        ,
        e.prototype.setPageCords = function(e) {
            var t = this.getPageCords(e);
            this.pageX = t.x,
            this.pageY = t.y
        }
        ,
        e.prototype.manageActualPixelClassNames = function() {
            this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)
        }
        ,
        e.prototype.beginZoom = function(e) {
            return this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),
            e > 1 ? (this.core.outer.addClass("lg-zoomed"),
            this.manageActualPixelClassNames()) : this.resetZoom(),
            e > 1
        }
        ,
        e.prototype.getScale = function(e) {
            var t = this.getCurrentImageActualSizeScale();
            return e < 1 ? e = 1 : e > t && (e = t),
            e
        }
        ,
        e.prototype.init = function() {
            var e = this;
            if (this.settings.zoom) {
                this.buildTemplates(),
                this.enableZoomOnSlideItemLoad();
                var t = null;
                this.core.outer.on("dblclick.lg", function(t) {
                    e.$LG(t.target).hasClass("lg-image") && e.setActualSize(e.core.index, t)
                }),
                this.core.outer.on("touchstart.lg", function(r) {
                    var i = e.$LG(r.target);
                    1 === r.touches.length && i.hasClass("lg-image") && (t ? (clearTimeout(t),
                    t = null,
                    r.preventDefault(),
                    e.setActualSize(e.core.index, r)) : t = setTimeout(function() {
                        t = null
                    }, 300))
                }),
                this.core.LGel.on("lgContainerResize.zoom lgRotateRight.zoom lgRotateLeft.zoom lgFlipHorizontal.zoom lgFlipVertical.zoom", function() {
                    if (e.core.lgOpened && e.isImageSlide(e.core.index) && !e.core.touchAction) {
                        var t = e.core.getSlideItem(e.core.index).find(".lg-img-wrap").first();
                        e.top = 0,
                        e.left = 0,
                        e.setZoomEssentials(),
                        e.setZoomSwipeStyles(t, {
                            x: 0,
                            y: 0
                        }),
                        e.positionChanged = !0
                    }
                }),
                this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function() {
                    e.core.lgOpened && (e.scrollTop = e.$LG(window).scrollTop())
                }),
                this.core.getElementById("lg-zoom-out").on("click.lg", function() {
                    if (e.isImageSlide(e.core.index)) {
                        var t = 0;
                        e.imageReset && (e.resetImageTranslate(e.core.index),
                        t = 50),
                        setTimeout(function() {
                            var t = e.scale - e.settings.scale;
                            t < 1 && (t = 1),
                            e.beginZoom(t),
                            e.zoomImage(t, -e.settings.scale, !0, !e.settings.infiniteZoom)
                        }, t)
                    }
                }),
                this.core.getElementById("lg-zoom-in").on("click.lg", function() {
                    e.zoomIn()
                }),
                this.core.getElementById("lg-actual-size").on("click.lg", function() {
                    e.setActualSize(e.core.index)
                }),
                this.core.LGel.on("lgBeforeOpen.zoom", function() {
                    e.core.outer.find(".lg-item").removeClass("lg-zoomable")
                }),
                this.core.LGel.on("lgAfterOpen.zoom", function() {
                    e.scrollTop = e.$LG(window).scrollTop(),
                    e.pageX = e.core.outer.width() / 2,
                    e.pageY = e.core.outer.height() / 2 + e.scrollTop,
                    e.scale = 1
                }),
                this.core.LGel.on("lgAfterSlide.zoom", function(t) {
                    var r = t.detail.prevIndex;
                    e.scale = 1,
                    e.positionChanged = !1,
                    e.zoomInProgress = !1,
                    e.resetZoom(r),
                    e.resetImageTranslate(r),
                    e.isImageSlide(e.core.index) && e.setZoomEssentials()
                }),
                this.zoomDrag(),
                this.pinchZoom(),
                this.zoomSwipe(),
                this.zoomableTimeout = !1,
                this.positionChanged = !1,
                this.zoomInProgress = !1
            }
        }
        ,
        e.prototype.zoomIn = function() {
            if (this.isImageSlide(this.core.index)) {
                var e = this.scale + this.settings.scale;
                this.settings.infiniteZoom || (e = this.getScale(e)),
                this.beginZoom(e),
                this.zoomImage(e, Math.min(this.settings.scale, e - this.scale), !0, !this.settings.infiniteZoom)
            }
        }
        ,
        e.prototype.resetZoom = function(e) {
            this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");
            var t = this.core.getElementById("lg-actual-size")
              , r = this.core.getSlideItem(void 0 !== e ? e : this.core.index);
            t.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn),
            r.find(".lg-img-wrap").first().removeAttr("style"),
            r.find(".lg-image").first().removeAttr("style"),
            this.scale = 1,
            this.left = 0,
            this.top = 0,
            this.setPageCords()
        }
        ,
        e.prototype.getTouchDistance = function(e) {
            return Math.sqrt((e.touches[0].pageX - e.touches[1].pageX) * (e.touches[0].pageX - e.touches[1].pageX) + (e.touches[0].pageY - e.touches[1].pageY) * (e.touches[0].pageY - e.touches[1].pageY))
        }
        ,
        e.prototype.pinchZoom = function() {
            var e = this
              , t = 0
              , r = !1
              , i = 1
              , n = 0
              , s = this.core.getSlideItem(this.core.index);
            this.core.outer.on("touchstart.lg", function(r) {
                s = e.core.getSlideItem(e.core.index),
                e.isImageSlide(e.core.index) && 2 === r.touches.length && (r.preventDefault(),
                e.core.outer.hasClass("lg-first-slide-loading") || (i = e.scale || 1,
                e.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),
                e.setPageCords(r),
                e.resetImageTranslate(e.core.index),
                e.core.touchAction = "pinch",
                t = e.getTouchDistance(r)))
            }),
            this.core.$inner.on("touchmove.lg", function(a) {
                if (2 === a.touches.length && "pinch" === e.core.touchAction && (e.$LG(a.target).hasClass("lg-item") || s.get().contains(a.target))) {
                    a.preventDefault();
                    var o = e.getTouchDistance(a)
                      , l = t - o;
                    if (!r && Math.abs(l) > 5 && (r = !0),
                    r) {
                        n = e.scale,
                        e.scale = Math.round((Math.max(1, i + -(.02 * l)) + Number.EPSILON) * 100) / 100;
                        var u = e.scale - n;
                        e.zoomImage(e.scale, Math.round((u + Number.EPSILON) * 100) / 100, !1, !1)
                    }
                }
            }),
            this.core.$inner.on("touchend.lg", function(i) {
                if ("pinch" === e.core.touchAction && (e.$LG(i.target).hasClass("lg-item") || s.get().contains(i.target))) {
                    if (r = !1,
                    t = 0,
                    e.scale <= 1)
                        e.resetZoom();
                    else {
                        var n = e.getCurrentImageActualSizeScale();
                        if (e.scale >= n) {
                            var a = n - e.scale;
                            0 === a && (a = .01),
                            e.zoomImage(n, a, !1, !0)
                        }
                        e.manageActualPixelClassNames(),
                        e.core.outer.addClass("lg-zoomed")
                    }
                    e.core.touchAction = void 0
                }
            })
        }
        ,
        e.prototype.touchendZoom = function(e, t, r, i, n) {
            var s = t.x - e.x
              , a = t.y - e.y
              , o = Math.abs(s) / n + 1
              , l = Math.abs(a) / n + 1;
            o > 2 && (o += 1),
            l > 2 && (l += 1),
            s *= o,
            a *= l;
            var u = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first()
              , c = {};
            c.x = this.left + s,
            c.y = this.top + a;
            var h = this.getPossibleSwipeDragCords();
            (Math.abs(s) > 15 || Math.abs(a) > 15) && (i && (this.isBeyondPossibleTop(c.y, h.minY) ? c.y = h.minY : this.isBeyondPossibleBottom(c.y, h.maxY) && (c.y = h.maxY)),
            r && (this.isBeyondPossibleLeft(c.x, h.minX) ? c.x = h.minX : this.isBeyondPossibleRight(c.x, h.maxX) && (c.x = h.maxX)),
            i ? this.top = c.y : c.y = this.top,
            r ? this.left = c.x : c.x = this.left,
            this.setZoomSwipeStyles(u, c),
            this.positionChanged = !0)
        }
        ,
        e.prototype.getZoomSwipeCords = function(e, t, r, i, n) {
            var s = {};
            if (i) {
                if (s.y = this.top + (t.y - e.y),
                this.isBeyondPossibleTop(s.y, n.minY)) {
                    var a = n.minY - s.y;
                    s.y = n.minY - a / 6
                } else if (this.isBeyondPossibleBottom(s.y, n.maxY)) {
                    var o = s.y - n.maxY;
                    s.y = n.maxY + o / 6
                }
            } else
                s.y = this.top;
            if (r) {
                if (s.x = this.left + (t.x - e.x),
                this.isBeyondPossibleLeft(s.x, n.minX)) {
                    var l = n.minX - s.x;
                    s.x = n.minX - l / 6
                } else if (this.isBeyondPossibleRight(s.x, n.maxX)) {
                    var u = s.x - n.maxX;
                    s.x = n.maxX + u / 6
                }
            } else
                s.x = this.left;
            return s
        }
        ,
        e.prototype.isBeyondPossibleLeft = function(e, t) {
            return e >= t
        }
        ,
        e.prototype.isBeyondPossibleRight = function(e, t) {
            return e <= t
        }
        ,
        e.prototype.isBeyondPossibleTop = function(e, t) {
            return e >= t
        }
        ,
        e.prototype.isBeyondPossibleBottom = function(e, t) {
            return e <= t
        }
        ,
        e.prototype.isImageSlide = function(e) {
            var t = this.core.galleryItems[e];
            return "image" === this.core.getSlideType(t)
        }
        ,
        e.prototype.getPossibleSwipeDragCords = function(e) {
            var t = this.core.getSlideItem(this.core.index).find(".lg-image").first()
              , r = this.core.mediaContainerPosition.bottom
              , i = t.get().getBoundingClientRect()
              , n = i.height
              , s = i.width;
            return e && (n += e * n,
            s += e * s),
            {
                minY: (n - this.containerRect.height) / 2,
                maxY: (this.containerRect.height - n) / 2 + r,
                minX: (s - this.containerRect.width) / 2,
                maxX: (this.containerRect.width - s) / 2
            }
        }
        ,
        e.prototype.setZoomSwipeStyles = function(e, t) {
            e.css("transform", "translate3d(" + t.x + "px, " + t.y + "px, 0)")
        }
        ,
        e.prototype.zoomSwipe = function() {
            var e, t, r = this, i = {}, n = {}, s = !1, a = !1, o = !1, l = new Date, u = new Date, c = this.core.getSlideItem(this.core.index);
            this.core.$inner.on("touchstart.lg", function(n) {
                if (r.isImageSlide(r.core.index) && (c = r.core.getSlideItem(r.core.index),
                (r.$LG(n.target).hasClass("lg-item") || c.get().contains(n.target)) && 1 === n.touches.length && r.core.outer.hasClass("lg-zoomed"))) {
                    n.preventDefault(),
                    l = new Date,
                    r.core.touchAction = "zoomSwipe",
                    t = r.core.getSlideItem(r.core.index).find(".lg-img-wrap").first();
                    var s = r.getDragAllowedAxises(0);
                    o = s.allowY,
                    ((a = s.allowX) || o) && (i = r.getSwipeCords(n)),
                    e = r.getPossibleSwipeDragCords(),
                    r.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition")
                }
            }),
            this.core.$inner.on("touchmove.lg", function(l) {
                if (1 === l.touches.length && "zoomSwipe" === r.core.touchAction && (r.$LG(l.target).hasClass("lg-item") || c.get().contains(l.target))) {
                    l.preventDefault(),
                    r.core.touchAction = "zoomSwipe",
                    n = r.getSwipeCords(l);
                    var u = r.getZoomSwipeCords(i, n, a, o, e);
                    (Math.abs(n.x - i.x) > 15 || Math.abs(n.y - i.y) > 15) && (s = !0,
                    r.setZoomSwipeStyles(t, u))
                }
            }),
            this.core.$inner.on("touchend.lg", function(e) {
                if ("zoomSwipe" === r.core.touchAction && (r.$LG(e.target).hasClass("lg-item") || c.get().contains(e.target)) && (e.preventDefault(),
                r.core.touchAction = void 0,
                r.core.outer.removeClass("lg-zoom-dragging"),
                s)) {
                    s = !1;
                    var t = new Date().valueOf() - l.valueOf();
                    r.touchendZoom(i, n, a, o, t)
                }
            })
        }
        ,
        e.prototype.zoomDrag = function() {
            var e, t, r, i, n = this, s = {}, a = {}, o = !1, l = !1, u = !1, c = !1;
            this.core.outer.on("mousedown.lg.zoom", function(t) {
                if (n.isImageSlide(n.core.index)) {
                    var a = n.core.getSlideItem(n.core.index);
                    if (n.$LG(t.target).hasClass("lg-item") || a.get().contains(t.target)) {
                        e = new Date,
                        i = n.core.getSlideItem(n.core.index).find(".lg-img-wrap").first();
                        var l = n.getDragAllowedAxises(0);
                        c = l.allowY,
                        u = l.allowX,
                        n.core.outer.hasClass("lg-zoomed") && n.$LG(t.target).hasClass("lg-object") && (u || c) && (t.preventDefault(),
                        s = n.getDragCords(t),
                        r = n.getPossibleSwipeDragCords(),
                        o = !0,
                        n.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"))
                    }
                }
            }),
            this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function(e) {
                if (o) {
                    l = !0,
                    a = n.getDragCords(e);
                    var t = n.getZoomSwipeCords(s, a, u, c, r);
                    n.setZoomSwipeStyles(i, t)
                }
            }),
            this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function(r) {
                if (o) {
                    if (t = new Date,
                    o = !1,
                    n.core.outer.removeClass("lg-zoom-dragging"),
                    l && (s.x !== a.x || s.y !== a.y)) {
                        a = n.getDragCords(r);
                        var i = t.valueOf() - e.valueOf();
                        n.touchendZoom(s, a, u, c, i)
                    }
                    l = !1
                }
                n.core.outer.removeClass("lg-grabbing").addClass("lg-grab")
            })
        }
        ,
        e.prototype.closeGallery = function() {
            this.resetZoom(),
            this.zoomInProgress = !1
        }
        ,
        e.prototype.destroy = function() {
            this.$LG(window).off(".lg.zoom.global" + this.core.lgId),
            this.core.LGel.off(".lg.zoom"),
            this.core.LGel.off(".zoom"),
            clearTimeout(this.zoomableTimeout),
            this.zoomableTimeout = !1
        }
        ,
        e
    }()
      , op = function() {
        return (op = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r])
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }
        ).apply(this, arguments)
    }
      , om = {
        thumbnail: !0,
        animateThumb: !0,
        currentPagerPosition: "middle",
        alignThumbnails: "middle",
        thumbWidth: 100,
        thumbHeight: "80px",
        thumbMargin: 5,
        appendThumbnailsTo: ".lg-components",
        toggleThumb: !1,
        enableThumbDrag: !0,
        enableThumbSwipe: !0,
        thumbnailSwipeThreshold: 10,
        loadYouTubeThumbnail: !0,
        youTubeThumbSize: 1,
        thumbnailPluginStrings: {
            toggleThumbnails: "Toggle thumbnails"
        }
    }
      , og = "lgBeforeSlide"
      , ov = function() {
        function e(e, t) {
            return this.thumbOuterWidth = 0,
            this.thumbTotalWidth = 0,
            this.translateX = 0,
            this.thumbClickable = !1,
            this.core = e,
            this.$LG = t,
            this
        }
        return e.prototype.init = function() {
            this.settings = op(op({}, om), this.core.settings),
            this.thumbOuterWidth = 0,
            this.thumbTotalWidth = this.core.galleryItems.length * (this.settings.thumbWidth + this.settings.thumbMargin),
            this.translateX = 0,
            this.setAnimateThumbStyles(),
            this.core.settings.allowMediaOverlap || (this.settings.toggleThumb = !1),
            this.settings.thumbnail && (this.build(),
            this.settings.animateThumb ? (this.settings.enableThumbDrag && this.enableThumbDrag(),
            this.settings.enableThumbSwipe && this.enableThumbSwipe(),
            this.thumbClickable = !1) : this.thumbClickable = !0,
            this.toggleThumbBar(),
            this.thumbKeyPress())
        }
        ,
        e.prototype.build = function() {
            var e = this;
            this.setThumbMarkup(),
            this.manageActiveClassOnSlideChange(),
            this.$lgThumb.first().on("click.lg touchend.lg", function(t) {
                var r = e.$LG(t.target);
                r.hasAttribute("data-lg-item-id") && setTimeout(function() {
                    if (e.thumbClickable && !e.core.lgBusy) {
                        var t = parseInt(r.attr("data-lg-item-id"));
                        e.core.slide(t, !1, !0, !1)
                    }
                }, 50)
            }),
            this.core.LGel.on(og + ".thumb", function(t) {
                var r = t.detail.index;
                e.animateThumb(r)
            }),
            this.core.LGel.on("lgBeforeOpen.thumb", function() {
                e.thumbOuterWidth = e.core.outer.get().offsetWidth
            }),
            this.core.LGel.on("lgUpdateSlides.thumb", function() {
                e.rebuildThumbnails()
            }),
            this.core.LGel.on("lgContainerResize.thumb", function() {
                e.core.lgOpened && setTimeout(function() {
                    e.thumbOuterWidth = e.core.outer.get().offsetWidth,
                    e.animateThumb(e.core.index),
                    e.thumbOuterWidth = e.core.outer.get().offsetWidth
                }, 50)
            })
        }
        ,
        e.prototype.setThumbMarkup = function() {
            var e = "lg-thumb-outer ";
            this.settings.alignThumbnails && (e += "lg-thumb-align-" + this.settings.alignThumbnails);
            var t = '<div class="' + e + '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
            this.core.outer.addClass("lg-has-thumb"),
            ".lg-components" === this.settings.appendThumbnailsTo ? this.core.$lgComponents.append(t) : this.core.outer.append(t),
            this.$thumbOuter = this.core.outer.find(".lg-thumb-outer").first(),
            this.$lgThumb = this.core.outer.find(".lg-thumb").first(),
            this.settings.animateThumb && this.core.outer.find(".lg-thumb").css("transition-duration", this.core.settings.speed + "ms").css("width", this.thumbTotalWidth + "px").css("position", "relative"),
            this.setThumbItemHtml(this.core.galleryItems)
        }
        ,
        e.prototype.enableThumbDrag = function() {
            var e = this
              , t = {
                cords: {
                    startX: 0,
                    endX: 0
                },
                isMoved: !1,
                newTranslateX: 0,
                startTime: new Date,
                endTime: new Date,
                touchMoveTime: 0
            }
              , r = !1;
            this.$thumbOuter.addClass("lg-grab"),
            this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb", function(i) {
                e.thumbTotalWidth > e.thumbOuterWidth && (i.preventDefault(),
                t.cords.startX = i.pageX,
                t.startTime = new Date,
                e.thumbClickable = !1,
                r = !0,
                e.core.outer.get().scrollLeft += 1,
                e.core.outer.get().scrollLeft -= 1,
                e.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
            }),
            this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, function(i) {
                e.core.lgOpened && r && (t.cords.endX = i.pageX,
                t = e.onThumbTouchMove(t))
            }),
            this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, function() {
                e.core.lgOpened && (t.isMoved ? t = e.onThumbTouchEnd(t) : e.thumbClickable = !0,
                r && (r = !1,
                e.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")))
            })
        }
        ,
        e.prototype.enableThumbSwipe = function() {
            var e = this
              , t = {
                cords: {
                    startX: 0,
                    endX: 0
                },
                isMoved: !1,
                newTranslateX: 0,
                startTime: new Date,
                endTime: new Date,
                touchMoveTime: 0
            };
            this.$lgThumb.on("touchstart.lg", function(r) {
                e.thumbTotalWidth > e.thumbOuterWidth && (r.preventDefault(),
                t.cords.startX = r.targetTouches[0].pageX,
                e.thumbClickable = !1,
                t.startTime = new Date)
            }),
            this.$lgThumb.on("touchmove.lg", function(r) {
                e.thumbTotalWidth > e.thumbOuterWidth && (r.preventDefault(),
                t.cords.endX = r.targetTouches[0].pageX,
                t = e.onThumbTouchMove(t))
            }),
            this.$lgThumb.on("touchend.lg", function() {
                t.isMoved ? t = e.onThumbTouchEnd(t) : e.thumbClickable = !0
            })
        }
        ,
        e.prototype.rebuildThumbnails = function() {
            var e = this;
            this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),
            setTimeout(function() {
                e.thumbTotalWidth = e.core.galleryItems.length * (e.settings.thumbWidth + e.settings.thumbMargin),
                e.$lgThumb.css("width", e.thumbTotalWidth + "px"),
                e.$lgThumb.empty(),
                e.setThumbItemHtml(e.core.galleryItems),
                e.animateThumb(e.core.index)
            }, 50),
            setTimeout(function() {
                e.$thumbOuter.removeClass("lg-rebuilding-thumbnails")
            }, 200)
        }
        ,
        e.prototype.setTranslate = function(e) {
            this.$lgThumb.css("transform", "translate3d(-" + e + "px, 0px, 0px)")
        }
        ,
        e.prototype.getPossibleTransformX = function(e) {
            return e > this.thumbTotalWidth - this.thumbOuterWidth && (e = this.thumbTotalWidth - this.thumbOuterWidth),
            e < 0 && (e = 0),
            e
        }
        ,
        e.prototype.animateThumb = function(e) {
            if (this.$lgThumb.css("transition-duration", this.core.settings.speed + "ms"),
            this.settings.animateThumb) {
                var t = 0;
                switch (this.settings.currentPagerPosition) {
                case "left":
                    t = 0;
                    break;
                case "middle":
                    t = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                    break;
                case "right":
                    t = this.thumbOuterWidth - this.settings.thumbWidth
                }
                this.translateX = (this.settings.thumbWidth + this.settings.thumbMargin) * e - 1 - t,
                this.translateX > this.thumbTotalWidth - this.thumbOuterWidth && (this.translateX = this.thumbTotalWidth - this.thumbOuterWidth),
                this.translateX < 0 && (this.translateX = 0),
                this.setTranslate(this.translateX)
            }
        }
        ,
        e.prototype.onThumbTouchMove = function(e) {
            return e.newTranslateX = this.translateX,
            e.isMoved = !0,
            e.touchMoveTime = new Date().valueOf(),
            e.newTranslateX -= e.cords.endX - e.cords.startX,
            e.newTranslateX = this.getPossibleTransformX(e.newTranslateX),
            this.setTranslate(e.newTranslateX),
            this.$thumbOuter.addClass("lg-dragging"),
            e
        }
        ,
        e.prototype.onThumbTouchEnd = function(e) {
            e.isMoved = !1,
            e.endTime = new Date,
            this.$thumbOuter.removeClass("lg-dragging");
            var t = e.endTime.valueOf() - e.startTime.valueOf()
              , r = e.cords.endX - e.cords.startX
              , i = Math.abs(r) / t;
            return i > .15 && e.endTime.valueOf() - e.touchMoveTime < 30 ? ((i += 1) > 2 && (i += 1),
            i += i * (Math.abs(r) / this.thumbOuterWidth),
            this.$lgThumb.css("transition-duration", Math.min(i - 1, 2) + "settings"),
            r *= i,
            this.translateX = this.getPossibleTransformX(this.translateX - r),
            this.setTranslate(this.translateX)) : this.translateX = e.newTranslateX,
            Math.abs(e.cords.endX - e.cords.startX) < this.settings.thumbnailSwipeThreshold && (this.thumbClickable = !0),
            e
        }
        ,
        e.prototype.getThumbHtml = function(e, t, r) {
            var i, n = this.core.galleryItems[t].__slideVideoInfo || {};
            i = n.youtube && this.settings.loadYouTubeThumbnail ? "//img.youtube.com/vi/" + n.youtube[1] + "/" + this.settings.youTubeThumbSize + ".jpg" : e;
            var s = document.createElement("div");
            s.setAttribute("data-lg-item-id", t + ""),
            s.className = "lg-thumb-item " + (t === this.core.index ? "active" : ""),
            s.style.cssText = "width: " + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + "; margin-right: " + this.settings.thumbMargin + "px;";
            var a = document.createElement("img");
            return a.alt = r || "",
            a.setAttribute("data-lg-item-id", t + ""),
            a.src = i,
            s.appendChild(a),
            s
        }
        ,
        e.prototype.setThumbItemHtml = function(e) {
            for (var t = 0; t < e.length; t++) {
                var r = this.getThumbHtml(e[t].thumb, t, e[t].alt);
                this.$lgThumb.append(r)
            }
        }
        ,
        e.prototype.setAnimateThumbStyles = function() {
            this.settings.animateThumb && this.core.outer.addClass("lg-animate-thumb")
        }
        ,
        e.prototype.manageActiveClassOnSlideChange = function() {
            var e = this;
            this.core.LGel.on(og + ".thumb", function(t) {
                var r = e.core.outer.find(".lg-thumb-item")
                  , i = t.detail.index;
                r.removeClass("active"),
                r.eq(i).addClass("active")
            })
        }
        ,
        e.prototype.toggleThumbBar = function() {
            var e = this;
            this.settings.toggleThumb && (this.core.outer.addClass("lg-can-toggle"),
            this.core.$toolbar.append('<button type="button" aria-label="' + this.settings.thumbnailPluginStrings.toggleThumbnails + '" class="lg-toggle-thumb lg-icon"></button>'),
            this.core.outer.find(".lg-toggle-thumb").first().on("click.lg", function() {
                e.core.outer.toggleClass("lg-components-open")
            }))
        }
        ,
        e.prototype.thumbKeyPress = function() {
            var e = this;
            this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, function(t) {
                e.core.lgOpened && e.settings.toggleThumb && (38 === t.keyCode ? (t.preventDefault(),
                e.core.outer.addClass("lg-components-open")) : 40 === t.keyCode && (t.preventDefault(),
                e.core.outer.removeClass("lg-components-open")))
            })
        }
        ,
        e.prototype.destroy = function() {
            this.settings.thumbnail && (this.$LG(window).off(".lg.thumb.global" + this.core.lgId),
            this.core.LGel.off(".lg.thumb"),
            this.core.LGel.off(".thumb"),
            this.$thumbOuter.remove(),
            this.core.outer.removeClass("lg-has-thumb"))
        }
        ,
        e
    }();
    let o_ = (0,
    i.default)( () => e.A(70420), {
        loadableGenerated: {
            modules: [2623]
        },
        ssr: !1
    });
    function oy({photos: e}) {
        let i = (0,
        r.useRef)(null)
          , [n,s] = (0,
        r.useState)(1)
          , {currentPhotos: o, totalPages: l, indexOfFirstPhoto: u} = (0,
        r.useMemo)( () => {
            let t = 10 * n
              , r = t - 10;
            return {
                currentPhotos: e.slice(r, t),
                totalPages: Math.ceil(e.length / 10),
                indexOfFirstPhoto: r
            }
        }
        , [e, n])
          , c = (0,
        r.useCallback)(e => {
            e && e.instance && (i.current = e.instance)
        }
        , []);
        if (!e || 0 === e.length)
            return (0,
            t.jsx)("div", {
                className: "py-16 text-center border-2 border-dashed border-slate-200 rounded-[2rem] bg-slate-50/50",
                children: (0,
                t.jsx)("p", {
                    className: "text-slate-400 text-sm font-medium italic",
                    children: "Belum ada foto di galeri ini."
                })
            });
        let h = (0,
        r.useMemo)( () => e.map(e => ({
            src: e.url,
            thumb: e.url,
            subHtml: `<div class="p-4 bg-black/50 backdrop-blur-md rounded-xl">
                <h4 class="text-white font-bold text-lg">${e.title}</h4>
                <p class="text-slate-300 text-sm">${e.description || "XII TKJ & PH"}</p>
              </div>`
        })), [e]);
        return (0,
        t.jsxs)("div", {
            className: "w-full space-y-10",
            children: [(0,
            t.jsx)("div", {
                className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                children: o.map( (e, r) => {
                    let n = u + r;
                    return (0,
                    t.jsxs)("div", {
                        className: "group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-slate-200 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300",
                        onClick: () => i.current?.openGallery(n),
                        children: [(0,
                        t.jsx)(a.default, {
                            src: e.url,
                            alt: e.title,
                            fill: !0,
                            sizes: "(max-width: 768px) 50vw, 20vw",
                            className: "object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0",
                            loading: "lazy"
                        }), (0,
                        t.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4",
                            children: (0,
                            t.jsx)("span", {
                                className: "text-white text-[10px] font-black uppercase tracking-widest border border-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-sm",
                                children: "View Story"
                            })
                        })]
                    }, `${n}-${e.url}`)
                }
                )
            }), l > 1 && (0,
            t.jsxs)("div", {
                className: "flex justify-center items-center gap-3",
                children: [(0,
                t.jsx)("button", {
                    disabled: 1 === n,
                    onClick: () => {
                        s(e => e - 1),
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                    ,
                    className: "p-3 border border-slate-200 rounded-xl disabled:opacity-20 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all bg-white",
                    children: (0,
                    t.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: (0,
                        t.jsx)("path", {
                            d: "m15 18-6-6 6-6"
                        })
                    })
                }), (0,
                t.jsx)("div", {
                    className: "flex gap-2",
                    children: [...Array(l)].map( (e, r) => (0,
                    t.jsx)("button", {
                        onClick: () => s(r + 1),
                        className: `w-10 h-10 text-xs font-black rounded-xl transition-all ${n === r + 1 ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-110" : "bg-white border border-slate-200 text-slate-400 hover:border-blue-600 hover:text-blue-600"}`,
                        children: r + 1
                    }, r))
                }), (0,
                t.jsx)("button", {
                    disabled: n === l,
                    onClick: () => {
                        s(e => e + 1),
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                    ,
                    className: "p-3 border border-slate-200 rounded-xl disabled:opacity-20 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all bg-white",
                    children: (0,
                    t.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: (0,
                        t.jsx)("path", {
                            d: "m9 18 6-6-6-6"
                        })
                    })
                })]
            }), (0,
            t.jsx)(o_, {
                onInit: c,
                dynamic: !0,
                dynamicEl: h,
                plugins: [of, ov],
                speed: 400,
                download: !1
            })]
        })
    }
    let ob = [{
        id: "1",
        url: "/public/images/compressed/gallery/gallery-1.webp",
        title: "1",
        width: 1599,
        height: 899
    }, {
        id: "2",
        url: "/public/images/compressed/gallery/gallery-2.webp",
        title: "2",
        width: 1599,
        height: 899
    }, {
        id: "3",
        url: "/public/images/compressed/gallery/gallery-3.webp",
        title: "3",
        width: 1350,
        height: 1600
    }, {
        id: "4",
        url: "/public/images/compressed/gallery/gallery-4.webp",
        title: "4",
        width: 1280,
        height: 960
    }, {
        id: "5",
        url: "/public/images/compressed/gallery/gallery-5.webp",
        title: "5",
        width: 960,
        height: 1280
    }, {
        id: "6",
        url: "/public/images/compressed/gallery/gallery-6.webp",
        title: "6",
        width: 960,
        height: 1280
    }, {
        id: "7",
        url: "/public/images/compressed/gallery/gallery-7.webp",
        title: "7",
        width: 1280,
        height: 960
    }, {
        id: "8",
        url: "/public/images/compressed/gallery/gallery-8.webp",
        title: "8",
        width: 960,
        height: 1280
    }, {
        id: "9",
        url: "/public/images/compressed/gallery/gallery-9.webp",
        title: "9",
        width: 960,
        height: 1280
    }, {
        id: "10",
        url: "/public/images/compressed/gallery/gallery-10.webp",
        title: "10",
        width: 1280,
        height: 960
    }, {
        id: "11",
        url: "/public/images/compressed/gallery/gallery-11.webp",
        title: "11",
        width: 1280,
        height: 960
    }, {
        id: "12",
        url: "/public/images/compressed/gallery/gallery-12.webp",
        title: "12",
        width: 1280,
        height: 960
    }, {
        id: "13",
        url: "/public/images/compressed/gallery/gallery-13.webp",
        title: "13",
        width: 1280,
        height: 960
    }, {
        id: "14",
        url: "/public/images/compressed/gallery/gallery-14.webp",
        title: "14",
        width: 1280,
        height: 960
    }, {
        id: "15",
        url: "/public/images/compressed/gallery/gallery-15.webp",
        title: "15",
        width: 1280,
        height: 960
    }, {
        id: "16",
        url: "/public/images/compressed/gallery/gallery-16.webp",
        title: "16",
        width: 1280,
        height: 960
    }, {
        id: "17",
        url: "/public/images/compressed/gallery/gallery-17.webp",
        title: "17",
        width: 1280,
        height: 960
    }, {
        id: "18",
        url: "/public/images/compressed/gallery/gallery-18.webp",
        title: "18",
        width: 1280,
        height: 960
    }, {
        id: "19",
        url: "/public/images/compressed/gallery/gallery-19.webp",
        title: "19",
        width: 1280,
        height: 960
    }, {
        id: "20",
        url: "/public/images/compressed/gallery/gallery-20.webp",
        title: "20",
        width: 1280,
        height: 960
    }, {
        id: "21",
        url: "/public/images/compressed/gallery/gallery-21.webp",
        title: "21",
        width: 1280,
        height: 960
    }, {
        id: "22",
        url: "/public/images/compressed/gallery/gallery-22.webp",
        title: "22",
        width: 1280,
        height: 960
    }, {
        id: "23",
        url: "/public/images/compressed/gallery/gallery-23.webp",
        title: "23",
        width: 1280,
        height: 960
    }, {
        id: "24",
        url: "/public/images/compressed/gallery/gallery-24.webp",
        title: "24",
        width: 1280,
        height: 960
    }, {
        id: "25",
        url: "/public/images/compressed/gallery/gallery-25.webp",
        title: "25",
        width: 1280,
        height: 960
    }, {
        id: "26",
        url: "/public/images/compressed/gallery/gallery-26.webp",
        title: "26",
        width: 1280,
        height: 960
    }, {
        id: "27",
        url: "/public/images/compressed/gallery/gallery-27.webp",
        title: "27",
        width: 1280,
        height: 960
    }, {
        id: "28",
        url: "/public/images/compressed/gallery/gallery-28.webp",
        title: "28",
        width: 1280,
        height: 960
    }, {
        id: "29",
        url: "/public/images/compressed/gallery/gallery-29.webp",
        title: "29",
        width: 1280,
        height: 960
    }, {
        id: "30",
        url: "/public/images/compressed/gallery/gallery-30.webp",
        title: "30",
        width: 1280,
        height: 960
    }, {
        id: "31",
        url: "/public/images/compressed/gallery/gallery-31.webp",
        title: "31",
        width: 1280,
        height: 960
    }, {
        id: "32",
        url: "/public/images/compressed/gallery/gallery-32.webp",
        title: "32",
        width: 1280,
        height: 960
    }, {
        id: "33",
        url: "/public/images/compressed/gallery/gallery-33.webp",
        title: "33",
        width: 1280,
        height: 960
    }, {
        id: "34",
        url: "/public/images/compressed/gallery/gallery-34.webp",
        title: "34",
        width: 1280,
        height: 960
    }, {
        id: "35",
        url: "/public/images/compressed/gallery/gallery-35.webp",
        title: "35",
        width: 1280,
        height: 960
    }, {
        id: "36",
        url: "/public/images/compressed/gallery/gallery-36.webp",
        title: "36",
        width: 1280,
        height: 960
    }, {
        id: "37",
        url: "/public/images/compressed/gallery/gallery-37.webp",
        title: "37",
        width: 1280,
        height: 960
    }];
    function ox() {
        return (0,
        t.jsx)("section", {
            id: "gallery",
            className: "py-24 bg-white border-t border-slate-100",
            children: (0,
            t.jsxs)("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [(0,
                t.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [(0,
                    t.jsx)("h2", {
                        className: "text-5xl font-black tracking-tighter italic uppercase",
                        children: "Moments"
                    }), (0,
                    t.jsx)("div", {
                        className: "h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4"
                    })]
                }), (0,
                t.jsx)(oy, {
                    photos: ob
                })]
            })
        })
    }
    function ow() {
        return (0,
        t.jsxs)("footer", {
            className: "py-16 bg-white border-t border-slate-100 flex flex-col items-center justify-center space-y-6",
            children: [(0,
            t.jsx)("div", {
                className: "flex gap-8 text-[18px] font-bold text-slate-400 tracking-[0.3em] uppercase",
                children: (0,
                t.jsx)("a", {
                    href: "https://www.instagram.com/bulsommspam",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:text-blue-600 transition-colors",
                    children: "Untuk Info Lebih Lanjut Disini yaa!!!"
                })
            }), (0,
            t.jsxs)("div", {
                className: "flex flex-col items-center gap-2",
                children: [(0,
                t.jsx)("p", {
                    className: "text-[10px] text-slate-400 tracking-widest font-medium uppercase text-center",
                    children: "© 2026 A.M FADHLAN AZHAR. ALL RIGHTS RESERVED."
                }), (0,
                t.jsx)("p", {
                    className: "text-[9px] text-slate-300 tracking-[0.2em] font-medium uppercase italic opacity-60",
                    children: "Optimized Experience"
                })]
            })]
        })
    }
    let oT = (0,
    i.default)( () => e.A(88669), {
        loadableGenerated: {
            modules: [96447]
        },
        ssr: !1
    })
      , oS = (0,
    i.default)( () => e.A(89838), {
        loadableGenerated: {
            modules: [28455]
        },
        ssr: !1
    });
    function oC() {
        let[e,i] = (0,
        r.useState)(!1)
          , [s,a] = (0,
        r.useState)(!1);
        return (0,
        r.useEffect)( () => {
            a(!0),
            navigator.userAgent.includes("Mobi") && i(!0)
        }
        , []),
        (0,
        t.jsxs)("main", {
            className: "w-full min-h-screen bg-white text-slate-900 selection:bg-blue-500 selection:text-white",
            children: [(0,
            t.jsx)(n, {}), s && !e && (0,
            t.jsx)(oT, {}), (0,
            t.jsx)(iG, {}), s && (0,
            t.jsx)("div", {
                className: "py-20 bg-white overflow-hidden border-y border-slate-100",
                children: (0,
                t.jsx)(oS, {
                    texts: ["Memory of XII TKJ & PH", "Class of 2026"],
                    velocity: 50,
                    className: "text-6xl md:text-9xl font-black tracking-tighter opacity-10 italic"
                })
            }), (0,
            t.jsx)(on, {}), (0,
            t.jsx)(oc, {
                mounted: s
            }), (0,
            t.jsx)(ox, {}), (0,
            t.jsx)(ow, {})]
        })
    }
    e.s(["default", () => oC], 31713)
}
]);
