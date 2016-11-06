import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Color } from '../Color';
import { randomColor } from '@palette/generators';

@Component({
  selector: 'color-editor',
  templateUrl: './colorEditor.html',
  styleUrls: ['./colorEditor.css'],
  moduleId: module.id
})
export class ColorEditorComponent {

  @Input() color: Color;

  @Output() colorChange = new EventEmitter<Color>();

  @Output() colorSave = new EventEmitter<Color>();

  // template method for coloring the swatch's background
  get swatchBackground(): string {
    return this.color.toRgbString();
  }

  ////////////////////
  // Event Handlers //
  ////////////////////

  /**
   * Event handler for `ColorInput` value changes
   */
  onColorInputChange(c: Color) {
    this.color = c;
  }

  /**
   * Event handler for when 'Save' button is clicked
   */
  onSaveClick() {
    this.colorSave.emit(this.color);
  }

  /**
   * Event handler for when 'Random' button is clicked
   */
  onRandomClick() {
    this.color = randomColor();
    this.colorChange.emit(this.color);
  }
}
