(function() {
    'use strict';

    angular
        .module('platalbankKhube.events')
        .controller('EventsHomeController', EventsHomeController);

    /** @ngInject */
    function EventsHomeController(Event, events, $log) {
        var vm = this;

        vm.events = events;
    }
})();
