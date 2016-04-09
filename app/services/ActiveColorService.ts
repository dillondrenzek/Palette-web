import { Injectable } from 'angular2/core';
import { Color } from '../models/Color';

@Injectable()
export class ActiveColorService {

	activeColor: string = "#b8bb26";

	constructor() {}
	getActiveColor():string{
		return this.activeColor;
	}
	setActiveColor(color: string){
		if (Color.isValid(color)) {
			this.activeColor = color;
		} else {
			throw new Error('Tried to set an invalid activeColor');
		}
	}
}
