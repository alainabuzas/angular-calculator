angular.module('CalcApp', [])
.controller('CalcCtrl', ['$scope', function($scope) {
  // Continuous string of calculator entries
  var calcEntries = '';

  // Display value
  $scope.calcVal = '0';

  // Click handler for buttons
  $scope.buttonClick = function(symbolNum) {
    // Get the last entry to check later
    var lastEntry = calcEntries[calcEntries.length - 1];

    // Check for 3 possibilities:
    // 1.) First button press so set the value directly to the input
    // 2.) If the input is an operator symbol, eval the entries and set that to the display.
    // 3.) If the input is a number add it to the calc entries
    if($scope.calcVal === '0') {
      $scope.calcVal = symbolNum.toString();
      calcEntries += symbolNum.toString();
    } else if(/[+-/*]/.test(symbolNum)) {
      $scope.calcVal = eval(calcEntries);
      calcEntries += symbolNum;
    } else {
      // If the last entry was an operator reset the calcVal to the input
      if(/[+-/*]/.test(lastEntry)) {
        $scope.calcVal = symbolNum.toString();
      // Else concat the input to the calcVal
      } else {
        $scope.calcVal += symbolNum.toString();
      }
      calcEntries += symbolNum.toString();
    }
  }

  // Click handler for clearing the screen
  $scope.clear = function() {
    $scope.calcVal = '0';
    calcEntries = '';
  }

  // Click handler for equals button
  $scope.evaluate = function() {
    $scope.calcVal = eval(calcEntries);
  }
}]);
