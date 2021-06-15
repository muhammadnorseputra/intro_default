var gulp = require("gulp");
var concat = require("gulp-concat");
var minify = require("gulp-minify");

gulp.task("lib", function() {
    return gulp
        .src([
            "assets/lib/jquery/dist/jquery.js",
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
            "assets/js/plugins.js",
            "assets/js/main.js"
        ])
        .pipe(concat("lib.js"))
        .pipe(minify())
        .pipe(gulp.dest("min/"));
});