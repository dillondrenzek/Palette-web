import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Controllers
import { ColorController } from './controllers/color-ctrl/ColorController';
import { PaletteController } from './controllers/palette-ctrl/PaletteController';

// Services
import { ActiveColorService } from './services/ActiveColorService';

// Models
import { Color } from './models/Color';



@Component({
	selector: 'app',
	templateUrl: 'app/app.html',
	styleUrls: ['built/css/app.css'],
	directives: [
		ColorController,
		PaletteController
	],
	providers: [ActiveColorService]
})

export class App {
	appTitle: string = "Palette";
	appVersion: string = "v0.4.5";

	defaultColor: Color = new Color('rgb(213,75,32)');

	constructor(private _activeColorService: ActiveColorService) {}

	ngAfterViewInit() {
		console.info('setting default color:', this.defaultColor.rgbString);
		this._activeColorService.setActiveColor(this.defaultColor);

	}
}
