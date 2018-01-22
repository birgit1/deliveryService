

var controller = angular.module('RestaurantController', [])
    .controller('RestaurantCtrl',function($scope, $translate, $location, $http)
    {
        console.log("home controller");
        $scope.restaurants = $http({
            method : "GET",
            url : $scope.path+"/restaurant/getRestaurants",
            params: {sendImage: true}
        }).then(function onSuccess(response) {
            $scope.restaurants = response.data;
            console.log(response.data);
        }, function onError(response) {
            $scope.restaurants = response.statusText;
        });

        $scope.selectedRestaurant = 0;
        $scope.showMenu = function(id)
        {
            console.log("go to restaurant: "+id);
            $scope.selectedRestaurant = id;
            $location.path('/menu/'+id);
            console.log("id: "+id);
        };

        $scope.openMenu = function()
        {
            console.log("SEARCH")
            $location.path('/search');
        };


        $scope.slides = [{
            "id":0,
            "text": "slide 0"
        },
            {
                "id":1,
                "text": "slide 1"
            },
            {
                "id":2,
                "text": "slide 2"
            }
        ];

        $scope.rating = {};
        $scope.rating.submit = false;

        $scope.submitRating = function()
        {
            console.log("text: "+$scope.rating.text);
            var res = $http.post($scope.path +'/contact/rating', $scope.rating);

            $scope.rating.submit = true;

            res.then(function (data, status, headers, config) {
                console.log(data);
                $scope.rating.text = "";
                $scope.rating.stars = 0;
            });
            res.catch(function (data, status, header, config) {
                console.log("error");
            });
        };

        $scope.contact = {};
        $scope.submitContact = function()
        {

            console.log("text: "+$scope.contact.text);
            var res = $http.post($scope.path +'/contact/contact', $scope.contact);

            res.then(function (data, status, headers, config) {
                console.log(data);

                $scope.contact.text = "";
                $scope.contact.email = "";
                $scope.contact.name = "";
            });
            res.catch(function (data, status, header, config) {
                console.log("error");
            });
        };
    });