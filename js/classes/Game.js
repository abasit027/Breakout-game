import Ball from './Ball.js';
import Paddle from './Paddle.js';
import Brick from './Brick.js';

import createBricks from '../utils/create.js';

class Game {
	canvas = document.querySelector('canvas');
	/** @type { CanvasRenderingContext2D } */
	ctx;

	/** @type { number } */
	height;

	/** @type { number } */
	width;

	/** @type { Ball } */
	ball;
	/** @type { Paddle } */
	paddle;

	/** @type {Brick[]} */
	bricks = createBricks();

	constructor() {
		this.ctx = this.canvas.getContext('2d');

		this.height = this.canvas.height;
		this.width = this.canvas.width;

		this.ball = new Ball(30, this.width / 2, this.height - 80.5, -9, -7, '#dc143c');
		this.paddle = new Paddle(160, 30, this.width / 2 - 60, this.height - 50, 0, 12, '#41d44d');

		this.play();

		document.body.addEventListener('keydown', this.keyDown);
		document.body.addEventListener('keyup', this.keyUp);
	}

	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	draw() {
		this.ball.draw(this.ctx);

		this.paddle.draw(this.ctx);

		this.bricks.forEach(brick => brick.darw(this.ctx));
	}

	/**
	 * @param { KeyboardEvent } e
	 */
	keyDown = e => {
		if (e.key === 'ArrowRight') this.paddle.dx = this.paddle.s;

		if (e.key === 'ArrowLeft') this.paddle.dx = -this.paddle.s;
	};

	/**
	 * @param { KeyboardEvent } e
	 */
	keyUp = e => {
		if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') this.paddle.dx = 0;
	};

	newPos() {
		this.ball.x += this.ball.dx;
		this.ball.y += this.ball.dy;

		this.paddle.x += this.paddle.dx;
	}

	detectColllision() {
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

	play = () => {
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

	/** @param { string } result */
	over(result) {
		document.getElementById('result').innerText = result;

		document.getElementById('over').style.visibility = 'visible';
		document.body.style.cursor = 'default';
	}
}

export default Game;
