import { Module } from '../core/module';
import { random } from '../utils';

export class RandomMassage extends Module {
	constructor(type, text) {
		super(type, text);
	}

	trigger() {

		const messageList = [
			'А в какой ветке ты делаешь?',
			'Смёрджил в девелоп',
			'Надо немного покумекать',
			'Я замержила в develop',
			'Давай тогда новую ветку делать',
			'А в девелоп всё пушится нормально?',
			'Пуш конечно',
			'Мержу?'
		];

		const divMessage = document.createElement('div');
		divMessage.classList.add('divTimer');
		let randomIndex = random(0, 7);
		divMessage.textContent = messageList[randomIndex];
		document.body.append(divMessage);

		setTimeout(() => {
			divMessage.style.display = 'none';
			divMessage.remove();
		}, 2000);

	}
}