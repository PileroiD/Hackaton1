export function random(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function showModal(text = '', counter = 0, time = 0) {
	const modal = document.querySelector('.result-modal');
	if (counter) {
		modal.textContent = `${text}: ${counter - 1}`;
	} else if (text) {
		modal.textContent = `${text}`;
	}
	modal.classList.remove('hiden');

	setTimeout(() => {
		modal.classList.add('hiden');
	}, time ? time : 3000);
}

export function showForm(options) {
	const { text } = options;

	const form = document.querySelector('form'),
		formText = document.querySelector('.form-text');

	formText.textContent = text;
	form.classList.remove('form-hiden');
}

export function closeForm() {
	const form = document.querySelector('form');
	form.classList.add('form-hiden');
}

export function checkNumInputs(selector) {
	const numInputs = document.querySelectorAll(selector);

	numInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/gi, '');

		});
	})
};

export function clearInputs(selector) {
	document.querySelectorAll(selector).forEach(item => item.value = '');
};

export function showErrorForm(options) {
	const { form, input, button } = options;
	input.style.border = '2px solid red';

	button.style.cursor = 'not-allowed';
	button.style.pointerEvents = 'none';

	form.querySelector('.form-error-message').style.display = 'block';

	setTimeout(() => {
		form.querySelector('.form-error-message').style.display = 'none';
		clearInputs('input');
		input.style.border = '1px solid darkorange';
		button.style.cursor = 'pointer';
		button.style.pointerEvents = '';
	}, 2000);
}