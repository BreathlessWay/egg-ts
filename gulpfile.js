/* eslint-disable */
const gulp = require('gulp'),
  clean = require('gulp-clean'),
  dev = require('./gulpConfig/gulpfile.dev'),
  prod = require('./gulpConfig/gulpfile.prod');
// “*”：匹配所有文件    例：src/*.js(包含src下的所有js文件)；
// “**”：匹配0个或多个子文件夹    例：src/**/*.js(包含src的0个或多个子文件夹下的js文件)；
// “{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
// “!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；

const url = {
  cssUrl: './app/client/public/css/**/*.scss',
  jsUrl: './app/client/public/js/**/*.js',
  tsUrl: './app/client/hook/index.ts',
  viewUrl: './app/client/view/**/*.njk',
  imgUrl: './app/client/public/image/**/*.{png,jpg,gif,ico,jpeg}'
};

gulp.task('clean', function () {
  return gulp.src(['./app/public', './app/view'], {read: false})
    .pipe(clean());
});

dev(url);
prod(url);