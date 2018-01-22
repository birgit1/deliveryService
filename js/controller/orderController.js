

var controller = angular.module('OrderController', [])
    .controller('OrderCtrl',function($scope, $location)
    {
        console.log("order controller");
        $scope.userInfo = {};
        $scope.orderStateOpen = true;

        $scope.submitOrder = function()
        {
            console.log("order submitted");
            console.log($scope.userInfo);
            $location.path('/orderSuccessful');
            $scope.$parent.orderStatus = $scope.$parent.status[2];
        }

        $scope.confirmOrder = function()
        {
            console.log("order confirmed");
        }


    });