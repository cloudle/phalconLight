var gulp = require('gulp'),
    php = require('gulp-connect-php'),
    browserSync = require('browser-sync');

gulp.task('php-launch', function() {
  php.server({base: 'public', port: 7002, keepalive: true})
});

gulp.task('browser-sync', ['php-launch'], function(){
  browserSync({
    proxy: '127.0.0.1:7002',
    port: 2015,
    files: ['./app/**/*.*'],
    open: false,
    notify: false
  });
});

gulp.task('default', ['browser-sync']);