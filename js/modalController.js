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
    });