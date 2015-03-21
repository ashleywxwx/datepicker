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
    console.log("PickerServiceCreated");

    var vm = this;
    vm.startPicking = startPicking;
    vm.isPicked = isPicked;
    vm.mapDate = mapDate;

    var picked = [];
    var started = false;

    function startPicking(){
      console.log("Picking started");

        var onTimeout = function(){

          var startingPicked = picked.length;
          while((picked.length==startingPicked)&&(picked.length<366)) {
            var rand = Math.floor((Math.random() * 365));

            if (picked.indexOf(rand) == -1) {
              picked.push(rand);
              console.log("ding: " + picked);
            }
          }

          mytimeout = $timeout(onTimeout,1000);
        };

        var mytimeout = $timeout(onTimeout,1000);

        var stop = function(){
          $timeout.cancel(mytimeout);
        }
      }

      function isPicked(day){

        if(picked.indexOf(day)!=-1){
          return true;
        }
      }

    function mapDate(t,m,w,d){
      // January 1st = 0
      var date = 0;

      // Trimesters
      // 0 does not increase
      switch(t) {
        case 1:
          date+=121;
          break;
        case 2:
          date+=244;
          break;
      }


      return date;
    }



      //if(!started){
      //  started = true;
      //
      //  while(true) {
      //    var foundUnique = false;
      //    // Keep trying to pick until a unique pick found, or picked all
      //    while (picked.length < 366 && !foundUnique) {
      //      var rand = Math.floor((Math.random() * 10) + 1);
      //      if (picked.indexOf(rand) == -1) {
      //        foundUnique = true;
      //        picked.push(rand);
      //      }
      //    }
      //
      //    //exit if full
      //    if (foundUnique = false) {
      //      return;
      //    } else {
      //      foundUnique = true;
      //    }

          //wait


        //}


    //  }
    //}

  });
