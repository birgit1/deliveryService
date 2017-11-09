

var controller = angular.module('MenuController', [])
    .controller('MenuCtrl', function ($uibModal, $log, $scope) {

        $scope.menu = [{
            "name":"Avocado cream",
            "id":0,
            "category":"dessert",
            "price":1.4
        },
            {
                "name":"Tofu Plate",
                "id":1,
                "category":"main",
                "price":1.2
            }];


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

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

var modController = angular.module('ModalController', [])
    .controller('ModCtrl', function ($scope, $uibModalInstance, item) {

        $scope.item = item;
        $scope.order = {};
        $scope.order.amount = 0;
        $scope.order.id = item.id;

        $scope.amount = 0;


        $scope.doOrder = function ()
        {
            $scope.order.price = $scope.order.amount * $scope.item.price;
            $uibModalInstance.close($scope.order);
        };

        $scope.cancel = function ()
        {
            $scope.amount = 0;
            $uibModalInstance.dismiss('cancel');
        };
    });



/*var controller = angular.module('MenuController', [])
    .controller('MenuCtrl',function($scope, $routeParams, $uibModal)
    {
        console.log("menu controller");

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
        $scope.restaurantId = $routeParams.restaurantId;
        $scope.selectedItem = null;


        console.log("menu ctrl loaded +id: "+$scope.restaurantId);

        $scope.transferParam = {};

        $scope.open = function(id)
        {
            console.log(id);
            $scope.selectedItem = id;
            $scope.showForm(id);
        };

        $scope.showForm = function (id)
        {
            console.log("open mod");
            $scope.transferParam.id = id;
            $scope.transferParam.name = $scope.menu[$scope.selectedItem].name;
            $scope.transferParam.rid = $scope.restaurantId;

            var modalInstance = $uibModal.open({
                templateUrl: 'templates/menuItemModal.html',
                controller: 'ModCtrl',
                controllerAs: this,

                resolve: {
                    param: function ()
                    {
                        return $scope.transferParam;
                    }
                }
            });

            modalInstance.result.then(function (modalResult)
            {
                console.log(modalResult);
                // return values --> apply or discard them
                $scope.transferParam = {};
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };

    });


var modController = angular.module('ModalController', [])
    .controller('ModCtrl', function ($scope, $ubiModalInstance, param) {
        $scope.item = {};
        $scope.item = param;
        console.log("user form modalctrl");
        console.log($scope.item);

        $scope.submit = function ()
        {
            $ubiModalInstance.close($scope.item);
        };

        $scope.cancel = function () {
            $ubiModalInstance.dismiss('cancel');
        };
    });*/