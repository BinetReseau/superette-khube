(function() {
    'use strict';

    angular
        .module('platalbankKhube.events')
        .controller('EventsHomeController', EventsHomeController)
        .controller('EventsDetailController', EventsDetailController)
    ;

    /** @ngInject */
    function EventsHomeController(Event, events, $log) {
        var vm = this;

        vm.events = events;
    }

    /** @ngInject */
    function EventsDetailController(Event, event, $log) {
        var vm = this;

        vm.event = event;
    }
})();
