var gulp         = require("gulp"),
    concat       = require('gulp-concat'),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    del          = require("del"),
    svgmin       = require('gulp-svgmin'),
    imagemin     = require('gulp-imagemin'),
    imageResize  = require('gulp-image-resize'),
    uglify       = require('gulp-uglify'),
    cssmin       = require('gulp-cssmin'),
    changed      = require('gulp-changed'),
    replace      = require('gulp-replace'),
    cache        = require('gulp-cache')

    // Compile SCSS files to CSS
gulp.task("scss", function () {

  //Delete our old css files
  del(["static/css/**/*"])

  // Combine SCSS files
  gulp.src(["static-src/vendor/css/**/*", "static-src/scss/main.scss"])
    .pipe(sass({
      outputStyle : "expanded"
    }))
    .pipe(autoprefixer({
      browsers : ["last 20 versions"]
    }))
    .pipe(concat('main.css'))
    // .pipe(cssmin())
    .pipe(gulp.dest("static/css"))
})

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

// Javascript
gulp.task("js", function () {
  del(["static/js/**/*"])
  gulp.src(["static-src/vendor/js/**/*", "static-src/js/**/*"])
    .pipe(concat('main.js'))
    // .pipe(uglify())
    .pipe(gulp.dest("static/js"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "img", "svg", "svg-data", "js"], function () {
  gulp.watch(["static-src/vendor/css/**/*", "static-src/scss/**/*"], ["scss"])
  gulp.watch("static-src/img/**/*", ["img"])
  gulp.watch(["static-src/svg/**/*", "!static-src/scss/abstracts/_svg-data.scss"], ["svg"])
  gulp.watch("static-src/scss/abstracts/_svg-data.scss", ["svg-data"])
  gulp.watch(["static-src/vendor/js/**/*", "static-src/js/**/*"], ["js"])
})

// Set watch as default task
gulp.task("default", ["watch"])