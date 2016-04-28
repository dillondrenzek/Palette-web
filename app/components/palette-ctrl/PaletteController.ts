import { Component, Input } from 'angular2/core';
import { Color } from '../../models/Color';
import { ColorOutput } from '../../directives/color-output/ColorOutput';

@Component({
	selector: 'palette-ctrl',
	templateUrl: 'app/components/palette-ctrl/palette-ctrl.html',
	directives: [ColorOutput],
	host: {
	}
})

export class PaletteController {

	colors: Color[] = [
		new Color('rgb(0,0,0)');

	]

}
