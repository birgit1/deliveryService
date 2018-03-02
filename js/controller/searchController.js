


var controller = angular.module('SearchController', [])
.controller('SearchCtrl',function($scope, $http, $location)
{
        $scope.foods = [];
        $scope.restaurants = [];

        $scope.activeTab = 0;

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

        // load foods from server request
        $http({
            method : "GET",
            url : $scope.path+"/foodCategory/getFoodCategories"
        }).then(function onSuccess(response) {
            $scope.foods = response.data;
            for(var i=0; i<$scope.foods.length; i++)
            {
                $scope.foods[i].inSelection = false;
            }
            console.log("foods");
            console.log($scope.foods);
        }, function onError(response) {
            $scope.foods = response.statusText;
            
        });

        $scope.selectFood = function(id)
        {
            var inVal = $scope.foods[id].inSelection;
            $scope.foods[id].inSelection = !inVal;
            console.log(inVal+" -> "+$scope.foods[id].inSelection);
        };

        $scope.searchFood = function()
        {
            var foodStyles = [];
            for(var i=0; i<$scope.foods.length; i++)
            {
                if($scope.foods[i].inSelection)
                    foodStyles.push($scope.foods[i]._id);
            }
                 // server request -> restaurant with food styles
                 $http({
                    method : "GET",
                    url : $scope.path+"/restaurant/getRestaurantCategories",
                    params: {foods: foodStyles}
                }).then(function onSuccess(response) {
                    $scope.restaurants = response.data;
                    console.log(response.data);
                }, function onError(response) {
                    $scope.restaurants = response.statusText;
                });

                 
                 $scope.activeTab = 1;
        };

        $scope.showRestaurant = function(id)
        {
            console.log("go to resuatrant info");
            $scope.$parent.restaurant = $scope.restaurants[id];
            $location.path('/restaurant');
        }
});