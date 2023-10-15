import { Module } from '../core/module'
import { RectRoundShape, RectShape } from './shape/rect';
import { CircleShape } from './shape/circle';
import { EllipseShape } from './shape/ellipse';
import { random } from '../utils';
import { contextMenuItem } from '../app';

const SHAPE_TYPES = ['rect', 'round_rect', 'circle', 'ellipse'];

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.nullPoint = {
      x: 0,
      y: 0
    };
  }

  trigger() {
    this.getNullPoint();
    const shapeIndex = random(0, SHAPE_TYPES.length - 1);
    const selectedShape = SHAPE_TYPES[shapeIndex];
    let shape = null;
    switch (selectedShape) {
      case 'rect':
        shape = new RectShape(this.nullPoint.x, this.nullPoint.y);
        break;

      case 'round_rect':
        shape = new RectRoundShape(this.nullPoint.x, this.nullPoint.y);
        break;

      case 'circle':
        shape = new CircleShape(this.nullPoint.x, this.nullPoint.y);
        break;

      case 'ellipse':
        shape = new EllipseShape(this.nullPoint.x, this.nullPoint.y);
        break;

      default:
        break;
    }
    shape.render();
  }

  getNullPoint() {
    this.nullPoint = contextMenuItem.coords;
    console.log(this.nullPoint);
  }

}
