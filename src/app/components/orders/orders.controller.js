(function() {
    'use strict';

    angular
        .module('platalbankKhube.orders')
        .controller('OrdersHomeController', OrdersHomeController)
    ;

    /** @ngInject */
    function OrdersHomeController(User, Account, accounts, $log, $filter, app_owner) {
        var vm = this;

        vm.accounts = accounts;

        vm.chosen = null;
        vm.current_account = null;
        vm.app_owner = app_owner;

        


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
            vm.query = "";
        };



    }
})();
