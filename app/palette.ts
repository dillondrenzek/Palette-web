import { Component } from 'angular2/core';
import { ColorOutput } from './components/ColorOutput';

@Component({
	selector: 'app',
	templateUrl: 'app/palette.html',
	styleUrls: ['built/css/palette.css'],
	directives: [ColorOutput],
	providers: []
})

export class Palette {
	appTitle: string = "Palette";

	constructor(){}
}
