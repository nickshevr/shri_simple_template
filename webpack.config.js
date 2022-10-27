const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const config = {
    entry: {
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
        index: './src/index.js'
    },

    plugins: [
        new HtmlWebpackPlugin({template: 'public/index.html'}),
        new StatoscopePlugin({
            saveStatsTo: 'stats.json',
            saveOnlyStats: false,
            open: false,
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/env",
                        ["@babel/preset-react", {"runtime": "automatic"}]
                    ],
                },
            },
            { test: /\.css$/, use: 'css-loader' }
        ],
    },
    resolve: {
        fallback: {
            stream: false
        },
    },
    mode: 'development',
    optimization: {
        providedExports: true,
        usedExports: true,
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
        innerGraph: true,
        moduleIds: "deterministic",
        concatenateModules: true,
        minimize: true,
    },

};

module.exports = config;
