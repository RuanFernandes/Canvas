import GameObjects from "../classes/GameObjects.js";
import Keys from "../classes/Keys.js";
import Player from "../classes/Player.js";
import * as events from './EventManager.js';

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const FPSCounter = document.getElementById('FPSCounter');
const GObjects = new GameObjects();
let fps, framesCount = 0;


// Add main components to the game
GObjects.add({ name: 'keys', instance: new Keys() });
GObjects.add({ name: 'player', instance: new Player(100, 100, 'Player', 'red') });

// GameLoop, Runs every tick
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    framesCount++;
    GObjects.update();
    GObjects.render();

    requestAnimationFrame(update);
}

// Event Listeners
window.addEventListener('keydown', e => events.onKeyDown(e));
window.addEventListener('keyup', e => events.onKeyUp(e));
canvas.addEventListener('mousedown', e => events.onMouseDown(e));
canvas.addEventListener('mouseup', e => events.onMouseUp(e));

// Render created game Objects and Initialize the GameLoop
GObjects.render();
update();

// Counts Frames per Second
setInterval(() => {
    fps = framesCount;
    FPSCounter.innerHTML = 'FPS:' + fps;
    framesCount = 0;
}, 1000);

// Export stuff so other scripts has access to them
export { canvas, ctx, fps, GObjects };
