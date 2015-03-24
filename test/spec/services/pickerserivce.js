'use strict';

describe('Service: pickerSerivce', function () {

  // load the service's module
  beforeEach(module('datepickerApp'));

  // instantiate service
  var pickerSerivce;
  beforeEach(inject(function (_PickerSerivce_) {
    pickerSerivce = _PickerSerivce_;
  }));

  it('should do something', function () {
    expect(!!pickerSerivce).toBe(true);
  });

});
