const express = require('express')
const ViteExpress = require('vite-express')
const api = require('./routes/api')

const { createServer } = require('http')
const { onConnectionHandler } = require('./socket')
const { WebSocketServer } = require('ws')

const app = express()
const server = createServer(app).listen(3000)
const wss = new WebSocketServer({ server })

// Websocket
wss.on('connection', onConnectionHandler)

// TODO: Adding cors support

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', api)

// Vite Express Middleware
ViteExpress.bind(app, server)
