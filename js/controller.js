

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



        $scope.shoppingCart = [];
        $scope.shoppingCartItems = 0;


        console.log("controller loaded");


    });