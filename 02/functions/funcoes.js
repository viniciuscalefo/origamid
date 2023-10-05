function areaQuadrado(lado) {
	return lado * lado;
}

x = areaQuadrado(5);
console.log(x);

/*Ao criar uma função, você pode definir parâmetros.

Ao executar uma função, você pode passar argumentos.*/
// peso e altura são os parâmetros
function imc(peso, altura) {
	const imc = peso / altura ** 2;
	return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

/***************************************************************/
function corFavorita(cor) {
	if (cor === 'azul') {
		return 'Você gosta do céu';
	} else if (cor === 'verde') {
		return 'Você gosta de mato';
	} else {
		return 'Você não gosta de nada';
	}
}
var cor = corFavorita('verde'); // retorna 'Você não gosta de nada',pois n é passado um argumento
console.log(cor);

addEventListener('click', function () {
	console.log('clicou');
});
/***************************************************************/

// Crie uma função para verificar se um valor é Truthy
function verificar(valor) {
	return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(medida) {
	return `A medida do perimetro do quadrado é ${medida * 4} cm`;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
	return nome + ' ' + sobrenome;
}

// Crie uma função que verifica se um número é par

function par(n) {
	if (n % 2 == 0) {
		return `O numero ${n} é par `;
	} else {
		return `O numero ${n} é impar `;
	}
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
	return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
	console.log('vinicus');
}); //em páginas onde não é possivel ter scroll não acontece o evento

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
	return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
	return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
