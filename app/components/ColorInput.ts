import { Component } from 'angular2/core';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

@Component({
	selector: 'color-input',
	template: `<input [value]="color.rgb()"/>`,
	styles: [`

		`]
})

export class ColorInput {

	color: Color;

	constructor(private _activeColorService: ActiveColorService) {
		this.color = _activeColorService.getActiveColor();
	}

	ngOnInit() {
	}
}
