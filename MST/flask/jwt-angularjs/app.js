var app = angular.module('jwtApp', []);

app.controller('LoginController', function($scope, $http) {

  $scope.login = function() {
    const loginData = {
      email: $scope.email,
      password: $scope.password
    };

    $http.post('https://reqres.in/api/login', loginData)
      .then(function(response) {
        $scope.token = response.data.token;
        localStorage.setItem('jwtToken', $scope.token);
        $scope.error = '';
        alert("Login Successful!");
      }, function(error) {
        $scope.error = "Login failed!";
        $scope.token = '';
      });
  };

});

// $scope.getProfile = function() {
//   const token = localStorage.getItem('jwtToken');

//   $http.get('https://your-api.com/profile', {
//     headers: {
//       Authorization: 'Bearer ' + token
//     }
//   }).then(function(res) {
//     console.log(res.data);
//   });
// };