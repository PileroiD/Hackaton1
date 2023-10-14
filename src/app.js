import { Timer } from './modules/timer.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import { ContextMenu } from './menu';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const mainScope = document.querySelector('body'),
    contextMenuItem = new ContextMenu('#menu'),
    menu = document.querySelector('#menu');

  mainScope.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const { target } = event;
    if (target) {
      contextMenuItem.open(event);
    }
  });

  
  const clickFeature = new ClicksModule('click', 'Click analytics');
  menu.append(clickFeature.toHTML());

  const timer = new Timer('timer', 'Timer');
  menu.append(timer.toHTML());

  const shape = new ShapeModule('shape', 'Shape');
  menu.append(shape.toHTML());

  menu.addEventListener('click', (event) => {
    if (event && event.target.classList.contains('menu-item')) {
      switch (event.target.dataset.type) {
        case 'click':
          clickFeature.trigger(3000);
          break;
        case 'timer':
          timer.trigger(5);
          break;
        case 'shape':
          const targetParent = event.target.offsetParent;
          shape.nullPoint.x = event.target.offsetParent.getBoundingClientRect().x;
          shape.nullPoint.y = event.target.offsetParent.getBoundingClientRect().y;
          shape.trigger();
          break;
      }
    }
  });
});
