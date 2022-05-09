import Render2d from './render.js';
import Movement from './Movement.js';
import Bullet from './Bullet.js';
import { GObjects } from '../js/game.js';

class Player {
    constructor(x, y, name, color) {
        this.render2d = new Render2d();
        this.movement = new Movement(true);

        this.vecX = 0;
        this.vecY = 0;
        this.speed = 10;
        this.radius = 20;
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
            radius: this.radius,
            color: this._color
        });
    }

    update() {
        const Keys = GObjects.findObjectByName('keys').instance;


        /* == Movement == */
        if (Keys.isPressed('w')) {
            this.vecY = -1;
        } else if (Keys.isPressed('s')) {
            this.vecY = 1;
        } else {
            this.vecY = 0;
        }
        if (Keys.isPressed('a')) {
            this.vecX = -1;
        } else if (Keys.isPressed('d')) {
            this.vecX = 1;
        } else {
            this.vecX = 0;
        }
        this.movement.doMovement(this);
    }

    shoot(mousex, mousey) {
        const angle = Math.atan2(mousey - this.y, mousex - this.x);

        const bulletID = GObjects.findObjectsByNameStart('bullet').length + Math.floor(Math.random() * 90000);
        const bullet = new Bullet(this.x, this.y, angle, bulletID);
        GObjects.add({ name: 'bullet' + bulletID, instance: bullet });
    }
}

export default Player;