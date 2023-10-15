import { Shape } from "./shape";
import { random } from "../../utils";

export class EllipseShape extends Shape {  
    
  constructor(x, y) {
    super(x, y);    
    this.type = 'ellipse';
    this.width = random(100, 200);       
    this.height = random(100, 200);           
    this.strokeWidth = random(1, 20); 
    this.center = {
      x: (this.width - this.strokeWidth) / 2,
      y: (this.height - this.strokeWidth) / 2,
    };
      
    this.draw();
  }

  createPath() {
    this.path = document.createElementNS(
      'http://www.w3.org/2000/svg',
      this.type
    );
    this.path.setAttribute('stroke-width', this.strokeWidth);    
    this.path.setAttribute('cx', this.center.x);
    this.path.setAttribute('cy', this.center.y);
    this.path.setAttribute('rx', this.center.x - this.strokeWidth / 2);
    this.path.setAttribute('ry', this.center.y - this.strokeWidth / 2);
    this.path.setAttribute('stroke', this.strokeColor);
    this.path.setAttribute('fill', this.fillColor);
  }

}

