(function () {
  'use strict';
  angular
    .module('starter', [
      'ionic',
      //'ionic.service.core',
      //'ionic.service.analytics',
      'ionic-cache-src',
      'formlyIonic',
      'ngCookies',
      'pascalprecht.translate', // angular-translate
      'tmh.dynamicLocale', // angular-dynamic-locale
      'angularMoment',
      'ionic.components',
      'ngFacebook',
      'uiGmapgoogle-maps',
      'angular-cache',
      'ngCordova',
      'app.intro',
      'app.loading',
      'app.user',
      'app.photogram',
    ]);

})();

(function () {
  'use strict';
  angular
    .module('ionic.components', [
      'ionic',
      'ionic-loading',
      // 'ion-affix',
      'ion-photo',
      'ion-location',
      'ion-notify',
      'ngCache',
      'ngParse',
    ]);
})();

(function () {
  'use strict';

  var default_config = {
    color: '#1D5ECE',
    bgcolor: '#eaeaea',
    semi: false,
    rounded: false,
    clockwise: true,
    radius: '15',
    stroke: '5',
    max: 100,
    iterations: 50,
    animation: 'easeOutCubic',
    interval: 200,
    showProgressCircleInBrowser: true,
    showProgressCircleInDevice: true
  };


  angular
    .module('ionic-cache-src', [
      'ionic',
      'angular-svg-round-progress',
      'ngCordova',
      'ngStorage'
    ])
    .provider('$cacheSrc', $cacheSrc);

  function $cacheSrc() {
    this.config = default_config;
    this.set = function (obj, val) {
      var t = typeof obj;
      if (t === 'object') {
        angular.extend(this.config, obj);
      } else if (t == 'string') {
        this.config[obj] = val;
      }
      return this;
    };

    this.$get = function () {
      return this.config;
    };
  }


})();

(function () {
  'use strict';
  angular
    .module('ionic-loading', ['ionic'])
    .run(runLoading);

  function runLoading($rootScope, $ionicLoading) {
    //Loading
    $rootScope.$on('ionicLoading:true', function (text) {
      $rootScope.loading = true;
      $ionicLoading.show(text);
    });
    $rootScope.$on('ionicLoading:false', function () {
      $rootScope.loading = false;
      $ionicLoading.hide();
    });
  }

})();

(function () {
  'use strict';
  angular
    .module('ion-location', [
      'ionic'
    ]);

})();

(function () {
  'use strict';

  angular
    .module('ion-notify', ['ionic'])
    .factory('Notify', Notify);

  function Notify($ionicPopup) {

    return {
      alert: alert,
      confirm: confirm
    };

    function alert(params) {
      return $ionicPopup.alert({
        title: params.title,
        template: params.text
      });
    }

    function confirm(title, msg) {
      return $ionicPopup.confirm({
        title: title,
        template: msg
      });
    }
  }


})();

(function () {
    'use strict';
    angular
        .module('ion-photo', [
            'ionic',
            'ngCordova',
            'jrCrop'
        ])
        .constant('config', {
            path: 'app/component/ion-photo'
        })
        .config(configTranslate);

    function configTranslate($translatePartialLoaderProvider, config) {
        $translatePartialLoaderProvider.addPart(config.path);
    }

})();

(function () {
  'use strict';

  angular
    .module('ngParse', []);
})();

(function () {
  'use strict';
  angular
    .module('app.intro', []);

})();

(function () {
  'use strict';
  angular
    .module('app.loading', []);

})();

(function () {
  'use strict';
  var path = 'app/module/photogram';

  angular
    .module('app.photogram', [
      'ionic',
      'ngCordova',
      'app.account',
      'app.activity',
      'app.direct',
      'app.feedback',
      'app.share',
      'app.home',
      'app.search'
    ]);

})();

(function () {
  'use strict';
  angular
    .module('app.user', [
      'ionic',
      'user.avatar',
      'user.friend',
      'user.logout',
      'user.merge',
      'user.profile',
      'user.recovery',
      'user.signin',
      'user.signup',
      'user.term',
    ]);

})();

(function () {
  'use strict';
  angular
    .module('app.account', []);

})();

(function () {
  'use strict';
  angular
    .module('app.activity', []);

})();

(function () {
  'use strict';
  angular
    .module('app.direct', []);

})();

(function () {
  'use strict';
  var path = 'app/module/photogram/module/feedback';
  angular
    .module('app.feedback', []);

})();

(function () {
  'use strict';
  angular
    .module('app.home', []);

})();

(function () {
  'use strict';
  angular
    .module('app.search', []);

})();

(function () {
  'use strict';
  var path = 'app/module/photogram/module/share';
  angular
    .module('app.share', []);

})();

(function () {
  'use strict';
  angular
    .module('user.avatar', ['app.user']);

})();

(function () {
  'use strict';
  angular
    .module('user.friend', []);

})();

(function () {
  'use strict';
  angular
    .module('user.logout', []);

})();

(function () {
  'use strict';
  angular
    .module('user.merge', []);

})();

(function () {
  'use strict';
  angular
    .module('user.profile', []);

})();

(function () {
  'use strict';
  angular
    .module('user.recovery', []);

})();

(function () {
  'use strict';
  angular
    .module('user.signin', []);

})();

(function () {
  'use strict';
  angular
    .module('user.signup', []);

})();

(function () {
  'use strict';
  angular
    .module('user.term', []);

})();

(function () {
  'use strict';

  var cordova = window.cordova;

  angular
    .module('starter')
    .run(runIonic)
    .run(runFacebook)
    .config(configLanguage)
    .config(configFacebook)
    .config(configIonic);


  function runIonic($ionicPlatform, $cacheSrc, AppConfig, $cordovaStatusbar, $timeout,
    $cordovaSplashscreen, PhotogramSetting, User) {

    $cacheSrc.color = AppConfig.color;
    $cacheSrc.bgcolor = '#ddd';
    $cacheSrc.rounded = true;
    $cacheSrc.radius = 50;
    //$cacheSrc.interval = 5000;

    User.init();
    PhotogramSetting.init();

    $ionicPlatform.ready(function () {

      //$ionicAnalytics.register();

      if (cordova && cordova.plugins && cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      }

      if (cordova) {
        $timeout(function () {
          $cordovaSplashscreen.hide();
          $cordovaStatusbar.overlaysWebView(true);
          $cordovaStatusbar.style(1);
          $cordovaStatusbar.styleHex(AppConfig.color);
          $cordovaStatusbar.show();
        }, 500);
      }

    });


  }

  function configLanguage($translateProvider, AppConfig, tmhDynamicLocaleProvider) {

    // angular-translate configuration
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '{part}/i18n/{lang}.json'
    });
    $translateProvider.useSanitizeValueStrategy(null);

    // Translate Config
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useLocalStorage(); // saves selected language to localStorage
    tmhDynamicLocaleProvider.localeLocationPattern('../bower_components/angular-i18n/angular-locale_{{locale}}.js');

    var langvar = navigator.language || navigator.userlanguage;
    var userlangvar = langvar.split('-')[0];
    var language = AppConfig.preferredLocale;
    if (_.some(AppConfig.locales, {
        code: userlangvar
      })) {
      language = userlangvar;
    }
    $translateProvider.preferredLanguage(language);
    moment.locale(language);

  }

  function configIonic($ionicConfigProvider) {
    //$ionicConfigProvider.platform.ios.backButton.previousTitleText(' ').icon('ion-ios-arrow-left');
    //$ionicConfigProvider.platform.android.backButton.previousTitleText(' ').icon('ion-ios-arrow-left');
    //$ionicConfigProvider.views.swipeBackEnabled (true);
    $ionicConfigProvider.backButton.text(' ').icon('ion-ios-arrow-left');
    //$ionicConfigProvider.backButton.previousTitleText (false).text ('Voltar').icon ('ion-ios-arrow-left');
    //$ionicConfigProvider.views.transition ('platform');
    //$ionicConfigProvider.navBar.alignTitle ('platform');
    //$ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.views.maxCache(1);
  }

  // Facebook

  function runFacebook() {
    var ionic = window.ionic;
    if (!(ionic.Platform.isIOS() || ionic.Platform.isAndroid())) {
      var LangVar = window.navigator.language || window.navigator.userLanguage;
      var userLangVar = LangVar.substring(0, 2) + '_' + LangVar.substring(3, 5).toUpperCase();
      var document = window.document;
      // If we've already installed the SDK, we're done
      if (document.getElementById('facebook-jssdk')) return;

      // Get the first script element, which we'll use to find the parent node
      var firstScriptElement = document.getElementsByTagName('script')[0];

      // Create a new script element and set its id
      var facebookJS = document.createElement('script');
      facebookJS.id = 'facebook-jssdk';

      // Set the new script's source to the source of the Facebook JS SDK
      facebookJS.src = 'http://connect.facebook.net/' + userLangVar + '/all.js';

      // Insert the Facebook JS SDK into the DOM
      firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
    }
  }

  function configFacebook($facebookProvider, AppConfig) {
    $facebookProvider.setAppId(AppConfig.facebook);
    $facebookProvider.setPermissions('id,name,email,user_likes,bio');
  }


})();

(function () {
  'use strict';
  angular
    .module('ionic')
    .constant('AppConfig', AppConfig());

  function AppConfig() {
    return {
      path: 'app/module/photogram',
      app: {
        name: 'Photogram',
        url: 'http://photogramapp.com',
        image: 'http://photogramapp.com/social-share.jpg',
      },
      routes: {
        home: 'photogram.home',
        login: 'intro'
      },
      color: '#00796B',
      facebook: '1024016557617380',
      parse: {
        applicationId: '7lWT9DJntSvMKTetpoT0wL79pTG9dk4ob5pztktX',
        javascriptKey: 'UbrjB5Imc0btrAyoSb83HmCAHmFWc77JEB9AA1to'
      },
      locales: {
        pt: {
          'translation': 'LANG.PORTUGUES',
          'code': 'pt'
        },
        en: {
          'translation': 'LANG.ENGLISH',
          'code': 'en'
        },
        tr: {
          'translation': 'LANG.TURKISH',
          'code': 'tr'
        },
        fa: {
          'translation': 'LANG.PERSIAN',
          'code': 'fa'
        },
        de: {
          'translation': 'LANG.GERMAN',
          'code': 'de'
        }
      },
      preferredLocale: 'en'
    };
  }
})();

// -------------------------------------------------------------
// Rollbar - must be first
// -------------------------------------------------------------

(function () {
  var _rollbarConfig = {
    accessToken: '582a9a76d9f54e2cbd93d09944ac9de7',
    captureUncaught: true,
    payload: {
      environment: 'test'
    }
  };
  // Rollbar Snippet
  ! function (r) {
    function o(e) {
      if (t[e]) return t[e].exports;
      var n = t[e] = {
        exports: {},
        id: e,
        loaded: !1
      };
      return r[e].call(n.exports, n, n.exports, o), n.loaded = !0, n.exports
    }

    var t = {};
    return o.m = r, o.c = t, o.p = "", o(0)
  }([
    function (r, o, t) {
      "use strict";
      var e = t(1).Rollbar,
        n = t(2);
      _rollbarConfig.rollbarJsUrl = _rollbarConfig.rollbarJsUrl ||
        "https://d37gvrvc0wt4s1.cloudfront.net/js/v1.7/rollbar.min.js";
      var a = e.init(window, _rollbarConfig),
        i = n(a, _rollbarConfig);
      a.loadFull(window, document, !_rollbarConfig.async, _rollbarConfig, i)
    },
    function (r, o) {
      "use strict";

      function t() {
        var r = window.console;
        r && "function" == typeof r.log && r.log.apply(r, arguments)
      }

      function e(r, o) {
        return o = o || t,
          function () {
            try {
              return r.apply(this, arguments)
            } catch (t) {
              o("Rollbar internal error:", t)
            }
          }
      }

      function n(r, o, t) {
        window._rollbarWrappedError && (t[4] || (t[4] = window._rollbarWrappedError), t[5] || (t[5] = window._rollbarWrappedError
          ._rollbarContext), window._rollbarWrappedError = null), r.uncaughtError.apply(r, t), o && o.apply(
          window, t)
      }

      function a(r) {
        this.shimId = ++p, this.notifier = null, this.parentShim = r, this.logger = t, this._rollbarOldOnError =
          null
      }

      function i(r) {
        var o = a;
        return e(function () {
          if (this.notifier) return this.notifier[r].apply(this.notifier, arguments);
          var t = this,
            e = "scope" === r;
          e && (t = new o(this));
          var n = Array.prototype.slice.call(arguments, 0),
            a = {
              shim: t,
              method: r,
              args: n,
              ts: new Date
            };
          return window._rollbarShimQueue.push(a), e ? t : void 0
        })
      }

      function l(r, o) {
        if (o.hasOwnProperty && o.hasOwnProperty("addEventListener")) {
          var t = o.addEventListener;
          o.addEventListener = function (o, e, n) {
            t.call(this, o, r.wrap(e), n)
          };
          var e = o.removeEventListener;
          o.removeEventListener = function (r, o, t) {
            e.call(this, r, o && o._wrapped ? o._wrapped : o, t)
          }
        }
      }

      var p = 0;
      a.init = function (r, o) {
        var t = o.globalAlias || "Rollbar";
        if ("object" == typeof r[t]) return r[t];
        r._rollbarShimQueue = [], r._rollbarWrappedError = null, o = o || {};
        var i = new a;
        return e(function () {
          if (i.configure(o), o.captureUncaught) {
            i._rollbarOldOnError = r.onerror, r.onerror = function () {
              var r = Array.prototype.slice.call(arguments, 0);
              n(i, i._rollbarOldOnError, r)
            };
            var e, a, p =
              "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload"
              .split(",");
            for (e = 0; e < p.length; ++e) a = p[e], r[a] && r[a].prototype && l(i, r[a].prototype)
          }
          return r[t] = i, i
        }, i.logger)()
      }, a.prototype.loadFull = function (r, o, t, n, a) {
        var i = function () {
            var o;
            if (void 0 === r._rollbarPayloadQueue) {
              var t, e, n, i;
              for (o = new Error("rollbar.js did not load"); t = r._rollbarShimQueue.shift();)
                for (n = t.args, i = 0; i < n.length; ++i)
                  if (e = n[i], "function" == typeof e) {
                    e(o);
                    break
                  }
            }
            "function" == typeof a && a(o)
          },
          l = !1,
          p = o.createElement("script"),
          u = o.getElementsByTagName("script")[0],
          s = u.parentNode;
        p.src = n.rollbarJsUrl, p.async = !t, p.onload = p.onreadystatechange = e(function () {
          if (!(l || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
            p.onload = p.onreadystatechange = null;
            try {
              s.removeChild(p)
            } catch (r) {}
            l = !0, i()
          }
        }, this.logger), s.insertBefore(p, u)
      }, a.prototype.wrap = function (r, o) {
        try {
          var t;
          if (t = "function" == typeof o ? o : function () {
              return o || {}
            }, "function" != typeof r) return r;
          if (r._isWrap) return r;
          if (!r._wrapped) {
            r._wrapped = function () {
              try {
                return r.apply(this, arguments)
              } catch (o) {
                throw o._rollbarContext = t() || {}, o._rollbarContext._wrappedSource = r.toString(), window._rollbarWrappedError =
                  o, o
              }
            }, r._wrapped._isWrap = !0;
            for (var e in r) r.hasOwnProperty(e) && (r._wrapped[e] = r[e])
          }
          return r._wrapped
        } catch (n) {
          return r
        }
      };
      for (var u = "log,debug,info,warn,warning,error,critical,global,configure,scope,uncaughtError".split(","), s =
          0; s < u.length; ++s) a.prototype[u[s]] = i(u[s]);
      r.exports = {
        Rollbar: a,
        _rollbarWindowOnError: n
      }
    },
    function (r, o) {
      "use strict";
      r.exports = function (r, o) {
        return function (t) {
          if (!t && !window._rollbarInitialized) {
            var e = window.RollbarNotifier,
              n = o || {},
              a = n.globalAlias || "Rollbar",
              i = window.Rollbar.init(n, r);
            i._processShimQueue(window._rollbarShimQueue || []), window[a] = i, window._rollbarInitialized = !0,
              e.processPayloads()
          }
        }
      }
    }
  ]);
  // End Rollbar Snippet

}());

/* Google Analytics
 * */

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || [])
    .push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-53950213-5', {
  'cookieDomain': 'none'
});

/*
 * cordova -d plugin add https://github.com/emilyemorehouse/phonegap-parse-plugin --variable APP_ID=7lWT9DJntSvMKTetpoT0wL79pTG9dk4ob5pztktX --variable CLIENT_KEY=CIcH8fg5AogNNrEQ8IbmA5nujNjIvVNmuW0PyvCy
 * */
(function () {
  'use strict';
  angular
    .module('starter')
    .run(runParsePush);

  function runParsePush($ionicPlatform, $q, $window, AppConfig) {

    var ParsePushPlugin = $window.parsePlugin;


    $ionicPlatform.ready(function () {
      if ($window.cordova) {
        startPush();
      }
    });


    function startPush() {
      var defer = $q.defer();

      ParsePushPlugin
        .initialize(AppConfig.parse.applicationId, AppConfig.parse.clientKey, function () {

          ParsePushPlugin
            .subscribe('Photogram', function () {
              ParsePushPlugin
                .getInstallationId(defer.resolve, defer.reject);

            }, defer.reject);

        }, defer.reject);

      return defer.promise;
    }


  }

})();

'use strict';
angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = {
    ZERO: "zero",
    ONE: "one",
    TWO: "two",
    FEW: "few",
    MANY: "many",
    OTHER: "other"
  };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": [
        "AM",
        "PM"
      ],
      "DAY": [
        "domingo",
        "segunda-feira",
        "ter\u00e7a-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "s\u00e1bado"
      ],
      "ERANAMES": [
        "Antes de Cristo",
        "Ano do Senhor"
      ],
      "ERAS": [
        "a.C.",
        "d.C."
      ],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": [
        "janeiro",
        "fevereiro",
        "mar\u00e7o",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
      ],
      "SHORTDAY": [
        "dom",
        "seg",
        "ter",
        "qua",
        "qui",
        "sex",
        "s\u00e1b"
      ],
      "SHORTMONTH": [
        "jan",
        "fev",
        "mar",
        "abr",
        "mai",
        "jun",
        "jul",
        "ago",
        "set",
        "out",
        "nov",
        "dez"
      ],
      "STANDALONEMONTH": [
        "janeiro",
        "fevereiro",
        "mar\u00e7o",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
      ],
      "WEEKENDRANGE": [
        5,
        6
      ],
      "fullDate": "EEEE, d 'de' MMMM 'de' y",
      "longDate": "d 'de' MMMM 'de' y",
      "medium": "d 'de' MMM 'de' y HH:mm:ss",
      "mediumDate": "d 'de' MMM 'de' y",
      "mediumTime": "HH:mm:ss",
      "short": "dd/MM/yy HH:mm",
      "shortDate": "dd/MM/yy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "R$",
      "DECIMAL_SEP": ",",
      "GROUP_SEP": ".",
      "PATTERNS": [{
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      }, {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-\u00a4",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }]
    },
    "id": "pt-br",
    "pluralCat": function (n, opt_precision) {
      if (n >= 0 && n <= 2 && n != 2) {
        return PLURAL_CATEGORY.ONE;
      }
      return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//! moment.js locale configuration
//! locale : brazilian portuguese (pt-br)
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../moment')) :
    typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment)
}(this, function (moment) {
  'use strict';


  var pt_br = moment.defineLocale('pt', {
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
      '_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function () {
        return (this.day() === 0 || this.day() === 6) ?
          '[Último] dddd [às] LT' : // Saturday + Sunday
          '[Última] dddd [às] LT'; // Monday - Friday
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'em %s',
      past: '%s atrás',
      s: 'segs',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos'
    },
    ordinalParse: /\d{1,2}º/,
    ordinal: '%dº'
  });

  return pt_br;

}));

(function () {
  'use strict';

  angular
    .module('ionic-cache-src')
    .directive('cacheSrc', cacheSrc);

  function cacheSrc($ionicPlatform, $interval, $compile, $cacheSrc, $cordovaFileTransfer, $localStorage) {
    return {
      restrict: 'A',
      scope: {
        'onProgress': '=?',
        'onFinish': '=?',
        'onError': '=?'
      },
      link: function (scope, element, attrs) {

        function id() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var i = 0; i < 16; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
        };

        function makeProgressCircle($scope, $compile) {
          return angular.element($compile(
            '<div style="text-align:{{textAlign}}"><div round-progress  max="max"  current="progress"  color="{{color}}" bgcolor="{{bgcolor}}"  radius="{{radius}}"  stroke="{{stroke}}"  rounded="rounded" clockwise="clockwise" iterations="{{iterations}}"  animation="{{animation}}"></div></div>'
          )($scope));
        };

        function startsWith(str, arr) {
          for (var i = 0; i < arr.length; i++) {
            var sub_str = arr[i];
            if (str.indexOf(sub_str) === 0) {
              return true;
            }
          }
          return false;
        };


        function needDownload(path) {
          if (startsWith(path, [
              'http://',
              'https://',
              'ftp://'
            ])) {
            return true;
          } else {
            return false;
          }
        }

        function attrToScope(scope, attrs) {
          scope.progress = 0;
          scope.max = 100;
          scope.radius = attrs.radius;
          scope.stroke = attrs.stroke;
          scope.animation = attrs.animation;
          scope.clockwise = attrs.clockwise;
          scope.color = attrs.color;
          scope.bgcolor = attrs.bgcolor;
          scope.rounded = attrs.rounded;
          scope.iterations = attrs.iterations;
          scope.textAlign = 'center';
        }

        var isIOS = ionic.Platform.isIOS();
        var isAndroid = ionic.Platform.isAndroid();

        if (window.cordova & isIOS || isAndroid) {

          var progress_circle;
          var display;
          var config = {};
          angular.extend(config, $cacheSrc);
          angular.extend(config, attrs);
          attrToScope(scope, config);
          scope.onProgress = scope.onProgress || function () {};
          scope.onFinish = scope.onFinish || function () {};
          scope.onError = scope.onError || function () {};
          var cache = $localStorage.cache_src = $localStorage.cache_src || {};
          //**********//
          var finish = function (result) {
            if (config.showProgressCircleInDevice) {
              element.css('display', display);
              progress_circle.remove();
            }
            addSrc(result);
          };

          var addSrc = function (result) {
            element[0][config.srcIs || 'src'] = result;
            scope.onFinish(result);
          };


          attrs.$observe('cacheSrc',
            function () {
              if (attrs.cacheSrc) {
                if (needDownload(attrs.cacheSrc)) {
                  //if cached
                  if (cache[attrs.cacheSrc]) {
                    $ionicPlatform
                      .ready()
                      .then(function () {
                        addSrc(getCacheDir() + cache[attrs.cacheSrc]);
                      });
                  } else {
                    // not cache
                    if (config.showProgressCircleInDevice) {
                      progress_circle = makeProgressCircle(scope, $compile);
                      display = element.css('display');
                      element.css('display', 'none');
                      element.after(progress_circle);
                    }
                    $ionicPlatform
                      .ready()
                      .then(function () {
                        var ext = '.' + attrs.cacheSrc.split('.').pop();
                        var fileName = id() + ext;
                        $cordovaFileTransfer
                          .download(attrs.cacheSrc, getCacheDir() + fileName, {}, true)
                          .then(function (result) {
                            cache[attrs.cacheSrc] = fileName;
                            finish(getCacheDir() + fileName);
                          }, scope.onError, function (progress) {
                            scope.progress = (progress.loaded / progress.total) * 100;
                            scope.onProgress(scope.progress);
                          });
                      });
                  }
                } else {
                  addSrc(attrs.cacheSrc);
                }
              }
            });
        } else {
          // in browser
          var progress_circle = makeProgressCircle(scope, $compile);
          var config = {};
          angular.extend(config, $cacheSrc);
          angular.extend(config, attrs);
          attrToScope(scope, config);
          scope.onProgress = scope.onProgress || function () {};
          scope.onFinish = scope.onFinish || function () {};
          attrs.$observe('cacheSrc', function () {
            if (attrs.cacheSrc) {
              if (needDownload(attrs.cacheSrc)) {
                if (config.showProgressCircleInBrowser) {
                  var display = element.css('display');
                  element.css('display', 'none');
                  element
                    .after(progress_circle);
                }
                var promise = $interval(function () {
                  scope.progress += 10;
                  scope.onProgress(scope.progress);
                  if (scope.progress == 100) {
                    $interval.cancel(promise);
                    if (config.showProgressCircleInBrowser) {
                      element.css('display', display);
                      progress_circle.remove();
                    }
                    element[0][config.srcIs || 'src'] = attrs.cacheSrc;
                    scope.onFinish(attrs.cacheSrc);
                  }
                }, config.interval);
              } else {
                element[0][config.srcIs || 'src'] = attrs.cacheSrc;
                scope.onFinish(attrs.cacheSrc);
              }
            }
          });
        }

      }
    };
  }

  function getCacheDir() {
    switch (window.device.platform) {
    case 'iOS':
      return cordova.file.documentsDirectory;
    case 'Android':
      return cordova.file.dataDirectory;
    }
    return '';
  }
})();

(function () {
  'use strict';

  angular
    .module('ionic-cache-src')
    .factory('cacheSrcStorage', cacheSrcStorage);

  function cacheSrcStorage($localStorage) {
    var c = {};
    c._cache = $localStorage.cache_src;
    c.get = function (url) {
      return c._cache[url] && (getCacheDir() + c._cache[url]);
    };
    c.set = function (url, localUrl) {
      c._cache[url] = localUrl;
      return c;
    };
    return c;
  }
})();

(function () {
  'use strict';

  angular
    .module('ionic-loading')
    .factory('Loading', Loading);

  function Loading($rootScope, $timeout) {
    var seconds = 0;

    return {
      start: showLoading,
      end: hideLoading,
    };


    function showLoading(text) {
      $rootScope.$broadcast('ionicLoading:true', text);
    }

    function hideLoading() {
      $timeout(function () {
        $rootScope.$broadcast('ionicLoading:false');
      }, parseInt(seconds + '000'));
    }
  }
})();

(function () {
  'use strict';

  angular
    .module('ionic-loading')
    .directive('ionLoading', ionLoading);

  function ionLoading() {
    return {
      restrict: 'E',
      scope: {
        icon: '@',
        loading: '='
      },
      template: '<div class="padding text-center loading" ng-show="loading"><ion-spinner icon="{{ icon }}"></ion-spinner></div>'
    };
  }
})();

(function () {
  'use strict';


  angular
    .module('ion-location')
    .factory('GeoService', GeoService);

  function GeoService($http, $window, $cordovaGeolocation, Loading, $timeout, $q) {

    /**
     'street_address', //indicates a precise street address.
     'route', //indicates a named route (such as "US 101").
     'intersection', //indicates a major intersection, usually of two major roads.
     'political', //indicates a political entity. Usually, this type indicates a polygon of some civil administration.
     'country', //indicates the national political entity, and is typically the highest order type returned by the Geocoder.
     'administrative_area_level_1', //indicates a first-order civil entity below the country level. Within the United States, these administrative levels are states. Not all nations exhibit these administrative levels.
     'administrative_area_level_2', //indicates a second-order civil entity below the country level. Within the United States, these administrative levels are counties. Not all nations exhibit these administrative levels.
     'administrative_area_level_3', //indicates a third-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.
     'colloquial_area', //indicates a commonly-used alternative name for the entity.
     'locality', //indicates an incorporated city or town political entity.
     'sublocality', //indicates an first-order civil entity below a locality
     'neighborhood', //indicates a named neighborhood
     'premise', //indicates a named location, usually a building or collection of buildings with a common name
     'subpremise', //indicates a first-order entity below a named location, usually a singular building within a collection of buildings with a common name
     'postal_code', //indicates a postal code as used to address postal mail within the country.
     'natural_feature', //indicates a prominent natural feature.
     'airport', //indicates an airport.
     'park', //indicates a named park.
     'point_of_interest', //indicates a named point of interest. Typically, these "POI"s are prominent local entities that don't easily fit in another category such as "Empire State Building" or "Statue of Liberty."

     //In addition to the above, address components may exhibit the following types:

     'post_box', //indicates a specific postal box.
     'street_number', //indicates the precise street number.
     'floor indicates', //the floor of a building address.
     'room indicates'; //the room of a building address.'
     */
    var options = {
      types: ['geocode']
    };
    var autocompleteService = new $window.google.maps.places.AutocompleteService();
    var detailsService = new $window.google.maps.places.PlacesService($window.document.createElement('input'),
      options);
    var componentForm = {
      street_number: 'long_name',
      //number
      route: 'long_name',
      //street
      locality: 'long_name',
      // district
      sublocality: 'long_name',
      // district
      neighborhood: 'long_name',
      //state
      political: 'long_name',
      //state
      administrative_area_level_1: 'long_name',
      //state
      country: 'long_name',
      //country
      postal_code: 'long_name' //zipcode
    };
    var componentFormName = {
      street_number: 'number',
      //number
      route: 'street',
      //street
      locality: 'city',
      // district
      administrative_area_level_1: 'state',
      //state
      country: 'country',
      //country
      postal_code: 'zipcode',
      //zipcode
      neighborhood: 'district' //zipcode
    };

    var data = {
      coords: {},
      src: ''
    };


    return {
      src: src,
      getDetails: getDetails,
      searchAddress: searchAddress,
      parseAddress: parseAddress,
      findMe: findMe
    };

    function getLocation() {
      // Pega a Localização da Pessoa
      Loading.start();
      var defer = $q.defer();

      if (data.location) {
        $timeout(function () {
          defer.resolve(data.location);
          Loading.end();
        }, 1000);
      } else {
        var posOptions = {
          timeout: 10000,
          enableHighAccuracy: false
        };
        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (position) {
            console.log('Fez a requisição', position);

            data.location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            Loading.end();
            defer.resolve(data.location);
          }, function (err) {
            // error
            console.log('Error na geolocalização', err);
            $ionicPopup.alert({
              title: 'Geo Error',
              template: err.message
            });
            Loading.end();
            defer.reject(err);
          });
      }


      return defer.promise;
    }


    function findMe() {
      var defer = $q.defer();

      getLocation()
        .then(function (pos) {
          console.log(pos);
          getGoogleAddress(pos.latitude, pos.longitude)
            .success(function (resp) {
              resp.geolocation = pos;
              console.log(resp);
              defer.resolve(resp);
            })
            .error(logErr);
        });
      return defer.promise;
    }


    function logErr(error) {
      console.log(error);
    }

    function getGoogleAddress(lat, lng) {
      return $http.get('http://maps.google.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=true')
        .success(function (data) {
          data.address_normal = data.results[0].formatted_address;
          data.address = address(data.results[0].address_components);
          data.src = imagem(lat, lng, 18, 500, 300);
        });
    }

    function address(data) {
      if (!data) {
        return false;
      } else {
        return {
          numero: data[0].short_name,
          rua: data[1].long_name,
          bairro: data[2].short_name,
          cidade: data[3].short_name,
          estado: data[5].long_name,
          uf: data[5].short_name,
          pais: data[6].long_name,
          paisCode: data[6].short_name,
          cep: data[7].short_name
        };
      }

    }

    function imagem(lat, lng, zoom, w, h) {
      return 'http://maps.google.com/maps/api/staticmap?center=' + lat + ',' + lng + '&zoom=' + zoom + '&size=' +
        w + 'x' + h + '&maptype=roadmap&sensor=true';
    }

    function parseAddress(place) {
      console.log('parseAddress', place);
      var address = {
        resume: '',
        geo: {
          latitude: place.geometry.location.H,
          longitude: place.geometry.location.L
        }
      };
      var image = src(address.geo.latitude, address.geo.longitude, 16, 900, 200);

      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          address[componentFormName[addressType]] = val;
        }
      }
      address.street = address.street + ', ' + address.number;
      address.image = image;
      address.resume = address.street + ' - ' + address.city + ', ' + address.state + ', ' + address.country;
      return address;
    }

    function searchAddress(input) {
      var deferred = $q.defer();
      autocompleteService.getQueryPredictions({
        input: input
      }, function (result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }

    function getDetails(placeId) {
      var deferred = $q.defer();
      detailsService.getDetails({
        placeId: placeId
      }, function (result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }

    function src(lat, lng, zoom, w, h) {
      console.log('src latitude', lat, lng, zoom, w, h);

      var link = 'http://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&zoom=' + zoom +
        '&scale=1&size=' + w + 'x' + h +
        '&maptype=roadmap&format=jpg&visual_refresh=true&markers=size:small%7Ccolor:0xff2600%7Clabel:0%7C' + lat +
        ',' + lng + '&sensor=true';
      console.log(link);
      return link;
    }

  }
})();

(function () {
  'use strict';

  angular
    .module('ion-location')
    .directive('ionLocation', ionLocation);

  function ionLocation($ionicModal, GeoService) {
    return {
      restrict: 'A',
      scope: {
        location: '='
      },
      link: ionLocationLink
    };

    function ionLocationLink($scope, element) {

      function init() {
        $scope.search = {};
        $scope.search.suggestions = [];
        $scope.search.query = '';
      }


      function selectPlace(place_id) {
        GeoService
          .getDetails(place_id)
          .then(function (location) {

            console.info(location);

            var address = GeoService
              .parseAddress(location);

            $scope.location = {
              number: address.number,
              street: address.street,
              district: address.district,
              city: address.city,
              state: address.state,
              country: address.country,
              zipcode: address.zipcode,
              coords: address.geo,
              image: address.image,
              resume: address.resume
            };

            console.log($scope.location);
            $scope.closeModalLocation();
          });
      }

      element.bind('focus', function () {
        init();
        console.log('Start');

        $scope.findMe = findMe;
        $scope.choosePlace = choosePlace;


        $scope.modalLocation = $ionicModal.fromTemplate('<ion-modal-view>' +
          '<ion-header-bar class="bar bar-positive item-input-inset">' +
          '<button class="button button-clear button-icon ion-pinpoint" ng-click="findMe()"></button>' +
          '<label class="item-input-wrapper">' +
          '<input type="search" ng-model="search.query" placeholder="{{ \'Search\' | translate }}"></label>' +
          '<button class="button button-clear button-icon ion-ios-close-empty" ng-click="closeModalLocation()"></button>' +
          '</ion-header-bar>' +
          '<ion-content padding="false">' +
          '<ion-list>' +
          '<ion-item ng-repeat="suggestion in search.suggestions" ng-click="choosePlace(suggestion)" ng-bind="suggestion.description"></ion-item>' +
          '<ion-item class="item-divider"><img src="https://developers.google.com/maps/documentation/places/images/powered-by-google-on-white.png"alt=""/></ion-item>' +
          '</ion-list>' +
          '</ion-content>' +
          '</ion-modal-view>', {
            scope: $scope,
            focusFirstInput: true
          }
        );

        $scope.modalLocation.show();

        $scope.closeModalLocation = function () {
          $scope.modalLocation.hide();
          $scope.modalLocation.remove();
        };

        GeoService
          .searchAddress('São Paulo')
          .then(function (result) {
            console.log(result);
            $scope.search.suggestions = result;
          });


        $scope.$watch('search.query', function (newValue) {
          if (newValue) {
            GeoService
              .searchAddress(newValue)
              .then(function (result) {
                console.log(result);
                $scope.search.suggestions = result;
              });
          }
        });


        function findMe() {
          GeoService
            .findMe()
            .then(function (location) {
              console.log(location);

              selectPlace(location.results[0].place_id);

            });
        }

        function choosePlace(place) {
          selectPlace(place.place_id);

        }

      });

    }
  }
})();

(function () {
  'use strict';
  angular
    .module('ngCache', ['angular-cache'])
    .config(cacheConfig)
    .factory('Cache', Cache);

  function cacheConfig(CacheFactoryProvider) {
    angular.extend(CacheFactoryProvider.defaults, {
      maxAge: 15 * 60 * 1000
    });
  }

  function Cache(CacheFactory) {

    return {
      model: model,
      data: data
    };

    function model(model, options) {
      if (!CacheFactory.get(model)) {
        CacheFactory.createCache(model, {
          deleteOnExpire: options.deleteOnExpire || 'aggressive',
          recycleFreq: options.recycleFreq || 60000,
          storageMode: options.mode || 'localStorage'
        });
      }

      return CacheFactory.get(model);
    }

    function data(modelName, keys) {
      var cache = model(modelName);
      var keys = cache.keys();
      var data = [];
      keys.map(function (key) {
        data.push(cache.get(key));
      });

      return data;
    }


  }

})();

(function () {
  'use strict';
  angular
    .module('ngParse')
    .factory('ParseFile', ParseFileFactory);

  /*
   * params
   * .object
   * .title
   * .photo
   *  .. filename
   *  .. photo = base64
   *  .geo
   *  .. class
   *  .. lat
   *  .. lng
   *
   * */

  function ParseFileFactory($q) {
    return {
      upload: upload
    };

    function upload(_params) {
      var defer = $q.defer();
      var ImageObject = Parse.Object.extend(_params.object || 'Gallery');

      if (_params.photo !== '') {

        // create the parse file
        var imageFile = new Parse.File(_params.filename || 'mypic.jpg', {
          base64: _params.photo
        });

        // save the parse file
        imageFile
          .save()
          .then(function () {

            _params.photo = null;

            // create object to hold caption and file reference
            var imageObject = new ImageObject();

            // set object properties
            imageObject.set('title', _params.title);
            imageObject.set('user', Parse.User.current());
            imageObject.set('img', imageFile);

            if (_params.geo !== undefined) {
              imageObject.set(_params.geo.class || 'location', new Parse.GeoPoint(_params.geo.lat, _params.geo.lng));
            }

            // save object to parse backend
            imageObject
              .save()
              .then(defer.resolve);

          }, defer.reject);

      } else {
        // create object to hold caption and file reference
        var imageObject = new ImageObject();

        // set object properties
        imageObject.set('caption', _params.caption);

        // save object to parse backend
        return imageObject.save();

      }


      return defer.promise;
    }

  }

})();

(function () {
  'use strict';
  angular
    .module('ngParse')
    .factory('ParseImageService', ParseImageServiceFactory);

  function ParseImageServiceFactory($window) {
    return {
      all: _all,
      save: _save,
      get: _get,
      delete: _delete,
      imageSettings: imageSettings,
      saveImageSettings: saveImageSettings
    };

    function _all() {
      var query = new Parse.Query('ImageInfo');
      query.descending('createdAt');
      return query.find();
    }

    function _delete(_objectId) {
      var query = new Parse.Query('ImageInfo');
      return query.get(_objectId)
        .then(function (_data) {
          return _data.destroy();
        });
    }

    function _get(_objectId) {
      var query = new Parse.Query('ImageInfo');
      //query.descending('gpa');
      return query.get(_objectId);
    }

    /**
     *
     * @param _params
     * @private
     */
    function _save(_params) {
      var ImageObject = Parse.Object.extend('Gallery');


      if (_params.photo !== '') {

        console.log('_params.photo ' + _params.photo);

        // create the parse file
        var imageFile = new Parse.File('mypic.jpg', {
          base64: _params.photo
        });
        //       var imageFile = new Parse.File('mypic.jpg', _params.photo);


        // save the parse file
        return imageFile
          .save()
          .then(function () {

            _params.photo = null;

            // create object to hold caption and file reference
            var imageObject = new ImageObject();

            // set object properties
            imageObject.set('title', _params.title);
            imageObject.set('img', imageFile);
            imageObject.set('user', Parse.User.current());
            imageObject.set('thumbBase64', _params.thumbBase64);
            imageObject.set('location', new Parse.GeoPoint(_params.coords.latitude, _params.coords.longitude));

            // save object to parse backend
            return imageObject.save();


          }, function (error) {
            console.log('Error');
            console.log(error);
          });

      } else {
        // create object to hold caption and file reference
        var imageObject = new ImageObject();

        // set object properties
        imageObject.set('caption', _params.caption);

        // save object to parse backend
        return imageObject.save();

      }
    }

    function imageSettings() {
      var savedData = $window.localStorage.getItem('application.image.props') || null;
      return (savedData !== null ? JSON.parse(savedData) : {
        quality: 50,
        dimensions: 250,
        saveToAlbum: false
      });
    }

    function saveImageSettings(_settings) {
      $window.localStorage.setItem('application.image.props', JSON.stringify(_settings));
    }
  }

})();

(function () {
  'use strict';

  angular
    .module('ngParse')
    .factory('Parse', Parse);


  function Parse($window) {
    var parse = $window.Parse;
    parse.transform = transform;
    return parse;
  }

  function transform(resp) {
    var data = [];
    resp.map(function (item) {
      var obj = item.attributes;
      obj.id = item;
      data.push(obj);
    });
    return data;
  }
})();

(function () {
  'use strict';
  angular
    .module('app.intro')
    .config(configRoutes);

  var path = 'app/module/intro';

  function configRoutes($stateProvider, $translatePartialLoaderProvider) {
    $stateProvider
      .state('intro', {
        url: '/intro',
        templateUrl: path + '/view/intro.html',
        controller: 'IntroCtrl',
        controllerAs: 'vm'
      });

    // Translation
    $translatePartialLoaderProvider.addPart(path);
  }

})();

(function () {
  'use strict';
  angular
    .module('app.loading')
    .config(configRoutes);

  var path = 'app/module/loading';

  function configRoutes($stateProvider) {
    $stateProvider
      .state('router', {
        url: '/',
        templateUrl: path + '/view/loading.html',
        controller: 'LoadingCtrl',
        controllerAs: 'vm'
      });
  }

})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .directive('photogramPhotoCapture', photogramPhotoCapture)
    .directive('photogramLoading', photogramLoading);

  function photogramLoading() {
    return {
      restrict: 'E',
      scope: {
        loading: '=',
        icon: '@'
      },
      template: '<div class="padding text-center loading" ng-show="loading"><ion-spinner icon="{{ icon }}"></ion-spinner></div>'
    };
  }


  function photogramPhotoCapture($ionicModal, $cordovaGeolocation, AppConfig, Loading, $state, PhotoService,
    Photogram) {

    var path = AppConfig.path;

    return {
      restrict: 'A',
      scope: {
        photogram: '@'
      },
      transclude: false,
      link: photogramPhotoCaptureLink
    };

    function photogramPhotoCaptureLink(scope, elem, attr) {

      scope.getGeo = getGeo;
      scope.formFields = Photogram.form;
      scope.open = open;
      scope.submitCapture = submitCapture;
      scope.closeModal = closeModal;
      elem.bind('click', openModalCapture);

      function init() {
        scope.loading = true;
        scope.comments = [];
        Photogram
          .getComments(scope.photogram)
          .then(function (resp) {
            scope.comments = resp;
            scope.loading = false;
          });

        scope.form = {
          photogramId: scope.photogram,
          text: ''
        };
      }

      function openModalCapture() {
        console.log(scope.photogram);


        $ionicModal.fromTemplateUrl(path + '/view/photogram.capture.modal.html', {
          scope: scope
        }).then(function (modal) {
          scope.modal = modal;
          scope.modal.show();
        });
      }


      function init() {
        scope.active = false;
        scope.form = {
          title: '',
          location: '',
          photo: '',
          geo: false
        };

        scope.map = {
          center: {
            latitude: -23.5333333,
            longitude: -46.6166667
          },
          scrollwheel: false,
          zoom: 15
        };
        scope.data = '';
        scope.loading = false;

      }

      function getLocation() {
        var posOptions = {
          timeout: 10000,
          enableHighAccuracy: false
        };

        if (scope.form.location === '') {

          scope.loading = false;

          $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {

              scope.here = {
                id: 1,
                coords: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                },
                icon: 'img/pin.png'
              };

              scope.form.location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };

              scope.map.center = scope.here.coords;
              scope.loading = false;

              console.log(scope.form);
              console.log(scope.here);
              console.log(position);
            }, function (err) {
              // error
            });
        }
      };

      function getGeo(resp) {
        if (resp) getLocation();
      }

      function open() {
        init();
        PhotoService
          .open()
          .then(function (resp) {
            scope.loading = false;
            scope.active = true;
            scope.form.photo = resp;
            scope.data = 'data:image/jpeg;base64,' + resp;
            // angular.element ('.title').focus ();
          })
          .catch(function () {
            $state.go('photogram.home');
          });
      }

      function submitCapture() {

        var canvas = window.document.getElementById('image');
        var dataUrl = canvas.toDataURL();
        var dataForm = angular.copy(scope.form);

        console.log('submit', dataUrl);

        return false;

        Loading.start();
        Photogram
          .add(dataForm)
          .then(function (resp) {
            $state.go('photogram.home', {
              reload: true
            });
            init();
            Loading.end();
          });
      }

      function closeModal() {
        scope.modal.hide();
        scope.modal.remove();
      }
    }
  }

})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .config(configRoutes);

  var path = 'app/module/photogram';

  function configRoutes($stateProvider, $translatePartialLoaderProvider) {

    // Translation
    $translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('photogram', {
        url: '/photogram',
        abstract: true,
        controller: 'PhotogramTabsCtrl',
        controllerAs: 'vm',
        templateUrl: path + '/view/photogram.tabs.html'
      });


  }

})();

(function () {
    'use strict';
    var path = 'app/module/user';

    angular
        .module('app.user')
        .config(addRoute);

    function addRoute($stateProvider, $urlRouterProvider, $translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart(path);

        $stateProvider

            .state('user', {
                url: '/user',
                abstract: true,
                templateUrl: path + '/view/user.tabs.html'
            });

        $urlRouterProvider.otherwise('/');

    }

})();

(function () {
    'use strict';

    angular
        .module('ion-photo')
        .directive('caman', camanDirective);

    function camanDirective(CamanJs, $timeout) {
        return {
            restrict: 'A',
            scope: {
                name: '=',
                image: '=',
                filter: '=',
                loading: '='
            },
            template: '<img ng-src="{{ image }}" id="{{ name }}">',
            link: camanDirectiveLink
        };

        function camanDirectiveLink($scope) {
            $scope.loading = true;
            $timeout(function () {
                CamanJs
                    .effect($scope.name, $scope.filter)
                    .then(function () {
                        $scope.loading = false;
                    });
            }, 500);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('ion-photo')
        .directive('ionCrop', ionCrop);

    function ionCrop($jrCrop, $translate, $ionicActionSheet) {

        return {
            restrict: 'A',
            scope: {
                ngModel: '=',
                option: '=',
                cropSave: '&'
            },
            template: '<div><input type="file" id="browseBtn" image="image" accept="image/*" style="display: none"/></div>',
            link: ionCropLink
        };

        function ionCropLink($scope, element) {

            // Triggered on a button click, or some other target
            $scope.action = action;
            element.bind('click', getElem);
            $scope.crop = crop;
            angular.element(document.getElementById('browseBtn'))
                .on('change', fileUpload);


            function getElem() {
                document.getElementById('browseBtn')
                    .click();
            }

            function action() {

                // Show the action sheet
                $ionicActionSheet.show({
                    buttons: [{
                        text: '<i class="icon ion-camera"></i>' + ('Photo Camera')
                    }, {
                        text: '<i class="icon ion-images"></i> ' + ('Photo Album')
                    }],
                    //destructiveText:  ('Delete'),
                    titleText: ('Change Image'),
                    cancelText: ('Cancel'),
                    cancel: function () {
                        // add cancel code..
                    },
                    buttonClicked: function (index) {

                        if (index === 0) {
                            console.log('Photo Camera');
                        }
                        // Photo Album
                        if (index === 1) {
                            document.getElementById('browseBtn')
                                .click();
                        }
                        return true;
                    }
                });

            }

            function fileUpload(e) {

                var file = e.target.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function (event) {
                    var image = event.target.result;
                    $scope.crop(image);
                };

                // Clear input file
                angular.element(document.getElementById('browseBtn')).val('');

            }

            function crop(image) {

                console.log($scope.option);

                $jrCrop
                    .crop({
                        url: image,
                        width: $scope.option ? $scope.option.width : 200,
                        height: $scope.option ? $scope.option.height : 200,
                        cancelText: ('Cancel'),
                        chooseText: ('Save')
                    })
                    .then(function (canvas) {
                        var image = canvas.toDataURL();
                        //            var name = $scope.option ? $scope.option.name : 'thumb';
                        //            var filename = ($scope.option ? $scope.option.name : '') + '_' + name + window.Number(new window.Date() + '.jpg';

                        //var file = base64ToBlob(image.replace('data:image/png;base64,', ''), 'image/jpeg');
                        //            file.name = filename;

                        //upload(file);

                        console.log(image);
                        $scope.ngModel = image;


                    });

            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('ion-photo')
        .directive('photoFilterCarousel', photoFilterCarousel);

    function photoFilterCarousel(CamanJs, config) {
        return {
            restrict: 'E',
            scope: {
                image: '=',
                loadingMaster: '='
            },
            templateUrl: config.path + '/view/photo.filter.carousel.html',
            link: function ($scope) {
                $scope.filters = CamanJs.filters;
                $scope.applyFilter = applyFilter;

                function applyFilter(elem, effect) {
                    $scope.loading = true;
                    if (effect) {
                        CamanJs
                            .effect(elem, effect, true)
                            .then(function (resp) {
                                $scope.loading = false;
                            });
                    }
                }
            }
        };
    }

})();

(function () {
  'use strict';

  angular
    .module('ion-photo')
    .directive('photoFilter', photoFilter);

  function photoFilter(config) {
    return {
      restrict: 'E',
      scope: {
        image: '='
      },
      templateUrl: config.path +'/view/photo.filter.html'
    };
  }
})();

(function () {
    'use strict';


    angular
        .module('ion-photo')
        .factory('CamanJs', CamanJsFactory);

    function CamanJsFactory($q) {
        var Caman = window.Caman;
        var filters = [
            'normal',
            'vintage',
            'lomo',
            'clarity',
            'sinCity',
            'sunrise',
            'crossProcess',
            'orangePeel',
            'love',
            'grungy',
            'jarques',
            'pinhole',
            'oldBoot',
            'glowingSun',
            'hazyDays',
            'herMajesty',
            'nostalgia',
            'hemingway',
            'concentrate'
        ];

        return {
            filters: filters,
            effect: filter,
            reset: resetEffect
        };

        function filter(elem, effect, status) {
            var defer = $q.defer();
            var image = window.document.getElementById(elem);

            if (image) {
                Caman(image, function () {
                    if (effect === 'normal') {
                        this.revert();
                        this.render(function () {
                            defer.resolve(effect);
                        });
                    }

                    if (effect in this) {
                        this[effect]();

                        if (status) {
                            this.revert();
                        }
                        this.render(function () {
                            defer.resolve(effect);
                        });
                    }

                });
            } else {
                defer.reject();
            }
            return defer.promise;
        }

        function resetEffect(elem) {

            var defer = $q.defer();
            var image = window.document.getElementById(elem);

            Caman(image, function () {
                this.revert();
                defer.resolve(true);
            });

            return defer.promise;
        }
    }
})();

(function () {
  'use strict';

  angular
    .module('ion-photo')
    .factory('PhotoFilter', PhotoFilter);

  function PhotoFilter($rootScope, $q, $ionicModal) {

    return {
      load: modalFilter
    };

    function modalFilter(image, done) {
      var template =
        '<ion-modal-view class="modal-capture"><ion-header-bar class="bar-dark"><button class="button button-clear button-icon ion-ios-arrow-thin-left"ng-click="closeCapture()"></button><div class="title text-left">{{ \'ION-PHOTO.FILTERS\' | translate }}</div><button class="button button-clear button-icon ion-ios-arrow-thin-right"ng-click="submitCapture()"></button></ion-header-bar><ion-content scroll="false"><photo-filter image="form.photo"></photo-filter></ion-content></ion-modal-view>';
      var image = image.toDataURL();

      var scope = $rootScope.$new(true);
      scope.closeCapture = closeModalCapture;
      scope.submitCapture = submitCapture;
      scope.form = {
        photo: image
      };

      scope.modal = $ionicModal.fromTemplate(template, {
        scope: scope
      });

      scope.modal.show();


      function submitCapture() {
        var canvas = window.document.getElementById('image');
        var dataUrl = canvas.toDataURL();
        console.log(dataUrl);
        done(dataUrl);
        closeModalCapture();
      }

      function closeModalCapture() {
        scope.modal.hide();
      }

    }

  }
})();

(function () {
    'use strict';

    angular
        .module('ion-photo')
        .factory('PhotoService', PhotoService);

    function PhotoService($ionicActionSheet, $translate, AppConfig, PhotogramShare, $jrCrop, $rootScope, $ionicModal,
                          $cordovaCamera, $cordovaCapture, $q) {

        // Default Setting
        var tempImage;
        var cordova = window.cordova;
        var setting = {
            jrCrop: true,
            quality: 90,
            allowEdit: false,
            filter: true,
            correctOrientation: true,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: false,
            allowRotation: false,
            aspectRatio: 0
        };

        return {
            open: openModal,
            crop: cropModal,
            filter: filterModal,
            share: shareModal,
        };

        function openModal(option) {
            var defer = $q.defer();
            var options = {
                jrCrop: option.jrCrop ? option.jrCrop : setting.jrCrop,
                filter: option.filter ? option.filter : setting.filter,
                quality: option.quality ? option.quality : setting.quality,
                aspectRatio: option.aspectRatio ? option.aspectRatio : setting.aspectRatio,
                allowRotation: option.allowRotation ? option.allowRotation : setting.allowRotation,
                allowEdit: option.allowEdit ? option.allowEdit : setting.allowEdit,
                correctOrientation: option.correctOrientation ? option.correctOrientation : setting.correctOrientation,
                targetWidth: option.width ? option.width : setting.targetWidth,
                targetHeight: option.height ? option.height : setting.targetHeight,
                saveToPhotoAlbum: option.saveToPhotoAlbum ? option.saveToPhotoAlbum : setting.saveToPhotoAlbum,
                destinationType: window.cordova ? Camera.DestinationType.DATA_URL : null,
                encodingType: window.cordova ? Camera.EncodingType.JPEG : null,
                popoverOptions: window.cordova ? CameraPopoverOptions : null,
            };
            var buttons = [{
                text: '<i class="icon ion-ios-camera"></i>' + $translate.instant('ION-PHOTO.CAMERA')
            }, {
                text: '<i class="icon ion-images"></i>' + $translate.instant('ION-PHOTO.GALLERY')
            }, {
                text: '<i class="icon ion-ios-videocam"></i>' + $translate.instant('ION-PHOTO.VIDEO')
            }];
            var actionSheet = $ionicActionSheet.show({
                buttons: buttons,
                titleText: $translate.instant('ION-PHOTO.SHARE'),
                cancelText: $translate.instant('ION-PHOTO.CANCEL'),
                cancel: buttonCancel,
                buttonClicked: buttonClicked
            });

            function buttonClicked(index) {
                console.log(index);
                actionSheet();
                capture(index, options)
                    .then(cropModal)
                    .then(filterModal)
                    .then(function  (resp) {
                        console.log('Final rest');
                        defer.resolve(resp);
                    })
                    .catch(buttonCancel);
            }


            function buttonCancel(resp) {
                actionSheet(resp);
            }

            return defer.promise;
        }

        function cropModal(image) {
            var defer = $q.defer();

            if (setting.jrCrop) {
                $jrCrop
                    .crop({
                        url: image,
                        aspectRatio: setting.aspectRatio ? setting.aspectRatio : false,
                        allowRotation: setting.allowRotation ? setting.allowRotation : false,
                        width: setting.width ? setting.width : setting.targetWidth,
                        height: setting.height ? setting.height : setting.targetHeight,
                        cancelText: $translate.instant('ION-PHOTO.CANCEL'),
                        chooseText: $translate.instant('ION-PHOTO.CROP')
                    })
                    .then(function (canvas) {
                        defer.resolve(canvas.toDataURL());
                    })
                    .catch(defer.reject);
            } else {
                defer.resolve(image);
            }
            return defer.promise;
        }

        function shareModal(image) {
            var template = '<ion-modal-view class="modal-share"> <ion-header-bar class="bar-dark"> <div class="title">{{ \'ION-PHOTO.SHARE\' | translate }}</div> <button class="button button-positive" ng-click="modal.hide()"> <i class="icon ion-arrow-right-b"></i> </button> </ion-header-bar> <ion-content ng-cloak> <div id="image"> <img ng-src="{{form.photo}}"> <div class="title">{{ form.title }}</div></div> <ul class="list"> <li class="padding"> <button ng-repeat="social in sociais" ng-click="share(form, social)"class="button button-block button-{{ social }}"><i class="icon ion-social-{{ social }}"></i>{{ social | uppercase }} </button> </li> </ul> </ion-content> </ion-modal-view>';

            if (image === undefined) return false;
            var scope = $rootScope.$new(true);
            var socials = [
                'facebook',
                'instagram',
                'whatsapp',
                'twitter'
            ];
            //image = image.attributes;

            scope.sociais = socials;
            scope.share = shareSocial;
            scope.form = {
                title: '',
                photo: image
            };

            scope.modal = $ionicModal.fromTemplate(template, {
                scope: scope
            });
            scope.modal.show();


            function shareSocial(social, form) {
                console.log('share', social, form);
                PhotogramShare
                    .share(social, {
                        text: form.title,
                        image: form.photo,
                        link: AppConfig.app.url
                    });
            }


        }

        function filterModal(image) {
            var defer = $q.defer();

            function openFilter(image) {
                var templateFilter = '<ion-modal-view class="modal-capture"><ion-header-bar class="bar-dark"><button class="button button-clear button-icon ion-ios-arrow-thin-left" ng-click="cropImage()"></button><div class="title">{{ \'ION-PHOTO.FILTERS\' | translate }}</div><button class="button button-icon " ng-click="submitFilter()"><i class="icon ion-ios-arrow-thin-right"></i></button></ion-header-bar><ion-content><photo-filter image="form.photo"></photo-filter></ion-content></ion-modal-view>';
                var scope = $rootScope.$new(true);
                scope.closeFilter = closeFilter;
                scope.submitFilter = submitFilter;
                tempImage = image;
                scope.form = {
                    photo: image
                };

                scope.modalFilter = $ionicModal.fromTemplate(templateFilter, {
                    scope: scope
                });

                scope.cropImage = function () {
                    scope.modalFilter.remove();
                    cropModal(tempImage)
                        .then(openFilter);
                };

                scope.modalFilter.show();

                function closeFilter() {
                    defer.reject();
                    scope.modalFilter.hide();
                }

                function submitFilter() {
                    var canvas = window.document.getElementById('image');
                    var dataUrl = canvas.toDataURL();
                    scope.modalFilter.remove();
                    defer.resolve(dataUrl);
                }

            }

            openFilter(image);

            return defer.promise;
        }


        function capture(type, options) {
            var defer = $q.defer();

            // CAMERA
            if (type === 0) {
                getPicture(0);
            }

            // GALLERY
            if (type === 1) {
                getPicture(1);
            }

            // Video
            if (type === 2) {
                getVideo();
            }

            function getPicture(method) {
                if (method === 0 && cordova) options.sourceType = Camera.PictureSourceType.CAMERA;
                if (method === 1 && cordova) options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;

                if (cordova) {
                    $cordovaCamera
                        .getPicture(options)
                        .then(defer.resolve, defer.reject);
                } else {
                    var fileInput = angular.element('<input type="file"/>');
                    fileInput[0].click();
                    fileInput.on('change', function (evt) {
                        tempImage = evt.currentTarget.files[0];
                        var reader = new FileReader();
                        reader.onload = function (evt) {
                            defer.resolve(evt.target.result);
                        };
                        reader.readAsDataURL(tempImage);
                    });
                }
            }

            function getVideo() {
                $cordovaCapture
                    .captureVideo({
                        limit: 1,
                        duration: 5
                    })
                    .then(function (mediaFiles) {
                        tempImage = mediaFiles[0].fullPath;
                        defer.resolve(tempImage);
                    }, defer.reject);
            }


            return defer.promise;
        }
    }
})();

(function () {
  'use strict';

  angular
    .module('ion-photo')
    .factory('Video', Video);

  function Video($window, $q) {
    var deferred = $q.defer();
    //https://devdactic.com/capture-and-store-videos-ionic/
    // Resolve the URL to the local file
    // Start the copy process
    function createFileEntry(fileURI) {
      $window.resolveLocalFileSystemURL(fileURI, function (entry) {
        return copyFile(entry);
      }, fail);
    }

    // Create a unique name for the videofile
    // Copy the recorded video to the app dir
    function copyFile(fileEntry) {
      var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
      var newName = makeid() + name;

      $window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fileSystem2) {
          fileEntry.copyTo(fileSystem2, newName, function (succ) {
            return onCopySuccess(succ);
          }, fail);
        },
        fail
      );
    }

    // Called on successful copy process
    // Creates a thumbnail from the movie
    // The name is the moviename but with .png instead of .mov
    function onCopySuccess(entry) {
      var name = entry.nativeURL.slice(0, -4);
      $window.PKVideoThumbnail.createThumbnail(entry.nativeURL, name + '.png', function (prevSucc) {
        return prevImageSuccess(prevSucc);
      }, fail);
    }

    // Called on thumbnail creation success
    // Generates the currect URL to the local moviefile
    // Finally resolves the promies and returns the name
    function prevImageSuccess(succ) {
      var correctUrl = succ.slice(0, -4);
      correctUrl += '.MOV';
      deferred.resolve(correctUrl);
    }

    // Called when anything fails
    // Rejects the promise with an Error
    function fail(error) {
      console.log('FAIL: ' + error.code);
      deferred.reject('ERROR');
    }

    // Function to make a unique filename
    function makeid() {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

    // The object and functions returned from the Service
    return {
      // This is the initial function we call from our controller
      // Gets the videoData and calls the first service function
      // with the local URL of the video and returns the promise
      saveVideo: function (data) {
        createFileEntry(data[0].localURL);
        return promise;
      }
    };
  }

})();

(function () {
  'use strict';
  angular
    .module('app.intro')
    .controller('IntroCtrl', IntroCtrl);

  function IntroCtrl($ionicSlideBoxDelegate, $translate) {
    var vm = this;
    var currentPlatform = window.ionic.Platform.platform();
    vm.slideIndex = 0;
    vm.slideChanged = slideChanged;
    vm.next = function () {
      $ionicSlideBoxDelegate.next();
    };
    vm.previous = function () {
      $ionicSlideBoxDelegate.previous();
    };


    if (currentPlatform) {
      vm.device = (currentPlatform === 'android') ? 'android' : 'iphone';
    } else {
      vm.device = 'android';
    }

    console.log($translate.instant('INTRO.STEP1'));
    vm.slides = [{
        top: $translate.instant('INTRO.STEP1'),
        img: 'img/intro1.jpg'
      }, {
        top: $translate.instant('INTRO.STEP2'),
        img: 'img/intro2.jpg'
      }, {
        top: $translate.instant('INTRO.STEP3'),
        img: 'img/intro3.jpg'
      }, {
        top: $translate.instant('INTRO.STEP4'),
        img: 'img/intro4.jpg'
      }, {
        top: $translate.instant('INTRO.STEP5'),
        img: 'img/intro5.jpg'
      }

    ];

    function slideChanged(index) {
      vm.slideIndex = index;
    }


  }

})();

(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name LoadingCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.loading')
    .controller('LoadingCtrl', LoadingController);

  function LoadingController($rootScope, AppConfig, $state) {
    var user = $rootScope.user;
    console.log('User', user);

    if (user) {
      console.log(user);
      if (user.name) {
        $state.go(AppConfig.routes.home, {
          clear: true
        });
      } else {
        $state.go('useravatar', {
          clear: true
        });
      }
    } else {
      $state.go('intro', {
        clear: true
      });
    }
  }


})();

(function () {
    'use strict';
    /**
     * @ngdoc controller
     * @name PhotogramTabsCtrl
     *
     * @description
     * _Please update the description and dependencies._
     *
     * @requires $scope
     * */
    angular
        .module('app.photogram')
        .controller('PhotogramTabsCtrl', PhotogramTabsController);

    function PhotogramTabsController($scope, $state, AppConfig, $rootScope, Photogram, $ionicModal, Loading,
                                     PhotogramSetting, PhotoService) {
        var vm = this;
        var path = AppConfig.path;
        vm.postPhoto = open;

        function open() {
            var option = {
                crop: PhotogramSetting.get('imageCrop'),
                allowEdit: PhotogramSetting.get('imageEdit'),
                filter: true,
                //filter: PhotogramSetting.get('imageFilter'),
                allowRotation: PhotogramSetting.get('imageRotation'),
                quality: PhotogramSetting.get('imageQuality'),
                correctOrientation: PhotogramSetting.get('imageEdit'),
                targetWidth: PhotogramSetting.get('imageWidth'),
                targetHeight: PhotogramSetting.get('imageHeight'),
                saveToPhotoAlbum: PhotogramSetting.get('imageSaveAlbum')
            };
            console.log(option);

            PhotoService
                .open(option)
                .then(modalPost)
                .catch(goHome);
        }


        function goHome() {
            console.warn('Deu erro');
            $state.go('photogram.home');
        }

        function modalPost(image) {
            $scope.closePost = closeModalPost;
            $scope.submitPost = submitPost;
            $scope.form = {
                title: '',
                location: '',
                photo: image,
                geo: false
            };

            $ionicModal
                .fromTemplateUrl(path + '/module/share/view/photogram.post.modal.html', {
                    scope: $scope,
                    focusFirstInput: true
                })
                .then(function (modal) {
                    $scope.form.photo = image;
                    $scope.modalPost = modal;
                    $scope.modalPost.show();
                });

            function closeModalPost() {
                $scope.modalPost.hide();
                $scope.modalPost.remove();
                Loading.end();
            }

            function submitPost(resp) {
                var form = angular.copy(resp);
                console.log(form);
                Loading.start();
                Photogram
                    .post(form)
                    .then(function () {
                        closeModalPost();
                        $rootScope.$emit('filterModal:close');
                        $rootScope.$emit('PhotogramHome:reload');
                    });
            }
        }
    }

})();

(function () {
  'use strict';

  angular
    .module('app.photogram')
    .factory('Photogram', PhotogramFactory);

  function PhotogramFactory($q, Parse, User, Loading) {

    var currentUser = Parse.User.current();
    var limitComment = 3;

    return {
      addActivity: addActivity,
      listActivity: listActivity,
      all: all,
      home: home,
      post: post,
      get: get,
      deletePhoto: deletePhoto,
      find: find,
      nearby: nearby,
      // User
      profile: profile,
      getUser: getUser,
      getUserGallery: getUserGallery,
      getUserGalleryQtd: getUserGalleryQtd,
      // Comment
      allComment: allComment,
      addComment: addComment,
      getComments: getComments,
      updateComment: updateComment,
      deleteComment: deleteComment,
      // Like
      getLikes: getLikes,
      likeGallery: likeGallery,
      // Follow
      getFollow: getFollow,
      search: search
    };

    function loadProfile(response) {

      if (response) {
        var user = processImg(response);

        console.info(response, user);
        return user;
      } else {
        User.logout();
        return false;
      }
    }

    function deletePhoto(galleryId) {
      var defer = $q.defer();

      new Parse
        .Query('Gallery')
        .get(galleryId, function (resp) {
          resp.destroy();
          defer.resolve(resp);
        });

      return defer.promise;
    }

    function post(_params) {
      var defer = $q.defer();
      var ImageObject = Parse.Object.extend('Gallery');

      if (_params.photo !== '') {

        // create the parse file
        var imageFile = new Parse.File('mypic.jpg', {
          base64: _params.photo
        });

        // save the parse file
        imageFile
          .save()
          .then(function () {

            _params.photo = null;

            // create object to hold caption and file reference
            var imageObject = new ImageObject();

            // set object properties
            imageObject.set('title', _params.title);
            imageObject.set('user', Parse.User.current());
            imageObject.set('img', imageFile);

            if (_params.location !== undefined) {
              imageObject.set('location', new Parse.GeoPoint(_params.location.latitude, _params.location.longitude));
            }

            // save object to parse backend
            imageObject
              .save()
              .then(function (resp) {
                console.log('Posted Photo', resp);
                // Add User QtdPhoto
                defer.resolve(resp);
              });

          }, function (error) {
            console.log('Error', error);
            defer.reject(error);
          });

      } else {
        // create object to hold caption and file reference
        var imageObject = new ImageObject();

        // set object properties
        imageObject.set('caption', _params.caption);

        // save object to parse backend
        return imageObject.save();

      }


      return defer.promise;
    }

    function allComment(galleryId) {
      var defer = $q.defer();

      var gallery = new Parse
        .Query('Gallery')
        .get(galleryId, function (resp) {
          console.log(resp);
          return resp;
        });

      new Parse
        .Query('GalleryComment')
        .equalTo('galery', gallery)
        //.include ('commentBy')
        .descending('createdAt')
        .find()
        .then(function (resp) {
          var objs = [];
          angular.forEach(resp, function (item) {
            var obj = item.attributes;
            obj.id = item.id;
            obj.user = item.attributes.commentBy;
            objs.push(obj);
          });
          Loading.end();
          defer.resolve(objs);
        });
      return defer.promise;
    }

    function getComments(obj) {
      var defer = $q.defer();

      new Parse
        .Query('Gallery')
        .get(obj)
        .then(function (gallery) {
          new Parse
            .Query('GalleryComment')
            .equalTo('gallery', gallery)
            .include('commentBy')
            .ascending('createdAt')
            .find()
            .then(function (resp) {
              var comments = [];
              resp.map(function (item) {
                console.warn(item);
                var obj = {
                  id: item.id,
                  text: item.attributes.text,
                  created: item.createdAt
                };
                var userComment = item.attributes.commentBy.attributes;
                userComment.id = item.attributes.commentBy.id;

                obj.user = processImg(userComment);
                comments.push(obj);
              });
              defer.resolve(comments);
            });
        });

      return defer.promise;
    }

    function updateComment(obj) {
      var defer = $q.defer();
      console.log('updateComment', obj);
      new Parse
        .Query('GalleryComment')
        .get(obj.id, function (comment) {
          console.log('updateComment comment', comment);
          comment.set('text', obj.text);
          comment.save();
          defer.resolve();
        });
      return defer.promise;
    }

    function deleteComment(item) {
      var defer = $q.defer();
      new Parse
        .Query('GalleryComment')
        .get(item.id, deleteItem);

      function deleteItem(comment) {
        comment.destroy(function () {
          defer.resolve();
        });
      }

      return defer.promise;
    }

    function getFollow(userId) {
      var defer = $q.defer();

      User
        .find(userId)
        .then(function (user) {

          new Parse
            .Query('UserFollow')
            .equalTo('user', user)
            .include('follow')
            .find()
            .then(function (resp) {
              var data = [];
              angular.forEach(resp, function (item) {
                console.warn(item);
                var obj = {
                  id: item.id,
                  text: item.attributes.text,
                  user: item.attributes.follow.attributes,
                  created: item.createdAt
                };
                obj.user = processImg(obj.user);

                data.push(obj.user);
              });
              defer.resolve(data);
            });
        });

      return defer.promise;
    }

    function getLikes(obj) {
      var defer = $q.defer();

      new Parse
        .Query('Gallery')
        .get(obj)
        .then(function (gallery) {
          if (gallery.length) {
            new Parse
              .Query('GalleryLike')
              .equalTo('gallery', gallery)
              .include('user')
              .ascending('createdAt')
              .find()
              .then(function (resp) {
                var objs = [];
                angular.forEach(resp, function (item) {
                  console.warn(item);
                  var obj = {
                    id: item.id,
                    text: item.attributes.text,
                    user: item.attributes.user.attributes,
                    created: item.createdAt
                  };
                  objs.push(obj);
                });
                console.log(objs);
                defer.resolve(objs);
              });
          } else {
            defer.reject(true);
          }
        });

      return defer.promise;
    }


    function nearby(position) {
      var defer = $q.defer();
      var data = [];

      var point = new Parse.GeoPoint(position);
      var maxDistance = 1;

      new Parse
        .Query('Gallery')
        //.near('location', point)
        .include('user')
        .withinRadians('location', point, maxDistance)
        .limit(50)
        .find()
        .then(function (resp) {
          if (resp.length) {
            resp.map(function (value) {
              var size = 100;
              var obj = value.attributes;
              obj.id = value.id;
              obj.img = value.attributes.img.url();
              obj.created = value.createdAt;
              obj.icon = {
                size: {
                  width: 100,
                  height: 100
                },

                scaledSize: {
                  width: size / 2,
                  height: size / 2
                },
                url: 'img/icon.png'
              };
              obj.icon.url = obj.img;
              obj.coords = {
                latitude: obj.location._latitude,
                longitude: obj.location._longitude
              };
              data.push(obj);
            });


            defer.resolve(data);
          } else {
            defer.reject(true);
          }
        });

      return defer.promise;
    }

    function search(string, page) {
      var defer = $q.defer();
      var data = [];
      var limit = 15;

      new Parse
        .Query('Gallery')
        .limit(limit)
        .skip(page * limit)
        .matches('title', '* ' + string + '.*')
        .include('user')
        .find()
        .then(function (resp) {
          resp.map(function (value) {
            console.log('gallery search item', value);
            var obj = {
              id: value.id,
              item: value.attributes,
              src: value.attributes.img.url(),
              created: value.createdAt,
              user: value.attributes.user.id
            };
            data.push(obj);
          });
          defer.resolve(data);
        });

      return defer.promise;
    }

    function home(page) {
      var defer = $q.defer();
      var limit = 4;
      var data = [];

      new Parse
        .Query('Gallery')
        .descending('createdAt')
        //.notEqualTo('user', user)
        //.containedIn('ref', following)
        //.containsAll('ref', following)
        .include('user')
        .limit(limit)
        .skip(page * limit)
        .find()
        .then(function (resp) {

          console.log('home', resp);

          var qtd = resp.length;

          if (!qtd) {
            defer.reject(true);
          }

          var cb = _.after(resp.length, function () {
            defer.resolve(data);
          });

          _.each(resp, function (item) {
            //grab relations

            var likes = item.relation('likes');
            var comments = item.relation('comments');

            likes
              .query()
              .equalTo('gallery', item)
              .equalTo('user', currentUser)
              .count()
              .then(function (liked) {

                comments
                  .query()
                  .include('commentBy')
                  .ascending('createdAt')
                  .limit(limitComment)
                  .find()
                  .then(function (comments) {
                    console.log(comments);

                    var commentsData = [];

                    comments.map(function (item) {
                      var user = item.attributes.commentBy;

                      var comment = {
                        id: item.id,
                        text: item.attributes.text,
                        user: user.attributes
                      };

                      comment.user.id = user.id;
                      comment.user = processImg(comment.user);
                      commentsData.push(comment);
                    });

                    var obj = {
                      id: item.id,
                      item: item.attributes,
                      created: item.createdAt,
                      likes: likes,
                      src: item.attributes.img.url(),
                      comments: commentsData
                    };

                    obj.item.liked = liked;

                    if (item.attributes.user) {
                      obj.user = item.attributes.user.attributes,
                        obj.user.id = item.attributes.user.id ? item.attributes.user.id : '';
                      obj.user = processImg(obj.user);
                    } else {
                      // remove gallery
                    }

                    data.push(obj);
                    cb();
                  });
              });

          });
        });

      return defer.promise;
    }

    /*
     * 1) Gallery, Limit
     * 2) GalleryComment, Limi
     * 3) Like, count, liked
     * */
    function all(page, userId) {
      var defer = $q.defer();
      var limit = 18;
      var data = [];

      var query;

      if (userId) {
        console.log(userId);
        var loadUser = new Parse
          .Query('User')
          .equalTo('objectId', userId)
          .first(userId, function (resp) {
            return resp;
          });


        query = new Parse
          .Query('Gallery')
          .descending('createdAt')
          .include('user')
          .limit(limit)
          .equalTo('user', loadUser)
          .skip(page * limit)
          .find();
      } else {

        query = new Parse
          .Query('Gallery')
          .descending('createdAt')
          //.notEqualTo('user', Parse.User.current())
          .include('user')
          .limit(limit)
          .skip(page * limit)
          .find();
      }
      query
        .then(function (resp) {
          if (resp.length) {

            var cb = _.after(resp.length, function () {
              defer.resolve(data);
            });

            _.each(resp, function (item) {
              //grab relations

              var likes = item.relation('likes');
              var comments = item.relation('comments');

              likes
                .query()
                .equalTo('gallery', item)
                .equalTo('user', currentUser)
                .count()
                .then(function (liked) {

                  comments
                    .query()
                    .include('commentBy')
                    .ascending('createdAt')
                    .limit(limitComment)
                    .find()
                    .then(function (comments) {
                      console.log(comments);

                      var commentsData = [];

                      angular.forEach(comments, function (item) {
                        var user = item.attributes.commentBy;
                        var comment = {
                          id: item.id,
                          text: item.attributes.text,
                          user: user.attributes
                        };
                        comment.user.id = user.id;
                        comment.user = processImg(comment.user);
                        commentsData.push(comment);
                      });

                      var obj = {
                        id: item.id,
                        item: item.attributes,
                        created: item.createdAt,
                        likes: likes,
                        src: item.attributes.img.url(),
                        comments: commentsData
                      };

                      obj.item.liked = liked;

                      if (item.attributes.user) {
                        obj.user = item.attributes.user.attributes,
                          obj.user.id = item.attributes.user.id ? item.attributes.user.id : '',
                          obj.user = processImg(obj.user);
                      } else {
                        // remove gallery
                      }

                      data.push(obj);
                      cb();
                    });
                });

            });
          } else {
            defer.reject(true);
          }

        });

      return defer.promise;
    }

    function get(item) {
      var defer = $q.defer();

      console.log(item);
      Loading.start();

      find(item)
        .then(function (resp) {
          console.log(resp);

          var likes = resp.relation('likes');
          var comments = resp.relation('comments');

          likes
            .query()
            .equalTo('gallery', item)
            .equalTo('user', currentUser)
            .count()
            .then(function (liked) {

              likes
                .query()
                .count()
                .then(function (likes) {

                  comments
                    .query()
                    .include('commentBy')
                    .descending('createdAt')
                    .limit(limitComment)
                    .find()
                    .then(function (comments) {
                      console.log(comments);

                      var commentsData = [];

                      angular.forEach(comments, function (item) {
                        var comment = {
                          id: item.id,
                          text: item.attributes.text,
                          user: item.attributes.commentBy.attributes
                        };
                        comment.user.id = item.id;
                        commentsData.push(comment);
                      });

                      var obj = {
                        id: item.id,
                        item: item.attributes,
                        created: item.createdAt,
                        likes: likes,
                        liked: liked,
                        user: item.attributes.user.attributes,
                        comments: commentsData
                      };
                      obj.user.id = item.attributes.user.id;
                      obj.user = processImg(obj.user);

                      defer.resolve(obj);
                      Loading.end();
                    });
                });
            });

        });

      return defer.promise;
    }

    function processImg(obj) {
      console.log(obj);
      if (obj) {
        if (obj.facebook) {
          obj.src = (obj.facebookimg) ? obj.facebookimg : 'img/user.png';
        } else {
          obj.src = (obj.img) ? obj.img.url() : 'img/user.png';
        }
        return obj;
      } else {
        return {};
      }
    }

    function find(id) {
      var defer = $q.defer();
      new Parse
        .Query('Gallery')
        .include('user')
        .get(id)
        .then(function (resp) {
          defer.resolve(resp);
        });
      return defer.promise;
    }


    function addComment(form) {
      var defer = $q.defer();
      console.log('addComent', form);

      find(form.galleryId)
        .then(function (gallery) {
          var Object = Parse.Object.extend('GalleryComment');
          var item = new Object({});

          angular.forEach(form, function (value, key) {
            item.set(key, value);
          });
          item.set('commentBy', Parse.User.current());
          item.set('gallery', gallery);

          item.save(null)
            .then(function (resp) {
              console.log(resp);

              addActivity({
                galleryId: gallery.id,
                action: 'add comment'
              });

              gallery
                .relation('comments')
                .add(resp);

              gallery
                .save()
                .then(function (resp) {
                  console.log(resp);
                  defer.resolve(resp);
                });
            });
        });


      return defer.promise;
    }

    function isLiked(galleryId) {
      var defer = $q.defer();

      find(galleryId)
        .then(function (gallery) {
          new Parse
            .Query('GalleryLike')
            .equalTo('gallery', gallery)
            .equalTo('user', currentUser)
            .first()
            .then(function (resp) {
              console.warn(resp);
              if (resp === undefined) {
                defer.reject(resp);
              } else {
                defer.resolve(resp);
              }
            });
        });

      return defer.promise;
    }

    function addLike(galleryId) {
      var defer = $q.defer();

      find(galleryId)
        .then(function (gallery) {
          var Object = new Parse.Object.extend('GalleryLike');
          var item = new Object({});

          item.set('user', currentUser);
          item.set('gallery', gallery);

          console.log(gallery);

          item.save(null)
            .then(function (resp) {
              console.log(resp);

              // Gallery Increment Like
              var likes = parseInt(gallery.attributes.qtdLike) ? parseInt(gallery.attributes.qtdLike + 1) : 1;
              console.log('Qtd Like', likes);

              // Increment Like
              gallery
                .set('qtdLike', likes);

              // Add Relation
              gallery
                .relation('likes')
                .add(resp);

              console.log('Save Gallery', gallery);

              // Save Gallery
              gallery
                .save()
                .then(function (newGallery) {
                  console.log(newGallery);
                  defer.resolve({
                    liked: true,
                    likes: likes
                  });
                }, function (err) {
                  console.error(err);
                  defer.reject(err);
                });
            });
        });
      return defer.promise;
    }

    function removeLike(galleryId) {

      var defer = $q.defer();
      find(galleryId)
        .then(function (gallery) {

          new Parse
            .Query('GalleryLike')
            .equalTo('gallery', gallery)
            .equalTo('user', currentUser)
            .first()
            .then(function (like) {

              var likes = parseInt(gallery.attributes.qtdLike - 1);
              if (likes < 0) {
                likes = 0;
              }

              console.log('Remove like', likes, gallery);


              // Gallery Decrement Like
              gallery
                .set('qtdLike', likes);

              // Remove Relation
              gallery
                .relation('likes')
                .remove(like);

              like
                .destroy(function (resp) {
                  if (resp) {
                    console.log('Remove like');
                    // Save Gallery
                    gallery
                      .save()
                      .then(function (newGallery) {
                        console.log('New Gallery', newGallery);

                        defer.resolve({
                          liked: false,
                          likes: newGallery.attributes.qtdLike
                        });

                      }, function (err) {
                        console.error(err);
                        defer.reject(err);
                      });
                  }
                });


            });

        });
      return defer.promise;
    }

    function likeGallery(gallery) {
      var defer = $q.defer();

      isLiked(gallery)
        .then(function (resp) {
          console.warn(resp);
          var promise = '';

          if (resp) {
            console.log('Remove Like');
            promise = removeLike(gallery);
            addActivity({
              galleryId: gallery,
              action: 'unlike like'
            });

          } else {
            console.log('Add like');
            promise = addLike(gallery);
            addActivity({
              galleryId: gallery,
              action: 'add like'
            });
          }

          promise
            .then(function (resp) {
              console.log(resp);
              defer.resolve(resp);
            });

        })
        .catch(function (err) {
          console.log('Add like', err);

          addActivity({
            galleryId: gallery,
            action: 'add like'
          });

          addLike(gallery)
            .then(function (resp) {
              console.log(resp);
              defer.resolve(resp);
            });
        });
      return defer.promise;
    }


    function getUser(userId) {
      var defer = $q.defer();

      //todo: get user
      //todo: count user gallery
      //todo: count user follow
      //todo: count user following

      if (userId === undefined) {
        userId = currentUser.id;
      }

      console.log(userId);
      User
        .find(userId)
        .then(function (resp) {
          console.log('getUser', resp);
          var obj = resp.attributes;
          obj.id = resp.id;
          var user = loadProfile(obj);

          // fotos
          new Parse
            .Query('Gallery')
            .equalTo('user', resp)
            .count()
            .then(function (gallery) {
              user.galleries = gallery;

              // seguidores
              new Parse
                .Query('UserFollow')
                .equalTo('follow', resp)
                .count()
                .then(function (follow1) {
                  user.follow1 = follow1;

                  // seguindo
                  new Parse
                    .Query('UserFollow')
                    .equalTo('user', resp)
                    .count()
                    .then(function (follow2) {
                      user.follow2 = follow2;

                      // seguindo
                      new Parse
                        .Query('UserFollow')
                        .equalTo('user', Parse.User.current())
                        .equalTo('follow', resp)
                        .count()
                        .then(function (follow) {
                          user.follow = follow ? true : false;

                          console.log('getUser', user);
                          defer.resolve(user);

                        });

                    });

                });
            });
        });


      return defer.promise;
    }

    function getUserGalleryQtd(userId) {
      var defer = $q.defer();
      if (userId === undefined) {
        userId = currentUser.id;
      }

      User
        .find(userId)
        .then(function (user) {
          new Parse
            .Query('Gallery')
            .equalTo('user', user)
            .count()
            .then(function (qtdGalleries) {
              defer.resolve(qtdGalleries);
            });
        });

      return defer.promise;
    }

    function getUserGallery(userId, page) {
      var defer = $q.defer();
      var data = [];
      var limit = 9;

      if (userId === undefined) {
        userId = currentUser.id;
      }

      User
        .find(userId)
        .then(function (user) {

          new Parse
            .Query('Gallery')
            .equalTo('user', user)
            .descending('createdAt')
            //.containedIn('ref', following)
            //.containsAll('ref', following)
            .include('user')
            .limit(limit)
            .skip(page * limit)
            .find()
            .then(function (resp) {

              if (resp.length) {
                var cb = _.after(resp.length, function () {
                  defer.resolve(data);
                });

                _.each(resp, function (item) {
                  //grab relations

                  var likes = item.relation('likes');
                  var comments = item.relation('comments');

                  likes
                    .query()
                    .equalTo('gallery', item)
                    .equalTo('user', currentUser)
                    .count()
                    .then(function (liked) {

                      likes
                        .query()
                        .count()
                        .then(function (likes) {

                          comments
                            .query()
                            .include('commentBy')
                            .descending('createdAt')
                            .limit(limitComment)
                            .find()
                            .then(function (comments) {
                              console.log(comments);

                              var commentsData = [];

                              angular.forEach(comments, function (item) {
                                var comment = {
                                  id: item.id,
                                  text: item.attributes.text,
                                  user: item.attributes.commentBy.attributes
                                };
                                comment.user.id = item.id;
                                commentsData.push(comment);
                              });

                              var obj = {
                                id: item.id,
                                item: item.attributes,
                                src: item.attributes.img.url(),
                                created: item.createdAt,
                                likes: likes,
                                liked: liked,
                                user: item.attributes.user.attributes,
                                comments: commentsData
                              };
                              obj.user.id = item.attributes.user.id;
                              obj.user = processImg(obj.user);

                              data.push(obj);
                              cb();
                            });
                        });
                    });

                });
              } else {
                defer.reject(true);
              }
            }, function () {
              defer.reject(true);
            });
        });

      return defer.promise;
    }

    function listActivity(page) {
      var defer = $q.defer();
      var limit = 20;

      console.info(page, limit);


      new Parse
        .Query('GalleryActivity')
        .include('user')
        .include('gallery')
        .descending('createdAt')
        .limit(limit)
        .skip(page * limit)
        .find()
        .then(function (resp) {
          console.log(resp.length);
          if (resp.length) {
            var data = [];
            resp.map(function (value) {
              var obj = value.attributes;
              obj.id = value.id;
              obj.user = (value.attributes.user) ? value.attributes.user.attributes : '';
              obj.user = processImg(obj.user);
              obj.created = value.createdAt;
              obj.img = (value.attributes.gallery) ? value.attributes.gallery.attributes.img.url() : '';
              console.log(obj);
              data.push(obj);
            });
            defer.resolve(data);
          } else {
            defer.reject(true);
          }
        });

      return defer.promise;
    }

    function addActivity(data) {
      /*
       * ACTIONS
       * add photo
       * add comment
       * like photo
       * unlike photo
       * register
       * */

      console.info(data);

      if (data.galleryId) {
        find(data.galleryId)
          .then(function (gallery) {
            var Object = Parse.Object.extend('GalleryActivity');
            var item = new Object({});

            item.set('user', Parse.User.current());
            item.set('gallery', gallery);
            item.set('action', data.action);

            item.save()
              .then(function (resp) {
                console.warn(resp);
              });
          });
      } else {
        var Object = Parse.Object.extend('GalleryActivity');
        var item = new Object({});

        item.set('user', Parse.User.current());
        item.set('action', data.action);

        item.save()
          .then(function (resp) {
            console.warn(resp);
          });
      }
    }

    function profile(userId) {
      var defer = $q.defer();
      var user = {};

      Loading.start();

      User
        .profile(userId)
        .then(function (respProfile) {
          user = respProfile;

          all(true, userId)
            .then(function (galleries) {
              user.feed = galleries;
              console.log(user);
              Loading.end();
              defer.resolve(user);
            });
        });


      return defer.promise;

    }


  }


})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .factory('PhotogramSetting', PhotogramSettingFactory);

  function PhotogramSettingFactory($window, Cache, $q) {

    var CacheSetting = Cache.model('Setting', {
      mode: 'sessionStorage'
    });
    var SettingKeys = CacheSetting.keys();

    return {
      init: init,
      get: get
    };

    function init() {
      var defer = $q.defer();
      var data = [];

      if (SettingKeys.length) {
        var settings = Cache.data('Setting');
        console.log(settings);
        defer.resolve(settings);
      } else {
        new Parse
          .Query('GallerySetting')
          .find()
          .then(function (resp) {
            resp.map(function (item) {
              var obj = {
                key: item.attributes.key,
                value: item.attributes.value
              };
              CacheSetting.put(obj.key, obj.value);
              data.push(obj);

            });
            defer.resolve(data);
          }, error);
      }


      return defer.promise;

    }

    function error(err) {
      alert(err);
    }

    function get(key) {
      return CacheSetting.get(key);
    }

  }


})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .factory('PhotogramShare', PhotogramShareFactory);

  function PhotogramShareFactory(AppConfig, $q, $ionicActionSheet, Notify, $cordovaSocialSharing) {

    var message = {
      title: ('Join me from ') + AppConfig.app.name + '!',
      subject: ("I'm at ") + AppConfig.app.name + '!. ' + (
        'Install the application and follow me!') + ' ' + AppConfig.app.url,
      image: AppConfig.app.image,
      link: AppConfig.app.url
    };

    return {
      share: share,
      open: open
    };

    function share(social, option) {
      var defer = $q.defer();

      function success(resp) {
        Notify.alert({
          title: ('Thanks'),
          text: ('Thank you for sharing!!')
        });
        defer.resolve(resp);
      }

      function error(err) {
        console.error(err);
        defer.reject();
      }

      var detail = option ? option : message;

      switch (social) {
      case 'instagram':
        window
          .plugins
          .socialsharing
          .shareViaInstagram(message.text, message.image, message.link)
          .then(success, error);
        break;

      case 'facebook':
        $cordovaSocialSharing
          .shareViaFacebook(detail.text, detail.image, detail.link)
          .then(success, error);
        break;

      case 'twitter':
        $cordovaSocialSharing
          .shareViaTwitter(detail.text, detail.image, detail.link)
          .then(success, error);
        break;

      case 'whatsapp':
        $cordovaSocialSharing
          .shareViaWhatsApp(detail.text, detail.image, detail.link)
          .then(success, error);
        break;

      case 'email':
        $cordovaSocialSharing
          .shareViaEmail(detail.title, detail.subject ? detail.subject : detail.title)
          .then(success, error);
        break;
      }

      return defer.promise;
    }

    function open() {
      var modal = $ionicActionSheet
        .show({
          buttons: [{
            text: '<i class="icon ion-social-instagram"></i>' + ('Instagram')
          }, {
            text: '<i class="icon ion-social-facebook"></i>' + ('Facebook')
          }, {
            text: '<i class="icon ion-social-twitter"></i>' + ('Twitter')
          }, {
            text: '<i class="icon ion-social-whatsapp"></i>' + ('Whatsapp')
          }, {
            text: '<i class="icon ion-email"></i>' + ('Email')
          }],
          titleText: ('Share'),
          cancelText: ('Cancel'),
          cancel: function () {
            return false;
          },
          buttonClicked: function (index) {
            console.log(index);
            switch (index) {
            case 0:
              share('instagram');
              break;
            case 1:
              share('facebook');
              break;
            case 2:
              share('twitter');
              break;
            case 3:
              share('whatsapp');
              break;
            case 4:
              share('email');
              break;
            }
            modal();
            //share(index);
          }
        });

    }
  }

})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .factory('PhotogramForm', PhotogramFormFactory);

  function PhotogramFormFactory($translate) {

    var form = [{
      key: 'title',
      type: 'input',
      templateOptions: {
        type: 'text',
        placeholder: $translate.instant('PHOTOGRAM.FORM.TITLE'),
        icon: 'icon-envelope',
        required: true,
        iconPlaceholder: true,
        focus: true
      }
    }, {
      key: 'geo',
      type: 'toggle',
      templateOptions: {
        label: $translate.instant('PHOTOGRAM.FORM.GEOLOCATION'),
        toggleClass: 'positive'
      }
    }];

    var formComment = [{
      key: 'text',
      type: 'input',
      templateOptions: {
        placeholder: $translate.instant('PHOTOGRAM.FORM.ADDCOMMENT'),
        type: 'text',
        required: true,
        focus: true
          //icon           : 'icon-envelope',
          //iconPlaceholder: true
      }
    }];

    var formShare = [{
      key: 'facebook',
      type: 'toggle',
      templateOptions: {
        label: 'Facebook',
        toggleClass: 'positive'
      }
    }, {
      key: 'twitter',
      type: 'toggle',
      templateOptions: {
        label: 'Twitter',
        toggleClass: 'positive'
      }
    }, {
      key: 'whatsapp',
      type: 'toggle',
      templateOptions: {
        label: 'Whatsapp',
        toggleClass: 'positive'
      }
    }, {
      key: 'SMS',
      type: 'toggle',
      templateOptions: {
        label: 'SMS',
        toggleClass: 'positive'
      }
    }, {
      key: 'email',
      type: 'toggle',
      templateOptions: {
        label: 'Email',
        toggleClass: 'positive'
      }
    }, ];
    return {
      form: form,
      formComment: formComment,
      formShare: formShare
    };
  }


})();

(function () {
  'use strict';


  angular
    .module('app.user')
    .factory('User', UserFactory);

  function UserFactory($q, $window, AppConfig, $rootScope, $ionicHistory, $cordovaDevice, $facebook, $cordovaFacebook,
    Loading, $location, $state) {

    var cordova = $window.cordova;
    var device = cordova ? true : false;
    var facebook = device ? $cordovaFacebook : $facebook;

    return {
      init: init,
      addFollows: addFollows,
      currentUser: currentUser,
      register: register,
      login: login,
      profile: profile,
      logout: logout,
      update: update,
      updateAvatar: updateAvatar,
      forgot: forgot,
      list: list,
      find: find,
      follow: follow,
      getFollowers: getFollowers,
      getFollowing: getFollowing,
      isFollow: isFollow,
      mail: getMail,
      facebookLogin: facebookLogin,
      facebookLink: facebookLink,
      facebookProfile: facebookProfile,
      facebookFriends: facebookFriends,
      facebookInvite: facebookInvite,
      facebookAPI: facebookAPI
    };


    function init() {
      // Parse Start

      Parse.initialize(AppConfig.parse.applicationId, AppConfig.parse.javascriptKey);
      console.log('device', cordova, device);

      var user = Parse.User.current();
      if (user) {
        var newUser = loadProfile(user);
        console.log('Logged user', newUser);

        // // following
        // var following = $sessionStorage.following;
        // if (!following) {
        //
        //     find(newUser.id)
        //         .then(function (user) {
        //             new Parse
        //                 .Query('UserFollow')
        //                 .equalTo('user', user)
        //                 .find()
        //                 .then(function (following) {
        //                     var users = [];
        //                     angular.forEach(following, function (value, key) {
        //                         users.push(value.id);
        //                     });
        //
        //                     console.info('seguindo', users, following);
        //                     $sessionStorage.following = users;
        //                     $rootScope.user.following = following;
        //
        //                 }, function (err) {
        //                     console.error(err);
        //                 })
        //         })
        //         .then(function (resp) {
        //             console.log('seguindo', resp);
        //         });
        // } else {
        //     $rootScope.user.following = following;
        // }
        //
        // console.log('following', $sessionStorage.following);


        if (newUser.name === '') {
          logout();
        }

      } else {
        console.log('Not logged user, go intro');
        logout();
        $location.path(AppConfig.routes.login);
      }
    }


    function currentUser() {
      return $rootScope.user;
    }


    function loadProfile(response) {
      //console.log('LoadProfile', response);
      if (response) {
        var user = response.attributes;
        user.id = response.id;
        user = processImg(user);
        delete $rootScope.user;
        $rootScope.user = user;
        //console.log('load profile', response, user);
        return user;
      } else {
        logout();
        return false;
      }
    }

    function processImg(obj) {
      //console.log('process image', obj);
      if (obj.facebook) {
        obj.src = (obj.facebookimg) ? obj.facebookimg : 'img/user.png';
      } else {
        obj.src = (obj.img) ? obj.img.url() : 'img/user.png';
      }
      return obj;
    }

    function login(form) {
      var defer = $q.defer();
      Parse
        .User
        .logIn(form.email, form.password, {
          success: function (resp) {
            console.info('Login', resp);
            var user = loadProfile(resp);
            defer.resolve(user);
          },
          error: function (user, err) {
            console.error(user, err);
            // The login failed. Check error to see why.
            defer.reject(err);
          }
        });
      return defer.promise;
    }

    function loginFacebook2(response) {
      var defer = $q.defer();
      console.log('Facebook api');
      facebook
        .api('me/?fields=id,name,email,gender,bio', ['public_profile'])
        .then(function (dados) {
          console.log('facebook api', dados);

          var query = new Parse.Query(Parse.User);
          query
            .equalTo('email', dados.email)
            .first({
              success: function (user) {
                console.log(user);

                if (user) {
                  console.log('Já existe um cadastro com esse email', user);
                  if (user.get('facebook_complete') === Boolean(true)) {

                    loginFacebook(response)
                      .then(function (resp) {
                        console.log('Logado', resp);

                        if (user.attributes.name === '') {
                          console.info('User sem nome', user, dados);
                          var updateUser = user.attributes;
                          updateUser.name = dados.name;

                          update(updateUser)
                            .then(function () {
                              defer.resolve({
                                status: 0
                              });
                            });
                        } else {

                          loadProfile(user);

                          defer.resolve({
                            status: 0
                          });
                        }

                      });
                  } else {
                    console.log('Se ainda não está completo, manda completar o perfil', dados,
                      response);

                    $rootScope.tempUser = processImg(user.attributes);
                    $rootScope.tempUser.src = 'https://graph.facebook.com/' + dados.id +
                      '/picture?width=250&height=250';

                    console.log($rootScope.tempUser);
                    defer.resolve({
                      status: 2
                    });

                  }

                } else {
                  // Se não encontrar nenhum usuário
                  console.log('Novo usuário');

                  // Crio uma conta no parse com o Facebook
                  loginFacebook(response)
                    .then(function (newuser) {

                      console.log(newuser);

                      // Atualizo o novo perfil
                      var form = {
                        name: dados.name,
                        facebook: dados.id,
                        email: dados.email,
                        gender: dados.gender,
                        facebook_complete: Boolean(true),
                        facebookimg: 'https://graph.facebook.com/' + dados.id +
                          '/picture?width=250&height=250'
                      };

                      update(form)
                        .then(function (resp) {
                          console.warn('me response', resp);

                          defer.resolve({
                            status: 1
                          });
                        });


                    });


                }

              },
              error: function (error) {
                alert('Sem conexão');
                defer.reject(error);

              }
            });

        }, function (resp) {
          console.log('Facebook Error', resp);
          defer.reject(resp);
        });

      return defer.promise;
    }

    function facebookLogin() {
      var defer = $q.defer();

      //facebook.logout();
      console.info('facebook login', device, facebook);

      facebook
        .getLoginStatus()
        .then(function (respStatus) {

          if (respStatus.status === 'connected') {
            loginFacebook2(respStatus)
              .then(function (deferStatus) {
                defer.resolve(deferStatus);
              });
          } else {

            facebook
              .login([
                'public_profile',
                'email'
              ])
              .then(function (response) {

                  console.warn('facebook login response', response);
                  if (response.status === undefined) {
                    defer.reject('reject');
                  }

                  //Pega o Status do Login
                  console.log('facebook status', response);
                  loginFacebook2(response)
                    .then(function (deferStatus) {
                      defer.resolve(deferStatus);
                    });;
                },
                function (response) {
                  //alert(JSON.stringify(response));
                  console.log('Facebook Error', response);
                  defer.reject(JSON.stringify(response));

                });

          }

        })


      return defer.promise;
    }


    function facebookProfile() {
      var defer = $q.defer();
      facebookLogin()
        .then(function (resp) {

          facebook
            .api('me', '')
            .then(function (response) {
              defer.resolve([
                resp,
                response
              ]);
            }, function (error) {
              console.log(error);
              defer.reject(error);
            });
        });
      return defer.promise;
    }


    function register(form) {
      var defer = $q.defer();

      var formData = form;
      formData.username = form.email;

      console.log(formData);
      new Parse
        .User(formData)
        .signUp(null, {
          success: function (resp) {
            var user = loadProfile(resp);
            console.log(resp, user);
            Loading.end();
            //startPush('user-', user.email);
            defer.resolve(user);
          },
          error: function (user, resp) {
            console.log(resp);
            if (resp.code === 125) {
              defer.reject('Please specify a valid email address');
            } else if (resp.code === 202) {
              defer.reject('The email address is already registered');
            } else {
              defer.reject(resp);
            }
          }
        });
      return defer.promise;
    }

    function forgot(email) {
      var defer = $q.defer();
      new Parse.User.requestPasswordReset(email, {
        success: function (resp) {
          defer.resolve(resp);
        },
        error: function (err) {
          if (err.code === 125) {
            defer.reject('Email address does not exist');
          } else {
            defer.reject('An unknown error has occurred, please try again');
          }
        }
      });
      return defer.promise;
    }

    function logout() {
      new Parse.User.logOut();
      delete $rootScope.user;
      //$window.location = '/#/intro';
      $state.go('intro', {
        clear: true
      });
      $ionicHistory.clearCache();
    }

    function update(form) {
      var defer = $q.defer();
      var currentUser = Parse.User.current();
      Loading.start();

      delete form.img;
      delete form.authData;
      delete form.follow;

      console.info('update user', form);

      angular.forEach(form, function (value, key) {
        currentUser.set(key, value);
      });

      if (cordova) {
        var cordovaDevice = {
          device: $cordovaDevice.getDevice(),
          cordova: $cordovaDevice.getCordova(),
          model: $cordovaDevice.getModel(),
          platform: $cordovaDevice.getPlatform(),
          uuid: $cordovaDevice.getUUID(),
          version: $cordovaDevice.getVersion()
        };

        currentUser.set('device', cordovaDevice.device);
        currentUser.set('deviceCordova', cordovaDevice.cordova);
        currentUser.set('deviceModel', cordovaDevice.model);
        currentUser.set('devicePlatform', cordovaDevice.platform);
        currentUser.set('deviceUuiid', cordovaDevice.uuid);
        currentUser.set('deviceVersion', cordovaDevice.version);
      }
      // Update Language
      //currentUser.set('language', $rootScope.lang.value || null);

      currentUser
        .save()
        .then(function (resp) {
          console.log('load user', user);
          var user = loadProfile(resp);
          Loading.end();
          defer.resolve(user);
        });


      return defer.promise;
    }

    function updateAvatar(photo) {
      var defer = $q.defer();

      Loading.start();

      if (photo !== '') {

        // create the parse file
        var imageFile = new Parse.File('mypic.jpg', {
          base64: photo
        });

        // save the parse file
        return imageFile
          .save()
          .then(function () {

            photo = null;

            // create object to hold caption and file reference
            var currentUser = Parse.User.current();

            // set object properties
            currentUser.set('img', imageFile);

            // save object to parse backend
            currentUser
              .save()
              .then(function (resp) {
                var user = loadProfile(resp);
                console.log(resp);
                Loading.end();
                defer.resolve(user);
              });


          }, function (error) {
            Loading.end();
            console.log(error);
            defer.reject(error);
          });
      }
      return defer.promise;
    }


    function facebookFriends() {
      var defer = $q.defer();

      facebook
        .api('me/friends')
        .then(function (success) {
          defer.resolve(success);
        }, function (error) {
          defer.reject(error);
        });

      return defer.promise;
    }

    function facebookAPI(api) {
      var defer = $q.defer();

      facebook
        .api(api)
        .then(function (success) {
          defer.resolve(success);
        }, function (error) {
          defer.reject(error);
        });

      return defer.promise;
    }

    function facebookInvite() {
      var defer = $q.defer();
      if (device) {
        facebook
          .showDialog({
            method: 'apprequests',
            message: 'Venha para o nosso clube!'
          })
          .then(function (resp) {
            defer.resolve(resp);
          });
      } else {
        facebook
          .ui({
            method: 'apprequests',
            message: 'Venha para o nosso clube!'
          })
          .then(function (resp) {
            defer.resolve(resp);
          });
      }
      return defer.promise;
    }


    function list() {
      var defer = $q.defer();

      new Parse
        .Query('User')
        .notEqualTo('user', Parse.User.current())
        .find()
        .then(function (resp) {
          var users = [];
          angular.forEach(resp, function (item) {
            var user = item.attributes;
            user.id = item.id;
            user = processImg(user);

            new Parse
              .Query('UserFollow')
              .equalTo('user', Parse.User.current())
              .equalTo('follow', item)
              .count()
              .then(function (follow) {
                user.follow = follow;

                console.log(user);
                users.push(user);
              });
          });
          defer.resolve(users);
        });

      return defer.promise;
    }

    function find(userId) {
      var defer = $q.defer();

      console.log('find', userId);
      new Parse
        .Query('User')
        .equalTo('objectId', userId)
        .first()
        .then(function (resp) {
          console.log(resp);
          defer.resolve(resp);
        });

      return defer.promise;
    }

    function profile(userId) {
      var defer = $q.defer();

      find(userId)
        .then(function (resp) {
          console.log(resp);
          var user = loadProfile(resp);

          new Parse
            .Query('Gallery')
            .equalTo('user', resp)
            .count()
            .then(function (gallery) {
              user.galleries = gallery;

              new Parse
                .Query('UserFollow')
                .equalTo('user', resp)
                .count()
                .then(function (foloow) {
                  user.follow = foloow;

                  new Parse
                    .Query('UserFollow')
                    .equalTo('follow', resp)
                    .count()
                    .then(function (follow2) {
                      user.follow2 = follow2;
                      defer.resolve(user);
                    });

                });
            });
        });

      return defer.promise;
    }

    function isFollow(userId) {
      var defer = $q.defer();

      console.log('isFollow start', userId);

      find(userId)
        .then(function (followUser) {
          new Parse
            .Query('UserFollow')
            .equalTo('user', Parse.User.current())
            .equalTo('follow', followUser)
            .count()
            .then(function (respFollow) {
              //console.log('isFollow', respFollow);
              defer.resolve(respFollow);
            });
        });

      return defer.promise;
    }


    function getFollowers(userId) {
      var defer = $q.defer();

      if (!userId) {
        userId = Parse.User.current().id;
      }

      find(userId)
        .then(function (user) {
          new Parse
            .Query('UserFollow')
            .equalTo('follow', user)
            .count()
            .then(function (qtdFollowers) {
              defer.resolve(qtdFollowers);
            }, function (err) {
              defer.reject(err);
            });
        });
      return defer.promise;
    }

    function getFollowing(userId) {
      var defer = $q.defer();

      if (!userId) {
        userId = Parse.User.current().id;
      }

      find(userId)
        .then(function (user) {
          new Parse
            .Query('UserFollow')
            .equalTo('user', user)
            .count()
            .then(function (qtdFollowing) {
              defer.resolve(qtdFollowing);
            }, function (err) {
              defer.reject(err);
            });
        });
      return defer.promise;
    }

    function follow(status, user) {
      var defer = $q.defer();
      var qtdFollow = Parse.User.current().qtdFollow ? parseInt(Parse.User.current().qtdFollow) : 0;


      find(user.id)
        .then(function (follow) {

          if (status) {
            // Follow User
            console.log('Follow User', follow);

            var Object = Parse.Object.extend('UserFollow');
            var item = new Object();

            item.set('user', Parse.User.current());
            item.set('follow', follow);
            item.save()
              .then(function (resp) {
                console.log('Follow User', resp);

                update({
                    qtdFollow: qtdFollow + 1
                  })
                  .then(function (userResp) {
                    console.log('Follow User Update', userResp);
                    defer.resolve(userResp);
                  });

              }, function (err) {
                defer.resolve(err);
              });
          } else {
            // Unfollow User
            console.log('Unfollow User', follow);

            new Parse
              .Query('UserFollow')
              .equalTo('user', Parse.User.current())
              .equalTo('follow', follow)
              .first()
              .then(function (item) {
                item
                  .destroy()
                  .then(function (resp) {

                    update({
                        qtdFollow: qtdFollow - 1
                      })
                      .then(function (userResp) {
                        console.log('Follow User Update', userResp);
                        defer.resolve(userResp);
                      });
                  }, function (err) {
                    defer.resolve(err);
                  });
              });
          }
        });

      return defer.promise;
    }

    function addFollows(users) {
      console.log('addFollows', users);
      var promises = [];
      angular.forEach(users, function (user) {
        promises.push(follow(true, user.id));
      });
      return $q.all(promises);
    }

    function getMail(email) {
      var defer = $q.defer();
      Loading.start();
      new Parse
        .Query('User')
        .equalTo('email', email)
        .first()
        .then(function (resp) {
          Loading.end();
          defer.resolve(resp);
        }, function (resp) {
          Loading.end();
          defer.reject(resp);
        });
      return defer.promise;
    }

    function loginFacebook(response) {
      var defer = $q.defer();

      var data = new Date(new Date().getTime() + response['authResponse']['expiresIn'] * 1000);

      Parse.FacebookUtils.logIn({
        id: response['authResponse']['userID'],
        access_token: response['authResponse']['accessToken'],
        expiration_date: data
      }, {
        success: function (response) {
          // Função caso tenha logado tanto no face quanto no Parse
          var user = loadProfile(response);
          console.log('User', user);
          defer.resolve(user);
        }
      });

      return defer.promise;
    }

    function facebookLink() {
      var defer = $q.defer();

      facebook
        .login(['email'])
        .then(function (response) {

            console.log('facebook login', response);
            //Pega o Status do Login

            var data = new Date(new Date().getTime() + response['authResponse']['expiresIn'] * 1000);

            var user = Parse.User.current();
            console.log(user, response, data);

            Parse.FacebookUtils.link(user, {
              id: response['authResponse']['userID'],
              access_token: response['authResponse']['accessToken'],
              expiration_date: data
            }, {
              success: function (user) {
                // Função caso tenha logado tanto no face quanto no Parse
                console.log('User', user);
                user.set('facebook', response['authResponse']['userID']);
                user.set('facebookimg', 'https://graph.facebook.com/' + response['authResponse']['userID'] +
                  '/picture?width=250&height=250');
                user.set('facebook_complete', Boolean(true));
                user.save()
                  .then(function (response) {
                    var user = loadProfile(response);
                    console.info('User Update', user);
                    defer.resolve(user);
                  });
              }
            });
          },
          function (response) {
            alert(JSON.stringify(response));

          });


      return defer.promise;
    }


  }
})();

(function () {
  'use strict';
  angular
    .module('app.user')
    .factory('UserForm', UserFormFactory);

  function UserFormFactory($translate) {

    return {
      login: login(),
      register: register(),
      profile: profile()
    };

    function login() {
      return [{
        type: 'input',
        key: 'email',
        templateOptions: {
          type: 'email',
          placeholder: $translate.instant('USER.FORM.EMAIL'),
          icon: 'icon-envelope',
          required: true,
          iconPlaceholder: true
        }
      }, {
        type: 'input',
        key: 'password',
        templateOptions: {
          type: 'password',
          placeholder: $translate.instant('USER.FORM.PASSWORD'),
          icon: 'icon-lock',
          required: true,
          iconPlaceholder: true
        }
      }];
    }

    function register() {
      return [{
        type: 'input',
        key: 'email',
        templateOptions: {
          type: 'email',
          placeholder: $translate.instant('USER.FORM.EMAIL'),
          icon: 'icon-envelope',
          required: true,
          iconPlaceholder: true
        }
      }, {
        type: 'input',
        key: 'password',
        templateOptions: {
          type: 'password',
          placeholder: $translate.instant('USER.FORM.PASSWORD'),
          icon: 'icon-lock',
          required: true,
          iconPlaceholder: true
        }
      }];
    }

    function profile() {
      return [{
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          placeholder: $translate.instant('USER.FORM.NAME'),
          icon: 'icon-user',
          required: true,
          iconPlaceholder: true
        }
      }, {
        key: 'status',
        type: 'input',
        templateOptions: {
          type: 'text',
          placeholder: $translate.instant('USER.FORM.STATUS'),
          icon: 'ion-quote',
          required: true,
          iconPlaceholder: true
        }
      }, {
        type: 'select',
        key: 'gender',
        templateOptions: {
          label: $translate.instant('USER.FORM.GENDER'),
          options: [{
            'label': $translate.instant('USER.FORM.MAN'),
            'id': 'male',
          }, {
            'label': $translate.instant('USER.FORM.WOMAN'),
            'id': 'female',
          }],
          valueProp: 'id',
          labelProp: 'label',
          icon: 'icon-list',
          iconPlaceholder: true
        }
      }];
    }

  }


})();

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name photogramComment
   *
   * @description
   * _Please update the description and restriction._
   *
   * @restrict A
   * */

  angular
    .module('app.photogram')
    .directive('photogramComment', photogramCommentDirective);

  function photogramCommentDirective($ionicModal, Loading, $ionicPopup, User, Notify, $timeout,
    AppConfig, Photogram, PhotogramForm) {

    var path = AppConfig.path;

    return {
      restrict: 'A',
      scope: {
        ngModel: '='
      },
      link: function (scope, elem) {
        scope.formFields = PhotogramForm.formComment;
        scope.submitComment = submitComment;
        scope.deleteComment = deleteComment;
        scope.editComment = editComment;
        scope.closeModal = closeModal;
        elem.bind('click', openModalComment);

        function init() {
          scope.currentUser = User.currentUser();
          scope.nocomments = false;
          scope.loading = false;
          scope.form = {
            galleryId: scope.ngModel.id,
            text: ''
          };
        }

        function openModalComment() {
          console.log(scope.ngModel);

          init();

          scope.comments = scope.ngModel.comments;
          $timeout(function () {
            if (scope.comments.length === 0) {
              scope.nocomments = true;
            }
          }, 500);


          $ionicModal.fromTemplateUrl(path + '/directives/comment/photogram.comment.directive.html', {
              scope: scope,
              focusFirstInput: true
            })
            .then(function (modal) {
              scope.modal = modal;
              scope.modal.show();

            });
        }

        function deleteComment(obj) {
          console.log(obj);
          Notify
            .confirm(('Delete comment'), ('You are sure?'))
            .then(function (resp) {
              console.log(resp);
              if (resp) {
                Photogram
                  .deleteComment(obj)
                  .then(function (resp) {
                    console.log(resp);
                    getComments();
                  });
              }
            });
        }

        function editComment(obj) {
          console.log(obj);
          // An elaborate, custom popup
          scope.data = angular.copy(obj);
          $ionicPopup
            .show({
              template: '<input type="text" ng-model="data.text">',
              title: ('Edit comment'),
              //subTitle: 'Please use normal things',
              scope: scope,
              buttons: [{
                text: ('Cancel')
              }, {
                text: '<b>OK</b>',
                type: 'button-positive',
                onTap: function (e) {
                  console.log(scope.data);
                  if (!scope.data.text) {
                    //don't allow the user to close unless he enters wifi password
                    e.preventDefault();
                  } else {
                    return scope.data;
                  }
                }
              }]
            })
            .then(function (resp) {
              console.log(resp);
              if (resp) {
                Photogram
                  .updateComment(resp)
                  .then(function (resp) {
                    console.log(resp);
                    getComments();
                  });
              }
            });
        }

        function getComments() {
          scope.loading = true;
          Photogram
            .getComments(scope.ngModel.id)
            .then(function (resp) {
              scope.comments = resp;
              scope.ngModel.comments = resp;
              scope.loading = false;
            });
        }

        function submitComment(rForm, form) {
          if (rForm.$valid) {
            var dataForm = angular.copy(form);
            Loading.start();
            Photogram
              .addComment(dataForm)
              .then(function (resp) {
                console.log(resp);
                getComments();
                Loading.end();
                scope.closeModal();
              });
          }
        }

        function closeModal() {
          scope.modal.hide();
          scope.modal.remove();
        }
      }
    }
  }

})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .directive('photogramFollow', photogramFollow);

  function photogramFollow($ionicModal, AppConfig, Photogram) {

    var path = AppConfig.path;

    return {
      restrict: 'A',
      scope: {
        user: '='
      },
      link: function (scope, elem, attr) {
        elem.bind('click', openModal);
        scope.closeModal = closeModal;

        function openModal() {
          $ionicModal.fromTemplateUrl(path + '/directives/follow/photogram.follow.modal.html', {
            scope: scope
          }).then(function (modal) {
            scope.modalFollow = modal;
            console.log('Open modal follow', scope.user);

            Photogram
              .getFollow(scope.user)
              .then(function (resp) {
                console.log(resp);
                scope.data = resp;
                scope.modalFollow.show();
              });

          });
        }

        function closeModal() {
          scope.modalFollow.hide();
          scope.modalFollow.remove();
        }
      }
    }
  }


})();

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name heart
   *
   * @description
   * _Please update the description and restriction._
   *
   * @restrict A
   * */

  angular
    .module('app.photogram')
    .directive('heart', heartDirective);

  function heartDirective() {
    return {
      restrict: 'A',
      scope: {
        item: '='
      },
      link: heartLink
    };

    function heartLink(scope, elem, attr) {
      elem.bind('click', function () {
        console.log(scope.item);
        elem.addClass('happy');
      });
    }
  }

})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .directive('photogramLike', photogramLike)
    .directive('photogramLikeModal', photogramLikeModal);


  function photogramLike(Photogram) {
    return {
      restrict: 'A',
      scope: {
        ngModel: '='
      },
      link: function (scope, elem, attr) {
        elem.bind('click', likePhotogram);

        function likePhotogram() {

          console.log('photogram', scope.ngModel);
          var photogram = scope.ngModel.item;
          photogram.likeProgress = true;
          photogram.liked = !photogram.liked;
          Photogram
            .likeGallery(scope.ngModel.id)
            .then(function (resp) {
              photogram.qtdLike = resp.likes;
              delete photogram.likeProgress;
              console.log(photogram, resp);
            });
          scope.$apply();
        }
      }
    };
  }

  function photogramLikeModal($ionicModal, AppConfig, Photogram) {

    var path = AppConfig.path;

    return {
      restrict: 'A',
      scope: {
        photogram: '='
      },
      template: '',
      link: function (scope, elem, attr) {
        scope.formFields = Photogram.formComment;
        scope.submitComment = submitComment;
        scope.closeModal = closeModal;
        elem.bind('click', openModal);

        function openModal() {
          console.log(scope.photogram);

          $ionicModal.fromTemplateUrl(path + '/directives/like/photogram.like.directive.html', {
            scope: scope,
            animation: 'slide-in-up'
          }).then(function (modal) {
            scope.modal = modal;
          });

        }

        function submitComment(rForm, form) {
          if (rForm.$valid) {
            var dataForm = angular.copy(form);
            Photogram
              .addComment(dataForm)
              .then(function (resp) {
                console.log(resp);
                scope.closeModal();
              });
          }
        }

        function closeModal() {
          scope.modal.hide();
          scope.modal.remove();
        }

      }
    }
  }


})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .directive('photogramPhotoGrid', photogramPhotoGrid);


  function photogramPhotoGrid(AppConfig) {

    var path = AppConfig.path;

    return {
      restrict: 'E',
      scope: {
        data: '=photogram',
        profile: '=',
        loading: '='
      },
      templateUrl: path + '/directives/photogrid/photogram.photos.grid.html'
    };

  }


})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .directive('photogramPhotoList', photogramPhotoList);

  function photogramPhotoList(AppConfig) {
    var path = AppConfig.path;

    return {
      restrict: 'E',
      scope: {
        data: '=photogram',
        profile: '=',
        loading: '='
      },
      templateUrl: path + '/directives/photolist/view/photo.list.html',
      controller: photogramPhotoListCtrl,
      controllerAs: 'vm'
    };
  }

  function photogramPhotoListCtrl(AppConfig, Photogram, $scope, $ionicPopup, PhotogramFeedbackForm, PhotogramFeedback,
    $ionicActionSheet, $ionicModal) {
    var vm = this;
    var path = AppConfig.path;
    var user = Parse.User.current();
    var message = {
      title: ('Join me from ') + AppConfig.app.name + '!',
      text: ("I'm at ") + AppConfig.app.name + '! ' + (
        'Install the application and follow me!'),
      image: '',
      link: AppConfig.app.url
    };

    vm.action = action;
    vm.like = likePhoto;
    vm.gallery = {
      src: ''
    };

    vm.pallete = [];
    vm.getColors = getColors;

    function getColors(elemId) {
      var a = document.getElementById(elemId);
      if (a) {
        var c = new ColorThief().getColor(a);
        var p = new ColorThief().getPalette(a, 5);

        console.log(c, p);
        $scope.palette = p;
      } else {
        alert("Take a picture first!");
      }
    }

    function likePhoto(gallery) {
      //gallery.item.likeProgress = true;
      gallery.item.liked = !gallery.item.liked;
      Photogram
        .likeGallery(gallery.id)
        .then(function (resp) {
          gallery.item.qtdLike = resp.likes;
          //delete gallery.item.likeProgress;
        });
    }

    function action(gallery) {

      var buttons = [{
        text: '<i class="icon ion-share"></i>' + ('Share')
      }, {
        text: '<i class="icon ion-alert-circled"></i>' + ('Report')
      }];

      var user = Parse.User.current();

      if (user.id === gallery.user.id) {
        var buttonDelete = {
          text: '<i class="icon ion-trash-b"></i>' + ('Delete your photo')
        };
        buttons.push(buttonDelete);
      }
      message.image = gallery.src;
      message.text = gallery.item.title;

      var actionSheet = {
        buttons: buttons,
        titleText: ('Photo'),
        cancelText: ('Cancel'),
        buttonClicked: actionButtons
      };


      function actionButtons(index) {
        switch (index) {
        case 0:
          share(message);
          break;
        case 1:
          openModal(gallery);
          break;
        case 2:

          $ionicPopup
            .confirm({
              title: ('Delete photo'),
              template: ('Are you sure?')
            })
            .then(function (res) {
              if (res) {
                Photogram
                  .deletePhoto(gallery.id)
                  .then(msgDeletePhoto);
              }
            });


        }
        return true;
      }

      function msgDeletePhoto() {
        console.log('Photo deleted');
        $scope.$emit('PhotogramHome:reload');
      }

      // Show the action sheet
      $ionicActionSheet.show(actionSheet);

    }


    function openModal(gallery) {
      $scope.submitFeedback = submitFeedback;
      $scope.closeModal = closeModal;
      $scope.form = {
        photogramId: gallery.id,
        user: user
      };

      $scope.formFields = PhotogramFeedbackForm.form;

      $ionicModal
        .fromTemplateUrl(path + '/feedback/photogram.photo.feedback.modal.html', {
          scope: $scope,
          focusFirstInput: true
        })
        .then(function (modal) {
          vm.modal = modal;
          vm.modal.show();
        });
    }


    function submitFeedback() {
      var dataForm = angular.copy($scope.form);
      PhotogramFeedback
        .submit(dataForm)
        .then(function (resp) {
          console.log(resp);
          closeModal();
        });
    }


    function closeModal() {
      vm.modal.hide();
      vm.modal.remove();
      delete vm.modal;
    }


    function success() {
      //Notify.alert({
      //    title: ('Thanks'),
      //    text: ('Thank you for sharing!!')
      //});
    }

    function error(err) {
      console.error(err);
    }

    function share(post) {
      console.log('Social Share', post);
      var message = ("I'm at ") + AppConfig.app.name + '! ' + (
        'Install the application and follow me!') + ' ' + AppConfig.app.url;
      window
        .plugins
        .socialsharing
        .share(post.text + ', ' + message, post.text, post.image, null);
    }

  }


})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .directive('ionSearch', ionSearch);

  function ionSearch($timeout) {

    return {
      restrict: 'E',
      replace: true,
      scope: {
        getData: '&source',
        model: '=?',
        search: '=?filter'
      },
      template: '<div class="ion-search item-input-wrapper"> <input type="search" placeholder="{{placeholder}}" ng-model="search.value"><i ng-if="search.value.length > 0" ng-click="clearSearch()" class="icon ion-close"></i></div>',
      link: function (scope, element, attrs) {
        attrs.minLength = attrs.minLength || 0;
        scope.placeholder = attrs.placeholder || '';
        scope.clearSearch = clearSearch;
        scope.search = {
          value: ''
        };

        if (attrs.class) {
          element.addClass(attrs.class);
        }

        if (attrs.source) {
          scope.$watch('search.value', watchSearch);
        }

        function watchSearch(newValue) {
          if (newValue.length > attrs.minLength) {
            $timeout(function () {
              scope
                .getData({
                  str: newValue
                })
                .then(function (results) {
                  scope.model = results;
                });
            }, 1000);
          } else {
            scope.model = [];
          }
        }

        function clearSearch() {
          scope.search.value = '';
        }
      }

    };
  }


})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .directive('photogramSettings', photogramSettings);

  function photogramSettings($ionicModal, $translate, AppConfig, $cordovaInAppBrowser, $rootScope, PhotogramShare,
    User,
    UserForm, $state) {

    var path = AppConfig.path;

    return {
      restrict: 'A',
      scope: {
        photogram: '@'
      },
      template: '',
      link: function (scope, elem) {

        elem.bind('click', openModal);
        scope.closeModal = closeModal;
        scope.link = link;
        scope.openLink = openLink;
        scope.changeLanguage = changeLanguage;
        scope.share = PhotogramShare.share;

        function init() {
          scope.form = User.currentUser();
          scope.formFields = UserForm.profile;
          scope.languages = AppConfig.locales;
          scope.language = $translate.use();
        }

        function openModal() {

          init();
          $ionicModal.fromTemplateUrl(path + '/directives/settings/photogram.settings.modal.html', {
            scope: scope
          }).then(function (modal) {
            scope.modal = modal;
            scope.modal.show();
          });
        }

        function link(sref) {
          $state.go(sref);
          scope.closeModal();
        }

        function openLink(url) {
          var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'yes'
          };

          $cordovaInAppBrowser.open(url, '_blank', options);
        }

        function changeLanguage(language) {
          $translate.use(language);
          moment.locale(language);
          scope.form.language = language;
          submitUpdateProfile(scope.form);
        }


        function submitUpdateProfile(form) {
          var dataForm = angular.copy(form);
          User
            .update(dataForm)
            .then(function (resp) {
              console.log(resp);
              init();
              scope.closeModal();
            });
        }

        function closeModal() {
          scope.modal.hide();
          scope.modal.remove();
        }

      }
    };
  }


})();

(function () {
  'use strict';
  angular
    .module('app.account')
    .config(configRoutes);

  var path = 'app/module/photogram/module/account';

  function configRoutes($stateProvider) {
    $stateProvider
      .state('userlist', {
        url: '/follow',
        controller: 'PhotogramUserListCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/module/user/module/friend/view/user.list.html'
      })

    .state('photogram.account', {
      url: '/account',
      views: {
        tabProfile: {
          controller: 'PhotogramProfileCtrl',
          controllerAs: 'vm',
          templateUrl: 'app/module/user/module/profile/view/profile.html'
        }
      }
    });
  }

})();

(function () {
  'use strict';
  angular
    .module('app.activity')
    .config(configRoutes);

  var path = 'app/module/photogram/module/activity';

  function configRoutes($stateProvider, $translatePartialLoaderProvider) {

    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('photogram.activity', {
        url: '/activity',
        views: {
          tabActivity: {
            controller: 'PhotogramActivityCtrl',
            controllerAs: 'vm',
            templateUrl: path + '/view/photogram.activity.html'
          }
        }
      })

    ;
  }

})();

(function () {
  'use strict';
  angular
    .module('app.direct')
    .config(configRoutes);

  var path = 'app/module/photogram/module/direct';

  function configRoutes($stateProvider) {


    $stateProvider
    // Direct
      .state('photogram.direct', {
      url: '/direct',
      views: {
        tabHome: {
          controller: 'DirectHomeCtrl',
          controllerAs: 'vm',
          templateUrl: path + '/view/direct.home.html'
        }
      }
    })

    .state('photogram.message', {
      url: '/message/:channelId',
      views: {
        tabHome: {
          controller: 'DirectMessagesCtrl',
          controllerAs: 'vm',
          templateUrl: path + '/view/direct.messages.html'
        }
      }
    });
  }

})();

(function () {
  'use strict';
  angular
    .module('app.home')
    .config(configRoutes);

  var path = 'app/module/photogram/module/home';

  function configRoutes($stateProvider) {
    $stateProvider
      .state('photogram.home', {
        url: '/home',
        views: {
          tabHome: {
            controller: 'PhotogramHomeCtrl',
            controllerAs: 'vm',
            templateUrl: path + '/view/home.html'
          }
        }
      });

  }

})();

(function () {
  'use strict';
  angular
    .module('app.search')
    .config(configRoutes);

  var path = 'app/module/photogram/module/search';

  function configRoutes($stateProvider, $translatePartialLoaderProvider) {

    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('photogram.search', {
        url: '/search',
        abstract: true,
        views: {
          tabSearch: {
            templateUrl: path + '/view/photogram.search.tabs.html'
          }
        }
      })

    .state('photogram.search.grid', {
        url: '/grid',
        views: {
          tabGrid: {
            controller: 'PhotogramSearchGridCtrl',
            controllerAs: 'vm',
            templateUrl: path + '/view/photogram.search.grid.html'
          }
        }
      })
      .state('photogram.search.map', {
        url: '/map',
        views: {
          tabMap: {
            controller: 'PhotogramSearchMapCtrl',
            controllerAs: 'vm',
            templateUrl: path + '/view/photogram.search.map.html'
          }
        }
      })

    ;
  }

})();

(function () {
  'use strict';
  var path = 'app/module/user/module/avatar';

  angular
    .module('user.avatar')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('useravatar', {
        url: '/avatar',
        controller: 'UserAvatarCtrl',
        controllerAs: 'vm',
        templateUrl: path + '/view/user.avatar.html'
      });

  }

})();

(function () {
  'use strict';
  var path = 'app/module/user/module/friend';

  angular
    .module('user.merge')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider

    ;

  }

})();

(function () {
  'use strict';
  var path = 'app/module/user/module/logout';

  angular
    .module('user.logout')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {

    $stateProvider
      .state('logout', {
        url: '/logout',
        template: '<ion-view view-title="Logout" cache-view="false"><ion-content></ion-content></ion-view>',
        controller: 'LogoutCtrl',
        controllerAs: 'vm'
      });

  }

})();

(function () {
  'use strict';
  var path = 'app/module/user/module/merge';

  angular
    .module('user.merge')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('usermerge', {
        url: '/merge',
        controller: 'UserMergeCtrl',
        controllerAs: 'vm',
        templateUrl: path + '/view/user.merge.html'
      });

  }

})();

(function () {
  'use strict';
  var path = 'app/module/user/module/recovery';

  angular
    .module('user.recovery')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider

    ;

  }

})();

(function () {
  'use strict';
  var path = 'app/module/user/module/signin';

  angular
    .module('user.merge')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('user.signin', {
        url: '/signin',
        views: {
          tabLogin: {
            controller: 'UserSigninCtrl',
            controllerAs: 'vm',
            templateUrl: path + '/view/user.signin.html'
          }
        }
      });

  }

})();

(function () {
  'use strict';
  var path = 'app/module/user/module/signup';

  angular
    .module('user.merge')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('user.signup', {
        url: '/signup',
        views: {
          tabLogin: {
            controller: 'UserSignupCtrl',
            controllerAs: 'vm',
            templateUrl: path + '/view/user.signup.html'
          }
        }
      });

  }

})();

(function () {
  'use strict';
  var path = 'app/module/user/module/term';

  angular
    .module('user.merge')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider

    ;

  }

})();

(function () {
  'use strict';
  angular
    .module('app.activity')
    .controller('PhotogramActivityCtrl', PhotogramActivityCtrl);

  function PhotogramActivityCtrl($scope, Photogram, PhotogramShare) {
    var vm = this;
    vm.loading = true;

    $scope.loadMore = loadMore;
    vm.openShare = PhotogramShare.open;
    vm.load = load;
    init();
    vm.load();

    function init() {
      vm.page = 0;
      vm.data = [];
      vm.empty = false;
      vm.loadMore = false;
    }

    function loadMore(force) {
      console.log('Load More');
      vm.load(force);
    }

    function load(force) {

      if (force) {
        init();
      }

      Photogram
        .listActivity(vm.page)
        .then(function (resp) {

          resp.map(function (value) {
            vm.data.push(value);
          });

          if (resp.length) {
            vm.loading = false;
            vm.more = true;
            vm.page++;
          } else {
            vm.empty = true;
            vm.loading = false;
            vm.more = false;
          }
        })
        .then(function () {
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');

        })
        .catch(function (status) {
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          if (!status) {
            vm.loading = false;
            vm.page++;
          } else {
            vm.empty = true;
            vm.loading = false;
          }
          vm.more = false;
        });
    }


  }

})();

(function () {
  'use strict';
  angular
    .module('app.activity')
    .controller('PhotogramNotifyCtrl', PhotogramNotifyCtrl);

  function PhotogramNotifyCtrl($scope, $rootScope, $ionicPlatform, $cordovaLocalNotification) {

    $ionicPlatform.ready(function () {

      // ========== Scheduling

      $scope.scheduleSingleNotification = scheduleSingleNotification;
      $scope.scheduleMultipleNotifications = scheduleMultipleNotifications;
      $scope.scheduleDelayedNotification = scheduleDelayedNotification;
      $scope.scheduleEveryMinuteNotification = scheduleEveryMinuteNotification;

      // =========/ Scheduling

      // ========== Update

      $scope.updateSingleNotification = updateSingleNotification;

      $scope.updateMultipleNotifications = updateMultipleNotifications;

      // =========/ Update

      // ========== Cancelation

      $scope.cancelSingleNotification = cancelSingleNotification;

      $scope.cancelMultipleNotifications = cancelMultipleNotifications;

      $scope.cancelAllNotifications = cancelAllNotifications;

      // =========/ Cancelation

      // ========== Events

      $rootScope.$on('$cordovaLocalNotification:schedule',
        function (event, notification, state) {
          // ...
        });

      $rootScope.$on('$cordovaLocalNotification:trigger',
        function (event, notification, state) {
          // ...
        });

      $rootScope.$on('$cordovaLocalNotification:update',
        function (event, notification, state) {
          // ...
        });

      $rootScope.$on('$cordovaLocalNotification:clear',
        function (event, notification, state) {
          // ...
        });

      $rootScope.$on('$cordovaLocalNotification:clearall',
        function (event, state) {
          // ...
        });

      $rootScope.$on('$cordovaLocalNotification:cancel',
        function (event, notification, state) {
          // ...
        });

      $rootScope.$on('$cordovaLocalNotification:cancelall',
        function (event, state) {
          // ...
        });

      $rootScope.$on('$cordovaLocalNotification:click',
        function (event, notification, state) {
          // ...
        });

      // =========/ Events
      function scheduleSingleNotification() {
        console.log('scheduleSingleNotification');
        $cordovaLocalNotification.schedule({
          id: 1,
          title: 'Title here',
          text: 'Text here',
          data: {
            customProperty: 'custom value'
          }
        }).then(function (result) {
          // ...
          console.log(result);
        });
      }

      function scheduleMultipleNotifications() {
        $cordovaLocalNotification.schedule([{
          id: 1,
          title: 'Title 1 here',
          text: 'Text 1 here',
          data: {
            customProperty: 'custom 1 value'
          }
        }, {
          id: 2,
          title: 'Title 2 here',
          text: 'Text 2 here',
          data: {
            customProperty: 'custom 2 value'
          }
        }, {
          id: 3,
          title: 'Title 3 here',
          text: 'Text 3 here',
          data: {
            customProperty: 'custom 3 value'
          }
        }]).then(function (result) {
          // ...
          console.log(result);
        });
      }

      function scheduleDelayedNotification() {
        var now = new Date().getTime();
        var _10SecondsFromNow = new Date(now + 10 * 1000);

        $cordovaLocalNotification.schedule({
          id: 1,
          title: 'Title here',
          text: 'Text here',
          at: _10SecondsFromNow
        }).then(function (result) {
          // ...
          console.log(result);
        });
      }

      function scheduleEveryMinuteNotification() {
        $cordovaLocalNotification.schedule({
          id: 1,
          title: 'Title here',
          text: 'Text here',
          every: 'minute'
        }).then(function (result) {
          // ...
          console.log(result);
        });
      }

      function updateSingleNotification() {
        $cordovaLocalNotification.update({
          id: 1,
          title: 'Title - UPDATED',
          text: 'Text - UPDATED'
        }).then(function (result) {
          // ...
          console.log(result);
        });
      }

      function updateMultipleNotifications() {
        $cordovaLocalNotification
          .update([{
            id: 1,
            title: 'Title 1 - UPDATED',
            text: 'Text 1 - UPDATED'
          }, {
            id: 2,
            title: 'Title 2 - UPDATED',
            text: 'Text 2 - UPDATED'
          }, {
            id: 3,
            title: 'Title 3 - UPDATED',
            text: 'Text 3 - UPDATED'
          }]).then(function (result) {
            // ...
            console.log(result);
          });
      }

      function cancelSingleNotification() {
        $cordovaLocalNotification
          .cancel(1)
          .then(function (result) {
            // ...
            console.log(result);
          });
      }

      function cancelMultipleNotifications() {
        $cordovaLocalNotification.cancel([
          1,
          2
        ]).then(function (result) {
          // ...
          console.log(result);
        });
      }

      function cancelAllNotifications() {
        $cordovaLocalNotification.cancelAll().then(function (result) {
          // ...
          console.log(result);
        });
      }

    });

  }

})();

(function () {
  'use strict';
  /*
   *
   https://github.com/avivais/phonegap-parse-plugin
   cordova plugin add https://github.com/FrostyElk/phonegap-parse-plugin --variable APP_ID=PARSE_APP_ID --variable CLIENT_KEY=PARSE_CLIENT_KEY
   cordova plugin add https://github.com/FrostyElk/cordova-parse-plugin.git --variable APP_ID=7lWT9DJntSvMKTetpoT0wL79pTG9dk4ob5pztktX --variable CLIENT_KEY=CIcH8fg5AogNNrEQ8IbmA5nujNjIvVNmuW0PyvCy

   Phonegap Parse.com Plugin
   Phonegap 3.0.0 plugin for Parse.com push service

   Using Parse.com's REST API for push requires the installation id, which isn't available in JS

   This plugin exposes the four native Android API push services to JS:

   getInstallationId
   getSubscriptions
   subscribe
   unsubscribe

   * */
  angular
    .module('app.activity')
    .factory('ParsePush', ParsePush);

  function ParsePush($q, AppConfig) {

    return {
      start: start,
      getInstall: getInstall,
      getSubscribe: getSubscriptions,
      postSubscribe: postSubscribe,
      unSubscribe: postUnSubscribe
    };

    function init() {
      var defer = $q.defer();
      var appId = AppConfig.parse.applicationId,
        clientKey = AppConfig.parse.clientKey;

      console.log('Init', appId, clientKey);

      parsePlugin.initialize(appId, clientKey, function () {
        console.log('Parse Push initialize');
        on();
        defer.resolve();
      }, function (e) {
        console.error('Parse Push Initialize error', e);
        defer.reject(e);
      });

      return defer.promise;
    }

    function on() {
      parsePlugin.on('receivePN', function (pn) {
        console.log('yo i got this push notification:' + JSON.stringify(pn));
      });

      //customEvt can be any string of your choosing, i.e., chat, system, upvote, etc.
      parsePlugin.on('receivePN:chat', function (pn) {
        console.log('yo i can also use custom event to keep things like chat modularized');
      });

      parsePlugin.on('openPN', function (pn) {
        //you can do things like navigating to a different view here
        console.log('Yo, I get this when the user clicks open a notification from the tray');
      });
    }


    function _start(channel) {
      var cordova = window.cordova;

      console.log('Parse Start', cordova, channel);
      if (cordova) {
        console.log('Push Start');
        init()
          .then(function () {
            console.log('Plugin Load');
            parsePlugin
              .subscribe(channel, function () {
                console.log('Enter channel', channel);
                parsePlugin
                  .getInstallationId(function (id) {
                    console.log('Success Push', channel, id);
                    /**
                                         * Now you can construct an object and save it to your own services, or Parse, and corrilate users to parse installations
                                         *
                                         var install_data = {
                                          installation_id: id,
                                          channels: ['SampleChannel']
                                       }
                                         *
                                         */
                    on();

                  }, function (e) {
                    alert('error');
                  });

              }, function (e) {
                alert('error');
              });

          }, function (e) {
            alert('error');
          });
      }
    }

    function start(channel) {
      var cordova = window.cordova;

      console.log('Parse Start', cordova, channel);
      if (cordova) {

        console.log('Plugin Load');
        init()
          .then(function () {

            console.log('Parse Ente Chanell', channel);
            parsePlugin
              .subscribe(channel, function () {
                console.log('Enter channel', channel);
                parsePlugin
                  .getInstallationId(function (id) {
                    console.log('Success Push', channel, id);
                    /**
                                         * Now you can construct an object and save it to your own services, or Parse, and corrilate users to parse installations
                                         *
                                         var install_data = {
                        installation_id: id,
                        channels: ['SampleChannel']
                     }
                                         *
                                         */
                    on();

                  }, function (e) {
                    alert('error');
                  });

              }, function (e) {
                alert('error');
              });
          })


      }
    }

    function getInstall() {
      var defer = $q.defer();
      console.log('getInstall');
      parsePlugin
        .getInstallationId(function (id) {
          console.log('getInstall', id);
          defer.resolve(id);
        }, function (e) {
          console.error('getInstall', e);
          defer.reject(e);
        });
      return defer.promise;
    }

    function getSubscriptions() {
      var defer = $q.defer();
      parsePlugin.getSubscriptions(function (subscriptions) {
        alert(subscriptions);
        defer.resolve(subscriptions);
      }, function (e) {
        alert('error');
        defer.reject(e);
      });
      return defer.promise;
    }

    function postSubscribe(channel) {
      var defer = $q.defer();
      console.log('postSubscribe', channel);
      parsePlugin
        .subscribe(channel, function (resp) {
          console.log('postSubscribe', channel, resp);
          defer.resolve(true);
        }, function (e) {
          console.log('postSubscribe', channel, e);
          defer.reject(e);
        });
      return defer.promise;
    }

    function postUnSubscribe(channel) {
      var defer = $q.defer();
      console.log('postUnSubscribe', channel);
      parsePlugin
        .unsubscribe(channel, function (msg) {
          console.log('postUnSubscribe', channel, msg);
          defer.resolve(msg);
        }, function (e) {
          console.log('postUnSubscribe', channel, e);
          alert('error');
          defer.reject(e);
        });
      return defer.promise;
    }

  }
})();

(function () {
  'use strict';

  angular
    .module('app.photogram')
    .controller('DirectHomeCtrl', DirectHomeCtrl);

  /* @ngInject */
  function DirectHomeCtrl(Direct) {
    var vm = this;
    vm.data = [];

    Direct
      .chats()
      .then(function (resp) {
        console.log(resp);
        vm.data = resp;
      })
  }
})();

(function () {
  'use strict';

  angular
    .module('app.photogram')
    .controller('DirectMessagesCtrl', DirectMessagesCtrl);


  function DirectMessagesCtrl($scope, Direct, User, $state) {
    var vm = this;
    var roomId = $state.params.channelId;
    vm.user = User.currentUser();
    vm.sendMessage = sendMessage;
    vm.doRefresh = loadMessages;

    function loadMessages() {
      vm.loading = true;
      vm.data = [];
      Direct
        .messages(roomId)
        .then(function (resp) {
          vm.data = resp;
          vm.loading = false;
          if (vm.model) {
            vm.model.text = '';
          }
          $scope.$broadcast('scroll.refreshComplete');
        });
    }

    loadMessages();


    function sendMessage(form, model) {
      var data = angular.copy(model);
      console.log(data);
      if (form.$valid && data.text) {
        var message = {
          body: data.text
        };
        Direct
          .sendMessage(message, roomId)
          .then(function () {
            loadMessages();
          });
      }


    }

  }
})();

(function () {
  'use strict';

  var _direct = 'DirectMessages';
  var _channel = 'Direct';

  angular
    .module('app.photogram')

  // fitlers
  .filter('nl2br', ['$filter',
    function ($filter) {
      return function (data) {
        if (!data) return data;
        return data.replace(/\n\r?/g, '<br />');
      };
    }
  ])

  // directives
  .directive('autolinker', ['$timeout',
      function ($timeout) {
        return {
          restrict: 'A',
          link: function (scope, element, attrs) {
            $timeout(function () {
              var eleHtml = element.html();

              if (eleHtml === '') {
                return false;
              }

              var text = Autolinker.link(eleHtml, {
                className: 'autolinker',
                newWindow: false
              });

              element.html(text);

              var autolinks = element[0].getElementsByClassName('autolinker');

              for (var i = 0; i < autolinks.length; i++) {
                angular.element(autolinks[i]).bind('click', function (e) {
                  var href = e.target.href;
                  console.log('autolinkClick, href: ' + href);

                  if (href) {
                    //window.open(href, '_system');
                    window.open(href, '_blank');
                  }

                  e.preventDefault();
                  return false;
                });
              }
            }, 0);
          }
        }
      }
    ])
    .factory('Direct', Direct);

  function Direct($q, Parse) {
    return {
      from: from,
      to: to,
      chats: chats,
      messages: messages,
      sendMessage: sendMessage
    };

    function getDirect(directId) {
      var defer = $q.defer();
      new Parse
        .Query('Direct')
        .include('from')
        .equalTo('objectId', directId)
        .first()
        .then(defer.resolve);

      return defer.promise;
    }

    function addMessage(data) {
      var defer = $q.defer();
      var DirectMessages = Parse.Object.extend('DirectMessages');
      var message = new DirectMessages();
      angular.forEach(data, function (value, key) {
        message.set(key, value);
      });
      message.save(null, defer.resolve, defer.reject);

      return defer.promise;
    }

    function sendMessage(message, roomId) {
      var defer = $q.defer();

      getDirect(roomId)
        .then(function (direct) {
          console.log(message);
          message.room = direct;
          message.user = Parse.User.current();
          addMessage(message)
            .then(function (message) {
              direct.relation('messages').add(message);
              direct.save()
                .then(defer.resolve);
            })
        })
      defer.resolve(message);
      return defer.promise;

    }

    function messages(channelId, page) {
      var defer = $q.defer();

      getDirect(channelId)
        .then(function (direct) {
          var data = direct.attributes;
          var user = Parse.User.current();
          data.user = direct.attributes.from.attributes;
          data.messages = [];

          new Parse
            .Query('DirectMessages')
            .equalTo('room', direct)
            .include('user')
            .limit(20)
            .skip(page)
            .find()
            .then(function (resp) {
              resp.map(function (item) {
                var obj = {
                  body: item.attributes.body,
                  date: item.createdAt,
                  user: item.attributes.user.attributes
                };
                obj.user.id = item.attributes.user.id;
                console.log(item, obj);

                data.messages.push(obj);
              });
              defer.resolve(data);
            });
        })

      return defer.promise;
    }

    function chats() {
      var defer = $q.defer();

      var promises = [chatsType(null, 'from'), chatsType(null, 'to')];
      $q.all(promises)
        .then(function (resp) {
          var data = [];
          console.log(resp);
          resp[0].map(function (item) {
            data.push(item);
          });
          resp[1].map(function (item) {
            data.push(item);
          });
          defer.resolve(data);
        })

      return defer.promise;
    }

    function chatsType(user, type) {
      var defer = $q.defer();
      new Parse
        .Query('Direct')
        .equalTo(type, user || Parse.User.current())
        .include('from')
        .find()
        .then(function (resp) {
          var data = [];
          resp.map(function (item) {
            var obj = item.attributes;
            obj.user = item.attributes.from.attributes
            obj.id = item.id;

            data.push(obj);
          });
          defer.resolve(data);
        });

      return defer.promise;
    }

    function from(user) {
      var defer = $q.defer();
      new Parse
        .Query(_direct)
        .equalTo('from', user || Parse.User.current())
        .include('from')
        .find()
        .then(function (resp) {
          var data = [];
          resp.map(function (item) {
            var obj = {
              msg: item.attributes.body,
              user: item.attributes.from.attributes
            };

            obj.user.id = item.attributes.from.id;

            data.push(obj);
          });
          defer.resolve(data);
        });

      return defer.promise;
    }

    function to(user) {
      var defer = $q.defer();
      new Parse
        .Query(_direct)
        .equalTo('to', user || Parse.User.current())
        .include('from')
        .find()
        .then(function (resp) {
          var data = [];
          resp.map(function (item) {
            var obj = {
              msg: item.attributes.body,
              user: item.attributes.from.attributes
            };

            obj.user.id = item.attributes.from.id;

            data.push(obj);
          });
          defer.resolve(data);
        });

      return defer.promise;
    }
  }
})();

(function () {

  angular
    .module('app.photogram')
    .factory('PhotogramFeedbackForm', PhotogramFeedbackForm)
    .factory('PhotogramFeedback', PhotogramFeedback);

  function PhotogramFeedback($q, Photogram, Notify) {

    function submit(form) {
      var defer = $q.defer();

      console.log(form);

      Photogram
        .find(form.PhotogramId)
        .then(function (Photogram) {
          console.log(Photogram);
          var Object = Parse.Object.extend('PhotogramFeedback');
          var item = new Object();

          delete form.PhotogramId;

          angular.forEach(form, function (value, key) {
            item.set(key, value);
          });

          item.set('user', Parse.User.current());
          item.set('Gallery', Photogram);

          item
            .save(null)
            .then(function (resp) {
              Notify.alert({
                title: ('Thanks'),
                text: ('Thanks for your Feedback')
              });
              defer.resolve(resp);
            });
        });


      return defer.promise;
    }

    return {
      submit: submit
    };
  }

  function PhotogramFeedbackForm($translate) {

    var form = [{
      key: 'title',
      type: 'input',
      templateOptions: {
        type: 'text',
        placeholder: $translate.instant('FEEDBACK.TITLE'),
        required: true
      }
    }, {
      key: 'subject',
      type: 'select',
      templateOptions: {
        label: $translate.instant('FEEDBACK.SUBJECT'),
        options: [{
          'label': $translate.instant('FEEDBACK.COMPLAINT'),
          'id': 'complaint',
        }, {
          'label': $translate.instant('FEEDBACK.BUG'),
          'id': 'bug',
        }, {
          'label': $translate.instant('FEEDBACK.SUGGESTION'),
          'id': 'suggestion',
        }],
        valueProp: 'id',
        labelProp: 'label',
        icon: 'icon-list',
        iconPlaceholder: true
      }
    }, {
      key: 'status',
      type: 'textarea',
      templateOptions: {
        type: 'text',
        placeholder: $translate.instant('FEEDBACK.MESSAGE'),
        icon: 'ion-quote',
        required: true,
        iconPlaceholder: true
      }
    }];

    return {
      form: form
    };
  }


})();

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name photogramPhotoFeedback
   *
   * @description
   * _Please update the description and restriction._
   *
   * @restrict A
   * */

  angular
    .module('app.photogram')
    .directive('photogramPhotoFeedback', photogramPhotoFeedbackDirective);

  function photogramPhotoFeedbackDirective($ionicModal, AppConfig, PhotogramFeedback, PhotogramFeedbackForm, $state) {

    var path = AppConfig.path;

    return {
      restrict: 'A',
      scope: {
        photogram: '@'
      },
      template: '',
      link: function (scope, elem, attr) {

        scope.link = link;
        scope.submitFeedback = submitFeedback;
        scope.closeModal = closeModal;
        elem.bind('click', openModal);

        function init() {
          scope.form = {
            photogramId: scope.photogram
          };
          scope.formFields = PhotogramFeedbackForm.form;
        }

        function openModal() {

          init();
          $ionicModal.fromTemplateUrl(path + '/feedback/photogram.photo.feedback.modal.html', {
              scope: scope,
              focusFirstInput: true
            })
            .then(function (modal) {
              scope.modal = modal;
              scope.modal.show();
            });
        }

        function link(sref) {
          $state.go(sref)
          scope.closeModal();
        }

        function submitFeedback() {
          var dataForm = angular.copy(scope.form);
          PhotogramFeedback
            .submit(dataForm)
            .then(function (resp) {
              console.log(resp);
              init();
              scope.closeModal();
            });
        }


        function closeModal() {
          scope.modal.hide();
          scope.modal.remove();
        }

      }
    };
  }

})();

(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name PhotogramHomeCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.photogram')
    .controller('PhotogramHomeCtrl', PhotogramHomeController);

  function PhotogramHomeController($scope, $rootScope, $cordovaInAppBrowser, $stateParams, Photogram) {
    var vm = this;
    vm.loading = true;
    vm.buySource = buySource;
    vm.load = load;
    vm.load($stateParams.reload);
    vm.loadMore = loadMore;

    init();

    $rootScope.$on('PhotogramHome:reload', function () {
      loadMore(true);
    });

    function init() {
      vm.data = [];
      vm.page = 0;
      vm.empty = false;
      vm.more = false;
    }


    function loadMore(force) {
      console.log('Load More', vm.more);
      vm.load(force);
    }

    function buySource() {
      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };

      var lang = $rootScope.lang.value;
      var url = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FAW4JZS7KJM5S';
      if (lang === 'pt_BR') {
        url = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FT5W6FJW5RAEN'
      }

      $cordovaInAppBrowser.open(url, '_blank', options);
    }

    function load(force) {
      console.log('Load ');

      if (force) {
        init();
      }

      Photogram
        .home(vm.page)
        .then(function (resp) {

          console.log(resp);

          vm.loading = false;

          angular.forEach(resp, function (value, key) {
            vm.data.push(value);
          });

          console.log('qtd', resp.length);

          if (resp.length) {
            vm.more = true;
            vm.page++;
          } else {
            vm.empty = true;
            vm.more = false;
          }
        })
        .then(function () {
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');

        })
        .catch(function () {
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          if (vm.data.length) {
            vm.loading = false;
            vm.page++;
          } else {
            vm.empty = true;
            vm.loading = false;
          }
          vm.more = false;
        });
    }


  }


})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .controller('PhotogramPhotoCtrl', PhotogramPhotoCtrl);


  function PhotogramPhotoCtrl($stateParams, Photogram) {
    var vm = this;

    vm.formFields = Photogram.formComment;
    vm.submitComment = submitComment;
    init();

    Photogram
      .get($stateParams.id)
      .then(function (resp) {
        vm.data = resp;
      });

    function init() {
      vm.form = {
        PhotogramId: $stateParams.id,
        text: ''
      };

      loadComments();
    }

    function loadComments() {
      Photogram
        .allComment($stateParams.id)
        .then(function (resp) {
          console.log(resp);
          vm.comments = resp;
        });
    }

    function submitComment(rForm, form) {
      if (rForm.$valid) {
        var dataForm = angular.copy(form);
        Photogram
          .addComment(dataForm)
          .then(function (resp) {
            console.log(resp);
            loadComments();
          });
      }
    }

  }


})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .controller('PhotogramPreviewCtrl', PhotogramPreviewCtrl);


  function PhotogramPreviewCtrl(photo) {
    var vm = this;
    vm.data = photo;
    console.log(photo);
  }


})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .controller('PhotogramViewCtrl', PhotogramViewCtrl);

  function PhotogramViewCtrl(Photogram, $stateParams) {
    var vm = this;
    Photogram
      .get($stateParams.id)
      .then(function (resp) {
        console.log(resp);
        vm.data = resp;
      });
  }


})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .controller('PhotogramSearchGridCtrl', PhotogramSearchGridCtrl);

  function PhotogramSearchGridCtrl($scope, Photogram, PhotogramShare) {
    var vm = this;
    vm.loading = true;
    vm.loadMore = loadMore;
    vm.openShare = PhotogramShare.open;
    vm.load = load;
    init();
    vm.load('');

    function init() {
      vm.data = [];
      vm.page = 0;
      vm.empty = false;
      vm.more = false;
    }

    function loadMore(force) {
      console.log('Load More', vm.more);
      vm.load(force);
    }

    function load(string) {
      console.log('load popular', string);

      Photogram
        .all(vm.page)
        .then(function (resp) {
          vm.loading = false;

          angular.forEach(resp, function (value, key) {
            vm.data.push(value);
          });

          console.log('qtd', resp, resp.length);

          if (resp.length > 0) {
            vm.more = true;
            vm.page++;
          } else {
            vm.empty = true;
            vm.more = false;
          }
        })
        .then(function () {
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          vm.empty = false;

        })
        .catch(function (status) {
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          if (!status) {
            vm.loading = false;
            vm.page++;
          } else {
            vm.empty = true;
            vm.loading = false;
          }
          vm.more = false;
        });
    }

  }

})();

(function () {
  'use strict';
  angular
    .module('app.photogram')
    .controller('PhotogramSearchMapCtrl', PhotogramSearchMapCtrl);

  function PhotogramSearchMapCtrl($scope, $timeout, GeoService, Photogram) {
    var vm = this;
    var time = 0;
    var map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 13
    };

    vm.location = location;
    vm.openModal = openModal;
    $scope.map = map;
    $scope.$watch('map.center.latitude', watchMap);

    function watchMap(newValue) {
      console.log(newValue);
      if (newValue) {
        console.log(newValue);
        time += 2000;
        console.log(time);


        var timer = $timeout(function () {
          console.log(timer);

          Photogram
            .nearby($scope.map.center)
            .then(function (resp) {
              console.log(resp);
              time = 0;
              vm.data = resp;

              $timeout.cancel(timer);
            });
        }, time);

      }
    }

    function openModal(item) {
      console.log(item);
    }

    function location() {
      init();
    }

    function init() {
      GeoService
        .findMe()
        .then(function (position) {

          console.log(position);

          $scope.map = {
            center: position.geolocation,
            zoom: 13
          };

          vm.user = angular.copy(position.geolocation);

          Photogram
            .nearby(position.coords)
            .then(function (resp) {
              console.log(resp);
              vm.data = resp;
            });

        }, function (error) {
          console.log('Could not get location');

          Photogram
            .nearby($scope.map.center)
            .then(function (resp) {
              console.log(resp);
              vm.data = resp;
            });
        });
    }

    init();

  }

})();

(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name UserAvatarCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('UserAvatarCtrl', UserAvatarController);

  function UserAvatarController(User, AppConfig, $state, Notify, UserForm) {
    var vm = this;
    vm.submitAvatar = submitAvatar;
    init();

    function init() {
      vm.form = User.currentUser();
      vm.formFields = UserForm.profile;
      console.log(vm.form);
    }

    function submitAvatar() {
      console.log(vm.rForm);

      if (vm.rForm.$valid) {
        var dataForm = angular.copy(vm.form);
        console.log(dataForm);

        User
          .update(dataForm)
          .then(function (resp) {
            console.log(resp);
            User.init();
            $state.go(AppConfig.routes.home, {
              clear: true
            })
          });
      } else {
        Notify.alert({
          title: ('Invalid form'),
          text: ('Fill out the fields in red')
        });
      }

    }

  }


})();

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name userAvatar
   *
   * @description
   * _Please update the description and restriction._
   *
   * @restrict A
   * */

  angular
    .module('app.user')
    .directive('userAvatar', userAvatarDirective);

  function userAvatarDirective(PhotoService, PhotogramSetting, User) {
    return {
      restrict: 'A',
      scope: {
        gallery: '@'
      },
      template: '',
      link: function ($scope, elem) {

        elem.bind('click', openModal);

        function openModal() {

          var option = {
            allowEdit: PhotogramSetting.get('imageEdit'),
            filter: PhotogramSetting.get('imageFilter'),
            allowRotation: PhotogramSetting.get('imageRotation'),
            quality: PhotogramSetting.get('imageQuality'),
            correctOrientation: PhotogramSetting.get('imageEdit'),
            targetWidth: PhotogramSetting.get('imageWidth'),
            targetHeight: PhotogramSetting.get('imageHeight'),
            saveToPhotoAlbum: PhotogramSetting.get('imageSaveAlbum')
          };

          console.log(option);

          PhotoService
            .open(option)
            .then(function (imageData) {
              User
                .updateAvatar(imageData)
                .then(function (resp) {
                  console.log(resp);
                });
            })
            .catch(function (resp) {
              console.log(resp);
            });
        }

      }
    }
  }

})();

(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name LogoutCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('LogoutCtrl', LogoutController);

  function LogoutController(User) {
    User.logout();
  }

})();

(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name UserMergeCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('UserMergeCtrl', UserMergeController);

  function UserMergeController(User, $rootScope, AppConfig, $state, Notify, UserForm) {
    var vm = this;
    vm.submitMerge = submitMerge;
    init();

    function init() {
      vm.form = $rootScope.tempUser;
      vm.form.password = '';
    }

    function submitMerge() {

      if (vm.form.password != '') {
        var dataForm = angular.copy(vm.form);
        var form = {
          email: dataForm.email,
          password: dataForm.password
        };

        console.log(form);

        User
          .login(form)
          .then(function (user) {
            console.log(user);
            User
              .facebookLink(user)
              .then(function (resp) {
                console.log(resp);
                $state.go(AppConfig.routes.home, {
                  clear: true
                })
              })
          })
          .catch(function (resp) {
            Notify.alert({
              title: 'Ops',
              text: resp.message
            });
          });
      } else {
        Notify.alert({
          title: ('Invalid form'),
          text: ('Please enter your email')
        });
      }

    }

  }


})();

(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name PhotogramProfileCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('PhotogramProfileCtrl', PhotogramProfileController);

  function PhotogramProfileController($stateParams, $scope, Photogram, User) {
    var vm = this;
    vm.changeTab = changeTab;
    vm.user = User.currentUser();

    init();
    changeTab('list');

    function changeTab(tab) {
      if (tab === 'list') {
        vm.tab = {
          list: true,
          grid: false
        };
      } else {
        vm.tab = {
          list: false,
          grid: true
        };
      }
    }

    function init() {
      getFollower();
      getGallery();
    }

    function getFollower() {
      vm.loadingFollowers = true;
      vm.loadingFollowing = true;
      vm.loadingPhotos = true;

      Photogram
        .getUserGalleryQtd()
        .then(function (qtdPhotos) {
          vm.user.qtdPhotos = qtdPhotos;
          vm.loadingPhotos = false;
        });

      User
        .getFollowers()
        .then(function (qtdFollowers) {
          console.log('qtdFollower: seguindo', qtdFollowers);
          vm.user.qtdFollowers = qtdFollowers;
          vm.loadingFollowers = false;
        });

      User
        .getFollowing()
        .then(function (qtdFollowing) {
          console.log('qtdFollowing: seguidores', qtdFollowing);
          vm.user.qtdFollowing = qtdFollowing;
          vm.loadingFollowing = false;
        });
    }


    function getGallery() {
      vm.loading = true;

      Photogram
        .getUserGallery()
        .then(function (resp) {
          vm.data = resp;
          console.log(resp);
        })
        .then(function () {
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          vm.loading = false;
        })
        .catch(function () {
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          vm.loading = false;
        });
    }
  }


})();

(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name PhotogramProfilePhotoCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('PhotogramProfilePhotoCtrl', PhotogramProfilePhotoController);

  function PhotogramProfilePhotoController(Photogram, $scope) {
    var vm = this;
    var user = Parse.User.current();
    vm.data = [];
    vm.empty = false;

    console.log('Profile Photo');

    Photogram
      .getUserGallery(user.id)
      .then(function (resp) {
        vm.data = resp;
        console.log(resp);
      })
      .then(function () {
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$broadcast('scroll.infiniteScrollComplete');
        vm.loading = false;
      })
      .catch(function () {
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$broadcast('scroll.infiniteScrollComplete');
        vm.loading = false;
      });
  }


})();

(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name UserProfileCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('UserProfileCtrl', UserProfileController);

  function UserProfileController($rootScope, User, UserForm) {
    var vm = this;
    vm.form = $rootScope.user;
    vm.formFields = UserForm.profile;
    vm.submitProfile = submitProfile;

    function submitProfile(rForm, form) {
      if (rForm.$valid) {
        var formData = angular.copy(form);
        User
          .update(formData)
          .then(function (resp) {
            console.log(resp);
          });
      }
    }

  }

})();

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name photogramProfile
   *
   * @description
   * _Please update the description and restriction._
   *
   * @restrict A
   * */

  angular
    .module('app.user')
    .directive('profileModal', profileModalDirective);

  function profileModalDirective($ionicModal, $rootScope, $q, Photogram, User) {

    return {
      restrict: 'A',
      scope: {
        user: '='
      },
      link: profileModalLink
    };

    function profileModalLink(scope, elem) {

      elem.bind('click', openModal);

      function init() {
        var defer = $q.defer();
        scope.loadingPhotogram = true;

        Photogram
          .getUserGallery(scope.user.id)
          .then(function (resp) {
            scope.data = resp;
            console.log(resp);
            scope.$broadcast('scroll.refreshComplete');
            scope.$broadcast('scroll.infiniteScrollComplete');
            scope.loadingPhotogram = false;
            defer.resolve(scope.data);
          });

        return defer.promise;
      }

      function changeTab(tab) {
        if (tab === 'list') {
          scope.tab = {
            list: true,
            grid: false
          };
        } else {
          scope.tab = {
            list: false,
            grid: true
          };
        }
      }

      function getFollower(userId) {
        scope.loadingFollowers = true;
        scope.loadingFollowing = true;
        scope.loadingPhotos = true;

        Photogram
          .getUserGalleryQtd(userId)
          .then(function (qtdPhotos) {
            scope.user.qtdPhotos = qtdPhotos;
            scope.loadingPhotos = false;
          });

        User
          .getFollowers(userId)
          .then(function (qtdFollowers) {
            console.log('qtdFollower: seguindo', qtdFollowers);
            scope.user.qtdFollowers = qtdFollowers;
            scope.loadingFollowers = false;
          });

        User
          .getFollowing(userId)
          .then(function (qtdFollowing) {
            console.log('qtdFollowing: seguidores', qtdFollowing);
            scope.user.qtdFollowing = qtdFollowing;
            scope.loadingFollowing = false;
          });
      }

      function openModal() {

        console.log(scope.user);

        if (scope.user.id === $rootScope.user.id) {
          return false;
        }

        $ionicModal
          .fromTemplateUrl('app/module/user/module/profile/view/profile.modal.html', {
            scope: scope
          })
          .then(function (modal) {
            scope.modalProfile = modal;
            scope.loadingFollow = true;
            scope.changeTab = changeTab;
            scope.follow = follow;
            scope.closeModal = closeModal;
            scope.modalProfile.show();

            init();
            getFollower(scope.user.id);
            changeTab('list');
            isFollow();

            function isFollow() {
              User
                .isFollow(scope.user.id)
                .then(isFollowResp);
            }

            function isFollowResp(resp) {
              console.info('follow user?', resp);
              scope.user.follow = resp;
              scope.loadingFollow = false;
            }

            function follow() {

              scope.loadingFollow = true;
              var status;

              if (scope.user.follow) {
                status = false;
              } else {
                status = true;
              }

              User
                .follow(status, scope.user)
                .then(followResp);

              function followResp(resp) {

                console.log('Follow result', resp);
                scope.user.follow = status;
                scope.loadingFollow = false;
                getFollower(scope.user.id);
              }
            }

            function closeModal() {
              delete scope.data;
              scope.modalProfile.hide();
              scope.modalProfile.remove();
            }
          });
      }
    }
  }

})();

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name photogramProfileEdit
   *
   * @description
   * _Please update the description and restriction._
   *
   * @restrict A
   * */

  angular
    .module('app.user')
    .directive('profileModalEdit', profileModalEditDirective);

  function profileModalEditDirective($ionicModal, User, UserForm, $state) {

    return {
      restrict: 'A',
      scope: {
        photogram: '@'
      },
      template: '',
      link: function (scope, elem) {

        scope.linkFacebook = linkFacebook;
        scope.logout = logout;
        scope.submitUpdateProfile = submitUpdateProfile;
        scope.closeModal = closeModal;
        elem.bind('click', openModal);


        function init() {
          scope.form = User.currentUser();
          scope.formFields = UserForm.profile;
        }


        function openModal() {

          init();
          $ionicModal.fromTemplateUrl('app/module/user/module/profile/view/profile.edit.modal.html', {
            scope: scope
          }).then(function (modal) {
            scope.modal = modal;
            scope.modal.show();
          });
        }

        function logout() {
          $state.go('logout');
          scope.closeModal();
        }

        function linkFacebook() {
          User
            .facebookLink()
            .then(function (resp) {
              console.log(resp);
            });
        }

        function submitUpdateProfile() {
          var dataForm = angular.copy(scope.form);
          User
            .update(dataForm)
            .then(function (resp) {
              console.log(resp);
              init();
              scope.closeModal();
            });
        }

        function closeModal() {
          scope.modal.hide();
          scope.modal.remove();
        }
      }
    };
  }

})();

(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name UserRecoveryPassCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('UserRecoveryPassCtrl', UserRecoveryPassController);

  function UserRecoveryPassController(User, Notify) {
    var vm = this;
    vm.form = {};
    vm.submitForgot = submitForgot;

    function submitForgot() {
      User
        .forgot(vm.form)
        .then(function (resp) {
          console.log(resp);
        })
        .catch(function (resp) {
          Notify.alert('Ops', resp);
        });
    }
  }


})();

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name recoveryPass
   *
   * @description
   * _Please update the description and restriction._
   *
   * @restrict E
   * */

  angular
    .module('app.user')
    .directive('recoveryPass', recoveryPassDirective);

  function recoveryPassDirective(User, $ionicPopup, Loading, Notify) {
    return {
      restrict: 'A',
      scope: {
        login: '@',
        register: '@',
      },
      link: function ($scope, elem) {

        elem.bind('click', openModal);

        function openModal() {

          $scope.form = {
            recovery: ''
          };

          $scope.erro = '';

          $scope.text = {
            button: (''),
            input: ('Email')
          };

          $ionicPopup
            .show({
              scope: $scope,
              template: '<div class="popup-recovery"><form name="form.recovery" form-manager><label class="item item-input"><i class="icon ion-email placeholder-icon"></i><input type="email" ng-model="email" id="email" name="email" placeholder="{{ text.input }}" required ng-maxlength="80"></label><span class="error-msg">{{erro}}</span></form></div>',
              title: ('A new password will be sent to your e-mail address'),
              buttons: [{
                text: ('Cancel'),
                type: 'button-calm'
              }, {
                text: ('Send'),
                type: 'button-positive',
                onTap: function (e) {
                  if ($scope.form.recovery.$valid) {
                    return $scope.form.recovery.email.$viewValue;
                  } else {
                    //não permite o usuário fechar até ele digitar o email
                    e.preventDefault();
                    $scope.erro = ('Invalid Email');
                  }
                }
              }]
            })
            .then(function (res) {
              if (!angular.isUndefined(res)) {
                var email = res;

                console.log(res);

                Loading.start();

                User
                  .forgot(email)
                  .then(function (resp) {
                    console.log(resp);
                    Notify.alert({
                      login: ('Forgot your password'),
                      text: ('Access your accout mail')
                    });
                    Loading.end();
                  })
                  .catch(function (resp) {
                    Notify.alert({
                      login: 'Ops',
                      text: resp
                    });
                    Loading.end();
                  });
              }
            });

        }
      }
    };
  }


})();

(function () {
    'use strict';
    /**
     * @ngdoc controller
     * @name UserSigninCtrl
     *
     * @description
     * _Please update the description and dependencies._
     *
     * @requires $scope
     * */
    angular
        .module('app.user')
        .controller('UserSigninCtrl', UserSigninController);

    function UserSigninController(AppConfig, UserForm, Loading, $state, Notify, User) {
        var vm = this;
        vm.formFields = UserForm.login;
        vm.routeLogged = AppConfig.routes.home;
        vm.submitLogin = submitLogin;
        vm.facebook = facebook;

        init();

        function init() {
            vm.form = {
                email: '',
                password: ''
            };

            if (window.Parse.User.current()) {
                $state.go(vm.routeLogged, {
                    clear: true
                });
            }

        }

        function submitLogin(rForm, data) {

            var form = angular.copy(data);
            if (rForm.$valid) {
                Loading.start();
                User
                    .login(form)
                    .then(function (data) {
                        if (data.name.length) {
                            $state.go(vm.routeLogged, {
                                clear: true
                            });
                        } else {
                            $state.go('useravatar', {
                                clear: true
                            });
                        }
                        Loading.end();
                    })
                    .catch(function (resp) {
                        Notify.alert({
                            title: 'Ops',
                            text: resp.message
                        });
                        Loading.end();
                    });
            } else {
                return false;
            }
        }

        function facebook() {
            Loading.start();
            User
                .facebookLogin()
                .then(function (resp) {
                    console.log(resp);

                    Loading.end();
                    switch (resp.status) {
                        case 0:
                            // logado
                            $state.go(AppConfig.routes.home, {
                                clear: true
                            });
                            break;
                        case 1:
                            // novo user
                            $state.go('useravatar', {
                                clear: true
                            });
                            break;
                        case 2:
                            // merge
                            $state.go('usermerge', {
                                clear: true
                            });
                            break;
                    }
                })
                .catch(function () {
                    Loading.end();
                    Notify.alert({
                        title: 'Ops',
                        text: ('Facebook error')
                    });
                });
        }

    }


})();

(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name UserSignupCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('UserSignupCtrl', UserSignupController);

  function UserSignupController($state, UserForm, Notify, Loading, Photogram, User) {
    var vm = this;
    vm.formFields = UserForm.register;
    vm.submitRegister = submitRegister;

    init();

    function init() {
      vm.form = {
        email: '',
        password: ''
      };
    }

    function submitRegister(rForm, data) {

      if (rForm.$valid) {
        Loading.start();
        var form = angular.copy(data);
        User
          .register(form)
          .then(function (resp) {
            console.log(resp);
            // Add Actvity History
            Photogram
              .addActivity({
                action: 'registered'
              });

            // After register, login
            User
              .login({
                email: form.email,
                password: form.password
              })
              .then(function (data) {
                console.log(data);
                User.init();
                Loading.end();
                $state.go('useravatar', {
                  clear: true
                });
              })
              .catch(function (resp) {
                console.log(resp);
                Loading.end();
                Notify.alert({
                  title: 'Ops',
                  text: resp.message
                });
              });
          })
          .catch(function (resp) {
            console.log(resp);
            Loading.end();
            Notify.alert({
              title: 'Ops',
              text: resp.message
            });
          });
      }
    }
  }


})();

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name openTerms
   *
   * @description
   * _Please update the description and restriction._
   *
   * @restrict A
   * */

  angular
    .module('app.user')
    .directive('openTerms', openTermsDirective);

  function openTermsDirective($cordovaInAppBrowser, AppConfig) {
    return {
      restrict: 'A',
      template: '',
      link: function (scope, elem, attr) {

        elem.bind('click', openModal);
        scope.closeModal = closeModal;

        function openModal() {
          console.log(scope.ngModel);

          $cordovaInAppBrowser
            .open(AppConfig.app.url, '_blank', {
              location: 'no',
              clearcache: 'yes',
              toolbar: 'yes'
            })
            .then(function (event) {
              // success
            })
            .catch(function (event) {
              // error
            });
        }

        function closeModal() {
          scope.modal.hide();
          scope.modal.remove();
        }
      }
    }
  }

})();

angular.module("starter").run(["$templateCache", function($templateCache) {$templateCache.put("app/component/ion-photo/view/modal.share.photo.html","<ion-modal-view class=\"modal-share\"><ion-header-bar class=\"bar-dark\"><div class=\"title\">{{ \'Share\' | translate }}</div>\n<button class=\"button button-positive\" ng-click=\"modal.hide()\"><i class=\"icon ion-arrow-right-b\"></i></button>\n</ion-header-bar><ion-content ng-cloak><div id=\"image\"><img ng-src=\"{{form.photo}}\"><div class=\"title\">{{ form.title }}\n</div></div><ul class=\"list\"><li class=\"padding\"><button ng-repeat=\"social in sociais\" ng-click=\"share(form, social)\"\n class=\"button button-block button-{{ social }}\"><i class=\"icon ion-social-{{ social }}\"></i> {{ social | uppercase }}\n</button></li></ul></ion-content></ion-modal-view>");
$templateCache.put("app/component/ion-photo/view/photo.filter.carousel.html","<div class=\"wide-as-needed\"><a ng-repeat=\"filter in filters\" ng-click=\"applyFilter(\'image\', filter)\"><div caman\n image=\"image\" name=\"filter\" filter=\"filter\" class=\"image\" loading=\"loading\" ng-class=\"{disabled: loading}\"></div>\n<ion-spinner ng-if=\"loading\"></ion-spinner><p>{{ filter }}</p></a></div>");
$templateCache.put("app/component/ion-photo/view/photo.filter.html","<div class=\"capture-photo\"><div caman filter=\"\'normal\'\" loading=\"loadingMaster\" class=\"image\"\n ng-class=\"{disabled: loadingMaster}\" name=\"\'image\'\" image=\"image\"></div><ion-spinner ng-show=\"loading\"></ion-spinner>\n</div><photo-filter-carousel image=\"image\"></photo-filter-carousel>");
$templateCache.put("app/module/intro/view/intro.html","<ion-view class=\"view-intro\" can-swipe-back=\"false\"><ion-content scroll=\"false\"><div class=\"intro-slider\">\n<ion-slide-box active-slide=\"slideIndex\" show-pager=\"true\" on-slide-changed=\"vm.slideChanged($index)\"><ion-slide\n ng-repeat=\"item in vm.slides\"><div class=\"content\" ng-if=\"$index == vm.slideIndex\"><span class=\"top\"><h2>\n{{ item.top }}</h2></span><div class=\"phone {{ vm.device }}\"><img ng-src=\"{{ item.img }}\"></div></div></ion-slide>\n<ion-slide><div class=\"content\" ng-if=\"vm.slides.length == vm.slideIndex\"><div class=\"last\"><div class=\"logo2 step1\">\n<img src=\"img/icon.png\"> <span class=\"icon2-logo\"></span></div><button class=\"button button-block button-clear step2\"\n ui-sref=\"user.signin\" translate=\"INTRO.BUTTON.ENTER\"></button></div></div></ion-slide></ion-slide-box></div><button\n class=\"button button-positive button-fab left\" ng-if=\"vm.slideIndex\" ng-click=\"vm.previous()\"><i\n class=\"icon ion-ios-arrow-left\"></i></button> <button class=\"button button-positive button-fab right\"\n ng-hide=\"vm.slideIndex === vm.slides.length\" ng-click=\"vm.next()\"><i class=\"icon ion-ios-arrow-right\"></i></button>\n</ion-content></ion-view>");
$templateCache.put("app/module/loading/view/loading.html","<ion-view class=\"view-loading\"><ion-content scroll=\"false\"><img src=\"img/icon.png\"></ion-content></ion-view>");
$templateCache.put("app/module/photogram/view/photogram.tabs.html","<ion-view><ion-nav-bar class=\"bar bar-positive bar-mop\" align-title=\"left\"><ion-nav-back-button></ion-nav-back-button>\n</ion-nav-bar><ion-tabs class=\"tabs-dark tabs-photogram\"><ion-tab title=\"{{\'PHOTOGRAM.TITLE.HOME\' | translate }}\"\n icon=\"ion-android-home\" ui-sref=\"photogram.home\"><ion-nav-view name=\"tabHome\"></ion-nav-view></ion-tab><ion-tab\n title=\"{{\'PHOTOGRAM.TITLE.SEARCH\' | translate }}\" icon=\"ion-search\" ui-sref=\"photogram.search.grid\"><ion-nav-view\n name=\"tabSearch\"></ion-nav-view></ion-tab><ion-tab title=\"{{\'PHOTOGRAM.TITLE.SHARE\' | translate }}\" icon=\"ion-camera\"\n class=\"middle\" ng-click=\"vm.postPhoto()\"><ion-nav-view name=\"tabCapture\"></ion-nav-view></ion-tab><ion-tab\n title=\"{{\'PHOTOGRAM.TITLE.ACTIVITY\' | translate }}\" icon=\"ion-chatbubble\" ui-sref=\"photogram.activity\"><ion-nav-view\n name=\"tabActivity\"></ion-nav-view></ion-tab><ion-tab title=\"{{\'PHOTOGRAM.TITLE.PROFILE\' | translate }}\"\n icon=\"ion-person\" ui-sref=\"photogram.account\"><ion-nav-view name=\"tabProfile\"></ion-nav-view></ion-tab></ion-tabs>\n</ion-view>");
$templateCache.put("app/module/photogram/view/photogram.view.html","<ion-view view-title=\"{{ \'Gallery preview\' | translate }}\"><ion-content class=\"bg-content\"><ion-list class=\"card\"\n ng-if=\"!GalleryPreview.data.images.length\"><ion-item class=\"text-center\">No photos</ion-item></ion-list><div\n class=\"row\"><div class=\"col\" ng-repeat=\"picture in GalleryPreview.data.images\"\n ui-sref=\"app.gallerypreview({id: picture.id})\"><div class=\"card\"><div class=\"item item-image\"><img\n ng-src=\"{{picture.image._url}}\"></div></div></div></div></ion-content></ion-view>");
$templateCache.put("app/module/user/view/user.tabs.html","<ion-view class=\"view-login\" view-title=\"{{ \'USER.BUTTON.SIGNIN\' | translate }}\"><ion-content padding=\"false\"\n scroll=\"false\"><div class=\"user-head padding text-center step1\"><div class=\"logo2\"><img src=\"img/icon.png\"> <span\n class=\"icon2-logo\"></span></div><h2 class=\"step2\" translate=\"USER.INTRO\"></h2><ion-tabs\n class=\"tabs-positive tabs-top\"><ion-tab title=\"{{ \'USER.BUTTON.SIGNIN\' | translate }}\" ui-sref=\"user.signin\">\n</ion-tab><ion-tab title=\"{{ \'USER.BUTTON.SIGNUP\' | translate }}\" ui-sref=\"user.signup\"></ion-tab></ion-tabs></div>\n<ion-nav-view class=\"step3\" name=\"tabLogin\"></ion-nav-view></ion-content></ion-view>");
$templateCache.put("app/module/photogram/directives/comment/photogram.comment.directive.html","<ion-modal-view class=\"modal-comment\"><ion-header-bar class=\"bar-dark\"><button\n class=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\n<span translate=\"PHOTOGRAM.COMMENT.TITLE\"></span>({{ comments.length }})</div></ion-header-bar><ion-content>\n<photogram-loading loading=\"loading\" icon=\"android\"></photogram-loading><ion-list class=\"list\"\n ng-show=\"comments.length\" can-swipe=\"true\"><ion-item ng-repeat=\"item in comments\" class=\"item item-avatar\"><img\n ng-src=\"{{ item.user.src }}\"><div class=\"row\"><h2>{{ item.user.name }}</h2><div>{{ item.text }}</div></div><div\n class=\"row\"><p>{{ item.created | amTimeAgo }}</p></div><div ng-if=\"item.user.id === currentUser.id\"><ion-option-button\n class=\"button-info\" ng-click=\"editComment(item)\" translate=\"PHOTOGRAM.BUTTON.EDIT\">Edit</ion-option-button>\n<ion-option-button class=\"button-assertive\" ng-click=\"deleteComment(item)\" translate=\"PHOTOGRAM.BUTTON.REMOVE\">Remove\n</ion-option-button></div></ion-item></ion-list><div class=\"center-ico\" ng-if=\"nocomments\"><i\n class=\"icon ion-ios-chatbubble-outline\"></i><h1 translate=\"PHOTOGRAM.COMMENT.NO_COMMENTS\">No Comments</h1></div>\n</ion-content><ion-footer class=\"step2\"><div class=\"form\"><formly-form model=\"form\" fields=\"formFields\" form=\"rForm\">\n<button class=\"button button-positive\" type=\"button\" ng-click=\"submitComment(rForm, form)\"><i\n class=\"icon ion-arrow-right-b\"></i></button></formly-form></div></ion-footer></ion-modal-view>");
$templateCache.put("app/module/photogram/directives/follow/photogram.follow.modal.html","<ion-modal-view class=\"modal-profile photogram-profile\"><ion-header-bar class=\"bar-positive\"><button\n class=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\nFollow Users</div></ion-header-bar><ion-content><div class=\"list\"><div class=\"item item-avatar item-button-right\"\n ng-repeat=\"item in data\"><img ng-src=\"{{ item.src }}\"><h2>{{ item.name }}</h2><p>{{ item.status }}</p><button\n class=\"button\" ng-click=\"item.follow = !item.follow\" ng-class=\"item.follow ? \'button-positive\' : \'button-stable\'\"><i\n class=\"icon\" ng-class=\"item.follow? \'ion-thumbsup\' : \'ion-plus\'\"></i></button></div></div></ion-content>\n</ion-modal-view>");
$templateCache.put("app/module/photogram/directives/like/photogram.like.directive.html","<ion-modal-view class=\"modal-comment\"><ion-header-bar class=\"bar-dark\"><button\n class=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\n{{ \'Likes\' | translate }} ({{ likes.length }})</div></ion-header-bar><ion-content><div class=\"list step1\"><div\n ng-repeat=\"item in likes\" class=\"item item-avatar item-button-right\"><img ng-src=\"{{ item.user.img }}\"><h2>\n{{ item.user.name }}</h2><div>{{ item.text }}</div><p>{{ item.created | amTimeAgo }}</p><button\n class=\"button button-positive button-outline\"><i class=\"icon ion-ios-plus-empty\"></i> {{ \'Follow\' }}</button></div>\n</div></ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/directives/photogrid/photogram.photos.grid.html","<div class=\"row\" ng-if=\"$index % 3 === 0\" ng-repeat=\"image in data\"><div class=\"col col-33 item-animate1\"\n ng-if=\"$index < data.length\"><img ng-if=\"profile\" profile-modal user=\"data[$index].user\" ng-src=\"{{data[$index].src}}\"\n width=\"100%\"> <img ng-if=\"!profile\" ng-src=\"{{data[$index].src}}\" width=\"100%\"></div><div\n class=\"col col-33 item-animate1\" ng-if=\"$index + 1 < data.length\"><img ng-if=\"profile\" profile-modal\n user=\"data[$index + 1].user\" ng-src=\"{{data[$index + 1].src}}\" width=\"100%\"> <img ng-if=\"!profile\"\n ng-src=\"{{data[$index + 1].src}}\" width=\"100%\"></div><div class=\"col col-33 item-animate1\"\n ng-if=\"$index + 2 < data.length\"><img ng-if=\"profile\" profile-modal user=\"data[$index + 2].user\"\n ng-src=\"{{data[$index + 2].src}}\" width=\"100%\"> <img ng-if=\"!profile\" ng-src=\"{{data[$index + 2].src}}\" width=\"100%\">\n</div></div>");
$templateCache.put("app/module/photogram/directives/settings/photogram.settings.modal.html","<ion-modal-view class=\"modal-profile\"><ion-header-bar class=\"bar-dark\"><button\n class=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\"\n translate=\"PHOTOGRAM.SETTING.TITLE\"></div></ion-header-bar><ion-content class=\"animated fadeIn\"><div class=\"list\">\n<label class=\"item item-input item-select\"><div class=\"input-label\" style=\"z-index: 2\"><h2\n translate=\"PHOTOGRAM.BUTTON.CHANGE_LANGUAGE\"></h2></div><select ng-model=\"language\"\n ng-change=\"changeLanguage(language)\"><option ng-repeat=\"item in languages\" value=\"{{item.code}}\"\n translate=\"{{item.translation}}\"></option></select></label><ion-toggle class=\"toggle-positive\" ng-model=\"form.push\">\n<h3><small translate=\"PHOTOGRAM.SETTING.NOTIFICATION\"></small></h3><p ng-if=\"!setting_preview\"\n translate=\"PHOTOGRAM.BUTTON.OFF\"></p><p ng-if=\"setting_preview\" translate=\"PHOTOGRAM.BUTTON.ON\"></p></ion-toggle>\n<ion-item class=\"item-icon-right\"\n ng-click=\"openLink(\'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FAW4JZS7KJM5S\')\"><h3><small\n translate=\"PHOTOGRAM.BUTTON.BUY\"></small></h3><i class=\"icon ion-ios-arrow-right\"></i></ion-item><ion-item\n class=\"item-icon-right\" ng-click=\"openLink(\'http://photogramapp.com\')\"><h3><small translate=\"PHOTOGRAM.BUTTON.HELP\">\n</small></h3><i class=\"icon ion-ios-arrow-right\"></i></ion-item><ion-item class=\"item-icon-right\"\n ng-click=\"openLink(\'http://photogramapp.com\')\"><h3><small translate=\"PHOTOGRAM.BUTTON.TERM_PRIVACY\"></small></h3><i\n class=\"icon ion-ios-arrow-right\"></i></ion-item><ion-item class=\"item-icon-right\"\n ng-click=\"openLink(\'http://photogramapp.com\')\"><h3><small translate=\"PHOTOGRAM.BUTTON.TERM_SERVICE\">Terms of Service\n</small></h3><i class=\"icon ion-ios-arrow-right\"></i></ion-item><ion-item class=\"item-icon-right\" ng-click=\"show();\">\n<h3><small translate=\"PHOTOGRAM.BUTTON.REPORT\">Report a Problem</small></h3><i class=\"icon ion-ios-arrow-right\"></i>\n</ion-item></div><div class=\"padding\"><button ng-click=\"link(\'logout\')\" class=\"button button-block button-positive\"\n translat=\"USER.BUTTON.LOGOUT\">Logout</button></div></ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/directives/photolist/view/photo.list.html","<div class=\"list card animated fadeIn\" ng-repeat=\"gallery in data \"><div class=\"item item-avatar\" ion-affix\n data-affix-within-parent-with-class=\"card\" profile-modal user=\"gallery.user\"><img ng-if=\"profile\"\n profile=\"{{gallery.user.id }}\" ng-src=\"{{gallery.user.src}}\"> <img ng-src=\"{{gallery.user.src}}\"><h2>\n{{gallery.user.name}}</h2><p>{{ gallery.user.status }}</p><span>{{gallery.created | amTimeAgo}}</span></div><div\n class=\"item item-body\" on-double-tap=\"vm.like(gallery)\" ng-model=\"gallery\"><div class=\"icon ion-ios-heart heart\"\n ng-class=\"(gallery.item.liked) ? \'happy\' : \'broken\' \"></div><i class=\"icon\" ng-if=\"like\"></i> <img\n cache-src=\"{{gallery.src}}\" id=\"{{gallery.id}}\"></div><div class=\"item item-buttons\"><div class=\"row\"><div\n class=\"col col-75\"><ion-spinner ng-show=\"gallery.item.likeProgress\"></ion-spinner><button photogram-like\n ng-model=\"gallery\" ng-if=\"!gallery.item.likeProgress\"\n ng-class=\"(gallery.item.liked) ? \'ion-ios-heart\' : \'ion-ios-heart-outline\' \"\n class=\"button-clear button-icon button-heart\"></button> <button photogram-comment ng-model=\"gallery\"\n class=\"button-clear button-icon ion-ios-chatbubble-outline\"></button> <button ng-click=\"vm.action(gallery)\"\n photogram=\"{{ gallery.id }}\" class=\"button-clear button-icon ion-android-share\"></button></div><div\n class=\"col text-right\"><button ng-click=\"vm.action(gallery)\" photogram=\"{{ gallery.id }}\"\n class=\"button-clear button-icon ion-android-more-vertical\"></button></div></div></div><div class=\"padding\"><span\n class=\"likes\" photogram-like photogram=\"{{ gallery }}\"><i class=\"icon ion-ios-heart\"></i> <span\n ng-if=\"!gallery.item.likeProgress\">{{ gallery.item.qtdLike }}</span> <span translate=\"PHOTOGRAM.LIKES\"></span></span>\n<div class=\"list-comments\"><div class=\"comment-item\" profile-modal user=\"gallery.user\"><span class=\"username\">\n{{ gallery.user.name }}</span> <span class=\"comment\">{{ gallery.item.title }}</span></div><div class=\"comment-item\"\n profile-modal user=\"item.user\" ng-repeat=\"item in gallery.comments\"><span class=\"username\">{{ item.user.name }}</span>\n <span class=\"comment\">{{ item.text }}</span></div></div><button\n class=\"button button-block button-clear button-comment\" photogram-comment ng-model=\"gallery\"><span\n translate=\"PHOTOGRAM.BUTTON.COMMENT_ADD\"></span></button></div></div>");
$templateCache.put("app/module/photogram/module/activity/view/photogram.activity.html","<ion-view cache-view=\"false\" class=\"photogram-activity\"><ion-nav-title><h1 class=\"title\" translate=\"ACTIVITY.TITLE\">\n</h1></ion-nav-title><ion-content><photogram-loading loading=\"vm.loading\" icon=\"android\"></photogram-loading><div\n class=\"list\"><div class=\"item item-avatar item-animate1\" ng-repeat=\"item in vm.data\"><img\n ng-src=\"{{ item.user.src }}\"><h2>{{ item.user.name }}</h2><div class=\"text\">{{ item.action | translate }}</div><p>\n{{ item.created | amTimeAgo }}</p><div class=\"img-right\" ng-if=\"item.img\"><img ng-src=\"{{ item.img }}\"></div></div>\n</div><ion-infinite-scroll ng-if=\"!vm.loading && !vm.empty\" on-infinite=\"vm.load()\"></ion-infinite-scroll>\n</ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/direct/view/direct.home.html","<ion-view><ion-nav-title translate=\"DIRECT.TITLE\"></ion-nav-title><ion-nav-buttons side=\"right\"><button\n class=\"button button-icon ion-ios-plus-empty\" ui-sref=\"photogram.direct\"></button></ion-nav-buttons><ion-content>\n<ion-list><ion-item class=\"item-avatar\" ng-repeat=\"item in vm.data\" ui-sref=\"photogram.message({channelId: item.id})\">\n<img ng-src=\"{{item.user.src}}\" alt=\"\"><h2>{{ item.user.name}}</h2><p>{{ item.msg }}</p></ion-item></ion-list>\n</ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/direct/view/direct.messages.html","<ion-view id=\"userMessagesView\" cache-view=\"false\" view-title=\"Messages\"><div class=\"loader-center\"\n ng-if=\"!vm.doneLoading\"><div class=\"loader\"><i class=\"icon ion-loading-c\"></i></div></div><ion-content\n has-bouncing=\"true\" class=\"has-header has-footer\" delegate-handle=\"userMessageScroll\"><ion-refresher\n pulling-text=\"{{\'DIRECT.BUTTON.PULL\' | TRANSLATE}}\" on-refresh=\"vm.doRefresh()\"></ion-refresher><div\n ng-repeat=\"message in vm.data.messages\" class=\"message-wrapper\" on-hold=\"onMessageHold($event, $index, message)\"><div\n ng-if=\"vm.user.id === message.user.id\"><img class=\"profile-pic right\" ng-src=\"{{message.user.src}}\"><div\n class=\"chat-bubble right\"><div class=\"message\" ng-bind-html=\"message.body | nl2br\" autolinker></div><div\n class=\"message-detail\"><span class=\"bold\">{{message.user.name}}</span>, <span am-time-ago=\"message.date\"></span></div>\n</div></div><div ng-if=\"vm.user.id !== message.user.id\"><img class=\"profile-pic left\" ng-src=\"{{message.user.src}}\">\n<div class=\"chat-bubble left\"><div class=\"message\" ng-bind-html=\"message.body | nl2br\" autolinker></div><div\n class=\"message-detail\"><span class=\"bold\">{{message.user.name}}</span>, <span am-time-ago=\"message.date\"></span></div>\n</div></div><div class=\"cf\"></div></div></ion-content><form name=\"sendMessageForm\"\n ng-submit=\"vm.sendMessage(sendMessageForm, vm.model)\" novalidate><ion-footer-bar\n class=\"bar-stable item-input-inset message-footer\" keyboard-attach><label class=\"item-input-wrapper\"><textarea\n ng-model=\"vm.model.text\" placeholder=\"{{ \'DIRECT.FORM.PLACEHOLDER\' | TRANSLATE}}\" required minlength=\"1\"\n maxlength=\"1500\" msd-elastic></textarea></label><div class=\"footer-btn-wrap\"><button\n class=\"button button-icon icon ion-android-send footer-btn\" type=\"submit\"></button></div></ion-footer-bar></form>\n</ion-view>");
$templateCache.put("app/module/photogram/module/feedback/view/photogram.photo.feedback.modal.html","<ion-modal-view class=\"modal-profile\"><ion-header-bar class=\"bar-dark\"><button\n class=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\"\n translate=\"FEEDBACK.TITLE\"></div><button class=\"button button-positive\" ng-click=\"submitFeedback()\"><i\n class=\"icon ion-arrow-right-b\"></i></button></ion-header-bar><ion-content><formly-form model=\"form\" form=\"rForm\"\n fields=\"formFields\"></formly-form></ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/module/home/view/home.html","<ion-view class=\"view-home\"><ion-nav-title><span class=\"icon2-logo\"></span></ion-nav-title><ion-nav-buttons\n side=\"right\"><button class=\"button button-icon ion-ios-filing\" ui-sref=\"photogram.direct\"></button></ion-nav-buttons>\n<ion-content><ion-refresher ng-if=\"!vm.loading\" on-refresh=\"loadMore(true)\"></ion-refresher><photogram-loading\n loading=\"vm.loading\"></photogram-loading><photogram-photo-list profile=\"true\" photogram=\"vm.data\"\n loading=\"vm.loading\"></photogram-photo-list><div class=\"center-ico\" ng-if=\"vm.empty\"><i class=\"icon ion-ios-camera\">\n</i><h1 translate=\"HOME.TITLE.NO_PHOTO\"></h1></div><ion-infinite-scroll ng-if=\"!vm.loading && !vm.empty\"\n on-infinite=\"vm.loadMore()\"></ion-infinite-scroll></ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/photo/view/photogram.photo.html","<ion-view view-title=\"Photo\"><ion-content><div class=\"list card step1\"><div class=\"item item-avatar\"\n data-affix-within-parent-with-class=\"card\" ion-affix><img ng-src=\"{{vm.data.user.img}}\"><h2>{{vm.data.user.name}}</h2>\n<span>{{vm.data.created | amTimeAgo}}</span></div><div class=\"item item-body\"><img ng-src=\"{{vm.data.img._url}}\"\n style=\"width: 100%\"></div><div class=\"padding\"><p>{{ vm.data.title }}</p><p><a class=\"subdued\" href=\"#\">\n1 {{ \'Like\' | translate}}</a></p></div></div><div class=\"list\"><div ng-repeat=\"item in vm.comments\"\n class=\"item item-avatar\"><img ng-src=\"{{ item.user.img }}\"><h2>{{ item.user.name }}</h2><p>{{ item.text }}</p></div>\n</div><div class=\"step2\"><formly-form model=\"vm.form\" fields=\"vm.formFields\" form=\"rForm\"><div class=\"padding\"><button\n class=\"button button-block button-positive\" type=\"button\" ng-click=\"vm.submitComment(rForm, vm.form)\" translate>\nComment</button></div></formly-form></div></ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/photo/view/photogram.popover.home.html","<ion-popover-view><ion-content><div class=\"list\"><div class=\"item\" ui-sref=\"gallery.settings\" translate>Settings</div>\n<div class=\"item\" ui-sref=\"gallery.settings\" translate>About</div></div></ion-content></ion-popover-view>");
$templateCache.put("app/module/photogram/module/search/view/photo.modal.html","<ion-modal-view class=\"modal-profile photogram-profile\"><ion-header-bar class=\"bar-positive\"><button\n class=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\n{{ user.name }}</div></ion-header-bar><ion-content overflow-scroll=\"true\"><div class=\"profile-top\"><div class=\"row\">\n<div class=\"col-25\"><img class=\"avatar\" ng-src=\"{{ user.src }}\"></div><div class=\"col col-statics\"><div class=\"row\">\n<div class=\"col\"><photogram-loading loading=\"loadingPhotos\"></photogram-loading><span ng-if=\"!loadingPhotos\"\n class=\"text-center\">{{ user.qtdPhotos }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.POST\">Posts</h3></div><div\n class=\"col\"><photogram-loading loading=\"loadingFollowers\"></photogram-loading><span ng-if=\"!loadingFollowers\"\n class=\"text-center\">{{ user.qtdFollowers }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWER\"></h3></div><div\n class=\"col\"><photogram-loading loading=\"loadingFollowing\"></photogram-loading><span ng-if=\"!loadingFollowing\"\n class=\"text-center\">{{ user.qtdFollowing }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWING\">Followings</h3>\n</div></div><div class=\"row col-edit\"><div class=\"col\"><photogram-loading loading=\"loadingFollow\"></photogram-loading>\n<button ng-if=\"!loadingFollow\" ng-class=\"{\'button-unfollow\': user.follow, \'button-follow\': !user.follow}\"\n ng-click=\"follow()\" class=\"button\"><span ng-show=\"!user.follow\" translate>Follow</span> <span ng-show=\"user.follow\"\n translate>Following</span></button></div></div></div></div><div class=\"padding\"><span class=\"user-username\">\n{{ user.name }}</span><p class=\"user-status\">{{ user.status }}</p></div></div></ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/module/search/view/photogram.search.grid.html","<ion-view cache-view=\"false\"><ion-nav-title><ion-search class=\"search-wrapper-light\"\n placeholder=\"{{ \'SEARCH.FORM.INPUT\' | translate }}\" min-length=\"1\" model=\"GallerySearchGrid.data\"\n source=\"GallerySearchGrid.load\"></ion-search></ion-nav-title><ion-content class=\"photogram-search\"><ion-refresher\n ng-if=\"!vm.loading\" on-refresh=\"loadMore(true)\"></ion-refresher><photogram-loading loading=\"vm.loading\">\n</photogram-loading><photogram-photo-grid profile=\"true\" photogram=\"vm.data\" loading=\"vm.loading\">\n</photogram-photo-grid><div class=\"center-ico\" ng-if=\"vm.empty\"><i class=\"icon ion-ios-camera\"></i></div>\n<ion-infinite-scroll ng-if=\"!vm.loading && !vm.empty\" on-infinite=\"vm.loadMore()\"></ion-infinite-scroll></ion-content>\n</ion-view>");
$templateCache.put("app/module/photogram/module/search/view/photogram.search.map.html","<ion-view class=\"maps-view\"><ion-nav-title translate=\"SEARCH.TITLE_MAP\"></ion-nav-title><ion-nav-buttons side=\"right\">\n<button ng-click=\"vm.location()\" class=\"button button-icon icon ion-pinpoint\"></button></ion-nav-buttons><ion-content\n scroll=\"false\"><div class=\"map-container\"><ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\"><ui-gmap-marker\n idkey=\"0\" coords=\"vm.user\"></ui-gmap-marker><ui-gmap-marker click=\"vm.openModal(item)\" idkey=\"item.id\"\n coords=\"item.coords\" icon=\"item.icon\" ng-repeat=\"item in vm.data\"></ui-gmap-marker></ui-gmap-google-map></div>\n</ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/search/view/photogram.search.tabs.html","<ion-view title=\"Search\" class=\"view-tab\"><ion-nav-title><h1 class=\"title\" translate=\"SEARCH.TITLE\"></h1>\n</ion-nav-title><ion-tabs class=\"tabs-top tabs-positive tabs-striped\"><ion-tab\n title=\"{{\'SEARCH.TITLE_LIST\' | translate}}\" icon=\"ion-grid\" ui-sref=\"photogram.search.grid\"><ion-nav-view\n name=\"tabGrid\"></ion-nav-view></ion-tab><ion-tab title=\"{{\'SEARCH.TITLE_MAP\' | translate }}\" icon=\"ion-map\"\n ui-sref=\"photogram.search.map\"><ion-nav-view name=\"tabMap\"></ion-nav-view></ion-tab></ion-tabs></ion-view>");
$templateCache.put("app/module/photogram/module/share/view/photogram.post.modal.html","<ion-modal-view class=\"modal-post\"><ion-header-bar class=\"bar-dark\"><button\n class=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closePost()\"></button><div class=\"title\"\n translate=\"SHARE.TITLE\"></div><button class=\"button button-positive\" ng-click=\"submitPost(form)\"><i\n class=\"icon ion-arrow-right-b\"></i></button></ion-header-bar><ion-content><div id=\"image\"><img\n ng-src=\"{{form.photo}}\"></div><ul class=\"list\"><li class=\"item\"><textarea type=\"text\" ng-model=\"form.title\" autofocus\n placeholder=\"{{ \'SHARE.FORM.LEGEND\' | translate }}\"></textarea></li><li class=\"item item-input\"\n ng-show=\"form.geo.image\"><input type=\"text\" placeholder=\"{{ \'SHARE.FORM.LOCATION\' | translate }}\" ion-location\n location=\"form.geo\" ng-model=\"form.geo.resume\"></li><li class=\"item nopadding\" ng-show=\"form.geo.image\"><img\n ng-src=\"{{ form.geo.image }}\"></li></ul></ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/module/share/view/photogram.share.modal.html","<ion-modal-view class=\"modal-share\"><ion-header-bar class=\"bar-dark\"><button\n class=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeShare()\"></button><div class=\"title\"\n translate=\"SHARE.TITLE\"></div><button class=\"button button-positive\" ng-click=\"submitShare(form, social)\"><i\n class=\"icon ion-arrow-right-b\"></i></button></ion-header-bar><ion-content><div class=\"list\"><div\n class=\"item item-thumbnail-left\" href=\"#\"><img ng-src=\"{{form.photo}}\" id=\"image\"><textarea type=\"text\"\n ng-model=\"form.title\" placeholder=\"{{ \'SHARE.FORM.LEGEND\'|translate }}\"></textarea></div></div><ul class=\"list\"><li\n class=\"item item-input\"><input type=\"text\" placeholder=\"{{ \'SHARE.FORM.LOCATION\' | translate }}\" ion-location\n location=\"form.geo\" ng-model=\"form.geo.resume\"></li><div class=\"item nopadding\" ng-show=\"form.geo.image\"><img\n ng-src=\"{{ form.geo.image }}\"></div></ul><ul class=\"list\"><li class=\"item item-divider\"\n translate=\"SHARE.FORM.SHARE_IN\"></li><li class=\"item item-icon-left item-toggle\" ng-repeat=\"social in socials\"><i\n class=\"icon ion-social-{{ social.title | lowercase }}\"></i> {{ social.title }}<label class=\"toggle toggle-positive\">\n<input type=\"checkbox\" ng-model=\"social.checked\"><div class=\"track\"><div class=\"handle\"></div></div></label></li></ul>\n</ion-content></ion-modal-view>");
$templateCache.put("app/module/user/module/avatar/view/user.avatar.html","<ion-view title=\"{{ \'AVATAR.TITLE\' | translate }}\"><ion-nav-bar class=\"bar bar-positive bar-mop\" align-title=\"left\">\n</ion-nav-bar><ion-content class=\"view-avatar\"><div class=\"row step1\"><div class=\"col\"><img class=\"avatar\" user-avatar\n ng-src=\"{{ vm.form.src }}\"></div></div><div class=\"step2\"><label class=\"item item-input\"><i\n class=\"icon icon-envelope placeholder-icon\"></i> <input type=\"text\" ng-model=\"vm.form.email\" disabled=\"disabled\">\n</label><formly-form model=\"vm.form\" fields=\"vm.formFields\" form=\"vm.rForm\"></formly-form></div><div\n class=\"padding step3\"><button ng-click=\"vm.submitAvatar()\" class=\"button button-block button-positive\"\n translate=\"BUTTON.SUBMIT\"></button></div></ion-content></ion-view>");
$templateCache.put("app/module/user/module/friend/view/user.list.html","<ion-view view-title=\"UserList\" class=\"photogram-userlist\"><ion-header-bar class=\"bar-dark\"><h1 class=\"title\">\n{{ \'Follow Users\' | translate }}</h1><div class=\"buttons\"><button class=\"button button-positive\"\n ng-click=\"vm.submitFollow()\"><i class=\"icon ion-arrow-right-b\"></i></button></div></ion-header-bar><ion-content><div\n class=\"list\"><div class=\"item item-avatar item-animate1 item-button-right\" ng-repeat=\"item in vm.data\"><img\n ng-src=\"{{ item.src }}\"><h2>{{ item.name }}</h2><p>{{ item.status }}</p><button class=\"button\"\n ng-click=\"item.follow = !item.follow\" ng-class=\"item.follow ? \'button-positive\' : \'button-stable\'\"><i class=\"icon\"\n ng-class=\"item.follow? \'ion-thumbsup\' : \'ion-plus\'\"></i></button></div></div></ion-content></ion-view>");
$templateCache.put("app/module/user/module/merge/view/user.merge.html","<ion-view title=\"{{ \'Complete your Profile\' | translate }}\"><ion-nav-bar class=\"bar bar-positive bar-mop\"\n align-title=\"left\"></ion-nav-bar><ion-content class=\"view-avatar\"><div class=\"step1 padding\"><h5 translate>\nYour email is already associated with another account, please enter your password</h5></div><div class=\"row step1\"><div\n class=\"col\"><img class=\"avatar\" user-avatar ng-src=\"{{ vm.form.src }}\"></div></div><div class=\"list step2\"><label\n class=\"item item-input\"><i class=\"icon icon-user placeholder-icon\"></i> <input type=\"text\" ng-model=\"vm.form.name\"\n disabled=\"disabled\"></label><label class=\"item item-input\"><i class=\"icon icon-envelope placeholder-icon\"></i> <input\n type=\"text\" ng-model=\"vm.form.email\" disabled=\"disabled\"></label><label class=\"item item-input lock\"><input\n type=\"password\" placeholder=\"{{ \'Password\' | translate }}\" ng-model=\"vm.form.password\"></label></div><div\n class=\"padding step3\"><button ng-click=\"vm.submitvm(vm.form)\" ng-disabled=\"form.facebook\"\n class=\"button button-block button-facebook\"><i class=\"icon ion-social-facebook\"></i> <span translate>vm Facebook\n</span></button></div></ion-content></ion-view>");
$templateCache.put("app/module/user/module/profile/view/grid.html","<ion-view hide-nav-bar><ion-content><div class=\"item item-divider\" translate>Grid List</div><div\n class=\"center-ico animated fadeIn\" ng-if=\"vm.empty\"><i class=\"icon ion-camera\"></i><h1 translate=\"\">No Post</h1></div>\n<photogram-loading loading=\"vm.loading\"></photogram-loading><photogram-photo-grid photogram=\"vm.data\"\n loading=\"vm.loading\"></photogram-photo-grid></ion-content></ion-view>");
$templateCache.put("app/module/user/module/profile/view/list.html","<ion-view hide-nav-bar><ion-content><div class=\"item item-divider\" translate>Recent List</div><div\n class=\"center-ico animated fadeIn\" ng-if=\"vm.empty\"><i class=\"icon ion-camera\"></i><h1 translate=\"\">No Post</h1></div>\n<photogram-loading loading=\"vm.loading\"></photogram-loading><photogram-photo-list photogram=\"vm.data\"\n loading=\"vm.loading\"></photogram-photo-list></ion-content></ion-view>");
$templateCache.put("app/module/user/module/profile/view/profile.edit.modal.html","<ion-modal-view class=\"modal-profile\"><ion-header-bar class=\"bar-positive\"><button\n class=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\n{{ \'Edit Profile\' | translate }}</div></ion-header-bar><ion-content class=\"view-avatar\"><div class=\"row step1\"><div\n class=\"col\"><img class=\"avatar\" user-avatar ng-src=\"{{ form.src }}\"></div></div><div class=\"step2\"><label\n class=\"item item-input\"><i class=\"icon icon-envelope placeholder-icon\"></i> <input type=\"text\" ng-model=\"form.email\"\n disabled=\"disabled\"></label><formly-form model=\"form\" fields=\"formFields\" form=\"rForm\"></formly-form></div><div\n class=\"padding step3\"><button ng-click=\"linkFacebook()\" ng-disabled=\"form.facebook\"\n class=\"button button-block button-facebook\"><i class=\"icon ion-social-facebook\"></i> <span\n translate=\"PHOTOGRAM.BUTTON.FACEBOOK_LINK\"></span></button> <button class=\"button button-block button-positive\"\n ng-click=\"submitUpdateProfile()\" translate=\"PHOTOGRAM.BUTTON.SAVE_PROFILE\"></button></div></ion-content>\n</ion-modal-view>");
$templateCache.put("app/module/user/module/profile/view/profile.html","<ion-view cache-view=\"false\" class=\"photogram-profile\"><ion-nav-title><h1 class=\"title\">{{ vm.user.name }}</h1>\n</ion-nav-title><ion-nav-buttons side=\"right\"><button photogram-settings class=\"button button-icon icon ion-gear-a\">\n</button></ion-nav-buttons><ion-content class=\"animated fadeIn\"><div class=\"profile-top\"><div class=\"row\"><div\n class=\"col-25\"><img class=\"avatar\" user-avatar ng-src=\"{{ vm.user.src }}\"></div><div class=\"col col-statics\"><div\n class=\"row\"><div class=\"col\"><photogram-loading loading=\"loadingPhotos\"></photogram-loading><span\n ng-if=\"!loadingPhotos\" class=\"text-center\">{{ vm.user.qtdPhotos }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.POST\">\nPosts</h3></div><div class=\"col\"><photogram-loading loading=\"loadingFollowers\"></photogram-loading><span\n ng-if=\"!loadingFollowers\" class=\"text-center\">{{ vm.user.qtdFollowers }}</span><h3\n translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWER\"></h3></div><div class=\"col\"><photogram-loading\n loading=\"loadingFollowing\"></photogram-loading><span ng-if=\"!loadingFollowing\" class=\"text-center\">\n{{ vm.user.qtdFollowing }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWING\">Followings</h3></div></div><div\n class=\"row col-edit\"><div class=\"col\"><button profile-modal-edit class=\"button\"><div\n translate=\"PHOTOGRAM.BUTTON.PROFILE_EDIT\"></div></button></div></div></div></div><div class=\"padding\"><span\n class=\"user-username\">{{ vm.user.name }}</span><p class=\"user-status\">{{ vm.user.status }}</p></div></div><div\n class=\"item bar\"><div class=\"button-bar\"><button class=\"button button-icon icon ion-drag\"\n ng-class=\"{active: vm.tab.list}\" ng-click=\"vm.changeTab(\'list\')\"></button> <button\n class=\"button button-icon icon ion-grid\" ng-class=\"{active: vm.tab.grid}\" ng-click=\"vm.changeTab(\'grid\')\"></button> \n<button class=\"button button-icon icon ion-ios-location\"></button></div></div><div class=\"item item-divider\"\n translate=\"PHOTOGRAM.MSG.RECENT\">Recent</div><div class=\"center-ico animated fadeIn\" ng-if=\"vm.empty\"><i\n class=\"icon ion-camera\"></i><h1 translate=\"PHOTOGRAM.MSG.NO_POST\">No Post</h1></div><photogram-loading\n loading=\"vm.loading\"></photogram-loading><div class=\"tab\" ng-if=\"vm.tab.list\"><photogram-photo-list\n photogram=\"vm.data\" loading=\"vm.loading\"></photogram-photo-list></div><div class=\"tab\" ng-if=\"vm.tab.grid\">\n<photogram-photo-grid photogram=\"vm.data\" loading=\"vm.loading\"></photogram-photo-grid></div></ion-content></ion-view>");
$templateCache.put("app/module/user/module/profile/view/profile.modal.html","<ion-modal-view class=\"modal-profile photogram-profile\"><ion-header-bar class=\"bar-positive\"><button\n class=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\n{{ user.name }}</div></ion-header-bar><ion-content overflow-scroll=\"true\"><div class=\"profile-top\"><div class=\"row\">\n<div class=\"col-25\"><img class=\"avatar\" ng-src=\"{{ user.src }}\"></div><div class=\"col col-statics\"><div class=\"row\">\n<div class=\"col\"><photogram-loading loading=\"loadingPhotos\"></photogram-loading><span ng-if=\"!loadingPhotos\"\n class=\"text-center\">{{ user.qtdPhotos }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.POST\">Posts</h3></div><div\n class=\"col\"><photogram-loading loading=\"loadingFollowers\"></photogram-loading><span ng-if=\"!loadingFollowers\"\n class=\"text-center\">{{ user.qtdFollowers }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWER\"></h3></div><div\n class=\"col\"><photogram-loading loading=\"loadingFollowing\"></photogram-loading><span ng-if=\"!loadingFollowing\"\n class=\"text-center\">{{ user.qtdFollowing }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWING\">Followings</h3>\n</div></div><div class=\"row col-edit\"><div class=\"col\"><photogram-loading loading=\"loadingFollow\"></photogram-loading>\n<button ng-if=\"!loadingFollow\" ng-class=\"{\'button-unfollow\': user.follow, \'button-follow\': !user.follow}\"\n ng-click=\"follow()\" class=\"button\"><span ng-show=\"!user.follow\" translate>Follow</span> <span ng-show=\"user.follow\"\n translate>Following</span></button></div></div></div></div><div class=\"padding\"><span class=\"user-username\">\n{{ user.name }}</span><p class=\"user-status\">{{ user.status }}</p></div></div><div class=\"item bar\"><div\n class=\"button-bar\"><button class=\"button button-icon icon ion-drag\" ng-class=\"{active: tab.list}\"\n ng-click=\"changeTab(\'list\')\"></button> <button class=\"button button-icon icon ion-grid\" ng-class=\"{active: tab.grid}\"\n ng-click=\"changeTab(\'grid\')\"></button> <button class=\"button button-icon icon ion-ios-location\"></button></div></div>\n<div class=\"item item-divider\" translate>Recent</div><div class=\"center-ico animated fadeIn\" ng-if=\"empty\"><i\n class=\"icon ion-camera\"></i><h1 translate=\"\">No Post</h1></div><photogram-loading loading=\"loading\">\n</photogram-loading><div class=\"tab\" ng-if=\"tab.list\"><photogram-photo-list photogram=\"data\" user=\"false\"\n loading=\"loading\"></photogram-photo-list></div><div class=\"tab\" ng-if=\"tab.grid\"><photogram-photo-grid\n photogram=\"data\" user=\"false\" loading=\"loading\"></photogram-photo-grid></div></ion-content></ion-modal-view>");
$templateCache.put("app/module/user/module/profile/view/profile.photos.html","<ion-view title=\"{{\'Profile\' | translate}}\" class=\"profile\"><ion-content scroll=\"false\"><h2>Fotos</h2></ion-content>\n</ion-view>");
$templateCache.put("app/module/user/module/signin/view/user.signin.html","<ion-view class=\"view-login\" view-title=\"{{ \'USER.BUTTON.ENTER\' | translate }}\"><ion-content padding=\"false\"><div\n class=\"padding\"><formly-form model=\"vm.form\" fields=\"vm.formFields\" form=\"vm.rForm\"><button recovery-pass\n class=\"button button-right button-block button-clear\"><span></span></button> <button\n class=\"button button-block button-positive\" type=\"button\" ng-disabled=\"vm.rForm.$invalid\"\n ng-click=\"vm.submitLogin(vm.rForm, vm.form)\" translate=\"USER.BUTTON.ENTER\"></button></formly-form><div class=\"line\">\n<div class=\"left\"></div><span translate=\"USER.OR\">or</span><div class=\"right\"></div></div><button\n ng-click=\"vm.facebook()\" class=\"button button-block button-facebook\"><i class=\"icon ion-social-facebook\"></i> <span>\n{{\'USER.BUTTON.LOGIN_SOCIAL\'| translate}}Facebook</span></button></div></ion-content></ion-view>");
$templateCache.put("app/module/user/module/signup/view/user.signup.html","<ion-view view-title=\"{{ \'USER.BUTTON.SIGNUP\' | translate }}\"><ion-content padding=\"true\"><formly-form model=\"vm.form\"\n fields=\"vm.formFields\" form=\"vm.rForm\"><div class=\"padding\"><button class=\"button button-block button-positive\"\n type=\"button\" ng-disabled=\"rForm.$invalid\" ng-click=\"vm.submitRegister(vm.rForm, vm.form)\"\n translate=\"USER.BUTTON.NEXT\"></button></div></formly-form><div class=\"padding\"><p class=\"text-center\"><span\n translate=\"USER.TERM1\"></span> <b open-terms translate=\"USER.TERM2\"></b></p></div></ion-content></ion-view>");}]);
//# sourceMappingURL=../maps/scripts/app-010310a8d0.js.map
