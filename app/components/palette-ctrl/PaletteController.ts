import { Component, Input, Inject } from 'angular2/core';
import { Color } from '../../models/Color';
import { ColorOutput } from '../../directives/color-output/ColorOutput';
import { ActiveColorService } from '../../services/ActiveColorService';

@Component({
	selector: 'palette-ctrl',
	templateUrl: 'app/components/palette-ctrl/palette-ctrl.html',
	styleUrls: ['built/css/components/palette-ctrl/palette-ctrl.css'],
	directives: [ColorOutput]
})

export class PaletteController {

	colors: Color[] = [];

	constructor(@Inject(ActiveColorService) private _activeColorService: ActiveColorService){}

	saveActiveColor() {
		var color: Color = this._activeColorService.getActiveColor();
		var copy_color = new Color(color.rgbString);
		this.colors.push(copy_color);
		console.info('colors:', this.colors);
	}

	clear() {
		this.colors = [];
	}

}
