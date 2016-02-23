(function() {
    'use strict';

    angular
        .module('platalbankKhube.events')
        .directive('eventDetailed', eventDetailed)
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

    /** @ngInject */
    function eventDetailed() {
        return {
            restrict: 'E',
            scope: {
                event: '=event'
            },
            templateUrl: 'app/components/events/directive.html'
        };
    }
})();
