const loaders = require('../loaders')
const config = require('../webpack.client')

const cssLoader = loaders.css
cssLoader.use.unshift('style')

module.exports = {
    module: {
        rules: [
            cssLoader,
        ],
    },
    resolve: config.resolve,
    resolveLoader: config.resolveLoader,
}
