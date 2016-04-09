import { Component } from 'angular2/core';

@Component({
	selector: 'app',
	templateUrl: 'app/palette.html',
	styleUrls: ['built/css/palette.css'],
	directives: [],
	providers: []
})

export class Palette {
	appTitle: string = "Palette";

	constructor(){}
}
