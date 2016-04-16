function applyBounds(min: number, val: number, max: number): number {
	if (val < min) {
		return min;
	} else if (val > max) {
		return max;
	} else {
		return val;
	}
}

export class Color {

	constructor(private _colorString: string){
		this.parseColor(_colorString);
	}



	parseColor(color: string){
		var rgbFormatMatch: RegExp = /rgb\(([0-9]{1,3}\,(\ )?){2}([0-9]{1,3}(\ )?){1}\)/;
		var hslFormatMatch: RegExp = /hsl\(([0-9]{1,3}\,(\ )?){2}([0-9]{1,3}(\ )?){1}\)/;

		if (color.match(rgbFormatMatch)) {
			this.parseRGB(color);
		} else if (color.match(hslFormatMatch)) {
			this.parseHSL(color);
		} else {
			this.parseRGB('rgb(0,0,0)');
		}
	}





	// Red, Green, Blue

	parseRGB(color:string) {
		color = color.replace('rgb', '').replace('(','').replace(')','');
		var valueStrings: string[] = color.split(',');
		var values: number[] = new Array();

		valueStrings.forEach((str, i) => {
			values.push(parseInt(str));
		});

		this.red = values[0];
		this.green = values[1];
		this.blue = values[2];
	}


	// Red, Green, Blue

	private _red: number = 0;
	private _green: number = 0;
	private _blue: number = 0;
	private _rgb: number[] = [this._red, this._green, this._blue];

	get red() { return this._red; }
	set red(r: number) {
		this._red = applyBounds(0, r, 255);
		this.updateHSL();
	}

	get green() { return this._green; }
	set green(g: number) {
		this._green = applyBounds(0, g, 255);
		this.updateHSL();
	}

	get blue() { return this._blue; }
	set blue(b: number) {
		this._blue = applyBounds(0, b, 255);
		this.updateHSL();
	}

	get rgbString(): string {
		return 'rgb('+this.red+','+this.green+','+this.blue+')';
	}


	// Hue, Saturation, Lightness

	parseHSL(color:string) {
		color = color.replace('hsl', '').replace('(','').replace(')','');
		var valueStrings: string[] = color.split(',');
		var values: number[] = [];

		valueStrings.forEach((str, i) => {
			values.push(parseInt(str));
		});

		this.hue = values[0];
		this.saturation = values[1];
		this.lightness = values[2];
	}

	// Hue, Saturation, Lightness

	private _hue: number = 0;
	private _saturation: number = 0;
	private _lightness: number = 0;

	get hue() { return this._hue; }
	set hue(h: number) {
		this._hue = applyBounds(0, h, 360);
		this.updateRGB();
	}

	get saturation() { return this._saturation; }
	set saturation(s: number) {
		this._saturation = applyBounds(0, s, 100);
		this.updateRGB();
	}

	get lightness() { return this._lightness; }
	set lightness(l: number) {
		this._lightness = applyBounds(0, l, 100);
		this.updateRGB();
	}

	hslString(): string {
		return 'hsl('+this.hue+','+this.saturation+','+this.lightness+')';
	}





	// Conversion Methods

	updateRGB() {
		var h = this.hue;
		var s = this.saturation / 100;
		var l = this.lightness / 100;

		var c = (1 - Math.abs(2*l - 1)) * s;
		var x = c * (1 - Math.abs((h/60) % 2 - 1));
		var m = l - c/2;

		var arr: number[] = [];
		if (h < 60) {
			arr = [c,x,0];
		} else if ( h < 120 ) {
			arr = [x,c,0];
		} else if ( h < 180 ) {
			arr = [0,c,x];
		} else if ( h < 240 ) {
			arr = [0,c,x];
		} else if ( h < 300 ) {
			arr = [x,0,c];
		} else if ( h < 360 ) {
			arr = [c,0,x];
		}

		this._red = Math.round((arr[0]+m) * 255);
		this._green = Math.round((arr[1]+m) * 255);
		this._blue = Math.round((arr[2]+m) * 255);
	}

	updateHSL() {
		var r = this.red/255;
		var g = this.green/255;
		var b = this.blue/255;

		var cmax = Math.max(r,g,b);
		var cmin = Math.min(r,g,b);
		var d = cmax - cmin;

		// calculate hue
		var h: number;
		if (d === 0) {
			h = 0;
		} else if (cmax === r) {
			var x = (g-b)/d;
			h = x % 6;
		} else if (cmax === g) {
			var x = (b-r)/d;
			h = x + 2;
		} else if (cmax === b) {
			var x = (r-g)/d;
			h = x + 4;
		}

		this._hue = Math.round(60 * h);

		// calculate saturation
		var l = ((cmax + cmin) / 2);
		var s = (d === 0) ? 0 : (d/(1-Math.abs(2*l-1)));

		this._saturation = Math.round(s * 100);

		// calculate lightness
		this._lightness = Math.round(l * 100);
	}


}
