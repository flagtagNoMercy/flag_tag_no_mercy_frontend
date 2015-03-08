;(function() {

  'use strict';

  angular.module('flagtag')

  .controller('userController',
           ['$scope', '$location', 'userFactory', 
            '$interval', '$routeParams', 'gameFactory',
    function($scope,   $location,   userFactory,   
             $interval,   $routeParams,   gameFactory) {


    var userId = $routeParams.id;

    var listGames = function() {
      gameFactory.list()
        .success(function(data) {
          console.log('list yay', data);
        })
        .error(function(data) {
          console.log('list boo', data);
        });
    };

    listGames();


    }
    ]);

}());
