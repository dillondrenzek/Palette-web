import { Component, Input } from '@angular/core';
import { Color } from '../../models/Color';
import { ActiveColorService } from '../../services/ActiveColorService';

@Component({
	selector: 'active-color-output',
	template: `<div [style.backgroundColor]="color.rgbString"></div>`,
	styleUrls: ['built/css/components/active-color-output/active-color-output.css']
})

export class ActiveColorOutput {

	@Input() mode: any;



	color: Color;

	constructor(private _activeColorService: ActiveColorService) {
		_activeColorService.activeColor$.subscribe((color) => {
			this.color = color;
		});
	}



	private _output: number;
	get output(): number {
		var m = this.mode;

		if (m === 'r') { return this.color.red; }
		if (m === 'g') { return this.color.green; }
		if (m === 'b') { return this.color.blue; }
		if (m === 'h') { return this.color.hue; }
		if (m === 's') { return this.color.saturation; }
		if (m === 'l') { return this.color.lightness; }
		return 0;
	}



}
