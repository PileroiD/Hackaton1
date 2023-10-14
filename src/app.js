import { Timer } from './modules/timer.module';
import { ClicksModule } from './modules/clicks.module';
import { ContextMenu } from './menu';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const mainScope = document.querySelector('body'),
    contextMenuSelector = new ContextMenu('#menu'),
    menu = document.querySelector('#menu');

  mainScope.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const { target } = event;
    if (target) {
      contextMenuSelector.open(event);
    }
  });

  
  const clickFeature = new ClicksModule('click', 'Click analytics');
  menu.append(clickFeature.toHTML());

  const timer = new Timer('timer', 'Timer');
  menu.append(timer.toHTML());

  menu.addEventListener('click', (event) => {
    if (event && event.target.classList.contains('menu-item')) {
      switch (event.target.dataset.type) {
        case 'click':
          clickFeature.trigger(3000);
          break;
        case 'timer':
          timer.trigger(5);
          break;
      }
    }
  });
});
