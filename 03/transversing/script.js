/*const h1=document.querySelector('h1')
const animaisLista=document.querySelector('.animais-descricao')

h1.innerHTML='<p>Novo paragrafo</p>'
//console.log(animaisLista.innerHTML)

const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho*/

/**************************EXERCICIOS ***********************/

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu'); //selecionando o menu
const copy = document.querySelector('.copy'); //selecionando a copy

const cloneMenu = menu.cloneNode(true); //clonando o menu
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const dl = document.querySelector('.faq-lista');
//console.log(dl.children[0])

// Selecione o DD referente ao primeiro DT
const primeiroDT = dl.children[0];
const primeiroDD = primeiroDT.nextElementSibling;
console.log(primeiroDD);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');
const body = document.querySelector('body');

body.replaceChild(animais, faq);
