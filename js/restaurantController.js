

var controller = angular.module('RestaurantController', [])
    .controller('RestaurantCtrl',function($scope, $translate, $location)
    {

        $scope.selectedRestaurant = 0;
        $scope.showMenu = function(id)
        {
            console.log("go to restaurant: "+id);
            $scope.selectedRestaurant = id;
            $location.path('/menu/'+id);
            console.log("id: "+id);
        };

        console.log(" rest controller loaded");


    });