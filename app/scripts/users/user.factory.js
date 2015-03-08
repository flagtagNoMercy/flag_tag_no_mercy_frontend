;(function() {

  'use strict';

  angular.module('flagtag')

  .factory('userFactory',
           ['$cookieStore', '$location', '$http', 'endpoint',
    function($cookieStore,   $location,   $http,   endpoint) {

    var login = function(params) {
      return $http.post(endpoint.url + 'users/sign_in/', params);
    };

    var register = function(params) {
      return $http.post(endpoint.url + 'users/', params);
    };

    var logout = function() {
      $cookieStore.remove('authentication_token');
      $cookieStore.remove('email');
      $cookieStore.remove('id');
      // remove token from header
    };

    var setUserCookieAndSession = function(user) {
      $cookieStore.put('authentication_token', user.authentication_token);
      $cookieStore.put('email', user.email);
      $cookieStore.put('id', user.id);
      // Set headers endpoint.headers['auth-token'] = ...
    };

    var checkUserStatus = function() {
      // Check for cookie
      var token = $cookieStore.get('authentication_token');
      if (!token) { return false; }

      // Set header 
      return true;
    };


    return {
      login                   : login,
      register                : register,
      logout                  : logout,
      setUserCookieAndSession : setUserCookieAndSession,
      checkUserStatus         : checkUserStatus,
    };

    }
    ]);

}());
