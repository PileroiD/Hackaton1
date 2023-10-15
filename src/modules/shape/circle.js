import { Shape } from "./shape";
import { random } from "../../utils";

export class CircleShape extends Shape {  
    
  constructor(x, y) {
    super(x, y);    
    this.type = 'circle';
    this.radius = random(100, 200);       
    this.strokeWidth = random(1, 20); 
    this.path = null;
    this.#setSize();
    this.draw();
  }

  createPath() {
    this.path = document.createElementNS(
      'http://www.w3.org/2000/svg',
      this.type
    );
    this.path.setAttribute('stroke-width', this.strokeWidth);
    this.path.setAttribute('stroke', this.strokeColor);
    this.path.setAttribute('fill', this.fillColor);
    const center =  this.radius + this.strokeWidth / 2;
    this.path.setAttribute('cx', center);
    this.path.setAttribute('cy', center);
    this.path.setAttribute('r', this.radius);
  }

  #setSize() {
    this.width = this.radius * 2 + this.strokeWidth;
    this.height = this.width;    
  }

}
