const gulp = require('gulp');
const tslint = require('gulp-tslint');
const tslintCustom = require('tslint');

var tsFilesGlob = (function (c) {
  return c.filesGlob || c.files || 'src/**/*.ts';
})(require('./../tsconfig.json'));

gulp.task('lint', 'Lints all TypeScript source files', function () {
  return gulp.src(tsFilesGlob)
    .pipe(tslint({
      tslint: tslintCustom,
      formatter: 'verbose'
    }))
    .pipe(tslint.report());
});