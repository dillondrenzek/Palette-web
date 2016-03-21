export class Color {

	constructor(public color:string){}

	static isRGB(s: string): boolean {
		var values: string[] = s.replace('rgb', '')
		.replace('(', '')
		.replace(')', '')
		.split(',');

		console.log('---');

		for (var i=0; i<values.length; i++) {
			var v: number = parseInt(values[i]);
			console.log(v);
			if (isNaN(v)) { return false; }
			if (v > 255) { return false; }
			if (v < 0) { return false; }
		}

		console.log('passed');
		console.log(values);

		return (
			s.startsWith('rgb(')
			&& s.endsWith(')')
			&& values.length === 3
		);
	}

	static isHex(s: string): boolean {

		var hexCharacters: RegExp = 	/^#?(?:[0-9a-f]{3}){1,2}$/i;

		return (
			hexCharacters.test(s)
		);
	}

	static isColorName(s: string): boolean {
		var colorNames: RegExp = /(red|orange|yellow|green|blue|purple|white|black)/;
		return colorNames.test(s);
	}

	static isValid(s: string): boolean {

		var valid: boolean = (
			Color.isHex(s)
			|| Color.isColorName(s)
			|| Color.isRGB(s));

		return valid;
	}
}
