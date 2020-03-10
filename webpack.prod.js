const merge = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [{
            test:  /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new CleanWebpackPlugin()
    ]
})