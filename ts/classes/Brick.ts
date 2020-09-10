export default class Brick {
	private _w: number;
	public get w(): number {
		return this._w;
	}

	private _h: number;
	public get h(): number {
		return this._h;
	}

	private _x: number;
	public get x(): number {
		return this._x;
	}

	private _y: number;
	public get y(): number {
		return this._y;
	}

	private _color: string;

	public constructor(w: number, h: number, x: number, y: number, color: string) {
		this._w = w;
		this._h = h;
		this._x = x;
		this._y = y;
		this._color = color;
	}

	public darw(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.rect(this._x, this._y, this._w, this._h);
		ctx.fillStyle = this._color;
		ctx.fill();
	}
}
