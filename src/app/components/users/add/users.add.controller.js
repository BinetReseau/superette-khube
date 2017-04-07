(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .controller('UserAddController', UserAddController)
    ;

    /** @ngInject */
    function UserAddController(User, Account, FrankizUser, $log, $uibModal) {
        var vm = this;

        vm.alerts = [];
        vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
        };

        vm.user = User.createInstance();

        vm.saveUser = function(user) {
            if (user.username == null || user.username == "") {
                user.username = _.split(user.email, '@')[0];
            }
            User.create(user).then(function(the_user) {

                $log.debug(the_user);
                vm.alerts.push({type: 'success', msg: "Utilisateur créé."});

                var account = Account.createInstance();
                account.owner = the_user.id;
                account.description = "Compte supérette de " + the_user.first_name + " " + the_user.last_name;
                account.short_name = the_user.username;
                Account.create(account).then(function() {
                    $log.debug('Compte créé');
                    vm.alerts.push({type: 'success', msg: "Compte créé."});
                }, function(e) {
                    vm.alerts.push({type: 'danger', msg: e.data});
                    $log.error(e);
                });

            }, function(e) {
                vm.alerts.push({type: 'danger', msg: e.data});
                $log.error(e);
            });
        };


        vm.importOpen = function() {
            var modalInstance = $uibModal.open({
                templateUrl: "app/components/users/add/import.html",
                controller: 'UserImportController',
                controllerAs: 'UseImpCtl',
                resolve: {
                    frankiz_users: function(FrankizUser) {
                        return FrankizUser.findAll();
                    }
                }
            });
            modalInstance.result.then(function (user) {
                vm.user.username = user.uid;
                vm.user.first_name = user.firstname;
                vm.user.last_name = user.lastname;
                vm.user.promo = user.promo;
                vm.user.email = user.mail;
                vm.user.room = user.room;
                vm.user.phone = user.phone;
            });
        };
    };
})();
