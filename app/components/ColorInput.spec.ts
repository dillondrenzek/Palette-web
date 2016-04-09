import { ColorInput } from './ColorInput';
import { ActiveColorService } from '../services/ActiveColorService';

describe('ColorInput', () => {
	let input: ColorInput;
	let service: ActiveColorService;

	beforeEach(() => {
		service = new ActiveColorService();
		input = new ColorInput(service);
	});

	it('- should have a color property that is equal to the activeColor', () => {
		console.log(service.activeColor);
		expect(input.color).toEqual(service.activeColor);
	});

	it('- should change the active color on submit', () => {
		var preSubmitActiveColor: string = service.activeColor;
		var submitColor: string = '#b23b23';
		input.submit(submitColor);
		expect(service.activeColor).toEqual(submitColor);
	});

});
