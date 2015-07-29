'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var koutoSwiss = require('kouto-swiss');
var watch = require('gulp-watch');

gulp.task('compress', function () {
	gulp.src('./client/styles/base.styl')
		.pipe(stylus({
			use: koutoSwiss(),
      compress: true
    }))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('./client/styles/**/*.styl', ['compress']);
});

gulp.task('default', ['watch', 'compress']);