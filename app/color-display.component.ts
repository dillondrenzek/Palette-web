import { Component, Input } from 'angular2/core';
import { ColorService } from './color.service';

@Component({
	selector: 'color-display',
	template: `
		<div [style.backgroundColor]="color"></div>
	`,
	styles: [`
		div {
			height: 150px;
			width: 150px;
			border: 1px solid black;
		}
	`]
})

export class ColorDisplay {
	@Input() color: string;

	constructor(private colorService: ColorService){
		colorService.setColor$.subscribe(
			color => {
				this.color = color;
			}
		)
	}
}
