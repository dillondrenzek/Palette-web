import { Component, Injectable } from 'angular2/core';
import { Color } from '../models/Color';

@Injectable()

export class ActiveColorService {

	activeColor: Color;

	constructor() {
		this.activeColor = new Color('rgb(145,34,56)');
	}

	getActiveColor(): Color {
		return this.activeColor;
	}

	setActiveColor(c: Color) {
		this.activeColor = c;
	}

}
