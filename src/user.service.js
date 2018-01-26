angular.module('shared', [])
    .factory('userService', function ($http) {

        get = function () {
            return $http.get('https://api.github.com/users')
        }

        return {
            get: get
        }
    });