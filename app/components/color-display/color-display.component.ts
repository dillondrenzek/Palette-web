import { Component, Input } from 'angular2/core';
import { ColorService } from '../../services/color.service';

@Component({
	selector: 'color-display',
	template: `
		<div [style.backgroundColor]="color"></div>
	`,
	styles: [`
		div {
			height: 100%;
			width: 100%;
		}
	`]
})

export class ColorDisplay {
	color: string;

	constructor(private colorService: ColorService){
		colorService.setColor$.subscribe((color) => {
			this.color = color;
		});
	}
}
