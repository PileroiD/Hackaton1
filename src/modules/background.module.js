import { Module } from '../core/module';
import { random } from '../utils';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const changeImage = document.querySelector('.img');
    changeImage.style = `background-image: url(../assets/bg_${random(1, 12)}.jpg) `;

    const changeBgColor = document.querySelector('body');
    changeBgColor.style = `background: linear-gradient(#${random(
      22,
      54
    )}${random(11, 39)}${random(11, 19)}, #110700) fixed`;
  }
}
