

var controller = angular.module('RestaurantController', [])
    .controller('RestaurantCtrl',function($scope, $http)
    {
        //$scope.$parent.restaurant
        $scope.menu = [];

        $http({
            method : "GET",
            url : $scope.path+"/restaurant/getMenuForRestaurant",
            params: {restaurant: $scope.$parent.restaurant._id}
        }).then(function onSuccess(response) {
            $scope.menu = response.data;
        }, function onError(response) {
        });

    });