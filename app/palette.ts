import { Component } from 'angular2/core';
import { Swatch } from './components/swatch';

@Component({
	selector: 'app',
	templateUrl: 'app/palette.html',
	styleUrls: ['built/css/palette.css'],
	directives: [Swatch]
})

export class Palette {
	appTitle: string = "Palette";
}
