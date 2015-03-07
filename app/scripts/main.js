;(function() {

  'use strict';

  angular.module('flagtag', ['ngRoute', 'ngCookies'])

  .constant({ asdf: {} })

  .config(function($routeProvider) {
    $routeProvider.when('/', {
      controller : 'loginController',
      templateUrl: '../templates/login.template.html',
    });

    $routeProvider.when('/register', {
      controller : 'registerController',
      templateUrl: '../templates/register.template.html',
    });

    $routeProvider.otherwise({
      redirectTo: '/',
    });

  });

}());
