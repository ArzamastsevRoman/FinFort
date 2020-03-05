export default class Validate {

	constructor (container) {
        this.container = container;
		this.input = container.querySelectorAll('.search__input');
		console.log(this.input)
        this.button = container.querySelector('.search__button')

		this.inputValidate = this.inputValidate.bind(this);
		this.validate = this.validate.bind(this);

		this.input[0]
            .addEventListener('click', this.inputValidate);
        this.input[0]
			.addEventListener('input', this.inputValidate);
		this.input[1]
            .addEventListener('click', this.inputValidate);
        this.input[1]
			.addEventListener('input', this.inputValidate);
		this.input[2]
            .addEventListener('click', this.inputValidate);
        this.input[2]
			.addEventListener('input', this.inputValidate);
		this.input[3]
            .addEventListener('click', this.inputValidate);
        this.input[3]
			.addEventListener('input', this.inputValidate);

		this.diactivatedButton = this.diactivatedButton.bind(this);
		this.activatedButton = this.activatedButton.bind(this);
	}

	inputValidate(e) {
		this.validate(e.target);
	}
	
	validate(element) {

		if (element.validity.tooShort) {
			this.diactivatedButton();
		} else if (element.validity.valueMissing) {
			this.diactivatedButton();
		} else {
			this.activatedButton();
		}
	}

	diactivatedButton () {
		this.button.classList.add('search__button_diactivated');
  	}
	
	activatedButton () {
		this.button.classList.remove('search__button_diactivated');
  	}
}