'use strict';

let path = require('path');
let webpack = require('webpack');
const winston = require('winston');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

const libraryName = 'washemo-20';
const outputFile = libraryName + '.min.js';
const rootDir = `${__dirname}/..`;
const libDir = `${rootDir}/dist/lib`;

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    // new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules(),
  output: {
    path: libDir,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});

winston.log('info', `Generating library at: ${rootDir}`);

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  exclude: /(node_modules|bower_components)/,
  externals: {
    'react': 'react', // Case matters here
    'react-dom' : 'reactDOM' // Case matters here
  },
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
