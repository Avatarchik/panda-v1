(function () {
    'use strict';
    /**
     * @ngdoc controller
     * @name PhotogramTabsCtrl
     *
     * @description
     * _Please update the description and dependencies._
     *
     * @requires $scope
     * */
    angular
            .module('app.photogram')
            .controller('PhotogramTabsCtrl', PhotogramTabsController)
            .controller('SwipeCtrl', SwipeController)
            .controller('ChatsCtrl', ChatsController)
            .controller('DiscoverCtrl', DiscoverController)
            .controller('SettingCtrl', SettingController);


    function DiscoverController($scope, $state, $ionicHistory, User) {
        var vm = this;

        $scope.$on('$ionicView.enter', function () {
//            $scope.profile = AppService.getProfile().clone()
        })

        $scope.save = function () {
//            AppUtil.blockingCall(
//                    AppService.saveProfile($scope.profile),
//                    function () {
//                        AppService.clearPotentialMatches()
//                        $ionicHistory.nextViewOptions({
//                            historyRoot: true,
//                            disableBack: true
//                        })
//                        $state.go('menu.home')
//                    }, 'SETTINGS_SAVE_ERROR'
//                    )
        }

        $scope.cancel = function () {
//            $scope.profile = AppService.getProfile($scope).clone()
        }
    }


    function SettingController($log, $scope, $rootScope, $state, $translate, User, $ionicActionSheet, AppConfig, UserForm) {

        var vm = this;
        var translations
        $translate(['SETTINGS_SAVE_ERROR', 'DELETE', 'DELETE_ACCOUNT', 'CANCEL']).then(function (translationsResult) {
            translations = translationsResult
        })

        $scope.init = function () {
            $scope.form = User.currentUser();
            $scope.formFields = UserForm.profile;
            $scope.languages = AppConfig.locales;
            $scope.language = $translate.use();
        }

        $scope.profile = $rootScope.currentUser


        $scope.changeLanguage = function (language) {
            console.log(language);
            $translate.use(language);
            moment.locale(language);
            $scope.language = language;
            User
                    .update({'language': $scope.language})
                    .then(function (resp) {
                        console.log(resp);
                        $scope.init();
                    });
        }

        $scope.submitUpdateProfile = function (form) {
            var dataForm = angular.copy(form);
            User
                    .update(dataForm)
                    .then(function (resp) {
                        console.log(resp);
                        $scope.init();
                    });
        }
        
        $scope.save = function(){
            $scope.submitUpdateProfile($scope.form);
        }

        $scope.cancel = function () {
            $scope.profile = $rootScope.currentUser
        }


        $scope.logout = function () {
            User.logout()
        }

        $scope.deleteUnmatchedSwipes = function () {
//            AppUtil.blockingCall(
//                    Photogram.deleteUnmatched(),
//                    function (success) {
//                        $log.log(success)
//                    },
//                    function (error) {
//                        $log.error(error)
//                    }
//            )
        }


        $scope.deleteAccount = function () {
            $ionicActionSheet.show({
                destructiveText: translations.DELETE,
                titleText: translations.DELETE_ACCOUNT,
                cancelText: translations.CANCEL,
                cancel: function () {},
                destructiveButtonClicked: function (index) {
                    doDelete()
                    return true
                }
            })
        }

//        function doDelete() {
//            AppUtil.blockingCall(
//                AppService.deleteAccount()
//            )
//        }

        $scope.init();
    }


    function ChatsController($rootScope, AppConfig, $state) {

        var vm = this;
    }

    function PhotogramTabsController($scope, $state, AppConfig, $rootScope, Photogram, $ionicModal, Loading,
            PhotogramSetting, PhotoService) {
        var vm = this;
        var path = AppConfig.path;
        vm.postPhoto = open;
        function open() {
            var option = {
                crop: PhotogramSetting.get('imageCrop'),
                allowEdit: PhotogramSetting.get('imageEdit'),
                filter: true,
                //filter: PhotogramSetting.get('imageFilter'),
                allowRotation: PhotogramSetting.get('imageRotation'),
                quality: PhotogramSetting.get('imageQuality'),
                correctOrientation: PhotogramSetting.get('imageEdit'),
                targetWidth: PhotogramSetting.get('imageWidth'),
                targetHeight: PhotogramSetting.get('imageHeight'),
                saveToPhotoAlbum: PhotogramSetting.get('imageSaveAlbum')
            };
            console.log(option);
            PhotoService
                    .open(option)
                    .then(modalPost)
                    .catch(goHome);
        }


        function goHome() {
            console.warn('Deu erro');
            $state.go('photogram.home');
        }

        function modalPost(image) {
            $scope.closePost = closeModalPost;
            $scope.submitPost = submitPost;
            $scope.form = {
                title: '',
                location: '',
                photo: image,
                geo: false
            };
            $ionicModal
                    .fromTemplateUrl(path + '/module/share/view/photogram.post.modal.html', {
                        scope: $scope,
                        focusFirstInput: true
                    })
                    .then(function (modal) {
                        $scope.form.photo = image;
                        $scope.modalPost = modal;
                        $scope.modalPost.show();
                    });
            function closeModalPost() {
                $scope.modalPost.hide();
                $scope.modalPost.remove();
                Loading.end();
            }

            function submitPost(resp) {
                var form = angular.copy(resp);
                console.log(form);
                Loading.start();
                Photogram
                        .post(form)
                        .then(function () {
                            closeModalPost();
                            $rootScope.$emit('filterModal:close');
                            $rootScope.$emit('PhotogramHome:reload');
                        });
            }
        }
    }


    function SwipeController($rootScope, AppConfig, $state, $translate, $scope, Photogram, User, $ionicModal) {

        var vm = this;
        var translations
        $translate(['MATCHES_LOAD_ERROR']).then(function (translationsResult) {
            translations = translationsResult
        })

        // when $scope.matches is null then we haven't done a search
        // when $scope.matches is an empty array then there are no new matches
        // TODO rename this to profiles as its IProfile and not IMatch objects
        $scope.matches = null

        var profile = $scope.profile = $rootScope.currentUser
        $scope.profilePhoto = (profile.hasOwnProperty('img')) ? profile.img.url() : '';
        $scope.$on('$ionicView.beforeEnter', function () {
            $scope.unreadChats = Photogram.getUnreadChatsCount()
        })
        $scope.$on('unreadChatsCountUpdated', function () {
            $scope.unreadChats = Photogram.getUnreadChatsCount()
        })

        $scope.$on('$ionicView.enter', function () {
            if (profile.enabled) {
                // Check for any previously loaded matches
                $scope.matches = Photogram.getPotentialMatches()
                // If we haven't searched yet or we are coming back to the screen and there isn't any results then search for more
                if (!$scope.matches || $scope.matches.length === 0)
                    $scope.searchAgain()
            }
        })

        $scope.$on('newPotentialMatches', function () {
            $scope.matches = Photogram.getPotentialMatches()
        })

        $scope.searchAgain = function () {
            $scope.matches = null
            updatePotentialMatches()
        }


        var MIN_SEARCH_TIME = 2000
        function updatePotentialMatches() {

            var startTime = Date.now()
            Photogram.updatePotentialMatches()
                    .then(function (result) {
                        $log.log('CardsCtrl: found ' + result.length + ' potential matches')
                        result.map(function (profile) {
                            profile.image = profile.img.url()
                        })
                        // Make the search screen show for at least a certain time so it doesn't flash quickly
                        var elapsed = Date.now() - startTime
                        if (elapsed < MIN_SEARCH_TIME)
                            $timeout(function () {
                                $scope.matches = result
                            }, MIN_SEARCH_TIME - elapsed)
                        else
                            $scope.matches = result
                    }, function (error) {
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
        }).then(function (modal) {
            $scope.modal = modal
        })
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove()
        })

        $scope.$on('newMatch', function (event, match) {
            $log.log('CardsCtrl.newMatch ' + match.id)
            $scope.newMatch = match
            $scope.matchProfile = Photogram.getProfileById(match.profileId)
            $scope.modal.show()
        })
        $scope.closeNewMatch = function () {
            $scope.modal.hide()
        }

        $scope.messageNewMatch = function () {
            $scope.modal.hide()
            $state.go('^.chat', {matchId: $scope.newMatch.id})
        }
// a test function for viewing the new match modal screen
        $scope.openNewMatch = function () {
            $scope.newMatch = Photogram.getMutualMatches()[0]
            $scope.modal.show()
        }

        $scope.enableDiscovery = function () {
            AppUtil.blockingCall(
                    AppService.enableDiscovery(),
                    function () {
                        $log.log('discovery enabled. updating matches...')
                        updatePotentialMatches()
                    }
            )
        }

        $scope.viewDetails = function (card) {
            $log.log('view details ' + JSON.stringify(card))
            $scope.$parent.selectedCard = card
            $state.go('^.card-info')
        }

        $scope.accept = function () {
            $log.log('accept button')
            var matchLength = $scope.matches.length
            var topMatch = $scope.matches[matchLength - 1]
            Photogram.processMatch(topMatch, true)
            topMatch.accepted = true // this triggers the animation out
            $timeout(function () {
                $scope.matches.pop()
            }, 340)
        }

        $scope.reject = function () {
            $log.log('reject button')
            var matchLength = $scope.matches.length
            var topMatch = $scope.matches[matchLength - 1]
            Photogram.processMatch(topMatch, false)
            topMatch.rejected = true // this triggers the animation out
            $timeout(function () {
                $scope.matches.pop()
            }, 340)
        }

// matches are swiped off from the end of the $scope.matches array (i.e. popped)

        $scope.cardDestroyed = function (index) {
            $scope.matches.splice(index, 1)
        }

        $scope.cardTransitionLeft = function (match) {
            Photogram.processMatch(match, false)
            if ($scope.matches.length == 0) {
// TODO auto-load more?
            }
        }
        $scope.cardTransitionRight = function (match) {
            Photogram.processMatch(match, true)
            if ($scope.matches.length == 0) {
// TODO auto-load more?
            }
        }

    }

})();