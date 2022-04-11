class Keys {
    constructor(){
        this.keysPressed = [];
    }

    pressed(key){
        this.keysPressed.push(key);
    }

    released(key){
        this.keysPressed = this.keysPressed.filter(k => k !== key);
    }

    isPressed(key){
        return this.keysPressed.includes(key);
    }

    isReleased(key){
        return !this.isPressed(key);
    }
}

export default Keys;