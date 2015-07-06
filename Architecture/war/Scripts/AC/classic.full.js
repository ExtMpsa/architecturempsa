/*! peugeot-webstore 2015-02-04 */
(function(a, b) {
    var c, d, e = typeof b, f = a.document, g = a.location, h = a.jQuery, i = a.$, j = {}, k = [], l = "1.9.1", m = k.concat, n = k.push, o = k.slice, p = k.indexOf, q = j.toString, r = j.hasOwnProperty, s = l.trim, t = function(a, b) {
        return new t.fn.init(a, b, d);
    }, u = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, v = /\S+/g, w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, x = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, y = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, z = /^[\],:{}\s]*$/, A = /(?:^|:|,)(?:\s*\[)+/g, B = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, C = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, E = /-([\da-z])/gi, F = function(a, b) {
        return b.toUpperCase();
    }, G = function(a) {
        (f.addEventListener || "load" === a.type || "complete" === f.readyState) && (H(), 
        t.ready());
    }, H = function() {
        f.addEventListener ? (f.removeEventListener("DOMContentLoaded", G, !1), a.removeEventListener("load", G, !1)) : (f.detachEvent("onreadystatechange", G), 
        a.detachEvent("onload", G));
    };
    t.fn = t.prototype = {
        jquery: l,
        constructor: t,
        init: function(a, c, d) {
            var e, g;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : x.exec(a), 
                !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof t ? c[0] : c, t.merge(this, t.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : f, !0)), 
                    y.test(e[1]) && t.isPlainObject(c)) for (e in c) t.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this;
                }
                if (g = f.getElementById(e[2]), g && g.parentNode) {
                    if (g.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = g;
                }
                return this.context = f, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : t.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, 
            this.context = a.context), t.makeArray(a, this));
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return o.call(this);
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
        },
        pushStack: function(a) {
            var b = t.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return t.each(this, a, b);
        },
        ready: function(a) {
            return t.ready.promise().done(a), this;
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        map: function(a) {
            return this.pushStack(t.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: n,
        sort: [].sort,
        splice: [].splice
    }, t.fn.init.prototype = t.fn, t.extend = t.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || t.isFunction(h) || (h = {}), 
        j === i && (h = this, --i); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e], 
        d = f[e], h !== d && (k && d && (t.isPlainObject(d) || (c = t.isArray(d))) ? (c ? (c = !1, 
        g = a && t.isArray(a) ? a : []) : g = a && t.isPlainObject(a) ? a : {}, h[e] = t.extend(k, g, d)) : d !== b && (h[e] = d));
        return h;
    }, t.extend({
        noConflict: function(b) {
            return a.$ === t && (a.$ = i), b && a.jQuery === t && (a.jQuery = h), t;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? t.readyWait++ : t.ready(!0);
        },
        ready: function(a) {
            if (a === !0 ? !--t.readyWait : !t.isReady) {
                if (!f.body) return setTimeout(t.ready);
                t.isReady = !0, a !== !0 && --t.readyWait > 0 || (c.resolveWith(f, [ t ]), t.fn.trigger && t(f).trigger("ready").off("ready"));
            }
        },
        isFunction: function(a) {
            return "function" === t.type(a);
        },
        isArray: Array.isArray || function(a) {
            return "array" === t.type(a);
        },
        isWindow: function(a) {
            return null != a && a == a.window;
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[q.call(a)] || "object" : typeof a;
        },
        isPlainObject: function(a) {
            if (!a || "object" !== t.type(a) || a.nodeType || t.isWindow(a)) return !1;
            try {
                if (a.constructor && !r.call(a, "constructor") && !r.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (c) {
                return !1;
            }
            var d;
            for (d in a) ;
            return d === b || r.call(a, d);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        error: function(a) {
            throw Error(a);
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || f;
            var d = y.exec(a), e = !c && [];
            return d ? [ b.createElement(d[1]) ] : (d = t.buildFragment([ a ], b, e), e && t(e).remove(), 
            t.merge([], d.childNodes));
        },
        parseJSON: function(c) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = t.trim(c), 
            c && z.test(c.replace(B, "@").replace(C, "]").replace(A, ""))) ? Function("return " + c)() : (t.error("Invalid JSON: " + c), 
            b);
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser(), d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), 
                d.async = "false", d.loadXML(c));
            } catch (f) {
                d = b;
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || t.error("Invalid XML: " + c), 
            d;
        },
        noop: function() {},
        globalEval: function(b) {
            b && t.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b);
            })(b);
        },
        camelCase: function(a) {
            return a.replace(D, "ms-").replace(E, F);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = I(a);
            if (c) {
                if (g) {
                    for (;f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break;
            } else if (g) {
                for (;f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a;
        },
        trim: s && !s.call("﻿ ") ? function(a) {
            return null == a ? "" : s.call(a);
        } : function(a) {
            return null == a ? "" : (a + "").replace(w, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (I(Object(a)) ? t.merge(c, "string" == typeof a ? [ a ] : a) : n.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (p) return p.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
        },
        merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d) for (;d > f; f++) a[e++] = c[f]; else while (c[f] !== b) a[e++] = c[f++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, e = 0, f = a.length, g = I(a), h = [];
            if (g) for (;f > e; e++) d = b(a[e], e, c), null != d && (h[h.length] = d); else for (e in a) d = b(a[e], e, c), 
            null != d && (h[h.length] = d);
            return m.apply([], h);
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f), t.isFunction(a) ? (d = o.call(arguments, 2), 
            e = function() {
                return a.apply(c || this, d.concat(o.call(arguments)));
            }, e.guid = a.guid = a.guid || t.guid++, e) : b;
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = null == d;
            if ("object" === t.type(d)) {
                f = !0;
                for (i in d) t.access(a, c, i, d[i], !0, g, h);
            } else if (e !== b && (f = !0, t.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), 
            c = null) : (k = c, c = function(a, b, c) {
                return k.call(t(a), c);
            })), c)) for (;j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g;
        },
        now: function() {
            return new Date().getTime();
        }
    }), t.ready.promise = function(b) {
        if (!c) if (c = t.Deferred(), "complete" === f.readyState) setTimeout(t.ready); else if (f.addEventListener) f.addEventListener("DOMContentLoaded", G, !1), 
        a.addEventListener("load", G, !1); else {
            f.attachEvent("onreadystatechange", G), a.attachEvent("onload", G);
            var d = !1;
            try {
                d = null == a.frameElement && f.documentElement;
            } catch (e) {}
            d && d.doScroll && function g() {
                if (!t.isReady) {
                    try {
                        d.doScroll("left");
                    } catch (a) {
                        return setTimeout(g, 50);
                    }
                    H(), t.ready();
                }
            }();
        }
        return c.promise(b);
    }, t.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
    });
    function I(a) {
        var b = a.length, c = t.type(a);
        return t.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    d = t(f);
    var J = {};
    function K(a) {
        var b = J[a] = {};
        return t.each(a.match(v) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    t.Callbacks = function(a) {
        a = "string" == typeof a ? J[a] || K(a) : t.extend({}, a);
        var c, d, e, f, g, h, i = [], j = !a.once && [], k = function(b) {
            for (d = a.memory && b, e = !0, g = h || 0, h = 0, f = i.length, c = !0; i && f > g; g++) if (i[g].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                d = !1;
                break;
            }
            c = !1, i && (j ? j.length && k(j.shift()) : d ? i = [] : l.disable());
        }, l = {
            add: function() {
                if (i) {
                    var b = i.length;
                    (function e(b) {
                        t.each(b, function(b, c) {
                            var d = t.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && e(c);
                        });
                    })(arguments), c ? f = i.length : d && (h = b, k(d));
                }
                return this;
            },
            remove: function() {
                return i && t.each(arguments, function(a, b) {
                    var d;
                    while ((d = t.inArray(b, i, d)) > -1) i.splice(d, 1), c && (f >= d && f--, g >= d && g--);
                }), this;
            },
            has: function(a) {
                return a ? t.inArray(a, i) > -1 : !(!i || !i.length);
            },
            empty: function() {
                return i = [], this;
            },
            disable: function() {
                return i = j = d = b, this;
            },
            disabled: function() {
                return !i;
            },
            lock: function() {
                return j = b, d || l.disable(), this;
            },
            locked: function() {
                return !j;
            },
            fireWith: function(a, b) {
                return b = b || [], b = [ a, b.slice ? b.slice() : b ], !i || e && !j || (c ? j.push(b) : k(b)), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!e;
            }
        };
        return l;
    }, t.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", t.Callbacks("once memory"), "resolved" ], [ "reject", "fail", t.Callbacks("once memory"), "rejected" ], [ "notify", "progress", t.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return t.Deferred(function(c) {
                        t.each(b, function(b, f) {
                            var g = f[0], h = t.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && t.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? t.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, t.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b = 0, c = o.call(arguments), d = c.length, e = 1 !== d || a && t.isFunction(a.promise) ? d : 0, f = 1 === e ? a : t.Deferred(), g = function(a, b, c) {
                return function(d) {
                    b[a] = this, c[a] = arguments.length > 1 ? o.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c);
                };
            }, h, i, j;
            if (d > 1) for (h = Array(d), i = Array(d), j = Array(d); d > b; b++) c[b] && t.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e;
            return e || f.resolveWith(j, c), f.promise();
        }
    }), t.support = function() {
        var b, c, d, g, h, i, j, k, l, m, n = f.createElement("div");
        if (n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], !c || !d || !c.length) return {};
        h = f.createElement("select"), j = h.appendChild(f.createElement("option")), g = n.getElementsByTagName("input")[0], 
        d.style.cssText = "top:1px;float:left;opacity:.5", b = {
            getSetAttribute: "t" !== n.className,
            leadingWhitespace: 3 === n.firstChild.nodeType,
            tbody: !n.getElementsByTagName("tbody").length,
            htmlSerialize: !!n.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: !!g.value,
            optSelected: j.selected,
            enctype: !!f.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== f.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === f.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, h.disabled = !0, 
        b.optDisabled = !j.disabled;
        try {
            delete n.test;
        } catch (o) {
            b.deleteExpando = !1;
        }
        g = f.createElement("input"), g.setAttribute("value", ""), b.input = "" === g.getAttribute("value"), 
        g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, 
        g.setAttribute("checked", "t"), g.setAttribute("name", "t"), i = f.createDocumentFragment(), 
        i.appendChild(g), b.appendChecked = g.checked, b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        n.attachEvent && (n.attachEvent("onclick", function() {
            b.noCloneEvent = !1;
        }), n.cloneNode(!0).click());
        for (m in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n.setAttribute(k = "on" + m, "t"), b[m + "Bubbles"] = k in a || n.attributes[k].expando === !1;
        return n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", 
        b.clearCloneStyle = "content-box" === n.style.backgroundClip, t(function() {
            var c, d, g, h = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", i = f.getElementsByTagName("body")[0];
            i && (c = f.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            i.appendChild(c).appendChild(n), n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            g = n.getElementsByTagName("td"), g[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            l = 0 === g[0].offsetHeight, g[0].style.display = "", g[1].style.display = "none", 
            b.reliableHiddenOffsets = l && 0 === g[0].offsetHeight, n.innerHTML = "", n.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            b.boxSizing = 4 === n.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== i.offsetTop, 
            a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(n, null) || {}).top, 
            b.boxSizingReliable = "4px" === (a.getComputedStyle(n, null) || {
                width: "4px"
            }).width, d = n.appendChild(f.createElement("div")), d.style.cssText = n.style.cssText = h, 
            d.style.marginRight = d.style.width = "0", n.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), 
            typeof n.style.zoom !== e && (n.innerHTML = "", n.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", 
            b.inlineBlockNeedsLayout = 3 === n.offsetWidth, n.style.display = "block", n.innerHTML = "<div></div>", 
            n.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== n.offsetWidth, b.inlineBlockNeedsLayout && (i.style.zoom = 1)), 
            i.removeChild(c), c = n = g = d = null);
        }), c = h = i = j = d = g = null, b;
    }();
    var L = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, M = /([A-Z])/g;
    function N(a, c, d, e) {
        if (t.acceptData(a)) {
            var f, g, h = t.expando, i = "string" == typeof c, j = a.nodeType, l = j ? t.cache : a, m = j ? a[h] : a[h] && h;
            if (m && l[m] && (e || l[m].data) || !i || d !== b) return m || (j ? a[h] = m = k.pop() || t.guid++ : m = h), 
            l[m] || (l[m] = {}, j || (l[m].toJSON = t.noop)), ("object" == typeof c || "function" == typeof c) && (e ? l[m] = t.extend(l[m], c) : l[m].data = t.extend(l[m].data, c)), 
            f = l[m], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[t.camelCase(c)] = d), 
            i ? (g = f[c], null == g && (g = f[t.camelCase(c)])) : g = f, g;
        }
    }
    function O(a, b, c) {
        if (t.acceptData(a)) {
            var d, e, f, g = a.nodeType, h = g ? t.cache : a, i = g ? a[t.expando] : t.expando;
            if (h[i]) {
                if (b && (f = c ? h[i] : h[i].data)) {
                    t.isArray(b) ? b = b.concat(t.map(b, t.camelCase)) : b in f ? b = [ b ] : (b = t.camelCase(b), 
                    b = b in f ? [ b ] : b.split(" "));
                    for (d = 0, e = b.length; e > d; d++) delete f[b[d]];
                    if (!(c ? Q : t.isEmptyObject)(f)) return;
                }
                (c || (delete h[i].data, Q(h[i]))) && (g ? t.cleanData([ a ], !0) : t.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null);
            }
        }
    }
    t.extend({
        cache: {},
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? t.cache[a[t.expando]] : a[t.expando], !!a && !Q(a);
        },
        data: function(a, b, c) {
            return N(a, b, c);
        },
        removeData: function(a, b) {
            return O(a, b);
        },
        _data: function(a, b, c) {
            return N(a, b, c, !0);
        },
        _removeData: function(a, b) {
            return O(a, b, !0);
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && t.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b;
        }
    }), t.fn.extend({
        data: function(a, c) {
            var d, e, f = this[0], g = 0, h = null;
            if (a === b) {
                if (this.length && (h = t.data(f), 1 === f.nodeType && !t._data(f, "parsedAttrs"))) {
                    for (d = f.attributes; d.length > g; g++) e = d[g].name, e.indexOf("data-") || (e = t.camelCase(e.slice(5)), 
                    P(f, e, h[e]));
                    t._data(f, "parsedAttrs", !0);
                }
                return h;
            }
            return "object" == typeof a ? this.each(function() {
                t.data(this, a);
            }) : t.access(this, function(c) {
                return c === b ? f ? P(f, a, t.data(f, a)) : null : (this.each(function() {
                    t.data(this, a, c);
                }), b);
            }, null, c, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                t.removeData(this, a);
            });
        }
    });
    function P(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(M, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : L.test(d) ? t.parseJSON(d) : d;
                } catch (f) {}
                t.data(a, c, d);
            } else d = b;
        }
        return d;
    }
    function Q(a) {
        var b;
        for (b in a) if (("data" !== b || !t.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    t.extend({
        queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = t._data(a, c), d && (!e || t.isArray(d) ? e = t._data(a, c, t.makeArray(d)) : e.push(d)), 
            e || []) : b;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = t.queue(a, b), d = c.length, e = c.shift(), f = t._queueHooks(a, b), g = function() {
                t.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), f.cur = e, e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return t._data(a, c) || t._data(a, c, {
                empty: t.Callbacks("once memory").add(function() {
                    t._removeData(a, b + "queue"), t._removeData(a, c);
                })
            });
        }
    }), t.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? t.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = t.queue(this, a, c);
                t._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && t.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                t.dequeue(this, a);
            });
        },
        delay: function(a, b) {
            return a = t.fx ? t.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d);
                };
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, c) {
            var d, e = 1, f = t.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [ g ]);
            };
            "string" != typeof a && (c = a, a = b), a = a || "fx";
            while (h--) d = t._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c);
        }
    });
    var R, S, T = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, W = /^(?:a|area)$/i, X = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Y = /^(?:checked|selected)$/i, Z = t.support.getSetAttribute, $ = t.support.input;
    t.fn.extend({
        attr: function(a, b) {
            return t.access(this, t.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                t.removeAttr(this, a);
            });
        },
        prop: function(a, b) {
            return t.access(this, t.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return a = t.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a];
                } catch (c) {}
            });
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
            if (t.isFunction(a)) return this.each(function(b) {
                t(this).addClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(v) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(T, " ") : " ")) {
                f = 0;
                while (e = b[f++]) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                c.className = t.trim(d);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
            if (t.isFunction(a)) return this.each(function(b) {
                t(this).removeClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(v) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(T, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                c.className = a ? t.trim(d) : "";
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a, d = "boolean" == typeof b;
            return t.isFunction(a) ? this.each(function(c) {
                t(this).toggleClass(a.call(this, c, this.className, b), b);
            }) : this.each(function() {
                if ("string" === c) {
                    var f, g = 0, h = t(this), i = b, j = a.match(v) || [];
                    while (f = j[g++]) i = d ? i : !h.hasClass(f), h[i ? "addClass" : "removeClass"](f);
                } else (c === e || "boolean" === c) && (this.className && t._data(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : t._data(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (;d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(T, " ").indexOf(b) >= 0) return !0;
            return !1;
        },
        val: function(a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length) return e = t.isFunction(a), this.each(function(c) {
                    var f, g = t(this);
                    1 === this.nodeType && (f = e ? a.call(this, c, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : t.isArray(f) && (f = t.map(f, function(a) {
                        return null == a ? "" : a + "";
                    })), d = t.valHooks[this.type] || t.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f));
                });
                if (f) return d = t.valHooks[f.type] || t.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, 
                "string" == typeof c ? c.replace(U, "") : null == c ? "" : c);
            }
        }
    }), t.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text;
                }
            },
            select: {
                get: function(a) {
                    var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0;
                    for (;h > i; i++) if (c = d[i], !(!c.selected && i !== e || (t.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && t.nodeName(c.parentNode, "optgroup"))) {
                        if (b = t(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    var c = t.makeArray(b);
                    return t(a).find("option").each(function() {
                        this.selected = t.inArray(t(this).val(), c) >= 0;
                    }), c.length || (a.selectedIndex = -1), c;
                }
            }
        },
        attr: function(a, c, d) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i) return typeof a.getAttribute === e ? t.prop(a, c, d) : (g = 1 !== i || !t.isXMLDoc(a), 
            g && (c = c.toLowerCase(), f = t.attrHooks[c] || (X.test(c) ? S : R)), d === b ? f && g && "get" in f && null !== (h = f.get(a, c)) ? h : (typeof a.getAttribute !== e && (h = a.getAttribute(c)), 
            null == h ? b : h) : null !== d ? f && g && "set" in f && (h = f.set(a, d, c)) !== b ? h : (a.setAttribute(c, d + ""), 
            d) : (t.removeAttr(a, c), b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(v);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = t.propFix[c] || c, X.test(c) ? !Z && Y.test(c) ? a[t.camelCase("default-" + c)] = a[d] = !1 : a[d] = !1 : t.attr(a, c, ""), 
            a.removeAttribute(Z ? c : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!t.support.radioValue && "radio" === b && t.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !t.isXMLDoc(a), g && (c = t.propFix[c] || c, 
            f = t.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : V.test(a.nodeName) || W.test(a.nodeName) && a.href ? 0 : b;
                }
            }
        }
    }), S = {
        get: function(a, c) {
            var d = t.prop(a, c), e = "boolean" == typeof d && a.getAttribute(c), f = "boolean" == typeof d ? $ && Z ? null != e : Y.test(c) ? a[t.camelCase("default-" + c)] : !!e : a.getAttributeNode(c);
            return f && f.value !== !1 ? c.toLowerCase() : b;
        },
        set: function(a, b, c) {
            return b === !1 ? t.removeAttr(a, c) : $ && Z || !Y.test(c) ? a.setAttribute(!Z && t.propFix[c] || c, c) : a[t.camelCase("default-" + c)] = a[c] = !0, 
            c;
        }
    }, $ && Z || (t.attrHooks.value = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return t.nodeName(a, "input") ? a.defaultValue : d && d.specified ? d.value : b;
        },
        set: function(a, c, d) {
            return t.nodeName(a, "input") ? (a.defaultValue = c, b) : R && R.set(a, c, d);
        }
    }), Z || (R = t.valHooks.button = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && ("id" === c || "name" === c || "coords" === c ? "" !== d.value : d.specified) ? d.value : b;
        },
        set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", 
            "value" === d || c === a.getAttribute(d) ? c : b;
        }
    }, t.attrHooks.contenteditable = {
        get: R.get,
        set: function(a, b, c) {
            R.set(a, "" === b ? !1 : b, c);
        }
    }, t.each([ "width", "height" ], function(a, c) {
        t.attrHooks[c] = t.extend(t.attrHooks[c], {
            set: function(a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b;
            }
        });
    })), t.support.hrefNormalized || (t.each([ "href", "src", "width", "height" ], function(a, c) {
        t.attrHooks[c] = t.extend(t.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return null == d ? b : d;
            }
        });
    }), t.each([ "href", "src" ], function(a, b) {
        t.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4);
            }
        };
    })), t.support.style || (t.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b;
        },
        set: function(a, b) {
            return a.style.cssText = b + "";
        }
    }), t.support.optSelected || (t.propHooks.selected = t.extend(t.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }
    })), t.support.enctype || (t.propFix.enctype = "encoding"), t.support.checkOn || t.each([ "radio", "checkbox" ], function() {
        t.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on" : a.value;
            }
        };
    }), t.each([ "radio", "checkbox" ], function() {
        t.valHooks[this] = t.extend(t.valHooks[this], {
            set: function(a, c) {
                return t.isArray(c) ? a.checked = t.inArray(t(a).val(), c) >= 0 : b;
            }
        });
    });
    var _ = /^(?:input|select|textarea)$/i, ab = /^key/, bb = /^(?:mouse|contextmenu)|click/, cb = /^(?:focusinfocus|focusoutblur)$/, db = /^([^.]*)(?:\.(.+)|)$/;
    function eb() {
        return !0;
    }
    function fb() {
        return !1;
    }
    t.event = {
        global: {},
        add: function(a, c, d, f, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s = t._data(a);
            if (s) {
                d.handler && (k = d, d = k.handler, g = k.selector), d.guid || (d.guid = t.guid++), 
                (i = s.events) || (i = s.events = {}), (m = s.handle) || (m = s.handle = function(a) {
                    return typeof t === e || a && t.event.triggered === a.type ? b : t.event.dispatch.apply(m.elem, arguments);
                }, m.elem = a), c = (c || "").match(v) || [ "" ], j = c.length;
                while (j--) h = db.exec(c[j]) || [], p = r = h[1], q = (h[2] || "").split(".").sort(), 
                l = t.event.special[p] || {}, p = (g ? l.delegateType : l.bindType) || p, l = t.event.special[p] || {}, 
                n = t.extend({
                    type: p,
                    origType: r,
                    data: f,
                    handler: d,
                    guid: d.guid,
                    selector: g,
                    needsContext: g && t.expr.match.needsContext.test(g),
                    namespace: q.join(".")
                }, k), (o = i[p]) || (o = i[p] = [], o.delegateCount = 0, l.setup && l.setup.call(a, f, q, m) !== !1 || (a.addEventListener ? a.addEventListener(p, m, !1) : a.attachEvent && a.attachEvent("on" + p, m))), 
                l.add && (l.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), g ? o.splice(o.delegateCount++, 0, n) : o.push(n), 
                t.event.global[p] = !0;
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = t.hasData(a) && t._data(a);
            if (q && (k = q.events)) {
                b = (b || "").match(v) || [ "" ], j = b.length;
                while (j--) if (h = db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), 
                n) {
                    l = t.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], 
                    h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                    while (f--) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), 
                    g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || t.removeEvent(a, n, q.handle), 
                    delete k[n]);
                } else for (n in k) t.event.remove(a, n + b[j], c, d, !0);
                t.isEmptyObject(k) && (delete q.handle, t._removeData(a, "events"));
            }
        },
        trigger: function(c, d, e, g) {
            var h, i, j, k, l, m, n, o = [ e || f ], p = r.call(c, "type") ? c.type : c, q = r.call(c, "namespace") ? c.namespace.split(".") : [];
            if (j = m = e = e || f, 3 !== e.nodeType && 8 !== e.nodeType && !cb.test(p + t.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), 
            p = q.shift(), q.sort()), i = 0 > p.indexOf(":") && "on" + p, c = c[t.expando] ? c : new t.Event(p, "object" == typeof c && c), 
            c.isTrigger = !0, c.namespace = q.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            c.result = b, c.target || (c.target = e), d = null == d ? [ c ] : t.makeArray(d, [ c ]), 
            l = t.event.special[p] || {}, g || !l.trigger || l.trigger.apply(e, d) !== !1)) {
                if (!g && !l.noBubble && !t.isWindow(e)) {
                    for (k = l.delegateType || p, cb.test(k + p) || (j = j.parentNode); j; j = j.parentNode) o.push(j), 
                    m = j;
                    m === (e.ownerDocument || f) && o.push(m.defaultView || m.parentWindow || a);
                }
                n = 0;
                while ((j = o[n++]) && !c.isPropagationStopped()) c.type = n > 1 ? k : l.bindType || p, 
                h = (t._data(j, "events") || {})[c.type] && t._data(j, "handle"), h && h.apply(j, d), 
                h = i && j[i], h && t.acceptData(j) && h.apply && h.apply(j, d) === !1 && c.preventDefault();
                if (c.type = p, !(g || c.isDefaultPrevented() || l._default && l._default.apply(e.ownerDocument, d) !== !1 || "click" === p && t.nodeName(e, "a") || !t.acceptData(e) || !i || !e[p] || t.isWindow(e))) {
                    m = e[i], m && (e[i] = null), t.event.triggered = p;
                    try {
                        e[p]();
                    } catch (s) {}
                    t.event.triggered = b, m && (e[i] = m);
                }
                return c.result;
            }
        },
        dispatch: function(a) {
            a = t.event.fix(a);
            var c, d, e, f, g, h = [], i = o.call(arguments), j = (t._data(this, "events") || {})[a.type] || [], k = t.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = t.event.handlers.call(this, a, j), c = 0;
                while ((f = h[c++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, 
                    a.data = e.data, d = ((t.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), 
                    d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (;j != this; j = j.parentNode || this) if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? t(d, this).index(j) >= 0 : t.find(d, this, null, [ j ]).length), 
                f[d] && f.push(e);
                f.length && h.push({
                    elem: j,
                    handlers: f
                });
            }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h;
        },
        fix: function(a) {
            if (a[t.expando]) return a;
            var b, c, d, e = a.type, g = a, h = this.fixHooks[e];
            h || (this.fixHooks[e] = h = bb.test(e) ? this.mouseHooks : ab.test(e) ? this.keyHooks : {}), 
            d = h.props ? this.props.concat(h.props) : this.props, a = new t.Event(g), b = d.length;
            while (b--) c = d[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || f), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, g, h = c.button, i = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || f, 
                g = e.documentElement, d = e.body, a.pageX = c.clientX + (g && g.scrollLeft || d && d.scrollLeft || 0) - (g && g.clientLeft || d && d.clientLeft || 0), 
                a.pageY = c.clientY + (g && g.scrollTop || d && d.scrollTop || 0) - (g && g.clientTop || d && d.clientTop || 0)), 
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), a.which || h === b || (a.which = 1 & h ? 1 : 2 & h ? 3 : 4 & h ? 2 : 0), 
                a;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return t.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : b;
                }
            },
            focus: {
                trigger: function() {
                    if (this !== f.activeElement && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f.activeElement && this.blur ? (this.blur(), !1) : b;
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = t.extend(new t.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? t.event.trigger(e, null, b) : t.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, t.removeEvent = f.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === e && (a[d] = null), a.detachEvent(d, c));
    }, t.Event = function(a, c) {
        return this instanceof t.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? eb : fb) : this.type = a, 
        c && t.extend(this, c), this.timeStamp = a && a.timeStamp || t.now(), this[t.expando] = !0, 
        b) : new t.Event(a, c);
    }, t.Event.prototype = {
        isDefaultPrevented: fb,
        isPropagationStopped: fb,
        isImmediatePropagationStopped: fb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = eb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = eb, a && (a.stopPropagation && a.stopPropagation(), 
            a.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = eb, this.stopPropagation();
        }
    }, t.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        t.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !t.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), t.support.submitBubbles || (t.event.special.submit = {
        setup: function() {
            return t.nodeName(this, "form") ? !1 : (t.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target, d = t.nodeName(c, "input") || t.nodeName(c, "button") ? c.form : b;
                d && !t._data(d, "submitBubbles") && (t.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0;
                }), t._data(d, "submitBubbles", !0));
            }), b);
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && t.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function() {
            return t.nodeName(this, "form") ? !1 : (t.event.remove(this, "._submit"), b);
        }
    }), t.support.changeBubbles || (t.event.special.change = {
        setup: function() {
            return _.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (t.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), t.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), t.event.simulate("change", this, a, !0);
            })), !1) : (t.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                _.test(b.nodeName) && !t._data(b, "changeBubbles") && (t.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || t.event.simulate("change", this.parentNode, a, !0);
                }), t._data(b, "changeBubbles", !0));
            }), b);
        },
        handle: function(a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b;
        },
        teardown: function() {
            return t.event.remove(this, "._change"), !_.test(this.nodeName);
        }
    }), t.support.focusinBubbles || t.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0, d = function(a) {
            t.event.simulate(b, a.target, t.event.fix(a), !0);
        };
        t.event.special[b] = {
            setup: function() {
                0 === c++ && f.addEventListener(a, d, !0);
            },
            teardown: function() {
                0 === --c && f.removeEventListener(a, d, !0);
            }
        };
    }), t.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this;
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, 
            d = b) : (e = d, d = c, c = b)), e === !1) e = fb; else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return t().off(a), h.apply(this, arguments);
            }, e.guid = h.guid || (h.guid = t.guid++)), this.each(function() {
                t.event.add(this, a, e, d, c);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, t(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), 
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this;
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = fb), 
            this.each(function() {
                t.event.remove(this, a, d, c);
            });
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        },
        trigger: function(a, b) {
            return this.each(function() {
                t.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, c) {
            var d = this[0];
            return d ? t.event.trigger(a, c, d, !0) : b;
        }
    }), function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, u = "sizzle" + -new Date(), v = a.document, w = {}, x = 0, y = 0, z = eb(), A = eb(), B = eb(), C = typeof b, D = 1 << 31, E = [], F = E.pop, G = E.push, H = E.slice, I = E.indexOf || function(a) {
            var b = 0, c = this.length;
            for (;c > b; b++) if (this[b] === a) return b;
            return -1;
        }, J = "[\\x20\\t\\r\\n\\f]", K = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", L = K.replace("w", "w#"), M = "([*^$|!~]?=)", N = "\\[" + J + "*(" + K + ")" + J + "*(?:" + M + J + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + L + ")|)|)" + J + "*\\]", O = ":(" + K + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)", P = RegExp("^" + J + "+|((?:^|[^\\\\])(?:\\\\.)*)" + J + "+$", "g"), Q = RegExp("^" + J + "*," + J + "*"), R = RegExp("^" + J + "*([\\x20\\t\\r\\n\\f>+~])" + J + "*"), S = RegExp(O), T = RegExp("^" + L + "$"), U = {
            ID: RegExp("^#(" + K + ")"),
            CLASS: RegExp("^\\.(" + K + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + K + ")['\"]?\\]"),
            TAG: RegExp("^(" + K.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + N),
            PSEUDO: RegExp("^" + O),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + J + "*(even|odd|(([+-]|)(\\d*)n|)" + J + "*(?:([+-]|)" + J + "*(\\d+)|))" + J + "*\\)|)", "i"),
            needsContext: RegExp("^" + J + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + J + "*((?:-\\d)?\\d*)" + J + "*\\)|)(?=[^-]|$)", "i")
        }, V = /[\x20\t\r\n\f]*[+~]/, W = /^[^{]+\{\s*\[native code/, X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /'|\\/g, _ = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, ab = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, bb = function(a, b) {
            var c = "0x" + b - 65536;
            return c !== c ? b : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c);
        };
        try {
            H.call(v.documentElement.childNodes, 0)[0].nodeType;
        } catch (cb) {
            H = function(a) {
                var b, c = [];
                while (b = this[a++]) c.push(b);
                return c;
            };
        }
        function db(a) {
            return W.test(a + "");
        }
        function eb() {
            var a, b = [];
            return a = function(c, d) {
                return b.push(c += " ") > e.cacheLength && delete a[b.shift()], a[c] = d;
            };
        }
        function fb(a) {
            return a[u] = !0, a;
        }
        function gb(a) {
            var b = l.createElement("div");
            try {
                return a(b);
            } catch (c) {
                return !1;
            } finally {
                b = null;
            }
        }
        function hb(a, b, c, d) {
            var e, f, g, h, i, j, m, p, q, s;
            if ((b ? b.ownerDocument || b : v) !== l && k(b), b = b || l, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (!n && !d) {
                if (e = X.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && r(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return G.apply(c, H.call(b.getElementsByTagName(a), 0)), c;
                    if ((g = e[3]) && w.getByClassName && b.getElementsByClassName) return G.apply(c, H.call(b.getElementsByClassName(g), 0)), 
                    c;
                }
                if (w.qsa && !o.test(a)) {
                    if (m = !0, p = u, q = b, s = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        j = mb(a), (m = b.getAttribute("id")) ? p = m.replace($, "\\$&") : b.setAttribute("id", p), 
                        p = "[id='" + p + "'] ", i = j.length;
                        while (i--) j[i] = p + nb(j[i]);
                        q = V.test(a) && b.parentNode || b, s = j.join(",");
                    }
                    if (s) try {
                        return G.apply(c, H.call(q.querySelectorAll(s), 0)), c;
                    } catch (t) {} finally {
                        m || b.removeAttribute("id");
                    }
                }
            }
            return vb(a.replace(P, "$1"), b, c, d);
        }
        g = hb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, k = hb.setDocument = function(a) {
            var c = a ? a.ownerDocument || a : v;
            return c !== l && 9 === c.nodeType && c.documentElement ? (l = c, m = c.documentElement, 
            n = g(c), w.tagNameNoComments = gb(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length;
            }), w.attributes = gb(function(a) {
                a.innerHTML = "<select></select>";
                var b = typeof a.lastChild.getAttribute("multiple");
                return "boolean" !== b && "string" !== b;
            }), w.getByClassName = gb(function(a) {
                return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 
                2 === a.getElementsByClassName("e").length) : !1;
            }), w.getByName = gb(function(a) {
                a.id = u + 0, a.innerHTML = "<a name='" + u + "'></a><div name='" + u + "'></div>", 
                m.insertBefore(a, m.firstChild);
                var b = c.getElementsByName && c.getElementsByName(u).length === 2 + c.getElementsByName(u + 0).length;
                return w.getIdNotName = !c.getElementById(u), m.removeChild(a), b;
            }), e.attrHandle = gb(function(a) {
                return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href");
            }) ? {} : {
                href: function(a) {
                    return a.getAttribute("href", 2);
                },
                type: function(a) {
                    return a.getAttribute("type");
                }
            }, w.getIdNotName ? (e.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && !n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, e.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (e.find.ID = function(a, c) {
                if (typeof c.getElementById !== C && !n) {
                    var d = c.getElementById(a);
                    return d ? d.id === a || typeof d.getAttributeNode !== C && d.getAttributeNode("id").value === a ? [ d ] : b : [];
                }
            }, e.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), e.find.TAG = w.tagNameNoComments ? function(a, c) {
                return typeof c.getElementsByTagName !== C ? c.getElementsByTagName(a) : b;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, e.find.NAME = w.getByName && function(a, c) {
                return typeof c.getElementsByName !== C ? c.getElementsByName(name) : b;
            }, e.find.CLASS = w.getByClassName && function(a, c) {
                return typeof c.getElementsByClassName === C || n ? b : c.getElementsByClassName(a);
            }, p = [], o = [ ":focus" ], (w.qsa = db(c.querySelectorAll)) && (gb(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || o.push("\\[" + J + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), 
                a.querySelectorAll(":checked").length || o.push(":checked");
            }), gb(function(a) {
                a.innerHTML = "<input type='hidden' i=''/>", a.querySelectorAll("[i^='']").length && o.push("[*^$]=" + J + "*(?:\"\"|'')"), 
                a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                o.push(",.*:");
            })), (w.matchesSelector = db(q = m.matchesSelector || m.mozMatchesSelector || m.webkitMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
                w.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O);
            }), o = RegExp(o.join("|")), p = RegExp(p.join("|")), r = db(m.contains) || m.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, s = m.compareDocumentPosition ? function(a, b) {
                var d;
                return a === b ? (i = !0, 0) : (d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) ? 1 & d || a.parentNode && 11 === a.parentNode.nodeType ? a === c || r(v, a) ? -1 : b === c || r(v, b) ? 1 : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
            } : function(a, b) {
                var d, e = 0, f = a.parentNode, g = b.parentNode, h = [ a ], j = [ b ];
                if (a === b) return i = !0, 0;
                if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : 0;
                if (f === g) return ib(a, b);
                d = a;
                while (d = d.parentNode) h.unshift(d);
                d = b;
                while (d = d.parentNode) j.unshift(d);
                while (h[e] === j[e]) e++;
                return e ? ib(h[e], j[e]) : h[e] === v ? -1 : j[e] === v ? 1 : 0;
            }, i = !1, [ 0, 0 ].sort(s), w.detectDuplicates = i, l) : l;
        }, hb.matches = function(a, b) {
            return hb(a, null, null, b);
        }, hb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(_, "='$1']"), !(!w.matchesSelector || n || p && p.test(b) || o.test(b))) try {
                var c = q.call(a, b);
                if (c || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c;
            } catch (d) {}
            return hb(b, l, null, [ a ]).length > 0;
        }, hb.contains = function(a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b);
        }, hb.attr = function(a, b) {
            var c;
            return (a.ownerDocument || a) !== l && k(a), n || (b = b.toLowerCase()), (c = e.attrHandle[b]) ? c(a) : n || w.attributes ? a.getAttribute(b) : ((c = a.getAttributeNode(b)) || a.getAttribute(b)) && a[b] === !0 ? b : c && c.specified ? c.value : null;
        }, hb.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        }, hb.uniqueSort = function(a) {
            var b, c = [], d = 1, e = 0;
            if (i = !w.detectDuplicates, a.sort(s), i) {
                for (;b = a[d]; d++) b === a[d - 1] && (e = c.push(d));
                while (e--) a.splice(c[e], 1);
            }
            return a;
        };
        function ib(a, b) {
            var c = b && a, d = c && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function jb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function lb(a) {
            return fb(function(b) {
                return b = +b, fb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        f = hb.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += f(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d]; d++) c += f(b);
            return c;
        }, e = hb.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: U,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || hb.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && hb.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return U.CHILD.test(a[0]) ? null : (a[4] ? a[2] = a[4] : c && S.test(c) && (b = mb(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    return "*" === a ? function() {
                        return !0;
                    } : (a = a.replace(ab, bb).toLowerCase(), function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a;
                    });
                },
                CLASS: function(a) {
                    var b = z[a + " "];
                    return b || (b = RegExp("(^|" + J + ")" + a + "(" + J + "|$)")) && z(a, function(a) {
                        return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = hb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === x && j[1], m = j[0] === x && j[2], 
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ x, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === x) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [ x, m ]), 
                            l === b)) break;
                            return m -= e, m === d || 0 === m % d && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || hb.error("unsupported pseudo: " + a);
                    return d[u] ? d(b) : d.length > 1 ? (c = [ a, a, "", b ], e.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
                        var e, f = d(a, b), g = f.length;
                        while (g--) e = I.call(a, f[g]), a[e] = !(c[e] = f[g]);
                    }) : function(a) {
                        return d(a, 0, c);
                    }) : d;
                }
            },
            pseudos: {
                not: fb(function(a) {
                    var b = [], c = [], d = h(a.replace(P, "$1"));
                    return d[u] ? fb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }),
                has: fb(function(a) {
                    return function(b) {
                        return hb(a, b).length > 0;
                    };
                }),
                contains: fb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || f(b)).indexOf(a) > -1;
                    };
                }),
                lang: fb(function(a) {
                    return T.test(a || "") || hb.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = n ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === m;
                },
                focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !e.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type);
                },
                first: lb(function() {
                    return [ 0 ];
                }),
                last: lb(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: lb(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: lb(function(a, b) {
                    var c = 0;
                    for (;b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: lb(function(a, b) {
                    var c = 1;
                    for (;b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: lb(function(a, b, c) {
                    var d = 0 > c ? c + b : c;
                    for (;--d >= 0; ) a.push(d);
                    return a;
                }),
                gt: lb(function(a, b, c) {
                    var d = 0 > c ? c + b : c;
                    for (;b > ++d; ) a.push(d);
                    return a;
                })
            }
        };
        for (c in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) e.pseudos[c] = jb(c);
        for (c in {
            submit: !0,
            reset: !0
        }) e.pseudos[c] = kb(c);
        function mb(a, b) {
            var c, d, f, g, h, i, j, k = A[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = e.preFilter;
            while (h) {
                (!c || (d = Q.exec(h))) && (d && (h = h.slice(d[0].length) || h), i.push(f = [])), 
                c = !1, (d = R.exec(h)) && (c = d.shift(), f.push({
                    value: c,
                    type: d[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in e.filter) !(d = U[g].exec(h)) || j[g] && !(d = j[g](d)) || (c = d.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: d
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? hb.error(a) : A(a, i).slice(0);
        }
        function nb(a) {
            var b = 0, c = a.length, d = "";
            for (;c > b; b++) d += a[b].value;
            return d;
        }
        function ob(a, b, c) {
            var e = b.dir, f = c && "parentNode" === e, g = y++;
            return b.first ? function(b, c, d) {
                while (b = b[e]) if (1 === b.nodeType || f) return a(b, c, d);
            } : function(b, c, h) {
                var i, j, k, l = x + " " + g;
                if (h) {
                    while (b = b[e]) if ((1 === b.nodeType || f) && a(b, c, h)) return !0;
                } else while (b = b[e]) if (1 === b.nodeType || f) if (k = b[u] || (b[u] = {}), 
                (j = k[e]) && j[0] === l) {
                    if ((i = j[1]) === !0 || i === d) return i === !0;
                } else if (j = k[e] = [ l ], j[1] = a(b, c, h) || d, j[1] === !0) return !0;
            };
        }
        function pb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function qb(a, b, c, d, e) {
            var f, g = [], h = 0, i = a.length, j = null != b;
            for (;i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g;
        }
        function rb(a, b, c, d, e, f) {
            return d && !d[u] && (d = rb(d)), e && !e[u] && (e = rb(e, f)), fb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : qb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = qb(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = qb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }
        function sb(a) {
            var b, c, d, f = a.length, g = e.relative[a[0].type], h = g || e.relative[" "], i = g ? 1 : 0, k = ob(function(a) {
                return a === b;
            }, h, !0), l = ob(function(a) {
                return I.call(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
            } ];
            for (;f > i; i++) if (c = e.relative[a[i].type]) m = [ ob(pb(m), c) ]; else {
                if (c = e.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (d = ++i; f > d; d++) if (e.relative[a[d].type]) break;
                    return rb(i > 1 && pb(m), i > 1 && nb(a.slice(0, i - 1)).replace(P, "$1"), c, d > i && sb(a.slice(i, d)), f > d && sb(a = a.slice(d)), f > d && nb(a));
                }
                m.push(c);
            }
            return pb(m);
        }
        function tb(a, b) {
            var c = 0, f = b.length > 0, g = a.length > 0, h = function(h, i, k, m, n) {
                var o, p, q, r = [], s = 0, t = "0", u = h && [], v = null != n, w = j, y = h || g && e.find.TAG("*", n && i.parentNode || i), z = x += null == w ? 1 : Math.random() || .1;
                for (v && (j = i !== l && i, d = c); null != (o = y[t]); t++) {
                    if (g && o) {
                        p = 0;
                        while (q = a[p++]) if (q(o, i, k)) {
                            m.push(o);
                            break;
                        }
                        v && (x = z, d = ++c);
                    }
                    f && ((o = !q && o) && s--, h && u.push(o));
                }
                if (s += t, f && t !== s) {
                    p = 0;
                    while (q = b[p++]) q(u, r, i, k);
                    if (h) {
                        if (s > 0) while (t--) u[t] || r[t] || (r[t] = F.call(m));
                        r = qb(r);
                    }
                    G.apply(m, r), v && !h && r.length > 0 && s + b.length > 1 && hb.uniqueSort(m);
                }
                return v && (x = z, j = w), u;
            };
            return f ? fb(h) : h;
        }
        h = hb.compile = function(a, b) {
            var c, d = [], e = [], f = B[a + " "];
            if (!f) {
                b || (b = mb(a)), c = b.length;
                while (c--) f = sb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = B(a, tb(e, d));
            }
            return f;
        };
        function ub(a, b, c) {
            var d = 0, e = b.length;
            for (;e > d; d++) hb(a, b[d], c);
            return c;
        }
        function vb(a, b, c, d) {
            var f, g, i, j, k, l = mb(a);
            if (!d && 1 === l.length) {
                if (g = l[0] = l[0].slice(0), g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !n && e.relative[g[1].type]) {
                    if (b = e.find.ID(i.matches[0].replace(ab, bb), b)[0], !b) return c;
                    a = a.slice(g.shift().value.length);
                }
                f = U.needsContext.test(a) ? 0 : g.length;
                while (f--) {
                    if (i = g[f], e.relative[j = i.type]) break;
                    if ((k = e.find[j]) && (d = k(i.matches[0].replace(ab, bb), V.test(g[0].type) && b.parentNode || b))) {
                        if (g.splice(f, 1), a = d.length && nb(g), !a) return G.apply(c, H.call(d, 0)), 
                        c;
                        break;
                    }
                }
            }
            return h(a, l)(d, b, n, c, V.test(a)), c;
        }
        e.pseudos.nth = e.pseudos.eq;
        function wb() {}
        e.filters = wb.prototype = e.pseudos, e.setFilters = new wb(), k(), hb.attr = t.attr, 
        t.find = hb, t.expr = hb.selectors, t.expr[":"] = t.expr.pseudos, t.unique = hb.uniqueSort, 
        t.text = hb.getText, t.isXMLDoc = hb.isXML, t.contains = hb.contains;
    }(a);
    var gb = /Until$/, hb = /^(?:parents|prev(?:Until|All))/, ib = /^.[^:#\[\.,]*$/, jb = t.expr.match.needsContext, kb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    t.fn.extend({
        find: function(a) {
            var b, c, d, e = this.length;
            if ("string" != typeof a) return d = this, this.pushStack(t(a).filter(function() {
                for (b = 0; e > b; b++) if (t.contains(d[b], this)) return !0;
            }));
            for (c = [], b = 0; e > b; b++) t.find(a, this[b], c);
            return c = this.pushStack(e > 1 ? t.unique(c) : c), c.selector = (this.selector ? this.selector + " " : "") + a, 
            c;
        },
        has: function(a) {
            var b, c = t(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (t.contains(this, c[b])) return !0;
            });
        },
        not: function(a) {
            return this.pushStack(mb(this, a, !1));
        },
        filter: function(a) {
            return this.pushStack(mb(this, a, !0));
        },
        is: function(a) {
            return !!a && ("string" == typeof a ? jb.test(a) ? t(a, this.context).index(this[0]) >= 0 : t.filter(a, this).length > 0 : this.filter(a).length > 0);
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = jb.test(a) || "string" != typeof a ? t(a, b || this.context) : 0;
            for (;e > d; d++) {
                c = this[d];
                while (c && c.ownerDocument && c !== b && 11 !== c.nodeType) {
                    if (g ? g.index(c) > -1 : t.find.matchesSelector(c, a)) {
                        f.push(c);
                        break;
                    }
                    c = c.parentNode;
                }
            }
            return this.pushStack(f.length > 1 ? t.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? t.inArray(this[0], t(a)) : t.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            var c = "string" == typeof a ? t(a, b) : t.makeArray(a && a.nodeType ? [ a ] : a), d = t.merge(this.get(), c);
            return this.pushStack(t.unique(d));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), t.fn.andSelf = t.fn.addBack;
    function lb(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a;
    }
    t.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return t.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return t.dir(a, "parentNode", c);
        },
        next: function(a) {
            return lb(a, "nextSibling");
        },
        prev: function(a) {
            return lb(a, "previousSibling");
        },
        nextAll: function(a) {
            return t.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return t.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return t.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return t.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return t.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return t.sibling(a.firstChild);
        },
        contents: function(a) {
            return t.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : t.merge([], a.childNodes);
        }
    }, function(a, b) {
        t.fn[a] = function(c, d) {
            var e = t.map(this, b, c);
            return gb.test(a) || (d = c), d && "string" == typeof d && (e = t.filter(d, e)), 
            e = this.length > 1 && !kb[a] ? t.unique(e) : e, this.length > 1 && hb.test(a) && (e = e.reverse()), 
            this.pushStack(e);
        };
    }), t.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? t.find.matchesSelector(b[0], a) ? [ b[0] ] : [] : t.find.matches(a, b);
        },
        dir: function(a, c, d) {
            var e = [], f = a[c];
            while (f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !t(f).is(d))) 1 === f.nodeType && e.push(f), 
            f = f[c];
            return e;
        },
        sibling: function(a, b) {
            var c = [];
            for (;a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    });
    function mb(a, b, c) {
        if (b = b || 0, t.isFunction(b)) return t.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c;
        });
        if (b.nodeType) return t.grep(a, function(a) {
            return a === b === c;
        });
        if ("string" == typeof b) {
            var d = t.grep(a, function(a) {
                return 1 === a.nodeType;
            });
            if (ib.test(b)) return t.filter(b, d, !c);
            b = t.filter(b, d);
        }
        return t.grep(a, function(a) {
            return t.inArray(a, b) >= 0 === c;
        });
    }
    function nb(a) {
        var b = ob.split("|"), c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c;
    }
    var ob = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", pb = / jQuery\d+="(?:null|\d+)"/g, qb = RegExp("<(?:" + ob + ")[\\s/>]", "i"), rb = /^\s+/, sb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, tb = /<([\w:]+)/, ub = /<tbody/i, vb = /<|&#?\w+;/, wb = /<(?:script|style|link)/i, xb = /^(?:checkbox|radio)$/i, yb = /checked\s*(?:[^=]|=\s*.checked.)/i, zb = /^$|\/(?:java|ecma)script/i, Ab = /^true\/(.*)/, Bb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Cb = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: t.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, Db = nb(f), Eb = Db.appendChild(f.createElement("div"));
    Cb.optgroup = Cb.option, Cb.tbody = Cb.tfoot = Cb.colgroup = Cb.caption = Cb.thead, 
    Cb.th = Cb.td, t.fn.extend({
        text: function(a) {
            return t.access(this, function(a) {
                return a === b ? t.text(this) : this.empty().append((this[0] && this[0].ownerDocument || f).createTextNode(a));
            }, null, a, arguments.length);
        },
        wrapAll: function(a) {
            if (t.isFunction(a)) return this.each(function(b) {
                t(this).wrapAll(a.call(this, b));
            });
            if (this[0]) {
                var b = t(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            return t.isFunction(a) ? this.each(function(b) {
                t(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = t(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = t.isFunction(a);
            return this.each(function(c) {
                t(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                t.nodeName(this, "body") || t(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(a);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(a, this.firstChild);
            });
        },
        before: function() {
            return this.domManip(arguments, !1, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, !1, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            var c, d = 0;
            for (;null != (c = this[d]); d++) (!a || t.filter(a, [ c ]).length > 0) && (b || 1 !== c.nodeType || t.cleanData(Lb(c)), 
            c.parentNode && (b && t.contains(c.ownerDocument, c) && Ib(Lb(c, "script")), c.parentNode.removeChild(c)));
            return this;
        },
        empty: function() {
            var a, b = 0;
            for (;null != (a = this[b]); b++) {
                1 === a.nodeType && t.cleanData(Lb(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && t.nodeName(a, "select") && (a.options.length = 0);
            }
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return t.clone(this, a, b);
            });
        },
        html: function(a) {
            return t.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(pb, "") : b;
                if (!("string" != typeof a || wb.test(a) || !t.support.htmlSerialize && qb.test(a) || !t.support.leadingWhitespace && rb.test(a) || Cb[(tb.exec(a) || [ "", "" ])[1].toLowerCase()])) {
                    a = a.replace(sb, "<$1></$2>");
                    try {
                        for (;e > d; d++) c = this[d] || {}, 1 === c.nodeType && (t.cleanData(Lb(c, !1)), 
                        c.innerHTML = a);
                        c = 0;
                    } catch (f) {}
                }
                c && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function(a) {
            var b = t.isFunction(a);
            return b || "string" == typeof a || (a = t(a).not(this).detach()), this.domManip([ a ], !0, function(a) {
                var b = this.nextSibling, c = this.parentNode;
                c && (t(this).remove(), c.insertBefore(a, b));
            });
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, c, d) {
            a = m.apply([], a);
            var e, f, g, h, i, j, k = 0, l = this.length, n = this, o = l - 1, p = a[0], q = t.isFunction(p);
            if (q || !(1 >= l || "string" != typeof p || t.support.checkClone) && yb.test(p)) return this.each(function(e) {
                var f = n.eq(e);
                q && (a[0] = p.call(this, e, c ? f.html() : b)), f.domManip(a, c, d);
            });
            if (l && (j = t.buildFragment(a, this[0].ownerDocument, !1, this), e = j.firstChild, 
            1 === j.childNodes.length && (j = e), e)) {
                for (c = c && t.nodeName(e, "tr"), h = t.map(Lb(j, "script"), Gb), g = h.length; l > k; k++) f = j, 
                k !== o && (f = t.clone(f, !0, !0), g && t.merge(h, Lb(f, "script"))), d.call(c && t.nodeName(this[k], "table") ? Fb(this[k], "tbody") : this[k], f, k);
                if (g) for (i = h[h.length - 1].ownerDocument, t.map(h, Hb), k = 0; g > k; k++) f = h[k], 
                zb.test(f.type || "") && !t._data(f, "globalEval") && t.contains(i, f) && (f.src ? t.ajax({
                    url: f.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : t.globalEval((f.text || f.textContent || f.innerHTML || "").replace(Bb, "")));
                j = e = null;
            }
            return this;
        }
    });
    function Fb(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b));
    }
    function Gb(a) {
        var b = a.getAttributeNode("type");
        return a.type = (b && b.specified) + "/" + a.type, a;
    }
    function Hb(a) {
        var b = Ab.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function Ib(a, b) {
        var c, d = 0;
        for (;null != (c = a[d]); d++) t._data(c, "globalEval", !b || t._data(b[d], "globalEval"));
    }
    function Jb(a, b) {
        if (1 === b.nodeType && t.hasData(a)) {
            var c, d, e, f = t._data(a), g = t._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) t.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = t.extend({}, g.data));
        }
    }
    function Kb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !t.support.noCloneEvent && b[t.expando]) {
                e = t._data(b);
                for (d in e.events) t.removeEvent(b, d, e.handle);
                b.removeAttribute(t.expando);
            }
            "script" === c && b.text !== a.text ? (Gb(b).text = a.text, Hb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), 
            t.support.html5Clone && a.innerHTML && !t.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && xb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, 
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }
    t.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        t.fn[a] = function(a) {
            var c, d = 0, e = [], f = t(a), g = f.length - 1;
            for (;g >= d; d++) c = d === g ? this : this.clone(!0), t(f[d])[b](c), n.apply(e, c.get());
            return this.pushStack(e);
        };
    });
    function Lb(a, c) {
        var d, f, g = 0, h = typeof a.getElementsByTagName !== e ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== e ? a.querySelectorAll(c || "*") : b;
        if (!h) for (h = [], d = a.childNodes || a; null != (f = d[g]); g++) !c || t.nodeName(f, c) ? h.push(f) : t.merge(h, Lb(f, c));
        return c === b || c && t.nodeName(a, c) ? t.merge([ a ], h) : h;
    }
    function Mb(a) {
        xb.test(a.type) && (a.defaultChecked = a.checked);
    }
    t.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = t.contains(a.ownerDocument, a);
            if (t.support.html5Clone || t.isXMLDoc(a) || !qb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Eb.innerHTML = a.outerHTML, 
            Eb.removeChild(f = Eb.firstChild)), !(t.support.noCloneEvent && t.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || t.isXMLDoc(a))) for (d = Lb(f), 
            h = Lb(a), g = 0; null != (e = h[g]); ++g) d[g] && Kb(e, d[g]);
            if (b) if (c) for (h = h || Lb(a), d = d || Lb(f), g = 0; null != (e = h[g]); g++) Jb(e, d[g]); else Jb(a, f);
            return d = Lb(f, "script"), d.length > 0 && Ib(d, !i && Lb(a, "script")), d = h = e = null, 
            f;
        },
        buildFragment: function(a, b, c, d) {
            var e, f, g, h, i, j, k, l = a.length, m = nb(b), n = [], o = 0;
            for (;l > o; o++) if (f = a[o], f || 0 === f) if ("object" === t.type(f)) t.merge(n, f.nodeType ? [ f ] : f); else if (vb.test(f)) {
                h = h || m.appendChild(b.createElement("div")), i = (tb.exec(f) || [ "", "" ])[1].toLowerCase(), 
                k = Cb[i] || Cb._default, h.innerHTML = k[1] + f.replace(sb, "<$1></$2>") + k[2], 
                e = k[0];
                while (e--) h = h.lastChild;
                if (!t.support.leadingWhitespace && rb.test(f) && n.push(b.createTextNode(rb.exec(f)[0])), 
                !t.support.tbody) {
                    f = "table" !== i || ub.test(f) ? "<table>" !== k[1] || ub.test(f) ? 0 : h : h.firstChild, 
                    e = f && f.childNodes.length;
                    while (e--) t.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                }
                t.merge(n, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = m.lastChild;
            } else n.push(b.createTextNode(f));
            h && m.removeChild(h), t.support.appendChecked || t.grep(Lb(n, "input"), Mb), o = 0;
            while (f = n[o++]) if ((!d || -1 === t.inArray(f, d)) && (g = t.contains(f.ownerDocument, f), 
            h = Lb(m.appendChild(f), "script"), g && Ib(h), c)) {
                e = 0;
                while (f = h[e++]) zb.test(f.type || "") && c.push(f);
            }
            return h = null, m;
        },
        cleanData: function(a, b) {
            var c, d, f, g, h = 0, i = t.expando, j = t.cache, l = t.support.deleteExpando, m = t.event.special;
            for (;null != (c = a[h]); h++) if ((b || t.acceptData(c)) && (f = c[i], g = f && j[f])) {
                if (g.events) for (d in g.events) m[d] ? t.event.remove(c, d) : t.removeEvent(c, d, g.handle);
                j[f] && (delete j[f], l ? delete c[i] : typeof c.removeAttribute !== e ? c.removeAttribute(i) : c[i] = null, 
                k.push(f));
            }
        }
    });
    var Nb, Ob, Pb, Qb = /alpha\([^)]*\)/i, Rb = /opacity\s*=\s*([^)]*)/, Sb = /^(top|right|bottom|left)$/, Tb = /^(none|table(?!-c[ea]).+)/, Ub = /^margin/, Vb = RegExp("^(" + u + ")(.*)$", "i"), Wb = RegExp("^(" + u + ")(?!px)[a-z%]+$", "i"), Xb = RegExp("^([+-])=(" + u + ")", "i"), Yb = {
        BODY: "block"
    }, Zb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, $b = {
        letterSpacing: 0,
        fontWeight: 400
    }, _b = [ "Top", "Right", "Bottom", "Left" ], ac = [ "Webkit", "O", "Moz", "ms" ];
    function bc(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = ac.length;
        while (e--) if (b = ac[e] + c, b in a) return b;
        return d;
    }
    function cc(a, b) {
        return a = b || a, "none" === t.css(a, "display") || !t.contains(a.ownerDocument, a);
    }
    function dc(a, b) {
        var c, d, e, f = [], g = 0, h = a.length;
        for (;h > g; g++) d = a[g], d.style && (f[g] = t._data(d, "olddisplay"), c = d.style.display, 
        b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && cc(d) && (f[g] = t._data(d, "olddisplay", hc(d.nodeName)))) : f[g] || (e = cc(d), 
        (c && "none" !== c || !e) && t._data(d, "olddisplay", e ? c : t.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    t.fn.extend({
        css: function(a, c) {
            return t.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (t.isArray(c)) {
                    for (f = Ob(a), e = c.length; e > h; h++) g[c[h]] = t.css(a, c[h], !1, f);
                    return g;
                }
                return d !== b ? t.style(a, c, d) : t.css(a, c);
            }, a, c, arguments.length > 1);
        },
        show: function() {
            return dc(this, !0);
        },
        hide: function() {
            return dc(this);
        },
        toggle: function(a) {
            var b = "boolean" == typeof a;
            return this.each(function() {
                (b ? a : cc(this)) ? t(this).show() : t(this).hide();
            });
        }
    }), t.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Pb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": t.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = t.camelCase(c), j = a.style;
                if (c = t.cssProps[i] || (t.cssProps[i] = bc(j, i)), h = t.cssHooks[c] || t.cssHooks[i], 
                d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = Xb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(t.css(a, c)), 
                g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || t.cssNumber[i] || (d += "px"), 
                t.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), 
                h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d;
                } catch (k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = t.camelCase(c);
            return c = t.cssProps[i] || (t.cssProps[i] = bc(a.style, i)), h = t.cssHooks[c] || t.cssHooks[i], 
            h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = Pb(a, c, e)), "normal" === g && c in $b && (g = $b[c]), 
            "" === d || d ? (f = parseFloat(g), d === !0 || t.isNumeric(f) ? f || 0 : g) : g;
        },
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        }
    }), a.getComputedStyle ? (Ob = function(b) {
        return a.getComputedStyle(b, null);
    }, Pb = function(a, c, d) {
        var e, f, g, h = d || Ob(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        return h && ("" !== i || t.contains(a.ownerDocument, a) || (i = t.style(a, c)), 
        Wb.test(i) && Ub.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, 
        i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i;
    }) : f.documentElement.currentStyle && (Ob = function(a) {
        return a.currentStyle;
    }, Pb = function(a, c, d) {
        var e, f, g, h = d || Ob(a), i = h ? h[c] : b, j = a.style;
        return null == i && j && j[c] && (i = j[c]), Wb.test(i) && !Sb.test(c) && (e = j.left, 
        f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, 
        i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i;
    });
    function ec(a, b, c) {
        var d = Vb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function fc(a, b, c, d, e) {
        var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0;
        for (;4 > f; f += 2) "margin" === c && (g += t.css(a, c + _b[f], !0, e)), d ? ("content" === c && (g -= t.css(a, "padding" + _b[f], !0, e)), 
        "margin" !== c && (g -= t.css(a, "border" + _b[f] + "Width", !0, e))) : (g += t.css(a, "padding" + _b[f], !0, e), 
        "padding" !== c && (g += t.css(a, "border" + _b[f] + "Width", !0, e)));
        return g;
    }
    function gc(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ob(a), g = t.support.boxSizing && "border-box" === t.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Pb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Wb.test(e)) return e;
            d = g && (t.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + fc(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function hc(a) {
        var b = f, c = Yb[a];
        return c || (c = ic(a, b), "none" !== c && c || (Nb = (Nb || t("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), 
        b = (Nb[0].contentWindow || Nb[0].contentDocument).document, b.write("<!doctype html><html><body>"), 
        b.close(), c = ic(a, b), Nb.detach()), Yb[a] = c), c;
    }
    function ic(a, b) {
        var c = t(b.createElement(a)).appendTo(b.body), d = t.css(c[0], "display");
        return c.remove(), d;
    }
    t.each([ "height", "width" ], function(a, c) {
        t.cssHooks[c] = {
            get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && Tb.test(t.css(a, "display")) ? t.swap(a, Zb, function() {
                    return gc(a, c, e);
                }) : gc(a, c, e) : b;
            },
            set: function(a, b, d) {
                var e = d && Ob(a);
                return ec(a, b, d ? fc(a, c, d, t.support.boxSizing && "border-box" === t.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), t.support.opacity || (t.cssHooks.opacity = {
        get: function(a, b) {
            return Rb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = t.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === t.trim(f.replace(Qb, "")) && c.removeAttribute && (c.removeAttribute("filter"), 
            "" === b || d && !d.filter) || (c.filter = Qb.test(f) ? f.replace(Qb, e) : f + " " + e);
        }
    }), t(function() {
        t.support.reliableMarginRight || (t.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? t.swap(a, {
                    display: "inline-block"
                }, Pb, [ a, "marginRight" ]) : b;
            }
        }), !t.support.pixelPosition && t.fn.position && t.each([ "top", "left" ], function(a, c) {
            t.cssHooks[c] = {
                get: function(a, d) {
                    return d ? (d = Pb(a, c), Wb.test(d) ? t(a).position()[c] + "px" : d) : b;
                }
            };
        });
    }), t.expr && t.expr.filters && (t.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !t.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || t.css(a, "display"));
    }, t.expr.filters.visible = function(a) {
        return !t.expr.filters.hidden(a);
    }), t.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        t.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ];
                for (;4 > d; d++) e[a + _b[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Ub.test(a) || (t.cssHooks[a + b].set = ec);
    });
    var jc = /%20/g, kc = /\[\]$/, lc = /\r?\n/g, mc = /^(?:submit|button|image|reset|file)$/i, nc = /^(?:input|select|textarea|keygen)/i;
    t.fn.extend({
        serialize: function() {
            return t.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = t.prop(this, "elements");
                return a ? t.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !t(this).is(":disabled") && nc.test(this.nodeName) && !mc.test(a) && (this.checked || !xb.test(a));
            }).map(function(a, b) {
                var c = t(this).val();
                return null == c ? null : t.isArray(c) ? t.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(lc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(lc, "\r\n")
                };
            }).get();
        }
    }), t.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = t.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (c === b && (c = t.ajaxSettings && t.ajaxSettings.traditional), t.isArray(a) || a.jquery && !t.isPlainObject(a)) t.each(a, function() {
            f(this.name, this.value);
        }); else for (d in a) oc(d, a[d], c, f);
        return e.join("&").replace(jc, "+");
    };
    function oc(a, b, c, d) {
        var e;
        if (t.isArray(b)) t.each(b, function(b, e) {
            c || kc.test(a) ? d(a, e) : oc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== t.type(b)) d(a, b); else for (e in b) oc(a + "[" + e + "]", b[e], c, d);
    }
    t.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        t.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), t.fn.hover = function(a, b) {
        return this.mouseenter(a).mouseleave(b || a);
    };
    var pc, qc, rc = t.now(), sc = /\?/, tc = /#.*$/, uc = /([?&])_=[^&]*/, vc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, wc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, xc = /^(?:GET|HEAD)$/, yc = /^\/\//, zc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Ac = t.fn.load, Bc = {}, Cc = {}, Dc = "*/".concat("*");
    try {
        qc = g.href;
    } catch (Ec) {
        qc = f.createElement("a"), qc.href = "", qc = qc.href;
    }
    pc = zc.exec(qc.toLowerCase()) || [];
    function Fc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(v) || [];
            if (t.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Gc(a, c, d, e) {
        var f = {}, g = a === Cc;
        function h(i) {
            var j;
            return f[i] = !0, t.each(a[i] || [], function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || g || f[k] ? g ? !(j = k) : b : (c.dataTypes.unshift(k), 
                h(k), !1);
            }), j;
        }
        return h(c.dataTypes[0]) || !f["*"] && h("*");
    }
    function Hc(a, c) {
        var d, e, f = t.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && t.extend(!0, a, d), a;
    }
    t.fn.load = function(a, c, d) {
        if ("string" != typeof a && Ac) return Ac.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), t.isFunction(c) ? (d = c, 
        c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && t.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function(a) {
            f = arguments, h.html(e ? t("<div>").append(t.parseHTML(a)).find(e) : a);
        }).complete(d && function(a, b) {
            h.each(d, f || [ a.responseText, b, a ]);
        }), this;
    }, t.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        t.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), t.each([ "get", "post" ], function(a, c) {
        t[c] = function(a, d, e, f) {
            return t.isFunction(d) && (f = f || e, e = d, d = b), t.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            });
        };
    }), t.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qc,
            type: "GET",
            isLocal: wc.test(pc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": t.parseJSON,
                "text xml": t.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Hc(Hc(a, t.ajaxSettings), b) : Hc(t.ajaxSettings, a);
        },
        ajaxPrefilter: Fc(Bc),
        ajaxTransport: Fc(Cc),
        ajax: function(a, c) {
            "object" == typeof a && (c = a, a = b), c = c || {};
            var d, e, f, g, h, i, j, k, l = t.ajaxSetup({}, c), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? t(m) : t.event, o = t.Deferred(), p = t.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, u = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!k) {
                            k = {};
                            while (b = vc.exec(g)) k[b[1].toLowerCase()] = b[2];
                        }
                        b = k[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return u || (l.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) q[b] = [ q[b], a[b] ]; else x.always(a[x.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || w;
                    return j && j.abort(b), z(0, b), this;
                }
            };
            if (o.promise(x).complete = p.add, x.success = x.done, x.error = x.fail, l.url = ((a || l.url || qc) + "").replace(tc, "").replace(yc, pc[1] + "//"), 
            l.type = c.method || c.type || l.method || l.type, l.dataTypes = t.trim(l.dataType || "*").toLowerCase().match(v) || [ "" ], 
            null == l.crossDomain && (d = zc.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === pc[1] && d[2] === pc[2] && (d[3] || ("http:" === d[1] ? 80 : 443)) == (pc[3] || ("http:" === pc[1] ? 80 : 443)))), 
            l.data && l.processData && "string" != typeof l.data && (l.data = t.param(l.data, l.traditional)), 
            Gc(Bc, l, c, x), 2 === u) return x;
            i = l.global, i && 0 === t.active++ && t.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), 
            l.hasContent = !xc.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (sc.test(f) ? "&" : "?") + l.data, 
            delete l.data), l.cache === !1 && (l.url = uc.test(f) ? f.replace(uc, "$1_=" + rc++) : f + (sc.test(f) ? "&" : "?") + "_=" + rc++)), 
            l.ifModified && (t.lastModified[f] && x.setRequestHeader("If-Modified-Since", t.lastModified[f]), 
            t.etag[f] && x.setRequestHeader("If-None-Match", t.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), 
            x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Dc + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) x.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, x, l) === !1 || 2 === u)) return x.abort();
            w = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            }) x[e](l[e]);
            if (j = Gc(Cc, l, c, x)) {
                x.readyState = 1, i && n.trigger("ajaxSend", [ x, l ]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    x.abort("timeout");
                }, l.timeout));
                try {
                    u = 1, j.send(r, z);
                } catch (y) {
                    if (!(2 > u)) throw y;
                    z(-1, y);
                }
            } else z(-1, "No Transport");
            function z(a, c, d, e) {
                var k, r, s, v, w, y = c;
                2 !== u && (u = 2, h && clearTimeout(h), j = b, g = e || "", x.readyState = a > 0 ? 4 : 0, 
                d && (v = Ic(l, x, d)), a >= 200 && 300 > a || 304 === a ? (l.ifModified && (w = x.getResponseHeader("Last-Modified"), 
                w && (t.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (t.etag[f] = w)), 
                204 === a ? (k = !0, y = "nocontent") : 304 === a ? (k = !0, y = "notmodified") : (k = Jc(l, v), 
                y = k.state, r = k.data, s = k.error, k = !s)) : (s = y, (a || !y) && (y = "error", 
                0 > a && (a = 0))), x.status = a, x.statusText = (c || y) + "", k ? o.resolveWith(m, [ r, y, x ]) : o.rejectWith(m, [ x, y, s ]), 
                x.statusCode(q), q = b, i && n.trigger(k ? "ajaxSuccess" : "ajaxError", [ x, l, k ? r : s ]), 
                p.fireWith(m, [ x, y ]), i && (n.trigger("ajaxComplete", [ x, l ]), --t.active || t.event.trigger("ajaxStop")));
            }
            return x;
        },
        getScript: function(a, c) {
            return t.get(a, b, c, "script");
        },
        getJSON: function(a, b, c) {
            return t.get(a, b, c, "json");
        }
    });
    function Ic(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
        for (h in k) h in d && (c[k[h]] = d[h]);
        while ("*" === j[0]) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f) for (h in i) if (i[h] && i[h].test(f)) {
            j.unshift(h);
            break;
        }
        if (j[0] in d) g = j[0]; else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break;
                }
                e || (e = h);
            }
            g = g || e;
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b;
    }
    function Jc(a, b) {
        var c, d, e, f, g = {}, h = 0, i = a.dataTypes.slice(), j = i[0];
        if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), i[1]) for (e in a.converters) g[e.toLowerCase()] = a.converters[e];
        for (;d = i[++h]; ) if ("*" !== d) {
            if ("*" !== j && j !== d) {
                if (e = g[j + " " + d] || g["* " + d], !e) for (c in g) if (f = c.split(" "), f[1] === d && (e = g[j + " " + f[0]] || g["* " + f[0]])) {
                    e === !0 ? e = g[c] : g[c] !== !0 && (d = f[0], i.splice(h--, 0, d));
                    break;
                }
                if (e !== !0) if (e && a["throws"]) b = e(b); else try {
                    b = e(b);
                } catch (k) {
                    return {
                        state: "parsererror",
                        error: e ? k : "No conversion from " + j + " to " + d
                    };
                }
            }
            j = d;
        }
        return {
            state: "success",
            data: b
        };
    }
    t.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return t.globalEval(a), a;
            }
        }
    }), t.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), t.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = f.head || t("head")[0] || f.documentElement;
            return {
                send: function(b, e) {
                    c = f.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), 
                    c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, 
                        c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"));
                    }, d.insertBefore(c, d.firstChild);
                },
                abort: function() {
                    c && c.onload(b, !0);
                }
            };
        }
    });
    var Kc = [], Lc = /(=)\?(?=&|$)|\?\?/;
    t.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Kc.pop() || t.expando + "_" + rc++;
            return this[a] = !0, a;
        }
    }), t.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Lc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Lc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = t.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, 
        i ? c[i] = c[i].replace(Lc, "$1" + f) : c.jsonp !== !1 && (c.url += (sc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), 
        c.converters["script json"] = function() {
            return h || t.error(f + " was not called"), h[0];
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments;
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Kc.push(f)), h && t.isFunction(g) && g(h[0]), 
            h = g = b;
        }), "script") : b;
    });
    var Mc, Nc, Oc = 0, Pc = a.ActiveXObject && function() {
        var a;
        for (a in Mc) Mc[a](b, !0);
    };
    function Qc() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function Rc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    t.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && Qc() || Rc();
    } : Qc, Nc = t.ajaxSettings.xhr(), t.support.cors = !!Nc && "withCredentials" in Nc, 
    Nc = t.support.ajax = !!Nc, Nc && t.ajaxTransport(function(c) {
        if (!c.crossDomain || t.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), 
                    c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h]);
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = t.noop, 
                            Pc && delete Mc[g]), e) 4 !== i.readyState && i.abort(); else {
                                l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    k = i.statusText;
                                } catch (m) {
                                    k = "";
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404;
                            }
                        } catch (n) {
                            e || f(-1, n);
                        }
                        l && f(h, k, l, j);
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Oc, Pc && (Mc || (Mc = {}, 
                    t(a).unload(Pc)), Mc[g] = d), i.onreadystatechange = d) : d();
                },
                abort: function() {
                    d && d(b, !0);
                }
            };
        }
    });
    var Sc, Tc, Uc = /^(?:toggle|show|hide)$/, Vc = RegExp("^(?:([+-])=|)(" + u + ")([a-z%]*)$", "i"), Wc = /queueHooks$/, Xc = [ bd ], Yc = {
        "*": [ function(a, b) {
            var c, d, e = this.createTween(a, b), f = Vc.exec(b), g = e.cur(), h = +g || 0, i = 1, j = 20;
            if (f) {
                if (c = +f[2], d = f[3] || (t.cssNumber[a] ? "" : "px"), "px" !== d && h) {
                    h = t.css(e.elem, a, !0) || c || 1;
                    do i = i || ".5", h /= i, t.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j);
                }
                e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c;
            }
            return e;
        } ]
    };
    function Zc() {
        return setTimeout(function() {
            Sc = b;
        }), Sc = t.now();
    }
    function $c(a, b) {
        t.each(b, function(b, c) {
            var d = (Yc[b] || []).concat(Yc["*"]), e = 0, f = d.length;
            for (;f > e; e++) if (d[e].call(a, b, c)) return;
        });
    }
    function _c(a, b, c) {
        var d, e, f = 0, g = Xc.length, h = t.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            var b = Sc || Zc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length;
            for (;i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: t.extend({}, b),
            opts: t.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sc || Zc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = t.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (ad(k, j.opts.specialEasing); g > f; f++) if (d = Xc[f].call(j, a, k, j.opts)) return d;
        return $c(j, k), t.isFunction(j.opts.start) && j.opts.start.call(a, j), t.fx.timer(t.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function ad(a, b) {
        var c, d, e, f, g;
        for (e in a) if (d = t.camelCase(e), f = b[d], c = a[e], t.isArray(c) && (f = c[1], 
        c = a[e] = c[0]), e !== d && (a[d] = c, delete a[e]), g = t.cssHooks[d], g && "expand" in g) {
            c = g.expand(c), delete a[d];
            for (e in c) e in a || (a[e] = c[e], b[e] = f);
        } else b[d] = f;
    }
    t.Animation = t.extend(_c, {
        tweener: function(a, b) {
            t.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            var c, d = 0, e = a.length;
            for (;e > d; d++) c = a[d], Yc[c] = Yc[c] || [], Yc[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Xc.unshift(a) : Xc.push(a);
        }
    });
    function bd(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this, n = a.style, o = {}, p = [], q = a.nodeType && cc(a);
        c.queue || (k = t._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, 
        k.empty.fire = function() {
            k.unqueued || l();
        }), k.unqueued++, m.always(function() {
            m.always(function() {
                k.unqueued--, t.queue(a, "fx").length || k.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ n.overflow, n.overflowX, n.overflowY ], 
        "inline" === t.css(a, "display") && "none" === t.css(a, "float") && (t.support.inlineBlockNeedsLayout && "inline" !== hc(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), 
        c.overflow && (n.overflow = "hidden", t.support.shrinkWrapBlocks || m.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2];
        }));
        for (e in b) if (g = b[e], Uc.exec(g)) {
            if (delete b[e], i = i || "toggle" === g, g === (q ? "hide" : "show")) continue;
            p.push(e);
        }
        if (f = p.length) {
            h = t._data(a, "fxshow") || t._data(a, "fxshow", {}), "hidden" in h && (q = h.hidden), 
            i && (h.hidden = !q), q ? t(a).show() : m.done(function() {
                t(a).hide();
            }), m.done(function() {
                var b;
                t._removeData(a, "fxshow");
                for (b in o) t.style(a, b, o[b]);
            });
            for (e = 0; f > e; e++) d = p[e], j = m.createTween(d, q ? h[d] : 0), o[d] = h[d] || t.style(a, d), 
            d in h || (h[d] = j.start, q && (j.end = j.start, j.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function cd(a, b, c, d, e) {
        return new cd.prototype.init(a, b, c, d, e);
    }
    t.Tween = cd, cd.prototype = {
        constructor: cd,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (t.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = cd.propHooks[this.prop];
            return a && a.get ? a.get(this) : cd.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = cd.propHooks[this.prop];
            return this.pos = b = this.options.duration ? t.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : cd.propHooks._default.set(this), this;
        }
    }, cd.prototype.init.prototype = cd.prototype, cd.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = t.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                t.fx.step[a.prop] ? t.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[t.cssProps[a.prop]] || t.cssHooks[a.prop]) ? t.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, cd.propHooks.scrollTop = cd.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, t.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = t.fn[b];
        t.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(dd(b, !0), a, d, e);
        };
    }), t.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(cc).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = t.isEmptyObject(a), f = t.speed(b, c, d), g = function() {
                var b = _c(this, t.extend({}, a), f);
                g.finish = function() {
                    b.stop(!0);
                }, (e || t._data(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d);
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, c = null != a && a + "queueHooks", f = t.timers, g = t._data(this);
                if (c) g[c] && g[c].stop && e(g[c]); else for (c in g) g[c] && g[c].stop && Wc.test(c) && e(g[c]);
                for (c = f.length; c--; ) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), 
                b = !1, f.splice(c, 1));
                (b || !d) && t.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = t._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = t.timers, g = d ? d.length : 0;
                for (c.finish = !0, t.queue(this, a, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    });
    function dd(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = _b[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    t.each({
        slideDown: dd("show"),
        slideUp: dd("hide"),
        slideToggle: dd("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        t.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), t.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? t.extend({}, a) : {
            complete: c || !c && b || t.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !t.isFunction(b) && b
        };
        return d.duration = t.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in t.fx.speeds ? t.fx.speeds[d.duration] : t.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            t.isFunction(d.old) && d.old.call(this), d.queue && t.dequeue(this, d.queue);
        }, d;
    }, t.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, t.timers = [], t.fx = cd.prototype.init, t.fx.tick = function() {
        var a, c = t.timers, d = 0;
        for (Sc = t.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || t.fx.stop(), Sc = b;
    }, t.fx.timer = function(a) {
        a() && t.timers.push(a) && t.fx.start();
    }, t.fx.interval = 13, t.fx.start = function() {
        Tc || (Tc = setInterval(t.fx.tick, t.fx.interval));
    }, t.fx.stop = function() {
        clearInterval(Tc), Tc = null;
    }, t.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, t.fx.step = {}, t.expr && t.expr.filters && (t.expr.filters.animated = function(a) {
        return t.grep(t.timers, function(b) {
            return a === b.elem;
        }).length;
    }), t.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            t.offset.setOffset(this, a, b);
        });
        var c, d, f = {
            top: 0,
            left: 0
        }, g = this[0], h = g && g.ownerDocument;
        if (h) return c = h.documentElement, t.contains(c, g) ? (typeof g.getBoundingClientRect !== e && (f = g.getBoundingClientRect()), 
        d = ed(h), {
            top: f.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: f.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : f;
    }, t.offset = {
        setOffset: function(a, b, c) {
            var d = t.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e = t(a), f = e.offset(), g = t.css(a, "top"), h = t.css(a, "left"), i = ("absolute" === d || "fixed" === d) && t.inArray("auto", [ g, h ]) > -1, j = {}, k = {}, l, m;
            i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), 
            t.isFunction(b) && (b = b.call(a, c, f)), null != b.top && (j.top = b.top - f.top + l), 
            null != b.left && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j);
        }
    }, t.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === t.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), t.nodeName(a[0], "html") || (c = a.offset()), c.top += t.css(a[0], "borderTopWidth", !0), 
                c.left += t.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - t.css(d, "marginTop", !0),
                    left: b.left - c.left - t.css(d, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || f.documentElement;
                while (a && !t.nodeName(a, "html") && "static" === t.css(a, "position")) a = a.offsetParent;
                return a || f.documentElement;
            });
        }
    }), t.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        t.fn[a] = function(e) {
            return t.access(this, function(a, e, f) {
                var g = ed(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? t(g).scrollLeft() : f, d ? f : t(g).scrollTop()) : a[e] = f, 
                b);
            }, a, e, arguments.length, null);
        };
    });
    function ed(a) {
        return t.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    t.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        t.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            t.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return t.access(this, function(c, d, e) {
                    var f;
                    return t.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, 
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? t.css(c, d, h) : t.style(c, d, e, h);
                }, c, g ? e : b, g, null);
            };
        });
    }), a.jQuery = a.$ = t, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return t;
    });
})(window);

!function(a) {
    "use strict";
    a(function() {
        a.support.transition = function() {
            var a = function() {
                var a = document.createElement("bootstrap"), b = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                }, c;
                for (c in b) {
                    if (a.style[c] !== undefined) {
                        return b[c];
                    }
                }
            }();
            return a && {
                end: a
            };
        }();
    });
}(window.jQuery);

!function(a) {
    "use strict";
    var b = "[data-toggle=dropdown]", c = function(b) {
        var c = a(b).on("click.dropdown.data-api", this.toggle);
        a("html").on("click.dropdown.data-api", function() {
            c.parent().removeClass("open");
        });
    };
    c.prototype = {
        constructor: c,
        toggle: function(b) {
            var c = a(this), f, g;
            if (c.is(".disabled, :disabled")) return;
            f = e(c);
            g = f.hasClass("open");
            d();
            if (!g) {
                if ("ontouchstart" in document.documentElement) {
                    a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click", d);
                }
                f.toggleClass("open");
            }
            c.focus();
            return false;
        },
        keydown: function(c) {
            var d, f, g, h, i, j;
            if (!/(38|40|27)/.test(c.keyCode)) return;
            d = a(this);
            c.preventDefault();
            c.stopPropagation();
            if (d.is(".disabled, :disabled")) return;
            h = e(d);
            i = h.hasClass("open");
            if (!i || i && c.keyCode == 27) {
                if (c.which == 27) h.find(b).focus();
                return d.click();
            }
            f = a("[role=menu] li:not(.divider):visible a", h);
            if (!f.length) return;
            j = f.index(f.filter(":focus"));
            if (c.keyCode == 38 && j > 0) j--;
            if (c.keyCode == 40 && j < f.length - 1) j++;
            if (!~j) j = 0;
            f.eq(j).focus();
        }
    };
    function d(c) {
        if (c && c.target && c.target.className == "hc-scroll-bar-y") {
            return;
        }
        a(".dropdown-backdrop").remove();
        a(b).each(function() {
            e(a(this)).removeClass("open");
        });
    }
    function e(b) {
        var c = b.attr("data-target"), d;
        if (!c) {
            c = b.attr("href");
            c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "");
        }
        d = c && a(c);
        if (!d || !d.length) d = b.parent();
        return d;
    }
    var f = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("dropdown");
            if (!e) d.data("dropdown", e = new c(this));
            if (typeof b == "string") e[b].call(d);
        });
    };
    a.fn.dropdown.Constructor = c;
    a.fn.dropdown.noConflict = function() {
        a.fn.dropdown = f;
        return this;
    };
    a(document).on("click.dropdown.data-api", d).on("click.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.dropdown.data-api", b, c.prototype.toggle).on("keydown.dropdown.data-api", b + ", [role=menu]", c.prototype.keydown);
}(window.jQuery);

!function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c;
        this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this));
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
    };
    b.prototype = {
        constructor: b,
        toggle: function() {
            return this[!this.isShown ? "show" : "hide"]();
        },
        show: function() {
            var b = this, c = a.Event("show");
            this.$element.trigger(c);
            if (this.isShown || c.isDefaultPrevented()) return;
            this.isShown = true;
            this.escape();
            this.backdrop(function() {
                var c = a.support.transition && b.$element.hasClass("fade");
                if (!b.$element.parent().length) {
                    b.$element.appendTo(document.body);
                }
                b.$element.show();
                if (c) {
                    b.$element[0].offsetWidth;
                }
                b.$element.addClass("in").attr("aria-hidden", false);
                b.enforceFocus();
                c ? b.$element.one(a.support.transition.end, function() {
                    b.$element.focus().trigger("shown");
                }) : b.$element.focus().trigger("shown");
            });
        },
        hide: function(b) {
            b && b.preventDefault();
            var c = this;
            b = a.Event("hide");
            this.$element.trigger(b);
            if (!this.isShown || b.isDefaultPrevented()) return;
            this.isShown = false;
            this.escape();
            a(document).off("focusin.modal");
            this.$element.removeClass("in").attr("aria-hidden", true);
            a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal();
        },
        enforceFocus: function() {
            var b = this;
            a(document).on("focusin.modal", function(a) {
                if (b.$element[0] !== a.target && !b.$element.has(a.target).length) {
                    b.$element.focus();
                }
            });
        },
        escape: function() {
            var a = this;
            if (this.isShown && this.options.keyboard) {
                this.$element.on("keyup.dismiss.modal", function(b) {
                    b.which == 27 && a.hide();
                });
            } else if (!this.isShown) {
                this.$element.off("keyup.dismiss.modal");
            }
        },
        hideWithTransition: function() {
            var b = this, c = setTimeout(function() {
                b.$element.off(a.support.transition.end);
                b.hideModal();
            }, 500);
            this.$element.one(a.support.transition.end, function() {
                clearTimeout(c);
                b.hideModal();
            });
        },
        hideModal: function() {
            var a = this;
            this.$element.hide();
            this.backdrop(function() {
                a.removeBackdrop();
                a.$element.trigger("hidden");
            });
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove();
            this.$backdrop = null;
        },
        backdrop: function(b) {
            var c = this, d = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var e = a.support.transition && d;
                this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body);
                if (e) this.$backdrop[0].offsetWidth;
                this.$backdrop.addClass("in");
                if (!b) return;
                e ? this.$backdrop.one(a.support.transition.end, b) : b();
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b) : b();
            } else if (b) {
                b();
            }
        }
    };
    var c = a.fn.modal;
    a.fn.modal = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("modal"), f = a.extend({}, a.fn.modal.defaults, d.data(), typeof c == "object" && c);
            if (!e) d.data("modal", e = new b(this, f));
            if (typeof c == "string") e[c](); else if (f.show) e.show();
        });
    };
    a.fn.modal.defaults = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    a.fn.modal.Constructor = b;
    a.fn.modal.noConflict = function() {
        a.fn.modal = c;
        return this;
    };
    a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("modal") ? "toggle" : a.extend({
            remote: !/#/.test(d) && d
        }, e.data(), c.data());
        b.preventDefault();
        e.modal(f).one("hide", function() {
            c.focus();
        });
    });
}(window.jQuery);

!function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("tooltip", a, b);
    };
    b.prototype = {
        constructor: b,
        init: function(b, c, d) {
            var e, f, g, h, i;
            this.type = b;
            this.$element = a(c);
            this.options = this.getOptions(d);
            this.enabled = true;
            g = this.options.trigger.split(" ");
            for (i = g.length; i--; ) {
                h = g[i];
                if (h == "click") {
                    this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                } else if (h != "manual") {
                    e = h == "hover" ? "mouseenter" : "focus";
                    f = h == "hover" ? "mouseleave" : "blur";
                    this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this));
                    this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this));
                }
            }
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle();
        },
        getOptions: function(b) {
            b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b);
            if (b.delay && typeof b.delay == "number") {
                b.delay = {
                    show: b.delay,
                    hide: b.delay
                };
            }
            return b;
        },
        enter: function(b) {
            var c = a.fn[this.type].defaults, d = {}, e;
            this._options && a.each(this._options, function(a, b) {
                if (c[a] != b) d[a] = b;
            }, this);
            e = a(b.currentTarget)[this.type](d).data(this.type);
            if (!e.options.delay || !e.options.delay.show) return e.show();
            clearTimeout(this.timeout);
            e.hoverState = "in";
            this.timeout = setTimeout(function() {
                if (e.hoverState == "in") e.show();
            }, e.options.delay.show);
        },
        leave: function(b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            if (this.timeout) clearTimeout(this.timeout);
            if (!c.options.delay || !c.options.delay.hide) return c.hide();
            c.hoverState = "out";
            this.timeout = setTimeout(function() {
                if (c.hoverState == "out") c.hide();
            }, c.options.delay.hide);
        },
        show: function() {
            var b, c, d, e, f, g, h = a.Event("show");
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(h);
                if (h.isDefaultPrevented()) return;
                b = this.tip();
                this.setContent();
                if (this.options.animation) {
                    b.addClass("fade");
                }
                f = typeof this.options.placement == "function" ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement;
                b.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                });
                this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element);
                c = this.getPosition();
                d = b[0].offsetWidth;
                e = b[0].offsetHeight;
                switch (f) {
                  case "bottom":
                    g = {
                        top: c.top + c.height,
                        left: c.left + c.width / 2 - d / 2
                    };
                    break;

                  case "top":
                    g = {
                        top: c.top - e,
                        left: c.left + c.width / 2 - d / 2
                    };
                    break;

                  case "left":
                    g = {
                        top: c.top + c.height / 2 - e / 2,
                        left: c.left - d
                    };
                    break;

                  case "right":
                    g = {
                        top: c.top + c.height / 2 - e / 2,
                        left: c.left + c.width
                    };
                    break;
                }
                this.applyPlacement(g, f);
                this.$element.trigger("shown");
            }
        },
        applyPlacement: function(a, b) {
            var c = this.tip(), d = c[0].offsetWidth, e = c[0].offsetHeight, f, g, h, i;
            c.offset(a).addClass(b).addClass("in");
            f = c[0].offsetWidth;
            g = c[0].offsetHeight;
            if (b == "top" && g != e) {
                a.top = a.top + e - g;
                i = true;
            }
            if (b == "bottom" || b == "top") {
                h = 0;
                if (a.left < 0) {
                    h = a.left * -2;
                    a.left = 0;
                    c.offset(a);
                    f = c[0].offsetWidth;
                    g = c[0].offsetHeight;
                }
                this.replaceArrow(h - d + f, f, "left");
            } else {
                this.replaceArrow(g - e, g, "top");
            }
            if (i) c.offset(a);
        },
        replaceArrow: function(a, b, c) {
            this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
        },
        setContent: function() {
            var a = this.tip(), b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b);
            a.removeClass("fade in top bottom left right");
        },
        hide: function() {
            var b = this, c = this.tip(), d = a.Event("hide");
            this.$element.trigger(d);
            if (d.isDefaultPrevented()) return;
            c.removeClass("in");
            function e() {
                var b = setTimeout(function() {
                    c.off(a.support.transition.end).detach();
                }, 500);
                c.one(a.support.transition.end, function() {
                    clearTimeout(b);
                    c.detach();
                });
            }
            a.support.transition && this.$tip.hasClass("fade") ? e() : c.detach();
            this.$element.trigger("hidden");
            return this;
        },
        fixTitle: function() {
            var a = this.$element;
            if (a.attr("title") || typeof a.attr("data-original-title") != "string") {
                a.attr("data-original-title", a.attr("title") || "").attr("title", "");
            }
        },
        hasContent: function() {
            return this.getTitle();
        },
        getPosition: function() {
            var b = this.$element[0];
            return a.extend({}, typeof b.getBoundingClientRect == "function" ? b.getBoundingClientRect() : {
                width: b.offsetWidth,
                height: b.offsetHeight
            }, this.$element.offset());
        },
        getTitle: function() {
            var a, b = this.$element, c = this.options;
            a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title);
            return a;
        },
        tip: function() {
            return this.$tip = this.$tip || a(this.options.template);
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
        },
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        enable: function() {
            this.enabled = true;
        },
        disable: function() {
            this.enabled = false;
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled;
        },
        toggle: function(b) {
            var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
            c.tip().hasClass("in") ? c.hide() : c.show();
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("tooltip"), f = typeof c == "object" && c;
            if (!e) d.data("tooltip", e = new b(this, f));
            if (typeof c == "string") e[c]();
        });
    };
    a.fn.tooltip.Constructor = b;
    a.fn.tooltip.defaults = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false
    };
    a.fn.tooltip.noConflict = function() {
        a.fn.tooltip = c;
        return this;
    };
}(window.jQuery);

!function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b);
    };
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
        constructor: b,
        setContent: function() {
            var a = this.tip(), b = this.getTitle(), c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b);
            a.find(".popover-content")[this.options.html ? "html" : "text"](c);
            a.removeClass("fade top bottom left right in");
        },
        hasContent: function() {
            return this.getTitle() || this.getContent();
        },
        getContent: function() {
            var a, b = this.$element, c = this.options;
            a = (typeof c.content == "function" ? c.content.call(b[0]) : c.content) || b.attr("data-content");
            return a;
        },
        tip: function() {
            if (!this.$tip) {
                this.$tip = a(this.options.template);
            }
            return this.$tip;
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    });
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("popover"), f = typeof c == "object" && c;
            if (!e) d.data("popover", e = new b(this, f));
            if (typeof c == "string") e[c]();
        });
    };
    a.fn.popover.Constructor = b;
    a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    a.fn.popover.noConflict = function() {
        a.fn.popover = c;
        return this;
    };
}(window.jQuery);

!function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b);
        this.options = a.extend({}, a.fn.typeahead.defaults, c);
        this.matcher = this.options.matcher || this.matcher;
        this.sorter = this.options.sorter || this.sorter;
        this.highlighter = this.options.highlighter || this.highlighter;
        this.updater = this.options.updater || this.updater;
        this.source = this.options.source;
        this.$menu = a(this.options.menu);
        this.shown = false;
        this.listen();
    };
    b.prototype = {
        constructor: b,
        select: function() {
            var a = this.$menu.find(".active").attr("data-value");
            this.$element.val(this.updater(a)).change();
            return this.hide();
        },
        updater: function(a) {
            return a;
        },
        show: function() {
            var b = a.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            var c = this.$element.attr("typehead-ref");
            this.$menu.appendTo(a("body")).css({
                top: b.top + b.height,
                left: b.left
            }).attr("id", c).show();
            a(window).on("resize", function() {
                var b = a("[typehead-ref='" + c + "']:visible");
                if (b && b.length > 0) {
                    var d = a.extend({}, b.offset(), {
                        height: b[0].offsetHeight
                    });
                    a("#" + c).css({
                        top: d.top + d.height,
                        left: d.left
                    });
                } else {
                    a("#" + c).hide();
                }
            });
            this.shown = true;
            return this;
        },
        hide: function() {
            this.$menu.hide();
            this.shown = false;
            return this;
        },
        lookup: function(b) {
            var c;
            this.query = this.$element.val();
            if (!this.query || this.query.length < this.options.minLength) {
                return this.shown ? this.hide() : this;
            }
            c = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source;
            return c ? this.process(c) : this;
        },
        process: function(a) {
            var b = this;
            if (!a.length) {
                return this.shown ? this.hide() : this;
            }
            return this.render(a.slice(0)).show();
        },
        matcher: function(a) {
            return ~a.toLowerCase().indexOf(this.query.toLowerCase());
        },
        sorter: function(a) {
            var b = [], c = [], d = [], e;
            while (e = a.shift()) {
                if (!e.toLowerCase().indexOf(this.query.toLowerCase())) b.push(e); else if (~e.indexOf(this.query)) c.push(e); else d.push(e);
            }
            return b.concat(c, d);
        },
        highlighter: function(a) {
            var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            if (a) {
                return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
                    return "<strong>" + b + "</strong>";
                });
            }
            return a;
        },
        render: function(b) {
            var c = this;
            b = a(b).map(function(b, d) {
                b = a(c.options.item).attr("data-value", d);
                b.find("a").html(c.highlighter(d));
                return b[0];
            });
            b.first().addClass("active");
            this.$menu.html(b);
            return this;
        },
        next: function(b) {
            var c = this.$menu.find(".active").removeClass("active"), d = c.next();
            if (!d.length) {
                d = a(this.$menu.find("li")[0]);
            }
            d.addClass("active");
        },
        prev: function(a) {
            var b = this.$menu.find(".active").removeClass("active"), c = b.prev();
            if (!c.length) {
                c = this.$menu.find("li").last();
            }
            c.addClass("active");
        },
        listen: function() {
            this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this));
            var b = new Date();
            var c = "tah-" + b.getHours() + b.getMinutes() + b.getSeconds() + b.getMilliseconds();
            this.$element.attr("typehead-ref", c);
            if (this.eventSupported("keydown")) {
                this.$element.on("keydown", a.proxy(this.keydown, this));
            }
            this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this));
        },
        eventSupported: function(a) {
            var b = a in this.$element;
            if (!b) {
                this.$element.setAttribute(a, "return;");
                b = typeof this.$element[a] === "function";
            }
            return b;
        },
        move: function(a) {
            if (!this.shown) return;
            switch (a.keyCode) {
              case 9:
              case 13:
              case 27:
                a.preventDefault();
                break;

              case 38:
                a.preventDefault();
                this.prev();
                break;

              case 40:
                a.preventDefault();
                this.next();
                break;
            }
            a.stopPropagation();
        },
        keydown: function(b) {
            this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [ 40, 38, 9, 13, 27 ]);
            this.move(b);
        },
        keypress: function(a) {
            if (this.suppressKeyPressRepeat) return;
            this.move(a);
        },
        keyup: function(a) {
            switch (a.keyCode) {
              case 40:
              case 38:
              case 16:
              case 17:
              case 18:
                break;

              case 9:
              case 13:
                if (!this.shown) return;
                this.select();
                break;

              case 27:
                if (!this.shown) return;
                this.hide();
                break;

              default:
                this.lookup();
            }
            a.stopPropagation();
            a.preventDefault();
        },
        focus: function(a) {
            this.focused = true;
        },
        blur: function(a) {
            this.focused = false;
            if (!this.mousedover && this.shown) this.hide();
        },
        click: function(a) {
            a.stopPropagation();
            a.preventDefault();
            this.select();
            this.$element.focus();
        },
        mouseenter: function(b) {
            this.mousedover = true;
            this.$menu.find(".active").removeClass("active");
            a(b.currentTarget).addClass("active");
        },
        mouseleave: function(a) {
            this.mousedover = false;
            if (!this.focused && this.shown) this.hide();
        }
    };
    var c = a.fn.typeahead;
    a.fn.typeahead = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("typeahead"), f = typeof c == "object" && c;
            if (!e) d.data("typeahead", e = new b(this, f));
            if (typeof c == "string") e[c]();
        });
    };
    a.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    };
    a.fn.typeahead.Constructor = b;
    a.fn.typeahead.noConflict = function() {
        a.fn.typeahead = c;
        return this;
    };
    a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(b) {
        var c = a(this);
        if (c.data("typeahead")) return;
        c.typeahead(c.data());
    });
}(window.jQuery);

!function(a) {
    "use strict";
    var b = "[data-toggle=toggler]", c = function(b) {
        var c = a(b).on("click.toggler.data-api", this.toggle);
        a("html").on("click.toggler.data-api", function() {
            c.parent().removeClass("open");
        });
    };
    c.prototype = {
        constructor: c,
        toggle: function(b) {
            var c = a(this), d, f;
            if (c.is(".disabled, :disabled")) return;
            d = e(c);
            f = d.hasClass("open");
            e(a(this)).removeClass("open");
            if (!f) {
                d.toggleClass("open");
                c.toggleClass("toggled");
            }
            c.focus();
            return false;
        }
    };
    function d() {
        a(b).each(function() {
            e(a(this)).removeClass("open");
        });
    }
    function e(b) {
        var c = b.attr("data-target"), d;
        if (!c) {
            c = b.attr("href");
            c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "");
        }
        d = c && a(c);
        if (!d || !d.length) d = b.parent();
        return d;
    }
    var f = a.fn.toggler;
    a.fn.toggler = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("toggler");
            if (!e) d.data("toggler", e = new c(this));
            if (typeof b == "string") e[b].call(d);
        });
    };
    a.fn.toggler.Constructor = c;
    a.fn.toggler.noConflict = function() {
        a.fn.toggler = f;
        return this;
    };
    a(document).on("click.toggler.data-api", ".toggler form", function(a) {
        a.stopPropagation();
    }).on("click.toggler.data-api", b, c.prototype.toggle);
}(window.jQuery);

!function(a) {
    "use strict";
    var b = function(a) {};
    b.prototype.toggle = function(b) {
        var c = a(this), d = a(c.attr("data-target")), e = c.attr("data-value");
        if (!e) return;
        if (d.is("select[multiple]")) {
            var f = d.val() || [];
            if (f.indexOf(e) == -1) {
                f.push(e);
            } else {
                f.splice(f.indexOf(e), 1);
            }
            d.val(f).trigger("change");
        } else if (d.is("input:checkbox")) {
            var g = a("[name=" + d.attr("name") + "]"), f = [];
            g.filter(":checked").each(function(b, c) {
                f.push(a(c).val());
            });
            if (f.indexOf(e) == -1) {
                f.push(e);
            } else {
                f.splice(f.indexOf(e), 1);
            }
            g.val(f);
        } else {
            d.val(e);
        }
    };
    b.prototype.update = function(b) {
        var c = a(this), d = c.attr("data-target"), e = c.attr("data-value"), f = false;
        if (!e) return;
        if (a(d).is("select[multiple]")) {
            if (a(d).val() && a(d).val().length && a(d).val().indexOf(e) != -1) {
                f = true;
            }
        } else if (a(d).is("input:checkbox, input:radio")) {
            if (a(d + "[value=" + e + "]").is(":checked")) {
                f = true;
            }
        } else if (a(d).is("input:checkbox, input:radio")) {
            if (a(d + "[value=" + e + "]").is(":checked")) {
                f = true;
            }
        } else if (a(d).is("span")) {
            var g = a(d).attr("data-value");
            if (g && g.indexOf(e) >= 0) {
                f = true;
            }
        } else if (a(d).val() == e) {
            f = true;
        }
        if (f) {
            c.addClass("checked");
        } else {
            c.removeClass("checked");
        }
    };
    b.prototype.val = function(b) {
        var c = a(this), d = c.attr("data-target"), e = c.attr("data-value"), f, g;
        c.removeClass("changed");
        if (!c.is("[data-formfield-api=val]")) return;
        if (a(d).is("select[multiple]")) {
            var h = [];
            a(d).find("option:selected").each(function(b, c) {
                h.push(a(c).text());
            });
            g = h.length > 1 ? h.length : h.toString();
        } else if (a(d).is("select")) {
            g = a(d).find("option:selected").text();
        } else if (a(d).is("input:checkbox, input:radio")) {
            var h = [];
            a("[name=" + a(d).attr("name") + "]").filter(":checked").each(function(b, c) {
                h.push(a(c).attr("alt"));
            });
            g = h.length > 1 ? h.length : h.toString();
        } else if (a(d).is("ul")) {
            var i = [];
            f = "";
            a(d).find(".checked").each(function(b, c) {
                i.push(a(c).text());
                f += f && f.length > 0 ? ";" : "";
                f += a(c).attr("data-value");
            });
            g = i.length > 1 ? i.length : i.toString();
        } else {
            g = a(d).val();
        }
        if (typeof g !== "string" && c.data("val-text")) {
            g += " " + c.data("val-text");
        }
        c.text(g);
        if (e != f) {
            c.attr("data-value", f);
            c.addClass("changed");
        }
    };
    b.prototype.submit = function(b) {
        var c = a(this), d = a(c.attr("data-target"));
        if (!d.is("form")) {
            d = d.parents("form:first");
        }
        d.trigger("submit");
    };
    var c = a.fn.formfield;
    a.fn.formfield = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("formfield");
            if (!e) d.data("formfield", e = new b(this));
            if (typeof c == "string") e[c].call(d);
        });
    };
    a.fn.formfield.Constructor = b;
    a.fn.formfield.noConflict = function() {
        a.fn.formfield = c;
        return this;
    };
    a(document).on("click.formfield.data-api", "[data-toggle=formfield]", b.prototype.toggle);
}(window.jQuery);

(function(a) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery", "bootstrap" ], a);
    } else {
        a(window.jQuery);
    }
})(function(a) {
    "use strict";
    a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this), d = c.attr("href"), e = a(c.attr("data-local") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (e.length && f.length) {
            var g = e.next(), h = e.prev().length, i = e.parent(), j = c.data("local-method") || "detach";
            if (c.attr("title")) {
                f.find(".modal-header .modal-title").text(c.attr("title"));
            }
            if (j == "clone") {
                var k = e.clone(), l = a.Event("cloned");
                f.find(".modal-body").empty().append(k);
                e.trigger(l, k);
                f.on("hide", function() {
                    k.remove();
                });
            } else {
                var m = e.detach(), l = a.Event("moved");
                f.find(".modal-body").empty().append(m);
                m.trigger(l);
                f.one("show shown hide hidden", function(a) {
                    m.trigger("modal-" + a.type);
                });
                f.on("hide", function() {
                    if (g.length) {
                        m.detach().insertBefore(g);
                    } else if (h.length) {
                        m.detach().insertAfter(h);
                    } else {
                        m.detach().appendTo(i);
                    }
                    m.trigger(l);
                });
            }
        }
    });
});

(function(a) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery", "bootstrap" ], a);
    } else {
        a(window.jQuery);
    }
})(function(a) {
    "use strict";
    a.extend(a.fn.modal.Constructor.prototype, {
        fit: function() {
            if (this.$element.hasClass("modal-fullscreen")) {
                if (this.$element.hasClass("in")) {
                    window.setTimeout(function() {
                        a("body").addClass("no-overflow");
                    }, 0);
                    this.$element.one("hide", function() {
                        a("body").removeClass("no-overflow");
                    });
                }
                var b = this.$element.find(".modal-body:first").height(), c = a(window).height();
                if (this.$element.is(".fade.top")) {
                    var d = c < b ? 0 : (c - b) / 2;
                    if (b == 0) {
                        d = 0;
                    }
                    this.$element.find(".modal-body")[this.$element.hasClass("in") ? "animate" : "css"]({
                        "margin-top": d + "px"
                    });
                }
            } else {
                this.unfit();
            }
        },
        unfit: function() {
            if (this.$element.is(".fade.top")) {
                this.$element.find(".modal-body")[this.$element.hasClass("in") ? "animate" : "css"]({
                    "margin-top": "0"
                });
            }
        }
    });
    var b = a.fn.modal.Constructor.prototype.backdrop;
    a.fn.modal.Constructor.prototype.backdrop = function() {
        var a = this, c = arguments[0], d = function() {
            c();
            a.fit();
        };
        arguments[0] = d;
        return b.apply(this, arguments);
    };
    a(window).on("resize", function() {
        a(".modal-fullscreen").modal("fit");
    });
});

!function(a) {
    "use strict";
    if (typeof ko != "undefined" && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {
            init: function(a, b, c, d, e) {},
            update: function(b, c, d, e, f) {
                var g = a(b).data("multiselect");
                if (!g) {
                    a(b).multiselect(ko.utils.unwrapObservable(c()));
                } else if (d().options && d().options().length !== g.originalOptions.length) {
                    g.updateOriginalOptions();
                    a(b).multiselect("rebuild");
                }
            }
        };
    }
    function b(b, c) {
        this.options = this.getOptions(c);
        this.$select = a(b);
        this.originalOptions = this.$select.clone()[0].options;
        this.query = "";
        this.searchTimeout = null;
        this.options.multiple = this.$select.attr("multiple") == "multiple";
        this.$container = a(this.options.buttonContainer).append('<button type="button" class="multiselect dropdown-toggle ' + this.options.buttonClass + '" data-toggle="dropdown">' + this.options.buttonText(this.getSelected(), this.$select) + "</button>").append('<ul class="multiselect-container dropdown-menu' + (this.options.dropRight ? " pull-right" : "") + '"></ul>');
        if (this.options.buttonWidth) {
            a("button", this.$container).css({
                width: this.options.buttonWidth
            });
        }
        if (this.options.maxHeight) {
            a(".multiselect-container", this.$container).css({
                "max-height": this.options.maxHeight + "px",
                "overflow-y": "auto",
                "overflow-x": "hidden"
            });
        }
        if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
            this.buildFilter();
        }
        this.buildDropdown();
        this.updateButtonText();
        this.$select.hide().after(this.$container);
    }
    b.prototype = {
        defaults: {
            buttonText: function(b, c) {
                if (b.length == 0) {
                    return 'None selected <b class="caret"></b>';
                } else if (b.length > 3) {
                    return b.length + ' selected <b class="caret"></b>';
                } else {
                    var d = "";
                    b.each(function() {
                        var b = a(this).attr("label") !== undefined ? a(this).attr("label") : a(this).text();
                        d += b + ", ";
                    });
                    return d.substr(0, d.length - 2) + ' <b class="caret"></b>';
                }
            },
            onChange: function(a, b) {},
            buttonClass: "btn",
            dropRight: false,
            selectedClass: "active",
            buttonWidth: "auto",
            buttonContainer: '<div class="btn-group" />',
            maxHeight: false,
            includeSelectAllOption: false,
            selectAllText: " Select all",
            selectAllValue: "multiselect-all",
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            filterPlaceholder: "Search",
            filterBehavior: "text"
        },
        constructor: b,
        createOptionValue: function(b) {
            if (a(b).is(":selected")) {
                a(b).attr("selected", "selected").prop("selected", true);
            }
            var c = a(b).attr("label") || a(b).text();
            var d = a(b).val();
            var e = this.options.multiple ? "checkbox" : "radio";
            var f = a('<li><a href="javascript:void(0);"><label><input type="' + e + '" /></label></a></li>');
            var g = a(b).prop("selected") || false;
            var h = a("input", f);
            h.val(d);
            if (d == this.options.selectAllValue) {
                h.parent().parent().addClass("multiselect-all");
            }
            a("label", f).append(" " + c);
            a(".multiselect-container", this.$container).append(f);
            if (a(b).is(":disabled")) {
                h.attr("disabled", "disabled").prop("disabled", true).parents("li").addClass("disabled");
            }
            h.prop("checked", g);
            if (g && this.options.selectedClass) {
                h.parents("li").addClass(this.options.selectedClass);
            }
        },
        toggleActiveState: function(b) {
            if (this.$select.attr("disabled") == undefined) {
                a("button.multiselect.dropdown-toggle", this.$container).removeClass("disabled");
            } else {
                a("button.multiselect.dropdown-toggle", this.$container).addClass("disabled");
            }
        },
        buildDropdown: function() {
            var b = this.$select[0][0] ? this.$select[0][0].value == this.options.selectAllValue : false;
            if (this.options.includeSelectAllOption && this.options.multiple && !b) {
                this.$select.prepend('<option value="' + this.options.selectAllValue + '">' + this.options.selectAllText + "</option>");
            }
            this.toggleActiveState();
            this.$select.children().each(a.proxy(function(b, c) {
                var d = a(c).prop("tagName").toLowerCase();
                if (d == "optgroup") {
                    var e = c;
                    var f = a(e).prop("label");
                    var g = a('<li><label class="multiselect-group"></label></li>');
                    a("label", g).text(f);
                    a(".multiselect-container", this.$container).append(g);
                    a("option", e).each(a.proxy(function(a, b) {
                        this.createOptionValue(b);
                    }, this));
                } else if (d == "option") {
                    this.createOptionValue(c);
                } else {}
            }, this));
            a(".multiselect-container li input", this.$container).on("change", a.proxy(function(b) {
                var c = a(b.target).prop("checked") || false;
                var d = a(b.target).val() == this.options.selectAllValue;
                if (this.options.selectedClass) {
                    if (c) {
                        a(b.target).parents("li").addClass(this.options.selectedClass);
                    } else {
                        a(b.target).parents("li").removeClass(this.options.selectedClass);
                    }
                }
                var e = a("option", this.$select).filter(function() {
                    return a(this).val() == a(b.target).val();
                });
                var f = a("option", this.$select).not(e);
                var g = a("input", this.$container).not(a(b.target));
                if (d) {
                    g.filter(function() {
                        return a(this).is(":checked") != c;
                    }).trigger("click");
                }
                if (c) {
                    e.prop("selected", true);
                    if (this.options.multiple) {
                        e.attr("selected", "selected");
                    } else {
                        if (this.options.selectedClass) {
                            a(g).parents("li").removeClass(this.options.selectedClass);
                        }
                        a(g).prop("checked", false);
                        f.removeAttr("selected").prop("selected", false);
                        a(this.$container).find(".multiselect.dropdown-toggle").click();
                    }
                    if (this.options.selectedClass == "active") {
                        f.parents("a").css("outline", "");
                    }
                } else {
                    e.removeAttr("selected").prop("selected", false);
                }
                this.updateButtonText();
                this.options.onChange(e, c);
                this.$select.change();
            }, this));
            a(".multiselect-container li a", this.$container).on("touchstart click", function(b) {
                b.stopPropagation();
                a(b.target).blur();
            });
            this.$container.on("keydown", a.proxy(function(b) {
                if (a('input[type="text"]', this.$container).is(":focus")) return;
                if ((b.keyCode == 9 || b.keyCode == 27) && this.$container.hasClass("open")) {
                    a(this.$container).find(".multiselect.dropdown-toggle").click();
                } else {
                    var c = a(this.$container).find("li:not(.divider):visible a");
                    if (!c.length) {
                        return;
                    }
                    var d = c.index(c.filter(":focus"));
                    if (b.keyCode == 38 && d > 0) {
                        d--;
                    } else if (b.keyCode == 40 && d < c.length - 1) {
                        d++;
                    } else if (!~d) {
                        d = 0;
                    }
                    var e = c.eq(d);
                    e.focus();
                    if (this.options.selectedClass == "active") {
                        e.css("outline", "thin dotted #333").css("outline", "5px auto -webkit-focus-ring-color");
                        c.not(e).css("outline", "");
                    }
                    if (b.keyCode == 32 || b.keyCode == 13) {
                        var f = e.find("input");
                        f.prop("checked", !f.prop("checked"));
                        f.change();
                    }
                    b.stopPropagation();
                    b.preventDefault();
                }
            }, this));
        },
        buildFilter: function() {
            a(".multiselect-container", this.$container).prepend('<div class="input-prepend"><span class="add-on"><i class="icon-search"></i></span><input class="multiselect-search" type="text" placeholder="' + this.options.filterPlaceholder + '"></div>');
            a(".multiselect-search", this.$container).val(this.query).on("click", function(a) {
                a.stopPropagation();
            }).on("keydown", a.proxy(function(b) {
                clearTimeout(this.searchTimeout);
                this.searchTimeout = this.asyncFunction(a.proxy(function() {
                    if (this.query != b.target.value) {
                        this.query = b.target.value;
                        a.each(a(".multiselect-container li", this.$container), a.proxy(function(b, c) {
                            var d = a("input", c).val();
                            if (d != this.options.selectAllValue) {
                                var e = a("label", c).text();
                                var d = a("input", c).val();
                                if (d && e && d != this.options.selectAllValue) {
                                    var f = false;
                                    var g = "";
                                    if (this.options.filterBehavior == "text" || this.options.filterBehavior == "both") {
                                        g = e;
                                    }
                                    if (this.options.filterBehavior == "value" || this.options.filterBehavior == "both") {
                                        g = d;
                                    }
                                    if (this.options.enableCaseInsensitiveFiltering && g.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
                                        f = true;
                                    } else if (g.indexOf(this.query) > -1) {
                                        f = true;
                                    }
                                    if (f) {
                                        a(c).show();
                                    } else {
                                        a(c).hide();
                                    }
                                }
                            }
                        }, this));
                    }
                }, this), 300, this);
            }, this));
        },
        destroy: function() {
            this.$container.remove();
            this.$select.show();
        },
        refresh: function() {
            a("option", this.$select).each(a.proxy(function(b, c) {
                var d = a(".multiselect-container li input", this.$container).filter(function() {
                    return a(this).val() == a(c).val();
                });
                if (a(c).is(":selected")) {
                    d.prop("checked", true);
                    if (this.options.selectedClass) {
                        d.parents("li").addClass(this.options.selectedClass);
                    }
                } else {
                    d.prop("checked", false);
                    if (this.options.selectedClass) {
                        d.parents("li").removeClass(this.options.selectedClass);
                    }
                }
                if (a(c).is(":disabled")) {
                    d.attr("disabled", "disabled").prop("disabled", true).parents("li").addClass("disabled");
                } else {
                    d.removeAttr("disabled").prop("disabled", false).parents("li").removeClass("disabled");
                }
            }, this));
            this.updateButtonText();
        },
        select: function(b) {
            var c = a("option", this.$select).filter(function() {
                return a(this).val() == b;
            });
            var d = a(".multiselect-container li input", this.$container).filter(function() {
                return a(this).val() == b;
            });
            if (this.options.selectedClass) {
                d.parents("li").addClass(this.options.selectedClass);
            }
            d.prop("checked", true);
            c.attr("selected", "selected").prop("selected", true);
            this.updateButtonText();
            this.options.onChange(c, checked);
        },
        deselect: function(b) {
            var c = a("option", this.$select).filter(function() {
                return a(this).val() == b;
            });
            var d = a(".multiselect-container li input", this.$container).filter(function() {
                return a(this).val() == b;
            });
            if (this.options.selectedClass) {
                d.parents("li").removeClass(this.options.selectedClass);
            }
            d.prop("checked", false);
            c.removeAttr("selected").prop("selected", false);
            this.updateButtonText();
        },
        rebuild: function() {
            a(".multiselect-container", this.$container).html("");
            this.buildDropdown(this.$select, this.options);
            this.updateButtonText();
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                this.buildFilter();
            }
        },
        getOptions: function(b) {
            return a.extend({}, this.defaults, b);
        },
        updateButtonText: function() {
            var b = this.getSelected();
            a("button", this.$container).html(this.options.buttonText(b, this.$select));
        },
        getSelected: function() {
            return a('option:selected[value!="' + this.options.selectAllValue + '"]', this.$select);
        },
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options;
        },
        asyncFunction: function(a, b, c) {
            var d = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                a.apply(c || window, d);
            }, b);
        }
    };
    a.fn.multiselect = function(c, d) {
        return this.each(function() {
            var e = a(this).data("multiselect"), f = typeof c == "object" && c;
            if (!e) {
                a(this).data("multiselect", e = new b(this, f));
            }
            if (typeof c == "string") {
                e[c](d);
            }
        });
    };
    a.fn.multiselect.Constructor = b;
    a(function() {
        a("select[data-role=multiselect]").multiselect();
    });
}(window.jQuery);

(function(a) {
    var b = function(b, c) {
        this.$element = a(b);
        this.initSetting = a.extend({}, a.fn.hcScroll.defaults, c);
        this.options = a.extend({}, a.fn.hcScroll.defaults, c);
        this.clicked = false;
        this.holdScroll = false;
        this.clickY;
        this.posY;
        this.windowY;
        this.scrollY;
        this.inverseScroll = false;
        this.autoResponsive();
        this.refresh();
    };
    b.prototype = {
        constructor: b,
        refresh: function() {
            var b = this;
            b.updateSettingForBreakPoint();
            b.remove();
            if (b.options.activated) {
                if (b.options.wrapper && b.$element.height() > 0) {
                    var c = a('<div class="hc-scroll"></div>').insertBefore(b.$element);
                    var d = a('<div class="hc-scroll-content"></div>').css({
                        height: b.$element.outerHeight(true) + "px"
                    }).appendTo(c);
                    d.removeClass("no-scroll-bar").addClass("no-scroll-bar");
                    b.$element.removeClass("noScroll").addClass("noScroll");
                    b.$element.detach().appendTo(d);
                    b.$element.find(".hc-scroll-bar").remove();
                    c.css({
                        display: "block"
                    });
                    var e = d.height();
                    var f = b.$element.height();
                    c.css({
                        display: ""
                    });
                    if (e > 0 && f > e) {
                        d.removeClass("no-scroll-bar");
                        var g = e * (e / f);
                        a('<div class="hc-scroll-bar"></div>').append('<div class="hc-scroll-bar-y"></div>').appendTo(c);
                        c.find(".hc-scroll-bar-y").append('<span class="up"></span><span class="down"></span>').css({
                            height: g + "px"
                        });
                        b.addEvent();
                    }
                }
            }
        },
        remove: function() {
            var a = this;
            this.clicked = false;
            this.holdScroll = false;
            this.inverseScroll = false;
            var b = a.$element.parents(".hc-scroll:first");
            if (b && b.length > 0) {
                a.$element.detach().insertBefore(b).css({
                    "margin-top": ""
                }).removeClass("noScroll");
                b.remove();
            }
        },
        addEvent: function() {
            var b = this;
            var c = b.$element.parents(".hc-scroll:first");
            var d = c.find(".hc-scroll-content");
            c.find(".hc-scroll-bar-y").on({
                mousedown: function(c) {
                    b.clicked = true;
                    b.clickY = c.pageY;
                    b.posY = a(this).position().top;
                    b.windowY = window.pageYOffset;
                    b.inverseScroll = false;
                },
                touchstart: function(c) {
                    b.clicked = true;
                    b.clickY = c.originalEvent.touches[0].pageY;
                    b.posY = a(this).position().top;
                    b.windowY = window.pageYOffset;
                    b.inverseScroll = false;
                }
            });
            d.on({
                touchstart: function(a) {
                    b.clicked = true;
                    b.clickY = a.originalEvent.touches[0].pageY;
                    b.posY = c.find(".hc-scroll-bar-y").position().top;
                    b.windowY = window.pageYOffset;
                    b.inverseScroll = true;
                },
                mouseover: function(a) {
                    b.holdScroll = true;
                    b.windowY = window.pageYOffset;
                    scrollY = a.pageY;
                },
                mouseleave: function(a) {
                    b.holdScroll = false;
                },
                mousewheel: function(a) {
                    a.preventDefault();
                    b.windowY = window.pageYOffset;
                    b.holdScroll && b.holdWindowScroll(a);
                },
                DOMMouseScroll: function(a) {
                    a.preventDefault();
                    b.windowY = window.pageYOffset;
                    b.holdScroll && b.holdWindowScroll(a);
                }
            });
            a(document).on({
                mousemove: function(a) {
                    b.clicked && b.updateScrollPos(a);
                },
                mouseup: function(a) {
                    b.clicked = false;
                },
                touchmove: function(a) {
                    b.clicked && b.updateScrollPos(a);
                },
                touchend: function() {
                    b.clicked = false;
                },
                touchcancel: function() {
                    b.clicked = false;
                }
            });
        },
        updateScrollPos: function(a) {
            a.preventDefault();
            var b = this;
            var c = a.pageY;
            if (!a.pageY && a.originalEvent && a.originalEvent.touches && a.originalEvent.touches.length > 0) {
                c = a.originalEvent.touches[0].pageY;
            }
            var d = c - b.clickY;
            if (b.inverseScroll) {
                d = b.clickY - c;
            }
            var e = b.$element.parents(".hc-scroll:first");
            var f = e.find(".hc-scroll-content");
            var g = e.find(".hc-scroll-bar-y");
            var h = b.posY + d;
            if (h < 0) {
                h = 0;
            } else if (h > f.height() - g.outerHeight(true)) {
                h = f.height() - g.outerHeight(true);
            }
            g.css({
                top: h + "px"
            });
            var i = (b.$element.height() - f.height()) / (f.height() - g.outerHeight(true));
            f.scrollTop(h * i);
        },
        holdWindowScroll: function(a) {
            var b = this;
            var c;
            if (!c && a.originalEvent) {
                c = a.originalEvent.deltaY;
            }
            if (!c && a.originalEvent) {
                c = a.originalEvent.detail;
            }
            if (!c && a.originalEvent) {
                c = -a.originalEvent.wheelDelta;
            }
            var d = b.$element.parents(".hc-scroll:first");
            var e = d.find(".hc-scroll-content");
            var f = d.find(".hc-scroll-bar-y");
            if (c > 0) {
                c = f.outerHeight(true) / (e.height() / f.outerHeight(true));
            } else {
                c = -(f.outerHeight(true) / (e.height() / f.outerHeight(true)));
            }
            var g = f.position().top + c;
            if (g < 0) {
                g = 0;
            } else if (g > e.height() - f.outerHeight(true)) {
                g = e.height() - f.outerHeight(true);
            }
            f.css({
                top: g + "px"
            });
            var h = (b.$element.height() - e.height()) / (e.height() - f.outerHeight(true));
            e.scrollTop(g * h);
        },
        autoResponsive: function() {
            var b = this;
            if (b.initSetting.responsive && b.initSetting.responsive.length > 0) {
                a(window).on("resize", function() {
                    if (b.$element.is(":visible")) {
                        b.updateSettingForBreakPoint();
                        b.refresh();
                    }
                });
            }
        },
        updateSettingForBreakPoint: function() {
            var b = this;
            var c = b.initSetting.responsive;
            var d;
            var e;
            var f = a(window).width();
            if (!!c) {
                for (var g = 0; g < c.length; g++) {
                    var h = c[g].breakpoint;
                    var i = c[g].settings;
                    if (!h || f > h) break;
                    if (!d || d > h) {
                        d = h;
                        e = i;
                    }
                }
            }
            if (e) {
                b.options = a.extend({}, a.fn.hcScroll.defaults, e);
            } else {
                b.options = b.initSetting;
            }
        },
        scrollTo: function(a) {
            var b = this;
            var c = b.$element.parents(".hc-scroll:first");
            var d = c.find(".hc-scroll-content");
            var e = c.find(".hc-scroll-bar-y");
            var f = a;
            if (f < 0) {
                f = 0;
            } else if (f + d.height() > b.$element.height()) {
                f = b.$element.height() - d.height();
            }
            b.$element.animate({
                "margin-top": -f + "px"
            }, 500);
            var g = (b.$element.height() - d.height()) / (d.height() - e.outerHeight(true));
            e.animate({
                top: f / g + "px"
            });
        }
    };
    var c = a.fn.hcScroll;
    a.fn.hcScroll = function(c) {
        var d = [];
        this.each(function(e, f) {
            var g = a(f).data("hcScroll"), h = typeof c == "object" && c;
            d.push(g);
            if (!g) a(f).data("hcScroll", g = new b(f, h));
            if (typeof c == "string") g[c]();
        });
        return d.length == 1 ? d[0] : d;
    };
    a.fn.hcScroll.defaults = {
        activated: true,
        wrapper: true
    };
    a.fn.hcScroll.Constructor = b;
    a.fn.hcScroll.noConflict = function() {
        a.fn.hcScroll = c;
        return this;
    };
})(jQuery);

(function(a) {
    function b(b, c) {
        var f = !1;
        a.each(b ? e : d, function(b) {
            if (a(c).hasClass(b)) return f = b, !1;
        });
        return f;
    }
    var c = a.fn.val, d = {}, e = {}, f = {};
    a.classVal = function(a, b, c, g) {
        "string" === typeof a && "boolean" === typeof g && (b && (d[a] = b), c && (e[a] = c), 
        f[a] = g);
    };
    a.fn.val = function() {
        var g = Array.prototype.slice.call(arguments, 0), h, i;
        return g.length ? this.each(function() {
            (h = b(!0, this)) ? (i = f[h] ? a(this) : this, i[e[h]].apply(this, g)) : c.apply(a(this), g);
        }) : (h = b(!1, this)) ? (i = f[h] ? this : this[0], i[d[h]].apply(i)) : c.apply(this);
    };
})(window.jQuery || window.Zepto);

(function(a) {
    function b(a, b, c) {
        if ((a[b] || a[c]) && a[b] === a[c]) throw Error("(Link) '" + b + "' can't match '" + c + "'.'");
    }
    function c(c) {
        void 0 === c && (c = {});
        if ("object" !== typeof c) throw Error("(Format) 'format' option must be an object.");
        var d = {};
        a(e).each(function(a, b) {
            if (void 0 === c[b]) d[b] = f[a]; else if (typeof c[b] === typeof f[a]) {
                if ("decimals" === b && (0 > c[b] || 7 < c[b])) throw Error("(Format) 'format.decimals' option must be between 0 and 7.");
                d[b] = c[b];
            } else throw Error("(Format) 'format." + b + "' must be a " + typeof f[a] + ".");
        });
        b(d, "mark", "thousand");
        b(d, "prefix", "negative");
        b(d, "prefix", "negativeBefore");
        this.r = d;
    }
    function d(b, c) {
        "object" !== typeof b && a.error("(Link) Initialize with an object.");
        return new d.prototype.p(b.target || function() {}, b.method, b.format || {}, c);
    }
    var e = "decimals mark thousand prefix postfix encoder decoder negative negativeBefore to from".split(" "), f = [ 2, ".", "", "", "", function(a) {
        return a;
    }, function(a) {
        return a;
    }, "-", "", function(a) {
        return a;
    }, function(a) {
        return a;
    } ];
    c.prototype.a = function(a) {
        return this.r[a];
    };
    c.prototype.L = function(a) {
        function b(a) {
            return a.split("").reverse().join("");
        }
        a = this.a("encoder")(a);
        var c = this.a("decimals"), d = "", e = "", f = "", g = "";
        0 === parseFloat(a.toFixed(c)) && (a = "0");
        0 > a && (d = this.a("negative"), e = this.a("negativeBefore"));
        a = Math.abs(a).toFixed(c).toString();
        a = a.split(".");
        this.a("thousand") ? (f = b(a[0]).match(/.{1,3}/g), f = b(f.join(b(this.a("thousand"))))) : f = a[0];
        this.a("mark") && 1 < a.length && (g = this.a("mark") + a[1]);
        return this.a("to")(e + this.a("prefix") + d + f + g + this.a("postfix"));
    };
    c.prototype.w = function(a) {
        function b(a) {
            return a.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g, "\\$&");
        }
        var c;
        if (null === a || void 0 === a) return !1;
        a = this.a("from")(a);
        a = a.toString();
        c = a.replace(RegExp("^" + b(this.a("negativeBefore"))), "");
        a !== c ? (a = c, c = "-") : c = "";
        a = a.replace(RegExp("^" + b(this.a("prefix"))), "");
        this.a("negative") && (c = "", a = a.replace(RegExp("^" + b(this.a("negative"))), "-"));
        a = a.replace(RegExp(b(this.a("postfix")) + "$"), "").replace(RegExp(b(this.a("thousand")), "g"), "").replace(this.a("mark"), ".");
        a = this.a("decoder")(parseFloat(c + a));
        return isNaN(a) ? !1 : a;
    };
    d.prototype.K = function(b, c) {
        this.method = c || "html";
        this.j = a(b.replace("-tooltip-", "") || "<div/>")[0];
    };
    d.prototype.H = function(a) {
        this.method = "val";
        this.j = document.createElement("input");
        this.j.name = a;
        this.j.type = "hidden";
    };
    d.prototype.G = function(b) {
        function c(a, b) {
            return [ b ? null : a, b ? a : null ];
        }
        var d = this;
        this.method = "val";
        this.target = b.on("change", function(b) {
            d.B.val(c(a(b.target).val(), d.t), {
                link: d,
                set: !0
            });
        });
    };
    d.prototype.p = function(b, c, d, e) {
        this.g = d;
        this.update = !e;
        if ("string" === typeof b && 0 === b.indexOf("-tooltip-")) this.K(b, c); else if ("string" === typeof b && 0 !== b.indexOf("-")) this.H(b); else if ("function" === typeof b) this.target = !1, 
        this.method = b; else {
            if (b instanceof a || a.zepto && a.zepto.isZ(b)) {
                if (!c) {
                    if (b.is("input, select, textarea")) {
                        this.G(b);
                        return;
                    }
                    c = "html";
                }
                if ("function" === typeof c || "string" === typeof c && b[c]) {
                    this.method = c;
                    this.target = b;
                    return;
                }
            }
            throw new RangeError("(Link) Invalid Link.");
        }
    };
    d.prototype.write = function(a, b, c, d) {
        if (!this.update || !1 !== d) if (this.u = a, this.F = a = this.format(a), "function" === typeof this.method) this.method.call(this.target[0] || c[0], a, b, c); else this.target[this.method](a, b, c);
    };
    d.prototype.q = function(b) {
        this.g = new c(a.extend({}, b, this.g instanceof c ? this.g.r : this.g));
    };
    d.prototype.J = function(a) {
        this.B = a;
    };
    d.prototype.I = function(a) {
        this.t = a;
    };
    d.prototype.format = function(a) {
        return this.g.L(a);
    };
    d.prototype.A = function(a) {
        return this.g.w(a);
    };
    d.prototype.p.prototype = d.prototype;
    a.Link = d;
})(window.jQuery || window.Zepto);

(function(a) {
    function b(a) {
        return "number" === typeof a && !isNaN(a) && isFinite(a);
    }
    function c(b) {
        return a.isArray(b) ? b : [ b ];
    }
    function d(a, b) {
        a.addClass(b);
        setTimeout(function() {
            a.removeClass(b);
        }, 300);
    }
    function e(a, b) {
        return 100 * b / (a[1] - a[0]);
    }
    function f(a, b) {
        if (b >= a.d.slice(-1)[0]) return 100;
        for (var c = 1, d, f, g; b >= a.d[c]; ) c++;
        d = a.d[c - 1];
        f = a.d[c];
        g = a.c[c - 1];
        d = [ d, f ];
        return g + e(d, 0 > d[0] ? b + Math.abs(d[0]) : b - d[0]) / (100 / (a.c[c] - g));
    }
    function g(a, b) {
        if (100 <= b) return a.d.slice(-1)[0];
        for (var c = 1, d, e, f; b >= a.c[c]; ) c++;
        d = a.d[c - 1];
        e = a.d[c];
        f = a.c[c - 1];
        d = [ d, e ];
        return 100 / (a.c[c] - f) * (b - f) * (d[1] - d[0]) / 100 + d[0];
    }
    function h(a, b) {
        for (var c = 1, d; b >= a.c[c]; ) c++;
        if (a.m) return d = a.c[c - 1], c = a.c[c], b - d > (c - d) / 2 ? c : d;
        a.h[c - 1] ? (d = a.h[c - 1], c = a.c[c - 1] + Math.round((b - a.c[c - 1]) / d) * d) : c = b;
        return c;
    }
    function i(a, c) {
        if (!b(c)) throw Error("noUiSlider: 'step' is not numeric.");
        a.h[0] = c;
    }
    function j(c, d) {
        if ("object" !== typeof d || a.isArray(d)) throw Error("noUiSlider: 'range' is not an object.");
        a.each(d, function(d, e) {
            var f;
            "number" === typeof e && (e = [ e ]);
            if (!a.isArray(e)) throw Error("noUiSlider: 'range' contains invalid value.");
            f = "min" === d ? 0 : "max" === d ? 100 : parseFloat(d);
            if (!b(f) || !b(e[0])) throw Error("noUiSlider: 'range' value isn't numeric.");
            c.c.push(f);
            c.d.push(e[0]);
            f ? c.h.push(isNaN(e[1]) ? !1 : e[1]) : isNaN(e[1]) || (c.h[0] = e[1]);
        });
        a.each(c.h, function(a, b) {
            if (!b) return !0;
            c.h[a] = e([ c.d[a], c.d[a + 1] ], b) / (100 / (c.c[a + 1] - c.c[a]));
        });
    }
    function k(b, c) {
        "number" === typeof c && (c = [ c ]);
        if (!a.isArray(c) || !c.length || 2 < c.length) throw Error("noUiSlider: 'start' option is incorrect.");
        b.b = c.length;
        b.start = c;
    }
    function l(a, b) {
        a.m = b;
        if ("boolean" !== typeof b) throw Error("noUiSlider: 'snap' option must be a boolean.");
    }
    function m(a, b) {
        if ("lower" === b && 1 === a.b) a.i = 1; else if ("upper" === b && 1 === a.b) a.i = 2; else if (!0 === b && 2 === a.b) a.i = 3; else if (!1 === b) a.i = 0; else throw Error("noUiSlider: 'connect' option doesn't match handle count.");
    }
    function n(a, b) {
        switch (b) {
          case "horizontal":
            a.k = 0;
            break;

          case "vertical":
            a.k = 1;
            break;

          default:
            throw Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function o(a, c) {
        if (2 < a.c.length) throw Error("noUiSlider: 'margin' option is only supported on linear sliders.");
        a.margin = e(a.d, c);
        if (!b(c)) throw Error("noUiSlider: 'margin' option must be numeric.");
    }
    function p(a, b) {
        switch (b) {
          case "ltr":
            a.dir = 0;
            break;

          case "rtl":
            a.dir = 1;
            a.i = [ 0, 2, 1, 3 ][a.i];
            break;

          default:
            throw Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function q(a, b) {
        if ("string" !== typeof b) throw Error("noUiSlider: 'behaviour' must be a string containing options.");
        var c = 0 <= b.indexOf("snap");
        a.n = {
            s: 0 <= b.indexOf("tap") || c,
            extend: 0 <= b.indexOf("extend"),
            v: 0 <= b.indexOf("drag"),
            fixed: 0 <= b.indexOf("fixed"),
            m: c
        };
    }
    function r(b, c, d) {
        b.o = [ c.lower, c.upper ];
        b.g = c.format;
        a.each(b.o, function(b, e) {
            if (!a.isArray(e)) throw Error("noUiSlider: 'serialization." + (b ? "upper" : "lower") + "' must be an array.");
            a.each(e, function() {
                if (!(this instanceof a.Link)) throw Error("noUiSlider: 'serialization." + (b ? "upper" : "lower") + "' can only contain Link instances.");
                this.I(b);
                this.J(d);
                this.q(c.format);
            });
        });
        b.dir && 1 < b.b && b.o.reverse();
    }
    function s(b, c) {
        var d = {
            c: [],
            d: [],
            h: [ !1 ],
            margin: 0
        }, e;
        e = {
            step: {
                e: !1,
                f: i
            },
            range: {
                e: !0,
                f: j
            },
            start: {
                e: !0,
                f: k
            },
            snap: {
                e: !1,
                f: l
            },
            connect: {
                e: !0,
                f: m
            },
            orientation: {
                e: !1,
                f: n
            },
            margin: {
                e: !1,
                f: o
            },
            direction: {
                e: !0,
                f: p
            },
            behaviour: {
                e: !0,
                f: q
            },
            serialization: {
                e: !0,
                f: r
            }
        };
        b = a.extend({
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal"
        }, b);
        b.serialization = a.extend({
            lower: [],
            upper: [],
            format: {}
        }, b.serialization);
        a.each(e, function(a, e) {
            if (void 0 === b[a]) {
                if (e.e) throw Error("noUiSlider: '" + a + "' is required.");
                return !0;
            }
            e.f(d, b[a], c);
        });
        d.style = d.k ? "top" : "left";
        return d;
    }
    function t(b, c) {
        var d = a("<div><div/></div>").addClass(E[2]), e = [ "-lower", "-upper" ];
        b.dir && e.reverse();
        d.children().addClass(E[3] + " " + E[3] + e[c]);
        return d;
    }
    function u(b, c) {
        c.j && (c = new a.Link({
            target: a(c.j).clone().appendTo(b),
            method: c.method,
            format: c.g
        }, !0));
        return c;
    }
    function v(b, c) {
        var d, e = [];
        for (d = 0; d < b.b; d++) {
            var f = e, g = d, h = b.o[d], i = c[d].children(), j = b.g, k = void 0, l = [], k = new a.Link({}, !0);
            k.q(j);
            l.push(k);
            for (k = 0; k < h.length; k++) l.push(u(i, h[k]));
            f[g] = l;
        }
        return e;
    }
    function w(a, b, c) {
        switch (a) {
          case 1:
            b.addClass(E[7]);
            c[0].addClass(E[6]);
            break;

          case 3:
            c[1].addClass(E[6]);

          case 2:
            c[0].addClass(E[7]);

          case 0:
            b.addClass(E[6]);
        }
    }
    function x(a, b) {
        var c, d = [];
        for (c = 0; c < a.b; c++) d.push(t(a, c).appendTo(b));
        return d;
    }
    function y(b, c) {
        c.addClass([ E[0], E[8 + b.dir], E[4 + b.k] ].join(" "));
        return a("<div/>").appendTo(c).addClass(E[1]);
    }
    function z(b, e, i) {
        function j() {
            return z[[ "width", "height" ][e.k]]();
        }
        function k(a) {
            var b, c = [ t.val() ];
            for (b = 0; b < a.length; b++) t.trigger(a[b], c);
        }
        function l(b, c, d) {
            var f = b[0] !== B[0][0] ? 1 : 0, i = u[0] + e.margin, j = u[1] - e.margin;
            d && 1 < B.length && (c = f ? Math.max(c, i) : Math.min(c, j));
            100 > c && (c = h(e, c));
            c = Math.max(Math.min(parseFloat(c.toFixed(7)), 100), 0);
            if (c === u[f]) return 1 === B.length ? !1 : c === i || c === j ? 0 : !1;
            b.css(e.style, c + "%");
            b.is(":first-child") && b.toggleClass(E[17], 50 < c);
            u[f] = c;
            e.dir && (c = 100 - c);
            a(A[f]).each(function() {
                this.write(g(e, c), b.children(), t);
            });
            return !0;
        }
        function m(a, b, c) {
            c || d(t, E[14]);
            l(a, b, !1);
            k([ "slide", "set", "change" ]);
        }
        function n(a, b, c, d) {
            a = a.replace(/\s/g, ".nui ") + ".nui";
            b.on(a, function(a) {
                var b = t.attr("disabled");
                if (t.hasClass(E[14]) || void 0 !== b && null !== b) return !1;
                a.preventDefault();
                var b = 0 === a.type.indexOf("touch"), f = 0 === a.type.indexOf("mouse"), g = 0 === a.type.indexOf("pointer"), h, i, j = a;
                0 === a.type.indexOf("MSPointer") && (g = !0);
                a.originalEvent && (a = a.originalEvent);
                b && (h = a.changedTouches[0].pageX, i = a.changedTouches[0].pageY);
                if (f || g) g || void 0 !== window.pageXOffset || (window.pageXOffset = document.documentElement.scrollLeft, 
                window.pageYOffset = document.documentElement.scrollTop), h = a.clientX + window.pageXOffset, 
                i = a.clientY + window.pageYOffset;
                j.C = [ h, i ];
                j.cursor = f;
                a = j;
                a.l = a.C[e.k];
                c(a, d);
            });
        }
        function o(a, b) {
            var c = b.b || B, d, e = !1, e = 100 * (a.l - b.start) / j(), f = c[0][0] !== B[0][0] ? 1 : 0;
            var g = b.D;
            d = e + g[0];
            e += g[1];
            1 < c.length ? (0 > d && (e += Math.abs(d)), 100 < e && (d -= e - 100), d = [ Math.max(Math.min(d, 100), 0), Math.max(Math.min(e, 100), 0) ]) : d = [ d, e ];
            e = l(c[0], d[f], 1 === c.length);
            1 < c.length && (e = l(c[1], d[f ? 0 : 1], !1) || e);
            e && k([ "slide" ]);
        }
        function p(b) {
            a("." + E[15]).removeClass(E[15]);
            b.cursor && a("body").css("cursor", "").off(".nui");
            C.off(".nui");
            t.removeClass(E[12]);
            k([ "set", "change" ]);
        }
        function q(b, c) {
            1 === c.b.length && c.b[0].children().addClass(E[15]);
            b.stopPropagation();
            n(D.move, C, o, {
                start: b.l,
                b: c.b,
                D: [ u[0], u[B.length - 1] ]
            });
            n(D.end, C, p, null);
            b.cursor && (a("body").css("cursor", a(b.target).css("cursor")), 1 < B.length && t.addClass(E[12]), 
            a("body").on("selectstart.nui", !1));
        }
        function r(b) {
            var c = b.l, d = 0;
            b.stopPropagation();
            a.each(B, function() {
                d += this.offset()[e.style];
            });
            d = c < d / 2 || 1 === B.length ? 0 : 1;
            c -= z.offset()[e.style];
            c = 100 * c / j();
            m(B[d], c, e.n.m);
            e.n.m && q(b, {
                b: [ B[d] ]
            });
        }
        function s(a) {
            var b = (a = a.l < z.offset()[e.style]) ? 0 : 100;
            a = a ? 0 : B.length - 1;
            m(B[a], b, !1);
        }
        var t = a(b), u = [ -1, -1 ], z, A, B;
        if (t.hasClass(E[0])) throw Error("Slider was already initialized.");
        z = y(e, t);
        B = x(e, z);
        A = v(e, B);
        w(e.i, t, B);
        (function(a) {
            var b;
            if (!a.fixed) for (b = 0; b < B.length; b++) n(D.start, B[b].children(), q, {
                b: [ B[b] ]
            });
            a.s && n(D.start, z, r, {
                b: B
            });
            a.extend && (t.addClass(E[16]), a.s && n(D.start, t, s, {
                b: B
            }));
            a.v && (b = z.find("." + E[7]).addClass(E[10]), a.fixed && (b = b.add(z.children().not(b).children())), 
            n(D.start, b, q, {
                b: B
            }));
        })(e.n);
        b.vSet = function() {
            var b = Array.prototype.slice.call(arguments, 0), g, h, i, j, m, n, o = c(b[0]);
            "object" === typeof b[1] ? (g = b[1].set, h = b[1].link, i = b[1].update, j = b[1].animate) : !0 === b[1] && (g = !0);
            e.dir && 1 < e.b && o.reverse();
            j && d(t, E[14]);
            b = 1 < B.length ? 3 : 1;
            1 === o.length && (b = 1);
            for (m = 0; m < b; m++) j = h || A[m % 2][0], j = j.A(o[m % 2]), !1 !== j && (j = f(e, j), 
            e.dir && (j = 100 - j), !0 !== l(B[m % 2], j, !0) && a(A[m % 2]).each(function(a) {
                if (!a) return n = this.u, !0;
                this.write(n, B[m % 2].children(), t, i);
            }));
            !0 === g && k([ "set" ]);
            return this;
        };
        b.vGet = function() {
            var a, b = [];
            for (a = 0; a < e.b; a++) b[a] = A[a][0].F;
            return 1 === b.length ? b[0] : e.dir ? b.reverse() : b;
        };
        b.destroy = function() {
            a.each(A, function() {
                a.each(this, function() {
                    this.target && this.target.off(".nui");
                });
            });
            a(this).off(".nui").removeClass(E.join(" ")).empty();
            return i;
        };
        t.val(e.start);
    }
    function A(a) {
        if (!this.length) throw Error("noUiSlider: Can't initialize slider on empty selection.");
        var b = s(a, this);
        return this.each(function() {
            z(this, b, a);
        });
    }
    function B(b) {
        return this.each(function() {
            var c = a(this).val(), d = this.destroy(), e = a.extend({}, d, b);
            a(this).noUiSlider(e);
            d.start === e.start && a(this).val(c);
        });
    }
    var C = a(document), D = window.navigator.pointerEnabled ? {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup"
    } : window.navigator.msPointerEnabled ? {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
    } : {
        start: "mousedown touchstart",
        move: "mousemove touchmove",
        end: "mouseup touchend"
    }, E = "noUi-target noUi-base noUi-origin noUi-handle noUi-horizontal noUi-vertical noUi-background noUi-connect noUi-ltr noUi-rtl noUi-dragable  noUi-state-drag  noUi-state-tap noUi-active noUi-extended noUi-stacking".split(" ");
    a.noUiSlider = {
        Link: a.Link
    };
    a.fn.noUiSlider = function(a, b) {
        return (b ? B : A).call(this, a);
    };
    a.classVal(E[0], "vGet", "vSet", !1);
})(window.jQuery || window.Zepto);

(function(a) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], a);
    } else {
        a(jQuery);
    }
})(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        var b = 0;
        function c(c, d) {
            var e = this, f, g;
            e.defaults = {
                accessibility: true,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 3e3,
                centerMode: false,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button">' + (b + 1) + "</button>";
                },
                dots: false,
                draggable: true,
                easing: "linear",
                fade: false,
                infinite: true,
                lazyLoad: "ondemand",
                onBeforeChange: null,
                onAfterChange: null,
                onInit: null,
                onReInit: null,
                pauseOnHover: true,
                responsive: null,
                slide: "div",
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                swipe: true,
                touchMove: true,
                touchThreshold: 5,
                vertical: false
            };
            e.initials = {
                animating: false,
                autoPlayTimer: null,
                currentSlide: 0,
                currentLeft: null,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false
            };
            a.extend(e, e.initials);
            e.activeBreakpoint = null;
            e.animType = null;
            e.animProp = null;
            e.breakpoints = [];
            e.breakpointSettings = [];
            e.cssTransitions = false;
            e.paused = false;
            e.positionProp = null;
            e.$slider = a(c);
            e.$slidesCache = null;
            e.transformType = null;
            e.transitionType = null;
            e.windowWidth = 0;
            e.windowTimer = null;
            e.options = a.extend({}, e.defaults, d);
            e.originalSettings = e.options;
            f = e.options.responsive || null;
            if (f && f.length > -1) {
                for (g in f) {
                    if (f.hasOwnProperty(g)) {
                        e.breakpoints.push(f[g].breakpoint);
                        e.breakpointSettings[f[g].breakpoint] = f[g].settings;
                    }
                }
                e.breakpoints.sort(function(a, b) {
                    return b - a;
                });
            }
            e.autoPlay = a.proxy(e.autoPlay, e);
            e.autoPlayClear = a.proxy(e.autoPlayClear, e);
            e.changeSlide = a.proxy(e.changeSlide, e);
            e.setPosition = a.proxy(e.setPosition, e);
            e.swipeHandler = a.proxy(e.swipeHandler, e);
            e.dragHandler = a.proxy(e.dragHandler, e);
            e.keyHandler = a.proxy(e.keyHandler, e);
            e.autoPlayIterator = a.proxy(e.autoPlayIterator, e);
            e.instanceUid = b++;
            e.init();
        }
        return c;
    }();
    b.prototype.addSlide = function(b, c, d) {
        var e = this;
        if (typeof c === "boolean") {
            d = c;
            c = null;
        } else if (c < 0 || c >= e.slideCount) {
            return false;
        }
        e.unload();
        if (typeof c === "number") {
            if (c === 0 && e.$slides.length === 0) {
                a(b).appendTo(e.$slideTrack);
            } else if (d) {
                a(b).insertBefore(e.$slides.eq(c));
            } else {
                a(b).insertAfter(e.$slides.eq(c));
            }
        } else {
            if (d === true) {
                a(b).prependTo(e.$slideTrack);
            } else {
                a(b).appendTo(e.$slideTrack);
            }
        }
        e.$slides = e.$slideTrack.children(this.options.slide);
        e.$slideTrack.children(this.options.slide).remove();
        e.$slideTrack.append(e.$slides);
        e.$slidesCache = e.$slides;
        e.reinit();
    };
    b.prototype.animateSlide = function(b, c) {
        var d = {}, e = this;
        if (e.transformsEnabled === false) {
            if (e.options.vertical === false) {
                e.$slideTrack.animate({
                    left: b
                }, e.options.speed, e.options.easing, c);
            } else {
                e.$slideTrack.animate({
                    top: b
                }, e.options.speed, e.options.easing, c);
            }
        } else {
            if (e.cssTransitions === false) {
                a({
                    animStart: e.currentLeft
                }).animate({
                    animStart: b
                }, {
                    duration: e.options.speed,
                    easing: e.options.easing,
                    step: function(a) {
                        if (e.options.vertical === false) {
                            d[e.animType] = "translate(" + a + "px, 0px)";
                            e.$slideTrack.css(d);
                        } else {
                            d[e.animType] = "translate(0px," + a + "px)";
                            e.$slideTrack.css(d);
                        }
                    },
                    complete: function() {
                        if (c) {
                            c.call();
                        }
                    }
                });
            } else {
                e.applyTransition();
                if (e.options.vertical === false) {
                    d[e.animType] = "translate3d(" + b + "px, 0px, 0px)";
                } else {
                    d[e.animType] = "translate3d(0px," + b + "px, 0px)";
                }
                e.$slideTrack.css(d);
                if (c) {
                    setTimeout(function() {
                        e.disableTransition();
                        c.call();
                    }, e.options.speed);
                }
            }
        }
    };
    b.prototype.applyTransition = function(a) {
        var b = this, c = {};
        if (b.options.fade === false) {
            c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase;
        } else {
            c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase;
        }
        if (b.options.fade === false) {
            b.$slideTrack.css(c);
        } else {
            b.$slides.eq(a).css(c);
        }
    };
    b.prototype.autoPlay = function() {
        var a = this;
        if (a.autoPlayTimer) {
            clearInterval(a.autoPlayTimer);
        }
        if (a.slideCount > a.options.slidesToShow && a.paused !== true) {
            a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed);
        }
    };
    b.prototype.autoPlayClear = function() {
        var a = this;
        if (a.autoPlayTimer) {
            clearInterval(a.autoPlayTimer);
        }
    };
    b.prototype.autoPlayIterator = function() {
        var a = this;
        if (a.options.infinite === false) {
            if (a.direction === 1) {
                if (a.currentSlide + 1 === a.slideCount - 1) {
                    a.direction = 0;
                }
                a.slideHandler(a.currentSlide + a.options.slidesToScroll);
            } else {
                if (a.currentSlide - 1 === 0) {
                    a.direction = 1;
                }
                a.slideHandler(a.currentSlide - a.options.slidesToScroll);
            }
        } else {
            a.slideHandler(a.currentSlide + a.options.slidesToScroll);
        }
    };
    b.prototype.buildArrows = function() {
        var b = this;
        if (b.options.arrows === true && b.slideCount > b.options.slidesToShow) {
            b.$prevArrow = a('<button type="button" class="slick-prev">Previous</button>').appendTo(b.$slider);
            b.$nextArrow = a('<button type="button" class="slick-next">Next</button>').appendTo(b.$slider);
            if (b.options.infinite !== true) {
                b.$prevArrow.addClass("slick-disabled");
            }
        }
    };
    b.prototype.buildDots = function() {
        var b = this, c, d;
        if (b.options.dots === true && b.slideCount > b.options.slidesToShow) {
            d = '<ul class="slick-dots">';
            for (c = 0; c <= b.getDotCount(); c += 1) {
                d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            }
            d += "</ul>";
            b.$dots = a(d).appendTo(b.$slider);
            b.$dots.find("li").first().addClass("slick-active");
        }
    };
    b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        b.slideCount = b.$slides.length;
        b.$slidesCache = b.$slides;
        b.$slider.addClass("slick-slider");
        b.$slideTrack = b.slideCount === 0 ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent();
        b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent();
        b.$slideTrack.css("opacity", 0);
        if (b.options.centerMode === true) {
            b.options.infinite = true;
            b.options.slidesToScroll = 1;
            if (b.options.slidesToShow % 2 === 0) {
                b.options.slidesToShow = 3;
            }
        }
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading");
        b.setupInfinite();
        b.buildArrows();
        b.buildDots();
        if (b.options.accessibility === true) {
            b.$list.prop("tabIndex", 0);
        }
        b.setSlideClasses(0);
        if (b.options.draggable === true) {
            b.$list.addClass("draggable");
        }
    };
    b.prototype.checkResponsive = function() {
        var b = this, c, d;
        if (b.originalSettings.responsive && b.originalSettings.responsive.length > -1 && b.originalSettings.responsive !== null) {
            d = null;
            for (c in b.breakpoints) {
                if (b.breakpoints.hasOwnProperty(c)) {
                    if (a(window).width() < b.breakpoints[c]) {
                        d = b.breakpoints[c];
                    }
                }
            }
            if (d !== null) {
                if (b.activeBreakpoint !== null) {
                    if (d !== b.activeBreakpoint) {
                        b.activeBreakpoint = d;
                        b.options = a.extend({}, b.defaults, b.breakpointSettings[d]);
                        b.refresh();
                    }
                } else {
                    b.activeBreakpoint = d;
                    b.options = a.extend({}, b.defaults, b.breakpointSettings[d]);
                    b.refresh();
                }
            } else {
                if (b.activeBreakpoint !== null) {
                    b.activeBreakpoint = null;
                    b.options = a.extend({}, b.defaults, b.originalSettings);
                    b.refresh();
                }
            }
        }
    };
    b.prototype.changeSlide = function(b) {
        var c = this;
        switch (b.data.message) {
          case "previous":
            c.slideHandler(c.currentSlide - c.options.slidesToScroll);
            break;

          case "next":
            c.slideHandler(c.currentSlide + c.options.slidesToScroll);
            break;

          case "index":
            c.slideHandler(a(b.target).parent().index() * c.options.slidesToScroll);
            break;

          default:
            return false;
        }
    };
    b.prototype.destroy = function() {
        var b = this;
        b.autoPlayClear();
        b.touchObject = {};
        a(".slick-cloned", b.$slider).remove();
        if (b.$dots) {
            b.$dots.remove();
        }
        if (b.$prevArrow) {
            b.$prevArrow.remove();
            b.$nextArrow.remove();
        }
        b.$slides.unwrap().unwrap();
        b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style");
        b.$slider.removeClass("slick-slider");
        b.$slider.removeClass("slick-initialized");
        b.$list.off(".slick");
        a(window).off(".slick-" + b.instanceUid);
    };
    b.prototype.disableTransition = function(a) {
        var b = this, c = {};
        c[b.transitionType] = "";
        if (b.options.fade === false) {
            b.$slideTrack.css(c);
        } else {
            b.$slides.eq(a).css(c);
        }
    };
    b.prototype.fadeSlide = function(a, b) {
        var c = this;
        if (c.cssTransitions === false) {
            c.$slides.eq(a).css({
                zIndex: 1e3
            });
            c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b);
        } else {
            c.applyTransition(a);
            c.$slides.eq(a).css({
                opacity: 1,
                zIndex: 1e3
            });
            if (b) {
                setTimeout(function() {
                    c.disableTransition(a);
                    b.call();
                }, c.options.speed);
            }
        }
    };
    b.prototype.filterSlides = function(a) {
        var b = this;
        if (a !== null) {
            b.unload();
            b.$slideTrack.children(this.options.slide).remove();
            b.$slidesCache.filter(a).appendTo(b.$slideTrack);
            b.reinit();
        }
    };
    b.prototype.getCurrent = function() {
        var a = this;
        return a.currentSlide;
    };
    b.prototype.getDotCount = function() {
        var a = this, b = 0, c = 0, d = 0, e;
        e = a.options.infinite === true ? a.slideCount + a.options.slidesToShow - a.options.slidesToScroll : a.slideCount;
        while (b < e) {
            d++;
            c += a.options.slidesToScroll;
            b = c + a.options.slidesToShow;
        }
        return d;
    };
    b.prototype.getLeft = function(a) {
        var b = this, c;
        b.slideOffset = 0;
        if (b.options.infinite === true) {
            if (b.slideCount > b.options.slidesToShow) {
                b.slideOffset = b.slideWidth * b.options.slidesToShow * -1;
            }
            if (b.slideCount % b.options.slidesToScroll !== 0) {
                if (a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow) {
                    b.slideOffset = b.slideCount % b.options.slidesToShow * b.slideWidth * -1;
                }
            }
        } else {
            if (b.slideCount % b.options.slidesToShow !== 0) {
                if (a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow) {
                    b.slideOffset = b.slideCount % b.options.slidesToShow * b.slideWidth;
                }
            }
        }
        if (b.options.centerMode === true) {
            b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth;
        }
        if (b.options.vertical === false) {
            c = a * b.slideWidth * -1 + b.slideOffset;
        } else {
            b.listHeight = b.$list.height();
            if (b.options.infinite === true) {
                c = a * b.listHeight * -1 - b.listHeight;
            } else {
                c = a * b.listHeight * -1;
            }
        }
        return c;
    };
    b.prototype.init = function() {
        var b = this;
        if (!a(b.$slider).hasClass("slick-initialized")) {
            a(b.$slider).addClass("slick-initialized");
            b.buildOut();
            b.setProps();
            b.startLoad();
            b.loadSlider();
            b.initializeEvents();
            b.checkResponsive();
        }
        if (b.options.onInit !== null) {
            b.options.onInit.call(this, b);
        }
    };
    b.prototype.initArrowEvents = function() {
        var a = this;
        if (a.options.arrows === true && a.slideCount > a.options.slidesToShow) {
            a.$prevArrow.on("click.slick", {
                message: "previous"
            }, a.changeSlide);
            a.$nextArrow.on("click.slick", {
                message: "next"
            }, a.changeSlide);
        }
    };
    b.prototype.initDotEvents = function() {
        var b = this;
        if (b.options.dots === true && b.slideCount > b.options.slidesToShow) {
            a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide);
        }
    };
    b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents();
        b.initDotEvents();
        b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler);
        b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler);
        b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler);
        b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler);
        if (b.options.pauseOnHover === true && b.options.autoplay === true) {
            b.$list.on("mouseenter.slick", b.autoPlayClear);
            b.$list.on("mouseleave.slick", b.autoPlay);
        }
        if (b.options.accessibility === true) {
            b.$list.on("keydown.slick", b.keyHandler);
        }
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, function() {
            b.checkResponsive();
            b.setPosition();
        });
        a(window).on("resize.slick.slick-" + b.instanceUid, function() {
            if (a(window).width !== b.windowWidth) {
                clearTimeout(b.windowDelay);
                b.windowDelay = window.setTimeout(function() {
                    b.windowWidth = a(window).width();
                    b.checkResponsive();
                    b.setPosition();
                }, 50);
            }
        });
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition);
    };
    b.prototype.initUI = function() {
        var a = this;
        if (a.options.arrows === true && a.slideCount > a.options.slidesToShow) {
            a.$prevArrow.show();
            a.$nextArrow.show();
        }
        if (a.options.dots === true && a.slideCount > a.options.slidesToShow) {
            a.$dots.show();
        }
        if (a.options.autoplay === true) {
            a.autoPlay();
        }
    };
    b.prototype.keyHandler = function(a) {
        var b = this;
        if (a.keyCode === 37) {
            b.changeSlide({
                data: {
                    message: "previous"
                }
            });
        } else if (a.keyCode === 39) {
            b.changeSlide({
                data: {
                    message: "next"
                }
            });
        }
    };
    b.prototype.lazyLoad = function() {
        var b = this, c, d, e, f;
        if (b.options.centerMode === true) {
            e = b.options.slidesToShow + b.currentSlide - 1;
            f = e + b.options.slidesToShow + 2;
        } else {
            e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide;
            f = e + b.options.slidesToShow;
        }
        c = b.$slider.find(".slick-slide").slice(e, f);
        a("img[data-lazy]", c).each(function() {
            var b = a(this).attr("src");
            var c = a(this).attr("data-lazy");
            if (!b || b != c) {
                a(this).css({
                    opacity: 0
                }).attr("src", a(this).attr("data-lazy")).removeClass("slick-loading").load(function() {
                    a(this).animate({
                        opacity: 1
                    }, 200);
                });
            }
        });
        if (b.currentSlide >= b.slideCount - b.options.slidesToShow) {
            d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow);
            a("img[data-lazy]", d).not("[src]").each(function() {
                a(this).css({
                    opacity: 0
                }).attr("src", a(this).attr("data-lazy")).removeClass("slick-loading").load(function() {
                    a(this).animate({
                        opacity: 1
                    }, 200);
                });
            });
        } else if (b.currentSlide === 0) {
            d = b.$slider.find(".slick-cloned").slice(b.options.slidesToShow * -1);
            a("img[data-lazy]", d).not("[src]").each(function() {
                a(this).css({
                    opacity: 0
                }).attr("src", a(this).attr("data-lazy")).removeClass("slick-loading").load(function() {
                    a(this).animate({
                        opacity: 1
                    }, 200);
                });
            });
        }
    };
    b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition();
        a.$slideTrack.css({
            opacity: 1
        });
        a.$slider.removeClass("slick-loading");
        a.initUI();
        if (a.options.lazyLoad === "progressive") {
            a.progressiveLazyLoad();
        }
    };
    b.prototype.postSlide = function(a) {
        var b = this;
        if (b.options.onAfterChange !== null) {
            b.options.onAfterChange.call(this, b, a);
        }
        b.animating = false;
        b.setPosition();
        b.swipeLeft = null;
        if (b.options.autoplay === true && b.paused === false) {
            b.autoPlay();
        }
        b.setSlideClasses(b.currentSlide);
    };
    b.prototype.progressiveLazyLoad = function() {
        var b = this, c, d;
        c = a("img[data-lazy]").not("[src]").length;
        if (c > 0) {
            d = a(a("img[data-lazy]", b.$slider).not("[src]").get(0));
            d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
                b.progressiveLazyLoad();
            });
        }
    };
    b.prototype.refresh = function() {
        var b = this;
        b.destroy();
        a.extend(b, b.initials);
        b.init();
    };
    b.prototype.reinit = function() {
        var b = this;
        b.$slides = a(b.options.slide + ":not(.slick-cloned)", b.$slideTrack).addClass("slick-slide");
        b.slideCount = b.$slides.length;
        if (b.currentSlide >= b.slideCount && b.currentSlide !== 0) {
            b.currentSlide = b.currentSlide - b.options.slidesToScroll;
        }
        b.setProps();
        b.setupInfinite();
        b.buildArrows();
        b.updateArrows();
        b.initArrowEvents();
        b.buildDots();
        b.updateDots();
        b.initDotEvents();
        b.setSlideClasses(0);
        b.setPosition();
        if (b.options.onReInit !== null) {
            b.options.onReInit.call(this, b);
        }
    };
    b.prototype.removeSlide = function(a, b) {
        var c = this;
        if (typeof a === "boolean") {
            b = a;
            a = b === true ? 0 : c.slideCount - 1;
        } else {
            a = b === true ? --a : a;
        }
        if (c.slideCount < 1 || a < 0 || a > c.slideCount - 1) {
            return false;
        }
        c.unload();
        c.$slideTrack.children(this.options.slide).eq(a).remove();
        c.$slides = c.$slideTrack.children(this.options.slide);
        c.$slideTrack.children(this.options.slide).remove();
        c.$slideTrack.append(c.$slides);
        c.$slidesCache = c.$slides;
        c.reinit();
    };
    b.prototype.setCSS = function(a) {
        var b = this, c = {}, d, e;
        d = b.positionProp == "left" ? a + "px" : "0px";
        e = b.positionProp == "top" ? a + "px" : "0px";
        c[b.positionProp] = a;
        if (b.transformsEnabled === false) {
            b.$slideTrack.css(c);
        } else {
            c = {};
            if (b.cssTransitions === false) {
                c[b.animType] = "translate(" + d + ", " + e + ")";
                b.$slideTrack.css(c);
            } else {
                c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)";
                b.$slideTrack.css(c);
            }
        }
    };
    b.prototype.setDimensions = function() {
        var a = this;
        if (a.options.centerMode === true) {
            a.$slideTrack.children(".slick-slide").width(a.slideWidth);
        } else {
            a.$slideTrack.children(".slick-slide").width(a.slideWidth);
        }
        if (a.options.vertical === false) {
            a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length));
            if (a.options.centerMode === true) {
                a.$list.css({
                    padding: "0px " + a.options.centerPadding
                });
            }
        } else {
            a.$list.height(a.$slides.first().outerHeight());
            a.$slideTrack.height(Math.ceil(a.listHeight * a.$slideTrack.children(".slick-slide").length));
            if (a.options.centerMode === true) {
                a.$list.css({
                    padding: a.options.centerPadding + " 0px"
                });
            }
        }
    };
    b.prototype.setFade = function() {
        var b = this, c;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1;
            a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            });
        });
        b.$slides.eq(b.currentSlide).css({
            zIndex: 900,
            opacity: 1
        });
    };
    b.prototype.setPosition = function() {
        var a = this;
        a.setValues();
        a.setDimensions();
        if (a.options.fade === false) {
            a.setCSS(a.getLeft(a.currentSlide));
        } else {
            a.setFade();
        }
    };
    b.prototype.setProps = function() {
        var a = this;
        a.positionProp = a.options.vertical === true ? "top" : "left";
        if (a.positionProp === "top") {
            a.$slider.addClass("slick-vertical");
        } else {
            a.$slider.removeClass("slick-vertical");
        }
        if (document.body.style.WebkitTransition !== undefined || document.body.style.MozTransition !== undefined || document.body.style.msTransition !== undefined) {
            a.cssTransitions = true;
        }
        if (document.body.style.MozTransform !== undefined) {
            a.animType = "MozTransform";
            a.transformType = "-moz-transform";
            a.transitionType = "MozTransition";
        }
        if (document.body.style.webkitTransform !== undefined) {
            a.animType = "webkitTransform";
            a.transformType = "-webkit-transform";
            a.transitionType = "webkitTransition";
        }
        if (document.body.style.msTransform !== undefined) {
            a.animType = "transform";
            a.transformType = "transform";
            a.transitionType = "transition";
        }
        a.transformsEnabled = a.animType !== null;
    };
    b.prototype.setValues = function() {
        var a = this;
        a.listWidth = a.$list.width();
        a.listHeight = a.$list.height();
        a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow);
    };
    b.prototype.setSlideClasses = function(a) {
        var b = this, c, d, e;
        b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center");
        d = b.$slider.find(".slick-slide");
        if (b.options.centerMode === true) {
            c = Math.floor(b.options.slidesToShow / 2);
            if (a >= c && a <= b.slideCount - 1 - c) {
                b.$slides.slice(a - c, a + c + 1).addClass("slick-active");
            } else {
                e = b.options.slidesToShow + a;
                d.slice(e - c + 1, e + c + 2).addClass("slick-active");
            }
            if (a === 0) {
                d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center");
            } else if (a === b.slideCount - 1) {
                d.eq(b.options.slidesToShow).addClass("slick-center");
            }
            b.$slides.eq(a).addClass("slick-center");
        } else {
            if (a > 0 && a < b.slideCount - b.options.slidesToShow) {
                b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active");
            } else {
                e = b.options.slidesToShow + a;
                d.slice(e, e + b.options.slidesToShow).addClass("slick-active");
            }
        }
        if (b.options.lazyLoad === "ondemand") {
            b.lazyLoad();
        }
    };
    b.prototype.setupInfinite = function() {
        var b = this, c, d, e;
        if (b.options.fade === true || b.options.vertical === true) {
            b.options.slidesToShow = 1;
            b.options.slidesToScroll = 1;
            b.options.centerMode = false;
        }
        if (b.options.infinite === true && b.options.fade === false) {
            d = null;
            if (b.slideCount > b.options.slidesToShow) {
                if (b.options.centerMode === true) {
                    e = b.options.slidesToShow + 1;
                } else {
                    e = b.options.slidesToShow;
                }
                for (c = b.slideCount; c > b.slideCount - e; c -= 1) {
                    d = c - 1;
                    a(b.$slides[d]).clone().attr("id", "").prependTo(b.$slideTrack).addClass("slick-cloned");
                }
                for (c = 0; c < e; c += 1) {
                    d = c;
                    a(b.$slides[d]).clone().attr("id", "").appendTo(b.$slideTrack).addClass("slick-cloned");
                }
                b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "");
                });
            }
        }
    };
    b.prototype.slideHandler = function(a) {
        var b, c, d, e, f = null, g = this;
        if (g.animating === true) {
            return false;
        }
        b = a;
        f = g.getLeft(b);
        d = g.getLeft(g.currentSlide);
        e = g.slideCount % g.options.slidesToScroll !== 0 ? g.options.slidesToScroll : 0;
        g.currentLeft = g.swipeLeft === null ? d : g.swipeLeft;
        if (g.options.infinite === false && (a < 0 || a > g.slideCount - g.options.slidesToShow + e)) {
            b = g.currentSlide;
            g.animateSlide(d, function() {
                g.postSlide(b);
            });
            return false;
        }
        if (g.options.autoplay === true) {
            clearInterval(g.autoPlayTimer);
        }
        if (b < 0) {
            if (g.slideCount % g.options.slidesToScroll !== 0) {
                c = g.slideCount - g.slideCount % g.options.slidesToScroll;
            } else {
                c = g.slideCount - g.options.slidesToScroll;
            }
        } else if (b > g.slideCount - 1) {
            c = 0;
        } else {
            c = b;
        }
        g.animating = true;
        if (g.options.onBeforeChange !== null && a !== g.currentSlide) {
            g.options.onBeforeChange.call(this, g, g.currentSlide, c);
        }
        g.currentSlide = c;
        g.updateDots();
        g.updateArrows();
        if (g.options.fade === true) {
            g.fadeSlide(c, function() {
                g.postSlide(c);
            });
            return false;
        }
        g.animateSlide(f, function() {
            g.postSlide(c);
        });
    };
    b.prototype.startLoad = function() {
        var a = this;
        if (a.options.arrows === true && a.slideCount > a.options.slidesToShow) {
            a.$prevArrow.hide();
            a.$nextArrow.hide();
        }
        if (a.options.dots === true && a.slideCount > a.options.slidesToShow) {
            a.$dots.hide();
        }
        a.$slider.addClass("slick-loading");
    };
    b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        a = e.touchObject.startX - e.touchObject.curX;
        b = e.touchObject.startY - e.touchObject.curY;
        c = Math.atan2(b, a);
        d = Math.round(c * 180 / Math.PI);
        if (d < 0) {
            d = 360 - Math.abs(d);
        }
        if (d <= 45 && d >= 0) {
            return "left";
        }
        if (d <= 360 && d >= 315) {
            return "left";
        }
        if (d >= 135 && d <= 225) {
            return "right";
        }
        return "vertical";
    };
    b.prototype.swipeEnd = function(b) {
        var c = this;
        c.$list.removeClass("dragging");
        if (c.touchObject.curX === undefined) {
            return false;
        }
        if (c.touchObject.swipeLength >= c.touchObject.minSwipe) {
            a(b.target).on("click.slick", function(b) {
                b.stopImmediatePropagation();
                b.stopPropagation();
                b.preventDefault();
                a(b.target).off("click.slick");
            });
            switch (c.swipeDirection()) {
              case "left":
                c.slideHandler(c.currentSlide + c.options.slidesToScroll);
                c.touchObject = {};
                break;

              case "right":
                c.slideHandler(c.currentSlide - c.options.slidesToScroll);
                c.touchObject = {};
                break;
            }
        } else {
            if (c.touchObject.startX !== c.touchObject.curX) {
                c.slideHandler(c.currentSlide);
                c.touchObject = {};
            }
        }
    };
    b.prototype.swipeHandler = function(a) {
        var b = this;
        if ("ontouchend" in document && b.options.swipe === false) {
            return false;
        } else if (b.options.draggable === false && !a.originalEvent.touches) {
            return false;
        }
        b.touchObject.fingerCount = a.originalEvent && a.originalEvent.touches !== undefined ? a.originalEvent.touches.length : 1;
        b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold;
        switch (a.data.action) {
          case "start":
            b.swipeStart(a);
            break;

          case "move":
            b.swipeMove(a);
            break;

          case "end":
            b.swipeEnd(a);
            break;
        }
    };
    b.prototype.swipeMove = function(a) {
        var b = this, c, d, e, f;
        f = a.originalEvent !== undefined ? a.originalEvent.touches : null;
        c = b.getLeft(b.currentSlide);
        if (!b.$list.hasClass("dragging") || f && f.length !== 1) {
            return false;
        }
        b.touchObject.curX = f !== undefined ? f[0].pageX : a.clientX;
        b.touchObject.curY = f !== undefined ? f[0].pageY : a.clientY;
        b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2)));
        d = b.swipeDirection();
        if (d === "vertical") {
            return;
        }
        if (a.originalEvent !== undefined && b.touchObject.swipeLength > 4) {
            a.preventDefault();
        }
        e = b.touchObject.curX > b.touchObject.startX ? 1 : -1;
        if (b.options.vertical === false) {
            b.swipeLeft = c + b.touchObject.swipeLength * e;
        } else {
            b.swipeLeft = c + b.touchObject.swipeLength * (b.listHeight / b.listWidth) * e;
        }
        if (b.options.fade === true || b.options.touchMove === false) {
            return false;
        }
        if (b.animating === true) {
            b.swipeLeft = null;
            return false;
        }
        b.setCSS(b.swipeLeft);
    };
    b.prototype.swipeStart = function(a) {
        var b = this, c;
        if (b.touchObject.fingerCount !== 1 || b.slideCount <= b.options.slidesToShow) {
            b.touchObject = {};
            return false;
        }
        if (a.originalEvent !== undefined && a.originalEvent.touches !== undefined) {
            c = a.originalEvent.touches[0];
        }
        b.touchObject.startX = b.touchObject.curX = c !== undefined ? c.pageX : a.clientX;
        b.touchObject.startY = b.touchObject.curY = c !== undefined ? c.pageY : a.clientY;
        b.$list.addClass("dragging");
    };
    b.prototype.unfilterSlides = function() {
        var a = this;
        if (a.$slidesCache !== null) {
            a.unload();
            a.$slideTrack.children(this.options.slide).remove();
            a.$slidesCache.appendTo(a.$slideTrack);
            a.reinit();
        }
    };
    b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove();
        if (b.$dots) {
            b.$dots.remove();
        }
        if (b.$prevArrow) {
            b.$prevArrow.remove();
            b.$nextArrow.remove();
        }
        b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style");
    };
    b.prototype.updateArrows = function() {
        var a = this;
        if (a.options.arrows === true && a.options.infinite !== true && a.slideCount > a.options.slidesToShow) {
            a.$prevArrow.removeClass("slick-disabled");
            a.$nextArrow.removeClass("slick-disabled");
            if (a.currentSlide === 0) {
                a.$prevArrow.addClass("slick-disabled");
                a.$nextArrow.removeClass("slick-disabled");
            } else if (a.currentSlide >= a.slideCount - a.options.slidesToShow) {
                a.$nextArrow.addClass("slick-disabled");
                a.$prevArrow.removeClass("slick-disabled");
            }
        }
    };
    b.prototype.updateDots = function() {
        var a = this;
        if (a.$dots !== null) {
            a.$dots.find("li").removeClass("slick-active");
            a.$dots.find("li").eq(a.currentSlide / a.options.slidesToScroll).addClass("slick-active");
        }
    };
    a.fn.slick = function(a) {
        var c = this;
        return c.each(function(c, d) {
            d.slick = new b(d, a);
        });
    };
    a.fn.slickAdd = function(a, b, c) {
        var d = this;
        return d.each(function(d, e) {
            e.slick.addSlide(a, b, c);
        });
    };
    a.fn.slickCurrentSlide = function() {
        var a = this;
        return a.get(0).slick.getCurrent();
    };
    a.fn.slickFilter = function(a) {
        var b = this;
        return b.each(function(b, c) {
            c.slick.filterSlides(a);
        });
    };
    a.fn.slickGoTo = function(a) {
        var b = this;
        return b.each(function(b, c) {
            c.slick.slideHandler(a);
        });
    };
    a.fn.slickNext = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.changeSlide({
                data: {
                    message: "next"
                }
            });
        });
    };
    a.fn.slickPause = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.autoPlayClear();
            b.slick.paused = true;
        });
    };
    a.fn.slickPlay = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.paused = false;
            b.slick.autoPlay();
        });
    };
    a.fn.slickPrev = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.changeSlide({
                data: {
                    message: "previous"
                }
            });
        });
    };
    a.fn.slickRemove = function(a, b) {
        var c = this;
        return c.each(function(c, d) {
            d.slick.removeSlide(a, b);
        });
    };
    a.fn.slickSetOption = function(a, b, c) {
        var d = this;
        return d.each(function(d, e) {
            e.slick.options[a] = b;
            if (c === true) {
                e.slick.unload();
                e.slick.reinit();
            }
        });
    };
    a.fn.slickUnfilter = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.unfilterSlides();
        });
    };
    a.fn.unslick = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.destroy();
        });
    };
});

(function(a, b, c) {
    var d = "placeholder" in b.createElement("input"), e = "placeholder" in b.createElement("textarea"), f = c.fn, g = c.valHooks, h, i;
    if (d && e) {
        i = f.placeholder = function() {
            return this;
        };
        i.input = i.textarea = true;
    } else {
        i = f.placeholder = function() {
            var a = this;
            a.filter((d ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": k,
                "blur.placeholder": l
            }).data("placeholder-enabled", true).trigger("blur.placeholder");
            return a;
        };
        i.input = d;
        i.textarea = e;
        h = {
            get: function(a) {
                var b = c(a);
                return b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value;
            },
            set: function(a, d) {
                var e = c(a);
                if (!e.data("placeholder-enabled")) {
                    return a.value = d;
                }
                if (d == "") {
                    a.value = d;
                    if (a != b.activeElement) {
                        l.call(a);
                    }
                } else {
                    if (e.hasClass("placeholder")) {
                        k.call(a, true, d) || (a.value = d);
                    } else {
                        a.value = d;
                    }
                }
                return e;
            }
        };
        d || (g.input = h);
        e || (g.textarea = h);
        c(function() {
            c(b).delegate("form", "submit.placeholder", function() {
                var a = c(".placeholder", this).each(k);
                setTimeout(function() {
                    a.each(l);
                }, 10);
            });
        });
        c(a).bind("beforeunload.placeholder", function() {
            c(".placeholder").each(function() {
                this.value = "";
            });
        });
    }
    function j(a) {
        var b = {}, d = /^jQuery\d+$/;
        c.each(a.attributes, function(a, c) {
            if (c.specified && !d.test(c.name)) {
                b[c.name] = c.value;
            }
        });
        return b;
    }
    function k(a, d) {
        var e = this, f = c(e);
        if (e.value == f.attr("placeholder") && f.hasClass("placeholder")) {
            if (f.data("placeholder-password")) {
                f = f.hide().next().show().attr("id", f.removeAttr("id").data("placeholder-id"));
                if (a === true) {
                    return f[0].value = d;
                }
                f.focus();
            } else {
                e.value = "";
                f.removeClass("placeholder");
                e == b.activeElement && e.select();
            }
        }
    }
    function l() {
        var a, b = this, d = c(b), e = d, f = this.id;
        if (b.value == "") {
            if (b.type == "password") {
                if (!d.data("placeholder-textinput")) {
                    try {
                        a = d.clone().attr({
                            type: "text"
                        });
                    } catch (g) {
                        a = c("<input>").attr(c.extend(j(this), {
                            type: "text"
                        }));
                    }
                    a.removeAttr("name").data({
                        "placeholder-password": true,
                        "placeholder-id": f
                    }).bind("focus.placeholder", k);
                    d.data({
                        "placeholder-textinput": a,
                        "placeholder-id": f
                    }).before(a);
                }
                d = d.removeAttr("id").hide().prev().attr("id", f).show();
            }
            d.addClass("placeholder");
            d[0].value = d.attr("placeholder");
        } else {
            d.removeClass("placeholder");
        }
    }
})(this, document, jQuery);

(function(a) {
    "use strict";
    var b = window.console || function() {}, c = {
        defaults: {
            debug: false,
            RODom: false,
            patternLibrary: {
                phone: /([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)/,
                email: /((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?/,
                url: /(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/,
                number: /-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/,
                dateISO: /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,
                alpha: /[a-zA-Z]+/,
                alphaNumeric: /\w+/,
                integer: /-?\d+/
            },
            classPrefix: "h5-",
            errorClass: "ui-state-error",
            validClass: "ui-state-valid",
            activeClass: "active",
            requiredClass: "required",
            requiredAttribute: "required",
            patternAttribute: "pattern",
            errorAttribute: "data-h5-errorid",
            customEvents: {
                validate: true
            },
            kbSelectors: ":input:not(:button):not(:disabled):not(.novalidate)",
            focusout: true,
            focusin: false,
            change: true,
            keyup: false,
            activeKeyup: true,
            mSelectors: '[type="range"]:not(:disabled):not(.novalidate), :radio:not(:disabled):not(.novalidate), :checkbox:not(:disabled):not(.novalidate), select:not(:disabled):not(.novalidate), option:not(:disabled):not(.novalidate)',
            click: true,
            requiredVar: "h5-required",
            patternVar: "h5-pattern",
            stripMarkup: true,
            submit: true,
            focusFirstInvalidElementOnSubmit: true,
            validateOnSubmit: true,
            invalidCallback: function() {},
            validCallback: function() {},
            allValidSelectors: ":input:visible:not(:button):not(:disabled):not(.novalidate)",
            markInvalid: function m(b) {
                var c = a(b.element), d = a(b.errorID);
                c.addClass(b.errorClass).removeClass(b.validClass);
                c.addClass(b.settings.activeClass);
                if (d.length) {
                    if (c.attr("title")) {
                        d.text(c.attr("title"));
                    }
                    d.show();
                }
                c.data("valid", false);
                b.settings.invalidCallback.call(b.element, b.validity);
                return c;
            },
            markValid: function n(b) {
                var c = a(b.element), d = a(b.errorID);
                c.addClass(b.validClass).removeClass(b.errorClass);
                if (d.length) {
                    d.hide();
                }
                c.data("valid", true);
                b.settings.validCallback.call(b.element, b.validity);
                return c;
            },
            unmark: function o(b) {
                var c = a(b.element);
                c.removeClass(b.errorClass).removeClass(b.validClass);
                c.form.find("#" + b.element.id).removeClass(b.errorClass).removeClass(b.validClass);
                return c;
            }
        }
    }, d = c.defaults, e = d.patternLibrary, f = function p(b) {
        return a.extend({
            customError: b.customError || false,
            patternMismatch: b.patternMismatch || false,
            rangeOverflow: b.rangeOverflow || false,
            rangeUnderflow: b.rangeUnderflow || false,
            stepMismatch: b.stepMismatch || false,
            tooLong: b.tooLong || false,
            typeMismatch: b.typeMismatch || false,
            valid: b.valid || true,
            valueMissing: b.valueMissing || false
        }, b);
    }, g = {
        isValid: function(b, c) {
            var d = a(this);
            c = b && c || {};
            if (c.revalidate !== false) {
                d.trigger("validate");
            }
            return d.data("valid");
        },
        allValid: function(b, c) {
            var d = true, e = [], f = a(this), g, h, i = [], j = function l(a, b) {
                b.e = a;
                e.push(b);
            }, k = a.extend({}, b, c);
            c = c || {};
            f.trigger("formValidate", {
                settings: a.extend(true, {}, k)
            });
            f.undelegate(k.allValidSelectors, ".allValid", j);
            f.delegate(k.allValidSelectors, "validated.allValid", j);
            g = f.find(k.allValidSelectors);
            h = g.filter(function(a) {
                var b;
                if (this.tagName === "INPUT" && this.type === "radio") {
                    b = this.name;
                    if (i[b] === true) {
                        return false;
                    }
                    i[b] = true;
                }
                return true;
            });
            h.each(function() {
                var b = a(this);
                d = b.h5Validate("isValid", c) && d;
            });
            f.trigger("formValidated", {
                valid: d,
                elements: e
            });
            return d;
        },
        validate: function(c) {
            var d = a(this), e = d.filter("[pattern]")[0] ? d.attr("pattern") : false, g = new RegExp("^(?:" + e + ")$"), h = null, i = d.is("[type=checkbox]") ? d.is(":checked") : d.is("[type=radio]") ? (h = d.parents("form").find('input[name="' + d.attr("name") + '"]')).filter(":checked").length > 0 : d.val(), j = c.errorClass, k = c.validClass, l = d.attr(c.errorAttribute) || false, m = l ? "#" + l.replace(/(:|\.|\[|\])/g, "\\$1") : false, n = false, o = f({
                element: this,
                valid: true
            }), p = a("<input required>"), q;
            if (p.filter("[required]") && p.filter("[required]").length) {
                n = d.filter("[required]").length && d.attr("required") !== "false";
            } else {
                n = d.attr("required") !== undefined;
            }
            if (c.debug && window.console) {
                b.log('Validate called on "' + i + '" with regex "' + g + '". Required: ' + n);
                b.log("Regex test: " + g.test(i) + ", Pattern: " + e);
            }
            q = parseInt(d.attr("maxlength"), 10);
            if (!isNaN(q) && i.length > q) {
                o.valid = false;
                o.tooLong = true;
            }
            if (n && !i) {
                o.valid = false;
                o.valueMissing = true;
            } else if (e && !g.test(i) && i) {
                o.valid = false;
                o.patternMismatch = true;
            } else {
                if (!c.RODom) {
                    c.markValid({
                        element: this,
                        validity: o,
                        errorClass: j,
                        validClass: k,
                        errorID: m,
                        settings: c
                    });
                }
            }
            if (!o.valid) {
                if (!c.RODom) {
                    c.markInvalid({
                        element: this,
                        validity: o,
                        errorClass: j,
                        validClass: k,
                        errorID: m,
                        settings: c
                    });
                }
            }
            d.trigger("validated", o);
            if (h !== null && c.alreadyCheckingRelatedRadioButtons !== true) {
                c.alreadyCheckingRelatedRadioButtons = true;
                h.not(d).trigger("validate");
                c.alreadyCheckingRelatedRadioButtons = false;
            }
        },
        delegateEvents: function(b, c, d, e) {
            var f = {}, g = 0, h = function() {
                e.validate.call(this, e);
            };
            a.each(c, function(a, b) {
                if (b) {
                    f[a] = a;
                }
            });
            for (g in f) {
                if (f.hasOwnProperty(g)) {
                    a(d).delegate(b, f[g] + ".h5Validate", h);
                }
            }
            return d;
        },
        bindDelegation: function(b) {
            var c = a(this), d;
            a.each(e, function(c, d) {
                var e = d.toString();
                e = e.substring(1, e.length - 1);
                a("." + b.classPrefix + c).attr("pattern", e);
            });
            d = c.filter("form").add(c.find("form")).add(c.parents("form"));
            d.attr("novalidate", "novalidate").submit(h);
            d.find("input[formnovalidate][type='submit']").click(function() {
                a(this).closest("form").unbind("submit", h);
            });
            return this.each(function() {
                var a = {
                    focusout: b.focusout,
                    focusin: b.focusin,
                    change: b.change,
                    keyup: b.keyup
                }, c = {
                    click: b.click
                }, d = {
                    keyup: b.activeKeyup
                };
                b.delegateEvents(":input", b.customEvents, this, b);
                b.delegateEvents(b.kbSelectors, a, this, b);
                b.delegateEvents(b.mSelectors, c, this, b);
                b.delegateEvents(b.activeClassSelector, d, this, b);
                b.delegateEvents("textarea[maxlength]", {
                    keyup: true
                }, this, b);
            });
        }
    }, h = function(b) {
        var c, d = k.call(this), e;
        if (d.submit !== true) {
            return;
        }
        c = a(this);
        e = c.h5Validate("allValid", {
            revalidate: d.validateOnSubmit === true
        });
        if (e !== true) {
            b.preventDefault();
            if (d.focusFirstInvalidElementOnSubmit === true) {
                var f = a(d.allValidSelectors, c).filter(function(b) {
                    return a(this).h5Validate("isValid", {
                        revalidate: false
                    }) !== true;
                });
                f.first().focus();
            }
        }
        return e;
    }, i = [], j = function q(b) {
        var c = a.extend({}, d, b, g), e = c.classPrefix + c.activeClass;
        return a.extend(c, {
            activeClass: e,
            activeClassSelector: "." + e,
            requiredClass: c.classPrefix + c.requiredClass,
            el: this
        });
    }, k = function r() {
        var b = a(this).closest("[data-h5-instanceId]");
        return i[b.attr("data-h5-instanceId")];
    }, l = function s(b) {
        var c = i.push(b) - 1;
        if (b.RODom !== true) {
            a(this).attr("data-h5-instanceId", c);
        }
        a(this).trigger("instance", {
            "data-h5-instanceId": c
        });
    };
    a.h5Validate = {
        addPatterns: function(a) {
            var b = d.patternLibrary, c;
            for (c in a) {
                if (a.hasOwnProperty(c)) {
                    b[c] = a[c];
                }
            }
            return b;
        },
        validValues: function(b, c) {
            var d = 0, e = c.length, f = "", g;
            for (d = 0; d < e; d += 1) {
                f = f ? f + "|" + c[d] : c[d];
            }
            g = new RegExp("^(?:" + f + ")$");
            a(b).data("regex", g);
        }
    };
    a.fn.h5Validate = function t(b) {
        var c, d, e;
        if (typeof b === "string" && typeof g[b] === "function") {
            e = k.call(this);
            d = [].slice.call(arguments, 0);
            c = b;
            d.shift();
            d = a.merge([ e ], d);
            return e[c].apply(this, d);
        }
        e = j.call(this, b);
        l.call(this, e);
        return g.bindDelegation.call(this, e);
    };
})(jQuery);

(function(a) {
    a.fn.printPage = function(b) {
        var c = {
            attr: "href",
            url: false,
            showMessage: true,
            message: "Please wait while we create your document"
        };
        a.extend(c, b);
        this.on("click", function() {
            d(this, c);
            return false;
        });
        function d(b, c) {
            if (c.showMessage) {
                a("body").append(h.messageBox(c.message));
                a("#printMessageBox").css("opacity", 0);
                a("#printMessageBox").animate({
                    opacity: 1
                }, 300, function() {
                    e(b, c);
                });
            } else {
                e(b, c);
            }
        }
        function e(b, c) {
            var d = c.url ? c.url : a(b).attr(c.attr);
            if (!a("#printPage")[0]) {
                a("body").append(h.iframe(d));
                a("#printPage").on("load", function() {
                    f(c);
                });
            } else {
                a("#printPage").attr("src", d);
            }
        }
        function f(b) {
            a("#printPage").show();
            frames["printPage"].focus();
            frames["printPage"].print();
            a("#printPage").hide();
            if (b.showMessage) {
                g();
            }
        }
        function g() {
            a("#printMessageBox").delay(1e3).animate({
                opacity: 0
            }, 700, function() {
                a(this).remove();
            });
        }
        var h = {
            iframe: function(a) {
                return '<iframe id="printPage" name="printPage" src=' + a + ' style="width:100%;border:none; @media print { display: block; }"></iframe>';
            },
            messageBox: function(a) {
                return "<div id='printMessageBox' style='                    position:fixed;                    top:50%; left:50%;                    text-align:center;                    margin: -60px 0 0 -155px;                    z-index:99999;                    width:310px; height:120px; font-size:16px; padding:10px; color:#222; font-family:helvetica, arial;                    opacity:0;                    background:#fff url(data:image/gif;base64,R0lGODlhZABkAOYAACsrK0xMTIiIiKurq56enrW1ta6urh4eHpycnJSUlNLS0ry8vIODg7m5ucLCwsbGxo+Pj7a2tqysrHNzc2lpaVlZWTg4OF1dXW5uboqKigICAmRkZLq6uhEREYaGhnV1dWFhYQsLC0FBQVNTU8nJyYyMjFRUVCEhIaCgoM7OztDQ0Hx8fHh4eISEhEhISICAgKioqDU1NT4+PpCQkLCwsJiYmL6+vsDAwJKSknBwcDs7O2ZmZnZ2dpaWlrKysnp6emxsbEVFRUpKSjAwMCYmJlBQUBgYGPX19d/f3/n5+ff39/Hx8dfX1+bm5vT09N3d3fLy8ujo6PDw8Pr6+u3t7f39/fj4+Pv7+39/f/b29svLy+/v7+Pj46Ojo+Dg4Pz8/NjY2Nvb2+rq6tXV1eXl5cTExOzs7Nra2u7u7qWlpenp6c3NzaSkpJqamtbW1uLi4qKiovPz85ubm6enp8zMzNzc3NnZ2eTk5Kampufn597e3uHh4crKyv7+/gAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTU4MDk0RDA3MDgxMUUwQjhCQUQ2QUUxM0I4NDA5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTU4MDk0RTA3MDgxMUUwQjhCQUQ2QUUxM0I4NDA5MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1NTgwOTRCMDcwODExRTBCOEJBRDZBRTEzQjg0MDkxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1NTgwOTRDMDcwODExRTBCOEJBRDZBRTEzQjg0MDkxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAGQAZAAAB/+Af4KDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en55QanlRpaanqKmqq6akUaRQoJF9fX9nY09Iuru8vb6/wLxeSHpMZ7KTenHIilZIzJF6W1VX1dbX2Nna29lfVE/QjX1Vf15SU0np6uvs7e7v61ZJX1te4Yy1f3lUVkr+/wADChxI8F86JVbE5LnHaEqGGv6ySJxIsaLFixgpHrEyRUkbBln+jGNoCI4fCl+sHFnJsqXLlzBjsgR4BYifBH+u0CJJKIcGCBKdCB1KtKjRo0iHxlmyJMuRGRqA/Pmyk6cgDBoyWGHKtavXr2DDeoVyZIkTKBA0TBA5xarIPzn//JQ4IqWu3bt48+rde3eLFDRxspTwg0FkVatYM0BZsqWx48eQI0ue7PgvlThQSmgoTCsfYg0lpGyhQrq06dOoU6s2LYbKFjSDc7gthLXEazO4c+vezbu3b91izFCBTXg2IQxyqYhZzry58+fQozuPstxMhuLGr/rJIEYNq+/gv7sSc71wdrh+BLxqwr69+/fw48t3T4Y9eezZ46qfz79/fzJ3NKFGeeehJ0ATZHCh4IIMNujggxA2eMcdeQiAn3HICXAHF1506OGHIIYo4oge7vGGgk1YaF52GXKxRzAwxhhMh3vsQYaKBWa4xzAy9tijHkDqwQWO52XohR5PJKnk/5JMNunkk06+QWQn5DwyQXpIPBHGllx26eWXYIbJZR1h2BHGHhau9UiVhx3ShxhrkKDFnHTWqQUfCoCggQB1MAHGn4AGKuighBYKqB1/kilACCAooAUdfNj5KB13ktCEYW0aMgUBLGDh6aegfurBEBp48AQTqKaq6qqstuqqqn8ygYsHGgzBABYvrBBqqCxA9JZnh3CBhQAzQGDsschCkAAWJ4QgwBtIQinttE/W8USHUoZgxA89lJAsssWWgIUegwBLSC02eAAHAey26y67eFCggQZGEHHCAfjmq+++/Pbrb773niCwEfNWkAYC7yZMgAcFCGJuIX30gMAAEkgwwP/FGGMsQQQX+KGBHyCHLPLIJJds8skjB2CAARlrbPEABhAwAzlVIoJmAwU0oPPOPDfAwQIVaNBBCEQXbfTRSCet9NJHB1HAAj1HzUEEAhyTKSEcoBDGq6na4cYEFogggwhiyzC22WinLYMObLfNttk6qJ122XKbLYIOIKTgNddMhJGGAYYlMkcKfVyRxBVTJK644l9kkQAGOUzwweQfsGC55Stk/gKuLzDQQgseeCDA6BmMHroHL2z+aeY/XM7DBxPEPgEQDKBR+OK4J24LArXUXMgVNYThxBJ81RWHGC1UUAEIIOxAAQUYQD4BC5lj4bkHGZQwQwIJ1NAGASgQgED/DQngAEEJJQjgAQO5Zs7CBDlgAAQFGzBfARBcKBFH8VJA8UQNTlAEFAjghdeMBg0ITGAClxCFHFhgbCJwgRACMALlXWADO3Be9HJQuRWkjgECyICx0tcCLKzAcvCT3w7qd4EKjCAAAXBBEMimAxPoAQrDUaAOAaMHAqDhLYfYAgrecISlLAEKSExiEo8gBgoMIQZQhKIF4jY2FxShgs2jABAiRz0Peo59JmQB7DCwgwuY4IUuEJsOLBDFKA4hAERU4hEXo8Q4qAEFXAhcuQTBBRSY4QhZiIMTZGIFNGzgBABIpCIXyUgADOGJU3Rb3NhmgUo+spGYVCQRRHCHKQBS/ycdOYISBKGELFhBiOAA1heq5AU4TMMKWZiCFWZJS1peYQkXMAK+BMbLXvryXv7q5S5/SUxhWiAPhvsCHQhQhiN8QQoSwMMb+jBLOIBhKuWqmR3mIAiqYKoznflDFooQgg6Y85zoTKc618nOdqYzBABQgyDWMIE0ZIAEwMsAGzwQiz9IgA5AJAQ5xoACvywBDX7hixoq0IED8PJfwRQmRCeKLyNYoA5xQEMbEGAGB8yBBC9QABlQoIUlxIEGNvhDFYC10j/QAQV1OEMYzhDTM9j0pjatwxhYMIKeFuGMPQ2qUIVqgqIO9ahITWpPTVCEDZBgD3XoggDoAAM8KMADBv/QAg5I8AQubCygDhPJAhbQhy+YtQpoTata0ZqFf8ijlnCN6yzhkQS52jWuq+zDHQiwAjjc4QoOyEAGOHCElZahAQEN5x9+lpNqmPWxkH3sSjszWXBa9rJrXetlN7vZKpw1CWLYgxisUAUoJGgL2FSBAR5WpQZEoA+Jo6tsZ0vb2tL1C+jILeKqkYRRUvUKhsiHDxZwhYgU5LjITa5yl9vWUkZklqUMyQMG4DvP9EECN7CCEwQpk+5697vgDa9EjjDIl2ShCmUwwCqD+4cBLOAISAQLHb8yX7HY9774Hcsc5zhfQUohMHwYwBfc5M8GYIZ4klmCa44oyKWcRYkQjrD/hCdM4Qg3WAoHrQxTRINhu6yBAG1h7wAK8BrVmEENpFkOEvjA4jhJ6sUwjrGM7fQAOuwhDqs5DRr40IYQQ6y9NFDDctRA5CITOTivKMAFJhgAJsPwyVCOspSnTOUqx/ACBuiOkbdcZDE8AAE+Ppc/aRCgPNTnPXlowh3EYAMLoOzNcI6zyYawADX4pwk3kEOY9ygBGiDhDXc40RsGPWguIAFAWADZx+bF6EY7+tGQjrSkHw2yCQCI0JgmtIsWgIAkELhiZ0DCMHi0iz08YdDIcbTHJs3qVrv6Y0VowotmhIQGyMHT5aoFLQwAgzGUCac3LVMYvHClVc/L2K9OtrL9/1AELtQU2MEGQwHkYAVEXBcGKXDDGGTlhm53ewzb1sOVlE3ucjPaDyNAAhO8zW5vj0EBNGADcAdBjnxEkwQqUIC+981vBYThA6tGtrkHHmk/mOAJ/U64AtYwhwEUYsDdHAAbyvCoFNBhDRjPOKWYMG6Ce3zSfqjAEzJOcpKngA8okAB7VUoDAjjgATCPecxJQIIHjIEHApezznWu6grYQeZAh3nNCTAAc1VlATVYgAOWfoOlO93pCmCBBkLAaBkIwQVYz7rWt871rns961d3QQBkQPWp++ECbni62p1uA6JX1zMLSEAEOGADuo/17jYYKx9YUM6yV2CFGwi84AdP+P/CG/7wgc/gBihwgQ7My/EXUMDP7k75uzegBj5AKyG8+Ye4R6AAn4+A6Ecv+gKQYAUdIJjQdgA72bn+9bCPvexfz0HJYeAAHjNCCC6QAtCT/vcF8EECFqBHlebjARnwgQFosPyVOZ8GzH/AChz6MSOwYH0MyL72t8/97nv/+9pfnwBWQASPHcAIIFiD89fP/gLggPhifosCWlCxl7WsYjBwwAoQGQI/AAAC5MM9AjiABFiABniAA4gDM0A+OuAHIUAEBwACWgADLXN/BpABD6BHwAIGHpAGA1BVMDAHIiiCMAADbHADKwAAMdB/OgAHbNAFMBiDMjiDNFiDNhiDbJD/BmnABgNQBA6YSE7FBiM4hEToAQqQWFVhBxnQBXiQg3igg1CIB3PQBQuwAkOgA/0XAKVXAFzYhV74hWAYhmL4hT7gADvgMTEwBBvwAHAAhW7ohl3gAWMQXFVSBwJAAC7YBSgAB3zIhy+IAjbAAGHTfxuQAg5QBoiYiIq4iIzYiI6oiIdYBirAAh6zRjtAAnjYh5rIh3roAUzwMLr2BCVQA3gYPu8SPnKwAC8gAkLQAX7AAlGgbeA2i7RYi7Z4i7hIi92mAEiQAPMiAkGwhnKgMO7SBgJgB5wXUFeABMoiB20gB9AYjc5IADXQAC/gAiZAdQkABQhCBt74jeAYjuI4/47k6I1c0B5LgAdUB0NAUAY1II3wKAcIkAAlUAfVNQhXcAczMAME4Ixt8I8A+Y840AAeUASNFwKrpQThtZDd5QRZsARH8AcPgHsjYAJA8AA9EJAa+T3mUwe4ZgjekAArIELFkiz7WAJ4gAEVsAHm5ADfxFkwGZMxqVKCUAfl93cVYADe8i3GUixYAAF3cI8icQVHkAIGwAZIWYNPaAAthAEhcABz+DDIMA61gAZudgFAIAQ0gINp0AUuiJRsQABZtQUQF1bdRJRn8AB8YHF00JZtiXEpAAYfsAEs0AFDkEdSiQwDNg4icBIfUAFnYHEZlwIqcHFrYIhjEAdToHluUv8FUWADMKCDYDmZeEADF4ABL9ABOtBPJDESwOWDGLACLuADafCEO7iDbAADcIACC8AFnlZW1tYHSjAGcFACpTM6uHmbMpADAtABQpCXshBOtSAvLJABQ0A6t4mbo0MAfCAFewmcVTAFTvAGZ2AHfhIobqAANjACLJAAIVABxWcVK6ABWJAAMrAAYwAGZ4Aq1mmdbnAHUFCWsalSuFVXFVFKRwAGFbACNdABHwBW4bBetdADIeABbSACYwAFpiRKKtFWU3AFA1ZZlmAFXlABAjAHRiAAAMoTA9ABMzAHQWAH1cYM5GAFdVABEyAAB0AAZukWDtABxSkCClBtugYKtLD/jCMgAwHQAQ0DnOHABEYQQSLgBjS6oZyQBHVwAS5wAUQAUFfDEFRABAFQAS6gAKNUo59QC0lgB/SzAjJQBwWiBCKAATxQAWPwmka6CUnABQzwAV2wA1KQpveQBSyAAizAA2eQBDvho5ZAC95gAB+ABxngBGVVWTJ5qIhqWX8QByVgABPQBVGwXi36CUnwBDDQOa+ZqJq6qTkhkm1QB4VlXTYqEkhKAC8wb+eRAALgBnGgE3yaCbpWBVvQAAgAGIKUFLiaq7pKFAOAB2igBK/aCWZ1BgQgANajOruSrMq6rMz6KS1QAyqgBJ7FE7TgBHmwNW7AN9q6rVxzBnngBMAVOaye4Fl1lQS5c67omq7qmjvmKp9WIa4FEg75QAu+Q62KVSCbmq+JGq+5ZhxPyq8AG7ACO7AEKwiBAAA7) center 40px no-repeat;                    border: 6px solid #555;                    border-radius:8px; -webkit-border-radius:8px; -moz-border-radius:8px;                    box-shadow:0px 0px 10px #888; -webkit-box-shadow:0px 0px 10px #888; -moz-box-shadow:0px 0px 10px #888'>                    " + a + "</div>";
            }
        };
    };
})(jQuery);

(function(a) {
    AjaxDocumentLoader = function(b) {
        var c = {
            modal_title: "traitement en cours",
            modal_content: "Merci de patienter...",
            modalError_title: "Erreur",
            modelError_content: "Une erreur est survenue au chargement de la page...",
            selectors: ".container > .row-fluid:first"
        };
        this.opts = c;
        this.xhr = null;
        if (b) {
            this.opts = a.extend(c, b);
        }
    };
    AjaxDocumentLoader.prototype.Error = function() {
        var b = a("#ald-loading").find(".modal-header");
        b.prepend("<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>");
        b.find("h3").replaceWith('<h3 style="width:100%">' + a.AjaxOpts.modalError_title + "</h3>");
        var c = a("#ald-loading").find(".modal-body");
        c.find("p").replaceWith("<p>" + a.AjaxOpts.modelError_content + "</p>");
    };
    AjaxDocumentLoader.prototype.abort = function() {
        if (this.xhr) {
            a("#ald-loading").remove();
            this.xhr.abort();
        }
    };
    AjaxDocumentLoader.prototype.displayModal = function() {
        a("html").append('<div id="ald-loading" class="modal hide fade"><div><h3 style="width:100%">' + this.opts.modal_title + '</h3></div><div class="modal-body visible-desktop"><p>' + this.opts.modal_content + "</p></div></div>");
        var b = a(this.opts.selectors).width() / 2;
        var c = a(window).height() / 2 - a("#ald-loading").height() / 2;
        var d = a(window).width() / 2 - a("#ald-loading").width() / 2;
        a.AjaxOpts = this.opts;
        a("#ald-loading").modal({
            backdrop: false,
            keyboard: false,
            show: true
        }).css({
            "margin-left": "0px",
            "text-align": "center",
            top: c + a(window).scrollTop() + "px"
        });
    };
    AjaxDocumentLoader.prototype.load = function(b) {
        if (b) {
            this.abort();
            this.displayModal();
            if (a("#ald-loading > img.loading").length > 0) {
                a("#ald-loading > img.loading").load(function() {
                    window.location.href = b;
                });
            } else {
                window.location.href = b;
            }
        }
    };
    window.AjaxDocumentLoader = new AjaxDocumentLoader();
})(jQuery);

(function($) {
    var Carstore = function() {
        this.data = {
            formValidationSelectors: "form.form-flags",
            errorFormFieldClassName: "ui-state-error",
            successFormFieldClassName: "ui-state-valid",
            inputSliderSelectors: "#price, #environment,#distance,#mobile-price",
            geolocationFieldsSelectors: "input.geolocation,body.promo input#tbAddress",
            geolocationButtonsSelectors: "input.geo,button.geo",
            currentGeolocationButtonsSelectors: "input.currentGeo,button.currentGeo",
            formInputCitySelectors: "form input.city",
            popoverSelectors: '[data-toggle="popover"]',
            tooltipSelectors: '[data-toggle="tooltip"]',
            multiselectSelectors: '[multiple="multiple"]',
            ajaxTipsSelectors: '[data-toggle="tooltip"][data-AjaxContentUrl]',
            eventUnveilSucess: "unveil-dataSucess",
            eventUnveilRefresh: "unveil-dataRefresh",
            CheckboxSelectors: 'label[class$="alternative"][data-location],.color-choice label.color',
            markerGeneratorUrl: "/Images/ACFR/classic/Icons/map-marker-active.png",
            markerGeneratorUrlOff: "/Images/ACFR/classic/Icons/map-marker.png",
            carAddListernerSelector: "a[data-wrapperCarList]",
            minCarModelChoices: 1,
            maxCarModelChoices: 3
        };
        this.listeners = {
            common: [ "loadCommonFormValidation", "loadToogleTabs", "loadCommonSelectMultiple", "loadUnveil", "loadCommonGeolocation", "loadCommonPopovers", "loadCommonTooltips", "loadCommonAjaxContentTips", "loadCommonScrollToTop", "loadCommonPrintActions", "loadCommonIEPlaceholderFix", "loadWCBUriListener", "loadPopinLocationInput", "loadCommonMap", "loadSendDataForm", "loadAjaxLoaderBtnForms", "loadLegalNotice", "loadCommonCart", "loadCarAddListener", "loadCommonInputSliders", "loadCarselectorScroll", "loadDropDownScroll", "loadMapList", "loadTabSwitcher", "ResponsiveScrollModal", "loadScrollTopLink", "loadDatePicker" ],
            home: [ "loadNumbersCarsAvailable", "loadManageSelectboxCars", "loadManageSelectboxRetailers", "loadToogleForms", "loadSliderPromo", "loadSliderModel", "loadHomeSearchForm" ],
            promo: [ "loadSliderPromo", "loadHomePromo" ],
            list: [ "loadModalFilters", "loadMultiSelectEvent", "loadCheckBoxEvent", "loadPaginationEvent", "loadDDLonChange", "loadNumbersCarsAvailable", "loadManageSelectboxCars", "loadManageSelectboxRetailers" ],
            product: [ "loadSliderVehicle", "loadPrintPage", "loadSFG", "loadManageSelectboxRetailers" ],
            confirmation: [ "loadPrintPage" ],
            print: [ "initPrintPage" ],
            retailers: [ "loadRetailers" ],
            mentions: [ "loadPrintPage" ],
            accostage: [ "loadDealerGeolocation" ]
        };
        this.init();
    };
    Carstore.prototype.debug = function() {};
    Carstore.prototype.random = function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    };
    Carstore.prototype.loadCommonScreenTypes = function() {
        this.SCREEN_TYPE_DESKTOP = 2;
        this.SCREEN_TYPE_TABLET = 1;
        this.SCREEN_TYPE_PHONE = 0;
    };
    Carstore.prototype.getScreenType = function() {
        var a = 2;
        if ($(window).width() <= 979) {
            a = 1;
        }
        if ($(window).width() <= 480) {
            a = 0;
        }
        return a;
    };
    Carstore.prototype.init = function() {
        this.loadListeners("common");
        if ($("body").hasClass("home")) {
            this.loadListeners("home");
        }
        if ($("body").hasClass("list")) {
            this.loadListeners("list");
        }
        if ($("body").hasClass("product")) {
            this.loadListeners("product");
        }
        if ($("body").hasClass("confirmation")) {
            this.loadListeners("confirmation");
        }
        if ($("body").hasClass("promo")) {
            this.loadListeners("promo");
        }
        if ($("body").hasClass("print")) {
            this.loadListeners("print");
        }
        if ($("body").hasClass("retailers")) {
            this.loadListeners("retailers");
        }
        if ($("body").hasClass("mentions")) {
            this.loadListeners("mentions");
        }
        if ($("body").hasClass("accostage")) {
            this.loadListeners("accostage");
        }
    };
    Carstore.prototype.loadDatePicker = function() {
        var a = this;
        var b = ".datepicker";
        function c(a) {
            var b = {};
            if ($(a).attr("data-closeText")) b.closeText = $(a).attr("data-closeText");
            if ($(a).attr("data-prevText")) b.prevText = $(a).attr("data-prevText");
            if ($(a).attr("data-nextText")) b.nextText = $(a).attr("data-nextText");
            if ($(a).attr("data-currentText")) b.currentText = $(a).attr("data-currentText");
            if ($(a).attr("data-monthNames")) b.monthNames = $(a).attr("data-monthNames").split(",");
            if ($(a).attr("data-monthNamesShort")) b.monthNamesShort = $(a).attr("data-monthNamesShort").split(",");
            if ($(a).attr("data-dayNames")) b.dayNames = $(a).attr("data-dayNames").split(",");
            if ($(a).attr("data-dayNamesShort")) b.dayNamesShort = $(a).attr("data-dayNamesShort").split(",");
            if ($(a).attr("data-dayNamesMin")) b.dayNamesMin = $(a).attr("data-dayNamesMin").split(",");
            if ($(a).attr("data-dateFormat")) b.dateFormat = $(a).attr("data-dateFormat");
            if ($(a).attr("data-firstDay")) b.firstDay = $(a).attr("data-firstDay");
            if ($(a).attr("data-buttonImage")) b.buttonImage = $(a).attr("data-buttonImage");
            var c = "fr-FR";
            if ($(a).attr("data-culture")) c = $(a).attr("data-culture");
            $.datepicker.regional[c] = $.extend({}, $.datepicker.regional[""], b);
            return c;
        }
        $(b).each(function(a, b) {
            var d = c(b);
            $(b).datepicker($.datepicker.regional[d]);
        });
        $(".ui-datepicker-trigger").on("click", function(a) {
            a.preventDefault();
            $(this).prev(b).focus();
        });
    };
    Carstore.prototype.loadDealerGeolocation = function() {
        var a = this;
        if ($("#postalcode").val() && $("#postalcode").val().length > 0) {
            $("#postalcode").change();
            $("#postalcode").on("geolocated", function() {
                if (!$(this).data("loadMapOneTime")) {
                    $(this).data("loadMapOneTime", true);
                    if ($(this).data("geo-latitude") && $(this).data("geo-longitude")) {
                        $("[href=#my-modal-map]").click();
                    }
                }
            });
        }
    };
    Carstore.prototype.loadLegalNotice = function() {
        var a = this;
        function b() {
            $("a[href=#my-modal-legalNotice][ref][data-local]").each(function(a, b) {
                if (!$(b).data("isMention")) {
                    $(b).data("isMention", true);
                    $(b).on("click", function(a) {
                        var b = $(this).attr("ref");
                        var c = $(this).attr("data-local");
                        $.ajax({
                            url: b,
                            type: "get",
                            dataType: "html",
                            success: function(a) {
                                $(c).empty();
                                $(c).html(a);
                            }
                        });
                    });
                }
            });
        }
        b();
    };
    Carstore.prototype.loadListeners = function(a) {
        var b = this;
        for (var c in b.listeners[a]) {
            var d = b[b.listeners[a][c]];
            if (typeof d === "function") {
                d.call(b);
            }
        }
    };
    Carstore.prototype.loadSessionCookie = function() {
        function a() {
            var a = getCookie("TEALEAF_SESSION");
            if (!a) {
                a = (b() + b() + "-" + b() + "-4" + b().substr(0, 3) + "-" + b() + "-" + b() + b() + b()).toLowerCase();
                setCookie("TEALEAF_SESSION", a, null);
            }
        }
        function b() {
            return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
        }
        a();
    };
    Carstore.prototype.TLTAjaxComplete = function() {
        $(document).ajaxComplete(function(a, b, c) {
            if (typeof TLT == "object" && typeof TLT.rebind == "function") {
                TLT.rebind();
            }
        });
    };
    Carstore.prototype.loadNumbersCarsAvailable = function() {
        var a = this;
        var b = ".car-availability";
        function c() {
            $(b).each(function(a, b) {
                if (!$(b).data("isCarAvailability")) {
                    $(b).data("isCarAvailability", true);
                    $("#car-string").remove();
                    var c = $("<span id='car-string'></span>");
                    var d = $(b).text().toString();
                    var a = 0;
                    while (d[a]) {
                        var e = d[a];
                        c.append('<span class="alone-number-box"><span class="alone-number">' + e + "</span></span>");
                        a++;
                    }
                    c.insertAfter($(b));
                }
            });
        }
        c();
    };
    Carstore.prototype.loadTabSwitcher = function() {
        var a = this;
        var b = ".tab-swicher a";
        var c = ".cs-tab";
        $(b).each(function(a, b) {
            if (!$(b).data("isTabSwitcher")) {
                $(b).data("isTabSwitcher", true);
                $(b).on("click", function(a) {
                    var d = $(b).attr("href");
                    if (d.indexOf("#") == 0) {
                        a.preventDefault();
                        var e = $(b).attr("class");
                        var f = $(b).parents(".tab-swicher:first").parent();
                        var g = f.find(c);
                        var h = f.find(d);
                        if (h && h.length > 0) {
                            f.find(".tab-swicher .active,.cs-tab.active").removeClass("active");
                            h.removeClass("active").addClass("active");
                            if (e) {
                                $(b).parents(".tab-swicher:first").parent().attr("class", "layer").addClass(e);
                            }
                        }
                        $(b).parent().removeClass("active").addClass("active");
                        $scrollables = $(b).parent().find(".scrollable");
                        if ($scrollables && $scrollables.length > 0) {
                            $scrollables.each(function(a, b) {
                                if ($(b).data("hcScroll") && $(b).is(":visible")) {
                                    $(b).hcScroll("refresh");
                                }
                            });
                        }
                        $dropdownmenu = f.find(".dropdown-menu");
                        if ($dropdownmenu && $dropdownmenu.length > 0) {
                            $dropdownmenu.each(function(a, b) {
                                if ($(b).data("hcScroll")) {
                                    $(b).hcScroll("refresh");
                                }
                            });
                        }
                    }
                });
            }
        });
    };
    Carstore.prototype.loadResetSelectBoxCars = function() {
        var a = this;
        var b = ".car-list-item li.unselected";
        var c = ".red-cross";
    };
    Carstore.prototype.loadManageSelectboxRetailers = function() {
        var a = this;
        var b = "#retailers-list #select-place-holder";
        var c = "#retailers-list-item li.unselected";
        function d() {
            $(document).on("click", c, function(b) {
                $("li[class!=unselected]", $(this).parent()).addClass("unselected");
                f($(this).attr("id"), $(this).text(), this);
                var c = $(this).find("a[href]");
                var d = c.attr("href");
                var e = c.attr("data-loaderTitle");
                var g = c.attr("data-loaderContent");
                if (!!d && d != "#") {
                    b.preventDefault();
                    if (!!e && !!g) {
                        var h = a.getAjaxLoader(e, g);
                        h.load(d);
                    } else {
                        window.location.href = d;
                    }
                }
            });
        }
        function e() {
            $(document).on("click", b, function(b) {
                var c = $(this);
                var d = c.parent().find("#retailers-list-item");
                if (d && (d.length == 0 || d.children().length == 0)) {
                    b.preventDefault();
                    if (d.length > 0) {
                        d.parents(".control-group:first").removeClass("open");
                    }
                    var e = c.parents(".input-box:first");
                    if (e && e.length > 0) {
                        var f = e.find(".geolocation");
                        f.parents(".control-group").removeClass("error").addClass("error");
                        f.removeClass(a.data.errorFormFieldClassName).addClass(a.data.errorFormFieldClassName);
                    }
                }
            });
        }
        function f(a, b, c) {
            $(c).removeClass("unselected");
            var d = $(c).parents("#retailers-list:first");
            var e = $(".retailer-selected", d);
            e.val(a);
            e.change();
            var f = $("#select-place-holder,#retailers-select-place-holder", d);
            if (!!f && f.length > 0) {
                f.text(b);
            }
        }
        d();
        e();
    };
    Carstore.prototype.ClearAllSelectedModel = function() {
        var a = this;
        $(".car-list-item li").removeClass("unselected").addClass("unselected");
        $(".item > .cars-infos > .css-label.checked").removeClass("checked");
        $(".item > .cars-infos > .css-label.disabled").removeClass("disabled");
        $(".car-selected-list").val("");
        $(".car-choices").empty();
        $(".car-list").show();
        $(".nbModel > strong").text("0");
        $("#carSelector .citroen-validate-button").removeClass("error").addClass("error");
    };
    Carstore.prototype.loadManageSelectboxCars = function() {
        var a = this;
        var b = ".car-list .dropdown-toggle";
        var c = ".car-list-item li.unselected";
        var d = ".red-cross";
        var e = $(".selected-car").length;
        function f() {
            $(document).on("click", b, function(b) {
                var c = $(this);
                var d = c.parents("form#form-retailers:first");
                if (d && d.length > 0) {
                    var e = d.find(".retailer-selected");
                    if (e && e.length > 0 && !e.val()) {
                        b.preventDefault();
                        c.parents(".control-group:first").removeClass("open");
                        var f = d.find("#retailers-list");
                        if (f && f.length > 0) {
                            f.removeClass("error").addClass("error");
                            e.removeClass(a.data.errorFormFieldClassName).addClass(a.data.errorFormFieldClassName);
                        }
                    }
                }
            });
        }
        function g() {
            $(document).on("click", c, function(b) {
                b.preventDefault();
                var c = $(this).find("a[href]");
                var d = c.attr("href");
                var e = c.attr("data-param");
                var f = c.attr("data-loaderTitle");
                var g = c.attr("data-loaderContent");
                m($(this).attr("id"), $(this).text(), d, e, f, g);
                if (!!d && d != "#") {
                    if (!!e) {
                        d = d.replace(e, $(".car-selected-list").val());
                    }
                    var h = a.getAjaxLoader(f, g);
                    h.load(d);
                }
            });
        }
        function h() {
            $(".item").on("click", function() {
                var a = $(this).find(".figcaption ").text();
                var b = $(this).find(".css-label");
                if (b.hasClass("disabled")) {
                    return false;
                }
                if (!b.hasClass("checked")) {
                    b.addClass("checked");
                    m(b.parent().find("span.hidden").text(), a);
                } else {
                    b.removeClass("checked");
                    n(b.parent().find("span.hidden").text());
                }
            });
        }
        function i() {
            $(document).on("click", d, function(b) {
                b.preventDefault();
                n($(this).parent().children(".selected-car-text").attr("id"), $(this).parent().children(".selected-car-text").text());
                var c = $(this).attr("href");
                if (!!c && c != "#") {
                    var d = $(this).attr("data-param");
                    if (!!d) {
                        c = c.replace(d, $(".car-selected-list").val());
                    }
                    var e = a.getAjaxLoader($(this).attr("data-loaderTitle"), $(this).attr("data-loaderContent"));
                    e.load(c);
                }
            });
        }
        function j() {
            $("#carSelector .citroen-validate-button").on("click", function(b) {
                b.preventDefault();
                var c = $(this).attr("href");
                if (!!c && c != "#") {
                    var d = $(this).attr("data-param");
                    if (!!d) {
                        c = c.replace(d, $(".car-selected-list").val());
                    }
                    var e = a.getAjaxLoader($(this).attr("data-loaderTitle"), $(this).attr("data-loaderContent"));
                    e.load(c);
                }
            });
        }
        function k() {
            $(".car-selected-list").val("");
            $(".selected-car-text").each(function(a, b) {
                var c = $(".car-selected-list").val();
                $(".car-selected-list").val(c + $(b).attr("id") + ";");
                $(".car-selected-list").change();
            });
            g();
            i();
            h();
            j();
            f();
        }
        function l() {
            var a = $(".car-choices:visible:first > .selected-car").length;
            $(".nbModel > strong").text(a);
            $("#carSelector .form-actions").removeClass("error");
            $("#carSelector .citroen-validate-button").removeClass("error");
            if (a == 0) {
                $("#carSelector .form-actions").addClass("error");
                $("#carSelector .citroen-validate-button").addClass("error");
            }
        }
        function m(a, b, c, d, e, f) {
            var g = $(".car-selected-list", "form.active:visible").val();
            if (g.indexOf(a) < 0) {
                $(".car-selected-list", "form.active:visible").val(g + a + ";");
                $(".car-selected-list", "form.active:visible").change();
                if ($(".selected-car", "form.active:visible").length < 3) {
                    var h = $('<a class="red-cross"></a>').attr("href", !!c ? c : "#");
                    if (!!d) h.attr("data-param", d);
                    if (!!e) h.attr("data-loaderTitle", e);
                    if (!!f) h.attr("data-loaderContent", f);
                    $('<li class="selected-car"><span class="selected-car-text" id="' + a + '">' + b + "</span></li>").append(h).appendTo(".car-choices");
                    var i = $(".item span.hidden").filter(function() {
                        return $(this).text() === a;
                    });
                    if (i.length > 0) {
                        i.parent().find(".css-label").addClass("checked");
                    }
                    var j = $(".car-list-item .unselected").filter(function() {
                        return $(this).attr("id") === a;
                    });
                    if (j.length > 0) {
                        j.removeClass("unselected");
                    }
                    var k = $(".bloc-search-box form.active:visible");
                    var m = k.innerHeight() + 70;
                    if (m > k.parents(".bloc-search-box").innerHeight()) {
                        k.parents(".bloc-search-box").height(m);
                    }
                }
                if ($(".selected-car", "form:visible").length >= 3) {
                    $(".car-list").css({
                        display: "none"
                    });
                    $(".car-list").parents(".bloc-search:first").removeClass("selectedCarsMax").addClass("selectedCarsMax");
                    $(".css-label:not('.checked')").addClass("disabled").attr("title", $("#tabs-1 .subtitle-lightbox").text());
                }
                l();
                r();
                s($("form:visible"));
            }
        }
        function n(a) {
            var b = $(".item span.hidden").filter(function() {
                return $(this).text() === a;
            });
            if (b.length == 1) {
                b.parent().find(".css-label").removeClass("checked");
            }
            var c = $("form:visible .car-selected-list").val();
            if (c) {
                var d = c.replace(a + ";", "");
                $(".car-selected-list").val(d);
                $(".car-selected-list").change();
            }
            $(".car-choices .selected-car-text[id=" + a + "]").parent().remove();
            $(".css-label.disabled").removeClass("disabled").removeAttr("title");
            $(".car-list").css({
                display: "block"
            });
            $(".car-list").parents(".bloc-search:first").removeClass("selectedCarsMax");
            $(".car-list-item li:not('unselected')").filter(function() {
                return $(this).attr("id") === a;
            }).addClass("unselected");
            l();
            r();
            s($("form:visible"));
        }
        function o(a) {
            var b = "";
            var c = $(".car-selected-list", a);
            if (!!c && c.length > 0 && c.val().length > 0) {
                var d = c.attr("data-name");
                b = d + "=" + c.val();
            }
            return b;
        }
        function p(a) {
            var b = "";
            var c = $(".noUiSlider", a);
            if (c && c.length > 0) {
                var d = c.data("slider-min");
                var e = c.data("slider-max");
                var f = c.val();
                var g = f[0];
                var h = f[1];
                var b = "";
                if (d != g) {
                    b += b && b.length > 0 ? "&" : "";
                    b += c.attr("data-minpriceuri") + "=" + g;
                }
                if (e != h) {
                    b += b && b.length > 0 ? "&" : "";
                    b += c.attr("data-maxpriceuri") + "=" + h;
                }
            }
            return b;
        }
        function q(a, b) {
            var c = "";
            var d = $("input.geolocation", a);
            if (!!d && d.length > 0 && d.val().length > 0) {
                if (!skipLocation) {
                    c += "lat=" + d.data("geo-latitude");
                    c += "&lng=" + d.data("geo-longitude");
                }
                if (c.length > 0) c += "&";
                c += "Cit=" + encodeURIComponent(d.val());
            }
            return c;
        }
        function r() {
            var a = $("form.form-car-selector");
            a.each(function(a, b) {
                if ($(b).is(":visible")) {
                    var c = "#";
                    var d = $('ul[id=retailers-list-item]> li:not(".unselected")', $(b));
                    if (!!d && d.length > 0) {
                        var e = d.attr("data-value");
                        c = e.split(";")[1];
                    } else {
                        c = $(b).attr("data-uri");
                        var f = q($(b));
                        if (!!f && f.length > 0) {
                            c += (c.indexOf("?") >= 0 ? "&" : "?") + f;
                        }
                    }
                    var g = o($(b));
                    if (!!g && g.length > 0) {
                        c += (c.indexOf("?") >= 0 ? "&" : "?") + g;
                    }
                    var h = p($(b));
                    if (h && h.length > 0) {
                        c += (c.indexOf("?") >= 0 ? "&" : "?") + h;
                    }
                    $(b).attr("action", c);
                }
            });
        }
        function q() {
            var a = "";
            var b = $("input.geolocation");
            if (b.length > 0 && b.val().length > 0) {
                a += "lat=" + b.data("geo-latitude");
                a += "&lng=" + b.data("geo-longitude");
                a += "&Cit=" + encodeURIComponent(b.val());
            }
            return a;
        }
        function s(a, b) {
            if (b || a.find(".verify").length > 0) {
                var c = true;
                $(".car-list", a).removeClass("error");
                $(".error-message", a).hide();
                $("#postalcode", a).parents(".input-box").removeClass("error");
                if ($(".car-list", a).length > 0) {
                    if (!$(".selected-car", a) || $(".selected-car", a).length == 0) {
                        c = false;
                        $(".car-list", a).addClass("error");
                    }
                }
                if ($("#postalcode", a).length > 0) {
                    if (!$("#postalcode", a).val() || !$("#city-lat", a).val() || !$("#city-lng", a).val()) {
                        c = false;
                        $("#postalcode", a).parents(".input-box").addClass("error");
                    }
                }
                if (c) {
                    return true;
                } else {
                    $(".error-message", a).show();
                    return false;
                }
            }
        }
        k();
    };
    Carstore.prototype.loadAjaxLoaderBtnForms = function() {
        function a(a) {
            var b = {
                btnLoaderContent: ""
            };
            opts = {};
            if ($(a).attr("data-btnLoaderContent")) opts.btnLoaderContent = $(a).attr("data-btnLoaderContent");
            opts = $.extend(b, opts);
            return opts;
        }
        function b() {
            $("[data-btnLoaderContent]").each(function(b, d) {
                var e = a(d);
                if (!$(d).data("btnLoaderCreate")) {
                    $(d).data("btnLoaderCreate", true);
                    var f = c();
                    $(d).after("<div class='btnLoader' data-guid='" + f + "'>" + e.btnLoaderContent + "</div>");
                    $(d).removeClass("ui-btnLoader").addClass("ui-btnLoader").removeAttr("data-guid").attr("data-guid", f);
                }
            });
        }
        function c() {
            var a = new Date();
            return "" + a.getHours() + a.getMinutes() + a.getSeconds() + a.getMilliseconds();
        }
        $.gup = function(a, b) {
            a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var c = "[\\?&]" + a.toLowerCase() + "=([^&#]*)";
            var d = new RegExp(c);
            var e;
            if (b != null && b != "") {
                e = d.exec(b.toLowerCase());
            } else {
                e = d.exec(window.location.href.toLowerCase());
            }
            if (e == null) return ""; else {
                return e[1];
            }
        };
        $(document).ajaxSend(function(a, b, c) {
            var d = $.gup("guid", c.url);
            if (d) {
                var e = $('.ui-btnLoader[data-guid="' + d + '"]');
                var f = $('.btnLoader[data-guid="' + d + '"]');
                if (e && f && f.length > 0 && e.length > 0) {
                    e.hide();
                    f.show();
                }
            }
        });
        $(document).ajaxComplete(function(a, b, c) {
            var d = $.gup("guid", c.url);
            if (d) {
                var e = $('.ui-btnLoader[data-guid="' + d + '"]');
                var f = $('.btnLoader[data-guid="' + d + '"]');
                if (e && f && f.length > 0 && e.length > 0) {
                    e.show();
                    f.hide();
                    e.parents("form:first").find("input[type=text],textarea,select").val("");
                    e.parents("form:first").find("input[type=radio]:checked,input[type=checkbox]:checked").removeAttr("checked");
                    e.parents("form:first").find(".control-group.success").removeClass("success");
                    $.refreshGITID();
                }
            }
        });
        b();
    };
    Carstore.prototype.loadScrollTopLink = function() {
        var a = this;
        var b = ".ScrollTop a";
        function c() {
            $(b).each(function(a, b) {
                if (!$(b).data("isScrollTop")) {
                    $(b).data("isScrollTop", true);
                    $(b).on("click", function(a) {
                        a.preventDefault();
                        $("html,body").animate({
                            scrollTop: 0
                        }, "fast");
                    });
                }
            });
        }
        c();
    };
    Carstore.prototype.ResponsiveScrollModal = function() {
        var a = this;
        var b = ".modal:not(#my-modal-fullscreen):not(#my-modal-confirmation-message):not(#ald-loading)";
        a.ModalResponsiveSettings = {
            bodyScroll: true,
            htmlScroll: true,
            responsives: [ {
                breakpoint: 767,
                settings: {
                    bodyScroll: false,
                    htmlScroll: false
                }
            } ]
        };
        function c(a) {
            var b = a.responsives;
            var c = a;
            if (b && b.length > 0) {
                var d;
                var e;
                var f = $(window).width();
                for (var g = 0; g < b.length; g++) {
                    var h = b[g].breakpoint;
                    if (h && f <= h && (!d || d > h)) {
                        d = h;
                        e = b[g].settings;
                    }
                }
                if (e) c = $.extend({}, a, e);
            }
            if (c.bodyScroll) {
                $("body").removeClass("noScrollBar");
            } else {
                $("body").removeClass("noScrollBar").addClass("noScrollBar");
            }
        }
        $(b).on("shown", function() {
            c(a.ModalResponsiveSettings);
        }).on("hide", function() {
            c({
                bodyScroll: true,
                htmlScroll: true
            });
        });
        $(window).on("resize", function() {
            if ($(b + ":visible").length > 0) {
                c(a.ModalResponsiveSettings);
            } else if ($("#hiddenScrollWrapper").length > 0) {
                c({
                    bodyScroll: true,
                    htmlScroll: true
                });
            }
        });
    };
    Carstore.prototype.loadModalFilters = function() {
        var a = this, b, c = "#Form-AjaxFilter-panel", d = "data-uri", e = "data-param", f = ".control-group[data-ajaxmethod]";
        var g = false;
        $(".modal-panel.first").on("shown", function() {
            if (!g) {
                g = true;
                b = h();
                setTimeout(function() {
                    if ($("#my-modal-panel").find("#mobile-filters").length > 0) {
                        $(window).trigger(a.data.eventUnveilRefresh);
                    }
                }, 500);
            }
        }).on("hide", function() {
            g = false;
            var d = h();
            if (!!d && d.length > 0 && d != b) {
                var e = a.getAjaxLoader($(c).attr("data-loaderTitle"), $(c).attr("data-loaderContent"));
                e.load(d);
            }
        });
        function h() {
            var a = $(c);
            var b = a.attr(d);
            var f = a.attr(e);
            if (f && f.length > 0) {
                b += f.indexOf("?") >= 0 ? "" : "?";
                b += f;
            }
            return b;
        }
        function i(a) {
            if (!a) return;
            var b = $(c);
            var f = a;
            var g = a.indexOf("?");
            var h = "";
            if (g >= 0) {
                f = a.substring(0, g);
                h = a.substring(g);
            }
            b.attr(d, f);
            b.attr(e, h);
        }
        function j(a, b, d) {
            if (!a && b) {
                i(b);
                return;
            }
            if (!a) return;
            if (d) $(c).removeAttr(e);
            var f = h();
            if (f && f.indexOf(a) >= 0) {
                var g = f.indexOf(a);
                f = f.substring(0, g - 1);
            }
            if (b) {
                f += f.indexOf("?") >= 0 ? f.length == 1 ? "" : "&" : "?";
                f += a + "=" + b;
            }
            i(f);
        }
        function k() {
            var b = $(c).find(f);
            b.each(function(b, c) {
                $(c).removeAttr("unveil-url");
                $(c).removeClass("unveil");
                var d = h();
                var e = $(c).attr("data-replace");
                if (e) {
                    e = e.replace("[", "").replace("]", "");
                }
                var f = e ? true : false;
                if (e && e.indexOf(";") >= 0) {
                    var g = e.split(";");
                    for (var b = 0; b < g.length; b++) {
                        if (g[b] && d.indexOf(g[b]) >= 0) {
                            f = false;
                            break;
                        }
                    }
                } else if (e && d.indexOf(e) >= 0) {
                    f = false;
                }
                if (f) {
                    var i = $(c).attr("data-ajaxmethod");
                    if (!!i && !!d) {
                        d += d.indexOf("?") >= 0 ? "&" : "?";
                        d += "AjaxRequest=" + i;
                        $(c).attr("unveil-url", d);
                        $(c).removeClass("unveil").addClass("unveil");
                        if (i == "") {
                            a.ClearAllSelectedModel($("#mobile-filters .car-selected-list"));
                        }
                    }
                }
            }).promise().done(function() {
                $(window).trigger(a.data.eventUnveilRefresh);
            });
        }
        function l() {
            a.startFilter = false;
            $(document).on("mousedown", f, function(b) {
                a.startFilter = true;
                a.elementStart = $(this);
            });
            $(document).on("touchstart", f, function(b) {
                a.startFilter = true;
                a.elementStart = $(this);
            });
            $(document).on("touchend", function(b) {
                if (a.startFilter && !!a.elementStart) m(b);
                a.startFilter = false;
            });
            $(document).on("slide", f + " .noUiSlider", function(b) {
                a.startFilter = true;
                a.elementStart = $(this).parents(f + ":first");
            });
            $(document).on("geolocated", ".control-group[data-target-value] .geolocation", function(b) {
                a.elementStart = $(this).parents(".control-group[data-target-value]:first");
                m(b);
                a.startFilter = false;
            });
            $(document).on("mouseup", function(b) {
                if (a.startFilter && !!a.elementStart) {
                    m(b);
                }
                a.startFilter = false;
            });
        }
        function m(b) {
            var c = a.elementStart;
            var d = c.attr("data-location");
            var e = c.attr("data-replace");
            var f = c.attr("data-target-value");
            var g = c.attr("data-target-data");
            var h = !!c.attr("data-current-value") ? c.attr("data-current-value") : "";
            var l = c.attr("data-clear-param");
            setTimeout(function() {
                var a;
                var b = d;
                if (f && f.indexOf(";") >= 0) {
                    var m = f.split(";");
                    var n = e.split(";");
                    var o = h.split(";");
                    var p = false;
                    for (var q = 0; q < m.length; q++) {
                        a = c.find(m[q]);
                        var r = "";
                        a.each(function(a, b) {
                            r += r.length ? ";" : "";
                            if (g && g.indexOf(";")) {
                                var c = g.split(";");
                                r += $(b).data(c[q]);
                            } else if ($(b).is("[data-value]")) {
                                r += $(b).attr("data-value");
                            } else if ($(b).is("span")) {
                                r += $(b).text();
                            } else {
                                r += $(b).val();
                            }
                        }).promise().done(function() {
                            if (r != o[q]) {
                                var a = o;
                                a[q] = r;
                                c.attr("data-current-value", a.join(";"));
                                if (!!b) {
                                    b = b.replace(n[q], r);
                                } else {
                                    j(n[q], r, l);
                                }
                                p = true;
                            } else {
                                if (!!b) {
                                    b = b.replace(n[q], r);
                                } else {
                                    j(n[q], r, l);
                                }
                            }
                            if (q == m.length - 1 && p) {
                                if (b) i(b);
                                k();
                            }
                        });
                    }
                } else {
                    a = c.find(f);
                    var r = "";
                    a.each(function(a, b) {
                        r += r.length ? ";" : "";
                        if ($(b).is("[data-value]")) {
                            r += $(b).attr("data-value");
                        } else if ($(b).is("span")) {
                            r += $(b).text();
                        } else {
                            r += $(b).val();
                        }
                    }).promise().done(function() {
                        if ((!e && r || e) && r != h) {
                            c.attr("data-current-value", r);
                            if (b) {
                                b = b.replace(e, r);
                            } else {
                                j(e, r, l);
                            }
                            if (b) i(b);
                            k();
                        }
                    });
                }
            }, 100);
        }
        l();
    };
    Carstore.prototype.loadListModalPanels = function() {
        var a = this;
        var b;
        $(".modal-panel.first").on("shown", function() {
            b = c();
            setTimeout(function() {
                if ($("#my-modal-panel").find("#mobile-filters").length > 0) {
                    $(window).trigger(a.data.eventUnveilRefresh);
                }
            }, 500);
        }).on("hide", function() {
            $("html,body").css({
                overflow: "auto"
            });
            var d = c();
            if (!!d && d.length > 0 && d != b) {
                var e = a.getAjaxLoader($("#filter-form-panel").attr("data-loaderTitle"), $("#filter-form-panel").attr("data-loaderContent"));
                e.load(d);
            }
        });
        $(".modal-panel.second").on("shown", function() {
            h($(this));
            $.resizeModal($(this));
        }).on("hide", function() {
            var a = $(this).find(".panel-values");
            if (a) {
                var b = $("[data-target='[id=" + a.attr("id") + "]']");
                var c = b.formfield("val");
                if (c) {
                    var d = b.attr("data-replace");
                    var g = b.attr("data-value");
                    var h = b.attr("data-replaceLabel");
                    var i = b.text();
                    if (b.hasClass("changed")) {
                        f(d, g);
                        if (h && h.length > 0 && g.indexOf(";") < 0) {
                            f(h, i);
                        }
                        e();
                    }
                }
            }
        });
        $.resizeModal = function(a) {
            if (a) {
                var b = a.find(".modal-header");
                var c = a.find(".modal-body");
                var d = $("navbar-fixed-bottom:visible");
                var e = a.innerHeight() - b.innerHeight();
                if (d) {
                    e = e - d.innerHeight();
                }
                c.height(e);
            }
        };
        $(window).on("resize", function() {
            $.resizeModal($(".modal-panel.second:visible"));
        });
        function c() {
            var a = $("#filter-form-panel");
            var b = a.attr("ref");
            var c = a.attr("ref-param");
            if (c && c.length > 0) {
                if (c.indexOf("mbd") >= 0) {
                    b = a.attr("refwithmbd");
                }
                b += c.indexOf("?") >= 0 ? "" : "?";
                b += c;
            }
            return b;
        }
        function d(a) {
            if (!a) return;
            var b = $("#filter-form-panel");
            var c = "";
            var d = a.indexOf("?");
            if (d >= 0) {
                c = a.substring(d);
            }
            b.attr("ref-param", c);
        }
        function e() {
            var a = $("#filter-form-panel").find(".entry .choice");
            var b = c();
            a.each(function(a, c) {
                var d = $(c).attr("data-replace");
                if (d && b.indexOf(d) < 0) {
                    $(c).attr("data-value", "");
                    $(c).text("");
                    var e = $(c).parent().attr("data-local");
                    var f = $(e);
                    if (!f.hasClass("dataload")) {
                        f.addClass("dataload");
                        f.empty().html(f.data("loadhtml"));
                    }
                }
            });
        }
        function f(a, b) {
            if (!a && b) {
                d(b);
                return;
            }
            if (!a) return;
            var e = c();
            if (e && e.indexOf(a) >= 0) {
                var f = e.indexOf(a);
                e = e.substring(0, f - 1);
            }
            if (b) {
                e += e.indexOf("?") >= 0 ? "&" : "?";
                e += a + "=" + b;
            }
            d(e);
        }
        function g(a, b) {
            if (!a) return;
            var e = c();
            e += e.indexOf("?") >= 0 ? "&" : "?";
            e += a + "=" + b;
            d(e);
        }
        function h(a) {
            var b = a.find(".dataload[data-method][data-id]");
            b.removeClass("dataload");
            if (b.length > 0) {
                b.each(function(a, b) {
                    var d = $(b).attr("data-id");
                    var e = $(b).attr("data-method");
                    var f = $(b).attr("data-replace");
                    var g = c();
                    if (g && g.indexOf(f) >= 0) {
                        var h = g.indexOf(f);
                        g = g.substring(0, h - 1);
                    }
                    g += g.indexOf("?") >= 0 ? "&" : "?";
                    g += "AjaxRequest=" + e + "&id=" + d;
                    $.ajax({
                        url: g,
                        type: "get",
                        dataType: "html",
                        success: function(a) {
                            $("#filter-form-panel-" + d).data("loadhtml", $("#filter-form-panel-" + d).html());
                            $("#filter-form-panel-" + d).empty().html(a);
                            $("#filter-form-panel-" + d).find(".value.formfield").formfield("update");
                            i(d);
                        },
                        error: function() {
                            if (!$("#filter-form-panel-" + d).hasClass("dataload")) {
                                $("#filter-form-panel-" + d).addClass("dataload");
                            }
                        }
                    });
                });
            }
        }
        function i(a) {
            var b = $("[data-target='[id=value-form-panel-" + a + "]']");
            b.each(function(a, b) {
                if (!$(b).data("isPanelValues")) {
                    $(b).data("isPanelValues", true);
                    $(b).on("click", function(a) {
                        var b = $(this).parents(".panel-values:first"), c = b.find(".value"), d = true;
                        if (b.data("choice-max") == 1) {
                            c.removeClass("checked");
                            $(this).addClass("checked");
                            d = false;
                        } else if (!$(this).is(".checked") && b.data("choice-max") <= c.filter(".checked").length) {
                            return false;
                        }
                        if (d) {
                            $(this).toggleClass("checked");
                        }
                    });
                }
            });
        }
    };
    Carstore.prototype.loadCommonCart = function() {
        function a(a) {
            var b = {
                labelAdd: "",
                cookieName: "",
                popOverMsg: "Vide"
            };
            var c = {};
            if ($(a).attr("data-labelAdd")) c.labelAdd = $(a).attr("data-labelAdd");
            if ($(a).attr("data-cookieName")) c.cookieName = $(a).attr("data-cookieName");
            if ($(a).attr("data-popOverMsg")) c.popOverMsg = $(a).attr("data-popOverMsg");
            if ($(a).attr("data-local")) c.local = $(a).attr("data-local");
            c = $.extend(b, c);
            return c;
        }
        var b = this, c = ".block-cart";
        function d(a, b) {
            var c = 0;
            var d = $(b.local);
            if (d && d.length > 0) {
                c = d.find(".result.row-fluid").length;
            }
            $(a).find("#nbSelection").text("(" + c + "/3)");
        }
        function e(a, b) {
            $(a).on("click", function(a) {
                a.preventDefault();
                if ($(this).data("popover")) {
                    $(this).popover("destroy");
                }
                var c = $(this).attr("data-local");
                if ($(c).find(".result").length == 0) {
                    if (!$(this).data("popover")) {
                        var d = $('<div class="popover-content"></div>').append(b.popOverMsg);
                        var e = {
                            animation: false,
                            placement: "bottom",
                            trigger: "hover",
                            html: true,
                            content: d.html(),
                            container: "body"
                        };
                        $(this).popover(e).popover("show");
                    }
                    return false;
                }
                return true;
            });
        }
        function f(a, c) {
            var e = $(c.local);
            if (e && e.length > 0) {
                $(".cart-remove:not(bound-remove)", e).each(function(f, h) {
                    if (!$(this).data("isRemoveCarListener")) {
                        $(this).data("isRemoveCarListener", true);
                        $(h).on("click", function(f) {
                            f.preventDefault();
                            $(b.data.carAddListernerSelector).each(function() {
                                if ($(this).data("popover")) {
                                    $(this).popover("destroy");
                                }
                            });
                            var h = c.cookieName;
                            var i = $(this).parents(".result:first");
                            var j = i.attr("id");
                            var k = getCookie(h);
                            if (k) {
                                k = k.replace(j + "|", "");
                                setCookie(h, k, 1);
                            }
                            i.remove();
                            $(b.data.carAddListernerSelector + "[data-carnum='" + j + "']").each(function() {
                                $(this).removeClass("remove");
                                var a = $(this).find("i");
                                var b = $(this).find("span");
                                a.attr("class", "icon-selection-plus");
                                b.html(c.labelAdd);
                            });
                            $(b.data.carAddListernerSelector + "[data-CarID='" + j + "']").each(function() {
                                $(this).removeClass("remove");
                                var a = $(this).find("i");
                                var b = $(this).find("span");
                                a.attr("class", "icon-selection-plus");
                                b.html(c.labelAdd);
                            });
                            if (e.find(".result").length == 0) {
                                $("#my-modal-cart").modal("hide");
                            }
                            d(a, c);
                            g(a, c);
                        });
                    }
                });
            }
        }
        function g(a, b) {
            var c = $(b.local);
            var d = $(".footer > .mentionsPopinList", c);
            d.find(".CustomMention").remove();
            $("<span></span>").addClass("CustomMention").appendTo(d);
            $(".mentionBottom", c).each(function(a, b) {
                var c = $(".CustomMention").html();
                if (!c || c.indexOf($(b).html()) < 0) {
                    $(".CustomMention").append($(b).html());
                }
            }).promise().done(function() {
                c.css({
                    "padding-bottom": $(".footer", c).innerHeight() + "px"
                });
            });
        }
        function h() {
            $("a[href='#my-modal-cart']").each(function(c, h) {
                if (!$(h).data("isBtnCart")) {
                    $(h).data("isBtnCart", true);
                    var i = a(h);
                    d(h, i);
                    e(h, i);
                    f(h, i);
                    g(h, i);
                    $(window).on(b.data.eventUnveilSucess, function(a, b, c) {
                        if ($(b).attr("unveil-url").indexOf("getCarListVehiclePropertiesByID") > 0) {
                            var d = $(i.local);
                            f(h, i);
                            g(h, i);
                            if (d.find(".unveil").length == 0) {
                                $(window).trigger("resize");
                            }
                        }
                    });
                }
            });
        }
        $("#my-modal-cart").on("shown", function() {
            if ($(".ie9").length > 0 || $("lt-ie9").length > 0) {
                setTimeout(function() {
                    $(window).trigger(b.data.eventUnveilRefresh);
                    $(".block-warning .result").remove();
                }, 1e3);
            } else {
                $(window).trigger(b.data.eventUnveilRefresh);
                $(".block-warning .result").remove();
            }
        });
        h();
    };
    Carstore.prototype.loadCarAddListener = function(a) {
        var b = this;
        function c(a) {
            var b = {
                wrapperCarList: "#cartVersion",
                carClass: "result row-fluid",
                carStyle: "",
                CarUnveilUrl: "getVehicleSelectedByID",
                labelAdd: "",
                labelRemove: "",
                cookieName: "storeCarList",
                StoreCookieRetailer: false,
                cookieRetailerName: "",
                RetailerInfos: "",
                popOverMsg: "votre s�lection est limit�e � 3 v�hicules"
            };
            var c = {};
            if ($(a).attr("data-labelAdd")) c.labelAdd = $(a).attr("data-labelAdd");
            if ($(a).attr("data-wrapperCarList")) c.labewrapperCarListlAdd = $(a).attr("data-wrapperCarList");
            if ($(a).attr("data-labelRemove")) c.labelRemove = $(a).attr("data-labelRemove");
            if ($(a).attr("data-cookieName")) c.cookieName = $(a).attr("data-cookieName");
            if ($(a).attr("data-cookieRetailerName")) c.cookieRetailerName = $(a).attr("data-cookieRetailerName");
            if ($(a).attr("data-popOverMsg")) c.popOverMsg = $(a).attr("data-popOverMsg");
            if ($(a).attr("data-StoreCookieRetailer")) c.StoreCookieRetailer = $(a).attr("data-StoreCookieRetailer");
            if ($(a).attr("data-RetailerInfos")) c.RetailerInfos = $(a).attr("data-RetailerInfos");
            if ($(a).attr("data-CarUnveilUrl")) c.CarUnveilUrl = $(a).attr("data-CarUnveilUrl");
            if ($(a).attr("data-CarID")) c.CarID = $(a).attr("data-CarID");
            c = $.extend(b, c);
            return c;
        }
        function d(a) {
            if (a.StoreCookieRetailer) {
                var b = getCookie(a.cookieName);
                var c = getCookie(a.cookieRetailerName);
                if (b && c) {
                    if (c.indexOf(a.RetailerInfos) != 0) {
                        $("#my-modal-cart-warning").modal("show");
                        $("#btnEraseCartForPdv").on("click", function(b) {
                            deleteCookie(a.cookieName);
                            if (a.cookieRetailerName) {
                                deleteCookie(a.cookieRetailerName);
                            }
                            $("#my-modal-cart-warning").modal("hide");
                        });
                        return false;
                    }
                }
            }
        }
        function e(a) {
            $(a.wrapperCarList).each(function(b, c) {
                var d = $(c).attr("id");
                if (d && d.length > 0) {
                    var e = $(c).find(".result.row-fluid").length;
                    var f = $("[data-local=#" + d + "]").find("#nbSelection").text("(" + e + "/3)");
                    if (e == 0) {
                        deleteCookie(a.cookieName);
                    }
                }
            });
        }
        function f(a) {
            if (a.StoreCookieRetailer) {
                var b = $(a.wrapperCarList).find(".result.row-fluid").length;
                if (b > 0) {
                    setCookie(a.cookieRetailerName, a.RetailerInfos, 1);
                } else {
                    deleteCookie(a.cookieRetailerName);
                }
            }
        }
        function g() {
            $(b.data.carAddListernerSelector).each(function(a, g) {
                if (!$(g).data("isCarAddListener")) {
                    $(g).data("isCarAddListener", true);
                    var h = c(g);
                    $(g).on("click", function(a) {
                        a.preventDefault();
                        d(h);
                        if ($("a[href='#my-modal-cart']").data("popover")) {
                            $("a[href='#my-modal-cart']").popover("destroy");
                        }
                        $(b.data.carAddListernerSelector).each(function() {
                            if ($(this).data("popover")) {
                                $(this).popover("destroy");
                            }
                        });
                        var c = $(this);
                        var g = c.attr("data-carnum");
                        if (g == null) {
                            g = h.CarID;
                        }
                        if (c.hasClass("remove")) {
                            c.removeClass("remove");
                            var i = $(h.wrapperCarList);
                            var j = i.find("[id='" + g + "']");
                            var k = c.find("i");
                            var l = c.find("span");
                            if (j.length > 0) {
                                var m = getCookie(h.cookieName);
                                if (m) {
                                    m = m.replace(g + "|", "");
                                    setCookie(h.cookieName, m, 1);
                                }
                                j.remove();
                                k.attr("class", "icon-selection-plus");
                                l.html(h.labelAdd);
                                var n = $("#hdPreviousSelectionCount").val(j.length);
                            }
                        } else {
                            var i = $(h.wrapperCarList);
                            var o = i.find(".result");
                            var k = c.find("i");
                            var l = c.find("span");
                            if (o.length < 3) {
                                c.addClass("remove");
                                var m = getCookie(h.cookieName);
                                m = (m ? m : "") + g + "|";
                                setCookie(h.cookieName, m, 1);
                                $("<div></div>").addClass(h.carClass).addClass("unveil").attr("unveil-url", h.CarUnveilUrl).attr("id", g).insertBefore(i.find(".footer"));
                                k.attr("class", "icon-selection-moins");
                                l.html(h.labelRemove);
                                var n = $("#hdPreviousSelectionCount").val(o.length);
                            } else {
                                if (!c.data("popover")) {
                                    var p = $('<div class="popover-content"></div>').append(h.popOverMsg);
                                    var q = {
                                        animation: false,
                                        placement: "top",
                                        trigger: "hover",
                                        html: true,
                                        content: p.html(),
                                        container: "body"
                                    };
                                    c.popover(q).popover("show");
                                }
                            }
                        }
                        e(h);
                        f(h);
                    });
                }
            });
        }
        g();
        $(window).on(b.data.eventUnveilSucess, function(a, b, c) {
            if (c.indexOf("data-wrapperCarList") >= 0) {
                g();
            }
        });
    };
    Carstore.prototype.loadCheckBoxEvent = function() {
        var a = this;
        function b(a) {
            var b = {
                location: "",
                currentValue: "",
                rawUrl: "",
                deleteLocation: "",
                replaceString: "",
                loaderTitle: null,
                loaderContent: null
            }, c = {
                location: $(a).attr("data-location"),
                rawUrl: $(a).attr("data-rawUrl"),
                currentValue: $(a).attr("data-currentValue"),
                deleteLocation: $(a).attr("data-deleteLocation"),
                replaceString: $(a).attr("data-replaceString"),
                loaderTitle: $(a).attr("data-loaderTitle"),
                loaderContent: $(a).attr("data-loaderContent")
            };
            c = $.extend(b, c);
            return c;
        }
        function c() {
            $(document).on("click", a.data.CheckboxSelectors, function() {
                var c = b(this);
                var d = $(this).find("input").attr("name");
                var e = $(this).parent();
                var f = "";
                e.find("input[name=" + d + "]:checked").each(function(a, b) {
                    f += f.length ? ";" : "";
                    f += $(b).val();
                });
                if (c.loaderTitle && c.loaderContent && f != c.currentValue) {
                    var g = a.getAjaxLoader(c.loaderTitle, c.loaderContent);
                    if (f.length) {
                        g.load(c.location.replace(c.replaceString, f));
                    } else {
                        g.load(c.deleteLocation);
                    }
                }
            });
        }
        c();
    };
    Carstore.prototype.loadPopinLocationInput = function(a) {
        var b = this, c = $("#location-input"), d = $("input.geolocation", c), e = $(".control-action button", c);
        function f() {
            if (e) {
                e.removeClass("error");
                if (e.data("redirect")) {
                    if (e.data("redirect_url_template") && e.data("redirect_url_template").length > 0) {
                        var a = e.data("redirect_url_template").replace(e.data("replace_lat"), d.data("geo-latitude")).replace(e.data("replace_lng"), d.data("geo-longitude")).replace(e.data("replace_cit"), encodeURIComponent(d.val()));
                        e.data("redirect_url", a);
                    }
                }
            }
        }
        d.on("geolocated", function(a) {
            f();
        });
        e.on("click", function(a) {
            a.preventDefault();
            if (e.hasClass("error")) {
                return false;
            }
            if (e.data("redirect")) {
                if (e.data("redirect_url") && e.data("redirect_url").length > 0) {
                    if (e.data("loader_content")) {
                        var c = b.getAjaxLoader(e.data("loader_title"), e.data("loader_content"));
                        c.load(e.data("redirect_url"));
                    } else {
                        window.location.href = e.data("redirect_url");
                    }
                }
            }
        });
        $(document).on("mousedown", 'a[data-local="#location-input"]', function() {
            if ($(this).attr("data-url")) {
                e.data("redirect_url_template", $(this).attr("data-url"));
                if (d.data("geo-latitude") && d.data("geo-longitude")) {
                    f();
                }
            } else {
                e.data("redirect_url_template", null);
                e.data("redirect_url", null);
            }
        });
    };
    Carstore.prototype.loadCommonMap = function(a) {
        var b = this, c, d, e, f, g = [], h = [], i = $.Event("geolocate"), j = $("#map"), k = $("#map-loading"), l = $("#map-canvas"), m = $(".list", j), n = $("input.geolocation", j), o = $(".form-actions button", j), p = $("#map-search-keyword-alias"), q = $("#map-search-counter"), r, s, t = 5, u = 18, v = {};
        function w(a) {
            var b = {
                ParamUrlLat: "lat",
                ParamUrlLng: "lng",
                ParamUrlCity: "cit",
                dealerPoint: null,
                defaultPoint: {
                    lat: null,
                    lng: null
                },
                initSearchPoint: {
                    lat: null,
                    lng: null
                },
                bounds: {
                    sw: {
                        lat: 41.19519,
                        lng: -5.427246
                    },
                    ne: {
                        lat: 51.088645,
                        lng: 9.777832
                    }
                }
            };
            v = {
                ParamUrlLat: $(a).attr("data-ParamUrlLat"),
                ParamUrlLng: $(a).attr("data-ParamUrlLng"),
                ParamUrlCity: $(a).attr("data-ParamUrlCity"),
                location: $(a).attr("data-location"),
                extraParams: $(a).attr("data-extra-params")
            };
            if ($(a).attr("data-initSearchPoint-lat") && $(a).attr("data-initSearchPoint-lng")) {
                v.initSearchPoint = {
                    lat: $(a).attr("data-initSearchPoint-lat"),
                    lng: $(a).attr("data-initSearchPoint-lng")
                };
                if ($(a).attr("data-initSearchPoint-cit")) {
                    v.initSearchPoint.cit = $(a).attr("data-initSearchPoint-cit");
                }
            }
            if ($(a).attr("data-dealerPoint-lat") && $(a).attr("data-dealerPoint-lng")) {
                v.dealerPoint = {
                    lat: $(a).attr("data-dealerPoint-lat"),
                    lng: $(a).attr("data-dealerPoint-lng")
                };
                if ($(a).attr("data-dealer-id")) {
                    v.dealerPoint.currentIdSiteGeo = $(a).attr("data-dealer-id");
                }
            }
            if ($(a).attr("data-defaultPoint-lat") && $(a).attr("data-defaultPoint-lng")) {
                v.defaultPoint = {
                    lat: $(a).attr("data-defaultPoint-lat"),
                    lng: $(a).attr("data-defaultPoint-lng")
                };
            }
            if ($(a).attr("data-bounds-latsw") && $(a).attr("data-bounds-lngsw") && $(a).attr("data-bounds-latne") && $(a).attr("data-bounds-lngne")) {
                v.bounds = {
                    sw: {
                        lat: $(a).attr("data-bounds-latsw"),
                        lng: $(a).attr("data-bounds-lngsw")
                    },
                    ne: {
                        lat: $(a).attr("data-bounds-latne"),
                        lng: $(a).attr("data-bounds-lngne")
                    }
                };
            }
            v.Region = "FR";
            $geoRegion = $("[data-Region]:first");
            if ($geoRegion && $geoRegion.length > 0) {
                v.Region = $geoRegion.attr("data-Region");
            }
            v = $.extend(b, v);
        }
        function x() {
            var a = {
                center: new google.maps.LatLng(v.defaultPoint.lat, v.defaultPoint.lng),
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            f = new google.maps.Map(document.getElementById("map-canvas"), a);
            var b = new google.maps.LatLngBounds(new google.maps.LatLng(v.bounds.sw.lat, v.bounds.sw.lng), new google.maps.LatLng(v.bounds.ne.lat, v.bounds.ne.lng));
            f.fitBounds(b);
            if (f.getZoom() > 0) {
                t = f.getZoom();
            }
            f.setOptions({
                minZoom: t,
                maxZoom: u
            });
            google.maps.event.addListener(f, "drag", function() {
                if (b.contains(f.getCenter())) return;
                var a = f.getCenter(), c = a.lng(), d = a.lat(), e = b.getNorthEast().lng(), g = b.getNorthEast().lat(), h = b.getSouthWest().lng(), i = b.getSouthWest().lat();
                if (c < h) c = h;
                if (c > e) c = e;
                if (d < i) d = i;
                if (d > g) d = g;
                f.setCenter(new google.maps.LatLng(d, c));
            });
            if (v.dealerPoint) {
                D();
            } else if (n.data("geo-latitude") && n.data("geo-longitude")) {
                D();
            } else if (v.initSearchPoint.lat && v.initSearchPoint.lng) {
                n.data("geo-latitude", v.initSearchPoint.lat);
                n.data("geo-longitude", v.initSearchPoint.lng);
                if (v.initSearchPoint.cit) {
                    n.val(v.initSearchPoint.cit);
                }
                D();
            } else if (v.initSearchAddress) {
                n.val(v.initSearchAddress);
                n.parents().find(".btn-validate.geo").trigger("click");
            }
            y();
            M();
        }
        function y() {
            if (b.getScreenType() >= b.SCREEN_TYPE_DESKTOP) {
                var a = l.parents(".modal-body:first"), c = l.css("min-height"), d = a.height(), e = $(window).height();
                if (!d) {
                    window.setTimeout(y, 100);
                    return;
                }
                c = Math.max(Number(c.substr(0, c.length - 2)), l.height());
                c += e - d;
                l.height(c);
                l.parents(".modal").modal("fit");
            }
        }
        function z() {
            if (f) {
                f.panTo(A());
            } else {
                setTimeout(function() {
                    if (f) f.panTo(A());
                }, 500);
            }
            var a, b;
            if (v.dealerPoint) {
                a = v.dealerPoint.lat;
                b = v.dealerPoint.lng;
            } else {
                a = n.data("geo-latitude");
                b = n.data("geo-longitude");
            }
            if (!c || c.geolocation.latitude != a || c.geolocation.longitude != b || c.extraParams != v.extraParams) {
                D();
            } else if (v.initSearchAddress && c.initSearchAddress != v.initSearchAddress) {
                n.val(v.initSearchAddress);
                n.parents().find(".btn-validate.geo").trigger("click");
            }
            y();
        }
        function A() {
            var a;
            if (v.dealerPoint) {
                a = new google.maps.LatLng(v.dealerPoint.lat, v.dealerPoint.lng);
            } else if (!n.val().length && $(b.data.geolocationFieldsSelectors).not(n).length) {
                $(b.data.geolocationFieldsSelectors).each(function(b, c) {
                    if ($(c).data("geo-latitude") && $(c).data("geo-longitude")) {
                        a = new google.maps.LatLng($(c).data("geo-latitude"), $(c).data("geo-longitude"));
                        n.val($(c).val()).data("geo-latitude", $(c).data("geo-latitude")).data("geo-longitude", $(c).data("geo-longitude"));
                    }
                });
            } else if (n.data("geo-latitude") && n.data("geo-longitude")) {
                a = new google.maps.LatLng(n.data("geo-latitude"), n.data("geo-longitude"));
            }
            if (a == undefined || !a) {
                a = new google.maps.LatLng(v.defaultPoint.lat, v.defaultPoint.lng);
            }
            return a;
        }
        function B() {
            j.addClass("loading");
            j.addClass("no-result");
            n.attr("disabled", "disabled");
            o.parents(".form-actions").addClass("error");
            o.addClass("error");
            k.show();
        }
        function C() {
            j.removeClass("loading");
            j.removeClass("no-result");
            n.removeAttr("disabled");
            k.hide();
        }
        function D() {
            var a = window.location.pathname;
            if (v.location && v.location.length > 0) {
                a = v.location;
            }
            var b, d, e;
            if (v.dealerPoint) {
                b = v.dealerPoint.lat;
                d = v.dealerPoint.lng;
                e = v.ParamUrlLat + "=" + b + "&" + v.ParamUrlLng + "=" + d + (v.dealerPoint.currentIdSiteGeo ? "&currentIdSiteGeo=" + v.dealerPoint.currentIdSiteGeo : "");
            } else {
                b = n.data("geo-latitude");
                d = n.data("geo-longitude");
                var f = n.val();
                if (!b && v.defaultPoint) {
                    b = v.defaultPoint.lat;
                }
                if (!d && v.defaultPoint) {
                    d = v.defaultPoint.lng;
                }
                e = v.ParamUrlLat + "=" + b + "&" + v.ParamUrlLng + "=" + d + (f.length > 0 ? "&" + v.ParamUrlCity + "=" + encodeURIComponent(f) : "");
                if (v.extraParams && v.extraParams.length > 0) {
                    e += "&" + v.extraParams;
                }
            }
            if (b && d) {
                B();
                I();
                $.ajax({
                    url: a,
                    dataType: "json",
                    data: e,
                    error: function(a, b) {
                        console.log(b);
                    },
                    success: function(a) {
                        c = a;
                        c.extraParams = v.extraParams;
                        c.initSearchAddress = v.initSearchAddress;
                        H();
                        E();
                        F();
                    },
                    complete: function() {
                        C();
                    }
                });
            }
        }
        function E() {
            q.text(c.retailers ? c.retailers.length : "0");
            p.text(n.val());
        }
        function F() {
            G();
            var a = 0;
            for (var d in c["retailers"]) {
                if (c["retailers"][d].content) {
                    a++;
                    var e = $("<li />").addClass("item").html(c["retailers"][d].content).on("click", J);
                    m.append(e);
                }
            }
            if (a == 1) {
                m.find("li").first().trigger("click");
            }
            m.find(".btn.showAgent").each(function() {
                $(this).on("click", function(a) {
                    var b = window.location.pathname;
                    if (v.ajaxPath && v.ajaxPath.length > 0) {
                        b = v.ajaxPath;
                    }
                    b += b.indexOf("?") >= 0 ? "&" : "?";
                    b += "AjaxRequest=" + v.AjaxMethodAgent;
                    b += "&" + $(this).attr("ref");
                    var d = n.data("geo-latitude");
                    var e = n.data("geo-longitude");
                    if (d && e) {
                        B();
                        $.ajax({
                            url: b,
                            dataType: "json",
                            data: "lat=" + d + "&lng=" + e,
                            error: function(a, b) {},
                            success: function(a) {
                                c = a;
                                E();
                                H();
                                F();
                            },
                            complete: function() {
                                C();
                            }
                        });
                    }
                });
            });
            m.find(".btn.BackDealers").on("click", function(a) {
                D();
            });
            var f = b.getScreenType();
            if (f < b.SCREEN_TYPE_DESKTOP) {
                var g = {
                    pager: false,
                    infiniteLoop: false,
                    slideWidth: l.width(),
                    onSlideBefore: function(a) {
                        a.parents(".bx-wrapper:first").addClass("slide");
                    },
                    onSlideAfter: function(a) {
                        a.parents(".bx-wrapper:first").removeClass("slide");
                    }
                };
                if (f == b.SCREEN_TYPE_TABLET) {
                    g.minSlides = 2;
                    g.maxSlides = 2;
                    s = 2;
                    g.slideWidth = Math.floor(g.slideWidth / 2);
                } else if (f == b.SCREEN_TYPE_PHONE) {
                    g.minSlides = 1;
                    g.maxSlides = 1;
                    s = 1;
                }
                r = m.addClass("bxslider").bxSlider(g);
                m.parents(".modal-fullscreen:first").modal("fit");
            }
            m.hcScroll("refresh");
        }
        function G() {
            m.find("li").remove();
        }
        function H() {
            I();
            var a = new google.maps.LatLngBounds();
            a.extend(new google.maps.LatLng(c.geolocation.latitude, c.geolocation.longitude));
            if (c["retailers"]) {
                for (var d = 0; d < c["retailers"].length; d++) {
                    var e = Number(d) + 1, i = new google.maps.LatLng(c["retailers"][d].latitude, c["retailers"][d].longitude), j = new google.maps.Marker({
                        position: i,
                        icon: b.data.markerGeneratorUrlOff.replace("Images/ACFR/", "Images/AC" + v.Region + "/"),
                        map: f
                    }), k = new google.maps.InfoWindow({
                        content: c["retailers"][d].infowindow,
                        boxClass: "info-windows"
                    });
                    h.push(k);
                    google.maps.event.addListener(j, "click", K);
                    g.push(j);
                    if (c["retailers"][d].bound) {
                        a.extend(i);
                    }
                }
                f.fitBounds(a);
                console.log("zoom:" + f.getZoom());
            }
            setTimeout(function() {
                google.maps.event.trigger(f, "resize");
                if (v.DealerByCritereVin && c.centerMap) {
                    f.setCenter(new google.maps.LatLng(c.centerMap.latitude, c.centerMap.longitude));
                    if (v.idSiteGeo != null) {
                        window.setTimeout(function() {
                            h[0].open(f, g[0]);
                        }, 200);
                    }
                } else {
                    f.setCenter(new google.maps.LatLng(c.geolocation.latitude, c.geolocation.longitude));
                }
            }, 500);
        }
        function I() {
            for (var a = 0; a < g.length; a++) {
                g[a].setMap(null);
                h[a].close();
            }
            g = [];
            h = [];
        }
        function J() {
            var a = $(this).is(".item") ? $(this) : $(this).parents(".item:first"), c = a.index(), d = g[c];
            $(this).parent().find(".active").removeClass("active");
            a.removeClass("active").addClass("active");
            var e = h[c];
            var d = g[c];
            if (e) {
                for (var i = 0; i < h.length; i++) {
                    h[i].close();
                }
                e.open(f, d);
            }
            if (d) {
                for (var i = 0; i < g.length; i++) {
                    g[i].setIcon(b.data.markerGeneratorUrlOff.replace("Images/ACFR/", "Images/AC" + v.Region + "/"));
                }
                d.setIcon(b.data.markerGeneratorUrl.replace("Images/ACFR/", "Images/AC" + v.Region + "/"));
            }
            f.panTo(d.getPosition());
            L(a);
        }
        function K() {
            var a = g.indexOf(this);
            var c = h[a];
            var d = g[a];
            if (c) {
                for (var e = 0; e < h.length; e++) {
                    h[e].close();
                }
                c.open(f, this);
            }
            if (d) {
                for (var e = 0; e < g.length; e++) {
                    g[e].setIcon(b.data.markerGeneratorUrlOff.replace("Images/ACFR/", "Images/AC" + v.Region + "/"));
                }
                d.setIcon(b.data.markerGeneratorUrl.replace("Images/ACFR/", "Images/AC" + v.Region + "/"));
            }
            f.panTo(this.getPosition());
            m.find(".active").removeClass("active");
            var i = m.find("li").eq(a).removeClass("active").addClass("active");
            r = m.hcScroll();
            if (!!r) {
                r.scrollTo(i.offset().top - m.find("li:first").offset().top);
            }
            L(i);
        }
        function L(a) {
            if (o) {
                o.parents(".form-actions").removeClass("error");
                o.removeClass("error");
                o.data("dealer-id", a.find(".dealer-id").text());
                o.data("dealer-url", a.find(".dealer-url").text());
            }
        }
        function M() {
            o.on("click", function(a) {
                a.preventDefault();
                if (o.hasClass("error")) {
                    return false;
                }
                var c = o.data("dealer-id");
                if ($("ul[id=retailers-list-item] > li[data-value]").length > 0) {
                    var d = false;
                    $("ul[id=retailers-list-item] > li[data-value]").each(function(a, b) {
                        if ($(b).attr("data-value").length > 0 && $(b).attr("data-value").split(";")[0] == c) {
                            if ($(b).hasClass("unselected")) {
                                d = true;
                                $(b).trigger("click");
                                return false;
                            }
                        }
                    });
                    if (d) {
                        $("ul[id=retailers-list-item]").trigger("mouseup");
                    }
                }
                if (o.data("redirect")) {
                    if (c != o.data("current_dealer_id")) {
                        if (o.data("loader_content")) {
                            var e = b.getAjaxLoader(o.data("loader_title"), o.data("loader_content"));
                            e.load(o.data("dealer-url"));
                        } else {
                            window.location.href = o.data("dealer-url");
                        }
                    }
                }
            });
        }
        function N() {
            if (f) {
                z();
            } else {
                setTimeout(function() {
                    x();
                }, 500);
            }
        }
        function O() {
            w(j);
            j.each(function(a, b) {
                var c = $("#my-modal-map");
                if (!c.data("isLoadedMap")) {
                    c.data("isLoadedMap", true);
                    c.on("shown", function() {
                        N();
                    });
                    $(b).find("input.geolocation").on("geolocated", function(a) {
                        N();
                    });
                }
            });
            $(document).on("mousedown", 'a[href="#my-modal-map"]', function() {
                if ($(this).attr("data-dealerPoint-lat") && $(this).attr("data-dealerPoint-lng")) {
                    v.dealerPoint = {
                        lat: $(this).attr("data-dealerPoint-lat"),
                        lng: $(this).attr("data-dealerPoint-lng"),
                        currentIdSiteGeo: $(this).attr("data-dealer-id")
                    };
                } else {
                    v.dealerPoint = null;
                }
                if ($(this).attr("data-extra-params")) {
                    v.extraParams = $(this).attr("data-extra-params");
                } else {
                    v.extraParams = null;
                }
                if ($(this).data("initSearchAddress")) {
                    v.initSearchAddress = $(this).data("initSearchAddress");
                }
            });
        }
        O();
    };
    Carstore.prototype.loadCommonGeolocation = function() {
        var a = this, b = new google.maps.Geocoder(), c = $.Event("geolocated");
        var d, e;
        function f(a) {
            var b = {
                addressComplement: ",FR",
                nbCaracAutoCompleteMin: 1,
                ParamUrlLat: "lat",
                ParamUrlLng: "lng",
                region: "FR",
                typesAccept: [ "street_address", "street_number", "country", "locality", "sublocality", "postal_town", "geocode", "route", "political" ],
                bounds: {
                    sw: {
                        lat: 41.19519,
                        lng: -5.427246
                    },
                    ne: {
                        lat: 51.088645,
                        lng: 9.777832
                    }
                }
            };
            opts = {
                nbCaracAutoCompleteMin: $(a).attr("data-AutoCompleteMin"),
                region: $(a).attr("data-Region"),
                typesAccept: $(a).attr("data-Type"),
                ParamUrlLat: $(a).attr("data-ParamUrlLat"),
                ParamUrlLng: $(a).attr("data-ParamUrlLng"),
                bounds: {
                    sw: {
                        lat: $(a).attr("data-bounds-latsw"),
                        lng: $(a).attr("data-bounds-lngsw")
                    },
                    ne: {
                        lat: $(a).attr("data-bounds-latne"),
                        lng: $(a).attr("data-bounds-lngne")
                    }
                },
                location: $(a).attr("data-location"),
                ParamUrlCity: $(a).attr("data-ParamUrlCity"),
                launchOnGeolocated: $(a).attr("data-launchOnGeolocated"),
                UseAjaxLoader: $(a).attr("data-UseAjaxLoader"),
                loaderTitle: $(a).attr("data-loaderTitle"),
                loaderContent: $(a).attr("data-loaderContent"),
                changeFormAction: $(a).attr("data-changeFormAction")
            };
            opts = $.extend(b, opts);
            return opts;
        }
        function g(d, e, f, g) {
            $("#fictivMap").remove();
            var h = $(a.data.geolocationFieldsSelectors);
            if (!h) h = d;
            if (!!e) {
                h.data("geo-latitude", f).data("geo-longitude", g).val(e);
                h.filter(":visible").addClass("geolocated").trigger(c);
            } else if (!!f && !!g) {
                b.geocode({
                    latLng: new google.maps.LatLng(f, g)
                }, function(a, b) {
                    if (b == google.maps.GeocoderStatus.OK && a.length) {
                        h.data("geo-latitude", a[0].geometry.location.lat()).data("geo-longitude", a[0].geometry.location.lng()).val(a[0].formatted_address);
                        h.filter(":visible").addClass("geolocated").trigger(c);
                    }
                });
            }
        }
        function h(a, b) {
            var c = a.parents("form:first");
            var d = a.val().replace(",", "+");
            var e = new google.maps.places.AutocompleteService();
            c.append('<div id="fictivMap" style="display:none;"></div>');
            e.getPlacePredictions({
                input: d,
                types: [ "(regions)" ],
                componentRestrictions: {
                    country: b.region
                }
            }, i);
        }
        function i(b, c) {
            var d = $("#fictivMap").parents("form:first");
            var e = $(a.data.geolocationFieldsSelectors, d);
            if (b && b.length > 0) {
                var f = new google.maps.places.PlacesService(new google.maps.Map(document.getElementById("fictivMap"), {}));
                f.getDetails({
                    reference: b[0].reference
                }, function(a, c) {
                    g(e, b[0].description, a.geometry.location.lat(), a.geometry.location.lng());
                });
            }
        }
        function j(b, c) {
            $(b).on("geolocated", function() {
                if ($(this).val().length) {
                    var d = $(this).val();
                }
                $(this).data("lastVal", $(this).val());
                $(this).removeClass(a.data.errorFormFieldClassName);
                $(this).parent(".control-group:first").removeClass("error").find(".help-block").remove();
                var e = $(this).next("input[type=submit]");
                var f = $(this).parents("form:first");
                if (!!c.location && c.changeFormAction == "true") {
                    var g = c.location;
                    g += g.indexOf("?") >= 0 ? "&" : "?";
                    g += c.ParamUrlLat + "=" + $(this).data("geo-latitude");
                    g += g.indexOf("?") >= 0 ? "&" : "?";
                    g += c.ParamUrlLng + "=" + $(this).data("geo-longitude");
                    g += g.indexOf("?") >= 0 ? "&" : "?";
                    g += c.ParamUrlCity + "=" + encodeURIComponent($(this).val());
                    f.attr("action", g);
                }
                if (e && e.length > 0 && c.launchOnGeolocated && c.launchOnGeolocated == "true") {
                    e.removeClass("waiting-geolocated");
                    e.click();
                } else if (e && e.length > 0 && $(this).next("input[type=submit]").hasClass("waiting-geolocated")) {
                    e.removeClass("waiting-geolocated");
                    e.click();
                } else if (!!c.location && c.launchOnGeolocated == "true") {
                    var g = c.location;
                    g += g.indexOf("?") >= 0 ? "&" : "?";
                    g += c.ParamUrlLat + "=" + $(this).data("geo-latitude");
                    g += g.indexOf("?") >= 0 ? "&" : "?";
                    g += c.ParamUrlLng + "=" + $(this).data("geo-longitude");
                    g += g.indexOf("?") >= 0 ? "&" : "?";
                    g += c.ParamUrlCity + "=" + encodeURIComponent($(this).val());
                    var h = k(f);
                    if (!!h && h.length > 0) {
                        g += g.indexOf("?") >= 0 ? "&" : "?";
                        g += h;
                    }
                    if (c.UseAjaxLoader == "true" && !!c.loaderTitle && !!c.loaderContent) {
                        var i = a.getAjaxLoader(c.loaderTitle, c.loaderContent);
                        i.load(g);
                    } else {
                        window.location.href = g;
                    }
                } else {
                    $retailers = f.find("[data-geoload=retailer]");
                    if ($retailers && $retailers.length > 0) {
                        var j = $retailers.attr("data-loaderContent");
                        if (j) {
                            $retailers.empty();
                            $retailers.html(j);
                        }
                        $retailers.show();
                        var l = $retailers.attr("data-location");
                        if (l && !$retailers.hasClass("unveil-ack")) {
                            l += l.indexOf("?") >= 0 ? "&" : "?";
                            l += c.ParamUrlLat + "=" + $(b).data("geo-latitude");
                            l += "&" + c.ParamUrlLng + "=" + $(b).data("geo-longitude");
                            l += "&" + c.ParamUrlCity + "=" + $(b).val();
                            $retailers.removeClass("unveil").addClass("unveil");
                            $retailers.attr("unveil-url", l);
                            $(window).trigger(a.data.eventUnveilRefresh);
                            $(window).on(a.data.eventUnveilSucess, function(a, c, d) {
                                if (d.indexOf("retailer-selected") >= 0 && d.indexOf('class="retailer-selected"') >= 0) {
                                    $(b).parents("form:first").find(".retailer-selected").not(".h5").on("validated", function(a, b) {
                                        $.CheckError($(this), b);
                                    }).addClass("h5");
                                }
                            });
                        }
                    }
                }
            });
        }
        function k(a) {
            var b = "";
            var c = $(".car-selected-list", a);
            if (!!c && c.length > 0 && c.val().length > 0) {
                var d = c.attr("data-name");
                b = d + "=" + c.val();
            }
            return b;
        }
        function l(a, b) {
            var c = {
                types: [ "(regions)" ],
                componentRestrictions: {
                    country: b.region
                }
            };
            var d = new google.maps.places.Autocomplete(a, c);
            google.maps.event.addListener(d, "place_changed", function() {
                e = d.getPlace();
                if (!!e && !!e.geometry && !!e.geometry.location) {
                    $(a).addClass("places_changed");
                    $(a).trigger("places_changed");
                }
            });
        }
        function m(a, b) {
            $(a).on("keydown", function(b) {
                if (b.which == 13) {
                    $(a).blur();
                    return false;
                }
            }).on("change", function() {
                $(a).removeClass("places_changed");
                setTimeout(function() {
                    if (!$(a).hasClass("places_changed")) {
                        h($(a), b);
                    }
                }, 250);
            }).on("places_changed", function() {
                if (!!e && !!e.geometry && !!e.geometry.location) {
                    g($(a), e.formatted_address, e.geometry.location.lat(), e.geometry.location.lng());
                }
            });
        }
        function n(b, c) {
            if (!!c.location && c.changeFormAction == "true") {
                var d = $(b).parents("form:first");
                d.find("[type=submit]").on("click", function(b) {
                    b.preventDefault();
                    var e = d.attr("action");
                    if (e) {
                        if (c.UseAjaxLoader == "true" && !!c.loaderTitle && !!c.loaderContent) {
                            var f = a.getAjaxLoader(c.loaderTitle, c.loaderContent);
                            f.load(e);
                        } else {
                            window.location.href = e;
                        }
                    }
                });
            }
        }
        function o() {
            if (b) {
                $(a.data.geolocationFieldsSelectors).each(function(a, b) {
                    var c = f(b);
                    if (!$(b).data("isGeolocation")) {
                        $(b).data("isGeolocation", true);
                        j(b, c);
                        l(b, c);
                        m(b, c);
                        n(b, c);
                    }
                });
                $(a.data.geolocationButtonsSelectors).each(function(b, c) {
                    if (!$(c).data("isGeolocationButton")) {
                        $(c).data("isGeolocationButton", true);
                        $(c).on("click", function(b) {
                            b.preventDefault();
                            var c = $(this).parents("form:first");
                            var d = $(a.data.geolocationFieldsSelectors, c);
                            if (!!d.val()) d.change();
                        });
                    }
                });
                $(a.data.currentGeolocationButtonsSelectors).each(function(b, c) {
                    var d = $(c).parents("form:first");
                    var e = $(a.data.geolocationFieldsSelectors, d);
                    var h = f(e);
                    if (!$(c).data("isCurrentGeolocationButton")) {
                        $(c).data("isCurrentGeolocationButton", true);
                        $(c).on("click", function(a) {
                            a.preventDefault();
                            navigator.geolocation.getCurrentPosition(b, c);
                            function b(a) {
                                e.removeClass("geolocation-loading");
                                g(e, null, a.coords.latitude, a.coords.longitude);
                            }
                            function c(a) {
                                e.removeClass("geolocation-loading");
                            }
                        });
                    }
                });
                $(a.data.formInputCitySelectors).each(function(b, c) {
                    $(c).on("change", function() {
                        var b = $(c).parents("form:first");
                        var d = $(a.data.geolocationFieldsSelectors, b);
                        if ($(this).val() && $.trim($(this).val()).length > 0 && d && !d.val()) {
                            d.val($(this).val());
                            d.change();
                        }
                    });
                });
            }
        }
        o();
    };
    Carstore.prototype.getAjaxLoader = function(a, b) {
        var c = window.AjaxDocumentLoader;
        if (!c) {
            c = new AjaxDocumentLoader({
                modal_title: a,
                modal_content: b
            });
        } else {
            c.opts.modal_title = a;
            c.opts.modal_content = b;
        }
        return c;
    };
    Carstore.prototype.loadPaginationEvent = function(a) {
        var b = this;
        function c(a) {
            var b = {
                loaderTitle: null,
                loaderContent: null
            }, c = {
                loaderTitle: $(a).attr("data-loaderTitle"),
                loaderContent: $(a).attr("data-loaderContent")
            };
            c = $.extend(b, c);
            return c;
        }
        function d() {
            $(".pagination a[href]").each(function(a, d) {
                if (!$(d).data("isPaging")) {
                    var e = c(d);
                    $(d).data("isPaging", true);
                    $(d).on("click", function(a) {
                        a.preventDefault();
                        var c = $(d).attr("href");
                        $("html,body").animate({
                            scrollTop: 0
                        }, "fast");
                        var f = b.getAjaxLoader(e.loaderTitle, e.loaderContent);
                        f.load(c);
                    });
                }
            });
        }
        d();
    };
    Carstore.prototype.loadDDLonChange = function(a) {
        var b = this;
        function c(a) {
            var b = {
                location: "",
                deleteLocation: "",
                replaceString: "",
                replaceString2: "",
                loaderTitle: null,
                loaderContent: null
            }, c = {
                location: $(a).attr("data-location"),
                deleteLocation: $(a).attr("data-deleteLocation"),
                replaceString: $(a).attr("data-replaceString"),
                replaceString2: $(a).attr("data-replaceString2"),
                loaderTitle: $(a).attr("data-loaderTitle"),
                loaderContent: $(a).attr("data-loaderContent")
            };
            c = $.extend(b, c);
            return c;
        }
        function d() {
            $("label.control-label select").each(function(a, d) {
                if (!$(d).data("isDDLChange")) {
                    $(d).data("isDDLChange", true);
                    var e = c(d);
                    $(d).on("change", function() {
                        var a = e.location;
                        if ($(d).val()) {
                            if ($(d).val().indexOf(";") >= 0) {
                                var c = $(d).val().split(";", 2);
                                var f = c[0];
                                var g = c[1];
                                a = a.replace(e.replaceString, f);
                                a = a.replace(e.replaceString2, g);
                            } else if ($(d).val().length > 0) {
                                a = a.replace(e.replaceString, $(d).val());
                            } else {
                                a = e.deleteLocation;
                            }
                        } else {
                            a = e.deleteLocation;
                        }
                        var h = b.getAjaxLoader(e.loaderTitle, e.loaderContent);
                        h.load(a);
                    });
                }
            });
        }
        d();
    };
    Carstore.prototype.loadCommonInputSliders = function() {
        var a = this;
        function b(a) {
            var b = {
                location: "",
                deleteMinLocation: "",
                deleteMaxLocation: "",
                replaceMinString: "",
                replaceMaxString: "",
                initMin: 0,
                initMax: 100,
                currentValue: 0,
                loaderTitle: null,
                loaderContent: null
            }, c = {
                location: $(a).attr("data-location"),
                deleteMinLocation: $(a).attr("data-deleteMinLocation"),
                deleteMaxLocation: $(a).attr("data-deleteMaxLocation"),
                replaceMinString: $(a).attr("data-replaceMinString"),
                replaceMaxString: $(a).attr("data-replaceMaxString"),
                initMin: $(a).data("slider-min"),
                initMax: $(a).data("slider-max"),
                currentValue: $(a).data("slider-value"),
                step: $(a).data("slider-step"),
                loaderTitle: $(a).attr("data-loaderTitle"),
                loaderContent: $(a).attr("data-loaderContent")
            };
            c = $.extend(b, c);
            return c;
        }
        function c(b, c) {
            if (c.location && (c.replaceMinString || c.replaceMaxString)) {
                $(b).on("change", function() {
                    var b = $(this).val();
                    var d, e;
                    if (!b || b.length == 0) return;
                    if (typeof b == "string") d = b; else if (b.length == 2) {
                        d = b[0];
                        e = b[1];
                    }
                    if (typeof b == "string" && d == c.currentValue[0]) return;
                    if (typeof b == "object" && d == c.currentValue[0] && e == c.currentValue[1]) return;
                    var f = c.location;
                    if (typeof b == "string") {
                        if (d) {
                            f = f.replace(c.replaceMinString, d);
                        } else {
                            f = f.replace(c.replaceMinString, "");
                        }
                    } else {
                        if (d && d != c.initMin) {
                            f = f.replace(c.replaceMinString, d);
                        } else {
                            f = f.replace(c.replaceMinString, "");
                        }
                        if (e && e != c.initMax) {
                            f = f.replace(c.replaceMaxString, e);
                        } else {
                            f = f.replace(c.replaceMaxString, "");
                        }
                    }
                    var g = a.getAjaxLoader(c.loaderTitle, c.loaderContent);
                    g.load(f);
                });
            }
        }
        function d() {
            $(a.data.inputSliderSelectors).each(function(a, d) {
                if (!$(d).data("isNoUiSlider")) {
                    $(d).data("isNoUiSlider", true);
                    var e = b(d);
                    $(d).noUiSlider({
                        connect: e.currentValue.length > 1 ? true : "lower",
                        range: {
                            min: e.initMin,
                            max: e.initMax
                        },
                        start: e.currentValue,
                        step: e.step,
                        serialization: {
                            lower: [ $.Link({
                                target: e.currentValue.length > 1 ? $(this).parents(".controls:first").find(".slider-legend-min:first") : $(this).parents(".controls:first").find(".slider-legend-max:first"),
                                method: "text"
                            }) ],
                            upper: [ $.Link({
                                target: $(this).parents(".controls:first").find(".slider-legend-max:first"),
                                method: "text"
                            }) ],
                            format: {
                                decimals: 0
                            }
                        }
                    });
                    c(d, e);
                }
            });
        }
        d();
        $(window).on(a.data.eventUnveilSucess, function(a, b, c) {
            if (c.indexOf("noUiSlider") >= 0) {
                d();
            }
        });
    };
    Carstore.prototype.loadCommonSelectMultiple = function() {
        $("select[multiple]").not(".nomultiselect").each(function(a, b) {
            $(b).multiselect({
                buttonText: function(a, b) {
                    if (a.length == 0) {
                        return '--- <i class="icon-chevron"></i>';
                    } else {
                        var c = "";
                        a.each(function() {
                            var a = $(this).attr("label") !== undefined ? $(this).attr("label") : $(this).text();
                            c += a + ", ";
                        });
                        return c.substr(0, c.length - 2) + ' <i class="icon-chevron"></i>';
                    }
                },
                buttonWidth: "100%"
            });
            var c = $(b).parent().find("button.multiselect");
            c.on("click", function() {
                $(document).one("touchstart click", function() {
                    c.trigger("keydown");
                });
            });
        });
    };
    Carstore.prototype.loadCommonScrollToTop = function() {
        $(".modal:not(.modal-fullscreen)").on("show", function() {
            $("body, html").animate({
                scrollTop: 0
            });
        });
    };
    Carstore.prototype.loadCommonPrintActions = function() {
        $("[data-action=print]").on("click", function(a) {
            a.preventDefault();
            window.print();
        });
    };
    Carstore.prototype.loadCommonIEPlaceholderFix = function() {
        $("input, textarea", ".lt-ie9, .ie9").placeholder();
    };
    Carstore.prototype.loadCommonTooltips = function() {
        var a = this;
        function b() {
            $(a.data.tooltipSelectors).each(function(b, c) {
                if (!$(c).data("isToolTip")) {
                    $(c).data("isToolTip", true);
                    var d = {
                        trigger: "click",
                        html: true
                    };
                    if ($(c).attr("data-tooltip-trigger") && $(c).attr("data-tooltip-trigger").length > 0) {
                        d.trigger = $(c).attr("data-tooltip-trigger");
                    }
                    if ($(c).attr("data-tooltip-placement") && $(c).attr("data-tooltip-placement").length > 0) {
                        d.placement = $(c).attr("data-tooltip-placement");
                    }
                    $(c).tooltip(d).on("click", function(b) {
                        $(a.data.tooltipSelectors).not($(this)).tooltip("hide");
                        b.preventDefault();
                    }).on("hide", function(a) {
                        a.stopPropagation();
                    });
                }
            });
        }
        b();
        $(window).on(a.data.eventUnveilSucess, function(a, c, d) {
            if (d.indexOf("data-toggle") >= 0 && d.indexOf("tooltip") >= 0) {
                b();
            }
        });
    };
    Carstore.prototype.loadCommonAjaxContentTips = function() {
        var a = this;
        function b() {
            $(a.data.ajaxTipsSelectors).each(function(a, b) {
                if (!$(b).data("isAjaxTips")) {
                    $(b).data("isAjaxTips", true);
                    $(b).on("click", function(a) {
                        $this = $(this);
                        if ($this[0].tagName.toLowerCase() == "a") {
                            a.stopPropagation();
                            a.preventDefault();
                        }
                        if (!$this.data("TipsContentLoaded")) {
                            var b = $this.attr("data-AjaxContentUrl");
                            if (b) {
                                $.ajax({
                                    url: b,
                                    type: "get",
                                    dataType: "html",
                                    success: function(a) {
                                        $this.attr("data-original-title", a).tooltip({
                                            selector: "a[data-toggle=tooltip]",
                                            trigger: "hover",
                                            html: true
                                        }).tooltip("setContent").tooltip("show");
                                        $this.data("TipsContentLoaded", true);
                                    },
                                    error: function() {
                                        $this.data("TipsContentLoaded", false);
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }
        b();
        $(window).on(a.data.eventUnveilSucess, function(a, c, d) {
            if (d.indexOf("data-toggle") >= 0 && d.indexOf("tooltip") >= 0 && d.indexOf("data-AjaxContentUrl") >= 0) {
                b();
            }
        });
    };
    Carstore.prototype.loadMultiSelectEvent = function() {
        var a = this;
        function b(a) {
            var b = {
                countSelectors: "",
                CurrentValue: "",
                rawUrl: "",
                location: "",
                deleteLocation: "",
                replaceString: "",
                ajaxMethod: "",
                CurrentCount: 0,
                textMultiSelect: "Elements",
                textReplace: "[TEXT]",
                defaultText: "",
                loaderTitle: null,
                loaderContent: null
            }, c = {
                countSelectors: $(a).attr("data-countSelectors"),
                CurrentValue: $(a).attr("data-CurrentValue"),
                rawUrl: $(a).attr("data-rawUrl"),
                location: $(a).attr("data-location"),
                deleteLocation: $(a).attr("data-deleteLocation"),
                replaceString: $(a).attr("data-replaceString"),
                ajaxMethod: $(a).attr("data-ajaxMethod"),
                CurrentCount: $(a).attr("data-CurrentCount"),
                textMultiSelect: $(a).attr("data-textMultiSelect"),
                textReplace: $(a).attr("data-textReplace"),
                defaultText: $(a).attr("data-defaultText"),
                loaderTitle: $(a).attr("data-loaderTitle"),
                loaderContent: $(a).attr("data-loaderContent")
            };
            c = $.extend(b, c);
            return c;
        }
        function c() {
            $(a.data.multiselectSelectors).not(".nomultiselect").each(function(a, c) {
                if (!$(c).data("isMultiSelect")) {
                    $(c).data("isMultiSelect", true);
                    var f = b(c);
                    var g = $(c).parent().find("button.multiselect");
                    var h = $(c).parent().find(".multiselect-container");
                    if (f.ajaxMethod) {
                        g.parent().data("loaded", false);
                    } else {
                        g.parent().data("loaded", true);
                    }
                    g.parent().data("open", false);
                    if (f.defaultText) {
                        g.html(decodeURIComponent(f.defaultText) + '<i class="icon-chevron"></i>');
                    }
                    d(c, f);
                    e(c, f);
                }
            });
        }
        function d(a, b) {
            var c = $(a).parent().find("button.multiselect");
            var d = $(a).parent().find(".multiselect-container");
            $(a).on("change", function() {
                var d = $("#Form-AjaxFilter-panel").is(":visible");
                if (!d) {
                    var e = $(a).find("[selected]").length;
                    if (e > 1) {
                        c.html(e + " " + decodeURIComponent(b.textMultiSelect) + '<i class="icon-chevron"></i>');
                    }
                    if (b.countSelectors) {
                        $(b.countSelectors).text(e);
                    }
                    g(a, b);
                }
            });
        }
        function e(a, b) {
            var c = $(a).parent().find("button.multiselect");
            var d = $(a).parent().find(".multiselect-container");
            c.click(function() {
                f();
                if (!c.parent().data("loaded")) {
                    h(a, b);
                } else {
                    if (c.parent().data("open")) {
                        c.parent().data("open", false);
                        c.parent().trigger("close");
                    } else {
                        c.parent().data("open", true);
                    }
                }
            });
            $(document).click(function() {
                f();
                if (c.parent().data("open")) {
                    c.parent().data("open", false);
                    c.parent().trigger("close");
                }
            });
        }
        function f() {
            $("button.multiselect").each(function(a, b) {
                if ($(b).parent().data("open")) {
                    $(b).parent().data("open", false);
                    $(b).parent().trigger("close");
                }
            });
        }
        function g(b, c) {
            var d = "";
            var e = [];
            var f = $(b).parent().find("button.multiselect");
            var g = $(b).parent().find(".multiselect-container");
            f.parent().find(":checked").not("[disabled]").each(function(a, b) {
                d += d.length > 0 ? ";" : "";
                d += $(b).val();
                e.push($.trim($(b).parent().text()));
            });
            if (d != c.CurrentValue) {
                var h = a.getAjaxLoader(c.loaderTitle, c.loaderContent);
                if (d.length > 0) {
                    var i = c.location.replace(c.replaceString, d);
                    var j = "";
                    if (e.length == 1) {
                        j = e[0];
                    }
                    if (c.textReplace) {
                        i = i.replace(c.textReplace, encodeURIComponent(j));
                    }
                    h.load(i);
                } else {
                    h.load(c.deleteLocation);
                }
            }
        }
        function h(b, c) {
            var d = $(b).parent().find("button.multiselect");
            var e = $(b).parent().find(".multiselect-container");
            var f = c.rawUrl;
            if (f && f.indexOf("#") >= 0) {
                var g = f.indexOf("#");
                f = f.substring(0, g);
            }
            f += f.indexOf("?") >= 0 ? "&" : "?";
            f += "AjaxRequest=" + c.ajaxMethod;
            d.parent().data("loaded", false);
            $.ajax({
                url: f,
                type: "get",
                dataType: "html",
                success: function(c) {
                    if (c) {
                        if (!d.parent().data("loaded")) {
                            d.parent().data("loaded", true);
                            d.parent().data("open", true);
                        }
                        $(b).parent().find(a.data.multiselectSelectors).html(c);
                        if (!$(b).hasClass("nomultiselect")) {
                            $(b).multiselect("rebuild");
                        }
                    }
                },
                error: function() {
                    d.parent().data("loaded", false);
                    d.parent().data("open", false);
                }
            });
        }
        $(document).ready(function() {
            c();
        });
    };
    Carstore.prototype.loadCommonPopovers = function() {
        var a = this;
        function b() {
            $(a.data.popoverSelectors).each(function(b, c) {
                if (!$(c).data("isPopOver")) {
                    $(c).data("isPopOver", true);
                    $(c).popover({
                        trigger: $(c).data("trigger") || "click",
                        delay: 500,
                        html: true,
                        placement: "bottom",
                        content: function() {
                            var a = $(this).data("content"), b = $(this).data("width"), c = $(this).data("height");
                            if (/^[http|\.\/|\.\.\/]/.test(a) && /.*\.[jpg|jpeg|gif|png]/.test(a)) {
                                a = '<img src="' + a + '" width="' + b + '" height="' + c + '" />';
                            }
                            return a;
                        }
                    }).on("click", function(b) {
                        $(a.data.popoverSelectors).not($(this)).popover("hide");
                        $(document).one("touchstart click", function() {
                            $(a.data.popoverSelectors).popover("hide");
                        });
                        if ($(this)[0].tagName.toLowerCase() == "a") {
                            b.stopPropagation();
                            b.preventDefault();
                        }
                    }).on("hide", function(a) {
                        a.stopPropagation();
                    });
                }
            });
        }
        b();
        $(window).on(a.data.eventUnveilSucess, function(a, c, d) {
            if (d.indexOf("data-toggle") >= 0 && d.indexOf("popover") >= 0) {
                b();
            }
        });
    };
    Carstore.prototype.loadCommonFormValidation = function() {
        var self = this;
        function loadFormValidation() {
            $(self.data.formValidationSelectors).filter(":not(.block-contact)").h5Validate({
                allValidSelectors: ":input:not(:button):not(:disabled):not(.novalidate):not([type=submit])",
                click: false
            }).find("select, input:not([type=submit]), textarea").not(".h5").on("validated", function(a, b) {
                if (!b) return;
                self.updateCommonFormFieldValidationMessage($(this));
            }).addClass("h5");
            $('input[type="submit"]', self.data.formValidationSelectors).not(".bound").on("click", function() {
                $(this).parents("form:first").trigger("submit");
            }).addClass("bound");
            $.checkAllCustomValidity = function(a) {
                var b = true;
                a.find("select, input:not([type=submit]), textarea").each(function(a, c) {
                    var d = $.CheckError($(c), {
                        valid: true
                    });
                    if (!d) {
                        b = false;
                    }
                });
                return b;
            };
            $.checkCustomValidity = function($elem) {
                var valid = true;
                if ($elem.is("[data-valid-fonction]")) {
                    var f = $elem.attr("data-valid-fonction").replace("{0}", '"' + $elem.val() + '"');
                    eval("valid = " + f + ";");
                }
                if ($elem.is("[type=radio]")) {
                    var allRadioSameName = $elem.parents("form").find('input[name="' + $elem.attr("name") + '"]');
                    if (allRadioSameName.filter("[required]").length > 0) {
                        var justOneIsRequired = allRadioSameName.filter("[required]").length != allRadioSameName.length;
                        if (justOneIsRequired && allRadioSameName.filter("[required]:checked").length <= 0) {
                            valid = false;
                        }
                    }
                }
                if ($elem.hasClass("geolocation")) {
                    if ($elem.data("geo-longitude") == undefined) {
                        valid = false;
                        $elem.removeClass("ui-state-valid").addClass("ui-state-error");
                        $(".control-group.retailer").hide();
                    }
                }
                return valid;
            };
            $.CheckError = function(a, b) {
                var c = a.parents(".control-group:first");
                var d = $.checkCustomValidity(a);
                c.removeClass("error success").addClass(b.valid && d ? "success" : "error").find(".help-block").remove();
                if (!b.valid || !d) {
                    var e = $("<span></span>").addClass("help-block").text(a.data("error"));
                    if (b.valid && a.attr("data-error-pattern") && !d) {
                        e = $("<span></span>").addClass("help-block").text(a.attr("data-error-pattern"));
                    }
                    if (a.attr("data-error-pattern") && b.customError) {
                        e = $("<span></span>").addClass("help-block").text(a.attr("data-error-pattern"));
                    }
                    if (a.attr("data-error-pattern") && b.patternMismatch) {
                        e = $("<span></span>").addClass("help-block").text(a.attr("data-error-pattern"));
                    } else if (a.attr("data-error-maxLength") && b.tooLong) {
                        e = $("<span></span>").addClass("help-block").text(a.attr("data-error-maxLength"));
                    }
                    c.append(e);
                    return false;
                }
                var f = a.parents("form:first");
                f.find("> .help-block").removeClass("error");
                f.find("> .form-actions").removeClass("error");
                f.find("> .form-actions button").removeClass("error");
                if (f.find(".error").length > 0) {
                    f.find("> .help-block").removeClass("error").addClass("error");
                    f.find("> .form-actions").removeClass("error").addClass("error");
                    f.find("> .form-actions button").removeClass("error").addClass("error");
                }
                return true;
            };
            $("form.block-contact").h5Validate({
                allValidSelectors: ":input:not(:button):not(:disabled):not(.novalidate):not([type=submit])"
            }).find("select, input:not([type=submit]), textarea").not(".h5").on("validated", function(a, b) {
                $.CheckError($(this), b);
            }).addClass("h5");
            $("form.block-contact").find("[data-valid-fonction]").on("input", function() {
                $.CheckError($(this), {
                    valid: true
                });
            });
            $("form.block-contact").find("[type=radio]").on("change", function() {
                $.CheckError($(this), {
                    valid: true
                });
            });
            $("form.block-contact").submit(function(a) {
                if ($(this).h5Validate("allValid") === false || !$.checkAllCustomValidity($(this))) {
                    a.preventDefault();
                }
            });
        }
        loadFormValidation();
    };
    Carstore.prototype.updateCommonFormFieldValidationMessage = function(a) {
        var b = this, c = a.parents(".control-group:first"), d = a.hasClass("ui-state-valid"), e = true, f = true, g;
        c.removeClass("error");
        $(".help-block", c).remove();
        $(".red-border", c).removeClass("red-border");
        if (c.find("select, input, textarea").length > 1) {
            c.find("select, input, textarea").each(function(a, c) {
                if ($(c).is("[required]") && !$(c).val()) {
                    e = false;
                    $(c).addClass(b.data.errorFormFieldClassName);
                }
            });
        }
        g = c.find("." + b.data.errorFormFieldClassName + ":not(:disabled):first").removeClass("red-border").addClass("red-border").data("error");
        if (!g && !e) {
            g = c.find("." + b.data.errorFormFieldClassName + ":first").removeClass("red-border").addClass("red-border").data("error");
        }
        if (!d || !e) {
            c.removeClass("error").addClass("error");
            c.append($("<span></span>").addClass("help-block").text(g || a.data("error")));
        }
    };
    Carstore.prototype.loadToogleTabs = function() {
        var a = this;
        function b(a) {
            $('[data-toggle="tab"]').parents(".active").removeClass("active");
            $(a).parent().removeClass("active").addClass("active");
            var b = $(a).attr("href");
            if (b && b.length > 0) {
                $(".tab-content").each(function(a, c) {
                    var d = $(b, $(c));
                    if (d && d.length > 0) {
                        $(c).find(".tab-pane").removeClass("in");
                        d.css({
                            opacity: 0
                        }).addClass("in");
                        d.animate({
                            opacity: 1
                        }, 800);
                    }
                });
            }
        }
        $('[data-toggle="tab"]').on("click", function(a) {
            a.preventDefault();
            b($(this));
        });
    };
    Carstore.prototype.loadToogleForms = function() {
        var a = this;
        function b(a) {
            if ($(a).parents("form:first").hasClass("off")) {
                var b = $(a).parents(".form-actions:first").find("form:not(.off):first");
                var c = $(a).parents("form:first");
                var d = c.find(".form-title").outerHeight(true);
                var e = b.innerHeight();
                b.removeClass("off").addClass("off");
                b.removeClass("closing").addClass("closing").css({
                    "overflow-y": "hidden",
                    height: e + "px"
                }).animate({
                    height: d + "px"
                }, function() {
                    $(".closing").removeClass("closing").css({
                        "overflow-y": "",
                        height: ""
                    });
                });
                $(a).parents("form:first").removeClass("off");
                var f = $(a).parents("form:first").innerHeight();
                c.removeClass("opening").addClass("opening").css({
                    "overflow-y": "hidden",
                    height: d + "px"
                }).animate({
                    height: f + "px"
                }, function() {
                    $(".opening").removeClass("opening").css({
                        "overflow-y": "",
                        height: ""
                    });
                });
            }
        }
        $(".form-actions").each(function(a, c) {
            var d = $(c);
            var e = $("form", d);
            e.removeClass("off").removeClass("form-tabs");
            if (e.length > 1) {
                e.addClass("form-tabs").filter(":first").nextAll().addClass("off");
                e.find(".form-title > a.title").each(function(a, c) {
                    $(c).on("click", function(a) {
                        a.preventDefault();
                        b($(this));
                    });
                });
            }
        });
    };
    Carstore.prototype.loadWCBUriListener = function() {
        var a = this;
        function b() {
            $("[href=#my-modal-webcallback]").each(function(a, b) {
                if (!$(b).data("isloadUri")) {
                    $(b).data("isloadUri", true);
                    var c = $("#my-modal-webcallback");
                    $(b).on("click", function(a) {
                        c.removeAttr("data-uri");
                        if ($(this).attr("data-uri")) {
                            c.attr("data-uri", $(this).attr("data-uri"));
                        }
                    });
                }
            });
        }
        b();
        $(window).on(a.data.eventUnveilSucess, function(a, c, d) {
            if (d.indexOf("href") >= 0 && d.indexOf("#my-modal-webcallback") >= 0) {
                b();
            }
        });
    };
    Carstore.prototype.loadSendDataForm = function(options) {
        var self = this;
        function initOptions(a) {
            var b = {
                ajaxMethod: "",
                ButtonSelectors: "#contact-form .form-actions .btn",
                id: "",
                carnum: "",
                version: "",
                options: "",
                color: "",
                trim: "",
                versionL: "",
                sendVehicle: false,
                loaderTitle: null,
                loaderContent: null
            };
            opts = {};
            if ($(a).attr("data-ajaxMethod")) opts.ajaxMethod = $(a).attr("data-ajaxMethod");
            if ($(a).attr("data-isAsync")) opts.isAsync = $(a).attr("data-isAsync");
            if ($(a).attr("data-idsitegeo")) opts.idsitegeo = $(a).attr("data-idsitegeo");
            if ($(a).attr("data-sendVehicle")) opts.sendVehicle = $(a).attr("data-sendVehicle");
            if ($(a).attr("data-loaderTitle")) opts.loaderTitle = $(a).attr("data-loaderTitle");
            if ($(a).attr("data-loaderContent")) opts.loaderContent = $(a).attr("data-loaderContent");
            opts = $.extend(b, opts);
            return opts;
        }
        function loadActionForm() {
            $("form.block-contact .form-actions button").each(function(i, e) {
                if (!$(e).data("isPDVContact")) {
                    $(e).data("isPDVContact", true);
                    var opts = initOptions(e);
                    var $form = $(e).parents("form:first");
                    $(e).on("click", function(event) {
                        event.preventDefault();
                        var $retailers = $("input.retailer-selected", $form);
                        if ($retailers && $retailers.length > 0) {
                            opts.idsitegeo = $retailers.val();
                        }
                        if ($form.h5Validate("allValid") && $.checkAllCustomValidity($form)) {
                            var jSonData = "";
                            $form.find("[name]").each(function(a, b) {
                                var c;
                                if ($(b).is("input[type=radio]") && $(b).is(":checked")) {
                                    c = $(b).val();
                                } else if ($(b).is("input[type=checkbox]")) {
                                    c = $(b).is(":checked") ? "1" : "0";
                                } else if (!$(b).is("input[type=radio]")) {
                                    c = $(b).val();
                                }
                                if (c) {
                                    var d = $(b).attr("name");
                                    var e = $form.attr("data-nameseparator");
                                    if (e) {
                                        var f = d.lastIndexOf(e);
                                        if (f >= 0) {
                                            d = d.substring(f + 1, d.length);
                                        }
                                    }
                                    if (jSonData.length > 0) jSonData += "&";
                                    jSonData += d + "=" + c;
                                }
                            });
                            var uri = location.href;
                            var datauri = $form.parents(".modal:first").attr("data-uri");
                            if (datauri) {
                                uri = datauri;
                            }
                            var isasync = false;
                            if (opts.isAsync) {
                                isasync = opts.isAsync.toLowerCase() == "true" || opts.isAsync == "1";
                            }
                            var modalID = $form.parents(".modal:first").attr("id");
                            if (modalID && modalID.indexOf("warning") >= 0) {
                                if ($("[data-contact-uri]").length > 0 && $("[data-contact-uri]").attr("data-contact-uri") != "") {
                                    uri = $("[data-contact-uri]").attr("data-contact-uri");
                                }
                                var carlist = "";
                                $(".car-list .result", $("#cartWarning")).each(function(a, b) {
                                    if (carlist.length > 0) carlist += ";";
                                    carlist += $(b).attr("id");
                                });
                                if (carlist.length > 0) {
                                    if (jSonData.length > 0) jSonData += "&";
                                    jSonData += "carlist=" + carlist;
                                }
                            } else {
                                if (modalID && modalID.indexOf("contact-selection") >= 0) {
                                    var carlist = "";
                                    $(".car-list .result").each(function(a, b) {
                                        if (carlist.length > 0) carlist += ";";
                                        carlist += $(b).attr("id");
                                    });
                                    if (carlist.length > 0) {
                                        if (jSonData.length > 0) jSonData += "&";
                                        jSonData += "carlist=" + carlist;
                                    }
                                }
                            }
                            if (uri && uri.indexOf("#") >= 0) {
                                var index = uri.indexOf("#");
                                uri = uri.substring(0, index);
                            }
                            var urlWS = uri;
                            if (uri.indexOf("?") >= 0) {
                                uri += "&AjaxRequest=" + opts.ajaxMethod;
                            } else {
                                uri += "?AjaxRequest=" + opts.ajaxMethod;
                            }
                            if ($(this).attr("data-guid")) {
                                uri += "&guid=" + $(this).attr("data-guid");
                            }
                            if (opts.idsitegeo) {
                                uri += "&idsitegeo=" + opts.idsitegeo;
                            }
                            if (modalID && modalID.indexOf("contact-selection") >= 0) {
                                uri += "&sendVehicle=true";
                            } else if (opts.sendVehicle && opts.sendVehicle == "true") {
                                uri += "&sendVehicle=true";
                            } else {
                                uri += "&sendVehicle=false";
                            }
                            if (opts.formsActive != undefined) {
                                if (opts.formsActive.toLowerCase().toString() == "true") {
                                    $form.find("[formsfieldname]").each(function(a, b) {
                                        var c;
                                        if ($(b).is("input[type=radio]") && $(b).is(":checked")) {
                                            if ($(b).val().split(";").length > 2) {
                                                var d = $(b).val().split(";")[2];
                                                c = d;
                                            } else {
                                                c = $(b).val();
                                            }
                                        } else if ($(b).is("input[type=checkbox]") && $(b).is(":checked")) {
                                            c = "TRUE";
                                        } else if (!$(b).is("input[type=radio]") && !$(b).is("input[type=checkbox]")) {
                                            c = $(b).val();
                                            if (c.indexOf("&") >= 0) {
                                                c = c.replace(/\&/g, "%26");
                                            }
                                            if (c.indexOf("?") >= 0) {
                                                c = c.replace(/\?/g, "%3F");
                                            }
                                        }
                                        if (c) {
                                            var e = $(b).attr("formsfieldname");
                                            if (jSonData.length > 0) jSonData += "&";
                                            jSonData += e + "=" + c;
                                        }
                                    });
                                    jSonData += "&HTTP_USER_AGENT=" + encodeURIComponent(navigator.userAgent);
                                    if (jSonData.indexOf("TC_REQUEST_AN_OFFER") > 0) {
                                        jSonData = jSonData.replace(/TC_REQUEST_AN_OFFER=(.+?)\&/, "TC_REQUEST_AN_OFFER=TRUE&");
                                    } else {
                                        jSonData += "&TC_REQUEST_AN_OFFER=TRUE";
                                    }
                                    if (jSonData.indexOf("SBS_COM_OFFER") > 0) {
                                        jSonData = jSonData.replace(/SBS_COM_OFFER=(.+?)\&/, "SBS_COM_OFFER=TRUE&");
                                    } else {
                                        jSonData += "&SBS_COM_OFFER=FALSE";
                                    }
                                    if (jSonData.indexOf("BUY_BACK") > 0) {
                                        jSonData = jSonData.replace(/BUY_BACK=(.+?)\&/, "BUY_BACK=TRUE&");
                                    } else {
                                        jSonData += "&BUY_BACK=FALSE";
                                    }
                                    if (jSonData.indexOf("SBS_COM_OFFER_EMAIL") > 0) {
                                        jSonData = jSonData.replace(/SBS_COM_OFFER_EMAIL=(.+?)\&/, "SBS_COM_OFFER_EMAIL=TRUE&");
                                    } else {
                                        jSonData += "&SBS_COM_OFFER_EMAIL=FALSE";
                                    }
                                    if (jSonData.indexOf("SBS_COM_OFFER_PHONE") > 0) {
                                        jSonData = jSonData.replace(/SBS_COM_OFFER_PHONE=(.+?)\&/, "SBS_COM_OFFER_PHONE=TRUE&");
                                    } else {
                                        jSonData += "&SBS_COM_OFFER_PHONE=FALSE";
                                    }
                                    if (jSonData.indexOf("SRV_INTERESTED_SERVICE_INSURANCE") > 0) {
                                        jSonData = jSonData.replace(/SRV_INTERESTED_SERVICE_INSURANCE=(.+?)\&/, "SRV_INTERESTED_SERVICE_INSURANCE=TRUE&");
                                    } else {
                                        jSonData += "&SRV_INTERESTED_SERVICE_INSURANCE=FALSE";
                                    }
                                    if (jSonData.indexOf("SRV_INTERESTED_SERVICE_MORTAGE") > 0) {
                                        jSonData = jSonData.replace(/SRV_INTERESTED_SERVICE_MORTAGE=(.+?)\&/, "SRV_INTERESTED_SERVICE_MORTAGE=TRUE&");
                                    } else {
                                        jSonData += "&SRV_INTERESTED_SERVICE_MORTAGE=FALSE";
                                    }
                                }
                            }
                            $.ajax({
                                url: uri,
                                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                                type: "POST",
                                data: jSonData,
                                async: isasync,
                                success: function(data) {
                                    var response = Ajax_ParseResponse(data);
                                    var urlConfirmation = response["confirmation"];
                                    if (urlConfirmation) {
                                        var customDocumentLoader = self.getAjaxLoader(opts.loaderTitle, opts.loaderContent);
                                        customDocumentLoader.load(urlConfirmation);
                                    } else {
                                        var modalID = $form.parents(".modal:first").attr("id");
                                        if (modalID && modalID.indexOf("contact-selection") >= 0) {
                                            $(".block-cart").find(".cart-remove").each(function(a, b) {
                                                $(b).click();
                                            });
                                        }
                                        var $btnClose = $form.parent().parent().find(".modal-header button.close");
                                        if ($btnClose && $btnClose.length > 0) {
                                            $btnClose.click();
                                        }
                                        var wcbFunction = response["wcbfunction"];
                                        if (wcbFunction) {
                                            eval(response["wcbfunction"]);
                                        } else {
                                            var messageTitle = response["msgtitle"];
                                            var closelabel = response["closelabel"];
                                            var message = response["msg"];
                                            var status = response["status"];
                                            if (message) {
                                                $("#my-modal-confirmation-message").remove();
                                                var htmlModal = '<div id="my-modal-confirmation-message" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true">';
                                                htmlModal += '<div class="modal-header">';
                                                htmlModal += '<div class="modal-close">';
                                                htmlModal += '<button type="button" class="btn close" data-dismiss="modal" aria-hidden="true">' + closelabel + '<i class="icon-remove"></i></button>';
                                                htmlModal += "</div>";
                                                htmlModal += "</div>";
                                                htmlModal += '<div class="modal-body"><h1 class="title">';
                                                if (status && status == "ok") {
                                                    htmlModal += '<i class="icon-confirm"></i>';
                                                } else {
                                                    htmlModal += '<i class="icon-warning"></i>';
                                                }
                                                htmlModal += "<span>" + messageTitle + "</span></h1>";
                                                htmlModal += '<p class="desc">' + message + "</p>";
                                                htmlModal += "</div>";
                                                htmlModal += "</div>";
                                                $("body").append(htmlModal);
                                                $("#my-modal-confirmation-message").modal({
                                                    keyboard: false,
                                                    show: true
                                                });
                                            }
                                        }
                                    }
                                },
                                error: function(a) {
                                    var b = Ajax_ParseResponse(a);
                                    var c = b["msgtitle"];
                                    var d = b["closelabel"];
                                    var e = b["msg"];
                                    var f = b["status"];
                                    if (e) {
                                        $("#my-modal-confirmation-message").remove();
                                        var g = '<div id="my-modal-confirmation-message" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true">';
                                        g += '<div class="modal-header">';
                                        g += '<div class="modal-close">';
                                        g += '<button type="button" class="btn close" data-dismiss="modal" aria-hidden="true">' + d + '<i class="icon-remove"></i></button>';
                                        g += "</div>";
                                        g += "</div>";
                                        g += '<div class="modal-body"><h1 class="title">';
                                        if (f && f == "ok") {
                                            g += '<i class="icon-confirm"></i>';
                                        } else {
                                            g += '<i class="icon-warning"></i>';
                                        }
                                        g += "<span>" + c + "</span></h1>";
                                        g += '<p class="desc">' + e + "</p>";
                                        g += "</div>";
                                        g += "</div>";
                                        $("body").append(g);
                                        $("#my-modal-confirmation-message").modal({
                                            keyboard: false,
                                            show: true
                                        });
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
        function Ajax_ParseResponse(a) {
            var b = new Array();
            var c = a.split(";;");
            for (var d = 0; d < c.length; d++) {
                var e = c[d].split("::");
                b[e[0]] = e[1];
            }
            return b;
        }
        loadActionForm();
    };
    Carstore.prototype.loadWCBListener = function(options) {
        var _defaultOpts = {
            ajaxMethod: "SendContactWCB",
            ButtonSelectors: "#call-form .form-actions .btn,#call-warning-form .form-actions .btn",
            formSelector: "#call-form,#call-warning-form"
        };
        var opts = _defaultOpts;
        if (options) {
            opts = $.extend(_defaultOpts, options);
        }
        $(opts.ButtonSelectors).each(function(i, e) {
            var $form = $(this).parents("form:first");
            $(e).on("click", function(event) {
                event.preventDefault();
                opts.id = "";
                if ($("input.retailer-selected", $form) && $("input.retailer-selected", $form).length > 0) {
                    var dealearID = $("input.retailer-selected", $form).val();
                    if (dealearID) {
                        opts.id = dealearID;
                    }
                }
                if ($form.h5Validate("allValid") && $.checkAllCustomValidity($(this))) {
                    var jSonData = "";
                    $form.find("[name]").each(function(a, b) {
                        var c;
                        if ($(b).is("input[type=radio]") && $(b).is(":checked")) {
                            c = $(b).val();
                        } else if (!$(b).is("input[type=radio]")) {
                            c = $(b).val();
                        }
                        if (c) {
                            var d = $(b).attr("name");
                            var e = $form.attr("data-nameseparator");
                            if (e) {
                                var f = d.lastIndexOf(e);
                                if (f >= 0) {
                                    d = d.substring(f + 1, d.length);
                                }
                            }
                            if (jSonData.length > 0) jSonData += "&";
                            jSonData += d + "=" + c;
                        }
                    });
                    var uri = location.href;
                    var datauri = $form.parents(".modal:first").attr("data-uri");
                    if (datauri) {
                        uri = datauri;
                    }
                    var modalID = $form.parents(".modal:first").attr("id");
                    if (modalID && modalID.indexOf("warning") >= 0) {
                        if ($("[data-contact-uri]").length > 0 && $("[data-contact-uri]").attr("data-contact-uri") != "") {
                            uri = $("[data-contact-uri]").attr("data-contact-uri");
                        }
                        var carlist = "";
                        $(".car-list .result", $("#cartWarning")).each(function(a, b) {
                            if (carlist.length > 0) carlist += ";";
                            carlist += $(b).attr("id");
                        });
                        if (carlist.length > 0) {
                            if (jSonData.length > 0) jSonData += "&";
                            jSonData += "carlist=" + carlist;
                        }
                    } else {
                        if (modalID && modalID.indexOf("contact-selection") >= 0) {
                            var carlist = "";
                            $(".car-list .result").each(function(a, b) {
                                if (carlist.length > 0) carlist += ";";
                                carlist += $(b).attr("id");
                            });
                            if (carlist.length > 0) {
                                if (jSonData.length > 0) jSonData += "&";
                                jSonData += "carlist=" + carlist;
                            }
                        }
                    }
                    if (uri && uri.indexOf("#") >= 0) {
                        var index = uri.indexOf("#");
                        uri = uri.substring(0, index);
                    }
                    if (uri.indexOf("?") >= 0) {
                        uri += "&AjaxRequest=" + opts.ajaxMethod;
                    } else {
                        uri += "?AjaxRequest=" + opts.ajaxMethod;
                    }
                    uri += "&guid=" + $(this).attr("data-guid");
                    if (opts.id != "") {
                        uri += "&idsitegeo=" + opts.id;
                    }
                    $.ajax({
                        url: uri,
                        contentType: "application/x-www-form-urlencoded; charset=utf-8",
                        type: "POST",
                        data: jSonData,
                        success: function(data) {
                            var response = Ajax_ParseResponse(data);
                            var modalID = $(opts.formSelector).parents(".modal:first").attr("id");
                            if (modalID && modalID.indexOf("contact-selection") >= 0) {
                                $(".block-cart").find(".cart-remove").each(function(a, b) {
                                    $(b).click();
                                });
                            }
                            $(opts.formSelector).each(function(a, b) {
                                var c = $(b).parent().parent().find(".modal-header button.close");
                                c.click();
                            });
                            var wcbFunction = response["wcbfunction"];
                            if (wcbFunction) {
                                eval(response["wcbfunction"]);
                            } else {
                                var message = $(".modal-body", $("#my-modal-confirm-contact"));
                                message.html(response["msg"]);
                                $("#my-modal-confirm-contact").modal("show");
                            }
                        }
                    });
                }
            });
        });
        function Ajax_ParseResponse(a) {
            var b = new Array();
            var c = a.split(";;");
            for (var d = 0; d < c.length; d++) {
                var e = c[d].split("!!");
                b[e[0]] = e[1];
            }
            return b;
        }
    };
    Carstore.prototype.loadDropDownScroll = function() {
        var a = this;
        var b = ".dropdown-list > .dropdown-menu:not(.no-scroll)";
        function c() {
            $(b).each(function(a, b) {
                if (!$(b).data("hcScroll")) {
                    $(b).hcScroll();
                }
            });
        }
        c();
        $(window).on(a.data.eventUnveilSucess, function(a, b, d) {
            if (d.indexOf("dropdown-menu")) {
                c();
            }
        });
    };
    Carstore.prototype.loadCarselectorScroll = function() {
        var a = this;
        var b = ".scrollable:visible";
        function c() {
            $(b).hcScroll({
                responsive: [ {
                    breakpoint: 747,
                    settings: {
                        activated: false
                    }
                } ]
            });
        }
        $("#my-modal-carselector").on("shown", function() {
            setTimeout(function() {
                c();
            }, 200);
        });
        $("#my-modal-carselector").on("hide", function() {
            $("body").removeClass("noScroll");
        });
    };
    Carstore.prototype.loadMapList = function() {
        var a = this;
        var b = ".scrollable:visible";
        function c() {
            $(b).hcScroll({
                responsive: [ {
                    breakpoint: 747,
                    settings: {
                        activated: true
                    }
                } ]
            });
        }
        $("#my-modal-map").on("shown", function() {
            setTimeout(function() {
                c();
            }, 200);
        });
        $("#my-modal-map").on("hide", function() {
            $("body").removeClass("noScroll");
        });
        $(".open-map").each(function(a, b) {
            if (!$(b).data("openMapClick")) {
                $(b).data("openMapClick", true);
                $(b).on("click", function() {
                    $(this).toggleClass("open");
                    $(this).prev(".map").toggleClass("open");
                });
            }
        });
    };
    Carstore.prototype.loadSliderVehicle = function() {
        var a = this;
        var b = $(".carouselSlider-contents").first();
        var c = $(".carouselSlider-thumbs").first();
        var d = $(".slider-zoom").first();
        var e = false;
        b.slick({
            lazyLoad: "ondemand",
            dots: true,
            autoplay: true,
            infinite: true,
            draggable: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            onAfterChange: function(a, b) {
                var d = $(".thumb", c).removeClass("active").filter(function(a) {
                    return a == b;
                }).addClass("active");
                var e = Math.ceil(d.parents(".slick-list:first").width() / d.width());
                var f = Math.floor(b / e) * e;
                if (d.length == 0) {
                    d = $(".thumb:first", c).addClass("active");
                    f = 0;
                }
                if (f != c.slickCurrentSlide()) {
                    c.slickGoTo(f);
                }
            }
        });
        c.hide();
        c.slick({
            lazyLoad: "ondemand",
            dots: false,
            infinite: false,
            draggable: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [ {
                breakpoint: 480,
                settings: {
                    lazyLoad: "ondemand",
                    dots: false,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            } ]
        });
        c.show();
        function f() {
            c.find(".thumb").each(function(a, d) {
                if (!$(d).data("isVehicleThumbs")) {
                    $(d).data("isVehicleThumbs", true);
                    $(d).click(function() {
                        $(".thumb", c).removeClass("active");
                        $(d).addClass("active");
                        b.slickGoTo(a);
                        b.slickPause();
                        e = true;
                    });
                    $(d).hover(function() {
                        b.slickPause();
                    }, function() {
                        if (!e) b.slickPlay();
                    });
                }
            });
            $(".slick-dots button").each(function(a, c) {
                $(c).on("click", function() {
                    b.slickPause();
                    e = true;
                });
            });
        }
        function g() {
            if (d && d.is(":visible")) {
                b.find("img").each(function(a, b) {
                    if (!$(b).data("isImgCarrouselContents")) {
                        $(b).data("isImgCarrouselContents", true);
                        $(b).click(function() {
                            if (d.is(":visible")) {
                                d.trigger("click");
                            }
                        });
                    }
                });
            }
        }
        if (d && d.is(":visible")) {
            g();
            var h = false;
            $("#divSlider").on("cloned", function(a, d) {
                b.slickPause();
                e = true;
                if (h === false) {
                    h = true;
                    $(d).attr("id", "divSlider-clone");
                    $(d).attr("class", "containerCarouselSlider carouselSlider-clone-contents");
                    $(d).removeAttr("style");
                    var f = $(d).find(".slick-slide");
                    $(f).not('[class*="slick-cloned"]').each(function(a, b) {
                        $(b).removeClass("slick-active").find("img").removeClass("slick-loading");
                        $(b).removeAttr("style").removeClass("slick-slide").appendTo($(d));
                    });
                    $(d).find('[class*="slick"]').remove();
                    setTimeout(function() {
                        $(d).slick({
                            lazyLoad: "ondemand",
                            dots: true,
                            infinite: true,
                            draggable: false,
                            speed: 300,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            onInit: function(a) {
                                var b = parseInt($(".thumb.active", c).first().attr("data-slide-index"));
                                if (b > 0) {
                                    setTimeout(function() {
                                        if ($(d).slick) {
                                            $(d).slickGoTo(b);
                                        }
                                    }, 250);
                                }
                            }
                        });
                        $("body, html").animate({
                            scrollTop: 0
                        });
                        h = false;
                    }, 250);
                }
            });
        }
        function i() {
            var a = $("img[data-lazy]", $(".carouselSlider-thumbs-add")).length;
            if (a == 0) {
                $(".block-slider .delay").css("margin-top", "-23px");
            } else {
                $("img[data-lazy]", $(".carouselSlider-thumbs-add")).each(function(a, d) {
                    var e = $(this).attr("src");
                    var h = $(this).attr("data-lazy");
                    if (!e || e != h) {
                        $(this).attr("slick-index", a + 1).attr("src", $(this).attr("data-lazy")).load(function() {
                            c.slickAdd('<div class="thumb">' + $(this).parent().html() + "</div>");
                            b.slickAdd('<div class="thumb">' + $(this).parent().html() + "</div>");
                            f();
                            g();
                            j();
                        });
                    }
                });
            }
        }
        function j() {
            c.find(".thumb").each(function(a, b) {
                $(b).attr("data-slide-index", new String(a));
            });
        }
        i();
        f();
    };
    Carstore.prototype.loadSliderPromo = function() {
        var a = this;
        var b = $(".slideshow img").length;
        if (b > 1) {
            $(".slideshow").slick({
                lazyLoad: "ondemand",
                dots: b > 2,
                infinite: b > 2,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: b > 2,
                autoplay: b > 2,
                responsive: [ {
                    breakpoint: 480,
                    settings: {
                        lazyLoad: "ondemand",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        autoplay: true,
                        dots: true
                    }
                } ]
            });
            if (b == 2) {
                $(".slideshow .slick-slide").addClass("slick-active");
            }
        }
    };
    Carstore.prototype.loadHomePromo = function() {
        var a = this;
        var b = $("#" + $("#homePromoData").attr("data-input-selector"));
        var c = $("#" + $("#homePromoData").attr("data-search-btn-selector"));
        var d = $("#homePromoData").attr("data-warning-msg");
        c.on("click", function(a) {
            if ($("#homePromoData").attr("data-url-version")) {
                window.location.href = $("#homePromoData").attr("data-url-version");
            } else {
                if (b.val() == "" || b.val() == d) {
                    b.css({
                        color: "red",
                        border: "1px solid red"
                    });
                    return false;
                }
                if ($("#homePromoData").attr("data-ajax-url-vin")) {
                    var c = $("#homePromoData").attr("data-ajax-url-vin");
                    var e = "city=" + b.val();
                    if (b.data("geo-latitude") != undefined && b.data("geo-longitude") != undefined) {
                        e += "&lat=" + b.data("geo-latitude") + "&lng=" + b.data("geo-longitude");
                    }
                    $.ajax({
                        url: c,
                        data: e,
                        success: function(a) {
                            if (a && a.length > 0 && a != "KO") {
                                window.location.href = a;
                            }
                        }
                    });
                } else if ($("#homePromoData").attr("href") == "#my-modal-map") {
                    $("#homePromoData").data("initSearchAddress", b.val());
                    $("#homePromoData").trigger("mousedown");
                    $("#homePromoData").trigger("click");
                }
            }
        });
        $(document).keydown(function(a) {
            if (a.which == 13) {
                c.click();
                return false;
            }
        });
        if (!!b && b.length > 0) {
            if (b.hasClass("geolocation")) {
                b.on("change", function(a) {
                    b.data("geo-latitude", null);
                    b.data("geo-longitude", null);
                });
            }
            b.focus(function() {
                if ($(this).val() == d) {
                    $(this).val("");
                }
            }).blur(function() {
                if ($(this).val() == "") {
                    $(this).val(d);
                }
            });
            b.val(d);
            b.focus();
        }
    };
    Carstore.prototype.loadSliderModel = function() {
        var a = this;
        $(".carrousel-vehicle").each(function(a, b) {
            var c = $(b).find(".vehicle").length;
            $(b).slick({
                lazyLoad: "ondemand",
                dots: true,
                infinite: true,
                arrows: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                onInit: function() {
                    if ($(b).find(".slick-cloned").length <= 0) {
                        $(b).find(".slick-slide").removeClass("slick-active").addClass("slick-active");
                    }
                },
                onAfterChange: function() {
                    if ($(b).slickCurrentSlide() >= c - 4) {
                        setTimeout(function() {
                            var a = $(b).find(".slick-slide.slick-active").first();
                            var c = a.index() * a.width();
                            $(b).find(".slick-track").css("transform", "translate3d(-" + c + "px, 0px, 0px)");
                            $(b).find(".slick-track").css("-ms-transform", "translate(-" + c + "px, 0px)");
                        }, 100);
                    }
                },
                responsive: [ {
                    breakpoint: 480,
                    settings: {
                        lazyLoad: "ondemand",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        dots: true
                    }
                } ]
            });
        });
    };
    Carstore.prototype.loadRetailers = function() {
        var a = this;
        if ($(".block-region.open").length > 0) {
            var b = $(".block-region.open").position();
            $("html, body").animate({
                scrollTop: b.top
            });
        }
    };
    Carstore.prototype.initPrintPage = function() {
        var a = this;
        function b() {
            $("a[href]").removeAttr("href");
        }
        b();
        $(window).on(a.data.eventUnveilSucess, function(a, c, d) {
            if (d && d.toLowerCase().indexOf("href") >= 0) {
                b();
            }
        });
    };
    Carstore.prototype.loadPrintPage = function() {
        function a(a) {
            var b = window.location.href;
            if (b && b.indexOf("#") >= 0) {
                var c = b.indexOf("#");
                b = b.substring(0, c);
            }
            var d = {
                url: b + "&LoadDetails=true&print=true",
                message: "waiting"
            };
            var e = {};
            if ($(a).attr("data-url")) {
                e.url = $(a).attr("data-url");
            }
            if ($(a).attr("data-message")) {
                e.url = $(a).attr("data-message");
            }
            e = $.extend(d, e);
            return e;
        }
        function b() {
            $("#printDetail").each(function(b, c) {
                if (!$(c).data("isPrintPage")) {
                    $(c).data("isPrintPage", true);
                    var d = a(c);
                    $(c).printPage({
                        url: d.url,
                        message: d.message
                    });
                }
            });
        }
        b();
    };
    Carstore.prototype.loadSFG = function(options) {
        var self = this;
        var _defaultOpts = {
            ajaxMethod: "GeneralInfos_DisplaySFG",
            Selectors: "[id*=hlFinancial]",
            AccrocheTarget: ".sfgAccroche",
            MentionsTarget: ".sfgMentions",
            DtlTarget: ".financial-details"
        };
        var opts = _defaultOpts;
        if (options) {
            opts = $.extend(_defaultOpts, options);
        }
        function loadSFGListener() {
            $(document).on("click", opts.Selectors, function(evt) {
                var Parameters;
                eval("Parameters=" + $(this).attr("data-sfg"));
                if (Parameters.SfgUrl) {
                    var rc = new Array(0, 0);
                    if (window.showModalDialog && navigator.userAgent.toLowerCase().indexOf("chrome") < 0) rc = window.showModalDialog(Parameters.SfgUrl, "", "resizable;center:yes;dialogHeight:" + Parameters.SfgHeight + ";dialogWidth:" + Parameters.SfgHWidth + ";"); else rc = window.open(Parameters.SfgUrl, "", "menubar=no, status=no, scrollbars=no, menubar=no,width:" + Parameters.SfgHWidth + ", height:" + Parameters.SfgHeight);
                    var params = new Array();
                    params["SessionId"] = Parameters.SessionID;
                    var ajaxUrl = location.pathname;
                    ajaxUrl += "?AjaxRequest=" + opts.ajaxMethod;
                    for (var key in params) {
                        ajaxUrl += "&" + key + "=" + params[key];
                    }
                    $.ajax({
                        url: ajaxUrl,
                        success: function(a) {
                            var b = Ajax_ParseResponse(a);
                            if (!!b["accroche"]) {
                                $(opts.AccrocheTarget).html(b["accroche"]);
                                if (!!b["apdlegaltext"]) {
                                    var c = $(opts.DtlTarget).attr("id");
                                    var d = $("[data-local='#" + c + "']");
                                    var e;
                                    if (d && d.length > 0) e = d.detach();
                                    $(opts.MentionsTarget).html(b["apdlegaltext"]);
                                    if (e && e.length > 0) e.appendTo($(opts.MentionsTarget));
                                }
                                if (!!b["dtl"]) {
                                    $(opts.DtlTarget).html(b["dtl"]);
                                }
                            }
                        }
                    });
                }
            });
        }
        function Ajax_ParseResponse(a) {
            var b = new Array();
            var c = a.split(";;");
            for (var d = 0; d < c.length; d++) {
                var e = c[d].split("::");
                b[e[0]] = e[1];
            }
            return b;
        }
        loadSFGListener();
    };
    Carstore.prototype.loadUnveil = function() {
        var a = this, b = $(window), c = $(".unveil");
        function d() {
            c.each(function(b, f) {
                if (!$(f).hasClass("unveil-ack")) {
                    $(f).addClass("unveil-ack");
                    $(f).on("appeared", function() {
                        if (!$(this).data("isAppeared")) {
                            $(this).data("isAppeared", true);
                            var b = $(f).attr("unveil-url");
                            if (b && b.length > 0) {
                                $.ajax({
                                    url: b,
                                    type: "get",
                                    dataType: "html",
                                    success: function(b) {
                                        if (b) {
                                            if (b.indexOf("multiple")) {
                                                a.loadCommonSelectMultiple();
                                            }
                                            $(f).replaceWith(b);
                                            c = $(".unveil");
                                            d();
                                            e();
                                        } else {
                                            $(f).remove();
                                        }
                                        $(window).trigger(a.data.eventUnveilSucess, [ f, b ]);
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }
        function e() {
            var a = c.filter(function() {
                var a = $(this);
                if (a.hasClass("unveil-loadOnStart")) return true;
                if (a.is(":hidden")) return;
                var c = b.scrollTop(), d = c + b.innerHeight(), e = a.offset().top, f = e + a.innerHeight();
                return c <= f && e <= d;
            });
            loaded = a.trigger("appeared");
            c = c.not(loaded);
        }
        d();
        e();
        b.scroll(e);
        b.resize(e);
        b.on(a.data.eventUnveilRefresh, function() {
            c = $(".unveil");
            d();
            e();
        });
        $(".modal").on("shown", function() {
            setTimeout(function() {
                e();
            }, 310);
        });
    };
    Carstore.prototype.loadHomeSearchForm = function(a) {
        var b = this;
        var c = {
            ajaxDealerMethode: "DealerInfos_SearchDealerHomeOptions",
            ajaxModelMethode: "VehicleAjaxFilters_initHomeModelBodyStyleList",
            Loader: ".loadfiltera",
            maxCarModelChoices: b.data.maxCarModelChoices
        };
        var d = c;
        if ($("form:visible").attr("data-uri")) d.baseUriVersion = $("form:visible").attr("data-uri");
        if ($("#price").length) {
            if ($("#price").attr("data-minPriceUri")) d.MinPriceParamUri = $("#price").attr("data-minPriceUri");
            if ($("#price").attr("data-maxPriceUri")) d.MaxPriceParamUri = $("#price").attr("data-maxPriceUri");
        }
        if (a) d = $.extend(c, a);
        function e(a) {
            var b = "";
            var c = $(".car-selected-list", a);
            if (!!c && c.length > 0 && c.val().length > 0) {
                var d = c.attr("data-name");
                b = d + "=" + c.val();
            }
            return b;
        }
        function f() {
            var a = $(".noUiSlider:visible").data("slider-min");
            var b = $(".noUiSlider:visible").data("slider-max");
            var c = $(".noUiSlider:visible").val();
            var e = c[0];
            var f = c[1];
            var g = "";
            if (a != e) {
                g += g && g.length > 0 ? "&" : "";
                g += d.MinPriceParamUri + "=" + e;
            }
            if (b != f) {
                g += g && g.length > 0 ? "&" : "";
                g += d.MaxPriceParamUri + "=" + f;
            }
            return g;
        }
        function g(a) {
            var b = "";
            var c = $("input.geolocation:visible");
            if (c.length > 0 && c.val().length > 0) {
                if (!a) {
                    b += "lat=" + c.data("geo-latitude");
                    b += "&lng=" + c.data("geo-longitude");
                }
                if (b.length > 0) b += "&";
                b += "Cit=" + encodeURIComponent(c.val());
            }
            return b;
        }
        function h() {
            var a = "";
            var b = $('#retailers-list:visible  ul[id=retailers-list-item]> li:not(".unselected")');
            if ($("form#form-retailers").is(":visible") && !!b && b.length > 0) {
                var c = b.attr("data-value");
                var a = c.split(";")[1];
            } else {
                a = d.baseUriVersion;
                var h = g();
                if (!!h && h.length > 0) {
                    a += (a.indexOf("?") >= 0 ? "&" : "?") + h;
                }
            }
            var i = e("form:visible");
            if (!!i && i.length > 0) {
                a += (a.indexOf("?") >= 0 ? "&" : "?") + i;
            }
            if ($(".noUiSlider").is(":visible")) {
                var j = f();
                if (j && j.length > 0) {
                    a += (a.indexOf("?") >= 0 ? "&" : "?") + j;
                }
            }
            $("form:visible").attr("action", a);
        }
        function i(a) {
            var c;
            if (!!a && a.length > 0) {
                var e = $('#retailers-list  ul[id=retailers-list-item]> li:not(".unselected")', a);
                if (!!e && e.length > 0) {
                    var f = e.attr("data-value");
                    c = f.split(";")[1];
                } else {
                    c = d.baseUriVersion;
                }
            } else {
                c = d.baseUriVersion;
            }
            c += (c.indexOf("?") > -1 ? "&" : "?") + "AjaxRequest=" + d.ajaxModelMethode;
            $.ajax({
                url: c,
                type: "get",
                dataType: "html",
                beforeSend: function() {
                    $(d.Loader).show();
                },
                success: function(c) {
                    $(d.Loader).hide();
                    var e = !!a && a.length > 0 ? a.find(".car-list-item") : $(".car-list-item");
                    if (!!e && e.length > 0) {
                        e.html(c);
                        b.ClearAllSelectedModel();
                    }
                    var f = $(".car-selected-list", e.parent());
                    if (f.attr("data-preselect")) {
                        e.find('li.unselected[id="' + f.attr("data-preselect") + '"]').trigger("click");
                        f.removeAttr("data-preselect");
                    }
                },
                error: function() {
                    $(d.Loader).hide();
                }
            });
        }
        function j() {
            var a = $("input.geolocation");
            a.each(function(a, b) {
                $(b).on("geolocated", function() {
                    var a = $(b).parents("form:first");
                    if (a.is(":visible")) {
                        if ($(this).data("geo-latitude") != undefined && $(this).data("geo-longitude") != undefined) {
                            var c = $(this).data("geo-latitude");
                            var e = $(this).data("geo-longitude");
                            var f = $("#retailers-list:visible  ul[id=retailers-list-item]", a);
                            if (!!f && f.length > 0) {
                                var g = location.pathname;
                                g += "?lat=" + c;
                                g += "&lng=" + e;
                                g += "&AjaxRequest=" + d.ajaxDealerMethode;
                                $.ajax({
                                    url: g,
                                    type: "get",
                                    dataType: "html",
                                    beforeSend: function() {
                                        $(d.Loader).show();
                                    },
                                    success: function(a) {
                                        $(d.Loader).hide();
                                        f.html(a);
                                        var b = $("#retailers-list-item").find("li:first").text();
                                        $("#select-place-holder:visible").text(b);
                                        h();
                                        if (f.data("hcScroll")) {
                                            f.hcScroll("refresh");
                                        }
                                    },
                                    error: function() {
                                        $(d.Loader).hide();
                                    }
                                });
                            } else {
                                h();
                            }
                        }
                    }
                });
            });
        }
        function k() {
            $(document).on("click", "#retailers-list  ul[id=retailers-list-item]", function(a) {
                setTimeout(function() {
                    var a = $("#retailers-list  ul[id=retailers-list-item]");
                    var b = a.parents("form:first");
                    var c = a.find('li:not(".unselected")');
                    if (!!c && c.length > 0) {
                        h();
                        i(b);
                    } else {
                        b.attr("action", d.baseUriVersion);
                    }
                }, 200);
            });
        }
        function l() {
            $(document).on("click", 'a[href="#form-retailers"]', function(a) {
                $("#form-retailers").attr("action", "#");
                if ($(".lt-ie9 , .ie9") && $(".lt-ie9 , .ie9").length > 0) {
                    var c = $("#form-retailers").find(".geolocation").removeClass("geolocated").attr("placeholder");
                    if (!!c) {
                        $("#form-retailers").find(".geolocation").val(c);
                    }
                } else {
                    $("#form-retailers").find(".geolocation").val("").removeClass("geolocated");
                }
                var d = $('#retailers-list ul[id=retailers-list-item]> li:not(".unselected")', $("#form-retailers"));
                if (d && d.length > 0) {
                    var e = $("#retailers-list ul[id=retailers-list-item]> li:first", $("#form-retailers")).text();
                    $("#select-place-holder", $("#form-retailers")).text(e);
                    var f = $("ul[id=retailers-list-item]", $("#form-retailers"));
                    f.empty();
                    if (f.data("hcScroll")) {
                        f.hcScroll("refresh");
                    }
                    $(".retailer-selected", $("#form-retailers")).val("");
                    $("#addressForChange", $("#form-retailers")).val("");
                    i($("#form-retailers"));
                } else {
                    b.ClearAllSelectedModel();
                }
            });
        }
        function m() {
            $(document).on("click", 'a[href="#form-models"]', function(a) {
                $("#form-models").attr("action", "#");
                if ($(".lt-ie9 , .ie9") && $(".lt-ie9 , .ie9").length > 0) {
                    var c = $("#form-models").find(".geolocation").removeClass("geolocated").attr("placeholder");
                    if (!!c) {
                        $("#form-models").find(".geolocation").val(c);
                    }
                } else {
                    $("#form-models").find(".geolocation").val("").removeClass("geolocated");
                }
                b.ClearAllSelectedModel();
            });
        }
        function n() {
            $(".budget-box .noUiSlider").each(function(a, b) {
                $(b).on("change", function() {
                    h();
                });
            });
        }
        function o() {
            $("#form-models, #form-retailers").on("submit", function(a) {
                $inputGeo = $(this).find("input.geolocation");
                if (!!$inputGeo && $inputGeo.attr("required") && $inputGeo.data("geo-latitude") == undefined) {
                    $inputGeo.addClass(b.data.errorFormFieldClassName);
                    a.preventDefault();
                    return false;
                }
                return true;
            });
        }
        function p() {
            $(".model-choice-max").text(d.maxCarModelChoices);
        }
        i();
        j();
        k();
        l();
        m();
        n();
        o();
        p();
    };
    Carstore.prototype.loadDealersForLocation = function(options) {
        var self = this, $form = $(".span3 .form-flags.block-contact, #generic-form");
        var _default = {
            labelSelectRetailer: "",
            minCarModelChoices: 1,
            maxCarModelChoices: 3,
            ajaxDealerMethode: "SearchDealerHomeOptions",
            ajaxLoader: null
        };
        var opts = _default;
        if (options) opts = $.extend(_default, options);
        var $geoInput = $(".control-group input.geolocation", $form), $geoChoice = $("ul[id=retailers-list-item]", $form), $modelChoice = $("select[name=model]", $form), $submodelChoice = $("select[name=submodel]", $form), $modelAdd = $(".model-choice .model-add", $form), $PriceChoice = $(".price-choice .noUiSlider", $form), $Submit = $("button.submit", $form);
        $geoInput.on("geolocated", function() {
            if ($(this).data("geo-latitude") != undefined && $(this).data("geo-longitude") != undefined) {
                if ($(this).val() != $("#addressForChange").val()) {
                    $("#addressForChange").val($(this).val());
                    if (opts.ajaxDealerMethode) {
                        var urlRequest = location.pathname;
                        urlRequest += "?lat=" + $(this).data("geo-latitude");
                        urlRequest += "&lng=" + $(this).data("geo-longitude");
                        urlRequest += "&AjaxRequest=" + opts.ajaxDealerMethode;
                        var $modalWrapper = $(this).parents(".modal:first");
                        var modalID = "";
                        if ($modalWrapper && $modalWrapper.length > 0) {
                            modalID = $modalWrapper.attr("id");
                            if (modalID && modalID.indexOf("webcallback") >= 0) {
                                urlRequest += "&filterwcb=true";
                            }
                            if (modalID && modalID.indexOf("searchdealerphone") >= 0) {
                                urlRequest += "&withPhone=true";
                            }
                        }
                        var $retailer = $("ul[id=retailers-list-item]");
                        $retailer.attr("disabled", "disabled");
                        if ($("#NoDealerActivWCB").length > 0) {
                            $("#NoDealerActivWCB").removeClass("hidden").addClass("hidden");
                            $("#NoDealerActivWCB").nextAll(".form-actions").find("button").attr("disabled", "disabled");
                        }
                        $.ajax({
                            url: urlRequest,
                            type: "get",
                            dataType: "html",
                            beforeSend: function() {},
                            success: function(a) {
                                $retailer.empty();
                                $retailer.html(a);
                                if (a.indexOf('selected="selected"') > -1) $retailer.change();
                                var b = $("ul[id=retailers-list-item]").find("option");
                                if (!b || b.length == 0) {
                                    if (modalID && modalID.indexOf("webcallback") >= 0) {
                                        $("#NoDealerActivWCB", $form).removeClass("hidden");
                                    }
                                    if (modalID && modalID.indexOf("searchdealerphone") >= 0) {
                                        $("#NoDealerActivWCB", $form).removeClass("hidden");
                                    }
                                } else {
                                    if ($geoInput.length) {
                                        $("ul[id=retailers-list-item]").removeAttr("disabled");
                                        $("#NoDealerActivWCB", $form).nextAll(".form-actions").find("button").removeAttr("disabled");
                                        if (modalID && modalID.indexOf("searchdealerphone") >= 0) {
                                            $("#NoDealerActivWCB", $form).nextAll(".form-actions").find("button").on("click", function(a) {
                                                a.preventDefault();
                                                var b = $geoChoice.val().split(";");
                                                if (b.length > 5) {
                                                    var c = b[5];
                                                    window.location.href = "tel:" + c;
                                                }
                                            });
                                        }
                                    }
                                }
                                if ($("ul[id=retailers-list-item]").css("display") == "none") {
                                    $("ul[id=retailers-list-item]").css("display", "block");
                                }
                            },
                            error: function(xhr, status, error) {
                                var err = eval("(" + xhr.responseText + ")");
                                alert(err.Message);
                            }
                        });
                    }
                }
            }
        });
        $geoChoice.on("change", function() {
            if ($(this).val() != "") {
                $("form.block-contact ul[id=retailers-list-item]").val($(this).val());
            }
        });
    };
    function setCookie(a, b, c) {
        var d = new Date();
        d.setDate(d.getDate() + c);
        var e = b + ";path=/" + (c == null ? "" : "; expires=" + d.toUTCString());
        document.cookie = a + "=" + e;
    }
    function getCookie(a) {
        var b = document.cookie;
        var c = b.indexOf(" " + a + "=");
        if (c == -1) {
            c = b.indexOf(a + "=");
        }
        if (c == -1) {
            b = null;
        } else {
            c = b.indexOf("=", c) + 1;
            var d = b.indexOf(";", c);
            if (d == -1) {
                d = b.length;
            }
            b = b.substring(c, d);
        }
        return b;
    }
    function deleteCookie(a) {
        setCookie(a, "", -1);
    }
    window.Carstore = new Carstore();
})(jQuery);

(function(a) {
    var b = function() {
        var a = "", b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var c = 0; c < 20; c++) a += b.charAt(Math.floor(Math.random() * b.length));
        return a;
    };
    a.refreshGITID = function() {
        a('[id="TRACKING_ID"]').each(function(c, d) {
            a(d).val(b());
        });
    };
    a(document).ready(function() {
        a.refreshGITID();
    });
})(jQuery);