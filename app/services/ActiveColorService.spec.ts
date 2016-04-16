import { ActiveColorService } from './ActiveColorService';
import { Subscription } from 'rxjs/Subscription';
import { Color } from '../models/Color';

describe( 'ActiveColorService', () => {

	describe(':: constructor()', () => {
		let color: Color;
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(234,123,12)');
		});

		it('- should have a default color', () => {
			service = new ActiveColorService();
			expect(service.activeColor.red).toEqual(0);
			expect(service.activeColor.green).toEqual(0);
			expect(service.activeColor.blue).toEqual(0);
		});

		it('- should accept a string constructor', () => {
			service = new ActiveColorService(color.rgbString);
			expect(service.activeColor.red).toBe(234);
			expect(service.activeColor.green).toBe(123);
			expect(service.activeColor.blue).toBe(12);
		});

		it('- should accept a Color constructor', () => {
			service = new ActiveColorService(color);
			expect(service.activeColor.red).toBe(234);
			expect(service.activeColor.green).toBe(123);
			expect(service.activeColor.blue).toBe(12);
		});

	});

	describe(':: activeColor',() => {
		let color: Color;
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(234,123,12)');
			service = new ActiveColorService(color);
		});

		it('- should get the activeColor', () => {
			expect(service.activeColor).toEqual(color);
		});

	});


	describe(':: setActiveColor()', () => {
		let color: Color;
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(234,123,12)');
			service = new ActiveColorService();

			// set activeColor
			service.setActiveColor(color);
		});

		it('- should set the activeColor', () => {
			expect(service.activeColor).toBe(color);
		});
	});




	describe(':: activeColor$', () => {
		let color: Color;
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(234,123,12)');
			service = new ActiveColorService();
		});

		it('- should return the activeColor', () => {
			service.activeColor$.subscribe((result) => {
				expect(result).toBe(color);
			});

			service.setActiveColor(color);
		});

	});



});
