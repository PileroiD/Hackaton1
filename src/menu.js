import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  // Opens context menu
  open(event) {
    const { clientX: cX, clientY: cY } = event;

    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    // проверка на размер экрана
    if (winWidth - cX < 200) {
      this.el.style.left = `${cX - 150}px`;
    } else {
      this.el.style.left = `${cX}px`;
    }

    if (winHeight - cY < 150) {
      this.el.style.top = `${cY - 250}px`;
    } else {
      this.el.style.top = `${cY}px`;
    }

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
