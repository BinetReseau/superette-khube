(function() {
    'use strict';

    angular.module('platalbankKhube.transactions')
        .directive('transactionShort', transactionShort)
        .directive('transactionDetailed', transactionDetailed)
    ;

    /** @ngInject */
    function transactionShort() {
        return {
            restrict: 'E',
            scope: {
                transaction: '=transaction',
            },
            templateUrl: 'app/components/transactions/directive-short.html'
        };
    }

    /** @ngInject */
    function transactionDetailed() {
        return {
            restrict: 'E',
            scope: {
                transaction: '=transaction',
            },
            templateUrl: 'app/components/transactions/directive.html'
        };
    }

})();
