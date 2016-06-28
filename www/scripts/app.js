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
      'ui.slider',
      'emoji'
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
      'ui.slider'
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
      'angular-svg-round-progressbar',
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
      'app.search',
      'app.discover',
      'app.swipe',
      'app.location',
      'app.chats',
      'app.setting',
      'app.likedme',
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
    .module('app.chats', []);

})();
(function () {
  'use strict';
  angular
    .module('app.direct', []);

})();
(function () {
  'use strict';
  angular
    .module('app.discover', []);

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
    .module('app.likedme', []);

})();
(function () {
  'use strict';
  angular
    .module('app.location', []);

})();
(function () {
  'use strict';
  angular
    .module('app.search', []);

})();
(function () {
  'use strict';
  angular
    .module('app.setting', []);

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
    .module('app.swipe', []);

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
    .run(startParse)
    .run(runIonic)
    .run(runFacebook)
    .config(configLanguage)
    .config(configFacebook)
    .config(configIonic);

  function startParse(AppConfig) {
    window.Parse.initialize(AppConfig.parse.appId, AppConfig.parse.javascriptKey);
    window.Parse.serverURL = AppConfig.parse.server;
  }

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
    var searchLang = _.some(AppConfig.locales, {code: userlangvar});
    if ( searchLang ) {
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

  function configFacebook($facebookProvider, AppConfig) {
    $facebookProvider.setAppId(AppConfig.facebook);
    $facebookProvider.setPermissions('id,name,email,user_likes,bio');
  }

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
        appId: 'myAppId',
//        javascriptKey: 'UbrjB5Imc0btrAyoSb83HmCAHmFWc77JEB9AA1to',
//        clientKey: 'yyEpMF6ImLOQR6QPBmnff95vQ7MrXgDnoNTWjMdk',
//        server: 'https://parseapi.back4app.com/'
         server: 'https://panda-tinder.herokuapp.com/parse/'
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
!function () {
    "use strict";
    var a = ["bowtie", "smile", "laughing", "blush", "smiley", "relaxed", "smirk", "heart_eyes", "kissing_heart", "kissing_closed_eyes", "flushed", "relieved", "satisfied", "grin", "wink", "stuck_out_tongue_winking_eye", "stuck_out_tongue_closed_eyes", "grinning", "kissing", "kissing_smiling_eyes", "stuck_out_tongue", "sleeping", "worried", "frowning", "anguished", "open_mouth", "grimacing", "confused", "hushed", "expressionless", "unamused", "sweat_smile", "sweat", "disappointed_relieved", "weary", "pensive", "disappointed", "confounded", "fearful", "cold_sweat", "persevere", "cry", "sob", "joy", "astonished", "scream", "neckbeard", "tired_face", "angry", "rage", "triumph", "sleepy", "yum", "mask", "sunglasses", "dizzy_face", "imp", "smiling_imp", "neutral_face", "no_mouth", "innocent", "alien", "yellow_heart", "blue_heart", "purple_heart", "heart", "green_heart", "broken_heart", "heartbeat", "heartpulse", "two_hearts", "revolving_hearts", "cupid", "sparkling_heart", "sparkles", "star", "star2", "dizzy", "boom", "collision", "anger", "exclamation", "question", "grey_exclamation", "grey_question", "zzz", "dash", "sweat_drops", "notes", "musical_note", "fire", "hankey", "poop", "shit", "\\+1", "thumbsup", "-1", "thumbsdown", "ok_hand", "punch", "facepunch", "fist", "v", "wave", "hand", "raised_hand", "open_hands", "point_up", "point_down", "point_left", "point_right", "raised_hands", "pray", "point_up_2", "clap", "muscle", "metal", "fu", "walking", "runner", "running", "couple", "family", "two_men_holding_hands", "two_women_holding_hands", "dancer", "dancers", "ok_woman", "no_good", "information_desk_person", "raising_hand", "bride_with_veil", "person_with_pouting_face", "person_frowning", "bow", "couplekiss", "couple_with_heart", "massage", "haircut", "nail_care", "boy", "girl", "woman", "man", "baby", "older_woman", "older_man", "person_with_blond_hair", "man_with_gua_pi_mao", "man_with_turban", "construction_worker", "cop", "angel", "princess", "smiley_cat", "smile_cat", "heart_eyes_cat", "kissing_cat", "smirk_cat", "scream_cat", "crying_cat_face", "joy_cat", "pouting_cat", "japanese_ogre", "japanese_goblin", "see_no_evil", "hear_no_evil", "speak_no_evil", "guardsman", "skull", "feet", "lips", "kiss", "droplet", "ear", "eyes", "nose", "tongue", "love_letter", "bust_in_silhouette", "busts_in_silhouette", "speech_balloon", "thought_balloon", "feelsgood", "finnadie", "goberserk", "godmode", "hurtrealbad", "rage1", "rage2", "rage3", "rage4", "suspect", "trollface", "sunny", "umbrella", "cloud", "snowflake", "snowman", "zap", "cyclone", "foggy", "ocean", "cat", "dog", "mouse", "hamster", "rabbit", "wolf", "frog", "tiger", "koala", "bear", "pig", "pig_nose", "cow", "boar", "monkey_face", "monkey", "horse", "racehorse", "camel", "sheep", "elephant", "panda_face", "snake", "bird", "baby_chick", "hatched_chick", "hatching_chick", "chicken", "penguin", "turtle", "bug", "honeybee", "ant", "beetle", "snail", "octopus", "tropical_fish", "fish", "whale", "whale2", "dolphin", "cow2", "ram", "rat", "water_buffalo", "tiger2", "rabbit2", "dragon", "goat", "rooster", "dog2", "pig2", "mouse2", "ox", "dragon_face", "blowfish", "crocodile", "dromedary_camel", "leopard", "cat2", "poodle", "paw_prints", "bouquet", "cherry_blossom", "tulip", "four_leaf_clover", "rose", "sunflower", "hibiscus", "maple_leaf", "leaves", "fallen_leaf", "herb", "mushroom", "cactus", "palm_tree", "evergreen_tree", "deciduous_tree", "chestnut", "seedling", "blossom", "ear_of_rice", "shell", "globe_with_meridians", "sun_with_face", "full_moon_with_face", "new_moon_with_face", "new_moon", "waxing_crescent_moon", "first_quarter_moon", "waxing_gibbous_moon", "full_moon", "waning_gibbous_moon", "last_quarter_moon", "waning_crescent_moon", "last_quarter_moon_with_face", "first_quarter_moon_with_face", "moon", "earth_africa", "earth_americas", "earth_asia", "volcano", "milky_way", "partly_sunny", "octocat", "squirrel", "bamboo", "gift_heart", "dolls", "school_satchel", "mortar_board", "flags", "fireworks", "sparkler", "wind_chime", "rice_scene", "jack_o_lantern", "ghost", "santa", "christmas_tree", "gift", "bell", "no_bell", "tanabata_tree", "tada", "confetti_ball", "balloon", "crystal_ball", "cd", "dvd", "floppy_disk", "camera", "video_camera", "movie_camera", "computer", "tv", "iphone", "phone", "telephone", "telephone_receiver", "pager", "fax", "minidisc", "vhs", "sound", "speaker", "mute", "loudspeaker", "mega", "hourglass", "hourglass_flowing_sand", "alarm_clock", "watch", "radio", "satellite", "loop", "mag", "mag_right", "unlock", "lock", "lock_with_ink_pen", "closed_lock_with_key", "key", "bulb", "flashlight", "high_brightness", "low_brightness", "electric_plug", "battery", "calling", "email", "mailbox", "postbox", "bath", "bathtub", "shower", "toilet", "wrench", "nut_and_bolt", "hammer", "seat", "moneybag", "yen", "dollar", "pound", "euro", "credit_card", "money_with_wings", "e-mail", "inbox_tray", "outbox_tray", "envelope", "incoming_envelope", "postal_horn", "mailbox_closed", "mailbox_with_mail", "mailbox_with_no_mail", "door", "smoking", "bomb", "gun", "hocho", "pill", "syringe", "page_facing_up", "page_with_curl", "bookmark_tabs", "bar_chart", "chart_with_upwards_trend", "chart_with_downwards_trend", "scroll", "clipboard", "calendar", "date", "card_index", "file_folder", "open_file_folder", "scissors", "pushpin", "paperclip", "black_nib", "pencil2", "straight_ruler", "triangular_ruler", "closed_book", "green_book", "blue_book", "orange_book", "notebook", "notebook_with_decorative_cover", "ledger", "books", "bookmark", "name_badge", "microscope", "telescope", "newspaper", "football", "basketball", "soccer", "baseball", "tennis", "8ball", "rugby_football", "bowling", "golf", "mountain_bicyclist", "bicyclist", "horse_racing", "snowboarder", "swimmer", "surfer", "ski", "spades", "hearts", "clubs", "diamonds", "gem", "ring", "trophy", "musical_score", "musical_keyboard", "violin", "space_invader", "video_game", "black_joker", "flower_playing_cards", "game_die", "dart", "mahjong", "clapper", "memo", "pencil", "book", "art", "microphone", "headphones", "trumpet", "saxophone", "guitar", "shoe", "sandal", "high_heel", "lipstick", "boot", "shirt", "tshirt", "necktie", "womans_clothes", "dress", "running_shirt_with_sash", "jeans", "kimono", "bikini", "ribbon", "tophat", "crown", "womans_hat", "mans_shoe", "closed_umbrella", "briefcase", "handbag", "pouch", "purse", "eyeglasses", "fishing_pole_and_fish", "coffee", "tea", "sake", "baby_bottle", "beer", "beers", "cocktail", "tropical_drink", "wine_glass", "fork_and_knife", "pizza", "hamburger", "fries", "poultry_leg", "meat_on_bone", "spaghetti", "curry", "fried_shrimp", "bento", "sushi", "fish_cake", "rice_ball", "rice_cracker", "rice", "ramen", "stew", "oden", "dango", "egg", "bread", "doughnut", "custard", "icecream", "ice_cream", "shaved_ice", "birthday", "cake", "cookie", "chocolate_bar", "candy", "lollipop", "honey_pot", "apple", "green_apple", "tangerine", "lemon", "cherries", "grapes", "watermelon", "strawberry", "peach", "melon", "banana", "pear", "pineapple", "sweet_potato", "eggplant", "tomato", "corn", "house", "house_with_garden", "school", "office", "post_office", "hospital", "bank", "convenience_store", "love_hotel", "hotel", "wedding", "church", "department_store", "european_post_office", "city_sunrise", "city_sunset", "japanese_castle", "european_castle", "tent", "factory", "tokyo_tower", "japan", "mount_fuji", "sunrise_over_mountains", "sunrise", "stars", "statue_of_liberty", "bridge_at_night", "carousel_horse", "rainbow", "ferris_wheel", "fountain", "roller_coaster", "ship", "speedboat", "boat", "sailboat", "rowboat", "anchor", "rocket", "airplane", "helicopter", "steam_locomotive", "tram", "mountain_railway", "bike", "aerial_tramway", "suspension_railway", "mountain_cableway", "tractor", "blue_car", "oncoming_automobile", "car", "red_car", "taxi", "oncoming_taxi", "articulated_lorry", "bus", "oncoming_bus", "rotating_light", "police_car", "oncoming_police_car", "fire_engine", "ambulance", "minibus", "truck", "train", "station", "train2", "bullettrain_front", "bullettrain_side", "light_rail", "monorail", "railway_car", "trolleybus", "ticket", "fuelpump", "vertical_traffic_light", "traffic_light", "warning", "construction", "beginner", "atm", "slot_machine", "busstop", "barber", "hotsprings", "checkered_flag", "crossed_flags", "izakaya_lantern", "moyai", "circus_tent", "performing_arts", "round_pushpin", "triangular_flag_on_post", "jp", "kr", "cn", "us", "fr", "es", "it", "ru", "gb", "uk", "de", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "keycap_ten", "1234", "zero", "hash", "symbols", "arrow_backward", "arrow_down", "arrow_forward", "arrow_left", "capital_abcd", "abcd", "abc", "arrow_lower_left", "arrow_lower_right", "arrow_right", "arrow_up", "arrow_upper_left", "arrow_upper_right", "arrow_double_down", "arrow_double_up", "arrow_down_small", "arrow_heading_down", "arrow_heading_up", "leftwards_arrow_with_hook", "arrow_right_hook", "left_right_arrow", "arrow_up_down", "arrow_up_small", "arrows_clockwise", "arrows_counterclockwise", "rewind", "fast_forward", "information_source", "ok", "twisted_rightwards_arrows", "repeat", "repeat_one", "new", "top", "up", "cool", "free", "ng", "cinema", "koko", "signal_strength", "u5272", "u5408", "u55b6", "u6307", "u6708", "u6709", "u6e80", "u7121", "u7533", "u7a7a", "u7981", "sa", "restroom", "mens", "womens", "baby_symbol", "no_smoking", "parking", "wheelchair", "metro", "baggage_claim", "accept", "wc", "potable_water", "put_litter_in_its_place", "secret", "congratulations", "m", "passport_control", "left_luggage", "customs", "ideograph_advantage", "cl", "sos", "id", "no_entry_sign", "underage", "no_mobile_phones", "do_not_litter", "non-potable_water", "no_bicycles", "no_pedestrians", "children_crossing", "no_entry", "eight_spoked_asterisk", "eight_pointed_black_star", "heart_decoration", "vs", "vibration_mode", "mobile_phone_off", "chart", "currency_exchange", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpius", "sagittarius", "capricorn", "aquarius", "pisces", "ophiuchus", "six_pointed_star", "negative_squared_cross_mark", "a", "b", "ab", "o2", "diamond_shape_with_a_dot_inside", "recycle", "end", "on", "soon", "clock1", "clock130", "clock10", "clock1030", "clock11", "clock1130", "clock12", "clock1230", "clock2", "clock230", "clock3", "clock330", "clock4", "clock430", "clock5", "clock530", "clock6", "clock630", "clock7", "clock730", "clock8", "clock830", "clock9", "clock930", "heavy_dollar_sign", "copyright", "registered", "tm", "x", "heavy_exclamation_mark", "bangbang", "interrobang", "o", "heavy_multiplication_x", "heavy_plus_sign", "heavy_minus_sign", "heavy_division_sign", "white_flower", "100", "heavy_check_mark", "ballot_box_with_check", "radio_button", "link", "curly_loop", "wavy_dash", "part_alternation_mark", "trident", "black_square", "white_square", "white_check_mark", "black_square_button", "white_square_button", "black_circle", "white_circle", "red_circle", "large_blue_circle", "large_blue_diamond", "large_orange_diamond", "small_blue_diamond", "small_orange_diamond", "small_red_triangle", "small_red_triangle_down", "shipit"],
        b = new RegExp(":(" + a.join("|") + "):", "g");
    angular.module("emoji", []).filter("emoji", function () {
        return function (a) {

            if(!a)
                return a

            a = a.replace(":)","<i class='emoji emoji_smile'></i>")
            a = a.replace(":(","<i class='emoji emoji_frowning'></i>")
            a = a.replace(";)","<i class='emoji emoji_wink'></i>")
            a = a.replace(";p","<i class='emoji emoji_stuck_out_tongue_winking_eye'></i>")
            a = a.replace(":p","<i class='emoji emoji_stuck_out_tongue_closed_eyes'></i>")

            //a = a.replace("","<i class='emoji emoji_'></i>")

            return a.replace(b, function (a, b) {
                return "<i class='emoji emoji_" + b + "'>" + b + "</i>"
            })
        }
    })
}();
// Generated by CoffeeScript 1.7.1
(function() {
  var MODULE_NAME, SLIDER_TAG, angularize, contain, events, gap, halfWidth, hide, module, offset, offsetLeft, pixelize, qualifiedDirectiveDefinition, roundStep, show, sliderDirective, width;

  MODULE_NAME = 'ui.slider';

  SLIDER_TAG = 'slider';

  angularize = function(element) {
    return angular.element(element);
  };

  pixelize = function(position) {
    return "" + position + "px";
  };

  hide = function(element) {
    return element.css({
      opacity: 0
    });
  };

  show = function(element) {
    return element.css({
      opacity: 1
    });
  };

  offset = function(element, position) {
    return element.css({
      left: position
    });
  };

  halfWidth = function(element) {
    return element[0].offsetWidth / 2;
  };

  offsetLeft = function(element) {
    return element[0].offsetLeft;
  };

  width = function(element) {
    return element[0].offsetWidth;
  };

  gap = function(element1, element2) {
    return offsetLeft(element2) - offsetLeft(element1) - width(element1);
  };

  contain = function(value) {
    if (isNaN(value)) {
      return value;
    }
    return Math.min(Math.max(0, value), 100);
  };

  roundStep = function(value, precision, step, floor) {
    var decimals, remainder, roundedValue, steppedValue;
    if (floor == null) {
      floor = 0;
    }
    if (step == null) {
      step = 1 / Math.pow(10, precision);
    }
    remainder = (value - floor) % step;
    steppedValue = remainder > (step / 2) ? value + step - remainder : value - remainder;
    decimals = Math.pow(10, precision);
    roundedValue = steppedValue * decimals / decimals;
    return parseFloat(roundedValue.toFixed(precision));
  };

  events = {
    mouse: {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    },
    touch: {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    }
  };

  sliderDirective = function($timeout) {
    return {
      restrict: 'E',
      scope: {
        floor: '@',
        ceiling: '@',
        values: '=?',
        step: '@',
        highlight: '@',
        precision: '@',
        buffer: '@',
        dragstop: '@',
        ngModel: '=?',
        ngModelLow: '=?',
        ngModelHigh: '=?',
        change: '&'
      },
      template: '<div class="bar"><div class="selection"></div></div>\n<div class="handle low"></div><div class="handle high"></div>\n<div class="bubble limit low">{{ values.length ? values[floor || 0] : floor }}</div>\n<div class="bubble limit high">{{ values.length ? values[ceiling || values.length - 1] : ceiling }}</div>\n<div class="bubble value low">{{ values.length ? values[local.ngModelLow || local.ngModel || 0] : local.ngModelLow || local.ngModel || 0 }}</div>\n<div class="bubble value high">{{ values.length ? values[local.ngModelHigh] : local.ngModelHigh }}</div>',
      compile: function(element, attributes) {
        var high, low, range, watchables;
        range = (attributes.ngModel == null) && (attributes.ngModelLow != null) && (attributes.ngModelHigh != null);
        low = range ? 'ngModelLow' : 'ngModel';
        high = 'ngModelHigh';
        watchables = ['floor', 'ceiling', 'values', low];
        if (range) {
          watchables.push(high);
        }
        return {
          post: function(scope, element, attributes) {
            var bar, barWidth, bound, ceilBub, dimensions, e, flrBub, handleHalfWidth, highBub, lowBub, maxOffset, maxPtr, maxValue, minOffset, minPtr, minValue, ngDocument, offsetRange, selection, updateDOM, upper, valueRange, w, _i, _j, _len, _len1, _ref, _ref1;
            _ref = (function() {
              var _i, _len, _ref, _results;
              _ref = element.children();
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                e = _ref[_i];
                _results.push(angularize(e));
              }
              return _results;
            })(), bar = _ref[0], minPtr = _ref[1], maxPtr = _ref[2], flrBub = _ref[3], ceilBub = _ref[4], lowBub = _ref[5], highBub = _ref[6];
            selection = angularize(bar.children()[0]);
            if (!range) {
              _ref1 = [maxPtr, highBub];
              for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                upper = _ref1[_i];
                upper.remove();
              }
              if (!attributes.highlight) {
                selection.remove();
              }
            }
            scope.local = {};
            scope.local[low] = scope[low];
            scope.local[high] = scope[high];
            bound = false;
            ngDocument = angularize(document);
            handleHalfWidth = barWidth = minOffset = maxOffset = minValue = maxValue = valueRange = offsetRange = void 0;
            dimensions = function() {
              var value, _j, _len1, _ref2;
              if (scope.step == null) {
                scope.step = 1;
              }
              if (scope.floor == null) {
                scope.floor = 0;
              }
              if (scope.precision == null) {
                scope.precision = 0;
              }
              if (!range) {
                scope.ngModelLow = scope.ngModel;
              }
              if ((_ref2 = scope.values) != null ? _ref2.length : void 0) {
                if (scope.ceiling == null) {
                  scope.ceiling = scope.values.length - 1;
                }
              }
              scope.local[low] = scope[low];
              scope.local[high] = scope[high];
              for (_j = 0, _len1 = watchables.length; _j < _len1; _j++) {
                value = watchables[_j];
                if (typeof value === 'number') {
                  scope[value] = roundStep(parseFloat(scope[value]), parseInt(scope.precision), parseFloat(scope.step), parseFloat(scope.floor));
                }
              }
              handleHalfWidth = halfWidth(minPtr);
              barWidth = width(bar);
              minOffset = 0;
              maxOffset = barWidth - width(minPtr);
              minValue = parseFloat(scope.floor);
              maxValue = parseFloat(scope.ceiling);
              valueRange = maxValue - minValue;
              return offsetRange = maxOffset - minOffset;
            };
            updateDOM = function() {
              var bind, percentOffset, percentValue, pixelsToOffset, setBindings, setPointers;
              dimensions();
              percentOffset = function(offset) {
                return contain(((offset - minOffset) / offsetRange) * 100);
              };
              percentValue = function(value) {
                return contain(((value - minValue) / valueRange) * 100);
              };
              pixelsToOffset = function(percent) {
                return pixelize(percent * offsetRange / 100);
              };
              setPointers = function() {
                var newHighValue, newLowValue;
                offset(ceilBub, pixelize(barWidth - width(ceilBub)));
                newLowValue = percentValue(scope.local[low]);
                offset(minPtr, pixelsToOffset(newLowValue));
                offset(lowBub, pixelize(offsetLeft(minPtr) - (halfWidth(lowBub)) + handleHalfWidth));
                offset(selection, pixelize(offsetLeft(minPtr) + handleHalfWidth));
                switch (true) {
                  case range:
                    newHighValue = percentValue(scope.local[high]);
                    offset(maxPtr, pixelsToOffset(newHighValue));
                    offset(highBub, pixelize(offsetLeft(maxPtr) - (halfWidth(highBub)) + handleHalfWidth));
                    return selection.css({
                      width: pixelsToOffset(newHighValue - newLowValue)
                    });
                  case attributes.highlight === 'right':
                    return selection.css({
                      width: pixelsToOffset(110 - newLowValue)
                    });
                  case attributes.highlight === 'left':
                    selection.css({
                      width: pixelsToOffset(newLowValue)
                    });
                    return offset(selection, 0);
                }
              };
              bind = function(handle, bubble, ref, events) {
                var changed, currentRef, onEnd, onMove, onStart;
                currentRef = ref;
                changed = false;
                onEnd = function() {
                  bubble.removeClass('active');
                  handle.removeClass('active');
                  ngDocument.unbind(events.move);
                  ngDocument.unbind(events.end);
                  if (scope.dragstop) {
                    scope[high] = scope.local[high];
                    scope[low] = scope.local[low];
                  }
                  currentRef = ref;
                  scope.$apply();
                  if (changed) {
                    return scope.$eval(scope.change);
                  }
                };
                onMove = function(event) {
                  var eventX, newOffset, newPercent, newValue, _ref2, _ref3, _ref4;
                  eventX = event.clientX || ((_ref2 = event.touches) != null ? _ref2[0].clientX : void 0) || ((_ref3 = event.originalEvent) != null ? (_ref4 = _ref3.changedTouches) != null ? _ref4[0].clientX : void 0 : void 0) || 0;
                  newOffset = eventX - element[0].getBoundingClientRect().left - handleHalfWidth;
                  newOffset = Math.max(Math.min(newOffset, maxOffset), minOffset);
                  newPercent = percentOffset(newOffset);
                  newValue = minValue + (valueRange * newPercent / 100.0);
                  if (range) {
                    switch (currentRef) {
                      case low:
                        if (newValue > scope.local[high]) {
                          currentRef = high;
                          minPtr.removeClass('active');
                          lowBub.removeClass('active');
                          maxPtr.addClass('active');
                          highBub.addClass('active');
                          setPointers();
                        } else if (scope.buffer > 0) {
                          newValue = Math.min(newValue, scope.local[high] - scope.buffer);
                        }
                        break;
                      case high:
                        if (newValue < scope.local[low]) {
                          currentRef = low;
                          maxPtr.removeClass('active');
                          highBub.removeClass('active');
                          minPtr.addClass('active');
                          lowBub.addClass('active');
                          setPointers();
                        } else if (scope.buffer > 0) {
                          newValue = Math.max(newValue, parseInt(scope.local[low]) + parseInt(scope.buffer));
                        }
                    }
                  }
                  newValue = roundStep(newValue, parseInt(scope.precision), parseFloat(scope.step), parseFloat(scope.floor));
                  changed = scope.dragstop && changed || scope.local[currentRef] !== newValue;
                  scope.local[currentRef] = newValue;
                  scope.$apply();
                  setPointers();
                  if (!scope.dragstop) {
                    scope[currentRef] = newValue;
                    if (changed) {
                      return scope.$eval(scope.change);
                    }
                  }
                };
                onStart = function(event) {
                  dimensions();
                  bubble.addClass('active');
                  handle.addClass('active');
                  setPointers();
                  event.stopPropagation();
                  event.preventDefault();
                  ngDocument.bind(events.move, onMove);
                  return ngDocument.bind(events.end, onEnd);
                };
                return handle.bind(events.start, onStart);
              };
              setBindings = function() {
                var method, _j, _len1, _ref2;
                _ref2 = ['touch', 'mouse'];
                for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                  method = _ref2[_j];
                  bind(minPtr, lowBub, low, events[method]);
                  bind(maxPtr, highBub, high, events[method]);
                }
                return bound = true;
              };
              if (!bound) {
                setBindings();
              }
              return setPointers();
            };
            $timeout(updateDOM);
            for (_j = 0, _len1 = watchables.length; _j < _len1; _j++) {
              w = watchables[_j];
              scope.$watch(w, updateDOM, true);
            }
            return window.addEventListener('resize', updateDOM);
          }
        };
      }
    };
  };

  qualifiedDirectiveDefinition = ['$timeout', sliderDirective];

  module = function(window, angular) {
    return angular.module(MODULE_NAME, []).directive(SLIDER_TAG, qualifiedDirectiveDefinition);
  };

  module(window, window.angular);

}).call(this);

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
        apply: '='
      },
      templateUrl: config.path + '/view/photo.filter.carousel.html',
      link: function ($scope) {
        $scope.filters = CamanJs.filters;
        $scope.applyFilter = $scope.apply;
      }
    };
  }

})();
(function () {
  'use strict';

  angular
    .module('ion-photo')
    .directive('photoFilter', photoFilter);

  function photoFilter(config, CamanJs) {
    return {
      restrict: 'E',
      scope: {
        image: '='
      },
      templateUrl: config.path + '/view/photo.filter.html',
      link: function ($scope, elem) {
        $scope.applyFilter = function (elem, effect) {
          $scope.loading = true;
          if (effect) {
            CamanJs
              .effect(elem, effect, true)
              .then(function (resp) {
                $scope.loading = false;
              });
          }
        };
      }
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
          .then(function (resp) {
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
      var template =
        '<ion-modal-view class="modal-share"> <ion-header-bar class="bar-dark"> <div class="title">{{ \'ION-PHOTO.SHARE\' | translate }}</div> <button class="button button-positive" ng-click="modal.hide()"> <i class="icon ion-arrow-right-b"></i> </button> </ion-header-bar> <ion-content ng-cloak> <div id="image"> <img ng-src="{{form.photo}}"> <div class="title">{{ form.title }}</div></div> <ul class="list"> <li class="padding"> <button ng-repeat="social in sociais" ng-click="share(form, social)"class="button button-block button-{{ social }}"><i class="icon ion-social-{{ social }}"></i>{{ social | uppercase }} </button> </li> </ul> </ion-content> </ion-modal-view>';

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
        var templateFilter =
          '<ion-modal-view class="modal-capture"><ion-header-bar class="bar-dark"><button class="button button-clear button-icon ion-ios-arrow-thin-left" ng-click="cropImage()"></button><div class="title">{{ \'ION-PHOTO.FILTERS\' | translate }}</div><button class="button button-icon " ng-click="submitFilter()"><i class="icon ion-ios-arrow-thin-right"></i></button></ion-header-bar><ion-content><photo-filter image="form.photo"></photo-filter></ion-content></ion-modal-view>';
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
    var user = $rootScope.currentUser;
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

        var currentUser = {};
        if (Parse.User.current()) {
            currentUser = Parse.User.current().attributes;
        }

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
                                // userComment.id = item.attributes.commentBy.id;
                                // obj.user = processImg(userComment);
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

                                console.log(liked);

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

                                            // comment.user.id = user.id;
                                            // comment.user = processImg(comment.user);
                                            commentsData.push(comment);
                                        });

                                        var obj = {
                                            id: item.id,
                                            item: item.attributes,
                                            created: item.createdAt,
                                            likes: likes,
                                            src: item.attributes.img.url(),
                                            comments: commentsData,
                                            user: item.attributes.user.attributes
                                        };


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
                                                                comments: commentsData,
                                                                user: item.attributes.user.attributes
                                                            };
                                                            // obj.user.id = item.attributes.user.id;
                                                            // obj.user = processImg(obj.user);

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
                    if (resp.length) {
                        var data = [];
                        resp.map(function (item) {
                            var obj = {
                                id: item.id,
                                user: item.attributes.user ? item.attributes.user.attributes : {name: 'Nulled',img: {_url: 'img/user.png'}},
                                img : item.attributes.gallery ? item.attributes.gallery.attributes.img : null,
                                action: item.attributes.action,
                                created: item.attributes.createdAt
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
        var user;

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

            console.log('device', cordova, device);

            if (Parse.User.current()) {
                loadProfile();
            } else {
                console.log('Not logged user, go intro');
                logout();
                $location.path(AppConfig.routes.login);
            }
        }


        function currentUser() {
            return user;
        }


        function loadProfile() {
            user = Parse.User.current().attributes;
            if (user) {
                user = processImg(user);
                $rootScope.currentUser = user;
                console.log('load profile', user);
                return user;
            } else {
                logout();
                return false;
            }
        }

        function processImg(obj) {
            console.log('process image', obj);
            if (obj.facebookimg) {
                obj.img._url = obj.facebookimg;
            }
            return obj;
        }

        function login(form) {
            var defer = $q.defer();
            Parse
                .User
                .logIn(form.email, form.password, {
                    success: function (resp) {
                        console.log(resp);
                        defer.resolve(loadProfile());
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
                                        });
                                    ;
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
            delete $rootScope.currentUser;
            //$window.location = '/#/intro';
            $state.go('intro', {
                clear: true
            });
            $ionicHistory.clearCache();
        }

        function update(form) {
            var defer = $q.defer();
            Loading.start();
            var currentUser = Parse.User.current();

            angular.forEach(form, function (value, key) {
                console.log(key, value);
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

            // console.log(currentUser);
            currentUser
                .save()
                .then(function (resp) {
                    console.log(resp);
                    loadProfile();
                    Loading.end();
                    defer.resolve(resp);
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
                                loadProfile();
                                Loading.end();
                                defer.resolve(resp);
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

            new Parse
                .Query('User')
                .equalTo('objectId', userId)
                .first()
                .then(function (resp) {
                    // console.log(resp);
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
      templateUrl: path + '/directives/photolist/photo.list.html',
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
        .fromTemplateUrl(path + '/module/feedback/view/feedback.modal.html', {
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
  var path = 'app/module/photogram/module/chats';

  angular
    .module('app.chats')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('photogram.chats', {
        url: '/chats',
        views: {
          tabHome: {
              controller: 'ChatsCtrl',
            controllerAs: 'vm',
            templateUrl: path + '/view/chats.html'
          }
        }
      });

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
  var path = 'app/module/photogram/module/discover';

  angular
    .module('app.discover')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('photogram.discover', {
        url: '/discover',
        views: {
          tabHome: {
            controller: 'DiscoverCtrl',
            templateUrl: path + '/view/discover.html'
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
  var path = 'app/module/photogram/module/likedme';

  angular
    .module('app.likedme')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('photogram.likedme', {
        url: '/likedme',
        views: {
          tabHome: {
            templateUrl: path + '/view/likedme.html'
          }
        }
      });

  }

})();
(function () {
  'use strict';
  var path = 'app/module/photogram/module/location';

  angular
    .module('app.location')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('photogram.location', {
        url: '/location',
        views: {
          tabHome: {
            templateUrl: path + '/view/location.html'
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
  var path = 'app/module/photogram/module/setting';

  angular
    .module('app.setting')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('photogram.setting', {
        url: '/setting',
        views: {
          tabHome: {
            templateUrl: path + '/view/setting.html'
          }
        }
      });

  }

})();
(function () {
    'use strict';

    angular
            .module('app.swipe')
            .config(configRoutes);

    var path = 'app/module/photogram/module/swipe';

    function configRoutes($stateProvider) {

        $stateProvider
                .state('photogram.swipe', {
                    url: '/swipe',
                    views: {
                        tabHome: {
                            controller: 'SwipeCtrl',
                            controllerAs: 'vm',
                            templateUrl: path + '/view/swipe.html'
                        }
                    }
                });

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
    .module('app.photogram')
    .controller('ChatsCtrl', ChatsController);
    
      function ChatsController( $rootScope, AppConfig, $state) { 
          
          var vm = this;
          
      }
});
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
    .module('app.photogram')
    .controller('DiscoverCtrl', DiscoverController);
    
      function DiscoverController( $rootScope, AppConfig, $state) { 
          
          var vm = this;
          
      }
});
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
        .find(form.photogramId)
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
    .module('app.photogram')
    .controller('LikedmeCtrl', LikedmeController);
    
      function LikedmeController( $rootScope, AppConfig, $state) { 
          
          var vm = this;
          
      }
});
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
    .module('app.photogram')
    .controller('LocationCtrl', LocationController);
    
      function LocationController( $rootScope, AppConfig, $state) { 
          
          var vm = this;
          
      }
});
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
   * @name UserMergeCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.photogram')
    .controller('SettingCtrl', SettingController);
    
      function SettingController( $rootScope, AppConfig, $state) { 
          
          var vm = this;
          
      }
});
(function () {
  'use strict';

  angular
    .module('app.photogram')
    .controller('SwipeCtrl', SwipeController);
    
      function SwipeController( $rootScope, AppConfig, $state, $translate, $scope, AppService, $ionicModal ) { 
          
          var vm = this;  
          var translations
        $translate(['MATCHES_LOAD_ERROR']).then(function (translationsResult) {
            translations = translationsResult
        })

        // when $scope.matches is null then we haven't done a search
        // when $scope.matches is an empty array then there are no new matches
        // TODO rename this to profiles as its IProfile and not IMatch objects
        $scope.matches = null

        var profile = $scope.profile = AppService.getProfile()
        $scope.profilePhoto = profile.photoUrl


        $scope.$on('$ionicView.beforeEnter', function () { $scope.unreadChats = AppService.getUnreadChatsCount() })
        $scope.$on('unreadChatsCountUpdated', function () { $scope.unreadChats = AppService.getUnreadChatsCount() })

        $scope.$on('$ionicView.enter', function() {
            if(profile.enabled) {
                // Check for any previously loaded matches
                $scope.matches = AppService.getPotentialMatches()
                // If we haven't searched yet or we are coming back to the screen and there isn't any results then search for more
                if(!$scope.matches || $scope.matches.length === 0)
                    $scope.searchAgain()
            }
        })

        $scope.$on('newPotentialMatches', function() { $scope.matches = AppService.getPotentialMatches() })

        $scope.searchAgain = function() {
            $scope.matches = null
            updatePotentialMatches()
        }


        var MIN_SEARCH_TIME = 2000
        function updatePotentialMatches() {

            var startTime = Date.now()
            AppService.updatePotentialMatches()
                .then(function(result) {
                    $log.log('CardsCtrl: found ' + result.length + ' potential matches')
                    result.map(function(profile) { profile.image = profile.photoUrl })
                    // Make the search screen show for at least a certain time so it doesn't flash quickly
                    var elapsed = Date.now() - startTime
                    if(elapsed < MIN_SEARCH_TIME)
                        $timeout(function() { $scope.matches = result}, MIN_SEARCH_TIME - elapsed)
                    else
                        $scope.matches = result
                }, function(error){
                    $log.log('updatePotentialMatches error ' + JSON.stringify(error))
                    $scope.matches = []
                    AppUtil.toastSimple(translations.MATCHES_LOAD_ERROR)
                }
            )
        }

        // Initialise the new match modal
        $ionicModal.fromTemplateUrl('newMatch.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {$scope.modal = modal })
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() { $scope.modal.remove() })

        $scope.$on('newMatch', function(event, match) {
            $log.log('CardsCtrl.newMatch ' + match.id)
            $scope.newMatch = match
            $scope.matchProfile = AppService.getProfileById(match.profileId)
            $scope.modal.show()
        })
        $scope.closeNewMatch = function(){$scope.modal.hide()}

        $scope.messageNewMatch = function() {
            $scope.modal.hide()
            $state.go('^.chat',{matchId : $scope.newMatch.id})
        }
        // a test function for viewing the new match modal screen
        $scope.openNewMatch = function() {
            $scope.newMatch = AppService.getMutualMatches()[0]
            $scope.modal.show()
        }

        $scope.enableDiscovery = function() {
            AppUtil.blockingCall(
                AppService.enableDiscovery(),
                function() {
                    $log.log('discovery enabled. updating matches...')
                    updatePotentialMatches()
                }
            )
        }

        $scope.viewDetails = function(card) {
            $log.log('view details ' + JSON.stringify(card))
            $scope.$parent.selectedCard = card
            $state.go('^.card-info')
        }

        $scope.accept = function() {
            $log.log('accept button')
            var matchLength = $scope.matches.length
            var topMatch = $scope.matches[matchLength-1]
            AppService.processMatch(topMatch, true)
            topMatch.accepted = true // this triggers the animation out
            $timeout(function(){ $scope.matches.pop()}, 340)
        }

        $scope.reject = function() {
            $log.log('reject button')
            var matchLength = $scope.matches.length
            var topMatch = $scope.matches[matchLength-1]
            AppService.processMatch(topMatch, false)
            topMatch.rejected = true // this triggers the animation out
            $timeout(function() {$scope.matches.pop()}, 340)
        }

        // matches are swiped off from the end of the $scope.matches array (i.e. popped)

        $scope.cardDestroyed = function(index){ $scope.matches.splice(index, 1)}

        $scope.cardTransitionLeft = function(match) {
            AppService.processMatch(match, false)
            if($scope.matches.length == 0) {
                // TODO auto-load more?
            }
        }
        $scope.cardTransitionRight = function(match) {
            AppService.processMatch(match, true)
            if($scope.matches.length == 0) {
                // TODO auto-load more?
            }
        }
          
      }
});
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
      var user = User.currentUser();
      vm.form = {
        name: user.name,
        email: user.email,
        status : user.status,
        gender: user.gender,
        img: user.img,
        username: user.username
      };
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
            });
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
    };
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
    vm.user = {};

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
          console.log(qtdPhotos);
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
    vm.form = $rootScope.currentUser;
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

        if (scope.user.id === $rootScope.currentUser.id) {
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
                    var user = User.currentUser();
                    scope.form = {
                        name: user.name,
                        email: user.email,
                        status: user.status,
                        img: user.img,
                        username: user.username,
                        gender: user.gender
                    };
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

            console.log(data);

            
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
angular.module("starter").run(["$templateCache", function($templateCache) {$templateCache.put("app/component/ion-photo/view/modal.share.photo.html","<ion-modal-view class=\"modal-share\"><ion-header-bar class=\"bar-dark\"><div class=\"title\">{{ ::\'Share\' | translate }}\n</div><button class=\"button button-positive\" ng-click=\"modal.hide()\"><i class=\"icon ion-arrow-right-b\"></i></button>\n</ion-header-bar><ion-content ng-cloak><div id=\"image\"><img ng-src=\"{{ ::form.photo}}\"><div class=\"title\">\n{{ ::form.title }}</div></div><ul class=\"list\"><li class=\"padding\"><button ng-repeat=\"social in sociais\" \nng-click=\"share(form, social)\" class=\"button button-block button-{{ social }}\"><i class=\"icon ion-social-{{ social }}\">\n</i> {{ ::social | uppercase }}</button></li></ul></ion-content></ion-modal-view>");
$templateCache.put("app/component/ion-photo/view/photo.filter.carousel.html","<div class=\"wide-as-needed\"><a ng-repeat=\"filter in filters\" ng-click=\"applyFilter(\'image\', filter)\"><div caman \nimage=\"image\" name=\"filter\" filter=\"filter\" class=\"image\" loading=\"loading\" ng-class=\"{disabled: loading}\"></div>\n<ion-spinner ng-if=\"loading\"></ion-spinner><p>{{ ::filter }}</p></a></div>");
$templateCache.put("app/component/ion-photo/view/photo.filter.html","<div class=\"capture-photo\"><div caman filter=\"\'normal\'\" loading=\"loadingMaster\" class=\"image\" \nng-class=\"{disabled: loadingMaster}\" name=\"\'image\'\" image=\"image\"></div><ion-spinner ng-show=\"loadingMaster\">\n</ion-spinner></div><photo-filter-carousel apply=\"applyFilter\" image=\"image\"></photo-filter-carousel>");
$templateCache.put("app/module/intro/view/intro.html","<ion-view class=\"view-intro\" can-swipe-back=\"false\"><ion-content scroll=\"false\"><div class=\"intro-slider\">\n<ion-slide-box active-slide=\"slideIndex\" show-pager=\"true\" on-slide-changed=\"vm.slideChanged($index)\"><ion-slide \nng-repeat=\"item in vm.slides\"><div class=\"content\" ng-if=\"$index == vm.slideIndex\"><span class=\"top\"><h2>\n{{ ::item.top }}</h2></span><div class=\"phone {{ ::vm.device }}\"><img ng-src=\"{{ ::item.img }}\"></div></div>\n</ion-slide><ion-slide><div class=\"content\" ng-if=\"vm.slides.length == vm.slideIndex\"><div class=\"last\"><div \nclass=\"logo2 step1\"><img src=\"img/icon.png\"> <span class=\"icon2-logo\"></span></div><button \nclass=\"button button-block button-clear step2\" ui-sref=\"user.signin\" translate=\"INTRO.BUTTON.ENTER\"></button></div>\n</div></ion-slide></ion-slide-box></div><button class=\"button button-positive button-fab left\" ng-if=\"vm.slideIndex\" \nng-click=\"vm.previous()\"><i class=\"icon ion-ios-arrow-left\"></i></button> <button \nclass=\"button button-positive button-fab right\" ng-hide=\"vm.slideIndex === vm.slides.length\" ng-click=\"vm.next()\"><i \nclass=\"icon ion-ios-arrow-right\"></i></button></ion-content></ion-view>");
$templateCache.put("app/module/loading/view/loading.html","<ion-view class=\"view-loading\"><ion-content scroll=\"false\"><img src=\"img/icon.png\"></ion-content></ion-view>");
$templateCache.put("app/module/user/view/user.tabs.html","<ion-view class=\"view-login\" view-title=\"{{ \'USER.BUTTON.SIGNIN\' | translate }}\"><ion-content padding=\"false\" \nscroll=\"false\"><div class=\"user-head padding text-center step1\"><div class=\"logo2\"><img src=\"img/icon.png\"> <span \nclass=\"icon2-logo\"></span></div><h2 class=\"step2\" translate=\"USER.INTRO\"></h2><ion-tabs class=\"tabs-positive tabs-top\">\n<ion-tab title=\"{{ ::\'USER.BUTTON.SIGNIN\' | translate }}\" ui-sref=\"user.signin\"></ion-tab><ion-tab \ntitle=\"{{ ::\'USER.BUTTON.SIGNUP\' | translate }}\" ui-sref=\"user.signup\"></ion-tab></ion-tabs></div><ion-nav-view \nclass=\"step3\" name=\"tabLogin\"></ion-nav-view></ion-content></ion-view>");
$templateCache.put("app/module/photogram/view/photogram.tabs.html","<ion-side-menus enable-menu-with-back-views=\"false\"><ion-side-menu-content><ion-nav-bar \nclass=\"bar bar-positive bar-mop\" align-title=\"left\"><ion-nav-back-button></ion-nav-back-button><ion-nav-buttons \nside=\"left\"><button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\"></button></ion-nav-buttons>\n</ion-nav-bar><ion-tabs class=\"tabs-dark tabs-photogram\"><ion-tab title=\"{{ ::\'PHOTOGRAM.TITLE.HOME\' | translate }}\" \nicon=\"ion-android-home\" ui-sref=\"photogram.home\"><ion-nav-view name=\"tabHome\"></ion-nav-view></ion-tab><ion-tab \ntitle=\"{{ ::\'PHOTOGRAM.TITLE.SEARCH\' | translate }}\" icon=\"ion-search\" ui-sref=\"photogram.search.grid\"><ion-nav-view \nname=\"tabSearch\"></ion-nav-view></ion-tab><ion-tab title=\"{{ ::\'PHOTOGRAM.TITLE.SHARE\' | translate }}\" \nicon=\"ion-camera\" class=\"middle\" ng-click=\"vm.postPhoto()\"><ion-nav-view name=\"tabCapture\"></ion-nav-view></ion-tab>\n<ion-tab title=\"{{ ::\'PHOTOGRAM.TITLE.ACTIVITY\' | translate }}\" icon=\"ion-chatbubble\" ui-sref=\"photogram.activity\">\n<ion-nav-view name=\"tabActivity\"></ion-nav-view></ion-tab><ion-tab \ntitle=\"{{ ::\'PHOTOGRAM.TITLE.PROFILE\' | translate }}\" icon=\"ion-person\" ui-sref=\"photogram.account\"><ion-nav-view \nname=\"tabProfile\"></ion-nav-view></ion-tab></ion-tabs></ion-side-menu-content><ion-side-menu side=\"left\">\n<ion-header-bar class=\"bar-positive\"><h1 class=\"title\">Menu</h1></ion-header-bar><ion-content><ul class=\"list\"><a \nui-sref=\"photogram.account\" class=\"item item-icon-left\" menu-close><i class=\"icon ion-person\"></i>\n {{\'MENU.PROFILE\' | translate}}</a> <a ui-sref=\"photogram.swipe\" class=\"item item-icon-left\" menu-close><i \nclass=\"icon ion-person-stalker\"></i> {{\'MENU.MATCHES\' | translate}}</a> <a ui-sref=\"photogram.chats\" \nclass=\"item item-icon-left\" menu-close><i class=\"icon ion-ios-chatbubble-outline\"></i> {{\'MENU.CHAT\' | translate}} \n<span ng-show=\"unreadChats > 0\" class=\"badge badge-assertive nav-icon-badge\">{{unreadChats}}</span></a> <a \nui-sref=\"photogram.likedme\" class=\"item item-icon-left\" menu-close><i class=\"icon ion-ios-checkmark\"></i>\n {{\'MENU.LIKED_ME\' | translate}}</a> <a ui-sref=\"photogram.discover\" class=\"item item-icon-left\" menu-close><i \nclass=\"icon ion-ios-search-strong\"></i> {{\'MENU.DISCOVERY\' | translate}}</a> <a ui-sref=\"photogram.location\" \nclass=\"item item-icon-left\" menu-close><i class=\"icon ion-ios-location-outline\"></i> {{\'MENU.LOCATION\' | translate}}\n</a> <a ui-sref=\"photogram.setting\" class=\"item item-icon-left\" menu-close><i class=\"icon ion-ios-gear\"></i>\n {{\'MENU.SETTINGS\' | translate}}</a> <a ui-sref=\"photogram.contact\" class=\"item item-icon-left\" menu-close><i \nclass=\"icon ion-ios-email\"></i> {{\'MENU.CONTACT\' | translate}}</a></ul></ion-content></ion-side-menu></ion-side-menus>");
$templateCache.put("app/module/photogram/view/photogram.view.html","<ion-view view-title=\"{{ \'Gallery preview\' | translate }}\"><ion-content class=\"bg-content\"><ion-list class=\"card\" \nng-if=\"!GalleryPreview.data.images.length\"><ion-item class=\"text-center\">No photos</ion-item></ion-list><div \nclass=\"row\"><div class=\"col\" ng-repeat=\"picture in GalleryPreview.data.images\" \nui-sref=\"app.gallerypreview({id: picture.id})\"><div class=\"card\"><div class=\"item item-image\"><img \nng-src=\"{{picture.image._url}}\"></div></div></div></div></ion-content></ion-view>");
$templateCache.put("app/module/photogram/directives/comment/photogram.comment.directive.html","<ion-modal-view class=\"modal-comment\"><ion-header-bar class=\"bar-dark\"><button \nclass=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\n<span translate=\"PHOTOGRAM.COMMENT.TITLE\"></span>({{ ::comments.length }})</div></ion-header-bar><ion-content>\n<photogram-loading loading=\"loading\" icon=\"android\"></photogram-loading><ion-list class=\"list\" \nng-show=\"comments.length\" can-swipe=\"true\"><ion-item ng-repeat=\"item in comments\" class=\"item item-avatar\"><img \nng-src=\"{{ ::item.user.img._url }}\"><div class=\"row\"><h2>{{ ::item.user.name }}</h2><div>{{ ::item.text }}</div></div>\n<div class=\"row\"><p>{{ ::item.created | amTimeAgo }}</p></div><div ng-if=\"item.user.id === currentUser.id\">\n<ion-option-button class=\"button-info\" ng-click=\"editComment(item)\" translate=\"PHOTOGRAM.BUTTON.EDIT\">Edit\n</ion-option-button><ion-option-button class=\"button-assertive\" ng-click=\"deleteComment(item)\" \ntranslate=\"PHOTOGRAM.BUTTON.REMOVE\">Remove</ion-option-button></div></ion-item></ion-list><div class=\"center-ico\" \nng-if=\"nocomments\"><i class=\"icon ion-ios-chatbubble-outline\"></i><h1 translate=\"PHOTOGRAM.COMMENT.NO_COMMENTS\">\nNo Comments</h1></div></ion-content><ion-footer class=\"step2\"><div class=\"form\"><formly-form model=\"form\" \nfields=\"formFields\" form=\"rForm\"><button class=\"button button-positive\" type=\"button\" \nng-click=\"submitComment(rForm, form)\"><i class=\"icon ion-arrow-right-b\"></i></button></formly-form></div></ion-footer>\n</ion-modal-view>");
$templateCache.put("app/module/photogram/directives/follow/photogram.follow.modal.html","<ion-modal-view class=\"modal-profile photogram-profile\"><ion-header-bar class=\"bar-positive\"><button \nclass=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\nFollow Users</div></ion-header-bar><ion-content><div class=\"list\"><div class=\"item item-avatar item-button-right\" \nng-repeat=\"item in data\"><img ng-src=\"{{ ::item.src }}\"><h2>{{ ::item.name }}</h2><p>{{ ::item.status }}</p><button \nclass=\"button\" ng-click=\"item.follow = !item.follow\" ng-class=\"item.follow ? \'button-positive\' : \'button-stable\'\"><i \nclass=\"icon\" ng-class=\"item.follow? \'ion-thumbsup\' : \'ion-plus\'\"></i></button></div></div></ion-content>\n</ion-modal-view>");
$templateCache.put("app/module/photogram/directives/like/photogram.like.directive.html","<ion-modal-view class=\"modal-comment\"><ion-header-bar class=\"bar-dark\"><button \nclass=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\n{{ ::\'Likes\' | translate }} ({{ ::likes.length }})</div></ion-header-bar><ion-content><div class=\"list step1\"><div \nng-repeat=\"item in likes\" class=\"item item-avatar item-button-right\"><img ng-src=\"{{ ::item.user.img }}\"><h2>\n{{ ::item.user.name }}</h2><div>{{ ::item.text }}</div><p>{{ ::item.created | amTimeAgo }}</p><button \nclass=\"button button-positive button-outline\"><i class=\"icon ion-ios-plus-empty\"></i> {{ ::\'Follow\' }}</button></div>\n</div></ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/directives/photogrid/photogram.photos.grid.html","<div class=\"row\" ng-if=\"$index % 3 === 0\" ng-repeat=\"image in data\"><div class=\"col col-33 item-animate1\" \nng-if=\"$index < data.length\"><img ng-if=\"profile\" profile-modal user=\"data[$index].user\" \nng-src=\"{{ ::data[$index].src}}\" width=\"100%\"> <img ng-if=\"!profile\" ng-src=\"{{ ::data[$index].src}}\" width=\"100%\">\n</div><div class=\"col col-33 item-animate1\" ng-if=\"$index + 1 < data.length\"><img ng-if=\"profile\" profile-modal \nuser=\"data[$index + 1].user\" ng-src=\"{{ ::data[$index + 1].src}}\" width=\"100%\"> <img ng-if=\"!profile\" \nng-src=\"{{ ::data[$index + 1].src}}\" width=\"100%\"></div><div class=\"col col-33 item-animate1\" \nng-if=\"$index + 2 < data.length\"><img ng-if=\"profile\" profile-modal user=\"data[$index + 2].user\" \nng-src=\"{{ ::data[$index + 2].src}}\" width=\"100%\"> <img ng-if=\"!profile\" ng-src=\"{{ ::data[$index + 2].src}}\" \nwidth=\"100%\"></div></div>");
$templateCache.put("app/module/photogram/directives/photolist/photo.list.html","<div class=\"list card animated fadeIn\" ng-repeat=\"gallery in data \"><div class=\"item item-avatar\" ion-affix \ndata-affix-within-parent-with-class=\"card\" profile-modal user=\"gallery.user\"><img ng-if=\"profile\" \nprofile=\"{{ ::gallery.user.id }}\" ng-src=\"{{ ::gallery.user.img._url}}\"> <img ng-src=\"{{ ::gallery.user.img._url}}\">\n<h2>{{ ::gallery.user.name}}</h2><p>{{ :: gallery.user.status }}</p><span>{{ ::gallery.created | amTimeAgo}}</span>\n</div><div class=\"item item-body\" on-double-tap=\"vm.like(gallery)\" ng-model=\"gallery\"><div \nclass=\"icon ion-ios-heart heart\" ng-class=\"(gallery.item.liked) ? \'happy\' : \'broken\' \"></div><i class=\"icon\" \nng-if=\"like\"></i> <img cache-src=\"{{ ::gallery.src}}\" id=\"{{ ::gallery.id}}\"></div><div class=\"item item-buttons\"><div \nclass=\"row\"><div class=\"col col-75\"><ion-spinner ng-show=\"gallery.item.likeProgress\"></ion-spinner><button \nphotogram-like ng-model=\"gallery\" ng-if=\"!gallery.item.likeProgress\" \nng-class=\"(gallery.item.liked) ? \'ion-ios-heart\' : \'ion-ios-heart-outline\' \" \nclass=\"button-clear button-icon button-heart\"></button> <button photogram-comment ng-model=\"gallery\" \nclass=\"button-clear button-icon ion-ios-chatbubble-outline\"></button> <button ng-click=\"vm.action(gallery)\" \nphotogram=\"{{ :: gallery.id }}\" class=\"button-clear button-icon ion-android-share\"></button></div><div \nclass=\"col text-right\"><button ng-click=\"vm.action(gallery)\" photogram=\"{{ :: gallery.id }}\" \nclass=\"button-clear button-icon ion-android-more-vertical\"></button></div></div></div><div class=\"padding\"><span \nclass=\"likes\" photogram-like photogram=\"{{ :: gallery }}\"><i class=\"icon ion-ios-heart\"></i> <span \nng-if=\"!gallery.item.likeProgress\">{{ :: gallery.item.qtdLike }}</span> <span translate=\"PHOTOGRAM.LIKES\"></span>\n</span><div class=\"list-comments\"><div class=\"comment-item\" profile-modal user=\"gallery.user\"><span class=\"username\">\n{{ :: gallery.user.name }}</span> <span class=\"comment\">{{ :: gallery.item.title }}</span></div><div \nclass=\"comment-item\" profile-modal user=\"item.user\" ng-repeat=\"item in gallery.comments\"><span class=\"username\">\n{{ :: item.user.name }}</span> <span class=\"comment\">{{ :: item.text }}</span></div></div><button \nclass=\"button button-block button-clear button-comment\" photogram-comment ng-model=\"gallery\"><span \ntranslate=\"PHOTOGRAM.BUTTON.COMMENT_ADD\"></span></button></div></div>");
$templateCache.put("app/module/photogram/directives/settings/photogram.settings.modal.html","<ion-modal-view class=\"modal-profile\"><ion-header-bar class=\"bar-dark\"><button \nclass=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\" \ntranslate=\"PHOTOGRAM.SETTING.TITLE\"></div></ion-header-bar><ion-content class=\"animated fadeIn\"><div class=\"list\">\n<label class=\"item item-input item-select\"><div class=\"input-label\" style=\"z-index: 2\"><h2 \ntranslate=\"PHOTOGRAM.BUTTON.CHANGE_LANGUAGE\"></h2></div><select ng-model=\"language\" \nng-change=\"changeLanguage(language)\"><option ng-repeat=\"item in languages\" value=\"{{ ::item.code}}\" \ntranslate=\"{{ ::item.translation}}\"></option></select></label><ion-toggle class=\"toggle-positive\" ng-model=\"form.push\">\n<h3><small translate=\"PHOTOGRAM.SETTING.NOTIFICATION\"></small></h3><p ng-if=\"!setting_preview\" \ntranslate=\"PHOTOGRAM.BUTTON.OFF\"></p><p ng-if=\"setting_preview\" translate=\"PHOTOGRAM.BUTTON.ON\"></p></ion-toggle>\n<ion-item class=\"item-icon-right\" \nng-click=\"openLink(\'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FAW4JZS7KJM5S\')\"><h3><small \ntranslate=\"PHOTOGRAM.BUTTON.BUY\"></small></h3><i class=\"icon ion-ios-arrow-right\"></i></ion-item><ion-item \nclass=\"item-icon-right\" ng-click=\"openLink(\'http://photogramapp.com\')\"><h3><small translate=\"PHOTOGRAM.BUTTON.HELP\">\n</small></h3><i class=\"icon ion-ios-arrow-right\"></i></ion-item><ion-item class=\"item-icon-right\" \nng-click=\"openLink(\'http://photogramapp.com\')\"><h3><small translate=\"PHOTOGRAM.BUTTON.TERM_PRIVACY\"></small></h3><i \nclass=\"icon ion-ios-arrow-right\"></i></ion-item><ion-item class=\"item-icon-right\" \nng-click=\"openLink(\'http://photogramapp.com\')\"><h3><small translate=\"PHOTOGRAM.BUTTON.TERM_SERVICE\">Terms of Service\n</small></h3><i class=\"icon ion-ios-arrow-right\"></i></ion-item><ion-item class=\"item-icon-right\" ng-click=\"show();\">\n<h3><small translate=\"PHOTOGRAM.BUTTON.REPORT\">Report a Problem</small></h3><i class=\"icon ion-ios-arrow-right\"></i>\n</ion-item></div><div class=\"padding\"><button ng-click=\"link(\'logout\')\" class=\"button button-block button-positive\" \ntranslat=\"USER.BUTTON.LOGOUT\">Logout</button></div></ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/module/activity/view/photogram.activity.html","<ion-view cache-view=\"false\" class=\"photogram-activity\"><ion-nav-title><h1 class=\"title\" translate=\"ACTIVITY.TITLE\">\n</h1></ion-nav-title><ion-content><photogram-loading loading=\"vm.loading\" icon=\"android\"></photogram-loading><div \nclass=\"list\"><div class=\"item item-avatar item-animate1\" ng-repeat=\"item in vm.data\"><img \nng-src=\"{{ ::item.user.img._url || \'img/user.png\' }}\"><h2>{{ ::item.user.name }}</h2><div class=\"text\">\n{{ ::item.action | translate }}</div><p>{{ ::item.created | amTimeAgo }}</p><div class=\"img-right\" ng-if=\"item.img\">\n<img ng-src=\"{{ ::item.img._url }}\"></div></div></div><ion-infinite-scroll ng-if=\"!vm.loading && !vm.empty\" \non-infinite=\"vm.load()\"></ion-infinite-scroll></ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/feedback/view/feedback.modal.html","<ion-modal-view class=\"modal-profile\"><ion-header-bar class=\"bar-dark\"><button \nclass=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\" \ntranslate=\"FEEDBACK.TITLE\"></div><button class=\"button button-positive\" ng-click=\"submitFeedback()\"><i \nclass=\"icon ion-arrow-right-b\"></i></button></ion-header-bar><ion-content><formly-form model=\"form\" form=\"rForm\" \nfields=\"formFields\"></formly-form></ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/module/home/view/home.html","<ion-view class=\"view-home\"><ion-nav-title><span class=\"icon2-logo\"></span></ion-nav-title><ion-nav-buttons \nside=\"right\"><button class=\"button button-icon ion-ios-filing\" ui-sref=\"photogram.direct\"></button></ion-nav-buttons>\n<ion-content><ion-refresher ng-if=\"!vm.loading\" on-refresh=\"loadMore(true)\"></ion-refresher><photogram-loading \nloading=\"vm.loading\"></photogram-loading><photogram-photo-list profile=\"true\" photogram=\"vm.data\" loading=\"vm.loading\">\n</photogram-photo-list><div class=\"center-ico\" ng-if=\"vm.empty\"><i class=\"icon ion-ios-camera\"></i><h1 \ntranslate=\"HOME.TITLE.NO_PHOTO\"></h1></div><ion-infinite-scroll ng-if=\"!vm.loading && !vm.empty\" \non-infinite=\"vm.loadMore()\"></ion-infinite-scroll></ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/direct/view/direct.home.html","<ion-view><ion-nav-title translate=\"DIRECT.TITLE\"></ion-nav-title><ion-nav-buttons side=\"right\"><button \nclass=\"button button-icon ion-ios-plus-empty\" ui-sref=\"photogram.direct\"></button></ion-nav-buttons><ion-content>\n<ion-list><ion-item class=\"item-avatar\" ng-repeat=\"item in vm.data\" ui-sref=\"photogram.message({channelId: item.id})\">\n<img ng-src=\"{{item.user.src}}\" alt=\"\"><h2>{{ item.user.name}}</h2><p>{{ item.msg }}</p></ion-item></ion-list>\n</ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/direct/view/direct.messages.html","<ion-view id=\"userMessagesView\" cache-view=\"false\" view-title=\"Messages\"><div class=\"loader-center\" \nng-if=\"!vm.doneLoading\"><div class=\"loader\"><i class=\"icon ion-loading-c\"></i></div></div><ion-content \nhas-bouncing=\"true\" class=\"has-header has-footer\" delegate-handle=\"userMessageScroll\"><ion-refresher \npulling-text=\"{{\'DIRECT.BUTTON.PULL\' | TRANSLATE}}\" on-refresh=\"vm.doRefresh()\"></ion-refresher><div \nng-repeat=\"message in vm.data.messages\" class=\"message-wrapper\" on-hold=\"onMessageHold($event, $index, message)\"><div \nng-if=\"vm.user.id === message.user.id\"><img class=\"profile-pic right\" ng-src=\"{{message.user.src}}\"><div \nclass=\"chat-bubble right\"><div class=\"message\" ng-bind-html=\"message.body | nl2br\" autolinker></div><div \nclass=\"message-detail\"><span class=\"bold\">{{message.user.name}}</span>, <span am-time-ago=\"message.date\"></span></div>\n</div></div><div ng-if=\"vm.user.id !== message.user.id\"><img class=\"profile-pic left\" ng-src=\"{{message.user.src}}\">\n<div class=\"chat-bubble left\"><div class=\"message\" ng-bind-html=\"message.body | nl2br\" autolinker></div><div \nclass=\"message-detail\"><span class=\"bold\">{{message.user.name}}</span>, <span am-time-ago=\"message.date\"></span></div>\n</div></div><div class=\"cf\"></div></div></ion-content><form name=\"sendMessageForm\" \nng-submit=\"vm.sendMessage(sendMessageForm, vm.model)\" novalidate><ion-footer-bar \nclass=\"bar-stable item-input-inset message-footer\" keyboard-attach><label class=\"item-input-wrapper\"><textarea \nng-model=\"vm.model.text\" placeholder=\"{{ \'DIRECT.FORM.PLACEHOLDER\' | TRANSLATE}}\" required minlength=\"1\" \nmaxlength=\"1500\" msd-elastic></textarea></label><div class=\"footer-btn-wrap\"><button \nclass=\"button button-icon icon ion-android-send footer-btn\" type=\"submit\"></button></div></ion-footer-bar></form>\n</ion-view>");
$templateCache.put("app/module/photogram/module/photo/view/photogram.photo.html","<ion-view view-title=\"Photo\"><ion-content><div class=\"list card step1\"><div class=\"item item-avatar\" \ndata-affix-within-parent-with-class=\"card\" ion-affix><img ng-src=\"{{vm.data.user.img}}\"><h2>{{vm.data.user.name}}</h2>\n<span>{{vm.data.created | amTimeAgo}}</span></div><div class=\"item item-body\"><img ng-src=\"{{vm.data.img._url}}\" \nstyle=\"width: 100%\"></div><div class=\"padding\"><p>{{ vm.data.title }}</p><p><a class=\"subdued\" href=\"#\">\n1 {{ \'Like\' | translate}}</a></p></div></div><div class=\"list\"><div ng-repeat=\"item in vm.comments\" \nclass=\"item item-avatar\"><img ng-src=\"{{ item.user.img }}\"><h2>{{ item.user.name }}</h2><p>{{ item.text }}</p></div>\n</div><div class=\"step2\"><formly-form model=\"vm.form\" fields=\"vm.formFields\" form=\"rForm\"><div class=\"padding\"><button \nclass=\"button button-block button-positive\" type=\"button\" ng-click=\"vm.submitComment(rForm, vm.form)\" translate>Comment\n</button></div></formly-form></div></ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/photo/view/photogram.popover.home.html","<ion-popover-view><ion-content><div class=\"list\"><div class=\"item\" ui-sref=\"gallery.settings\" translate>Settings</div>\n<div class=\"item\" ui-sref=\"gallery.settings\" translate>About</div></div></ion-content></ion-popover-view>");
$templateCache.put("app/module/photogram/module/search/view/photo.modal.html","<ion-modal-view class=\"modal-profile photogram-profile\"><ion-header-bar class=\"bar-positive\"><button \nclass=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\n{{ user.name }}</div></ion-header-bar><ion-content overflow-scroll=\"true\"><div class=\"profile-top\"><div class=\"row\">\n<div class=\"col-25\"><img class=\"avatar\" ng-src=\"{{ user.src }}\"></div><div class=\"col col-statics\"><div class=\"row\">\n<div class=\"col\"><photogram-loading loading=\"loadingPhotos\"></photogram-loading><span ng-if=\"!loadingPhotos\" \nclass=\"text-center\">{{ user.qtdPhotos }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.POST\">Posts</h3></div><div \nclass=\"col\"><photogram-loading loading=\"loadingFollowers\"></photogram-loading><span ng-if=\"!loadingFollowers\" \nclass=\"text-center\">{{ user.qtdFollowers }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWER\"></h3></div><div \nclass=\"col\"><photogram-loading loading=\"loadingFollowing\"></photogram-loading><span ng-if=\"!loadingFollowing\" \nclass=\"text-center\">{{ user.qtdFollowing }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWING\">Followings</h3>\n</div></div><div class=\"row col-edit\"><div class=\"col\"><photogram-loading loading=\"loadingFollow\"></photogram-loading>\n<button ng-if=\"!loadingFollow\" ng-class=\"{\'button-unfollow\': user.follow, \'button-follow\': !user.follow}\" \nng-click=\"follow()\" class=\"button\"><span ng-show=\"!user.follow\" translate>Follow</span> <span ng-show=\"user.follow\" \ntranslate>Following</span></button></div></div></div></div><div class=\"padding\"><span class=\"user-username\">\n{{ user.name }}</span><p class=\"user-status\">{{ user.status }}</p></div></div></ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/module/search/view/photogram.search.grid.html","<ion-view cache-view=\"false\"><ion-nav-title><ion-search class=\"search-wrapper-light\" \nplaceholder=\"{{ \'SEARCH.FORM.INPUT\' | translate }}\" min-length=\"1\" model=\"GallerySearchGrid.data\" \nsource=\"GallerySearchGrid.load\"></ion-search></ion-nav-title><ion-content class=\"photogram-search\"><ion-refresher \nng-if=\"!vm.loading\" on-refresh=\"loadMore(true)\"></ion-refresher><photogram-loading loading=\"vm.loading\">\n</photogram-loading><photogram-photo-grid profile=\"true\" photogram=\"vm.data\" loading=\"vm.loading\">\n</photogram-photo-grid><div class=\"center-ico\" ng-if=\"vm.empty\"><i class=\"icon ion-ios-camera\"></i></div>\n<ion-infinite-scroll ng-if=\"!vm.loading && !vm.empty\" on-infinite=\"vm.loadMore()\"></ion-infinite-scroll></ion-content>\n</ion-view>");
$templateCache.put("app/module/photogram/module/search/view/photogram.search.map.html","<ion-view class=\"maps-view\"><ion-nav-title translate=\"SEARCH.TITLE_MAP\"></ion-nav-title><ion-nav-buttons side=\"right\">\n<button ng-click=\"vm.location()\" class=\"button button-icon icon ion-pinpoint\"></button></ion-nav-buttons><ion-content \nscroll=\"false\"><div class=\"map-container\"><ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\"><ui-gmap-marker \nidkey=\"0\" coords=\"vm.user\"></ui-gmap-marker><ui-gmap-marker click=\"vm.openModal(item)\" idkey=\"item.id\" \ncoords=\"item.coords\" icon=\"item.icon\" ng-repeat=\"item in vm.data\"></ui-gmap-marker></ui-gmap-google-map></div>\n</ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/search/view/photogram.search.tabs.html","<ion-view title=\"Search\" class=\"view-tab\"><ion-nav-title><h1 class=\"title\" translate=\"SEARCH.TITLE\"></h1>\n</ion-nav-title><ion-tabs class=\"tabs-top tabs-positive tabs-striped\"><ion-tab \ntitle=\"{{\'SEARCH.TITLE_LIST\' | translate}}\" icon=\"ion-grid\" ui-sref=\"photogram.search.grid\"><ion-nav-view \nname=\"tabGrid\"></ion-nav-view></ion-tab><ion-tab title=\"{{\'SEARCH.TITLE_MAP\' | translate }}\" icon=\"ion-map\" \nui-sref=\"photogram.search.map\"><ion-nav-view name=\"tabMap\"></ion-nav-view></ion-tab></ion-tabs></ion-view>");
$templateCache.put("app/module/photogram/module/discover/view/discover.html","<ion-view title=\"{{ \'MENU.DISCOVERY\' | translate }}\"><ion-content><ul class=\"list\"><li class=\"item item-toggle\">\n{{\'DISCOVERABLE\' | translate}}<label class=\"toggle\"><input type=\"checkbox\" ng-model=\"profile.enabled\"><div \nclass=\"track\"><div class=\"handle\"></div></div></label></li></ul><div class=\"item item-divider\">\n{{\'SHOW_ME\' | translate}}:</div><ul class=\"list\"><li class=\"item item-toggle\">{{\'GUYS\' | translate}}<label \nclass=\"toggle\"><input type=\"checkbox\" ng-model=\"profile.guys\"><div class=\"track\"><div class=\"handle\"></div></div>\n</label></li><li class=\"item item-toggle\">{{\'GIRLS\' | translate}}<label class=\"toggle\"><input type=\"checkbox\" \nng-model=\"profile.girls\"><div class=\"track\"><div class=\"handle\"></div></div></label></li><li class=\"item item-divider\">\n{{\'SEARCH_DISTANCE\' | translate}}: {{profile.distance}}{{profile.distanceType}}</li><li class=\"item\" \nstyle=\"height: 60px\"><slider floor=\"1\" ceiling=\"200\" ng-model-low=\"profile.distance\" ng-model-high=\"profile.distance\">\n</slider></li><li class=\"item item-divider\">\n{{\'AGED_BETWEEN\' | translate}}: {{profile.ageFrom}} to {{profile.ageTo == 55 ? \'55+\' : profile.ageTo}}</li><li \nclass=\"item\" style=\"height: 60px\"><slider floor=\"18\" ceiling=\"55\" ng-model-low=\"profile.ageFrom\" \nng-model-high=\"profile.ageTo\"></slider></li></ul><div style=\"width:100%;padding-left: 10px;padding-right: 10px\"><button\n class=\"button button-block button-positive\" ng-click=\"save()\">{{\'SAVE\' | translate}}</button> <button \nclass=\"button button-block button-light\" ng-click=\"cancel()\">{{\'CANCEL\' | translate}}</button></div></ion-content>\n</ion-view>");
$templateCache.put("app/module/photogram/module/share/view/photogram.post.modal.html","<ion-modal-view class=\"modal-post\"><ion-header-bar class=\"bar-dark\"><button \nclass=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closePost()\"></button><div class=\"title\" \ntranslate=\"SHARE.TITLE\"></div><button class=\"button button-positive\" ng-click=\"submitPost(form)\"><i \nclass=\"icon ion-arrow-right-b\"></i></button></ion-header-bar><ion-content><div id=\"image\"><img ng-src=\"{{form.photo}}\">\n</div><ul class=\"list\"><li class=\"item\"><textarea type=\"text\" ng-model=\"form.title\" autofocus \nplaceholder=\"{{ \'SHARE.FORM.LEGEND\' | translate }}\"></textarea></li><li class=\"item item-input\" \nng-show=\"form.geo.image\"><input type=\"text\" placeholder=\"{{ \'SHARE.FORM.LOCATION\' | translate }}\" ion-location \nlocation=\"form.geo\" ng-model=\"form.geo.resume\"></li><li class=\"item nopadding\" ng-show=\"form.geo.image\"><img \nng-src=\"{{ form.geo.image }}\"></li></ul></ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/module/share/view/photogram.share.modal.html","<ion-modal-view class=\"modal-share\"><ion-header-bar class=\"bar-dark\"><button \nclass=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeShare()\"></button><div class=\"title\" \ntranslate=\"SHARE.TITLE\"></div><button class=\"button button-positive\" ng-click=\"submitShare(form, social)\"><i \nclass=\"icon ion-arrow-right-b\"></i></button></ion-header-bar><ion-content><div class=\"list\"><div \nclass=\"item item-thumbnail-left\" href=\"#\"><img ng-src=\"{{form.photo}}\" id=\"image\"><textarea type=\"text\" \nng-model=\"form.title\" placeholder=\"{{ \'SHARE.FORM.LEGEND\'|translate }}\"></textarea></div></div><ul class=\"list\"><li \nclass=\"item item-input\"><input type=\"text\" placeholder=\"{{ \'SHARE.FORM.LOCATION\' | translate }}\" ion-location \nlocation=\"form.geo\" ng-model=\"form.geo.resume\"></li><div class=\"item nopadding\" ng-show=\"form.geo.image\"><img \nng-src=\"{{ form.geo.image }}\"></div></ul><ul class=\"list\"><li class=\"item item-divider\" \ntranslate=\"SHARE.FORM.SHARE_IN\"></li><li class=\"item item-icon-left item-toggle\" ng-repeat=\"social in socials\"><i \nclass=\"icon ion-social-{{ social.title | lowercase }}\"></i> {{ social.title }}<label class=\"toggle toggle-positive\">\n<input type=\"checkbox\" ng-model=\"social.checked\"><div class=\"track\"><div class=\"handle\"></div></div></label></li></ul>\n</ion-content></ion-modal-view>");
$templateCache.put("app/module/photogram/module/likedme/view/likedme.html","<ion-view view-title=\"Likes Me\"><ion-content ng-controller=\"Likedme as vm\"><ion-refresher \npulling-text=\"{{\'PULL_TO_REFRESH\' | translate}}\" on-refresh=\"vm.refresh()\"></ion-refresher><div \nng-if=\"!vm.profiles.length\" class=\"center\"><br>{{\'NO_LIKES\' | translate}}</div><ion-list><ion-item \nng-repeat=\"profile in vm.profiles\" class=\"item-thumbnail-left\" ng-click=\"vm.view($index)\"><img \nng-src=\"{{profile.photoUrl}}\"><h2>{{profile.name}}, {{profile.age}}</h2><p>\n{{profile.location | distance}} {{\'AWAY\' | translate}}<br>{{profile.about}}</p></ion-item></ion-list></ion-content>\n</ion-view>");
$templateCache.put("app/module/photogram/module/swipe/view/swipe.html","<ion-view view-title=\"{{::appName}}\"><ion-nav-buttons side=\"right\"><i \nclass=\"button button-icon icon ion-ios-chatbubble-outline\" ui-sref=\"photogram.chats\"><span ng-show=\"unreadChats > 0\" \nclass=\"badge badge-assertive nav-icon-badge\">{{unreadChats}}</span></i></ion-nav-buttons><ion-content class=\"padding\" \nstyle=\"padding-top:100px;padding-top:5vw;text-align:center\" no-scroll><style>\n@-webkit-keyframes fade_out_animation {\n        0% { -webkit-transform: scale(1); }\n        100% { -webkit-transform: scale(2);  opacity: 0;  }\n      }\n\n      .imgOverlay{\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n      }\n\n      .imgCircle{\n        width: 150px;\n        height: 150px;\n        border-radius: 150px;\n        -webkit-border-radius: 150px;\n        -moz-border-radius: 150px;\n      }\n\n      .verticalAlign{\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        width:100%;\n        margin:0 auto;\n      }\n\n      \n\n      .fade-out {\n        animation-name: \'fade_out_animation\';\n        animation-duration: 2000ms;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        -webkit-animation-name: \'fade_out_animation\';\n        -webkit-animation-duration: 2000ms;\n        -webkit-animation-iteration-count: infinite;\n        -webkit-animation-timing-function: linear;\n        -moz-animation-name: \'fade_out_animation\';\n        -moz-animation-duration: 2000ms;\n        -moz-animation-iteration-count: infinite;\n        -moz-animation-timing-function: linear;\n        transition: opacity 2s\n      }\n</style><div></div><div ng-if=\"!profile.enabled\" class=\"text-label\" style=\"padding-top:50px;padding-top:20vw\"><div \nstyle=\"font-size: 24px; font-size: 8vw\">{{\'NOT_DISCOVERABLE\' | translate}}</div><div \nstyle=\"font-size: 14px;font-size: 4vw;padding-top: 5px\">{{\'ENABLE_DISCOVERY_TO_MEET\' | translate}}</div><button \nclass=\"button button-block\" ng-click=\"enableDiscovery()\">{{\'ENABLE_DISCOVERY\' | translate}}</button><br><br><div \nng-show=\"!profile.photos.length\"><br><div style=\"font-size: 20px; font-size: 6vw\">You don\'t have a profile picture yet\n</div><button class=\"button button-block\" ui-sref=\"photogram.account\">Edit Profile</button></div></div><div \nng-show=\"profile.enabled\"><div class=\"verticalAlign\" ng-show=\"!matches\" style=\"padding-top:150px;padding-top:45vw\"><img\n class=\"imgOverlay fade-out\" style=\"width:150px\" src=\"img/ring.png\"><img class=\"photo imgCircle imgOverlay\" img-cache \nng-src=\"{{::profilePhoto}}\"></div><div ng-show=\"!matches || matches.length==0\" \nstyle=\"padding-top:150px;padding-top:45vw\"><div class=\"verticalAlign text-label\" ng-show=\"!matches\">\n{{\'FINDING_PEOPLE\' | translate}}</div><div class=\"verticalAlign text-label\" style=\"font-size: 16px;font-size: 5.5vw\" \nng-show=\"matches.length == 0\">{{\'NO_ONE_NEW\' | translate}}<br><br><button class=\"button\" ng-click=\"searchAgain()\">\n{{\'SEARCH_AGAIN\' | translate}}</button></div></div><td-cards><td-card ng-if=\"$index >= matches.length - 2\" \nng-show=\"matches\" ng-repeat=\"match in matches track by $index\" on-destroy=\"cardDestroyed($index)\" \non-transition-left=\"cardTransitionLeft(match)\" on-transition-right=\"cardTransitionRight(match)\" \nclass=\"card-{{$index}}\" ng-class=\"{\'accepted-transform\': match.accepted, \'rejected-transform\': match.rejected}\"><div \nclass=\"image\" ng-click=\"viewDetails(match)\"><div class=\"yes-text\" ng-style=\"leftTextOpacity\">{{\'LIKE\' | translate}}\n</div><img style=\"width:100%\" ng-src=\"{{::match.image}}\"><div class=\"no-text\" ng-style=\"rightTextOpacity\">\n{{\'NOT_LIKE\' | translate}}</div></div><div>{{match.name}}</div></td-card></td-cards><div class=\"list\" \nng-if=\"searchLayout == \'list\'\"><a class=\"item item-thumbnail-left\" style=\"text-align: left\" \nng-repeat=\"match in matches track by $index\" ng-click=\"viewDetails(match)\"><img ng-src=\"{{::match.image}}\" img-cache>\n<h2>{{::match.name}}, {{::match.age}}</h2><p>{{match.location | distance}} {{\'AWAY\' | translate}}<br>{{match.about}}\n</p></a></div><div class=\"row\" ng-repeat=\"match in matches track by $index\" \nng-if=\"searchLayout == \'grid\' && $index % 2 == 0\"><div class=\"col\"><div class=\"list card\" \nng-click=\"viewDetails(match)\"><div class=\"item item-image\"><img ng-src=\"{{::match.image}}\"></div><a \nclass=\"item item-icon-left item-icon-right\">{{::match.name}}</a></div></div><div class=\"col\"><div class=\"list card\" \nng-click=\"viewDetails(matches[index+1])\" ng-if=\"$index+1 < matches.length\"><div class=\"item item-image\"><img \nng-src=\"{{::matches[index+1].image}}\"></div><a class=\"item item-icon-left item-icon-right\">{{::matches[index+1].name}}\n</a></div></div></div><div class=\"list card\" ng-repeat=\"match in matches track by $index\" \nng-if=\"searchLayout == \'card\'\" ng-click=\"viewDetails(match)\"><div class=\"item item-image\"><img \nng-src=\"{{::match.image}}\"></div><a class=\"item item-icon-left item-icon-right\" href=\"#\"><i style=\"float:left\" \nclass=\"button button-icon icon ion-android-close assertive\" ng-click=\"reject()\"></i> {{::match.name}} <i \nstyle=\"float:right\" class=\"button button-icon icon ion-ios-heart-outline assertive\" ng-click=\"like()\"></i></a></div>\n<div ng-show=\"matches.length > 0\" class=\"swipe-buttons\"><div class=\"row\"><div class=\"col\"><a \nclass=\"button button-icon\" ng-click=\"reject()\"><i class=\"icon ion-ios-close-outline swipe-button swipe-reject\"></i></a>\n</div><div class=\"col\"><a class=\"button button-icon\" ng-click=\"accept()\"><i \nclass=\"icon ion-ios-checkmark-outline swipe-button swipe-accept\"></i></a></div></div></div></div></ion-content>\n</ion-view>");
$templateCache.put("app/module/user/module/avatar/view/user.avatar.html","<ion-view title=\"{{ \'USER.AVATAR.TITLE\' | translate }}\"><ion-nav-bar class=\"bar bar-positive bar-mop\" \nalign-title=\"left\"></ion-nav-bar><ion-content class=\"view-avatar\"><div class=\"row step1\"><div class=\"col\"><img \nclass=\"avatar\" user-avatar ng-src=\"{{ ::currentUser.img._url || \'img/user.png\' }}\"></div></div><div class=\"step2\">\n<label class=\"item item-input\"><i class=\"icon icon-envelope placeholder-icon\"></i> <input type=\"text\" \nng-model=\"vm.form.email\" disabled=\"disabled\"></label><formly-form model=\"vm.form\" fields=\"vm.formFields\" \nform=\"vm.rForm\"></formly-form></div><div class=\"padding step3\"><button ng-click=\"vm.submitAvatar()\" \nclass=\"button button-block button-positive\" translate=\"USER.BUTTON.NEXT\"></button></div></ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/setting/view/setting.html","<ion-view view-title=\"{{\'SETTINGS_TITLE\' | translate}}\" cache-view=\"false\"><ion-content><div class=\"list\"><div \nclass=\"item item-divider\">{{\'NOTIFICATION_SOUND\' | translate}}:</div><ion-toggle ng-model=\"profile.notifyMatch\" \ntoggle-class=\"toggle-calm\">{{\'NEW_MATCH\' | translate}}</ion-toggle><ion-toggle ng-model=\"profile.notifyMessage\" \ntoggle-class=\"toggle-calm\">{{\'NEW_MESSAGE\' | translate}}</ion-toggle><div class=\"item item-divider\">\n{{\'SHOW_DISTANCES_IN\' | translate}}:</div><ion-radio ng-model=\"profile.distanceType\" name=\"distanceType\" \nng-value=\"\'km\'\">Km</ion-radio><ion-radio ng-model=\"profile.distanceType\" name=\"distanceType\" ng-value=\"\'mi\'\">Mi\n</ion-radio><div class=\"item item-divider\">{{\'LANGUAGE\' | translate}}:</div><div style=\"width:100%;padding:2px\"><button\n ng-click=\"setLanguage(\'en\')\" class=\"button button-small button-stable\">English</button> <button \nng-click=\"setLanguage(\'de\')\" class=\"button button-small button-stable\">Deutch</button></div></div><br><div \nclass=\"wide center padding-10\"><button class=\"button button-block button-positive\" ng-click=\"save()\" translate=\"SAVE\">\n</button> <button class=\"button button-block button-stable\" ng-click=\"deleteUnmatchedSwipes()\">Delete Unmatched Swipes\n</button> <button class=\"button button-block button-stable\" ng-click=\"logout()\" translate=\"LOGOUT\"></button> <button \nclass=\"button button-block button-assertive\" ng-click=\"deleteAccount()\" translate=\"DELETE_ACCOUNT\"></button></div><div \nclass=\"wide center padding-10 bold\" ng-click=\"debug()\">\n{{\'VERSION\' | translate}}: {{::(appVersion ? appVersion : \'N/A\')}}</div></ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/chats/view/chats.html","<style>.unread {\n        font-weight: bold;\n    }</style><ion-view view-title=\"Chat\"><ion-nav-buttons side=\"right\"><i \nclass=\"button button-icon icon ion-gear-a\" ng-click=\"chatSettings($event)\"></i></ion-nav-buttons><ion-content><div \nng-show=\"!matches.length\" style=\"text-align: center;font-family:\'Avenir Next LT Pro Regular\';font-size:18px\"><br>\n{{\'NO_MATCHES\' | translate}}<br><br>{{\'START_SWIPING\' | translate}}!</div><div class=\"list\"><a \nclass=\"item item-avatar\" ng-repeat=\"match in matches track by match.id\" ui-sref=\"^.chat({matchId : match.id})\"><img \nng-src=\"{{::match.profile.photoUrl}}\" img-cache><h2>{{::match.profile.name}}</h2><p \nng-class=\"match.read ? \'\' : \'unread\'\" ng-bind-html=\"match.lastMessage | escapeHTML | emoji\"></a></div></ion-content>\n</ion-view>");
$templateCache.put("app/module/user/module/merge/view/user.merge.html","<ion-view title=\"{{ \'Complete your Profile\' | translate }}\"><ion-nav-bar class=\"bar bar-positive bar-mop\" \nalign-title=\"left\"></ion-nav-bar><ion-content class=\"view-avatar\"><div class=\"step1 padding\"><h5 translate>\nYour email is already associated with another account, please enter your password</h5></div><div class=\"row step1\"><div\n class=\"col\"><img class=\"avatar\" user-avatar ng-src=\"{{ vm.form.src }}\"></div></div><div class=\"list step2\"><label \nclass=\"item item-input\"><i class=\"icon icon-user placeholder-icon\"></i> <input type=\"text\" ng-model=\"vm.form.name\" \ndisabled=\"disabled\"></label><label class=\"item item-input\"><i class=\"icon icon-envelope placeholder-icon\"></i> <input \ntype=\"text\" ng-model=\"vm.form.email\" disabled=\"disabled\"></label><label class=\"item item-input lock\"><input \ntype=\"password\" placeholder=\"{{ \'Password\' | translate }}\" ng-model=\"vm.form.password\"></label></div><div \nclass=\"padding step3\"><button ng-click=\"vm.submitvm(vm.form)\" ng-disabled=\"form.facebook\" \nclass=\"button button-block button-facebook\"><i class=\"icon ion-social-facebook\"></i> <span translate>vm Facebook</span>\n</button></div></ion-content></ion-view>");
$templateCache.put("app/module/user/module/profile/view/grid.html","<ion-view hide-nav-bar><ion-content><div class=\"item item-divider\" translate>Grid List</div><div \nclass=\"center-ico animated fadeIn\" ng-if=\"vm.empty\"><i class=\"icon ion-camera\"></i><h1 translate=\"\">No Post</h1></div>\n<photogram-loading loading=\"vm.loading\"></photogram-loading><photogram-photo-grid photogram=\"vm.data\" \nloading=\"vm.loading\"></photogram-photo-grid></ion-content></ion-view>");
$templateCache.put("app/module/user/module/profile/view/list.html","<ion-view hide-nav-bar><ion-content><div class=\"item item-divider\" translate>Recent List</div><div \nclass=\"center-ico animated fadeIn\" ng-if=\"vm.empty\"><i class=\"icon ion-camera\"></i><h1 translate=\"\">No Post</h1></div>\n<photogram-loading loading=\"vm.loading\"></photogram-loading><photogram-photo-list photogram=\"vm.data\" \nloading=\"vm.loading\"></photogram-photo-list></ion-content></ion-view>");
$templateCache.put("app/module/user/module/profile/view/profile.edit.modal.html","<ion-modal-view class=\"modal-profile\"><ion-header-bar class=\"bar-positive\"><button \nclass=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\n{{ ::\'Edit Profile\' | translate }}</div></ion-header-bar><ion-content class=\"view-avatar\"><div class=\"row step1\"><div \nclass=\"col\"><img class=\"avatar\" user-avatar ng-src=\"{{ ::form.img._url || \'img/user.png\' }}\"></div></div><div \nclass=\"step2\"><label class=\"item item-input\"><i class=\"icon icon-envelope placeholder-icon\"></i> <input type=\"text\" \nng-model=\"form.email\" disabled=\"disabled\"></label><formly-form model=\"form\" fields=\"formFields\" form=\"rForm\">\n</formly-form></div><div class=\"padding step3\"><button ng-click=\"linkFacebook()\" ng-disabled=\"form.facebook\" \nclass=\"button button-block button-facebook\"><i class=\"icon ion-social-facebook\"></i> <span \ntranslate=\"PHOTOGRAM.BUTTON.FACEBOOK_LINK\"></span></button> <button class=\"button button-block button-positive\" \nng-click=\"submitUpdateProfile()\" translate=\"PHOTOGRAM.BUTTON.SAVE_PROFILE\"></button></div></ion-content>\n</ion-modal-view>");
$templateCache.put("app/module/user/module/profile/view/profile.html","<ion-view cache-view=\"false\" class=\"photogram-profile\"><ion-nav-title><h1 class=\"title\">{{ ::vm.user.name }}</h1>\n</ion-nav-title><ion-nav-buttons side=\"right\"><button photogram-settings class=\"button button-icon icon ion-gear-a\">\n</button></ion-nav-buttons><ion-content class=\"animated fadeIn\"><div class=\"profile-top\"><div class=\"row\"><div \nclass=\"col-25\"><img class=\"avatar\" user-avatar ng-src=\"{{ ::currentUser.img._url || \'img/user.png\' }}\"></div><div \nclass=\"col col-statics\"><div class=\"row\"><div class=\"col\"><photogram-loading loading=\"loadingPhotos\">\n</photogram-loading><span ng-if=\"!loadingPhotos\" class=\"text-center\">{{ ::vm.user.qtdPhotos }}</span><h3 \ntranslate=\"PHOTOGRAM.PROFILE.TITLE.POST\">Posts</h3></div><div class=\"col\"><photogram-loading \nloading=\"loadingFollowers\"></photogram-loading><span ng-if=\"!loadingFollowers\" class=\"text-center\">\n{{ ::vm.user.qtdFollowers }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWER\"></h3></div><div class=\"col\">\n<photogram-loading loading=\"loadingFollowing\"></photogram-loading><span ng-if=\"!loadingFollowing\" class=\"text-center\">\n{{ ::vm.user.qtdFollowing }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWING\">Followings</h3></div></div><div \nclass=\"row col-edit\"><div class=\"col\"><button profile-modal-edit class=\"button\"><div \ntranslate=\"PHOTOGRAM.BUTTON.PROFILE_EDIT\"></div></button></div></div></div></div><div class=\"padding\"><span \nclass=\"user-username\">{{ ::currentUser.name }}</span><p class=\"user-status\">{{ ::currentUser.status }}</p></div></div>\n<div class=\"item bar\"><div class=\"button-bar\"><button class=\"button button-icon icon ion-drag\" \nng-class=\"{active: vm.tab.list}\" ng-click=\"vm.changeTab(\'list\')\"></button> <button \nclass=\"button button-icon icon ion-grid\" ng-class=\"{active: vm.tab.grid}\" ng-click=\"vm.changeTab(\'grid\')\"></button> \n<button class=\"button button-icon icon ion-ios-location\"></button></div></div><div class=\"item item-divider\" \ntranslate=\"PHOTOGRAM.MSG.RECENT\">Recent</div><div class=\"center-ico animated fadeIn\" ng-if=\"vm.empty\"><i \nclass=\"icon ion-camera\"></i><h1 translate=\"PHOTOGRAM.MSG.NO_POST\">No Post</h1></div><photogram-loading \nloading=\"vm.loading\"></photogram-loading><div class=\"tab\" ng-if=\"vm.tab.list\"><photogram-photo-list \nphotogram=\"vm.data\" loading=\"vm.loading\"></photogram-photo-list></div><div class=\"tab\" ng-if=\"vm.tab.grid\">\n<photogram-photo-grid photogram=\"vm.data\" loading=\"vm.loading\"></photogram-photo-grid></div></ion-content></ion-view>");
$templateCache.put("app/module/user/module/profile/view/profile.modal.html","<ion-modal-view class=\"modal-profile photogram-profile\"><ion-header-bar class=\"bar-positive\"><button \nclass=\"button button-clear button-icon ion-ios-arrow-thin-left\" ng-click=\"closeModal()\"></button><div class=\"title\">\n{{ user.name }}</div></ion-header-bar><ion-content overflow-scroll=\"true\"><div class=\"profile-top\"><div class=\"row\">\n<div class=\"col-25\"><img class=\"avatar\" ng-src=\"{{ user.src }}\"></div><div class=\"col col-statics\"><div class=\"row\">\n<div class=\"col\"><photogram-loading loading=\"loadingPhotos\"></photogram-loading><span ng-if=\"!loadingPhotos\" \nclass=\"text-center\">{{ user.qtdPhotos }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.POST\">Posts</h3></div><div \nclass=\"col\"><photogram-loading loading=\"loadingFollowers\"></photogram-loading><span ng-if=\"!loadingFollowers\" \nclass=\"text-center\">{{ user.qtdFollowers }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWER\"></h3></div><div \nclass=\"col\"><photogram-loading loading=\"loadingFollowing\"></photogram-loading><span ng-if=\"!loadingFollowing\" \nclass=\"text-center\">{{ user.qtdFollowing }}</span><h3 translate=\"PHOTOGRAM.PROFILE.TITLE.FOLLOWING\">Followings</h3>\n</div></div><div class=\"row col-edit\"><div class=\"col\"><photogram-loading loading=\"loadingFollow\"></photogram-loading>\n<button ng-if=\"!loadingFollow\" ng-class=\"{\'button-unfollow\': user.follow, \'button-follow\': !user.follow}\" \nng-click=\"follow()\" class=\"button\"><span ng-show=\"!user.follow\" translate>Follow</span> <span ng-show=\"user.follow\" \ntranslate>Following</span></button></div></div></div></div><div class=\"padding\"><span class=\"user-username\">\n{{ user.name }}</span><p class=\"user-status\">{{ user.status }}</p></div></div><div class=\"item bar\"><div \nclass=\"button-bar\"><button class=\"button button-icon icon ion-drag\" ng-class=\"{active: tab.list}\" \nng-click=\"changeTab(\'list\')\"></button> <button class=\"button button-icon icon ion-grid\" ng-class=\"{active: tab.grid}\" \nng-click=\"changeTab(\'grid\')\"></button> <button class=\"button button-icon icon ion-ios-location\"></button></div></div>\n<div class=\"item item-divider\" translate>Recent</div><div class=\"center-ico animated fadeIn\" ng-if=\"empty\"><i \nclass=\"icon ion-camera\"></i><h1 translate=\"\">No Post</h1></div><photogram-loading loading=\"loading\">\n</photogram-loading><div class=\"tab\" ng-if=\"tab.list\"><photogram-photo-list photogram=\"data\" user=\"false\" \nloading=\"loading\"></photogram-photo-list></div><div class=\"tab\" ng-if=\"tab.grid\"><photogram-photo-grid \nphotogram=\"data\" user=\"false\" loading=\"loading\"></photogram-photo-grid></div></ion-content></ion-modal-view>");
$templateCache.put("app/module/user/module/profile/view/profile.photos.html","<ion-view title=\"{{\'Profile\' | translate}}\" class=\"profile\"><ion-content scroll=\"false\"><h2>Fotos</h2></ion-content>\n</ion-view>");
$templateCache.put("app/module/user/module/friend/view/user.list.html","<ion-view view-title=\"UserList\" class=\"photogram-userlist\"><ion-header-bar class=\"bar-dark\"><h1 class=\"title\">\n{{ \'Follow Users\' | translate }}</h1><div class=\"buttons\"><button class=\"button button-positive\" \nng-click=\"vm.submitFollow()\"><i class=\"icon ion-arrow-right-b\"></i></button></div></ion-header-bar><ion-content><div \nclass=\"list\"><div class=\"item item-avatar item-animate1 item-button-right\" ng-repeat=\"item in vm.data\"><img \nng-src=\"{{ item.src }}\"><h2>{{ item.name }}</h2><p>{{ item.status }}</p><button class=\"button\" \nng-click=\"item.follow = !item.follow\" ng-class=\"item.follow ? \'button-positive\' : \'button-stable\'\"><i class=\"icon\" \nng-class=\"item.follow? \'ion-thumbsup\' : \'ion-plus\'\"></i></button></div></div></ion-content></ion-view>");
$templateCache.put("app/module/user/module/signup/view/user.signup.html","<ion-view view-title=\"{{ \'USER.BUTTON.SIGNUP\' | translate }}\"><ion-content padding=\"true\"><formly-form model=\"vm.form\" \nfields=\"vm.formFields\" form=\"vm.rForm\"><div class=\"padding\"><button class=\"button button-block button-positive\" \ntype=\"button\" ng-disabled=\"rForm.$invalid\" ng-click=\"vm.submitRegister(vm.rForm, vm.form)\" \ntranslate=\"USER.BUTTON.NEXT\"></button></div></formly-form><div class=\"padding\"><p class=\"text-center\"><span \ntranslate=\"USER.TERM1\"></span> <b open-terms translate=\"USER.TERM2\"></b></p></div></ion-content></ion-view>");
$templateCache.put("app/module/user/module/signin/view/user.signin.html","<ion-view class=\"view-login\" view-title=\"{{ ::\'USER.BUTTON.ENTER\' | translate }}\"><ion-content padding=\"false\"><div \nclass=\"padding\"><formly-form model=\"vm.form\" fields=\"vm.formFields\" form=\"vm.rForm\"><button recovery-pass \nclass=\"button button-right button-block button-clear\"><span></span></button> <button \nclass=\"button button-block button-positive\" type=\"button\" ng-disabled=\"vm.rForm.$invalid\" \nng-click=\"vm.submitLogin(vm.rForm, vm.form)\" translate=\"USER.BUTTON.ENTER\"></button></formly-form><div class=\"line\">\n<div class=\"left\"></div><span translate=\"USER.OR\">or</span><div class=\"right\"></div></div><button \nng-click=\"vm.facebook()\" class=\"button button-block button-facebook\"><i class=\"icon ion-social-facebook\"></i> <span>\n{{ ::\'USER.BUTTON.LOGIN_SOCIAL\'| translate}}Facebook</span></button></div></ion-content></ion-view>");
$templateCache.put("app/module/photogram/module/location/view/location.html","<ion-view view-title=\"{{\'SET_LOCATION\' | translate}}\" cache-view=\"false\"><ion-content><ul class=\"items\"><li \nclass=\"item item-toggle\">{{\'USE_GPS_LOCATION\' | translate}}<label class=\"toggle\"><input type=\"checkbox\" \nng-model=\"location.useGPS\" ng-change=\"useGPSchanged()\"><div class=\"track\"><div class=\"handle\"></div></div></label></li>\n</ul><div id=\"map\" data-tap-disabled=\"true\"></div></ion-content><ion-footer-bar><button ng-hide=\"location.useGPS\" \nclass=\"button button-block button-positive\" style=\"margin:0px\" ng-click=\"setLocation()\">{{\'SAVE\' | translate}}</button>\n</ion-footer-bar></ion-view>");}]);