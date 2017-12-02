var controller = angular.module('Controller', [])
    .controller('Ctrl',function($scope, $translate, $location, $http)
    {
        $scope.languageKey = 0;
        $scope.changeLanguage = function (key)
        {
            $translate.use(key);
            if(key === "en")
                $scope.languageKey = 0;
            else $scope.languageKey = 1;

        };

        $scope.path = "http://localhost:1234";

        $scope.status = ['order', 'loggedIn', 'orderFinished', 'processOrder'];
        $scope.orderStatus = $scope.status[0];

        $scope.restaurants = $http({
            method : "GET",
            url : $scope.path+"/restaurants/getAll"
        }).then(function onSuccess(response) {
            $scope.restaurants = response.data;
            console.log(response.data);
        }, function onError(response) {
            $scope.restaurants = response.statusText;
        });

        $scope.tags =
            $http({
                method : "GET",
                url : $scope.path+"/restaurants/tags"
            }).then(function onSuccess(response) {
                $scope.tags = response.data;
                console.log(response.data);
            }, function onError(response) {
                $scope.tags = response.statusText;
            });
        console.log("data: ");
        console.log($scope.tags);


        $scope.shoppingCart = [];
        $scope.shoppingCartItems = 0;

        $scope.addOrderToCart = function(order)
        {
            $scope.shoppingCart.push(order);
            $scope.shoppingCartItems += order.amount;
        };

        $scope.submitOrder = function ()
        {
            console.log("submit order");
            $location.path('/order');
            $scope.orderStatus = $scope.status[3];
        };

        console.log("controller loaded");


    });