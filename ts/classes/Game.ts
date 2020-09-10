import Ball from './Ball';
import Paddle from './Paddle';
import Brick from './Brick';

import createBricks from '../utils/helpers';

export default class Game {
	private canvas = document.querySelector('canvas');
	private ctx: CanvasRenderingContext2D | null = null;
	private height: number = 0;
	private width: number = 0;
	private ball: Ball | null = null;
	private paddle: Paddle | null = null;
	private bricks: Array<Brick> = createBricks();

	constructor() {
		this.ctx = this.canvas.getContext('2d');

		this.height = this.canvas.height;
		this.width = this.canvas.width;

		this.ball = new Ball(30, this.width / 2, this.height - 80.5, -9, -7, '#dc143c');
		this.paddle = new Paddle(160, 10, this.width / 2 - 60, this.height - 50, 0, 12, '#41d44d');

		this.play();

		document.body.addEventListener('keydown', this.keyDown);
		document.body.addEventListener('keyup', this.keyUp);
	}

	private clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	private draw() {
		this.ball.draw(this.ctx);

		this.paddle.draw(this.ctx);

		this.bricks.forEach(brick => brick.darw(this.ctx));
	}

	private keyDown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowRight') this.paddle.dx = this.paddle.s;

		if (e.key === 'ArrowLeft') this.paddle.dx = -this.paddle.s;
	};

	private keyUp = (e: KeyboardEvent) => {
		if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') this.paddle.dx = 0;
	};

	private newPos() {
		this.ball.x += this.ball.dx;
		this.ball.y += this.ball.dy;

		this.paddle.x += this.paddle.dx;
	}

	private detectColllision() {
		/* For Paddle */

		const paddleHitsLeft = this.paddle.x < 0;
		const paddleHitsRight = this.paddle.x + this.paddle.w > this.width;

		if (paddleHitsLeft) this.paddle.x = 0;

		if (paddleHitsRight) this.paddle.x = this.width - this.paddle.w;

		/* For Ball */

		const ballHitsTop = this.ball.y - this.ball.r < 0;
		const ballHitsBottom = this.ball.y + this.ball.r > this.height;
		const ballHitsRight = this.ball.x - this.ball.r < 0;
		const ballHitsLeft = this.ball.x + this.ball.r > this.width;

		const ballHitsPaddle =
			this.ball.y + this.ball.r > this.paddle.y &&
			this.ball.x + this.ball.r > this.paddle.x &&
			this.ball.x - this.ball.r < this.paddle.x + this.paddle.w;

		if (ballHitsRight || ballHitsLeft) this.ball.dx *= -1;

		if (ballHitsTop || ballHitsPaddle) this.ball.dy *= -1;

		for (const brick of this.bricks) {
			const ballHitsBrick =
				this.ball.y - this.ball.r < brick.y &&
				this.ball.x + this.ball.r > brick.x &&
				this.ball.x - this.ball.r < brick.x + brick.w;

			if (ballHitsBrick) {
				this.bricks.splice(this.bricks.indexOf(brick), 1);

				this.ball.dy *= -1;

				break;
			}
		}

		return ballHitsBottom;
	}

	private play = () => {
		this.clear();

		if (this.bricks.length === 0) {
			this.over('You Won ! 🎉🎆');

			return;
		}

		this.draw();

		if (this.detectColllision()) {
			this.over('You Lost! 😢');

			return;
		}

		this.newPos();

		requestAnimationFrame(this.play);
	};

	private over(result: string) {
		document.getElementById('result').innerText = result;

		document.getElementById('over').style.visibility = 'visible';
		document.body.style.cursor = 'default';
	}
}
