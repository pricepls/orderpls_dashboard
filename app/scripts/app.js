'use strict';

var orderpls = angular.module('OrderplsApplication',
    [
        'ngRoute',
        'ngResource',
        'ngCookies'

    ])
    .config(function($routeProvider,$locationProvider) {
      $routeProvider

        .when('/', {
            templateUrl : 'views/main.html',
            controller  : 'mainController'
        })

        .when('/login', {
            templateUrl : 'views/login.html',
            controller  : 'loginController'
        })
        .when('/home', {
            templateUrl : 'views/home.html',
            controller  : 'homeController'
        })
        .when('/account',{
            templateUrl:'views/account.html',
            controller:'accountController'
        })
        .otherwise({
          redirectTo: '/'
        });


      //$locationProvider.html5Mode(true);
});
