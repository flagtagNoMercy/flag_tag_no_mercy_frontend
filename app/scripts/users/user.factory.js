;(function() {

  'use strict';

  angular.module('flagtag')

  .factory('userFactory',
           ['$cookieStore', '$location', '$http',
    function($cookieStore,   $location,   $http) {

    var login = function(params) {

    };

    var register = function(params) {

    };

    var logout = function() {

    };

    var setUserCookieAndSession = function(data) {

    };

    var checkUserStatus = function() {

    };


    return {
      login                   : login,
      register                : register,
      logout                  : lougout,
      setUserCookieAndSession : setUserCookieAndSession,
      checkUserStatus         : checkUserStatus,
    };

    }
    ]);

}());
