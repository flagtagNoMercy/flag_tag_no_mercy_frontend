;(function() {

  'use strict';

  angular.module('flagtag')

  .controller('gameController',
           ['$scope', '$location', 'gameFactory', '$interval', '$routeParams',
    function($scope,   $location,   gameFactory,   $interval,   $routeParams) {



    var gameId = $routeParams.id;

    gameFactory.view(gameId)
      .success(function(data) {
        console.log('yay', data);
      })
      .error(function(data) {
        console.log('boo', data);
      });



    var mapDiv = document.getElementById('map-canvas');
    var options = { zoom: 12,
                    center: new google.maps.LatLng(33.7550, -84.3900) };
    var map;
    var markers = [
      { 
        lat: 33.75550,
        lng: -84.3900 
      },
      {
        lat: 33.75500,
        lng: -84.3905
      }

    ];

    $scope.players = [
      {
        name: "Alex",
        points: 8,
        cords: "33.75550, -84.3900",
      },
      {
        name: "Bobby",
        points: 10,
        cords: "33.75500, -84.3905",
      }
    ];

    var init = function() {
      map = new google.maps.Map(mapDiv, options);
      setFlagMarkers();
    };

    setTimeout(init, 500);

    var infoWindow = new google.maps.InfoWindow({
      content: 'PlaceHolder Text',
    });



    var setFlagMarkers = function() {
      for (var i = 0; i < markers.length; i++) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
          map     : map,
          title   : 'PlaceHolder Title',
          animation: google.maps.Animation.DROP,
        });
      }
    };



    $scope.totalSeconds = 30*60;
    $scope.time = '30:00';
    var countdown = $interval(function() {
        var m = ($scope.totalSeconds / 60) >> 0;
            m += "";
        var s = $scope.totalSeconds % 60;
            s += "";
        
        if (m.length == 1) { m = "0" + m; }
        if (s.length == 1) { s = "0" + s; }
        $scope.time = "" + m + ":" + s;

        if ($scope.totalSeconds === 0) {
          $interval.cancel(countdown);
        }
        $scope.totalSeconds--;
    }, 1000);


    }
    ]);

}());
