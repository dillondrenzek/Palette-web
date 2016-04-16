import { Component, Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';
import { Color } from '../models/Color';

@Injectable()

export class ActiveColorService {

	private _activeColorSource = new Subject<Color>();
	activeColor$ = this._activeColorSource.asObservable();

	private _activeColor: Color;

	constructor() {
		// this._activeColor = new Color('rgb(145,34,56)');
		// this._activeColorSource.next(this._activeColor);
	}

	get activeColor(): Color { return this._activeColor; }
	getActiveColor(): Color { return this._activeColor; }
	setActiveColor(c: Color) {
		this._activeColor = c;
		this._activeColorSource.next(c);
	}

	setActiveColorString(s: string) {
		var c = new Color(s);
		this.setActiveColor(c);
	}

}
