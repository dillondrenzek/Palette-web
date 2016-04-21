import { Component } from 'angular2/core';
import { ActiveColorController } from './components/active-color-ctrl/ActiveColorController';

@Component({
	selector: 'app',
	templateUrl: 'app/app.html',
	styleUrls: ['built/css/app.css'],
	directives: [ActiveColorController]
})

export class App {
	appTitle: string = "Palette";
	appVersion: string = "v0.3.0";

	constructor() {}
}
