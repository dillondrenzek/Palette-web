import { ColorInput } from './ColorInput';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

describe( 'ColorInput', () => {
	let color: Color;
	let input: ColorInput;
	let service: ActiveColorService;

	beforeEach(() => {
		service = new ActiveColorService();
		input = new ColorInput(service);
		color = new Color('rgb(234,123,12)');
	});

	it('displays the activeColor from ActiveColorService', () => {
		// expect(input.color).toEqual(service.activeColor);
	});

});
