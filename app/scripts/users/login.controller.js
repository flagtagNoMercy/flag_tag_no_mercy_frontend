;(function() {

  'use strict';

  angular.module('flagtag')

  .controller('loginController',
           ['$scope', '$location', '$cookieStore', '$rootScope', 'userFactory',
    function($scope,   $location,   $cookieStore,   $rootScope,   userFactory) {

    $scope.err = false;
    $scope.errMsg = '';

    $scope.login = function() {
      var params = { user:
        {
          email : $scope.email,
          password : $scope.password,
        }
      };

      userFactory.login(params)
        .success(function(data) {
          userFactory.setUserCookieAndSession(data.user);
          $location.url('/games');
          $rootScope.$broadcast('user:login');
        })
        .error(function(data) {
          $scope.err = true;
          $scope.errMsg = data.error;
        });

    };


    }
    ]);

}());
