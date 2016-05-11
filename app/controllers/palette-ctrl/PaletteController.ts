import { Component, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Color } 					from '../../models/Color';
import { ColorOutputDirective } 	from '../../directives/color-output/ColorOutput.directive';
import { ActiveColorService } 		from '../../services/ActiveColorService';

@Component({
	selector: 'palette-ctrl',
	templateUrl: 'app/controllers/palette-ctrl/palette-ctrl.html',
	styleUrls: ['built/css/controllers/palette-ctrl/palette-ctrl.css'],
	directives: [ColorOutputDirective]
})

export class PaletteController {

	colors: Color[] = [];
	requestColor = new EventEmitter<()=>void>();

	constructor(@Inject(ActiveColorService) private _activeColorService: ActiveColorService){}


	addColor(c: Color) {

		this.colors.push(c);
		console.info('Added', c);
		console.info('colors', this.colors);
	}

	saveActiveColor() {
		// var color: Color = this._activeColorService.getActiveColor();
		// var copy_color = new Color(color.rgbString);
		// this.colors.push(copy_color);
		// console.info('colors:', this.colors);

		this.addColor(this._activeColorService.activeColor);
	}

	clear() {
		this.colors = [];
	}

}
