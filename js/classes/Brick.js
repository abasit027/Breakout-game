export default class Brick {
	/** @type {number} */
	w;
	/** @type {number} */
	h;
	/** @type {number} */
	x;
	/** @type {number} */
	y;
	/** @type {string} */
	color;

	/**
	 * @param  {number} w
	 * @param  {number} h
	 * @param  {number} x
	 * @param  {number} y
	 * @param  {string} color
	 */
	constructor(w, h, x, y, color) {
		this.w = w;
		this.h = h;
		this.x = x;
		this.y = y;
		this.color = color;
	}

	/** @param { CanvasRenderingContext2D } ctx */
	darw(ctx) {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.w, this.h);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}
