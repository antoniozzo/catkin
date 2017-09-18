const path = require('path')
const paths = require('./paths')
const packageConfig = require('../package.json')

module.exports = {
    appName: packageConfig.name,
    appDescription: packageConfig.description,
    logo: path.join(paths.sourceDir, 'assets', 'icon.png'),
    statsFilename: 'icons.json',
    emitStats: true,
    icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
    },
}
