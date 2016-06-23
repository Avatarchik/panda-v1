(function () {
  'use strict';
  angular
    .module('app.user')
    .factory('UserForm', UserFormFactory);

  function UserFormFactory($translate) {

    return {
      login: login(),
      register: register(),
      profile: profile()
    };

    function login() {
      return [{
        type: 'input',
        key: 'email',
        templateOptions: {
          type: 'email',
          placeholder: $translate.instant('USER.FORM.EMAIL'),
          icon: 'icon-envelope',
          required: true,
          iconPlaceholder: true
        }
      }, {
        type: 'input',
        key: 'password',
        templateOptions: {
          type: 'password',
          placeholder: $translate.instant('USER.FORM.PASSWORD'),
          icon: 'icon-lock',
          required: true,
          iconPlaceholder: true
        }
      }];
    }

    function register() {
      return [{
        type: 'input',
        key: 'email',
        templateOptions: {
          type: 'email',
          placeholder: $translate.instant('USER.FORM.EMAIL'),
          icon: 'icon-envelope',
          required: true,
          iconPlaceholder: true
        }
      }, {
        type: 'input',
        key: 'password',
        templateOptions: {
          type: 'password',
          placeholder: $translate.instant('USER.FORM.PASSWORD'),
          icon: 'icon-lock',
          required: true,
          iconPlaceholder: true
        }
      }];
    }

    function profile() {
      return [{
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          placeholder: $translate.instant('USER.FORM.NAME'),
          icon: 'icon-user',
          required: true,
          iconPlaceholder: true
        }
      }, {
        key: 'status',
        type: 'input',
        templateOptions: {
          type: 'text',
          placeholder: $translate.instant('USER.FORM.STATUS'),
          icon: 'ion-quote',
          required: true,
          iconPlaceholder: true
        }
      }, {
        type: 'select',
        key: 'gender',
        templateOptions: {
          label: $translate.instant('USER.FORM.GENDER'),
          options: [{
            'label': $translate.instant('USER.FORM.MAN'),
            'id': 'male',
          }, {
            'label': $translate.instant('USER.FORM.WOMAN'),
            'id': 'female',
          }],
          valueProp: 'id',
          labelProp: 'label',
          icon: 'icon-list',
          iconPlaceholder: true
        }
      }];
    }

  }


})();