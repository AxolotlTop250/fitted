const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    // path: path.resolve(__dirname, 'build'),
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'client'),
    filename: 'index.js',
  },
  plugins: [new HtmlWebpackPlugin({ template: `./index.html` })],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              [`@babel/preset-react`, { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  mode: process.env.NODE_ENV,
  devServer: {
    static: {
      directory: './client',
    },
    hot: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
      },
    },
    compress: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
