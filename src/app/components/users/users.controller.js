(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .controller('UsersHomeController', UsersHomeController)
    ;

    /** @ngInject */
    function UsersHomeController(User, users, accounts, $log, $uibModal) {
        var vm = this;

        vm.users = users;
        vm.accounts = accounts;


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
