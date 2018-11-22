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
    "$q",
    function(weatherApiFactory, $scope, $timeout, $q) {
      var cities = ["dublin", "amsterdam", "berlin", "venice", "belfast"];
      var vm = this;

      vm.weatherList = [];

      init(weatherApiFactory, cities, vm, $timeout, $scope, $q);
    }
  ]);

function init(weatherApiFactory, cities, vm, $timeout, $scope, $q) {
  var promises = [];

  for (var i = 0; i < cities.length; i++) {
    var promise = weatherApiFactory.get(cities[i]);

    promises.push(promise);

    promise.then(function(response) {
      vm.weatherList.push(response.data);
    });
  }

  $q.all(promises).then(function(response) {
    $timeout(function() {
      $scope.$apply();
    }, 0);

    showChart(vm.weatherList);
  });
}

function showChart(weatherList) {
  var dataPoints = weatherList.reduce(function(acc, weather) {
    acc.push({ y: weather.main.temp, label: weather.name });

    return acc;
  }, []);

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Cities temperature"
    },
    axisY: {
      title: "Degrees"
    },
    data: [
      {
        type: "column",
        showInLegend: true,
        legendMarkerColor: "grey",
        dataPoints: dataPoints
      }
    ]
  });

  chart.render();
}
