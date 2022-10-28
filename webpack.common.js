const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
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
    new LodashModuleReplacementPlugin(),
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
        test: /\.(js|jsx)$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
        exclude: /(node_modules)/,
        resolve: { extensions: [".js", ".jsx"] },
      },
      {
        test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  target: "web",
  resolve: {
    fallback: {
      crypto: require.resolve("crypto"),
    },
    alias: {
      "crypto-browserify": path.resolve(__dirname, "src/crypto-fallback.js"),
      "react-is": path.resolve(
        __dirname,
        "node_modules/react-is/cjs/react-is.production.min.js"
      ),
    },
  },
  optimization: {
    minimize: true,
    emitOnErrors: true,
    concatenateModules: true,
    moduleIds: "size",
    mergeDuplicateChunks: true,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "async",
    },
  },
};

module.exports = config;
