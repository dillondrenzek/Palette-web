import { ActiveColorService } from './active-color-service';
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
			expect(typeof service.getActiveColor()).toEqual('object');
		});

		it('- should return a valid color', () => {
			var col: string = service.getActiveColor();
			expect(Color.isValid(col)).toBe(true);
		});
	});

});
