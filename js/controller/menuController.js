

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

        //** session **********************************************//
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
                windowClass: 'center-modal',
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
        };

        //****** delivery time ***************************************//
        $scope.deliveryTimeSelection = "ASAP";

        $scope.deliveryTime = new Date();
        $scope.deliveryTime.setMinutes(roundMin($scope.deliveryTime.getMinutes()));

        var week = new Date();
        week.setDate(week.getDate()+7);

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: week,
            minDate: new Date(),
            startingDay: 1,
            showWeeks: true
        };

        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.setDate = function(year, month, day) {
            $scope.deliveryTime = new Date(year, month, day);
        };

        $scope.popup1 = {
            opened: false
        };

        var minTime = Date.now();

        $scope.timeOptions = {
            hourStep: 1,
            minuteStep: 5,
            showMeridian: true,
            minTime: minTime
        };

        function roundMin(min)
        {
            return Math.ceil(min/5)*5;
        }
    });
