(function() {
    'use strict';

    angular
    .module('platalbankKhube')
    .config(config);

    /** @ngInject */
    function config($logProvider, DSProvider, DSHttpAdapterProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        angular.extend(DSProvider.defaults, {
            useFilter: true
        });
        angular.extend(DSHttpAdapterProvider.defaults, {
            useFilter: true,
            default: true,
            deserialize: function(resourceConfig, data) {
                console.log(data)
              return data ? ('data' in data ? (('results' in data.data ? data.data.results : data.data)) : data) : data;
            },
            basePath: 'http://127.0.0.1:8000/api',
            forceTrailingSlash: true
        });

    }

})();
