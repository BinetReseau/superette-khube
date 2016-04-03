(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .directive('userShort', userShort)
    ;

    /** @ngInject */
    function userShort() {
        return {
            restrict: 'E',
            scope: {
                user: '=user',
            },
            templateUrl: 'app/components/users/directive-short.html'
        };
    }
})();
