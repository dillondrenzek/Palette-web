import { Component } from 'angular2/core';
import { ActiveColorOutput } from '../active-color-output/ActiveColorOutput';
import { ActiveColorInput } from '../active-color-input/ActiveColorInput';
import { ActiveColorService } from '../../services/ActiveColorService';
import { Color } from '../../models/Color';

@Component({
	selector: 'active-color-ctrl',
	templateUrl: 'app/components/active-color-ctrl/active-color-ctrl.html',
	directives: [ActiveColorOutput, ActiveColorInput],
	providers: [ActiveColorService]
})

export class ActiveColorController {

	defaultColor: Color = new Color('rgb(145,145,56)');

	constructor(private _activeColorService: ActiveColorService) {}

	ngOnInit() {
		this._activeColorService.setActiveColor(this.defaultColor);
	}
}
