'use strict'

const http = require('http')
const port = process.env.PORT || 8080
const fs = require('fs')
const path = require('path')
const server = http.createServer()


server.on('request', onRequest)
server.on('listening', onListening)

server.listen(port)


function onRequest(req, res) {
	let direccion = req.url

	if (direccion.startsWith('/index') || direccion == '/') {
		return serveIndex(res)
	}

	if (direccion == '/app.js') {
		return serveApp(res)
	}

	else{
		res.statusCode = 404
		res.end('4040 not found'+direccion)
	}

	

}
//Esta funcion me va a cargar el archivo index.html
function serveIndex(res) {
	let index = path.join(__dirname, 'public', 'index.html')

	let rs = fs.createReadStream(index)

	res.setHeader('Content-Type', 'text/html')

	rs.pipe(res)

	rs.on('error', function (err) {
		res.setHeader('Content-Type', 'text/plain')
		res.end(err.message)
	})
}


//Esta funcion me va a cargar el archico app.js
function serveApp(res) {
	let app = path.join(__dirname, 'public', 'app.js')

	let rs = fs.createReadStream(app)

	res.setHeader('Content-Type', 'text/javascript')

	rs.pipe(res)

	rs.on('error', function (err) {
		res.setHeader('Content-Type', 'text/plain')
		res.end(err.message)
	})
}

function onListening() {
	console.log(`El servidor está escuchando en el puerto: ${port}`)
}



 
