(function() {
    'use strict';

    angular
        .module('platalbankKhube.transactions')
        .controller('TransactionsHomeController', TransactionsHomeController)
        .controller('TransactionsDetailController', TransactionsDetailController)
        .controller('TransactionsListController', TransactionsListController)
        .controller('TransactionsHeavyMakeController', TransactionsHeavyMakeController)
    ;

    /** @ngInject */
    function TransactionsHomeController(Transaction, transactions, $log) {
        var vm = this;

        vm.transactions = transactions;
    }

    function TransactionsDetailController(Transaction, transaction, $log) {
        var vm = this;

        vm.transaction = transaction;

        vm.cancelTransaction = function(transaction) {
            transaction.state = 'X';
            transaction.credited_account = transaction.credited_account.url;
            transaction.debited_account = transaction.debited_account.url;
            transaction.event = transaction.event.url;
            Transaction.save(transaction);
        }
    }

    function TransactionsListController(Transaction, transactions, Event, the_event, $log) {
        var vm = this;

        vm.transactions = transactions;
        vm.the_event = the_event;
    }

    function TransactionsHeavyMakeController(Transaction, Event, Account, the_event, $log) {
        var vm = this;

        vm.the_event = the_event;
        vm.transaction = Transaction.createInstance();
        vm.transaction.state = 'P';
        vm.transaction.amount = 0;
        Account.find(1).then(function(a) {
            vm.cAccount = a;
            vm.transaction.credited_account = vm.cAccount.url;
        });
        Account.find(2).then(function(a) {
            vm.dAccount = a;
            vm.transaction.debited_account = vm.dAccount.url;
        });
        vm.transaction.event = the_event.url;

        vm.saveTransaction = function(transaction) {
            Transaction.create(transaction).then(function() {
                $log.debug('Transaction ajoutée avec succès.');
            }, function(e) {
                $log.error(e);
            });
        }
    }
})();
