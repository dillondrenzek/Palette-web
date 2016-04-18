import { Component } from 'angular2/core';
import { ActiveColorController } from './components/active-color-ctrl/ActiveColorController';

@Component({
	selector: 'app',
	templateUrl: 'app/palette.html',
	styleUrls: ['built/css/palette.css'],
	directives: [ActiveColorController]
})

export class Palette {
	appTitle: string = "Palette";
	appVersion: string = "v0.2.9";

	constructor() {}
}
