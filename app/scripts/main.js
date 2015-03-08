;(function() {

  'use strict';

  angular.module('flagtag', ['ngRoute', 'ngCookies'])

  .constant({ endpoint: {
    url: 'https://safe-sands-7813.herokuapp.com/',
    }
  })

  .config(function($routeProvider) {
    $routeProvider.when('/', {
      controller : 'loginController',
      templateUrl: '../templates/login.template.html',
    });

    $routeProvider.when('/register', {
      controller : 'registerController',
      templateUrl: '../templates/register.template.html',
    });

    $routeProvider.when('/games', {
      controller : 'createGameController',
      templateUrl: '../templates/createGame.template.html',
    });

    $routeProvider.when('/games/:id', {
      controller : 'gameController',
      templateUrl: '../templates/viewGame.template.html',
    });


    $routeProvider.when('/users/:id', {
      controller : 'userController',
      templateUrl: '../templates/user.template.html',
    });



    $routeProvider.when('/about', {
      templateUrl: '../templates/about.template.html',
    });


    $routeProvider.otherwise({
      redirectTo: '/',
    });

  })

  .run(
           ['userFactory', '$location', '$rootScope',
    function(userFactory,   $location,   $rootScope) {
      $rootScope.$on('$routeChangeStart', function(e) {
        var path = $location.path();
        if (!userFactory.checkUserStatus()) {
          switch (path) {
            case '/':
            case '/about':
            case '/register':
            case '/logout':
              return;
            default:
              $location.path('/');
          }
        }

      });

      }
      ]);



}());
