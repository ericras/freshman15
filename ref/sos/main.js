(function () {
    var h = void 0,
        k = !0,
        l = null,
        n = !1;

    function aa() {
        return function () {}
    }
    var o, p = this;

    function ca(a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }
    function da(a) {
        return "string" == typeof a
    }
    function ga(a) {
        return a[ha] || (a[ha] = ++ia)
    }
    var ha = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
        ia = 0;

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ma(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }
    function na(a, b, c) {
        na = Function.prototype.bind && -1 != ("" + Function.prototype.bind).indexOf("native code") ? ja : ma;
        return na.apply(l, arguments)
    }
    var oa = Date.now || function () {
            return +new Date
        };

    function r(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.M = b.prototype;
        a.prototype = new c
    }
    Function.prototype.bind = Function.prototype.bind || function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return na.apply(l, c)
        }
        return na(this, a)
    };

    function pa() {}
    pa.prototype.Hb = n;
    pa.prototype.ba = function () {
        this.Hb || (this.Hb = k, this.m())
    };
    pa.prototype.m = function () {
        this.sc && qa.apply(l, this.sc)
    };

    function qa(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b],
                e = ca(d);
            "array" == e || "object" == e && "number" == typeof d.length ? qa.apply(l, d) : d && "function" == typeof d.ba && d.ba()
        }
    };

    function sa(a, b) {
        for (var c = 1; c < arguments.length; c++) var d = ("" + arguments[c]).replace(/\$/g, "$$$$"),
            a = a.replace(/\%s/, d);
        return a
    }
    function ta(a) {
        if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ya, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(za, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Aa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ba, "&quot;"));
        return a
    }
    var ya = /&/g,
        za = /</g,
        Aa = />/g,
        Ba = /\"/g,
        ua = /[&<>\"]/;
    var Ca = Array.prototype,
        Da = Ca.indexOf ? function (a, b, c) {
            return Ca.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (da(a)) return !da(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++) if (c in a && a[c] === b) return c;
            return -1
        }, Ea = Ca.forEach ? function (a, b, c) {
            Ca.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = da(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        }, Fa = Ca.filter ? function (a, b, c) {
            return Ca.filter.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = [], f = 0, g = da(a) ? a.split("") : a, j = 0; j < d; j++) if (j in g) {
                var m = g[j];
                b.call(c, m, j, a) && (e[f++] = m)
            }
            return e
        };

    function Ha(a, b) {
        return 0 <= Da(a, b)
    }
    function Ia(a, b, c) {
        return 2 >= arguments.length ? Ca.slice.call(a, b) : Ca.slice.call(a, b, c)
    };
    var Ja, Ka, La, Ma, Na, Oa;

    function Pa() {
        return p.navigator ? p.navigator.userAgent : l
    }
    Ma = La = Ka = Ja = n;
    var Qa;
    if (Qa = Pa()) {
        var Ra = p.navigator;
        Ja = 0 == Qa.indexOf("Opera");
        Ka = !Ja && -1 != Qa.indexOf("MSIE");
        La = !Ja && -1 != Qa.indexOf("WebKit");
        Ma = !Ja && !La && "Gecko" == Ra.product
    }
    var Sa = Ja,
        t = Ka,
        Ta = Ma,
        u = La,
        Wa, Xa = p.navigator;
    Wa = Xa && Xa.platform || "";
    Na = -1 != Wa.indexOf("Mac");
    Oa = -1 != Wa.indexOf("Win");
    var Ya = -1 != Wa.indexOf("Linux"),
        Za;
    a: {
        var $a = "",
            ab;
        if (Sa && p.opera) var bb = p.opera.version,
            $a = "function" == typeof bb ? bb() : bb;
        else if (Ta ? ab = /rv\:([^\);]+)(\)|;)/ : t ? ab = /MSIE\s+([^\);]+)(\)|;)/ : u && (ab = /WebKit\/(\S+)/), ab) var cb = ab.exec(Pa()),
            $a = cb ? cb[1] : "";
        if (t) {
            var db, eb = p.document;
            db = eb ? eb.documentMode : h;
            if (db > parseFloat($a)) {
                Za = "" + db;
                break a
            }
        }
        Za = $a
    }
    var fb = {};

    function v(a) {
        var b;
        if (!(b = fb[a])) {
            b = 0;
            for (var c = ("" + Za).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    j = d[f] || "",
                    m = RegExp("(\\d*)(\\D*)", "g"),
                    y = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var w = m.exec(g) || ["", "", ""],
                        s = y.exec(j) || ["", "", ""];
                    if (0 == w[0].length && 0 == s[0].length) break;
                    b = ((0 == w[1].length ? 0 : parseInt(w[1], 10)) < (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? -1 : (0 == w[1].length ? 0 : parseInt(w[1],
                    10)) > (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? 1 : 0) || ((0 == w[2].length) < (0 == s[2].length) ? -1 : (0 == w[2].length) > (0 == s[2].length) ? 1 : 0) || (w[2] < s[2] ? -1 : w[2] > s[2] ? 1 : 0)
                } while (0 == b)
            }
            b = fb[a] = 0 <= b
        }
        return b
    }
    var gb = {};

    function hb(a) {
        return gb[a] || (gb[a] = t && !! document.documentMode && document.documentMode >= a)
    };
    !t || hb(9);
    var ib = !t || hb(9),
        jb = t && !v("8");
    !u || v("528");
    Ta && v("1.9b") || t && v("8") || Sa && v("9.5") || u && v("528");
    Ta && !v("8") || t && v("9");

    function x(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    }
    r(x, pa);
    o = x.prototype;
    o.m = function () {
        delete this.type;
        delete this.target;
        delete this.currentTarget
    };
    o.U = n;
    o.defaultPrevented = n;
    o.Qa = k;
    o.stopPropagation = function () {
        this.U = k
    };
    o.preventDefault = function () {
        this.defaultPrevented = k;
        this.Qa = n
    };

    function nb(a) {
        nb[" "](a);
        return a
    }
    nb[" "] = aa();

    function ob(a, b) {
        a && this.b(a, b)
    }
    r(ob, x);
    o = ob.prototype;
    o.target = l;
    o.relatedTarget = l;
    o.offsetX = 0;
    o.offsetY = 0;
    o.clientX = 0;
    o.clientY = 0;
    o.screenX = 0;
    o.screenY = 0;
    o.button = 0;
    o.keyCode = 0;
    o.charCode = 0;
    o.ctrlKey = n;
    o.altKey = n;
    o.shiftKey = n;
    o.metaKey = n;
    o.t = l;
    o.b = function (a, b) {
        var c = this.type = a.type;
        x.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (Ta) {
                var e;
                a: {
                    try {
                        nb(d.nodeName);
                        e = k;
                        break a
                    } catch (f) {}
                    e = n
                }
                e || (d = l)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = u || a.offsetX !== h ? a.offsetX : a.layerX;
        this.offsetY = u || a.offsetY !== h ? a.offsetY : a.layerY;
        this.clientX = a.clientX !== h ? a.clientX : a.pageX;
        this.clientY = a.clientY !== h ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.t = a;
        a.defaultPrevented && this.preventDefault();
        delete this.U
    };
    o.stopPropagation = function () {
        ob.M.stopPropagation.call(this);
        this.t.stopPropagation ? this.t.stopPropagation() : this.t.cancelBubble = k
    };
    o.preventDefault = function () {
        ob.M.preventDefault.call(this);
        var a = this.t;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = n, jb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    o.wc = function () {
        return this.t
    };
    o.m = function () {
        ob.M.m.call(this);
        this.relatedTarget = this.currentTarget = this.target = this.t = l
    };

    function pb() {}
    var qb = 0;
    o = pb.prototype;
    o.key = 0;
    o.ma = n;
    o.Xa = n;
    o.b = function (a, b, c, d, e, f) {
        if ("function" == ca(a)) this.Ob = k;
        else if (a && a.handleEvent && "function" == ca(a.handleEvent)) this.Ob = n;
        else throw Error("Invalid listener argument");
        this.za = a;
        this.Zb = b;
        this.src = c;
        this.type = d;
        this.capture = !! e;
        this.kb = f;
        this.Xa = n;
        this.key = ++qb;
        this.ma = n
    };
    o.handleEvent = function (a) {
        return this.Ob ? this.za.call(this.kb || this.src, a) : this.za.handleEvent.call(this.za, a)
    };

    function rb(a) {
        var b = sb,
            c;
        for (c in b) a.call(h, b[c], c, b)
    }
    var tb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function ub(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < tb.length; f++) c = tb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var vb = {}, B = {}, sb = {}, wb = {};

    function E(a, b, c, d, e) {
        if (b) {
            if ("array" == ca(b)) {
                for (var f = 0; f < b.length; f++) E(a, b[f], c, d, e);
                return l
            }
            var d = !! d,
                g = B;
            b in g || (g[b] = {
                r: 0,
                q: 0
            });
            g = g[b];
            d in g || (g[d] = {
                r: 0,
                q: 0
            }, g.r++);
            var g = g[d],
                j = ga(a),
                m;
            g.q++;
            if (g[j]) {
                m = g[j];
                for (f = 0; f < m.length; f++) if (g = m[f], g.za == c && g.kb == e) {
                    if (g.ma) break;
                    return m[f].key
                }
            } else m = g[j] = [], g.r++;
            f = xb();
            f.src = a;
            g = new pb;
            g.b(c, f, a, b, d, e);
            c = g.key;
            f.key = c;
            m.push(g);
            vb[c] = g;
            sb[j] || (sb[j] = []);
            sb[j].push(g);
            a.addEventListener ? (a == p || !a.Gb) && a.addEventListener(b, f, d) : a.attachEvent(b in wb ? wb[b] : wb[b] = "on" + b, f);
            return c
        }
        throw Error("Invalid event type");
    }
    function xb() {
        var a = yb,
            b = ib ? function (c) {
                return a.call(b.src, b.key, c)
            } : function (c) {
                c = a.call(b.src, b.key, c);
                if (!c) return c
            };
        return b
    }
    function Db(a, b, c, d, e) {
        if ("array" == ca(b)) for (var f = 0; f < b.length; f++) Db(a, b[f], c, d, e);
        else a = E(a, b, c, d, e), vb[a].Xa = k
    }

    function H(a, b, c, d, e) {
        if ("array" == ca(b)) for (var f = 0; f < b.length; f++) H(a, b[f], c, d, e);
        else {
            d = !! d;
            a: {
                f = B;
                if (b in f && (f = f[b], d in f && (f = f[d], a = ga(a), f[a]))) {
                    a = f[a];
                    break a
                }
                a = l
            }
            if (a) for (f = 0; f < a.length; f++) if (a[f].za == c && a[f].capture == d && a[f].kb == e) {
                Eb(a[f].key);
                break
            }
        }
    }

    function Eb(a) {
        if (!vb[a]) return n;
        var b = vb[a];
        if (b.ma) return n;
        var c = b.src,
            d = b.type,
            e = b.Zb,
            f = b.capture;
        c.removeEventListener ? (c == p || !c.Gb) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in wb ? wb[d] : wb[d] = "on" + d, e);
        c = ga(c);
        e = B[d][f][c];
        if (sb[c]) {
            var g = sb[c],
                j = Da(g, b);
            0 <= j && Ca.splice.call(g, j, 1);
            0 == g.length && delete sb[c]
        }
        b.ma = k;
        e.Ub = k;
        Fb(d, f, c, e);
        delete vb[a];
        return k
    }

    function Fb(a, b, c, d) {
        if (!d.Na && d.Ub) {
            for (var e = 0, f = 0; e < d.length; e++) d[e].ma ? d[e].Zb.src = l : (e != f && (d[f] = d[e]), f++);
            d.length = f;
            d.Ub = n;
            0 == f && (delete B[a][b][c], B[a][b].r--, 0 == B[a][b].r && (delete B[a][b], B[a].r--), 0 == B[a].r && delete B[a])
        }
    }
    function Gb(a) {
        var b, c = 0,
            d = b == l;
        b = !! b;
        if (a == l) rb(function (a) {
            for (var f = a.length - 1; 0 <= f; f--) {
                var e = a[f];
                if (d || b == e.capture) Eb(e.key), c++
            }
        });
        else if (a = ga(a), sb[a]) for (var a = sb[a], e = a.length - 1; 0 <= e; e--) {
            var f = a[e];
            if (d || b == f.capture) Eb(f.key), c++
        }
    }

    function Hb(a, b, c, d, e) {
        var f = 1,
            b = ga(b);
        if (a[b]) {
            a.q--;
            a = a[b];
            a.Na ? a.Na++ : a.Na = 1;
            try {
                for (var g = a.length, j = 0; j < g; j++) {
                    var m = a[j];
                    m && !m.ma && (f &= Ib(m, e) !== n)
                }
            } finally {
                a.Na--, Fb(c, d, b, a)
            }
        }
        return Boolean(f)
    }
    function Ib(a, b) {
        var c = a.handleEvent(b);
        a.Xa && Eb(a.key);
        return c
    }

    function yb(a, b) {
        if (!vb[a]) return k;
        var c = vb[a],
            d = c.type,
            e = B;
        if (!(d in e)) return k;
        var e = e[d],
            f, g;
        if (!ib) {
            var j;
            if (!(j = b)) a: {
                j = ["window", "event"];
                for (var m = p; f = j.shift();) if (m[f] != l) m = m[f];
                else {
                    j = l;
                    break a
                }
                j = m
            }
            f = j;
            j = k in e;
            m = n in e;
            if (j) {
                if (0 > f.keyCode || f.returnValue != h) return k;
                a: {
                    var y = n;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch (w) {
                        y = k
                    }
                    if (y || f.returnValue == h) f.returnValue = k
                }
            }
            y = new ob;
            y.b(f, this);
            f = k;
            try {
                if (j) {
                    for (var s = [], ba = y.currentTarget; ba; ba = ba.parentNode) s.push(ba);
                    g = e[k];
                    g.q = g.r;
                    for (var M = s.length - 1; !y.U && 0 <= M && g.q; M--) y.currentTarget = s[M], f &= Hb(g, s[M], d, k, y);
                    if (m) {
                        g = e[n];
                        g.q = g.r;
                        for (M = 0; !y.U && M < s.length && g.q; M++) y.currentTarget = s[M], f &= Hb(g, s[M], d, n, y)
                    }
                } else f = Ib(c, y)
            } finally {
                s && (s.length = 0), y.ba()
            }
            return f
        }
        d = new ob(b, this);
        try {
            f = Ib(c, d)
        } finally {
            d.ba()
        }
        return f
    };

    function I() {}
    r(I, pa);
    o = I.prototype;
    o.Gb = k;
    o.sb = l;
    o.addEventListener = function (a, b, c, d) {
        E(this, a, b, c, d)
    };
    o.removeEventListener = function (a, b, c, d) {
        H(this, a, b, c, d)
    };
    o.dispatchEvent = function (a) {
        var b = a.type || a,
            c = B;
        if (b in c) {
            if (da(a)) a = new x(a, this);
            else if (a instanceof x) a.target = a.target || this;
            else {
                var d = a,
                    a = new x(b, this);
                ub(a, d)
            }
            var d = 1,
                e, c = c[b],
                b = k in c,
                f;
            if (b) {
                e = [];
                for (f = this; f; f = f.sb) e.push(f);
                f = c[k];
                f.q = f.r;
                for (var g = e.length - 1; !a.U && 0 <= g && f.q; g--) a.currentTarget = e[g], d &= Hb(f, e[g], a.type, k, a) && a.Qa != n
            }
            if (n in c) if (f = c[n], f.q = f.r, b) for (g = 0; !a.U && g < e.length && f.q; g++) a.currentTarget = e[g], d &= Hb(f, e[g], a.type, n, a) && a.Qa != n;
            else for (e = this; !a.U && e && f.q; e = e.sb) a.currentTarget = e, d &= Hb(f, e, a.type, n, a) && a.Qa != n;
            a = Boolean(d)
        } else a = k;
        return a
    };
    o.m = function () {
        I.M.m.call(this);
        Gb(this);
        this.sb = l
    };

    function Jb(a, b) {
        this.xa = a || 1;
        this.Ea = b || Kb;
        this.Wa = na(this.dd, this);
        this.ob = oa()
    }
    r(Jb, I);
    Jb.prototype.enabled = n;
    var Kb = p.window;
    o = Jb.prototype;
    o.i = l;
    o.setInterval = function (a) {
        this.xa = a;
        this.i && this.enabled ? (this.stop(), this.start()) : this.i && this.stop()
    };
    o.dd = function () {
        if (this.enabled) {
            var a = oa() - this.ob;
            0 < a && a < 0.8 * this.xa ? this.i = this.Ea.setTimeout(this.Wa, this.xa - a) : (this.dispatchEvent(Lb), this.enabled && (this.i = this.Ea.setTimeout(this.Wa, this.xa), this.ob = oa()))
        }
    };
    o.start = function () {
        this.enabled = k;
        this.i || (this.i = this.Ea.setTimeout(this.Wa, this.xa), this.ob = oa())
    };
    o.stop = function () {
        this.enabled = n;
        this.i && (this.Ea.clearTimeout(this.i), this.i = l)
    };
    o.m = function () {
        Jb.M.m.call(this);
        this.stop();
        delete this.Ea
    };
    var Lb = "tick";
    var Mb;
    !t || hb(9);
    var Nb = !Ta && !t || t && hb(9) || Ta && v("1.9.1");
    t && v("9");

    function Ob(a) {
        a = a.className;
        return da(a) && a.match(/\S+/g) || []
    }
    function J(a, b) {
        for (var c = Ob(a), d = Ia(arguments, 1), e = c, f = 0; f < d.length; f++) Ha(e, d[f]) || e.push(d[f]);
        a.className = c.join(" ")
    }
    function K(a, b) {
        var c = Ob(a),
            d = Ia(arguments, 1),
            c = Pb(c, d);
        a.className = c.join(" ")
    }
    function Pb(a, b) {
        return Fa(a, function (a) {
            return !Ha(b, a)
        })
    };

    function Qb(a, b) {
        this.x = a !== h ? a : 0;
        this.y = b !== h ? b : 0
    }
    Qb.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")"
    };

    function Rb(a, b) {
        this.width = a;
        this.height = b
    }
    Rb.prototype.toString = function () {
        return "(" + this.width + " x " + this.height + ")"
    };
    Rb.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Rb.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Sb(a) {
        return a ? new Tb(Ub(a)) : Mb || (Mb = new Tb)
    }
    function Vb(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Wb("*", a, b)
    }
    function Xb(a, b) {
        var c = b || document,
            d = l;
        return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : Vb(a, b)[0]) || l
    }

    function Wb(a, b, c) {
        var d = document,
            c = c || d,
            a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && Ha(a.split(/\s+/), b) && (d[e++] = g);
            d.length = e;
            return d
        }
        return c
    }

    function Yb(a) {
        return Nb && a.children != h ? a.children : Fa(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    }
    function Ub(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function Tb(a) {
        this.qa = a || p.document || document
    }
    Tb.prototype.createElement = function (a) {
        return this.qa.createElement(a)
    };
    Tb.prototype.hb = function () {
        return this.qa.parentWindow || this.qa.defaultView
    };

    function Zb(a) {
        var b = a.qa,
            a = !u && "CSS1Compat" == b.compatMode ? b.documentElement : b.body,
            b = b.parentWindow || b.defaultView;
        return new Qb(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }
    Tb.prototype.appendChild = function (a, b) {
        a.appendChild(b)
    };

    function $b(a) {
        this.Ac = a;
        this.ya = []
    }
    r($b, pa);
    var ac = [];
    $b.prototype.T = function (a, b, c, d, e) {
        "array" != ca(b) && (ac[0] = b, b = ac);
        for (var f = 0; f < b.length; f++) this.ya.push(E(a, b[f], c || this, d || n, e || this.Ac || this));
        return this
    };
    $b.prototype.m = function () {
        $b.M.m.call(this);
        Ea(this.ya, Eb);
        this.ya.length = 0
    };
    $b.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var bc = "navigate";

    function cc(a) {
        x.call(this, bc);
        this.Fa = a
    }
    r(cc, x);

    function ec(a, b, c, d) {
        if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
        var e;
        c ? e = c : (e = "history_state" + fc, document.write(sa(gc, e, e)), e = da(e) ? document.getElementById(e) : e);
        this.va = e;
        this.w = c ? Ub(c) ? Ub(c).parentWindow || Ub(c).defaultView : window : window;
        this.oc = this.w.location.href.split("#")[0];
        this.Ka = b;
        t && !b && (this.Ka = "https" == window.location.protocol ? "https:///" : 'javascript:""');
        this.i = new Jb(hc);
        this.Z = !a;
        this.Q = new $b(this);
        if (a || t && !ic) d ? a = d : (a = "history_iframe" + fc,
        b = this.Ka ? 'src="' + ta(this.Ka) + '"' : "", document.write(sa(jc, a, b)), a = da(a) ? document.getElementById(a) : a), this.fa = a, this.fc = k;
        t && !ic && (this.Q.T(this.w, "load", this.Pc), this.cc = this.$a = n);
        this.Z ? kc(this, lc(this), k) : mc(this, this.va.value);
        fc++
    }
    r(ec, I);
    ec.prototype.sa = n;
    ec.prototype.ja = n;
    ec.prototype.ha = l;
    var ic = t && 8 <= document.documentMode || Ta && v("1.9.2") || u && v("532.1");
    o = ec.prototype;
    o.ia = l;
    o.m = function () {
        ec.M.m.call(this);
        this.Q.ba();
        nc(this, n)
    };

    function nc(a, b) {
        if (b != a.sa) if (t && !ic && !a.$a) a.cc = b;
        else if (b) if (Sa ? a.Q.T(a.w.document, oc, a.Vc) : Ta && a.Q.T(a.w, "pageshow", a.Sc), ic && a.Z) a.Q.T(a.w, "hashchange", a.Qc), a.sa = k, a.dispatchEvent(new cc(lc(a)));
        else {
            if (!t || a.$a) a.Q.T(a.i, Lb, na(a.Db, a, k)), a.sa = k, t || (a.ha = lc(a)), a.i.start(), a.dispatchEvent(new cc(lc(a)))
        } else {
            a.sa = n;
            var c = a.Q;
            Ea(c.ya, Eb);
            c.ya.length = 0;
            a.i.stop()
        }
    }
    o.Pc = function () {
        this.$a = k;
        this.va.value && mc(this, this.va.value, k);
        nc(this, this.cc)
    };
    o.Sc = function (a) {
        a.t.persisted && (nc(this, n), nc(this, k))
    };
    o.Qc = function () {
        var a = pc(this.w);
        a != this.ha && qc(this, a)
    };

    function lc(a) {
        return a.ia != l ? a.ia : a.Z ? pc(a.w) : rc(a) || ""
    }
    o.C = function (a, b) {
        lc(this) != a && (this.Z ? (kc(this, a, n), ic || t && mc(this, a, n, b), this.sa && this.Db()) : (mc(this, a, n), this.ia = this.ha = this.va.value = a, this.dispatchEvent(new cc(a))))
    };

    function pc(a) {
        var a = a.location.href,
            b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    }

    function kc(a, b, c) {
        var d = a.w.location,
            a = a.oc,
            e = -1 != d.href.indexOf("#");
        if (t || e || b) a += "#" + b;
        a != d.href && (c ? d.replace(a) : d.href = a)
    }
    function mc(a, b, c, d) {
        if (a.fc || b != rc(a)) if (a.fc = n, b = encodeURIComponent("" + b), t) {
            var e = a.fa.contentDocument || a.fa.contentWindow.document;
            e.open("text/html", c ? "replace" : h);
            e.write(sa(sc, ta(d || a.w.document.title), b));
            e.close()
        } else if (b = a.Ka + "#" + b, a = a.fa.contentWindow) c ? a.location.replace(b) : a.location.href = b
    }

    function rc(a) {
        if (t) return a = a.fa.contentDocument || a.fa.contentWindow.document, a.body ? decodeURIComponent(a.body.innerHTML.replace(/\+/g, " ")) : l;
        var b = a.fa.contentWindow;
        if (b) {
            var c;
            try {
                c = decodeURIComponent(pc(b).replace(/\+/g, " "))
            } catch (d) {
                return a.ja || (a.ja != k && a.i.setInterval(tc), a.ja = k), l
            }
            a.ja && (a.ja != n && a.i.setInterval(hc), a.ja = n);
            return c || l
        }
        return l
    }
    o.Db = function () {
        if (this.Z) {
            var a = pc(this.w);
            a != this.ha && qc(this, a)
        }
        if (!this.Z || t && !ic) if (a = rc(this) || "", this.ia == l || a == this.ia) this.ia = l, a != this.ha && qc(this, a)
    };

    function qc(a, b) {
        a.ha = a.va.value = b;
        a.Z ? (t && !ic && mc(a, b), kc(a, b)) : mc(a, b);
        a.dispatchEvent(new cc(lc(a)))
    }
    o.Vc = function () {
        this.i.stop();
        this.i.start()
    };
    var oc = ["mousedown", "keydown", "mousemove"],
        sc = "<title>%s</title><body>%s</body>",
        jc = '<iframe id="%s" style="display:none" %s></iframe>',
        gc = '<input type="text" name="%s" id="%s" style="display:none">',
        fc = 0,
        hc = 150,
        tc = 1E4;

    function uc(a, b) {
        var c = Ub(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, l)) ? c[b] || c.getPropertyValue(b) : ""
    }
    function vc(a, b) {
        return uc(a, b) || (a.currentStyle ? a.currentStyle[b] : l) || a.style && a.style[b]
    }
    function wc(a) {
        var b = a.getBoundingClientRect();
        t && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function xc(a) {
        if (t && !hb(8)) return a.offsetParent;
        for (var b = Ub(a), c = vc(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode) if (c = vc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return l
    }

    function yc(a) {
        var b = new Qb;
        if (1 == a.nodeType) if (a.getBoundingClientRect) a = wc(a), b.x = a.left, b.y = a.top;
        else {
            var c = Zb(Sb(a));
            var d, e = Ub(a),
                f = vc(a, "position"),
                g = Ta && e.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == f && (d = e.getBoxObjectFor(a)) && (0 > d.screenX || 0 > d.screenY),
                j = new Qb(0, 0),
                m;
            d = e ? 9 == e.nodeType ? e : Ub(e) : document;
            if (m = t) if (m = !hb(9)) m = "CSS1Compat" != Sb(d).qa.compatMode;
            m = m ? d.body : d.documentElement;
            if (a != m) if (a.getBoundingClientRect) d = wc(a), a = Zb(Sb(e)), j.x = d.left + a.x, j.y = d.top + a.y;
            else if (e.getBoxObjectFor && !g) d = e.getBoxObjectFor(a), a = e.getBoxObjectFor(m), j.x = d.screenX - a.screenX, j.y = d.screenY - a.screenY;
            else {
                g = a;
                do {
                    j.x += g.offsetLeft;
                    j.y += g.offsetTop;
                    g != a && (j.x += g.clientLeft || 0, j.y += g.clientTop || 0);
                    if (u && "fixed" == vc(g, "position")) {
                        j.x += e.body.scrollLeft;
                        j.y += e.body.scrollTop;
                        break
                    }
                    g = g.offsetParent
                } while (g && g != a);
                if (Sa || u && "absolute" == f) j.y -= e.body.offsetTop;
                for (g = a;
                (g = xc(g)) && g != e.body && g != m;) if (j.x -= g.scrollLeft, !Sa || "TR" != g.tagName) j.y -= g.scrollTop
            }
            b.x = j.x - c.x;
            b.y = j.y - c.y
        } else c = "function" == ca(a.wc),
        j = a, a.targetTouches ? j = a.targetTouches[0] : c && a.t.targetTouches && (j = a.t.targetTouches[0]), b.x = j.clientX, b.y = j.clientY;
        return b
    }
    function zc(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = u && !b && !c;
        return (b === h || d) && a.getBoundingClientRect ? (a = wc(a), new Rb(a.right - a.left, a.bottom - a.top)) : new Rb(b, c)
    };

    function Ac(a) {
        this.vc = a;
        this.Qb = E(this.vc, Ta ? "DOMMouseScroll" : "mousewheel", this)
    }
    r(Ac, I);
    Ac.prototype.handleEvent = function (a) {
        var b = 0,
            c = 0,
            d = 0,
            a = a.t;
        if ("mousewheel" == a.type) {
            c = 1;
            if (t || u && (Oa || v("532.0"))) c = 40;
            d = Bc(-a.wheelDelta, c);
            a.wheelDeltaX !== h ? (b = Bc(-a.wheelDeltaX, c), c = Bc(-a.wheelDeltaY, c)) : c = d
        } else d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), a.axis !== h && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
        "number" == typeof this.Sb && Math.min(Math.max(b, - this.Sb), this.Sb);
        "number" == typeof this.qb && (c = Math.min(Math.max(c, - this.qb), this.qb));
        b = new Cc(d, a, 0, c);
        try {
            this.dispatchEvent(b)
        } finally {
            b.ba()
        }
    };

    function Bc(a, b) {
        return u && (Na || Ya) && 0 != a % b ? a : a / b
    }
    Ac.prototype.m = function () {
        Ac.M.m.call(this);
        Eb(this.Qb);
        delete this.Qb
    };

    function Cc(a, b, c, d) {
        b && this.b(b, h);
        this.type = "mousewheel";
        this.detail = a;
        this.rc = d
    }
    r(Cc, ob);
    var Dc = 37,
        Ec = 38,
        Fc = 39,
        Gc = 40,
        Hc = 74,
        Ic = 75,
        Jc = 77;
    window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
        window.setTimeout(a, 1E3 / 60)
    });
    Math.round(1764);
    Math.round(673 * 1.4);
    var Kc = n,
        Lc = new ec,
        L = [];

    function Mc(a) {
        return "assets/" + a
    }
    function N(a) {
        if (document.querySelector) return document.querySelector(a);
        if (a.indexOf("#") === 0) {
            a = a.substr(1, a.length);
            return document.getElementById(a)
        }
    }

    function Nc(a, b) {
        _gaq || (_gaq = []);
        var c = ["_trackEvent"];
        c.push("navigation");
        a && c.push(a);
        b && c.push(b);
        c.length > 1 && _gaq.push(c)
    }

    function Oc(a, b) {
        function c() {
            g = e[0];
            j = e[e.length - 1];
            m = [];
            y = [];
            w = [];
            s = [];
            var a, c, b;
            for (a = 0; a < e.length - 1; a++) {
                c = a + 1;
                if (f[a] <= f[c] == n) throw new ArgumentError("Ts are not sequential (" + a + ": " + f[a] + " > " + c + ": " + f[c] + ")");
                m[a] = f[c] - f[a];
                y[a] = e[c] - e[a];
                w[a] = y[a] / m[a];
                s[a] = a == 0 ? 0 : (w[a] + b) * 0.5;
                b = w[a]
            }
            s[c] = 0
        }
        function d(a) {
            var c, b;
            if (e.length == 1) return e[0];
            if (f[0] >= a) return g;
            for (b = 1; f[b] < a;) {
                b++;
                if (b == f.length) return j
            }
            c = b - 1;
            var a = (a - f[c]) / m[c],
                d = y[c],
                w = s[c] * m[c];
            b = s[b] * m[c];
            c = e[c] + (-(2 * (d - w * 1) - 1 * (b - w)) / 1 * 1 * a * a * a - (-3 * (d - w * 1) + 1 * (b - w)) / 1 * 1 * a * a + w * a);
            c < 0 && (c = 0);
            c > 1 && (c = 1);
            return c
        }
        var e = a,
            f = b,
            g, j, m, y, w, s;
        e.length == 0 && console.log("Must have at least one point.");
        e.length != f.length && console.log("Vectors must be of equal lengths.");
        c();
        return {
            md: function () {
                return e.length
            },
            od: function (a) {
                return f[a]
            },
            zc: function (a) {
                return d(a)
            },
            pd: function (a) {
                return s[a]
            },
            wd: function (a, b) {
                e = a;
                f = b;
                c()
            }
        }
    }
    function Pc(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.Ec = n;
        this.Mb = function (a, b, e) {
            return new Pc((a.x + b.x) * e, (a.y + b.y) * e)
        }
    }
    Pc.prototype.toString = function () {
        return "(x=" + this.x + ", y=" + this.y + ", section =" + this.Ec + ")"
    };
    var O = O || new function () {
            function a() {
                var a = b("transform"),
                    c = a + "Perspective" in document.documentElement.style || n;
                return a ? {
                    vendor: a,
                    Kb: c
                } : n
            }
            function b(a) {
                var c = document.createElement("div"),
                    b = ["Khtml", "Ms", "O", "Moz", "Webkit"],
                    d = b.length;
                if (a in c.style) return k;
                for (a = a.replace(/^[a-z]/, function (a) {
                    return a.toUpperCase()
                }); d--;) if (b[d] + a in c.style) return b[d];
                return n
            }
            function c() {
                var a;
                try {
                    console.log();
                    a = window.console
                } catch (c) {
                    a = window.console = {}
                }(function (a) {
                    function c() {}
                    for (var b = ["assert", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "timeStamp", "profile", "profileEnd", "time", "timeEnd", "trace", "warn"], d; d = b.pop();) a[d] = a[d] || c
                })(a);
                console == h && (console = {
                    log: aa()
                });
                if (!Array.prototype.indexOf) Array.prototype.indexOf = function (a) {
                    for (var c = 0; c < this.length; c++) if (this[c] === a) return c;
                    return -1
                };
                if (e.vendor) document.documentElement.className = "vendor" + e.vendor
            }
            function d(a, c) {
                var b = document.head || document.getElementsByTagName("head")[0],
                    d = document.createElement("script"),
                    e = n;
                d.async = "async";
                d.onload = function () {
                    d.onload = l;
                    !e && c && c()
                };
                d.onreadystatechange = function () {
                    var a = /loaded|complete/;
                    if (!d.readyState || a.test(d.readyState)) {
                        d.onreadystatechange = l;
                        if (!e && c) {
                            e = k;
                            c()
                        }
                    }
                };
                d.setAttribute("src", a);
                b.insertBefore(d, b.firstChild)
            }
            var e;
            return {
                b: function () {
                    e = a();
                    c()
                },
                yd: function (a) {
                    return b(a)
                },
                N: function () {
                    return e
                },
                ta: function (c, b) {
                    return "translate" + (a().Kb ? "3d(" + c + "px, " + b + "px,0px) " : "(" + c + "px, " + b + "px) ")
                },
                qd: function (a, c) {
                    var b;
                    b = a.style[c];
                    if (b == "") b = {
                        x: 0,
                        y: 0,
                        hd: 0
                    };
                    else {
                        b = b.match(/\d+/g);
                        b = e.Kb ? {
                            x: b[1],
                            y: b[2],
                            hd: b[3]
                        } : {
                            x: b[0],
                            y: b[1]
                        }
                    }
                    return b
                },
                hb: function () {
                    return window || document
                },
                ea: function () {
                    var a = 0,
                        c = 0;
                    if (window.innerWidth) {
                        a = window.innerWidth;
                        c = window.innerHeight
                    } else if (document.documentElement.clientWidth) {
                        a = document.documentElement.clientWidth;
                        c = document.documentElement.clientHeight
                    } else if (document.body.clientWidth) {
                        a = document.body.clientWidth;
                        c = document.body.clientHeight
                    }
                    a < 1260 && (a = 1260);
                    c < 673 && (c = 673);
                    return {
                        width: a,
                        height: c,
                        Ja: a * 0.5,
                        ib: c * 0.5
                    }
                },
                yb: function () {
                    return navigator.userAgent.indexOf("iPad") > 0 ? n : !! document.createElement("audio").canPlayType
                },
                ld: function () {
                    if (!t) return -1;
                    var a = document.documentElement.style;
                    if (a.ud != h) {
                        if (a.opacity != h) return 9
                    } else return a.sd != h ? 8 : a.msInterpolationMode != h ? 7 : a.zd != h ? 6 : 5.5;
                    return 0
                },
                Ya: function (a) {
                    for (; a.childNodes.length;) a.removeChild(a.childNodes[0])
                },
                da: function (a) {
                    var c;
                    if (a.tagName.toLowerCase() == "img") c = {
                        width: a.width,
                        height: a.height
                    };
                    else if (vc(a, "display") != "none") c = zc(a);
                    else {
                        c = a.style;
                        var b = c.display,
                            d = c.visibility,
                            e = c.position;
                        c.visibility = "hidden";
                        c.position = "absolute";
                        c.display = "inline";
                        a = zc(a);
                        c.display = b;
                        c.position = e;
                        c.visibility = d;
                        c = a
                    }
                    return {
                        width: parseInt(c.width),
                        height: parseInt(c.height)
                    }
                },
                yc: function (a) {
                    a = new Qb(a.offsetLeft, a.offsetTop);
                    return {
                        x: parseInt(a.x),
                        y: parseInt(a.y)
                    }
                },
                nd: function (a, c) {
                    var b;
                    b = yc(a);
                    var d = yc(c);
                    b = new Qb(b.x - d.x, b.y - d.y);
                    return {
                        x: parseInt(b.x),
                        y: parseInt(b.y)
                    }
                },
                Fc: function () {
                    return window.Touch ? k : n
                },
                Ib: function (a, c) {
                    for (var b = 0, d = 0; d < c.length; d++) Math.abs(c[d] - a) < Math.abs(b - a) && (b = c[d]);
                    return b
                },
                jd: function (a) {
                    return a < 10 ? "0" + a : a
                },
                Rb: function (a, c) {
                    return d(a, c)
                },
                ad: function (a, c) {
                    window.localStorage && localStorage.setItem(a, c)
                },
                xc: function (a) {
                    return !window.localStorage ? n : localStorage.getItem(a)
                }
            }
        };

    function Qc() {
        this.ec = [];
        this.Ua = {};
        this.Za = TWEEN.Easing.Cubic.EaseOut
    }
    Qc.prototype = new I;

    function Rc(a, b, c, d) {
        Sc(a, b);
        a.Ua[b] = k;
        a.ec[b] = (new TWEEN.Tween(c)).to(d.Pa, d.time != h ? d.time : 1E3).easing(d.easing || a.Za).onUpdate(function () {
            a.dispatchEvent(b + "Update")
        }).onComplete(function () {
            a.Ua[b] = n;
            a.dispatchEvent(b + "Completed");
            d.n && d.n()
        }).start()
    }
    function Sc(a, b) {
        if (a.Ua[b]) {
            a.ec[b].stop();
            a.Ua[b] = n
        }
    }
    Qc.prototype.stop = function (a) {
        Sc(this, a)
    };

    function Tc(a) {
        Ac.call(this, a);
        this.state = "idle";
        this.qb = 1
    }
    r(Tc, Ac);
    Tc.prototype.handleEvent = function (a) {
        clearInterval(this.ed);
        if (this.state == "idle") {
            this.state = "wheel";
            Ac.prototype.handleEvent.call(this, a)
        }
        var b = this;
        this.ed = setTimeout(function () {
            b.state = "idle"
        }, 100)
    };

    function Uc() {
        var a = this;
        this.h = [];
        this.Va = this.H = 0;
        this.p = function () {
            a.Va++;
            a.dispatchEvent(new Vc(Wc, this));
            a.isLoaded() && a.dispatchEvent(Xc)
        }
    }
    Uc.prototype = new I;
    o = Uc.prototype;
    o.add = function (a, b, c, d) {
        d = d || {};
        if (!this.h[a]) {
            if (b == "img") {
                this.h[a] = new Yc("assets/images/" + c);
                this.H++
            } else if (b == "audio") {
                this.h[a] = new Zc({
                    rb: "assets/" + c.rb,
                    Oa: "assets/" + c.Oa,
                    pb: "assets/" + c.pb
                }, a);
                this.H++
            } else if (b == "json") {
                this.h[a] = new cd("assets/json/" + c);
                this.H++
            } else if (b == "xml") {
                this.h[a] = new dd(d.Ic ? c : "assets/xml/" + c);
                this.H++
            } else return;
            return this.h[a]
        }
    };
    o.u = function (a) {
        return this.h[a] || l
    };
    o.load = function (a) {
        var b = n,
            c;
        for (c in this.h) if (c != "indexOf") if (b = a ? a == "img" && this.h[c] instanceof Yc ? k : a == "audio" && this.h[c] instanceof Zc ? k : a == "json" && this.h[c] instanceof cd ? k : n : k) {
            E(this.h[c], "loaded", this.p);
            this.h[c].load()
        }
    };
    o.isLoaded = function () {
        return this.H && this.Va == this.H
    };
    o.Ba = function () {
        return this.H ? this.Va / this.H : 0
    };
    o.destroy = function () {
        for (var a in this.h) if (a != "indexOf" && this.O != h) {
            delete this.O[a].a;
            delete this.O[a]
        }
        delete this.h
    };

    function Vc(a, b) {
        x.call(this, a);
        this.O = b
    }
    Vc.prototype = new x;
    var Wc = "assetLoaded",
        Xc = "libraryLoaded";

    function P(a) {
        this.url = a;
        this.loaded = n
    }
    P.prototype = new I;
    P.prototype.load = aa();
    P.prototype.p = function () {
        this.loaded = k;
        this.dispatchEvent("loaded")
    };

    function Yc(a) {
        P.call(this, a);
        this.a = new Image
    }
    Yc.prototype = new P;
    Yc.prototype.load = function () {
        var a = this;
        this.a.onload = function () {
            a.p()
        };
        this.a.src = this.url
    };

    function Zc(a, b) {
        P.call(this, a);
        var c = this;
        this.id = b.split("snd.")[1];
        this.a = document.createElement("audio");
        this.volume = 1;
        this.loop = n;
        this.oa = O.yb();
        this.W = Q.Jb();
        this.L = this.W.L;
        this.l = new Qc;
        this.l.Za = TWEEN.Easing.Linear.EaseNone;
        this.l.addEventListener("assetVolumeUpdate", function () {
            c.W.muted || c.setVolume(c.volume)
        })
    }
    Zc.prototype = new P;
    Zc.prototype.load = function () {
        function a(a) {
            console.log("Sound asset error: ", a);
            a = a.currentTarget;
            if (a.type == "audio/mp4") {
                a.type = "audio/mp3";
                a.src = c.url.Oa
            }
        }
        function b() {
            c.a.readyState >= 2 && c.p()
        }
        var c = this;
        if (this.oa) {
            if (this.a.canPlayType("audio/ogg")) {
                this.a.type = "audio/ogg";
                this.a.src = this.url.rb
            } else if (this.a.canPlayType("audio/mp4")) {
                this.a.type = "audio/mp4";
                this.a.src = this.url.pb
            } else {
                this.a.type = "audio/mp3";
                this.a.src = this.url.Oa
            }
            if (document.getElementById("audio-container")) d = document.getElementById("audio-container");
            else {
                var d = document.createElement("div");
                d.id = "audio-container";
                d.style.display = "none";
                d.style.position = "absolute";
                d.style.top = "-1024px";
                d.style.left = "-1024px";
                document.body.appendChild(d)
            }
            this.a.setAttribute("preload", "auto");
            d.appendChild(this.a);
            Db(this.a, "error", a);
            Db(this.a, "canplay", b)
        } else this.p()
    };

    function ed(a, b) {
        b == h && (b = n);
        a.oa && (b ? a.a.setAttribute("loop", "loop") : a.a.removeAttribute("loop"));
        a.loop = b
    }
    Zc.prototype.setVolume = function (a) {
        if (this.W.loaded) {
            this.volume = a;
            this.oa ? this.a.volume = a : this.L.setVolume(this.id, Math.round(a * 100))
        }
    };
    Zc.prototype.play = function (a) {
        if (this.W.loaded) {
            a = a || {};
            ed(this, a.loop);
            if (!this.W.muted && a.R) {
                var b = a.R == "in" ? 1 : 0,
                    c = a.duration ? a.duration : 1E3;
                this.volume != b && fd(this, b, c, a.n)
            }
            if (this.oa) {
                this.a.currentTime = 0;
                this.a.play()
            } else {
                this.L.stop(this.id);
                this.L.play(this.id, this.loop ? 999 : 1)
            }
        }
    };
    Zc.prototype.stop = function (a) {
        if (this.W.loaded) {
            var b = this,
                c = a || {};
            ed(this, c.loop);
            if (!this.W.muted && c.R) {
                var a = c.R == "in" ? 1 : 0,
                    d = c.duration ? c.duration : 1E3;
                this.volume != a && this.volume != 0 && fd(this, a, d, function () {
                    b.oa ? b.a.pause() : b.L.stop(b.id);
                    c.n && c.n()
                })
            } else if (this.oa) {
                this.a.pause();
                this.a.currentTime = 0
            } else this.L.stop(this.id)
        }
    };

    function fd(a, b, c, d) {
        Rc(a.l, "assetVolume", a, {
            Pa: {
                volume: b
            },
            time: c,
            n: d
        })
    }
    function dd(a) {
        P.call(this, a)
    }
    dd.prototype = new P;
    dd.prototype.load = function () {
        var a = this,
            b;
        if (window.XMLHttpRequest) {
            b = new XMLHttpRequest;
            b.overrideMimeType && b.overrideMimeType("text/xml")
        } else b = new ActiveXObject("Microsoft.XMLHTTP");
        b.open("GET", this.url);
        b.onreadystatechange = function () {
            if (b.readyState == 4 && b.status == 200) {
                a.xml = b.responseXML;
                a.p()
            }
        };
        b.send()
    };

    function cd(a) {
        P.call(this, a)
    }
    cd.prototype = new P;
    cd.prototype.load = function () {
        var a = this,
            b;
        if (window.XMLHttpRequest) {
            b = new XMLHttpRequest;
            b.overrideMimeType && b.overrideMimeType("text/json")
        } else b = new ActiveXObject("Microsoft.XMLHTTP");
        b.open("GET", this.url);
        b.onreadystatechange = function () {
            if (b.readyState == 4) {
                if (window.JSON && window.JSON.parse) try {
                    a.La = JSON.parse("" + b.responseText)
                } catch (c) {
                    console.log("Invalid JSON: " + b.responseText, a.url)
                } else /^[\],:{}\s]*$/.test(b.responseText.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? a.La = (new Function("return " + b.responseText))() : console.log("Invalid JSON: " + b.responseText, a.url);
                a.p()
            }
        };
        b.send()
    };

    function S(a, b) {
        for (var c = b.split("."), d = a.La, e = 0, f = c.length; e < f;) {
            d = d[c[e]];
            e++
        }
        return d
    }
    function U(a, b) {
        this.a = a;
        var c = b || {};
        this.visible = k;
        this.state = "idle";
        this.opacity = c.alpha != h ? c.alpha : 1;
        gd(this);
        this.lb = c.lb != h ? c.lb : n;
        this.Dc = t;
        c.alpha != h && hd(this)
    }
    U.prototype = new I;
    U.prototype.K = function (a) {
        a = a || {};
        if (a.x != h) this.a.style.left = Math.round(a.x) + "px";
        if (a.y != h) this.a.style.top = Math.round(a.y) + "px"
    };
    U.prototype.yc = function () {
        return {
            x: parseInt(uc(this.a, "left")),
            y: parseInt(uc(this.a, "top"))
        }
    };

    function gd(a) {
        a.l = new Qc;
        E(a.l, "opacityUpdate", function () {
            hd(a)
        })
    }
    U.prototype.show = function () {
        K(this.a, "displayNone");
        J(this.a, "displayBlock")
    };

    function V(a) {
        K(a.a, "displayBlock");
        J(a.a, "displayNone")
    }

    function id(a, b) {
        var c = b || {};
        a.show();
        a.visible = k;
        jd(a, 1, c.duration, c.tc, function () {
            a.dispatchEvent("elementVisible");
            c.n && c.n()
        })
    }
    function W(a, b) {
        var c = b || {};
        jd(a, 0, c.duration, c.tc, function () {
            V(a);
            a.visible = n;
            a.dispatchEvent("elementHidden");
            c.n && c.n()
        })
    }

    function jd(a, b, c, d, e) {
        if (a.Dc && a.lb) {
            switch (b) {
            case 0:
                a.a.style.display = "none";
                a.a.style.visibility = "hidden";
                break;
            default:
                a.a.style.visibility = "visible"
            }
            e && e()
        } else {
            a.state = "fadeing";
            Rc(a.l, "opacity", a, {
                Pa: {
                    opacity: b
                },
                time: c ? c : 200,
                easing: d ? d : TWEEN.Easing.Linear.EaseNone,
                n: function () {
                    a.state = "idle";
                    e()
                }
            })
        }
    }
    function hd(a) {
        a.a.style.MozOpacity = a.opacity;
        a.a.style.Bd = a.opacity;
        a.a.style.td = a.opacity;
        a.a.style.opacity = a.opacity;
        a.a.style.visibility = a.opacity > 0 ? "visible" : "hidden"
    }
    U.prototype.T = function (a, b, c) {
        E(this.a, a, b, c || n)
    };

    function kd(a, b) {
        U.call(this, a, b);
        var c = b || {};
        this.opacity = c.alpha != h ? c.alpha : 0;
        hd(this);
        V(this);
        this.visible = n;
        this.b()
    }
    kd.prototype = new U;
    kd.prototype.b = function () {
        J(this.a, "layerElement")
    };

    function ld(a) {
        U.call(this, a);
        var b = this;
        this.mb = new Image;
        this.url = this.a.getAttribute("data-img");
        uc(this.a, "left");
        uc(this.a, "top");
        this.Ra = function () {
            b.a.style.background = "url(" + Mc("images/" + this.url) + ")"
        }
    }
    ld.prototype = new U;
    ld.prototype.b = function () {
        this.load();
        this.cd = document.createElement("div");
        this.a.appendChild(this.cd)
    };
    ld.prototype.K = function (a) {
        U.prototype.K.call(this, a)
    };
    ld.prototype.load = function () {
        if (this.url) {
            var a = this;
            this.mb.onload = function () {
                a.p()
            };
            this.mb.src = Mc("images/" + this.url)
        }
    };
    ld.prototype.p = function () {
        if (this.a.className.indexOf("pattern") < 0) {
            var a = O.da(this.mb);
            this.a.style.width = a.width + "px";
            this.a.style.height = a.height + "px"
        }
        this.Ra()
    };

    function md(a) {
        U.call(this, a);
        var b = this,
            c = 0;
        this.update = function (d) {
            d === 0 && b.state == "idle" && b.visible ? W(b) : d > 0 && (b.state == "idle" && !b.visible) && id(b);
            a.style.backgroundPosition = -c * 45 + "px";
            c++;
            c > 65 && (c = 0)
        }
    }
    md.prototype = new U;

    function nd(a) {
        U.call(this, a);
        var b = this;
        this.visible = n;
        this.b = function () {
            V(b);
            b.D = new od;
            b.D.b(b.a, k)
        };
        this.update = function (a) {
            if (a > 0.29 && a < 0.3 && b.visible == n) {
                clearTimeout(b.ic);
                b.visible = k;
                b.show();
                b.D.d();
                b.ic = setTimeout(function () {
                    b.visible = n;
                    b.D.c();
                    V(b)
                }, 3E3)
            }
        }
    }
    nd.prototype = new U;

    function pd(a) {
        function b(a) {
            if (a.keyCode == d[c.wa]) {
                c.wa++;
                if (c.wa === d.length) {
                    c.wa = 0;
                    c.d()
                }
            } else c.wa = 0;
            a.keyCode == Jc && c.d()
        }
        U.call(this, a);
        var c = this,
            d = [68, 65, 78, 67, 69];
        this.wa = 0;
        this.j = this.visible = n;
        this.b = function () {
            V(c);
            c.ac = Q.gb()[5].a;
            E(document, "keyup", b)
        };
        this.d = function () {
            if (!c.j) {
                c.j = k;
                Nc("egg");
                Q.C(L[6], k);
                c.play()
            }
        };
        this.c = function () {
            c.j = n;
            clearTimeout(c.ic);
            c.visible = n;
            c.D && c.D.c();
            W(c);
            K(c.ac, "egg")
        };
        this.play = function () {
            clearTimeout(c.uc);
            O.Ya(c.a);
            c.Ma = document.createElement("div");
            J(c.Ma, "loader");
            c.Ma.innerHTML = '<div class="spinner"></div>';
            c.a.appendChild(c.Ma);
            J(c.ac, "egg");
            c.visible = k;
            c.show();
            id(c);
            var a = Math.floor(Math.random() * 3),
                a = c.a.getAttribute("data-object") + a;
            c.D = new od;
            c.D.b(c.a, n, a);
            c.D.d();
            E(c.D, qd, c.ka)
        };
        this.ka = function () {
            c.uc = setTimeout(c.c, 17E3);
            c.a.removeChild(c.Ma)
        }
    }
    pd.prototype = new U;

    function rd(a, b) {
        U.call(this, a, b);
        var c = this,
            d = b || {}, e, f, g;
        this.b = function () {
            e = c.a.getAttribute("data-x");
            f = c.a.getAttribute("data-y");
            if (e != h) c.a.style.left = e + "px";
            if (f != h) c.a.style.top = f + "px";
            for (var a = Yb(c.a), b = a.length; --b > -1;) if (a[b].className.indexOf("tooltip") >= 0) {
                g = new U(a[b]);
                W(g, {
                    duration: 0
                });
                break
            }
        };
        this.Wb = function () {
            var a = d.Zc + "/overlay/" + c.a.getAttribute("data-id");
            Q.C(a)
        };
        this.Rc = function () {
            g.show();
            var a = O.da(g.a);
            g.a.style.top = -a.height + "px";
            g.a.style.left = -(a.width - 60) * 0.5 + "px";
            id(g)
        };
        this.Xb = function () {
            W(g)
        };
        this.d = function () {
            if (g) {
                E(c.a, "mouseover", c.Rc);
                E(c.a, "mouseout", c.Xb)
            } else E(c.a, "click", c.Wb)
        };
        this.c = function () {
            if (g) {
                H(c.a, "mouseover");
                H(c.a, "mouseout");
                c.Xb()
            } else H(c.a, "click", c.Wb)
        }
    }
    rd.prototype = new U;

    function sd() {
        var a = this;
        this.j = this.Nb = n;
        this.N = O.N();
        this.Y = [];
        this.e = [];
        this.play = function () {
            for (var b = a.e.length, c = a.dc = 0; c < b; c++) E(a.e[c], qd, a.Tc);
            b === 0 && a.ka()
        };
        this.Tc = function () {
            a.dc++;
            a.dc === a.e.length && a.ka()
        };
        this.ka = function () {
            var b;
            for (b = 0; b < a.Y.length; ++b) {
                var c = a.Y[b];
                a.wb(c);
                c.bb.delay(c.delay[0]).start()
            }
        };
        this.stop = function () {
            var b;
            for (b = 0; b < a.Y.length; ++b) {
                a.Y[b].bb.stop();
                a.Y[b].nc.stop();
                a.wb(a.Y[b])
            }
        };
        this.b = function (b) {
            a.a = b;
            var c = Q.u("json.scene-player").La[b.getAttribute("id")],
                b = c.elements;
            a.Nb = Boolean(c.isConstant);
            for (var d in b) {
                var c = b[d],
                    e = {
                        a: document.getElementById(d),
                        delay: c.delay,
                        $: c.translateX[0],
                        aa: c.translateY[0],
                        Sa: c.translateX[0],
                        Ta: c.translateY[0],
                        loop: c.loop,
                        reverse: c.reverse
                    }, f = {
                        $: c.translateX[1],
                        aa: c.translateY[1]
                    }, g = {
                        $: c.translateX[0],
                        aa: c.translateY[0]
                    }, f = (new TWEEN.Tween(e)).delay(c.delay[0]).to(f, c.duration).onUpdate(a.hc).onComplete(a.Oc).easing(eval(c.easing)),
                    g = (new TWEEN.Tween(e)).delay(c.delay[0]).to(g, c.duration).onUpdate(a.hc).onComplete(a.Nc).easing(eval(c.easing));
                e.bb = f;
                e.nc = g;
                if (Boolean(c.reverse) == k) {
                    f.chain(g);
                    g.chain(f)
                }
                a.Y.push(e);
                a.wb(e)
            }
            d = Yb(a.a);
            for (b = d.length; b--;) if (d[b].className.indexOf("swiffyPlayer") >= 0) {
                c = new od;
                c.b(d[b]);
                a.e.push(c)
            }
        };
        this.wb = function (b) {
            if (a.N) {
                var c = a.N.vendor + "Transform",
                    d = O.ta(b.Sa, b.Ta);
                b.a.style[c] = d
            } else {
                b.a.style.top = b.Ta + "px";
                b.a.style.left = b.Sa + "px"
            }
            b.$ = b.Sa;
            b.aa = b.Ta
        };
        this.hc = function () {
            if (a.N) {
                var b = a.N.vendor + "Transform",
                    c = O.ta(this.$, this.aa);
                this.a.style[b] = c
            } else {
                this.a.style.top = this.aa + "px";
                this.a.style.left = this.$ + "px"
            }
        };
        this.Oc = function () {
            if (Boolean(this.loop) == k && Boolean(this.reverse) == n) {
                this.$ = this.Sa;
                this.aa = this.Ta;
                this.bb.delay(this.delay[1]).start()
            }
        };
        this.Nc = aa()
    }
    sd.prototype = new I;
    sd.prototype.d = function () {
        if (!this.j) {
            this.j = k;
            !Sa && this.play();
            for (var a = this.e.length; a--;) this.e[a].d()
        }
    };
    sd.prototype.c = function () {
        if (this.j && !this.Nb) {
            this.j = n;
            !Sa && this.stop();
            for (var a = this.e.length; a--;) this.e[a].c()
        }
    };

    function od() {
        var a = this;
        this.j = n;
        this.X = {
            width: 0,
            height: 0
        };
        this.b = function (b, c, d) {
            a.a = b;
            td.add(a);
            b = "" + (new Date).getTime();
            a.id = "swiffy" + b.substring(b.length - 5, b.length);
            a.G = document.createElement("div");
            J(a.G, "animation");
            a.a.appendChild(a.G);
            a.ga = a.a.getAttribute("data-img");
            a.Ca = a.a.getAttribute("data-sound");
            a.g = new Uc;
            a.Ab = d ? d : a.a.getAttribute("data-object");
            d = a.Ab + ".json";
            ud() && a.g.add("animation", "json", d);
            if (a.ga) a.g.add("fallback", "img", a.ga);
            else {
                a.X.width = parseInt(a.a.getAttribute("data-width"));
                a.X.height = parseInt(a.a.getAttribute("data-height"));
                a.bc()
            }
            E(a.g, Wc, a.Gc);
            a.ga && a.g.load("img");
            c && a.g.load()
        };
        this.play = function () {
            clearTimeout(a.Wc);
            H(a, vd);
            if (a.v) {
                O.Ya(a.G);
                a.v.destroy();
                a.v = l;
                delete a.v
            }
            if (ud() && a.zb) {
                a.v = new swiffy.Stage(a.G, a.zb);
                a.v.setFlashVars("swiffyId=" + a.id);
                a.v.start()
            } else a.G.innerHTML = '<embed width="100%" height="100%" wmode="transparent" allowFullScreen="false" quality="high" type="application/x-shockwave-flash" src="' + Mc("swf/" + a.Ab + ".swf") + '" flashvars="swiffyId=' + a.id + '"></embed>';
            a.Wc = setTimeout(a.ka, 20)
        };
        this.ka = function () {
            if (a.j) {
                a.a.style.background = "none";
                a.Ca && Q.la(a.Ca, {
                    loop: a.Ca.indexOf("loop") >= 0 ? k : n
                });
                a.dispatchEvent(qd)
            }
        };
        this.stop = function () {
            a.Ca && Q.Da(a.Ca);
            setTimeout(a.Yb, 20)
        };
        this.Yb = function () {
            O.Ya(a.G);
            a.Ra();
            if (a.v) {
                a.v.destroy();
                a.v = l;
                delete a.v
            }
        };
        this.Gc = function (b) {
            if (b.O instanceof Yc) {
                a.Ra();
                a.X = O.da(b.O.a);
                a.bc()
            } else if (b.O instanceof cd) {
                a.zb = b.O.La;
                a.j && a.play()
            }
        };
        this.bc = function () {
            a.a.style.width = a.X.width + "px";
            a.a.style.height = a.X.height + "px";
            a.G.style.width = a.X.width + "px";
            a.G.style.height = a.X.height + "px"
        };
        this.Ra = function () {
            if (a.ga) a.a.style.background = "url(" + Mc("images/" + a.ga) + ")"
        }
    }
    od.prototype = new I;
    var qd = "swiffyPlaying",
        vd = "swiffyComplete";
    od.prototype.d = function () {
        if (this.j != k) {
            this.j = k;
            ud() ? this.g.isLoaded() ? this.play() : this.g.load("json") : t && swfobject.ua.pv[0] >= 9 && this.play()
        }
    };
    od.prototype.c = function () {
        if (this.j != n) {
            this.j = n;
            this.stop()
        }
    };
    od.prototype.$b = function (a) {
        switch (a.type) {
        case "ready":
            this.dispatchEvent("swiffyReady");
            break;
        case "complete":
            this.dispatchEvent(vd)
        }
    };

    function ud() {
        return t || Sa ? n : !! document.createElementNS && !! document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    }

    function wd() {
        function a() {
            window.location = window.location.href.split("/overlay")[0]
        }
        function b() {
            c = O.ea();
            var a = O.da(f);
            f.style.top = (c.height - a.height) / 1.6 + "px";
            f.style.left = (c.width - a.width) / 2 + "px"
        }
        var c, d, e, f, g, j, m;
        return {
            b: function () {
                d = new kd(N("#overlayWrapper"));
                e = N("#overlay-widget-middle");
                f = N("#overlay-widget");
                g = N("#overlay-dim");
                _closeButton = N("#overlay-widget-close");
                m = Q.Jb();
                E(g, "mouseup", a)
            },
            Eb: function () {
                if (j) {
                    W(d, {
                        n: function () {
                            j.c();
                            j = l
                        }
                    });
                    xd(m, 500)
                }
            },
            Uc: function (a, c) {
                _closeButton.href = window.location.href.split("/overlay")[0];
                j && c.Aa[a] != j && j.c();
                if (c.Aa[a] != j) {
                    j = c.Aa[a];
                    j.d();
                    e.appendChild(j.a);
                    id(d, {
                        duration: 500
                    });
                    yd(m, 500);
                    b()
                }
            },
            vb: function () {
                b()
            }
        }
    }
    function $(a, b) {
        this.Fb = a;
        this.a = b;
        this.P = Wb("DIV", "overlayViewWrapper", this.a)[0]
    }
    $.prototype = new I;
    o = $.prototype;
    o.b = aa();
    o.load = aa();
    o.p = aa();
    o.d = function () {
        K(this.a, "displayNone");
        J(this.a, "displayBlock")
    };
    o.c = function () {
        K(this.a, "displayBlock");
        J(this.a, "displayNone");
        this.Fb.a.appendChild(this.a)
    };
    o.Ia = function () {
        return this.a.getAttribute("data-id")
    };

    function zd(a, b) {
        $.call(this, a, b)
    }
    zd.prototype = new $;
    zd.prototype.d = function () {
        $.prototype.d.call(this);
        this.P.innerHTML = '<img width="660" height="360" src="' + Mc("images/overlays/" + this.a.getAttribute("data-url")) + '"/>'
    };
    zd.prototype.c = function () {
        $.prototype.c.call(this);
        this.P.innerHTML = ""
    };

    function Ad(a, b) {
        $.call(this, a, b);
        var c = this;
        this.S = [];
        this.fd = {
            tb: 0
        };
        this.eb = this.s = 0;
        this.Mc = function () {
            c.s--;
            if (c.s < 0) c.s = 0;
            c.l.to({
                tb: c.s
            }, 600).onUpdate(c.gc).easing(TWEEN.Easing.Cubic.EaseOut).start();
            c.jb()
        };
        this.Lc = function () {
            c.s++;
            if (c.s > c.S.length - 1) c.s = c.S.length - 1;
            c.l.to({
                tb: c.s
            }, 600).onUpdate(c.gc).easing(TWEEN.Easing.Cubic.EaseOut).start();
            c.jb()
        };
        this.jb = function () {
            if (c.s < 1) {
                J(c.B, "displayNone");
                K(c.B, "displayBlock")
            } else if (Ha(Ob(c.B), "displayNone")) {
                K(c.B, "displayNone");
                J(c.B, "displayBlock")
            }
            if (c.s > c.S.length - 2) {
                J(c.A, "displayNone");
                K(c.A, "displayBlock")
            } else if (Ha(Ob(c.A), "displayNone")) {
                K(c.A, "displayNone");
                J(c.A, "displayBlock")
            }
        };
        this.gc = function () {
            var a = O.N(),
                b = -c.eb / c.S.length * this.tb;
            a ? c.ca.style[a.vendor + "Transform"] = O.ta(b, 0) : c.ca.style.left = b + "px"
        }
    }
    Ad.prototype = new $;
    Ad.prototype.b = function () {
        $.prototype.b.call(this);
        this.g = new Uc;
        var a = "overlays/" + this.a.getAttribute("data-url"),
            b = parseInt(this.a.getAttribute("data-imageslength"));
        this.fb = document.createElement("div");
        this.fb.setAttribute("id", "gallery-wrapper");
        this.P.appendChild(this.fb);
        this.eb = b * 660;
        this.cb = document.createElement("div");
        this.cb.setAttribute("id", "gallery-image-wrapper");
        this.fb.appendChild(this.cb);
        this.ca = document.createElement("div");
        this.ca.setAttribute("id", "gallery-image-holder");
        this.ca.style.width = this.eb + "px";
        this.cb.appendChild(this.ca);
        for (var c = 0; c < b; c++) {
            this.g.add("img." + c, "img", a + c + ".jpg");
            var d = document.createElement("div");
            d.setAttribute("class", "galleryImage");
            this.ca.appendChild(d);
            this.S.push(d)
        }
        this.B = document.createElement("div");
        this.B.setAttribute("class", "galleryArrow gallery-prev-arrow");
        this.B.innerHTML = '<div class="circle"></div><div class="icon icon-arrow-left-small"></div>';
        this.P.appendChild(this.B);
        E(this.B, "click", this.Mc);
        this.A = document.createElement("div");
        this.A.setAttribute("class", "galleryArrow gallery-next-arrow");
        this.A.innerHTML = '<div class="circle"></div><div class="icon icon-arrow-right-small"></div>';
        this.P.appendChild(this.A);
        E(this.A, "click", this.Lc);
        this.l = new TWEEN.Tween(this.fd);
        this.s = 0;
        this.jb()
    };
    Ad.prototype.d = function () {
        K(this.a, "displayNone");
        J(this.a, "displayBlock");
        var a = this;
        if (!this.g.isLoaded()) {
            E(this.g, Wc, function () {
                for (var b = 0; b < a.S.length; b++) a.S[b].style.backgroundImage = "url(" + a.g.u("img." + b).url + ")"
            });
            this.g.load()
        }
    };
    Ad.prototype.c = function () {
        K(this.a, "displayBlock");
        J(this.a, "displayNone");
        this.Fb.a.appendChild(this.a)
    };

    function Bd(a, b) {
        $.call(this, a, b)
    }
    Bd.prototype = new $;
    Bd.prototype.d = function () {
        $.prototype.d.call(this);
        var a = this,
            b = a.a.getAttribute("data-url");
        this.mc = setTimeout(function () {
            a.P.innerHTML = '<iframe src="http://www.youtube.com/embed/' + b + '?rel=0&theme=light&controls=1&autoplay=1" frameborder="0" allowfullscreen></iframe>'
        }, 700)
    };
    Bd.prototype.c = function () {
        $.prototype.c.call(this);
        clearTimeout(this.mc);
        this.P.innerHTML = ""
    };

    function Cd(a) {
        this.a = a;
        this.g = new Uc;
        this.loaded = n;
        this.Tb = 0;
        this.F = n;
        this.I = [];
        this.Aa = {};
        this.z = [];
        this.na = []
    }
    Cd.prototype = new I;
    o = Cd.prototype;
    o.b = function () {
        for (var a = Yb(this.a), b = a.length; b--;) if (a[b].className.indexOf("sceneWrapper") >= 0) this.Lb(a[b]);
        else if (!(a[b].className.indexOf("textWrapper") >= 0)) if (a[b].className.indexOf("overlayContentWrapper") >= 0) {
            var c = a[b],
                d = h,
                d = c.className.indexOf("gallery") >= 0 ? new Ad(this, c) : c.className.indexOf("video") >= 0 ? new Bd(this, c) : new zd(this, c);
            d.b();
            this.Aa[d.Ia()] = d
        } else if (a[b].className.indexOf("button-hotspot") >= 0) {
            c = new rd(a[b], {
                Zc: this.Ia()
            });
            c.b();
            this.z.push(c)
        }
    };
    o.K = function (a) {
        this.a.style.left = a.x + "px";
        this.a.style.top = a.y + "px"
    };
    o.Lb = function (a) {
        for (var a = Yb(a), b = a.length; b--;) if (a[b].className.indexOf("scenePlayer") >= 0) {
            var c = new sd;
            c.b(a[b]);
            this.I.push(c)
        } else a[b].className.indexOf("sceneAsset") >= 0 && this.na.push(new ld(a[b]))
    };
    o.load = function () {
        if (!this.loaded) {
            for (var a = 0; a < this.na.length; a++) Dd(this, this.na[a].url);
            for (a = 0; a < this.I.length; a++) for (var b = 0; b < this.I[a].e.length; b++) Dd(this, this.I[a].e[b].ga);
            var c = this;
            this.g.addEventListener(Xc, function () {
                c.p()
            });
            this.g.load()
        }
    };

    function Dd(a, b) {
        if (b) {
            a.g.add(a.Tb, "img", b);
            a.Tb++
        }
    }
    o.p = function () {
        for (var a = 0; a < this.na.length; a++) this.na[a].b();
        if (a = this.a.getAttribute("data-sound")) {
            this.J = a;
            if (O.yb())(a = Q.u("snd." + a)) && a.setVolume(0)
        }
        this.loaded = k;
        this.dispatchEvent("sectionLoaded")
    };
    o.isLoaded = function () {
        return this.g.isLoaded()
    };
    o.Ba = function () {
        return this.g.Ba()
    };
    o.d = function () {
        if (!this.F) {
            this.F = k;
            J(this.a, "active");
            for (i = this.z.length; i--;) this.z[i].d();
            for (i = this.I.length; i--;) this.I[i].d();
            this.J && Q.la(this.J, {
                R: "in",
                duration: 3E3,
                loop: k
            })
        }
    };
    o.c = function () {
        if (this.F) {
            this.F = n;
            K(this.a, "active");
            for (i = this.z.length; i--;) this.z[i].c();
            for (i = this.I.length; i--;) this.I[i].c();
            this.J && Q.Da(this.J, {
                R: "out",
                duration: 3E3
            })
        }
    };
    o.Ia = function () {
        return this.a.getAttribute("data-id")
    };

    function Ed(a) {
        Cd.call(this, a);
        this.e = []
    }
    Ed.prototype = new Cd;
    o = Ed.prototype;
    o.b = function () {
        Cd.prototype.b.call(this);
        this.xb = new U(N("#scene0-send-button"))
    };
    o.Lb = function (a) {
        for (var a = Yb(a), b = a.length; b--;) if (a[b].className.indexOf("swiffyPlayer") >= 0) {
            var c = new od;
            c.b(a[b], k);
            this.e.push(c)
        } else a[b].className.indexOf("sceneAsset") >= 0 && this.na.push(new ld(a[b]))
    };
    o.d = function () {
        if (!this.F) {
            this.F = k;
            J(this.a, "active");
            var a = this;
            if (this.e[0].j) {
                this.e[0].c();
                this.e[0].Yb()
            }
            this.e[this.e.length - 1].d();
            id(this.xb);
            this.xb.T("click", function () {
                W(a.xb);
                a.e[0].d();
                a.e[a.e.length - 1].c();
                Q.la("send-click");
                Nc("click", "send button");
                var b = 5800;
                t && swfobject.ua.pv[0] < 9 && (b = 0);
                setTimeout(a.Kc, b)
            });
            for (i = this.z.length; i--;) this.z[i].d();
            this.J && Q.la(this.J, {
                R: "in",
                duration: 3E3,
                loop: k
            })
        }
    };
    o.c = function () {
        if (this.F) {
            this.F = n;
            K(this.a, "active");
            for (i = this.z.length; i--;) this.z[i].c();
            this.J && Q.Da(this.J, {
                R: "out",
                duration: 3E3
            })
        }
    };
    o.Kc = function () {
        Q.C(L[2])
    };

    function Fd(a) {
        U.call(this, a);
        var b = this,
            c = Xb("green-nav", this.a),
            d = O.da(c),
            e = Vb("nav-extender");
        this.isCollapsed = n;
        this.collapse = function (a) {
            a == k && !b.isCollapsed ? J(b.a, "collapse") : a == n && b.isCollapsed && K(b.a, "collapse");
            b.isCollapsed = a
        };
        this.ub = function (a) {
            var b = Math.max(0, (a.width - d.width) / 2);
            c.style.width = a.width - b * 2 + "px";
            c.style.left = b + "px";
            e[0].style.width = b + "px";
            e[1].style.width = b + "px";
            e[1].style.left = b + d.width + "px"
        }
    }
    Fd.prototype = new U;

    function Gd(a, b) {
        U.call(this, a, b);
        var c = this,
            d = b || {};
        this.o = [];
        this.b = function () {
            c.Xc = N("#site-nav-progressbar");
            c.pc = N("#site-nav-circles");
            c.Pb = N("#site-nav-journey-tip");
            c.nb();
            c.Cc();
            W(c, {
                duration: 0
            })
        };
        this.nb = function () {
            for (var a = Yb(c.pc), b = 0; b < a.length; b++) {
                a[b].style.left = 30 + 44 * b + "px";
                c.o.push({
                    ra: a[b],
                    state: "off"
                })
            }
        };
        this.Cc = function () {
            for (var a = 0; a < c.o.length; a++) {
                var b = Yb(c.o[a].ra)[0];
                if (b) {
                    b.innerHTML = b.innerHTML.replace(/-/gi, "&nbsp;");
                    c.o[a].Ad = b;
                    var d = O.da(b).width;
                    b.style.left = -d * 0.5 + 12 + "px";
                    var j = document.createElement("div");
                    j.setAttribute("class", "arrow");
                    j.style.left = d * 0.5 - 5 + "px";
                    b.appendChild(j)
                }
            }
        };
        this.d = function () {
            id(c);
            for (var a = 0; a < c.o.length; a++) E(c.o[a].ra, "click", c.Vb, h, c.o[a])
        };
        this.c = function () {
            W(c);
            for (var a = 0; a < c.o.length; a++) H(c.o[a].ra, "click", c.Vb, h, c.o[a])
        };
        this.Vb = function () {
            Ha(Ob(c.Pb), "hide") || J(c.Pb, "hide");
            var a = L[c.o.indexOf(this) + 1];
            Nc("click", "bottom navigation");
            Q.C(a, k)
        };
        this.update = function (a) {
            for (var b = 0, a = d.V[d.V.length - 1] * a, g = 1; g < d.V.length; g++) {
                var j = d.V[g - 1],
                    m = d.V[g];
                if (a > m) b++;
                else {
                    b = b + (a - j) / (m - j);
                    break
                }
            }
            a = Math.floor(b + 1);
            for (g = 0; g < d.V.length; g++) {
                j = c.o[g];
                if (g < a) {
                    if (j.state != "on") {
                        j.state = "on";
                        J(j.ra, "on")
                    }
                } else if (j.state != "off") {
                    j.state = "off";
                    K(j.ra, "on")
                }
            }
            c.Xc.style.width = 353 * (b / (d.V.length - 1)) + "px"
        };
        this.ub = function (a) {
            c.a.style.left = a.Ja - 218 + "px"
        }
    }
    Gd.prototype = new U;

    function Hd(a, b) {
        U.call(this, a, b);
        this.kc = 20;
        this.Ha = 78;
        this.lc = -110;
        this.jc = 18;
        this.ab = []
    }
    Hd.prototype = new U;
    Hd.prototype.b = function () {
        V(this);
        this.canvas = document.createElement("canvas");
        this.Jc = Xb("numberText", this.a);
        this.Hc = Xb("loadingText", this.a);
        if (this.canvas) {
            try {
                this.f = this.canvas.getContext("2d")
            } catch (a) {}
            if (this.f) {
                this.canvas.setAttribute("width", "170");
                this.canvas.setAttribute("height", "170");
                this.Bb = this.canvas.width * 0.5;
                this.Cb = this.canvas.height * 0.5;
                this.a.appendChild(this.canvas);
                this.nb()
            } else this.a.style.backgroundImage = "url(" + Mc("images/ui/preloader-bg.png") + ")"
        }
    };
    Hd.prototype.nb = function () {
        for (var a = 0; a < this.kc; a++) {
            var b = (this.lc + this.jc * (a + 1)) * Math.PI / 180;
            this.ab.push({
                color: a < 5 ? "#ababab" : "#3369e8",
                Yc: a % 2 == 0 ? 3 : 6,
                x: this.Bb + this.Ha * Math.cos(b),
                y: this.Cb + this.Ha * Math.sin(b)
            })
        }
    };
    Hd.prototype.update = function (a, b) {
        if (a <= 1) {
            if (this.f) {
                var c = n;
                this.f.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.f.beginPath();
                this.f.strokeStyle = "#ababab";
                for (var d = 0; d < 100; d++) {
                    var e = d / 100;
                    if (e > a) break;
                    var f = this.Mb(e),
                        g = this.Bb + f.x * this.Ha,
                        f = this.Cb + f.y * this.Ha;
                    if (e >= 0.25 && c == n) {
                        c = k;
                        this.f.lineWidth = 3;
                        this.f.stroke();
                        this.f.beginPath();
                        this.f.strokeStyle = "#3369e8"
                    }
                    this.f.lineTo(g, f)
                }
                this.f.lineWidth = 3;
                this.f.stroke();
                c = this.ab.length;
                for (d = 0; d < c; d++) {
                    e = d / c;
                    if (e >= a) break;
                    e = this.ab[d];
                    this.f.beginPath();
                    this.f.fillStyle = e.color;
                    this.f.strokeStyle = "#ffffff";
                    this.f.lineWidth = 2;
                    this.f.arc(e.x, e.y, e.Yc, 0, Math.PI * 2, k);
                    this.f.fill();
                    this.f.stroke()
                }
            }
            this.Jc.innerHTML = parseInt(a * 100);
            this.Hc.innerHTML = b == 0 ? "Loading images" : "Loading sounds"
        }
    };
    Hd.prototype.Mb = function (a) {
        var b = 90 * Math.PI / 180;
        return {
            x: Math.cos(a * 2 * Math.PI - b),
            y: Math.sin(a * 2 * Math.PI - b)
        }
    };

    function Id() {
        var a, b;

        function c() {
            d();
            X.update(F.k);
            ka.update(F.k);
            if (va != Jd && zb && !kb) ea.a.scrollTop = F.k * (a - z.height)
        }
        function d() {
            var a = Ua.getPoint(F.k),
                b = Math.floor(R.Ja - a.x),
                a = Math.floor(R.ib - a.y);
            if (wa) Y.style[wa.vendor + "Transform"] = O.ta(b, a);
            else {
                Y.style.left = b + "px";
                Y.style.top = a + "px"
            }
            a = lb.getPoint(_mappingSpline.zc(F.k));
            b = Math.floor(a.x);
            a = Math.floor(a.y);
            if (wa) q.a.style[wa.vendor + "Transform"] = O.ta(b, a);
            else {
                q.a.style.left = b + "px";
                q.a.style.top = a + "px"
            }
        }
        function e(a) {
            if (a.target.id == "scroll") {
                va = Jd;
                Va.stop();
                Nc("click", "right scroll")
            }
        }
        function f() {
            c();
            if (va === Jd) {
                F.k = ea.a.scrollTop / (parseInt(mb.style.height) - z.height);
                c();
                clearTimeout($c);
                $c = setTimeout(g, 2500)
            }
        }
        function g() {
            if (!Kc) {
                var a = Math.round((Ga.length - 1) * (ea.a.scrollTop / (parseInt(mb.style.height) - z.height))),
                    a = O.Ib(a, A),
                    b = L[A.indexOf(a) + 1];
                lc(Lc).split("/")[1] != b ? Q.C(b) : T(A.indexOf(a))
            }
        }
        function j(a) {
            if (!Kc) {
                a.preventDefault();
                var b = 0,
                    b = a.rc < 0 ? b - 1 : b + 1;
                if (va === Kd) {
                    Nc("mousewheel");
                    s(b)
                }
            }
        }
        function m() {}
        function y(a) {
            a = a.keyCode;
            if (a == Hc || a == Dc || a == Ec) {
                s(-1);
                Nc("keyboard")
            } else if (a == Ic || a == Fc || a == Gc) {
                s(1);
                Nc("keyboard")
            }
        }
        function w() {
            this == G.a ? s(-1) : this == D.a && s(1);
            Nc("click", "arrows")
        }
        function s(a) {
            var b = lc(Lc),
                b = b.split("/"),
                b = L.indexOf(b[1]);
            a > 0 ? b < L.length - 1 && Q.C(L[b + 1]) : b > 1 && Q.C(L[b - 1])
        }
        function ba() {
            for (var a = Math.floor((Ga.length - 1) * F.k), b = Q.gb(), c = A.length; c--;) if (a === A[c]) {
                Ab = c;
                for (a = b.length; a--;) a !== Ab && b[a].c();
                b[Ab].d();
                break
            }
            b = Ab;
            b > 0 ? id(G) : W(G);
            b < A.length - 1 ? id(D) : W(D);
            ad = setTimeout(M, 500)
        }
        function M() {
            va = Kd;
            ra();
            zb = k
        }
        function ra() {
            ea.a.scrollTop = F.k * (parseInt(mb.style.height) - z.height)
        }
        function T(a) {
            if (a >= 0) {
                for (var b = A[a], d = Math.floor((Ga.length - 1) * F.k), e, f, g = 0, j = Ua.points.length - 1, Z = 0; Z < A.length; Z++) {
                    if (d === A[A.length - 1]) {
                        e = A.length - 2;
                        f = A.length;
                        break
                    }
                    if (d < A[Z + 1]) {
                        e = A.indexOf(A[Z]);
                        f = A[Z] / j;
                        g = A[Z === A.length - 1 ? Z : Z + 1] / j;
                        break
                    }
                }
                d = Math.abs(F.k - f) / (g - f);
                j = b / j;
                g = 3E3;
                f != j && (d = 1 - d);
                F.k === f && F.k > j && (e = e - 1);
                e < 0 && (e = 0);
                if (e - a <= 1 && e - a >= -1) g = bd[e] * d;
                else {
                    zb = n;
                    g = 0
                }
                g < 0 && (g = 0);
                W(G);
                W(D);
                a = Bb ? 0 : g;
                if (!(b < 0 || b > A[A.length - 1])) {
                    b = O.Ib(b, A);
                    va = Ld;
                    ra();
                    clearTimeout(ad);
                    if (a > 0) {
                        Va && TWEEN.remove(Va);
                        Va.to({
                            k: b / (Ga.length - 1)
                        }, a).onUpdate(c).easing(TWEEN.Easing.Linear.EaseNone).onComplete(ba).start()
                    } else {
                        Va.stop();
                        zb = n;
                        F.k = b / (Ga.length - 1);
                        c();
                        ba()
                    }
                }
            }
            Bb && (Bb = n)
        }
        function C(a) {
            if (!(a.touches.length > 1)) {
                var b = (a.targetTouches && a.targetTouches.length ? a.targetTouches : a.changedTouches && a.changedTouches.length ? a.changedTouches : a.touches)[0],
                    c = "";
                switch (a.type) {
                case "touchstart":
                    a.stopPropagation();
                    c = "mousedown";
                    break;
                case "touchmove":
                    a.preventDefault();
                    c = "mousemove";
                    break;
                case "touchend":
                    c = "mouseup";
                    break;
                default:
                    return
                }
                a = document.createEvent("MouseEvent");
                a.initMouseEvent(c, k, k, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, n, n, n, n, 0, l);
                b.target.dispatchEvent(a)
            }
        }
        var fa = O.hb(),
            z = O.ea(),
            R, wa, Y, G, D, la, X, xa, q, ka, Ua, lb, Z = [],
            Ga = [],
            Va, F, va, ad, ea, mb, zb = k,
            $c, dc, A = [],
            bd = [],
            Ab = 0,
            Cb = n,
            Bb = k,
            kb;
        return {
            b: function () {
                wa = O.N();
                kb = O.Fc();
                G = new U(N("#navArrowLeft"));
                D = new U(N("#navArrowRight"));
                ea = new U(N("#scroll"));
                mb = N("#scrollInner");
                Y = N("#mapWrapper");
                q = new md(N("#package"));
                ka = new nd(N("#vampire-swiffy"));
                ka.b();
                va = Kd;
                F = {
                    k: 0
                };
                Va = new TWEEN.Tween(F);
                var a = 0,
                    b = Q.u("json.settings"),
                    c;
                for (c in S(b, "splines.cameraSpline")) {
                    pointObj = S(b, "splines.cameraSpline." + a);
                    Ga[a] = new Pc(pointObj[0], pointObj[1]);
                    a++
                }
                a = 0;
                for (c in S(b, "splines.packageSpline")) {
                    pointObj = S(b, "splines.packageSpline." + a);
                    Z.push(new Pc(pointObj[0], pointObj[1]));
                    a++
                }
                var a = 0,
                    d;
                for (d in S(b, "sections")) {
                    A.push(S(b, "sections." + a));
                    bd.push(S(b, "durations." + a));
                    a++
                }
                a = S(b, "splines.mappingSpline.times");
                b = S(b, "splines.mappingSpline.values");
                Ua = new THREE.Spline(Ga);
                lb = new THREE.Spline(Z);
                _mappingSpline = new Oc(b, a);
                la = new Fd(N("#green-nav-wrapper"));
                X = new Gd(N("#site-nav-wrapper"), {
                    V: A
                });
                X.b();
                xa = new kd(N("#footer-wrapper"));
                dc = new Tc(fa);
                if (kb) {
                    b = document.getElementById("mainWrapper");
                    b.addEventListener("touchstart", C);
                    b.addEventListener("touchmove", C);
                    b.addEventListener("touchend", C);
                    C = {
                        rd: 0,
                        xd: 0
                    }
                }
            },
            d: function () {
                if (!Cb) {
                    Cb = k;
                    if (!kb) {
                        ea.show();
                        E(dc, "mousewheel", j);
                        E(ea.a, "scroll", f, n);
                        E(document, "mousedown", e, n);
                        E(document, "keydown",
                        m);
                        E(document, "keyup", y)
                    }
                    E(G.a, "click", w);
                    E(D.a, "click", w)
                }
            },
            c: function () {
                if (Cb) {
                    Cb = n;
                    if (!kb) {
                        H(dc, "mousewheel", j);
                        H(ea.a, "scroll", f, n);
                        H(document, "mousedown", e, n);
                        H(document, "keydown", m);
                        H(document, "keyup", y);
                        V(ea)
                    }
                    H(G.a, "click", w);
                    H(D.a, "click", w);
                    V(G);
                    V(D)
                }
            },
            bd: function () {
                la.collapse(n);
                X.c();
                id(xa);
                F.k = 0;
                c();
                for (var a = Q.gb(), b = 0; b < a.length; b++) a[b].c()
            },
            Bc: function () {
                X.d();
                la.collapse(k);
                W(xa)
            },
            vb: function () {
                z = O.ea();
                R = O.ea();
                b = z.height;
                a = z.height * 10;
                mb.style.height = a + "px";
                ea.a.style.height = b - 20 + "px";
                var c = 52 + (z.height - 85) * 0.5;
                G.K({
                    y: c
                });
                D.K({
                    y: c
                });
                la.ub(z);
                X.ub(z);
                d()
            },
            state: function () {
                return va
            },
            qc: function (a) {
                return T(a)
            },
            gd: function () {
                q.update(F.k)
            },
            $c: function (a) {
                Bb = a
            }
        }
    }
    var Kd = "stateIdle",
        Ld = "stateAnimate",
        Jd = "stateScrolling";

    function Md() {
        this.volume = 1;
        this.loaded = this.Ga = this.muted = n;
        this.l = new Qc;
        this.l.Za = TWEEN.Easing.Linear.EaseNone;
        var a = this;
        this.l.addEventListener("volumeUpdate", function () {
            a.dispatchEvent("volumeChanged")
        });
        this.l.addEventListener("volumeCompleted", function () {
            a.dispatchEvent("volumeCompleted")
        })
    }
    Md.prototype = new I;
    Md.prototype.b = function () {
        if (O.yb() == n) {
            this.L = new SoundManager;
            Nd(this)
        } else this.loaded = k;
        var a = this,
            b, c;
        if (typeof document.hidden !== "undefined") {
            b = "hidden";
            c = "visibilitychange"
        } else if (typeof document.mozHidden !== "undefined") {
            b = "mozHidden";
            c = "mozvisibilitychange"
        } else if (typeof document.msHidden !== "undefined") {
            b = "msHidden";
            c = "msvisibilitychange"
        } else if (typeof document.webkitHidden !== "undefined") {
            b = "webkitHidden";
            c = "webkitvisibilitychange"
        }
        c && E(document, c, function () {
            if (document[b]) a.volume = 0;
            else if (!a.muted) a.volume = 1;
            a.dispatchEvent("volumeChanged")
        }, n);
        this.pa = N("#nav-audio");
        E(this.pa, "click", function () {
            if (a.muted) {
                J(a.pa, "on");
                K(a.pa, "off");
                a.Ga = n;
                xd(a, h);
                Nc("click", "unmute")
            } else Od(a);
            O.ad("mute", a.Ga)
        });
        O.xc("mute") == "true" && Od(this, 0)
    };
    Md.prototype.la = function (a, b) {
        var c = Q.u("snd." + a);
        c && (c != h && this.loaded) && c.play(b)
    };
    Md.prototype.Da = function (a, b) {
        var c = Q.u("snd." + a);
        c && (c != h && this.loaded) && c.stop(b)
    };

    function Od(a, b) {
        K(a.pa, "on");
        J(a.pa, "off");
        a.Ga = k;
        yd(a, b);
        b > 0 && Nc("click", "mute")
    }

    function xd(a, b) {
        if (a.Ga == n) {
            a.muted = n;
            Rc(a.l, "volume", a, {
                Pa: {
                    volume: 1
                },
                time: b != h ? b : 1E3
            })
        }
    }
    function yd(a, b) {
        a.muted = k;
        Rc(a.l, "volume", a, {
            Pa: {
                volume: 0
            },
            time: b != h ? b : 1E3
        })
    }
    function Nd(a) {
        a.L.movies["default"].isLoaded() ? setTimeout(function () {
            a.Ga && Od(a, 0);
            a.loaded = k
        }, 2E3) : setTimeout(function () {
            Nd(a)
        }, 500)
    }
    var td = td || new function () {
            this.e = {};
            this.add = function (a) {
                this.e[a.id] = a
            };
            this.$b = function (a, b) {
                this.e[a].$b(b || {})
            }
        }, Q = Q || new function () {
            function a() {
                R = new Uc;
                R.add("json.settings", "json", "settings.json");
                R.add("json.scene-player", "json", "scene-player.json");
                R.add("xml.sounds", "xml", "sound-config.xml", {
                    Ic: k
                });
                Db(R, Xc, b);
                R.load()
            }
            function b() {
                _soundController = new Md;
                _soundController.b();
                fa = new wd;
                fa.b();
                xa = new U(N("#site-nav-wrapper-right"));
                new U(N("#mainWrapper"));
                la = new kd(N("#mapWrapper"));
                G = new kd(N("#startWrapper"));
                D = new Hd(N("#preloaderWrapper"));
                D.b();
                ka = [G, D, la];
                T = Lc;
                L.push("");
                C = new Id;
                C.b();
                E(M, "resize", ba, n);
                ba();
                z = new Uc;
                c();
                for (var a = Yb(N("#sharedSceneAssets")), b = a.length; b--;) {
                    var d = new ld(a[b]);
                    d.b();
                    d.url && z.add("sharedAsset." + b, "img", d.url)
                }
                for (var a = Yb(la.a), d = n, f = 0; f < a.length; f++) if (a[f].tagName.toLowerCase() == "section") {
                    if (d) b = new Cd(a[f]);
                    else {
                        d = k;
                        b = new Ed(a[f])
                    }
                    b.b();
                    q.push(b);
                    L.push(b.Ia())
                }
                a = R.u("json.settings");
                for (b = 0; b < q.length; b++) {
                    d = S(a, "splines.cameraSpline." + S(a, "sections." + b));
                    q[b].K(new Pc(d[0],
                    d[1]))
                }
                E(T, bc, e);
                nc(T, k);
                J(document.body, "visible");
                window.gapi.plusone.go()
            }
            function c() {
                for (var a = Q.u("xml.sounds").xml.getElementsByTagName("sound"), b = 0; b < a.length; b++) d(a[b].getAttribute("id"));
                _soundController.addEventListener("volumeChanged", function () {
                    for (var a in z.h) z.h[a] instanceof Zc && z.h[a].setVolume(_soundController.volume)
                })
            }
            function d(a) {
                z.add("snd." + a, "audio", {
                    rb: "sound/" + a + ".ogg",
                    Oa: "sound/" + a + ".mp3",
                    pb: "sound/" + a + ".m4a"
                })
            }
            function e(a) {
                var b = L.indexOf(a.Fa.substr(1, a.Fa.length));
                if (b >= 0 && z.isLoaded() == n) {
                    if (b > 0) {
                        V(xa);
                        D.show();
                        j(D)
                    } else G.visible || j(G);
                    if (Y == "loading_settings") {
                        Y = "loading_sections";
                        for (a = 0; a < q.length; a++) q[a].load()
                    }
                    b <= 0 && g()
                } else if (a.Fa != l) a: {
                    b = a.Fa;
                    a = b.split("/");
                    X && X.c();
                    if (a.length > 1) if (L.indexOf(a[1]) >= 0) {
                        if (L[0] == a[1]) {
                            g();
                            break a
                        }
                        var c = L.indexOf(a[1]) - 1,
                            d = c - 1 < 0 ? 0 : c - 1,
                            e = c + 1 > q.length - 1 ? q.length - 1 : c + 1;
                        if (c >= 0) {
                            q[c].isLoaded() && q[d].isLoaded() && q[e].isLoaded() ? f(c) : m(c);
                            if (fa) if (a[2] == "overlay") if (q[c].Aa[a[3]]) {
                                fa.Uc(a[3], q[c]);
                                C.c()
                            } else {
                                C.d();
                                fa.Eb()
                            } else {
                                C.d();
                                fa.Eb()
                            }
                        }
                    } else g();
                    else g();
                    b = b.substr(1, b.length);
                    _gaq || (_gaq = []);
                    b && _gaq.push(["_trackPageview", "/" + b])
                }
            }
            function f(a) {
                if (a >= 0) {
                    j(la);
                    C.d();
                    C.Bc();
                    xa.show()
                }
                for (var b = q.length; b--;) b !== a && q[b].c();
                C && C.qc(a);
                wa || y()
            }
            function g() {
                V(xa);
                j(G);
                C.c();
                C.bd()
            }
            function j(a) {
                if (!a.visible) for (var b = 0; b < ka.length; b++) ka[b] == a ? W(ka[b], {
                    n: function () {
                        id(a)
                    }
                }) : W(ka[b])
            }
            function m(a) {
                window.stop !== h ? window.stop() : document.execCommand !== h && document.execCommand("Stop", n);
                var b = a - 1,
                    c = a + 1;
                if (b < 0) {
                    c = c + Math.abs(b);
                    b = 0
                }
                if (c > q.length - 1) {
                    b = c - (q.length - 1);
                    c = q.length - 1
                }
                for (var d = c - b + 1, e = 0; b <= c; b++) {
                    E(q[b], "sectionLoaded", function () {
                        e++;
                        d == e && f(a)
                    });
                    if (q[b].isLoaded()) {
                        e++;
                        d === e && f(a)
                    } else q[b].load()
                }
            }
            function y() {
                for (var a = 0; a < q.length; a++) {
                    if (!q[a].isLoaded()) {
                        E(q[a], "sectionLoaded", w);
                        q[a].load();
                        break
                    }
                    q[a].isLoaded() && a === q.length - 1 && (wa = k)
                }
            }
            function w() {
                y()
            }
            function s() {
                window.requestAnimationFrame(s);
                TWEEN.update();
                C && C.gd();
                if (Y == "loading_sections") {
                    for (var a = 0, b = q.length - 1; b >= 0; b--) a = a + q[b].Ba();
                    D.update(a / q.length * 0.75, 0);
                    if (a / q.length === 1) {
                        z.load();
                        Y = "loading_library"
                    }
                }
                if (Y == "loading_library") {
                    D.update(0.75 + z.Ba() * 0.25);
                    if (z.Ba() === 1) {
                        Y = "loading_complete";
                        X = new pd(N("#egg-swiffy"));
                        X.b();
                        if (!G.visible) {
                            nc(T, n);
                            nc(T, k)
                        }
                    }
                }
            }
            function ba(a) {
                ra = O.ea();
                G.K({
                    x: ra.Ja - 472,
                    y: ra.ib - 217
                });
                D.K({
                    x: ra.Ja - 82.5,
                    y: ra.ib - 50
                });
                C && C.vb(a);
                fa && fa.vb(a)
            }
            var M = O.hb(),
                ra = O.ea(),
                T, C, fa, z, R, wa, Y = "loading_settings",
                G, D, la, X, xa, q = [],
                ka = [],
                Ua, lb = n;
            return {
                b: function () {
                    if (!lb) {
                        lb = k;
                        O.b();
                        t ? O.Rb("//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",
                        a) : O.Rb("//www.gstatic.com/swiffy/v4.0.1/runtime.js", a);
                        s()
                    }
                },
                u: function (a) {
                    return a == "json.settings" || a == "json.scene-player" || a == "xml.sounds" ? R.u(a) : z.u(a)
                },
                Jb: function () {
                    return _soundController
                },
                la: function (a, b) {
                    if (z.isLoaded()) return _soundController.la(a, b)
                },
                Da: function (a, b) {
                    return _soundController.Da(a, b)
                },
                gb: function () {
                    return q
                },
                C: function (a, b) {
                    b && C && C.$c(k);
                    T && a != l && (lc(T) != "/" + a ? T.C("/" + a) : e({
                        Fa: "/" + a
                    }))
                },
                vd: function (a) {
                    Ua = a
                },
                kd: function () {
                    return Ua
                }
            }
        };
    document.addEventListener ? (document.addEventListener("DOMContentLoaded", Q.b, n), window.addEventListener("load", Q.b, n)) : document.attachEvent ? (document.attachEvent("onreadystatechange", Q.b), window.attachEvent("onload", Q.b)) : Q.b();
})();
