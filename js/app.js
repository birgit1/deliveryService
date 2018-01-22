
var app = angular.module('MyApp', ['ngRoute', 'ui.bootstrap',  'pascalprecht.translate', 'ngStorage', 'duScroll',
            'Controller',
            'ModalController',
            'MenuController',
            'RestaurantController',
            'OrderController',
            'SearchController'
])
    .config(['$routeProvider', function($routeProvider)
    {
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'RestaurantCtrl'
            })
        .when('/menu',
            {
                templateUrl: 'templates/menuNew.html',
                controller: 'MenuCtrl'
            })
        .when('/search',
            {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            })
        .when('/menu/:restaurantId',
            {
                templateUrl: 'templates/menuNew.html',
                controller: 'MenuCtrl'
            })
        .when('/order', {
            templateUrl: 'templates/order.html',
            controller: 'OrderCtrl'
        }).
        when('/orderSuccessful', {
        templateUrl: 'templates/orderSuccessful.html'
    })
        .otherwise({
        redirectTo: '/home'
        });
    }])
    .config(function ($translateProvider)
    {
        console.log("try http");
        /*$http.get("json/translation.json")
            .success(function (data)
            {
                console.log("success");
                var en = data.en;
                var fr = data.fr;
                $translateProvider.translations('en', en);

                $translateProvider.translations('fr', fr);
            })
            .error(function (data) {
                console.log("there was an error");
            });*/

        $translateProvider.translations('en', {
            TITLE1: 'delivering Canmore and area',
            TITLE2: 'call phone#',
            RESTAURANTS1: 'Our restaurants',
            HIW1: 'How it works',
            HIW2: 'You give us a call and we pick up your order at the restaurant and deliver it to you for only 6$ for the whole delivery. You can pay at your doorstep with cash, credit or debit.',
            CONT1: 'Contacts',
            CONT2: 'Give us a call on ',
            CONT3: 'or send us an email '
        });
        $translateProvider.translations('fr', {
            TITLE1: 'FR',
            TITLE2: 'FR',
            RESTAURANTS1: 'Restaurants',
            HIW1: 'FR',
            HIW2: 'FR',
            CONT1: 'FR',
            CONT2: 'FR',
            CONT3: 'FR'
        });

        $translateProvider.preferredLanguage('en');

    });