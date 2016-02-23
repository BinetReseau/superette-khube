(function() {
    'use strict';

    angular
        .module('platalbankKhube.accounts')
        .factory('Account', Account)
    ;

    /** @ngInject */
    function Account(DS) {
        return DS.defineResource('account');
    }
})();
