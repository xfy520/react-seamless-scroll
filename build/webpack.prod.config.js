const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const webpackConfigBase = require('./webpack.base.config');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

const webpackConfigProd = {
  mode: 'production',

  entry: {
    app: [resolve('../src/components/index.js')],
  },

  output: {
    filename: 'react-seamless-scroll.js',
    path: resolve('../lib'),
    libraryTarget: 'commonjs2'
  },

  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: 5,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin()
    ],
  },
  externals: [nodeExternals()],

  plugins: [
    new CleanWebpackPlugin()
  ]
}
module.exports = merge(webpackConfigBase, webpackConfigProd)
