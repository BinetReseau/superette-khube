(function() {
    'use strict';

    angular
    .module('platalbankKhube')
    .controller('MainController', MainController);

    /** @ngInject */
    function MainController(AuthService, $state, $localStorage) {
        var vm = this;

        vm.user = null;

        vm.isLoggedIn = function() {
            vm.user = $localStorage.auth.user;
            return AuthService.isAuthenticated();
        };

        vm.logout = function() {
            vm.user = null;
            AuthService.logout();
            $state.go('index.home');
        };


    }
})();
