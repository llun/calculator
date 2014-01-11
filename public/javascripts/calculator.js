'use strict'

angular.module('Calculator', [])
  .controller('Main', [ '$scope',
    function ($scope) {

      $scope.history = [];
      $scope.calculate = function (value) {
        var match = /^\d+(\.\d+)*\s*((\+|\-|\*|\/)\s*\d+(\.\d+)*)+$/.test(value);
        if (match) {
          $scope.result = eval(value);

          var fragments = _.map(value.split(/(\+|\-|\*|\/)/), function (fragment) { return fragment.trim(); });
          $scope.history.push(fragments.join(' ') + ' = ' + $scope.result);

        }
        else {
          $scope.result = '';
        }
        $scope.data = '';
      }

    }]);

