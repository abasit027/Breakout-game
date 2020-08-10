import Game from './classes/Game.js';

/** @type { Game } */
let game;

/** @param {string} id  */
const newGame = id => {
	document.getElementById(id).style.visibility = 'hidden';
	document.body.style.cursor = 'none';

	game = new Game();
};

document.getElementById('play').addEventListener('click', () => newGame('start'));
document.getElementById('newGame').addEventListener('click', () => newGame('over'));
