import { Component, Input } from 'angular2/core';
import { Color } from '../models/Color';
import { ActiveColorService } from '../services/ActiveColorService';

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

	constructor(private _activeColorService: ActiveColorService) {
		this.color = this._activeColorService.getActiveColor();
	}

	ngOnInit() {
	}

}
