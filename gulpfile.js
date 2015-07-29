'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var koutoSwiss = require('kouto-swiss');

gulp.task('compress', function () {
	gulp.src('./client/styles/base.styl')
		.pipe(stylus({
			use: koutoSwiss(),
      compress: false
    }))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['compress']);