const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')

module.exports = {
    webpack: config => merge.smart(config, webpackConfig),
}
