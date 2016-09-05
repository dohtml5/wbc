var gulp = require('gulp'),

    cssmin = require('gulp-minify-css'),
    cssver = require('gulp-make-css-url-version'),
    
    uglify = require('gulp-uglify'),
    
    concat = require('gulp-concat'),
    
    notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
    
    htmlreplace = require('gulp-html-replace');

gulp.task('autoBuild', function() {
    gulp.watch('src/**/*.js', ['wbcBuildJs']);
    gulp.watch('src/**/*.css', ['wbcBuildCss']);
    gulp.watch('src/index.html', ['wbcBuildHtml']);
});

/**
    替换html页面中的css/js路径
*/
gulp.task('wbcBuildHtml', function() {
    gulp.src('src/index.html')
        .pipe(htmlreplace({
            'wbc6css': 'css/build.css',
            'wbc6js': 'js/build.js'
        }))
        .pipe(gulp.dest('dist/'));
});

/**
    压缩/合并CSS
*/
gulp.task('wbcBuildCss', function() {
    gulp.src('src/**/*.css')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(cssver())
        .pipe(concat('build.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});

/**
    压缩/合并js
*/
gulp.task('wbcBuildJs', function() {
    gulp.src(['src/js/jquery.js', 'src/js/index2.js', 'src/js/index1.js'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

///////////////////////////////////////////////////////////

/**
压缩js文件
*/
gulp.task('wbcJsMin', function() {
    gulp.src(['src/js/index2.js', 'src/js/index1.js'])
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('dist/js'));
});

/**
合并js文件
*/
gulp.task('wbcJsConcat', function() {
    gulp.src(['src/js/index2.js', 'src/js/index1.js'])
        .pipe(concat('build.js'))
        .pipe(gulp.dest('dist/js'));
});
    
/**
压缩css
*/    
gulp.task('wbcCssMin', function() {
    
    // gulp.src(['src/css/base.css', 'src/css/index.css'])
    gulp.src('src/**/*.css')
        .pipe(cssver())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/'));
        
});