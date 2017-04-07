(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .controller('UsersHomeController', UsersHomeController)
    ;

    /** @ngInject */
    function UsersHomeController(User, users, accounts, $log, $uibModal) {
        var vm = this;

        vm.loadNb = 40;
        vm.users = users;
        vm.accounts = accounts;
        vm.showZero = false;

        vm.loadMore = function() {
            vm.loadNb += 20;
        };

        vm.balanceIsNotZero = function(value) {
            return vm.showZero || value.balance != 0;
        };

        vm.openNegative = function() {
                var modalInstance = $uibModal.open({
                    templateUrl: "app/components/users/negative.html",
                    controller: 'UsersNegativeController',
                    controllerAs: 'UseNegCtl',
                    resolve: {
                        accounts: function(Account) {
                            return Account.findAll();
                        }
                    }
                });
        };
    }
})();
