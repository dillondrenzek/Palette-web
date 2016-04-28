import { Component } from 'angular2/core';
import { ActiveColorController } from './components/active-color-ctrl/ActiveColorController';
import { PaletteController } from './components/palette-ctrl/PaletteController';

@Component({
	selector: 'app',
	templateUrl: 'app/app.html',
	styleUrls: ['built/css/app.css'],
	directives: [ActiveColorController, PaletteController]
})

export class App {
	appTitle: string = "Palette";
	appVersion: string = "v0.4.1";

	constructor() {}
}
