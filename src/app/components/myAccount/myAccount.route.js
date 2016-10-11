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
                    account: function (Account,AuthService) {
                        return Account.find(AuthService.getUser().id);
                    },
                    transactions_debit: function (Account, Transaction, AuthService) {
                        return Account.find(AuthService.getUser().id).then(function (value) {
                            return Transaction.findAll({debited_account:value.id});
                        });
                    },
                    transactions_credit: function (Account, Transaction, AuthService) {
                        return Account.find(AuthService.getUser().id).then(function (value) {
                            return Transaction.findAll({credited_account:value.id});
                        });
                    },
                }
            })
    }
})();
