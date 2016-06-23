//LLamamos al modulo st que instalamos
const st = require('st')

//Usamos el modulo path para hacer uso de las rutas
const path = require('path')

//Creamos la configuracion del modulo

const mount = st({
	path: path.join(__dirname, '..', 'public'),
	index: 	'index.html'
})

function onRequest(req, res) {
	mount(req, res, function (err) {
		//Otra forma de escribir if en js ._.
		if (err) return res.end(err, message)
		//Else
		res.statusCode = 404
		res.end('Not found '+req.url)
	})
}


//Esta es la forma de exportar una funcion a otro que va a hacer el llamado
module.exports = onRequest