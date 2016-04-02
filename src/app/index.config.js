(function() {
    'use strict';

    angular
        .module('platalbankKhube')
        .config(config)
    ;

    /** @ngInject */
    function config($logProvider, $httpProvider, DSProvider, DSHttpAdapterProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        $httpProvider.interceptors.push('AuthInterceptor');

        angular.extend(DSProvider.defaults, {
            useFilter: true
        });

        angular.extend(DSHttpAdapterProvider.defaults, {
            useFilter: true,
            default: true,
            deserialize: function(resourceConfig, data) {
                return !data ? data :
                       !('data' in data) ? data :
                       !('results' in data.data) ? data.data : data.data.results;
            },
            basePath: 'http://127.0.0.1:8000/api',
            forceTrailingSlash: true
        });
    }

})();
