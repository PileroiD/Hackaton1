import {
	showModal,
	showForm,
	checkNumInputs,
	closeForm,
	clearInputs,
	showErrorForm,
} from '../utils';
import { Module } from '../core/module';

export class Timer extends Module {
	constructor(type, text) {
		super(type, text);
		this.divTimer = document.createElement('div');
		this.divTimer.className = 'divTimer divTimer--hidden';
		this.divTimer.innerHTML = `
            <div id="seconds"></div>
            <span>:</span>
            <div id="milliseconds"></div>
        `;

		document.body.append(this.divTimer);
	}

	run(time) {
		this.divTimer.classList.remove('divTimer--hidden');
		const secondsElement = document.getElementById('seconds');
		const millisecondsElement = document.getElementById('milliseconds');

		let targetSeconds = time;
		let targetMilliseconds = 0;

		const update = () => {
			secondsElement.textContent = targetSeconds.toString();
			millisecondsElement.textContent = targetMilliseconds.toString();
		};

		const countdown = setInterval(() => {
			if (targetSeconds === 0 && targetMilliseconds === 0) {
				clearInterval(countdown);
				showModal('Время истекло!');
				this.divTimer.classList.add('divTimer--hidden');
				// this.divTimer.remove();
			} else {
				if (targetMilliseconds === 0) {
					targetSeconds--;
					targetMilliseconds = 99;
				} else {
					targetMilliseconds--;
				}
				update();
			}
		}, 10);

		update();
	}

	trigger() {

		showForm({ text: 'Укажите количество секунд для таймера' });
		checkNumInputs('input');

		const form = document.querySelector('form'),
			input = form.querySelector('input'),
			button = form.querySelector('button');

		form.addEventListener('submit', (event) => {
			event.preventDefault();

			if (input.value && +input.value <= 60) {
				closeForm();
				this.run(+input.value);
				clearInputs('input');
			} else {
				showErrorForm({ form, input, button });
			}
		});
	}
}