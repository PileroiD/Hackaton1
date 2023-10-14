import { showModal } from '../utils';
import { ContextMenu } from '../menu';
import {Module} from '../core/module'

export class Timer extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger(time) {
        const contextMenu = new ContextMenu("#menu");
        contextMenu.close();

        const divTimer = document.createElement('div');
        divTimer.className = 'divTimer';
        divTimer.innerHTML = `
            <div id="seconds"></div>
            <span>:</span>
            <div id="milliseconds"></div>
        `;

        document.body.append(divTimer);

        function updateTimer() {
            const secondsElement = document.getElementById("seconds");
            const millisecondsElement = document.getElementById("milliseconds");
          
            let targetSeconds = time;
            let targetMilliseconds = 0;
          
            const update = () => {
                secondsElement.textContent = targetSeconds.toString();
                millisecondsElement.textContent = targetMilliseconds.toString();
            };
          
            const countdown = setInterval(() => {
                if (targetSeconds === 0 && targetMilliseconds === 0) {
                    clearInterval(countdown);
                    showModal('Время истекло!');
                    divTimer.style.display = 'none';
                    divTimer.remove();
                } else {
                    if (targetMilliseconds === 0) {
                        targetSeconds--;
                        targetMilliseconds = 99;
                    } else {
                        targetMilliseconds--;
                    }

                    update();
                }
            }, 10);
          
            update();
        }
          
        updateTimer();
    }
}