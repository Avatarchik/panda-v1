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
            templateUrl: path + '/view/chats.html'
          }
        }
      });

  }

})();