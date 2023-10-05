var nome = 'viINHcius';
nomeMinusculo = nome.toLowerCase();

var btn = document.querySelector('.btn');

btn.classList.add('azul'); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function () {
	console.log('Clicou');
});
