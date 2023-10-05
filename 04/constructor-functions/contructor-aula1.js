function Carro(marcaAtribuida,precoAtribuido){
    this.marca=marcaAtribuida;
    this.preco=precoAtribuido
}

const honda=new Carro('honda',2000)
const fiat =new Carro('fiat',7500)
console.log(honda,fiat)


function Carro2(marcaAtribuida,precoInicial){
    const taxa=1.2
    const precoFinal=precoInicial*taxa
    this.marca=marcaAtribuida;
    this.preco=precoFinal
}

const mazda=new Carro2('Mazda',2000)
const bentley =new Carro2('Bentley',10000)
console.log(mazda,bentley)
// unic coisa que é "visivel" no objeto no console é que é referenciado pelo this