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