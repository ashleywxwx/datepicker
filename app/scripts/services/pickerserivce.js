'use strict';

/**
 * @ngdoc service
 * @name datepickerApp.pickerSerivce
 * @description
 * # pickerSerivce
 * Service in the datepickerApp.
 */
angular.module('datepickerApp')
  .service('PickerSerivce', function ($timeout) {

    var vm = this;
    vm.startPicking = startPicking;
    vm.stopPicking = stopPicking;
    vm.resetPicking = resetPicking;
    vm.isPicked = isPicked;
    vm.isRunning = isRunning;

    var picked = [];
    var TIMEOUT = 1000;
    var mytimeout;
    var started = false;

    function isRunning(){
      return (started);
    }

    function startPicking(){
      console.log('Starting picking.');

      started = true;
      // Start recursive picking function
      mytimeout = $timeout(onPickTick,TIMEOUT);
    }

    // On each iteration of the timeout, pick a random number
    function onPickTick(){
      var startingPicked = picked.length; // I don't remember why I'm doing this, but it works :|
      while((picked.length===startingPicked)&&(picked.length<366)) {
        var rand = Math.floor((Math.random() * 366)+1);

        if (picked.indexOf(rand) === -1) {
          picked.push(rand);
          console.log('picked: ' + rand);
        }
      }
      mytimeout = $timeout(onPickTick,TIMEOUT);
    }

    function stopPicking(){
      console.log('Stopping picking.');
      $timeout.cancel(mytimeout);
    }

    function resetPicking(){
      // Just to be sure
      stopPicking();

      // Reset flag
      started = false;

      // Reset picked
      picked = [];
    }

    function isPicked(day){
      if(picked.indexOf(day)!==-1){
        return true;
      }
    }

  });
