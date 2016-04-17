import { Component, Input } from 'angular2/core';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

@Component({
	selector: 'color-input',
	template: `
	<label *ngIf="label" [style.width.px]='80'>{{label}}</label>
	<input #self [value]="output" (keyup.enter)="setColor(self.value)"/>
	`,
	styles: [``]
})

export class ColorInput {

	color: Color;
	@Input() mode: string;
	@Input() label: string;

	constructor(private _activeColorService: ActiveColorService) {
		_activeColorService.activeColor$.subscribe((color) => {
			this.color = color;
		});
	}

	setColor (s: string){

		if (this.mode) {

		}

		this._activeColorService.setActiveColorString(s);
	}

	ngOnChanges() {

	}

	get output(): any {

		if (this.mode) {
			if (this.color[this.mode]) {
				return this.color[this.mode];
			} else {
				var m = this.mode;
				if (m === 'r') { return this.color.red; }
				if (m === 'g') { return this.color.green; }
				if (m === 'b') { return this.color.blue; }
				if (m === 'h') { return this.color.hue; }
				if (m === 's') { return this.color.saturation; }
				if (m === 'l') { return this.color.lightness; }
			}
		}
		return this.color.rgbString;
	}

	outputWithMode(m: string) {
		if (m === 'r') { return this.color.red; }
		if (m === 'g') { return this.color.green; }
		if (m === 'b') { return this.color.blue; }
		if (m === 'h') { return this.color.hue; }
		if (m === 's') { return this.color.saturation; }
		if (m === 'l') { return this.color.lightness; }
	}
}
