var app = angular.module('myApp', []);
app.controller('appCtrl', function($scope, $http) {


    //service to get data from server
    $http.get("http://www.scholarhood.ca/dev-test.json")
        .then(function(response) {
            console.log(response.data);
            $scope.schools = response.data;
        });

    var totalSchools = $scope.schools.length();

});

app.directive("school", function($rootScope, $sce) {
    return {
        scope: {
            data: '='
        },
        templateUrl: 'template/schools.html',
        link: function(scope) {
            var gmu = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDqLzxdvdmDlDo1HaZYlKdfrgCTJ29iGOg&center=' +
                scope.data.latitude +
                ',' +
                scope.data.longitude;
            scope.googleMapUrl = $sce.trustAsResourceUrl(gmu);
        }
    }
});

var carousel = angular.module('carousel', []);

carousel.directive('slider', function($timeout) {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            images: '='
        },
        link: function(scope, elem, attrs) {},
        templateUrl: 'templates/templateurl.html'
    };
});
