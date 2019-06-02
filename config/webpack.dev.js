const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/locos.js',
  output: {
    filename: 'locos.js',
    path: path.join(__dirname, '/../dist'),
    library: 'locos',
    libraryTarget: 'umd'
  },
  optimization: {
		// We no not want to minimize our code.
		minimize: false
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
