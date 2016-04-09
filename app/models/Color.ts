export class Color {

	red: number;
	green: number;
	blue: number;

	hue: number;
	saturation: number;
	lightness: number;

	constructor(private _colorString: string){
		console.info(_colorString);
		this.parseColor(_colorString);
	}

	parseColor(color: string){

		var rgbFormatMatch: RegExp = /rgb\(([0-9]{1,3}\,(\ )?){2}([0-9]{1,3}(\ )?){1}\)/;
		var hslFormatMatch: RegExp = /hsl\(([0-9]{1,3}\,(\ )?){2}([0-9]{1,3}(\ )?){1}\)/;

		if (color.match(rgbFormatMatch)) {
			this.parseRGB(color);
		} else if (color.match(hslFormatMatch)) {
			this.parseHSL(color);
		}
	}

	parseRGB(color:string) {
		color = color.replace('rgb', '').replace('(','').replace(')','');
		var valueStrings: string[] = color.split(',');
		var values: number[] = [];

		valueStrings.forEach((str, i) => {
			console.log(parseInt(str));
			values.push(parseInt(str));
		});

		this.setRed(values[0]);
		this.setGreen(values[1]);
		this.setBlue(values[2]);
	}

	setRed(r: number) {
		this.red = r;
	}

	setGreen(g: number) {
		this.green = g;
	}

	setBlue(b: number) {
		this.blue = b;
	}

	parseHSL(color:string) {
		color = color.replace('hsl', '').replace('(','').replace(')','');
		var valueStrings: string[] = color.split(',');
		var values: number[] = [];

		valueStrings.forEach((str, i) => {
			console.log(parseInt(str));
			values.push(parseInt(str));
		});

		this.setHue(values[0]);
		this.setSaturation(values[1]);
		this.setLightness(values[2]);
	}

	setHue(h: number) {
		this.hue = h;
	}

	setSaturation(s: number) {
		this.saturation = s;
	}

	setLightness(l: number) {
		this.lightness = l;
	}

}
