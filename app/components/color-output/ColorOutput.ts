import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Color } from '../../models/Color';
import { ActiveColorService } from '../../services/ActiveColorService';

// Supported Directives
import { BackgroundColorOutputDirective } from './BackgroundColorOutput.directive';

@Component({
	selector: 'color-output',
	templateUrl: `app/components/color-output/color-output.html`,
	styleUrls: [`built/css/components/color-output/color-output.css`],
	directives: [
		BackgroundColorOutputDirective,
	]
})

export class ColorOutput {

	@Input() color: Color;

	ngOnChanges(change: any) {
		let colorChange = change.color;

		if (colorChange && colorChange.currentValue) {
			console.info('ColorOutput color', this.color);
		}
	}
}
