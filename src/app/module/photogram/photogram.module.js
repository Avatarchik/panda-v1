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