(function () {
    'use strice'

    angular.module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        $scope.message = "Hello Bangladesh";
    }
})();