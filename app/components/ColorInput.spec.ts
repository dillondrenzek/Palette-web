import { ColorInput } from './ColorInput';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

describe( 'ColorInput', () => {

	describe(':: output', () => {
		let color: Color;
		let color2: Color;
		let input: ColorInput
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(234,123,12)');
			color2 = new Color('rgb(123, 234, 12)');
			service = new ActiveColorService();
			input = new ColorInput(service);

			// set activeColor
			service.setActiveColor(color);
		});

		it('- output should return a string', () => {
			expect(typeof input.output).toEqual('string');
		});

		it('- if a mode is set, should output correct value', () => {
			input.mode = 'r';
			expect(input.output).toEqual(color.red.toString());

			input.mode = 'g';
			expect(input.output).toEqual(color.green.toString());

			input.mode = 'b';
			expect(input.output).toEqual(color.blue.toString());

			input.mode = 'h';
			expect(input.output).toEqual(color.hue.toString());

			input.mode = 's';
			expect(input.output).toEqual(color.saturation.toString());

			input.mode = 'l';
			expect(input.output).toEqual(color.lightness.toString());
		});
	});

	describe('=> ActiveColorService', () => {
		let color: Color;
		let color2: Color;
		let input: ColorInput
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(234,123,12)');
			color2 = new Color('rgb(123, 234, 12)');
			service = new ActiveColorService();
			input = new ColorInput(service);

			// set activeColor
			service.setActiveColor(color);
		});

		it('- should have a color property equal to the activeColor', () => {
			expect(input.color).toBe(service.activeColor);
			expect(input.color).toBe(color);
		});

		it('- should change its own color on submit', () => {
			input.setColor(color2.rgbString);
			expect(input.color.red).toEqual(color2.red);
			expect(input.color.green).toEqual(color2.green);
			expect(input.color.blue).toEqual(color2.blue);
		});

		it('- should change the activeColor on submit', () => {
			input.setColor(color2.rgbString);
			expect(service.activeColor.red).toEqual(color2.red);
			expect(service.activeColor.green).toEqual(color2.green);
			expect(service.activeColor.blue).toEqual(color2.blue);
		});

		});
	describe(':: mode', () => {
		let color: Color;
		let color2: Color;
		let input: ColorInput
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(234,123,12)');
			color2 = new Color('rgb(123, 234, 12)');
			service = new ActiveColorService();
			input = new ColorInput(service);

			// set activeColor
			service.setActiveColor(color);

			// set input mode
			input.mode = 'r'; // red mode


		});

		it('- if a mode is set, it should correctly affect the activeColor on submit', () => {
			expect(input.output).toEqual(color.red.toString());

			var newValue = 11;
			input.submit(newValue.toString());

			expect(input.output).toEqual(newValue.toString());
		});
	});
});
