/* O "this" em JavaScript se refere ao objeto que está sendo referenciado em um determinado contexto ou escopo. Ele pode ser usado dentro de uma função para se referir ao objeto que a chamou, ou pode ser usado fora de uma função para se referir ao objeto global (no caso do navegador, seria o objeto "window")*/

var pessoa = {
	nome: 'Vini',
	idade: 19,
	profissao: 'Student',
	possuiFaculdade: true,
};

pessoa.nome; // 'Vini'
pessoa.possuiFaculdade; // true

/************************EXERCICIOS ******************************* */

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
	nome: 'Vinicius',
	sobrenome: 'calefo',
	idade: 19,
	peso: 77,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function () {
	return this.nome + ' ' + this.sobrenome;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
	preco: 1000,
	portas: 4,
	marca: 'Audi',
};
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var dog = {
	raca: 'labrador',
	cor: 'preto',
	idade: 10,
	verHomem:true,
	latir(){
		if (this.verHomem==true){
			return 'AU AU AU AU AU'
		}
	}
};
