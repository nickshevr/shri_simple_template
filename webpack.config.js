const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const config = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    open: true,
  },
  entry: {
    main: './src/index.js',
  },
  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    innerGraph: true,
    concatenateModules: true,
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new StatoscopePlugin({
      saveReportTo: 'report.html',
      saveStatsTo: 'stats.json',
      saveOnlyStats: false,
      open: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    library: {
      name: 'UUID',
      type: 'var',
    },
  },
};

module.exports = config;
