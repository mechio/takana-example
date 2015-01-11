var gulp    = require('gulp'),
    takana  = require('takana'),
    sass    = require('gulp-sass');

// run takana
gulp.task('takana', function() {
  takana.run({
    path:         __dirname, // run from the current working directory
    includePaths: []         // optional include paths
  });
});

// compile the sass
gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});