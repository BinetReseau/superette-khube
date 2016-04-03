(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .controller('UserImportController', UserImportController)
    ;

    /** @ngInject */
    function UserImportController(User, FrankizUser, frankiz_users, $uibModalInstance) {
    // function UserImportController(User, FrankizUser) {
        var vm = this;

        vm.frankiz_users = frankiz_users;

        vm.select = function(user) {
            $uibModalInstance.close(user);
        }
    };

})();
