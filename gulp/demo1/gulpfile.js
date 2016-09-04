var gulp = require('gulp'),

	cssmin = require('gulp-minify-css'),
	cssver = require('gulp-make-css-url-version'),
	
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber');
	
gulp.task('wbcCssMin', function() {
	gulp.src('src/css/*.css')
		.pipe(cssver())
		.pipe(cssmin())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('wbcJsMin', function() {
	gulp.src(['src/js/*.js', 'src/js/lib/*.js', 'src/js/main/*.js'])
		.pipe(uglify({
			mangle: true,
			compress: true,
			preserveComments: 'all'
		}))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('wbcJsConcat', function() {
	gulp.src(['src/js/*.js', 'src/js/lib/*.js', 'src/js/main/*.js'])
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(uglify({
			mangle: true,
			compress: true
		}))
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('wbcWatch', function() {
	gulp.watch('src/**/*.js', ['wbcJsConcat']);
	gulp.watch('src/**/*.css', ['wbcCssMin']);
});

/**
	TODO：
	1. 合并css文件
	2. 按顺序压缩js/css文件
	3. 处理类库文件，比如jQuery
*/
