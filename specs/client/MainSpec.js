'use strict'

var expect = chai.expect

describe('Main', function () {

  var controller = null
    , scope = null;

  beforeEach(module('Calculator'));
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller =  $controller('Main', { $scope: scope });
  }));

  describe('#calculate', function () {

    it ('should evaluate the result and send to the backend', function () {
      scope.calculate('21.03+53.12');
      expect(scope.result).to.equal(21.03 + 53.12);
    });

    it ('should not evaluate input that has `=`', function () {
      scope.calculate('21.03+10=31.03');
      expect(scope.result).to.equal('');
    });

    it ('should not evaluate input that has alphabet', function () {
      scope.calculate('abc');
      expect(scope.result).to.equal('');
    });

  });

});

