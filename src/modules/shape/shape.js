import { random } from '../../utils';

const CLOSE_BUTTON_TEMPLATE = `<button class="shape__close">
  <svg fill="#000000" width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"/>
  </svg>
</button>`;

export class Shape {
  constructor(x, y, method = 'random') {
    this.element = null;
    this.path = null;
    this.svgElement = null;
    this.nullPoint = {
      x: x,
      y: y
    };
    this.creationMethod = method;
    this.width = null;
    this.height = null;
    this.fillColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    this.strokeColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    this.#create();
  }

  #create() {
    this.element = document.createElement('div');
    this.element.className = 'shape';
    this.element.innerHTML = CLOSE_BUTTON_TEMPLATE;
    this.svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.element.append(this.svgElement);
    this.element.style.top = this.nullPoint.y + 'px';
    this.element.style.left = this.nullPoint.x + 'px';
    this.closeButton = this.element.querySelector('.shape__close');
    this.closeButton.addEventListener('click', () => {
      this.remove()
    });
  }

  draw() {
    this.svgElement.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
    this.svgElement.setAttribute('width', this.width);
    this.svgElement.setAttribute('height', this.height);
    this.createPath();
    this.svgElement.append(this.path);
  }

  createPath() { }

  render() {
    document.body.append(this.element);
  }

  remove() {
    this.element.classList.add('shape--hide');
    setTimeout(() => {
      this.element.remove();
    }, 400);
  }

}