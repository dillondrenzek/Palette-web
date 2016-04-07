import { Component, Input } from 'angular2/core';

import { ActiveColorService } from '../services/active-color-service';
import { Color } from '../models/Color';


@Component({
	selector: 'swatch',
	template: `
		<input type="text" (keyup.enter)=""/>
	`,
	styles:[],
	providers: [ActiveColorService]
})

export class ColorInput {
	color: string;

	constructor ( private _activeColorService: ActiveColorService ) { }

	ngOnInit() {
		this.color = this._activeColorService.activeColor;
	}
	submit(color: string) {
		if (Color.isValid(color)){
			this._activeColorService.setActiveColor(color);
		}
	}
}
