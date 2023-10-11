export default function initScrollSuave(){
	const linksIternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

	function scrollToSection(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const section=document.querySelector(href)

		section.scrollIntoView({
			behavior: 'smooth',
			block:'start',
			inline:'start',

		})
		

		//Forma Alternativa
		//const topo= section.offsetTop
		// window.scrollTo({
		// 	top: 1000,
		// 	behavior:'smooth'
		// })
	}

	linksIternos.forEach((link) => {
		link.addEventListener('click', scrollToSection);
	});
}
