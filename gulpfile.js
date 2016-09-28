'use strict';

var gulp = require('gulp-param')(require('gulp'), process.argv);

var inline = require('gulp-inline'),
  rename = require('gulp-rename'),
  cp = require('child_process');

gulp.task('inline', function () {
  console.log('creating inline version');

  gulp.src('./dist/index.html')
    .pipe(rename('index-inline.html'))
    .pipe(inline({
      base: 'dist/'
    })).pipe(gulp.dest('./dist/'));
});

gulp.task('build', function (cb) {
  console.log('Building', cb);

  var cmd = cp.spawn('npm', ['run', 'dist:app'], {stdio: 'inherit'});

  cmd.on('close', function (code) {
    console.log('my-task exited with code ' + code);
    // cb(code);
    gulp.start('inline');
  });
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['build']);
  gulp.watch('./src/**/*.css', ['build']);
  gulp.watch('./src/**/*.html', ['build']);
});

gulp.task('default', ['build', 'watch']);
