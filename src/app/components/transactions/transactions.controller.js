(function() {
    'use strict';

    angular
        .module('platalbankKhube.transactions')
        .controller('TransactionsHomeController', TransactionsHomeController)
        .controller('TransactionsDetailController', TransactionsDetailController)
        .controller('TransactionsListController', TransactionsListController)
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

    function TransactionsListController(Transaction, transactions, Event, the_event, $log) {
        var vm = this;

        vm.transactions = transactions;
        vm.the_event = the_event;
    }
})();
