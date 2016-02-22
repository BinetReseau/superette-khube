(function() {
    'use strict';

    angular.module('platalbankKhube.events')
        .config(EventsRouter);

    /** @ngInject */
function EventsRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/events', '/events/');
    $stateProvider
        .state('index.events', {
            url: "events",
            template: "<ui-view />"
        })
            .state('index.events.home', {
                url: "/",
                templateUrl: "app/components/events/home.html",
                controller: 'EventsHomeController',
                controllerAs: 'EvHomeCtl',
                }
            })
    ;
}
})();
