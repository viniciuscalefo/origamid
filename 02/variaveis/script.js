var nome = 'vinicius';
var idade = 19;
var comida;
comida = 'pizaa';

var semValor1, semValor2, semValor3, semValor4, semValor5;

// Declare uma variável contendo uma string
var nome = 'Vincius';

// Declare uma variável contendo um número dentro de uma string
var idade = 18;
console.log('vinicius tem ' + idade + ' anos');

// Declare uma variável com a sua idade
idade = 20;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'kleber';
var sobrenome = 'machDO';
console.log(nome + sobrenome);

// Coloque a seguinte frase em uma variável:
var frase = "It's time";

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);

/*----------------------------------------------------------------------------------------------*/
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var myAge=49;
var ageFather=49

if(myAge>ageFather){
    console.log("FIlho  é maisn velho")
}else if(myAge<ageFather){
    console.log("Pai é mais velho")
}else{
    console.log('Mesma idade')
}


// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2; //3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome,!!idade,!!possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta)

console.log(empregoFuturo);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
	console.log('Verdadeiro');
} else {
	console.log('Falso');
}

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
	console.log('Gato' && 'Cão');//Aprece o ultimo valor da expressão, pois é um && ele retorna a ultima vdd
} else {
	console.log('Falso');
}
