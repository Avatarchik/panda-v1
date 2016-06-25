(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name UserSignupCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('UserSignupCtrl', UserSignupController);

  function UserSignupController($state, UserForm, Notify, Loading, Photogram, User) {
    var vm = this;
    vm.formFields = UserForm.register;
    vm.submitRegister = submitRegister;

    init();

    function init() {
      vm.form = {
        email: '',
        password: ''
      };
    }

    function submitRegister(rForm, data) {

      if (rForm.$valid) {
        Loading.start();
        var form = angular.copy(data);
        User
          .register(form)
          .then(function (resp) {
            console.log(resp);
            // Add Actvity History
            Photogram
              .addActivity({
                action: 'registered'
              });

            // After register, login
            User
              .login({
                email: form.email,
                password: form.password
              })
              .then(function (data) {
                console.log(data);
                User.init();
                Loading.end();
                $state.go('useravatar', {
                  clear: true
                });
              })
              .catch(function (resp) {
                console.log(resp);
                Loading.end();
                Notify.alert({
                  title: 'Ops',
                  text: resp.message
                });
              });
          })
          .catch(function (resp) {
            console.log(resp);
            Loading.end();
            Notify.alert({
              title: 'Ops',
              text: resp.message
            });
          });
      }
    }
  }


})();