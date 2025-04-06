angular.module('myApp')
.controller('LazyCtrl', function($scope) {
  $scope.message = "Hey Haneesh! This module is lazy loaded!";
});