// Require Dotenv
const Dotenv = require('dotenv-webpack');
// Require Webpack for HMR
const webpack = require('webpack');
// Required for working with paths and directories
const path = require('path');
// Require autoprefixer
const autoprefixer = require('autoprefixer');
// HTML Template Plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Config for HTML Template Plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: 'body',
});
// Vendor Libs to be bundled separately
const vendorLibs = ['react', 'react-dom', 'jquery'];
// Copy Webpack Plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Unused CSS
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const PATHS = {
  src: path.join(__dirname, 'src')
}

// Webpack Configs
module.exports = {
  // Dev Server Setup
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
  },
  // Entry point for Webpack to bundle
  entry: {
    bundle: ['react-hot-loader/patch', 'babel-polyfill', './src/js/main.jsx'],
    vendor: vendorLibs,
  },
  // Where to bundle to
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        // Convert ES6
        test: /\.js?x$/,
        exclude: '/(node_modules)/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'flow'],
          },
        },
      },
      {
        // Bundles font files
        test: /\.(woff|woff2|eot|ttf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: './fonts/[name].[ext]',
            limit: 30000,
            mimetype: 'application/font-woff',
          },
        },
      },
      {
        // Load images and optimize automatically
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
      {
       // CSS optimize
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./src/js'), path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
      }
    }
  },
  plugins: [
    // Dotenv setup
    new Dotenv(),
    // Config for HTML Template
    HtmlWebpackPluginConfig,
    // Copy config file
    new CopyWebpackPlugin([
      { from: './src/config.json', to: './' },
      { from: './src/assets/icons/favicon.ico', to: './' },
      { from: './src/assets/mrsir-logo-white.png', to: './' },
      { from: './src/assets/mrsir-icon.png', to: './' }
    ]),
    // Shows relative path when HMR is enabled
    new webpack.NamedModulesPlugin(),
    // Enabled HMR
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    // CSS
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
  ],
};
