import { Module } from '../core/module'
import { random } from '../utils'

export class RandomMassage extends Module {
	constructor(type, text) {
		super(type, text);
	}

	trigger() {

		const messageList = ['Привет!', 'Как ваше ничего?', 'Что такой хмурый?', 'Проснись и пой!']

		const divMessage = document.createElement('div')
		divMessage.classList.add('divTimer')
		let randomIndex = random(0, 3)
		divMessage.textContent = messageList[randomIndex]
		document.body.append(divMessage)

		setTimeout(() => {
			divMessage.style.display = 'none'
			divMessage.remove()
		}, 2000)

	}
}