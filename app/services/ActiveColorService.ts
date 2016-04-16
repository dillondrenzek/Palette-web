import { Component, Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';
import { Color } from '../models/Color';

@Injectable()

export class ActiveColorService {

	private _activeColorSource = new Subject<Color>();
	activeColor$ = this._activeColorSource.asObservable();

	private _activeColor: Color;

	constructor(color?: any) {
		console.log(color);

		if (typeof color === 'string') {
			this._activeColor = new Color(color);
		}
		else if (color instanceof Color && typeof color.rgbString === 'string') {
			this._activeColor = new Color(color.rgbString);
		}
		else {
			this._activeColor = new Color('rgb(0,0,0)');
		}
	}

	private _init(color?: any) {

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
