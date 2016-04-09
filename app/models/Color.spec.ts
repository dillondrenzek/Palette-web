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
});
