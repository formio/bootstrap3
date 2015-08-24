module.exports = function(gulp, plugins) {
  return function () {
    return gulp.src('src/app/images/**/*')
      .pipe(plugins.cache(plugins.imagemin({
        progressive: true,
        interlaced: true,
        svgoPlugins: [{cleanupIDs: false}]
      })))
      .pipe(gulp.dest('dist/app/images'));
  };
};
