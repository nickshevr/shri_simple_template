const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const webpack = require('webpack');
require('dotenv').config();

const ASSET_PATH = process.env.ASSET_PATH || '/';

const config = {
    entry: {
        index: './src/index.js',
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "React App",
            template: './public/index.html'            
        }),
        new StatoscopePlugin({
            name: "shri_simple_template",
            saveReportTo: 'report-[name]-[hash].html',
            saveStatsTo: 'stats-[name]-[hash].json',
            saveOnlyStats: false,
            open: false,
        }),
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
          }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: 'auto',
    },
    module: {
        rules: [
            // @TODO js rule
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "@babel/preset-env",
                        ["@babel/preset-react", {"runtime": "automatic"}]]
                    }
            },
            // @TODO css rule
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // file loader
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            }
        ],
    },

    // @TODO optimizations
    optimization: {
        // Я не знаю что тут происходит, это всё github copilot, я ему верю
        usedExports: true,
        runtimeChunk: {name: 'runtime'},
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            }
        }
    },
    // @TODO lodash treeshaking Done 👆
    // @TODO chunk for lodash
    // @TODO chunk for runtime Done 👆
    // @TODO fallback for crypto
};

module.exports = config;
