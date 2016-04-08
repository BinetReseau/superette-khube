(function() {
    'use strict';

    angular
        .module('platalbankKhube.transactions')
        .factory('Transaction', Transaction)
    ;

    /** @ngInject */
    function Transaction(DS) {
        return DS.defineResource({
            name: 'transaction',
            actions: {
                cancel: {
                    method: 'GET'
                }
            }
        });
    }
})();
