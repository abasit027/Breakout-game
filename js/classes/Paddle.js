export default class Paddle {
	/** @type {number} */
	w;
	/** @type {number} */
	h;
	/** @type {number} */
	x;
	/** @type {number} */
	y;
	/** @type {number} */
	dx;
	/** @type {number} */
	s;
	/** @type {string} */
	color;

	/**
	 * @param  {number} w
	 * @param  {number} h
	 * @param  {number} x
	 * @param  {number} y
	 * @param  {number} dx
	 * @param  {number} s
	 * @param  {string} color
	 */
	constructor(w, h, x, y, dx, s, color) {
		this.w = w;
		this.h = h;
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.s = s;
		this.color = color;
	}

	/** @param { CanvasRenderingContext2D } ctx */
	draw(ctx) {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.w, this.h);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}
