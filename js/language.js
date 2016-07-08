var app = angular.module('rise', []) 

app.controller('lanController', function ($scope, $http) {
    $scope.changeLan = function (lan) {
        var url = lan + '.json';
        $http.get(url).success(function(data) {
            $scope.lan = data;
        });
    }
    $http.get('en.json').success(function(data) {
        $scope.lan = data;
    });
});