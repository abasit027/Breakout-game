import Game from './classes/Game';

let game: Game;

const newGame = (id: string) => {
	document.getElementById(id).style.visibility = 'hidden';
	document.body.style.cursor = 'none';

	game = new Game();
};

document.getElementById('play').addEventListener('click', () => newGame('start'));
document.getElementById('newGame').addEventListener('click', () => newGame('over'));
