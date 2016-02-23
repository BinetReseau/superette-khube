(function() {
    'use strict';

    angular
        .module('platalbankKhube.events')
        .factory('Event', Event)
    ;

    /** @ngInject */
    function Event(DS) {
        return DS.defineResource('event');
    }
})();
