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

    it ('should clear the result after calculate', function () {
      scope.data = '21+12';
      scope.calculate(scope.data);
      expect(scope.data).to.equal('');
    });

    it ('should clear the result even calculation is fail.', function () {
      scope.data = '21';
      scope.calculate(scope.data);
      expect(scope.data).to.equal('');
    });

    it ('should evaluate the result and send to the backend', function () {
      scope.calculate('21.03+53.12');
      expect(scope.result).to.equal(21.03 + 53.12);
      expect(scope.history).to.have.length(1);
      expect(scope.history[0]).to.equal('21.03 + 53.12 = ' + (21.03+53.12));
    });

    it ('should not evaluate input that has `=`', function () {
      scope.calculate('21.03+10=31.03');
      expect(scope.result).to.equal('');
    });

    it ('should not evaluate input that has alphabet', function () {
      scope.calculate('abc');
      expect(scope.result).to.equal('');
    });

    it ('should evaluate all values in input', function () {
      scope.calculate('3+5/2');
      expect(scope.result).to.equal(3+5/2);
      expect(scope.history).to.have.length(1);
      expect(scope.history[0]).to.equal('3 + 5 / 2 = ' + (3 + 5 / 2));
    });

    it ('should return empty when calculate only one value', function () {
      scope.calculate('31.2');
      expect(scope.result).to.equal('');
    });

    it ('should allow space in input', function () {
      scope.calculate('2 + 5');
      expect(scope.result).to.equal(7);
    });

  });

});

