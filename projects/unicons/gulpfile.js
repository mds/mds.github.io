var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite');

var config = {
  symbol: true // Activate the «symbol» mode
};

gulp.src('assets/*.svg')
  .pipe(svgSprite(config))
  .pipe(gulp.dest('out'));