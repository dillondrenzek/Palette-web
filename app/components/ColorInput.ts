import { Component, Input, Output } from 'angular2/core';

import { ActiveColorService } from '../services/ActiveColorService';
import { Color } from '../models/Color';


@Component({
	selector: 'color-input',
	template: `
		<input #box type="text" (keyup.enter)="box.value" [value]="color" />
	`,
	styles:[],
	providers: [ActiveColorService]
})

export class ColorInput {
	@Input() color: string;

	constructor ( private _activeColorService: ActiveColorService ) {
		this.color = this._activeColorService.getActiveColor();
	}

	ngOnInit() {

	}

	submit(color: string) {
		if (Color.isValid(color)){
			this._activeColorService.setActiveColor(color);
		}
	}
}
