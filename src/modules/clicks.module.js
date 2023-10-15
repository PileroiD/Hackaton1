import { showModal } from '../utils';
import { Module } from '../core/module';

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger(seconds = 3000, timeForPreparingModal = 1000) {
    showModal('Покликайте по экрану', 0, timeForPreparingModal);

    let counter = 0;

    function clickHandler() {
      counter++;
    }

    document.body.addEventListener('click', clickHandler);
    const time = seconds;

    setTimeout(() => {
      document.body.removeEventListener('click', clickHandler);
      showModal(`За ${String(time).slice(0, 1)} секунды вы сделали кликов`, counter, time);
    }, time + timeForPreparingModal);
  }
}
