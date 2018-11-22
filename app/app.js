"use strict";

angular
  .module("weatherApp", [
    "ngRoute",
    "weatherApp.weatherList",
    "weatherApp.component"
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider
        .when("/weather-list", {
          templateUrl: "view/weather-list/weather-list.html",
          // Using "controllerAs" to bind it to an object to improve context
          controllerAs: "$ctrl",
          controller: "WeatherListCtrl"
        })
        .otherwise({ redirectTo: "/weather-list" });
    }
  ]);
