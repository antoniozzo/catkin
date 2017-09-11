const path = require('path')

const config = require('../config')

const clientStats = require(path.join(config.buildDir, 'stats.json'))
const icons = require(path.join(config.buildDir, 'icons.json')).html
const server = require(path.join(config.buildDir, 'server')).default

module.exports = app => app.use(server({ clientStats, icons }))
