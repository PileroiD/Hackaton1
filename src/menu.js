import { Menu } from './core/menu';
import { Module } from './core/module';

export class ContextMenu extends Menu {
  #x;
  #y;
  constructor(selector) {
    super(selector);
  }

  get coords() {
    return { x: this.#x, y: this.#y };
  }

  // Opens context menu
  open(event) {
    const { clientX: cX, clientY: cY } = event;

    this.#x = cX;
    this.#y = cY;
    console.log(this.#x);
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
    window.addEventListener('click', () => {
      this.el.classList.remove('open');
    })
  }

  // Add a new module to context menu
  add(newItem) {
    if (newItem instanceof Module) {
      const menuItem = newItem.toHTML();
      this.el.append(menuItem);
      menuItem.addEventListener('click', () => {
        this.el.classList.remove('open');
        newItem.trigger();
      });
    }
  }
}
