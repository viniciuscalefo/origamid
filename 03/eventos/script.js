const img = document.querySelector('img');

function callBack(event) {
	console.log(event);
}

img.addEventListener('click', callBack);

const animaisLista = document.querySelectorAll('.animais-lista');

function callbackLista(event) {
	console.log(event.currentTarget);
	console.log(event.target);
}

//animaisLista.addEventListener('click',callbackLista);

const h1 = document.querySelector('h1');

function handleEvent(event) {
	console.log(event.type, event);
}
h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
	console.log(event.key);
	if (event.key === 'f') {
		document.body.classList.toggle('fullscreen');
	}
}
window.addEventListener('keydown', handleKeyboard);


//**************EVENTOS 2***********************************
const imgs=document.querySelectorAll('img')

function handleImg(event){
	console.log(event.target)
}

imgs.forEach((img) => {
	img.addEventListener('click',handleImg)
});


/***********EXERCICIOS ******************/

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos=document.querySelectorAll('a[href^="#"]')
function handleLink(event){
	//Previna o comportamento padrão desses links
	event.preventDefault()
	linksInternos.forEach((link)=> {
		link.classList.remove('ativo')
	})
	event.currentTarget.classList.add('ativo')//poderia substituir o event.curretTraget por this.
}

linksInternos.forEach((link)=>{
	link.addEventListener('click',handleLink)
})
//console.log(linksInternos)


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const elementos=document.querySelectorAll('body *')
//no CSS tem um seletor unviversal '*' se vc quer que tudo oq em depois de algo vc coloca esse ago, no caso o body, espaço e o '*'

function mostraItem(event){
	console.log(event.currentTarget)
}

elementos.forEach((elemento)=>{
	elemento.addEventListener('click',mostraItem)
})



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// so colocar a propriedade .remove na function mostra Item
//console.log(event.currentTarget.remove())



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleKeyboard(event) {
	if (event.key === 't') {
		document.documentElement.classList.toggle('texto-maior')
		//document.documentElement: acessando o css

	}
}
window.addEventListener('keydown', handleKeyboard);
