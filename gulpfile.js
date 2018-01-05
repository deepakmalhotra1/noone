var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');
var jsFiles = ['*.js', 'public/**/*.js'];

gulp.task('default', function () {
    nodemon({
        //ext:'js',
        delayTime: 1,
        watch: jsFiles,
        script: './bin/www',
        ignore: ['./node_modules/**']
    })
        .on('restart', function () {
            console.log('restarting');
        })
        .on('crash',function () {
            console.log('crashed... :( ')
        })
        .on('start',function () {
            console.log('started.. :) ')
        })
});
