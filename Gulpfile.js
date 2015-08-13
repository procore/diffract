var
  gulp = require('gulp'),
  rename = require('gulp-rename'),
  webpack = require('gulp-webpack');

var jsPath = "src/index.js";
var jsOutName = "diffract.min.js";
var jsOutPath = "public";


gulp.task('build_js', function() {
  return gulp.src(jsPath)
          .pipe(webpack(require('./webpack.config.js')))
          .pipe(rename(jsOutName))
          .pipe(gulp.dest(jsOutPath));
});

gulp.task('watch', ['build_js'], function() {
  gulp.watch('./lib/**/*.js', ['build_js']);
});

gulp.task('dev', ['browsersync', 'webpack-hot']);

gulp.task('default', ['build_js']);
