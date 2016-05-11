import { Component, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Color } 					from '../../models/Color';
import { ActiveColorService } 		from '../../services/ActiveColorService';
import { ColorOutput }				from '../../components/color-output/ColorOutput';

@Component({
	selector: 'palette-ctrl',
	templateUrl: 'app/controllers/palette-ctrl/palette-ctrl.html',
	styleUrls: ['built/css/controllers/palette-ctrl/palette-ctrl.css'],
	directives: [
		ColorOutput
	]
})

export class PaletteController {


}
