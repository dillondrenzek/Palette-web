import { Directive, ElementRef, Input, HostBinding } from 'angular2/core';
import { Color } from '../../models/Color';
import { ActiveColorService } from '../../services/ActiveColorService';

/////////////////////////////////
// ActiveColorOutput Directive //
/////////////////////////////////

@Directive({
	selector: '[active-color-output], [active-color-background]'
})

export class ActiveColorOutputDirective {

	@HostBinding('style.backgroundColor') backgroundColor: string;
	
	private _element: Element;


	constructor(
	private _el: ElementRef,
	private _activeColorService: ActiveColorService) {

		// save element ref
		this._element = _el.nativeElement;

		// subscribe to active color service
		_activeColorService.activeColor$.subscribe((color) => {
			this.color = color;
			this.setAttributeModes();
		});

	}

	private _output: number;
	get output(): number {
		var m = this.mode;

		if (m === 'r') { return this.color.red; }
		if (m === 'g') { return this.color.green; }
		if (m === 'b') { return this.color.blue; }
		if (m === 'h') { return this.color.hue; }
		if (m === 's') { return this.color.saturation; }
		if (m === 'l') { return this.color.lightness; }
		return 0;
	}


	private _color: Color;
	get color(): Color { return this._color; }
	set color(c: Color) {
		this._color = c;
	}

	setAttributeModes(){
		if (this._element.hasAttribute('active-color-background')) {
			this.backgroundColor = this.color.rgbString;
		}
	}

	ngOnInit() {
	}

}
