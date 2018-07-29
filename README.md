此项目是基于 [Create React App](https://github.com/facebookincubator/create-react-app) 脚手架创建.

以下内容翻译自 create-react-app [README.MD](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md), 同时精简啰嗦的叙述.

[React技术栈个人总结](https://github.com/JesseWo/NOTBOOK/blob/master/%E5%89%8D%E7%AB%AF/React.md)

## 目录

- [更新到最新版本](#更新到最新版本)
- [工程目录结构](#工程目录结构)
- [可用的脚本](#可用的脚本)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [浏览器支持](#浏览器支持)
- [Supported Language Features and Polyfills](#supported-language-features-and-polyfills)
- [编辑器语法高亮](#编辑器语法高亮)
- [在编辑器中显示 Lint 输出](#在编辑器中显示Lint输出)
- [Debugging](#Debugging)
- [自动格式化代码](#自动格式化代码)
- [修改页面标题 `<title>`](#修改页面标题-`<title>`)
- [导入 Component](#导入-Component)
- [代码拆分 (Code Splitting)](#代码拆分-(Code-Splitting))
- [添加样式](#添加样式)
- [Post-Processing CSS](#post-processing-css)
- [CSS 预处理器 (Sass, Less etc.)](#CSS-预处理器-(Sass,-Less-etc.))
- [添加 Images, Fonts, 和 Files](#添加-Images,-Fonts,-和-Files)
- [使用 public 文件夹](#使用-public-文件夹)
  - [修改 HTML](#修改-HTML)
  - [Adding Assets Outside of the Module System](#adding-assets-outside-of-the-module-system)
  - [什么时候使用 public 文件夹](#什么时候使用-public-文件夹)
- [使用全局变量(Global Variables)](#使用全局变量(Global-Variables))
- [Adding Bootstrap](#adding-bootstrap)
  - [Using a Custom Theme](#using-a-custom-theme)
- [添加 Flow](#添加-Flow)
- [添加 Router](#添加-Router)
- [添加自定义环境变量](#添加自定义环境变量)
  - [Referencing Environment Variables in the HTML](#referencing-environment-variables-in-the-html)
  - [Adding Temporary Environment Variables In Your Shell](#adding-temporary-environment-variables-in-your-shell)
  - [Adding Development Environment Variables In `.env`](#adding-development-environment-variables-in-env)
- [支持 Decorators 吗?](#支持-Decorators-吗?)
- [网络请求(Fetching Data with AJAX Requests)](#网络请求(Fetching-Data-with-AJAX-Requests))
- [Integrating with an API Backend](#integrating-with-an-api-backend)
  - [Node](#node)
  - [Ruby on Rails](#ruby-on-rails)
- [在开发环境中代理 API 请求](#在开发环境中代理-API-请求)
  - ["Invalid Host Header" Errors After Configuring Proxy](#invalid-host-header-errors-after-configuring-proxy)
  - [Configuring the Proxy Manually](#configuring-the-proxy-manually)
  - [Configuring a WebSocket Proxy](#configuring-a-websocket-proxy)
- [在开发环境使用HTTPS](#在开发环境使用HTTPS)
- [Generating Dynamic `<meta>` Tags on the Server](#generating-dynamic-meta-tags-on-the-server)
- [Pre-Rendering into Static HTML Files](#pre-rendering-into-static-html-files)
- [Injecting Data from the Server into the Page](#injecting-data-from-the-server-into-the-page)
- [Running Tests](#running-tests)
  - [Filename Conventions](#filename-conventions)
  - [Command Line Interface](#command-line-interface)
  - [Version Control Integration](#version-control-integration)
  - [Writing Tests](#writing-tests)
  - [Testing Components](#testing-components)
  - [Using Third Party Assertion Libraries](#using-third-party-assertion-libraries)
  - [Initializing Test Environment](#initializing-test-environment)
  - [Focusing and Excluding Tests](#focusing-and-excluding-tests)
  - [Coverage Reporting](#coverage-reporting)
  - [Continuous Integration](#continuous-integration)
  - [Disabling jsdom](#disabling-jsdom)
  - [Snapshot Testing](#snapshot-testing)
  - [Editor Integration](#editor-integration)
- [Debugging Tests](#debugging-tests)
  - [Debugging Tests in Chrome](#debugging-tests-in-chrome)
  - [Debugging Tests in Visual Studio Code](#debugging-tests-in-visual-studio-code)
- [单独开发组件](#单独开发组件)
  - [Storybook](#Storybook-简介)
  - [Styleguidist](#Styleguidist-简介)
- [发布 Components 到 npm](#发布-Components-到-npm)
- [制作PWA应用 (Progressive Web App)](#制作PWA应用-(Progressive-Web-App))
  - [Opting Out of Caching](#opting-out-of-caching)
  - [Offline-First Considerations](#offline-first-considerations)
  - [Progressive Web App Metadata](#progressive-web-app-metadata)
- [Analyzing the Bundle Size](#analyzing-the-bundle-size)
- [部署](#部署)
  - [静态服务器](#静态服务器)
  - [其它方案](#其它方案)
  - [Serving Apps with Client-Side Routing](#serving-apps-with-client-side-routing)
  - [Building for Relative Paths](#building-for-relative-paths)
  - [Azure](#azure)
  - [Firebase](#firebase)
  - [GitHub Pages](#github-pages)
  - [Heroku](#heroku)
  - [Netlify](#netlify)
  - [Now](#now)
  - [S3 and CloudFront](#s3-and-cloudfront)
  - [Surge](#surge)
- [高级配置](#高级配置)
- [Troubleshooting](#troubleshooting)
  - [`npm start` doesn’t detect changes](#npm-start-doesnt-detect-changes)
  - [`npm test` hangs on macOS Sierra](#npm-test-hangs-on-macos-sierra)
  - [`npm run build` exits too early](#npm-run-build-exits-too-early)
  - [`npm run build` fails on Heroku](#npm-run-build-fails-on-heroku)
  - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)
  - [Moment.js locales are missing](#momentjs-locales-are-missing)
- [Alternatives to Ejecting](#alternatives-to-ejecting)

## 更新到最新版本

Create React App 分为两个包:

* `create-react-app` 是个全局命令行, 用于创建新项目.
* `react-scripts` 是开发时的依赖脚本, 会内置到新建的项目中.

你不需要更新 `create-react-app` 本身: 他把构建步骤委托给了 `react-scripts`.

如果要更新 `react-scripts`, 请先查看 [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) , 然后再 ```npm install``` 进行更新, 主要防止有 breaking changes.

## 工程目录结构

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

其中以下两个文件名不要修改:

* `public/index.html` 页面模板;
* `src/index.js` 入口js文件.

为了提高build速度, webpack只会处理 `src` 下的文件

只有 `public` 中的文件可以被用于 `public/index.html`.<br>

## 可用的脚本

### `npm start`

测试环境.<br>
自动在浏览器中打开 [http://localhost:3000](http://localhost:3000) 进行预览;

如果有修改, 页面会自动刷新.<br>
控制台可以查看 lint errors.

### `npm test`

详见 [running tests](#running-tests).

### `npm run build`

部署生产APP, 编译好的代码会输出到 `build` 文件夹.<br>
详见 [deployment](#deployment) .

## 浏览器支持
参考 [React documentation](https://reactjs.org/docs/react-dom.html#browser-support).

## 支持的语言特性和 Polyfills

支持最新的 JavaScript 标准.<br>
除了 [ES6](https://github.com/lukehoban/es6features), 还支持:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

虽然我们建议谨慎使用实验性提案, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

Also note that using some newer syntax features like `for...of` or `[...nonArrayValue]` causes Babel to emit code that depends on ES6 runtime features and might not work without a polyfill. When in doubt, use [Babel REPL](https://babeljs.io/repl/) to see what any specific syntax compiles down to.

## 编辑器语法高亮

详见 [relevant Babel documentation page](https://babeljs.io/docs/editors) 

## 在编辑器中显示Lint输出

Note: 
>需要 `react-scripts@0.2.0` 及以上版本.<br>
>npm 3 及以上.

包括 Sublime Text, Atom, 和 Visual Studio Code 等很多编辑器都有 ESLint 插件.

首先在你的编辑器上安装 ESLint 插件. 然后在 `project` 根目录新建 `.eslintrc` :

```js
{
  "extends": "react-app"
}
```

现在你的编辑器上就能显示linting warnings 了.

需要注意的是 `.eslintrc`  只会影响编辑器, 不会影响 terminal 和 in-browser 的 lint 输出. 因为 Create React App 只提供了常见错误的简单规则.

如果想在项目中强制执行代码规范, 应该用 [Prettier](https://github.com/jlongster/prettier) .

## Debugging

**目前支持 [Visual Studio Code](https://code.visualstudio.com) 和 [WebStorm](https://www.jetbrains.com/webstorm/).**

### Visual Studio Code

需 [VS Code](https://code.visualstudio.com) 最新版, 并安装 [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) 插件.

在 `launch.json` 文件中添加如下内容, 然后放到project根目录下的 `.vscode` 里.

```json
{
  "version": "0.2.0",
  "configurations": [{
    "name": "Chrome",
    "type": "chrome",
    "request": "launch",
    "url": "http://localhost:3000",
    "webRoot": "${workspaceRoot}/src",
    "sourceMapPathOverrides": {
      "webpack:///src/*": "${webRoot}/*"
    }
  }]
}
```
>Note: 如果你通过 [HOST or PORT environment variables](#advanced-configuration) 修改了host或者port, 记得把上面的url也同步改掉.

`npm start` 运行APP, 然后在VS Code 中 按 `F5` 或者点击绿色的 debug 按钮开始debug. 

如果 VS Code Debugging 遇到问题, 请参考 [troubleshooting guide](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting).

### WebStorm

[WebStorm](https://www.jetbrains.com/webstorm/), 并且安装 [JetBrains IDE Support](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji) Chrome extension.

在 WebStorm 中点击 `Run` 旁边的下拉菜单, 然后选中 `Edit Configurations...` 打开对话框. 然后点击左上角 `+` 选中 `JavaScript Debug`. 最后粘贴 `http://localhost:3000` 到 URL 里, 点击 OK 保存配置.

>Note: 如果你通过 [HOST or PORT environment variables](#advanced-configuration) 修改了host或者port, 记得把上面的url也同步改掉.

`npm start` 运行APP, 然后按 `^D` on macOS 或者 `F9` on Windows 和 Linux 或者点击绿色的 debug 按钮开始debug. 

当然, 在 IntelliJ IDEA Ultimate, PhpStorm, PyCharm Pro, 和 RubyMine 中的调试方式都与以上相同. 

## 自动格式化代码

Prettier 是个可选的代码格式化工具, 同时支持 JavaScript, CSS 和 JSON. 具体详见 [Prettier's GitHub](https://github.com/prettier/prettier) 和 [page to see it in action](https://prettier.github.io/prettier/).

如果要在 git commit 代码的时候进行代码自动格式化, 则需要安装以下依赖:

```sh
npm install --save husky lint-staged prettier
```

也可以用 `yarn`:

```sh
yarn add husky lint-staged prettier
```

* `husky` 如同使用 npm scripts 一样, 更容易的使用 githooks.
* `lint-staged` 在 git staged files 上执行脚本. [blog post about lint-staged to learn more about it](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8).
* `prettier` JavaScript formatter, 在commit之前运行.

修改 `package.json`.

新增scripts
```diff
  "scripts": {
+   "precommit": "lint-staged",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
新增lint-staged
```diff
  "dependencies": {
    // ...
  },
+ "lint-staged": {
+   "src/**/*.{js,jsx,json,css}": [
+     "prettier --single-quote --write",
+     "git add"
+   ]
+ },
  "scripts": {
```

现在, 当你commit代码时, Prettier 就会自动格式化你改动的文件了.<br> 
当然, 运行 `./node_modules/.bin/prettier --single-quote --write "src/**/*.{js,jsx,json,css}"` 可以格式化整个project

最后, 如果你想在你喜欢的编辑器中集成 Prettier, 可以参见 Prettier GitHub [Editor Integration](https://prettier.io/docs/en/editors.html).

## 修改页面标题 `<title>`

直接修改模板文件 `public/index.html` 中的 `<title>` 标签.

如果想动态修改标题, you can use the browser [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) API. For more complex scenarios when you want to change the title from React components, you can use [React Helmet](https://github.com/nfl/react-helmet), a third party library.

如果你想在生产环境中使用自定义服务器，并想在将标题发送到浏览器之前修改标题, 可以参照 [这部分](#generating-dynamic-meta-tags-on-the-server). 或者可以提前build每个页面作为静态HTML页面, 然后再加载 JavaScript bundle, 参照 [这里](#pre-rendering-into-static-html-files).

## 导入 Component

对于模块化方案, 可以用CommonJS的 `require()` 和 `module.exports`, 推荐使用ES6的 [`import` and `export`](http://exploringjs.com/es6/ch_modules.html).

注意 [default 和 named exports](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281) 两者之间的区别, 小心踩坑.

关于 ES6 modules:

* [When to use the curly braces?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
* [Exploring ES6: Modules](http://exploringjs.com/es6/ch_modules.html)
* [Understanding ES6: Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

## 代码拆分 (Code Splitting)

区别于把整个APP下载下来, code splitting 可以将你的代码拆分成小块, 实现按需加载.

Code Splitting 通过 [dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand) 来实现. 动态 ```import()``` 是 stage 3 的[提案](https://github.com/tc39/proposal-dynamic-import) . `import()` function-like form takes the module name as an argument and returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which always resolves to the namespace object of the module.

举个栗子:

### `moduleA.js`

```js
const moduleA = 'Hello';

export { moduleA };
```
### `App.js`

```js
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
```

以上使得 `moduleA.js` 及其单独的依赖成为一个独立的模块, 这个模块只有在用户点击`Load`按钮的时候才会加载.

### 与 React Router 搭配使用

- [how to use code splitting with React Router](http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html).

- [the companion GitHub repository](https://github.com/AnomalyInnovations/serverless-stack-demo-client/tree/code-splitting-in-create-react-app).

- 查看React文档的 [Code Splitting](https://reactjs.org/docs/code-splitting.html) 部分.

## 添加样式

我们用 [Webpack](https://webpack.js.org/) 处理所有的asset. Webpack提供了一种自定义方式，可以将“import”概念“扩展”到JavaScript以外. 

举个栗子
### `Button.css`

```css
.Button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

**对于React而言非必须**, 但是很多人在用 [好处?](https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b). 当然以上**基于webpack**, 如果你想换其他构建工具就不好办了.

在开发中，通过这种方式表达依赖关系，可以实现热加载; 在生产中，所有 `.CSS` 文件在构建过程中, 会被组合成一个压缩后的.css文件。

## Post-Processing CSS

通过 [Autoprefixer](https://github.com/postcss/autoprefixer) 压缩 CSS 并且 自动添加 vendor prefixes (供应商前缀)

举个栗子:

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

build后就变成:

```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
```

如果想关掉 autoprefixing, [follow this section](https://github.com/postcss/autoprefixer#disabling).

## CSS 预处理器 (Sass, Less etc.)

建议最好不要在不同的componet中使用同一个css 类型. <br>
比如有两个组件 `<AcceptButton>` 和 `<RejectButton>`, 那么最好再创建个 `<Button>` 组件, 以及 `.Button` 样式, 这样的话`<AcceptButton>` 和 `<RejectButton>` 就都能组合`<Button>` 组件了 (注意 [不是继承](https://facebook.github.io/react/docs/composition-vs-inheritance.html)).

基于以上的组件组合(`component composition`)规则, CSS 预处理器就没啥鸟用了. 当然如果你执意要用的话, 我们就以 Sass 为例简单介绍一下吧 (你也可以用 Less 以及其他的预处理器)

首先, 安装 Sass 的命令行接口:

```sh
npm install --save node-sass-chokidar
```

或者 `yarn`:

```sh
yarn add node-sass-chokidar
```

然后在 `package.json` 中的 `scripts` 中, 新增以下内容:

```diff
   "scripts": {
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",
```

>Note: 如果要用其他的预处理器, 请替换`build-css` 和 `watch-css` 对应的命令.

Now you can rename `src/App.css` to `src/App.scss` and run `npm run watch-css`. The watcher will find every Sass file in `src` subdirectories, and create a corresponding CSS file next to it, in our case overwriting `src/App.css`. Since `src/App.js` still imports `src/App.css`, the styles become a part of your application. You can now edit `src/App.scss`, and `src/App.css` will be regenerated.

To share variables between Sass files, you can use Sass imports. For example, `src/App.scss` and other component style files could include `@import "./shared.scss";` with variable definitions.

To enable importing files without using relative paths, you can add the  `--include-path` option to the command in `package.json`.

```
"build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
```

你就可以用如下所示的方式导入了

```scss
@import 'styles/_colors.scss'; // assuming a styles directory under src/
@import 'nprogress/nprogress'; // importing a css file from the nprogress node module
```

At this point you might want to remove all CSS files from the source control, and add `src/**/*.css` to your `.gitignore` file. It is generally a good practice to keep the build products outside of the source control.

As a final step, you may find it convenient to run `watch-css` automatically with `npm start`, and run `build-css` as a part of `npm run build`. You can use the `&&` operator to execute two scripts sequentially. However, there is no cross-platform way to run two scripts in parallel, so we will install a package for this:

```sh
npm install --save npm-run-all
```

或者用 `yarn`:

```sh
yarn add npm-run-all
```

Then we can change `start` and `build` scripts to include the CSS preprocessor commands:

```diff
   "scripts": {
     "build-css": "node-sass-chokidar src/ -o src/",
     "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",
     "test": "react-scripts test --env=jsdom",
     "eject": "react-scripts eject"
   }
```

Now running `npm start` and `npm run build` also builds Sass files.

**Why `node-sass-chokidar`?**

`node-sass` has been reported as having the following issues:

- `node-sass --watch` has been reported to have *performance issues* in certain conditions when used in a virtual machine or with docker.

- Infinite styles compiling [#1939](https://github.com/facebookincubator/create-react-app/issues/1939)

- `node-sass` has been reported as having issues with detecting new files in a directory [#1891](https://github.com/sass/node-sass/issues/1891)

 `node-sass-chokidar` is used here as it addresses these issues.

## 添加 Images, Fonts, 和 Files

在 Webpack 加持下, 使用图片字体等静态资源的方式跟CSS差不多.

* 在js中导入资源: 通过 **`import` 的方式. 

与导入 CSS 不同的是, 导入的是图片最终的路径, 这个路径可以在代码中引用, 比如`<img>` 的 `src` 属性 和 `<a>` 的 `href` 属性.

为了减少网络请求次数, 导入的图片如果小于 10,000 bytes 会返回 [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) (前缀为 data：scheme 的URL)而不是 path. 以上规则对以下文件扩展名有效: bmp, gif, jpg, jpeg, and png, 不包括 SVG 文件, 因为 [#1153](https://github.com/facebookincubator/create-react-app/issues/1153).

举个栗子:

```js
import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

这就确保了当project在构建时, Webpack可以把imges移到build文件夹中, 并且提供我们正确的路径.

* 在 CSS 中导入资源:

```css
.Logo {
  background-image: url(./logo.png);
}
```

Webpack在CSS中找到所有相关模块引用（它们以`./`开头）并用编译包中的最终路径替换它们。如果拼写错误或不小心删了重要文件，您将看到编译错误，就像导入不存在的js模块一样。 编译包中的最终文件名由Webpack根据内容的哈希值生成。 如果文件内容发生变化，Webpack将在生产中为其指定一个不同的名称，所以无需担心资源的长期缓存问题。

请注意, 这也是 webpack 的 feature.
**在 React 中不是必须的** (在图片方面, React Native 也使用了类似的机制).<br>

处理静态资源的另一种方法在下一节中介绍。

## 使用 `public` 文件夹

>Note: 依赖 `react-scripts@0.5.0` 及更高版本.

### 修改 HTML

`public` 包含 HTML 文件, 你可以修改它, 例如 [修改页面标题](#changing-the-page-title).
`<script>` 标签在build时会自动添加上去.

### 在模块系统(Module System)之外添加资源(assets)

你可以往`public` 中添加其他资源.

但是, 我们更推荐你在js中 `import` 资源. 例如:
- [添加样式](#添加样式) 
- [添加 Images, Fonts, 和 Files](#添加-Images,-Fonts,-和-Files).

这种机制的优点:

* Scripts 和 stylesheets 可以压缩并打包在一起, 从而避免额外的网络请求.
* 如果缺少文件, 会在build过程中就会暴露错误，而不是抛给用户404。.
* 用文件的hash值来生成文件名, 不用担心浏览器缓存问题.

但是依然想往`public` 中添加资源怎么办?

如果你把文件放到 `public`, Webpack会把文件原封不动的复制到 build 文件夹下.  如果想引用 `public` 中的文件, 则需要使用 `PUBLIC_URL` 这个特殊变量.

如下(`index.html` 中):

```html
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```

只有 `public` 中的文件才能通过 `%PUBLIC_URL%` 前缀引用. 如果想引用 `src` 或者 `node_modules` 中的文件, 那还是用 ```import``` 吧.

当通过 `npm run build` 构建时, `%PUBLIC_URL%` 就会被替换成绝对路径, so your project works even if you use client-side routing or host it at a non-root URL.

在js中, 可以使用 `process.env.PUBLIC_URL` 达到同样的目的:

```js
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  // as described in “Adding Images and Fonts” above this section.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

注意这种方式的缺点:

* `public` 下的文件都不会被预处理或者压缩.
* 如果文件缺失, 不会在编译期报错, 会抛给用户404错误.
* 最终的文件名中不含hash值, 所以当文件发生变更后, 你都需要添加查询参数或者重命名.

### 什么时候使用 `public` 文件夹

Normally we recommend importing [stylesheets](#adding-a-stylesheet), [images, and fonts](#adding-images-fonts-and-files) from JavaScript.
`public` 主要用于应对以下几种不常见情况:

* 你希望在构建后输出一个确定文件名的文件, 比如 [`manifest.webmanifest`](https://developer.mozilla.org/en-US/docs/Web/Manifest).
* 有大量图片需要动态引用.
* 你想在绑定的code外再引入一个小的js文件, 比如 [`pace.js`](http://github.hubspot.com/pace/docs/welcome/).
* webpack与某些库不兼容, 但是你又没有其他选择, 只能用 `<script>` 标签引入.

需要注意的是, 如果你添加 `<script>` , 会声明很多 global variables, 好好读读下面一部分吧..

## 使用全局变量(Global Variables)

如果你在HTML中引入js, 这个js中声明了一些全局变量, 在你的js中直接引用这些全局变量时, linter 会因为找不到这个变量的定义抛出警告信息. 
解决方案如下: 

明确的从 `window` 对象读取变量, 例如:

```js
const $ = window.$;
```

或者可以修改在代码行后面添加注释 `// eslint-disable-line`, 来忽略这个错误.

## 添加 Bootstrap

在React中集成Bootstrap, 需要 [React Bootstrap](https://react-bootstrap.github.io) 这个库. 在 Create React App 中的集成步骤如下:

用npm安装 React Bootstrap 和 Bootstrap: (React Bootstrap 并不包括 Bootstrap CSS , 需要单独安装)

```sh
npm install --save react-bootstrap bootstrap@3
```

或 `yarn`:

```sh
yarn add react-bootstrap bootstrap@3
```

在 ```src/index.js``` 的开头导入Bootstrap CSS 和 Bootstrap theme CSS(可选):

```js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
```

在 ```src/App.js``` 中,按需导入 React Bootstrap components  或者你的自定义组件:

```js
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
```

现在就可以在你的组件中使用导入的 React Bootstrap 组件了. 具体例子 [`App.js`](https://gist.githubusercontent.com/gaearon/85d8c067f6af1e56277c82d19fd4da7b/raw/6158dd991b67284e9fc8d70b9d973efe87659d72/App.js).

### 使用自定义主题

Sometimes you might need to tweak the visual styles of Bootstrap (or equivalent package).<br>
We suggest the following approach:

* Create a new package that depends on the package you wish to customize, e.g. Bootstrap.
* Add the necessary build steps to tweak the theme, and publish your package on npm.
* Install your own theme npm package as a dependency of your app.

Here is an example of adding a [customized Bootstrap](https://medium.com/@tacomanator/customizing-create-react-app-aa9ffb88165) that follows these steps.

## 添加 Flow

Flow 是个静态类型分析工具. [introduction to using static types in JavaScript](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb).

Recent versions of [Flow](http://flowtype.org/) work with Create React App projects out of the box.

添加 Flow 的步骤:

1. `npm install --save flow-bin` (或 `yarn add flow-bin`).
2. 在 `package.json` 中的 `scripts` 部分, 添加 `"flow": "flow"`.
3. 运行 `npm run flow init` (或 `yarn flow init`) 在project的根目录生成 [`.flowconfig` 文件](https://flowtype.org/docs/advanced-configuration.html).
4. 给需要进行类型检查的文件添加 `// @flow`  (例如 `src/App.js`).

运行 `npm run flow` (或者 `yarn flow`) 来检查文件的类型错误.
可以使用IDE [Nuclide](https://nuclide.io/docs/languages/flow/) 获取更好的集成体验.
未来我们计划将它集成到 Create React App 中.

关于Flow的更多信息 [参照](https://flowtype.org/).

## 添加 Router

[React Router](https://reacttraining.com/react-router/)

安装:

```sh
npm install --save react-router-dom
```

或者 `yarn`:

```sh
yarn add react-router-dom
```

删除 `src/App.js` 中的所有代码, 用以下例子中的代码 [Basic Example](https://reacttraining.com/react-router/web/example/basic).

注意在部署你的app之前, 需要配置生产环境服务器支持 [client-side routing](#serving-apps-with-client-side-routing) .

## 添加自定义环境变量

>Note: 需 `react-scripts@0.2.3` 及更高版本.

默认有 `NODE_ENV` 以及其他以 `REACT_APP_` 开头的环境变量

**环境变量在构建期间嵌入(injected)**. 由于Create React App生成静态HTML / CSS / JS包，因此无法在运行时读取它们. 如果想在运行时读取, 你需要将HTML加载到server的内存里, 并且在运行时替换占位符, 就像 [described here](#injecting-data-from-the-server-into-the-page). 或者 你在修改了环境变量后在server端进行rebuild.

>Note: 为了避免 [与本机其他环境变量名冲突](https://github.com/facebookincubator/create-react-app/issues/865#issuecomment-252199527), 自定义的环境变量必须以 `REACT_APP_` 为开头, 除此之外的其他的变量名(除了 `NODE_ENV`)都会被忽略. 修改环境变量后要重启开发服务器..

这些环境变量将会定义在 `process.env`. 例如 `process.env.REACT_APP_SECRET_CODE`.

环境变量有什么用? 
1. 区分环境: 比如区分dev, qa, staging, prod 几个环境;

比如:

`NODE_ENV` 是内置的环境变量, 你可以通过 `process.env.NODE_ENV` 来读取. 当运行 `npm start`, 它等于 `'development'`, 当运行 `npm test` 它等于 `'test'`, 当运行 `npm run build` 它等于 `'production'`. **禁止覆盖 `NODE_ENV` 变量.** 它的用法如:

```js
if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
```
2. 隐藏敏感数据: 为了避免把某些敏感数据上传到git repo, 你可以将其配置到环境变量里;

比如:

```jsx
render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
      </form>
    </div>
  );
}
```

build过程中, `process.env.REACT_APP_SECRET_CODE` 将会被替换成 `REACT_APP_SECRET_CODE` 的当前值:

```html
<div>
  <small>You are running this application in <b>development</b> mode.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
```

以上表单需要从环境变量中寻找 `REACT_APP_SECRET_CODE` 这个变量, 所以得先定义它. 定义环境变量的方式有两种: 在shell中 和 在 `.env` 文件里. 下文会细讲.

### 在 HTML 中引用环境变量

>Note: 需要 `react-scripts@0.9.0` 及更高版本.

在 `public/index.html` 中可以引用 `REACT_APP_` 开头的环境变量. 举个栗子:

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
```

Note that the caveats from the above section apply:

* 不同于内置的环境变量 (`NODE_ENV` and `PUBLIC_URL`), 自定义的环境变量必须以 `REACT_APP_` 为开头.
* 环境变量是在构建(build)期注入的, 如果来你想在运行(runtime)期注入, 请参考 [generating dynamic meta tags on the server](#generating-dynamic-meta-tags-on-the-server).

### 在shell中定义环境变量(临时的)

定义环境变量可能因操作系统而异, 而且这种方式对于 shell session 来说是暂时的.

#### Windows (cmd.exe)

```cmd
set "REACT_APP_SECRET_CODE=abcdef" && npm start
```

(Note: 给环境变量赋值需要加双引号, 避免后面有空格.)

#### Windows (Powershell)

```Powershell
($env:REACT_APP_SECRET_CODE = "abcdef") -and (npm start)
```

#### Linux, macOS (Bash)

```bash
REACT_APP_SECRET_CODE=abcdef npm start
```

### 在 `.env` 中定义环境变量(永久的)

>Note: 需要 `react-scripts@0.5.0` 及更高版本.

这种方式定义的环境变量是永久的(permanent), 首先在项目根目录创建 `.env` 文件

```
REACT_APP_SECRET_CODE=abcdef
```

`.env` 文件应该放到源码控制中 (排除 `.env*.local`).

#### 使用 `.env` 之外的其他文件定义环境变量

>Note: 这个feature需要 ** `react-scripts@1.0.0` 及更高版本**.

* `.env`: 默认.
* `.env.local`: Local overrides. **适用于除了`test`之外的所有环境.**
* `.env.development`, `.env.test`, `.env.production`: 针对特定环境.
* `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides, 针对特定环境.

从左往右, 文件优先级依次降低

* `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
* `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
* `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

更多请参考 [dotenv documentation](https://github.com/motdotla/dotenv).

>Note: 如果在开发环境定义了环境变量，那么 CI和/或托管平台 可能也需要定义
。 具体参考它们的文档吧 [Travis CI](https://docs.travis-ci.com/user/environment-variables/) 或 [Heroku](https://devcenter.heroku.com/articles/config-vars).

#### 在 `.env` 中拓展环境变量

>Note: 这个feature需要 `react-scripts@1.1.0` 及更高版本.

拓展已经存在的环境变量 (使用 [dotenv-expand](https://github.com/motdotla/dotenv-expand)).

例如获取环境变量 `npm_package_version`:

```
REACT_APP_VERSION=$npm_package_version
# also works:
# REACT_APP_VERSION=${npm_package_version}
```

或者拓展在 `.env` 声明的变量:

```
DOMAIN=www.example.com
REACT_APP_FOO=$DOMAIN/foo
REACT_APP_BAR=$DOMAIN/bar
```

## 支持 Decorators 吗?

许多流行的lib在文档中使用 [decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841).<br>
Create React App 当前不支持 decorator 语法, 原因如下:

* It is an experimental proposal and is subject to change.
* The current specification version is not officially supported by Babel.
* If the specification changes, we won’t be able to write a codemod because we don’t use them internally at Facebook.

However in many cases you can rewrite decorator-based code without decorators just as fine.<br>
Please refer to these two threads for reference:

* [#214](https://github.com/facebookincubator/create-react-app/issues/214)
* [#411](https://github.com/facebookincubator/create-react-app/issues/411)

Create React App will add decorator support when the specification advances to a stable stage.

## 网络请求(Fetching Data with AJAX Requests)

React 没有特别指定 fetching data 的方式, 但是通常要么使用浏览器提供的 [`fetch()` API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) , 要么使用 [axios](https://github.com/axios/axios) 等第三方lib. Create React App 支持(polyfill) `fetch()` , 所以不用担心浏览器的支持问题.

>polyfill: In web development, a polyfill (or polyfiller) is additional code which provides facilities that are not built into a web browser.

* 关于 `fetch` [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

* 同时支持 [Promise polyfill](https://github.com/then/promise). 更多关于 Promises 请参考[promisejs.org](https://www.promisejs.org/) 和 [mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). axios 和 `fetch()` 都用了 Promises. 
* 你也可以用 [`async / await`](https://davidwalsh.name/async-await) 语法来减少回调嵌套.

* 参考 [React官网: 在React组件中发起 AJAX requests](https://reactjs.org/docs/faq-ajax.html).

## Integrating with an API Backend

帮助你的APP集成运行在其他端口上的 后端API接口, 这些接口可以用 `fetch()` 访问.

### Node
查看 [this tutorial](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/).
You can find the companion GitHub repository [here](https://github.com/fullstackreact/food-lookup-demo).

### Ruby on Rails

查看 [this tutorial](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/).
You can find the companion GitHub repository [here](https://github.com/fullstackreact/food-lookup-demo-rails).

## 在开发环境中代理 API 请求

>Note: 这个feature需要 `react-scripts@0.2.3` 及以上版本.

如果前端的 React app 和后端接口使用同一个 host 和 port. 例如 app部署完后, 生产配置如下所示:

```
/             - static server returns index.html with React app
/todos        - static server returns index.html with React app
/api/todos    - server handles any /api/* requests using the backend implementation
```

如果你这样配置的话, 用 `fetch('/api/todos')` 这种方式写请求就会非常方便了, 而不用担心在开发环境中重定向到其他的host或者port上. 反之,如果static server和API server用的是不同的host或port, 就需要配置代理了. 代理的作用如下图所示:

![proxy](https://www.fullstackreact.com/assets/images/articles/cra-with-server/flow-diagram-2.png)

在 `package.json` 中添加 `proxy` 字段, 以告诉开发服务器将所有未知请求代理到开发环境中的API服务器. 具体如下:

```js
  "proxy": "http://localhost:3001",
```

如此, 当你在开发环境中 `fetch('/api/todos')` 时, development server 就不会把它当做静态资源, 然后转发到 `http://localhost:3001`/api/todos`. development server **仅仅** 把 `Accept` header 中没有`text/html` 的请求转发给给 proxy server.

以上可以方便的在开发环境中避免类似下面的 [跨域(CORS) 问题](http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations):

```
Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

请注意 `proxy` 仅在开发环境有效 (运行 `npm start`). 您不必使用 `/api` 前缀, 没有 `text/html` accept header的任何无法识别的请求都将被重定向到指定的代理。

`proxy` 选项支持 HTTP, HTTPS 和 WebSocket.<br>
除了以上 `proxy` 的方式, 你还可以:

* [手动配置代理](#手动配置代理)
* server 端开启CORS支持 ([here’s how to do it for Express](http://enable-cors.org/server_expressjs.html)).
* 用 [环境变量](#adding-custom-environment-variables) 在app中注入正确的server host 和 port.

### 配置代理后 "Invalid Host Header" 错误

When you enable the `proxy` option, you opt into a more strict set of host checks. This is necessary because leaving the backend open to remote hosts makes your computer vulnerable to DNS rebinding attacks. The issue is explained in [this article](https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a) and [this issue](https://github.com/webpack/webpack-dev-server/issues/887).

开启 `proxy` 选项, 对于本地开发 `localhost` 没有影响, 但你如果像 [issues/2271](https://github.com/facebookincubator/create-react-app/issues/2271) 描述的那样进行远程开发, 就会在浏览器中看到这个错误:

>Invalid Host header

要解决此问题，你可以在项目根目录中名为 `.env.development` 的文件中指定public development host：

```
HOST=mypublicdevhost.com
```

如果现在重启开发服务器并从指定的主机加载APP，应该没问题了。

If you are still having issues or if you’re using a more exotic environment like a cloud editor, you can bypass the host check completely by adding a line to `.env.development.local`. **Note that this is dangerous and exposes your machine to remote code execution from malicious websites:**

```
# NOTE: THIS IS DANGEROUS!
# It exposes your machine to attacks from the websites you visit.
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

我们不推荐这种方式.

### 手动配置代理

>Note: 这个feature需要 `react-scripts@1.0.0` 及以上版本.

如下所示, 在 `package.json` 中, 可配置的值 [`http-proxy-middleware`](https://github.com/chimurai/http-proxy-middleware#options) or [`http-proxy`](https://github.com/nodejitsu/node-http-proxy#options).
```js
{
  // ...
  "proxy": {
    "/api": {
      "target": "<url>",
      "ws": true
      // ...
    }
  }
  // ...
}
```

匹配到path的所有请求都会被代理, 包括对于 `text/html` 的请求 (标准的 `proxy` 选项则不会代理).

可以用正则匹配多个路径
```js
{
  // ...
  "proxy": {
    // Matches any request starting with /api
    "/api": {
      "target": "<url_1>",
      "ws": true
      // ...
    },
    // Matches any request starting with /foo
    "/foo": {
      "target": "<url_2>",
      "ssl": true,
      "pathRewrite": {
        "^/foo": "/foo/beta"
      }
      // ...
    },
    // Matches /bar/abc.html but not /bar/sub/def.html
    "/bar/[^/]*[.]html": {
      "target": "<url_3>",
      // ...
    },
    // Matches /baz/abc.html and /baz/sub/def.html
    "/baz/.*/.*[.]html": {
      "target": "<url_4>"
      // ...
    }
  }
  // ...
}
```

### 配置 WebSocket Proxy

When setting up a WebSocket proxy, there are a some extra considerations to be aware of.

If you’re using a WebSocket engine like [Socket.io](https://socket.io/), you must have a Socket.io server running that you can use as the proxy target. Socket.io will not work with a standard WebSocket server. Specifically, don't expect Socket.io to work with [the websocket.org echo test](http://websocket.org/echo.html).

There’s some good documentation available for [setting up a Socket.io server](https://socket.io/docs/).

Standard WebSockets **will** work with a standard WebSocket server as well as the websocket.org echo test. You can use libraries like [ws](https://github.com/websockets/ws) for the server, with [native WebSockets in the browser](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

Either way, you can proxy WebSocket requests manually in `package.json`:

```js
{
  // ...
  "proxy": {
    "/socket": {
      // Your compatible WebSocket server
      "target": "ws://<socket_url>",
      // Tell http-proxy-middleware that this is a WebSocket proxy.
      // Also allows you to proxy WebSocket requests without an additional HTTP request
      // https://github.com/chimurai/http-proxy-middleware#external-websocket-upgrade
      "ws": true
      // ...
    }
  }
  // ...
}
```

## 在开发环境使用HTTPS

>Note: 这个feature需要 `react-scripts@0.4.0` 及以上版本.

 这个特殊需求场景是: 当使用 [“代理”功能](#proxying-api-requests-in-development) 将请求代理到API服务器, 而API服务器本身就用HTTPS时, 您可能需要给开发服务器配置HTTP.

设置 `HTTPS` 环境变量为 `true`, 然后 `npm start` 启动 dev server:

#### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```

#### Windows (Powershell)

```Powershell
($env:HTTPS = $true) -and (npm start)
```

(Note: the lack of whitespace is intentional.)

#### Linux, macOS (Bash)

```bash
HTTPS=true npm start
```

请注意 server 将会使用自签名证书, 因此在访问该页面时浏览器会显示警告.

## Generating Dynamic `<meta>` Tags on the Server

因为 Create React App 不支持服务端渲染, 你可能想知道如何动态修改 `<meta>` 标签, 并且映射当前的URL. 为了解决这个问题, 我们推荐在HTML中添加 placeholders, 如下所示:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta property="og:title" content="__OG_TITLE__">
    <meta property="og:description" content="__OG_DESCRIPTION__">
```

Then, on the server, regardless of the backend you use, you can read `index.html` into memory and replace `__OG_TITLE__`, `__OG_DESCRIPTION__`, and any other placeholders with values depending on the current URL. Just make sure to sanitize and escape the interpolated values so that they are safe to embed into HTML!

If you use a Node server, you can even share the route matching logic between the client and the server. However duplicating it also works fine in simple cases.

## 提前渲染成静态 HTML 文件

If you’re hosting your `build` with a static hosting provider you can use [react-snapshot](https://www.npmjs.com/package/react-snapshot) or [react-snap](https://github.com/stereobooster/react-snap) to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or “hydrated”, when the JavaScript bundle has loaded.

There are also opportunities to use this outside of static hosting, to take the pressure off the server when generating and caching routes.

The primary benefit of pre-rendering is that you get the core content of each page _with_ the HTML payload—regardless of whether or not your JavaScript bundle successfully downloads. It also increases the likelihood that each route of your application will be picked up by search engines.

You can read more about [zero-configuration pre-rendering (also called snapshotting) here](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319).

## 把从server获取的数据注入到页面中

Similarly to the previous section, you can leave some placeholders in the HTML that inject global variables, 举个栗子:

```js
<!doctype html>
<html lang="en">
  <head>
    <script>
      window.SERVER_DATA = __SERVER_DATA__;
    </script>
```

Then, on the server, you can replace `__SERVER_DATA__` with a JSON of real data right before sending the response. The client code can then read `window.SERVER_DATA` to use it. **Make sure to [sanitize the JSON before sending it to the client](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0) as it makes your app vulnerable to XSS attacks.**

## Running Tests

>Note: 这个feature需要 `react-scripts@0.3.0` 及以上版本.<br>
>[Read the migration guide to learn how to enable it in older projects!](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md#migrating-from-023-to-030)

Create React App uses [Jest](https://facebook.github.io/jest/) as its test runner. To prepare for this integration, we did a [major revamp](https://facebook.github.io/jest/blog/2016/09/01/jest-15.html) of Jest so if you heard bad things about it years ago, give it another try.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:

![Jest watch mode](http://facebook.github.io/jest/img/blog/15-watch.gif)

### Version Control Integration

By default, when you run `npm test`, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests run fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press `a` in the watch mode to force Jest to run all tests.

Jest will always run all tests on a [continuous integration](#continuous-integration) server or if the project is not inside a Git or Mercurial repository.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](https://facebook.github.io/jest/docs/en/expect.html#content).<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled) to create “spies” or mock functions.

### 测试 Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot of value with very little effort so they are great as a starting point, and this is the test you will find in `src/App.test.js`.

When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are worth testing in your application. This might be a good time to introduce more specific tests asserting specific expected output or behavior.

If you’d like to test components in isolation from the child components they render, we recommend using [`shallow()` rendering API](http://airbnb.io/enzyme/docs/api/shallow.html) from [Enzyme](http://airbnb.io/enzyme/). To install it, run:

```sh
npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
```

或者用 `yarn`:

```sh
yarn add enzyme enzyme-adapter-react-16 react-test-renderer
```

As of Enzyme 3, you will need to install Enzyme along with an Adapter corresponding to the version of React you are using. (The examples above use the adapter for React 16.)

The adapter will also need to be configured in your [global setup file](#initializing-test-environment):

#### `src/setupTests.js`
```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

>Note: Keep in mind that if you decide to "eject" before creating `src/setupTests.js`, the resulting `package.json` file won't contain any reference to it. [Read here](#initializing-test-environment) to learn how to add this after ejecting.

Now you can write a smoke test with it:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
```

Unlike the previous smoke test using `ReactDOM.render()`, this test only renders `<App>` and doesn’t go deeper. For example, even if `<App>` itself renders a `<Button>` that throws, this test will pass. Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. Enzyme supports [full rendering with `mount()`](http://airbnb.io/enzyme/docs/api/mount.html), and you can also use it for testing state changes and component lifecycle.

You can read the [Enzyme documentation](http://airbnb.io/enzyme/) for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and `jest.fn()` for spies.

Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

All Jest matchers are [extensively documented here](http://facebook.github.io/jest/docs/en/expect.html).<br>
Nevertheless you can use a third-party assertion library like [Chai](http://chaijs.com/) if you want to, as described below.

Additionally, you might find [jest-enzyme](https://github.com/blainekasten/enzyme-matchers) helpful to simplify your tests with readable matchers. The above `contains` code can be written more simply with jest-enzyme.

```js
expect(wrapper).toContainReact(welcome)
```

To enable this, install `jest-enzyme`:

```sh
npm install --save jest-enzyme
```

或者 `yarn`:

```sh
yarn add jest-enzyme
```

Import it in [`src/setupTests.js`](#initializing-test-environment) to make its matchers available in every test:

```js
import 'jest-enzyme';
```

### Using Third Party Assertion Libraries

We recommend that you use `expect()` for assertions and `jest.fn()` for spies. If you are having issues with them please [file those against Jest](https://github.com/facebook/jest/issues/new), and we’ll fix them. We intend to keep making them better for React, supporting, for example, [pretty-printing React elements as JSX](https://github.com/facebook/jest/pull/1566).

However, if you are used to other libraries, such as [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/), or if you have existing code using them that you’d like to port over, you can import them normally like this:

```js
import sinon from 'sinon';
import { expect } from 'chai';
```

and then use them in your tests like you normally do.

### 初始化测试环境

>Note: 这个feature需要 `react-scripts@0.4.0` 及以上版本.

If your app uses a browser API that you need to mock in your tests or if you just need a global setup before running your tests, add a `src/setupTests.js` to your project. It will be automatically executed before running your tests.

举个栗子:

#### `src/setupTests.js`
```js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
```

>Note: Keep in mind that if you decide to "eject" before creating `src/setupTests.js`, the resulting `package.json` file won't contain any reference to it, so you should manually create the property `setupTestFrameworkScriptFile` in the configuration for Jest, something like the following:

>```js
>"jest": {
>   // ...
>   "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.js"
>  }
>  ```

### Focusing and Excluding Tests

You can replace `it()` with `xit()` to temporarily exclude a test from being executed.<br>
Similarly, `fit()` lets you focus on a specific test without running any other tests.

### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `npm test -- --coverage` (note extra `--` in the middle) to include a coverage report like this:

![coverage report](http://i.imgur.com/5bFhnTS.png)

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

#### Configuration

The default Jest coverage configuration can be overriden by adding any of the following supported keys to a Jest config in your package.json.

Supported overrides:
 - [`collectCoverageFrom`](https://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array)
 - [`coverageReporters`](https://facebook.github.io/jest/docs/en/configuration.html#coveragereporters-array-string)
 - [`coverageThreshold`](https://facebook.github.io/jest/docs/en/configuration.html#coveragethreshold-object)
 - [`snapshotSerializers`](https://facebook.github.io/jest/docs/en/configuration.html#snapshotserializers-array-string)

Example package.json:

```json
{
  "name": "your-package",
  "jest": {
    "collectCoverageFrom" : [
      "src/**/*.{js,jsx}",
      "!<rootDir>/node_modules/",
      "!<rootDir>/path/to/dir/"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 90,
        "functions": 90,
        "lines": 90,
        "statements": 90
      }
    },
    "coverageReporters": ["text"],
    "snapshotSerializers": ["my-serializer-module"]
  }
}
```

### CI (Continuous Integration)

By default `npm test` runs the watcher with interactive CLI. However, you can force it to run tests once and finish the process by setting an environment variable called `CI`.

When creating a build of your application with `npm run build` linter warnings are not checked by default. Like `npm test`, you can force the build to perform a linter warning check by setting the environment variable `CI`. If any warnings are encountered then the build fails.

Popular CI servers already set the environment variable `CI` by default but you can do this yourself too:

### On CI servers
#### Travis CI

1. Following the [Travis Getting started](https://docs.travis-ci.com/user/getting-started/) guide for syncing your GitHub repository with Travis.  You may need to initialize some settings manually in your [profile](https://travis-ci.org/profile) page.
1. Add a `.travis.yml` file to your git repository.
```
language: node_js
node_js:
  - 6
cache:
  directories:
    - node_modules
script:
  - npm run build
  - npm test
```
1. Trigger your first build with a git push.
1. [Customize your Travis CI Build](https://docs.travis-ci.com/user/customizing-the-build/) if needed.

#### CircleCI

Follow [this article](https://medium.com/@knowbody/circleci-and-zeits-now-sh-c9b7eebcd3c1) to set up CircleCI with a Create React App project.

### On your own environment
##### Windows (cmd.exe)

```cmd
set CI=true&&npm test
```

```cmd
set CI=true&&npm run build
```

(Note: the lack of whitespace is intentional.)

##### Windows (Powershell)

```Powershell
($env:CI = $true) -and (npm test)
```

```Powershell
($env:CI = $true) -and (npm run build)
```

##### Linux, macOS (Bash)

```bash
CI=true npm test
```

```bash
CI=true npm run build
```

The test command will force Jest to run tests once instead of launching the watcher.

>  If you find yourself doing this often in development, please [file an issue](https://github.com/facebookincubator/create-react-app/issues/new) to tell us about your use case because we want to make watcher the best experience and are open to changing how it works to accommodate more workflows.

The build command will check for linter warnings and fail if any are found.

### 禁用 jsdom

By default, the `package.json` of the generated project looks like this:

```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom"
```

If you know that none of your tests depend on [jsdom](https://github.com/tmpvar/jsdom), you can safely remove `--env=jsdom`, and your tests will run faster:

```diff
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
-   "test": "react-scripts test --env=jsdom"
+   "test": "react-scripts test"
```

To help you make up your mind, here is a list of APIs that **need jsdom**:

* Any browser globals like `window` and `document`
* [`ReactDOM.render()`](https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
* [`TestUtils.renderIntoDocument()`](https://facebook.github.io/react/docs/test-utils.html#renderintodocument) ([a shortcut](https://github.com/facebook/react/blob/34761cf9a252964abfaab6faf74d473ad95d1f21/src/test/ReactTestUtils.js#L83-L91) for the above)
* [`mount()`](http://airbnb.io/enzyme/docs/api/mount.html) in [Enzyme](http://airbnb.io/enzyme/index.html)

In contrast, **jsdom is not needed** for the following APIs:

* [`TestUtils.createRenderer()`](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) (shallow rendering)
* [`shallow()`](http://airbnb.io/enzyme/docs/api/shallow.html) in [Enzyme](http://airbnb.io/enzyme/index.html)

Finally, jsdom is also not needed for [snapshot testing](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html).

### Snapshot Testing

Snapshot testing is a feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. [Read more about snapshot testing.](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html)

### 编辑器集成

如果你用 [Visual Studio Code](https://code.visualstudio.com), there is a [Jest extension](https://github.com/orta/vscode-jest) which works with Create React App out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click snapshot updates.

![VS Code Jest Preview](https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png)

## Debugging Tests

There are various ways to setup a debugger for your Jest tests. We cover debugging in Chrome and [Visual Studio Code](https://code.visualstudio.com/).

>Note: debugging tests requires Node 8 or higher.

### Debugging Tests in Chrome

Add the following to the `scripts` section in your project's `package.json`
```json
"scripts": {
    "test:debug": "react-scripts --inspect-brk test --runInBand --env=jsdom"
  }
```
Place `debugger;` statements in any test and run:
```bash
$ npm run test:debug
```

This will start running your Jest tests, but pause before executing to allow a debugger to attach to the process.

Open the following in Chrome
```
about:inspect
```

After opening that link, the Chrome Developer Tools will be displayed. Select `inspect` on your process and a breakpoint will be set at the first line of the react script (this is done simply to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the debugger statement, execution will pause and you can examine the current scope and call stack.

>Note: the --runInBand cli option makes sure Jest runs test in the same process rather than spawning processes for individual tests. Normally Jest parallelizes test runs across processes but it is hard to debug many processes at the same time.

### Debugging Tests in Visual Studio Code

Debugging Jest tests is supported out of the box for [Visual Studio Code](https://code.visualstudio.com).

Use the following [`launch.json`](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) configuration file:
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug CRA Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",      
      "args": [
        "test",
        "--runInBand",
        "--no-cache",
        "--env=jsdom"
      ],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

## 单独开发组件

通常，APP中有许多UI组件，并且每个组件都有许多不同的状态。
例如，一个简单的按钮组件可能具有以下状态：

* normal.
* disabled.
* loading.

通常，如果没有运行示例应用程序，就很难看到这些状态。

Create React App 默认不包含任何工具, 但是你可以使用 [Storybook for React](https://storybook.js.org) ([source](https://github.com/storybooks/storybook)) 或 [React Styleguidist](https://react-styleguidist.js.org/) ([source](https://github.com/styleguidist/react-styleguidist)) 等**第三方的工具, 独立于App进行组件的开发并且查看所有的状态**.

![Storybook for React Demo](http://i.imgur.com/7CIAWpB.gif)

您还可以将Storybook或style guide部署为静态APP。这样，团队中的每个人都可以查看和检查UI组件的不同状态，而无需启动后端服务器或在应用中创建帐户。

### Storybook 简介

Storybook 是 React UI 组件的开发环境, 它允许你浏览组件库，查看每个组件的不同状态，以及交互式开发和测试组件。

首先,全局安装:

```sh
npm install -g @storybook/cli
```

然后在APP目录下运行以下命令:

```sh
getstorybook
```

之后，按照屏幕上的说明进行操作。

更多关于 React Storybook 的用法:

* Screencast: [Getting Started with React Storybook](https://egghead.io/lessons/react-getting-started-with-react-storybook)
* [GitHub Repo](https://github.com/storybooks/storybook)
* [Documentation](https://storybook.js.org/basics/introduction/)
* [Snapshot Testing UI](https://github.com/storybooks/storybook/tree/master/addons/storyshots) with Storybook + addon/storyshot

### Styleguidist 简介

Styleguidist结合了一个样式指南，其中所有组件都在一个页面上显示，包含 props 文档和用例以及一个单独开发组件的环境，类似于Storybook。 在Styleguidist中，您可以在Markdown中编写示例，其中每个代码段都实时可编辑(each code snippet is rendered as a live editable playground)。

首先安装 Styleguidist:

```sh
npm install --save react-styleguidist
```

或者用 `yarn`:

```sh
yarn add react-styleguidist
```

然后在 `package.json` 中添加脚本:

```diff
   "scripts": {
+    "styleguide": "styleguidist server",
+    "styleguide:build": "styleguidist build",
     "start": "react-scripts start",
```

然后在APP目录下运行以下命令:

```sh
npm run styleguide
```

之后，按照屏幕上的说明进行操作。

更多关于 React Styleguidist 的用法:

* [GitHub Repo](https://github.com/styleguidist/react-styleguidist)
* [Documentation](https://react-styleguidist.js.org/docs/getting-started.html)

## 发布 Components 到 npm

Create React App doesn't provide any built-in functionality to publish a component to npm. If you're ready to extract a component from your project so other people can use it, we recommend moving it to a separate directory outside of your project and then using a tool like [nwb](https://github.com/insin/nwb#react-components-and-libraries) to prepare it for publishing.

## 制作PWA应用 (Progressive Web App)

By default, the production build is a fully functional, offline-first
[Progressive Web App](https://developers.google.com/web/progressive-web-apps/).

Progressive Web Apps are faster and more reliable than traditional web pages, and provide an engaging mobile experience:

 * All static site assets are cached so that your page loads fast on subsequent visits, regardless of network connectivity (such as 2G or 3G). Updates are downloaded in the background.
 * Your app will work regardless of network state, even if offline. This means your users will be able to use your app at 10,000 feet and on the subway.
 * On mobile devices, your app can be added directly to the user's home screen, app icon and all. You can also re-engage users using web **push notifications**. This eliminates the need for the app store.

The [`sw-precache-webpack-plugin`](https://github.com/goldhand/sw-precache-webpack-plugin)
is integrated into production configuration,
and it will take care of generating a service worker file that will automatically
precache all of your local assets and keep them up to date as you deploy updates.
The service worker will use a [cache-first strategy](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network)
for handling all requests for local assets, including the initial HTML, ensuring
that your web app is reliably fast, even on a slow or unreliable network.

### Opting Out of Caching

If you would prefer not to enable service workers prior to your initial
production deployment, then remove the call to `registerServiceWorker()`
from [`src/index.js`](src/index.js).

If you had previously enabled service workers in your production deployment and
have decided that you would like to disable them for all your existing users,
you can swap out the call to `registerServiceWorker()` in
[`src/index.js`](src/index.js) first by modifying the service worker import:
```javascript
import { unregister } from './registerServiceWorker';
```
and then call `unregister()` instead.
After the user visits a page that has `unregister()`,
the service worker will be uninstalled. Note that depending on how `/service-worker.js` is served,
it may take up to 24 hours for the cache to be invalidated.

### Offline-First Considerations

1. Service workers [require HTTPS](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https),
although to facilitate local testing, that policy
[does not apply to `localhost`](http://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385).
If your production web server does not support HTTPS, then the service worker
registration will fail, but the rest of your web app will remain functional.

1. Service workers are [not currently supported](https://jakearchibald.github.io/isserviceworkerready/)
in all web browsers. Service worker registration [won't be attempted](src/registerServiceWorker.js)
on browsers that lack support.

1. The service worker is only enabled in the [production environment](#deployment),
e.g. the output of `npm run build`. It's recommended that you do not enable an
offline-first service worker in a development environment, as it can lead to
frustration when previously cached assets are used and do not include the latest
changes you've made locally.

1. If you *need* to test your offline-first service worker locally, build
the application (using `npm run build`) and run a simple http server from your
build directory. After running the build script, `create-react-app` will give
instructions for one way to test your production build locally and the [deployment instructions](#deployment) have
instructions for using other methods. *Be sure to always use an
incognito window to avoid complications with your browser cache.*

1. If possible, configure your production environment to serve the generated
`service-worker.js` [with HTTP caching disabled](http://stackoverflow.com/questions/38843970/service-worker-javascript-update-frequency-every-24-hours).
If that's not possible—[GitHub Pages](#github-pages), for instance, does not
allow you to change the default 10 minute HTTP cache lifetime—then be aware
that if you visit your production site, and then revisit again before
`service-worker.js` has expired from your HTTP cache, you'll continue to get
the previously cached assets from the service worker. If you have an immediate
need to view your updated production deployment, performing a shift-refresh
will temporarily disable the service worker and retrieve all assets from the
network.

1. Users aren't always familiar with offline-first web apps. It can be useful to
[let the user know](https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption)
when the service worker has finished populating your caches (showing a "This web
app works offline!" message) and also let them know when the service worker has
fetched the latest updates that will be available the next time they load the
page (showing a "New content is available; please refresh." message). Showing
this messages is currently left as an exercise to the developer, but as a
starting point, you can make use of the logic included in [`src/registerServiceWorker.js`](src/registerServiceWorker.js), which
demonstrates which service worker lifecycle events to listen for to detect each
scenario, and which as a default, just logs appropriate messages to the
JavaScript console.

1. By default, the generated service worker file will not intercept or cache any
cross-origin traffic, like HTTP [API requests](#integrating-with-an-api-backend),
images, or embeds loaded from a different domain. If you would like to use a
runtime caching strategy for those requests, you can [`eject`](#npm-run-eject)
and then configure the
[`runtimeCaching`](https://github.com/GoogleChrome/sw-precache#runtimecaching-arrayobject)
option in the `SWPrecacheWebpackPlugin` section of
[`webpack.config.prod.js`](../config/webpack.config.prod.js).

###  PWA(Progressive Web App) Metadata

The default configuration includes a web app manifest located at
[`public/manifest.json`](public/manifest.json), that you can customize with
details specific to your web application.

When a user adds a web app to their homescreen using Chrome or Firefox on
Android, the metadata in [`manifest.json`](public/manifest.json) determines what
icons, names, and branding colors to use when the web app is displayed.
[The Web App Manifest guide](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/)
provides more context about what each field means, and how your customizations
will affect your users' experience.

## 分析 Bundle Size

[Source map explorer](https://www.npmjs.com/package/source-map-explorer) analyzes
JavaScript bundles using the source maps. This helps you understand where code
bloat is coming from.

To add Source map explorer to a Create React App project, follow these steps:

```sh
npm install --save source-map-explorer
```

或者用 `yarn`:

```sh
yarn add source-map-explorer
```

Then in `package.json`, add the following line to `scripts`:

```diff
   "scripts": {
+    "analyze": "source-map-explorer build/static/js/main.*",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",
```

Then to analyze the bundle run the production build then run the analyze
script.

```
npm run build
npm run analyze
```

## 部署

`npm run build` creates a `build` directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### 静态服务器

如果是使用 [Node](https://nodejs.org/) 环境, 最简单的方式就是安装使用 [serve](https://github.com/zeit/serve) :

```sh
npm install -g serve
serve -s build
```

以上最后一句命令, 就是使用 [serve](https://github.com/zeit/serve) 在 **5000** 端口开启static server. 可以使用 `-p` 或 `--port` 修改端口. 具体使用方式请运行以下命令查看:

```sh
serve -h
```

### 其它方案

在生产中部署Create React App项目不一定非得使用static server, 集成到现有的 API server 中也是不错的方案.

下面是使用 [Node](https://nodejs.org/) 和 [Express](http://expressjs.com/)的一个例子:

```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
```

你选择的服务器软件也不是很重要. 由于 Create React App 完全与平台无关, 也没有必要非得使用Node.

含有静态资源的 `build` 文件夹是 Create React App 是唯一的输出.

如果你在用客户端路由(client-side routing)App, 以上方案是不够的. 如果想在单页应用中使用类似 `/todos/42` 的URL, 请继续看下一节.

### 服务客户端路由(Client-Side Routing)的Apps

如果你底层用 H5的 [`pushState` history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) (例如 [React Router](https://github.com/ReactTraining/react-router) 的 `browserHistory`) 做路由, 许多静态服务器会失败. 例如, 如果你用 React Router 路由到 `/todos/42`, 开发服务器会正确的指向 `localhost:3000/todos/42`, 但是上面的Express就不会.

这是因为当有页面刷新指向 `/todos/42` 时, 服务器就会寻找 `build/todos/42` 文件但是找不到它. 因此需要配置服务器响应`index.html` 给来自 `/todos/42` 的请求 . 例如我们可以修改上面的 Express 例子, 给所有未知路径响应 `index.html` :

```diff
 app.use(express.static(path.join(__dirname, 'build')));

-app.get('/', function (req, res) {
+app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
```

如果用的是 [Apache HTTP Server](https://httpd.apache.org/), 你需要在 `public` 文件夹中创建 `.htaccess` 文件, 如下所示:

```
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```

`npm run build` 构建时, 它会被复制到 `build` 文件夹下. 

如果用的是 [Apache Tomcat](http://tomcat.apache.org/), 你需要参照 [this Stack Overflow answer](https://stackoverflow.com/a/41249464/4878474).

现在请求 `/todos/42` 不论是在开发环境还是生产环境, 就都能被正确处理了.

On a production build, and in a browser that supports [service workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers),
the service worker will automatically handle all navigation requests, like for
`/todos/42`, by serving the cached copy of your `index.html`. This
service worker navigation routing can be configured or disabled by
[`eject`ing](#npm-run-eject) and then modifying the
[`navigateFallback`](https://github.com/GoogleChrome/sw-precache#navigatefallback-string)
and [`navigateFallbackWhitelist`](https://github.com/GoogleChrome/sw-precache#navigatefallbackwhitelist-arrayregexp)
options of the `SWPreachePlugin` [configuration](../config/webpack.config.prod.js).

当用户把你的app安装到设备的主屏幕上时, 默认的配置将会创建一个指向 `/index.html` 的快捷方式. 这对于客户端路由的APP(expect the app to be served from `/`)来说就不行了, 编辑 web app 的清单文件[`public/manifest.json`](public/manifest.json) 修改 `start_url` 字段, 例如:

```js
  "start_url": ".",
```

### 建立相对路径

默认情况下，Create React App会生成一个构建，假设您的应用程序托管在服务器根目录下<br>
To override this, specify the `homepage` in your `package.json`, 举个栗子:

```js
  "homepage": "http://mywebsite.com/relativepath",
```

This will let Create React App correctly infer the root path to use 在生成的HTML 文件中.

**Note**: If you are using `react-router@^4`, you can root `<Link>`s using the `basename` prop on any `<Router>`.<br>
更多请参考 [here](https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string).<br>
<br>
举个栗子:
```js
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
```

#### Serving the Same Build from Different Paths

>Note: 这个feature需要 `react-scripts@0.9.0` 及以上版本.

如果你既没有使用 HTML5 `pushState` history API 也没有使用客户端路由 (client-side routing), 就没有必要指明你的app服务的URL了. 相反你可以把它放到  `package.json`:

```js
  "homepage": ".",
```

This will make sure that all the asset paths are relative to `index.html`. You will then be able to move your app from `http://mywebsite.com` to `http://mywebsite.com/relativepath` or even `http://mywebsite.com/relative/path` without having to rebuild it.

### [Azure](https://azure.microsoft.com/)

See [this](https://medium.com/@to_pe/deploying-create-react-app-on-microsoft-azure-c0f6686a4321) blog post on how to deploy your React app to Microsoft Azure.

See [this](https://medium.com/@strid/host-create-react-app-on-azure-986bc40d5bf2#.pycfnafbg) blog post or [this](https://github.com/ulrikaugustsson/azure-appservice-static) repo for a way to use automatic deployment to Azure App Service.

### [Firebase](https://firebase.google.com/)

Install the Firebase CLI if you haven’t already by running `npm install -g firebase-tools`. Sign up for a [Firebase account](https://console.firebase.google.com/) and create a new project. Run `firebase login` and login with your previous created Firebase account.

Then run the `firebase init` command from your project’s root. You need to choose the **Hosting: Configure and deploy Firebase Hosting sites** and choose the Firebase project you created in the previous step. You will need to agree with `database.rules.json` being created, choose `build` as the public directory, and also agree to **Configure as a single-page app** by replying with `y`.

```sh
    === Project Setup

    First, let's associate this project directory with a Firebase project.
    You can create multiple project aliases by running firebase use --add,
    but for now we'll just set up a default project.

    ? What Firebase project do you want to associate as default? Example app (example-app-fd690)

    === Database Setup

    Firebase Realtime Database Rules allow you to define how your data should be
    structured and when your data can be read from and written to.

    ? What file should be used for Database Rules? database.rules.json
    ✔  Database Rules for example-app-fd690 have been downloaded to database.rules.json.
    Future modifications to database.rules.json will update Database Rules when you run
    firebase deploy.

    === Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ✔  Wrote build/index.html

    i  Writing configuration info to firebase.json...
    i  Writing project information to .firebaserc...

    ✔  Firebase initialization complete!
```

IMPORTANT: you need to set proper HTTP caching headers for `service-worker.js` file in `firebase.json` file or you will not be able to see changes after first deployment ([issue #2440](https://github.com/facebookincubator/create-react-app/issues/2440)). It should be added inside `"hosting"` key like next:

```
{
  "hosting": {
    ...
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
    ...
```

Now, after you create a production build with `npm run build`, you can deploy it by running `firebase deploy`.

```sh
    === Deploying to 'example-app-fd690'...

    i  deploying database, hosting
    ✔  database: rules ready to deploy.
    i  hosting: preparing build directory for upload...
    Uploading: [==============================          ] 75%✔  hosting: build folder uploaded successfully
    ✔  hosting: 8 files uploaded successfully
    i  starting release process (may take several minutes)...

    ✔  Deploy complete!

    Project Console: https://console.firebase.google.com/project/example-app-fd690/overview
    Hosting URL: https://example-app-fd690.firebaseapp.com
```

For more information see [Add Firebase to your JavaScript Project](https://firebase.google.com/docs/web/setup).

### [GitHub Pages](https://pages.github.com/)

>Note: 这个feature需要 `react-scripts@0.2.0` 及以上版本.

#### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field for your project:

```json
  "homepage": "https://myusername.github.io/my-app",
```

or for a GitHub user page:

```json
  "homepage": "https://myusername.github.io",
```

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://myusername.github.io/my-app](https://myusername.github.io/my-app), run:

```sh
npm install --save gh-pages
```

或者用 `yarn`:

```sh
yarn add gh-pages
```

Add the following scripts in your `package.json`:

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

The `predeploy` script will run automatically before `deploy` is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make two
additional modifications:

1. First, change your repository's source branch to be any branch other than **master**.
1. Additionally, tweak your `package.json` scripts to push deployments to **master**:
```diff
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```

#### Step 3: Deploy the site by running `npm run deploy`

Then run:

```sh
npm run deploy
```

#### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting">

#### Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

#### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

* You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more](https://reacttraining.com/react-router/web/api/Router) about different history implementations in React Router.
* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).

#### Troubleshooting

##### "/dev/tty: No such a device or address"

If, when deploying, you get `/dev/tty: No such a device or address` or a similar error, try the follwing:

1. Create a new [Personal Access Token](https://github.com/settings/tokens)
2. `git remote set-url origin https://<user>:<token>@github.com/<user>/<repo>` .
3. Try `npm run deploy again`

### [Heroku](https://www.heroku.com/)

Use the [Heroku Buildpack for Create React App](https://github.com/mars/create-react-app-buildpack).<br>
You can find instructions in [Deploying React with Zero Configuration](https://blog.heroku.com/deploying-react-with-zero-configuration).

#### Resolving Heroku Deployment Errors

Sometimes `npm run build` works locally but fails during deploy via Heroku. Following are the most common cases.

##### "Module not found: Error: Cannot resolve 'file' or 'directory'"

If you get something like this:

```
remote: Failed to create a production build. Reason:
remote: Module not found: Error: Cannot resolve 'file' or 'directory'
MyDirectory in /tmp/build_1234/src
```

It means you need to ensure that the lettercase of the file or directory you `import` matches the one you see on your filesystem or on GitHub.

This is important because Linux (the operating system used by Heroku) is case sensitive. So `MyDirectory` and `mydirectory` are two distinct directories and thus, even though the project builds locally, the difference in case breaks the `import` statements on Heroku remotes.

##### "Could not find a required file."

If you exclude or ignore necessary files from the package you will see a error similar this one:

```
remote: Could not find a required file.
remote:   Name: `index.html`
remote:   Searched in: /tmp/build_a2875fc163b209225122d68916f1d4df/public
remote:
remote: npm ERR! Linux 3.13.0-105-generic
remote: npm ERR! argv "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/node" "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/npm" "run" "build"
```

In this case, ensure that the file is there with the proper lettercase and that’s not ignored on your local `.gitignore` or `~/.gitignore_global`.

### [Netlify](https://www.netlify.com/)

**To do a manual deploy to Netlify’s CDN:**

```sh
npm install netlify-cli -g
netlify deploy
```

Choose `build` as the path to deploy.

**To setup continuous delivery:**

With this setup Netlify will build and deploy when you push to git or open a pull request:

1. [Start a new netlify project](https://app.netlify.com/signup)
2. Pick your Git hosting service and select your repository
3. Set `yarn build` as the build command and `build` as the publish directory
4. Click `Deploy site`

**Support for client-side routing:**

To support `pushState`, make sure to create a `public/_redirects` file with the following rewrite rules:

```
/*  /index.html  200
```

When you build the project, Create React App will place the `public` folder contents into the build output.

### [Now](https://zeit.co/now)

Now offers a zero-configuration single-command deployment. You can use `now` to deploy your app for free.

1. Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.

2. Build your app by running `npm run build`.

3. Move into the build directory by running `cd build`.

4. Run `now --name your-project-name` from within the build directory. You will see a **now.sh** URL in your output like this:

    ```
    > Ready! https://your-project-name-tpspyhtdtk.now.sh (copied to clipboard)
    ```

    Paste that URL into your browser when the build is complete, and you will see your deployed app.

Details are available in [this article.](https://zeit.co/blog/unlimited-static)

### [S3](https://aws.amazon.com/s3) and [CloudFront](https://aws.amazon.com/cloudfront/)

See this [blog post](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) on how to deploy your React app to Amazon Web Services S3 and CloudFront.

### [Surge](https://surge.sh/)

Install the Surge CLI if you haven’t already by running `npm install -g surge`. Run the `surge` command and log in you or create a new account.

When asked about the project path, make sure to specify the `build` folder, 举个栗子:

```sh
       project path: /path/to/project/build
```

Note that in order to support routers that use HTML5 `pushState` API, you may want to rename the `index.html` in your build folder to `200.html` before deploying to Surge. This [ensures that every URL falls back to that file](https://surge.sh/help/adding-a-200-page-for-client-side-routing).

## 高级配置

您可以通过在 shell 或使用 [.env](#adding-development-environment-variables-in-env) 设置环境变量, 来调整各种开发和生产配置。

Variable | Development | Production | Usage
:--- | :---: | :---: | :---
BROWSER | :white_check_mark: | :x: | By default, Create React App will open the default system browser, favoring Chrome on macOS. Specify a [browser](https://github.com/sindresorhus/opn#app) to override this behavior, or set it to `none` to disable it completely. If you need to customize the way the browser is launched, you can specify a node script instead. Any arguments passed to `npm start` will also be passed to this script, and the url where your app is served will be the last argument. Your script's file name must have the `.js` extension.
HOST | :white_check_mark: | :x: | 默认 `localhost`, 可以将此变量指向其他host。
PORT | :white_check_mark: | :x: | 默认端口号 3000 (若已被占用,则自动加1, 直到可用为止). 可以将此变量指向其他端口.
HTTPS | :white_check_mark: | :x: | 设置为 `true` 时，Create React App将以 `https` 模式运行开发服务器.
PUBLIC_URL | :x: | :white_check_mark: | Create React App assumes Create React App假定您的应用程序托管在服务Web服务器的根目录或 [`package.json` (`homepage`)](#building-for-relative-paths) 中指定的子路径。 通常，Create React App会忽略主机名。 您可以使用此变量来强制从您提供的URL（包括主机名）引用资源。 当使用CDN托管您的APP时，这可能特别有用。
CI | :large_orange_diamond: | :white_check_mark: | When set to `true`, Create React App treats warnings as failures in the build. It also makes the test runner non-watching. Most CIs set this flag by default.
REACT_EDITOR | :white_check_mark: | :x: | When an app crashes in development, you will see an error overlay with clickable stack trace. When you click on it, Create React App will try to determine the editor you are using based on currently running processes, and open the relevant source file. You can [send a pull request to detect your editor of choice](https://github.com/facebookincubator/create-react-app/issues/2636). Setting this environment variable overrides the automatic detection. If you do it, make sure your systems [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) environment variable points to your editor’s bin folder. You can also set it to `none` to disable it completely.
CHOKIDAR_USEPOLLING | :white_check_mark: | :x: | When set to `true`, the watcher runs in polling mode, as necessary inside a VM. Use this option if `npm start` isn't detecting changes.
GENERATE_SOURCEMAP | :x: | :white_check_mark: | 设置为 `false` 时，生产构建不会生成sourcemap。 这解决了一些小型机器上的OOM问题。
NODE_PATH | :white_check_mark: |  :white_check_mark: | Same as [`NODE_PATH` in Node.js](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders), but only relative folders are allowed. Can be handy for emulating a monorepo setup by setting `NODE_PATH=src`.

## 问题解决

### `npm start` doesn’t detect changes

When you save a file while `npm start` is running, the browser should refresh with the updated code.<br>
If this doesn’t happen, try one of the following workarounds:

* If your project is in a Dropbox folder, try moving it out.
* If the watcher doesn’t see a file called `index.js` and you’re referencing it by the folder name, you [need to restart the watcher](https://github.com/facebookincubator/create-react-app/issues/1164) due to a Webpack bug.
* Some editors like Vim and IntelliJ have a “safe write” feature that currently breaks the watcher. You will need to disable it. Follow the instructions in [“Adjusting Your Text Editor”](https://webpack.js.org/guides/development/#adjusting-your-text-editor).
* If your project path contains parentheses, try moving the project to a path without them. This is caused by a [Webpack watcher bug](https://github.com/webpack/watchpack/issues/42).
* On Linux and macOS, you might need to [tweak system settings](https://github.com/webpack/docs/wiki/troubleshooting#not-enough-watchers) to allow more watchers.
* If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an `.env` file in your project directory if it doesn’t exist, and add `CHOKIDAR_USEPOLLING=true` to it. This ensures that the next time you run `npm start`, the watcher uses the polling mode, as necessary inside a VM.

If none of these solutions help please leave a comment [in this thread](https://github.com/facebookincubator/create-react-app/issues/659).

### `npm test` hangs on macOS Sierra

If you run `npm test` and the console gets stuck after printing `react-scripts test --env=jsdom` to the console there might be a problem with your [Watchman](https://facebook.github.io/watchman/) installation as described in [facebookincubator/create-react-app#713](https://github.com/facebookincubator/create-react-app/issues/713).

We recommend deleting `node_modules` in your project and running `npm install` (or `yarn` if you use it) first. If it doesn't help, you can try one of the numerous workarounds mentioned in these issues:

* [facebook/jest#1767](https://github.com/facebook/jest/issues/1767)
* [facebook/watchman#358](https://github.com/facebook/watchman/issues/358)
* [ember-cli/ember-cli#6259](https://github.com/ember-cli/ember-cli/issues/6259)

It is reported that installing Watchman 4.7.0 or newer fixes the issue. If you use [Homebrew](http://brew.sh/), you can run these commands to update it:

```
watchman shutdown-server
brew update
brew reinstall watchman
```

You can find [other installation methods](https://facebook.github.io/watchman/docs/install.html#build-install) on the Watchman documentation page.

If this still doesn’t help, try running `launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist`.

There are also reports that *uninstalling* Watchman fixes the issue. So if nothing else helps, remove it from your system and try again.

### `npm run build` exits too early

It is reported that `npm run build` can fail on machines with limited memory and no swap space, which is common in cloud environments. Even with small projects this command can increase RAM usage in your system by hundreds of megabytes, so if you have less than 1 GB of available memory your build is likely to fail with the following message:

>  The build failed because the process exited too early. This probably means the system ran out of memory or someone called `kill -9` on the process.

If you are completely sure that you didn't terminate the process, consider [adding some swap space](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04) to the machine you’re building on, or build the project locally.

### `npm run build` fails on Heroku

This may be a problem with case sensitive filenames.
Please refer to [this section](#resolving-heroku-deployment-errors).

### Moment.js locales are missing

If you use a [Moment.js](https://momentjs.com/), you might notice that only the English locale is available by default. This is because the locale files are large, and you probably only need a subset of [all the locales provided by Moment.js](https://momentjs.com/#multiple-locale-support).

To add a specific Moment.js locale to your bundle, you need to import it explicitly.<br>
举个栗子:

```js
import moment from 'moment';
import 'moment/locale/fr';
```

If import multiple locales this way, you can later switch between them by calling `moment.locale()` with the locale name:

```js
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/es';

// ...

moment.locale('fr');
```

This will only work for locales that have been explicitly imported before.

### `npm run build` fails to minify

Some third-party packages don't compile their code to ES5 before publishing to npm. This often causes problems in the ecosystem because neither browsers (except for most modern versions) nor some tools currently support all ES6 features. We recommend to publish code on npm as ES5 at least for a few more years.

<br>
To resolve this:

1. Open an issue on the dependency's issue tracker and ask that the package be published pre-compiled.
  * Note: Create React App can consume both CommonJS and ES modules. For Node.js compatibility, it is recommended that the main entry point is CommonJS. However, they can optionally provide an ES module entry point with the `module` field in `package.json`. Note that **even if a library provides an ES Modules version, it should still precompile other ES6 features to ES5 if it intends to support older browsers**.

2. Fork the package and publish a corrected version yourself. 

3. If the dependency is small enough, copy it to your `src/` folder and treat it as application code.

In the future, we might start automatically compiling incompatible third-party modules, but it is not currently supported. This approach would also slow down the production builds.

## Alternatives to Ejecting

如果有许多相似的project, 推荐你 *fork* `react-scripts` 以及需要的其他依赖包. [这篇文章](https://auth0.com/blog/how-to-configure-create-react-app/) 做了深入研究. 更多讨论 [this issue](https://github.com/facebookincubator/create-react-app/issues/682).