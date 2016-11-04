import { Component, Input, HostBinding } from '@angular/core';
import { Color } from '../Color';

@Component({
  selector: 'color-swatch',
  templateUrl: './colorSwatch.html',
  styleUrls: ['./colorSwatch.css'],
  moduleId: module.id
})
export class ColorSwatch {


  @Input() color: Color;

  // Square swatch only
  @HostBinding('style.height.px')
  @HostBinding('style.width.px')
  @Input() size: number = 0;

  @HostBinding('style.background')
  get background(): string { return (this.color) ? this.color.toRgbString() : 'none'; }

}
