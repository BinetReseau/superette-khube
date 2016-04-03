(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .controller('UsersHomeController', UsersHomeController)
    ;

    /** @ngInject */
    function UsersHomeController(User, users, $log) {
        var vm = this;

        vm.users = users;
    }
})();
