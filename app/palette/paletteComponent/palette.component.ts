import { Component, Input } from '@angular/core';

import { Palette } from '../Palette';

@Component({
  selector: 'palette',
  templateUrl: './palette.html',
  styleUrls: ['./palette.css'],
  moduleId: module.id
})
export class PaletteComponent {

  @Input() palette: Palette;

}
