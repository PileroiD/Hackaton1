import { Timer } from './modules/timer.module';
import { ClicksModule } from './modules/clicks.module';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module'; // фон-картинка
import { DevelopersInfoModule } from './modules/developersInfo.module';
import './styles.css';
import { showForm, checkNumInputs, closeForm, clearInputs, showErrorForm } from './utils';

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

  // фон-картинка
  const changeImage = new BackgroundModule('Change Style', 'Change Style');
  menu.append(changeImage.toHTML());

  // module about developers
  const developersInfo = new DevelopersInfoModule('developersInfo', 'Developers');
  menu.append(developersInfo.toHTML());
  
  menu.addEventListener('click', (event) => {
    if (event && event.target.classList.contains('menu-item')) {
      switch (event.target.dataset.type) {
        case 'click':
          clickFeature.trigger(3000, 1000);
          break;
        case 'timer':
          const contextMenu = new ContextMenu("#menu");
          contextMenu.close();
          
          showForm({text: "Укажите количество секунд для таймера"});
          checkNumInputs('input');

          const form = document.querySelector('form'),
                input = form.querySelector('input'),
                button = form.querySelector('button');

          form.addEventListener('submit', event => {
            event.preventDefault();

            if (input.value && +input.value <= 60) {
              closeForm();
              timer.trigger(+input.value);
              clearInputs('input');
            } else {
              showErrorForm({form, input, button});
            }
          });
          break;
        case 'Change Style':
          changeImage.trigger(); // фон-картинка
          break;
        case 'developersInfo':
          developersInfo.trigger();
          break;
      }
    }
  });
});
