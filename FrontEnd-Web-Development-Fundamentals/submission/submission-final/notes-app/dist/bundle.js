/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = r.base ? u[0] + r.base : u[0],
              l = i[s] || 0,
              f = "".concat(s, " ").concat(l);
            i[s] = l + 1;
            var p = n(f),
              h = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(h);
            else {
              var d = o(h, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: f, updater: d, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var u = r(t, o), s = 0; s < i.length; s++) {
              var l = n(i[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = u;
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      309: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (s = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n      :host {\n        display: grid;\n        width: 100%;\n        grid-template-columns: 1fr;\n        background: #F5F5F5;\n        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n        border-radius: 4px;\n        gap: 8px;\n      }\n\n      h2 {\n        color: black;\n        text-align: center;\n        margin-bottom: 16px;\n      }\n\n      form {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n      }\n\n      label {\n        margin-inline: 1em;\n      }\n\n      input, textarea {\n        grid-column: controls;\n        grid-row: auto;\n        margin-inline: 1em;\n        padding: 1em;\n        resize: vertical;\n        max-height: 50vh;\n        max-width: 100%;\n      }\n\n      textarea {\n        min-height: 100px;\n      }\n\n      button {\n        margin: 10px 20px;\n        padding: 1em;\n        border-radius: 4px;\n        justify-items: center;\n        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n      }\n\n      button:hover {\n        transform: translateY(-5px);\n        transition: 0.3s ease-in-out;\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n      }\n    ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n    <div class="container">\n      <h2>Form Catatan Baru</h2>\n      <form id="note-form">\n        <label for="title">Judul:</label>\n        <input type="text" id="title" placeholder="Judul Catatan" required />\n        \n        <label for="body">Isi:</label>\n        <textarea id="body" placeholder="Isi Catatan" required></textarea>\n\n        <button type="submit">Simpan Catatan</button>\n      </form>\n    </div>\n    '),
                    this._addEventListeners();
                },
              },
              {
                key: "_addEventListeners",
                value: function () {
                  var t = this,
                    e = this._shadowRoot.querySelector("#note-form");
                  e.addEventListener("submit", function (n) {
                    n.preventDefault();
                    var r = t._shadowRoot.querySelector("#title").value,
                      o = t._shadowRoot.querySelector("#body").value;
                    if (r && o) {
                      var i = {
                        title: r,
                        body: o,
                        createdAt: new Date().toDateString(),
                      };
                      t.dispatchEvent(
                        new CustomEvent("newNoteAdded", { detail: i }),
                      ),
                        e.reset();
                    } else alert("Harap isi semua kolom!");
                  });
                },
              },
            ]) && e(u.prototype, s),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s;
        })(n(HTMLElement));
        customElements.define("note-form", u);
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var l = [].concat(t[s]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      784: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              a(e, "_note", {
                title: "",
                body: "",
                createdAt: "",
                archived: !1,
              }),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (s = [
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "note",
                get: function () {
                  return this._note;
                },
                set: function (t) {
                  (this._note = t), this.render();
                },
              },
              {
                key: "onDelete",
                set: function (t) {
                  this._onDelete = t;
                },
              },
              {
                key: "onArchiveToggle",
                set: function (t) {
                  this._onArchiveToggle = t;
                },
              },
              {
                key: "_formatDate",
                value: function (t) {
                  return new Date(t).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                },
              },
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n      :host {\n        display: block;\n      }\n      .note {\n        background: #E0DEDE;\n        padding: 16px;\n        border-radius: 8px;\n        margin: 8px;\n        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n      }\n      .note h3 {\n        margin: 0 0 8px;\n      }\n      .note p {\n        margin: 0;\n      }\n\n      .note-footer {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      .note-footer small {\n        color: #555;\n        align-self: end; \n      }\n      .note-footer .actions {\n        display: flex;\n        gap: 8px;\n      }\n      .note-footer button {\n        padding: 6px 12px;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n      }\n      .note-footer button.delete {\n        background-color: #e74c3c;\n        color: white;\n      }\n      .note-footer button.archive {\n        background-color: #3498db;\n        color: white;\n      }\n    ";
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this;
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style);
                  var e = this._formatDate(this._note.createdAt);
                  (this._shadowRoot.innerHTML +=
                    '\n      <div class="note">\n        <h3>'
                      .concat(this._note.title, "</h3>\n        <p>")
                      .concat(
                        this._note.body,
                        '</p>\n        <div class="note-footer">\n          <small>',
                      )
                      .concat(
                        e,
                        '</small>\n          <div class="actions">\n            <button class="archive">',
                      )
                      .concat(
                        this._note.archived ? "Unarchive" : "Archive",
                        '</button>\n            <button class="delete">Delete</button>\n          </div>\n        </div>\n      </div>\n    ',
                      )),
                    this._shadowRoot
                      .querySelector(".delete")
                      .addEventListener("click", function () {
                        t._onDelete && t._onDelete(t._note.id);
                      }),
                    this._shadowRoot
                      .querySelector(".archive")
                      .addEventListener("click", function () {
                        t._onArchiveToggle && t._onArchiveToggle(t._note.id);
                      });
                },
              },
            ]) && e(u.prototype, s),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s;
        })(n(HTMLElement));
        customElements.define("note-item", u);
      },
      799: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (s = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n      :host {\n        display: block;\n        width: 100%;\n        background-color: white;\n        color: black;\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);\n      }\n\n      div {\n        display: grid;\n        grid-template-columns: auto 1fr;\n        align-items: center;\n        justify-items: end;\n        padding: 1rem;\n      }\n\n      .app-name {\n        margin: 0;\n        font-size: 1.7em;\n      }\n\n      nav ul{\n        display: flex;\n        padding: 0;\n        margin: 0;\n        list-style: none;\n        gap: 1rem;\n        align-items: center;\n      }\n\n      button {\n        font-size: 1.5rem;\n        cursor: pointer;\n      }\n    ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render(), this.toggleForm(), this.filterNotes();
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <div>\n        <h1 class="app-name">Notes</h1>\n        <nav>\n          <ul>\n            <li>\n              <select id="archive-selection">\n                <option id="all" value="all">All</option>\n                <option id="archieve" value="archive">Archieve</option>\n                <option id="unarchieve" value="unarchive">Unarchieve</option>\n              </select>\n            </li>\n            <li><button id="add-notes-btn">+</button></li>\n          </ul>\n        </nav>\n      </div>\n    ');
                },
              },
              {
                key: "toggleForm",
                value: function () {
                  var t = this;
                  this._shadowRoot
                    .querySelector("#add-notes-btn")
                    .addEventListener("click", function () {
                      t.dispatchEvent(
                        new CustomEvent("toggleForm", {
                          bubbles: !0,
                          composed: !0,
                        }),
                      );
                    });
                },
              },
              {
                key: "filterNotes",
                value: function () {
                  var t = this;
                  this._shadowRoot
                    .querySelector("#archive-selection")
                    .addEventListener("change", function (e) {
                      t.dispatchEvent(
                        new CustomEvent("filterNotes", {
                          bubbles: !0,
                          composed: !0,
                          detail: { filter: e.target.value },
                        }),
                      );
                    });
                },
              },
            ]) && e(u.prototype, s),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s;
        })(n(HTMLElement));
        customElements.define("app-bar", u);
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      827: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              a(e, "_column", 2),
              a(e, "_gutter", 16),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (l = [
              {
                key: "observedAttributes",
                get: function () {
                  return ["column", "gutter"];
                },
              },
            ]),
            (s = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n      :host {\n        display: block;\n        }\n        .list {\n          display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n        gap: ".concat(
                      this._gutter,
                      "px;\n        margin-left: 1em;\n        margin-top: 1em;\n      }\n    ",
                    );
                },
              },
              {
                key: "column",
                get: function () {
                  return this._column;
                },
                set: function (t) {
                  var e = Number(t);
                  !isNaN(e) && e > 0 && ((this._column = e), this.render());
                },
              },
              {
                key: "gutter",
                get: function () {
                  return this._gutter;
                },
                set: function (t) {
                  var e = Number(t);
                  !isNaN(e) && e >= 0 && ((this._gutter = e), this.render());
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <div class="list">\n        <slot></slot>\n      </div>\n    ');
                },
              },
              {
                key: "attributeChangedCallback",
                value: function (t, e, n) {
                  switch (t) {
                    case "column":
                      this.column = n;
                      break;
                    case "gutter":
                      this.gutter = n;
                  }
                },
              },
            ]) && e(u.prototype, s),
            l && e(u, l),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s, l;
        })(n(HTMLElement));
        customElements.define("note-list", u);
      },
      884: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e._updateStyle(),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (s = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n    :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: rgba(0, 0, 0, 0.5);\n        z-index: 1000;\n        backdrop-filter: blur(5px);\n      }\n\n      .loader {\n        border: 6px solid #f3f3f3;\n        border-top: 6px solid #3498db;\n        border-radius: 50%;\n        width: 40px;\n        height: 40px;\n        animation: spin 1s linear infinite;\n      }\n\n      @keyframes spin {\n        0% { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n      }\n    ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._shadowRoot.appendChild(this._style);
                  var t = document.createElement("div");
                  t.classList.add("loader"), this._shadowRoot.appendChild(t);
                },
              },
            ]) && e(u.prototype, s),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s;
        })(n(HTMLElement));
        customElements.define("loading-indicator", u);
      },
      919: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => c });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml, body {\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n\nheader {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  font-family: sans-serif;\n}\n\n#main-content {\n  display: grid;\n  grid-template-columns: 1fr ;\n  transition: grid-template-columns 0.4s ease;\n  row-gap: 1em;\n  min-height: 100vh;\n}\n\n#main-content.show {\n  grid-template-columns: 1fr 3fr;\n}\n\n#main-content.show .form-section {\n  display: grid;\n}\n\n.form-section {\n  display: none;\n\n}\n\nnote-list {\n  max-height: calc(100vh - 80px);\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n",
          "",
        ]);
        const c = a;
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        c = n(56),
        u = n.n(c),
        s = n(540),
        l = n.n(s),
        f = n(113),
        p = n.n(f),
        h = n(919),
        d = {};
      function y(t) {
        return (
          (y =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          y(t)
        );
      }
      function v(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return b(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          m(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function m(t, e) {
        if (t) {
          if ("string" == typeof t) return b(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? b(t, e)
                : void 0
          );
        }
      }
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function g() {
        g = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (t) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var i = e && e.prototype instanceof b ? e : b,
            a = Object.create(i.prototype),
            c = new C(r || []);
          return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var p = "suspendedStart",
          h = "suspendedYield",
          d = "executing",
          v = "completed",
          m = {};
        function b() {}
        function w() {}
        function x() {}
        var _ = {};
        s(_, a, function () {
          return this;
        });
        var O = Object.getPrototypeOf,
          j = O && O(O(N([])));
        j && j !== n && r.call(j, a) && (_ = j);
        var E = (x.prototype = b.prototype = Object.create(_));
        function S(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function k(t, e) {
          function n(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == y(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function P(e, n, r) {
          var o = p;
          return function (i, a) {
            if (o === d) throw Error("Generator is already running");
            if (o === v) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = L(c, r);
                if (u) {
                  if (u === m) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = v), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = d;
              var s = f(e, n, r);
              if ("normal" === s.type) {
                if (((o = r.done ? v : h), s.arg === m)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = v), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function L(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                L(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var i = f(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                m)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function R(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function N(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(y(e) + " is not iterable");
        }
        return (
          (w.prototype = x),
          o(E, "constructor", { value: x, configurable: !0 }),
          o(x, "constructor", { value: w, configurable: !0 }),
          (w.displayName = s(x, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, x)
                : ((t.__proto__ = x), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          S(k.prototype),
          s(k.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new k(l(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          S(E),
          s(E, u, "Generator"),
          s(E, a, function () {
            return this;
          }),
          s(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = N),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(R),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                m
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), R(n), m;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    R(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: N(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                m
              );
            },
          }),
          e
        );
      }
      function w(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function x(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              w(i, r, o, a, c, "next", t);
            }
            function c(t) {
              w(i, r, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function _(t) {
        return (
          (_ =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          _(t)
        );
      }
      function O(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(n), !0).forEach(function (e) {
                E(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : O(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function E(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t) {
              if ("object" != _(t) || !t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != _(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" == _(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function S() {
        S = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (t) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            c = new C(r || []);
          return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var p = "suspendedStart",
          h = "suspendedYield",
          d = "executing",
          y = "completed",
          v = {};
        function m() {}
        function b() {}
        function g() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          O = x && x(x(N([])));
        O && O !== n && r.call(O, a) && (w = O);
        var j = (g.prototype = m.prototype = Object.create(w));
        function E(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function k(t, e) {
          function n(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == _(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function P(e, n, r) {
          var o = p;
          return function (i, a) {
            if (o === d) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = L(c, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = y), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = d;
              var s = f(e, n, r);
              if ("normal" === s.type) {
                if (((o = r.done ? y : h), s.arg === v)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = y), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function L(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                L(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var i = f(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function R(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function N(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(_(e) + " is not iterable");
        }
        return (
          (b.prototype = g),
          o(j, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: b, configurable: !0 }),
          (b.displayName = s(g, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === b || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(k.prototype),
          s(k.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new k(l(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(j),
          s(j, u, "Generator"),
          s(j, a, function () {
            return this;
          }),
          s(j, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = N),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(R),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), R(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    R(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: N(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function k(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function P(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              k(i, r, o, a, c, "next", t);
            }
            function c(t) {
              k(i, r, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      (d.styleTagTransform = p()),
        (d.setAttributes = u()),
        (d.insert = a().bind(null, "head")),
        (d.domAPI = o()),
        (d.insertStyleElement = l()),
        e()(h.A, d),
        h.A && h.A.locals && h.A.locals,
        n(799),
        n(784),
        n(827),
        n(309),
        n(884);
      var L = (function () {
          var t = "https://notes-api.dicoding.dev/v2",
            e = (function () {
              var e = x(
                g().mark(function e() {
                  var n, r, o;
                  return g().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (n = { method: "GET" }),
                              (e.next = 4),
                              fetch("".concat(t, "/notes"), n)
                            );
                          case 4:
                            return (r = e.sent), (e.next = 7), r.json();
                          case 7:
                            if (!(o = e.sent).error) {
                              e.next = 12;
                              break;
                            }
                            return e.abrupt("return", {
                              success: !1,
                              message: o.message,
                            });
                          case 12:
                            return e.abrupt("return", {
                              success: !0,
                              data: o.data,
                            });
                          case 13:
                            e.next = 18;
                            break;
                          case 15:
                            return (
                              (e.prev = 15),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", {
                                success: !1,
                                message:
                                  e.t0.message || "Unknown error occurred",
                              })
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 15]],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            n = (function () {
              var n = x(
                g().mark(function n(r, o) {
                  var i, a, c;
                  return g().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.prev = 0),
                              (i = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ title: r, body: o }),
                              }),
                              (n.next = 4),
                              fetch("".concat(t, "/notes"), i)
                            );
                          case 4:
                            return (a = n.sent), (n.next = 7), a.json();
                          case 7:
                            if (!(c = n.sent).error) {
                              n.next = 12;
                              break;
                            }
                            return n.abrupt("return", {
                              success: !1,
                              message: c.message,
                            });
                          case 12:
                            return (
                              e(),
                              n.abrupt("return", { success: !0, data: c.data })
                            );
                          case 14:
                            n.next = 19;
                            break;
                          case 16:
                            return (
                              (n.prev = 16),
                              (n.t0 = n.catch(0)),
                              n.abrupt("return", {
                                success: !1,
                                message:
                                  n.t0.message || "Unknown error occurred",
                              })
                            );
                          case 19:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 16]],
                  );
                }),
              );
              return function (t, e) {
                return n.apply(this, arguments);
              };
            })(),
            r = (function () {
              var n = x(
                g().mark(function n(r) {
                  var o, i, a;
                  return g().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.prev = 0),
                              (o = { method: "DELETE" }),
                              (n.next = 4),
                              fetch("".concat(t, "/notes/").concat(r), o)
                            );
                          case 4:
                            return (i = n.sent), (n.next = 7), i.json();
                          case 7:
                            return (
                              (a = n.sent),
                              e(),
                              n.abrupt("return", {
                                success: !0,
                                message: a.message,
                              })
                            );
                          case 12:
                            return (
                              (n.prev = 12),
                              (n.t0 = n.catch(0)),
                              n.abrupt("return", {
                                success: !1,
                                message:
                                  n.t0.message || "Unknown error occurred",
                              })
                            );
                          case 15:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 12]],
                  );
                }),
              );
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            o = (function () {
              var e = x(
                g().mark(function e(n) {
                  var r, o, i;
                  return g().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (r = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                              }),
                              (e.next = 4),
                              fetch(
                                "".concat(t, "/notes/").concat(n, "/archive"),
                                r,
                              )
                            );
                          case 4:
                            return (o = e.sent), (e.next = 7), o.json();
                          case 7:
                            if (!(i = e.sent).error) {
                              e.next = 12;
                              break;
                            }
                            return e.abrupt("return", {
                              success: !1,
                              message: i.message,
                            });
                          case 12:
                            return e.abrupt("return", {
                              success: !0,
                              message: i.message,
                            });
                          case 13:
                            e.next = 18;
                            break;
                          case 15:
                            return (
                              (e.prev = 15),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", {
                                success: !1,
                                message:
                                  e.t0.message || "Unknown error occurred",
                              })
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 15]],
                  );
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            i = (function () {
              var e = x(
                g().mark(function e() {
                  var n, r, o;
                  return g().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (n = { method: "GET" }),
                              (e.next = 4),
                              fetch("".concat(t, "/notes/archived"), n)
                            );
                          case 4:
                            return (r = e.sent), (e.next = 7), r.json();
                          case 7:
                            if (!(o = e.sent).error) {
                              e.next = 12;
                              break;
                            }
                            return e.abrupt("return", {
                              success: !1,
                              message: o.message,
                            });
                          case 12:
                            return e.abrupt("return", {
                              success: !0,
                              data: o.data,
                            });
                          case 13:
                            e.next = 18;
                            break;
                          case 15:
                            return (
                              (e.prev = 15),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", {
                                success: !1,
                                message:
                                  e.t0.message || "Unknown error occurred",
                              })
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 15]],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            a = (function () {
              var e = x(
                g().mark(function e(n) {
                  var r, o, i;
                  return g().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (r = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                              }),
                              (e.next = 4),
                              fetch(
                                "".concat(t, "/notes/").concat(n, "/unarchive"),
                                r,
                              )
                            );
                          case 4:
                            return (o = e.sent), (e.next = 7), o.json();
                          case 7:
                            if (!(i = e.sent).error) {
                              e.next = 12;
                              break;
                            }
                            return e.abrupt("return", {
                              success: !1,
                              message: i.message,
                            });
                          case 12:
                            return e.abrupt("return", {
                              success: !0,
                              message: i.message,
                            });
                          case 13:
                            e.next = 18;
                            break;
                          case 15:
                            return (
                              (e.prev = 15),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", {
                                success: !1,
                                message:
                                  e.t0.message || "Unknown error occurred",
                              })
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 15]],
                  );
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            c = (function () {
              var t = x(
                g().mark(function t() {
                  var n, r, o, a;
                  return g().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              Promise.all([e(), i()])
                            );
                          case 3:
                            if (
                              ((n = t.sent),
                              (u = 2),
                              (r =
                                (function (t) {
                                  if (Array.isArray(t)) return t;
                                })((c = n)) ||
                                (function (t, e) {
                                  var n =
                                    null == t
                                      ? null
                                      : ("undefined" != typeof Symbol &&
                                          t[Symbol.iterator]) ||
                                        t["@@iterator"];
                                  if (null != n) {
                                    var r,
                                      o,
                                      i,
                                      a,
                                      c = [],
                                      u = !0,
                                      s = !1;
                                    try {
                                      if (
                                        ((i = (n = n.call(t)).next), 0 === e)
                                      ) {
                                        if (Object(n) !== n) return;
                                        u = !1;
                                      } else
                                        for (
                                          ;
                                          !(u = (r = i.call(n)).done) &&
                                          (c.push(r.value), c.length !== e);
                                          u = !0
                                        );
                                    } catch (t) {
                                      (s = !0), (o = t);
                                    } finally {
                                      try {
                                        if (
                                          !u &&
                                          null != n.return &&
                                          ((a = n.return()), Object(a) !== a)
                                        )
                                          return;
                                      } finally {
                                        if (s) throw o;
                                      }
                                    }
                                    return c;
                                  }
                                })(c, u) ||
                                m(c, u) ||
                                (function () {
                                  throw new TypeError(
                                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                  );
                                })()),
                              (o = r[0]),
                              (a = r[1]),
                              o.success && a.success)
                            ) {
                              t.next = 11;
                              break;
                            }
                            return t.abrupt("return", {
                              success: !1,
                              message: [o.message, a.message],
                            });
                          case 11:
                            return t.abrupt("return", {
                              success: !0,
                              data: [].concat(v(o.data), v(a.data)),
                            });
                          case 12:
                            t.next = 17;
                            break;
                          case 14:
                            return (
                              (t.prev = 14),
                              (t.t0 = t.catch(0)),
                              t.abrupt("return", {
                                success: !1,
                                message:
                                  t.t0.message || "Failed to fetch all notes",
                              })
                            );
                          case 17:
                          case "end":
                            return t.stop();
                        }
                      var c, u;
                    },
                    t,
                    null,
                    [[0, 14]],
                  );
                }),
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return {
            getNotes: e,
            createNote: n,
            deleteNote: r,
            archiveNote: o,
            getArchivedNotes: i,
            unarchiveNote: a,
            getAllNotes: c,
          };
        })(),
        T = L.getNotes,
        R = L.createNote,
        C = L.deleteNote,
        N = L.archiveNote,
        A = L.getArchivedNotes,
        M = L.unarchiveNote,
        D = L.getAllNotes;
      document.addEventListener(
        "DOMContentLoaded",
        P(
          S().mark(function t() {
            var e, n, r, o, i, a, c, u, s, l, f, p, h;
            return S().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (p = function (t) {
                        var e = document.createElement("note-item");
                        return (
                          (e.note = t),
                          (e.onDelete = (function () {
                            var t = P(
                              S().mark(function t(n) {
                                var r;
                                return S().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          !confirm(
                                            "Are you sure want to delete this note?",
                                          )
                                        ) {
                                          t.next = 6;
                                          break;
                                        }
                                        return (
                                          (t.next = 4),
                                          u(function () {
                                            return C(n);
                                          })
                                        );
                                      case 4:
                                        (r = t.sent).success
                                          ? (e.remove(), alert(r.message))
                                          : alert(r.message);
                                      case 6:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              }),
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()),
                          (e.onArchiveToggle = (function () {
                            var n = P(
                              S().mark(function n(r) {
                                var i;
                                return S().wrap(function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        return (
                                          (n.next = 2),
                                          u(
                                            P(
                                              S().mark(function e() {
                                                return S().wrap(function (e) {
                                                  for (;;)
                                                    switch ((e.prev = e.next)) {
                                                      case 0:
                                                        if (!t.archived) {
                                                          e.next = 6;
                                                          break;
                                                        }
                                                        return (
                                                          (e.next = 3), M(r)
                                                        );
                                                      case 3:
                                                      case 8:
                                                        return e.abrupt(
                                                          "return",
                                                          e.sent,
                                                        );
                                                      case 6:
                                                        return (
                                                          (e.next = 8), N(r)
                                                        );
                                                      case 9:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                              }),
                                            ),
                                          )
                                        );
                                      case 2:
                                        (i = n.sent).success
                                          ? (alert(i.message),
                                            (t.archived = !t.archived),
                                            (e.note = j({}, t)),
                                            "all" !== o && e.remove())
                                          : alert(i.message);
                                      case 4:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n);
                              }),
                            );
                            return function (t) {
                              return n.apply(this, arguments);
                            };
                          })()),
                          e
                        );
                      }),
                      (l = function (t) {
                        var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "No notes found";
                        (r.innerHTML = ""),
                          t && 0 !== t.length
                            ? t.forEach(function (t) {
                                var e = p(t);
                                r.appendChild(e);
                              })
                            : (r.innerHTML =
                                '<p style="grid-column: 1 / -1; text-align: center;">'.concat(
                                  e,
                                  "</p>",
                                ));
                      }),
                      (s = function () {
                        return (s = P(
                          S().mark(function t(e) {
                            return S().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        a(), (t.prev = 1), (t.next = 4), e()
                                      );
                                    case 4:
                                      return t.abrupt("return", t.sent);
                                    case 5:
                                      return (t.prev = 5), c(), t.finish(5);
                                    case 8:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[1, , 5, 8]],
                            );
                          }),
                        )).apply(this, arguments);
                      }),
                      (u = function (t) {
                        return s.apply(this, arguments);
                      }),
                      (c = function () {
                        i.style.display = "none";
                      }),
                      (a = function () {
                        i.style.display = "flex";
                      }),
                      (e = document.getElementById("main-content")),
                      (n = document.querySelector(".note-section")),
                      (r = document.createElement("note-list")),
                      (o = "all"),
                      ((i =
                        document.createElement(
                          "loading-indicator",
                        )).style.display = "none"),
                      document.body.appendChild(i),
                      (f = document.querySelector("app-bar")).addEventListener(
                        "toggleForm",
                        function () {
                          e.classList.toggle("show");
                        },
                      ),
                      f.addEventListener(
                        "filterNotes",
                        (function () {
                          var t = P(
                            S().mark(function t(e) {
                              var n, r;
                              return S().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (o = e.detail.filter),
                                        (t.next = 3),
                                        u(
                                          P(
                                            S().mark(function t() {
                                              return S().wrap(function (t) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      if ("archive" !== o) {
                                                        t.next = 6;
                                                        break;
                                                      }
                                                      return (t.next = 3), A();
                                                    case 3:
                                                    case 9:
                                                    case 14:
                                                      return t.abrupt(
                                                        "return",
                                                        t.sent,
                                                      );
                                                    case 6:
                                                      if ("all" !== o) {
                                                        t.next = 12;
                                                        break;
                                                      }
                                                      return (t.next = 9), D();
                                                    case 12:
                                                      return (t.next = 14), T();
                                                    case 15:
                                                    case "end":
                                                      return t.stop();
                                                  }
                                              }, t);
                                            }),
                                          ),
                                        )
                                      );
                                    case 3:
                                      if ((n = t.sent).success) {
                                        t.next = 7;
                                        break;
                                      }
                                      return (
                                        alert(n.message), t.abrupt("return")
                                      );
                                    case 7:
                                      (r = n.data),
                                        "unarchive" === o &&
                                          (r = r.filter(function (t) {
                                            return !t.archived;
                                          })),
                                        l(r);
                                    case 10:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      ),
                      (t.next = 23),
                      u(function () {
                        return D();
                      })
                    );
                  case 23:
                    (h = t.sent).success ? l(h.data) : alert(h.message),
                      document.querySelector("note-form").addEventListener(
                        "newNoteAdded",
                        (function () {
                          var t = P(
                            S().mark(function t(e) {
                              var n, i, a, c, s;
                              return S().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (n = e.detail),
                                        (i = n.title),
                                        (a = n.body),
                                        (t.next = 3),
                                        u(function () {
                                          return R(i, a);
                                        })
                                      );
                                    case 3:
                                      (c = t.sent).success
                                        ? ((s = p(c.data)),
                                          ("all" !== o && "unarchive" !== o) ||
                                            r.appendChild(s))
                                        : alert(c.message);
                                    case 5:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      ),
                      n.appendChild(r);
                  case 28:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        ),
      );
    })();
})();
