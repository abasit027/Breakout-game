export default class Ball {
	/** @type {number} */
	r;
	/** @type {number} */
	x;
	/** @type {number} */
	y;
	/** @type {number} */
	dx;
	/** @type {number} */
	dy;
	/** @type {string} */
	color;

	/**
	 * @param  {number} r
	 * @param  {number} x
	 * @param  {number} y
	 * @param  {number} dx
	 * @param  {number} dy
	 * @param  {string} color
	 */
	constructor(r, x, y, dx, dy, color) {
		this.r = r;
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.color = color;
	}

	/** @param { CanvasRenderingContext2D } ctx */
	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}
