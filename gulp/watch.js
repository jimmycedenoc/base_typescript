const gulp = require('gulp');

var tsFilesGlob = (function (c) {
  return c.filesGlob || c.files || 'src/**/*.ts';
})(require('./../tsconfig.json'));

gulp.task('watch', 'Watches ts source files and runs build on change', function () {
  gulp.watch(tsFilesGlob, ['build']);
});