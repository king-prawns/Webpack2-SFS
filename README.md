# Webpack2-Expert
Webpack 2 Expert - Start from scratch

## Installation
- Install Node.js

Go to [Node website](https://nodejs.org/en/)

- Install Yarn
(npm should work as well)

Go to [Yarn website](https://yarnpkg.com/en/docs/install#mac-tab)

A very cool dependency management

## Usage
- Clone or Download the project

- Install dependencies
```
$ cd my-project
$ yarn install
```

a) for dev build
```
$ cd my-project
$ yarn run dev
```

b) for prod build

```
$ cd my-project
$ yarn run build 
```

Install [http-server](https://github.com/indexzero/http-server)

A command-line http server
```
$ yarn global add http-server
```
then 

```
$ cd my-project\dist
http-server
```

- Go to localhost

a) for dev build: [localhost:8000](http://localhost:8000/)

b) for prod build: [localhost:8080](http://localhost:8080/)

## Features

- [Webpack dev middleware](https://github.com/webpack/webpack-dev-middleware)
- [HMR](https://github.com/glenjamin/webpack-hot-middleware)
- [Webpack merge](https://github.com/survivejs/webpack-merge)
- [Babel (es6)](https://github.com/babel/babel-loader)
- [EsLint](https://github.com/MoOx/eslint-loader)
- [StyleLint](https://github.com/JaKXz/stylelint-webpack-plugin) 
- [StyleLint Standard Config](https://github.com/stylelint/stylelint-config-standard)
- [Style Loader](https://github.com/webpack-contrib/style-loader)
- [Resolve Url](https://github.com/bholloway/resolve-url-loader)
- [Url Loader](https://github.com/webpack-contrib/url-loader)
- [PostCss](https://github.com/postcss/postcss-loader)
- [Sass](https://github.com/webpack-contrib/sass-loader)
- [Handlebars](https://github.com/pcardune/handlebars-loader)
- [Extract Text-webpack plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
- [Html-webpack plugin](https://github.com/jantimon/html-webpack-plugin)
- [Copy-webpack plugin](https://github.com/kevlened/copy-webpack-plugin)
- Webpack Plugins: Provide, Define, UglifyJS, CommonsChunk

## Conclusion

This is a very complete example, I hope this will help you to understand better Webpack 2.
