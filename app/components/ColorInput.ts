import { Component } from 'angular2/core';
import { Color } from '../models/Color';

@Component({
	selector: 'color-input',
	template: `<input [value]="color.rgb()"/>`,
	styles: [`
		
		`]
})

export class ColorInput {

	color: Color;

	ngOnInit() {
		this.color = new Color('rgb(12,34,56)');
	}
}
