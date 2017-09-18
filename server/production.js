const path = require('path')
const express = require('express')

const paths = require('../config/paths')
const manifest = require('../config/manifest')

const clientStats = require(path.join(paths.buildDir, 'stats.json'))
const server = require(path.join(paths.buildDir, 'server')).default
const meta = require(path.join(paths.buildDir, 'icons.json')).html

if (manifest.theme_color) {
    meta.push(`<meta name="theme-color" content="${manifest.theme_color}">`)
}

if (manifest.filename) {
    meta.push(`<link rel="manifest" href="/${manifest.filename}">`)
}

module.exports = app => app
    .get('*.js', (req, res, next) => {
        if (req.url !== '/sw.js') {
            req.url = `${req.url}.gz`
            res.set('Content-Encoding', 'gzip')
        }
        next()
    })
    .use(express.static(paths.buildDir))
    .use(server({
        clientStats,
        meta: meta.join(''),
    }))
