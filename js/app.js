
var app = angular.module('MyApp', ['pascalprecht.translate'])
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            TITLE1: 'delivering Canmore and area',
            TITLE2: 'call phone#',
            RESTAURANTS1: 'Our restaurants',
            HIW1: 'How it works',
            HIW2: 'You give us a call and we pick up your order at the restaurant and deliver it to you for only 6$ for the whole delivery. You can pay at your doorstep with cash, credit or debit.',
            CONT1: 'Contacts',
            CONT2: 'Call'
        });
        $translateProvider.translations('fr', {
            TITLE1: 'FR',
            TITLE2: 'FR',
            RESTAURANTS1: 'Restaurants',
            HIW1: 'FR',
            HIW2: 'FR',
            CONT1: 'FR',
            CONT2: 'FR'
        });

        $translateProvider.preferredLanguage('en');

    })
    .controller('Ctrl', ['$scope', '$translate', function ($scope, $translate) {
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };
    }]);