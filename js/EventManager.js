import { canvas, GObjects } from "./game.js";

function onKeyDown(event) {
    const Keys = GObjects.findObjectByName('keys').instance;
    Keys.pressed(event.key);
    
}

function onKeyUp(event) {
    const Keys = GObjects.findObjectByName('keys').instance;
    Keys.released(event.key);
}

function onMouseDown(event) {
    const Keys = GObjects.findObjectByName('keys').instance;
    Keys.pressed('mouse1');

    const contextClickX = Math.floor(event.clientX - ((window.innerWidth - canvas.width) / 2));
    const contextClickY = Math.floor(event.clientY - ((window.innerHeight - canvas.height) / 2));

    const player = GObjects.findObjectByName('player').instance;
    player.shoot(contextClickX, contextClickY);
}

function onMouseUp(event) {
    const Keys = GObjects.findObjectByName('keys').instance;
    Keys.released('mouse1');
}

export { onKeyDown, onKeyUp, onMouseDown, onMouseUp };
