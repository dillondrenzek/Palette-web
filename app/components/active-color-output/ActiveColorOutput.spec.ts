import { ActiveColorOutput } from './ActiveColorOutput';
import { ActiveColorService } from '../services/ActiveColorService';
import { Color } from '../models/Color';

describe( 'ActiveColorOutput', () => {

	describe('=> ActiveColorService', () => {
		let color: Color;
		let color2: Color;
		let output: ActiveColorOutput
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(234,123,12)');
			color2 = new Color('rgb(23,123,234)');
			service = new ActiveColorService();
			output = new ActiveColorOutput(service);

			service.setActiveColor(color);
		});

		it('- should have a color property equal to the activeColor', () => {
			expect(output.color).toBe(service.activeColor);
		});


		it('- should change its color when the activeColor changes', () => {
			expect(output.color).toBe(service.activeColor);

			// force service change
			service.setActiveColor(color2);

			expect(output.color).toBe(service.activeColor);
		});

	});

});
