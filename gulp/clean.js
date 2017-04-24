const gulp = require('gulp');
const del = require('del');

gulp.task('clean', 'Cleans the generated js files from lib directory', function () {
  return del(['lib']);
});