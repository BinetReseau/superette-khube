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
            
            },
            templateUrl: 'app/components/orders/detail/directive.html'
        };
    }
})();
