(function() {
    'use strict';

    angular
        .module('platalbankKhube.accounts')
        .directive('accountShort', accountShort)
    ;

    /** @ngInject */
    function accountShort() {
        return {
            restrict: 'E',
            scope: {
                account: '=account',
            },
            templateUrl: 'app/components/accounts/directive-short.html'
        };
    }
})();
