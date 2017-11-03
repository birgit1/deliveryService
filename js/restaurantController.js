

var controller = angular.module('RestaurantController', [])
    .controller('RestaurantCtrl',function($scope, $translate, $location)
    {
        $scope.languageKey = 0;
        $scope.changeLanguage = function (key)
        {
            $translate.use(key);
            if(key === "en")
                $scope.languageKey = 0;
            else $scope.languageKey = 1;

        };


        $scope.restaurants = [{
            "name":"Restaurant A",
            "id":0,
            "info": ["delicious vegan food", "comida vegana"]
        },
            {
                "name": "MCDonalds",
                "id": 1,
                "info": ["fast food", "french food"]
            }];


        $scope.selectedRestaurant = 0;
        $scope.showMenu = function(id)
        {
            $scope.selectedRestaurant = id;
            $location.path('/menu/'+id);
        };

        console.log("controller loaded");


    });