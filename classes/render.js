import { ctx } from '../js/game.js';

class Render2d {
    draw(type, x, y, args) {
        switch (type) {
            case 'ball':
                this.drawBall(x, y, args);
                break;

            case 'text':
                this.drawText(x, y, args);
                break;

            default:
                break;
        }
    }

    drawBall(x, y, args) {
        ctx.beginPath();
        ctx.arc(x, y, args.radius ? args.radius : 10, 0, Math.PI * 2);
        ctx.fillStyle = args.color ? args.color : 'black';
        ctx.fill();
    }

    drawText(x, y, args) {
        ctx.font = args.font ? args.font : '20px Arial';
        ctx.fillStyle = args.color ? args.color : 'black';
        ctx.fillText(args.text ? args.text : 'undefined', x, y);
    }
}

export default Render2d;