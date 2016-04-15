import { ColorOutput } from './ColorOutput';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

describe( 'ColorOutput', () => {
	let color: Color;
	let output: ColorOutput;
	let service: ActiveColorService;

	beforeEach(() => {
		service = new ActiveColorService();
		output = new ColorOutput(service);
		color = new Color('rgb(234,123,12)');
	});

	it('displays the activeColor from ActiveColorService', () => {
		// expect(output.color).toEqual(service.activeColor);
	});

});
