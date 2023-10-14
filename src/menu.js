import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
    }

    open(event) {
        const {clientX: cX, clientY: cY} = event;

        this.el.style.top = `${cY}px`;
        this.el.style.left = `${cX}px`;

        this.el.onClick = () => this.close();
        this.el.classList.add('open');
    }

    close() {
        this.el.classList.remove('open');
    }

    add() {}
}