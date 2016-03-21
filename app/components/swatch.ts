import { Component, Input } from 'angular2/core';


@Component({
	selector: 'swatch',
	template: `
		<div [(style.backgroundColor)]="color"
			[style.height.px]="height"
			[style.width.px]="width"></div>
	`,
	styles:[`
		div {
			height: 250px;
			width: 250px;
		}
		`]
})

export class Swatch {
	@Input() color: string;
	@Input() width: string;
	@Input() height: string;
}
