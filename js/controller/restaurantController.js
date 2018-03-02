

var controller = angular.module('RestaurantController', [])
    .controller('RestaurantCtrl',function($scope, $http)
    {
        //$scope.$parent.restaurant
        $scope.menu = [];

        $http({
            method : "GET",
            url : $scope.path+"/menu/getMenuForRestaurant",
            params: {restaurant: $scope.$parent.restaurant._id}
        }).then(function onSuccess(response) {
            $scope.menu = response.data;
            console.log($scope.menu);
        }, function onError(response) {
        });


        $scope.open = function (id)
        {
            $scope.menuItem = {};
            $http({
                method : "GET",
                url : $scope.path+"/menu/getMenu",
                params: {menuId: id}
            }).then(function onSuccess(response) {
                $scope.menuItem = response.data;
                console.log($scope.menuItem);
            }, function onError(response) {
            });

            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'templates/menuItemModal.html',
                controller: 'ModCtrl',
                windowClass: 'center-modal',
                controllerAs: this,

                resolve: {
                    item: function () {
                        return $scope.menuItem;
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

    });