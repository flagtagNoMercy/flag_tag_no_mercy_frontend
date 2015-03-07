;(function() {

  'use strict';

  angular.module('flagtag')

  .controller('registerController',
           ['$scope', '$location', '$cookieStore', '$rootScope', 'userFactory',
    function($scope,   $location,   $cookieStore,   $rootScope,   userFactory) {

    $scope.err = false;
    $scope.errMsg = '';

    $scope.register = function() {
      var params = {
        user: {
          email: $scope.email,
          password: $scope.password,
        }
      };

      userFactory.register(params)
        .success(function(data) {
          userFactory.setUserCookieAndSession(data.user);
          $location.url('/games');
          $rootScope.$broadcast('user:login');
        })
        .error(function(data) {
          console.log('Boo: ', data);
          $scope.err = true;
          $scope.errMsg = data.messages;
      });

    };



    }
    ]);

}());
