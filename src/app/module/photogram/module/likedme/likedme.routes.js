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