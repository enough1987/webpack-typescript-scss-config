const PATH = require('path');
const ARGV = require('yargs').argv;

const IS_DEVELOPMENT = ARGV.mode === 'development';
const IS_PRODUCTION = !IS_DEVELOPMENT;
const ROOT = PATH.join(__dirname, '' );
const DIST_PATH = PATH.join(__dirname, '/public');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader'); // typescript

const DEV_SERVER = {
    contentBase: DIST_PATH,
    port: 9000,
    compress: true,
    open: true
};

const CONFIG = {

  context: ROOT,

  devServer: DEV_SERVER,

  entry: {
    main: './src/index.ts'
  },
  output: {
    filename: 'bundle.js',
    path: DIST_PATH
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: [ /node_modules/ ],
            loader: 'awesome-typescript-loader'
        },
        {
            test: /\.html$/,
            use: 'html-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            IS_DEVELOPMENT ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: IS_PRODUCTION
              }
            },
            'sass-loader',
            'resolve-url-loader'
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'images/[name][hash].[ext]'
            }
          }, {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70
              }
            }
          },
          ],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name][hash].[ext]'
            }
          },
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CheckerPlugin()
  ],
  optimization: IS_PRODUCTION ? {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false,
            warnings: false,
            drop_console: true,
            unsafe: true
          },
        },
      }),
    ],
  } : {}
};

module.exports = CONFIG;
