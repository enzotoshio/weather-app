// Using env config (a simpler version of it) so it is possible to better automate and evolve the project

angular.module("weatherApp.factory").factory("forecastApiFactory", [
  "$http",
  "weatherMapApiConfig",
  function($http, weatherMapApiConfig) {
    // Applying John Papa "Accessible Members Up Top" rule to better expose the factory interface and to improve maintainability
    var service = { get: get };
    return service;

    function get(query) {
      var appidParam = "&appid=" + weatherMapApiConfig.appid;

      return $http.get(
        weatherMapApiConfig.forecastHost + "?q=" + query + appidParam
      );
    }
  }
]);
