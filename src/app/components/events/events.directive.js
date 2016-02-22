(function() {
    'use strict';

    angular.module('platalbankKhube.events')
        .directive('eventShort', eventShort)
    ;

    /** @ngInject */
    function eventShort() {
        return {
            restrict: 'E',
            scope: {
                event: '=event',
            },
            templateUrl: 'app/components/events/directive-short.html'
        };
    }
})();
