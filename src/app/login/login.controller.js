(function() {
    'use strict';

    angular
        .module('platalbankKhube.auth')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController() {
    	var vm = this;
    }
    /*function LoginController($state, AuthService, $timeout, $modalInstance) {
    	var vm = this;

    	$timeout(function () {
            document.getElementById("usernameInput").focus();
        }, 300);

        vm.alerts = [];
        vm.credentials = {
            username: '',
            password: ''
        };

        vm.connexion = function (login) {
            vm.loginError = false;
            vm.inLogin = true;
            AuthService.login(login).then(
                function(user) {
                    vm.login = {username: '', password: ''};
                    vm.inLogin = false;
                    $modalInstance.close(user);
                }, function() {
                    vm.loginError = true;
                    vm.alerts.push({type: 'danger', msg: 'Échec de l\'authentification.'});
                    vm.login.password = '';
                    vm.inLogin = false;
                }
            );
        };
    	
    }*/

})();
