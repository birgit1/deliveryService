

var controller = angular.module('MenuController', [])
    .controller('MenuCtrl', function ($uibModal, $log, $scope, $routeParams) {

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

                }
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


    });
