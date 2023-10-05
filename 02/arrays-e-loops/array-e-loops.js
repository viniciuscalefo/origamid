// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

/*var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox

// MÉTODOS E PROPRIEDADES DE UMA ARRAY

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

for(var i=0;i<videoGames.length;i++){
    console.log(videoGames[i])
}*/

//***********************EXERCICIOS****************************** */
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem,

for (var i = 0; i < brasilCampeao.length; i++) {
	console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (var j = 0; j < frutas.length; j++) {
	if (frutas[j] === 'Pera') {
		break;
	} else {
		console.log(frutas[j]);
	}
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

ultimaFruta=frutas[frutas.length-1]
console.log(ultimaFruta)
