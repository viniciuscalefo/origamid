function initTabNav(){
	const tabMenu=document.querySelectorAll('[data-tab="menu"] li')
	const tabContent=document.querySelectorAll('[data-tab="content"] section')

	if(tabMenu.length && tabContent.length){
		tabContent[0].classList.add('ativo')

		function activeTab(index){
			tabContent.forEach((section)=>{
				section.classList.remove('ativo')
			});
			const direcao = tabContent[index].dataset.anime;
			tabContent[index].classList.add('ativo', direcao)
		}

		tabMenu.forEach((itemMenu,index)=>{
			itemMenu.addEventListener('click',() => {
				activeTab(index)
			});

		});
	}
}

initTabNav()

function initAccordion(){
	const accordionList=document.querySelectorAll('[ data-anime="accordion"] dt')
	if(accordionList.length){
		accordionList[0].classList.add('ativo')
		accordionList[0].nextElementSibling.classList.add('ativo')
	}

	function activeAccordion(event){
		this.classList.toggle('ativo')
		console.log(this.nextElementSibling.classList.toggle('ativo'))//event.currentTarget)==this
	}

	accordionList.forEach((item)=>{
		item.addEventListener('click', activeAccordion)
	})
}

initAccordion()

function initScrollSuave(){
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

initScrollSuave()

function initAnimacaoScroll(){
	const sections=document.querySelectorAll('[data-anime="scroll"]')
	const windowMetade=window.innerHeight * 0.6
	function animaScroll(){
		sections.forEach((section)=>{
			const sectionTop=section.getBoundingClientRect().top
			const isSectionVisible=(sectionTop-windowMetade)<0
			if (isSectionVisible){
				section.classList.add('ativo')
			}
			else
			section.classList.remove('ativo')
		})
	}
	animaScroll()

	window.addEventListener('scroll',animaScroll)
}
initAnimacaoScroll()