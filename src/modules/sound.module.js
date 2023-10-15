import {Module} from '../core/module'
import { ContextMenu } from '../menu'
import { showModal } from '../utils';
import { random } from '../utils'


export class RandomSound extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const contextMenu = new ContextMenu("#menu")
        contextMenu.close()

        let randomIndex = random(0, 7)

        let audios = [
            "https://samplelib.com/lib/preview/wav/sample-3s.wav", 
            "http://soundbible.com/grab.php?id=1778&type=mp3", 
            "http://soundbible.com/grab.php?id=1949&type=mp3", 
            "http://soundbible.com/grab.php?id=96&type=mp3", 
            "http://soundbible.com/grab.php?id=1312&type=mp3", 
            "http://soundbible.com/grab.php?id=722&type=mp3", 
            "http://soundbible.com/grab.php?id=1320&type=mp3",
            "http://soundbible.com/grab.php?id=2026&type=mp3"]

        let audio = new Audio(audios[randomIndex])
        audio.play()
        
    }
}