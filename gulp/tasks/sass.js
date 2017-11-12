module.exports = function(){
    $.gulp.task('sass:dev', function () {
        return $.gulp.src('src/static/sass/main.+(scss|sass)')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass().on('error', $.gp.sass.logError))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe ($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
    $.gulp.task('sass:build', function () {
        return $.gulp.src('src/static/sass/main.+(scss|sass)')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass().on('error', $.gp.sass.logError))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe ($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};