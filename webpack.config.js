const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');
const extractSass = new ExtractTextPlugin('index.css');

module.exports = [{
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}, {
  name: 'css',
  entry: './src/scss/index.scss',
  output: {
    filename: 'ignore',
    path: dist
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    extractSass
  ]
}];
