/* globals angular */

console.log('app.js was loaded.');

var calcApp = angular.module('Calculon', []);
calcApp.controller('Calculator', ['$scope', function($scope) {
    $scope.bankA = undefined;
    $scope.bankB = undefined;
    $scope.operator = undefined;
    $scope.screen = '0';

    $scope.pressNumber = function(num) {
        if ($scope.screen === '0') {
            $scope.screen = num.toString();
        } else {
            $scope.screen += num;
        }
    };

    $scope.pressOperator = function(op) {
        if ($scope.bankA === undefined) {
            $scope.bankA = parseInt($scope.screen);
            $scope.screen = '';
        }
        $scope.operator = op;
        console.log('bankA: ', $scope.bankA);
        console.log('Operator: ', $scope.operator);
    }

    $scope.pressEqual = function() {
        $scope.equalFunct();
    }

    $scope.equalFunct = function() {
        switch ($scope.pressOperator) {
            case '+':
                $scope.screen += $scope.bankA;
                break;
            case '-':
                $scope.screen = $scope.bankA - $scope.screen;
                break;
            case '/':
                $scope.screen = $scope.bankA / $scope.screen;
                break;
            case '*':
                $scope.screen *= $scope.bankA;
                break;
        }
        clearInputs();
    };

    function clearInputs() {
        $scope.bankA = undefined;
        $scope.bankB = undefined;
        $scope.operator = undefined;
    }

    function clear() {
        $scope.pressEqual = false;
        $scope.screen = 0;
    }

}]);
