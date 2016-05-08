import { Component } from '@angular/core';
import { ActiveColorController } from './components/active-color-ctrl/ActiveColorController';
import { PaletteController } from './components/palette-ctrl/PaletteController';
import { ActiveColorService } from './services/ActiveColorService';
import { ActiveColorOutputDirective } from './directives/active-color-output/ActiveColorOutput.directive';

@Component({
	selector: 'app',
	templateUrl: 'app/app.html',
	styleUrls: ['built/css/app.css'],
	directives: [ActiveColorController, PaletteController, ActiveColorOutputDirective],
	providers: [ActiveColorService]
})

export class App {
	appTitle: string = "Palette";
	appVersion: string = "v0.4.3";

	constructor(private _activeColorService: ActiveColorService) {}
}
