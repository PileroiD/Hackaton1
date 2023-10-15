import { Timer } from './modules/timer.module';
import { ClicksModule } from './modules/clicks.module';
import { RandomMassage } from './modules/message.module';
import { RandomSound } from './modules/sound.module';
import { ShapeModule } from './modules/shape.module';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module'; // фон-картинка
import { DevelopersInfoModule } from './modules/developersInfo.module';
import './styles.css';

export const contextMenuItem = new ContextMenu('#menu');

document.addEventListener('DOMContentLoaded', () => {
  const mainScope = document.querySelector('body');

  mainScope.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const { target } = event;
    if (target) {
      contextMenuItem.open(event);
    }
  });

  contextMenuItem.add(new ClicksModule('click', 'Click analytics'));
  contextMenuItem.add(new Timer('timer', 'Timer'));
  contextMenuItem.add(new ShapeModule('shape', 'Shape'));
  contextMenuItem.add(new BackgroundModule('Change Style', 'Change Style'));
  contextMenuItem.add(new RandomMassage('message', 'Random message'));
  contextMenuItem.add(new RandomSound('sound', 'Random sound'));
  contextMenuItem.add(new DevelopersInfoModule('developersInfo', 'Developers'));
});
