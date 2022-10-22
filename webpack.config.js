const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const config = {
    entry: {
        about: {
            import: './src/pages/About.js',
            dependOn: 'shared'
        },
        home: {
             import: './src/pages/Home.js',
             dependOn: 'shared'
        },
        // chunk for lodash
        shared: 'lodash'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new StatoscopePlugin({
            saveStatsTo: 'stats.json',
            saveOnlyStats: false,
            open: false,
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    mode: 'development',
    target: 'web',
    module: {
        rules: [
            // js rule
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env','@babel/preset-react']
                }
            },
            // css rule
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    // fallback for crypto
    resolve: {
        fallback:
        {
             "stream": require.resolve("stream-browserify")
        }
    },
    // chunk for runtime
    // optimizations
    optimization: {
        chunkIds: 'size',
        runtimeChunk: 'single',
        usedExports: true    // lodash treeshaking
    },
};

module.exports = config;
