var modController = angular.module('ModalController', [])
    .controller('ModCtrl', function ($scope, $uibModalInstance, item) {

        $scope.item = item;

        $scope.quantity = 1;
        $scope.totalPrice = $scope.item.price * $scope.quantity;

        $scope.changeQuantity = function(q)
        {
            if( q == 1 || (q == -1 && $scope.quantity > 0))
            {
                $scope.quantity += q;
                $scope.totalPrice = $scope.item.price * $scope.quantity;
            }
        }

        $scope.addToOrder = function ()
        {
            var order = {};
            order.item = $scope.item;
            order.quantity = $scope.quantity;
            order.totalPrice = $scope.totalPrice;

            $uibModalInstance.close(order);
        };

        $scope.cancel = function ()
        {
            $scope.quantity = 1;
            $uibModalInstance.dismiss('cancel');
        };
    });