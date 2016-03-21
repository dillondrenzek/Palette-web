import { Component } from 'angular2/core';
import { Swatch } from './components/swatch';
import { ActiveColorService } from './services/active-color-service';

@Component({
	selector: 'app',
	templateUrl: 'app/palette.html',
	styleUrls: ['built/css/palette.css'],
	directives: [Swatch],
	providers: [ActiveColorService]
})

export class Palette {
	appTitle: string = "Palette";

	constructor(private _activeColorService: ActiveColorService){}
}
