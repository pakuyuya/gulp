"use strict";

var gulp = require('gulp');
var espower = require('gulp-espower');
var mocha = require('gulp-mocha');

/**
 * power-assert実行可能なファイルにコンパイル
 */
gulp.task('generate-test', function() {
    return gulp
        .src('test/**/*.js', {base: 'test'})
        .pipe(espower())
        .pipe(gulp.dest('powered-test'));
});

gulp.task("test", ["generate-test"], function() {
  gulp.src("powered-test/**/*.js")
      .pipe(mocha());
});