import { Component } from 'angular2/core';
import { ColorOutput } from './components/ColorOutput';
import { ColorInput } from './components/ColorInput';

@Component({
	selector: 'app',
	templateUrl: 'app/palette.html',
	styleUrls: ['built/css/palette.css'],
	directives: [ColorOutput, ColorInput],
	providers: []
})

export class Palette {
	appTitle: string = "Palette";

	constructor(){}
}
