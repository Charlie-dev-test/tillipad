'use strict';

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rigger = require('gulp-rigger'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rimraf = require('gulp-rimraf'),
    rename = require('gulp-rename');

var path = {
    build: {
        js: 'web/build/js',
        css: 'web/build/css'
    },
    src: {
        js: 'src/js/main.js',
        style: 'src/css/style.css'
    },
    clean: 'web/build/*'
};

gulp.task('css', function(done) {
    return gulp.src(path.src.style)
        .pipe(plumber())
        .pipe(autoprefixer())
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.build.css));
    done();
});

gulp.task('js', function (done) {
    return gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
    done();
});
gulp.task('clean', function(done){
    return gulp.src(path.clean, {read: false})
        .pipe(rimraf({force: true}));
    done();
});

gulp.task('default', gulp.series('clean', gulp.parallel('css', 'js')));
