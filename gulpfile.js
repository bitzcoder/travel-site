var gulp = require('gulp');
var watchgulp = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');


function js() {
    return gulp.src('./app/assets/js/jsstyle.js')
    .pipe(gulp.dest('./app/temp/js/'))
};

function style() {
    return gulp.src('./app/assets/style/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
};

function watchtask(){
    gulp.watch(['./app/assets/style/**/*.css', './app/assets/js/**/*.js'], 
    gulp.parallel(style, js));
};

exports.default = gulp.series(
    gulp.parallel(style, js),
    watchtask
);