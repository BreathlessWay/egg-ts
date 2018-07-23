/* eslint-disable */
const gulp = require('gulp'),
  clean = require('gulp-clean'),
  dev = require('./gulpConfig/gulpfile.dev'),
  prod = require('./gulpConfig/gulpfile.prod'),
  spritesmith = require('gulp.spritesmith'),
  merge = require('merge-stream');

// “*”：匹配所有文件    例：src/*.js(包含src下的所有js文件)；
// “**”：匹配0个或多个子文件夹    例：src/**/*.js(包含src的0个或多个子文件夹下的js文件)；
// “{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
// “!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；

const url = {
  cssUrl: './app/client/public/css/**/*.scss',
  jsUrl: './app/client/public/js/**/*.js',
  tsUrl: './app/client/hook/index.ts',
  viewUrl: './app/client/view/**/*.njk',
  imgUrl: './app/client/public/image/**/*.{png,jpg,gif,ico,jpeg,svg}',
  iconUrl: './app/client/public/iconfont/iconfont.{svg,eot,ttf,woff,css}',
  spriteUrl: './app/client/public/asset/*.png',
  tempUrl: './app/client/public/template/*.njk'
};

gulp.task('clean', function () {
  return gulp.src(['./app/public', './app/view'], {read: false})
    .pipe(clean());
});

gulp.task('sprite', function () {
  // Generate our spritesheet
  const spriteData = gulp.src(url.spriteUrl)
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath: '/public/image/sprite.png'
    }));

  // Pipe image stream through image optimizer and onto disk
  const imgStream = spriteData.img
    .pipe(gulp.dest('./app/client/public/image'));

  // Pipe CSS stream through CSS optimizer and onto disk
  const cssStream = spriteData.css
    .pipe(gulp.dest('./app/client/public/css'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});

dev(url);
prod(url);