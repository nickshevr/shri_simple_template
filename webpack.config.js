const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { allowedNodeEnvironmentFlags } = require("process");
const StatoscopePlugin = require("@statoscope/webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    index: "./src/index.js",
    about: "./src/pages/About.js",
    home: "./src/pages/Home.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new StatoscopePlugin({
      saveStatsTo: "stats.json",
      saveReportTo: "report.html",
      saveOnlyStats: false,
      open: false,
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  mode: "development",
  //target: "web",
  module: {
    rules: [
      // js rule
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
      // css rule
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(html)$/,
        loader: "html-loader",
      },
    ],
  },
  // fallback for stream
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
    },
  },

  // optimizations
  optimization: {
    concatenateModules: true,
    minimize: true,
    usedExports: true,
    innerGraph: true,

    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
};

module.exports = config;
