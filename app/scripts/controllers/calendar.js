'use strict';

/**
 * @ngdoc function
 * @name datepickerApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the datepickerApp
 */
angular.module('datepickerApp')
  .controller('CalendarCtrl', function ($scope) {
    console.log('CalendarCtrl created');

    var vm = this;
    vm.calendar = 'JANUARY';
    vm.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    vm.monthMatrix = [['January','February','March','April'],['May','June','July','August'],['September','October','November','December']];
    vm.getMonths = getMonths;
    vm.getMonth = getMonth;

    function getMonth(t,m){ // jshint ignore:line
      return vm.monthMatrix[t][m];
    }

    function getMonths(){ // jshint ignore:line
      return vm.months;
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
