(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 97786, t => {
    "use strict";
    var e = t.i(71645)
      , i = function() {
        return (i = Object.assign || function(t) {
            for (var e, i = 1, s = arguments.length; i < s; i++)
                for (var n in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }
        ).apply(this, arguments)
    }
      , s = "lgUpdateSlides"
      , n = "lgPosterClick"
      , o = "lgBeforeNextSlide"
      , r = "lgBeforePrevSlide"
      , l = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        resetScrollPosition: !0,
        hideScrollbar: !1,
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        trapFocus: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: {
            controls: !1,
            showCloseIcon: !1,
            download: !1
        },
        plugins: [],
        strings: {
            closeGallery: "Close gallery",
            toggleMaximize: "Toggle maximize",
            previousSlide: "Previous slide",
            nextSlide: "Next slide",
            download: "Download",
            playVideo: "Play video",
            mediaLoadingFailed: "Oops... Failed to load content..."
        }
    }
      , a = function() {
        function t(t) {
            return this.cssVenderPrefixes = ["TransitionDuration", "TransitionTimingFunction", "Transform", "Transition"],
            this.selector = this._getSelector(t),
            this.firstElement = this._getFirstEl(),
            this
        }
        return t.generateUUID = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" == t ? e : 3 & e | 8).toString(16)
            })
        }
        ,
        t.prototype._getSelector = function(t, e) {
            return (void 0 === e && (e = document),
            "string" != typeof t) ? t : (e = e || document,
            "#" === t.substring(0, 1)) ? e.querySelector(t) : e.querySelectorAll(t)
        }
        ,
        t.prototype._each = function(t) {
            return this.selector && (void 0 !== this.selector.length ? [].forEach.call(this.selector, t) : t(this.selector, 0)),
            this
        }
        ,
        t.prototype._setCssVendorPrefix = function(t, e, i) {
            var s = e.replace(/-([a-z])/gi, function(t, e) {
                return e.toUpperCase()
            });
            -1 !== this.cssVenderPrefixes.indexOf(s) ? (t.style[s.charAt(0).toLowerCase() + s.slice(1)] = i,
            t.style["webkit" + s] = i,
            t.style["moz" + s] = i,
            t.style["ms" + s] = i,
            t.style["o" + s] = i) : t.style[s] = i
        }
        ,
        t.prototype._getFirstEl = function() {
            return this.selector && void 0 !== this.selector.length ? this.selector[0] : this.selector
        }
        ,
        t.prototype.isEventMatched = function(t, e) {
            var i = e.split(".");
            return t.split(".").filter(function(t) {
                return t
            }).every(function(t) {
                return -1 !== i.indexOf(t)
            })
        }
        ,
        t.prototype.attr = function(t, e) {
            return void 0 === e ? this.firstElement ? this.firstElement.getAttribute(t) : "" : (this._each(function(i) {
                i.setAttribute(t, e)
            }),
            this)
        }
        ,
        t.prototype.find = function(t) {
            return d(this._getSelector(t, this.selector))
        }
        ,
        t.prototype.first = function() {
            return this.selector && void 0 !== this.selector.length ? d(this.selector[0]) : d(this.selector)
        }
        ,
        t.prototype.eq = function(t) {
            return d(this.selector[t])
        }
        ,
        t.prototype.parent = function() {
            return d(this.selector.parentElement)
        }
        ,
        t.prototype.get = function() {
            return this._getFirstEl()
        }
        ,
        t.prototype.removeAttr = function(t) {
            var e = t.split(" ");
            return this._each(function(t) {
                e.forEach(function(e) {
                    return t.removeAttribute(e)
                })
            }),
            this
        }
        ,
        t.prototype.wrap = function(t) {
            if (!this.firstElement)
                return this;
            var e = document.createElement("div");
            return e.className = t,
            this.firstElement.parentNode.insertBefore(e, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            e.appendChild(this.firstElement),
            this
        }
        ,
        t.prototype.addClass = function(t) {
            return void 0 === t && (t = ""),
            this._each(function(e) {
                t.split(" ").forEach(function(t) {
                    t && e.classList.add(t)
                })
            }),
            this
        }
        ,
        t.prototype.removeClass = function(t) {
            return this._each(function(e) {
                t.split(" ").forEach(function(t) {
                    t && e.classList.remove(t)
                })
            }),
            this
        }
        ,
        t.prototype.hasClass = function(t) {
            return !!this.firstElement && this.firstElement.classList.contains(t)
        }
        ,
        t.prototype.hasAttribute = function(t) {
            return !!this.firstElement && this.firstElement.hasAttribute(t)
        }
        ,
        t.prototype.toggleClass = function(t) {
            return this.firstElement && (this.hasClass(t) ? this.removeClass(t) : this.addClass(t)),
            this
        }
        ,
        t.prototype.css = function(t, e) {
            var i = this;
            return this._each(function(s) {
                i._setCssVendorPrefix(s, t, e)
            }),
            this
        }
        ,
        t.prototype.on = function(e, i) {
            var s = this;
            return this.selector && e.split(" ").forEach(function(e) {
                Array.isArray(t.eventListeners[e]) || (t.eventListeners[e] = []),
                t.eventListeners[e].push(i),
                s.selector.addEventListener(e.split(".")[0], i)
            }),
            this
        }
        ,
        t.prototype.once = function(t, e) {
            var i = this;
            return this.on(t, function() {
                i.off(t),
                e(t)
            }),
            this
        }
        ,
        t.prototype.off = function(e) {
            var i = this;
            return this.selector && Object.keys(t.eventListeners).forEach(function(s) {
                i.isEventMatched(e, s) && (t.eventListeners[s].forEach(function(t) {
                    i.selector.removeEventListener(s.split(".")[0], t)
                }),
                t.eventListeners[s] = [])
            }),
            this
        }
        ,
        t.prototype.trigger = function(t, e) {
            if (!this.firstElement)
                return this;
            var i = new CustomEvent(t.split(".")[0],{
                detail: e || null
            });
            return this.firstElement.dispatchEvent(i),
            this
        }
        ,
        t.prototype.load = function(t) {
            var e = this;
            return fetch(t).then(function(t) {
                return t.text()
            }).then(function(t) {
                e.selector.innerHTML = t
            }),
            this
        }
        ,
        t.prototype.html = function(t) {
            return void 0 === t ? this.firstElement ? this.firstElement.innerHTML : "" : (this._each(function(e) {
                e.innerHTML = t
            }),
            this)
        }
        ,
        t.prototype.append = function(t) {
            return this._each(function(e) {
                "string" == typeof t ? e.insertAdjacentHTML("beforeend", t) : e.appendChild(t)
            }),
            this
        }
        ,
        t.prototype.prepend = function(t) {
            return this._each(function(e) {
                "string" == typeof t ? e.insertAdjacentHTML("afterbegin", t) : t instanceof HTMLElement && e.insertBefore(t.cloneNode(!0), e.firstChild)
            }),
            this
        }
        ,
        t.prototype.remove = function() {
            return this._each(function(t) {
                t.parentNode.removeChild(t)
            }),
            this
        }
        ,
        t.prototype.empty = function() {
            return this._each(function(t) {
                t.innerHTML = ""
            }),
            this
        }
        ,
        t.prototype.scrollTop = function(t) {
            return void 0 !== t ? (document.body.scrollTop = t,
            document.documentElement.scrollTop = t,
            this) : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        }
        ,
        t.prototype.scrollLeft = function(t) {
            return void 0 !== t ? (document.body.scrollLeft = t,
            document.documentElement.scrollLeft = t,
            this) : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        }
        ,
        t.prototype.offset = function() {
            if (!this.firstElement)
                return {
                    left: 0,
                    top: 0
                };
            var t = this.firstElement.getBoundingClientRect()
              , e = d("body").style().marginLeft;
            return {
                left: t.left - parseFloat(e) + this.scrollLeft(),
                top: t.top + this.scrollTop()
            }
        }
        ,
        t.prototype.style = function() {
            return this.firstElement ? this.firstElement.currentStyle || window.getComputedStyle(this.firstElement) : {}
        }
        ,
        t.prototype.width = function() {
            var t = this.style();
            return this.firstElement.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight)
        }
        ,
        t.prototype.height = function() {
            var t = this.style();
            return this.firstElement.clientHeight - parseFloat(t.paddingTop) - parseFloat(t.paddingBottom)
        }
        ,
        t.eventListeners = {},
        t
    }();
    function d(t) {
        return "function" == typeof window.CustomEvent || (window.CustomEvent = function(t, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: null
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
            i
        }
        ),
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
        new a(t)
    }
    var g = ["src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl"]
      , h = function(t, e, i) {
        fetch(t).then(function(t) {
            return t.text()
        }).then(function(t) {
            "append" === i ? e.append('<div class="lg-sub-html">' + t + "</div>") : e.html(t)
        })
    }
      , c = function(t, e, i, s) {
        void 0 === i && (i = 0);
        var n = d(t).attr("data-lg-size") || s;
        if (n) {
            var o = n.split(",");
            if (o[1])
                for (var r = window.innerWidth, l = 0; l < o.length; l++) {
                    var a = o[l];
                    if (parseInt(a.split("-")[2], 10) > r) {
                        n = a;
                        break
                    }
                    l === o.length - 1 && (n = a)
                }
            var g = n.split("-")
              , h = parseInt(g[0], 10)
              , c = parseInt(g[1], 10)
              , u = Math.min(Math.min(e.width(), h) / h, Math.min(e.height() - i, c) / c);
            return {
                width: h * u,
                height: c * u
            }
        }
    }
      , u = function(t, e, i, s, n) {
        if (n) {
            var o = d(t).find("img").first();
            if (o.get()) {
                var r = e.get().getBoundingClientRect()
                  , l = r.width
                  , a = e.height() - (i + s)
                  , g = o.width()
                  , h = o.height()
                  , c = o.style()
                  , u = (l - g) / 2 - o.offset().left + (parseFloat(c.paddingLeft) || 0) + (parseFloat(c.borderLeft) || 0) + d(window).scrollLeft() + r.left
                  , m = (a - h) / 2 - o.offset().top + (parseFloat(c.paddingTop) || 0) + (parseFloat(c.borderTop) || 0) + d(window).scrollTop() + i;
                return "translate3d(" + (u *= -1) + "px, " + (m *= -1) + "px, 0) scale3d(" + g / n.width + ", " + h / n.height + ", 1)"
            }
        }
    }
      , m = function(t, e, i, s, n, o) {
        var r = "<img " + i + " " + (s ? 'srcset="' + s + '"' : "") + "  " + (n ? 'sizes="' + n + '"' : "") + ' class="lg-object lg-image" data-index="' + t + '" src="' + e + '" />'
          , l = "";
        return o && (l = ("string" == typeof o ? JSON.parse(o) : o).map(function(t) {
            var e = "";
            return Object.keys(t).forEach(function(i) {
                e += " " + i + '="' + t[i] + '"'
            }),
            "<source " + e + "></source>"
        })),
        "" + l + r
    }
      , p = function(t) {
        for (var e = [], i = [], s = "", n = 0; n < t.length; n++) {
            var o = t[n].split(" ");
            "" === o[0] && o.splice(0, 1),
            i.push(o[0]),
            e.push(o[1])
        }
        for (var r = window.innerWidth, l = 0; l < e.length; l++)
            if (parseInt(e[l], 10) > r) {
                s = i[l];
                break
            }
        return s
    }
      , f = function(t, e, i, s, n) {
        var o = "";
        o = n && n.youtube ? "lg-has-youtube" : n && n.vimeo ? "lg-has-vimeo" : "lg-has-html5";
        var r = e;
        return "string" != typeof e && (r = e.outerHTML),
        '<div class="lg-video-cont ' + o + '" style="' + i + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + s + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + s + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + r + '\n            <img class="lg-object lg-video-poster" src="' + t + '" />\n        </div>'
    }
      , v = function(t) {
        var e = t.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
        return [].filter.call(e, function(t) {
            var e = window.getComputedStyle(t);
            return "none" !== e.display && "hidden" !== e.visibility
        })
    }
      , y = function(t, e, i, s) {
        var n = []
          , o = function() {
            for (var t = 0, e = 0, i = arguments.length; e < i; e++)
                t += arguments[e].length;
            for (var s = Array(t), n = 0, e = 0; e < i; e++)
                for (var o = arguments[e], r = 0, l = o.length; r < l; r++,
                n++)
                    s[n] = o[r];
            return s
        }(g, e);
        return [].forEach.call(t, function(t) {
            for (var e = {}, r = 0; r < t.attributes.length; r++) {
                var l = t.attributes[r];
                if (l.specified) {
                    var a, g = "href" === (a = l.name) ? "src" : a = (a = (a = a.replace("data-", "")).charAt(0).toLowerCase() + a.slice(1)).replace(/-([a-z])/g, function(t) {
                        return t[1].toUpperCase()
                    }), h = "";
                    o.indexOf(g) > -1 && (h = g),
                    h && (e[h] = l.value)
                }
            }
            var c = d(t)
              , u = c.find("img").first().attr("alt")
              , m = c.attr("title");
            e.thumb = s ? c.attr(s) : c.find("img").first().attr("src"),
            i && !e.subHtml && (e.subHtml = m || u || ""),
            e.alt = u || m || "",
            n.push(e)
        }),
        n
    }
      , b = function(t, e, i) {
        if (!t)
            if (e)
                return {
                    html5: !0
                };
            else
                return void console.error("lightGallery :- data-src is not provided on slide item " + (i + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
        var s = t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i)
          , n = t.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i)
          , o = t.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
        return s ? {
            youtube: s
        } : n ? {
            vimeo: n
        } : o ? {
            wistia: o
        } : void 0
    }
      , C = 0
      , I = function() {
        function t(t, e) {
            if (this.lgOpened = !1,
            this.index = 0,
            this.plugins = [],
            this.lGalleryOn = !1,
            this.lgBusy = !1,
            this.currentItemsInDom = [],
            this.prevScrollTop = 0,
            this.bodyPaddingRight = 0,
            this.isDummyImageRemoved = !1,
            this.dragOrSwipeEnabled = !1,
            this.mediaContainerPosition = {
                top: 0,
                bottom: 0
            },
            !t)
                return this;
            if (C++,
            this.lgId = C,
            this.el = t,
            this.LGel = d(t),
            this.generateSettings(e),
            this.buildModules(),
            this.settings.dynamic && void 0 !== this.settings.dynamicEl && !Array.isArray(this.settings.dynamicEl))
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return this.galleryItems = this.getItems(),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
        }
        return t.prototype.generateSettings = function(t) {
            if (this.settings = i(i({}, l), t),
            this.settings.isMobile && "function" == typeof this.settings.isMobile ? this.settings.isMobile() : /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                var e = i(i({}, this.settings.mobileSettings), this.settings.mobileSettings);
                this.settings = i(i({}, this.settings), e)
            }
        }
        ,
        t.prototype.normalizeSettings = function() {
            if (this.settings.slideEndAnimation && (this.settings.hideControlOnEnd = !1),
            this.settings.closable || (this.settings.swipeToClose = !1),
            this.zoomFromOrigin = this.settings.zoomFromOrigin,
            this.settings.dynamic && (this.zoomFromOrigin = !1),
            this.settings.container) {
                var t = this.settings.container;
                if ("function" == typeof t)
                    this.settings.container = t();
                else if ("string" == typeof t) {
                    var e = document.querySelector(t);
                    this.settings.container = null != e ? e : document.body
                }
            } else
                this.settings.container = document.body;
            this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length)
        }
        ,
        t.prototype.init = function() {
            var t = this;
            this.addSlideVideoInfo(this.galleryItems),
            this.buildStructure(),
            this.LGel.trigger("lgInit", {
                instance: this
            }),
            this.settings.keyPress && this.keyPress(),
            setTimeout(function() {
                t.enableDrag(),
                t.enableSwipe(),
                t.triggerPosterClick()
            }, 50),
            this.arrow(),
            this.settings.mousewheel && this.mousewheel(),
            this.settings.dynamic || this.openGalleryOnItemClick()
        }
        ,
        t.prototype.openGalleryOnItemClick = function() {
            for (var t = this, e = function(e) {
                var s = i.items[e]
                  , n = d(s)
                  , o = a.generateUUID();
                n.attr("data-lg-id", o).on("click.lgcustom-item-" + o, function(i) {
                    i.preventDefault();
                    var n = t.settings.index || e;
                    t.openGallery(n, s)
                })
            }, i = this, s = 0; s < this.items.length; s++)
                e(s)
        }
        ,
        t.prototype.buildModules = function() {
            var t = this;
            this.settings.plugins.forEach(function(e) {
                t.plugins.push(new e(t,d))
            })
        }
        ,
        t.prototype.validateLicense = function() {
            this.settings.licenseKey ? "0000-0000-000-0000" === this.settings.licenseKey && console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use") : console.error("Please provide a valid license key")
        }
        ,
        t.prototype.getSlideItem = function(t) {
            return d(this.getSlideItemId(t))
        }
        ,
        t.prototype.getSlideItemId = function(t) {
            return "#lg-item-" + this.lgId + "-" + t
        }
        ,
        t.prototype.getIdName = function(t) {
            return t + "-" + this.lgId
        }
        ,
        t.prototype.getElementById = function(t) {
            return d("#" + this.getIdName(t))
        }
        ,
        t.prototype.manageSingleSlideClassName = function() {
            this.galleryItems.length < 2 ? this.outer.addClass("lg-single-item") : this.outer.removeClass("lg-single-item")
        }
        ,
        t.prototype.buildStructure = function() {
            var t = this;
            if (!(this.$container && this.$container.get())) {
                var e = ""
                  , i = "";
                this.settings.controls && (e = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings.previousSlide + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings.nextSlide + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo && (i = '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                var s = "";
                this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
                var n = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : ""
                  , o = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : ""
                  , r = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : "")
                  , l = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings.closeGallery + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : ""
                  , a = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings.toggleMaximize + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : ""
                  , g = '\n        <div class="' + r + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + n + " " + o + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + s + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + e + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + a + "\n                    " + l + "\n                    </div>\n                    " + (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") + "\n                </div>\n            </div>\n        </div>\n        ";
                d(this.settings.container).append(g),
                document.body !== this.settings.container && d(this.settings.container).css("position", "relative"),
                this.outer = this.getElementById("lg-outer"),
                this.$lgComponents = this.getElementById("lg-components"),
                this.$backdrop = this.getElementById("lg-backdrop"),
                this.$container = this.getElementById("lg-container"),
                this.$inner = this.getElementById("lg-inner"),
                this.$content = this.getElementById("lg-content"),
                this.$toolbar = this.getElementById("lg-toolbar"),
                this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
                var h = this.settings.mode + " ";
                this.manageSingleSlideClassName(),
                this.settings.enableDrag && (h += "lg-grab "),
                this.outer.addClass(h),
                this.$inner.css("transition-timing-function", this.settings.easing),
                this.$inner.css("transition-duration", this.settings.speed + "ms"),
                this.settings.download && this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings.download + '" download class="lg-download lg-icon"></a>'),
                this.counter(),
                d(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function() {
                    t.refreshOnResize()
                }),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules()
            }
        }
        ,
        t.prototype.refreshOnResize = function() {
            if (this.lgOpened) {
                var t = this.galleryItems[this.index].__slideVideoInfo;
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var e = this.mediaContainerPosition
                  , i = e.top
                  , s = e.bottom;
                if (this.currentImageSize = c(this.items[this.index], this.outer, i + s, t && this.settings.videoMaxSize),
                t && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved) {
                    var n = this.getDummyImgStyles(this.currentImageSize);
                    this.outer.find(".lg-current .lg-dummy-img").first().attr("style", n)
                }
                this.LGel.trigger("lgContainerResize")
            }
        }
        ,
        t.prototype.resizeVideoSlide = function(t, e) {
            var i = this.getVideoContStyle(e);
            this.getSlideItem(t).find(".lg-video-cont").attr("style", i)
        }
        ,
        t.prototype.updateSlides = function(t, e) {
            if (this.index > t.length - 1 && (this.index = t.length - 1),
            1 === t.length && (this.index = 0),
            !t.length)
                return void this.closeGallery();
            var i = this.galleryItems[e].src;
            this.galleryItems = t,
            this.updateControls(),
            this.$inner.empty(),
            this.currentItemsInDom = [];
            var n = 0;
            this.galleryItems.some(function(t, e) {
                return t.src === i && (n = e,
                !0)
            }),
            this.currentItemsInDom = this.organizeSlideItems(n, -1),
            this.loadContent(n, !0),
            this.getSlideItem(n).addClass("lg-current"),
            this.index = n,
            this.updateCurrentCounter(n),
            this.LGel.trigger(s)
        }
        ,
        t.prototype.getItems = function() {
            if (this.items = [],
            this.settings.dynamic)
                return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector)
                this.items.push(this.el);
            else if (this.settings.selector)
                if ("string" == typeof this.settings.selector)
                    if (this.settings.selectWithin) {
                        var t = d(this.settings.selectWithin);
                        this.items = t.find(this.settings.selector).get()
                    } else
                        this.items = this.el.querySelectorAll(this.settings.selector);
                else
                    this.items = this.settings.selector;
            else
                this.items = this.el.children;
            return y(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage)
        }
        ,
        t.prototype.shouldHideScrollbar = function() {
            return this.settings.hideScrollbar && document.body === this.settings.container
        }
        ,
        t.prototype.hideScrollbar = function() {
            if (this.shouldHideScrollbar()) {
                this.bodyPaddingRight = parseFloat(d("body").style().paddingRight);
                var t = document.documentElement.getBoundingClientRect()
                  , e = window.innerWidth - t.width;
                d(document.body).css("padding-right", e + this.bodyPaddingRight + "px"),
                d(document.body).addClass("lg-overlay-open")
            }
        }
        ,
        t.prototype.resetScrollBar = function() {
            this.shouldHideScrollbar() && (d(document.body).css("padding-right", this.bodyPaddingRight + "px"),
            d(document.body).removeClass("lg-overlay-open"))
        }
        ,
        t.prototype.openGallery = function(t, e) {
            var i = this;
            if (void 0 === t && (t = this.settings.index),
            !this.lgOpened) {
                this.lgOpened = !0,
                this.outer.removeClass("lg-hide-items"),
                this.hideScrollbar(),
                this.$container.addClass("lg-show");
                var s = this.getItemsToBeInsertedToDom(t, t);
                this.currentItemsInDom = s;
                var n = "";
                s.forEach(function(t) {
                    n += '<div id="' + t + '" class="lg-item"></div>'
                }),
                this.$inner.append(n),
                this.addHtml(t);
                var o = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var r = this.mediaContainerPosition
                  , l = r.top
                  , a = r.bottom;
                this.settings.allowMediaOverlap || this.setMediaContainerPosition(l, a);
                var g = this.galleryItems[t].__slideVideoInfo;
                this.zoomFromOrigin && e && (this.currentImageSize = c(e, this.outer, l + a, g && this.settings.videoMaxSize),
                o = u(e, this.outer, l, a, this.currentImageSize)),
                this.zoomFromOrigin && o || (this.outer.addClass(this.settings.startClass),
                this.getSlideItem(t).removeClass("lg-complete")),
                setTimeout(function() {
                    i.outer.addClass("lg-components-open")
                }, this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration),
                this.index = t,
                this.LGel.trigger("lgBeforeOpen"),
                this.getSlideItem(t).addClass("lg-current"),
                this.lGalleryOn = !1,
                this.prevScrollTop = d(window).scrollTop(),
                setTimeout(function() {
                    if (i.zoomFromOrigin && o) {
                        var e = i.getSlideItem(t);
                        e.css("transform", o),
                        setTimeout(function() {
                            e.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", i.settings.startAnimationDuration + "ms"),
                            i.outer.addClass("lg-zoom-from-image")
                        }),
                        setTimeout(function() {
                            e.css("transform", "translate3d(0, 0, 0)")
                        }, 100)
                    }
                    setTimeout(function() {
                        i.$backdrop.addClass("in"),
                        i.$container.addClass("lg-show-in")
                    }, 10),
                    setTimeout(function() {
                        i.settings.trapFocus && document.body === i.settings.container && i.trapFocus()
                    }, i.settings.backdropDuration + 50),
                    i.zoomFromOrigin && o || setTimeout(function() {
                        i.outer.addClass("lg-visible")
                    }, i.settings.backdropDuration),
                    i.slide(t, !1, !1, !1),
                    i.LGel.trigger("lgAfterOpen")
                }),
                document.body === this.settings.container && d("html").addClass("lg-on")
            }
        }
        ,
        t.prototype.getMediaContainerPosition = function() {
            if (this.settings.allowMediaOverlap)
                return {
                    top: 0,
                    bottom: 0
                };
            var t = this.$toolbar.get().clientHeight || 0
              , e = this.outer.find(".lg-components .lg-sub-html").get()
              , i = this.settings.defaultCaptionHeight || e && e.clientHeight || 0
              , s = this.outer.find(".lg-thumb-outer").get();
            return {
                top: t,
                bottom: (s ? s.clientHeight : 0) + i
            }
        }
        ,
        t.prototype.setMediaContainerPosition = function(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            this.$content.css("top", t + "px").css("bottom", e + "px")
        }
        ,
        t.prototype.hideBars = function() {
            var t = this;
            setTimeout(function() {
                t.outer.removeClass("lg-hide-items"),
                t.settings.hideBarsDelay > 0 && (t.outer.on("mousemove.lg click.lg touchstart.lg", function() {
                    t.outer.removeClass("lg-hide-items"),
                    clearTimeout(t.hideBarTimeout),
                    t.hideBarTimeout = setTimeout(function() {
                        t.outer.addClass("lg-hide-items")
                    }, t.settings.hideBarsDelay)
                }),
                t.outer.trigger("mousemove.lg"))
            }, this.settings.showBarsAfter)
        }
        ,
        t.prototype.initPictureFill = function(t) {
            if (this.settings.supportLegacyBrowser)
                try {
                    picturefill({
                        elements: [t.get()]
                    })
                } catch (t) {
                    console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")
                }
        }
        ,
        t.prototype.counter = function() {
            if (this.settings.counter) {
                var t = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
                this.outer.find(this.settings.appendCounterTo).append(t)
            }
        }
        ,
        t.prototype.addHtml = function(t) {
            if (this.galleryItems[t].subHtmlUrl ? i = this.galleryItems[t].subHtmlUrl : e = this.galleryItems[t].subHtml,
            !i)
                if (e) {
                    var e, i, s = e.substring(0, 1);
                    if ("." === s || "#" === s)
                        try {
                            e = this.settings.subHtmlSelectorRelative && !this.settings.dynamic ? d(this.items).eq(t).find(e).first().html() : d(e).first().html()
                        } catch (t) {
                            console.warn('Error processing subHtml selector "' + e + '"'),
                            e = ""
                        }
                } else
                    e = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
                i ? h(i, this.outer.find(".lg-sub-html"), "replace") : this.outer.find(".lg-sub-html").html(e);
            else {
                var n = d(this.getSlideItemId(t));
                i ? h(i, n, "append") : n.append('<div class="lg-sub-html">' + e + "</div>")
            }
            null != e && ("" === e ? this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html") : this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")),
            this.LGel.trigger("lgAfterAppendSubHtml", {
                index: t
            })
        }
        ,
        t.prototype.preload = function(t) {
            for (var e = 1; e <= this.settings.preload && !(e >= this.galleryItems.length - t); e++)
                this.loadContent(t + e, !1);
            for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++)
                this.loadContent(t - i, !1)
        }
        ,
        t.prototype.getDummyImgStyles = function(t) {
            return t ? "width:" + t.width + "px;\n                margin-left: -" + t.width / 2 + "px;\n                margin-top: -" + t.height / 2 + "px;\n                height:" + t.height + "px" : ""
        }
        ,
        t.prototype.getVideoContStyle = function(t) {
            return t ? "width:" + t.width + "px;\n                height:" + t.height + "px" : ""
        }
        ,
        t.prototype.getDummyImageContent = function(t, e, i) {
            var s;
            if (this.settings.dynamic || (s = d(this.items).eq(e)),
            s) {
                var n = void 0;
                if (!(n = this.settings.exThumbImage ? s.attr(this.settings.exThumbImage) : s.find("img").first().attr("src")))
                    return "";
                var o = this.getDummyImgStyles(this.currentImageSize)
                  , r = document.createElement("img");
                return r.alt = i || "",
                r.src = n,
                r.className = "lg-dummy-img",
                r.style.cssText = o,
                t.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                r
            }
            return ""
        }
        ,
        t.prototype.setImgMarkup = function(t, e, i) {
            var s = this.galleryItems[i]
              , n = s.alt
              , o = s.srcset
              , r = s.sizes
              , l = s.sources
              , a = ""
              , g = n ? 'alt="' + n + '"' : "";
            a = this.isFirstSlideWithZoomAnimation() ? this.getDummyImageContent(e, i, g) : m(i, t, g, o, r, l);
            var h = document.createElement("picture");
            h.className = "lg-img-wrap",
            d(h).append(a),
            e.prepend(h)
        }
        ,
        t.prototype.onSlideObjectLoad = function(t, e, i, s) {
            var n, o = t.find(".lg-object").first();
            (n = o.get()) && n.complete && 0 !== n.naturalWidth || e ? i() : (o.on("load.lg error.lg", function() {
                i && i()
            }),
            o.on("error.lg", function() {
                s && s()
            }))
        }
        ,
        t.prototype.onLgObjectLoad = function(t, e, i, s, n, o) {
            var r = this;
            this.onSlideObjectLoad(t, o, function() {
                r.triggerSlideItemLoad(t, e, i, s, n)
            }, function() {
                t.addClass("lg-complete lg-complete_"),
                t.html('<span class="lg-error-msg">' + r.settings.strings.mediaLoadingFailed + "</span>")
            })
        }
        ,
        t.prototype.triggerSlideItemLoad = function(t, e, i, s, n) {
            var o = this
              , r = this.galleryItems[e];
            setTimeout(function() {
                t.addClass("lg-complete lg-complete_"),
                o.LGel.trigger("lgSlideItemLoad", {
                    index: e,
                    delay: i || 0,
                    isFirstSlide: n
                })
            }, n && "video" === this.getSlideType(r) && !r.poster ? s : 0)
        }
        ,
        t.prototype.isFirstSlideWithZoomAnimation = function() {
            return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize)
        }
        ,
        t.prototype.addSlideVideoInfo = function(t) {
            var e = this;
            t.forEach(function(t, i) {
                t.__slideVideoInfo = b(t.src, !!t.video, i),
                t.__slideVideoInfo && e.settings.loadYouTubePoster && !t.poster && t.__slideVideoInfo.youtube && (t.poster = "//img.youtube.com/vi/" + t.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg")
            })
        }
        ,
        t.prototype.loadContent = function(t, e) {
            var i = this
              , s = this.galleryItems[t]
              , n = d(this.getSlideItemId(t))
              , o = s.poster
              , r = s.srcset
              , l = s.sizes
              , a = s.sources
              , g = s.src
              , h = s.video
              , u = h && "string" == typeof h ? JSON.parse(h) : h;
            s.responsive && (g = p(s.responsive.split(",")) || g);
            var v = s.__slideVideoInfo
              , y = ""
              , b = !!s.iframe
              , C = !this.lGalleryOn
              , I = 0;
            if (C && (I = this.zoomFromOrigin && this.currentImageSize ? this.settings.startAnimationDuration + 10 : this.settings.backdropDuration + 10),
            !n.hasClass("lg-loaded")) {
                if (v) {
                    var S = this.mediaContainerPosition
                      , x = S.top
                      , w = S.bottom
                      , E = c(this.items[t], this.outer, x + w, v && this.settings.videoMaxSize);
                    y = this.getVideoContStyle(E)
                }
                if (b) {
                    var T, L, O, D, z, A, M = (T = this.settings.iframeWidth,
                    L = this.settings.iframeHeight,
                    O = this.settings.iframeMaxWidth,
                    D = this.settings.iframeMaxHeight,
                    z = g,
                    '<div class="lg-media-cont lg-has-iframe" style="width:' + T + "; max-width:" + O + "; height: " + L + "; max-height:" + D + '">\n                    <iframe class="lg-object" frameborder="0" ' + ((A = s.iframeTitle) ? 'title="' + A + '"' : "") + ' src="' + z + '"  allowfullscreen="true"></iframe>\n                </div>');
                    n.prepend(M)
                } else if (o) {
                    var B = "";
                    C && this.zoomFromOrigin && this.currentImageSize && (B = this.getDummyImageContent(n, t, ""));
                    var M = f(o, B || "", y, this.settings.strings.playVideo, v);
                    n.prepend(M)
                } else if (v) {
                    var M = '<div class="lg-video-cont " style="' + y + '"></div>';
                    n.prepend(M)
                } else if (this.setImgMarkup(g, n, t),
                r || a) {
                    var P = n.find(".lg-object");
                    this.initPictureFill(P)
                }
                (o || v) && this.LGel.trigger("lgHasVideo", {
                    index: t,
                    src: g,
                    html5Video: u,
                    hasPoster: !!o
                }),
                this.LGel.trigger("lgAfterAppendSlide", {
                    index: t
                }),
                this.lGalleryOn && ".lg-item" === this.settings.appendSubHtmlTo && this.addHtml(t)
            }
            var k = 0;
            I && !d(document.body).hasClass("lg-from-hash") && (k = I),
            this.isFirstSlideWithZoomAnimation() && (setTimeout(function() {
                n.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")
            }, this.settings.startAnimationDuration + 100),
            n.hasClass("lg-loaded") || setTimeout(function() {
                if ("image" === i.getSlideType(s)) {
                    var e = s.alt;
                    if (n.find(".lg-img-wrap").append(m(t, g, e ? 'alt="' + e + '"' : "", r, l, s.sources)),
                    r || a) {
                        var d = n.find(".lg-object");
                        i.initPictureFill(d)
                    }
                }
                ("image" === i.getSlideType(s) || "video" === i.getSlideType(s) && o) && (i.onLgObjectLoad(n, t, I, k, !0, !1),
                i.onSlideObjectLoad(n, !!(v && v.html5 && !o), function() {
                    i.loadContentOnFirstSlideLoad(t, n, k)
                }, function() {
                    i.loadContentOnFirstSlideLoad(t, n, k)
                }))
            }, this.settings.startAnimationDuration + 100)),
            n.addClass("lg-loaded"),
            this.isFirstSlideWithZoomAnimation() && ("video" !== this.getSlideType(s) || o) || this.onLgObjectLoad(n, t, I, k, C, !!(v && v.html5 && !o)),
            (!this.zoomFromOrigin || !this.currentImageSize) && n.hasClass("lg-complete_") && !this.lGalleryOn && setTimeout(function() {
                n.addClass("lg-complete")
            }, this.settings.backdropDuration),
            this.lGalleryOn = !0,
            !0 === e && (n.hasClass("lg-complete_") ? this.preload(t) : n.find(".lg-object").first().on("load.lg error.lg", function() {
                i.preload(t)
            }))
        }
        ,
        t.prototype.loadContentOnFirstSlideLoad = function(t, e, i) {
            var s = this;
            setTimeout(function() {
                e.find(".lg-dummy-img").remove(),
                e.removeClass("lg-first-slide"),
                s.outer.removeClass("lg-first-slide-loading"),
                s.isDummyImageRemoved = !0,
                s.preload(t)
            }, i + 300)
        }
        ,
        t.prototype.getItemsToBeInsertedToDom = function(t, e, i) {
            var s = this;
            void 0 === i && (i = 0);
            var n = []
              , o = Math.max(i, 3);
            o = Math.min(o, this.galleryItems.length);
            var r = "lg-item-" + this.lgId + "-" + e;
            if (this.galleryItems.length <= 3)
                return this.galleryItems.forEach(function(t, e) {
                    n.push("lg-item-" + s.lgId + "-" + e)
                }),
                n;
            if (t < (this.galleryItems.length - 1) / 2) {
                for (var l = t; l > t - o / 2 && l >= 0; l--)
                    n.push("lg-item-" + this.lgId + "-" + l);
                for (var a = n.length, l = 0; l < o - a; l++)
                    n.push("lg-item-" + this.lgId + "-" + (t + l + 1))
            } else {
                for (var l = t; l <= this.galleryItems.length - 1 && l < t + o / 2; l++)
                    n.push("lg-item-" + this.lgId + "-" + l);
                for (var a = n.length, l = 0; l < o - a; l++)
                    n.push("lg-item-" + this.lgId + "-" + (t - l - 1))
            }
            return this.settings.loop && (t === this.galleryItems.length - 1 ? n.push("lg-item-" + this.lgId + "-0") : 0 === t && n.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1))),
            -1 === n.indexOf(r) && n.push("lg-item-" + this.lgId + "-" + e),
            n
        }
        ,
        t.prototype.organizeSlideItems = function(t, e) {
            var i = this
              , s = this.getItemsToBeInsertedToDom(t, e, this.settings.numberOfSlideItemsInDom);
            return s.forEach(function(t) {
                -1 === i.currentItemsInDom.indexOf(t) && i.$inner.append('<div id="' + t + '" class="lg-item"></div>')
            }),
            this.currentItemsInDom.forEach(function(t) {
                -1 === s.indexOf(t) && d("#" + t).remove()
            }),
            s
        }
        ,
        t.prototype.getPreviousSlideIndex = function() {
            var t = 0;
            try {
                var e = this.outer.find(".lg-current").first().attr("id");
                t = parseInt(e.split("-")[3]) || 0
            } catch (e) {
                t = 0
            }
            return t
        }
        ,
        t.prototype.setDownloadValue = function(t) {
            if (this.settings.download) {
                var e = this.galleryItems[t];
                if (!1 === e.downloadUrl || "false" === e.downloadUrl)
                    this.outer.addClass("lg-hide-download");
                else {
                    var i = this.getElementById("lg-download");
                    this.outer.removeClass("lg-hide-download"),
                    i.attr("href", e.downloadUrl || e.src),
                    e.download && i.attr("download", e.download)
                }
            }
        }
        ,
        t.prototype.makeSlideAnimation = function(t, e, i) {
            var s = this;
            this.lGalleryOn && i.addClass("lg-slide-progress"),
            setTimeout(function() {
                s.outer.addClass("lg-no-trans"),
                s.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"),
                "prev" === t ? (e.addClass("lg-prev-slide"),
                i.addClass("lg-next-slide")) : (e.addClass("lg-next-slide"),
                i.addClass("lg-prev-slide")),
                setTimeout(function() {
                    s.outer.find(".lg-item").removeClass("lg-current"),
                    e.addClass("lg-current"),
                    s.outer.removeClass("lg-no-trans")
                }, 50)
            }, this.lGalleryOn ? this.settings.slideDelay : 0)
        }
        ,
        t.prototype.slide = function(t, e, i, s) {
            var n = this
              , o = this.getPreviousSlideIndex();
            if (this.currentItemsInDom = this.organizeSlideItems(t, o),
            !this.lGalleryOn || o !== t) {
                var r = this.galleryItems.length;
                if (!this.lgBusy) {
                    this.settings.counter && this.updateCurrentCounter(t);
                    var l = this.getSlideItem(t)
                      , a = this.getSlideItem(o)
                      , d = this.galleryItems[t]
                      , g = d.__slideVideoInfo;
                    if (this.outer.attr("data-lg-slide-type", this.getSlideType(d)),
                    this.setDownloadValue(t),
                    g) {
                        var h = this.mediaContainerPosition
                          , u = h.top
                          , m = h.bottom
                          , p = c(this.items[t], this.outer, u + m, g && this.settings.videoMaxSize);
                        this.resizeVideoSlide(t, p)
                    }
                    if (this.LGel.trigger("lgBeforeSlide", {
                        prevIndex: o,
                        index: t,
                        fromTouch: !!e,
                        fromThumb: !!i
                    }),
                    this.lgBusy = !0,
                    clearTimeout(this.hideBarTimeout),
                    this.arrowDisable(t),
                    !s && (t < o ? s = "prev" : t > o && (s = "next")),
                    e) {
                        this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                        var f = void 0
                          , v = void 0;
                        r > 2 ? (f = t - 1,
                        v = t + 1,
                        0 === t && o === r - 1 ? (v = 0,
                        f = r - 1) : t === r - 1 && 0 === o && (v = 0,
                        f = r - 1)) : (f = 0,
                        v = 1),
                        "prev" === s ? this.getSlideItem(v).addClass("lg-next-slide") : this.getSlideItem(f).addClass("lg-prev-slide"),
                        l.addClass("lg-current")
                    } else
                        this.makeSlideAnimation(s, l, a);
                    this.lGalleryOn ? setTimeout(function() {
                        n.loadContent(t, !0),
                        ".lg-item" !== n.settings.appendSubHtmlTo && n.addHtml(t)
                    }, this.settings.speed + 50 + (e ? 0 : this.settings.slideDelay)) : this.loadContent(t, !0),
                    setTimeout(function() {
                        n.lgBusy = !1,
                        a.removeClass("lg-slide-progress"),
                        n.LGel.trigger("lgAfterSlide", {
                            prevIndex: o,
                            index: t,
                            fromTouch: e,
                            fromThumb: i
                        })
                    }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (e ? 0 : this.settings.slideDelay))
                }
                this.index = t
            }
        }
        ,
        t.prototype.updateCurrentCounter = function(t) {
            this.getElementById("lg-counter-current").html(t + 1 + "")
        }
        ,
        t.prototype.updateCounterTotal = function() {
            this.getElementById("lg-counter-all").html(this.galleryItems.length + "")
        }
        ,
        t.prototype.getSlideType = function(t) {
            return t.__slideVideoInfo ? "video" : t.iframe ? "iframe" : "image"
        }
        ,
        t.prototype.touchMove = function(t, e, i) {
            var s = e.pageX - t.pageX
              , n = e.pageY - t.pageY
              , o = !1;
            if (this.swipeDirection ? o = !0 : Math.abs(s) > 15 ? (this.swipeDirection = "horizontal",
            o = !0) : Math.abs(n) > 15 && (this.swipeDirection = "vertical",
            o = !0),
            o) {
                var r = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                    null == i || i.preventDefault(),
                    this.outer.addClass("lg-dragging"),
                    this.setTranslate(r, s, 0);
                    var l = r.get().offsetWidth
                      , a = 15 * l / 100 - Math.abs(10 * s / 100);
                    this.setTranslate(this.outer.find(".lg-prev-slide").first(), -l + s - a, 0),
                    this.setTranslate(this.outer.find(".lg-next-slide").first(), l + s + a, 0)
                } else if ("vertical" === this.swipeDirection && this.settings.swipeToClose) {
                    null == i || i.preventDefault(),
                    this.$container.addClass("lg-dragging-vertical");
                    var d = 1 - Math.abs(n) / window.innerHeight;
                    this.$backdrop.css("opacity", d);
                    var g = 1 - Math.abs(n) / (2 * window.innerWidth);
                    this.setTranslate(r, 0, n, g, g),
                    Math.abs(n) > 100 && this.outer.addClass("lg-hide-items").removeClass("lg-components-open")
                }
            }
        }
        ,
        t.prototype.touchEnd = function(t, e, i) {
            var s, o = this;
            "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
            setTimeout(function() {
                o.$container.removeClass("lg-dragging-vertical"),
                o.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
                var r = !0;
                if ("horizontal" === o.swipeDirection) {
                    s = t.pageX - e.pageX;
                    var l = Math.abs(t.pageX - e.pageX);
                    s < 0 && l > o.settings.swipeThreshold ? (o.goToNextSlide(!0),
                    r = !1) : s > 0 && l > o.settings.swipeThreshold && (o.goToPrevSlide(!0),
                    r = !1)
                } else if ("vertical" === o.swipeDirection) {
                    if (s = Math.abs(t.pageY - e.pageY),
                    o.settings.closable && o.settings.swipeToClose && s > 100)
                        return void o.closeGallery();
                    o.$backdrop.css("opacity", 1)
                }
                if (o.outer.find(".lg-item").removeAttr("style"),
                r && 5 > Math.abs(t.pageX - e.pageX)) {
                    var a = d(i.target);
                    o.isPosterElement(a) && o.LGel.trigger(n)
                }
                o.swipeDirection = void 0
            }),
            setTimeout(function() {
                o.outer.hasClass("lg-dragging") || "lg-slide" === o.settings.mode || o.outer.removeClass("lg-slide")
            }, this.settings.speed + 100)
        }
        ,
        t.prototype.enableSwipe = function() {
            var t = this
              , e = {}
              , i = {}
              , s = !1
              , o = !1;
            this.settings.enableSwipe && (this.$inner.on("touchstart.lg", function(i) {
                t.dragOrSwipeEnabled = !0;
                var s = t.getSlideItem(t.index);
                (d(i.target).hasClass("lg-item") || s.get().contains(i.target)) && !t.outer.hasClass("lg-zoomed") && !t.lgBusy && 1 === i.touches.length && (o = !0,
                t.touchAction = "swipe",
                t.manageSwipeClass(),
                e = {
                    pageX: i.touches[0].pageX,
                    pageY: i.touches[0].pageY
                })
            }),
            this.$inner.on("touchmove.lg", function(n) {
                o && "swipe" === t.touchAction && 1 === n.touches.length && (i = {
                    pageX: n.touches[0].pageX,
                    pageY: n.touches[0].pageY
                },
                t.touchMove(e, i, n),
                s = !0)
            }),
            this.$inner.on("touchend.lg", function(r) {
                if ("swipe" === t.touchAction) {
                    if (s)
                        s = !1,
                        t.touchEnd(i, e, r);
                    else if (o) {
                        var l = d(r.target);
                        t.isPosterElement(l) && t.LGel.trigger(n)
                    }
                    t.touchAction = void 0,
                    o = !1
                }
            }))
        }
        ,
        t.prototype.enableDrag = function() {
            var t = this
              , e = {}
              , i = {}
              , s = !1
              , o = !1;
            this.settings.enableDrag && (this.outer.on("mousedown.lg", function(i) {
                t.dragOrSwipeEnabled = !0;
                var n = t.getSlideItem(t.index);
                (d(i.target).hasClass("lg-item") || n.get().contains(i.target)) && !t.outer.hasClass("lg-zoomed") && !t.lgBusy && (i.preventDefault(),
                t.lgBusy || (t.manageSwipeClass(),
                e = {
                    pageX: i.pageX,
                    pageY: i.pageY
                },
                s = !0,
                t.outer.get().scrollLeft += 1,
                t.outer.get().scrollLeft -= 1,
                t.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                t.LGel.trigger("lgDragStart")))
            }),
            d(window).on("mousemove.lg.global" + this.lgId, function(n) {
                s && t.lgOpened && (o = !0,
                i = {
                    pageX: n.pageX,
                    pageY: n.pageY
                },
                t.touchMove(e, i),
                t.LGel.trigger("lgDragMove"))
            }),
            d(window).on("mouseup.lg.global" + this.lgId, function(r) {
                if (t.lgOpened) {
                    var l = d(r.target);
                    o ? (o = !1,
                    t.touchEnd(i, e, r),
                    t.LGel.trigger("lgDragEnd")) : t.isPosterElement(l) && t.LGel.trigger(n),
                    s && (s = !1,
                    t.outer.removeClass("lg-grabbing").addClass("lg-grab"))
                }
            }))
        }
        ,
        t.prototype.triggerPosterClick = function() {
            var t = this;
            this.$inner.on("click.lg", function(e) {
                !t.dragOrSwipeEnabled && t.isPosterElement(d(e.target)) && t.LGel.trigger(n)
            })
        }
        ,
        t.prototype.manageSwipeClass = function() {
            var t = this.index + 1
              , e = this.index - 1;
            this.settings.loop && this.galleryItems.length > 2 && (0 === this.index ? e = this.galleryItems.length - 1 : this.index === this.galleryItems.length - 1 && (t = 0)),
            this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"),
            e > -1 && this.getSlideItem(e).addClass("lg-prev-slide"),
            this.getSlideItem(t).addClass("lg-next-slide")
        }
        ,
        t.prototype.goToNextSlide = function(t) {
            var e = this
              , i = this.settings.loop;
            t && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy || (this.index + 1 < this.galleryItems.length ? (this.index++,
            this.LGel.trigger(o, {
                index: this.index
            }),
            this.slide(this.index, !!t, !1, "next")) : i ? (this.index = 0,
            this.LGel.trigger(o, {
                index: this.index
            }),
            this.slide(this.index, !!t, !1, "next")) : this.settings.slideEndAnimation && !t && (this.outer.addClass("lg-right-end"),
            setTimeout(function() {
                e.outer.removeClass("lg-right-end")
            }, 400)))
        }
        ,
        t.prototype.goToPrevSlide = function(t) {
            var e = this
              , i = this.settings.loop;
            t && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy || (this.index > 0 ? (this.index--,
            this.LGel.trigger(r, {
                index: this.index,
                fromTouch: t
            }),
            this.slide(this.index, !!t, !1, "prev")) : i ? (this.index = this.galleryItems.length - 1,
            this.LGel.trigger(r, {
                index: this.index,
                fromTouch: t
            }),
            this.slide(this.index, !!t, !1, "prev")) : this.settings.slideEndAnimation && !t && (this.outer.addClass("lg-left-end"),
            setTimeout(function() {
                e.outer.removeClass("lg-left-end")
            }, 400)))
        }
        ,
        t.prototype.keyPress = function() {
            var t = this;
            d(window).on("keydown.lg.global" + this.lgId, function(e) {
                t.lgOpened && !0 === t.settings.escKey && 27 === e.keyCode && (e.preventDefault(),
                t.settings.allowMediaOverlap && t.outer.hasClass("lg-can-toggle") && t.outer.hasClass("lg-components-open") ? t.outer.removeClass("lg-components-open") : t.closeGallery()),
                t.lgOpened && t.galleryItems.length > 1 && (37 === e.keyCode && (e.preventDefault(),
                t.goToPrevSlide()),
                39 === e.keyCode && (e.preventDefault(),
                t.goToNextSlide()))
            })
        }
        ,
        t.prototype.arrow = function() {
            var t = this;
            this.getElementById("lg-prev").on("click.lg", function() {
                t.goToPrevSlide()
            }),
            this.getElementById("lg-next").on("click.lg", function() {
                t.goToNextSlide()
            })
        }
        ,
        t.prototype.arrowDisable = function(t) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
                var e = this.getElementById("lg-prev")
                  , i = this.getElementById("lg-next");
                t + 1 === this.galleryItems.length ? i.attr("disabled", "disabled").addClass("disabled") : i.removeAttr("disabled").removeClass("disabled"),
                0 === t ? e.attr("disabled", "disabled").addClass("disabled") : e.removeAttr("disabled").removeClass("disabled")
            }
        }
        ,
        t.prototype.setTranslate = function(t, e, i, s, n) {
            void 0 === s && (s = 1),
            void 0 === n && (n = 1),
            t.css("transform", "translate3d(" + e + "px, " + i + "px, 0px) scale3d(" + s + ", " + n + ", 1)")
        }
        ,
        t.prototype.mousewheel = function() {
            var t = this
              , e = 0;
            this.outer.on("wheel.lg", function(i) {
                if (i.deltaY && !(t.galleryItems.length < 2)) {
                    i.preventDefault();
                    var s = new Date().getTime();
                    !(s - e < 1e3) && (e = s,
                    i.deltaY > 0 ? t.goToNextSlide() : i.deltaY < 0 && t.goToPrevSlide())
                }
            })
        }
        ,
        t.prototype.isSlideElement = function(t) {
            return t.hasClass("lg-outer") || t.hasClass("lg-item") || t.hasClass("lg-img-wrap") || t.hasClass("lg-img-rotate")
        }
        ,
        t.prototype.isPosterElement = function(t) {
            var e = this.getSlideItem(this.index).find(".lg-video-play-button").get();
            return t.hasClass("lg-video-poster") || t.hasClass("lg-video-play-button") || e && e.contains(t.get())
        }
        ,
        t.prototype.toggleMaximize = function() {
            var t = this;
            this.getElementById("lg-maximize").on("click.lg", function() {
                t.$container.toggleClass("lg-inline"),
                t.refreshOnResize()
            })
        }
        ,
        t.prototype.invalidateItems = function() {
            for (var t = 0; t < this.items.length; t++) {
                var e = d(this.items[t]);
                e.off("click.lgcustom-item-" + e.attr("data-lg-id"))
            }
        }
        ,
        t.prototype.trapFocus = function() {
            var t = this;
            this.$container.get().focus({
                preventScroll: !0
            }),
            d(window).on("keydown.lg.global" + this.lgId, function(e) {
                if (t.lgOpened && ("Tab" === e.key || 9 === e.keyCode)) {
                    var i = v(t.$container.get())
                      , s = i[0]
                      , n = i[i.length - 1];
                    e.shiftKey ? document.activeElement === s && (n.focus(),
                    e.preventDefault()) : document.activeElement === n && (s.focus(),
                    e.preventDefault())
                }
            })
        }
        ,
        t.prototype.manageCloseGallery = function() {
            var t = this;
            if (this.settings.closable) {
                var e = !1;
                this.getElementById("lg-close").on("click.lg", function() {
                    t.closeGallery()
                }),
                this.settings.closeOnTap && (this.outer.on("mousedown.lg", function(i) {
                    var s = d(i.target);
                    e = !!t.isSlideElement(s)
                }),
                this.outer.on("mousemove.lg", function() {
                    e = !1
                }),
                this.outer.on("mouseup.lg", function(i) {
                    var s = d(i.target);
                    t.isSlideElement(s) && e && !t.outer.hasClass("lg-dragging") && t.closeGallery()
                }))
            }
        }
        ,
        t.prototype.closeGallery = function(t) {
            var e, i = this;
            if (!this.lgOpened || !this.settings.closable && !t)
                return 0;
            this.LGel.trigger("lgBeforeClose"),
            this.settings.resetScrollPosition && !this.settings.hideScrollbar && d(window).scrollTop(this.prevScrollTop);
            var s = this.items[this.index];
            if (this.zoomFromOrigin && s) {
                var n = this.mediaContainerPosition
                  , o = n.top
                  , r = n.bottom
                  , l = this.galleryItems[this.index]
                  , a = l.__slideVideoInfo
                  , g = l.poster
                  , h = c(s, this.outer, o + r, a && g && this.settings.videoMaxSize);
                e = u(s, this.outer, o, r, h)
            }
            this.zoomFromOrigin && e ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
            this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", e)) : (this.outer.addClass("lg-hide-items"),
            this.outer.removeClass("lg-zoom-from-image")),
            this.destroyModules(),
            this.lGalleryOn = !1,
            this.isDummyImageRemoved = !1,
            this.zoomFromOrigin = this.settings.zoomFromOrigin,
            clearTimeout(this.hideBarTimeout),
            this.hideBarTimeout = !1,
            d("html").removeClass("lg-on"),
            this.outer.removeClass("lg-visible lg-components-open"),
            this.$backdrop.removeClass("in").css("opacity", 0);
            var m = this.zoomFromOrigin && e ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
            return this.$container.removeClass("lg-show-in"),
            setTimeout(function() {
                i.zoomFromOrigin && e && i.outer.removeClass("lg-zoom-from-image"),
                i.$container.removeClass("lg-show"),
                i.resetScrollBar(),
                i.$backdrop.removeAttr("style").css("transition-duration", i.settings.backdropDuration + "ms"),
                i.outer.removeClass("lg-closing " + i.settings.startClass),
                i.getSlideItem(i.index).removeClass("lg-start-end-progress"),
                i.$inner.empty(),
                i.lgOpened && i.LGel.trigger("lgAfterClose", {
                    instance: i
                }),
                i.$container.get() && i.$container.get().blur(),
                i.lgOpened = !1
            }, m + 100),
            m + 100
        }
        ,
        t.prototype.initModules = function() {
            this.plugins.forEach(function(t) {
                try {
                    t.init()
                } catch (t) {
                    console.warn("lightGallery:- make sure lightGallery module is properly initiated")
                }
            })
        }
        ,
        t.prototype.destroyModules = function(t) {
            this.plugins.forEach(function(e) {
                try {
                    t ? e.destroy() : e.closeGallery && e.closeGallery()
                } catch (t) {
                    console.warn("lightGallery:- make sure lightGallery module is properly destroyed")
                }
            })
        }
        ,
        t.prototype.refresh = function(t) {
            this.settings.dynamic || this.invalidateItems(),
            t ? this.galleryItems = t : this.galleryItems = this.getItems(),
            this.updateControls(),
            this.openGalleryOnItemClick(),
            this.LGel.trigger(s)
        }
        ,
        t.prototype.updateControls = function() {
            this.addSlideVideoInfo(this.galleryItems),
            this.updateCounterTotal(),
            this.manageSingleSlideClassName()
        }
        ,
        t.prototype.destroyGallery = function() {
            this.destroyModules(!0),
            this.settings.dynamic || this.invalidateItems(),
            d(window).off(".lg.global" + this.lgId),
            this.LGel.off(".lg"),
            this.$container.remove()
        }
        ,
        t.prototype.destroy = function() {
            var t = this.closeGallery(!0);
            return t ? setTimeout(this.destroyGallery.bind(this), t) : this.destroyGallery(),
            t
        }
        ,
        t
    }();
    t.s(["default", 0, function(t) {
        var i = t.children
          , s = t.elementClassNames
          , n = t.onAfterAppendSlide
          , o = t.onInit
          , r = t.onHasVideo
          , l = t.onContainerResize
          , a = t.onAfterAppendSubHtml
          , d = t.onBeforeOpen
          , g = t.onAfterOpen
          , h = t.onSlideItemLoad
          , c = t.onBeforeSlide
          , u = t.onAfterSlide
          , m = t.onPosterClick
          , p = t.onDragStart
          , f = t.onDragMove
          , v = t.onDragEnd
          , y = t.onBeforeNextSlide
          , b = t.onBeforePrevSlide
          , C = t.onBeforeClose
          , S = t.onAfterClose
          , x = t.onRotateLeft
          , w = t.onRotateRight
          , E = t.onFlipHorizontal
          , T = t.onFlipVertical
          , L = function(t, e) {
            var i = {};
            for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && 0 > e.indexOf(s) && (i[s] = t[s]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, s = Object.getOwnPropertySymbols(t); n < s.length; n++)
                    0 > e.indexOf(s[n]) && Object.prototype.propertyIsEnumerable.call(t, s[n]) && (i[s[n]] = t[s[n]]);
            return i
        }(t, ["children", "elementClassNames", "onAfterAppendSlide", "onInit", "onHasVideo", "onContainerResize", "onAfterAppendSubHtml", "onBeforeOpen", "onAfterOpen", "onSlideItemLoad", "onBeforeSlide", "onAfterSlide", "onPosterClick", "onDragStart", "onDragMove", "onDragEnd", "onBeforeNextSlide", "onBeforePrevSlide", "onBeforeClose", "onAfterClose", "onRotateLeft", "onRotateRight", "onFlipHorizontal", "onFlipVertical"])
          , O = (0,
        e.useRef)(null)
          , D = (0,
        e.useCallback)(function() {
            n && O && O.current && O.current.addEventListener("lgAfterAppendSlide", function(t) {
                n(t.detail)
            }),
            o && O && O.current && O.current.addEventListener("lgInit", function(t) {
                o(t.detail)
            }),
            r && O && O.current && O.current.addEventListener("lgHasVideo", function(t) {
                r(t.detail)
            }),
            l && O && O.current && O.current.addEventListener("lgContainerResize", function(t) {
                l(t.detail)
            }),
            a && O && O.current && O.current.addEventListener("lgAfterAppendSubHtml", function(t) {
                a(t.detail)
            }),
            d && O && O.current && O.current.addEventListener("lgBeforeOpen", function(t) {
                d(t.detail)
            }),
            g && O && O.current && O.current.addEventListener("lgAfterOpen", function(t) {
                g(t.detail)
            }),
            h && O && O.current && O.current.addEventListener("lgSlideItemLoad", function(t) {
                h(t.detail)
            }),
            c && O && O.current && O.current.addEventListener("lgBeforeSlide", function(t) {
                c(t.detail)
            }),
            u && O && O.current && O.current.addEventListener("lgAfterSlide", function(t) {
                u(t.detail)
            }),
            m && O && O.current && O.current.addEventListener("lgPosterClick", function(t) {
                m(t.detail)
            }),
            p && O && O.current && O.current.addEventListener("lgDragStart", function(t) {
                p(t.detail)
            }),
            f && O && O.current && O.current.addEventListener("lgDragMove", function(t) {
                f(t.detail)
            }),
            v && O && O.current && O.current.addEventListener("lgDragEnd", function(t) {
                v(t.detail)
            }),
            y && O && O.current && O.current.addEventListener("lgBeforeNextSlide", function(t) {
                y(t.detail)
            }),
            b && O && O.current && O.current.addEventListener("lgBeforePrevSlide", function(t) {
                b(t.detail)
            }),
            C && O && O.current && O.current.addEventListener("lgBeforeClose", function(t) {
                C(t.detail)
            }),
            S && O && O.current && O.current.addEventListener("lgAfterClose", function(t) {
                S(t.detail)
            }),
            x && O && O.current && O.current.addEventListener("lgRotateLeft", function(t) {
                x(t.detail)
            }),
            w && O && O.current && O.current.addEventListener("lgRotateRight", function(t) {
                w(t.detail)
            }),
            E && O && O.current && O.current.addEventListener("lgFlipHorizontal", function(t) {
                E(t.detail)
            }),
            T && O && O.current && O.current.addEventListener("lgFlipVertical", function(t) {
                T(t.detail)
            })
        }, [n, a, S, x, w, E, T, g, u, C, y, d, b, c, l, v, f, p, r, o, m, h]);
        return (0,
        e.useEffect)(function() {
            D();
            var t = new I(O.current,L);
            return function() {
                t.destroy()
            }
        }, [D, L]),
        (0,
        e.createElement)("div", {
            className: "lg-react-element " + (s || ""),
            ref: O
        }, i)
    }
    ])
}
, 2623, t => {
    t.n(t.i(97786))
}
]);
