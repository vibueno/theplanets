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
          { loader: 'style-loader' },
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[local]' }
            }
          },
          // Compiles Sass to CSS
          { loader: 'sass-loader' }
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
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    fallback: { fs: false, path: require.resolve('path-browserify') },
    alias: {
      COMPONENTS: path.resolve(__dirname, 'src/components'),
      VIEWS: path.resolve(__dirname, 'src/views'),
      ASSETS: path.resolve(__dirname, 'src/assets'),
      SRC: path.resolve(__dirname, 'src'),
      REDUX: path.resolve(__dirname, 'src/redux')
    }
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
