import { Component } from 'angular2/core';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

@Component({
	selector: 'color-input',
	template: `<input #self [value]="color.rgbString" (keyup.enter)="setColor(self.value)"/>`,
	styles: [``]
})

export class ColorInput {

	color: Color;

	constructor(private _activeColorService: ActiveColorService) {
		_activeColorService.activeColor$.subscribe((color) => {
			this.color = color;
		});
	}

	setColor (s: string){
		this._activeColorService.setActiveColorString(s);
	}
}
