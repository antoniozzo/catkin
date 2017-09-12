const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const config = require('./')

module.exports = {
    name: 'static',
    entry: './server.js',
    target: 'node',
    context: config.buildDir,
    output: {
        path: config.buildDir,
        filename: 'static.js',
        libraryTarget: 'umd',
    },
    plugins: [
        new StaticSiteGeneratorPlugin({
            paths: ['/'],
            crawl: true,
            locals: {
                clientStats: require(path.join(config.buildDir, 'stats.json')),
                icons: require(path.join(config.buildDir, 'icons.json')).html,
            },
        }),
    ],
}
