(function() {
    'use strict';

    angular
    .module('platalbankKhube',
        ['ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'js-data',
        'ui.router',

        'platalbankKhube.home',
        'platalbankKhube.transactions',
        ]);

})();
