import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
    }

    // Opens context menu
    open(event) {
        const {clientX: cX, clientY: cY} = event;

        this.el.style.top = `${cY}px`;
        this.el.style.left = `${cX}px`;

        this.el.onClick = () => this.close();
        this.el.classList.add('open');
    }

    // Closes context menu
    close() {
        this.el.classList.remove('open');
    }

    // Add a new module to context menu
    add() {}
}