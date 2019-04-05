const webpack = require('webpack');

module.exports = {
  entry: {
    exports: __dirname + '/src/team-timezone.js'
  },
  mode: "production",
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname + '/lib',
    filename: 'team-timezone.js',
    library: 'team-timezone',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      'node_modules',
      'src',
    ]
  },
  module: {
    rules: [
      {
        test: [
          /\.js?$/,
        ],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: []
};
