

var controller = angular.module('MenuController', [])
    .controller('MenuCtrl', function ($uibModal, $log, $scope, $routeParams, $location, $sessionStorage, $http) {

        $scope.menu = [];
        $http({
            method : "GET",
            url : $scope.$parent.path+"/menu/getMenu"
        }).then(function onSuccess(response) {
            $scope.menu = response.data;
        }, function onError(response) {
            console.log("error");
        });

        $scope.tags = [];
        $http({
            method : "GET",
            url : $scope.$parent.path+"/menu/getFoodAttributes"
        }).then(function onSuccess(response) {
            $scope.tags = response.data;
            console.log("tags");
            console.log($scope.tags);
        }, function onError(response) {
            console.log("error");
        });

        $scope.categories = [];
        $http({
            method : "GET",
            url : $scope.$parent.path+"/menu/getFoodCategories"
        }).then(function onSuccess(response) {
            $scope.categories = response.data;
        }, function onError(response) {
            console.log("error");
        });

        $scope.restaurants = [];
        $http({
            method : "GET",
            url : $scope.$parent.path+"/restaurant/getRestaurants",
            params: {sendImage: false}
        }).then(function onSuccess(response) {
            $scope.restaurants = response.data;
            for(var i=0; i<$scope.restaurants.length; i++)
                $scope.restaurants[i].selected = true;
            console.log(response.data);
        }, function onError(response) {
            $scope.restaurants = response.statusText;
        });

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

        $scope.restaurantSelection = [];
        $scope.toggleRestaurantSelection = function( id)
        {
            $scope.restaurants[id].selected = $scope.restaurants[id].selected !== true;
        };

        $scope.tagSelection = $scope.tags;
        $scope.toggleTagSelection = function(id)
        {
            var idx = $scope.tagSelection.indexOf($scope.tags[id]);
            if (idx > -1) {
                $scope.tagSelection.splice(idx, 1);
            }
            else {
                $scope.tagSelection.push($scope.tags[id]);
            }
            console.log($scope.tagSelection);
        };

        $scope.categorySelection = [];
        console.log("seldcttion");
        console.log($scope.categorySelection);
        $scope.toggleCategorySelection = function(id)
        {
            var idx = $scope.categorySelection.indexOf($scope.categories[id]);
            if (idx > -1) {
                $scope.categorySelection.splice(idx, 1);
            }
            else {
                $scope.categorySelection.push($scope.categories[id]);
            }
            console.log($scope.categorySelection);
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

        $scope.updateSearch = function()
        {
            var query = {};
            query.language = $scope.$parent.languageKey;
            query.deliveryTime = $scope.deliveryTime;
            query.tags = $scope.tags;
            query.restaurants = $scope.restaurants;

            $scope.restaurants = $http({
                method : "GET",
                url : $scope.path+"/restaurants/search",
                params: query
            }).then(function onSuccess(response) {
                $scope.restaurants = response.data;
                console.log(response.data);
            }, function onError(response) {
                console.log("error");
            });
        }
    });
