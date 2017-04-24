var gulp = require('gulp');
var gulp = require('gulp-help')(gulp);
require('require-dir')('./gulp');

gulp.task('default', ['clean'], (()=>{
    gulp.start('serve:local');
}));