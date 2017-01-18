angular.module('CalcApp', [])
.controller('CalcCtrl', ['$scope', function($scope) {
  var calcEntries = '';

  $scope.calcVal = '0';

  $scope.buttonClick = function(symbolNum) {
    var lastEntry = calcEntries[calcEntries.length - 1];

    if($scope.calcVal === '0') {
      $scope.calcVal = symbolNum.toString();
      calcEntries += symbolNum.toString();
    } else if(/[+-/*]/.test(symbolNum)) {
      $scope.calcVal = eval(calcEntries);
      calcEntries += symbolNum;
    } else {
      if(/[+-/*]/.test(lastEntry)) {
        $scope.calcVal = symbolNum.toString();
      } else {
        $scope.calcVal += symbolNum.toString();
      }
      calcEntries += symbolNum.toString();
    }
  }

  $scope.clear = function() {
    $scope.calcVal = '0';
    calcEntries = '';
  }

  $scope.evaluate = function() {
    $scope.calcVal = eval(calcEntries);
  }
}]);
