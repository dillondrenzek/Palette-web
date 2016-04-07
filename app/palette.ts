import { Component } from 'angular2/core';
import { Swatch } from './components/Swatch';
import { ActiveColorService } from './services/ActiveColorService';
import { ColorInput } from './components/ColorInput';

@Component({
	selector: 'app',
	templateUrl: 'app/palette.html',
	styleUrls: ['built/css/palette.css'],
	directives: [Swatch, ColorInput],
	providers: [ActiveColorService]
})

export class Palette {
	appTitle: string = "Palette";

	constructor(private _activeColorService: ActiveColorService){}
}
