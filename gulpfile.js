'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var soften = require('gulp-soften');

var paths = {
  'srcFiles': ['./**/*.js', '!node_modules{,/**}']
};

gulp.task('default', ['lint']);

gulp.task('lint', function lint(){
  gulp.src(paths.srcFiles)
    .pipe(soften(2))
    .pipe(gulp.dest('./'));

  gulp.src(paths.srcFiles)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'))
    .pipe(jscs());
});
