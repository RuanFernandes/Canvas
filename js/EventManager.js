import { GObjects } from "./game.js";

function onKeyDown(event) {
    const Keys = GObjects.findObjectByName('keys').instance;
    Keys.pressed(event.key);
}

function onKeyUp(event) {
    const Keys = GObjects.findObjectByName('keys').instance;
    Keys.released(event.key);
}

function onClick(event) {

}

export { onKeyDown, onKeyUp, onClick };
