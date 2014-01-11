'use strict'

angular.module('Calculator', [])
  .controller('Main', [ '$scope',
    function ($scope) {

      $scope.calculate = function (value) {
        if (/^\d+\.\d+(\+|\-|\*|\/)\d+\.\d+$/.test(value)) {
          $scope.result = eval(value);
        }
        else {
          $scope.result = '';
        }
      }

    }]);

