import { ActiveColorService } from './ActiveColorService';
import { Subscription } from 'rxjs/Subscription';
import { Color } from '../models/Color';

describe( 'ActiveColorService', () => {



	describe(':: setActiveColor()', () => {
		let color: Color;
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(0,0,0)');
			service = new ActiveColorService();

			// set activeColor
			service.setActiveColor(color);
		});

		it('- should set the activeColor', () => {
			var newColor: Color = new Color('rgb(12,34,56)');
			service.activeColor$.subscribe((result) => {
				expect(result).toBe(newColor);
			});

			service.setActiveColor(newColor);
		});
	});

	xdescribe(':: getActiveColor',() => {});


	describe(':: activeColor$', () => {
		let color: Color;
		let service: ActiveColorService;

		beforeEach(() => {
			color = new Color('rgb(234,123,12)');
			service = new ActiveColorService();

			service.setActiveColor(color);
		});

		it('- should return the activeColor', () => {
			service.activeColor$.subscribe((result) => {
				expect(result).toBe(color);
			});


		});

	});



});
