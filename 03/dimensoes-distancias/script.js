const section1 = document.querySelector('.animais');

section1.clientHeight; // height + padding
section1.offsetHeight; // height + padding + border
section1.scrollHeight; // height total, mesmo dentro de scroll

const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;

const animaisTopo = listaAnimais.offsetTop;
//console.log(animaisTopo)

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

/*****************************EXERCICIOS***************************/
// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img');
//console.log(primeiraImagem.offsetTop)

// Retorne a soma da largura de todas as imagens

function somaImagems() {
	const imagens = document.querySelectorAll('img');
	let somaLargura = 0;
	imagens.forEach((imagem) => {
		console.log((somaLargura += imagem.offsetWidth));
	});
}

window.onload = function () {
	somaImagems();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
links.forEach((link) => {
	const linksWidth = link.offsetWidth;
	const linksHight = link.offsetHeight;

	if (linksHight >= 48 && linksWidth >= 48) {
		console.log(link, 'Possui acessibilidade');
	} else {
		console.log('não possui boa acessibilidade');
	}
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width:720px)').matches;

if (browserSmall) {
	const menu = document.querySelector('.menu');
	menu.classList.add('menu-mobile');
}
