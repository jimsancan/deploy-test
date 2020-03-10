const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer : {
        proxy: {
            '/api': 'http://localhost:5000'
        }
    }
})