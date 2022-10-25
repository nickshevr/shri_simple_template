const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
  entry: {
    about: './src/pages/About.js',
    home: './src/pages/Home.js',
    main: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к файлу index.html
    }),
    new StatoscopePlugin({
      saveStatsTo: 'stats.json',
      saveOnlyStats: false,
      open: false,
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: true, // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [
      // @TODO js rule
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.(js|jsx)$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: ['babel-loader'],
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/',
      },
      // @TODO css rule
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  // @TODO optimizations
  // @TODO lodash treeshaking
  // @TODO chunk for lodash
  // @TODO chunk for runtime
  // @TODO fallback for crypto
};

module.exports = config;
