import { ColorInput } from './ColorInput';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

describe( 'ColorInput', () => {

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
});
