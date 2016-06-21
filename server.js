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
const server = http.createServer()

//El puerto que va a escuchar nuestra aplicacion
server.listen(port)

//Desde consola podemos usar PORT=8081 por ejemplo para cambiar la ruta del puerto

