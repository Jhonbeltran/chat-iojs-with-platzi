function inicio(){
	let boton = document.getElementById('boton')
	boton.addEventListener('click', calcular)
}

function calcular () {
	let entrada = document.getElementById('entrada')
	entrada = entrada.value
	let salida = document.getElementById('salida')
	
	let senx, cosx, tanx, cotx, secx, cscx

	senx = ["1/cscx", "tanx*cosx", "cosx/cotx"]
	cosx = ["1/secx", "senx/tanx", "senx*cotx"]
	tanx = ["1/cotx", "senx/cosx"]
	cotx = ["1/tanx", "cosx/senx"]
	//Acá podria usar variables para secx y para cscx pero neh
	secx = ["1/cosx"]
	cscx = ["1/senx"]

	if (entrada=="senx" || entrada=="sen" || entrada=="sinx" || entrada=="sin") {
		salida.innerHTML = "<ul><li>"+senx[0]+"</li>"+
							"<li>"+senx[1]+"</li>"+
							"<li>"+senx[2]+"</li>"+"</ul>"
	}

	if (entrada=="cosx" || entrada=="cos") {
		salida.innerHTML = "<ul><li>"+cosx[0]+"</li>"+
							"<li>"+cosx[1]+"</li>"+
							"<li>"+cosx[2]+"</li>"+"</ul>"
	}

	



}