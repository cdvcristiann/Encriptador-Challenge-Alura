var btnEncriptar = document.querySelector('#btnEncriptar');

btnEncriptar.addEventListener('click', function(){
	var inputEntrada = document.querySelector('#inputEntrada');
	var inputValue = inputEntrada.value

	var vocales = ['a', 'e', 'i', 'o', 'u']

	for(i=0;i<vocales.length;i++){
		console.log(vocales[i])
		console.log(inputValue)
		if(vocales[i].test(inputValue)){
			inputValue =inputValue.replaceAll('a','ai')
			inputValue =inputValue.replaceAll('e','enter')
			inputValue =inputValue.replaceAll('i','imes')
			inputValue =inputValue.replaceAll('o','ober')
			inputValue =inputValue.replaceAll('u','ufat')
		}
	}

				
	
	console.log(inputValue)

});

/*
var btnDesencriptar = document.querySelector('#btnDesencriptar');
btnDesencriptar.addEventListener('click', function(){
	var inputEntrada = document.querySelector('#inputEntrada');
	var inputValue = inputEntrada.value

	inputValue =inputValue.replaceAll('ai','a')
	inputValue =inputValue.replaceAll('enter','e')
	inputValue =inputValue.replaceAll('i','imes')
	inputValue =inputValue.replaceAll('o','ober')
	inputValue =inputValue.replaceAll('u','ufat')			
	
	console.log(inputValue)
	var input = actualizarInputSalida(inputValue)
	console.log(input)

});*/