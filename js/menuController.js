

var controller = angular.module('MenuController', [])
    .controller('MenuCtrl',function($scope, $routeParams)
    {

        $scope.menu = [{
            "name":"Avocado cream",
            "id":0,
            "category":"dessert",
            "ingredients":"Avocado, Nuts",
            "description":"xxx",
            "vegetarian":true,
            "vegan":true,
            "diaryfree":true,
            "glutenfree": true

        },
            {
                "name":"Tofu Plate",
                "id":1,
                "category":"main",
                "ingredients":"Tofu, Vegtables, Nuts",
                "description":"xxx",
                "vegetarian":true,
                "vegan":true,
                "diaryfree":true,
                "glutenfree": false
            }];

        $scope.shoppingCart = [];
        $scope.restaurant


        console.log("menu ctrl loaded");


    });