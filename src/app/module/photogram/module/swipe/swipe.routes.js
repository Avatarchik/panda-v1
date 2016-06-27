(function () {
  'use strict';
  var path = 'app/module/photogram/module/swipe';

  angular
    .module('app.swipe')
    .config(addRoute);

  function addRoute($stateProvider, $translatePartialLoaderProvider) {
    //$translatePartialLoaderProvider.addPart(path);

    $stateProvider
      .state('photogram.swipe', {
        url: '/swipe',
        views: {
          tabHome: {
            templateUrl: path + '/view/swipe.html'
          }
        }
      });

  }

})();