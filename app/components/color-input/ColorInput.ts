import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Color } from '../../models/Color';
import { ActiveColorService } from '../../services/ActiveColorService';

@Component({
	selector: 'color-input',
	templateUrl: `app/components/color-input/color-input.html`,
	styleUrls: [`built/css/components/color-input/color-input.css`]
})

export class ColorInput {

	// Getter/Setter References
	private _label: string;


	@Input() color: Color;
	@Input() mode: string;

	// Angular Methods
	constructor() {}

	ngOnChanges() {}

	///////////////////////
	// Getters & Setters //
	///////////////////////


	@Input()
	get label(): string { return this.mode.toUpperCase().charAt(0); }
	set label(l: string) {
		this._label = l;
	}



	get output(): string {
		if (this.mode) {
			return this.outputWithMode(this.mode);
		}
		return this.color.rgbString;
	}

	outputWithMode(m: string): string {
		var _output;
		if (m === 'r') { _output = this.color.red; }
		if (m === 'g') { _output = this.color.green; }
		if (m === 'b') { _output = this.color.blue; }
		if (m === 'h') { _output = this.color.hue; }
		if (m === 's') { _output = this.color.saturation; }
		if (m === 'l') { _output = this.color.lightness; }
		return _output.toString();
	}

	didFocusInput(e: any) {
		console.info('focus input:', e);
	}

	didBlurInput(e: any) {
		console.info('blur input:', e);
	}
}
