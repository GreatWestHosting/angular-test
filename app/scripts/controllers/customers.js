'use strict';

/**
 * @ngdoc function
 * @name angTestApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the angTestApp
 */
angular.module('angTestApp')
  .controller('CustomersCtrl', function($scope, $http) {
	$http.get('customers.json').then(function (response) {
	  $scope.myData = response.data.records;
	  console.log($scope.myData);
	}); // end get
  }); // end controller


