'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    mocha = require('gulp-mocha'),
    //exit = require('gulp-exit'),
    nodemon = require('gulp-nodemon');
    //watch = require('gulp-watch');

gulp.task('nodemon', function() {
  nodemon({script: 'server.js'})
    .on('change', ['lint'])
    .on('restart');
});

gulp.task('watch', function() {
  gulp.watch(
    ['*.js', 'test/*.js', 'controllers/**/*.js', 'config/**/*.js'], //blurbs of files to watch
    {read: true},
    ['test'] //tasks to run when the above files change
  );
});

gulp.task('lint', function() {
  return gulp.src(['*.js', 'controllers/**/*.js', 'config/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('test', function() {
  process.env.NODE_ENV = 'test';
  process.env.PORT = 8001;
  return gulp.src(['test/**/*.js'])
    .pipe(mocha({
        reporter: 'nyan',
        ui: 'bdd',
        growl: true,
        timeout: 2000,
        useColors: true,
        useInlineDiffs: true
      }));
});

gulp.task('default', ['nodemon', 'test', 'watch', 'lint']);
