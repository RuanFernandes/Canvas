class Movement {
    constructor(collision) {
        this.collision = collision == undefined ? false : collision;
    }

    doMovement(gameObject) {
        if (gameObject.vecX != 0 || gameObject.vecY != 0) {
            if (this.collision != true) {
                const newX = gameObject.x + gameObject.vecX * (gameObject.speed ? gameObject.speed : 1);
                const newY = gameObject.y + gameObject.vecY * (gameObject.speed ? gameObject.speed : 1);
                gameObject.x = newX;
                gameObject.y = newY;
            }
        }
    }
}

export default Movement;