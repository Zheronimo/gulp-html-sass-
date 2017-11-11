module.exports = function(){
    $.gulp.task('include', function () {
        return $.gulp.src('src/html/page/*.html')
            .pipe($.inc())
            .pipe ($.gulp.dest('build/'))
            .on('end', $.bs.reload);
    });
};