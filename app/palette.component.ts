import { Component, Output } from 'angular2/core';
import { ColorDisplay } from './color-display.component';

@Component({
	selector: 'palette',
	template: `
		<h1>Palette</h1>
		<color-display [color]="currentColor"></color-display>
		`,
	directives: [ColorDisplay],
	styles:[`
		color-display: {
			display: block;
		}
	`]
})

export class Palette {
	currentColor: string = '#b23b23';


}
