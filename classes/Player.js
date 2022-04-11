import Render2d from './render.js';
import Movement from './Movement.js';
import { GObjects } from '../js/game.js';

class Player {
    constructor(x, y, name, color) {
        this.render2d = new Render2d();
        this.movement = new Movement(false);

        this.vecX = 0;
        this.vecY = 0;
        this.speed = 10;
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this._name = name ? name : "Player";
        this._color = color ? color : "black";
    }

    render() {
        this.render2d.draw('text', this.x - (this._name.length * 4.5), this.y - 25, {
            text: this._name,
            color: '#0f0'
        });
        this.render2d.draw('ball', this.x, this.y, {
            radius: 20,
            color: this._color
        });
    }

    update() {
        const Keys = GObjects.findObjectByName('keys').instance;


        /* == Movement == */
        if (Keys.isPressed('ArrowUp')) {
            this.vecY = -1;
        } else if (Keys.isPressed('ArrowDown')) {
            this.vecY = 1;
        } else {
            this.vecY = 0;
        }
        if (Keys.isPressed('ArrowLeft')) {
            this.vecX = -1;
        } else if (Keys.isPressed('ArrowRight')) {
            this.vecX = 1;
        } else {
            this.vecX = 0;
        }
        this.movement.doMovement(this);
    }
}

export default Player;