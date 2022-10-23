/*!
 * version: {"ads":"3.1.95 ver3","pwa":"1.1.25","core":"1.1.18","bundler":"3.1.132"} - env: prod - bundle date: 2022-10-21T10:43:09.925Z
 *
 */ (function () {
  "use strict";
  var __webpack_modules__ = {
      158: function (e, t, n) {
        n.d(t, {
          H$: function () {
            return a;
          },
        });
        var i = n(274),
          o = n(878),
          r = (window.sas = window.sas || {});
        r.cmd = r.cmd || [];
        var s = function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              r.cmd.push(function () {
                return e.apply(void 0, t);
              });
            };
          },
          a = (function () {
            function e() {
              var e = this;
              (this.isCalled = !1),
                (this.insertSasScript = function (e) {
                  (0, i.lN)(!0, "//ced.sascdn.com/tag/".concat(e, "/smart.js"));
                }),
                (this.setUpAndCall = function (t, n, i) {
                  e.isCalled ||
                    ((e.isCalled = !0),
                    r.setup({
                      networkid: t,
                      domain: "//adnetwork.adasiaholdings.com",
                      async: !0,
                    }),
                    r.call("onecall", {
                      siteId: n,
                      pageId: i.pageId,
                      formats: i.formats,
                    }));
                }),
                (this.render = function (e) {
                  o.ZP.log("apm: render format id:", e), r.render(e);
                }),
                (this.setUpAndCall = s(this.setUpAndCall)),
                (this.render = s(this.render));
            }
            return (e.sasDivIdPrefix = "sas_"), e;
          })();
        t.ZP = new a();
      },
      811: function (e, t, n) {
        n.d(t, {
          Wo: function () {
            return i.Wo;
          },
          r8: function () {
            return i.r8;
          },
          yI: function () {
            return i.yI;
          },
        });
        var i = n(353);
      },
      644: function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          tY: function () {
            return withGptAsync;
          },
        });
        var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(878),
          _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461),
          _libs_Aps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(913),
          _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(274),
          __awaiter = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function s(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function a(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((i = i.apply(e, t || [])).next());
            });
          },
          __generator = function (e, t) {
            var n,
              i,
              o,
              r,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function a(r) {
              return function (a) {
                return (function (r) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        i &&
                          (o =
                            2 & r[0]
                              ? i.return
                              : r[0]
                              ? i.throw || ((o = i.return) && o.call(i), 0)
                              : i.next) &&
                          !(o = o.call(i, r[1])).done)
                      )
                        return o;
                      switch (((i = 0), o && (r = [2 & r[0], o.value]), r[0])) {
                        case 0:
                        case 1:
                          o = r;
                          break;
                        case 4:
                          return s.label++, { value: r[1], done: !1 };
                        case 5:
                          s.label++, (i = r[1]), (r = [0]);
                          continue;
                        case 7:
                          (r = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== r[0] && 2 !== r[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === r[0] &&
                            (!o || (r[1] > o[0] && r[1] < o[3]))
                          ) {
                            s.label = r[1];
                            break;
                          }
                          if (6 === r[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = r);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(r);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      r = t.call(e, s);
                    } catch (e) {
                      (r = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & r[0]) throw r[1];
                  return { value: r[0] ? r[1] : void 0, done: !0 };
                })([r, a]);
              };
            }
          },
          CHECK_INTERVAL_TIME = 1e3,
          THROTTLE_TIME = 200,
          PPID_COOKIE_NAME = "am_FPID";
        function throttle(e, t) {
          var n = !1;
          return function () {
            n ||
              (e(),
              (n = !0),
              setTimeout(function () {
                n = !1;
              }, t));
          };
        }
        var googletag = (window.googletag = window.googletag || {});
        googletag.cmd = googletag.cmd || [];
        var withGptAsync = function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              googletag.cmd.push(function () {
                return e.apply(void 0, t);
              });
            };
          },
          Gpt = (function () {
            function Gpt() {
              var _this = this;
              (this.isSRAEnabled = !1),
                (this.blockRefresh = null),
                (this.atsSlots = []),
                (this.definedAtsSlots = {}),
                (this.atsSlotsWithVisibility = []),
                (this.callbacksOnSlotRenderEnded = []),
                (this.refreshedSlots = []),
                (this.enableSeparateRequest = !1),
                (this.destroyAtsSlotsOnly = !1),
                (this.separateRequestDivIds = []),
                (this.lazyLoadCallbacks = {}),
                (this.prebidOnlySlotsDivIds = []),
                (this.setForceSafeFrameForSlot = function (e, t) {
                  e.setForceSafeFrame(t);
                }),
                (this.setTargetingForEachSlot = function (
                  slot,
                  setTargetingConfigs
                ) {
                  setTargetingConfigs.forEach(function (setTargetingConfig) {
                    if (setTargetingConfig.isActive) {
                      var keyConfig = setTargetingConfig.key,
                        valueConfig = setTargetingConfig.value;
                      try {
                        valueConfig = eval(valueConfig) + "";
                      } catch (e) {
                        _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(
                          "gpt: setTargeting failed"
                        );
                      }
                      slot.setTargeting(keyConfig, valueConfig);
                    }
                  });
                }),
                (this.setPPID = function (url, customScript) {
                  if (url || customScript) {
                    var ppid_1 = (0,
                      _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_3__.ej)()[
                        PPID_COOKIE_NAME
                      ],
                      label_1 = "[PPID]";
                    if (ppid_1)
                      _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                        label_1,
                        "has PPID"
                      ),
                        googletag.cmd.push(function () {
                          googletag.pubads().setPublisherProvidedId(ppid_1),
                            _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                              label_1,
                              "set PPID"
                            );
                        });
                    else if (url) {
                      _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                        label_1,
                        "don't has PPID"
                      );
                      var xhr = new XMLHttpRequest();
                      (xhr.withCredentials = !0),
                        (xhr.onload = function () {
                          _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                            label_1,
                            "The request to ".concat(url, " was successful")
                          );
                        }),
                        (xhr.onerror = function () {
                          _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(
                            label_1,
                            "The request to ".concat(url, " failed")
                          );
                        }),
                        xhr.open("GET", url),
                        xhr.send();
                    } else
                      customScript &&
                        (_Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                          label_1,
                          "don't has PPID"
                        ),
                        eval(customScript));
                  }
                }),
                (this.refreshAds = function (e, t, n) {
                  void 0 === n && (n = !0),
                    t ||
                      (e = e.filter(function (e) {
                        return !_this.refreshedSlots.some(function (t) {
                          return e === t;
                        });
                      })),
                    0 < e.length
                      ? (_Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.table(
                          "gpt: refresh info",
                          e.map(function (e) {
                            return {
                              slotId: e.getSlotElementId(),
                              adUnitPath: e.getAdUnitPath(),
                            };
                          })
                        ),
                        googletag.pubads().refresh(e, { changeCorrelator: n }),
                        e.forEach(function (e) {
                          return (
                            !_this.refreshedSlots.some(function (t) {
                              return e === t;
                            }) && _this.refreshedSlots.push(e)
                          );
                        }))
                      : _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                          "gpt: no refresh"
                        );
                }),
                (this.trackingConfirmedClick = function () {
                  if (
                    !(
                      _this.configs.siteSetting.confirmedClickRatio <=
                      Math.random()
                    )
                  ) {
                    var e = !1,
                      t = function () {
                        if (!e) {
                          for (
                            var t = window.frames,
                              n = "[Confirmed Click]",
                              i = [],
                              o = 0;
                            o < t.length;
                            o++
                          )
                            try {
                              t[o].document.querySelector(
                                "#confirmedClickVisible"
                              ) && i.push(t[o].name);
                            } catch (e) {
                              _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(e);
                            }
                          _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                            n,
                            0 < i.length ? "Find" : "Not find"
                          ),
                            0 < i.length &&
                              (i.forEach(function (e) {
                                var t = {
                                    siteId: _this.configs.siteSetting.siteId,
                                    frameName: e,
                                  },
                                  i = new XMLHttpRequest();
                                i.open(
                                  "GET",
                                  "//anymind360.com/json/confirmed_click_log.json?" +
                                    Object.keys(t)
                                      .map(function (e) {
                                        return (
                                          e + "=" + encodeURIComponent(t[e])
                                        );
                                      })
                                      .join("&")
                                ),
                                  (i.onload = function () {
                                    return _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                                      n,
                                      "Logged",
                                      e
                                    );
                                  }),
                                  i.send();
                              }),
                              (e = !0));
                        }
                      },
                      n = function () {
                        return t();
                      },
                      i = function () {
                        setTimeout(n, 1e4);
                      };
                    "loading" !== document.readyState
                      ? i()
                      : document.addEventListener("DOMContentLoaded", i),
                      window.addEventListener("beforeunload", n),
                      t();
                  }
                }),
                (this.checkIfEnableRefreshAd = function (e, t, n, i) {
                  return new Promise(function (o) {
                    var r = setInterval(function () {
                      (0,
                      _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_3__.SI)(
                        n
                      ) || !1 !== n[e].shouldStopRefresh
                        ? (clearInterval(r), o())
                        : (0,
                          _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_3__.ro)() &&
                          _this.isSlotViewable(t, i) &&
                          (_Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                            "gpt: auto refresh for ".concat(e)
                          ),
                          clearInterval(r),
                          o());
                    }, CHECK_INTERVAL_TIME);
                  });
                }),
                (this.isSlotViewable = function (e, t) {
                  var n = _this.atsSlotsWithVisibility.find(function (t) {
                    return t.slot === e;
                  });
                  return (
                    void 0 === n ||
                    (!!n.isViewable &&
                      n.visibilityPercentage >= t &&
                      ((n.isViewable = !1), !0))
                  );
                }),
                (this.intervalRefreshAds = function (e, t, n, i, o, r) {
                  void 0 === r && (r = 0);
                  var s = o[i];
                  s.isGPTRefreshCalled = !0;
                  var a = !0,
                    c = s.adSenseReplacementClient && s.adSenseReplacementSlot,
                    l = n,
                    _ = function () {
                      return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return !1 !== s.shouldStopRefresh
                                ? [3, 6]
                                : [
                                    4,
                                    new Promise(function (e) {
                                      return setTimeout(e, 1e3 * t);
                                    }),
                                  ];
                            case 1:
                              return (
                                n.sent(),
                                void 0 !== e[0] && o
                                  ? !1 !== s.shouldStopRefresh
                                    ? [3, 6]
                                    : a
                                    ? ((a = !1),
                                      [
                                        4,
                                        this.checkIfEnableRefreshAd(
                                          i,
                                          e[0],
                                          o,
                                          r
                                        ),
                                      ])
                                    : [3, 3]
                                  : [2]
                              );
                            case 2:
                              n.sent(), (n.label = 3);
                            case 3:
                              return (
                                c || (a = !0),
                                "number" != typeof l || 0 < l--
                                  ? (c
                                      ? this.replaceAdSense(s)
                                      : (this.setKeyValuesToSlots(e, "refr", [
                                          "1",
                                        ]),
                                        this.refreshAds(e, !0)),
                                    [4, _()])
                                  : [3, 5]
                              );
                            case 4:
                              return n.sent(), [3, 6];
                            case 5:
                              _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                                "gpt: stop refresh interval for ".concat(
                                  e.map(function (e) {
                                    return e.getSlotElementId();
                                  })
                                )
                              ),
                                (n.label = 6);
                            case 6:
                              return [2];
                          }
                        });
                      });
                    };
                  _();
                }),
                (this.replaceAdSense = function (e) {
                  var t = e.slot,
                    n = e.adSenseReplacementClient,
                    i = e.adSenseReplacementSlot;
                  if (n && i) {
                    _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                      "gpt: Replace AdSense",
                      t.id,
                      n,
                      i
                    ),
                      (t.textContent = "");
                    var o = document.createElement("script");
                    (o.async = !0),
                      (o.src =
                        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=".concat(
                          n
                        )),
                      o.setAttribute("crossorigin", "anonymous"),
                      t.appendChild(o);
                    var r = document.createElement("ins");
                    r.classList.add("adsbygoogle"),
                      (r.style.display = "block"),
                      r.setAttribute("data-ad-client", n),
                      r.setAttribute("data-ad-slot", i),
                      r.setAttribute("data-ad-format", "auto"),
                      r.setAttribute("data-full-width-responsive", "true"),
                      t.appendChild(r),
                      (window.adsbygoogle = window.adsbygoogle || []).push({});
                  }
                }),
                (this.executeBasicTargetings = function () {
                  var e = window.location.search.substring(1),
                    t = window.document.referrer
                      ? document.referrer.split("/")[2]
                      : "null",
                    n = window.location.pathname;
                  if (
                    (googletag.pubads().setTargeting("url", [n]),
                    googletag.pubads().setTargeting("ref", [t]),
                    e)
                  )
                    for (var i = e.split("&"), o = 0; o < i.length; o++) {
                      var r = i[o].split("=");
                      r[1] &&
                        googletag.pubads().setTargeting("param:" + r[0], r[1]);
                    }
                }),
                (this.disableInitialLoad = function () {
                  !googletag.pubads().isInitialLoadDisabled() &&
                    googletag.pubads().disableInitialLoad();
                }),
                (this.enableSingleRequest = function () {
                  (_this.isSRAEnabled = !0),
                    googletag.pubads().enableSingleRequest();
                }),
                (this.collapseEmptyDivs = function () {
                  googletag.pubads().collapseEmptyDivs();
                }),
                (this.setKeyValuesToSlots = function (e, t, n) {
                  e.forEach(function (e) {
                    e.setTargeting(t, n);
                  });
                }),
                (this.enableGamLazyload = function (e) {
                  googletag
                    .pubads()
                    .enableLazyLoad({
                      fetchMarginPercent: e.gamLazyloadFetchMarginPercent,
                      renderMarginPercent: e.gamLazyloadRenderMarginPercent,
                      mobileScaling: e.gamLazyloadMobileScaling,
                    });
                }),
                (this.enableServices = function () {
                  googletag.pubadsReady
                    ? _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.warn(
                        "already gpt service is enabled"
                      )
                    : googletag.enableServices();
                }),
                (this.forceHB = function (e) {
                  return __awaiter(_this, void 0, void 0, function () {
                    var t, n, i, o, r, s, a, c, l, _;
                    return __generator(this, function (d) {
                      switch (d.label) {
                        case 0:
                          if (e.length <= 0) return [2];
                          for (
                            t = [],
                              n = [],
                              i = [],
                              o = function (e) {
                                var o = e.getAdUnitPath(),
                                  s = e.getSlotElementId();
                                t.push(s);
                                for (
                                  var a = 0, c = r.configs.configs;
                                  a < c.length;
                                  a++
                                ) {
                                  var l = c[a];
                                  if (
                                    "prebid_only" === l.type &&
                                    l.settings.adUnitPath === o
                                  ) {
                                    var _ = JSON.parse(JSON.stringify(l));
                                    (_.settings.divID = s), n.push(_);
                                  } else if ("tam" === l.type) {
                                    var d = JSON.parse(JSON.stringify(l));
                                    (d.settings.tamAdUnits =
                                      d.settings.tamAdUnits.filter(function (
                                        e
                                      ) {
                                        var t = e.slot;
                                        return (t.slotID = s), t.slotName === o;
                                      })),
                                      0 < d.settings.tamAdUnits.length &&
                                        i.push(d);
                                  }
                                }
                              },
                              r = this,
                              s = 0,
                              a = e;
                            s < a.length;
                            s++
                          )
                            (c = a[s]), o(c);
                          return (
                            (l =
                              _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z.createParamaters(
                                n,
                                !0
                              )),
                            _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z.setSchain(
                              n,
                              !0
                            ),
                            (_ =
                              _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z.createParamaters(
                                i,
                                !0
                              )),
                            0 < l.length
                              ? [
                                  4,
                                  _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z.sendBids(
                                    l,
                                    l.map(function (e) {
                                      return e.code;
                                    })
                                  ),
                                ]
                              : [3, 2]
                          );
                        case 1:
                          d.sent() &&
                            l.forEach(function (e) {
                              return _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z.setTargetingForEachSlot(
                                e.code
                              );
                            }),
                            (d.label = 2);
                        case 2:
                          return 0 < _.length
                            ? [
                                4,
                                _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z.fetchApsBids(
                                  _
                                ),
                              ]
                            : [3, 4];
                        case 3:
                          d.sent() &&
                            _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z.setTargeting(),
                            (d.label = 4);
                        case 4:
                          return this.refreshAds(e, !0), [2];
                      }
                    });
                  });
                }),
                (this.hb = function (e) {
                  !Array.isArray(e) || e.length < 0
                    ? _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(
                        "infinite hb: input is not correct"
                      )
                    : _this.callInfiniteHb(e);
                }),
                (this.callInfiniteHb = function (e) {
                  return __awaiter(_this, void 0, void 0, function () {
                    var t, n, i;
                    return __generator(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return 0 === e.length
                            ? [2]
                            : _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z
                                .isCalled ||
                              _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z.isCalled
                            ? ((t = []),
                              (n = []),
                              (i = []),
                              e.forEach(function (e) {
                                var o = e.getSlotElementId(),
                                  r = e.getAdUnitPath(),
                                  s =
                                    _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z
                                      .adUnitsDict[r].prebidAdUnits,
                                  a =
                                    _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z
                                      .adUnitsDict[r].code;
                                Array.isArray(s) &&
                                  (_libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z.removeAdUnit(
                                    a
                                  ),
                                  s.forEach(function (e) {
                                    (e.code = o), t.push(e);
                                  }),
                                  n.push(o));
                                var c =
                                  _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z
                                    .slotsDict[r];
                                void 0 !== c && ((c.slotID = o), i.push(c));
                              }),
                              t.length > 0
                                ? [
                                    4,
                                    _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z.sendBids(
                                      t,
                                      n
                                    ),
                                  ]
                                : [3, 2])
                            : [3, 4];
                        case 1:
                          o.sent() &&
                            n.forEach(function (e) {
                              return _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z.setTargetingForEachSlot(
                                e
                              );
                            }),
                            (o.label = 2);
                        case 2:
                          return i.length > 0
                            ? [
                                4,
                                _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z.fetchApsBids(
                                  i
                                ),
                              ]
                            : [3, 4];
                        case 3:
                          o.sent() &&
                            _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z.setTargeting(),
                            (o.label = 4);
                        case 4:
                          return (
                            googletag.pubads().isInitialLoadDisabled() &&
                              this.refreshAds(e),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (this.callOutOfPageSlot = function (e, t) {
                  if (_this.isSRAEnabled)
                    if ("loading" !== document.readyState)
                      _this.adxInstSlot && googletag.display(_this.adxInstSlot);
                    else {
                      var n = function () {
                        document.removeEventListener("DOMContentLoaded", n),
                          _this.adxInstSlot &&
                            googletag.display(_this.adxInstSlot);
                      };
                      document.addEventListener("DOMContentLoaded", n);
                    }
                  else {
                    var i = googletag.defineOutOfPageSlot(
                      e,
                      googletag.enums.OutOfPageFormat.INTERSTITIAL
                    );
                    i &&
                      (_this.atsSlots.push(i),
                      i.addService(googletag.pubads()),
                      t && _this.setTargetingForEachSlot(i, t),
                      googletag.display(i),
                      googletag.pubads().isInitialLoadDisabled() &&
                        _this.refreshAds([i]));
                  }
                }),
                (this.defineATSSlotsForSRA = function (e, t) {
                  return __awaiter(_this, void 0, void 0, function () {
                    var n,
                      i,
                      o,
                      r = this;
                    return __generator(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return (
                            e.forEach(function (e) {
                              return r.defineSlot(
                                e.adUnitPath,
                                [[300, 250]],
                                e.divId,
                                e.sizeMappingGroup,
                                e.setCollapseEmptyDiv,
                                e.enableSetForceSafeFrameForSlot,
                                e.setTargetingConfigs
                              );
                            }),
                            t.adUnitPath &&
                              ((n = googletag.defineOutOfPageSlot(
                                t.adUnitPath,
                                googletag.enums.OutOfPageFormat.INTERSTITIAL
                              )).addService(googletag.pubads()),
                              t.setTargetingConfigs &&
                                this.setTargetingForEachSlot(
                                  n,
                                  t.setTargetingConfigs
                                ),
                              (this.adxInstSlot = n),
                              this.atsSlots.push(n)),
                            [4, this.blockRefresh]
                          );
                        case 1:
                          return s.sent()
                            ? (_Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(
                                "gpt: block refresh ads due to keywords"
                              ),
                              [2])
                            : [
                                4,
                                _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z
                                  .onFirstPrebidResponseEnded,
                              ];
                        case 2:
                          return (
                            s.sent() &&
                              _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z.setTargeting(),
                            [
                              4,
                              _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z
                                .onFirstApsResponseEnded,
                            ]
                          );
                        case 3:
                          return (
                            s.sent() &&
                              _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z.setTargeting(),
                            googletag.pubads().isInitialLoadDisabled() &&
                              ((i = googletag.pubads().getSlots()),
                              (o =
                                1 === this.gamAdsRefreshMode
                                  ? i.filter(function (e) {
                                      return !r.separateRequestDivIds.some(
                                        function (t) {
                                          return t === e.getSlotElementId();
                                        }
                                      );
                                    })
                                  : this.atsSlots
                                      .filter(function (e) {
                                        return !r.separateRequestDivIds.some(
                                          function (t) {
                                            return t === e.getSlotElementId();
                                          }
                                        );
                                      })
                                      .concat(
                                        i.filter(function (e) {
                                          return r.prebidOnlySlotsDivIds.some(
                                            function (t) {
                                              return t === e.getSlotElementId();
                                            }
                                          );
                                        })
                                      )),
                              this.refreshAds(o)),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (this.defineSlot = function (e, t, n, i, o, r, s) {
                  var a = googletag.defineSlot(e, t, n),
                    c = [];
                  if (
                    (i.forEach(function (e) {
                      return (c = c.concat(
                        googletag
                          .sizeMapping()
                          .addSize(e.deviceSizes, e.sizes)
                          .build()
                      ));
                    }),
                    a.defineSizeMapping(c),
                    _this.setForceSafeFrameForSlot(a, r),
                    o)
                  )
                    switch (o) {
                      case "none":
                        a.setCollapseEmptyDiv(!1);
                        break;
                      case "after_fetch":
                        a.setCollapseEmptyDiv(!0);
                        break;
                      case "before_fetch":
                        a.setCollapseEmptyDiv(!0, !0);
                    }
                  return (
                    a.addService(googletag.pubads()),
                    s && _this.setTargetingForEachSlot(a, s),
                    (_this.definedAtsSlots[n] = a),
                    _this.atsSlots.push(a),
                    _this.atsSlotsWithVisibility.push({
                      slot: a,
                      visibilityPercentage: 0,
                      isViewable: !1,
                    }),
                    a
                  );
                }),
                (this.fetchAd = function (e) {
                  var t = e.adUnitPath,
                    n = e.sizes,
                    i = e.divId,
                    o = e.sizeMappingGroup,
                    r = e.setCollapseEmptyDiv,
                    s = e.setTargetingConfigs,
                    a = e.onAfterGptRendered,
                    c = e.onAfterGptFetched,
                    l = e.enableLazyLoad,
                    _ = e.lazyLoadMode,
                    d = e.lazyLoadConfig,
                    u = e.enableSetForceSafeFrameForSlot,
                    p = e.infinite;
                  return __awaiter(_this, void 0, void 0, function () {
                    var e;
                    return __generator(this, function (f) {
                      switch (f.label) {
                        case 0:
                          return (
                            (e =
                              !this.isSRAEnabled ||
                              p ||
                              (this.enableSeparateRequest &&
                                this.separateRequestDivIds.some(function (e) {
                                  return e === i;
                                }))
                                ? this.defineSlot(t, n, i, o, r, u, s)
                                : this.definedAtsSlots[i]),
                            l ? [4, this.waitDisplaySlot(i, d, _)] : [3, 2]
                          );
                        case 1:
                          f.sent(), (f.label = 2);
                        case 2:
                          return (
                            _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                              "call display for: ",
                              i
                            ),
                            googletag.display(i),
                            p ? (this.hb([e]), [3, 7]) : [3, 3]
                          );
                        case 3:
                          return googletag.pubads().isInitialLoadDisabled() &&
                            this.isSRAEnabled &&
                            this.enableSeparateRequest
                            ? [4, this.blockRefresh]
                            : [3, 7];
                        case 4:
                          return f.sent()
                            ? (_Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(
                                "gpt: block refresh ads due to keywords"
                              ),
                              [2])
                            : [
                                4,
                                _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z
                                  .onFirstPrebidResponseEnded,
                              ];
                        case 5:
                          return (
                            f.sent() &&
                              _libs_Prebid__WEBPACK_IMPORTED_MODULE_1__.Z.setTargetingForEachSlot(
                                i
                              ),
                            [
                              4,
                              _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z
                                .onFirstApsResponseEnded,
                            ]
                          );
                        case 6:
                          f.sent() &&
                            _libs_Aps__WEBPACK_IMPORTED_MODULE_2__.Z.setTargeting(),
                            this.refreshAds([e], !1, !1),
                            (f.label = 7);
                        case 7:
                          if (
                            (a &&
                              this.callbacksOnSlotRenderEnded.push(function (
                                n
                              ) {
                                n.slot === e &&
                                  (_Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                                    "gpt: render slot \npath: "
                                      .concat(t, " \nslotId: ")
                                      .concat(i)
                                  ),
                                  a(n));
                              }),
                            c)
                          )
                            try {
                              c(e);
                            } catch (e) {
                              _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(e);
                            }
                          return [2];
                      }
                    });
                  });
                }),
                (this.lazyLoadCallback = function (e, t, n, i, o, r) {
                  return function () {
                    r ||
                      window.requestAnimationFrame(function () {
                        var s = t.getBoundingClientRect(),
                          a = s.top - window.innerHeight,
                          c = s.bottom,
                          l = _this.calcDistance(i, o, t);
                        _this.shouldCallDisplay(a, c, l) &&
                          (e(),
                          window.removeEventListener(
                            "scroll",
                            _this.lazyLoadCallbacks[n]
                          )),
                          (r = !1);
                      }),
                      (r = !0);
                  };
                }),
                (this.waitDisplaySlot = function (e, t, n) {
                  return __awaiter(_this, void 0, void 0, function () {
                    var i = this;
                    return __generator(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return [
                            4,
                            new Promise(function (o) {
                              var r = document.querySelector("#".concat(e));
                              _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                                "waiting display ad slots:".concat(e)
                              );
                              var s = throttle(
                                i.lazyLoadCallback(
                                  function () {
                                    o();
                                  },
                                  r,
                                  e,
                                  n,
                                  t,
                                  !1
                                ),
                                THROTTLE_TIME
                              );
                              (i.lazyLoadCallbacks[e] = s),
                                window.addEventListener("scroll", s);
                            }),
                          ];
                        case 1:
                          return [2, o.sent()];
                      }
                    });
                  });
                }),
                (this.shouldCallDisplay = function (e, t, n) {
                  return Math.abs(e) < n || Math.abs(t) < n;
                }),
                (this.calcDistance = function (e, t, n) {
                  return 2 === e
                    ? window.innerHeight * t
                    : (n.offsetTop * t) / 100;
                }),
                (this.reset = function () {
                  try {
                    googletag.pubads().clear(),
                      _this.destroyAtsSlotsOnly
                        ? googletag.destroySlots(_this.extractAtsSlots)
                        : googletag.destroySlots(),
                      googletag.pubads().clearTargeting(),
                      googletag.pubads().updateCorrelator(),
                      (_this.blockRefresh = null),
                      _this.atsSlots.splice(0),
                      _this.atsSlotsWithVisibility.splice(0),
                      _this.callbacksOnSlotRenderEnded.splice(0),
                      (_this.definedAtsSlots = {});
                  } catch (e) {
                    _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(e);
                  }
                }),
                withGptAsync(function () {
                  googletag
                    .pubads()
                    .addEventListener("slotRenderEnded", function (e) {
                      for (
                        var t = 0, n = _this.callbacksOnSlotRenderEnded;
                        t < n.length;
                        t++
                      ) {
                        (0, n[t])(e);
                      }
                    }),
                    googletag
                      .pubads()
                      .addEventListener("slotVisibilityChanged", function (e) {
                        for (
                          var t = 0, n = _this.atsSlotsWithVisibility;
                          t < n.length;
                          t++
                        ) {
                          var i = n[t];
                          e.slot === i.slot &&
                            (i.visibilityPercentage = e.inViewPercentage);
                        }
                      }),
                    googletag
                      .pubads()
                      .addEventListener("impressionViewable", function (e) {
                        for (
                          var t = 0, n = _this.atsSlotsWithVisibility;
                          t < n.length;
                          t++
                        ) {
                          var i = n[t];
                          e.slot === i.slot && (i.isViewable = !0);
                        }
                      });
                })(),
                (this.disableInitialLoad = withGptAsync(
                  this.disableInitialLoad
                )),
                (this.enableSingleRequest = withGptAsync(
                  this.enableSingleRequest
                )),
                (this.collapseEmptyDivs = withGptAsync(this.collapseEmptyDivs)),
                (this.enableGamLazyload = withGptAsync(this.enableGamLazyload)),
                (this.executeBasicTargetings = withGptAsync(
                  this.executeBasicTargetings
                )),
                (this.enableServices = withGptAsync(this.enableServices)),
                (this.fetchAd = withGptAsync(this.fetchAd)),
                (this.refreshAds = withGptAsync(this.refreshAds)),
                (this.callOutOfPageSlot = withGptAsync(this.callOutOfPageSlot)),
                (this.defineATSSlotsForSRA = withGptAsync(
                  this.defineATSSlotsForSRA
                )),
                (this.reset = withGptAsync(this.reset));
            }
            return (
              (Gpt.prototype.init = function (e) {
                (this.configs = e),
                  (this.gamAdsRefreshMode = e.siteSetting.gamAdsRefresh),
                  (this.prebidOnlySlotsDivIds = e.prebidOnlySlotsDivIds),
                  (this.enableSeparateRequest =
                    e.siteSetting.enableSeparateRequest),
                  (this.separateRequestDivIds = e.separateRequestDivIds),
                  (this.destroyAtsSlotsOnly =
                    e.siteSetting.destroyAtsSlotsOnly),
                  this.setPPID(
                    e.siteSetting.ppidServerUrl,
                    e.siteSetting.ppidCustomJs
                  );
              }),
              Object.defineProperty(Gpt.prototype, "extractAtsSlots", {
                get: function () {
                  var e = this,
                    t = [];
                  return (
                    googletag
                      .pubads()
                      .getSlots()
                      .forEach(function (n) {
                        var i = n.getSlotElementId(),
                          o = n.getAdUnitPath();
                        (e.configs.gptSlotConfigs.some(function (e) {
                          return e.divId === i;
                        }) ||
                          e.configs.adxInstSetting.adUnitPath === o) &&
                          t.push(n);
                      }),
                    t
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Gpt
            );
          })();
        __webpack_exports__.ZP = new Gpt();
      },
      878: function (e, t, n) {
        var i,
          o = n(338),
          r = n(811),
          s =
            ((i = function (e, t) {
              return (
                (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                i(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          a = "ats_pbjs_debug",
          c = (function (e) {
            function t(t, n) {
              var i,
                o = this;
              return (
                ((o = e.call(this, t, n) || this).enableLog = r.yI),
                (o.isDev = r.r8),
                (o.getSlotInfo = function (e, t) {
                  o.log(
                    e,
                    "adUnitPath: "
                      .concat(t.getAdUnitPath(), "\n         slotElementId: ")
                      .concat(t.getSlotElementId())
                  );
                }),
                (o.setPrebidLog = function (e) {
                  var t, n;
                  void 0 === e && (e = !o.enablePrebidLog),
                    e
                      ? null === (t = window.sessionStorage) ||
                        void 0 === t ||
                        t.setItem(a, "true")
                      : null === (n = window.sessionStorage) ||
                        void 0 === n ||
                        n.removeItem(a),
                    location.reload();
                }),
                (o.enablePrebidLog =
                  "true" ===
                  (null === (i = window.sessionStorage) || void 0 === i
                    ? void 0
                    : i.getItem(a))),
                o
              );
            }
            return s(t, e), t;
          })(o.Y);
        t.ZP = new c("Ads", r.yI);
      },
      532: function (e, t, n) {
        var i = n(274),
          o = n(878),
          r = { childList: !0, subtree: !0 },
          s = function () {
            var e = this;
            (this.MUTATION_OBSERVER_TIMEOUT = 6e5),
              (this.mutationObserver = null),
              (this.elementListeners = []),
              (this.connect = function () {
                (e.mutationObserver = (0, i.OV)(e.check.bind(e), 50)),
                  e.mutationObserver.observe(document, r),
                  (e.disconnectTimeoutId = window.setTimeout(
                    e.disconnect.bind(e),
                    e.MUTATION_OBSERVER_TIMEOUT
                  )),
                  e.check();
              }),
              (this.disconnect = function () {
                null !== e.mutationObserver &&
                  (e.mutationObserver.disconnect(),
                  o.ZP.log("MutationObserver disconnected"),
                  (e.mutationObserver = null),
                  e.disconnectTimeoutId &&
                    (window.clearTimeout(e.disconnectTimeoutId),
                    delete e.disconnectTimeoutId),
                  e.check());
              }),
              (this.check = function () {
                if (0 !== e.elementListeners.length)
                  for (
                    var t = e.elementListeners.slice(), n = t.length - 1;
                    n >= 0;
                    n--
                  ) {
                    var r = t[n],
                      s = r.selector,
                      a = r.targetType,
                      c = r.fn,
                      l = (0, i.U9)(window.document, s, a);
                    if (null != l) {
                      try {
                        c(window.document);
                      } catch (e) {
                        o.ZP.error(e);
                      }
                      e.elementListeners.splice(n, 1);
                    }
                  }
              }),
              (this.waitForElement = function (t, n, i) {
                e.elementListeners.push({ selector: t, targetType: n, fn: i }),
                  e.mutationObserver || e.connect();
              }),
              (this.reset = function () {
                try {
                  e.disconnect(), delete e.disconnectTimeoutId;
                  for (var t = 0; t < e.elementListeners.length; t++) {
                    var n = e.elementListeners[t];
                    delete n.fn, delete n.selector, delete n.targetType;
                  }
                  e.elementListeners.splice(0);
                } catch (e) {
                  o.ZP.error(e);
                }
              });
          };
        t.Z = new s();
      },
      707: function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        var _libs_SiteSettings__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(893),
          _libs_ads_InsertAds__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(659),
          _libs_ads_Overlay__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(570),
          _libs_ads_Interstitial__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(585),
          _libs_ads_Skyscraper__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(905),
          _libs_ads_AdxInterstitial__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(809),
          _Logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(878),
          _libs_Prebid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(461),
          _libs_Aps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(913),
          _Gpt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(644),
          _MutationObserver__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(532),
          _Debug__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(811),
          _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(274),
          _libs_JsReadControl__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(708),
          _libs_ads_Parallax__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(284),
          __awaiter = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function s(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function a(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((i = i.apply(e, t || [])).next());
            });
          },
          __generator = function (e, t) {
            var n,
              i,
              o,
              r,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function a(r) {
              return function (a) {
                return (function (r) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        i &&
                          (o =
                            2 & r[0]
                              ? i.return
                              : r[0]
                              ? i.throw || ((o = i.return) && o.call(i), 0)
                              : i.next) &&
                          !(o = o.call(i, r[1])).done)
                      )
                        return o;
                      switch (((i = 0), o && (r = [2 & r[0], o.value]), r[0])) {
                        case 0:
                        case 1:
                          o = r;
                          break;
                        case 4:
                          return s.label++, { value: r[1], done: !1 };
                        case 5:
                          s.label++, (i = r[1]), (r = [0]);
                          continue;
                        case 7:
                          (r = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== r[0] && 2 !== r[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === r[0] &&
                            (!o || (r[1] > o[0] && r[1] < o[3]))
                          ) {
                            s.label = r[1];
                            break;
                          }
                          if (6 === r[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = r);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(r);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      r = t.call(e, s);
                    } catch (e) {
                      (r = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & r[0]) throw r[1];
                  return { value: r[0] ? r[1] : void 0, done: !0 };
                })([r, a]);
              };
            }
          },
          TagServices = (function () {
            function TagServices(configs) {
              var _this = this;
              (this.configs = configs),
                (this.INTERSTITIAL_BLOCK_AD_INSTANCE_COUNT = 100),
                (this.atsLogger = _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP),
                (this.setDev = _Debug__WEBPACK_IMPORTED_MODULE_11__.Wo),
                (this.loaded = !0),
                (this.que = {
                  push: function (e) {
                    try {
                      e();
                    } catch (e) {
                      _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP.error(e);
                    }
                  },
                }),
                (this.hb = _Gpt__WEBPACK_IMPORTED_MODULE_9__.ZP.hb),
                (this.forceHB = _Gpt__WEBPACK_IMPORTED_MODULE_9__.ZP.forceHB),
                (this.infinite = {}),
                (this.instances = []),
                (this.callATSOnTheFirstPageLoaded = function () {
                  return __awaiter(_this, void 0, void 0, function () {
                    var blockRefresh,
                      configs,
                      _loop_1,
                      _i,
                      _a,
                      config,
                      _this = this;
                    return __generator(this, function (_b) {
                      switch (_b.label) {
                        case 0:
                          return [
                            4,
                            _Gpt__WEBPACK_IMPORTED_MODULE_9__.ZP.blockRefresh,
                          ];
                        case 1:
                          if (((blockRefresh = _b.sent()), blockRefresh))
                            return [2];
                          (configs = []),
                            (_loop_1 = function (e) {
                              return __generator(this, function (t) {
                                switch (t.label) {
                                  case 0:
                                    return "interstitial" === e.type &&
                                      (e.active ||
                                        _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP
                                          .isDev) &&
                                      e.settings.blockWithoutAds
                                      ? [
                                          4,
                                          new Promise(function (t) {
                                            _this.executeInterstitial(
                                              e,
                                              _this.INTERSTITIAL_BLOCK_AD_INSTANCE_COUNT,
                                              t
                                            );
                                          }),
                                        ]
                                      : [3, 2];
                                  case 1:
                                    return t.sent(), [3, 3];
                                  case 2:
                                    configs.push(e), (t.label = 3);
                                  case 3:
                                    return [2];
                                }
                              });
                            }),
                            (_i = 0),
                            (_a = this.configs.configs),
                            (_b.label = 2);
                        case 2:
                          return _i < _a.length
                            ? ((config = _a[_i]), [5, _loop_1(config)])
                            : [3, 5];
                        case 3:
                          _b.sent(), (_b.label = 4);
                        case 4:
                          return _i++, [3, 2];
                        case 5:
                          return (
                            configs.forEach(function (config, index) {
                              if (
                                (_this.executeInterstitial(config, index),
                                "overlay" === config.type &&
                                  (config.active ||
                                    _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP
                                      .isDev))
                              ) {
                                var overlay_1 =
                                  new _libs_ads_Overlay__WEBPACK_IMPORTED_MODULE_2__.Z(
                                    config.settings,
                                    index
                                  );
                                if (
                                  (_this.instances.push(overlay_1),
                                  "loading" !== document.readyState)
                                )
                                  overlay_1.execute();
                                else {
                                  var onDOMContentLoaded_1 = function () {
                                    document.removeEventListener(
                                      "DOMContentLoaded",
                                      onDOMContentLoaded_1
                                    ),
                                      overlay_1.execute();
                                  };
                                  document.addEventListener(
                                    "DOMContentLoaded",
                                    onDOMContentLoaded_1
                                  );
                                }
                              }
                              if (
                                "skyscraper" === config.type &&
                                (config.active ||
                                  _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP.isDev)
                              ) {
                                var _a = config.settings,
                                  selector = _a.selector,
                                  targetType = _a.targetType,
                                  skyscraper_1 =
                                    new _libs_ads_Skyscraper__WEBPACK_IMPORTED_MODULE_4__.Z(
                                      config.settings,
                                      index
                                    );
                                _this.instances.push(skyscraper_1),
                                  (_this.infinite[config.settings.adUnitPath] =
                                    skyscraper_1),
                                  _MutationObserver__WEBPACK_IMPORTED_MODULE_10__.Z.waitForElement(
                                    selector,
                                    targetType,
                                    function (e) {
                                      skyscraper_1.execute(e);
                                    }
                                  );
                              }
                              if (
                                "insert_ads" === config.type &&
                                (config.active ||
                                  _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP.isDev)
                              ) {
                                var insertAds_1 =
                                  new _libs_ads_InsertAds__WEBPACK_IMPORTED_MODULE_1__.Z(
                                    config.settings,
                                    index
                                  );
                                _this.instances.push(insertAds_1),
                                  (_this.infinite[config.settings.adUnitPath] =
                                    insertAds_1);
                                var _b = config.settings,
                                  selector = _b.selector,
                                  targetType = _b.targetType;
                                _MutationObserver__WEBPACK_IMPORTED_MODULE_10__.Z.waitForElement(
                                  selector,
                                  targetType,
                                  function (e) {
                                    insertAds_1.execute(e);
                                  }
                                );
                              }
                              if (
                                "parallax" === config.type &&
                                (config.active ||
                                  _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP.isDev)
                              ) {
                                var parallax_1 =
                                  new _libs_ads_Parallax__WEBPACK_IMPORTED_MODULE_14__.Z(
                                    config.settings,
                                    index
                                  );
                                _this.instances.push(parallax_1),
                                  (_this.infinite[config.settings.adUnitPath] =
                                    parallax_1);
                                var _c = config.settings,
                                  selector = _c.selector,
                                  targetType = _c.targetType;
                                _MutationObserver__WEBPACK_IMPORTED_MODULE_10__.Z.waitForElement(
                                  selector,
                                  targetType,
                                  function (e) {
                                    parallax_1.execute(e);
                                  }
                                );
                              }
                              if (
                                ("adx_inst" === config.type &&
                                  (config.active ||
                                    _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP
                                      .isDev) &&
                                  (_this.instances.push(
                                    _libs_ads_AdxInterstitial__WEBPACK_IMPORTED_MODULE_5__.Z
                                  ),
                                  _libs_ads_AdxInterstitial__WEBPACK_IMPORTED_MODULE_5__.Z.execute(
                                    config.settings
                                  )),
                                "apm" === config.type &&
                                  (config.active ||
                                    _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP
                                      .isDev))
                              ) {
                                var apmAds_1 =
                                    new _libs_ads_InsertAds__WEBPACK_IMPORTED_MODULE_1__.Z(
                                      config.settings,
                                      index
                                    ),
                                  _d = config.settings,
                                  selector = _d.selector,
                                  targetType = _d.targetType;
                                _MutationObserver__WEBPACK_IMPORTED_MODULE_10__.Z.waitForElement(
                                  selector,
                                  targetType,
                                  function (e) {
                                    apmAds_1.execute(e);
                                  }
                                );
                              }
                              "custom" === config.type &&
                                (config.active ||
                                  _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP
                                    .isDev) &&
                                (config.settings.script &&
                                  eval(config.settings.script),
                                config.settings.style &&
                                  (0,
                                  _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_12__.cu)(
                                    config.settings.style
                                  ));
                            }),
                            _Gpt__WEBPACK_IMPORTED_MODULE_9__.ZP.trackingConfirmedClick(),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (this.executeInterstitial = function (
                  config,
                  instanceCount,
                  resolve
                ) {
                  if (
                    "interstitial" === config.type &&
                    (config.active ||
                      _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP.isDev)
                  ) {
                    var interstitial_1 =
                      new _libs_ads_Interstitial__WEBPACK_IMPORTED_MODULE_3__.Z(
                        config.settings,
                        instanceCount,
                        resolve
                      );
                    if (
                      (_this.instances.push(interstitial_1),
                      "loading" !== document.readyState)
                    )
                      interstitial_1.execute();
                    else {
                      var onDOMContentLoaded_2 = function () {
                        document.removeEventListener(
                          "DOMContentLoaded",
                          onDOMContentLoaded_2
                        ),
                          interstitial_1.execute();
                      };
                      document.addEventListener(
                        "DOMContentLoaded",
                        onDOMContentLoaded_2
                      );
                    }
                    config.settings.script && eval(config.settings.script);
                  }
                }),
                (this.notYetDiscarded = !0),
                (this.dispose = function () {
                  for (var e in (_Logger__WEBPACK_IMPORTED_MODULE_6__.ZP.log(
                    "tag: dispose start"
                  ),
                  _this.instances.forEach(function (e) {
                    return e.dispose();
                  }),
                  _this.instances.splice(0),
                  _this.infinite))
                    delete _this.infinite[e];
                  _Gpt__WEBPACK_IMPORTED_MODULE_9__.ZP.reset(),
                    _libs_Prebid__WEBPACK_IMPORTED_MODULE_7__.Z.reset(),
                    _libs_Aps__WEBPACK_IMPORTED_MODULE_8__.Z.reset(),
                    _MutationObserver__WEBPACK_IMPORTED_MODULE_10__.Z.reset(),
                    _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP.reset(),
                    (_this.notYetDiscarded = !1),
                    _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP.log(
                      "tag: dispose end"
                    );
                }),
                (this.siteSettingsConfig = configs.siteSetting);
              var _a = this.siteSettingsConfig,
                keywordsBlock = _a.keywordsBlock,
                enablePrebid = _a.enablePrebid,
                prebidSettings = _a.prebidSettings,
                callKeywordBlockFlag = !(0,
                _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_12__.SI)(
                  keywordsBlock
                );
              _Gpt__WEBPACK_IMPORTED_MODULE_9__.ZP.init(configs);
              var jsReadControlPromise = (0,
                _libs_JsReadControl__WEBPACK_IMPORTED_MODULE_13__.Z)(
                  this.siteSettingsConfig
                ),
                siteSettings =
                  new _libs_SiteSettings__WEBPACK_IMPORTED_MODULE_0__.Z(
                    this.siteSettingsConfig,
                    jsReadControlPromise
                  );
              if (
                (this.instances.push(siteSettings),
                siteSettings.browsersBlock())
              )
                _Logger__WEBPACK_IMPORTED_MODULE_6__.ZP.log("browser block");
              else {
                enablePrebid &&
                  _libs_Prebid__WEBPACK_IMPORTED_MODULE_7__.Z.init(
                    this.configs.configs.filter(function (e) {
                      return "prebid_only" === e.type;
                    }),
                    this.siteSettingsConfig.prebidSettings,
                    this.siteSettingsConfig.siteId,
                    this.siteSettingsConfig.parentAccountSiteDomain,
                    configs.prebidAnalyticsConfig,
                    jsReadControlPromise
                  ),
                  enablePrebid &&
                    prebidSettings.prebidTamPubId &&
                    _libs_Aps__WEBPACK_IMPORTED_MODULE_8__.Z.init(
                      this.configs.configs.filter(function (e) {
                        return "tam" === e.type;
                      }),
                      this.siteSettingsConfig.prebidSettings.prebidTimeout,
                      this.siteSettingsConfig.prebidSettings.prebidTamPubId,
                      this.siteSettingsConfig.siteId,
                      this.siteSettingsConfig.parentAccountSiteDomain,
                      jsReadControlPromise
                    );
                var callGPTDisableInitialLoadFlag =
                  (_libs_Prebid__WEBPACK_IMPORTED_MODULE_7__.Z.isCalled &&
                    !_libs_Prebid__WEBPACK_IMPORTED_MODULE_7__.Z.noAdUnits) ||
                  (_libs_Aps__WEBPACK_IMPORTED_MODULE_8__.Z.isCalled &&
                    !_libs_Aps__WEBPACK_IMPORTED_MODULE_8__.Z.noSlots) ||
                  callKeywordBlockFlag ||
                  this.siteSettingsConfig.enableGamDisableInitialLoad;
                if (
                  (siteSettings.init(
                    callGPTDisableInitialLoadFlag,
                    this.configs.apmConfig,
                    configs.gptSlotConfigsForSRA,
                    configs.adxInstSetting
                  ),
                  callKeywordBlockFlag)
                ) {
                  var keywordsCountry_1 = keywordsBlock.keywordsCountry;
                  _Gpt__WEBPACK_IMPORTED_MODULE_9__.ZP.blockRefresh =
                    new Promise(function (e) {
                      return keywordsCountry_1 && keywordsCountry_1.length > 0
                        ? siteSettings.fetchKeywordJson(e)
                        : siteSettings.callKeywordBlocks(e);
                    });
                }
                this.callATSOnTheFirstPageLoaded();
              }
            }
            return TagServices;
          })();
        __webpack_exports__.Z = TagServices;
      },
      135: function (e, t, n) {
        n.d(t, {
          DC: function () {
            return i;
          },
          R0: function () {
            return s;
          },
          hH: function () {
            return r;
          },
          re: function () {
            return o;
          },
          zS: function () {
            return a;
          },
        });
        var i = {
            USD: {
              HKD: 7.75,
              JPY: 110,
              PHP: 51.22,
              SGD: 1.4,
              TWD: 30,
              CNY: 6.9,
            },
          },
          o = [
            { bidder: "criteo" },
            { bidder: "ix", versions: [5] },
            { bidder: "openx" },
          ],
          r = {
            buckets: [
              { precision: 2, min: 0, max: 4, increment: 0.01 },
              { precision: 2, min: 4, max: 20, increment: 0.1 },
            ],
          },
          s = {
            adgeneration: {
              bidCpmAdjustment: function (e) {
                return 0.85 * e;
              },
            },
          },
          a = {
            alwaysUseBid: !0,
            sendStandardTargeting: !1,
            suppressEmptyKeys: !0,
            adserverTargeting: [
              {
                key: "adt",
                val: function (e) {
                  return e.adt;
                },
              },
              {
                key: "alc",
                val: function (e) {
                  return e.alc;
                },
              },
              {
                key: "dlm",
                val: function (e) {
                  return e.dlm;
                },
              },
              {
                key: "drg",
                val: function (e) {
                  return e.drg;
                },
              },
              {
                key: "hat",
                val: function (e) {
                  return e.hat;
                },
              },
              {
                key: "off",
                val: function (e) {
                  return e.off;
                },
              },
              {
                key: "vio",
                val: function (e) {
                  return e.vio;
                },
              },
              {
                key: "fr",
                val: function (e) {
                  return e.fr;
                },
              },
              {
                key: "id",
                val: function (e) {
                  return e.slots[e.adUnitCode].id;
                },
              },
              {
                key: "vw",
                val: function (e) {
                  return e.slots[e.adUnitCode].vw;
                },
              },
              {
                key: "grm",
                val: function (e) {
                  return e.slots[e.adUnitCode].grm;
                },
              },
              {
                key: "pub",
                val: function (e) {
                  return e.slots[e.adUnitCode].pub;
                },
              },
              {
                key: "vw05",
                val: function (e) {
                  return e.slots[e.adUnitCode].vw05;
                },
              },
              {
                key: "vw10",
                val: function (e) {
                  return e.slots[e.adUnitCode].vw10;
                },
              },
              {
                key: "vw15",
                val: function (e) {
                  return e.slots[e.adUnitCode].vw15;
                },
              },
              {
                key: "vw30",
                val: function (e) {
                  return e.slots[e.adUnitCode].vw30;
                },
              },
            ],
          };
      },
      633: function (e, t, n) {
        var i = n(274);
        window.adloox_pubint = window.adloox_pubint || { cmd: [] };
        var o = (window.googletag = window.googletag || {});
        o.cmd = o.cmd || [];
        var r = function () {
          var e = this;
          (this.ADLOOX_URL = "//p.adlooxtracking.com/gpt/a.js"),
            (this.isCalled = !1),
            (this.init = function (t, n) {
              t &&
                e.reducer(n, function () {
                  (e.isCalled = !0),
                    (0, i.lN)(!0, e.ADLOOX_URL),
                    window.adloox_pubint.cmd.push(function () {
                      window.adloox_pubint.init({
                        clientid: 152,
                        platformid: 238,
                        tagid: 1095,
                      });
                    }),
                    o.cmd.push(function () {
                      window.adloox_pubint.cmd.push(function () {
                        window.adloox_pubint.gpt_js(o);
                      }),
                        setTimeout(function () {
                          window.adloox_pubint.cmd.push(function () {
                            window.adloox_pubint.gpt(o, function () {});
                          });
                        }, 2e3);
                    });
                });
            }),
            (this.reducer = function (e, t) {
              Math.random() < e && t();
            });
        };
        t.Z = new r();
      },
      913: function (e, t, n) {
        var i = n(878),
          o = n(274),
          r = /^\d{4}$/,
          s = function () {
            var e = this;
            (this.isCalled = !1),
              (this.noSlots = !1),
              (this.onFirstApsResponseEnded = null),
              (this.slotsDict = {}),
              (this.init = function (t, n, o, s, a, c) {
                (e.noSlots = !1),
                  (e.configs = t),
                  (e.timeout = n),
                  (e.apsPubId = o),
                  e.isCalled || ((e.isCalled = !0), e.loadAps(c));
                var l = {
                  complete: 1,
                  ver: "1.0",
                  nodes: [{ asi: a, sid: "".concat(s), hp: 1 }],
                };
                r.test(o)
                  ? window.apstag.init({
                      pubID: e.apsPubId,
                      adServer: "googletag",
                    })
                  : window.apstag.init({
                      pubID: e.apsPubId,
                      adServer: "googletag",
                      schain: l,
                    });
                var _ = e.createParamaters(e.configs, !1);
                if (0 === _.length)
                  return (e.noSlots = !0), void i.ZP.error("aps: no slots");
                e.onFirstApsResponseEnded = e.fetchApsBids(_);
              }),
              (this.loadAps = function (e) {
                !(function (t, n, i, o, r) {
                  if (!n[t]) {
                    n[t] = {
                      init: function () {
                        a("i", arguments);
                      },
                      fetchBids: function () {
                        a("f", arguments);
                      },
                      setDisplayBids: function () {},
                      targetingKeys: function () {
                        return [];
                      },
                      _Q: [],
                    };
                    var s = function () {
                      var e,
                        t = i.createElement(o);
                      (t.async = !0), (t.src = r);
                      var n = i.getElementsByTagName(o)[0];
                      null === (e = n.parentNode) ||
                        void 0 === e ||
                        e.insertBefore(t, n);
                    };
                    e ? e.then(s) : s();
                  }
                  function a(e, i) {
                    n[t]._Q.push([e, i]);
                  }
                })(
                  "apstag",
                  window,
                  document,
                  "script",
                  "//c.amazon-adsystem.com/aax2/apstag.js"
                );
              }),
              (this.setTargeting = function () {
                i.ZP.log("aps: setTargeting"), window.apstag.setDisplayBids();
              }),
              (this.fetchApsBids = function (t) {
                return new Promise(function (n) {
                  window.apstag.fetchBids(
                    { slots: t, timeout: e.timeout },
                    function (e) {
                      i.ZP.log("aps return bids", e), n(!0);
                    }
                  );
                });
              }),
              (this.createParamaters = function (t, n) {
                for (var r = [], s = 0, a = t; s < a.length; s++) {
                  var c = a[s];
                  if (n || c.active || i.ZP.isDev)
                    for (
                      var l = 0, _ = c.settings.tamAdUnits;
                      l < _.length;
                      l++
                    ) {
                      var d = _[l];
                      if ((0, o.NT)(d.deviceSizes)) {
                        var u = {
                          slotID: d.slot.slotID,
                          slotName: d.slot.slotName,
                          sizes: d.slot.sizes
                            .filter(function (e) {
                              return e.enable || i.ZP.isDev;
                            })
                            .reduce(function (e, t) {
                              for (var n = 0, i = t.sizes; n < i.length; n++) {
                                var o = i[n],
                                  r = o[0],
                                  s = o[1];
                                e.push([r, s]);
                              }
                              return e;
                            }, []),
                        };
                        if (u.sizes.length <= 0) continue;
                        (e.slotsDict[u.slotName] = u), r.push(u);
                        break;
                      }
                    }
                }
                return (
                  i.ZP.log("aps: slots", r),
                  i.ZP.log("aps: slots dict", e.slotsDict),
                  r
                );
              }),
              (this.reset = function () {
                (e.onFirstApsResponseEnded = null), (e.noSlots = !1);
              });
          };
        t.Z = new s();
      },
      708: function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        var _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(274),
          _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(878),
          jsReadControl = function (_a) {
            var enablePrebid = _a.enablePrebid,
              enableIdentityHub = _a.enableIdentityHub,
              identityHubPublisherId = _a.identityHubPublisherId,
              identityHubProfileId = _a.identityHubProfileId,
              enableLiveRamp = _a.enableLiveRamp,
              liveRampJsURL = _a.liveRampJsURL,
              liveRampScript = _a.liveRampScript;
            if (
              (enablePrebid &&
                enableLiveRamp &&
                liveRampJsURL &&
                (_Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log("LiveRamp enable"),
                window.setTimeout(function () {
                  if (
                    /.*launchpad-wrapper\.privacymanager\.io\/.*/.test(
                      liveRampJsURL
                    )
                  ) {
                    var link = document.createElement("link");
                    link.setAttribute("rel", "preload"),
                      link.setAttribute(
                        "href",
                        "https://launchpad.privacymanager.io/1/launchpad.bundle.js"
                      ),
                      link.setAttribute("as", "script"),
                      document.head.appendChild(link);
                  }
                  (0,
                  _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_0__.lN)(!1, liveRampJsURL, function () {
                    _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log(
                      "LiveRamp onload"
                    );
                    try {
                      liveRampScript &&
                        (_Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log(
                          "LiveRamp run script"
                        ),
                        eval(liveRampScript));
                    } catch (e) {
                      _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.error(
                        "LiveRamp",
                        e
                      );
                    }
                  });
                })),
              enablePrebid &&
                enableIdentityHub &&
                identityHubPublisherId &&
                identityHubProfileId)
            )
              return new Promise(function (e) {
                _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log("PWT enable");
                var t = !1,
                  n = function () {
                    t ||
                      ((t = !0),
                      _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log(
                        "PWT resolve"
                      ),
                      e());
                  };
                (window.PWT = window.PWT || {}),
                  (window.PWT.jsLoaded = function () {
                    _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log(
                      "PWT PWT.jsLoaded"
                    ),
                      location.hostname.match(
                        /proxypy.org|printwhatyoulike.com/
                      ) || n();
                  }),
                  setTimeout(function () {
                    _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log("PWT timeout"),
                      n();
                  }, 500);
                var i = window.location.href,
                  o = "";
                if (i.indexOf("pwtv=") > 0) {
                  var r = /pwtv=(.*?)(&|$)/g.exec(i);
                  r && r.length >= 2 && r[1].length > 0 && (o = "/" + r[1]);
                }
                (0,
                _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_0__.lN)(!0, "//ads.pubmatic.com/AdServer/js/pwt/".concat(identityHubPublisherId, "/").concat(identityHubProfileId).concat(o, "/pwt.js"));
              });
          };
        __webpack_exports__.Z = jsReadControl;
      },
      461: function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(878),
          _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(274),
          _config_prebid__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(135),
          _Gpt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(644),
          __assign = function () {
            return (
              (__assign =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              __assign.apply(this, arguments)
            );
          },
          Prebid = (function () {
            function Prebid() {
              var _this = this;
              (this.isCalled = !1),
                (this.noAdUnits = !1),
                (this.onFirstPrebidResponseEnded = null),
                (this.adUnitsDict = {}),
                (this.init = function (
                  configs,
                  prebidSettings,
                  siteId,
                  parentAccountSiteDomain,
                  prebidAnalyticsConfig,
                  jsReadControlPromise
                ) {
                  (_this.noAdUnits = !1),
                    (_this.prebidSettings = prebidSettings),
                    (_this.configs = configs),
                    (_this.siteId = siteId),
                    (_this.parentAccountSiteDomain = parentAccountSiteDomain),
                    _this.isCalled ||
                      ((_this.isCalled = !0),
                      jsReadControlPromise
                        ? jsReadControlPromise.then(function () {
                            return (0,
                            _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__.lN)(!0, prebidSettings.prebidJsURL);
                          })
                        : (0,
                          _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__.lN)(
                            !0,
                            prebidSettings.prebidJsURL
                          )),
                    _this.prebidSettings.prebidUseAtspbjs
                      ? (_this.pbjs = window.atspbjs =
                          window.atspbjs || { que: [] })
                      : (_this.pbjs = window.pbjs = window.pbjs || { que: [] }),
                    _this.pbjs.que.push(function () {
                      var _a, _b, _c, _d, _e, _f;
                      _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                        _this.prebidSettings.prebidUseAtspbjs
                          ? "atspbjs"
                          : "pbjs",
                        "Prebid.js",
                        _this.pbjs.version
                      ),
                        _this.prebidSettings.enableSchain &&
                          _this.setSchain(configs, !1),
                        _this.pbjs.aliasBidder("appnexus", "dg"),
                        (_this.pbjs.bidderSettings =
                          _config_prebid__WEBPACK_IMPORTED_MODULE_2__.R0);
                      var adServerCurrency =
                        (null === (_a = _this.prebidSettings) || void 0 === _a
                          ? void 0
                          : _a.prebidCurrency) || "USD";
                      if (
                        (_this.pbjs.setConfig(
                          _this.createPrebidConfig(
                            adServerCurrency,
                            _this.prebidSettings
                          )
                        ),
                        _this.configs.some(function (e) {
                          return e.settings.prebidAdUnits.some(function (e) {
                            var t = e.deviceSizes,
                              n = e.atsPrebidAdUnits;
                            return (
                              (0,
                              _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__.NT)(
                                t
                              ) &&
                              n.some(function (e) {
                                return e.bids.some(function (e) {
                                  return "ias" === e.bidder;
                                });
                              })
                            );
                          });
                        }) &&
                          ((_this.pbjs.bidderSettings =
                            _this.pbjs.bidderSettings || {}),
                          (_this.pbjs.bidderSettings.ias =
                            _config_prebid__WEBPACK_IMPORTED_MODULE_2__.zS)),
                        [7].includes(_this.prebidSettings.prebidVersion) &&
                          _this.configs.some(function (e) {
                            return e.settings.prebidAdUnits.some(function (e) {
                              var t = e.deviceSizes,
                                n = e.atsPrebidAdUnits;
                              return (
                                (0,
                                _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__.NT)(
                                  t
                                ) &&
                                n.some(function (e) {
                                  return e.bids.some(function (e) {
                                    return "adagio" === e.bidder;
                                  });
                                })
                              );
                            });
                          }) &&
                          ((null !== (_b = (_e = _this.pbjs).bidderSettings) &&
                            void 0 !== _b) ||
                            (_e.bidderSettings = {}),
                          (_this.pbjs.bidderSettings.adagio = {
                            storageAllowed: !0,
                          })),
                        [7].includes(_this.prebidSettings.prebidVersion) &&
                          _this.configs.some(function (e) {
                            return e.settings.prebidAdUnits.some(function (e) {
                              var t = e.deviceSizes,
                                n = e.atsPrebidAdUnits;
                              return (
                                (0,
                                _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__.NT)(
                                  t
                                ) &&
                                n.some(function (e) {
                                  return e.bids.some(function (e) {
                                    return "craft" === e.bidder;
                                  });
                                })
                              );
                            });
                          }) &&
                          ((null !== (_c = (_f = _this.pbjs).bidderSettings) &&
                            void 0 !== _c) ||
                            (_f.bidderSettings = {}),
                          (_this.pbjs.bidderSettings.craft = {
                            storageAllowed: !0,
                          })),
                        null === (_d = _this.prebidSettings) || void 0 === _d
                          ? void 0
                          : _d.prebidCustomScript)
                      )
                        try {
                          eval(_this.prebidSettings.prebidCustomScript);
                        } catch (e) {
                          _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(e);
                        }
                      _this.prebidSettings.prebidUseAtspbjs &&
                        _this.modifyKeyValue(),
                        _this.prebidSettings.enableAnalytics &&
                          _this.enableAnyMindPrebidAnalytics(
                            prebidAnalyticsConfig.adUnitIdPathMapping,
                            prebidAnalyticsConfig.amPrebidBidderMap,
                            _this.prebidSettings.analyticsSamplingRate,
                            _this.prebidSettings.ampaEndPoint
                          );
                    });
                  var adUnits = _this.createParamaters(configs, !1);
                  if (0 === adUnits.length)
                    return (
                      _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(
                        "pbjs: no adunits"
                      ),
                      void (_this.noAdUnits = !0)
                    );
                  var adUnitCodes = adUnits.map(function (e) {
                    return e.code;
                  });
                  _this.onFirstPrebidResponseEnded = _this.sendBids(
                    adUnits,
                    adUnitCodes
                  );
                }),
                (this.enableAnyMindPrebidAnalytics = function (e, t, n, i) {
                  _this.pbjs.enableAnalytics([
                    {
                      provider: "anymind",
                      options: {
                        sampling: n,
                        siteId: _this.siteId,
                        adUnitIdPathMappings: e,
                        amPrebidBidderMap: t,
                        endpoint: i,
                      },
                    },
                  ]);
                }),
                (this.removeAdUnit = function (e) {
                  _this.pbjs.removeAdUnit(e);
                }),
                (this.setTargeting = function () {
                  _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                    "pbjs: setTargeting for all"
                  ),
                    _this.pbjs.setTargetingForGPTAsync();
                }),
                (this.setTargetingForEachSlot = function (e) {
                  _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                    "pbjs: setTargeting for ",
                    e
                  ),
                    _this.pbjs.setTargetingForGPTAsync(e);
                }),
                (this.modifyKeyValue = function () {
                  _this.pbjs.bidderSettings.standard = {
                    adserverTargeting: [
                      {
                        key: "ats_hb_bidder",
                        val: function (e) {
                          return e.bidderCode;
                        },
                      },
                      {
                        key: "hb_size",
                        val: function (e) {
                          return e.size;
                        },
                      },
                      {
                        key: "hb_adid",
                        val: function (e) {
                          return e.adId;
                        },
                      },
                      {
                        key: "hb_source",
                        val: function (e) {
                          return e.source;
                        },
                      },
                      {
                        key: "hb_format",
                        val: function (e) {
                          return e.mediaType;
                        },
                      },
                      {
                        key: "ats_hb_pb",
                        val: function (e) {
                          return e.pbCg;
                        },
                      },
                      {
                        key: "ats_hb_bid",
                        val: function () {
                          return "true";
                        },
                      },
                    ],
                  };
                }),
                (this.createPrebidConfig = function (
                  adServerCurrency,
                  prebidSetttings
                ) {
                  var _a,
                    _b,
                    _c,
                    config = __assign(
                      {
                        debug:
                          _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP
                            .enablePrebidLog,
                        rubicon: { singleRequest: !0 },
                        enableSendAllBids: !1,
                      },
                      (function () {
                        try {
                          if (prebidSetttings.prebidUserSyncScript)
                            return {
                              userSync: eval(
                                prebidSetttings.prebidUserSyncScript
                              ),
                            };
                        } catch (e) {
                          _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(
                            "Prebid userSync Script",
                            e
                          );
                        }
                      })()
                    );
                  if (prebidSetttings.enableNovatiqIdSystem) {
                    var userIds =
                      null !==
                        (_b = (_c =
                          null !== (_a = config.userSync) && void 0 !== _a
                            ? _a
                            : (config.userSync = {})).userIds) && void 0 !== _b
                        ? _b
                        : (_c.userIds = []);
                    userIds.some(function (e) {
                      return "novatiq" === e.name;
                    }) || userIds.push({ name: "novatiq" });
                  }
                  var granularitySetting = {
                    priceGranularity: "medium",
                    currency: {
                      adServerCurrency: adServerCurrency,
                      conversionRateFile:
                        "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json",
                      defaultRates:
                        _config_prebid__WEBPACK_IMPORTED_MODULE_2__.DC,
                    },
                  };
                  return (
                    "USD" === adServerCurrency
                      ? (granularitySetting.priceGranularity =
                          _config_prebid__WEBPACK_IMPORTED_MODULE_2__.hH)
                      : ("JPY" === adServerCurrency ||
                          (granularitySetting.priceGranularity = "high"),
                        (granularitySetting.currency.granularityMultiplier =
                          _config_prebid__WEBPACK_IMPORTED_MODULE_2__.DC.USD[
                            adServerCurrency
                          ])),
                    __assign(__assign({}, config), granularitySetting)
                  );
                }),
                (this.sendBids = function (e, t) {
                  return new Promise(function (n) {
                    var i = (0, _Gpt__WEBPACK_IMPORTED_MODULE_3__.tY)(
                      function () {
                        n(!0);
                      }
                    );
                    _this.pbjs.que.push(function () {
                      _this.pbjs.addAdUnits(e),
                        _this.pbjs.requestBids({
                          timeout: _this.prebidSettings.prebidTimeout,
                          adUnitCodes: t,
                          bidsBackHandler: i,
                        });
                    });
                  });
                }),
                (this.renderer = function (e) {
                  return {
                    backupOnly: !0,
                    url: e,
                    render: function (e) {
                      _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                        "execute OutStream Renderer "
                          .concat(e.bidderCode, " ")
                          .concat(e.mediaType)
                      ),
                        (void 0 !== e.ad && null !== e.ad) ||
                          void 0 === e.vastUrl ||
                          null === e.vastUrl ||
                          (_Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                            "Bid object contains bid.vastUrl with value: " +
                              e.vastUrl
                          ),
                          (e.ad = e.vastUrl));
                      var t = {
                        vastTimeout: 5e3,
                        maxAllowedVastTagRedirects: 3,
                        allowVpaid: !0,
                        autoPlay: !1,
                        preload: !0,
                        mute: !0,
                      };
                      e.width && (t.width = e.width),
                        e.height && (t.height = e.height),
                        e.renderer.push(function () {
                          try {
                            window.outstreamPlayer &&
                              window.outstreamPlayer.player(e, e.adUnitCode, t);
                          } catch (e) {
                            _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(e),
                              _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                                "Error in ad rendering!"
                              );
                          }
                        });
                    },
                  };
                }),
                (this.createParamaters = function (configs, force) {
                  var _a;
                  void 0 === force && (force = !1);
                  for (
                    var adUnits = [],
                      _loop_1 = function (config) {
                        if (
                          !force &&
                          !config.active &&
                          !_Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.isDev
                        )
                          return "continue";
                        for (
                          var _b = config.settings,
                            adUnitPath = _b.adUnitPath,
                            divID = _b.divID,
                            prebidAdUnits = _b.prebidAdUnits,
                            _prebidAdUnits = [],
                            count = 0,
                            _c = 0,
                            prebidAdUnits_1 = prebidAdUnits;
                          _c < prebidAdUnits_1.length;
                          _c++
                        ) {
                          var prebidAdUnit = prebidAdUnits_1[_c];
                          if (
                            (0,
                            _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__.NT)(
                              prebidAdUnit.deviceSizes
                            )
                          ) {
                            for (
                              var _loop_2 = function (atsPrebidAdunit) {
                                  var adUnit = __assign(
                                    {
                                      code: divID,
                                      bids: atsPrebidAdunit.bids.reduce(
                                        function (accumulator, _a) {
                                          var bidder = _a.bidder,
                                            params = _a.params,
                                            script = _a.script;
                                          try {
                                            accumulator.push({
                                              bidder: bidder,
                                              params: script
                                                ? eval(script)
                                                : params,
                                            });
                                          } catch (e) {
                                            _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(
                                              "[Error in Prebid params]",
                                              e
                                            );
                                          }
                                          return accumulator;
                                        },
                                        []
                                      ),
                                      mediaTypes: {},
                                    },
                                    (function () {
                                      if (
                                        atsPrebidAdunit.bids.some(function (e) {
                                          var t = e.bidder;
                                          return ["ix"].includes(t);
                                        })
                                      ) {
                                        var e =
                                          config.settings.adUnitPath +
                                          (/^ats-insert_ads_flexible-\d+-\d+$/.test(
                                            config.settings.divID
                                          )
                                            ? "#".concat(config.settings.divID)
                                            : "");
                                        if (
                                          5 !==
                                          _this.prebidSettings.prebidVersion
                                        )
                                          return {
                                            ortb2Imp: { ext: { gpid: e } },
                                          };
                                        if (count++ > 10) return;
                                        return {
                                          ortb2Imp: {
                                            ext: {
                                              data: {
                                                adserver: {
                                                  name: "gam",
                                                  adslot: e,
                                                },
                                              },
                                            },
                                          },
                                        };
                                      }
                                    })()
                                  );
                                  if (adUnit.bids.length <= 0)
                                    return "continue";
                                  (0,
                                  _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__.SI)(
                                    atsPrebidAdunit.mediaTypes.banner
                                  ) ||
                                    (adUnit.mediaTypes.banner =
                                      atsPrebidAdunit.mediaTypes.banner),
                                    (0,
                                    _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__.SI)(
                                      atsPrebidAdunit.mediaTypes.video
                                    ) ||
                                      ((adUnit.mediaTypes.video =
                                        atsPrebidAdunit.mediaTypes.video),
                                      _this.prebidSettings &&
                                        "outstream" ===
                                          (null ===
                                            (_a = adUnit.mediaTypes.video) ||
                                          void 0 === _a
                                            ? void 0
                                            : _a.context) &&
                                        adUnit.bids.some(function (e) {
                                          var t = e.bidder;
                                          return _config_prebid__WEBPACK_IMPORTED_MODULE_2__.re.some(
                                            function (e) {
                                              var n = e.bidder,
                                                i = e.versions;
                                              return (
                                                n === t &&
                                                (!i ||
                                                  i.includes(
                                                    _this.prebidSettings
                                                      .prebidVersion
                                                  ))
                                              );
                                            }
                                          );
                                        }) &&
                                        (adUnit.mediaTypes.video.renderer =
                                          _this.renderer(
                                            _this.prebidSettings.rendererJsURL
                                          ))),
                                    (0,
                                    _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__.SI)(
                                      atsPrebidAdunit.mediaTypes.native
                                    ) ||
                                      (adUnit.mediaTypes.native =
                                        atsPrebidAdunit.mediaTypes.native),
                                    adUnits.push(adUnit),
                                    _prebidAdUnits.push(adUnit);
                                },
                                _d = 0,
                                _e = prebidAdUnit.atsPrebidAdUnits;
                              _d < _e.length;
                              _d++
                            ) {
                              var atsPrebidAdunit = _e[_d];
                              _loop_2(atsPrebidAdunit);
                            }
                            _this.adUnitsDict[adUnitPath] = {
                              prebidAdUnits: _prebidAdUnits,
                              code: divID,
                            };
                            break;
                          }
                        }
                      },
                      _i = 0,
                      configs_1 = configs;
                    _i < configs_1.length;
                    _i++
                  ) {
                    var config = configs_1[_i];
                    _loop_1(config);
                  }
                  return (
                    _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                      "pbjs: adUnits",
                      adUnits
                    ),
                    _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.log(
                      "pbjs: adunits dict",
                      _this.adUnitsDict
                    ),
                    adUnits
                  );
                }),
                (this.setSchain = function (e, t) {
                  void 0 === t && (t = !1),
                    _this.pbjs.que.push(function () {
                      var n = new Set();
                      e.forEach(function (e) {
                        t ||
                          (!e.active &&
                            !_Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.isDev) ||
                          e.settings.prebidAdUnits.forEach(function (e) {
                            e.atsPrebidAdUnits.forEach(function (t) {
                              t.bids.forEach(function (t) {
                                t.includeSchain &&
                                  (0,
                                  _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_1__.NT)(
                                    e.deviceSizes
                                  ) &&
                                  n.add(t.bidder);
                              });
                            });
                          });
                      }),
                        n.size > 0 &&
                          _this.pbjs.setBidderConfig({
                            bidders: Array.from(n),
                            config: {
                              schain: {
                                validation: "relaxed",
                                config: {
                                  ver: "1.0",
                                  complete: 1,
                                  nodes: [
                                    {
                                      asi: _this.parentAccountSiteDomain,
                                      sid: "".concat(_this.siteId),
                                      hp: 1,
                                    },
                                  ],
                                },
                              },
                            },
                          });
                    });
                }),
                (this.reset = function () {
                  try {
                    for (var e in (_this.pbjs &&
                      _this.pbjs.que.push(function () {
                        _this.pbjs.removeAdUnit();
                      }),
                    (_this.onFirstPrebidResponseEnded = null),
                    (_this.configs = []),
                    (_this.noAdUnits = !1),
                    _this.adUnitsDict))
                      delete _this.adUnitsDict[e];
                  } catch (e) {
                    _Logger__WEBPACK_IMPORTED_MODULE_0__.ZP.error(e);
                  }
                });
            }
            return Prebid;
          })();
        __webpack_exports__.Z = new Prebid();
      },
      893: function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        var _Gpt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(644),
          _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(878),
          _Apm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(158),
          _Adloox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(633),
          _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(274),
          GPT_URL = "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
          SiteSettings = (function () {
            function SiteSettings(config, jsReadControlPromise) {
              var _this = this;
              (this.config = config),
                (this.countryKeywordsJson = {}),
                (this.init = function (e, t, n, i) {
                  var o = _this.config,
                    r = o.enableBasicSetTargetings,
                    s = o.enableGamLazyload,
                    a = o.enableGamSingleRequest,
                    c = o.enableCollapseEmptyDivs,
                    l = o.enableApm,
                    _ = o.apmNetworkId,
                    d = o.apmSiteId;
                  r &&
                    _Gpt__WEBPACK_IMPORTED_MODULE_0__.ZP.executeBasicTargetings(),
                    !(0,
                    _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_4__.SI)(
                      s
                    ) &&
                      _Gpt__WEBPACK_IMPORTED_MODULE_0__.ZP.enableGamLazyload(s),
                    c &&
                      _Gpt__WEBPACK_IMPORTED_MODULE_0__.ZP.collapseEmptyDivs(),
                    e &&
                      _Gpt__WEBPACK_IMPORTED_MODULE_0__.ZP.disableInitialLoad(),
                    (a || e) &&
                      (_Gpt__WEBPACK_IMPORTED_MODULE_0__.ZP.defineATSSlotsForSRA(
                        n,
                        i
                      ),
                      _Gpt__WEBPACK_IMPORTED_MODULE_0__.ZP.enableSingleRequest()),
                    _Gpt__WEBPACK_IMPORTED_MODULE_0__.ZP.enableServices(),
                    l &&
                      (_Apm__WEBPACK_IMPORTED_MODULE_2__.ZP.insertSasScript(_),
                      _Apm__WEBPACK_IMPORTED_MODULE_2__.ZP.setUpAndCall(
                        _,
                        d,
                        t
                      ));
                }),
                (this.fetchKeywordJson = function (e) {
                  "countryKeywordsJsonUrl" in _this.config.keywordsBlock &&
                    "string" ==
                      typeof _this.config.keywordsBlock
                        .countryKeywordsJsonUrl &&
                    fetch(_this.config.keywordsBlock.countryKeywordsJsonUrl, {
                      mode: "cors",
                      method: "GET",
                      headers: { "Content-Type": "application/json" },
                    })
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (t) {
                        (_this.countryKeywordsJson = t),
                          _this.callKeywordBlocks(e);
                      })
                      .catch(function (t) {
                        return (
                          _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.error(t),
                          e(!1)
                        );
                      });
                }),
                (this.callKeywordBlocks = function (e) {
                  if ("loading" !== document.readyState) _this.keywordsBlock(e);
                  else {
                    var t = function () {
                      document.removeEventListener("DOMContentLoaded", t),
                        _this.keywordsBlock(e);
                    };
                    document.addEventListener("DOMContentLoaded", t);
                  }
                }),
                (this.isMatchedWithRegex = function (e, t) {
                  if (0 === t.length)
                    return (
                      _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log(
                        "no keywords"
                      ),
                      !1
                    );
                  var n = t
                      .map(function (e) {
                        return (
                          [
                            "\\",
                            "*",
                            "+",
                            ".",
                            "?",
                            "{",
                            "}",
                            "(",
                            ")",
                            "[",
                            "]",
                            "^",
                            "$",
                            "|",
                          ].forEach(function (t) {
                            e = e.replace(t, "\\".concat(t));
                          }),
                          e
                        );
                      })
                      .join("|"),
                    i = new RegExp(n);
                  return i.test(e)
                    ? (_Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log(
                        "block by keyword"
                      ),
                      _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log(e.match(i)),
                      !0)
                    : (_Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log(
                        "regex unblock"
                      ),
                      !1);
                }),
                (this.keywordsBlock = function (e) {
                  if ("keywordsContainers" in _this.config.keywordsBlock) {
                    var t = _this.config.keywordsBlock,
                      n = t.keywordsContainers,
                      i = t.keywords,
                      o = void 0 === i ? [] : i,
                      r = t.keywordsCountry,
                      s = void 0 === r ? [] : r,
                      a = "";
                    s.length > 0 &&
                      s.forEach(function (e) {
                        _this.countryKeywordsJson[e] &&
                          _this.countryKeywordsJson[e].forEach(function (e) {
                            return o.push(e.toLowerCase());
                          });
                      }),
                      _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.log(
                        "keywords for block: ",
                        o
                      ),
                      n.length > 0
                        ? n.forEach(function (e) {
                            a += document.querySelector(e)
                              ? document.querySelector(e).innerText + " "
                              : "";
                          })
                        : document.body.innerText,
                      e(_this.isMatchedWithRegex(a.toLowerCase(), o));
                  }
                }),
                (this.browsersBlock = function () {
                  if (_this.config.browsersBlock)
                    for (
                      var _i = 0, _a = _this.config.browsersBlock;
                      _i < _a.length;
                      _i++
                    ) {
                      var fnc = _a[_i];
                      try {
                        if (eval("(".concat(fnc, ")(navigator.userAgent)")))
                          return !0;
                      } catch (e) {
                        _Logger__WEBPACK_IMPORTED_MODULE_1__.ZP.error(e);
                      }
                    }
                  return !1;
                }),
                (this.dispose = function () {});
              var enableAdloox = config.enableAdloox,
                adlooxRequestRatio = config.adlooxRequestRatio,
                enableGptScript = config.enableGptScript;
              _Adloox__WEBPACK_IMPORTED_MODULE_3__.Z.init(
                enableAdloox,
                adlooxRequestRatio
              ),
                enableGptScript &&
                  (jsReadControlPromise
                    ? jsReadControlPromise.then(function () {
                        (0,
                        _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_4__.lN)(!0, GPT_URL);
                      })
                    : (0,
                      _anymind_core_src_utils_util__WEBPACK_IMPORTED_MODULE_4__.lN)(
                        !0,
                        GPT_URL
                      ));
            }
            return SiteSettings;
          })();
        __webpack_exports__.Z = SiteSettings;
      },
      809: function (e, t, n) {
        var i = n(644),
          o = n(878),
          r = function () {
            var e = this;
            (this.isCallable = !1),
              (this.config = null),
              (this.execute = function (t) {
                (e.config = t),
                  !e.isCallable && e.config
                    ? (i.ZP.callOutOfPageSlot(
                        e.config.adUnitPath,
                        e.config.setTargetingConfigs
                      ),
                      (e.isCallable = !0))
                    : o.ZP.error("adx inst must be called once");
              }),
              (this.dispose = function () {
                e.isCallable = !1;
              });
          };
        t.Z = new r();
      },
      361: function (e, t, n) {
        n.d(t, {
          h: function () {
            return r;
          },
        });
        var i = n(644),
          o = n(158),
          r = (function () {
            function e(e, t, n) {
              var i = this;
              (this.config = e),
                (this.AD_NAME = t),
                (this.instanceCount = n),
                (this.RENDERED = "rendered"),
                (this.UNRENDERED = "unrendered"),
                (this.NOT_DISPLAYED = "not-displayed"),
                (this.SHOW_ADVERTISEMENT = "show_advertisement"),
                (this.ENABLE_STICKY = "enable_sticky"),
                (this.ABSOLUTE = "absolute"),
                (this.STICKY = "sticky"),
                (this.ADVERTISEMENT_TEXT = "ADVERTISEMENT"),
                (this.slots = {}),
                (this.infinite = !1),
                (this.CLASS_NAME = ""),
                (this.execute = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var n = i._execute.apply(i, e),
                    r = i._findTarget(n);
                  if (null !== r) {
                    var s = r.map(function (e) {
                      var t = i._buildSlot(e, n);
                      return (
                        null !== t &&
                          (i.config.formatId
                            ? (i.slots[t].slot.id =
                                o.H$.sasDivIdPrefix + i.config.formatId)
                            : (i.slots[t].slot.id = t)),
                        { divId: t, target: e }
                      );
                    });
                    s.forEach(function (e) {
                      if (null !== e.divId)
                        if (i.config.formatId) {
                          var t = i.config.formatId;
                          o.ZP.render(t);
                        } else {
                          var n = i._getFetchAdConfig(
                            e.divId,
                            e.target,
                            i.infinite
                          );
                          i.gptFetchAd(n.gpt);
                        }
                    });
                  }
                }),
                (this.makeReplaceAdSenseParams = function () {
                  return {
                    adSenseReplacementClient: i.config.adSenseReplacementClient,
                    adSenseReplacementSlot: i.config.adSenseReplacementSlot,
                  };
                }),
                this._init(),
                this._addStyle();
            }
            return (
              (e.prototype.gptFetchAd = function (e) {
                i.ZP.fetchAd(e);
              }),
              e
            );
          })();
      },
      659: function (e, t, n) {
        var i,
          o = n(274),
          r = n(361),
          s = n(878),
          a = n(644),
          c =
            ((i = function (e, t) {
              return (
                (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                i(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          l = function () {
            return (
              (l =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              l.apply(this, arguments)
            );
          },
          _ = "2147483647",
          d = (function (e) {
            function t(t, n) {
              var i = e.call(this, t, "insert_ads", n) || this;
              return (
                (i.executeCallCount = 0),
                (i.requestAnimationFrameId = 0),
                (i.currentNumOfAds = 0),
                (i._execute = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    (i.infinite = t),
                    i.executeCallCount++,
                    (i.infinite = t),
                    (i.currentNumOfAds = 0),
                    e
                  );
                }),
                (i.choosePositions = function (e) {
                  var t = i.config.selector;
                  "Function" === i.config.targetType &&
                    (t = (0, o.K)(e).join(">"));
                  var n = i.config.targetFirstLevelOnly
                      ? i.config.selectors
                          .map(function (e) {
                            return "".concat(t, ">").concat(e);
                          })
                          .join(",")
                      : i.config.selectors.join(","),
                    r = Array.prototype.map.call(
                      e.querySelectorAll(n),
                      function (e) {
                        return e;
                      }
                    );
                  if (
                    i.config.exclusiveSelectors &&
                    0 < i.config.exclusiveSelectors.length
                  ) {
                    var s = i.config.exclusiveSelectors
                      .map(function (e) {
                        return "".concat(e, "+*");
                      })
                      .join(",");
                    r = r.filter(function (e) {
                      return !e.matches(s);
                    });
                  }
                  return r;
                }),
                (i.selectPositions = function (e, t) {
                  var n = window.innerHeight,
                    o = e.getBoundingClientRect(),
                    r = o.top + window.pageYOffset,
                    a = o.bottom + window.pageYOffset;
                  if (o.height < n)
                    return s.ZP.error("i flex: no enough area"), [];
                  var c = 0;
                  return t.filter(function (e) {
                    var t = e.getBoundingClientRect(),
                      o = t.top + window.pageYOffset,
                      l = t.bottom + window.pageYOffset;
                    return (
                      !(o - r < n / 2 || a - l < n / 2) &&
                      n * i.config.spacing < l - c &&
                      (s.ZP.log(
                        "i flex: spacing",
                        "config",
                        i.config.spacing,
                        "actually",
                        (l - c) / n
                      ),
                      (c = l),
                      !0)
                    );
                  });
                }),
                (i._findTarget = function (e) {
                  var t = i.config,
                    n = t.selector,
                    r = t.targetType,
                    a = t.isFlexible,
                    c = (0, o.U9)(e, n, r);
                  if (null == c) return null;
                  var l = [],
                    _ = [];
                  if (
                    (a
                      ? (l.push.apply(l, i.choosePositions(c)),
                        _.push.apply(_, i.selectPositions(c, l)))
                      : (l.push(c), _.push(c)),
                    s.ZP.enableLog)
                  )
                    for (var d = 0; d < l.length; d++)
                      l[d].insertAdjacentHTML(
                        "beforebegin",
                        '<div class="'
                          .concat(i.AD_NAME, '-debug"><p>')
                          .concat(d, "</p></div>")
                      );
                  return _.length <= 0
                    ? (s.ZP.error("i flex: no position"), null)
                    : _;
                }),
                (i._buildSlot = function (e, t) {
                  var n = i.config,
                    o = n.showAdvertisement,
                    r = n.customShowAdsText,
                    s = n.insertPosition,
                    a = n.isFlexible,
                    c = n.divIDs;
                  if (
                    (i.currentNumOfAds++, i.currentNumOfAds > i.config.numOfAds)
                  )
                    return null;
                  var _ =
                      c[i.currentNumOfAds - 1] +
                      (i.infinite ? "-".concat(i.executeCallCount) : ""),
                    d = document.createElement("div"),
                    u = document.createElement("p"),
                    p = document.createTextNode(r || i.ADVERTISEMENT_TEXT);
                  u.appendChild(p);
                  var f = document.createElement("div");
                  f.classList.add("ats-slot"),
                    d.appendChild(u),
                    d.appendChild(f);
                  var g = document.createElement("div"),
                    h = "".concat(_, "-wrapper");
                  (g.id = h),
                    g.classList.add(i.AD_NAME, i.CLASS_NAME),
                    o && g.classList.add(i.SHOW_ADVERTISEMENT),
                    g.appendChild(d);
                  var b = a ? "beforebegin" : s;
                  return (
                    e.insertAdjacentElement(b, g),
                    (i.slots[_] = l(
                      {
                        baseElement: t,
                        adUnitPath: i.config.adUnitPath,
                        divId: _,
                        slotWrapper: g,
                        slot: f,
                        isGPTRefreshCalled: !1,
                        shouldStopRefresh: !1,
                      },
                      i.makeReplaceAdSenseParams()
                    )),
                    _
                  );
                }),
                (i._getFetchAdConfig = function (e, t, n) {
                  var o = i.config,
                    r = o.setCollapseEmptyDiv,
                    s = o.sizeMappingGroup,
                    a = o.setTargetingConfigs,
                    c = o.enableLazyLoad,
                    l = o.lazyLoadConfig,
                    _ = o.lazyLoadMode,
                    d = o.enableSetForceSafeFrameForSlot,
                    u = i.slots[e];
                  return {
                    gpt: {
                      adUnitPath: u.adUnitPath,
                      sizes: [[300, 250]],
                      divId: u.divId,
                      setCollapseEmptyDiv: r,
                      sizeMappingGroup: s,
                      setTargetingConfigs: a,
                      onAfterGptRendered: i._onAfterGptRendered(e),
                      onAfterGptFetched: i._onAfterGptFetched(e),
                      enableSetForceSafeFrameForSlot: d,
                      enableLazyLoad: c,
                      lazyLoadConfig: l,
                      lazyLoadMode: _,
                      infinite: n,
                    },
                  };
                }),
                (i._onAfterGptFetched = function (e) {
                  return function (t) {
                    var n = i.slots[e];
                    (n.googletagSlot = t),
                      (n.dispose = function () {
                        (n.shouldStopRefresh = !0),
                          googletag.destroySlots([t]),
                          n.slotWrapper.remove();
                      });
                  };
                }),
                (i._onAfterGptRendered = function (e) {
                  return function (t) {
                    var n = i.config,
                      o = n.isFlexible,
                      r = n.isSticky,
                      s = n.refreshInterval,
                      c = n.refreshLimit,
                      l = n.inViewRate,
                      _ = i.slots[e];
                    s > 0 &&
                      !1 === _.isGPTRefreshCalled &&
                      a.ZP.intervalRefreshAds([t.slot], s, c, e, i.slots, l),
                      t.slot === _.googletagSlot &&
                        (t.isEmpty
                          ? _.slotWrapper.classList.add(i.UNRENDERED)
                          : ((_.eventSize = Array.isArray(t.size)
                              ? [t.size[0], t.size[1]]
                              : [0, 0]),
                            _.slotWrapper.classList.add(i.RENDERED),
                            !o &&
                              r &&
                              (i.initializeStyle(_.slotWrapper),
                              i.handleSticky(_))));
                  };
                }),
                (i.handleSticky = function (e) {
                  if (e.baseElement) {
                    var t,
                      n = e.slotWrapper,
                      r = e.eventSize,
                      a = i.config,
                      c = a.stickyStopTarget,
                      l = a.stickyStopTargetType,
                      _ = a.stickySizes,
                      d = a.overrideMargin,
                      u = void 0 !== d && d,
                      p = a.overrideMarginBottom,
                      f = void 0 === p ? 0 : p,
                      g = a.overrideMarginTop,
                      h = void 0 === g ? 0 : g,
                      b = (e.eventSize || [0])[0],
                      E = n.children[0],
                      m = window.getComputedStyle(E),
                      v = n.offsetHeight,
                      y = m.marginTop,
                      P = m.marginBottom,
                      A = m.marginLeft,
                      S = parseFloat(y) || 0,
                      D = parseFloat(P) || 0,
                      M = parseFloat(A) || 0,
                      w = u ? h : parseFloat(y) || 0,
                      O = u ? f : parseFloat(P) || 0,
                      I = (function () {
                        var e = !1;
                        if (_ && _.length > 0)
                          for (var t = 0; t < _.length; t++) {
                            var n = _[t];
                            if (r && r[0] === n[0] && r[1] === n[1]) {
                              e = !0;
                              break;
                            }
                          }
                        else e = !0;
                        return e;
                      })();
                    if (
                      (I &&
                        ((n.style.height = "".concat(v, "px")),
                        (n.style.marginTop = "".concat(S, "px")),
                        (n.style.marginBottom = "".concat(D, "px"))),
                      c && !t)
                    )
                      try {
                        t = (0, o.U9)(e.baseElement, c, l);
                      } catch (e) {
                        s.ZP.error(e);
                      }
                    var T = !1,
                      C = function () {
                        T ||
                          ((T = !0),
                          I
                            ? (e.requestAnimationFrameId =
                                window.requestAnimationFrame(function () {
                                  i.handleScroll(b, M, w, O, v, e, E, t),
                                    (T = !1);
                                }))
                            : ((T = !0),
                              e.requestAnimationFrameId &&
                                window.cancelAnimationFrame(
                                  e.requestAnimationFrameId
                                )));
                      };
                    n.classList.contains(i.ENABLE_STICKY) ||
                      (window.addEventListener("scroll", C),
                      (e.removeScrollEventListener = function () {
                        window.cancelAnimationFrame(i.requestAnimationFrameId),
                          window.removeEventListener("scroll", C);
                      }),
                      n.classList.add(i.ENABLE_STICKY));
                  }
                }),
                (i.handleScroll = function (e, t, n, o, r, s, a, c) {
                  var l = s.slotWrapper,
                    _ = i.config,
                    d = _.overrideMargin,
                    u = void 0 !== d && d,
                    p = _.overrideMarginBottom,
                    f = void 0 === p ? 0 : p,
                    g = _.overrideMarginTop,
                    h = void 0 === g ? 0 : g;
                  l.classList.remove(i.STICKY, i.ABSOLUTE),
                    (a.style.top = ""),
                    (a.style.marginLeft = "");
                  var b = (a.offsetWidth - e) / 2 + t,
                    E = c
                      ? c.getBoundingClientRect().top
                      : document.body.getBoundingClientRect().bottom,
                    m = c ? c.offsetTop : E + window.pageYOffset,
                    v = l.getBoundingClientRect(),
                    y = 0 < v.top - n,
                    P = E - r - n - o < 0,
                    A = v.top - n <= 0,
                    S = m - r - n - o;
                  y
                    ? (l.classList.remove(i.ABSOLUTE, i.STICKY),
                      (a.style.top = ""),
                      (a.style.marginLeft = ""),
                      u &&
                        ((a.style.marginTop = ""), (a.style.marginBottom = "")))
                    : P
                    ? (l.classList.remove(i.STICKY),
                      l.classList.add(i.ABSOLUTE),
                      (a.style.top = "".concat(S, "px")),
                      (a.style.marginLeft = "".concat(b, "px")))
                    : A &&
                      (l.classList.remove(i.ABSOLUTE),
                      l.classList.add(i.STICKY),
                      (a.style.top = ""),
                      u &&
                        ((a.style.marginTop = "".concat(h, "px")),
                        (a.style.marginBottom = "".concat(f, "px"))),
                      (a.style.marginLeft = "".concat(b, "px")));
                }),
                (i.initializeStyle = function (e) {
                  var t = e.children[0];
                  e.classList.remove(i.ENABLE_STICKY),
                    e.classList.remove(i.ABSOLUTE),
                    e.classList.remove(i.STICKY),
                    (e.style.height = ""),
                    (t.style.marginLeft = ""),
                    (t.style.marginTop = ""),
                    (t.style.marginBottom = "");
                }),
                (i.dispose = function () {
                  try {
                    for (var e in (s.ZP.log("i: dispose"), i.slots)) {
                      var t = i.slots[e];
                      t.removeScrollEventListener &&
                        t.removeScrollEventListener(),
                        t.dispose && t.dispose(),
                        delete i.slots[e];
                    }
                  } catch (e) {
                    s.ZP.error(e);
                  }
                }),
                i
              );
            }
            return (
              c(t, e),
              (t.prototype._init = function () {
                this.CLASS_NAME = ""
                  .concat(this.AD_NAME, "-")
                  .concat(this.instanceCount);
              }),
              (t.prototype._addStyle = function () {
                (0, o.cu)(
                  [
                    "div."
                      .concat(this.AD_NAME, ".")
                      .concat(this.UNRENDERED, ","),
                    "div."
                      .concat(this.AD_NAME, ".")
                      .concat(this.UNRENDERED, " > div,"),
                    "div."
                      .concat(this.AD_NAME, ".")
                      .concat(this.UNRENDERED, " > div > div,"),
                    "div."
                      .concat(this.AD_NAME, ".")
                      .concat(this.UNRENDERED, " > div > div > div,"),
                    "div."
                      .concat(this.AD_NAME, ".")
                      .concat(this.UNRENDERED, " > div > div > div > iframe {"),
                    "height: 1px;",
                    "}",
                    "div.".concat(this.AD_NAME, ","),
                    "div.".concat(this.AD_NAME, " > div,"),
                    "div.".concat(this.AD_NAME, " > div > div,"),
                    "div.".concat(this.AD_NAME, " > div > div > div,"),
                    "div.".concat(
                      this.AD_NAME,
                      " > div > div > div > iframe {"
                    ),
                    "text-align: center;",
                    "}",
                    "div."
                      .concat(this.AD_NAME, ".")
                      .concat(this.RENDERED, ".")
                      .concat(this.SHOW_ADVERTISEMENT, " > div > p {"),
                    "color: #8a9299;",
                    "font-size: 10px;",
                    "margin-bottom: 3px;",
                    "margin-top: 3px;",
                    "text-transform: uppercase;",
                    "text-align: center;",
                    "}",
                    "div."
                      .concat(this.AD_NAME, ":not(.")
                      .concat(this.RENDERED, ") > div > p,"),
                    "div."
                      .concat(this.AD_NAME, ":not(.")
                      .concat(this.SHOW_ADVERTISEMENT, ") > div > p {"),
                    "display: none;",
                    "}",
                    "div."
                      .concat(this.AD_NAME, ".")
                      .concat(this.RENDERED, ".")
                      .concat(this.ENABLE_STICKY, ".")
                      .concat(this.ABSOLUTE, " > div {"),
                    "position: absolute;",
                    "z-index: ".concat(_, ";"),
                    "}",
                    "div."
                      .concat(this.AD_NAME, ".")
                      .concat(this.RENDERED, ".")
                      .concat(this.ENABLE_STICKY, ".")
                      .concat(this.STICKY, " > div {"),
                    "position: fixed;",
                    "z-index: ".concat(_, ";"),
                    "top: 0px;",
                    "}",
                  ].join("") +
                    (s.ZP.enableLog
                      ? [
                          "div.".concat(this.AD_NAME, "-debug {"),
                          "height: 1px;",
                          "margin: 0 auto;",
                          "padding: 0;",
                          "position: relative;",
                          "}",
                          "div.".concat(this.AD_NAME, "-debug > p {"),
                          "background-color: rgba(225, 0, 80, 0.5);",
                          "color: #212121;",
                          "font-size: 7px;",
                          "height: 16px;",
                          "margin: 0 auto;",
                          "text-align: center;",
                          "top: 0;",
                          "width: 16px;",
                          "}",
                        ].join("")
                      : ""),
                  this.AD_NAME
                ),
                  (0, o.cu)(
                    [
                      "div."
                        .concat(this.CLASS_NAME, ".")
                        .concat(this.AD_NAME, " > div {"),
                      this.config.customCss,
                      "}",
                      "div."
                        .concat(this.CLASS_NAME, ".")
                        .concat(this.AD_NAME, ".")
                        .concat(this.RENDERED, ".")
                        .concat(this.SHOW_ADVERTISEMENT, " > div {"),
                      this.config.customCssForShowAdvertisement,
                      "}",
                    ].join("") +
                      (this.config.isSticky
                        ? [
                            "div."
                              .concat(this.CLASS_NAME, ".")
                              .concat(this.AD_NAME, ".")
                              .concat(this.RENDERED, ".")
                              .concat(this.ENABLE_STICKY, ".")
                              .concat(this.ABSOLUTE, " > div {"),
                            "background-color: inherit;",
                            "}",
                            "div."
                              .concat(this.CLASS_NAME, ".")
                              .concat(this.AD_NAME, ".")
                              .concat(this.RENDERED, ".")
                              .concat(this.ENABLE_STICKY, ".")
                              .concat(this.STICKY, " > div {"),
                            "top: 0px;",
                            "background-color: inherit;",
                            "}",
                          ].join("")
                        : ""),
                    this.CLASS_NAME
                  );
              }),
              t
            );
          })(r.h);
        t.Z = d;
      },
      585: function (e, t, n) {
        var i,
          o = n(274),
          r = n(644),
          s = n(878),
          a = n(361),
          c =
            ((i = function (e, t) {
              return (
                (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                i(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          l = (function (e) {
            function t(t, n, i) {
              var a = e.call(this, t, "ats-interstitial", n) || this;
              return (
                (a.resolve = i),
                (a._execute = function () {}),
                (a._findTarget = function () {
                  return [document.body];
                }),
                (a._buildSlot = function (e) {
                  var t = a.config.divIDs[0];
                  return (
                    (a.slots[t] = {
                      slotWrapper: a.createDiv("".concat(a.AD_NAME, "-root")),
                      slot: document.createElement("div"),
                      divId: t,
                      adUnitPath: a.config.adUnitPath,
                      isGPTRefreshCalled: !1,
                      shouldStopRefresh: !1,
                    }),
                    (a.backdrop = a.createDiv(
                      "".concat(a.AD_NAME, "-backdrop")
                    )),
                    (a.container = a.createDiv(
                      "".concat(a.AD_NAME, "-container")
                    )),
                    (a.paper = a.createDiv("".concat(a.AD_NAME, "-paper"))),
                    a.paper.appendChild(a.slots[t].slot),
                    a.container.appendChild(a.paper),
                    a.slots[t].slotWrapper.appendChild(a.backdrop),
                    a.slots[t].slotWrapper.appendChild(a.container),
                    a.slots[t].slotWrapper.appendChild(a.closeButton),
                    a.setCustomStyle(),
                    e.insertAdjacentElement(
                      "beforeend",
                      a.slots[t].slotWrapper
                    ),
                    t
                  );
                }),
                (a._getFetchAdConfig = function (e) {
                  var t = a.config;
                  return {
                    gpt: {
                      adUnitPath: t.adUnitPath,
                      sizes: [[300, 250]],
                      divId: e,
                      sizeMappingGroup: t.sizeMappingGroup,
                      setCollapseEmptyDiv: t.setCollapseEmptyDiv,
                      setTargetingConfigs: t.setTargetingConfigs,
                      enableSetForceSafeFrameForSlot:
                        t.enableSetForceSafeFrameForSlot,
                      onAfterGptRendered: a._onAfterGptRendered(e),
                      onAfterGptFetched: a._onAfterGptFetched(e),
                      infinite: !1,
                    },
                  };
                }),
                (a._onAfterGptFetched = function (e) {
                  return function (t) {
                    (a.dispose = function () {
                      try {
                        a.close(t, e);
                      } catch (e) {
                        s.ZP.error(e);
                      }
                    }),
                      (a.closeButton.onclick = function () {
                        return a.close(t, e);
                      });
                  };
                }),
                (a._onAfterGptRendered = function (e) {
                  return function (t) {
                    try {
                      if (t.isEmpty) throw new Error(t.slot + " isEmpty");
                      var n = Array.isArray(t.size) ? t.size : [0, 0],
                        i = n[0],
                        o = n[1];
                      a.show(i, o, e);
                    } catch (e) {
                      a.dispose();
                    }
                  };
                }),
                (a.setCloseButtonPosition = function () {
                  var e = "#".concat(
                    a.AD_NAME,
                    "-button {\n      top: 112px;\n      bottom: auto!important;\n      right: 56px;\n    }"
                  );
                  switch (a.config.closeButtonPosition) {
                    case "topleft":
                      e = "#".concat(
                        a.AD_NAME,
                        "-button {\n          top: 112px;\n          bottom: auto!important;\n          left: 56px;\n        }"
                      );
                      break;
                    case "topright":
                      e = "#".concat(
                        a.AD_NAME,
                        "-button {\n          top: 112px;\n          bottom: auto!important;\n          right: 56px;\n        }"
                      );
                      break;
                    case "topmiddle":
                      e = "#".concat(
                        a.AD_NAME,
                        "-button {\n          top: 112px;\n          bottom: auto!important;\n          left: 50%;\n          transform: translateX(-50%);\n          padding: 8px 32px;\n        }"
                      );
                      break;
                    case "bottomleft":
                      e = "#".concat(
                        a.AD_NAME,
                        "-button {\n          bottom: 112px;\n          top: auto!important;\n          left: 56px;\n        }"
                      );
                      break;
                    case "bottomright":
                      e = "#".concat(
                        a.AD_NAME,
                        "-button {\n          bottom: 112px;\n          top: auto!important;\n          right: 56px;\n        }"
                      );
                      break;
                    case "bottommiddle":
                      e = "#".concat(
                        a.AD_NAME,
                        "-button {\n          bottom: 112px;\n          top: auto!important;\n          left: 50%;\n          transform: translateX(-50%);\n          padding: 8px 32px;\n        }"
                      );
                  }
                  (0, o.cu)(e, "".concat(a.AD_NAME, "-override-position"));
                }),
                (a.setCustomStyle = function () {
                  a.config.useCloseButtonXIcon &&
                    (0, o.cu)(
                      "#"
                        .concat(
                          a.AD_NAME,
                          "-button::before {content: '×';font-size: inherit;"
                        )
                        .concat(
                          a.config.closeButtonText ? "margin-right: 8px;" : "",
                          "color: inherit}"
                        ),
                      "".concat(a.AD_NAME, "-close-button-x-icon")
                    ),
                    a.setCloseButtonPosition(),
                    a.config.useCustomCss &&
                      a.config.customCss &&
                      (0, o.cu)(
                        a.config.customCss,
                        "".concat(a.AD_NAME, "-override")
                      );
                }),
                (a.createDiv = function (e) {
                  var t = document.createElement("div");
                  return (t.id = e), t;
                }),
                (a.createCloseButton = function (e, t) {
                  var n = document.createElement("button"),
                    i = document.createTextNode(t);
                  return n.appendChild(i), (n.id = e), n;
                }),
                (a.show = function (e, t, n) {
                  (a.slots[n].slotWrapper.style.visibility = "visible"),
                    (a.slots[n].slotWrapper.style.opacity = "1"),
                    (a.paper.style.width = "".concat(e, "px")),
                    (a.paper.style.height = "".concat(t, "px")),
                    (a.closeButton.style.display = "none");
                  var i = a.slots[n].slot.querySelector("iframe");
                  i &&
                    i.addEventListener("load", function () {
                      var e;
                      setTimeout(
                        function () {
                          a.closeButton.style.display = "inline-block";
                        },
                        null !==
                          (e =
                            window.anymindTS_TIME_HIDE_INTERSTITIAL_CLOSE_BUTTON) &&
                          void 0 !== e
                          ? e
                          : 300
                      );
                    });
                }),
                (a.close = function (e, t) {
                  (a.slots[t].slotWrapper.style.opacity = "0"),
                    (0, r.tY)(function () {
                      e &&
                        (googletag.destroySlots([e]),
                        document.body.removeChild(a.slots[t].slotWrapper));
                    })(),
                    a.resolve && (s.ZP.log("is: close"), a.resolve());
                }),
                (a.dispose = function () {}),
                (a.backdrop = a.createDiv("".concat(a.AD_NAME, "-backdrop"))),
                (a.container = a.createDiv("".concat(a.AD_NAME, "-container"))),
                (a.paper = a.createDiv("".concat(a.AD_NAME, "-paper"))),
                (a.closeButton = a.createCloseButton(
                  "".concat(a.AD_NAME, "-button"),
                  a.config.closeButtonText || ""
                )),
                a
              );
            }
            return (
              c(t, e),
              (t.prototype._init = function () {}),
              (t.prototype._addStyle = function () {
                (0, o.cu)(
                  "\n    #"
                    .concat(
                      this.AD_NAME,
                      "-root {\n        visibility: hidden;\n        opacity: 0;\n        will-change: opacity;\n        transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        box-sizing: border-box;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 1500;\n        position: fixed;\n    }\n    #"
                    )
                    .concat(
                      this.AD_NAME,
                      "-backdrop {\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: -1;\n        position: fixed;\n        touch-action: none;\n        background-color: rgba(0, 0, 0, 0.5);\n        -webkit-tap-highlight-color: transparent;\n    }\n    #"
                    )
                    .concat(
                      this.AD_NAME,
                      "-container {\n        height: 100%;\n        outline: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    #"
                    )
                    .concat(
                      this.AD_NAME,
                      "-paper {\n        flex: 0 1 auto;\n        max-width: 1000px;\n        max-height: calc(100% - 96px);\n        margin: 0;\n        display: flex;\n        position: relative;\n        overflow-y: auto;\n        flex-direction: column;\n        box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n        border-radius: 4px;\n        background-color: rgba(50, 50, 50, 0.4);\n        box-sizing: inherit;\n    }\n    #"
                    )
                    .concat(
                      this.AD_NAME,
                      "-button {\n        position: fixed;\n        top: 112px;\n        right: 56px;\n        color: "
                    )
                    .concat(
                      this.config.closeButtonTextColor || "#fff",
                      ";\n        background-color: "
                    )
                    .concat(
                      this.config.closeButtonBackgroundColor || "#000000",
                      ";\n        padding: 8px 16px;\n        font-size: 1rem;\n        min-width: 64px;\n        box-sizing: border-box;\n        min-height: 36px;\n        font-weight: "
                    )
                    .concat(
                      this.config.closeButtonBoldText ? 600 : 500,
                      ";\n        line-height: 1.5;\n        border: none;\n        border-radius: 8px;\n        letter-spacing: 0.02857em;\n        white-space: nowrap;\n    }\n    #"
                    )
                    .concat(
                      this.AD_NAME,
                      "-button:focus {\n        outline: none !important;\n    }\n"
                    ),
                  this.AD_NAME
                );
              }),
              t
            );
          })(a.h);
        t.Z = l;
      },
      570: function (e, t, n) {
        var i,
          o = n(274),
          r = n(644),
          s = n(878),
          a = n(361),
          c =
            ((i = function (e, t) {
              return (
                (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                i(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          l = function () {
            return (
              (l =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              l.apply(this, arguments)
            );
          },
          _ = (function (e) {
            function t(t, n) {
              var i =
                e.call(this, t, "ats-overlay-".concat(t.anchorPosition), n) ||
                this;
              return (
                (i._execute = function () {}),
                (i._findTarget = function () {
                  return [document.body];
                }),
                (i._buildSlot = function (e) {
                  var t = i.config.divIDs[0];
                  (i.slots[t] = l(
                    {
                      slotWrapper: document.createElement("div"),
                      slot: document.createElement("div"),
                      divId: t,
                      adUnitPath: i.config.adUnitPath,
                      isGPTRefreshCalled: !1,
                      shouldStopRefresh: !1,
                    },
                    i.makeReplaceAdSenseParams()
                  )),
                    i.slots[t].slotWrapper.classList.add(
                      "".concat(i.AD_NAME, "-wrapper-").concat(i.UNRENDERED)
                    );
                  var n = document.createElement("div");
                  n.className = "".concat(i.AD_NAME, "-padding-block-top");
                  var o = document.createElement("div");
                  return (
                    (o.className = "".concat(
                      i.AD_NAME,
                      "-padding-block-bottom"
                    )),
                    i.slots[t].slotWrapper.appendChild(n),
                    i.config.useCloseButton
                      ? "bottom" === i.config.anchorPosition
                        ? (o.classList.add(
                            "".concat(i.AD_NAME, "-").concat(i.NOT_DISPLAYED)
                          ),
                          i.slots[t].slotWrapper.appendChild(i.closeButton),
                          i.slots[t].slotWrapper.appendChild(i.slots[t].slot),
                          i.slots[t].slotWrapper.appendChild(o))
                        : (n.classList.add(
                            "".concat(i.AD_NAME, "-").concat(i.NOT_DISPLAYED)
                          ),
                          i.slots[t].slotWrapper.appendChild(i.slots[t].slot),
                          i.slots[t].slotWrapper.appendChild(o),
                          i.slots[t].slotWrapper.appendChild(i.closeButton))
                      : (o.classList.add(
                          "".concat(i.AD_NAME, "-").concat(i.NOT_DISPLAYED)
                        ),
                        n.classList.add(
                          "".concat(i.AD_NAME, "-").concat(i.NOT_DISPLAYED)
                        ),
                        i.slots[t].slotWrapper.appendChild(i.slots[t].slot),
                        i.slots[t].slotWrapper.appendChild(o)),
                    e.insertAdjacentElement(
                      "afterbegin",
                      i.slots[t].slotWrapper
                    ),
                    t
                  );
                }),
                (i.onClose = function (e, t) {
                  return function () {
                    e && googletag.destroySlots([e]),
                      (i.slots[t].shouldStopRefresh = !0),
                      i.slots[t].slotWrapper.remove();
                  };
                }),
                (i._getFetchAdConfig = function (e) {
                  var t = i.config,
                    n = t.adUnitPath,
                    o = t.sizeMappingGroup,
                    r = t.setCollapseEmptyDiv,
                    s = t.setTargetingConfigs;
                  return {
                    gpt: {
                      adUnitPath: n,
                      sizes: [[300, 250]],
                      divId: e,
                      enableSetForceSafeFrameForSlot:
                        t.enableSetForceSafeFrameForSlot,
                      sizeMappingGroup: o,
                      setCollapseEmptyDiv: r,
                      setTargetingConfigs: s,
                      onAfterGptRendered: i._onAfterGptRendered(e),
                      onAfterGptFetched: i._onAfterGptFetched(e),
                      infinite: !1,
                    },
                  };
                }),
                (i._onAfterGptFetched = function (e) {
                  return function (t) {
                    (i.closeButton.onclick = i.onClose(t, e)),
                      (i.dispose = function () {
                        try {
                          i.onClose(t, e)();
                        } catch (e) {
                          s.ZP.error(e);
                        }
                      });
                  };
                }),
                (i._onAfterGptRendered = function (e) {
                  return function (t) {
                    var n = i.slots[e];
                    if (
                      (i.config.refreshInterval > 0 &&
                        !1 === n.isGPTRefreshCalled &&
                        r.ZP.intervalRefreshAds(
                          [t.slot],
                          i.config.refreshInterval,
                          i.config.refreshLimit,
                          e,
                          i.slots
                        ),
                      t.size)
                    ) {
                      n.slotWrapper.classList.add(
                        "".concat(i.AD_NAME, "-wrapper-").concat(i.RENDERED)
                      ),
                        n.slotWrapper.classList.remove(
                          "".concat(i.AD_NAME, "-wrapper-").concat(i.UNRENDERED)
                        ),
                        (n.eventSize = Array.isArray(t.size)
                          ? [t.size[0], t.size[1]]
                          : [0, 0]);
                      var o = t.size.join("x");
                      "0x0" !== o &&
                        "1x1" !== o &&
                        ((n.slot.style.width = t.size[0] + "px"),
                        (n.slot.style.height = t.size[1] + "px"));
                    }
                  };
                }),
                (i.dispose = function () {
                  s.ZP.log("o: dispose. (Not overwritten yet)");
                }),
                (i.closeButton = document.createElement("button")),
                i.closeButton.classList.add(
                  "".concat(i.AD_NAME, "-close-button")
                ),
                i
              );
            }
            return (
              c(t, e),
              (t.prototype._init = function () {}),
              (t.prototype._addStyle = function () {
                var e =
                    "\n        display: block !important;\n        height: auto !important;\n        visibility: visible;\n        opacity: 1;\n        will-change: opacity;\n        width: 100%;\n        position: fixed;\n        left: 0;\n        right: 0;\n        "
                      .concat(
                        this.config.anchorPosition,
                        ": 0;\n        box-sizing: border-box;\n        z-index: "
                      )
                      .concat("2147483647", ";\n        box-shadow: ")
                      .concat(
                        "bottom" === this.config.anchorPosition
                          ? "rgba(0, 0, 0, 0.4) 0px -4px 6px -3px"
                          : "rgba(0, 0, 0, 0.4) -2px 2px 6px -3px",
                        ";\n        background: "
                      )
                      .concat(
                        this.config.useCloseButton
                          ? "#fff"
                          : this.config.backgroundCss || "rgba(0,0,0,0.8)",
                        ";\n    "
                      ),
                  t =
                    "\n        display: block !important;\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' fill='black' fill-opacity='0.6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");\n        background-size: 13px 13px;\n        background-position: center;\n        background-color: #fff;\n        background-repeat: no-repeat;\n        border: none;\n        height: 28px;\n        width: 28px;\n        padding: 0;\n        margin: 0;\n        position: absolute;\n        right: 0;\n    " +
                    ("top" === this.config.anchorPosition
                      ? "\n        bottom: -27px;\n        box-shadow: -1px 1px 1px 0 rgba(0,0,0,0.1);\n        border-radius: 0 0 0 12px;\n    "
                      : "\n        top: -27px;\n        box-shadow: 0 -1px 1px 0 rgba(0,0,0,0.2);\n        border-radius: 12px 0 0 0;\n    "),
                  n =
                    '\n        position: absolute;\n        content: "";\n    ' +
                    ("top" === this.config.anchorPosition
                      ? "\n        top: 0px;\n        right: 0;\n        left: -20px;\n        bottom: -20px;\n    "
                      : "\n        top: -20px;\n        right: 0;\n        left: -20px;\n        bottom: 0;\n    ");
                (0, o.cu)(
                  "\n      ."
                    .concat(this.AD_NAME, "-wrapper-")
                    .concat(
                      this.UNRENDERED,
                      " {\n        height: 1px;\n        visibility: hidden;\n        opacity: 0;\n        will-change: opacity;\n        transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        box-sizing: border-box;\n      }\n      \n      ."
                    )
                    .concat(this.AD_NAME, "-wrapper-")
                    .concat(this.RENDERED, " {\n        ")
                    .concat(e, "\n      }\n      \n      \n      .")
                    .concat(this.AD_NAME, "-wrapper-")
                    .concat(this.RENDERED, " > div,\n      .")
                    .concat(this.AD_NAME, "-wrapper-")
                    .concat(this.RENDERED, " > div > div,\n      .")
                    .concat(this.AD_NAME, "-wrapper-")
                    .concat(
                      this.RENDERED,
                      " > div > div > iframe {\n        margin: 0 auto;\n        text-align: center;\n      }\n    \n      ."
                    )
                    .concat(this.AD_NAME, "-close-button::before {\n        ")
                    .concat(n, "\n      }\n      \n      .")
                    .concat(this.AD_NAME, "-close-button {\n        ")
                    .concat(t, "\n      }\n      \n      .")
                    .concat(this.AD_NAME, "-close-button:focus {\n        ")
                    .concat("outline: none;", "\n      }\n      \n      .")
                    .concat(this.AD_NAME, "-padding-block-top {\n        ")
                    .concat("height: 4px;", "\n      }\n      \n      .")
                    .concat(this.AD_NAME, "-padding-block-bottom {\n        ")
                    .concat("height: 4px;", "\n      }\n      \n      .")
                    .concat(this.AD_NAME, "-")
                    .concat(
                      this.NOT_DISPLAYED,
                      " {\n        display: none;\n      }\n    "
                    ),
                  this.AD_NAME
                );
              }),
              t
            );
          })(a.h);
        t.Z = _;
      },
      284: function (e, t, n) {
        var i,
          o = n(274),
          r = n(361),
          s = n(878),
          a = n(644),
          c =
            ((i = function (e, t) {
              return (
                (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                i(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          l = function () {
            return (
              (l =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              l.apply(this, arguments)
            );
          },
          _ = (function (e) {
            function t(t, n) {
              var i = e.call(this, t, "ats-parallax", n) || this;
              return (
                (i.executeCount = 0),
                (i._execute = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    (i.infinite = t),
                    i.executeCount++,
                    e
                  );
                }),
                (i._findTarget = function (e) {
                  var t = i.config,
                    n = t.selector,
                    r = t.targetType,
                    s = (0, o.U9)(e, n, r);
                  return null == s ? null : [s];
                }),
                (i._buildSlot = function (e, t) {
                  var n = i.config,
                    o = n.divIDs,
                    r = n.insertPosition,
                    s = n.centerAd,
                    a = n.headerText,
                    c = n.footerText,
                    _ = o[0] + i.executeCountSuffix(),
                    d = document.createElement("div"),
                    u = document.createElement("div"),
                    p = document.createElement("div"),
                    f = document.createElement("div"),
                    g = document.createElement("div"),
                    h = document.createElement("div"),
                    b = document.createElement("div"),
                    E = document.createElement("div");
                  if (
                    (d.append(u),
                    u.append(p),
                    u.append(g),
                    u.append(f),
                    g.append(h),
                    h.append(b),
                    b.append(E),
                    d.classList.add("".concat(i.AD_NAME, "-container")),
                    u.classList.add("".concat(i.AD_NAME, "-clipper")),
                    p.classList.add("".concat(i.AD_NAME, "-header")),
                    f.classList.add("".concat(i.AD_NAME, "-footer")),
                    g.classList.add("".concat(i.AD_NAME, "-position-relative")),
                    s
                      ? (b.classList.add(
                          "".concat(i.AD_NAME, "-ad-wrapper-center")
                        ),
                        h.classList.add(
                          "".concat(i.AD_NAME, "-content-center")
                        ))
                      : (b.classList.add("".concat(i.AD_NAME, "-ad-wrapper")),
                        h.classList.add("".concat(i.AD_NAME, "-content"))),
                    a)
                  ) {
                    var m = document.createTextNode(a);
                    p.appendChild(m);
                  } else
                    p.classList.add(
                      "".concat(i.AD_NAME, "-").concat(i.NOT_DISPLAYED)
                    );
                  if (c) {
                    var v = document.createTextNode(c);
                    f.appendChild(v);
                  } else
                    f.classList.add(
                      "".concat(i.AD_NAME, "-").concat(i.NOT_DISPLAYED)
                    );
                  return (
                    d.classList.add(
                      "".concat(i.AD_NAME, "-").concat(i.NOT_DISPLAYED)
                    ),
                    e.insertAdjacentElement(r, d),
                    (i.slots[_] = l(
                      {
                        baseElement: t,
                        slotWrapper: d,
                        adUnitPath: i.config.adUnitPath,
                        divId: _,
                        slot: E,
                        isGPTRefreshCalled: !1,
                        shouldStopRefresh: !1,
                      },
                      i.makeReplaceAdSenseParams()
                    )),
                    _
                  );
                }),
                (i._getFetchAdConfig = function (e, t, n) {
                  var o = i.config,
                    r = o.setCollapseEmptyDiv,
                    s = o.sizeMappingGroup,
                    a = o.setTargetingConfigs,
                    c = o.enableSetForceSafeFrameForSlot,
                    l = i.slots[e];
                  return {
                    gpt: {
                      adUnitPath: l.adUnitPath,
                      sizes: [[300, 250]],
                      divId: l.divId,
                      setCollapseEmptyDiv: r,
                      sizeMappingGroup: s,
                      setTargetingConfigs: a,
                      enableSetForceSafeFrameForSlot: c,
                      onAfterGptRendered: i._onAfterGptRendered(e),
                      onAfterGptFetched: i._onAfterGptFetched(e),
                      infinite: n,
                    },
                  };
                }),
                (i._onAfterGptFetched = function (e) {
                  return function (t) {
                    var n = i.slots[e];
                    (n.googletagSlot = t),
                      (n.dispose = function () {
                        (n.shouldStopRefresh = !0),
                          googletag.destroySlots([t]),
                          n.slotWrapper.remove();
                      });
                  };
                }),
                (i._onAfterGptRendered = function (e) {
                  return function (t) {
                    var n = i.config,
                      o = n.refreshInterval,
                      r = n.refreshLimit,
                      s = n.inViewRate,
                      c = i.slots[e];
                    o > 0 &&
                      !1 === c.isGPTRefreshCalled &&
                      a.ZP.intervalRefreshAds([t.slot], o, r, e, i.slots, s),
                      t.slot === c.googletagSlot &&
                        (t.isEmpty ||
                          ((c.eventSize = Array.isArray(t.size)
                            ? [t.size[0], t.size[1]]
                            : [0, 0]),
                          c.slotWrapper.classList.remove(
                            "".concat(i.AD_NAME, "-").concat(i.NOT_DISPLAYED)
                          )));
                  };
                }),
                (i.dispose = function () {
                  try {
                    for (var e in (s.ZP.log("p: dispose"), i.slots)) {
                      var t = i.slots[e];
                      t.removeScrollEventListener &&
                        t.removeScrollEventListener(),
                        t.dispose && t.dispose(),
                        delete i.slots[e];
                    }
                  } catch (e) {
                    s.ZP.error(e);
                  }
                }),
                i
              );
            }
            return (
              c(t, e),
              (t.prototype._init = function () {}),
              (t.prototype._addStyle = function () {
                var e = this.config,
                  t = e.marginTop,
                  n = e.centerAd,
                  i = e.containerMargin,
                  r = e.containerHeight,
                  s = e.containerWidthType,
                  a = e.contentWidth,
                  c = e.backgroundColor,
                  l = e.customCss,
                  _ = n ? "100%" : a,
                  d = i || "0",
                  u = n ? 0 : t,
                  p = r > 360 ? r : 361;
                (0, o.cu)(
                  "\n        ."
                    .concat(
                      this.AD_NAME,
                      "-container {\n            width: 100"
                    )
                    .concat(
                      s,
                      ";\n            height: 100vh;\n            max-height: "
                    )
                    .concat(
                      p,
                      "px;\n            min-height: 350px;\n            position: relative;\n            margin: "
                    )
                    .concat(d, ";\n        }\n\n        .")
                    .concat(
                      this.AD_NAME,
                      "-clipper {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            margin: 0;\n            padding: 0;\n            overflow: hidden;\n            clip-path: inset(0px);\n            clip: rect(0px auto auto 0px);\n            background: "
                    )
                    .concat(c || "#ccc", "\n        }\n\n        .")
                    .concat(
                      this.AD_NAME,
                      "-header {\n            position: absolute;\n            z-index: 1;\n            top: 0px;\n            font-size: 12px;\n            text-align: center;\n            width: 100%;\n            line-height: normal;\n            padding: 4px 0px;\n            background-color: #000;\n            color: #fff;\n            letter-spacing: 3px;\n            font-family: Arial;\n        }\n\n        ."
                    )
                    .concat(
                      this.AD_NAME,
                      "-footer {\n            position: absolute;\n            z-index: 1;\n            bottom: 0px;\n            font-size: 9pt;\n            text-align: center;\n            width: 100%;\n            line-height: normal;\n            padding: 4px 0px;\n            background-color: #000;\n            color: #fff;\n            letter-spacing: 3px;\n            font-family: Arial;\n        }\n\n        ."
                    )
                    .concat(
                      this.AD_NAME,
                      "-position-relative {\n            height: 100%;\n            position: relative;\n            width: 100%;\n            margin: 0 auto;\n            text-align: center;\n            z-index: -1;\n        }\n\n        ."
                    )
                    .concat(
                      this.AD_NAME,
                      "-content {\n            position: fixed;\n            margin-top: "
                    )
                    .concat(u, "px;\n            top: 0;\n            width: ")
                    .concat(
                      _,
                      ";\n            z-index: -1;\n        }\n        \n        ."
                    )
                    .concat(
                      this.AD_NAME,
                      "-content-center {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n            margin: 0;\n            padding: 0px;\n            bottom: 0;\n            transform: translateZ(0px);\n            z-index: -1;\n        }\n\n        ."
                    )
                    .concat(
                      this.AD_NAME,
                      "-ad-wrapper {\n            text-align: center;\n            z-index: -1;\n        }\n        \n        ."
                    )
                    .concat(
                      this.AD_NAME,
                      "-ad-wrapper-center {\n            width: 100%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translateY(-50%) translateX(-50%);\n            -webkit-transform: translateY(-50%) translateX(-50%);\n        }\n        \n        ."
                    )
                    .concat(this.AD_NAME, "-")
                    .concat(
                      this.NOT_DISPLAYED,
                      " {\n          display: none;\n        }\n"
                    ),
                  "".concat(this.AD_NAME)
                ),
                  l && (0, o.cu)(l, "".concat(this.AD_NAME, "-override"));
              }),
              (t.prototype.executeCountSuffix = function () {
                return this.infinite ? "_" + this.executeCount.toString() : "";
              }),
              t
            );
          })(r.h);
        t.Z = _;
      },
      905: function (e, t, n) {
        var i,
          o = n(274),
          r = n(878),
          s = n(644),
          a = n(361),
          c =
            ((i = function (e, t) {
              return (
                (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                i(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          l = function () {
            return (
              (l =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              l.apply(this, arguments)
            );
          },
          _ = (function (e) {
            function t(t, n) {
              var i = e.call(this, t, "ats-skyscraper", n) || this;
              (i.executeCount = 0),
                (i.adSizes = null),
                (i.maxAdSizes = [300, 250]),
                (i._execute = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    (i.infinite = t),
                    i.executeCount++,
                    e
                  );
                }),
                (i._findTarget = function (e) {
                  if (null === i.adSizes) return null;
                  var t = i.config,
                    n = t.adUnitPath,
                    s = t.targetType,
                    a = t.selector,
                    c = t.anchorPosition,
                    l = (0, o.U9)(e, a, s);
                  if (!l) return null;
                  var _ = l.getBoundingClientRect(),
                    d = _.width,
                    u = "left" === c ? _[c] : window.innerWidth - _[c],
                    p = d + i.marginSide + i.extractMaxAdSize(i.adSizes)[0];
                  return window.innerWidth < p ||
                    u < i.marginSide + i.extractMaxAdSize(i.adSizes)[0]
                    ? (r.ZP.error(
                        "ss ".concat(
                          n,
                          ": No enough screen width to render ads."
                        )
                      ),
                      null)
                    : [l];
                }),
                (i._getFetchAdConfig = function (e, t, n) {
                  var o = i.config,
                    r = o.sizeMappingGroup,
                    s = o.setCollapseEmptyDiv,
                    a = o.setTargetingConfigs,
                    c = o.enableSetForceSafeFrameForSlot;
                  return {
                    gpt: {
                      adUnitPath: i.slots[e].adUnitPath,
                      sizes: [[300, 250]],
                      divId: e,
                      sizeMappingGroup: r,
                      setCollapseEmptyDiv: s,
                      setTargetingConfigs: a,
                      enableSetForceSafeFrameForSlot: c,
                      onAfterGptFetched: i._onAfterGptFetched(e),
                      onAfterGptRendered: i._onAfterGptRendered(e, t),
                      infinite: n,
                    },
                  };
                }),
                (i._onAfterGptFetched = function (e) {
                  return function (t) {
                    (i.slots[e].googletagSlot = t),
                      (i.slots[e].dispose = function () {
                        googletag.destroySlots([t]),
                          i.slots[e].slotWrapper.remove();
                      });
                  };
                }),
                (i._onAfterGptRendered = function (e, t) {
                  return function (n) {
                    if (null !== n.size) {
                      var o = i.config,
                        a = o.isSticky,
                        c = o.anchorPosition,
                        l = o.refreshInterval,
                        _ = o.refreshLimit,
                        d = o.inViewRate,
                        u = i.slots[e];
                      l > 0 &&
                        !1 === u.isGPTRefreshCalled &&
                        s.ZP.intervalRefreshAds([n.slot], l, _, e, i.slots, d),
                        (u.eventSize = Array.isArray(n.size)
                          ? [n.size[0], n.size[1]]
                          : [0, 0]);
                      var p = t.getBoundingClientRect().width,
                        f = u.slotWrapper,
                        g = n.size;
                      (f.style[c] = "calc(50% - ".concat(
                        p / 2 + g[0] + i.marginSide,
                        "px)"
                      )),
                        g[0] < i.maxAdSizes[0] &&
                          ((f.style[c] = "calc(50% - ".concat(
                            p / 2 + i.maxAdSizes[0] + i.marginSide,
                            "px)"
                          )),
                          r.ZP.log(
                            "ss: Since it is ["
                              .concat(g, "], I calculated it with [")
                              .concat(i.maxAdSizes, "]")
                          )),
                        a && i.stickyNodes(t, e, g);
                    }
                  };
                }),
                (i.extractMaxAdSize = function (e) {
                  return (
                    e.sort(function (e, t) {
                      return t[1] - e[1];
                    }),
                    e.sort(function (e, t) {
                      return t[0] - e[0];
                    }),
                    e[0]
                  );
                }),
                (i.stickyNodes = function (e, t, n) {
                  var o,
                    r = function () {
                      o && window.cancelAnimationFrame(o),
                        (o = window.requestAnimationFrame(function () {
                          var o = e.getBoundingClientRect();
                          o.top > 0
                            ? (i.setWrapperStyle(t, "position", "absolute"),
                              i.setWrapperStyle(
                                t,
                                "top",
                                "".concat(
                                  i.marginTop + o.top + window.pageYOffset,
                                  "px"
                                )
                              ))
                            : o.top +
                                o.height -
                                n[1] -
                                i.marginTop -
                                i.marginBottom <
                              0
                            ? (i.setWrapperStyle(t, "position", "absolute"),
                              i.setWrapperStyle(
                                t,
                                "top",
                                "".concat(
                                  o.top +
                                    window.pageYOffset +
                                    o.height -
                                    n[1] -
                                    i.marginBottom,
                                  "px"
                                )
                              ))
                            : (i.setWrapperStyle(t, "position", "fixed"),
                              i.setWrapperStyle(t, "top", i.marginTop + "px"));
                        }));
                    };
                  (i.slots[t].removeScrollEventListener = function () {
                    o && window.cancelAnimationFrame(o),
                      window.removeEventListener("scroll", r);
                  }),
                    window.addEventListener("scroll", r);
                }),
                (i.dispose = function () {
                  try {
                    for (var e in i.slots)
                      if (Object.prototype.hasOwnProperty.call(i.slots, e)) {
                        var t = i.slots[e];
                        (t.shouldStopRefresh = !0),
                          t.removeScrollEventListener &&
                            t.removeScrollEventListener(),
                          t.dispose && t.dispose();
                      }
                  } catch (e) {
                    r.ZP.error(e);
                  }
                });
              var a = i.config,
                c = a.margin,
                l = a.sizeMappingGroup,
                _ = a.anchorPosition,
                d = c.split(" ").map(function (e) {
                  return parseInt(e.slice(0, -2));
                });
              (i.marginSide = "left" === _ ? d[1] : d[3]),
                (i.marginTop = d[0]),
                (i.marginBottom = d[2]);
              for (var u = 0; u < l.length; u++) {
                var p = l[u];
                if ((0, o.NT)(p.deviceSizes)) {
                  var f = p.sizes.filter(function (e) {
                    return "fluid" !== e;
                  });
                  (i.adSizes = f),
                    (i.maxAdSizes = i.extractMaxAdSize(i.adSizes));
                  break;
                }
              }
              return i;
            }
            return (
              c(t, e),
              (t.prototype._init = function () {}),
              (t.prototype._addStyle = function () {
                var e = "\n    .".concat(
                  this.AD_NAME,
                  "-wrapper {\n        position: absolute;\n    }\n  "
                );
                (0, o.cu)(e, this.AD_NAME);
              }),
              (t.prototype._buildSlot = function (e) {
                var t = this.config.divIDs[0] + this.executeCountSuffix,
                  n = e.getBoundingClientRect().top + window.pageYOffset,
                  i = document.createElement("div");
                i.classList.add("".concat(this.AD_NAME, "-wrapper")),
                  (i.style.top = "".concat(this.marginTop + n, "px"));
                var o = document.createElement("div");
                return (
                  o.classList.add(this.AD_NAME),
                  (this.slots[t] = l(
                    {
                      slotWrapper: i,
                      adUnitPath: this.config.adUnitPath,
                      divId: t,
                      slot: o,
                      isGPTRefreshCalled: !1,
                      shouldStopRefresh: !1,
                    },
                    this.makeReplaceAdSenseParams()
                  )),
                  i.appendChild(o),
                  window.document.body.appendChild(i),
                  t
                );
              }),
              Object.defineProperty(t.prototype, "executeCountSuffix", {
                get: function () {
                  return this.infinite
                    ? "_" + this.executeCount.toString()
                    : "";
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.setWrapperStyle = function (e, t, n) {
                this.slots[e].slotWrapper.style[t] = n;
              }),
              t
            );
          })(a.h);
        t.Z = _;
      },
      353: function (e, t, n) {
        n.d(t, {
          Wo: function () {
            return r;
          },
          r8: function () {
            return i;
          },
          yI: function () {
            return o;
          },
        });
        var i =
            -1 !==
              (
                (null === sessionStorage || void 0 === sessionStorage
                  ? void 0
                  : sessionStorage.getItem("ats_debug")) || ""
              ).indexOf("true") ||
            -1 !==
              location.search.slice(1).split("&").indexOf("ats_debug=true"),
          o =
            i ||
            /only_log|enable_log/.test(
              (null === sessionStorage || void 0 === sessionStorage
                ? void 0
                : sessionStorage.getItem("ats_debug")) || ""
            ) ||
            -1 !==
              location.search.slice(1).split("&").indexOf("ats_debug=only_log"),
          r = function (e) {
            void 0 === e &&
              (e = "true" !== window.sessionStorage.getItem("ats_debug")),
              e
                ? window.sessionStorage.setItem("ats_debug", "true")
                : window.sessionStorage.removeItem("ats_debug"),
              location.reload();
          };
      },
      338: function (e, t, n) {
        n.d(t, {
          Y: function () {
            return r;
          },
        });
        var i = n(353),
          o = function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var i, o = 0, r = t.length; o < r; o++)
                (!i && o in t) ||
                  (i || (i = Array.prototype.slice.call(t, 0, o)),
                  (i[o] = t[o]));
            return e.concat(i || Array.prototype.slice.call(t));
          },
          r = (function () {
            function e(e, t) {
              void 0 === t && (t = !1);
              var n = this;
              (this._enableLog = t),
                (this.measurePerformance = function (e) {
                  try {
                    performance.mark("start");
                  } catch (e) {}
                  var t = e();
                  try {
                    performance.mark("end"),
                      performance.measure("test", "start", "end");
                    var i = performance.getEntriesByName("test");
                    n.log(i[0]);
                  } catch (e) {}
                  return t;
                }),
                (this.reset = function () {});
              var i = function (e, t) {
                return "display: inline-block; color: "
                  .concat(e, "; background: ")
                  .concat(t, "; padding: 1px 4px; border-radius: 3px;");
              };
              this.decorate = [
                "%cATS%c".concat(e),
                i("#fff", "#2196f3"),
                i("#000", "#aaa"),
              ];
            }
            return (
              (e.prototype.log = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                try {
                  if (!this._enableLog) return;
                  console.log.apply(
                    console,
                    o(o(o([], this.decorate, !1), ["LOG:"], !1), e, !1)
                  );
                } catch (t) {
                  this.log.apply(this, e);
                }
              }),
              (e.prototype.info = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                try {
                  if (!this._enableLog) return;
                  console.info.apply(
                    console,
                    o(o(o([], this.decorate, !1), ["INFO:"], !1), e, !1)
                  );
                } catch (t) {
                  this.log.apply(this, e);
                }
              }),
              (e.prototype.warn = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                try {
                  if (!this._enableLog) return;
                  console.warn.apply(
                    console,
                    o(o(o([], this.decorate, !1), ["WARN:"], !1), e, !1)
                  );
                } catch (t) {
                  this.log.apply(this, e);
                }
              }),
              (e.prototype.error = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                try {
                  if (!this._enableLog) return;
                  console.error.apply(
                    console,
                    o(o(o([], this.decorate, !1), ["ERROR:"], !1), e, !1)
                  );
                } catch (t) {
                  this.log.apply(this, e);
                }
              }),
              (e.prototype.table = function (e, t, n) {
                try {
                  if (!this._enableLog) return;
                  this.log(e), console.table(t, n);
                } catch (i) {
                  this.log(e, t, n);
                }
              }),
              e
            );
          })(),
          s = new r("Core", i.yI);
        if (((t.Z = s), i.yI))
          try {
            var a = function (e) {
              var t;
              null === (t = null == e ? void 0 : e.target) ||
                void 0 === t ||
                t.removeEventListener(e.type, a);
              var n = window.performance.timing;
              n &&
                s.log("Page Performance", {
                  dns: n.domainLookupEnd - n.domainLookupStart,
                  tcp: n.connectEnd - n.connectStart,
                  request: n.responseStart - n.requestStart,
                  response: n.responseEnd - n.responseStart,
                  interactive: n.domInteractive - n.domLoading,
                  domContentLoaded: n.domContentLoadedEventStart - n.domLoading,
                  domComplete: n.domComplete - n.domLoading,
                  load: n.loadEventEnd - n.loadEventStart,
                  untilResponseStart: n.responseStart - n.navigationStart,
                  untilLoadComplete: n.loadEventEnd - n.navigationStart,
                });
            };
            "complete" === document.readyState
              ? a()
              : window.addEventListener("load", a);
          } catch (e) {}
      },
      274: function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.d(__webpack_exports__, {
          Cf: function () {
            return isMatchedDevice;
          },
          K: function () {
            return getSelectorFromElement;
          },
          Lp: function () {
            return getHostName;
          },
          N6: function () {
            return updateArray;
          },
          NT: function () {
            return isCorrectSizes;
          },
          OV: function () {
            return debouncedMutationObserver;
          },
          QL: function () {
            return isMatchedBlockedUrl;
          },
          SI: function () {
            return isEmptyObj;
          },
          U9: function () {
            return getTarget;
          },
          WD: function () {
            return isInflow;
          },
          WX: function () {
            return isMatchedReferrerHistory;
          },
          cu: function () {
            return addStyle;
          },
          ej: function () {
            return getCookie;
          },
          ht: function () {
            return isMatchedPath;
          },
          hu: function () {
            return REFERRER_HISTORY;
          },
          j: function () {
            return getUserDeviceType;
          },
          lN: function () {
            return insertScriptTag;
          },
          p4: function () {
            return isMatchedReferrer;
          },
          ro: function () {
            return checkWindow;
          },
        });
        var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(338),
          addStyle = function (e, t) {
            if (!document.querySelector("style[data-css-".concat(t, "]"))) {
              var n = document.head || document.getElementsByTagName("head")[0],
                i = document.createElement("style");
              (i.type = "text/css"),
                i.appendChild(document.createTextNode(e)),
                t && i.setAttribute("data-css-".concat(t), ""),
                n.appendChild(i);
            }
          },
          checkWindow = function () {
            return document.hasFocus();
          },
          debounce = function (e, t) {
            for (var n, i = [], o = 2; o < arguments.length; o++)
              i[o - 2] = arguments[o];
            return function () {
              var o = i;
              n && clearTimeout(n),
                (n = window.setTimeout(function () {
                  (n = null), e(o);
                }, t));
            };
          },
          getTarget = function (atsElm, selector, targetType) {
            var element;
            try {
              element =
                "Function" === targetType
                  ? eval(selector)
                  : atsElm.querySelector(selector);
            } catch (e) {
              element = null;
            }
            return element;
          },
          debouncedMutationObserver = function (e, t) {
            return new MutationObserver(debounce(e, t));
          },
          isCorrectSizes = function (e) {
            return e[0] < window.innerWidth && e[1] < window.innerHeight;
          },
          isEmptyObj = function (e) {
            return null == e || !Object.keys(e).length;
          },
          insertScriptTag = function (e, t, n) {
            var i;
            void 0 === e && (e = !1);
            var o = document.createElement("script"),
              r = document.getElementsByTagName("script")[0];
            n && (o.onload = n),
              (o.async = e),
              (o.src = t),
              null === (i = null == r ? void 0 : r.parentNode) ||
                void 0 === i ||
                i.insertBefore(o, r);
          },
          getSelectorFromElement = function (e) {
            var t = [];
            if (!(e instanceof Element)) return t;
            for (
              var n = function (e, t) {
                for (var n = 1, i = e; (i = i.previousElementSibling); )
                  i.nodeName.toLowerCase() === t && ++n;
                return n;
              };
              e && e.nodeType === Node.ELEMENT_NODE;

            ) {
              var i = e.nodeName.toLowerCase();
              if (e.id) {
                (i += "#".concat(e.id)), t.unshift(i);
                break;
              }
              var o = n(e, i);
              1 < o && (i += ":nth-of-type(".concat(o, ")")),
                t.unshift(i),
                (e = e.parentNode);
            }
            return t;
          },
          deviceRegex = /ip(hone|od)|android.*(mobile|mini)/i,
          deviceRegex2 =
            /Opera Mobi|Mobile.+Firefox|^HTC|Fennec|IEMobile|BlackBerry|BB10.*Mobile|GT-.*Build\/GINGERBREAD|SymbianOS.*AppleWebKit/,
          MOBILE_NAME = "sp",
          DESKTOP_NAME = "pc",
          RESPONSIVE_NAME = "resp",
          REFERRER_HISTORY = [],
          getUserDeviceType = function (e) {
            void 0 === e && (e = navigator.userAgent);
            var t = !1;
            return (
              [deviceRegex, deviceRegex2].forEach(function (n) {
                t = t || n.test(e);
              }),
              t ? MOBILE_NAME : DESKTOP_NAME
            );
          },
          CURRENT_USER_DEVICE_TYPE = getUserDeviceType(),
          isMatchedPath = function (e, t) {
            var n,
              i = e.regex;
            try {
              n = new RegExp(i);
            } catch (e) {
              return (
                _Logger__WEBPACK_IMPORTED_MODULE_0__.Z.error(
                  "regex is not correct: ".concat(n, ": ").concat(e)
                ),
                !1
              );
            }
            return n.test(t);
          },
          isMatchedReferrer = function (e, t) {
            if (
              !e.enableReferrerTargeting ||
              e.enableKeepingReferrer ||
              !e.domainList
            )
              return !0;
            var n = e.domainList.some(function (e) {
              return e === t;
            });
            return "include" === e.filteringRule ? n : !n;
          },
          getHostName = function (e, t) {
            for (
              var n = 0,
                i = (e = e.sort(function (e, t) {
                  return e.length - t.length;
                }));
              n < i.length;
              n++
            ) {
              var o = i[n];
              if (-1 !== t.indexOf(o)) return o;
            }
            return t;
          },
          isInflow = function (e, t) {
            return -1 === t.indexOf(e);
          },
          getCookie = function () {
            return document.cookie.split(/;\s*/).reduce(function (e, t) {
              var n = t.split("="),
                i = n[0],
                o = n[1],
                r = "temp";
              try {
                o && (r = decodeURIComponent(o));
              } catch (e) {}
              return i && (e[i] = r), e;
            }, {});
          },
          updateArray = function (e, t, n, i) {
            var o = i ? [] : JSON.parse(getCookie()[t] || "[]");
            return (
              o.push(n),
              (o = o.filter(function (e, t, n) {
                return n.indexOf(e) === t;
              })),
              (document.cookie = ""
                .concat(t, "=")
                .concat(encodeURIComponent(JSON.stringify(o)), "; Domain=")
                .concat(e, "; Path=/; max-age=3600; SameSite=Strict;")),
              o
            );
          },
          isMatchedReferrerHistory = function (e, t) {
            if (
              !e.enableReferrerTargeting ||
              !e.enableKeepingReferrer ||
              !e.domainList
            )
              return !0;
            var n = t.some(function (t) {
              var n;
              return null === (n = e.domainList) || void 0 === n
                ? void 0
                : n.some(function (e) {
                    return e === t;
                  });
            });
            return "include" === e.filteringRule ? n : !n;
          },
          isMatchedBlockedUrl = function (e, t) {
            return e.some(function (e) {
              return (
                e === t &&
                (_Logger__WEBPACK_IMPORTED_MODULE_0__.Z.log(
                  "blocked with url = ".concat(e)
                ),
                !0)
              );
            });
          },
          isMatchedDevice = function (e, t) {
            return e === t || e === RESPONSIVE_NAME;
          };
      },
      581: function (e) {
        e.exports = JSON.parse(
          '{"siteSetting":{"enableAds":true,"enableGptScript":true,"parentAccountSiteDomain":"anymanager.io","siteId":7668,"enableAdloox":true,"adlooxRequestRatio":0.08,"confirmedClickRatio":0,"enableIpBlocking":false,"enableBasicSetTargetings":true,"enableCollapseEmptyDivs":true,"enableGamSingleRequest":true,"enableSeparateRequest":true,"enableGamDisableInitialLoad":false,"enableGamLazyload":{},"gamAdsRefresh":1,"enablePrebid":true,"prebidSettings":{"prebidVersion":7,"prebidTimeout":2000,"prebidTamPubId":"","prebidUserSyncScript":"(function () {\\n    return {\\n        syncDelay: 6000, // Default = 3000\\n        syncsPerBidder: 10, // Default = 5\\n        filterSettings: {\\n            all: {\\n                bidders: \\"*\\",\\n                filter: \\"include\\",\\n            },\\n        },\\n        // https://publisherdocs.criteotilt.com/rtus/prebid/\\n        userIds: [\\n            {\\n                name: \\"criteo\\",\\n            },\\n        ],\\n    };\\n})();","prebidCustomScript":"","prebidCoreGamNetworkId":21622890900,"prebidCurrency":"USD","prebidJsURL":"https://anymind360.com/js/7668/prebid_2022_10_21_1_43_9.js","rendererJsURL":"https://anymind360.com/js/bundle.js","prebidUseAtspbjs":true,"enableAnalytics":false,"ampaEndPoint":"https://storage.googleapis.com/prod-ampa-collect/collect","analyticsSamplingRate":0.05,"enableNovatiqIdSystem":false,"enableSchain":true},"enableIdentityHub":false,"identityHubPublisherId":null,"identityHubProfileId":null,"enableLiveRamp":false,"liveRampJsURL":"https://ats.rlcdn.com/ats.js","liveRampScript":"","enablePwa":false,"keywordsBlock":{},"isSPA":false,"destroyAtsSlotsOnly":false,"enableUrlBlock":true,"blockedUrls":["/campaign","/campaign/analytics","/campaign/analytics/","/campaign/modules","/modules","/campaign/preview/","/notifications/","/notifications/settings/","/reset-email","/reset-password/","/unsubscribe/","/users/","/user","/users/settings/","/coming-soon","/email-verification/","/explore/","/forgot-password/","/login","/pricing/","/404","/signup","/aluiziosantos","/"],"hostNames":["twibbonize.com"],"enableApm":false},"configs":[{"regex":".*","device":"resp","breakPoint":false,"enableReferrerTargeting":false,"enableKeepingReferrer":false,"filteringRule":"include","domainList":[],"active":true,"type":"custom","settings":{"script":"try{\\ndocument.addEventListener(\\"DOMContentLoaded\\", function() { \\nvar newNode2 = document.createElement(\'div\');\\nnewNode2.setAttribute(\\"id\\", \\"sliderBox\\"); \\nnewNode2.classList.add(\\"floatSlider\\");\\nvar newNode5 = document.createElement(\'div\');\\nnewNode5.setAttribute(\\"id\\", \\"sliderDiv\\"); \\nnewNode2.append(newNode5);\\nvar newButton = document.createElement(\'button\');\\nnewButton.setAttribute(\\"class\\", \\"closeAd\\"); \\nnewButton.setAttribute(\\"onclick\\", \\"toggleAd()\\"); \\nnewButton.innerHTML=\\"x\\";\\nnewNode5.append(newButton);\\nvar referenceNode2 = document.querySelector(\'body\');\\n// Insert the new node before the reference node\\nreferenceNode2.prepend(newNode2);\\nconsole.log(\'running!!\');\\n\\n});\\n}catch(e){}","style":".closeAd{visibility: hidden;}"}},{"regex":".*","device":"resp","breakPoint":false,"enableReferrerTargeting":false,"enableKeepingReferrer":false,"filteringRule":"include","domainList":[],"active":true,"type":"insert_ads","enablePrebid":false,"settings":{"adUnitId":178875,"adUnitPath":"/21622890900,22769507802/ID_twibbonize.com_res_article_1x1","divIDs":["ats-insert_ads-1"],"enableSetForceSafeFrameForSlot":false,"refreshInterval":0,"inViewRate":0,"setCollapseEmptyDiv":"before_fetch","sizeMappingGroup":[{"deviceSizes":[0,0],"sizes":[[300,250],[336,280],[1,1]]}],"targetType":"QuerySelector","selector":"#sliderDiv","customCss":"display: block;\\ntext-align: center!important;\\nmargin: 15px 0px 15px 0px;","customCssForShowAdvertisement":"border-top: 1px solid rgb(243, 243, 243);\\nborder-bottom: 1px solid rgb(243, 243, 243);","insertPosition":"afterbegin","isFlexible":false,"numOfAds":1,"selectors":[],"exclusiveSelectors":[],"targetFirstLevelOnly":false,"spacing":1,"showAdvertisement":false,"customShowAdsText":"ADVERTISEMENT","isSticky":false,"stickyStopTarget":"","stickyStopTargetType":"QuerySelector","overrideMargin":false,"stickySizes":[],"enableLazyLoad":false,"lazyLoadMode":2,"lazyLoadConfig":1}},{"regex":".*","device":"resp","breakPoint":false,"enableReferrerTargeting":false,"enableKeepingReferrer":false,"filteringRule":"include","domainList":[],"active":true,"type":"custom","settings":{"script":"try{\\ndocument.addEventListener(\\"DOMContentLoaded\\", function() { \\n\\n\\nwindow.addEventListener(\'scroll\', function(ev) {\\n    var someDiv = document.querySelector(\'#sliderBox\');\\nvar btnToggle = document.querySelector(\\"#sliderDiv > button\\");\\nif (document.querySelector(\'#sliderBox iframe\').width != 1 ) {\\n        btnToggle.style.visibility = \\"visible\\";\\n}\\ndocument.querySelector(\'.closeAd\').onclick = function() {  var x = document.querySelector(\\"#sliderDiv > div\\");\\n  var y = document.querySelector(\\"#sliderDiv > button\\");\\n  var z = document.querySelector(\\"#sliderDiv\\");\\n\\n  if (x.style.display === \\"none\\") {\\n    x.style.display = \\"block\\";\\n    y.style.transform = \\"translateY(21px)\\";   \\n  } else {\\n    x.style.display = \\"none\\";\\n    y.style.transform = \\"translateY(-20px)\\";\\n  }\\n};\\n    }); \\n\\n});\\n}catch(e){}","style":"#sliderBox>div{text-align: center; transition: all .3s;} \\n    .floatSlider > div{ position: fixed; right: 0!important; bottom: 0!important; transform: scale(.65); z-index: 9999; text-align: left!important;}\\n    .closeAd{visibility: hidden; position: absolute; left: 0px; top: 23px; width: 40px; height: 40px; border-radius: 0!important; text-align: center; background: #ddd;}\\n    .floatSlider > .closeAd{visibility: visible;}\\n    @media only screen and (max-width: 600px) {\\n    .floatSlider > div{ transform: scale(.45) translate(220px,50px);}\\n    .closeAd{left: -5px;}\\n    }\\n    \\n.trvd_video_player {\\n    bottom: 160px !important;\\n}\\n.ats-overlay-top-wrapper-rendered {background: rgb(240 240 240) !important;}"}},{"settings":{"prebidAdUnits":[{"atsPrebidAdUnits":[{"mediaTypes":{"video":{},"banner":{"sizes":[[300,250],[336,280]]}},"bids":[{"bidder":"criteo","params":{"networkId":9528,"publisherSubId":"HB_ID_twibbonize.com_res_article_mid1_300x250/336x280_22819987626"},"includeSchain":true},{"bidder":"ix","params":{"id":"22819987626","size":[300,250],"siteId":"891329"},"includeSchain":true},{"bidder":"ix","params":{"id":"22819987626","size":[336,280],"siteId":"891329"},"includeSchain":true},{"bidder":"openx","params":{"unit":"558226116","delDomain":"adasia-d.openx.net"},"includeSchain":true},{"bidder":"smaato","params":{"adspaceId":"134386505","publisherId":"1100048581"},"includeSchain":true},{"bidder":"smartadserver","params":{"pageId":1683202,"siteId":"549798","formatId":86006},"includeSchain":true},{"bidder":"smartadserver","params":{"pageId":1683202,"siteId":"549798","formatId":86013},"includeSchain":true},{"bidder":"appnexus","params":{"placementId":"27621831"},"includeSchain":true},{"bidder":"rubicon","params":{"siteId":"447920","zoneId":"2592658","accountId":"17692"},"includeSchain":true},{"bidder":"pubmatic","params":{"adSlot":"4726547","publisherId":"158497"},"includeSchain":true}]}],"deviceSizes":[0,0]}],"adUnitPath":"/21622890900,22769507802/ID_twibbonize.com_res_article_mid1_300x250//336x280","adUnitId":176878,"divID":"ats-insert_ads-3"},"type":"prebid_only","active":true,"domainList":[],"filteringRule":"include","enableKeepingReferrer":false,"enableReferrerTargeting":false,"breakPoint":false,"device":"resp","regex":".*"},{"regex":".*","device":"resp","breakPoint":false,"enableReferrerTargeting":false,"enableKeepingReferrer":false,"filteringRule":"include","domainList":[],"active":true,"type":"insert_ads","enablePrebid":true,"settings":{"adUnitId":176878,"adUnitPath":"/21622890900,22769507802/ID_twibbonize.com_res_article_mid1_300x250//336x280","divIDs":["ats-insert_ads-3"],"enableSetForceSafeFrameForSlot":false,"refreshInterval":0,"inViewRate":0,"setCollapseEmptyDiv":"before_fetch","sizeMappingGroup":[{"deviceSizes":[0,0],"sizes":[[300,250],[336,280]]}],"targetType":"QuerySelector","selector":"#anymind-ads-1","customCss":"display: block;\\ntext-align: center!important;\\nmargin: 15px 0px 15px 0px;","customCssForShowAdvertisement":"border-top: 1px solid rgb(243, 243, 243);\\nborder-bottom: 1px solid rgb(243, 243, 243);","insertPosition":"afterbegin","isFlexible":false,"numOfAds":1,"selectors":[],"exclusiveSelectors":[],"targetFirstLevelOnly":false,"spacing":1,"showAdvertisement":true,"customShowAdsText":"ADVERTISEMENT","isSticky":false,"stickyStopTarget":"","stickyStopTargetType":"QuerySelector","overrideMargin":false,"stickySizes":[],"enableLazyLoad":false,"lazyLoadMode":2,"lazyLoadConfig":1}},{"regex":".*","device":"resp","breakPoint":false,"enableReferrerTargeting":false,"enableKeepingReferrer":false,"filteringRule":"include","domainList":[],"active":true,"type":"insert_ads","enablePrebid":false,"settings":{"adUnitId":182387,"adUnitPath":"/21622890900,22769507802/ID_twibbonize.com_res_article_top_728x90//320x100//320x50","divIDs":["ats-insert_ads-4"],"enableSetForceSafeFrameForSlot":false,"refreshInterval":0,"inViewRate":0,"setCollapseEmptyDiv":"before_fetch","sizeMappingGroup":[{"deviceSizes":[728,300],"sizes":[[728,90]]},{"deviceSizes":[0,0],"sizes":[[320,50],[320,100]]}],"targetType":"QuerySelector","selector":"anh","customCss":"display: block;\\ntext-align: center!important;\\nmargin: 15px 0px 15px 0px;","customCssForShowAdvertisement":"border-top: 1px solid rgb(243, 243, 243);\\nborder-bottom: 1px solid rgb(243, 243, 243);","insertPosition":"beforebegin","isFlexible":false,"numOfAds":1,"selectors":[],"exclusiveSelectors":[],"targetFirstLevelOnly":false,"spacing":1,"showAdvertisement":false,"customShowAdsText":"ADVERTISEMENT","isSticky":false,"stickyStopTarget":"","stickyStopTargetType":"QuerySelector","overrideMargin":false,"stickySizes":[],"enableLazyLoad":false,"lazyLoadMode":2,"lazyLoadConfig":1}},{"settings":{"prebidAdUnits":[{"atsPrebidAdUnits":[{"mediaTypes":{"video":{},"banner":{"sizes":[[728,90],[970,90]]}},"bids":[{"bidder":"criteo","params":{"networkId":9528,"publisherSubId":"HB_ID_twibbonize.com_res_article_anchor_top_728x90/970x90/320x100/320x50_22833750518"},"includeSchain":true},{"bidder":"openx","params":{"unit":"558228583","delDomain":"adasia-d.openx.net"},"includeSchain":true},{"bidder":"pubmatic","params":{"adSlot":"4736372","publisherId":"158497"},"includeSchain":true},{"bidder":"smaato","params":{"adspaceId":"134394761","publisherId":"1100048581"},"includeSchain":true},{"bidder":"appnexus","params":{"placementId":"27670897"},"includeSchain":true},{"bidder":"rubicon","params":{"siteId":"447920","zoneId":"2600600","accountId":"17692"},"includeSchain":true},{"bidder":"smartadserver","params":{"pageId":1686811,"siteId":"549798","formatId":86034},"includeSchain":true},{"bidder":"smartadserver","params":{"pageId":1686811,"siteId":"549798","formatId":86037},"includeSchain":true},{"bidder":"ix","params":{"id":"22833750518","size":[728,90],"siteId":"895625"},"includeSchain":true},{"bidder":"ix","params":{"id":"22833750518","size":[970,90],"siteId":"895625"},"includeSchain":true}]}],"deviceSizes":[970,500]},{"atsPrebidAdUnits":[{"mediaTypes":{"video":{},"banner":{"sizes":[[728,90]]}},"bids":[{"bidder":"criteo","params":{"networkId":9528,"publisherSubId":"HB_ID_twibbonize.com_res_article_anchor_top_728x90/970x90/320x100/320x50_22833750518"},"includeSchain":true},{"bidder":"openx","params":{"unit":"558228583","delDomain":"adasia-d.openx.net"},"includeSchain":true},{"bidder":"pubmatic","params":{"adSlot":"4736372","publisherId":"158497"},"includeSchain":true},{"bidder":"smaato","params":{"adspaceId":"134394761","publisherId":"1100048581"},"includeSchain":true},{"bidder":"appnexus","params":{"placementId":"27670897"},"includeSchain":true},{"bidder":"rubicon","params":{"siteId":"447920","zoneId":"2600600","accountId":"17692"},"includeSchain":true},{"bidder":"ix","params":{"id":"22833750518","size":[728,90],"siteId":"895625"},"includeSchain":true},{"bidder":"smartadserver","params":{"pageId":1686811,"siteId":"549798","formatId":86034},"includeSchain":true}]}],"deviceSizes":[728,300]},{"atsPrebidAdUnits":[{"mediaTypes":{"video":{},"banner":{"sizes":[[320,50],[320,100]]}},"bids":[{"bidder":"criteo","params":{"networkId":9528,"publisherSubId":"HB_ID_twibbonize.com_res_article_anchor_top_728x90/970x90/320x100/320x50_22833750518"},"includeSchain":true},{"bidder":"ix","params":{"id":"22833750518","size":[320,50],"siteId":"895625"},"includeSchain":true},{"bidder":"ix","params":{"id":"22833750518","size":[320,100],"siteId":"895625"},"includeSchain":true},{"bidder":"openx","params":{"unit":"558228583","delDomain":"adasia-d.openx.net"},"includeSchain":true},{"bidder":"pubmatic","params":{"adSlot":"4736372","publisherId":"158497"},"includeSchain":true},{"bidder":"smaato","params":{"adspaceId":"134394761","publisherId":"1100048581"},"includeSchain":true},{"bidder":"smartadserver","params":{"pageId":1686811,"siteId":"549798","formatId":86009},"includeSchain":true},{"bidder":"smartadserver","params":{"pageId":1686811,"siteId":"549798","formatId":86012},"includeSchain":true},{"bidder":"appnexus","params":{"placementId":"27670897"},"includeSchain":true},{"bidder":"rubicon","params":{"siteId":"447920","zoneId":"2600600","accountId":"17692"},"includeSchain":true}]}],"deviceSizes":[0,0]}],"adUnitPath":"/21622890900,22769507802/ID_twibbonize.com_res_article_anchor_top_728x90//970x90//320x100//320x50","adUnitId":182449,"divID":"ats-overlay_top-5"},"type":"prebid_only","active":false,"domainList":[],"filteringRule":"include","enableKeepingReferrer":false,"enableReferrerTargeting":false,"breakPoint":false,"device":"resp","regex":".*"},{"regex":".*","device":"resp","breakPoint":false,"enableReferrerTargeting":false,"enableKeepingReferrer":false,"filteringRule":"include","domainList":[],"active":false,"type":"overlay","enablePrebid":true,"settings":{"adUnitId":182449,"adUnitPath":"/21622890900,22769507802/ID_twibbonize.com_res_article_anchor_top_728x90//970x90//320x100//320x50","enableSetForceSafeFrameForSlot":false,"divIDs":["ats-overlay_top-5"],"refreshInterval":30,"inViewRate":0,"setCollapseEmptyDiv":"before_fetch","sizeMappingGroup":[{"deviceSizes":[970,500],"sizes":[[728,90],[970,90]]},{"deviceSizes":[728,300],"sizes":[[728,90]]},{"deviceSizes":[0,0],"sizes":[[320,50],[320,100]]}],"useCloseButton":false,"backgroundCss":"","anchorPosition":"top"}},{"regex":".*","device":"pc","breakPoint":false,"enableReferrerTargeting":false,"enableKeepingReferrer":false,"filteringRule":"include","domainList":[],"active":true,"type":"insert_ads","enablePrebid":false,"settings":{"adUnitId":182449,"adUnitPath":"/21622890900,22769507802/ID_twibbonize.com_res_article_anchor_top_728x90//970x90//320x100//320x50","divIDs":["ats-insert_ads-6"],"enableSetForceSafeFrameForSlot":false,"refreshInterval":30,"inViewRate":50,"setCollapseEmptyDiv":"before_fetch","sizeMappingGroup":[{"deviceSizes":[0,0],"sizes":[[728,90]]}],"targetType":"QuerySelector","selector":"#anymind-ads-top-desktop","customCss":"display: block;\\ntext-align: center!important;\\nmargin: 15px 0px 15px 0px;","customCssForShowAdvertisement":"border-top: 1px solid rgb(243, 243, 243);\\nborder-bottom: 1px solid rgb(243, 243, 243);","insertPosition":"afterbegin","isFlexible":false,"numOfAds":1,"selectors":[],"exclusiveSelectors":[],"targetFirstLevelOnly":false,"spacing":1,"showAdvertisement":false,"customShowAdsText":"ADVERTISEMENT","isSticky":false,"stickyStopTarget":"","stickyStopTargetType":"QuerySelector","overrideMargin":false,"stickySizes":[],"enableLazyLoad":false,"lazyLoadMode":2,"lazyLoadConfig":1}},{"regex":".*","device":"sp","breakPoint":false,"enableReferrerTargeting":false,"enableKeepingReferrer":false,"filteringRule":"include","domainList":[],"active":true,"type":"insert_ads","enablePrebid":false,"settings":{"adUnitId":182449,"adUnitPath":"/21622890900,22769507802/ID_twibbonize.com_res_article_anchor_top_728x90//970x90//320x100//320x50","divIDs":["ats-insert_ads-7"],"enableSetForceSafeFrameForSlot":false,"refreshInterval":30,"inViewRate":50,"setCollapseEmptyDiv":"before_fetch","sizeMappingGroup":[{"deviceSizes":[0,0],"sizes":[[320,50],[320,100]]}],"targetType":"QuerySelector","selector":"#anymind-ads-top-mobile","customCss":"display: block;\\ntext-align: center!important;\\nmargin: 15px 0px 15px 0px;","customCssForShowAdvertisement":"border-top: 1px solid rgb(243, 243, 243);\\nborder-bottom: 1px solid rgb(243, 243, 243);","insertPosition":"afterbegin","isFlexible":false,"numOfAds":1,"selectors":[],"exclusiveSelectors":[],"targetFirstLevelOnly":false,"spacing":1,"showAdvertisement":false,"customShowAdsText":"ADVERTISEMENT","isSticky":false,"stickyStopTarget":"","stickyStopTargetType":"QuerySelector","overrideMargin":false,"stickySizes":[],"enableLazyLoad":false,"lazyLoadMode":2,"lazyLoadConfig":1}},{"regex":".*","device":"resp","breakPoint":false,"enableReferrerTargeting":false,"enableKeepingReferrer":false,"filteringRule":"include","domainList":[],"active":true,"type":"adx_inst","settings":{"adUnitPath":"/21622890900,22769507802/ID_twibbonize.com_res_article_interstitial"}}],"information":{"env":"prod","buildDate":"2022-10-21T10:43:09.925Z","versions":{"ads":"3.1.95 ver3","pwa":"1.1.25","core":"1.1.18","bundler":"3.1.132"}},"amPrebidBidderMap":{"criteo":24,"ix":30,"openx":29,"smaato":63,"smartadserver":25,"appnexus":26,"rubicon":34,"pubmatic":27}}'
        );
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var n = (__webpack_module_cache__[e] = { exports: {} });
    return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
  }
  (__webpack_require__.d = function (e, t) {
    for (var n in t)
      __webpack_require__.o(t, n) &&
        !__webpack_require__.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
    (__webpack_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    });
  var __webpack_exports__ = {};
  !(function () {
    var e = function (e) {
      var t = this.constructor;
      return this.then(
        function (n) {
          return t.resolve(e()).then(function () {
            return n;
          });
        },
        function (n) {
          return t.resolve(e()).then(function () {
            return t.reject(n);
          });
        }
      );
    };
    var t = function (e) {
        return new this(function (t, n) {
          if (!e || void 0 === e.length)
            return n(
              new TypeError(
                typeof e +
                  " " +
                  e +
                  " is not iterable(cannot read property Symbol(Symbol.iterator))"
              )
            );
          var i = Array.prototype.slice.call(e);
          if (0 === i.length) return t([]);
          var o = i.length;
          function r(e, n) {
            if (n && ("object" == typeof n || "function" == typeof n)) {
              var s = n.then;
              if ("function" == typeof s)
                return void s.call(
                  n,
                  function (t) {
                    r(e, t);
                  },
                  function (n) {
                    (i[e] = { status: "rejected", reason: n }),
                      0 == --o && t(i);
                  }
                );
            }
            (i[e] = { status: "fulfilled", value: n }), 0 == --o && t(i);
          }
          for (var s = 0; s < i.length; s++) r(s, i[s]);
        });
      },
      n = setTimeout;
    function i(e) {
      return Boolean(e && void 0 !== e.length);
    }
    function o() {}
    function r(e) {
      if (!(this instanceof r))
        throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof e) throw new TypeError("not a function");
      (this._state = 0),
        (this._handled = !1),
        (this._value = void 0),
        (this._deferreds = []),
        d(e, this);
    }
    function s(e, t) {
      for (; 3 === e._state; ) e = e._value;
      0 !== e._state
        ? ((e._handled = !0),
          r._immediateFn(function () {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
              var i;
              try {
                i = n(e._value);
              } catch (e) {
                return void c(t.promise, e);
              }
              a(t.promise, i);
            } else (1 === e._state ? a : c)(t.promise, e._value);
          }))
        : e._deferreds.push(t);
    }
    function a(e, t) {
      try {
        if (t === e)
          throw new TypeError("A promise cannot be resolved with itself.");
        if (t && ("object" == typeof t || "function" == typeof t)) {
          var n = t.then;
          if (t instanceof r) return (e._state = 3), (e._value = t), void l(e);
          if ("function" == typeof n)
            return void d(
              ((i = n),
              (o = t),
              function () {
                i.apply(o, arguments);
              }),
              e
            );
        }
        (e._state = 1), (e._value = t), l(e);
      } catch (t) {
        c(e, t);
      }
      var i, o;
    }
    function c(e, t) {
      (e._state = 2), (e._value = t), l(e);
    }
    function l(e) {
      2 === e._state &&
        0 === e._deferreds.length &&
        r._immediateFn(function () {
          e._handled || r._unhandledRejectionFn(e._value);
        });
      for (var t = 0, n = e._deferreds.length; t < n; t++)
        s(e, e._deferreds[t]);
      e._deferreds = null;
    }
    function _(e, t, n) {
      (this.onFulfilled = "function" == typeof e ? e : null),
        (this.onRejected = "function" == typeof t ? t : null),
        (this.promise = n);
    }
    function d(e, t) {
      var n = !1;
      try {
        e(
          function (e) {
            n || ((n = !0), a(t, e));
          },
          function (e) {
            n || ((n = !0), c(t, e));
          }
        );
      } catch (e) {
        if (n) return;
        (n = !0), c(t, e);
      }
    }
    (r.prototype.catch = function (e) {
      return this.then(null, e);
    }),
      (r.prototype.then = function (e, t) {
        var n = new this.constructor(o);
        return s(this, new _(e, t, n)), n;
      }),
      (r.prototype.finally = e),
      (r.all = function (e) {
        return new r(function (t, n) {
          if (!i(e)) return n(new TypeError("Promise.all accepts an array"));
          var o = Array.prototype.slice.call(e);
          if (0 === o.length) return t([]);
          var r = o.length;
          function s(e, i) {
            try {
              if (i && ("object" == typeof i || "function" == typeof i)) {
                var a = i.then;
                if ("function" == typeof a)
                  return void a.call(
                    i,
                    function (t) {
                      s(e, t);
                    },
                    n
                  );
              }
              (o[e] = i), 0 == --r && t(o);
            } catch (e) {
              n(e);
            }
          }
          for (var a = 0; a < o.length; a++) s(a, o[a]);
        });
      }),
      (r.allSettled = t),
      (r.resolve = function (e) {
        return e && "object" == typeof e && e.constructor === r
          ? e
          : new r(function (t) {
              t(e);
            });
      }),
      (r.reject = function (e) {
        return new r(function (t, n) {
          n(e);
        });
      }),
      (r.race = function (e) {
        return new r(function (t, n) {
          if (!i(e)) return n(new TypeError("Promise.race accepts an array"));
          for (var o = 0, s = e.length; o < s; o++) r.resolve(e[o]).then(t, n);
        });
      }),
      (r._immediateFn =
        ("function" == typeof setImmediate &&
          function (e) {
            setImmediate(e);
          }) ||
        function (e) {
          n(e, 0);
        }),
      (r._unhandledRejectionFn = function (e) {
        "undefined" != typeof console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", e);
      });
    var u = r;
    Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector),
      window.Promise || (window.Promise = u),
      Array.prototype.find ||
        Object.defineProperty(Array.prototype, "find", {
          value: function (e) {
            if (null == this) throw TypeError("'this' is null or not defined");
            var t = Object(this),
              n = t.length >>> 0;
            if ("function" != typeof e)
              throw TypeError("predicate must be a function");
            for (var i = arguments[1], o = 0; o < n; ) {
              var r = t[o];
              if (e.call(i, r, o, t)) return r;
              o++;
            }
          },
          configurable: !0,
          writable: !0,
        });
  })(),
    (function () {
      var e = __webpack_require__(707),
        t = __webpack_require__(878),
        n = __webpack_require__(274),
        i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            i.apply(this, arguments)
          );
        },
        o = ["interstitial", "insert_ads", "overlay", "skyscraper", "parallax"],
        r = ["overlay"],
        s = ["insert_ads", "skyscraper", "parallax"],
        a = o.filter(function (e) {
          return -1 === s.indexOf(e);
        }),
        c = function (e) {
          var c = window !== window.parent,
            l =
              document.location.pathname +
              document.location.search +
              document.location.hash,
            _ = window.location.pathname,
            d =
              "" !== document.referrer
                ? new URL(document.referrer).hostname
                : "",
            u = {
              siteSetting: e.siteSetting,
              configs: [],
              apmConfig: { pageId: null, formats: [] },
              gptSlotConfigsForSRA: [],
              gptSlotConfigs: [],
              adxInstSetting: { adUnitPath: "" },
              prebidOnlySlotsDivIds: [],
              separateRequestDivIds: [],
              prebidAnalyticsConfig: {
                adUnitIdPathMapping: {},
                amPrebidBidderMap: e.amPrebidBidderMap,
              },
            },
            p = [],
            f = {},
            g = (0, n.j)();
          t.ZP.log("device: ", g), t.ZP.log("url path: ", _);
          var h = e.siteSetting,
            b = h.enableUrlBlock,
            E = h.blockedUrls,
            m = h.enableGamSingleRequest,
            v = h.enableSeparateRequest,
            y = h.enablePrebid,
            P = h.keywordsBlock;
          if (
            e.configs.some(function (e) {
              return (
                e.enableReferrerTargeting &&
                e.enableKeepingReferrer &&
                e.domainList
              );
            })
          ) {
            var A = (0, n.Lp)(u.siteSetting.hostNames, location.hostname),
              S = (0, n.WD)(A, d);
            n.hu.splice(0),
              n.hu.push.apply(
                n.hu,
                (0, n.N6)(A, "ats_ads_referrer_history", d, S)
              );
          }
          if (b && (0, n.QL)(E, l)) return u;
          for (
            var D = function (l) {
                var h = e.configs[l];
                if (
                  r.some(function (e) {
                    return h.type === e;
                  }) &&
                  c
                )
                  return "continue";
                if (
                  (0, n.ht)(h, _) &&
                  (0, n.Cf)(h.device, g) &&
                  (0, n.p4)(h, d) &&
                  (0, n.WX)(h, n.hu)
                ) {
                  if (
                    o.some(function (e) {
                      return h.type === e;
                    })
                  ) {
                    var b = h.settings,
                      E = b.adUnitPath;
                    (D = b.divIDs).forEach(function (e) {
                      u.gptSlotConfigs.push({ adUnitPath: E, divId: e });
                    });
                  }
                  if (m || y || !(0, n.SI)(P)) {
                    if (
                      (v ? a : o).some(function (e) {
                        return h.type === e;
                      }) &&
                      (h.active || t.ZP.isDev)
                    ) {
                      var A = h.settings,
                        S = A.adUnitPath,
                        D = A.divIDs,
                        M = A.setCollapseEmptyDiv,
                        w = A.sizeMappingGroup,
                        O = A.setTargetingConfigs,
                        I = A.enableSetForceSafeFrameForSlot;
                      D.forEach(function (e) {
                        u.gptSlotConfigsForSRA.push({
                          adUnitPath: S,
                          sizes: [[300, 250]],
                          divId: e,
                          setCollapseEmptyDiv: M,
                          sizeMappingGroup: w,
                          setTargetingConfigs: O,
                          enableSetForceSafeFrameForSlot: I,
                        });
                      });
                    }
                    if (
                      v &&
                      s.some(function (e) {
                        return h.type === e;
                      }) &&
                      (h.active || t.ZP.isDev)
                    ) {
                      D = h.settings.divIDs;
                      u.separateRequestDivIds =
                        u.separateRequestDivIds.concat(D);
                    }
                    if ("prebid_only" === h.type && (h.active || t.ZP.isDev)) {
                      var T = h.settings.divID;
                      p.push(T),
                        (f[T] = {
                          id: h.settings.adUnitId,
                          path: h.settings.adUnitPath,
                        });
                    }
                    "adx_inst" === h.type &&
                      (h.active || t.ZP.isDev) &&
                      (u.adxInstSetting = i({}, h.settings));
                  }
                  if (
                    ("apm" === h.type &&
                      (u.apmConfig.formats.push({ id: h.settings.formatId }),
                      (u.apmConfig.pageId = h.settings.pageId)),
                    "parallax" === h.type &&
                      /(trident|msie)/i.test(navigator.userAgent))
                  )
                    return "continue";
                  if (
                    (u.configs.push(h),
                    h.breakPoint && (h.active || t.ZP.isDev))
                  )
                    return (
                      t.ZP.log("this is break point, config: ", h), "break"
                    );
                }
              },
              M = 0;
            M < e.configs.length;
            M++
          ) {
            if ("break" === D(M)) break;
          }
          return (
            (u.prebidOnlySlotsDivIds = p.filter(function (e) {
              return !u.gptSlotConfigs.some(function (t) {
                return t.divId === e;
              });
            })),
            (u.prebidAnalyticsConfig.adUnitIdPathMapping = f),
            u
          );
        },
        l = (window.anymindTS = window.anymindTS || { que: [] });
      try {
        !(function (n) {
          try {
            if (
              (t.ZP.log(
                "\nenv: "
                  .concat(n.information.env, "\nversion: ")
                  .concat(n.information.versions.ads, " \nbuild date: ")
                  .concat(n.information.buildDate, "\nsite id: ")
                  .concat(n.siteSetting.siteId)
              ),
              window.anymindTS.loaded)
            )
              t.ZP.error("already ATS is executed");
            else {
              var i = l.que.slice();
              l.que.splice(0),
                (window.startAnymindTS = function () {
                  var o;
                  if (
                    null === (o = window.anymindTS) || void 0 === o
                      ? void 0
                      : o.notYetDiscarded
                  )
                    t.ZP.error(
                      new Error("Please execute 'window.anymindTS.dispose();'.")
                    );
                  else {
                    t.ZP.log("original config: ", n);
                    var r = c(n);
                    t.ZP.log("new config: ", r),
                      (window.anymindTS = new e.Z(r)),
                      i.length > 0 &&
                        (i.forEach(function (e) {
                          try {
                            e();
                          } catch (e) {
                            t.ZP.error(e);
                          }
                        }),
                        i.splice(0));
                  }
                }),
                n.siteSetting.isSPA || window.startAnymindTS();
            }
          } catch (e) {
            t.ZP.error(e);
          }
        })(__webpack_require__(581));
      } catch (e) {
        t.ZP.error(e);
      }
    })();
})();
