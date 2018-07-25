# Egg-typescript工程化

## QuickStart

### Development

```bash
$ npm i  安装相关依赖
$ npm run dev  启动node开发服务
$ npm run watch  启动gulp实时编译
$ open http://127.0.0.1:7001/  node启动的服务端口
$ open http://127.0.0.1:8000/  gulp启动的服务端口 !-开发时所用的端口-!
```

~~默认情况下只需要通过npm run dev启动开发环境，会自动启动npm run watch服务，自动打开http://127.0.0.1:8000页面~~

***原本在node服务启动后通过agent启动gulp服务，但当gulp出错时无法知道错误原因，而且需要再重启两个服务，所以将两个服务分开启动***

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run build
$ npm start:dev|:pre|:prod 分别启动测试|预发布|正式环境
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled files at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

### 相关技术栈

> 服务端

1. [egg](https://eggjs.app/zh-cn/intro/quickstart.html) 基于koa的node开发框架
2. [typescript](https://www.tslang.cn/docs/handbook/basic-types.html) javascript的超集，用于类型校验提高代码规范度
3. [nunjucks](https://mozilla.github.io/nunjucks/cn/templating.html) 模版引擎
4. [moment](http://momentjs.cn/) 时间处理插件

> 客户端

1. [scss](https://www.sass.hk/) css预处理器，不是sass，两者有区别
     ````
     Sass 有两种语法格式。首先是 SCSS (Sassy CSS) 这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是通用的，同时加入 Sass 的特色功能。此外，SCSS 也支持大多数 CSS hacks 写法以及浏览器前缀写法 (vendor-specific syntax)，以及早期的 IE 滤镜写法。这种格式以 .scss 作为拓展名。
     
     另一种也是最早的 Sass 语法格式，被称为缩进格式 (Indented Sass) 通常简称 "Sass"，是一种简化格式。它使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，具体请查看 the indented syntax reference。这种格式以 .sass 作为拓展名。
2. [jquery](http://jquery.cuishifeng.cn/) dom操作库
3. [es6](http://es6.ruanyifeng.com/) 支持es6的大部分语法，如有额外需要再另外配置，通过[babel](https://www.babeljs.cn/docs/core-packages/)编译
4. [gulp](https://www.gulpjs.com.cn/docs/getting-started/) 前端项目文件构建工具

> 代码规范

1. [eslint](http://eslint.cn/) js的代码规范校验
2. [tslint](https://palantir.github.io/tslint/rules/) ts的代码规范校验

> 单元测试

1. [mocha](https://segmentfault.com/a/1190000011362879)，mocha是JavaScript的一种单元测试框架，既可以在浏览器环境下运行，也可以在Node.js环境下运行。
2. [power-assert](https://www.jianshu.com/p/41ced3207a0c)，进行BDD单体测试的断言库
3. [mock](https://github.com/node-modules/mm#api)，模拟数据方法等
4. [istanbul](https://github.com/gotwarlost/istanbul#readme)，单元测试覆盖率报告
### TODO
1. 客户端开发支持typescript
2. ~~单元测试~~（已添加egg集成的测试demo）

### 实时刷新
1. 更改服务端文件时浏览器无法自动刷新，需要手动刷新
2. 更改客户端文件时会自动刷新，通过browser-sync实现

### 相关问题
1. Gulp tasks are asynchronous and Gulp uses async-done to wait for the task's completion. Tasks are called with a callback parameter to call to signal completion. Alternatively, Task can return a stream, a promise, a child process or a RxJS observable to signal the end of the task.
2. 需要转换雪碧图的小图标放置在client/public/asset目录下，名称需符合class名规范
3. gulp.watch本身不支持监听文件的创建删除重命名，通过[gulp-watch](https://github.com/floatdrop/gulp-watch)解决
4. 页面post请求时的csrf防御，参考[egg-security](https://eggjs.org/zh-cn/core/security.html)