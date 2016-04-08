(function() {
    'use strict';

    angular
        .module('platalbankKhube.orders')
        .directive('orderDetailed', orderDetailed)
    ;

    /** @ngInject */
    function orderDetailed() {
        return {
            restrict: 'E',
            scope: {
                currentAccount: '=account',
                transactions: '=transactions',
                cancelTransaction: '&'
            },
            templateUrl: 'app/components/orders/detail/directive.html'
        };
    }
})();
