import * as smoothScroll from 'smoothscroll-polyfill'
smoothScroll.polyfill();

const SlideOut = {
	currentScroll: 0,
	scrollDelay: 300,
	getAnwser(e) {
		let matchesQuestion = e.target.matches ? e.target.matches('.question__item') : event.target.msMatchesSelector('.question__item');
		if (!matchesQuestion) return;
		e.preventDefault();
		const question = e.target;
		this.saveQuestionsOffset(question);
		// console.log(window.innerHeight);
		const category = parseInt(question.dataset.category);
		const order = parseInt(question.dataset.order);
		const answer = document.getElementById(`answer-${category}-${order}`);
		const wrapper = document.getElementById('mapp__wrapper');
		this.setArrowAttr(category, order);
		answer.classList.add('active');
		wrapper.classList.add('active');
		if (typeof window.scroll !== "undefined") {
			setTimeout(()=> {
				window.scroll({
					top: 0,
					behavior: 'smooth',
					duration: this.scrollDelay
				});
			}, this.scrollDelay);
		}


	},
	saveQuestionsOffset(question) {
		this.currentScroll = Math.max(document.body.scrollTop,document.documentElement.scrollTop, window.pageYOffset);
		console.log(this.currentScroll);
	},
	setArrowAttr(category, order) {
		const arrowHeader = document.getElementById('app__header');
		const arrow = arrowHeader.querySelector('#app__arrow');
		arrow.dataset.category = category;
		arrow.dataset.order = order;
	},
	closeAnswer(arrow) {
		const category = parseInt(arrow.dataset.category);
		if(isNaN(category)) return;
		const order = parseInt(arrow.dataset.order);
		const activeAnswer = document.getElementById(`answer-${category}-${order}`);
		const wrapper = document.getElementById('mapp__wrapper');
		activeAnswer.classList.remove('active');
		wrapper.classList.remove('active');
		if ((typeof window.scroll !== "undefined") && (this.currentScroll > 0)) {
			setTimeout(()=> {
				window.scroll({
					top: this.currentScroll,
					behavior: 'smooth'
				});
			}, this.scrollDelay);
		}

	},
	init() {
		document.addEventListener('click', (e) => this.getAnwser(e));
		const arrow = document.getElementById('app__arrow');
		arrow.addEventListener('click', () => this.closeAnswer(arrow));
	}
};

export default SlideOut;