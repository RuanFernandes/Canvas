import { GObjects } from "../js/game.js";
import Render2d from "./render.js";

class Bullet {
    constructor(x, y, angle, id) {
        this.render2d = new Render2d();
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 10;
        this.radius = 5;
        this.color = '#f00';
        this.id = id;
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x < 0 || this.x > window.innerWidth || this.y < 0 || this.y > window.innerHeight) {
            GObjects.remove('bullet' + this.id);
        }
    }

    render() {
        this.render2d.draw('ball', this.x, this.y, {
            radius: this.radius,
            color: this.color
        });
    }
}

export default Bullet;
