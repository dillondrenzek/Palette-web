import { Component } from 'angular2/core';
import { ColorOutput } from './components/ColorOutput';
import { ColorInput } from './components/ColorInput';
import { Color } from './models/Color';
import { ActiveColorService } from './services/ActiveColorService';

@Component({
	selector: 'app',
	templateUrl: 'app/palette.html',
	styleUrls: ['built/css/palette.css'],
	directives: [ColorOutput, ColorInput],
	providers: [ActiveColorService]
})

export class Palette {
	appTitle: string = "Palette";
	appVersion: string = "v0.2.5";

	constructor(private _activeColorService: ActiveColorService) {

	}

	ngOnInit() {
		var c: Color = new Color('rgb(145,34,56)');
		this._activeColorService.setActiveColor(c);
	}
}
