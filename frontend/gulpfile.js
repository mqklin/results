var gulp = require("gulp");
var babel = require("gulp-babel");
var clean = require('gulp-clean');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task("copy", function(){
  return gulp.src(["index.html", "main.js"]).pipe(gulp.dest("build"));
});

gulp.task("vendors", function(){
  return gulp
    .src([
      "node_modules/requirejs/require.js",
      "node_modules/react/dist/react.js"
      ])
    .pipe(gulp.dest("build/vendors"));
})

gulp.task("babel", function(){
  return gulp.src("src/components/**/*.js")
    .pipe(babel({
      stage: 0,
      modules: "amd"
    }))
    .pipe(gulp.dest("build/src/components"));
});

gulp.task('sass', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

gulp.task("clean", function(){
  return gulp.src('build/**/*', {read: false})
    .pipe(clean());
});

gulp.task("default", ["copy", "vendors", "babel"]);

gulp.task("watch", ["copy", "vendors", "babel", "sass"], function(){

  gulp.watch('index.html', ["copy"]);
  gulp.watch('src/components/**/*.js', ["babel"]);
  gulp.watch('src/sass/**/*.scss', ["sass"]);
});