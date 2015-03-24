'use strict';

describe('Controller: CalendarCtrl', function () {

  // load the controller's module
  beforeEach(module('datepickerApp'));

  var CalendarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalendarCtrl = $controller('CalendarCtrl', {
      $scope: scope
    });
  }));

  describe('Method: isDate()', function(){
    it('should return true for 1,1 (January 1st)', function(){
      expect(CalendarCtrl.isDate(1,1)).toBe(true);
    });
  });

  describe('Method: dayOfYear()', function(){
    it('should return 1 for 1,1 (January 1st)',function(){
      expect(CalendarCtrl.dayOfYear(1,1)).toBe(1);
    });
    it('should return 365 for 11,31 (December 31st)',function(){
      expect(CalendarCtrl.dayOfYear(12,31)).toBe(366);
    });
    it('should return 60 for 2,29 (Februrary 29th AKA Leap Year)',function(){
      expect(CalendarCtrl.dayOfYear(2,29)).toBe(60);
    });
  });

  describe('Method: getDate()',function(){
    it('should return jan 1st for 1,1',function(){
      expect(CalendarCtrl.getDate(1,1).toString()).toBe('Fri Jan 01 2016 00:00:00 GMT-0600 (Central Standard Time)');
    });
    it('should return feburary 29th for 2,29',function(){
      expect(CalendarCtrl.getDate(2,29).toString()).toBe('Mon Feb 29 2016 00:00:00 GMT-0600 (Central Standard Time)');
    });
    it('should return Dec 31st for 12,31',function(){
      expect(CalendarCtrl.getDate(12,31).toString()).toBe('Sat Dec 31 2016 00:00:00 GMT-0600 (Central Standard Time)');
    });
  });

});
