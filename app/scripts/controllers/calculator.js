'use strict';

/**
 * @ngdoc function
 * @name angTestApp.controller:CalculatorCtrl
  * @description
 * # CustomersCtrl
 * Controller of the angTestApp
 */
  angular.module('angTestApp')
   .controller('CalculatorCtrl', function($scope) {
      $scope.quote = new Quote();
	  console.log($scope.quote);
   });


