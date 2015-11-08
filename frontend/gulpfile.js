var gulp = require("gulp");
var babel = require("gulp-babel");
var clean = require('gulp-clean');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("copy", function() {
  gulp.src(["index.html", "main.js", "src/images"]).pipe(gulp.dest("build"));
  gulp.src(["src/images/**"]).pipe(gulp.dest("build/images"));
});

gulp.task("vendors", function() {
  return gulp.src([
      "node_modules/babel-polyfill/dist/polyfill.js",
      "node_modules/react/dist/react.js"
    ])
    .pipe(gulp.dest("build/vendors"));
});

gulp.task("babel", function(done) {
  var b = babel({
    stage: 0,
    modules: "umd"
  });
  b.on('error', function(e) {
    console.error(e);
    b.end();
  });
  gulp.src("src/**/*.js")
    .pipe(b)
    .pipe(gulp.dest("build/tmp/"));
  return browserify('build/tmp/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

gulp.task("clean", function() {
  return gulp.src(['build/**/*', 'build/tmp/**/*'], {
      read: false
    })
    .pipe(clean());
});

gulp.task("default", ["copy", "vendors", "babel"]);

gulp.task("watch", ["copy", "vendors", "babel", "sass"], function() {

  gulp.watch('index.html', ["copy"]);
  gulp.watch('src/**/*.js', ["babel"]);
  gulp.watch('src/sass/**/*.scss', ["sass"]);
});
