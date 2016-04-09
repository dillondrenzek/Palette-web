import { ActiveColorService } from './ActiveColorService';
import { Color } from '../models/Color';
declare var describe: any;
declare var beforeEach: any;
declare var it: any;
declare var expect: any;

describe('ActiveColorService', () => {
	let service: ActiveColorService;

	beforeEach(() => {
		service = new ActiveColorService();
	});

	describe(':: getActiveColor', () => {
		it('- should return a Color object', () => {
			expect(typeof service.getActiveColor()).toEqual('string');
		});

		it('- should return a valid color', () => {
			var col: string = service.getActiveColor();
			expect(Color.isValid(col)).toBe(true);
		});
	});

	describe(':: setActiveColor', () => {
		it('- should set the activeColor', () => {
			var submitColor = '#b23b23';

			service.setActiveColor(submitColor);

			expect(service.activeColor).toEqual(submitColor);
		});

		it('- should not set an invalid activeColor', () => {
			var preSubmitActiveColor = service.activeColor;
			var invalidColor = ' ';

			expect(service.setActiveColor(invalidColor)).toThrow();
			expect(service.activeColor).toEqual(preSubmitActiveColor);
		});
	});

});
