import { Component, Inject } from '@angular/core';
import { ActiveColorOutputDirective } from '../../directives/active-color-output/ActiveColorOutput.directive';
import { ActiveColorInput } from '../active-color-input/ActiveColorInput';
import { ActiveColorService } from '../../services/ActiveColorService';
import { Color } from '../../models/Color';

@Component({
	selector: 'active-color-ctrl',
	templateUrl: 'app/components/active-color-ctrl/active-color-ctrl.html',
	styleUrls: ['built/css/components/active-color-ctrl/active-color-ctrl.css'],
	directives: [ActiveColorOutputDirective, ActiveColorInput]
})

export class ActiveColorController {

	defaultColor: Color = new Color('rgb(213,75,32)');
	color: Color;

	constructor(
		private _activeColorService: ActiveColorService) {
			_activeColorService.activeColor$.subscribe((color) => {
				this.color = color;
			});
		}

	ngOnInit() {
		this._activeColorService.setActiveColor(this.defaultColor);
	}

	getActiveColor(): Color {
		return this._activeColorService.activeColor;
	}
}
