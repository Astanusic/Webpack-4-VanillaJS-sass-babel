const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  devtool: "cheap-module-eval-source-map",
  watch: true,
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
