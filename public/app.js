//Extraemos el record de el html
const record = document.querySelector('#record')

//Lo ponemos a escuchar el evento click y nos va a mostrar un mensaje en consola 
//(consola del navegador)
record.addEventListener('click', function (e) {
	e.preventDefault()

	console.log('Boton clicked')
})