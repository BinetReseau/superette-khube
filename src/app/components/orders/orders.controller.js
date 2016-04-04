(function() {
    'use strict';

    angular
        .module('platalbankKhube.orders')
        .controller('OrdersHomeController', OrdersHomeController)
    ;

    /** @ngInject */
    function OrdersHomeController(User, Account, Transaction, transactions, accounts, $log, $filter, app_account, app_event) {
        var vm = this;

        vm.alerts = [];

        vm.accounts = accounts;
        vm.transactions = transactions;

        vm.chosen = null;
        vm.current_account = null;
        vm.app_account = app_account[0];
        vm.app_event = app_event[0];


        vm.analyse = function(input) {

            var amount = parseFloat(input);
            if (!isNaN(amount)) {
                var debit = {
                    amount: amount,
                    type: "debit",
                    description: "Débiter " + amount.toString() + "€"
                };
                var credit = {
                    amount: amount,
                    type: "credit",
                    description: "Créditer " + amount.toString() + "€"
                };
                return [debit, credit];
            }
            return ($filter('filter')(accounts,input));

        }

        vm.submit = function(chosen) {
            vm.chosen = chosen;
            if (chosen.type) {
                vm.doTransaction(chosen);
            } else {
                vm.changeAccount(chosen);
            }
        };

        vm.changeAccount = function(account) {
            vm.current_account = account;
        };

        vm.amountToInteger = function(amount) {
            return Math.floor(amount * 100);
        }

        vm.doTransaction = function(o) {
            if (vm.current_account != null) {
                var transaction = Transaction.createInstance();
                transaction.state = 'C';
                transaction.amount = vm.amountToInteger(o.amount);
                transaction.event = vm.app_event.id;

                if (o.type == "debit") {
                    vm.current_account.balance -= transaction.amount;
                    transaction.credited_account = vm.app_account.id;
                    transaction.debited_account  = vm.current_account.id;
                    transaction.label = "debit";
                } else if (o.type == "credit") {
                    vm.current_account.balance += transaction.amount;
                    transaction.debited_account  = vm.app_account.id;
                    transaction.credited_account = vm.current_account.id;
                    transaction.label = "credit";
                } else {
                    return;
                }
                Transaction.create(transaction).then(function(transaction) {
                    vm.transactions.push(transaction);
                    vm.alerts.push({type: 'info', msg: "Transaction effectuée"});
                    $log.debug('Transaction ajoutée avec succès.');
                }, function(e) {
                    $log.error(e);
                    vm.alerts.push({type: 'danger', msg: e.data});
                });
            }
        };

    };
})();
