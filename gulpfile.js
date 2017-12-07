var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function () {
    gulp.src(['./src/module.html', './plugin.json'])
        .pipe(gulp.dest('./dist'));

    gulp.src('./src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});