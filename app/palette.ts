import { Component } from 'angular2/core';
import { ColorOutput } from './components/color-output/ColorOutput';
import { ActiveColorInput } from './components/active-color-input/ActiveColorInput';
import { Color } from './models/Color';
import { ActiveColorService } from './services/ActiveColorService';

@Component({
	selector: 'app',
	templateUrl: 'app/palette.html',
	styleUrls: ['built/css/palette.css'],
	directives: [ColorOutput, ActiveColorInput],
	providers: [ActiveColorService]
})

export class Palette {
	appTitle: string = "Palette";
	appVersion: string = "v0.2.9";

	defaultColor: Color = new Color('rgb(145,145,56)');

	constructor(private _activeColorService: ActiveColorService) {}

	ngOnInit() {
		this._activeColorService.setActiveColor(this.defaultColor);
	}
}
