

var controller = angular.module('OrderController', [])
    .controller('OrderCtrl',function($scope, $location)
    {
        console.log("order controller");
        $scope.userInfo = {};


        $scope.submitOrder = function()
        {
            console.log("order submitted");
            console.log($scope.userInfo);
            $location.path('/orderSuccessful');
            $scope.$parent.orderStatus = $scope.$parent.status[2];
        }


    });