(function() {
    'use strict';

    angular
        .module('platalbankKhube', [
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'js-data',
            'ui.router',
            'ui.bootstrap',
            'infinite-scroll',

            'platalbankKhube.home',
            'platalbankKhube.transactions',
            'platalbankKhube.accounts',
            'platalbankKhube.events',
            'platalbankKhube.users',
            'platalbankKhube.auth',
            'platalbankKhube.orders',
            'platalbankKhube.myAccount',
        ])
    ;
})();
