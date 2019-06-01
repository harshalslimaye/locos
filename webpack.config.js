const path = require('path');

module.exports = {
  entry: './src/locos.js',
  output: {
    filename: 'locos.js',
    path: path.join(__dirname, 'dist'),
    library: 'locos',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  } 
};
