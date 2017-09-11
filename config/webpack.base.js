const path = require('path')
const DotenvPlugin = require('dotenv-webpack')

const env = require('./env')
const loaders = require('./loaders')
const config = require('./')

module.exports = {
    context: path.resolve(__dirname, '..', 'entries'),
    devtool: env.env === 'development' && 'inline-source-map',
    output: {
        path: config.buildDir,
        pathinfo: env.env === 'development',
        filename: '[name].js',
        publicPath: '/',
    },
    plugins: [
        new DotenvPlugin({
            path: path.resolve(__dirname, '..', '.env'),
            safe: path.resolve(__dirname, '..', '.env.example'),
            systemvars: true,
        }),
    ],
    module: {
        rules: [
            loaders.js,
            loaders.svg,
            loaders.files,
        ],
    },
    resolve: {
        modules: [config.sourceDir, 'node_modules'],
        alias: {
            variables: path.resolve(__dirname, 'variables'),
        },
    },
    resolveLoader: {
        moduleExtensions: ['-loader'],
    },
}
