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
