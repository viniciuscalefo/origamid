// Crie uma função que verifique
// corretamente o tipo de dado

function tipoDado(dado){
    return Object.prototype.toString.call(dado)
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado={}
Object.defineProperties(quadrado,{
    lados:{
        value:4,
        enumerable:true
    }
})

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }
  Object.freeze(configuracao)
  
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array

  const propriedadeArray=Object.getOwnPropertyNames(Array.prototype)
  const propriedadeString=Object.getOwnPropertyNames(String.prototype)

  console.log(propriedadeArray)
  console.log(propriedadeString)
  