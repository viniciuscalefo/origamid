/*function Pessoa(nome, idade){
    this.nome=nome
    this.idade=idade
}

Pessoa.prototype.andar= function(){
    return this.nome+ 'andou '

}

const andre= new Pessoa('Andre, 28')

console.log(Pessoa.prototype)*/

const pais = "Brasil";
const cidade = new String("Rio");

/***************EXERCICIOS******************/
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoas.prototype.nomeCompleto = function () {
  return String.prototype.concat(this.nome, " ", this.sobrenome);
  // return `${this.nome} ${this.sobrenome}`
};
const vini = new Pessoas("Vinicius", "Calefo", 18);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden;//Booleab
li.offsetLeft; //Number
li.click();//undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
