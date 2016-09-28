'use strict';

var gulp = require('gulp-param')(require('gulp'), process.argv);

var inline = require('gulp-inline'),
  rename = require('gulp-rename');

gulp.task('inline', function () {
  gulp.src('./dist/index.html')
    .pipe(rename('index-inline.html'))
    .pipe(inline({
      base: 'dist/'
    })).pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['inline']);
