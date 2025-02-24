!function (e) {
    var t =  {};
     function n(r) {
        if (t[r])
        return t[r].exports;
        var o =  t[r] =  {
             i:  r,
             l:  ! 1,
             exports:  {}
        };
        return e[r].call(o.exports,  o,  o.exports,  n),
         o.l =  ! 0,
         o.exports
    } n.m =  e,
     n.c =  t,
     n.d =  function (e,  t,  r) {
         n.o(e,  t) ||  Object.defineProperty(e,  t,  {
             enumerable:  ! 0,
             get:  r
        })
    },
     n.r =  function (e) {
         "undefined" !=  typeof Symbol &&  Symbol.toStringTag &&  Object.defineProperty(e,  Symbol.toStringTag,  {
             value:  "Module"
        }),
         Object.defineProperty(e,  "__esModule",  {
             value:  ! 0
        })
    },
     n.t =  function (e,  t) {
        if (1 &  t &&  (e =  n(e)),  8 &  t)
        return e;
        if (4 &  t &&  "object" ==  typeof e &&  e &&  e.__esModule)
        return e;
        var r =  Object.create(null);
        if (n.r(r),  Object.defineProperty(r,  "default",  {
             enumerable:  ! 0,
             value:  e
        }),  2 &  t &&  "string" !=  typeof e)
        for (var o in  e) n.d(r,  o,  function (t) {
            return e[t]
        }.bind(null,  o));
        return r
    },
     n.n =  function (e) {
        var t =  e &&  e.__esModule ?  function () {
            return e.
        default
        } :
         function () {
            return e
        };
        return n.d(t,  "a",  t),
         t
    },
     n.o =  function (e,  t) {
        return Object.prototype.hasOwnProperty.call(e,  t)
    },
     n.p =  "",
     n(n.s =  2)
} ([function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.arrayUnique =  t.arrayFind =  void 0,
     t.arrayFind =  function (e,  t) {
        for (var n =  e.length,  r =  0;
         r <  n;
         r++) {
            var o =  e[r];
            if (t.call(e,  o,  r,  e))
            return o
        }
    },
     t.arrayUnique =  function (e) {
        return e.filter((function (e,  t,  n) {
            return n.indexOf(e) ===  t
        }))
    }
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.TYPE_ATTRIBUTE =  void 0,
     t.TYPE_ATTRIBUTE =  "javascript/blocked"
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    });
    var r =  n(3),
     o =  n(4),
     i =  n(5),
     a =  n(6),
     s =  n(7),
     c =  n(8),
     u =  n(9),
     l =  n(11),
     d =  n(12),
     p =  n(13);
     ! function () {
        var e =  a.DEFAULT_CONFIGURATION;
         window._cookieConsent &&  p.extendObject(e,  window._cookieConsent);
        var t =  new c.Gate(localStorage,  e.resources);
         t.load();
        var n =  new d.Unblocker(t);
         new i.Css(e.theme).install();
        var b =  new s.DomObserver(t,  n);
         b.observe();
        var h =  new o.CreateElementObserver(t);
         h.observe();
        var f =  l.getTranslation(e.language,  e.translations),
         y =  new r.Banner(f,  e.privacyPolicyUrl,  e.autoFocus),
         v =  new u.Manager(y,  t,  n);
         window.cookieManager =  v,
         window.addEventListener("DOMContentLoaded",  (function () {
             setTimeout((function () {
                 v.editNewConsents()
            }))
        }),  {
             once:  ! 0
        }),
         window.addEventListener("beforeunload",  (function () {
             b.disconnect(),
             h.disconnect()
        }),  {
             once:  ! 0
        })
    } ()
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.sortConsents =  t.copyConsents =  t.getConsentLabelText =  t.createElement =  t.Banner =  void 0;
    var r =  n(0),
     o =  function () {
         function e(e,  t,  n) {
             this.translation =  e,
             this.privacyPolicyUrl =  t,
             this.autoFocus =  n
        }
        return e.prototype.isOpened =  function () {
            return !! this.banner
        },
         e.prototype.show =  function (e,  t) {
            var n =  this;
            if (this.banner)
            throw new Error("Banner is opened now.");
             this.consents =  e.map((function (e) {
                var t =  "necessary" ===  e.category;
                return {
                     category:  e.category,
                     isAllowed:  !! t ||  e.isAllowed,
                     isReadonly:  t,
                     label:  a(n.translation,  e.category)
                }
            })),
             c(this.consents),
             this.onClose =  t,
             this.install()
        },
         e.prototype.close =  function (e) {
            if (!this.banner)
            throw new Error("Banner is closed now.");
            var t =  s(this.consents,  e);
             this.onClose(t),
             this.onClose =  null,
             this.consents =  null,
             this.uninstall()
        },
         e.prototype.install =  function () {
            var e =  this;
             this.banner =  i("div",  "bnn-banner");
            var t =  i("div",  "bnn-banner-title");
             t.innerText =  this.translation.bannerTitle,
             this.banner.appendChild(t);
            var n =  i("div",  "bnn-banner-description");
            if (n.innerText =  this.translation.bannerDescription,  this.banner.appendChild(n),  this.privacyPolicyUrl) {
                var r =  i("div",  "bnn-privacy-policy"),
                 o =  i("a",  "bnn-privacy-policy-link");
                 o.setAttribute("href",  this.privacyPolicyUrl),
                 o.innerText =  this.translation.bannerOpenPrivacyPolicy,
                 r.appendChild(o),
                 this.banner.appendChild(r)
            }
            for (var a =  i("div",  "bnn-banner-consents"),  s =  0,  c =  this.consents;
             s <  c.length;
             s++) {
                var u =  c[s];
                 a.appendChild(this.createConsent(u))
            } this.banner.appendChild(a);
            var l =  i("div",  "bnn-banner-buttons");
             this.banner.appendChild(l);
            var d =  i("button",  "bnn-banner-button");
             d.setAttribute("type",  "button"),
             d.setAttribute("name",  "bnn-save"),
             d.setAttribute("tabindex",  "99999"),
             d.innerText =  this.translation.save,
             d.addEventListener("click",  (function (t) {
                return e.onSaveClicked(t)
            })),
             l.appendChild(d),
             this.acceptAllButton =  i("button",  "bnn-banner-button"),
             d.setAttribute("type",  "button"),
             this.acceptAllButton.setAttribute("name",  "bnn-accept-all"),
             this.acceptAllButton.setAttribute("tabindex",  "99998"),
             this.acceptAllButton.innerText =  this.translation.acceptAll,
             this.acceptAllButton.addEventListener("click",  (function (t) {
                return e.onSaveClicked(t,  ! 0)
            })),
             l.appendChild(this.acceptAllButton),
             this.embed()
        },
         e.prototype.embed =  function () {
            var e =  this;
             document.body ?  (document.body.appendChild(this.banner),  this.autoFocus &&  this.acceptAllButton.focus()) :  setTimeout((function () {
                return e.embed()
            }),  25)
        },
         e.prototype.uninstall =  function () {
             this.banner.parentElement.removeChild(this.banner),
             this.banner =  null
        },
         e.prototype.createConsent =  function (e) {
            var t =  this,
             n =  i("div",  "bnn-banner-consent"),
             r =  i("span",  "bnn-banner-consent-switch");
             r.setAttribute("data-category",  e.category),
             r.setAttribute("data-checked",  e.isAllowed ?  "1" :  "0"),
             r.setAttribute("data-enabled",  e.isReadonly ?  "0" :  "1"),
             n.appendChild(r);
            var o =  i("span",  "bnn-banner-consent-label");
            return o.innerText =  e.label,
             n.appendChild(o),
             e.isReadonly ||  (r.addEventListener("click",  (function (n) {
                return t.onSwitchClicked(n,  r,  e.category)
            })),  o.addEventListener("click",  (function (n) {
                return t.onSwitchClicked(n,  r,  e.category)
            }))),
             n
        },
         e.prototype.onSwitchClicked =  function (e,  t,  n) {
             e.preventDefault(),
             e.stopPropagation();
            var o =  r.arrayFind(this.consents,  (function (e) {
                return e.category ===  n
            }));
             o.isAllowed =  ! o.isAllowed,
             t.setAttribute("data-checked",  o.isAllowed ?  "1" :  "0")
        },
         e.prototype.onSaveClicked =  function (e,  t) {
             e.preventDefault(),
             e.stopPropagation(),
             this.close(t)
        },
         e
    } ();
     function i(e,  t) {
        var n =  document.createElement(e);
        return n.className =  t,
         n
    } function a(e,  t) {
        switch (t) {
        case "necessary":
            return e.necessary;
        case "preferences":
            return e.preferences;
        case "statistics":
            return e.statistics;
        case "marketing":
            return e.marketing;
        case "unclassified":
            return e.unclassified;
        default:
            throw new Error("Not supported category: " +  t +  ".")
        }
    } function s(e,  t) {
        return e.map((function (e) {
            return {
                 category:  e.category,
                 isAllowed:  void 0 !==  t ?  t :  e.isAllowed
            }
        }))
    } function c(e) {
         e.sort((function (e,  t) {
            return e.label.localeCompare(t.label)
        }));
        var t =  r.arrayFind(e,  (function (e) {
            return e.isReadonly
        }));
        if (t &&  e.length >  1) {
            var n =  e.indexOf(t),
             o =  e[0];
             e[0] =  e[n],
             e[n] =  o
        }
    } t.Banner =  o,
     t.createElement =  i,
     t.getConsentLabelText =  a,
     t.copyConsents =  s,
     t.sortConsents =  c
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.CreateElementObserver =  void 0;
    var r =  n(1),
     o =  function () {
         function e(e) {
             this.gate =  e
        }
        return e.prototype.observe =  function () {
            var e =  this;
             this.createElement =  document.createElement,
             this.srcDescriptor =  Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype,  "src"),
             this.typeDescriptor =  Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype,  "type");
            var t =  this;
             document.createElement =  function () {
                for (var n =  [],  o =  0;
                 o <  arguments.length;
                 o++) n[o] =  arguments[o];
                var i =  e.createElement.bind(document).apply(void 0,  n);
                if ("script" !==  i.tagName.toLowerCase())
                return i;
                var a =  i;
                try {
                     Object.defineProperties(a,  {
                         src:  {
                             get:  function () {
                                return t.srcDescriptor.get.call(this)
                            },
                             set:  function (e) {
                                var n =  t.gate.determineResource("script",  e);
                                 t.gate.isAllowed(n.category) ||  t.typeDescriptor.set.call(this,  r.TYPE_ATTRIBUTE),
                                 t.srcDescriptor.set.call(this,  e)
                            }
                        },
                         type:  {
                             set:  function (e) {
                                if (a.src) {
                                    var n =  t.gate.determineResource("script",  a.src);
                                     t.gate.isAllowed(n.category) ||  (e =  r.TYPE_ATTRIBUTE)
                                } t.typeDescriptor.set.call(this,  e)
                            }
                        }
                    }),
                     a.setAttribute =  function (e,  t) {
                         "type" ===  e ||  "src" ===  e ?  a[e] =  t :  HTMLScriptElement.prototype.setAttribute.call(a,  e,  t)
                    }
                }
                catch (e) {
                     console.warn("[CookieBanner] Unable to prevent script execution for script src.")
                }
                return a
            }
        },
         e.prototype.disconnect =  function () {
             document.createElement =  this.createElement
        },
         e
    } ();
     t.CreateElementObserver =  o
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.Css =  void 0;
    var r =  function () {
         function e(e) {
             this.theme =  e
        }
        return e.prototype.install =  function () {
            if (this.style)
            throw new Error("CSS is already installed.");
             this.style =  document.createElement("style"),
             this.style.setAttribute("type",  "text/css");
            var e =  document.getElementsByTagName("script")[0];
             e.parentElement.insertBefore(this.style,  e);
            var t =  this.style.sheet,
             n =  this.theme,
             r =  n.colors,
             o =  r[0],
             i =  r[1],
             a =  r[2],
             s =  r[3],
             c =  r[4],
             u =  r[5],
             l =  r[6],
             d =  r[7],
             p =  r[8];
             t.addRule(".bnn-banner, .bnn-banner-description, .bnn-banner-button",  "font-size: " +  n.fontSize +  "px; line-height: " +  n.lineHeight +  "px;"),
             t.addRule(".bnn-banner",  "z-index: 999999; width: " +  n.bannerWidth +  "px; position: fixed; left: " +  n.spacing +  "px; bottom: " +  n.spacing +  "px; padding: " +  2 *  n.spacing +  "px; background: " +  o +  "; border: " +  n.borderSize +  "px solid " +  l +  "; box-sizing: border-box; box-shadow: 0 0 4px rgba(0, 0, 0, 0.25); border-radius: " +  n.radius +  "px;",  0),
             t.insertRule("@media screen and (max-width: " +  2 *  n.bannerWidth +  "px) { .bnn-banner {left: 0; bottom: 0; width: 100%;} }",  1),
             t.addRule(".bnn-banner-title",  "font-weight: bold; color: " +  i +  "; font-size: " +  n.headerFontSize +  "px; line-height: " +  n.headerLineHeight +  "px;"),
             t.addRule(".bnn-banner-description",  "margin: " +  n.spacing +  "px 0; color: " +  i +  ";"),
             t.addRule(".bnn-privacy-policy",  "margin-bottom: " +  n.spacing +  "px;"),
             t.addRule(".bnn-privacy-policy-link",  "color: " +  a +  " !important; text-decoration: underline !important;"),
             t.addRule(".bnn-privacy-policy-link:hover",  "color: " +  a +  " !important; text-decoration: none !important;"),
             t.addRule(".bnn-banner-consent",  "padding: " +  n.spacing +  "px 0; border-top: " +  n.borderSize +  "px solid " +  l +  ";"),
             t.addRule(".bnn-banner-consent-switch",  "position: relative; display: inline-block; background: " +  l +  "; width: 56px; height: 30px; border-radius: " +  n.radius +  "px; vertical-align: middle; transition: background 0.2s ease;"),
             t.addRule('.bnn-banner-consent-switch[data-enabled="1"]',  "background: " +  l +  "; cursor: pointer;"),
             t.addRule('.bnn-banner-consent-switch[data-enabled="1"]:hover',  "background: " +  d +  ";"),
             t.addRule(".bnn-banner-consent-switch::after",  "content: ' '; position: absolute; top: 0; left: 0; display: block; width: 22px; height: 22px; margin: 4px; background: " +  u +  "; border-radius: " +  n.radius +  "px; transition: left 0.2s ease;"),
             t.addRule('.bnn-banner-consent-switch[data-checked="1"]::after',  "left: 26px;"),
             t.addRule('.bnn-banner-consent-switch[data-enabled="1"]::after',  "background: " +  a +  ";"),
             t.addRule('.bnn-banner-consent-switch[data-checked="1"][data-enabled="1"]::after',  "background: " +  p +  ";"),
             t.addRule('.bnn-banner-consent-switch[data-enabled="1"][data-checked="1"]',  "background: " +  a +  ";"),
             t.addRule('.bnn-banner-consent-switch[data-enabled="1"][data-checked="1"]:hover',  "background: " +  c +  ";"),
             t.addRule(".bnn-banner-consent-label",  "font-weight: 600; margin-left: " +  n.spacing +  "px; color: " +  i +  "; cursor: pointer;"),
             t.addRule(".bnn-banner-buttons",  "border-top: " +  n.borderSize +  "px solid " +  l +  "; text-align: center;"),
             t.addRule(".bnn-banner-button",  "display: block; border: 0; outline: 0; color: " +  s +  "; background: " +  a +  "; border-radius: " +  n.radius +  "px; transition: background 0.2s ease; font-weight: 600; margin: " +  n.spacing +  "px 0 0; padding: " +  n.spacing +  "px; width: 100%; box-sizing: border-box; cursor: pointer;"),
             t.addRule(".bnn-banner-button:hover, .bnn-banner-button:active, .bnn-banner-button:focus",  "color: " +  s +  "; background: " +  c +  ";"),
             t.addRule(".bnn-banner-button:focus",  "box-shadow: 0 0 3px " +  c +  ";")
        },
         e.prototype.uninstall =  function () {
             this.style.parentElement.removeChild(this.style),
             this.style =  null
        },
         e
    } ();
     t.Css =  r
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.DEFAULT_CONFIGURATION =  t.DEFAULT_THEME =  t.DEFAULT_TRANSLATIONS =  void 0,
     t.DEFAULT_TRANSLATIONS =  {
         message:  {
             bannerTitle:  "This website uses cookies",
             bannerDescription:  "We uses cookies to improve user experience. Choose what cookies you allow us to use. You can read more about our Cookie Policy in our Privacy Policy.",
             bannerOpenPrivacyPolicy:  "Go to Privacy Policy",
             save:  "Save",
             acceptAll:  "Accept all",
             marketing:  "Marketing",
             necessary:  "Necessary",
             preferences:  "Preferences",
             statistics:  "Statistics",
             unclassified:  "Unclassified"
        }
    },
     t.DEFAULT_THEME =  {
         radius:  5,
         spacing:  10,
         borderSize:  1,
         bannerWidth:  280,
         fontSize:  14,
         lineHeight:  20,
         headerFontSize:  22,
         headerLineHeight:  28,
         colors:  ["#FFF",  "#000",  "#143D4D",  "#FFF",  "#215264",  "#6F7C7E",  "#E0E0E0",  "#CECECE",  "#FFF"]
    },
     t.DEFAULT_CONFIGURATION =  {
         autoFocus:  ! 1,
         resources:  [],
         theme:  t.DEFAULT_THEME,
         translations:  t.DEFAULT_TRANSLATIONS,
         privacyPolicyUrl:  null
    }
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.createPlaceholder =  t.DomObserver =  void 0;
    var r =  n(1),
     o =  function () {
         function e(e,  t) {
            var n =  this;
             this.gate =  e,
             this.unblocker =  t,
             this.observer =  new MutationObserver((function (e) {
                for (var t =  0;
                 t <  e.length;
                 t++)
                for (var r =  e[t].addedNodes,  o =  0;
                 o <  r.length;
                 o++) n.handle(r[o])
            }))
        }
        return e.prototype.handle =  function (e) {
             "SCRIPT" ===  e.tagName ?  this.handleScript(e) :  "IFRAME" ===  e.tagName &&  this.handleIframe(e)
        },
         e.prototype.handleScript =  function (e) {
            var t =  this.tryDetermineResource("script",  e);
            if (t &&  ! this.gate.isAllowed(t.category)) {
                 this.unblocker.backupNode(e,  t);
                var n =  e.type;
                 n &&  n !==  r.TYPE_ATTRIBUTE &&  e.setAttribute("data-original-type",  n),
                 e.type =  r.TYPE_ATTRIBUTE;
                var o =  function (t) {
                     e.getAttribute("type") ===  r.TYPE_ATTRIBUTE &&  t.preventDefault(),
                     e.removeEventListener("beforescriptexecute",  o)
                };
                 e.addEventListener("beforescriptexecute",  o),
                 e.parentElement &&  e.parentElement.removeChild(e)
            }
        },
         e.prototype.handleIframe =  function (e) {
            var t =  this.tryDetermineResource("iframe",  e);
            if (t &&  ! this.gate.isAllowed(t.category) &&  (this.unblocker.backupNode(e,  t),  e.parentElement)) {
                var n =  a();
                 e.setAttribute("data-placeholder-id",  n.id),
                 e.parentElement.insertBefore(n,  e),
                 e.parentElement.removeChild(e)
            }
        },
         e.prototype.tryDetermineResource =  function (e,  t) {
            var n =  t.src;
            return n ?  this.gate.determineResource(e,  n) :  null
        },
         e.prototype.observe =  function () {
             this.observer.observe(document.documentElement,  {
                 childList:  ! 0,
                 subtree:  ! 0
            })
        },
         e.prototype.disconnect =  function () {
             this.observer.disconnect()
        },
         e
    } ();
     t.DomObserver =  o;
    var i =  0;
     function a() {
        var e =  document.createElement("span"),
         t =  "_bnnPlaceholder" +  i++;
        return e.id =  t,
         e.style.display =  "none",
         e
    } t.createPlaceholder =  a
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.MemoryStorage =  t.Gate =  t.CONSENTS_STORAGE_KEY =  void 0;
    var r =  n(0);
     t.CONSENTS_STORAGE_KEY =  "_cookieConsents";
    var o =  function () {
         function e(e,  t) {
             this.storage =  e,
             this.definedResources =  t,
             this.consents =  [],
             this.knownResources =  [],
             this.unknownResources =  []
        }
        return e.prototype.load =  function () {
            var e =  this,
             n =  this.storage.getItem(t.CONSENTS_STORAGE_KEY);
             n &&  JSON.parse(n).forEach((function (t) {
                return e.consents.push(t)
            }))
        },
         e.prototype.save =  function () {
            var e =  JSON.stringify(this.consents);
             this.storage.setItem(t.CONSENTS_STORAGE_KEY,  e)
        },
         e.prototype.setConsent =  function (e) {
            var t =  r.arrayFind(this.consents,  (function (t) {
                return t.category ===  e.category
            }));
             t ?  t.isAllowed =  e.isAllowed :  this.consents.push(e)
        },
         e.prototype.determineResource =  function (e,  t) {
            var n =  r.arrayFind(this.definedResources,  (function (n) {
                //return n.type ===  e &&  ("string" ==  typeof n.url ?  n.url ===  t :  n.url.test(t))
                return true
            }));
            return n ?  this.getOrCreateResource(this.knownResources,  e,  t,  n.category) :  (console.warn("[CookieBanner] Resource " +  t +  " (" +  e +  ") cannot be classified."),  this.getOrCreateResource(this.unknownResources,  e,  t,  "unclassified"))
        },
         e.prototype.getOrCreateResource =  function (e,  t,  n,  o) {
            var i =  r.arrayFind(e,  (function (e) {
                return e.type ===  t &&  e.url ===  n &&  e.category ===  o
            }));
            return i ||  (i =  {
                 type:  t,
                 url:  n,
                 category:  o
            },
             e.push(i)),
             i
        },
         e.prototype.isAllowed =  function (e) {
            if ("necessary" !==  e) {
                var t =  r.arrayFind(this.consents,  (function (t) {
                    return t.category ===  e
                }));
                return !! t &&  t.isAllowed
            }
            return ! 0
        },
         e.prototype.hasConsent =  function (e) {
            return !! r.arrayFind(this.consents,  (function (t) {
                return t.category ===  e
            }))
        },
         e.prototype.getConsents =  function () {
            return this.consents
        },
         e.prototype.getKnownCategories =  function () {
            var e =  this.definedResources.concat(this.unknownResources).map((function (e) {
                return e.category
            }));
            return r.arrayUnique(e)
        },
         e
    } ();
     t.Gate =  o;
    var i =  function () {
         function e() {
             this._values =  {}
        }
        return e.prototype.getItem =  function (e) {
            return this._values[e]
        },
         e.prototype.setItem =  function (e,  t) {
             this._values[e] =  t
        },
         e.prototype.count =  function () {
            return Object.keys(this._values).length
        },
         e
    } ();
     t.MemoryStorage =  i
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.Manager =  void 0;
    var r =  n(10),
     o =  function () {
         function e(e,  t,  n) {
             this.banner =  e,
             this.gate =  t,
             this.unblocker =  n,
             this.listeners =  []
        }
        return e.prototype.listen =  function (e) {
             this.listeners.push(e)
        },
         e.prototype.notifyListeners =  function (e) {
            for (var t =  0;
             t <  this.listeners.length;
             t++) this.listeners[t](e)
        },
         e.prototype.getConsents =  function () {
            return this.gate.getConsents()
        },
         e.prototype.editGrantedConsents =  function () {
            var e =  this,
             t =  this.gate.getConsents();
             this.showBanner(t,  (function (n) {
                var o =  r.compareConsents(t,  n);
                 e.saveConsents(n),
                 "added" ===  o ?  e.unblock() :  "removed" ===  o &&  e.block()
            }))
        },
         e.prototype.editNewConsents =  function () {
            var e =  this,
             t =  this.gate.getKnownCategories();
            if (t.filter((function (t) {
                return ! e.gate.hasConsent(t)
            })).length >  0) {
                var n =  t.map((function (t) {
                    return {
                         category:  t,
                         isAllowed:  e.gate.isAllowed(t)
                    }
                }));
                 this.showBanner(n,  (function (t) {
                     e.saveConsents(t),
                     e.unblock()
                }))
            }
        },
         e.prototype.showBanner =  function (e,  t) {
            var n =  this;
             this.banner.isOpened() ||  (this.notifyListeners("bannerOpened"),  this.banner.show(e,  (function (e) {
                 n.notifyListeners("bannerClosed"),
                 t(e)
            })))
        },
         e.prototype.saveConsents =  function (e) {
            var t =  this;
             e.forEach((function (e) {
                return t.gate.setConsent(e)
            })),
             this.gate.save(),
             this.notifyListeners("consentsChanged")
        },
         e.prototype.unblock =  function () {
             this.notifyListeners("beforeUnblocking"),
             this.unblocker.unblock()
        },
         e.prototype.block =  function () {
             this.notifyListeners("beforeReloading"),
             this.reloadPage()
        },
         e.prototype.reloadPage =  function () {
             window.location.reload()
        },
         e
    } ();
     t.Manager =  o
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.compareConsents =  void 0,
     t.compareConsents =  function (e,  t) {
        for (var n,  r =  "noChange",  o =  0,  i =  t;
         o <  i.length;
         o++) {
            var a =  i[o];
            if ("removed" ===  r)
            break;
             n =  ! 0;
            for (var s =  0,  c =  e;
             s <  c.length;
             s++) {
                var u =  c[s];
                if (a.category ===  u.category) {
                     a.isAllowed !==  u.isAllowed &&  (r =  a.isAllowed ?  "added" :  "removed"),
                     n =  ! 1;
                    break
                }
            } n &&  (r =  a.isAllowed ?  "added" :  "removed")
        }
        return r
    }
},
 function (e,  t,  n) {
     "use strict";
     function r(e,  t) {
        return t.indexOf(e) >=  0 ?  e :  t[0]
    } Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.determineLanguage =  t.getTranslation =  void 0,
     t.getTranslation =  function (e,  t) {
        return t[e =  r(e,  Object.keys(t))]
    },
     t.determineLanguage =  r
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.Unblocker =  void 0;
    var r =  function () {
         function e(e) {
             this.gate =  e,
             this.backupedNodes =  []
        }
        return e.prototype.backupNode =  function (e,  t) {
             this.backupedNodes.push({
                 node:  e,
                 resource:  t
            })
        },
         e.prototype.unblock =  function () {
            for (var e =  this,  t =  0,  n =  this.backupedNodes.filter((function (t) {
                return e.gate.isAllowed(t.resource.category)
            })) ;
             t <  n.length;
             t++) {
                var r =  n[t];
                switch (this.backupedNodes.splice(this.backupedNodes.indexOf(r),  1),  r.resource.type) {
                case "script":
                     this.unblockScript(r.node);
                    break;
                case "iframe":
                     this.unblockIframe(r.node)
                }
            }
        },
         e.prototype.unblockScript =  function (e) {
            var t =  document.createElement("script"),
             n =  e.getAttribute("data-original-type");
             t.src =  e.src,
             t.type =  n ||  "application/javascript";
            for (var r =  e.attributes,  o =  0;
             o <  r.length;
             o++) {
                var i =  r[o],
                 a =  i.name;
                 (0 ===  a.indexOf("on") ||  "id" ===  a ||  0 ===  a.indexOf("data-") &&  "data-original-type" !==  a) &&  t.setAttribute(a,  i.value)
            } document.head.appendChild(t)
        },
         e.prototype.unblockIframe =  function (e) {
            var t =  e.getAttribute("data-placeholder-id"),
             n =  document.getElementById(t);
             n.parentElement.insertBefore(e,  n),
             n.parentElement.removeChild(n)
        },
         e
    } ();
     t.Unblocker =  r
},
 function (e,  t,  n) {
     "use strict";
     Object.defineProperty(t,  "__esModule",  {
         value:  ! 0
    }),
     t.extendObject =  void 0,
     t.extendObject =  function e(t,  n) {
        if (!t ||  ! n)
        throw new Error("Invalid arguments.");
        for (var r =  0,  o =  Object.keys(n) ;
         r <  o.length;
         r++) {
            var i =  o[r],
             a =  n[i];
             "object" !=  typeof a ||  a instanceof RegExp ?  t[i] =  n[i] :  (t[i] ||  (t[i] =  {}),  e(t[i],  n[i]))
        }
    }
}]); //The MIT License (MIT)   -   Copyright (c) 2020 ProService Finteco   -   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:   -   The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.   -   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
