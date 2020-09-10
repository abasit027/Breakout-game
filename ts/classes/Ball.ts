export default class Ball {
	private _r: number;
	get r(): number {
		return this._r;
	}

	private _x: number;
	public set x(v: number) {
		this._x = v;
	}

	private _y: number;
	public set y(v: number) {
		this._y = v;
	}

	private _dx: number;
	public get dx(): number {
		return this._dx;
	}
	public set dx(v: number) {
		this._dx = v;
	}

	private _dy: number;
	public get dy(): number {
		return this._dy;
	}
	public set dy(v: number) {
		this._dy = v;
	}

	private _color: string;

	public constructor(r: number, x: number, y: number, dx: number, dy: number, color: string) {
		this._r = r;
		this._x = x;
		this._y = y;
		this._dx = dx;
		this._dy = dy;
		this._color = color;
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.arc(this._x, this._y, this._r, 0, 2 * Math.PI);
		ctx.fillStyle = this._color;
		ctx.fill();
	}
}
