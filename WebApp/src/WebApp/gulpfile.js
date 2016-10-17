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
    gulp.src([paths.nodeModules + 'zone.js/dist/zone.js',
              paths.nodeModules + 'reflect-metadata/Reflect.js',
              paths.nodeModules + 'core-js/client/shim.min.js',
              paths.nodeModules + 'systemjs/dist/system.src.js'])
        .pipe(gulp.dest(webRoot + 'js/'));

    // System JS Config
    gulp.src(['./systemJS/systemjs.config.js'])
        .pipe(gulp.dest(webRoot + 'js/'));

    // SystemJS Needed files

    // Angular2
    gulp.src([paths.nodeModules + '@angular/core/bundles/core.umd.js',
              paths.nodeModules + '@angular/common/bundles/common.umd.js',
              paths.nodeModules + '@angular/compiler/bundles/compiler.umd.js',
              paths.nodeModules + '@angular/platform-browser/bundles/platform-browser.umd.js',
              paths.nodeModules + '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
              paths.nodeModules + '@angular/http/bundles/http.umd.js',
              paths.nodeModules + '@angular/router/bundles/router.umd.js',
              paths.nodeModules + '@angular/forms/bundles/forms.umd.js'])
        .pipe(gulp.dest(webRoot + 'js/'));

    // Copy across the Reactive Extensions files, in the same structure as they are found (as this needs to be preserved)
    gulp.src([paths.nodeModules + 'rxjs/**/*.js'], { base: "node_modules/rxjs" })
        .pipe(gulp.dest(webRoot + 'js/'))
});