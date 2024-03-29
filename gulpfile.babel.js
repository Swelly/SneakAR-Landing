'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';
import deploy from 'gulp-gh-pages';

global.paths = {
    // HTML source files
    'html': './src/*.html',
    // JS source files
    'js': './src/js/**/*.js',
    // SASS source files
    'sass': './src/scss/**/*.scss',
    // image sources files
    'img': './src/img/*',
    // source folder
    'src': './src',
    // source CSS folder
    'css': './src/css',
    // distribution folder
    'dist': './dist'
};

requireDir('./gulp', { recurse: false });

gulp.task('default', ['build']);

gulp.task('deploy', function() {
    return gulp.src("./src/**/*")
        .pipe(deploy())
});
