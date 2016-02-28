import { Component, Input } from 'angular2/core'

@Component({
	selector: 'color-display',
	template: `
		<div [style.backgroundColor]="color">
		</div>
	`,
	styles: [`
		div {
			height: 150px;
			width: 150px;
		}
	`]
})

export class ColorDisplay {
	@Input() color: string;

}
