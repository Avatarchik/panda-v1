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