import {ActiveColorController} from './ActiveColorController';
import {ActiveColorService} from '../../services/ActiveColorService';
import {Color} from '../../models/Color';

describe('ActiveColorController', () => {

	describe(':: getActiveColor()', () => {

		let color: Color;
		let service: ActiveColorService;
		let controller: ActiveColorController;

		beforeAll(() => {
			color = new Color('rgb(123,234,34)');
			service = new ActiveColorService();
			controller = new ActiveColorController(service);

			service.setActiveColor(color);
		});

		it('- returns a Color', () => {
			var color:Color = controller.getActiveColor();
			expect(color instanceof Color).toBe(true);
		});

		it('- returns the activeColor', () => {
			expect(controller.getActiveColor()).toEqual(color);
		});
	});
});
