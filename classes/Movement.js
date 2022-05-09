import { canvas } from "../js/game.js";

class Movement {
    constructor(collision) {
        this.collision = collision == undefined ? false : collision;
    }

    doMovement(gameObject) {
        if (gameObject.vecX != 0 || gameObject.vecY != 0) {
            if (this.collision == true) {
                let newX = gameObject.x + gameObject.vecX * (gameObject.speed ? gameObject.speed : 1);
                let newY = gameObject.y + gameObject.vecY * (gameObject.speed ? gameObject.speed : 1);

                if(gameObject.radius !== undefined) {
                    if( newX + gameObject.radius > canvas.width || newX - gameObject.radius < 0) {
                        newX = gameObject.x;
                    }
                    if( newY + gameObject.radius > canvas.height || newY - gameObject.radius < 0) {
                        newY = gameObject.y;
                    }
                }

                gameObject.x = newX;
                gameObject.y = newY;
            }
        }
    }
}

export default Movement;