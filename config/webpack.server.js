const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base')
const loaders = require('./loaders')

module.exports = merge.smart(baseConfig, {
    target: 'node',
    name: 'server',
    entry: [
        'babel-polyfill',
        './server',
    ],
    output: {
        libraryTarget: 'umd',
        filename: 'server.js',
    },
    externals: fs
        .readdirSync(path.join(__dirname, '..', 'node_modules'))
        .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
        .reduce((externals, mod) => {
            externals[mod] = `commonjs ${mod}`
            return externals
        }, {}),
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    ],
    module: {
        rules: [
            {
                test: loaders.css.test,
                use: [
                    Object.assign({}, loaders.css.use[0], {
                        loader: 'css-loader/locals',
                    }),
                    ...loaders.css.use.slice(1, loaders.css.use.length - 1),
                ],
            },
        ],
    },
})
