var gulp         = require("gulp"),
    del          = require("del"),
    svgmin       = require('gulp-svgmin'),
    imagemin     = require('gulp-imagemin'),
    imageResize  = require('gulp-image-resize'),
    changed      = require('gulp-changed'),
    replace      = require('gulp-replace'),
    cache        = require('gulp-cache')

gulp.task("img", function () {
  // del(["static/img/**/*"])
  gulp.src("static-src/img/**/*")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("static/img"))
})

// SVG
gulp.task("svg", function () {
  del(["static/svg/**/*"])
  gulp.src("static-src/svg/**/*")
    .pipe(cache(svgmin()))
    .pipe(gulp.dest("layouts/partials/svg"))
})

// Compile SCSS files to CSS
gulp.task("svg-data", function () {
  // Clean SVG data
  gulp.src("static-src/scss/abstracts/_svg-data.scss", { base: "." })
    .pipe(replace('#', '%23'))
    .pipe(gulp.dest("./"))
})

// Watch asset folder for changes
gulp.task("watch", ["img", "svg", "svg-data"], function () {
  gulp.watch("static-src/img/**/*", ["img"])
  gulp.watch(["static-src/svg/**/*", "!static-src/scss/abstracts/_svg-data.scss"], ["svg"])
  gulp.watch("static-src/scss/abstracts/_svg-data.scss", ["svg-data"])
})

// Set watch as default task
gulp.task("default", ["watch"])