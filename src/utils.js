export function random(min, max) {
  	return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function showModal(text = '', counter = 0, time = 0) {
	const modal = document.querySelector('.result-modal');
	if (counter) {
		modal.textContent = `${text}: ${counter-1}`;
	} else if (text) {
		modal.textContent = `${text}`;
	}
	modal.classList.remove('hiden');

	setTimeout(() => {
		modal.classList.add('hiden');
	}, time ? time : 3000);
}