'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var soften = require('gulp-soften');

var paths = {
  'srcFiles': ['*.js', 'tests/*.js']
};

gulp.task('default', ['lint']);

gulp.task('lint', function lint(){
	return gulp.src(paths.srcFiles)
    .pipe(soften(2))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'))
    .pipe(jscs())
    .pipe(gulp.dest('./'));
});