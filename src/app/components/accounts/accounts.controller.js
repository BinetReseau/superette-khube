(function() {
    'use strict';

    angular
        .module('platalbankKhube.accounts')
        .controller('AccountsHomeController', AccountsHomeController);

    /** @ngInject */
    function AccountsHomeController(Account, accounts, $log) {
        var vm = this;

        vm.accounts = accounts;
    }
})();
