const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register');

module.exports = env => {
  return {
		entry: ['./app.js'],
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'js/m2gis-block.js'
    },
    devtool: 'source-map',
		module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ]
    },
    plugins: [
      new htmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        hash: true,
      })
    ],
  };
};