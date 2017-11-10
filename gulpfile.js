'use strict'
var gulp = require('gulp'),
    includer = require("gulp-x-includer"),
	gp = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('include', function () {
    return gulp.src('src/html/page/*.html')
        .pipe(includer())
        .pipe (gulp.dest('build/'))
        .on('end', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('src/static/sass/main.sass')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.sass({}))
        .pipe(gp.autoprefixer({
            browsers: ['last 10 versions']
        }))
        .on("error", gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "stile"
      	}))
        .pipe(gp.csso())
        .pipe(gp.sourcemaps.write())
        .pipe (gulp.dest('build/static/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function(){
	gulp.watch('src/html/**/*.html', gulp.series('include'));
	gulp.watch('src/static/sass/**/*.sass', gulp.series('sass'));
});
gulp.task('default', gulp.series(
	gulp.parallel('include', 'sass'),
    gulp.parallel('watch', 'serve')
	));