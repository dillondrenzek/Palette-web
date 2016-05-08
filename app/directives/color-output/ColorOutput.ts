import { Component, Input } from '@angular/core';
import { Color } from '../../models/Color';
// import { ActiveColorService } from '../../services/ActiveColorService';

@Component({
	selector: 'color-output',
	template: `<div [style.backgroundColor]="color.rgbString" [style.height.px]="height" [style.width.px]="width"></div>`,
	styles: [`
		div {
			width: 100%;
			height: 100%;
		}`],
	host: {
		'[style.width.px]': 'width',
		'[style.height.px]': 'height'
	}
})

export class ColorOutput {


	@Input() width: number;
	@Input() height: number;
	@Input() color: Color;

}
