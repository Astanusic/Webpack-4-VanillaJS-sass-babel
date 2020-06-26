<p align="center">
  <a href="https://webpack.js.org/" target="_blank">
    <img alt="Webpack Official" src="https://www.alsacreations.com/xmedia/doc/original/webpack-logo-horizontal.png">
  </a>
</p>

# Simple Webpack 4 Rdy-to-code

The idea is just to have a ready to code webpack config.  
It also minify css and js in an optimized way.  
Production config is in a different file than Dev config.  
I used WebpackMerge so the shared config options between those two files are not repeating(DRY purpose)

## What it can do for you ?

#### Loaders

- Dev Server with hot reload

- You can type `ES06` and above, and also use `JSX` \* Babel-loader
- You can use `S[ac]ss` as it will compile into `css` files \* sass-loader - css-loader - style-loader

#### Plugins

- <a href="https://github.com/johnagan/clean-webpack-plugin" target="_blank">CleanWebPackPlugin</a>
- <a href="https://github.com/jantimon/html-webpack-plugin" target="_blank">HTMLwebpackPlugin</a>
- <a href="https://webpack.js.org/plugins/mini-css-extract-plugin/" target="_blank">MiniCssExtractPlugin</a>
- <a href="https://webpack.js.org/plugins/terser-webpack-plugin/" target="_blank">TerserWebpackPlugin</a>

## Setup

```bash
$ yarn install
```

## Run dev-server

```bash
$ yarn start
```

## Run build-dev

```bash
$ yarn build-dev
```

## Production

```bash
$ yarn build
```

#### Next features

Handle Output Management so =>

Instead of having a global /assets directory that contains everything, you can groups assets with the code that uses them.  
For exemple check this structure:

```bash
/components/
/components/component-name/
/components/component-name/index.jsx
/components/component-name/index.css
/components/component-name/icon.svg
/components/component-name/img.png
```

Way more portable, you can even reuse this "component" in an other project as long as your dependencies belong the same.
