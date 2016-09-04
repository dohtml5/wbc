var gulp = require('gulp'),

	cssmin = require('gulp-minify-css'),
	cssver = require('gulp-make-css-url-version'),
	
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
    
    htmlreplace = require('gulp-html-replace');
	
/**
压缩css文件
*/
gulp.task('wbcCssMin', function() {
	gulp.src('src/**/*.css')
		.pipe(cssver())
		.pipe(cssmin())
		.pipe(gulp.dest('dist/css'));
});

/**
压缩/合并css文件
*/
gulp.task('wbcCssConcat', function() {
    gulp.src(['src/css/*.css'])
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(cssver())
        .pipe(cssmin())
		.pipe(concat('all.css'))
		.pipe(gulp.dest('dist/css'));
});

/**
压缩js文件
*/
gulp.task('wbcJsMin', function() {
	gulp.src(['src/js/*.js', 'src/js/lib/*.js', 'src/js/main/*.js'])
		.pipe(uglify({
			mangle: true,
			compress: true,
			preserveComments: 'all'
		}))
		.pipe(gulp.dest('dist/js'));
});

/**
压缩/合并js文件
*/
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

/**
替换html页面文件路径
*/
gulp.task('wbcReplace', function() {
    gulp.src('index.html')
        .pipe(htmlreplace({
            'css': 'css/all.css',
            'js': 'js/all.js'
        }))
        .pipe(gulp.dest('dist/'));
});

/**
监控文件变化
*/
gulp.task('wbcWatch', function() {
	gulp.watch('src/**/*.js', ['wbcJsConcat']);
	gulp.watch('src/**/*.css', ['wbcCssConcat']);
});
