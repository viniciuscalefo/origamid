export default function initTolltip(){
	const tolltips=document.querySelectorAll('[data-tolltip]')

tolltips.forEach((item)=>{
	item.addEventListener('mouseover',onMouseOver)
});

function onMouseOver(event){
	const tolltipBox=criarTolltipBox(this)
	
	onMouseMove.tolltipBox=tolltipBox
	this.addEventListener('mousemove',onMouseMove)

	onMouseLeave.tolltipBox=tolltipBox
	onMouseLeave.element=this
	this.addEventListener('mouseleave',onMouseLeave)
}

const onMouseLeave = {
	handleEvent() {
		this.tolltipBox.remove();
		this.removeEventListener('mouseleave',onMouseLeave)
		this.removeEventListener('mousemove',onMouseMove)
	}	
}

const onMouseMove={
	handleEvent(){
		this.tolltipBox.style.top=event.pageY + 20 + 'px'
		this.tolltipBox.style.left=event.pageX + 20 + 'px'
	}
}

function criarTolltipBox(element){
	const tolltipBox=document.createElement('div')
	const text=element.getAttribute('aria-label')
	tolltipBox.classList.add('tolltip')
	tolltipBox.innerText=text
	document.body.appendChild(tolltipBox)
	return tolltipBox;
}

}

