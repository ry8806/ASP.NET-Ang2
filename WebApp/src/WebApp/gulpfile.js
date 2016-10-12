/// <binding BeforeBuild='beforeBuild' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var webRoot = "./wwwroot/";

var paths = {
    nodeModules: './node_modules/'
};

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('beforeBuild', function () {
    // Copy node_module js files across
    gulp.src([paths.nodeModules + 'zone.js/dist/zone.js'])
        .pipe(gulp.dest(webRoot + 'js/'))

    gulp.src([paths.nodeModules + 'reflect-metadata/Reflect.js'])
        .pipe(gulp.dest(webRoot + 'js/'))

    gulp.src([paths.nodeModules + 'core-js/client/shim.min.js '])
        .pipe(gulp.dest(webRoot + 'js/'))

    gulp.src([paths.nodeModules + 'systemjs/dist/system.src.js '])
        .pipe(gulp.dest(webRoot + 'js/'))
});