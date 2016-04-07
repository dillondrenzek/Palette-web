import { Color } from './Color';

declare var xit: any;
declare var xdescribe: any;
declare var describe: any;
declare var beforeEach: any;
declare var it: any;
declare var expect: any;

describe('Color Model', () => {
	let validColor: Color;
	let invalidColor: Color;

	beforeEach(() => {
		validColor = new Color('rgb(0,0,0)');
		invalidColor = new Color('(0,0,0)');
	});

	describe(':: isValid()', () => {
		it('- should return a boolean value', () => {
			expect(typeof validColor.isValid()).toEqual('boolean');
		});

		it('- should return true for a valid Color', () => {
			expect(validColor.isValid()).toBe(true);
		});

		it('- should return false for an invalid Color', () => {
			expect(invalidColor.isValid()).toBe(false);
		});
	});



	describe(':: rgbValue()', () => {
		it('- should return a string', () => {
			expect(typeof validColor.rgbValue()).toEqual('string');
		});
		it('- should return a valid RGB string', () => {
			var ret:any = validColor.rgbValue();
			expect(Color.isRGB(ret)).toBe(true);
		});
	});



	describe(':: hexValue()', () => {
		it('- should return a string', () => {
			expect(typeof validColor.hexValue()).toEqual('string');
		});

		it('- should return a valid hex string', () => {
			var ret:any = validColor.hexValue();
			expect(Color.isHex(ret)).toBe(true);
		});
	});



	describe(':: hslValue()', () => {
		it('- should return a string', () => {
			expect(typeof validColor.hslValue()).toEqual('string');
		});
		it('- should return a valid HSL string', () => {
			var ret:any = validColor.hslValue();
			expect(Color.isHSL(ret)).toBe(true);
		});
	});



	describe(':: red()', () => {
		it('- should return a number', () => {
			expect(typeof validColor.red()).toEqual('number');
		});

		it('- should return a valid RGB value', () => {
			var ret:any = validColor.red();
			var newRGBString: string = 'rgb('+ret+',0,0)';
			expect(Color.isRGB(newRGBString)).toBe(true);
		});

		it('- should return the correct value', () => {
			validColor = new Color('rgb(35,70,105)');
			var ret:any = validColor.red();
			expect(ret).toEqual(35);
		});
	});



	describe(':: green()', () => {
		it('- should return a number', () => {
			expect(typeof validColor.green()).toEqual('number');
		});

		it('- should return a valid RGB value', () => {
			var ret:any = validColor.green();
			var newRGBString: string = 'rgb(0,'+ret+',0)';
			expect(Color.isRGB(newRGBString)).toBe(true);
		});

		it('- should return the correct value', () => {
			validColor = new Color('rgb(35,70,105)');
			var ret:any = validColor.green();
			expect(ret).toEqual(70);
		});
	});



	describe(':: blue()', () => {
		it('- should return a number', () => {
			expect(typeof validColor.blue()).toEqual('number');
		});

		it('- should return a valid RGB value', () => {
			var ret:any = validColor.blue();
			var newRGBString: string = 'rgb(0,0,'+ret+')';
			expect(Color.isRGB(newRGBString)).toBe(true);
		});

		it('- should return the correct value', () => {
			validColor = new Color('rgb(35,70,105)');
			var ret:any = validColor.blue();
			expect(ret).toEqual(105);
		});
	});



	describe(':: redHex()', () => {
		xit('- should return a string', () => {
			expect(typeof validColor.redHex()).toEqual('string');
		});
		xit('- should return a value with hex characters');
		xit('- should return 2 characters');
		xit('- should return a value greater or equal to 00');
		xit('- should return a value less than or equal to FF');
	});



	describe(':: greenHex()', () => {
		xit('- should return a string', () => {
			expect(typeof validColor.greenHex()).toEqual('string');
		});
		xit('- should return a value with hex characters');
		xit('- should return 2 characters');
		xit('- should return a value greater or equal to 00');
		xit('- should return a value less than or equal to FF');
	});



	describe(':: blueHex()', () => {
		xit('- should return a string', () => {
			expect(typeof validColor.blueHex()).toEqual('string');
		});
		xit('- should return a value with hex characters');
		xit('- should return 2 characters');
		xit('- should return a value greater or equal to 00');
		xit('- should return a value less than or equal to FF');
	});



	describe(':: hue()', () => {
		xit('- should return a string', () => {
			expect(typeof validColor.hue()).toEqual('string');
		});
		xit('- should return a value greater than or equal to 0', () => {});
		xit('- should return a value less than or equal to 360', () => {});
	});



	describe(':: saturation()', () => {
		xit('- should return a string', () => {
			expect(typeof validColor.saturation()).toEqual('string');
		});
		xit('- should return a value greater than or equal to 0', () => {});
		xit('- should return a value less than or equal to 100', () => {});
	});



	describe(':: lightness()', () => {
		xit('- should return a string', () => {
			expect(typeof validColor.lightness()).toEqual('string');
		});
		xit('- should return a value greater than or equal to 0', () => {});
		xit('- should return a value less than or equal to 100', () => {});
	});
});





describe('Color Validation', () => {
	let color: Color;

	beforeEach(() => {
		color = new Color('#345789');
	});

	describe(':: isHex', () => {

		it('- returns a boolean', () => {
			expect(typeof Color.isHex('')).toEqual('boolean');
		});

		it('- should accept 6-digit hex values with a leading hashtag', () => {
			expect(Color.isHex('#345789')).toBe(true);
			expect(Color.isHex('345789#')).toBe(false);
			expect(Color.isHex('345a#bc')).toBe(false);
		});

		it('- should accept lowercase hex values', () => {
			expect(Color.isHex('#abcdef')).toBe(true);
		});
		it('- should accept uppercase hex values', () => {
			expect(Color.isHex('#ABCDEF')).toBe(true);
			expect(Color.isHex('#ABC')).toBe(true);
		});

		it('- should accept a mix of lowercase and uppercase hex values', () => {
			expect(Color.isHex('#aBcDeF')).toBe(true);
		});

		it('- should accept 6-digit hex values without a leading hashtag', () => {
			expect(Color.isHex('345789')).toBe(true);
		});

		it('- should reject numbers with non-hex values', () => {
			expect(Color.isHex('#34578x')).toBe(false);
			expect(Color.isHex('m4578x')).toBe(false);
			expect(Color.isHex('7em')).toBe(false);
			expect(Color.isHex('78x')).toBe(false);
		});

		it('- should accept 3-digit hex values with a leading hashtag', () => {
			expect(Color.isHex('#1ce')).toBe(true);
		});

		it('- should accept 3-digit hex values without a leading hashtag', () => {
			expect(Color.isHex('1ce')).toBe(true);
		});

		it('- should reject any number of digits other than 3 or 6', () => {
			expect(Color.isHex('1')).toBe(false);
			expect(Color.isHex('1c')).toBe(false);
			expect(Color.isHex('1c425')).toBe(false);
		});
	});


	describe(':: isColorName', () => {
		it('- returns a boolean', () => {
			expect(typeof Color.isColorName('')).toEqual('boolean');
		});

		it('- should accept a certain list of names', () => {
			expect(Color.isColorName('red')).toBe(true);
			expect(Color.isColorName('orange')).toBe(true);
			expect(Color.isColorName('yellow')).toBe(true);
			expect(Color.isColorName('green')).toBe(true);
			expect(Color.isColorName('blue')).toBe(true);
			expect(Color.isColorName('purple')).toBe(true);
			expect(Color.isColorName('white')).toBe(true);
			expect(Color.isColorName('black')).toBe(true);
		});

		it('- should not accept compound names', () => {
			expect(Color.isColorName('redorange')).toBe(false);
			expect(Color.isColorName('reallyred')).toBe(false);
			expect(Color.isColorName('green red')).toBe(false);
		});

		it('- should not accept capitalized names', () => {
			expect(Color.isColorName('Red')).toBe(false);
			expect(Color.isColorName('green')).toBe(true);
		});

	});


	describe(':: isRGB', () => {

		it('- returns a boolean', () => {
			expect(typeof Color.isRGB('')).toEqual('boolean');
		});

		it('- should accept values between 0 and 255', () => {
			expect(Color.isRGB('rgb(0,0,0)')).toBe(true);
			expect(Color.isRGB('rgb(12,34,54)')).toBe(true);
			expect(Color.isRGB('rgb(56,78,89)')).toBe(true);
			expect(Color.isRGB('rgb(255,255,255)')).toBe(true);
			expect(Color.isRGB('rgb(123,234,345)')).toBe(false);
			expect(Color.isRGB('rgb(-12,-234,-1)')).toBe(false);
		});

		it('- should accept exactly 3 values', () => {
			expect(Color.isRGB('rgb(56,78,89)')).toBe(true);
			expect(Color.isRGB('rgb(,255,255)')).toBe(false);
			expect(Color.isRGB('rgb(123,)')).toBe(false);
			expect(Color.isRGB('rgb(,,)')).toBe(false);
		});

		it('- should reject values that don\'t contain open and close parenthesis', () => {
			expect(Color.isRGB('rgb(25,25,25')).toBe(false);
			expect(Color.isRGB('rgb25,25,25')).toBe(false);
			expect(Color.isRGB('rgb25,25,25)')).toBe(false);
			expect(Color.isRGB('rgb(25,25,25)')).toBe(true);
		});

		it('- should accept values with spaces', () => {
			expect(Color.isRGB('rgb(0, 0, 0)')).toBe(true);
			expect(Color.isRGB('rgb(0 ,0 ,0)')).toBe(true);
			expect(Color.isRGB('rgb(0,0 ,0)')).toBe(true);
			expect(Color.isRGB('rgb(0, 0,0 )')).toBe(true);
		});

		it('- should reject values that don\'t start with \'rgb\'', () => {
			expect(Color.isRGB('rbg(255,255,255)')).toBe(false);
		});
	});



	describe(':: isHSL', () => {

		it('- returns a boolean', () => {
			expect(typeof Color.isHSL('')).toEqual('boolean');
		});

		it('- should accept values that begin with hsl', () => {
			expect(Color.isHSL('hsl(0,0,0)')).toBe(true);
			expect(Color.isHSL('shl(0,0,0)')).toBe(false);
			expect(Color.isHSL('(0,0,0)')).toBe(false);
			expect(Color.isHSL('(0,0,0)hsl')).toBe(false);
		});

		it('- should reject negative values', () => {
			expect(Color.isHSL('hsl(-1,-21,-31%)')).toBe(false);
		});

		it('- should accept Hue values between 0 and 360', () => {
			expect(Color.isHSL('hsl(0,0,0)')).toBe(true);
			expect(Color.isHSL('hsl(360,0,0)')).toBe(true);
			expect(Color.isHSL('hsl(361,0,0)')).toBe(false);
		});


		it('- should accept values with a Saturation value between 0 and 100', () => {
			expect(Color.isHSL('hsl(0,0,0)')).toBe(true);
			expect(Color.isHSL('hsl(0,100,0)')).toBe(true);
			expect(Color.isHSL('hsl(0,101,0)')).toBe(false);
		});

		it('- should accept values with a Lightness value between 0 and 100', () => {
			expect(Color.isHSL('hsl(0,0,0)')).toBe(true);
			expect(Color.isHSL('hsl(0,0,100)')).toBe(true);
			expect(Color.isHSL('hsl(0,0,101)')).toBe(false);
		});


		it('- should accept only 3 values', () => {
			expect(Color.isHSL('hsl(0)')).toBe(false);
			expect(Color.isHSL('hsl(0,0)')).toBe(false);
			expect(Color.isHSL('hsl(0,0,)')).toBe(false);
			expect(Color.isHSL('hsl(0,0,0,)')).toBe(false);
			expect(Color.isHSL('hsl(0,0,0,0)')).toBe(false);
		});

		it('- should accept 3 values enclosed in parenthesis', () => {
			expect(Color.isHSL('hsl(0,0,0)')).toBe(true);
			expect(Color.isHSL('hsl0,0,0)')).toBe(false);
			expect(Color.isHSL('hsl 0,0,0')).toBe(false);
			expect(Color.isHSL('hsl(0,0,0')).toBe(false);
		});

		it('- should accept values with spaces', () => {
			expect(Color.isHSL('hsl(0, 0, 0)')).toBe(true);
			expect(Color.isHSL('hsl(0 ,0 ,0)')).toBe(true);
			expect(Color.isHSL('hsl(0,0 ,0)')).toBe(true);
			expect(Color.isHSL('hsl(0, 0,0 )')).toBe(true);
		});

		it('- should accept percentage values', () => {
			expect(Color.isHSL('hsl(0%,0%,0%)')).toBe(true);
			expect(Color.isHSL('hsl(100%,50%,1%)')).toBe(true);
			expect(Color.isHSL('hsl(360%,0%,0%)')).toBe(false);
			expect(Color.isHSL('hsl(360,0%,0%)')).toBe(true);
			expect(Color.isHSL('hsl(0%,101%,0%)')).toBe(false);
			expect(Color.isHSL('hsl(0%,99,0%)')).toBe(true);
			expect(Color.isHSL('hsl(0%,0%,-31%)')).toBe(false);
			expect(Color.isHSL('hsl(0%,0%,31)')).toBe(true);
		});

	});



	// Color isValid is a test for strings which a Color can be initialized
	describe(':: isValid', () => {

		it('- returns a boolean', () => {
			expect(typeof Color.isValid('')).toEqual('boolean');
		});

		it('- should accept hex values', () => {
			expect(Color.isValid('#1ce')).toBe(true);
			expect(Color.isValid('#1ce1ce')).toBe(true);
			expect(Color.isValid('1ce')).toBe(true);
			expect(Color.isValid('1ce1ce')).toBe(true);
		});


		it('- should accept color names', () => {
			expect(Color.isValid('#1ce')).toBe(true);
			expect(Color.isValid('#1ce1ce')).toBe(true);
			expect(Color.isValid('1ce')).toBe(true);
			expect(Color.isValid('1ce1ce')).toBe(true);
		});

		it('- should accept rgb values', () => {
			expect(Color.isValid('rgb(0,0,0)')).toBe(true);
			expect(Color.isValid('rgb(1,1,1)')).toBe(true);
			expect(Color.isValid('rgb(12,12,12)')).toBe(true);
			expect(Color.isValid('rgb(123,123,123)')).toBe(true);
		});

		it('- should accept hsl values', () => {
			expect(Color.isValid('hsl(0, 0, 0)')).toBe(true);
			expect(Color.isValid('hsl(360, 100, 100)')).toBe(true);
			expect(Color.isValid('hsl(360, 100%, 100)')).toBe(true);
			expect(Color.isValid('hsl(360, 100%, 100%)')).toBe(true);
			expect(Color.isValid('hsl(360, 100, 100%)')).toBe(true);
			expect(Color.isValid('hsl(100%, 100%, 100%)')).toBe(true);
		});


	});

});
