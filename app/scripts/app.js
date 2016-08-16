'use strict';

/**
 * @ngdoc overview
 * @name OrderplsApplication
 * @description
 * # OrderplsApplication
 *
 * Main module of the application.
 */
var orderpls = angular.module('orderplsApplication',
    [
      'ngRoute',
      'ngResource',
      'ngCookies',
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'

    ]);

orderpls.config(['$routeProvider','$locationProvider','$httpProvider',function($routeProvider,$locationProvider,$httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $routeProvider.when('/', {
        templateUrl : 'views/main.html',
        controller  : 'mainController'
      }).when('/login', {
        templateUrl : 'views/login.html',
        controller  : 'loginController'
      })
      .when('/home', {
        templateUrl : 'views/home.html',
        controller  : 'homeController'
      }).otherwise({
        redirectTo: '/'
      });
}]);
