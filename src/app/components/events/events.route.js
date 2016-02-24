(function() {
    'use strict';

    angular
        .module('platalbankKhube.events')
        .config(EventsRouter)
    ;

    /** @ngInject */
    function EventsRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/events', '/events/');
        $stateProvider
            .state('index.events', {
                url: "events",
                template: "<ui-view></ui-view>"
            })
            .state('index.events.home', {
                url: "/",
                templateUrl: "app/components/events/home.html",
                controller: 'EventsHomeController',
                controllerAs: 'EvHomeCtl',
                resolve: {
                    events: function(Event) {
                        return Event.findAll();
                    }
                }
            })
            .state('index.events.details', {
                url: "/:id",
                templateUrl: "app/components/events/details.html",
                controller: "EventsDetailController",
                controllerAs: "EvDetailCtl",
                resolve: {
                    event: function(Event, $stateParams) {
                        return Event.find($stateParams.id);
                    }
                }
            })
        ;
    }
})();
