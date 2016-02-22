(function() {
    'use strict';

    angular.module('platalbankKhube.transactions')
        .directive('transactionShort', transactionShort)
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


})();
