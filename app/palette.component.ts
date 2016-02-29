import { Component, Output, Input } from 'angular2/core';
import { ColorDisplay } from './color-display.component';
import { ColorInput } from './color-input.component';
import { ColorService } from './color.service';

@Component({
	selector: 'palette',
	template: `
		<h1>Palette</h1>
		<color-display [color]="currentColor"></color-display>
		<color-input [color]="currentColor"></color-input>
		`,
	directives: [ColorDisplay, ColorInput],
	styles:[`
		color-display,
		color-input {
			display: block;
		}
	`],
	providers: [ColorService]
})

export class Palette {
	currentColor: string = '#b23b23';

	constructor(private colorService: ColorService) {
		colorService.setColor$.subscribe(color => {
			this.currentColor = color;
			console.log('currentColor set:', color);
		})

		colorService.setColor('#1ce');
		colorService.setColor('#b23b23');
	}
}
