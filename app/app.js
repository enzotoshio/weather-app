"use strict";

// Declare app level module which depends on views, and core components
angular
  .module("weatherApp", [
    "ngRoute",
    "weatherApp.weatherList",
    "weatherApp.components"
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider
        .when("/weather-list", {
          templateUrl: "view/weather-list/weather-list.html",
          controllerAs: "ctrl",
          controller: "WeatherListCtrl"
        })
        .otherwise({ redirectTo: "/weather-list" });
    }
  ]);
