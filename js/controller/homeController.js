

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

        $scope.openMenu = function()
        {
            console.log("open Menu");
            $location.path('/menu');
        };

        console.log(" rest controller loaded");

        $scope.slides = [{
            "id":0,
            "text": "slide 0"
        },
            {
                "id":1,
                "text": "slide 1"
            },
            {
                "id":2,
                "text": "slide 2"
            }
        ];
        $scope.rating =0;
    });