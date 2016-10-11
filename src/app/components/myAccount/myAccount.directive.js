(function() {
    'use strict';

    angular
        .module('platalbankKhube.myAccount')
        .directive('myAccountDetailed', myAccountDetailed)
    ;

    /** @ngInject */
    function myAccountDetailed() {
        return {
            restrict: 'E',
            scope: {
                currentAccount: '=account',
                transactions: '=transactions',
                // cancelTransaction: '&',
                // loadMore: '&',
                // loadNb: '=loadnb'
            },
            templateUrl: 'app/components/myAccount/directive.html'
        };
    }
})();
