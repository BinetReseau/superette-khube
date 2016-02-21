(function() {
    'use strict';

    angular.module('platalbankKhube.transactions')
        .config(TransactionsRouter);

    /** @ngInject */
function TransactionsRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/transactions', '/transactions/');
    $stateProvider
        .state('index.transactions', {
            url: "transactions",
            template: "<ui-view />"
        })
            .state('index.transactions.home', {
                url: "/",
                templateUrl: "app/components/transactions/home.html",
                controller: 'TransactionsHomeController',
                controllerAs: 'TransHomeCtl',

                }
            })
    ;
}
})();
