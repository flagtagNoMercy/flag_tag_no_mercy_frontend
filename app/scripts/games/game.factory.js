;(function() {

  'use strict';

  angular.module('flagtag')

  .factory('gameFactory',
           ['$http', 'endpoint', '$cookieStore',
    function($http,   endpoint,   $cookieStore) {

    var userId = $cookieStore.get('id');
    var auth   = $cookieStore.get('authentication_token');
    var options = { headers : { 'auth-token': auth } };


    var create = function(params) {
      params.user_id = userId;

      params = { game: params };
      console.log(params);
      return $http.post(endpoint.url + 'users/' + userId + '/games',
                  params,
                  options 
                  );
    };



    var view = function(gameId) {
      return $http.get(endpoint.url + 'users/' +  userId + '/games/' + gameId,
          options);
    };

    var update = function() {

    };

    // List games per user
    var list = function() {
      return $http.get(endpoint.url + 'users/' + userId + '/games/',
        options);
    };

    return {
      view:   view,
      create: create,
      list  : list,
    };

    }
    ]);

}());
