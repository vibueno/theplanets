const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
      },
      {
        test: /\.(woff2)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    fallback: { fs: false, path: require.resolve('path-browserify') }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public/assets', 'favicon-32x32.png')
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new ESLintPlugin({})
  ]
};
