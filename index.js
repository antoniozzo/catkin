require('dotenv').config({ path: `${__dirname}/.env` })

const path = require('path')
const express = require('express')

const config = require('./config')
const env = require('./config/env')

const app = express().use(express.static(config.buildDir))

require(path.join(__dirname, 'server', env.env))(app)

app.listen(env.port, () => {
    console.log(`Listening @ http://localhost:${env.port}`)
})
