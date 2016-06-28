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