const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const paths = require('./paths')

module.exports = {
    name: 'static',
    entry: './server.js',
    target: 'node',
    context: paths.buildDir,
    output: {
        path: paths.buildDir,
        filename: 'static.js',
        libraryTarget: 'umd',
    },
    plugins: [
        new StaticSiteGeneratorPlugin({
            paths: ['/'],
            crawl: true,
            locals: {
                clientStats: require(path.join(paths.buildDir, 'stats.json')),
                icons: require(path.join(paths.buildDir, 'icons.json')).html,
            },
        }),
    ],
}
