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
                resolve: {
                        transactions: function(Transaction) {
                            return Transaction.findAll();
                        }
                }
            })
            .state('index.transactions.details', {
                url: "/:id",
                templateUrl: "app/components/transactions/details.html",
                controller: 'TransactionsDetailController',
                controllerAs: 'TrDetailCtl',
                resolve: {
                        transaction: function(Transaction, $stateParams) {
                            return Transaction.find($stateParams.id);
                        }
                }
            })
            .state('index.transactions.list', {
                url: "/event/:event_id",
                templateUrl: "app/components/transactions/list.html",
                controller: 'TransactionsListController',
                controllerAs: 'TrListCtl',
                resolve: {
                    the_event: function(Event, $stateParams) {
                        return Event.find($stateParams.event_id);
                    },
                    transactions: function(Transaction, $stateParams) {
                        return Transaction.findAll({event: $stateParams.event_id});
                    }
                }
            })
            .state('index.transactions.heavy_make', {
                url: "/make/:event_id",
                templateUrl: "app/components/transactions/heavy_make.html",
                controller: 'TransactionsHeavyMakeController',
                controllerAs: 'TrHeavyMakeCtl',
                resolve: {
                    the_event: function(Event, $stateParams) {
                        return Event.find($stateParams.event_id);
                    }
                }
            })

    ;
}
})();
