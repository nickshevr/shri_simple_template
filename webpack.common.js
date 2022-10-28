
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
// const webpack = require("webpack");
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const StatoscopePlugin = require("@statoscope/webpack-plugin").default;
 const InterpolateHtmlPlugin = require("interpolate-html-plugin");
// const dotenv = require("dotenv");
// dotenv.config();
// const config = {
//   entry: {
//     about: "./src/pages/About.js",
//     home: "./src/pages/Home.js",
//   },

//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].[contenthash].js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: ["/node_modules/"],
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.html$/,
//         use: {
//           loader: "html-loader",
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".css"],
//     // fallback: {
//     //   stream: require.resolve("stream-browserify"),
//     //   crypto: require.resolve("crypto-browserify"),
//     // },
//   },
//   plugins: [
//     new NodePolyfillPlugin(),
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//     }),
//     new webpack.DefinePlugin({
//       "process.env": JSON.stringify(process.env),
//     }),
//     new HtmlWebpackPlugin({
//       filename: "index.html",
//       inject: true,
//       template: "public/index.html",
//     }),
//     new InterpolateHtmlPlugin({
//       PUBLIC_URL: "public",
//     }),
//     new StatoscopePlugin({
//       saveStatsTo: "stats.json",
//       saveOnlyStats: false,
//       open: false,
//     }),
//   ],

//   // @TODO optimizations
//   // @TODO lodash treeshaking
//   // @TODO chunk for lodash
//   // @TODO chunk for runtime
//   // @TODO fallback for crypto
// };

// module.exports = config;

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StatoscopePlugin = require("@statoscope/webpack-plugin").default;

const config = {
  entry: {
    about: "./src/pages/About.js",
    home: "./src/pages/Home.js",
    main: {
      dependOn: ["home", "about"],
      import: "./src/index.js",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("public/index.html"),
    }),
    new MiniCssExtractPlugin(),
    new InterpolateHtmlPlugin({
            PUBLIC_URL: "public",
          }),
    new StatoscopePlugin({
      saveStatsTo: "stats.json",
      saveOnlyStats: false,
      open: false,
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  target: "web",
  resolve: {
    fallback: {
      crypto: "crypto-browserify",
      stream: "stream-browserify",
    },
    alias: {
      crypto:"crypto-browserify",
      stream: "stream-browserify",
    },
  },
  optimization: {},
};

module.exports = config;
