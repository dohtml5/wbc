var gulp = require('gulp'),

    cssmin = require('gulp-minify-css'),
    cssver = require('gulp-make-css-url-version'),
    
    uglify = require('gulp-uglify'),
    
    concat = require('gulp-concat'),
    
    notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
    
    htmlreplace = require('gulp-html-replace'),
	
	rev = require('gulp-rev-append'),
	
	runSequence = require('run-sequence'),
	
	assetRev = require('gulp-asset-rev'),
	
	cache = require('gulp-cache'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	imageminJpegtran = require('imagemin-jpegtran'),
	imageminGifsicle = require('imagemin-gifsicle'),
	imageminOptipng = require('imagemin-optipng'),
	imageminSvgo = require('imagemin-svgo'),
	gutil = require('gulp-util');
	
var browserSync = require('browser-sync').create();

var crypto = require('crypto');

///////////////////////////////////////////////////////////////////////////////

gulp.task('imagemin', function () {
    gulp.src('src/**/*.{png,jpg,gif,ico}')
        .pipe(plumber({errorHandler:errrHandler}))
        .pipe(cache(imagemin({     
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片          
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant(),imageminJpegtran({progressive: true})
            , imageminGifsicle({interlaced: true}),imageminOptipng({optimizationLevel:3}), imageminSvgo()] //使用pngquant深度压缩png图片的imagemin插件          
        })))
        .pipe(gulp.dest('dist/'));
});

function errrHandler( e ){
    // 控制台发声,错误时beep一下
    gutil.beep();
    gutil.log(e);
    this.emit('end');
}

/**
	监控文件修改
*/
gulp.task('autoBuild', function() {
    gulp.watch('src/**/*.js', ['wbcBuildJs']);
    gulp.watch('src/**/*.css', ['wbcBuildCss']);
    gulp.watch('src/index.html', ['wbcBuildHtml']);
});

/**
	浏览器自动同步
*/
gulp.task('bsync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
	
	gulp.watch("src/*.html").on('change', browserSync.reload);
});

/**
	给页面引入文件添加版本号的另外一种方式
*/
gulp.task('wbcRev3', function() {
	gulp.src('src/index3.html')
		.pipe(assetRev())
		.pipe(gulp.dest('dist/'));
});

gulp.task('wbcBuildHtml3', function() {
	gulp.src('src/index3.html')
        .pipe(htmlreplace({
            'wbc6css': 'css/build.css',
            'wbc6js': 'js/build.js'
        }))
        .pipe(gulp.dest('dist/'));
});

/**
	给页面引入文件添加版本号
*/
gulp.task('wbcRev', function() {
	gulp.src('src/index.html')
		.pipe(rev())
		.pipe(gulp.dest('dist/'));
});

/**
    替换html页面中的css/js路径
*/
gulp.task('wbcReplace', function() {
	var hash = crypto.createHash('md5'); // base64
	// var r = hash.digest('hex');
	// 其实这个版本号，直接用时间戳也挺好的
	var r = new Date().getTime();
	
	gulp.src(['src/index.html', 'src/index2.html'])
        .pipe(htmlreplace({
            'wbc6css': 'css/build.css?rev=' + r,
            'wbc6js': 'js/build.js?rev=' + r
        }))
		.pipe(rev())
        .pipe(gulp.dest('dist/'));
});

gulp.task('wbcBuildHtml2', function(done) {
	condition = false;
	runSequence(
		['wbcBuildHtml'],
		['wbcRev'],
		done
	);
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