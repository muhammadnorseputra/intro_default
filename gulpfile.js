var gulp = require("gulp");
var concat = require("gulp-concat");
var minify = require("gulp-minify");
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
// var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('css', function() {
    return gulp.src([
            'assets/css/style.css',
            'assets/plugin/materialize/css/materialize.min.css'
        ])
        .pipe(concatCss("bundle.css"))
        .pipe(cleanCSS({
            debug: true,
            compatibility: 'ie8',
            level: {
                1: {
                    specialComments: 0,
                },
            },
        }))
        .pipe(rename({
            basename: 'bundle',
            suffix: '.min',
        }))
        .pipe(gulp.dest('public/'));
});

gulp.task("lib", function() {
    return gulp
        .src([
            "assets/js/jquery-3.6.0.min.js",
            "assets/plugin/js-marquee/jquery.marquee.min.js",
            "assets/plugin/materialize/js/materialize.min.js",
            "assets/js/marquee.js",
            "assets/js/article.js",
            "assets/js/main.js"
        ])
        .pipe(concat("lib.js"))
        .pipe(minify())
        .pipe(gulp.dest("public/"));
});

gulp.task('watch', function() {
    gulp.watch('assets/js/**/*.js', gulp.series(['lib']));
    gulp.watch('assets/plugin/**/*.js', gulp.series(['lib']));
    gulp.watch('assets/css/**/*.css', gulp.series(['css']));
})