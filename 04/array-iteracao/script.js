// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   console.log(aula.nome);
//   acumulador[index] = aulas.nome;
//   console.log(acumulador);
//   return acumulador;
// }, {});


// const frutas = ['Banana', 'Pêra', 'Uva'];
// const temUva = frutas.some((item) => {
//  console.log(item)
//  return item=='Uva'
// }); // true
// console.log(temUva)

// function maiorQue100(numero) {
//   return numero > 100;
// }
// const numeros = [0, 43, 22, 88, 101, 2];
// const temMaior = numeros.some(maiorQue100); // true

/**********************EXERCICIOS*****************************/ 

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos=document.querySelectorAll(".curso")
const arrayCursos=Array.from(cursos)

const newCursos=arrayCursos.map((item)=>{
    let titulo =item.childNodes[1].textContent
    let descricao=item.childNodes[3].textContent
    let aulas=item.childNodes[5].textContent
    let horas=item.childNodes[7].textContent
    return {
    "Título: ": titulo,
    "Descrição:": descricao,
    "Aulas:":aulas,
    "Horas: ": horas}
})

/*RESOLUÇÃO */
// const objetoCurso=arrayCursos.map((curso)=>{
//     const tiulo=curso.querySelector('h1').innerText
//     const descricao=curso.querySelector('p').innerText
//     const aulas=curso.querySelector('.aulas').innerText
//     const horas=curso.querySelector('.horas').innerText
//     return{
//         titulo,
//         descricao,
//         aulas,
//         horas,
//     }
// })


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiores100=numeros.filter(n=> n >100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const baixo=instrumentos.some((item)=>{
    return item==='Baixo'
})


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras=compras.map((item)=> Number.parseFloat(item.preco.slice(2).replace(',','.')))


let total=0
for(let i=0;i<totalCompras.length;i++){
    total+=totalCompras[i]
}

//