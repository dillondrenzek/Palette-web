import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Color } 					from '../../models/Color';
import { ColorInput } 				from '../../components/color-input/ColorInput';
import { ColorOutputDirective } 	from '../../directives/color-output/ColorOutput.directive';

@Component({
	selector: 'color-ctrl',
	templateUrl: 'app/controllers/color-ctrl/color-ctrl.html',
	styleUrls: ['built/css/controllers/color-ctrl/color-ctrl.css'],
	directives: [
		ColorInput,
		ColorOutputDirective
	]
})

export class ColorController {

	@Input() color: Color;
	@Output() colorChanged = new EventEmitter<Color>();

	ngOnChanges(change: any) {
		if (change.color && change.color.currentValue) {
			console.info('ColorController color:', this.color);
		}
	}
}
