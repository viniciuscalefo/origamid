function initTabNav(){
	const tabMenu=document.querySelectorAll('.js-tabmenu li')
	const tabContent=document.querySelectorAll('.js-tabcontent section')

	if(tabMenu.length && tabContent){
		tabContent[0].classList.add('ativo')

		function activeTab(index){
			tabContent.forEach((section)=>{
				section.classList.remove('ativo')
			})
			tabContent[index].classList.add('ativo')
		}

		tabMenu.forEach((itemMenu,index)=>{
			itemMenu.addEventListener('click',()=> {
				activeTab(index)
			})

		})
	}
}

initTabNav()

function initAccordion(){
	const accordionList=document.querySelectorAll('.js-accordion dt')
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
	const linksIternos = document.querySelectorAll('.js-menu a[href^="#"]');

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