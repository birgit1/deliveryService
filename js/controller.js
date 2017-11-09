

var controller = angular.module('Controller', [])
    .controller('Ctrl',function($scope, $translate, $location)
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



        $scope.shoppingCart = [];
        $scope.shoppingCartItems = 0;

        $scope.addOrderToCart = function(order)
        {
            $scope.shoppingCart.push(order);
            $scope.shoppingCartItems += order.amount;
        };


        console.log("controller loaded");


    });