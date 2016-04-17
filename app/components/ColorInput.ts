import { Component, Input } from 'angular2/core';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

@Component({
	selector: 'color-input',
	template: `
	<label class="form-label col-xs-2" *ngIf="label">{{label}}</label>
	<input type="text" class="form-control col-xs-10" #self [value]="output" (keyup.enter)="submit(self.value)"/>
	`,
	styles: [`
		// label {
		// 	text-align: center;
		// }
		//
		// input {
		// 	text-align: center;
		// 	font-size: 2rem;
		// 	width: 100%;
		// 	margin: 0 auto;
		// 	padding: 10px 0;
		// 	-webkit-appearance: none;
		// }
		`]
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

	ngOnChanges() {

	}

	get output(): string {
		if (this.mode) {
			return this.outputWithMode(this.mode);
		}
		return this.color.rgbString;
	}

	outputWithMode(m: string): string {
		if (m === 'r') { return this.color.red.toString(); }
		if (m === 'g') { return this.color.green.toString(); }
		if (m === 'b') { return this.color.blue.toString(); }
		if (m === 'h') { return this.color.hue.toString(); }
		if (m === 's') { return this.color.saturation.toString(); }
		if (m === 'l') { return this.color.lightness.toString(); }
	}

	submit(s: string) {
		this.setColor(s, this.mode);
	}

	setColor (value: string, mode?: string){
		if (mode) {
			var newColor = this.color;
			newColor[this.mode] = parseInt(value);
			this._activeColorService.setActiveColor(newColor);
		} else {
			this._activeColorService.setActiveColorString(value);
		}
	}


}
