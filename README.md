# Simple Webpack 4 Config => Rdy-to-code

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

Assets such as images handle
