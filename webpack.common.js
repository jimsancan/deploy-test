const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{loader: 'babel-loader'}],
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader'
                }]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}