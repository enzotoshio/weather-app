function HeroDetailController() {}

angular.module("weatherApp.component", []).component("weatherCard", {
  templateUrl: "component/weather-card/weather-card.html",
  controller: HeroDetailController,
  element: "div",
  selector: "card",
  bindings: {
    city: "="
  }
});
