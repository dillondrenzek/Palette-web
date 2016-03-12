import { Component, Input, Output, EventEmitter, OnDestroy } from 'angular2/core';
import { ColorService } from '../../services/color.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'color-input',
	template: `
	<div>
		<input #box type="text" name="color" (keyup.enter)="submitColor(box.value)" value="{{color}}">
	</div>
	`,
	styles: [`
		input[type="text"] {
			display: block;
			margin: 0 auto;
			width: 100%;
			font-family: sans-serif;
			font-size: 3rem;
			appearance: none;
			box-shadow: none;
			border-radius: none;
			border: none;
			border-bottom: 2px solid #eaeaea;
			text-align: center;
			font-style: bold;
			color: white;
			background: none !important;
			outline: none;
			text-transform: uppercase;
		}

		input:-webkit-autofill {
			background-color: none;
		}

		input[type="text"]:focus {
			background: none;
		}
		`]
})

export class ColorInput implements OnDestroy {
	color: string;

	constructor(private colorService: ColorService) {
		colorService.setColor$.subscribe((color) => {
			this.color = color;
		});
	}

	submitColor(color:string){
		if (color[0] !== '#'){
			color = '#'.concat(color);
		}
		this.colorService.setColor(color);
	}

	ngOnDestroy(){}
}
