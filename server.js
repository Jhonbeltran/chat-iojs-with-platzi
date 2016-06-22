
'use strict'

const http = require('http')
const port = process.env.PORT || 8080
const fs = require('fs')
const path = require('path')
const server = http.createServer()

server.listen(port)
server.on('request', onRequest)
server.on('listening', onListening)

function onRequest(req, res) {
	
	let fileName = path.join(__dirname, 'public', 'index.html')

	let rs = fs.createReadStream(index)

	res.setHeader('Content-Type', 'text/html')

	rs.pipe(res)

	rs.on('error', function (err) {
		res.end(err.message)
	})

}

function onListening() {
	console.log(`El servidor está escuchando en el puerto: ${port}`)
}



 
