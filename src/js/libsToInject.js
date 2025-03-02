var libsToInject = {


  // XHook - v1.3.0 - https://github.com/jpillora/xhook
  // Jaime Pillora <dev@jpillora.com> - MIT Copyright 2014
  xhook: function() {
    console.log('Using xhook. All XHRs are being hooked.');
    (function(a, b) {
      var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1
      };
      r = a.document, d = "before", c = "after", l = "readyState", k = "addEventListener", j = "removeEventListener", g = "dispatchEvent", o = "XMLHttpRequest", h = "FormData", m = ["load", "loadend", "loadstart"], e = ["progress", "abort", "error", "timeout"], u = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]), isNaN(u) && (u = parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])), (y = Array.prototype).indexOf || (y.indexOf = function(a) {
        var b, c, d, e;
        for (b = d = 0, e = this.length; e > d; b = ++d)
          if (c = this[b], c === a) return b;
        return -1
      }), w = function(a, b) {
        return Array.prototype.slice.call(a, b)
      }, q = function(a) {
        return "returnValue" === a || "totalSize" === a || "position" === a
      }, t = function(a, b) {
        var c, d;
        for (c in a)
          if (d = a[c], !q(c)) try {
            b[c] = a[c]
          } catch (e) {}
        return b
      }, v = function(a, b, c) {
        var d, e, f, h;
        for (e = function(a) {
            return function(d) {
              var e, f, h;
              e = {};
              for (f in d) q(f) || (h = d[f], e[f] = h === b ? c : h);
              return c[g](a, e)
            }
          }, f = 0, h = a.length; h > f; f++) d = a[f], b["on" + d] = e(d)
      }, s = function(a) {
        var b;
        if (null != r.createEventObject) return b = r.createEventObject(), b.type = a, b;
        try {
          return new Event(a)
        } catch (c) {
          return {
            type: a
          }
        }
      }, f = function(a) {
        var c, d, e;
        return d = {}, e = function(a) {
          return d[a] || []
        }, c = {}, c[k] = function(a, c, f) {
          d[a] = e(a), d[a].indexOf(c) >= 0 || (f = f === b ? d[a].length : f, d[a].splice(f, 0, c))
        }, c[j] = function(a, c) {
          var f;
          return a === b ? void(d = {}) : (c === b && (d[a] = []), f = e(a).indexOf(c), void(-1 !== f && e(a).splice(f, 1)))
        }, c[g] = function() {
          var d, f, g, h, i, j, k, l;
          for (d = w(arguments), f = d.shift(), a || (d[0] = t(d[0], s(f))), h = c["on" + f], h && h.apply(b, d), l = e(f).concat(e("*")), g = j = 0, k = l.length; k > j; g = ++j) i = l[g], i.apply(b, d)
        }, a && (c.listeners = function(a) {
          return w(e(a))
        }, c.on = c[k], c.off = c[j], c.fire = c[g], c.once = function(a, b) {
          var d;
          return d = function() {
            return c.off(a, d), b.apply(null, arguments)
          }, c.on(a, d)
        }, c.destroy = function() {
          return d = {}
        }), c
      }, x = f(!0), x.EventEmitter = f, x[d] = function(a, b) {
        if (a.length < 1 || a.length > 2) throw "invalid hook";
        return x[k](d, a, b)
      }, x[c] = function(a, b) {
        if (a.length < 2 || a.length > 3) throw "invalid hook";
        return x[k](c, a, b)
      }, x.enable = function() {
        a[o] = n
      }, x.disable = function() {
        a[o] = x[o]
      }, p = x.headers = function(a, b) {
        var c, d, e, f, g, h, i, j, k;
        switch (null == b && (b = {}), typeof a) {
          case "object":
            d = [];
            for (e in a) g = a[e], f = e.toLowerCase(), d.push("" + f + ": " + g);
            return d.join("\n");
          case "string":
            for (d = a.split("\n"), i = 0, j = d.length; j > i; i++) c = d[i], /([^:]+):\s*(.+)/.test(c) && (f = null != (k = RegExp.$1) ? k.toLowerCase() : void 0, h = RegExp.$2, null == b[f] && (b[f] = h));
            return b
        }
      }, i = a[h], i && (x[h] = i, a[h] = function(a) {
        var b;
        this.fd = a ? new i(a) : new i, this.form = a, b = [], Object.defineProperty(this, "entries", {
          get: function() {
            var c;
            return c = a ? w(a.querySelectorAll("input,select")).filter(function(a) {
              var b;
              return "checkbox" !== (b = a.type) && "radio" !== b || a.checked
            }).map(function(a) {
              return [a.name, "file" === a.type ? a.files : a.value]
            }) : [], c.concat(b)
          }
        }), this.append = function(a) {
          return function() {
            var c;
            return c = w(arguments), b.push(c), a.fd.append.apply(a.fd, c)
          }
        }(this)
      }), x[o] = a[o], n = a[o] = function() {
        var b, i, j, n, q, r, s, w, y, A, B, C, D, E, F, G, H;
        return b = -1, H = new x[o], A = {}, D = null, r = void 0, E = void 0, B = void 0, y = function() {
          var a, c, d, e;
          if (B.status = D || H.status, D === b && 10 > u || (B.statusText = H.statusText), D !== b) {
            e = p(H.getAllResponseHeaders());
            for (a in e) d = e[a], B.headers[a] || (c = a.toLowerCase(), B.headers[c] = d)
          }
        }, w = function() {
          "responseText" in H && H.responseType != 'json' && (B.text = H.responseText), "responseXML" in H && H.responseType != 'json' && (B.xml = H.responseXML), "response" in H && (B.data = H.response)
        }, G = function() {
          q.status = B.status, q.statusText = B.statusText
        }, F = function() {
          "text" in B && (q.responseText = B.text), "xml" in B && (q.responseXML = B.xml), "data" in B && (q.response = B.data)
        }, n = function(a) {
          for (; a > i && 4 > i;) q[l] = ++i, 1 === i && q[g]("loadstart", {}), 2 === i && G(), 4 === i && (G(), F()), q[g]("readystatechange", {}), 4 === i && setTimeout(j, 0)
        }, j = function() {
          r || q[g]("load", {}), q[g]("loadend", {}), r && (q[l] = 0)
        }, i = 0, C = function(a) {
          var b, d;
          return 4 !== a ? void n(a) : (b = x.listeners(c), d = function() {
            var a;
            return b.length ? (a = b.shift(), 2 === a.length ? (a(A, B), d()) : 3 === a.length && A.async ? a(A, B, d) : d()) : n(4)
          }, void d())
        }, q = A.xhr = f(), H.onreadystatechange = function() {
          try {
            2 === H[l] && y()
          } catch (a) {}
          4 === H[l] && (E = !1, y(), w()), C(H[l])
        }, s = function() {
          r = !0
        }, q[k]("error", s), q[k]("timeout", s), q[k]("abort", s), q[k]("progress", function() {
          3 > i ? C(3) : q[g]("readystatechange", {})
        }), v(e, H, q), ("withCredentials" in H || x.addWithCredentials) && (q.withCredentials = !1), q.status = 0, q.open = function(a, b, c, d, e) {
          i = 0, r = !1, E = !1, A.headers = {}, A.headerNames = {}, A.status = 0, B = {}, B.headers = {}, A.method = a, A.url = b, A.async = c !== !1, A.user = d, A.pass = e, C(1)
        }, q.send = function(b) {
          var c, e, f, g, i, j, k, l;
          for (l = ["type", "timeout", "withCredentials"], j = 0, k = l.length; k > j; j++) e = l[j], f = "type" === e ? "responseType" : e, f in q && (A[e] = q[f]);
          A.body = b, i = function() {
            var b, c, d, g, i, j;
            for (E = !0, H.open(A.method, A.url, A.async, A.user, A.pass), i = ["type", "timeout", "withCredentials"], d = 0, g = i.length; g > d; d++) e = i[d], f = "type" === e ? "responseType" : e, e in A && (H[f] = A[e]);
            j = A.headers;
            for (b in j) c = j[b], H.setRequestHeader(b, c);
            a[h] && A.body instanceof a[h] && (A.body = A.body.fd), H.send(A.body)
          }, c = x.listeners(d), (g = function() {
            var a, b;
            return c.length ? (a = function(a) {
              return "object" != typeof a || "number" != typeof a.status && "number" != typeof B.status ? void g() : (t(a, B), z.call(a, "data") < 0 && (a.data = a.response || a.text), void C(4))
            }, a.head = function(a) {
              return t(a, B), C(2)
            }, a.progress = function(a) {
              return t(a, B), C(3)
            }, b = c.shift(), 1 === b.length ? a(b(A)) : 2 === b.length && A.async ? b(A, a) : a()) : i()
          })()
        }, q.abort = function() {
          D = b, E ? H.abort() : q[g]("abort", {})
        }, q.setRequestHeader = function(a, b) {
          var c, d;
          c = null != a ? a.toLowerCase() : void 0, d = A.headerNames[c] = A.headerNames[c] || a, A.headers[d] && (b = A.headers[d] + ", " + b), A.headers[d] = b
        }, q.getResponseHeader = function(a) {
          var b;
          return b = null != a ? a.toLowerCase() : void 0, B.headers[b]
        }, q.getAllResponseHeaders = function() {
          return p(B.headers)
        }, H.overrideMimeType && (q.overrideMimeType = function() {
          return H.overrideMimeType.apply(H, arguments)
        }), H.upload && (q.upload = A.upload = f(), v(e.concat(m), H.upload, q.upload)), q
      }, "function" == typeof this.define && this.define.amd ? define("xhook", [], function() {
        return x
      }) : (this.exports || this).xhook = x
    }).call(this, window);
  },
  // ***** End of Xhook. *****
  wshook: function() {
    console.log('Using wshook. All WebSocket connections are being hooked.');
    /* wsHook.js
     * https://github.com/skepticfx/wshook
     * Reference: http://www.w3.org/TR/2011/WD-websockets-20110419/#websocket
     */

    var wsHook = {};
    (function() {
      // Mutable MessageEvent.
      // Subclasses MessageEvent and makes data, origin and other MessageEvent properites mutatble.
      function MutableMessageEvent(o) {
        this.bubbles = o.bubbles || false
        this.cancelBubble = o.cancelBubble || false
        this.cancelable = o.cancelable || false
        this.currentTarget = o.currentTarget || null
        this.data = o.data || null
        this.defaultPrevented = o.defaultPrevented || false
        this.eventPhase = o.eventPhase || 0
        this.lastEventId = o.lastEventId || ''
        this.origin = o.origin || ''
        this.path = o.path || new Array(0)
        this.ports = o.parts || new Array(0)
        this.returnValue = o.returnValue || true
        this.source = o.source || null
        this.srcElement = o.srcElement || null
        this.target = o.target || null
        this.timeStamp = o.timeStamp || null
        this.type = o.type || 'message'
        this.__proto__ = o.__proto__ || MessageEvent.__proto__
      }

      var before = wsHook.before = function (data, url) {
        return data;
      };
      var after = wsHook.after = function (e, url) {
        return e;
      };
      wsHook.resetHooks = function () {
        wsHook.before = before;
        wsHook.after = after;
      }

      var _WS = WebSocket;
      WebSocket = function (url, protocols) {
        var WSObject;
        this.url = url;
        this.protocols = protocols;
        if (!this.protocols) {
          WSObject = new _WS(url);
	} else { 
          WSObject = new _WS(url, protocols);
	}
        var _send = WSObject.send;
        WSObject.send = function (data) {
          arguments[0] = wsHook.before(data, WSObject.url) || data;
          _send.apply(this, arguments);
        }
   
	// Events needs to be proxied and bubbled down.
        WSObject._addEventListener = WSObject.addEventListener
        WSObject.addEventListener = function () {
          var eventThis = this;
          // if eventName is 'message'
          if (arguments[0] === 'message') {
            arguments[1] = (function (userFunc) {
            return function instrumentAddEventListener () {
              arguments[0] = wsHook.after(new MutableMessageEvent(arguments[0]), WSObject.url) || arguments[0];
              userFunc.apply(eventThis, arguments);
            }
          })(arguments[1])
        }
        return WSObject._addEventListener.apply(this, arguments)
        }

        Object.defineProperty(WSObject, 'onmessage', {
          'set': function () {
            var eventThis = this;
            var userFunc = arguments[0];
            var onMessageHandler = function () {
              arguments[0] = wsHook.after(new MutableMessageEvent(arguments[0]), WSObject.url) || arguments[0]
              userFunc.apply(eventThis, arguments)
            }
            WSObject._addEventListener.apply(this, ['message', onMessageHandler, false])
          }
        })
        return WSObject
      }
    })();
  },
  'functionCallTracer': function() {
    var funtionCallTracer_blacklist = [
      'google-analytics.com',
      'googletagmanager.com',
      'cdn.optimizely.com',
      'stats.g.doubleclick.net'
    ];
    var functionCallTracer = function() {
      this.error = new Error('Deliberatley generated by Hookish!');
      this.stack = this.error.stack;
      var parsedStack = this.error.stack.split('\n').slice(3);
      var blacklisted = false;
      parsedStack.map(function(line) {
        funtionCallTracer_blacklist.forEach(function(blacklist) {
          if (line.toString().indexOf(blacklist) !== -1)
            blacklisted = true;
          return;
        })
        return;
      });
      if (blacklisted === true)
        parsedStack = ['LIBRARY'];
      var stackStr = "";
      var ws = ' \n';
      parsedStack.forEach(function(x) {
        stackStr += x.trim().replace('at', '⇘') + ws;
        ws += "\t ";
      })
      return stackStr.trim();
    }
  }
}
