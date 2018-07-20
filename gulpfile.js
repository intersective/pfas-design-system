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
    replace      = require('gulp-replace')
    // gzip         = require('gulp-gzip')

// Compile SCSS files to CSS
gulp.task("scss", function () {

  //Delete our old css files
  del(["static/css/**/*"])

  // Clean SVG data
  gulp.src("static-src/scss/abstracts/_svg-data.scss", { base: "."})
    .pipe(replace('#', '%23'))
    .pipe(gulp.dest("./"))

  //compile hashed css files
  gulp.src(["static-src/vendor/css/**/*", "static-src/scss/main.scss"])
    .pipe(sass({
      outputStyle : "expanded"
    }))
    .pipe(autoprefixer({
      browsers : ["last 20 versions"]
    }))
    .pipe(concat('main.css'))
    // .pipe(cssmin())
    // .pipe(gzip())
    .pipe(gulp.dest("static/css"))
})

gulp.task("img", function () {
  del(["static/img/**/*"])
  gulp.src("static-src/img/**/*")
    .pipe(changed("static/img"))
    .pipe(imagemin())
    // .pipe(gzip())
    .pipe(gulp.dest("static/img"))
})

// Hash SVG
gulp.task("svg", function () {
  del(["static/svg/**/*"])
  gulp.src("static-src/svg/**/*")
    .pipe(svgmin())
    .pipe(gulp.dest("layouts/partials/svg"))
})

// Hash javascript
gulp.task("js", function () {
  del(["static/js/**/*"])
  gulp.src(["static-src/vendor/js/**/*", "static-src/js/**/*"])
    .pipe(concat('main.js'))
    // .pipe(uglify())
    // .pipe(gzip())
    .pipe(gulp.dest("static/js"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "img", "svg", "js"], function () {
  gulp.watch(["static-src/vendor/css/**/*", "static-src/scss/**/*"], ["scss"])
  gulp.watch("static-src/img/**/*", ["img"])
  gulp.watch("static-src/svg/**/*", ["svg"])
  gulp.watch(["static-src/vendor/js/**/*", "static-src/js/**/*"], ["js"])
})

// Set watch as default task
gulp.task("default", ["watch"])