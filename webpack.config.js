
var path = require("path");
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8088
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
