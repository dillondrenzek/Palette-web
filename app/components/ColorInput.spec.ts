import { ColorInput } from './ColorInput';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

describe( 'ColorInput', () => {
	let color: Color;
	let input: ColorInput;
	let service: ActiveColorService;

	describe('=> ActiveColorService', () => {
		let color: Color;
		let input: ColorInput
		let service: ActiveColorService;

		beforeEach(() => {
			service = new ActiveColorService();
			input = new ColorInput(service);
			color = new Color('rgb(234,123,12)');

			// set activeColor
			service.setActiveColor(color);
		});

		it('- should have a color property equal to the activeColor', () => {


			expect(input.color).toBe(service.activeColor);
			expect(input.color).toBe(color);
		});

		it('- should change the activeColor on submit', () => {
			service.setActiveColor(color);
		});
	});
});
