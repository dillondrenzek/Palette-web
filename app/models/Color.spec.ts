import { Color } from './Color';

describe('Color', () => {

	describe(':: RGB property accessors', () => {

		let rgbColor: Color;

		beforeEach(() => {
			rgbColor = new Color('rgb(12,34,56)');
		});

		it('- reports the correct red color', () => {
			expect(rgbColor.red).toEqual(12);
		});

		it('- reports the correct green color', () => {
			expect(rgbColor.green).toEqual(34);
		});

		it('- reports the correct blue color', () => {
			expect(rgbColor.blue).toEqual(56);
		});
	});


	describe(':: HSL property accessors', () => {

		let hslColor: Color;

		beforeEach(() => {
			hslColor = new Color('hsl(360,100,100)');
		});

		it('- reports the correct hue value', () => {
			expect(hslColor.hue).toEqual(360);
		});

		it('- reports the correct saturation value', () => {
			expect(hslColor.saturation).toEqual(100);
		});

		it('- reports the correct lightness value', () => {
			expect(hslColor.lightness).toEqual(100);
		});
	});

	describe(':: Value Validation', () => {
		describe(':: RGB', () => {
			let lesscolor: Color;
			let greatercolor: Color;
			beforeAll(() => {
				lesscolor = new Color('rgb(-12,-1,-123)');
				greatercolor = new Color('rgb(260,260,260)');
			});

			it('- should make init values lower than 0 equal to 0', () => {
				expect(lesscolor.red).toEqual(0);
				expect(lesscolor.green).toEqual(0);
				expect(lesscolor.blue).toEqual(0);
			});
			it('- should make init values greater than 255 equal to 255', () => {
				console.log('260: ', greatercolor.rgbString);
				expect(greatercolor.red).toEqual(255);
				expect(greatercolor.green).toEqual(255);
				expect(greatercolor.blue).toEqual(255);
			});
		});

		describe(':: HSL', () => {
			let lesscolor: Color;
			let greatercolor: Color;
			beforeAll(() => {
				lesscolor = new Color('hsl(-12,-1,-123)');
				greatercolor = new Color('hsl(362,102,155)');
			});
			it('- should make init values lower than 0 equal to 0', () => {
				expect(lesscolor.hue).toEqual(0);
				expect(lesscolor.saturation).toEqual(0);
				expect(lesscolor.lightness).toEqual(0);
			});
			it('- should make init values greater than their maximums equal to their maximums', () => {
				expect(greatercolor.hue).toEqual(360);
				expect(greatercolor.saturation).toEqual(100);
				expect(greatercolor.lightness).toEqual(100);
			});
		});
	});



	describe(':: RGB to HSL conversion', () => {

		let rgbColor: Color;
		let hslColor: Color;

		beforeEach(() => {
			rgbColor = new Color('rgb(178,59,35)');
			hslColor = new Color('hsl(10,67,42)');
		});

		it('- outputs the correct hue value', () => {
			expect(rgbColor.hue).toEqual(10);
		});
		it('- outputs the correct saturation value', () => {
			expect(rgbColor.saturation).toEqual(67);
		});
		it('- outputs the correct lightness value', () => {
			expect(rgbColor.lightness).toEqual(42);
		});

	});

	describe(':: HSL to RGB conversion', () => {

		let rgbColor: Color;
		let hslColor: Color;

		beforeEach(() => {
			rgbColor = new Color('rgb(178,59,35)');
			hslColor = new Color('hsl(10,67,42)');
		});

		it('- outputs the correct red value', () => {
			expect(hslColor.red).toEqual(179); // rounding?
		});
		it('- outputs the correct green value', () => {
			expect(hslColor.green).toEqual(59);
		});
		it('- outputs the correct blue value', () => {
			expect(hslColor.blue).toEqual(35);
		});

	});
});
