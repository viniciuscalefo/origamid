const imgs = document.querySelectorAll('img');

let i=0
imgs.forEach(function(item,index,array){
	console.log(item,index,array)
});


const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});

const imgs = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

/********************************EXERCICIOS************************************/

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((paragrafo) => {
	console.log(paragrafo);

	// Mostre o texto dos parágrafos no console
	console.log(paragrafo.innerText);
});

//Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item,index) => {
	console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
	console.log(i++);
});

imgs.forEach(() => i++);
