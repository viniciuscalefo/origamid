const animais = document.getElementById('animais');
console.log(animais);

const titulo = document.querySelector('.titulo');

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function (gridItem, index, array) {
	gridItem.classList.add('azul');
	console.log(index); // index do item na array
	console.log(array); // a array completa
});

/*****************************EXERCICIOS***************************/

// Retorne no console todas as imagens do site

const fotos = document.querySelectorAll('img');
console.log(fotos);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const fotos2 = document.querySelectorAll('img[src^="img/imagem"]');
console.log(fotos2);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const h2 = document.querySelector('.animais-descricao  h2');
console.log(h2.innerHTML);

// Selecione o último p do site

const ultimoP=document.querySelectorAll('p')
const tamanhoP=ultimoP.length-1
console.log(ultimoP[tamanhoP])
