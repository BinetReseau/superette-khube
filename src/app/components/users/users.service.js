(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .factory('User', User);

    /** @ngInject */
    function User(DS) {
        return DS.defineResource({
            name: 'user',
            actions: {
                me: {
                    method: 'GET'
                }
            }
        });
    }
})();
