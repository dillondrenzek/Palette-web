import { Component, Output, Input } from 'angular2/core';
import { ColorDisplay } from './color-display.component';
import { ColorInput } from './color-input.component';
import { ColorService } from './color.service';

@Component({
	selector: 'palette-app',
	template: `
		<div id="overlay">
			<h1>Palette</h1>
		</div>
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

		#centered-display,
		#overlay {
			width: 100%;
			height: 100%;
			position: absolute;
		}

		#centered-display {
			z-index: 0;
		}

		#overlay {
			z-index: 10;
		}

		h1 {
			padding: 15px;
			font-family: helvetica;
			letter-spacing: -0.025em;
			font-size: 2rem;
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
