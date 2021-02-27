const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./static"),
    filename: "[name].js", 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }, 
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name : '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { esModule: false }}
        ],
      }
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new VueLoaderPlugin()
  ],
};