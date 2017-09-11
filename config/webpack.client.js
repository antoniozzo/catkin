const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

const baseConfig = require('./webpack.base')
const loaders = require('./loaders')
const env = require('./env')
const config = require('./')

module.exports = merge.smart(baseConfig, {
    target: 'web',
    name: 'client',
    entry: [
        'babel-polyfill',
        ...(env.env === 'development' ? [
            'webpack-hot-middleware/client',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
        ] : []),
        './client',
    ],
    output: {
        filename: env.env === 'development' ? '[name].js' : '[name].[chunkhash].js',
        chunkFilename: env.env === 'development' ? '[name].js' : '[name].[chunkhash].js',
    },
    plugins: [
        new ExtractCssChunks(),
        new webpack.optimize.CommonsChunkPlugin({
            names: 'vendor',
            minChunks: module => /node_modules/.test(module.resource),
        }),
        ...(env.env === 'development' ? ([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
        ]) : ([
            new CleanWebpackPlugin([
                `${config.buildDir}/styles.*.css`,
                `${config.buildDir}/main.*.js`,
                `${config.buildDir}/vendor.*.js`,
            ], {
                root: config.rootDir,
                verbose: false,
            }),
        ])),
    ],
    module: {
        rules: [
            {
                test: loaders.css.test,
                use: ExtractCssChunks.extract({
                    use: loaders.css.use,
                }),
            },
        ],
    },
})
