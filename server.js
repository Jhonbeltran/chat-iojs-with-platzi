//con esto evitamos algunas de las malas partes de js
'use strict'

//const = variables estaticas (constantes)
//Pues los modulos que vamos a requerir no queremos que se cambien en ningun momento
//En nuestra aplicacion.
const http = require('http')
//El modulo http me va a permitir crear un servidor web o http con io.js

//Definimos una variable estatica para el puerto 
//Desde aplicaciones con io.js puedo obtener las variables de entorno de mi sistema operativo
//La siguiente linea nos permite una asignacion por defecto.
const port = process.env.PORT || 8080


//Con esto creamos el server 
// const server = http.createServer()

//El puerto que va a escuchar nuestra aplicacion
// server.listen(port)

//Desde consola podemos usar PORT=8081 por ejemplo para cambiar la ruta del puerto

/*Callbacks: funciones que se ejecutan despues de que algun 
metodo asincrono (node es una plataforma asincrona / no bloquea el io (imput/output))
a terminado su ejecucion. cuando hacemos una operacion en node, esta operacion 
va a una cola de operaciones (eventlopp: ciclo que corre en el procesador constantemente
verificando que tareas hay por ejecutar, cuando las tareas se ejecutan el va a notificar 
un evento al evento que esta pidiendo que se llame esa tarea)*/

/*Los callbacks nos permiten tener aplicaciones que puedan tener alta concurrencia,
 aplicaciones en tiempo real*/

//vamos a crear un callback que se va a ejecutar cada vez que se hace una peticion http
// const server = http.createServer(/*Hey miren, una anemona anonima*/function (req, res) {
// 	res.end('Hola io.js que ahora es igual a node.js')
// })


// server.listen(port, /*se ejecuta cuando el server termina de escuchar>*/function () {
// 	console.log('El servidor está escuchando en el puerto: ' + port)
// })

/*Ahora resulta que eso de arriba no es tan buena practica, si queremos tener codi
go mantenible, la recomendacion es que nosotros tengamos todas nuestras funciones callback 
o funciones asincronas como funciones definidas o declaradas dentro del servidor*/

/*function onRequest(req, res) {
	res.end('Hola io.js que ahora es igual a node.js')
}

const server = http.createServer(onRequest)

function onListening() {
	console.log('El servidor está escuchando en el puerto: ' + port)
}

server.listen(port, onListening)*/


//Ahora vamos a usar eventemiters

/* Un eventemiter es un mecanismo de io.js o de node que me permite emitir eventos
y escuchar esos eventos*/

/*el server ademas de recibir un callback tambien es un evenemiter */

//Esto lo escribimos para hacer uso del file system para poder hacer que el server responda
//Con archivos como un html
const fs = require('fs')

//Para que nuestro codigo funcione sin problemas en otros sistemas operativos
//En windows por ejemplo las direcciones son manejadas con \ y no con / 
//Punto para unix :v
//Vamos a usar el siguiente path

const path = require('path')


function onRequest(req, res) {
	//res.end('Hola io.js que ahora es igual a node.js')

	//Esto de abajo usa un metodo sincrono(esto no es recomendado)

	//let es usado en vez de var en js6 para definir variables con un scope seguro
	//Para que la variable solo exista dentro de su hambito y no pueda ser usada fuera de el.
	//let para variables, const para constantes

	// let file = fs.readFileSync('public/index.html')
	
	//Ahora lo correcto es trabajar con funcionalidades asincronas :)
	//El ultimo elemento de una funcion asincrona es un callback
	//En este caso la funcion dentro del readFile va a recibir el archivo despues de que lo cargue


	//Vamos a usar un callback muy comun en node "El error como primer argumento"

	let fileName = path.join(__dirname, 'public', 'index.html')

	/*Streams: Mecanismos para poder leer archivos o fuentes de informacion binaria,
	de forma inteligente, es decir una lectura mucho mas rapida, vamos a usar un stream de lectura
	y enviarlo a un stream de escritura*/

	//Creamos un rs = readstream a partir de fileSystem fs
	let rs = fs.createReadStream(index)

	//Seteamos el header
	res.setHeader('Content-Type', 'text/html')

	//Un stream tambien es un EventEmiter

	//req y res tambien son streams .___. 
	//De esta manera (la liena de abajo) y ya estoy leyendo el archivo y lo estoy enviando
	rs.pipe(res)


	//Y ya no necesitamos nada de esto
	//(no lo borro porque no quiero :v)
	
	/*fs.readFile(fileName, function(err, file){
		if (err){
			//Asi manejamos el error 
			return res.end(err.message)
		}
		res.setHeader('Content-Type', 'text/html')
		res.end(file)
	})*/	

	//Si hay errores los podemos controlar de la siguente forma

	rs.on('error', function (err) {
		//No necesitamos el return ._.
		res.end(err.message)
	})


	/* Los streams nos permiten manipular canales de informacion haciendo buffering inteligente
	sin necesidad de tener que cargar todo el bloque en memoria*/
}

function onListening() {
	console.log('El servidor está escuchando en el puerto: ' + port)
}

const server = http.createServer()
server.listen(port)

//Acá estan los evenemiters: request, listening...
server.on('request', onRequest)
server.on('listening', onListening)


//Y ahora en vez de usar callbacks vamos a usar streams para leer el archivo ._. 
