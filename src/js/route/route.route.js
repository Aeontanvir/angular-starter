(function () {
    'use strice'

    angular.module('app').config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                });
        }
    ]);

})();