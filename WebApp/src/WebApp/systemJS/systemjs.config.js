/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        // map tells the System loader where to look for things
        // ASP.NET Core exposes the wwwroot folder without the need to specify "wwwroot" in the path
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles Format = ('name': 'location')
            '@angular/core': 'js/core.umd.js',
            '@angular/common': 'js/common.umd.js',
            '@angular/compiler': 'js/compiler.umd.js',
            '@angular/platform-browser': 'js/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'js/platform-browser-dynamic.umd.js',
            '@angular/http': 'js/http.umd.js',
            '@angular/router': 'js/router.umd.js',
            '@angular/forms': 'js/forms.umd.js',

            // other libraries
            'rxjs': 'js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);