class Accordion {

	constructor(listener, panel) {
		this.listener = listener;
		this.panel = panel;
	}

	handler(element) {
		const accordion = element.parentNode;
		const isActive = accordion.classList.contains('active');
		if(isActive) {
			accordion.classList.remove('active')
		} else {
			for(let i = 0; i < this.accordions.length; i++) {
				this.accordions[i].classList.remove('active');
			}
			accordion.classList.add('active');
		}
	}

	init() {
		this.accordionsHeader = document.querySelectorAll(`${this.listener}`);
		this.accordions = document.querySelectorAll(`${this.panel}`);
		for(let i = 0; i < this.accordions.length; i++) {
			this.accordionsHeader[i].addEventListener('click',() => this.handler(this.accordionsHeader[i]));
		}
	}
}

export default Accordion;

