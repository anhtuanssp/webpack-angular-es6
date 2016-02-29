var gulp = require('gulp'),
	webpack = require('webpack-stream'),
	configs = require('../webpack.config');

configs.watch = true;

gulp.task('default', function() {
  return gulp.src('./module.js')
    .pipe(webpack(configs))
    .pipe(gulp.dest('dist/'));
});
