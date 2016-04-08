(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .config(UsersRouter)
    ;

    /** @ngInject */
    function UsersRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/users', '/users/');
        $stateProvider
            .state('index.users', {
                url: "users",
                template: "<ui-view></ui-view>"
            })
            .state('index.users.home', {
                url: "/",
                templateUrl: "app/components/users/home.html",
                controller: 'UsersHomeController',
                controllerAs: 'UseHomeCtl',
                resolve: {
                    users: function(User) {
                        return User.findAll();
                    },
                    accounts: function(Account) {
                        return Account.findAll();
                    }
                }
            })
            .state('index.users.add', {
                url: "/add",
                templateUrl: "app/components/users/add/add.html",
                controller: 'UserAddController',
                controllerAs: 'UseAddCtl'
            })
            .state('index.users.details', {
                url: "/:id",
                templateUrl: "app/components/users/detail/details.html",
                controller: 'UserDetailController',
                controllerAs: 'UseDetailCtl',
                resolve: {
                    user: function(User, $stateParams) {
                        return User.find($stateParams.id);
                        },
                    account: function(Account, $stateParams) {
                        return Account.findAll({owner:$stateParams.id});
                    }
                }
            })
        ;
    }
})();
