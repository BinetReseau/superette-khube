(function() {
    'use strict';

    angular
    .module('platalbankKhube.myAccount')
    .controller('MyAccountHomeController', MyAccountHomeController);

    /** @ngInject */
    function MyAccountHomeController(AuthService, $state, $localStorage, account, transactions_debit, transactions_credit) {
        var vm = this;
        vm.account = account;
        vm.transactions_debit = transactions_debit;
        vm.transactions_credit = transactions_credit;
        vm.transactions = transactions_credit.concat(transactions_debit);
    }
})();
