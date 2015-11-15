'use strict';

describe('Controller: PublicationsCtrl', function () {

  // load the controller's module
  beforeEach(module('tarziprojektApp'));

  var PublicationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PublicationsCtrl = $controller('PublicationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
