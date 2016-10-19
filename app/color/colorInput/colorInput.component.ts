import { Component, Input, HostBinding } from '@angular/core';

import { Color } from '../Color';

@Component({
  selector: 'color-input',
  templateUrl: './colorInput.html',
  styleUrls: ['./colorInput.css'],
  moduleId: module.id
})
export class ColorInputComponent {

  // Private color reference
  private _color: Color;

  private _displayFields: string[] = ['red', 'green', 'blue'];

  /**
   * inputColor
   */
  @Input()
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
