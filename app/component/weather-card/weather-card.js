function HeroDetailController() {}

angular.module("weatherApp.components", []).component("weatherCard", {
  templateUrl: "component/weather-card/weather-card.html",
  controller: HeroDetailController,
  element: "div",
  selector: "card",
  bindings: {
    city: "="
  }
});
