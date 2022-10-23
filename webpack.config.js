const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { allowedNodeEnvironmentFlags } = require("process");
const StatoscopePlugin = require("@statoscope/webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const crypto = require('crypto-browserify');

const config = {
  entry: {
    about: "./src/pages/About.js",
    home: "./src/pages/Home.js",
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new StatoscopePlugin({
      saveStatsTo: "stats.json",
      saveOnlyStats: false,
      open: false,
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  mode: "development",
  target: "web",
  module: {
    rules: [
      // js rule
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/preset-react"],
        },
      },
      // css rule
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  // fallback for crypto
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
    },
  },

  // optimizations
  optimization: {
    minimize: true,
    moduleIds: "deterministic",
    innerGraph: true,
    concatenateModules: true,
    chunkIds: "size",
    splitChunks: {
      minChunks: 1,
      chunks: "all",
      minSize: 0,
    },
    runtimeChunk: "single", // chunk for runtime
    usedExports: true, // lodash treeshaking
  },
  performance: {
    hints: "warning",
    maxEntrypointSize: 244000,
    maxAssetSize: 244000,
  },
};

module.exports = config;
