angular.module("weatherApp.factory").factory("forecastApiFactory", [
  "$http",
  "weatherMapApiConfig",
  function($http, weatherMapApiConfig) {
    var service = {
      get: get
    };
    return service;

    function get(query) {
      var appidParam = "&appid=" + weatherMapApiConfig.appid;

      return $http.get(
        weatherMapApiConfig.forecastHost + "?q=" + query + appidParam
      );
    }
  }
]);
