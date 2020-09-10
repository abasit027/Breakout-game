import Brick from '../classes/Brick';

const createBricks = (): Array<Brick> => {
	const bricks: Array<Brick> = [];
	const canvas: HTMLCanvasElement | null = document.querySelector('canvas');
	const nB: number = Math.floor((canvas.width - 20) / 140);

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < nB; j++) {
			const brick: Brick = new Brick(120, 30, 20 + j * 140, 20 + i * 50, '#4169e1');

			bricks.push(brick);
		}
	}

	return bricks;
};

export default createBricks;
