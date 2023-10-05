const perimetro = new Function("lado", "return lado * 4");

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const p = document.querySelectorAll("p");
const arrayP = Array.from(p);

const total = arrayP.reduce((acumulador, atual) => {
  return acumulador + atual.innerText.length;
}, 0);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}

console.log(criarElemento("h1", "ativo", "esse é um  paragrafo"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const criarElementoPadrao = criarElemento.bind(null, "h1", "titulo");
console.log(criarElementoPadrao("esse é um  paragrafo"));
