const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

const cssconfig = {
  mode: 'production',
  entry: ['./src/styles.scss'],
  output: {
    path: path.resolve(__dirname, 'temp/'),
    filename: '[name].js',
    publicPath: "/temp",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new StylelintPlugin({ configFile: '.stylelintrc.json' }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin(),],
  }
};
const prodconfig = {
  mode: 'production',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist/res.cloudinary.com/spiralyze/raw/upload/placeholder-js-css-do-not-delete/'),
    filename: '[name].js',
    publicPath: "/dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]  //Preset used for env setup
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
        ]
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  }
};

module.exports = [cssconfig, prodconfig];