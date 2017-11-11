module.exports = function(){
    $.gulp.task('watch', function(){
        $.gulp.watch('src/html/**/*.html', $.gulp.series('include'));
        $.gulp.watch('src/static/sass/**/*.sass', $.gulp.series('sass'));
        $.gulp.watch('src/static/js/libs/*.js', $.gulp.series('scripts:lib'));
        $.gulp.watch('src/static/js/main.js', $.gulp.series('scripts'));
        $.gulp.watch('src/static/img/*', $.gulp.series('img:dev'));
    });
};