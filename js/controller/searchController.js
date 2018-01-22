


var controller = angular.module('SearchController', [])
.controller('SearchCtrl',function($scope, $http)
{
        $scope.foods = [];
        $scope.restaurants = [];

        // load restaurants from server request
        $http({
            method : "GET",
            url : $scope.path+"/restaurant/getRestaurants",
            params: {sendImage: true}
        }).then(function onSuccess(response) {
            $scope.restaurants = response.data;
            console.log(response.data);
        }, function onError(response) {
            $scope.restaurants = response.statusText;
        });

        // load restaurants from server request
        $http({
            method : "GET",
            url : $scope.path+"/foodCategory/getFoodCategories",
        }).then(function onSuccess(response) {
            $scope.foods = response.data;
            console.log(response);
        }, function onError(response) {
            $scope.foods = response.statusText;
        });

        $scope.selectFood = function(id)
        {
            
        }
});