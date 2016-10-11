(function() {
    'use strict';

    angular
    .module('platalbankKhube.myAccount')
    .controller('MyAccountHomeController', MyAccountHomeController);

    /** @ngInject */
    function MyAccountHomeController(AuthService, $state, $localStorage, account) {
        var vm = this;
        vm.account = account;

    }
})();
