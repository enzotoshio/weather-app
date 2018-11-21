"use strict";

angular
  .module("weatherApp.weatherList", ["ngRoute", "weatherApp.components"])

  .controller("WeatherListCtrl", [
    function() {
      this.cities = [
        {
          name: "Dublin"
        }
      ];
    }
  ]);
