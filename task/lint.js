var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function () {
  return gulp.src(['src/app/**/*.js', 'test/**/*.js', 'task/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
