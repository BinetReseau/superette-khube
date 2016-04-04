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
                template: "<ui-view></ui-view>"
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
                    app_account: function(Account, OWNER_USERNAME) {
                        return Account.findAll({short_name : OWNER_USERNAME});
                    },
                    app_event: function(Event) {
                        return Event.findAll();
                    }
                }
            })
        ;
    }
})();
