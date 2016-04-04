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
                    app_owner: function(User, OWNER_USERNAME) {
                        return User.findAll({username : OWNER_USERNAME})
                    }
                }
            })
        ;
    }
})();
