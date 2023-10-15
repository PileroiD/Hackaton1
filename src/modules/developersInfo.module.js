import { Module } from '../core/module'

export class DevelopersInfoModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const mainDiv = document.querySelector('.developersInfo');
    mainDiv.classList.remove('hiden');

    document.querySelector('.close-button').addEventListener('click', () => {
      mainDiv.classList.add('hiden');
    });
  }
}