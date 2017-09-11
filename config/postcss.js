const postCssImport = require('postcss-import')
const postCssNested = require('postcss-nested')
const postCssCssnext = require('postcss-cssnext')

const variables = require('./variables')

module.exports = {
    plugins: () => [
        postCssImport,
        postCssNested,
        postCssCssnext({
            features: {
                customProperties: {
                    variables: variables.customProperties,
                },
                customMedia: {
                    extensions: variables.customMedia,
                },
            },
        }),
    ],
}
