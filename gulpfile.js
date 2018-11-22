var gulp = require("gulp");
var gulpNgConfig = require("gulp-ng-config");

gulp.task("config", function() {
  return gulp
    .src("config.json")
    .pipe(gulpNgConfig("weatherApp.config"))
    .pipe(gulp.dest("./app"));
});
