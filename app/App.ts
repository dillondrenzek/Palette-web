import { Component } from 'angular2/core';
import { ActiveColorController } from './components/active-color-ctrl/ActiveColorController';
import { PaletteController } from './components/palette-ctrl/PaletteController';
import { ActiveColorService } from './services/ActiveColorService';

@Component({
	selector: 'app',
	templateUrl: 'app/app.html',
	styleUrls: ['built/css/app.css'],
	directives: [ActiveColorController, PaletteController],
	providers: [ActiveColorService]
})

export class App {
	appTitle: string = "Palette";
	appVersion: string = "v0.4.1";

	constructor(private _activeColorService: ActiveColorService) {}
}
