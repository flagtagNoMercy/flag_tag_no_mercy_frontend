;(function() {

  'use strict';

  angular.module('flagtag')

  .factory('gameFactory',
           ['$http', 'endpoint', '$cookieStore',
    function($http,   endpoint,   $cookieStore) {

    var userId = $cookieStore.get('id');
    var create = function() {

    };

    var view = function(gameId) {
      return $http.get(endpoint.url + userId + '/games/' + gameId);
    };

    var update = function() {

    };

    return {
      view: view,
    };

    }
    ]);

}());
