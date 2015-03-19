'use strict';

/**
 * @ngdoc function
 * @name datepickerApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the datepickerApp
 */
angular.module('datepickerApp')
  .controller('CalendarCtrl', function () {
    console.log('CalendarCtrl created');

    var vm = this;
    vm.calendar = 'JANUARY';
    vm.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    vm.monthMatrix = [['January','February','March','April'],['May','June','July','August'],['September','October','November','December']];
    vm.dayMatrix = [['31','29','31','30'],['31','30','31','31'],['30','31','30','31']];
    vm.getMonths = getMonths;
    vm.getMonth = getMonth;
    vm.isDate = isDate;

    function isDate(w,d,t,m){ // jshint ignore:line
      if((((w*7)+1)+d)<=(vm.dayMatrix[t][m])) {
        return true;
      }
    }

    function getMonth(t,m){ // jshint ignore:line
      return vm.monthMatrix[t][m];
    }

    function getMonths(){ // jshint ignore:line
      return vm.months;
    }

  });
