const path = require('path')
const DotenvPlugin = require('dotenv-webpack')

const env = require('./env')
const paths = require('./paths')
const loaders = require('./loaders')

module.exports = {
    context: path.resolve(__dirname, '..', 'entries'),
    devtool: env.env === 'development' && 'inline-source-map',
    output: {
        path: paths.buildDir,
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
        modules: [paths.sourceDir, 'node_modules'],
        alias: {
            variables: path.resolve(__dirname, 'variables'),
        },
    },
    resolveLoader: {
        moduleExtensions: ['-loader'],
    },
}
