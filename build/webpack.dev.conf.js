const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, '../src')
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './img/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 4096,
          name: '/fonts/[name].[ext]'
        }
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        inject: true,
      }),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    host: 'localhost',
    port: 8088,
    hot: true,
    overlay: true,
    quiet: true,
  }
}