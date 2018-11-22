"use strict";

angular
  .module("weatherApp.weatherList", [
    "ngRoute",
    "weatherApp.component",
    "weatherApp.factory"
  ])

  .controller("WeatherListCtrl", [
    "weatherApiFactory",
    "$scope",
    function(weatherApiFactory, $scope) {
      var cities = ["dublin", "amsterdam"];
      var self = this;

      self.weatherList = [];

      for (var i = 0; i < cities.length; i++) {
        weatherApiFactory.get(cities[i]).then(function(response) {
          // debugger;
          self.weatherList.push(response.data);
          $scope.$apply();
        });
      }
    }
  ]);
