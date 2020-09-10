export default class Paddle {
	private _w: number;
	get w() {
		return this._w;
	}

	private _h: number;
	private _color: string;

	private _x: number;
	public set x(v: number) {
		this._x = v;
	}

	private _y: number;
	public set y(v: number) {
		this._y = v;
	}

	private _s: number;
	public get s(): number {
		return this._s;
	}

	private _dx: number;
	public get dx(): number {
		return this._dx;
	}
	public set dx(v: number) {
		this._dx = v;
	}

	public constructor(w: number, h: number, x: number, y: number, dx: number, s: number, color: string) {
		this._w = w;
		this._h = h;
		this._x = x;
		this._y = y;
		this._dx = dx;
		this._s = s;
		this._color = color;
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.rect(this._x, this._y, this._w, this._h);
		ctx.fillStyle = this._color;
		ctx.fill();
	}
}
