(function() {
    'use strict';

    angular
        .module('platalbankKhube.accounts')
        .config(AccountsRouter)
    ;

    /** @ngInject */
    function AccountsRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/accounts', '/accounts/');
        $stateProvider
            .state('index.accounts', {
                url: "accounts",
                template: "<ui-view />"
            })
            .state('index.accounts.home', {
                url: "/",
                templateUrl: "app/components/accounts/home.html",
                controller: 'AccountsHomeController',
                controllerAs: 'AccHomeCtl',
                resolve: {
                    accounts: function(Account) {
                        return Account.findAll();
                    }
                }
            })
        ;
    }
})();
