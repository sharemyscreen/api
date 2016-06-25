const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('update', shell.task(['npm  update sharemyscreen-dev-service', 'npm  update sharemyscreen-login-service', 'npm  update sharemyscreen-api-service']));
