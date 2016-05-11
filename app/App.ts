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
	appVersion: string = "v0.4.3";

	defaultColor: Color = new Color('rgb(213,75,32)');

	constructor(private _activeColorService: ActiveColorService) {}

	get activeColor(): Color { return this._activeColorService.activeColor; }
	set activeColor(c: Color) { this._activeColorService.setActiveColor(c); }

	ngAfterViewInit() {
		this.activeColor = this.defaultColor;
	}

	setActiveColor(c: Color) {
		this.activeColor = c;
	}

	getActiveColor(callback: () => void) {
		console.info('getActiveColor(',callback,')');
		callback(this.activeColor);
	}
}
