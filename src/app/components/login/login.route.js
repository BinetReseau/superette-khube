(function() {
    'use strict';

    angular
        .module('platalbankKhube.auth')
        .config(LoginRouter);


    /** @ngInject */
    function LoginRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/login', '/login/');
        $stateProvider
            .state('index.login', {
                url: "login",
                template: "<ui-view></ui-view>"
            })
            .state('index.login.home', {
                url: "/",
                templateUrl: "app/components/login/home.html",
                controller: 'LoginController',
                controllerAs: 'LoginCtl',
            })
        ;
    }

})();
