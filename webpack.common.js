const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StatoscopePlugin = require("@statoscope/webpack-plugin").default;
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const config = {
  entry: {
    about: "./src/pages/About.js",
    home: "./src/pages/Home.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ["/node_modules/"],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template:resolveApp('public/index.html'),
    }),
    // new StatoscopePlugin({
    //   saveStatsTo: "stats.json",
    //   saveOnlyStats: false,
    //   open: false,
    // }),
  ],

  // @TODO optimizations
  // @TODO lodash treeshaking
  // @TODO chunk for lodash
  // @TODO chunk for runtime
  // @TODO fallback for crypto
};

module.exports = config;
