(function() {
    'use strict';

    angular
        .module('platalbankKhube.myAccount')
        .config(MyAccountRouter)
    ;

    /** @ngInject */
    function MyAccountRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/myaccount', '/myaccount/');
        $stateProvider
            .state('index.myAccount', {
                url: "myaccount",
                template: "<ui-view></ui-view>"
            })
            .state('index.myAccount.home', {
                url: "/",
                templateUrl: "app/components/myAccount/home.html",
                controller: 'MyAccountHomeController',
                controllerAs: 'MyAccHomeCtl',
                resolve: {
                    account: function(Account,AuthService) {
                        return Account.find(AuthService.getUser().id);
                    }
                }
            })
    }
})();
