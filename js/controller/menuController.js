

var controller = angular.module('MenuController', [])
    .controller('MenuCtrl', function ($uibModal, $log, $scope, $routeParams, $location, $sessionStorage) {

        $scope.menu = [{
            "name":"ice cream",
            "id":0,
            "category":"dessert",
            "price":1.4
        },
            {
                "name":"Tofu",
                "id":1,
                "category":"main",
                "price":1.2
            }];

        $scope.checkSessionStorage = function()
        {
            if($sessionStorage.orderCart)
            {
                console.log("session storage: "+$sessionStorage.orderCart.length);
                if($scope.$parent.shoppingCart <= 0)
                for(var i=0; i<$sessionStorage.orderCart.length; i++)
                    $scope.$parent.addOrderToCart($sessionStorage.orderCart[i]);
            }
            else {
                $sessionStorage.orderCart = [];
                console.log("NO session storage: ");
            }

        };
        $scope.checkSessionStorage();

        $scope.restaurantId = $routeParams.restaurantId;

        $scope.open = function (id)
        {
            console.log('open');
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'templates/menuItemModal.html',
                controller: 'ModCtrl',
                controllerAs: this,

                resolve: {
                    item: function () {
                        return $scope.menu[id];
                    }
                }
            });

            modalInstance.result.then(function (order)
            {
                if(order !== 'cancel' && order.amount > 0)
                {
                    // set order
                    console.log("place order");
                    $scope.$parent.addOrderToCart(order);
                    $sessionStorage.orderCart.push(order);
                }
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.restaurants = [{
            "name":"Restaurant A",
            "id":0,
            "info": ["Food A", "FA"]
        },
            {
                "name": "Restaurant B",
                "id": 1,
                "info": ["Food B", "FB"]
            },
            {
                "name": "Restaurant C",
                "id": 2,
                "info": ["Food B", "FB"]
            }];

        $scope.initCheckRestaurant = function()
        {
            for(var i=0; i<$scope.restaurants.length; i++)
            {
                $scope.restaurants.selected = true;
            }
        };
        $scope.initCheckRestaurant();

        $scope.toggleSelection = function( id)
        {
            // Is currently selected
            $scope.restaurants[id].selected = $scope.restaurants[id].selected !== true;
            console.log("toggle button");
            console.log($scope.restaurants);
        };

        $scope.orderBy = function(value)
        {
            console.log("order by: "+value);
        };

        $scope.goToOrder = function()
        {
            $location.path('/order');
        }

    });
