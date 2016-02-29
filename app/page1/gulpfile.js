var gulp = require('gulp');
var webpack = require('webpack-stream');
var configs = require('../webpack.config');

configs.watch = true;

gulp.task('default', function() {
  return gulp.src('./page1.js')
    .pipe(webpack(configs))
    .pipe(gulp.dest('dist/'));
});
