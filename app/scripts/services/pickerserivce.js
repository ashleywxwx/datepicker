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
    vm.isPicked = isPicked;

    var picked = [];
    var started = false;
    var TIMEOUT = 1000;

    function startPicking(){
      console.log("Picking started");

        var onTimeout = function(){

          var startingPicked = picked.length;
          while((picked.length==startingPicked)&&(picked.length<366)) {
            var rand = Math.floor((Math.random() * 366)+1);

            if (picked.indexOf(rand) == -1) {
              picked.push(rand);
              console.log("ding: " + picked);
            }
          }

          mytimeout = $timeout(onTimeout,TIMEOUT);
        };

        var mytimeout = $timeout(onTimeout,TIMEOUT);

        var stop = function(){
          $timeout.cancel(mytimeout);
        }
      }

      function isPicked(day){
        if(picked.indexOf(day)!=-1){
          return true;
        }
      }

    //function mapDate(t,m,w,d){
    //  // January 1st = 0
    //  var date = 0;
    //
    //  // Trimesters
    //  // 0 does not increase
    //  switch(t) {
    //    case 1:
    //      date+=121;
    //      break;
    //    case 2:
    //      date+=244;
    //      break;
    //  }
    //
    //
    //  return date;
    //}

  });
