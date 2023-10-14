import { ContextMenu } from './menu';
import './styles.css'

document.addEventListener('DOMContentLoaded', () => {
    const mainScope = document.querySelector('body'),
        contextMenu = new ContextMenu('#menu');

    mainScope.addEventListener('contextmenu', event => {
        event.preventDefault();
        const {target} = event;
        if (target) {
            contextMenu.open(event);
        }
    });
});