'use strict'

angular.module('Calculator', [])
  .controller('Main', [ '$scope',
    function ($scope) {

      $scope.calculate = function (value) {
        var match = /^\d+(\.\d+)*((\+|\-|\*|\/)\d+(\.\d+)*)+$/.test(value);
        if (match) {
          $scope.result = eval(value);
        }
        else {
          $scope.result = '';
        }
      }

    }]);

