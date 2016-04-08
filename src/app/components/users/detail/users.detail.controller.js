(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .controller('UserDetailController', UserDetailController)
    ;

    /** @ngInject */
    function UserDetailController(user, account, $log) {
    // function UserImportController(User, FrankizUser) {
        var vm = this;

        vm.user = user;
        vm.account = account[0];
    };

})();