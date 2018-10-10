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
  .module(
	'angTestApp',
	[
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'xeditable'
	]
  ) /* end module declaration */
  .config(
	  function ($routeProvider) {
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
			controller: 'customersCtrl',
			controllerAs: 'customers'
		  })
		  .when('/calculator', {
			templateUrl: 'views/calculator.html',
			controller: 'CalculatorCtrl',
			controllerAs: 'calculator'
		  })
		  .when('/login', {
			templateUrl: 'views/login.html',
			//controller: 'LoginCtrl',
			//controllerAs: 'login'
		  })
		  .otherwise({
			redirectTo: '/'
		  });
	  }
  ) /* end config */
  .run(
      [
	      'editableOptions',
		  function(editableOptions) {
             editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
	      }
	  ] // end array
  ); /* end run  */

