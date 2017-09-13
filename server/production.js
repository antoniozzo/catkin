const path = require('path')

const paths = require('../config/paths')

const clientStats = require(path.join(paths.buildDir, 'stats.json'))
const icons = require(path.join(paths.buildDir, 'icons.json')).html
const server = require(path.join(paths.buildDir, 'server')).default

module.exports = app => app.use(server({ clientStats, icons }))
