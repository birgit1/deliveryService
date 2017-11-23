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

        $scope.status = ['order', 'loggedIn', 'orderFinished', 'processOrder'];
        $scope.orderStatus = $scope.status[0];

        $scope.restaurants = [{
            "name":"Restaurant A",
            "id":0,
            "info": ["Food A", "FA"]
        },
            {
                "name": "Restaurant B",
                "id": 1,
                "info": ["Food B", "FB"]
            }];



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