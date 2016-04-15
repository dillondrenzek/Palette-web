import { ActiveColorService } from './ActiveColorService';
import { Color } from '../models/Color';

describe( 'ActiveColorService', () => {

	describe(':: getActiveColor()', () => {
		let color: Color;
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(0,0,0)');
			service = new ActiveColorService();
		});

		it('- should return the activeColor', () => {
			var newColor: Color = new Color('rgb(12,34,56)');
			// expect(service.getActiveColor()).toEqual(service.activeColor);
			// service.activeColor = newColor;
			expect(service.getActiveColor()).toEqual(newColor);
		});

	});

	describe(':: setActiveColor()', () => {
		let color: Color;
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(0,0,0)');
			service = new ActiveColorService();
		});

		it('- should set an active color', () => {
			service.setActiveColor(color);
			// expect(service.activeColor).toEqual(color);
			// var newColor: Color = new Color('rgb(12,23,34)');
			// service.setActiveColor(newColor);
			// expect(service.activeColor).toEqual(newColor);
		});
	});

});
