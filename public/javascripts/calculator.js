'use strict'

angular.module('Calculator', [])
  .controller('Main', [ '$scope',
    function ($scope) {

      $scope.history = [];
      $scope.calculate = function (value) {
        var match = /^\d+(\.\d+)*((\+|\-|\*|\/)\d+(\.\d+)*)+$/.test(value);
        if (match) {
          $scope.result = eval(value);

          var fragments = _.map(value.split(/(\+|\-|\*|\/)/), function (fragment) { return fragment.trim(); });
          $scope.history.push(fragments.join(' ') + ' = ' + $scope.result);
          console.log ($scope.history);

        }
        else {
          $scope.result = '';
        }
      }

    }]);

