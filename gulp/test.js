const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', 'Runs the Jasmine test specs', ['build'], function () {
  return gulp.src('test/*.ts')
    .pipe(mocha({
      require: ['ts-node/register']
    }));
});