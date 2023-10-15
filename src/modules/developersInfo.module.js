import {Module} from '../core/module'

export class DevelopersInfoModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        console.log('something');
    }
}