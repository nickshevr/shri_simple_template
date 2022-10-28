const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;


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
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
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
        ],
    },

    // @TODO optimizations
    optimization: {
        usedExports: true,
        runtimeChunk: {name: 'runtime'}
    },
    // @TODO lodash treeshaking
    // Done 👆
    // @TODO chunk for lodash
    // @TODO chunk for runtime
    // Done 👆
    // @TODO fallback for crypto
};

module.exports = config;
