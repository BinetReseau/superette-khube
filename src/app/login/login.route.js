(function() {
    'use strict';

    angular
    .module('platalbankKhube')
    .config(loginrouter);

    /** @ngInject */
    function loginrouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login',{
                url: "/login",
                templateUrl: "app/login/home.html"
            });
    }
})();