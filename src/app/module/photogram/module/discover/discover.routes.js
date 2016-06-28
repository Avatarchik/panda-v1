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