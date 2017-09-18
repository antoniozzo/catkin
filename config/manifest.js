const path = require('path')
const paths = require('./paths')
const packageConfig = require('../package.json')

module.exports = {
    filename: 'manifest.json',
    name: packageConfig.name,
    short_name: packageConfig.name,
    description: packageConfig.description,
    background_color: '#fff',
    theme_color: '#fff',
    display: 'standalone',
    fingerprints: false,
    icons: [
        {
            src: path.join(paths.sourceDir, 'assets', 'icon.png'),
            destination: 'app-icons',
            sizes: [192, 512],
        },
    ],
}
