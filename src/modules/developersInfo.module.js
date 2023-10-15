import {Module} from '../core/module'
import { ContextMenu } from '../menu';

export class DevelopersInfoModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const contextMenu = new ContextMenu("#menu");
        contextMenu.close();

        const mainDiv = document.querySelector('.developersInfo');
        mainDiv.classList.remove('hiden');
        
        document.querySelector('.close-button').addEventListener('click', () => {
            mainDiv.classList.add('hiden');
        });
    }
}