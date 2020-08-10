import Brick from '../classes/Brick.js';

const createBricks = () => {
	const nB = Math.floor((document.querySelector('canvas').width - 20) / 140);

	/** @type { Brick[] }  */
	const bricks = [];

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < nB; j++) {
			const brick = new Brick(120, 30, 20 + j * 140, 20 + i * 50, '#4169e1');

			bricks.push(brick);
		}
	}

	return bricks;
};

export default createBricks;
