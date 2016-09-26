var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
    gulp.src('src/js/index.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js/'));

    gulp.src('src/index.html')
    	.pipe(gulp.dest('dist/'));
});