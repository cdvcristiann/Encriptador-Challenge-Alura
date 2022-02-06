var inputEntrada = document.querySelector('#inputEntrada');
var btnEncriptar = document.querySelector('#btnEncriptar');
btnEncriptar.addEventListener("click", cambiaValoresInputSalda);
function cambiaValoresInputSalda() {
    var inputsalida = document.querySelector('#inputSalida');
    inputsalida.value = inputEntrada.value.replaceAll('e', 'enter').replace('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');

}

var btnDesencriptar = document.querySelector('#btnDesencriptar');
btnDesencriptar.addEventListener("click", desencriptar);
function desencriptar() {
    var inputsalida = document.querySelector('#inputSalida');
    inputsalida.value = inputEntrada.value.replaceAll('enter', 'e').replace('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');

}


var botonCopiar = document.querySelector("#btnCopiar");
botonCopiar.addEventListener("click", copiar);
function copiar(){
    var input = document.querySelector("#inputSalida");
    input.select();
    document.execCommand("copy");
};