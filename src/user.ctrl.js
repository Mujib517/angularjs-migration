angular.module('app')
    .controller('UserCtrl', function ($scope) {
        $scope.users = [{ id: 1, name: "Mujib" }];
    });