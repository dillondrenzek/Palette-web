import { Directive, ElementRef, Input, HostBinding, ChangeDetectorRef } from '@angular/core';
import { Color } from '../../models/Color';

/////////////////////////////////
// ActiveColorOutput Directive //
/////////////////////////////////

@Directive({
	selector: '[color-background]'
})

export class BackgroundColorOutputDirective {

	@HostBinding('style.backgroundColor') background: string;

	private _element: Element;

	constructor(
	private _el: ElementRef,
	private _cdr: ChangeDetectorRef) {

		// save element ref
		this._element = _el.nativeElement;

	}





	// Getters & Setters //

	private _color: Color;
	get color(): Color { return this._color; }
	set color(c: Color) { this._color = c; }



	private _backgroundColor: Color;
	@Input('color-background')
	get backgroundColor(): Color { return this._backgroundColor; }
	set backgroundColor (bgC: Color) {
		this._backgroundColor = bgC;
		this.background = (this._backgroundColor) ? this._backgroundColor.rgbString : 'transparent';
	}
}
