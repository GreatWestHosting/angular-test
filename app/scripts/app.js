'use strict';

/**
 * @ngdoc overview
 * @name angTestApp
 * @description
 * # angTestApp
 *
 * Main module of the application.
 */
angular
    .module('angTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomersCtrl',
        controllerAs: 'customers'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        //controller: 'LoginCtrl',
        //controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
