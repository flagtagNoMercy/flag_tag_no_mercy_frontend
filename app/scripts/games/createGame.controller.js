;(function() {

  'use strict';

  angular.module('flagtag')

  .controller('createGameController',
           ['$scope', '$location', 'gameFactory',
    function($scope,   $location,   gameFactory) {


    var mapDiv = document.getElementById('map-canvas');
    var options = { zoom: 12,
                    center: new google.maps.LatLng(33.7550, -84.3900) };
    var map;
    var gameMarker;
    var loc;
    var circleRadius;
    $scope.invites = [];

    var init = function() {
      map = new google.maps.Map(mapDiv, options);

      google.maps.event.addListener(map, 'click', function(event) {
         placeMarker(event.latLng);
      });

    };

    setTimeout(init, 500);

    var placeMarker = function(location) {
      loc = location;

      if(!gameMarker) {

        var marker = new google.maps.Marker({
          position: location,
          map     : map,
          title   : 'PlaceHolder Title',
          draggable: true,
          animation: google.maps.Animation.DROP,
        });

        gameMarker = marker;

      } else {
        gameMarker.setPosition(location);
      }

      map.panTo(location);

      var drawCircle = function() {
        var metersPerMile = 1609;
        var radius = $scope.radius || 1;
        radius = radius * metersPerMile;


        if (circleRadius) {
          circleRadius.setMap(null);
        }

        circleRadius = new google.maps.Circle({
          map: map,
          radius: radius,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,

          fillColor: '#FF0000',
          fillOpacity: 0.2,
        });

        circleRadius.bindTo('center', gameMarker, 'position');
      };

      drawCircle();

    };

    // Invites, watch for enter key!
    $scope.addInvite = function(e) {
      if (e.which === 13) {
        e.preventDefault();

        if ($scope.invites.length >= 10) {
          $scope.err = true;
          $scope.errMsg = 'You can only invite up to 10 friends';
          return;
        }

        if ($scope.email === '' || $scope.email.indexOf('@') === -1) {
          $scope.err = true;
          $scope.errMsg = 'Email addresss usually have @s in them...';
          return;
        }

        for (var i = 0; i < $scope.invites.length; i++) {
          if ($scope.invites[i] === $scope.email) {
            return;
          }
        }

        $scope.invites.push($scope.email);
        $scope.email = '';

        $scope.err = false;
        $scope.errMsg = '';
      }
    };

    $scope.removeInvite = function(idx) {
      $scope.invites.splice(idx, 1);
    };


    $scope.create = function() {
      var timelimit = $scope.timelimit || 30;
      console.log(gameMarker.position.D);
      console.log(gameMarker.position.k);
    };


    }
    ]);

}());
