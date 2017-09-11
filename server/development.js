const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

const clientConfig = require('../config/webpack.client')
const serverConfig = require('../config/webpack.server')

const compiler = webpack([clientConfig, serverConfig])
const clientCompiler = compiler.compilers.find(c => c.name === 'client')

module.exports = (app) => {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: clientConfig.output.publicPath,
        contentBase: clientConfig.output.path,
        hot: true,
        clientLogLevel: 'none',
        disableHostCheck: true,
        noInfo: true,
        quiet: true,
        stats: 'errors-only',
    }))
    app.use(webpackHotMiddleware(clientCompiler))
    app.use(webpackHotServerMiddleware(compiler))
}
