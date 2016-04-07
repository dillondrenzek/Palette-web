import { Component, Input } from 'angular2/core';

import { ActiveColorService } from '../services/ActiveColorService';


@Component({
	selector: 'swatch',
	template: `
		<div [style.backgroundColor]="color"
			[style.height.px]="height"
			[style.width.px]="width"></div>
	`,
	styles:[`
		div {
			height: 250px;
			width: 250px;
		}
		`],
	providers: [ActiveColorService]
})

export class Swatch {
	@Input() color: string;
	@Input() width: string;
	@Input() height: string;

	constructor ( private _activeColorService: ActiveColorService ) { }

	ngOnInit() {
		this.color = this._activeColorService.activeColor;
	}
}
