import { Component, Input } from 'angular2/core';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

@Component({
	selector: 'color-output',
	template: `<div [style.backgroundColor]="color.rgbString"></div>`,
	styles: [`
		div {
			display: block;
			min-width: 100px;
			min-height: 100px;
		}
		`]
})

export class ColorOutput {

	@Input() mode: any;
	private _output: number;


	color: Color;

	constructor(private _activeColorService: ActiveColorService) {
		_activeColorService.activeColor$.subscribe((color) => {
			this.color = color;
		});
	}

	ngOnInit() {
	}

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
