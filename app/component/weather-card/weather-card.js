angular.module("weatherApp.component").component("weatherCard", {
  templateUrl: "component/weather-card/weather-card.html",
  controller: [
    "forecastApiFactory",
    "$attrs",
    "$scope",
    "$timeout",
    function(forecastApiFactory, $attrs, $scope, $timeout) {
      var ctrl = this;

      ctrl.$onInit = showWeather.bind(ctrl, $timeout, $scope);

      ctrl.showForecast = showForecast.bind(
        ctrl,
        forecastApiFactory,
        $timeout,
        $scope
      );
      ctrl.showWeather = showWeather.bind(ctrl, $timeout, $scope);
    }
  ],
  element: "div",
  selector: "card",
  bindings: {
    city: "<"
  }
});

function showWeather($timeout, $scope) {
  var ctrl = this;

  ctrl.temp = ctrl.city.main.temp;
  ctrl.windSpeed = ctrl.city.wind.speed;
  ctrl.titleSuffix = "Weather";
  ctrl.isForecast = false;

  $timeout(function() {
    $scope.$apply();
  }, 0);
}

function showForecast(forecastApiFactory, $timeout, $scope) {
  var ctrl = this;

  if (!ctrl.forecast) {
    forecastApiFactory.get(ctrl.city.name).then(function(response) {
      ctrl.forecast = response.data.list[0];
      showForecast.call(ctrl, forecastApiFactory, $timeout, $scope);
    });
  } else {
    ctrl.temp = ctrl.forecast.main.temp;
    ctrl.windSpeed = ctrl.forecast.wind.speed;
    ctrl.titleSuffix = "Next hours forecast";
    ctrl.isForecast = true;

    $timeout(function() {
      $scope.$apply();
    }, 0);
  }
}
