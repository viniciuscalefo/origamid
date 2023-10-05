const title=document.querySelector('h1')
title.classList.add('titulo')
console.log(title.classList)

function callback(){
    console.log('clicou em ', title.innerHTML)
}
title.addEventListener('click',callback)
/********************EXCERCICIOS******************************/

// Retorne o url da página atual utilizando o objeto window
const pagina=window.location.href;
console.log(pagina)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo=document.querySelector('.ativo')
console.log(elementoAtivo.innerHTML)

// Retorne a linguagem do navegador
const linguagem=window.navigator.language
console.log(linguagem)

// Retorne a largura da janela 
const largura=window.innerWidth
console.log(largura)
