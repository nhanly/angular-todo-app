'use strict';

var gulp = require('gulp'), connect = require('gulp-connect');
var browserSync = require('browser-sync');

gulp.task( 'browser-sync', [ 'watch' ], function()
{
    browserSync({
        server:
            {
                baseDir: "./",
                injectChanges: true // this is new
            }
    });
});

/**
 * Watching for code changes
 */
gulp.task( 'watch', [], function ()
{
    var watchFiles = [
        'dist/**/*.js',
        'dist/**/*.html',
        'dist/**/*.css'
    ];

    // watching for main code
    gulp.watch( watchFiles, [ 'refresh' ] );
});

/**
 * Refreshes browser
 */
gulp.task( 'refresh', function()
{
    browserSync.reload();
});

gulp.task('default', ['browser-sync']);
gulp.task('run', ['browser-sync']);