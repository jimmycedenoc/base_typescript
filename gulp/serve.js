const gulp = require('gulp');
const gulpNodemon = require('gulp-nodemon');

gulp.task('serve:local', ['clean','build'], (()=>{
    return serve('local');
}));


function serve(env) {
    return gulpNodemon({
        script: 'lib/app',
        ext: 'js',
        env: {'NODE_ENV': env},
        tasks: ['compile:' + env, 'compile'],
        ignore:['lib']
    }).on('start', (()=>{
        console.log('**************starting**************');
    })).on('restart', (()=>{
        console.log('**************restarting**************');
    }));
}