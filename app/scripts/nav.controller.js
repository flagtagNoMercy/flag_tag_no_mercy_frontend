;(function() {

  'use strict';

  angular.module('flagtag')

  .controller('navController',
           ['$scope', 'userFactory', '$cookieStore',
    function($scope,   userFactory,   $cookieStore) {

      $scope.loggedIn = userFactory.checkUserStatus(); 

      $scope.logout = function() {
          userFactory.logout();
          $scope.loggedIn = false;
      };

      $scope.$on('user:login', function() {
        $scope.loggedIn = userFactory.checkUserStatus(); 
        $scope.userId   = $cookieStore.get('id');
      });

    }
    ]);

}());
