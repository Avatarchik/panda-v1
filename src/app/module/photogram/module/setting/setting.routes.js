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