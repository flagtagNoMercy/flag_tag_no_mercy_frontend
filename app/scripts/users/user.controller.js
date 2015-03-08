;(function() {

  'use strict';

  angular.module('flagtag')

  .controller('userController',
           ['$scope',    '$location',    'userFactory', 
            '$interval', '$routeParams', 'gameFactory',
    function($scope,      $location,      userFactory,   
             $interval,   $routeParams,   gameFactory) {


    var userId = $routeParams.id;
    $scope.err = false;
    $scope.errMsg = '';

    var listGames = function() {
      gameFactory.list()
        .success(function(data) {
          $scope.gamelist = data.game;
          $scope.err = false;
          $scope.errMsg = '';
        })
        .error(function(data) {
          console.log('list boo', data);
          $scope.err = true;
          $scope.errMsg = 'Something went wrong :(';
        });
    };

    listGames();


    }
    ]);

}());
