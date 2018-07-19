/* eslint-disable */
const gulp = require('gulp'),
  sass = require('gulp-sass'),  // scss预处理
  notify = require('gulp-notify'),    // 提示我们出现了错误（gulp-notify）
  plumber = require('gulp-plumber'),  // 出现异常并不终止watch事件（gulp-plumber）
  postcss = require('gulp-postcss'),  // postcss
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  eslint = require('gulp-eslint'),
  babel = require('gulp-babel'),
  ts = require('gulp-typescript'),
  tsProject = ts.createProject('./tsconfig.client.json');
// “*”：匹配所有文件    例：src/*.js(包含src下的所有js文件)；
// “**”：匹配0个或多个子文件夹    例：src/**/*.js(包含src的0个或多个子文件夹下的js文件)；
// “{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
// “!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；

module.exports = ({cssUrl, jsUrl, tsUrl, viewUrl, imgUrl, iconUrl, spriteUrl}) => {
  gulp.task('scss:dev', function () {
    return gulp.src(cssUrl, {base: './app/client'})
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(postcss())
      .pipe(gulp.dest('./app'))
      .pipe(reload({stream: true}));
  });

  gulp.task('tsmin:dev', function () {
    return gulp.src(tsUrl)
      .pipe(tsProject())
      .js
      .pipe(gulp.dest('./app/public/hook'));
  });

  gulp.task('jsmin:dev', function () {
    return gulp.src(jsUrl, {base: './app/client'})
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(eslint())
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failAfterError last.
      // .pipe(eslint.failAfterError())
      // Cause the stream to stop(/fail) before copying an invalid JS file to the output directory
      .pipe(eslint.failOnError())
      .pipe(babel())
      .pipe(gulp.dest('./app'))
      .pipe(reload({stream: true}));
  });

  gulp.task('imagemin:dev', function () {
    return gulp.src(imgUrl, {base: './app/client'})
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(gulp.dest('./app'))
      .pipe(reload({stream: true}));
  });

  gulp.task('iconfont:dev', function () {
    return gulp.src(iconUrl, {base: './app/client'})
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(gulp.dest('./app'))
      .pipe(reload({stream: true}));
  });

  gulp.task('htmlmin:dev', function () {
    return gulp.src(viewUrl, {base: './app/client'})
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(gulp.dest('./app'))
      .pipe(reload({stream: true}));
  });

  gulp.task('dev', ['sprite', 'scss:dev', 'jsmin:dev', 'imagemin:dev', 'htmlmin:dev', 'iconfont:dev']);

  gulp.task('watch', ['dev'], function () {
    gulp.watch(imgUrl, ['imagemin:dev']);
    gulp.watch(cssUrl, ['scss:dev']);
    gulp.watch(jsUrl, ['jsmin:dev']);
    gulp.watch(iconUrl, ['iconfont:dev']);
    gulp.watch(viewUrl, ['htmlmin:dev']);
    gulp.watch(spriteUrl, ['sprite']);
  });

  gulp.task('browser-sync', ['watch'], function () {
    browserSync.init({
      proxy: `http://localhost:${7001}`, // 注意这里要换成你在egg中设定的 服务端口一般是7001
      browser: 'google chrome',
      port: 8000
    });

    gulp.watch(['./app/public/**/*', './app/view/*']).on('change', reload);

  });

};

