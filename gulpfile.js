var gulp = require('gulp');
var es6 = require('es6-promise').polyfill();
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var nested = require('postcss-nested');
var cssshort = require('postcss-short');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var color_rgba_fallback = require('postcss-color-rgba-fallback');
var opacity = require('postcss-opacity');
var pseudoelements = require('postcss-pseudoelements');
var vmin = require('postcss-vmin');
var pixrem = require('pixrem');
var will_change = require('postcss-will-change');


gulp.task('css', function () {
    var processors = [
      nested,
      cssnext(),
      cssshort(),
        will_change,
        autoprefixer,
        color_rgba_fallback,
        opacity,
        pseudoelements,
        vmin,
        pixrem,
      cssnano()
        
    ];
    return gulp.src('./style/inStyle.css')
        .pipe(postcss(processors))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('./style/'));
});

gulp.task('default', function(){
  gulp.watch('style/inStyle.css', function(){
    gulp.run('css');
});
});