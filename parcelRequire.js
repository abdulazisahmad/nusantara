parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    clu1: [
      function (require, module, exports) {},
      {
        './../font/Circular-Bold.woff': [
          ['Circular-Bold.872d86fa.woff', 'OFJe'],
          'OFJe',
        ],
        './../font/Circular-Book.woff': [
          ['Circular-Book.7f9911ab.woff', 'zVWj'],
          'zVWj',
        ],
        './../font/Circular-Medium.woff': [
          ['Circular-Medium.b83521b3.woff', 'KFXZ'],
          'KFXZ',
        ],
        './../font/jelani.woff': [['jelani.603b9c30.woff', 'xamB'], 'xamB'],
        './../img/svg/btn-rect.svg': [
          ['btn-rect.70b3f203.svg', 'm97q'],
          'm97q',
        ],
        './../img/svg/fact-pttrn.svg': [
          ['fact-pttrn.29871379.svg', 'JWNu'],
          'JWNu',
        ],
        './../img/svg/fact-rect.svg': [
          ['fact-rect.ce9a57f3.svg', 'zkks'],
          'zkks',
        ],
      },
    ],
    Focm: [
      function (require, module, exports) {
        'use strict';
        require('./sass/main.scss');
        var e = document.getElementsByClassName('block'),
          a = document.getElementsByClassName('container'),
          t = new HorizontalScroll.default({
            blocks: e,
            container: a,
            isAnimated: !0,
            springEffect: 0.8,
            skewReducer: 35,
          }),
          r = gsap.timeline();
        r.from('.brand-logo', { xPercent: -100, opacity: 0 })
          .from('.hero__heading, .paragraph, .cta', {
            xPercent: -20,
            opacity: 0,
            stagger: 0.2,
          })
          .from('.hero img', {
            xPercent: -20,
            opacity: 0,
            stagger: 0.2,
            duration: 2,
          });
      },
      { './sass/main.scss': 'clu1' },
    ],
  },
  {},
  ['Focm'],
  null
);
//# sourceMappingURL=src.919d16a3.js.map
