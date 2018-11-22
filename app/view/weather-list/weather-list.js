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
    "$timeout",
    function(weatherApiFactory, $scope, $timeout) {
      var cities = ["dublin", "amsterdam", "berlin", "venice", "belfast"];
      var vm = this;

      vm.weatherList = [];

      init(weatherApiFactory, cities, vm, $timeout, $scope);
    }
  ]);

function init(weatherApiFactory, cities, vm, $timeout, $scope) {
  for (var i = 0; i < cities.length; i++) {
    weatherApiFactory.get(cities[i]).then(function(response) {
      vm.weatherList.push(response.data);
      $timeout(function() {
        $scope.$apply();
      }, 0);
    });
  }
}
