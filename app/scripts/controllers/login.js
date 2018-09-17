'use strict';

/**
 * @ngdoc function
 * @name angTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angTestApp
 */
angular.module('angTestApp')
  .controller('LoginCtrl', function ($scope,$log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.$log = $log;
    $scope.message = ('Got here!');
  });
