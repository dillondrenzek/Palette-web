import { Component, Output, Input } from 'angular2/core';
import { ColorDisplay } from './color-display.component';
import { ColorInput } from './color-input.component';
import { ColorService } from './color.service';

@Component({
	selector: 'palette-app',
	template: `
		<h1>Palette</h1>
		<div id="centered-display">
			<color-display></color-display>
			<color-input></color-input>
		</div>
		`,
	directives: [ColorDisplay, ColorInput],
	styles:[`
		palette,
		color-display,
		color-input {
			display: block;
		}

		color-display {
			width: 100%;
			height: 100%;
		}

		color-input {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

		}

		#centered-display {
			border: #aeaeae;
			width: 50%;
			height: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
		}
	`],
	providers: [ColorService]
})

export class PaletteApp {
	currentColor: string = '#1d5a65';

	constructor(private colorService: ColorService) {
		colorService.setColor$.subscribe(color => {
			this.currentColor = color;
			console.log('currentColor set:', color);
		});
	}

	ngOnInit(){
		this.colorService.setColor(this.currentColor);
	}
}
