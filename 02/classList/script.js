// const menu=document.querySelector('.menu')
// menu.classList.add('ativo')
// menu.classList.toggle('azul')
// menu.classList.toggle('azul')

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais2 = document.querySelector('.animais');

animais2.className; // string com o nome das classes
animais2.className = 'azul'; // substitui completamente a string
animais2.className += ' vermelho'; // adiciona vermelho à string

animais2.attributes = 'class="ativo"'; // não funciona, read-only

// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

/**************************EXERCICIOS ****************************/

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
	item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
	item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imagensVerificadas = document.querySelectorAll('.animais-lista img');

imagensVerificadas.forEach((item) => {
	const possuiAtributo = item.hasAttribute('alt');
});

// Modifique o href do link externo no menu

const linkExterno=document.querySelector('a[href^="http"]')
console.log(linkExterno)
linkExterno.setAttribute('href','https://www.google.com')
