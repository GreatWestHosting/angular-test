'use strict';

/**
 * @ngdoc function
 * @name angTestApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the angTestApp
 */
angular.module('angTestApp')
  .controller('customersCtrl', function($scope, $http) {
//	$http.get('customers.json').then(function (response) {
//	  $scope.myData = response.data.records;
	$http.get('customers').then(function (response) {
	  $scope.myData = response.data;
	}); // end get
  }); // end controller

