import { Component, Input } from 'angular2/core';
import { Color } from '../models/Color';

@Component({
	selector: 'color-output',
	template: `<div [style.backgroundColor]="color.rgb()"></div>`,
	styles: [`
		div {
			display: block;
			width: 200px;
			height: 200px;
		}
		`]
})

export class ColorOutput {

	color: Color;

	constructor() {

	}

	ngOnInit() {
		this.color = new Color('rgb(12,34,56)');
	}

}
