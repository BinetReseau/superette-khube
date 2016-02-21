(function() {
    'use strict';

    angular
    .module('platalbankKhube')
    .config(config);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
    }
    
})();
