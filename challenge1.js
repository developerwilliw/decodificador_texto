


var textoInserido = document.querySelector(".insira-texto");

var buttonCripto = document.querySelector(".criptografar");
buttonCripto.addEventListener("click", criptografaTexto);

var buttonDescripto = document.querySelector(".descriptografar");
buttonDescripto.addEventListener("click", descriptografaTexto);

var buttonCopiar = document.querySelector(".copiar");
buttonCopiar.addEventListener("click", copiaTexto);

var buttonLimpar = document.querySelector(".limpar-campos");
buttonLimpar.addEventListener("click", limpaTextos);

var chave = ["a", "e", "i", "o", "u"];
var regra = ["ai", "enter", "imes", "ober", "ufat"];

function criptografaTexto()
{
	
	if (validaTexto()){
		var textoCriptografado = textoInserido.value.replace(/\D/g, function(letra){
		if(letra == chave[0]){
			return regra[0];
		}
		if(letra == chave[1]){
			return regra[1];
		}
		if(letra == chave[2]){
			return regra[2];
		}
		if(letra == chave[3]){
			return regra[3];
		}
		if(letra == chave[4]){
			return regra[4];
		}
		else 
		{
			return letra;
		}
		});
		var textoSaida = document.querySelector(".mostra-saida");
		textoSaida.value = textoCriptografado;	
	}
	
}

function descriptografaTexto()
{
	
	if(validaTexto()){
		var textoDescriptografado = textoInserido.value.replace(/(ai|enter|imes|ober|ufat)/g, function(letra){
		if(letra == regra[0]){
			return chave[0];
		}
		if(letra == regra[1]){
			return chave[1];
		}
		if(letra == regra[2]){
			return chave[2];
		}
		if(letra == regra[3]){
			return chave[3];
		}
		if(letra == regra[4]){
			return chave[4];
		}
		else 
		{
			return letra;
		}
		});
	var textOutput = document.querySelector(".mostra-saida");
	textOutput.value = textoDescriptografado;
	}
}

function validaTexto()
{	
	var textoValido = false;
	for (var i = 0; i < textoInserido.value.length; i++){
		if(textoInserido.value[i] == textoInserido.value[i].toUpperCase()
			&& textoInserido.value[i] != " "
			 && textoInserido.value[i] != "\n"
			  && textoInserido.value[i] != ","
			   && textoInserido.value[i] != ".")
		{	
			alert("use somente letras minusculas");
			let limpaEntrada = document.querySelector(".insira-texto");
			limpaEntrada.value = "";
			let limpaSaida = document.querySelector(".mostra-saida");
			limpaSaida.value = "";
			textoValido = false;
			break;
		}
		else{
			textoValido = true;
		}
	}
	return textoValido;
}


function copiaTexto()
{
	var textoCopiado = document.querySelector(".mostra-saida");
	textoCopiado.select();
	document.execCommand("copy");
	document.querySelector(".mostra-saida").value = "";
}


function limpaTextos()
{
	document.querySelector(".insira-texto").value = "";
	document.querySelector(".mostra-saida").value = "";
}

