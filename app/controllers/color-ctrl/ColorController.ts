import { Component, Inject, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Color } 					from '../../models/Color';
import { ColorInput } 				from '../../components/color-input/ColorInput';
import { ColorOutput }				from '../../components/color-output/ColorOutput';
import { ActiveColorService } 		from '../../services/ActiveColorService';

@Component({
	selector: 'color-ctrl',
	templateUrl: 'app/controllers/color-ctrl/color-ctrl.html',
	styleUrls: ['built/css/controllers/color-ctrl/color-ctrl.css'],
	directives: [
		ColorInput,
		ColorOutput
	]
})

export class ColorController {

	// Getter/Setter References
	private _color: Color;

	constructor(
		private _cdr: ChangeDetectorRef,
		@Inject(ActiveColorService) private _activeColorService: ActiveColorService
	) {
		this._activeColorService.activeColor$.subscribe(
			(activeColor) => { this.color = activeColor; }
		)
	}

	// Getters & Setters
	get color(): Color 	{
		return this._color;
	}
	set color(c: Color) {
		this._color = c;
		this._cdr.detectChanges();
	}

}
