var gulp = require("gulp");
var concat = require("gulp-concat");
var minify = require("gulp-minify");
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
// var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('css', function() {
    return gulp.src([
            'assets/lib/bootstrap/dist/css/bootstrap.min.css',
            'assets/lib/animate.css/animate.css',
            'assets/lib/flexslider/flexslider.css',
            'assets/lib/magnific-popup/dist/magnific-popup.css',
            'assets/lib/simple-text-rotator/simpletextrotator.css',
            'assets/lib/countdown/style.css',
            'assets/css/style.css'
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
        .pipe(gulp.dest('min/'));
});

gulp.task("lib", function() {
    return gulp
        .src([
            "assets/lib/jquery/jquery-3.6.0.min.js",
            "assets/lib/article.js",
            "assets/js/main.js",
            "assets/lib/bootstrap/dist/js/bootstrap.min.js",
            "assets/lib/wow/dist/wow.js",
            "assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js",
            "assets/lib/isotope/dist/isotope.pkgd.js",
            "assets/lib/imagesloaded/imagesloaded.pkgd.js",
            "assets/lib/flexslider/jquery.flexslider.js",
            "assets/lib/owl.carousel/dist/owl.carousel.min.js",
            "assets/lib/smoothscroll.js",
            "assets/lib/magnific-popup/dist/jquery.magnific-popup.js",
            "assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js",
            "assets/lib/countdown/multi-countdown.js",
        ])
        .pipe(concat("lib.js"))
        .pipe(minify())
        .pipe(gulp.dest("min/"));
});