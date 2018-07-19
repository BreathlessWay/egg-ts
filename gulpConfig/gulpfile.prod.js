/* eslint-disable */
const gulp = require('gulp'),
  path = require('path'),
  sass = require('gulp-sass'),  // scss预处理
  sourcemaps = require('gulp-sourcemaps'),  // sourcemap
  htmlmin = require('gulp-htmlmin'),  // 压缩html
  imagemin = require('gulp-imagemin'),  // 压缩图片
  pngquant = require('imagemin-pngquant'),  // 深度压缩png图片的imagemin插件
  cache = require('gulp-cache'),   // 压缩图片时比较耗时，在很多情况下我们只修改了某些图片，没有必要压缩所有图片，使用”gulp-cache”只压缩修改的图片，没有修改的图片直接从缓存文件读取
  revAppend = require('gulp-rev-append'),  // 给页面引用url添加版本号，以清除页面缓存
  cssver = require('gulp-make-css-url-version'),  // 给css文件里引用url加版本号
  uglify = require('gulp-uglify'),  // 压缩js文件
  postcss = require('gulp-postcss'),  // postcss
  replace = require('gulp-replace'),
  babel = require('gulp-babel');
// “*”：匹配所有文件    例：src/*.js(包含src下的所有js文件)；
// “**”：匹配0个或多个子文件夹    例：src/**/*.js(包含src的0个或多个子文件夹下的js文件)；
// “{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
// “!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；

module.exports = ({cssUrl, jsUrl, tsUrl, viewUrl, imgUrl, iconUrl}) => {

  gulp.task('scss:prod', function () {
    return gulp.src(cssUrl, {base: './app/client'})
      .pipe(sourcemaps.init())
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(cssver({
        useDate: false,
        assetsDir: path.resolve(__dirname, '../app/client')
      }))
      .pipe(postcss())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./app'));
  });

  gulp.task('jsmin:prod', function () {
    return gulp.src(jsUrl, {base: './app/client'})
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./app'));
  });

  gulp.task('imagemin:prod', function () {
    return gulp.src(imgUrl, {base: './app/client'})
      .pipe(cache(imagemin({
        optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
        progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
        multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
        svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
        use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
      })))
      .pipe(gulp.dest('./app'));
  });

  gulp.task('iconfont:prod', function () {
    return gulp.src(iconUrl, {base: './app/client'})
      .pipe(gulp.dest('./app'));
  });

  gulp.task('htmlmin:prod', function () {
    const options = {
      removeComments: true,//清除HTML注释
      collapseWhitespace: true,//压缩HTML
      collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
      minifyJS: true,//压缩页面JS
      minifyCSS: true//压缩页面CSS
    };
    return gulp.src(viewUrl, {base: './app/client'})
      .pipe(replace(/css\/(.*)\.css/ig, 'css/$1.scss'))
      .pipe(revAppend())
      .pipe(replace(/css\/(.*)\.scss/ig, 'css/$1.css'))
      .pipe(htmlmin(options))
      .pipe(gulp.dest('./app'));
  });

  gulp.task('prod', ['sprite', 'scss:prod', 'jsmin:prod', 'imagemin:prod', 'htmlmin:prod', 'iconfont:prod']);
};