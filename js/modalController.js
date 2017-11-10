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