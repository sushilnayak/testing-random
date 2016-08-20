var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope, $http) {
   $http.get('https://itunes.apple.com/uk/rss/topsongs/limit=200/json').success(function(data) {
        $scope.data = data;
   })
})