(function() {
    'use strict';

    angular
        .module('platalbankKhube.orders')
        .controller('OrdersHomeController', OrdersHomeController)
        .controller('OrdersDetailController', OrdersDetailController)
    ;

    /** @ngInject */
    function OrdersHomeController($state, accounts, $log, $filter, $timeout) {
        var vm = this;

        vm.alerts = [];
        vm.accounts = accounts;
        vm.chosen = null;

        $timeout(function () {
            document.getElementById("magicBar").focus();
        }, 300);

        vm.analyse = function(input) {
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
            $state.go("index.orders.details", {id:account.id});
        };

        vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
        };

    };

    function OrdersDetailController($state, Transaction, transactions_debit, transactions_credit, accounts, current_account, $log, $filter, app_account, app_event, $timeout) {
        var vm = this;

        $timeout(function () {
            document.getElementById("detailMagicBar").focus();
        }, 300);
        vm.alerts = [];
        vm.loadNb = 40;

        vm.accounts = accounts;
        vm.transactions_debit = transactions_debit;
        vm.transactions_credit = transactions_credit;
        vm.transactions = vm.transactions_credit.concat(vm.transactions_debit);
        vm.chosen = null;
        vm.currentAccount = current_account;
        vm.app_account = app_account[0];
        vm.app_event = app_event[0];
        console.log(vm.currentAccount);

        vm.analyse = function(input) {

            var amount = parseFloat(input.replace(",","."));
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
            //vm.current_account = account;
            $state.go("index.orders.details", {id:account.id});
        };

        vm.amountToInteger = function(amount) {
             //+0.1 before flooring, otherwise, there might be strange behaviors
            return Math.floor(amount * 100 + 0.1);
        }

        vm.doTransaction = function(o) {
            if (vm.currentAccount != null) {
                if (vm.currentAccount == vm.app_account) {
                    vm.alerts.push({type: 'danger', msg: "Transaction non autorisée"});
                    return;
                }
                var transaction = Transaction.createInstance();
                transaction.state = 'C';
                transaction.amount = vm.amountToInteger(o.amount);
                transaction.event = vm.app_event.id;

                if (o.type == "debit") {
                    vm.currentAccount.balance -= transaction.amount;
                    transaction.credited_account = vm.app_account.id;
                    transaction.debited_account  = vm.currentAccount.id;
                    transaction.label = "debit";
                } else if (o.type == "credit") {
                    vm.currentAccount.balance += transaction.amount;
                    transaction.debited_account  = vm.app_account.id;
                    transaction.credited_account = vm.currentAccount.id;
                    transaction.label = "credit";
                } else {
                    return;
                }
                Transaction.create(transaction).then(function(transaction) {
                    console.log(transaction);
                    vm.transactions.push(transaction);
                    vm.alerts.push({type: 'info', msg: "Transaction effectuée"});
                    $log.debug('Transaction ajoutée avec succès.');
                }, function(e) {
                    $log.error(e);
                    vm.alerts.push({type: 'danger', msg: e.data});
                });
            }
        };

        vm.cancelTransaction = function(transaction) {
            console.log(transaction);
            if (transaction.label == "debit") {
                    vm.currentAccount.balance += transaction.amount;
                } else if (transaction.label == "credit") {
                    vm.currentAccount.balance -= transaction.amount;
                } else {
                    return;
                }
            transaction.state = 'X';
            /*var index = vm.transactions.indexOf(transaction);
            if (index != -1)
                vm.transactions.splice(index, 1);*/
            Transaction.cancel(transaction.id).then(function(){
                vm.alerts.push({type: 'info', msg: "Transaction annulée"});
            });
        }

        vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
        };

        vm.loadMore = function () {
            vm.loadNb += 20;
        };

    };
})();
