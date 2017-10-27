
var app = angular.module('MyApp', ['pascalprecht.translate'])
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            TITLE: 'delivery service',
            TEXT: 'lalaal test this is english'
        });
        $translateProvider.translations('de', {
            TITLE: 'Lieferservice',
            TEXT: 'und deutsch'
        });

        $translateProvider.preferredLanguage('en');

    })
    .controller('Ctrl', ['$scope', '$translate', function ($scope, $translate) {
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };
    }]);