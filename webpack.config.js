const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const config = {
  entry: {
    about: './src/pages/About.js',
    home: './src/pages/Home.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin(),
    new StatoscopePlugin({
      saveStatsTo: 'stats.json',
      saveReportTo: 'report-[name]-[hash].html',
      saveOnlyStats: false,
      open: false,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      bn: path.join(
        path.MONOREPO_ROOT,
        'node_modules/bn.js/lib/bn.js',
      ),
      'bn.js': path.join(
        path.MONOREPO_ROOT,
        'node_modules/bn.js/lib/bn.js',
      ),
      react: path.join(
        path.MONOREPO_ROOT,
        'node_modules/react-is/index.js',
      ),
      'react.js': path.join(
        path.MONOREPO_ROOT,
        'node_modules/react-is/index.js',
      ),
    },
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  optimization: {
    minimize: true,
    usedExports: true,
    splitChunks: {
      chunks: 'all',
    },
  },
// @TODO lodash treeshaking
// @TODO chunk for lodash
// @TODO chunk for runtime
};

module.exports = config;
