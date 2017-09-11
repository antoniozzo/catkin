const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const config = require('./')

module.exports = {
    target: 'node',
    context: config.buildDir,
    entry: './render.js',
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
                assets: require(path.join(config.buildDir, 'assets.json')),
                chunks: require(path.join(config.buildDir, 'chunks.json')),
                icons: require(path.join(config.buildDir, 'icons.json')),
            },
        }),
    ],
}
