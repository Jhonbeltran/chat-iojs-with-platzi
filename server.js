'use strict'

const http = require('http')
const port = process.env.PORT || 8080
const fs = require('fs')
const path = require('path')
const server = http.createServer()
//con esto estamos trayendo la funcion onRequest de index.js en la carpeta router
const router = require('./router')

server.on('request', router)
server.on('listening', onListening)

server.listen(port)


function onListening() {
	console.log(`El servidor está escuchando en el puerto: ${port}`)
}



 
