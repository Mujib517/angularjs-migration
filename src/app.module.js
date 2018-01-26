angular.module('app', ['ngRoute', 'shared'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                template: '<home></home>'
            })
            .when('/about', {
                template: '<about></about>'
            })
            .when('/users', {
                template: '<users></users>'
            })
            .otherwise({ redirectTo: '/' });
    });