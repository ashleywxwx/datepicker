'use strict';

/**
 * @ngdoc function
 * @name datepickerApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the datepickerApp
 */
angular.module('datepickerApp')
  .controller('CalendarCtrl', function (PickerSerivce) {
    console.log('CalendarCtrl created');

    var vm = this;
    vm.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    vm.monthMatrix = [['January','February','March','April'],['May','June','July','August'],['September','October','November','December']];
    vm.monthDates = [31,29,31,30,31,30,31,31,30,31,30,31];
    vm.getMonths = getMonths;
    vm.getMonth = getMonth;
    vm.isDate = isDate;
    vm.isPicked = isPicked;
    vm.startPicking = PickerSerivce.startPicking;
    vm.dayOfYear = dayOfYear;
    vm.getDate = getDate;

    var LEAP_YEAR = 2016;

    function getDate(m,d){
      // We reduce by one, since Date's month constructor is 0 based
      return new Date(LEAP_YEAR,m-1,d);
    }

    function isDate(m,d){
      if(vm.monthDates[m-1]>=d){//monthDates is 0 based
        return true;
      }
    }

    function getMonth(month){
      return vm.months[month-1];// months is 0 based
    }

    function getMonths(){ // jshint ignore:line
      return vm.months;
    }

    function isPicked(m,d){
      return(PickerSerivce.isPicked(dayOfYear(m,d)))
    }

    function dayOfYear(m,d){

      // Get start and end dates
      var startDate = getDate(1,1).setDate(-1);
      var givenDate = getDate(m,d);

      // Calculate difference
      var delta = Math.floor((givenDate - startDate) / (1000*60*60*24));
      delta-=1; // Remove one day, since we started from 1/1, and want this to be 1 based

      // Return an integer representing the day of the year 1-366
      return delta;
    }

  });
