(function () {
  'use strict';

  angular
    .module('app.photogram')
    .controller('SwipeCtrl', SwipeController);
    
      function SwipeController( $rootScope, AppConfig, $state, $translate, $scope, AppService, $ionicModal ) { 
          
          var vm = this;  
          var translations
        $translate(['MATCHES_LOAD_ERROR']).then(function (translationsResult) {
            translations = translationsResult
        })

        // when $scope.matches is null then we haven't done a search
        // when $scope.matches is an empty array then there are no new matches
        // TODO rename this to profiles as its IProfile and not IMatch objects
        $scope.matches = null

        var profile = $scope.profile = AppService.getProfile()
        $scope.profilePhoto = profile.photoUrl


        $scope.$on('$ionicView.beforeEnter', function () { $scope.unreadChats = AppService.getUnreadChatsCount() })
        $scope.$on('unreadChatsCountUpdated', function () { $scope.unreadChats = AppService.getUnreadChatsCount() })

        $scope.$on('$ionicView.enter', function() {
            if(profile.enabled) {
                // Check for any previously loaded matches
                $scope.matches = AppService.getPotentialMatches()
                // If we haven't searched yet or we are coming back to the screen and there isn't any results then search for more
                if(!$scope.matches || $scope.matches.length === 0)
                    $scope.searchAgain()
            }
        })

        $scope.$on('newPotentialMatches', function() { $scope.matches = AppService.getPotentialMatches() })

        $scope.searchAgain = function() {
            $scope.matches = null
            updatePotentialMatches()
        }


        var MIN_SEARCH_TIME = 2000
        function updatePotentialMatches() {

            var startTime = Date.now()
            AppService.updatePotentialMatches()
                .then(function(result) {
                    $log.log('CardsCtrl: found ' + result.length + ' potential matches')
                    result.map(function(profile) { profile.image = profile.photoUrl })
                    // Make the search screen show for at least a certain time so it doesn't flash quickly
                    var elapsed = Date.now() - startTime
                    if(elapsed < MIN_SEARCH_TIME)
                        $timeout(function() { $scope.matches = result}, MIN_SEARCH_TIME - elapsed)
                    else
                        $scope.matches = result
                }, function(error){
                    $log.log('updatePotentialMatches error ' + JSON.stringify(error))
                    $scope.matches = []
                    AppUtil.toastSimple(translations.MATCHES_LOAD_ERROR)
                }
            )
        }

        // Initialise the new match modal
        $ionicModal.fromTemplateUrl('newMatch.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {$scope.modal = modal })
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() { $scope.modal.remove() })

        $scope.$on('newMatch', function(event, match) {
            $log.log('CardsCtrl.newMatch ' + match.id)
            $scope.newMatch = match
            $scope.matchProfile = AppService.getProfileById(match.profileId)
            $scope.modal.show()
        })
        $scope.closeNewMatch = function(){$scope.modal.hide()}

        $scope.messageNewMatch = function() {
            $scope.modal.hide()
            $state.go('^.chat',{matchId : $scope.newMatch.id})
        }
        // a test function for viewing the new match modal screen
        $scope.openNewMatch = function() {
            $scope.newMatch = AppService.getMutualMatches()[0]
            $scope.modal.show()
        }

        $scope.enableDiscovery = function() {
            AppUtil.blockingCall(
                AppService.enableDiscovery(),
                function() {
                    $log.log('discovery enabled. updating matches...')
                    updatePotentialMatches()
                }
            )
        }

        $scope.viewDetails = function(card) {
            $log.log('view details ' + JSON.stringify(card))
            $scope.$parent.selectedCard = card
            $state.go('^.card-info')
        }

        $scope.accept = function() {
            $log.log('accept button')
            var matchLength = $scope.matches.length
            var topMatch = $scope.matches[matchLength-1]
            AppService.processMatch(topMatch, true)
            topMatch.accepted = true // this triggers the animation out
            $timeout(function(){ $scope.matches.pop()}, 340)
        }

        $scope.reject = function() {
            $log.log('reject button')
            var matchLength = $scope.matches.length
            var topMatch = $scope.matches[matchLength-1]
            AppService.processMatch(topMatch, false)
            topMatch.rejected = true // this triggers the animation out
            $timeout(function() {$scope.matches.pop()}, 340)
        }

        // matches are swiped off from the end of the $scope.matches array (i.e. popped)

        $scope.cardDestroyed = function(index){ $scope.matches.splice(index, 1)}

        $scope.cardTransitionLeft = function(match) {
            AppService.processMatch(match, false)
            if($scope.matches.length == 0) {
                // TODO auto-load more?
            }
        }
        $scope.cardTransitionRight = function(match) {
            AppService.processMatch(match, true)
            if($scope.matches.length == 0) {
                // TODO auto-load more?
            }
        }
          
      }
});