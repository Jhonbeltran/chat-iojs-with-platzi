const record = document.querySelector('#record')

record.addEventListener('click', function (e) {
	e.preventDefatult()

	console.log('Button clicked')	
})