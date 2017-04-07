(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .controller('UserImportController', UserImportController)
    ;

    /** @ngInject */
    function UserImportController(User, FrankizUser, frankiz_users, $uibModalInstance, $http) {
    // function UserImportController(User, FrankizUser) {
        var vm = this;

        vm.frankiz_users = frankiz_users;

        vm.fetchLdap = function(query) {
            console.log("Making query")
            return $http.get('http://autocomplete.binets.fr/ldap_search', {
              params: {
                q: query,
              }
            }).then(function(response){
              return response.data.users;
            });
        };

        vm.select = function(user) {
            $uibModalInstance.close(user);
        }
    };

})();
