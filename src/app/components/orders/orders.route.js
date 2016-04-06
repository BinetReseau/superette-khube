(function() {
    'use strict';

    angular
        .module('platalbankKhube.orders')
        .config(OrdersRouter)
    ;

    /** @ngInject */
    function OrdersRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/orders', '/orders/');
        $stateProvider
            .state('index.orders', {
                url: "orders",
                templateUrl: "app/components/orders/base.html"
            })
            .state('index.orders.home', {
                url: "/",
                templateUrl: "app/components/orders/home.html",
                controller: 'OrdersHomeController',
                controllerAs: 'OrdHomeCtl',
                resolve: {
                    accounts: function(Account) {
                        return Account.findAll();
                    },
                }
            })
            .state('index.orders.details', {
                url: "/:id",
                templateUrl: "app/components/orders/detail/detail.html",
                controller: 'OrdersDetailController',
                controllerAs: 'OrdDetailCtl',
                resolve: {
                    accounts: function(Account) {
                        return Account.findAll();
                    },
                    current_account: function(Account, $stateParams) {
                        return Account.find($stateParams.id);
                    },
                    transactions: function(Transaction, $stateParams) {
                        return Transaction.findAll({debited_account:$stateParams.id}|{credited_account:$stateParams.id});
                    },
                    app_account: function(Account, OWNER_USERNAME) {
                        return Account.findAll({short_name : OWNER_USERNAME});
                    },
                    app_event: function(Event) {
                        return Event.findAll();
                    },
                }
            })
        ;
    }
})();
