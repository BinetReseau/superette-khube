(function() {
    'use strict';

    angular
        .module('platalbankKhube.transactions')
        .controller('TransactionsHomeController', TransactionsHomeController);

    /** @ngInject */
    function TransactionsHomeController(Transaction, transactions, $log) {
        var vm = this;

        vm.transactions = transactions;
    }
})();
