import { ColorOutput } from './ColorOutput';
import { ActiveColorService } from '../services/ActiveColorService';
import { Color } from '../models/Color';

describe( 'ColorOutput', () => {

	describe('=> ActiveColorService', () => {
		let color: Color;
		let output: ColorOutput
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(0,0,0)');
			service = new ActiveColorService();
			output = new ColorOutput(service);
		});

		it('- should have a color property equal to the activeColor', () => {
			var newColor: Color = new Color('rgb(234,123,12)');

			service.setActiveColor(newColor);

			expect(output.color).toBe(service.activeColor);
		});

	});

});
