// function espera(){
//     console.log('albabababa') 
// }
// setTimeout(()=>{
//     console.log('arrow funcrion no set')
// },2000)

// for(let i=0 ; i<5 ; i++){
//     setTimeout(()=>{
//         console.log(`passou ${i} segundos`) 
//     },1000*i)
// 

// const btn=document.querySelector('button')
// btn.addEventListener('click', handleClick)

// function handleClick(){
//     console.log(this)
//     setTimeout(()=>{
//         this.classList.add('ativo')
//     },1000)
    
   
// }
// function loop(texto){
//     console.log(texto)
// }
// let i =0 
// const meuLoop=setInterval(()=>{
//     console.log(i++)
//     if(i>20){
//         clearInterval(meuLoop)
//     }
// },300,'salveeeee')

//+++++++++++++++++++++++++++++++++EXERCICIOS+++++++++++++++++++++++++++++
// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudarClasse(){
//     document.body.classList.toggle('active')
// }
// setInterval(mudarClasse,2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

  const iniciar=document.querySelector('.iniciar')
  const pausar=document.querySelector('.pausar')
  const tempo=document.querySelector('.tempo')

  iniciar.addEventListener('click',iniciarTempo)
  pausar.addEventListener('click', pausarTempo)
  pausar.addEventListener('dblclick', resetarTempo)

  let i =0
  let timer

  function iniciarTempo(){
    timer=setInterval(()=>{
        tempo.innerText=i++
    },100)
    iniciar.setAttribute('disabled','')
  }
  function pausarTempo(){
    clearInterval(timer)
    iniciar.removeAttribute('disabled')

  }

  function resetarTempo(){
    tempo.innerText=0
    i=0
  }