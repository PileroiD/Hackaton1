import {Module} from '../core/module'
import { ContextMenu } from '../menu'
import { showModal } from '../utils';

export class randomMassage extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const contextMenu = new ContextMenu("#menu")
        contextMenu.close()

        const messageList = ['Привет!', 'Как ваше ничего?', 'Что такой хмурый?']

        const divMessage = document.createElement('div')
        divMessage.classList.add("divTimer") 
        divMessage.textContent = messageList[0]
        document.body.append(divMessage)

        setTimeout(() => {
            divMessage.style.display = "none"
            divMessage.remove()
        }, 3000)       
        
    }
}