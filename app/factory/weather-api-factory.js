angular.module("weatherApp.factory").factory("weatherApiFactory", [
  "$http",
  "weatherMapApiConfig",
  function($http, weatherMapApiConfig) {
    var service = {
      get: get
    };
    return service;

    function get(query) {
      var appidParam = "&appid=" + weatherMapApiConfig.appid;
      // debugger;
      return $http.get(
        weatherMapApiConfig.weatherHost + "?q=" + query + appidParam
      );
    }
  }
]);
