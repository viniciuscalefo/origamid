// function Dom(seletor){
//     this.element=function(){
//         return document.querySelector(seletor)
//     },
//     //a função retorna o elemento, logo n preciso selecionado em baixo
//     this.ativar=function(){//rtoca o elementoSelecionado=document.querySelector(this.seletor) por
//         this.element().classList.add('ativoPorElement')
//     }
// }

// const li=new Dom('li')
// li.ativar()

//**************************EXERCICIOS******************************************
// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome,idade) {
    this.nome=nome
    this.idade=idade
    this.andar=function(){
      console.log(this.nome + ' andou');
    }
  }

  const p1= new Pessoa('joao',20)
  const p2= new Pessoa('MARIA',25)
  const p3= new Pessoa('Bruno',15)

  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
function Dom(seletor){
    const elementList=document.querySelectorAll(seletor)
    this.elementList=elementList
    
    this.addClass=function(classe){
        elementList.forEach((item)=>{
            item.classList.add(classe)
        })
    }
    this.removeClass=function(classe){
        elementList.forEach((item)=>{
            item.classList.remove(classe)
        })
    }
}
const li= new Dom('li')
li.addClass('brsbvo')

  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
  

