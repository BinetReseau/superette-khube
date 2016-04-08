(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .controller('UsersNegativeController', UsersNegativeController)
    ;

    /** @ngInject */
    function UsersNegativeController(accounts, $filter) {
        var vm = this;

        vm.accounts = accounts;
        vm.lessThan = function(val) {
            return function (item) {
                //console.log(item);
                return item.balance < val;
            }
        };

        vm.negative_accounts = $filter('filter')(accounts, vm.lessThan(0));

        vm.remails = _.map(vm.negative_accounts, function(account) {
                return account.owner.email;
            });
    }
})();
