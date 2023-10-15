import { Shape } from "./shape";
import { random } from "../../utils";

export class RectShape extends Shape {  
    
  constructor(x, y) {
    super(x, y);    
    this.type = 'rect';
    this.width = random(100, 200);       
    this.height = random(100, 200);           
    this.strokeWidth = random(1, 20);     
      
    this.draw();
  }

  createPath() {
    const halfStrokeWidth = this.strokeWidth / 2;
    this.path = document.createElementNS(
      'http://www.w3.org/2000/svg',
      this.type
    );
    this.path.setAttribute('stroke-width', this.strokeWidth);    
    this.path.setAttribute('x', halfStrokeWidth);
    this.path.setAttribute('y', halfStrokeWidth);
    this.path.setAttribute('width', this.width - this.strokeWidth);
    this.path.setAttribute('height', this.height - this.strokeWidth);
    this.path.setAttribute('stroke', this.strokeColor);
    this.path.setAttribute('fill', this.fillColor);
  }

}

export class RectRoundShape extends RectShape {  
    
  constructor(x, y) {
    super(x, y);        
    this.path.setAttribute('rx', random(Math.round(this.width * 0.1), Math.round(this.width * 0.2)));
    this.path.setAttribute('ry', random(Math.round(this.width * 0.1), Math.round(this.width * 0.2)));
  }

}
