import { Component, Input, HostBinding } from '@angular/core';

import { Color } from '../Color';

@Component({
  selector: 'color',
  templateUrl: './color.html',
  styleUrls: ['./color.css'],
  moduleId: module.id
})
export class ColorComponent {

  // Private color reference
  private _color: Color;


  /**
   * inputColor
   */
  @Input('input')
  set inputColor(c: Color) {
    this._color = c;
    this.background = c.toString();
  }

  get inputColor(): Color {
    return this._color;
  }

  /**
   * Background
   */
  @HostBinding('style.backgroundColor') background: string;
}
