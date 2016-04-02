(function() {
    'use strict';

    angular
        .module('platalbankKhube.auth')
        .config(loginRouter);

    /** @ngInject */
    function loginRouter($stateProvider) {
        $stateProvider
            .state('login',{
                url: "/login",
                templateUrl: "app/login/home.html",
                controller: "LoginController",
                controllerAs: "LoginCtl"
            });
    }
})();