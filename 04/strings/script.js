// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];


let somaTaxa=0
let somaRecebimento=0

transacoes.forEach((item)=>{
   let valor=parseInt(item.valor.slice(2,6))

    if(item.descricao.startsWith('T')==true){
        somaTaxa +=valor

    }else if(item.descricao.startsWith('R')==true){
        somaRecebimento += valor
    }
})

console.log(somaRecebimento)
console.log(somaTaxa)
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const arrayTransportes=transportes.split(';')
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
const a=html.split('span')
const newA=a.join('a')
console.log(newA)

  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase.slice(-1))
  
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  let contadorTaxas=0
  transacoes2.forEach((item)=>{
    const textoTratado=item.trim().toUpperCase().slice(0,4)
    if(textoTratado==='TAXA'){
        contadorTaxas++
    }
  })
console.log(contadorTaxas)
  
  
  