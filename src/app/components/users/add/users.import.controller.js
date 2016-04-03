(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .controller('UserImportController', UserImportController)
    ;

    /** @ngInject */
    function UserImportController(User, FrankizUser, frankiz_users) {
    // function UserImportController(User, FrankizUser) {
        var vm = this;

        vm.frankiz_users = frankiz_users
    };

})();
