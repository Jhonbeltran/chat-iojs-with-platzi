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
const server = http.createServer(/*Hey miren, una anemona anonima*/function (req, res) {
	res.end('Hola io.js que ahora es igual a node.js')
})


server.listen(port, /*se ejecuta cuando el server termina de escuchar>*/function () {
	console.log('El servidor está escuchando en el puerto: ' + port)
})
