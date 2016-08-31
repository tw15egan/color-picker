const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');

// HMR Config
const parts = require('./libs/parts.js');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    // publicPath: '/css-colors/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Practice',
      template: 'app/index.html'
      
    })
  ]
};

var config;

switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common, 
      {
        devtool: 'source-map'
      }
    );
    break;
  default:
    config = merge(
      common, 
      {
        devtool: 'eval-source-map'
      },
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
  );
}

module.exports = validate(config);