(function() {
    'use strict';

    angular
        .module('platalbankKhube.transactions')
        .controller('TransactionsHomeController', TransactionsHomeController)
        .controller('TransactionsDetailController', TransactionsDetailController)
    ;
    
    /** @ngInject */
    function TransactionsHomeController(Transaction, transactions, $log) {
        var vm = this;

        vm.transactions = transactions;
    }

    function TransactionsDetailController(Transaction, transaction, $log) {
        var vm = this;

        vm.transaction = transaction;
    }

})();
