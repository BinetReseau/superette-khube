(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .factory('User', User)
        .factory('FrankizUser', FrankizUser)
    ;

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
    };
    function FrankizUser(DS) {
        return DS.defineResource('frankiz_user');
    };

})();
