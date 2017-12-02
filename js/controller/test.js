angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ButtonsCtrl', function ($scope) {

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
        left: false,
        middle: true
    };

});